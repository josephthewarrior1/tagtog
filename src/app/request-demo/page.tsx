"use client";

import Link from "next/link";
import { useState } from "react";
import { LandingNavbar } from "@/components/landing/LandingNavbar";

const eventTypeOptions = [
  "Conference or summit",
  "Internal event or town hall",
  "Roadshow or multi-city program",
  "Hybrid event",
  "Other event format",
];

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [eventType, setEventType] = useState("");

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#f7f1f5_0%,#fbf8f6_42%,#f2eef7_100%)] text-[var(--color-text-primary)]">
      <LandingNavbar />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <section className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
              Request a demo
            </p>
            <h1 className="mt-5 max-w-xl text-5xl font-extrabold leading-[1.02] tracking-tight text-[var(--color-text-primary)] sm:text-6xl">
              See how TAGTOG can support the way your event teams already work.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-9 text-[var(--color-text-muted)]">
              We&apos;ll tailor the conversation around your current workflows, operational handoffs, access needs, and the information your teams rely on to keep events moving.
            </p>

            <div className="mt-auto rounded-[2rem] border border-[var(--color-secondary)]/10 bg-white/70 p-6 shadow-[0_24px_56px_rgba(32,30,46,0.08)] backdrop-blur-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-[1.2fr_1fr]">
                <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#1b1630,#32294f)] p-4">
                  <img
                    src="/images/product-ems.svg"
                    alt="TAGTOG event operations interface preview"
                    className="h-full w-full rounded-[1rem] bg-white object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.25rem] bg-[rgba(255,92,122,0.08)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                      What to expect
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-text-primary)]">
                      A focused walkthrough shaped around your event operation, not a generic product tour.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-[var(--color-secondary)]/10 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary)]">
                      Conversation topics
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-text-muted)]">
                      <li>Workflow coordination across teams</li>
                      <li>Master data and approvals</li>
                      <li>Role-based access and audit visibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-[0_34px_72px_rgba(32,30,46,0.12)] sm:p-10">
            {!submitted ? (
              <div className="flex h-full flex-col">
                <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
                  Tell us a bit about your event operation.
                </h2>
                <p className="mt-3 text-base leading-8 text-[var(--color-text-muted)]">
                  We&apos;ll use this to prepare a more relevant demo for your team.
                </p>
                </div>

                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!firstName || !lastName || !workEmail || !company || !country || !eventType) {
                      return;
                    }
                    setSubmitted(true);
                  }}
                  className="mt-8 flex-1 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="w-full rounded-xl border border-[var(--color-secondary)]/18 px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="w-full rounded-xl border border-[var(--color-secondary)]/18 px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="work-email" className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                      Work Email
                    </label>
                    <input
                      id="work-email"
                      type="email"
                      value={workEmail}
                      onChange={(event) => setWorkEmail(event.target.value)}
                      className="w-full rounded-xl border border-[var(--color-secondary)]/18 px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      className="w-full rounded-xl border border-[var(--color-secondary)]/18 px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                      Country
                    </label>
                    <input
                      id="country"
                      type="text"
                      value={country}
                      onChange={(event) => setCountry(event.target.value)}
                      className="w-full rounded-xl border border-[var(--color-secondary)]/18 px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="event-type" className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                      What type of events do you run?
                    </label>
                    <select
                      id="event-type"
                      value={eventType}
                      onChange={(event) => setEventType(event.target.value)}
                      className="w-full rounded-xl border border-[var(--color-secondary)]/18 bg-white px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                      required
                    >
                      <option value="">Select an option</option>
                      {eventTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-auto pt-4">
                  <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                    By submitting this form, you agree to occasional follow-up communication related to your request.
                  </p>

                  <button
                    type="submit"
                    className="mt-4 inline-flex h-12 min-w-[180px] items-center justify-center rounded-md bg-[var(--color-primary)] px-6 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
                  >
                    Request My Demo
                  </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  Request received
                </p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
                  Thanks, {firstName}. We&apos;ll prepare a tailored walkthrough.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-text-muted)]">
                  We&apos;ll follow up at {workEmail} with next steps and shape the conversation around the workflows your team is managing at {company}.
                </p>
                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-[var(--color-secondary)]/18 px-6 text-base font-semibold text-[var(--color-text-primary)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    Return to homepage
                  </Link>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
