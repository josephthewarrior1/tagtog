export function TechnicalEvaluatorsSection() {
  const cards = [
    {
      role: "EVENT PROFESSIONALS",
      tag: "RUN FLAWLESS EVENTS",
      description: "One platform to source smarter, execute flawlessly, and walk into every debrief with the data to prove it worked.",
      stat: "20% year-over-year attendance growth",
      company: "Alkami",
    },
    {
      role: "MARKETING PROFESSIONALS",
      tag: "PROVE EVENT ROI",
      description: "Run every event format on one platform, capture intent data, and connect every dollar to impact you can prove.",
      stat: "51% more pipeline from a flagship event",
      company: "6sense",
    },
    {
      role: "HOSPITALITY PROFESSIONALS",
      tag: "WIN MORE GROUP BUSINESS",
      description: "The world's largest marketplace of qualified buyers, with AI to help you respond faster and win more.",
      stat: "300K+ unique RFPs sourced via Cvent annually",
      company: "",
    },
  ];

  return (
    <section className="bg-[var(--color-bg-light)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Technical evaluators
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Access control, audit trails, and integration in one operating model.
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)]">
            TAGTOG is designed for CIOs, CTOs, IT, and security stakeholders who need operational tools to stay governable as well as usable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={index}
              className="group rounded-2xl border border-[var(--color-secondary)]/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Role tag */}
              <div className="mb-4 inline-block rounded-full border border-[var(--color-secondary)]/10 bg-[var(--color-bg-light)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                {card.role}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {card.description}
              </p>

              {/* Stat */}
              <div className="mt-6 border-t border-[var(--color-secondary)]/10 pt-6">
                <p className="text-2xl font-extrabold text-[var(--color-text-primary)]">
                  {card.stat}
                </p>
                {card.company && (
                  <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)]">
                    {card.company}
                  </p>
                )}
              </div>

              {/* Tag button */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] transition group-hover:bg-[var(--color-primary)] group-hover:text-white">
                {card.tag}
                <span className="text-xs">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}