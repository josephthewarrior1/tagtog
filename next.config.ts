import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    const backendUrl = (process.env.BACKEND_URL ?? "http://127.0.0.1:8788").replace(/\/$/, "");
    const adminUrl = (process.env.ADMIN_URL ?? "http://127.0.0.1:8789").replace(/\/$/, "");

    return [
      { source: "/api/:path*", destination: `${backendUrl}/api/:path*` },
      { source: "/admin/:path*", destination: `${adminUrl}/admin/:path*` },
    ];
  },
};

export default nextConfig;
