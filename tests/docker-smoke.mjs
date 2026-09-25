import { randomUUID } from "node:crypto";

// Run against a disposable local Compose stack. Each run leaves one clearly
// labelled synthetic request in that stack's database; no live host is allowed.
const base = new URL(process.env.SMOKE_BASE_URL || "http://127.0.0.1:18787");
const adminEmail = process.env.SMOKE_ADMIN_EMAIL;
const adminPassword = process.env.SMOKE_ADMIN_PASSWORD;
let passed = 0;

function requireCondition(condition, message) {
  if (!condition) throw new Error(message);
}

function localUrl(path) {
  const url = new URL(path, base);
  requireCondition(url.origin === base.origin, "Refusing a request outside the local test origin.");
  return url;
}

async function request(path, { method = "GET", body, cookie, origin } = {}) {
  const headers = { Accept: "application/json" };
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (cookie) headers.Cookie = cookie;
  if (origin !== undefined) headers.Origin = origin;
  return fetch(localUrl(path), {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    redirect: "manual",
    signal: AbortSignal.timeout(15000),
  });
}

async function expectJson(response, status) {
  requireCondition(response.status === status, `Expected HTTP ${status}, received ${response.status}.`);
  requireCondition(response.headers.get("content-type")?.includes("application/json"), "Expected a JSON response through the Next.js API rewrite.");
  const body = await response.json();
  requireCondition(body && typeof body === "object", "Expected a JSON object.");
  return body;
}

async function expectError(response, status) {
  const body = await expectJson(response, status);
  requireCondition(typeof body.error === "string" && body.error.length > 0, "Expected a readable API error.");
  return body;
}

async function htmlPage(path) {
  let url = localUrl(path);
  for (let redirects = 0; redirects < 5; redirects += 1) {
    const response = await request(url.href);
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get("location");
      requireCondition(location, "Page redirect has no Location header.");
      url = localUrl(new URL(location, url).href);
      continue;
    }
    requireCondition(response.status === 200, `Expected page HTTP 200, received ${response.status}.`);
    requireCondition(response.headers.get("content-type")?.includes("text/html"), "Expected an HTML page.");
    return { html: await response.text(), url };
  }
  throw new Error("Page exceeded the local redirect limit.");
}

async function check(label, test) {
  await test();
  passed += 1;
  console.log(`PASS ${label}`);
}

