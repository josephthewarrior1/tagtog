import Image from "next/image";
import { productItems } from "@/data/landingContent";

function BrowserMockup({
  src,
  alt,
  accent,
}: {
  src: string;
  alt: string;
  accent: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-secondary)]/12 bg-white shadow-[0_32px_60px_rgba(32,30,46,0.08)]">
      <div className="flex items-center gap-2 border-b border-[var(--color-secondary)]/10 bg-[var(--color-bg-light)] px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[#f87171]" />
        <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
        <span className="h-3 w-3 rounded-full bg-[#34d399]" />
        <div className="ml-4 h-8 flex-1 rounded-full border border-[var(--color-secondary)]/10 bg-white" />
      </div>
      <div className={`border-t-4 ${accent}`}>
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={900}
          className="h-auto w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function ProductSuiteSection() {
  return (
    <section id="resources" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Product suite</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Turning complex event operations into one connected flow.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
            TAGTOG brings EMS, PMS, CRM, and IAM into one clear operating model instead of asking teams to stitch disconnected tools together.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {productItems.map((product, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                id={product.id}
                key={product.id}
                className={`grid items-center gap-10 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                    {product.name} · {product.fullName}
                  </p>
                  <h3 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {product.eyebrow}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
                    {product.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-[var(--color-text-primary)] sm:text-base">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href="/request-demo"
                      className="inline-flex h-11 items-center rounded-md bg-[var(--color-primary)] px-5 text-sm font-bold text-white transition hover:bg-[var(--color-primary-hover)]"
                    >
                      Book a Demo
                    </a>
                  </div>
                </div>
                <BrowserMockup
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  accent={index % 2 === 0 ? "border-[var(--color-primary)]" : "border-[var(--color-secondary)]"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
