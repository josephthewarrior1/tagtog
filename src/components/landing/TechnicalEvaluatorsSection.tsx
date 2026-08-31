"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROTATION_MS = 5600;

const differentiationItems = [
  {
    title: "One Connected Ecosystem",
    body: "EMS, PMS, CRM, and IAM aren't unrelated products - CRM holds the relationship, EMS runs the event flow, PMS organizes the project, IAM controls who can access what.",
    imageSrc:
      "https://images.pexels.com/photos/6476249/pexels-photo-6476249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    imageAlt: "Overhead office collaboration with notebooks, charts, and a shared planning discussion.",
  },
  {
    title: "Start With What You Need",
    body: "You don't need to adopt the entire ecosystem at once. Begin with your most urgent operational need and expand as your operations grow.",
    imageSrc:
      "https://images.pexels.com/photos/17724732/pexels-photo-17724732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    imageAlt: "Two colleagues planning ideas on a whiteboard during a strategy session.",
  },
  {
    title: "Product First, Extensions Where Valuable",
    body: "We start with structured products, then add configuration and integration where they genuinely strengthen your ecosystem - not build-anything-for-anyone.",
    imageSrc:
      "https://images.pexels.com/photos/12899153/pexels-photo-12899153.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    imageAlt: "Software team reviewing code together on laptops in an office setting.",
  },
] as const;

export function TechnicalEvaluatorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleToken, setCycleToken] = useState(0);
  const activeItem = differentiationItems[activeIndex];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % differentiationItems.length);
      setCycleToken((current) => current + 1);
    }, ROTATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, cycleToken]);

  function handleTabChange(index: number) {
    setActiveIndex(index);
    setCycleToken((current) => current + 1);
  }

  return (
    <section id="differentiation" className="bg-[var(--color-bg-light)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
              Our differentiation
            </p>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Built from inside the event industry.
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)]">
            TAGTOG combines firsthand event-industry knowledge with a connected product ecosystem. We understand how information moves between organizers, clients, venues, vendors, participants, and internal teams - and translate those relationships into connected workflows.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--color-secondary)]/10 bg-white/80 p-5 shadow-[0_24px_48px_rgba(32,30,46,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,1.08fr)] lg:gap-12">
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_28px_56px_rgba(32,30,46,0.14)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.title}
                  initial={{ opacity: 0.05 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.05 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative aspect-[4/3]"
                >
                  <img
                    src={activeItem.imageSrc}
                    alt={activeItem.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(20,18,28,0.34)] to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-2">
                {differentiationItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="h-1.5 overflow-hidden rounded-full bg-[var(--color-secondary)]/14"
                    aria-hidden="true"
                  >
                    {activeIndex === index && (
                      <motion.div
                        key={`${item.title}-${cycleToken}`}
                        className="h-full rounded-full bg-[var(--color-primary)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: ROTATION_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {differentiationItems.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div key={item.title} className="border-b border-[var(--color-secondary)]/8 pb-5 last:border-b-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => handleTabChange(index)}
                        className="w-full text-left"
                        aria-pressed={isActive}
                      >
                        <h3
                          className={`text-[1.55rem] font-extrabold tracking-tight transition-colors sm:text-[1.8rem] ${
                            isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            key={item.title}
                            initial={{ opacity: 0, height: 0, y: -6 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -6 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="mt-4 overflow-hidden pr-4 text-sm leading-8 text-[var(--color-text-muted)] sm:text-base"
                          >
                            {item.body}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