async function main() {
  requireCondition(["localhost", "127.0.0.1"].includes(base.hostname), "SMOKE_BASE_URL must target localhost or 127.0.0.1; live hosts are forbidden.");
  requireCondition(["http:", "https:"].includes(base.protocol) && !base.username && !base.password && base.pathname === "/" && !base.search && !base.hash, "SMOKE_BASE_URL must be a plain local HTTP(S) origin.");
  requireCondition(adminEmail && adminPassword, "Set SMOKE_ADMIN_EMAIL and SMOKE_ADMIN_PASSWORD for the local stack.");

  const runLabel = `docker-smoke-${Date.now()}-${randomUUID().slice(0, 8)}`;
  const payload = {
    requestId: randomUUID(),
    firstName: "Docker",
    lastName: "Smoke",
    email: `${runLabel}@example.test`,
    company: runLabel,
    country: "Indonesia",
    eventType: "Conference or summit",
    message: "Synthetic local Docker smoke test. Safe to archive.",
    website: "",
  };
  let receipt;
  let sessionCookie;

  await check("public demo form loads", async () => {
    const { html } = await htmlPage("/request-demo");
    requireCondition(html.includes('name="firstName"') && html.includes('name="email"') && html.includes("Request My Demo"), "Public demo form fields were not found.");
  });

  await check("admin HTML and built JavaScript/CSS load", async () => {
    const { html, url } = await htmlPage("/admin");
    requireCondition(/<div\b[^>]*\bid=["']root["']/.test(html), "Admin app mount point was not found.");
    const assets = Array.from(html.matchAll(/\b(?:src|href)=["']([^"']+)["']/g), match => localUrl(new URL(match[1], url).href))
      .filter(asset => /\.(?:js|css)$/.test(asset.pathname));
    for (const extension of ["js", "css"]) {
      const asset = assets.find(candidate => candidate.pathname.endsWith(`.${extension}`));
      requireCondition(asset, `No built admin ${extension.toUpperCase()} asset was referenced.`);
      const response = await request(asset.href);
      requireCondition(response.status === 200, `Admin ${extension.toUpperCase()} asset returned ${response.status}.`);
      const contentType = response.headers.get("content-type") || "";
      requireCondition(extension === "css" ? contentType.includes("text/css") : /javascript/.test(contentType), `Admin ${extension.toUpperCase()} asset returned the wrong content type.`);
      requireCondition((await response.text()).length > 0, `Admin ${extension.toUpperCase()} asset was empty.`);
    }
  });

  await check("admin data requires authentication", async () => {
    await expectError(await request("/api/admin/demo-requests"), 401);
  });

  await check("invalid public form returns field validation", async () => {
    const body = await expectError(await request("/api/demo-requests", {
      method: "POST", origin: base.origin,
      body: { ...payload, requestId: randomUUID(), firstName: "", email: "not-an-email", eventType: "invalid" },
    }), 400);
    requireCondition(typeof body.fieldErrors?.firstName === "string" && typeof body.fieldErrors?.email === "string" && typeof body.fieldErrors?.eventType === "string", "Expected first name, email, and event type field errors.");
  });

  await check("public request is saved through the Next.js rewrite", async () => {
    const body = await expectJson(await request("/api/demo-requests", { method: "POST", origin: base.origin, body: payload }), 201);
    requireCondition(typeof body.request?.id === "string" && body.request.id.length > 0, "Save response has no request ID.");
    requireCondition(typeof body.request.createdAt === "string" && Number.isFinite(Date.parse(body.request.createdAt)), "Save response has no valid creation time.");
    receipt = body.request;
  });

  await check("identical retry returns the original receipt", async () => {
    const body = await expectJson(await request("/api/demo-requests", { method: "POST", origin: base.origin, body: payload }), 201);
    requireCondition(body.request?.id === receipt.id && body.request.createdAt === receipt.createdAt, "Idempotent retry created a different request.");
  });

  await check("admin login sets the local session cookie", async () => {
    const response = await request("/api/admin/login", {
      method: "POST", origin: base.origin,
      body: { email: adminEmail, password: adminPassword },
    });
    const body = await expectJson(response, 200);
    requireCondition(body.admin?.email === adminEmail.trim().toLowerCase(), "Login did not identify the configured admin.");
    const cookies = response.headers.getSetCookie();
    const cookie = cookies.find(value => /;\s*HttpOnly(?:;|$)/i.test(value));
    requireCondition(cookie, "Login did not set an HttpOnly session cookie.");
    requireCondition(/;\s*SameSite=Strict(?:;|$)/i.test(cookie), "Session cookie must use SameSite=Strict.");
    requireCondition(/;\s*Path=\/api\/admin(?:;|$)/i.test(cookie), "Session cookie must be scoped to /api/admin.");
    requireCondition(!/;\s*Secure(?:;|$)/i.test(cookie), "Configure COOKIE_SECURE=false for the disposable local smoke stack.");
    sessionCookie = cookie.split(";", 1)[0];
  });

  await check("authenticated admin session is available", async () => {
    const body = await expectJson(await request("/api/admin/session", { cookie: sessionCookie }), 200);
    requireCondition(body.admin?.email === adminEmail.trim().toLowerCase(), "Session did not identify the configured admin.");
  });

  const searchPath = `/api/admin/demo-requests?${new URLSearchParams({ search: runLabel, status: "all", page: "1", pageSize: "20" })}`;
  await check("admin search finds exactly one saved request", async () => {
    const body = await expectJson(await request(searchPath, { cookie: sessionCookie }), 200);
    requireCondition(body.total === 1 && Array.isArray(body.items) && body.items.length === 1, "Expected one request after the idempotent retry.");
    const item = body.items[0];
    requireCondition(item.id === receipt.id && item.email === payload.email && item.company === runLabel && item.message === payload.message && item.status === "new", "Admin listing does not match the submitted request.");
    requireCondition(body.stats && Number.isInteger(body.stats.all) && body.stats.all >= 1, "Admin listing has no aggregate request count.");
  });

  const updatePath = `/api/admin/demo-requests/${receipt.id}`;
  const notes = `Local follow-up confirmed: ${runLabel}`;
  await check("admin can update request status and notes", async () => {
    const updated = await expectJson(await request(updatePath, {
      method: "PATCH", origin: base.origin, cookie: sessionCookie,
      body: { status: "contacted", notes },
    }), 200);
    requireCondition(updated.request?.id === receipt.id && updated.request.status === "contacted" && updated.request.notes === notes, "Update response did not return the saved request.");
    const body = await expectJson(await request(searchPath, { cookie: sessionCookie }), 200);
    requireCondition(body.items?.[0]?.status === "contacted" && body.items[0].notes === notes, "Updated status and notes were not persisted.");
    const filteredPath = `/api/admin/demo-requests?${new URLSearchParams({ search: runLabel, status: "contacted" })}`;
    const filtered = await expectJson(await request(filteredPath, { cookie: sessionCookie }), 200);
    requireCondition(filtered.total === 1 && filtered.items?.[0]?.id === receipt.id, "Status filtering did not return the updated request.");
  });

  await check("cross-origin admin mutation is rejected", async () => {
    await expectError(await request(updatePath, {
      method: "PATCH", origin: "https://untrusted.invalid", cookie: sessionCookie,
      body: { status: "archived", notes: "This mutation must never be saved." },
    }), 403);
    const body = await expectJson(await request(searchPath, { cookie: sessionCookie }), 200);
    requireCondition(body.items?.[0]?.status === "contacted" && body.items[0].notes === notes, "Rejected cross-origin mutation changed the request.");
  });

  await check("logout invalidates the previous session", async () => {
    const response = await request("/api/admin/logout", {
      method: "POST", origin: base.origin, cookie: sessionCookie, body: {},
    });
    requireCondition(response.status === 204, `Logout returned ${response.status}.`);
    await expectError(await request("/api/admin/demo-requests", { cookie: sessionCookie }), 401);
  });

  console.log(`Passed ${passed} Docker smoke checks. One synthetic local request remains: ${runLabel}`);
}

main().catch(error => {
  console.error(`FAIL after ${passed} checks: ${error instanceof Error ? error.message : "Unexpected test failure."}`);
  process.exitCode = 1;
});
