"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[var(--color-bg-dark)] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Final CTA</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Everything in Flow. Everyone in Sync.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/66">
            Book a tailored walkthrough of TAGTOG and see how EMS, PMS, CRM, and IAM fit your event operation.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          {!submitted ? (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (!fullName || !workEmail || !company) {
                  return;
                }
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="demo-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  Name
                </label>
                <input
                  id="demo-name"
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/14 bg-[rgba(255,255,255,0.05)] px-4 py-3 text-sm text-white placeholder:text-white/34 focus:border-[var(--color-primary)] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="demo-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  Work Email
                </label>
                <input
                  id="demo-email"
                  type="email"
                  value={workEmail}
                  onChange={(event) => setWorkEmail(event.target.value)}
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-white/14 bg-[rgba(255,255,255,0.05)] px-4 py-3 text-sm text-white placeholder:text-white/34 focus:border-[var(--color-primary)] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="demo-company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  Company
                </label>
                <input
                  id="demo-company"
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Your company"
                  className="w-full rounded-xl border border-white/14 bg-[rgba(255,255,255,0.05)] px-4 py-3 text-sm text-white placeholder:text-white/34 focus:border-[var(--color-primary)] focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--color-primary)] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Request received</p>
              <h3 className="text-3xl font-extrabold">We&apos;ll follow up with a tailored walkthrough.</h3>
              <p className="text-base leading-8 text-white/66">
                Thanks, {fullName}. We&apos;ll reach out at {workEmail} with next steps for {company}.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
