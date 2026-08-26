import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/landingContent";

export function FaqSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">FAQ</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Frequently asked questions</h2>
        </div>
        <Accordion items={faqItems} className="divide-[var(--color-secondary)]/12 border-[var(--color-secondary)]/12" />
      </div>
    </section>
  );
}
