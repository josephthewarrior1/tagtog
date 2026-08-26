const whyItems = [
  {
    title: "Reliable Information",
    description: "Find the latest version without digging through disconnected files and channels.",
    image:
      "https://images.pexels.com/photos/6476565/pexels-photo-6476565.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "One Connected Flow",
    description: "EMS, PMS, CRM, and IAM reinforce each other instead of creating new silos.",
    image:
      "https://images.pexels.com/photos/7163387/pexels-photo-7163387.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Traceability and Control",
    description: "See what changed, who changed it, and how decisions moved forward.",
    image:
      "https://images.pexels.com/photos/13657523/pexels-photo-13657523.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Growth Without More Complexity",
    description: "Start where the pressure is highest and expand without rebuilding everything.",
    image:
      "https://images.pexels.com/photos/6476246/pexels-photo-6476246.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Useful Innovation",
    description: "Quiet assistance helps summarize information and reduce repetitive work inside the flow.",
    image:
      "https://images.pexels.com/photos/3182838/pexels-photo-3182838.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export function WhyTagtogSection() {
  return (
    <section id="why-tagtog" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Why TAGTOG</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Clear, practical, and built for real event operations.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--color-text-muted)]">
              Five reasons teams choose TAGTOG when event work becomes too fragmented to manage with scattered tools and duplicated data.
            </p>
          </div>

          <div className="space-y-5">
            {whyItems.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-5 overflow-hidden rounded-[1.75rem] border border-[var(--color-secondary)]/10 bg-[var(--color-bg-light)] p-4 shadow-sm sm:p-5 ${
                  index % 2 === 0 ? "md:grid-cols-[0.72fr_1.28fr]" : "md:grid-cols-[1.28fr_0.72fr]"
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className={`aspect-[4/3] h-full w-full rounded-[1.25rem] object-cover ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                />
                <div
                  className={`flex flex-col justify-center rounded-[1.25rem] bg-white p-6 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="text-2xl font-extrabold tracking-tight sm:text-[2rem]">{item.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-8 text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}