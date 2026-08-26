export function StartSmallSection() {
  return (
    <section className="bg-[var(--color-bg-light)] py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Start small</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Adopt one product first. Expand when the operation is ready.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[var(--color-text-muted)]">
            Customers do not need to adopt EMS, PMS, CRM, and IAM all at once. Start with the most urgent need, prove value there, then extend the connected flow when timing makes sense.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Start with EMS", "Useful when live operations, schedules, and run-of-show coordination are the immediate pressure point."],
            ["Start with PMS", "Useful when ownership, timelines, and approvals are currently fragmented."],
            ["Start with CRM", "Useful when stakeholder data and event context need a more reliable source."],
            ["Add IAM when needed", "Layer access control and auditability into the operation without reworking the whole model."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-[1.5rem] border border-[var(--color-secondary)]/10 bg-white p-6">
              <h3 className="text-xl font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
