import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#140f24] py-24 text-white">
      {/* Background with floating device images */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#140f24] via-[#140f24]/80 to-transparent z-10" />
        <div className="absolute inset-0 grid grid-cols-4 gap-4 p-8 transform -rotate-6 scale-110">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br from-[#2a1f3d] to-[#1a1228] border border-white/10 shadow-2xl"
              style={{
                height: '280px',
                transform: `translateY(${(i % 2) * 40 - 20}px) rotate(${(i % 3) * 2 - 2}deg)`,
              }}
            >
              <div className="p-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-pink-600" />
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-3/4 rounded bg-white/20" />
                  <div className="h-3 w-1/2 rounded bg-white/10" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <div className="h-20 rounded-lg bg-white/5" />
                  <div className="h-20 rounded-lg bg-white/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl rounded-[2rem] bg-white p-10 text-[var(--color-text-primary)] shadow-[0_34px_72px_rgba(15,10,24,0.4)] sm:p-12">
          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
            Let&apos;s make your next flagship event the best one yet
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Contact our team to see how TAGTOG can help you simplify and scale a successful conference program.
          </p>
          <div className="mt-8">
            <Link
              href="/request-demo"
              className="inline-flex h-14 items-center justify-center rounded-md bg-[var(--color-primary)] px-7 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
