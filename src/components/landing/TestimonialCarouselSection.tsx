"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/landingContent";

export function TestimonialCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="border-y border-[var(--color-secondary)]/10 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Field perspective</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Operational clarity feels different when the work is live.
            </h2>
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-secondary)]/16 text-[var(--color-secondary)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-secondary)]/16 text-[var(--color-secondary)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-8 flex gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-10 bg-[var(--color-primary)]" : "w-2.5 bg-[var(--color-secondary)]/22"}`}
                  aria-label={`Show testimonial from ${item.name}`}
                />
              ))}
            </div>
          </div>

          <article className="rounded-[2rem] border border-[var(--color-secondary)]/10 bg-[var(--color-bg-light)] p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <Image
                src={active.image}
                alt={`${active.name} headshot`}
                width={72}
                height={72}
                className="h-[72px] w-[72px] rounded-full border border-[var(--color-secondary)]/10 object-cover"
              />
              <div>
                <p className="font-bold text-[var(--color-text-primary)]">{active.name}</p>
                <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                  {active.title} · {active.company}
                </p>
              </div>
            </div>
            <p className="mt-8 text-xl leading-9 text-[var(--color-text-primary)] sm:text-2xl">
              “{active.quote}”
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
