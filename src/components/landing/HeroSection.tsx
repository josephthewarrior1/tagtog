"use client";

import { motion } from "framer-motion";
import { TrustStripSection } from "@/components/landing/TrustStripSection";

export function HeroSection() {
  return (
    <section id="platform" className="relative overflow-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-on-dark)]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/hero-event.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[rgba(16,10,16,0.56)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,13,22,0.78)_0%,rgba(19,13,22,0.62)_38%,rgba(19,13,22,0.24)_72%,rgba(19,13,22,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_54%,rgba(255,92,122,0.12),transparent_24%)]" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/56 sm:text-sm">
              TAGTOG EVENT OPERATIONS ECOSYSTEM
            </p>
            <h1 className="max-w-4xl text-[2.9rem] font-medium leading-[0.94] tracking-[-0.03em] text-white sm:text-[4rem] lg:text-[5rem]">
              Everything in flow.
              <span className="block text-[var(--color-primary)]">Everyone in sync.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-white/84 sm:text-lg sm:leading-8">
              Turn fragmented event operations into one connected flow.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#resources"
                className="inline-flex h-14 items-center justify-center rounded-sm bg-[var(--color-primary)] px-8 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
              >
                See How It Works
              </a>
              <a
                href="/request-demo"
                className="inline-flex h-14 items-center justify-center border border-white/44 px-8 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/8"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
          <TrustStripSection className="mt-16 sm:mt-20 lg:mt-24" />
        </div>
      </div>
    </section>
  );
}
