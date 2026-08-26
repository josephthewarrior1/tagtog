const brandLogos = [
  {
    name: "Salesforce",
    src: "https://cdn.simpleicons.org/salesforce?viewbox=auto",
  },
  {
    name: "HubSpot",
    src: "https://cdn.simpleicons.org/hubspot?viewbox=auto",
  },
  {
    name: "Zoom",
    src: "https://cdn.simpleicons.org/zoom?viewbox=auto",
  },
  {
    name: "Google",
    src: "https://cdn.simpleicons.org/google?viewbox=auto",
  },
  {
    name: "Microsoft",
    src: "https://cdn.simpleicons.org/microsoft?viewbox=auto",
  },
  {
    name: "Slack",
    src: "https://cdn.simpleicons.org/slack?viewbox=auto",
  },
  {
    name: "Notion",
    src: "https://cdn.simpleicons.org/notion?viewbox=auto",
  },
  {
    name: "Okta",
    src: "https://cdn.simpleicons.org/okta?viewbox=auto",
  },
];

export function TrustStripSection() {
  return (
    <section className="overflow-hidden border-b border-[var(--color-secondary)]/10 bg-white py-8">
      <div className="mx-auto mb-4 flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            Built to connect with the tools event teams already rely on
          </span>
        </div>
      </div>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max items-center gap-5 animate-[marquee_24s_linear_infinite] py-2 hover:[animation-play-state:paused]">
          {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="group flex h-20 min-w-[180px] items-center justify-center rounded-[1.25rem] border border-[var(--color-secondary)]/10 bg-[var(--color-bg-light)] px-6 transition-all hover:border-[var(--color-primary)]/28 hover:bg-white"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="lazy"
                className="h-7 w-auto opacity-55 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
