import { cn } from "@/lib/utils";

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
  {
    name: "Asana",
    src: "https://cdn.simpleicons.org/asana?viewbox=auto",
  },
  {
    name: "Dropbox",
    src: "https://cdn.simpleicons.org/dropbox?viewbox=auto",
  },
  {
    name: "Airtable",
    src: "https://cdn.simpleicons.org/airtable?viewbox=auto",
  },
  {
    name: "Trello",
    src: "https://cdn.simpleicons.org/trello?viewbox=auto",
  },
  {
    name: "Miro",
    src: "https://cdn.simpleicons.org/miro?viewbox=auto",
  },
  {
    name: "ClickUp",
    src: "https://cdn.simpleicons.org/clickup?viewbox=auto",
  },
];

type TrustStripProps = {
  className?: string;
};

export function TrustStripSection({ className }: TrustStripProps) {
  return (
    <div
      className={cn(
        "trust-strip relative w-full overflow-hidden",
        className,
      )}
    >
      <div className="trust-strip__inner flex w-max items-center py-3">
        {[0, 1].map((track) => (
          <div
            key={track}
            aria-hidden={track === 1}
            className="trust-strip__track flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10"
          >
            {brandLogos.map((logo) => (
              <div
                key={`${track}-${logo.name}`}
                className="group flex h-10 min-w-[88px] items-center justify-center sm:min-w-[104px]"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  className="h-3.5 w-auto opacity-60 brightness-0 invert transition duration-200 group-hover:opacity-90 sm:h-4"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
