"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Roboto_Condensed } from "next/font/google";
import { ReferenceNav } from "@/components/reference/ReferenceNav";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronDown, UsersRound, Zap } from "lucide-react";
import styles from "./request-demo.module.css";

const eventTypes = ["Conference or summit", "Internal event or town hall", "Roadshow or multi-city program", "Hybrid event", "Other event format"];
const inter = Inter({ subsets: ["latin"], variable: "--font-reference-sans", display: "swap" });
const condensed = Roboto_Condensed({ subsets: ["latin"], variable: "--font-condensed", weight: ["600", "700", "800"], display: "swap" });

const formFields = ["firstName", "lastName", "email", "company", "country", "eventType", "message", "website"] as const;

function createRequestId() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function FieldError({ name, errors }: { name: string; errors: Record<string, string> }) {
  return errors[name] ? <span className={styles.fieldError} id={`${name}-error`}>{errors[name]}</span> : null;
}

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const inFlight = useRef(false);
  const submission = useRef<{ fingerprint: string; requestId: string } | null>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error) errorRef.current?.focus();
    if (submitted) successRef.current?.focus();
  }, [error, submitted]);

  const validationProps = (name: string) => ({
    "aria-invalid": Boolean(fieldErrors[name]),
    "aria-describedby": fieldErrors[name] ? `${name}-error` : undefined,
  });

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;

    const formData = new FormData(event.currentTarget);
    const fields = Object.fromEntries(formFields.map(name => [name, String(formData.get(name) ?? "").trim()]));
    const fingerprint = JSON.stringify(fields);
    if (!submission.current || submission.current.fingerprint !== fingerprint) {
      submission.current = { fingerprint, requestId: createRequestId() };
    }

    inFlight.current = true;
    setPending(true);
    setError("");
    setFieldErrors({});
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, requestId: submission.current.requestId }),
        signal: controller.signal,
      });
      const body: unknown = await response.json().catch(() => null);
      const result = body && typeof body === "object" ? body as Record<string, unknown> : null;

      if (!response.ok) {
        const errors: Record<string, string> = {};
        if (result?.fieldErrors && typeof result.fieldErrors === "object") {
          for (const name of formFields) {
            const message = (result.fieldErrors as Record<string, unknown>)[name];
            if (typeof message === "string") errors[name] = message;
          }
        }
        setFieldErrors(errors);
        setError(typeof result?.error === "string" ? result.error : "We couldn't confirm your request. Please try again in a moment. Your details are still here.");
        return;
      }

      const request = result?.request && typeof result.request === "object" ? result.request as Record<string, unknown> : null;
      if (response.status !== 201 || typeof request?.id !== "string" || !request.id || typeof request.createdAt !== "string" || !request.createdAt) {
        setError("We couldn't confirm your request. Please try again in a moment. Your details are still here.");
        return;
      }

      setFirstName(fields.firstName);
      setSubmitted(true);
    } catch {
      setError("We couldn't confirm your request. Check your connection and try again. Your details are still here.");
    } finally {
      window.clearTimeout(timeout);
      inFlight.current = false;
      setPending(false);
    }
  }
  return (
    <div className={styles.page}>
      <div className={`${inter.variable} ${condensed.variable}`}><ReferenceNav solid /></div>

      <main className={styles.layout}>
        <section className={styles.intro} aria-labelledby="demo-title">
          <p className={styles.eyebrow}>Request a demo</p>
          <h1 id="demo-title">See TAGTOG<br />in <em>action.</em></h1>
          <p className={styles.description}>Explore how CRM, EMS, PMS, and IAM can connect your teams, information, responsibilities, and access. Start with the operational need that matters most to you.</p>
          <div className={styles.benefits}>
            <div><span><CalendarDays /></span><p>Tailored<br />to your needs</p></div>
            <div><span><UsersRound /></span><p>Real use cases<br />for your team</p></div>
            <div><span><Zap /></span><p>Get expert<br />guidance</p></div>
          </div>

          <div className={styles.collage} aria-label="Event connections and a TAGTOG conference badge">
            <div className={styles.lanyard}><span>TAGTOG</span></div>
            <div className={styles.clasp} />
            <div className={styles.connection}>
              <Image src="/images/reference/networking-venue.jpg" alt="Attendees connecting at an event" fill sizes="(max-width: 700px) 55vw, 320px" />
              <p>Meaningful<br />Connections</p>
            </div>
            <div className={styles.eventPhoto}>
              <Image src="/images/reference/hero-conference.jpg" alt="A live conference with an engaged audience" fill sizes="200px" />
              <p>Everything<br />in Flow.<br />Everyone<br />in Sync. <ArrowUpRight size={20} /></p>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeTop}><span className={styles.slot} /><ArrowUpRight className={styles.badgeArrow} size={30} /><p>Flow Smarter.<br />Grow<br />Further.</p><small>TECHNOLOGY. OPERATIONS. GROWTH.</small></div>
              <div className={styles.badgePhoto}><Image src="/images/reference/hero-conference.jpg" alt="" fill sizes="300px" /><span>TAGTOG</span></div>
            </div>
            <span className={styles.handwriting}>More<br />Than<br />Events<span /></span>
          </div>
          <div className={styles.trust}>
            <p>One connected event operations ecosystem</p>
            <div><strong>CRM<small>Relationships</small></strong><strong>EMS<small>Event flow</small></strong><strong>PMS<small>Responsibilities</small></strong><strong>IAM<small>Identity &amp; access</small></strong></div>
          </div>
        </section>

        <section className={styles.formCard} id="demo-form" aria-labelledby="form-title">
          {!submitted ? <>
            <p className={styles.eyebrow}>Let’s talk</p>
            <h2 id="form-title">Tell us a bit about your<br className={styles.desktopBreak} /> event operation.</h2>
            <p className={styles.formIntro}>We’ll use this information to prepare a relevant and personalized demo for your team.</p>
            <form className={styles.form} onSubmit={submitRequest} aria-busy={pending}>
              <fieldset className={styles.fields} disabled={pending} aria-label="Demo request details">
                <div className={styles.nameRow}>
                  <label>First Name<input name="firstName" autoComplete="given-name" placeholder="John" value={firstName} onChange={(event) => setFirstName(event.target.value)} maxLength={80} {...validationProps("firstName")} required /><FieldError name="firstName" errors={fieldErrors} /></label>
                  <label>Last Name<input name="lastName" autoComplete="family-name" placeholder="Doe" maxLength={80} {...validationProps("lastName")} required /><FieldError name="lastName" errors={fieldErrors} /></label>
                </div>
                <label>Work Email<input name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} placeholder="john@yourcompany.com" maxLength={254} {...validationProps("email")} required /><FieldError name="email" errors={fieldErrors} /></label>
                <label>Company<input name="company" autoComplete="organization" placeholder="Your company name" maxLength={160} {...validationProps("company")} required /><FieldError name="company" errors={fieldErrors} /></label>
                <label>Country<span className={styles.selectWrap}><select name="country" autoComplete="country-name" defaultValue="" {...validationProps("country")} required><option value="" disabled>Select a country</option>{["Indonesia", "Singapore", "Malaysia", "Thailand", "Philippines", "Vietnam", "Australia", "India", "United Kingdom", "United States", "Other"].map(country => <option key={country}>{country}</option>)}</select><ChevronDown size={16} /></span><FieldError name="country" errors={fieldErrors} /></label>
                <label>What type of events do you run?<span className={styles.selectWrap}><select name="eventType" defaultValue="" {...validationProps("eventType")} required><option value="" disabled>Select an option</option>{eventTypes.map(type => <option key={type}>{type}</option>)}</select><ChevronDown size={16} /></span><FieldError name="eventType" errors={fieldErrors} /></label>
                <label>Anything specific you’d like to discuss? (Optional)<textarea name="message" rows={3} placeholder="Share your goals, current challenges, or any specific use cases..." maxLength={5000} {...validationProps("message")} /><FieldError name="message" errors={fieldErrors} /></label>
                <div className={styles.honeypot} aria-hidden="true"><label>Leave this field empty<input name="website" type="text" autoComplete="off" tabIndex={-1} maxLength={200} /></label></div>
              </fieldset>
              {error && <p className={styles.formError} ref={errorRef} role="alert" tabIndex={-1}>{error}</p>}
              <button className={styles.submit} type="submit" disabled={pending}>{pending ? "Sending your request…" : "Request My Demo"} {!pending && <ArrowRight size={18} />}</button>
              <p className={styles.consent}>By submitting this form, you agree to occasional follow-up communication related to your request.</p>
            </form>
          </> : <div className={styles.success} ref={successRef} role="status" tabIndex={-1}><p className={styles.eyebrow}>Thank you, {firstName}</p><h2 id="form-title">Your demo request is received.</h2><p>Your request has been saved. Our team will contact you by email to discuss your needs and arrange a demo.</p><button className={styles.submit} onClick={() => { submission.current = null; setFirstName(""); setSubmitted(false); }}>Send another request <ArrowRight size={18} /></button><Link href="/">Return to homepage</Link></div>}
        </section>
      </main>
    </div>
  );
}
