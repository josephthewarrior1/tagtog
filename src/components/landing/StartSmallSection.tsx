"use client";

import { useState } from "react";

const startSmallItems = [
  {
    title: "Start with EMS",
    subtitle: "Live event operations",
    description:
      "Bring schedules, run-of-show updates, and on-the-ground coordination into one operational view first.",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600",
    eyebrow: "Best first step",
  },
  {
    title: "Add PMS",
    subtitle: "Ownership and approvals",
    description:
      "Connect milestones, responsibilities, and approvals once the workflow is already clearer.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600",
    eyebrow: "Next expansion",
  },
  {
    title: "Connect CRM",
    subtitle: "Stakeholder context",
    description:
      "Extend the same flow to sponsors, speakers, partners, and commercial relationships when the team is ready.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    eyebrow: "Context layer",
  },
  {
    title: "Layer IAM",
    subtitle: "Access and auditability",
    description:
      "Introduce tighter permission control and traceability without reworking everything from the beginning.",
    image:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600",
    eyebrow: "Security layer",
  },
];

export function StartSmallSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = startSmallItems[activeIndex];

  return (
    <section className="bg-[#141419] py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Start small</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Adopt one product first. Expand when the operation is ready.
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.36fr_0.64fr]">
          <article className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-black">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              loading="lazy"
              className="absolute inset-y-0 right-0 h-full w-full object-cover xl:w-[58%]"
            />
            <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.98)_44%,rgba(0,0,0,0.76)_54%,rgba(0,0,0,0)_70%)] xl:w-[72%]" />
            <div
              className="absolute inset-y-0 left-[46%] hidden w-[22%] bg-black xl:block"
              style={{ clipPath: "polygon(38% 0, 100% 0, 62% 100%, 0 100%)" }}
            />

            <div className="relative z-10 flex h-full max-w-[620px] flex-col justify-end px-8 py-10 sm:px-10 sm:py-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                {activeItem.eyebrow}
              </p>
              <h3 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {activeItem.title}
              </h3>
              <p className="mt-3 text-base font-semibold uppercase tracking-[0.16em] text-white/46">
                {activeItem.subtitle}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                Customers do not need to adopt EMS, PMS, CRM, and IAM all at once. {activeItem.description}
              </p>
              <a
                href="/request-demo"
                className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-xl bg-white px-6 text-base font-semibold text-black transition hover:bg-[var(--color-primary)] hover:text-white"
              >
                Book a Demo
              </a>
            </div>
          </article>

          <div className="space-y-4">
            {startSmallItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`block w-full rounded-[1.5rem] border px-5 py-5 text-left transition ${activeIndex === index ? "border-white/12 bg-white/[0.12]" : "border-white/8 bg-white/[0.04] hover:bg-white/[0.08]"}`}
                aria-pressed={activeIndex === index}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-2xl object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/46">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/64">
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
