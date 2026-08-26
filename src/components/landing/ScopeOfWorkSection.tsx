import { Check } from "lucide-react";
import { scopeColumns } from "@/data/landingContent";

function ChecklistColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.75rem] border border-[var(--color-secondary)]/10 bg-white p-6 sm:p-8">
      <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <div className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-primary)]/12 text-[var(--color-primary)]">
              <Check className="h-4 w-4" />
            </div>
            <p className="text-sm leading-7 text-[var(--color-text-primary)] sm:text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScopeOfWorkSection() {
  return (
    <section className="bg-[var(--color-bg-light)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Scope of work</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            One ecosystem across the event lifecycle.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
            TAGTOG helps teams connect work before the event, during the event, and after the event without losing context between handoffs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ChecklistColumn title="Before the Event" items={scopeColumns.before} />
          <ChecklistColumn title="During & After" items={scopeColumns.duringAfter} />
        </div>
      </div>
    </section>
  );
}
