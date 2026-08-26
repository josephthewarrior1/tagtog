const problemCards = [
  {
    question: "Which version is the latest and correct one?",
    image:
      "https://images.pexels.com/photos/10041250/pexels-photo-10041250.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    question: "Where can I actually find what I need right now?",
    image:
      "https://images.pexels.com/photos/7644084/pexels-photo-7644084.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    question: "Who changed this, and was it approved?",
    image:
      "https://images.pexels.com/photos/8927453/pexels-photo-8927453.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    question: "Who should be allowed to see or edit this?",
    image:
      "https://images.pexels.com/photos/13657523/pexels-photo-13657523.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-[var(--color-bg-light)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Sound familiar?</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Fragmented operations create avoidable questions.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {problemCards.map((card, index) => (
            <article
              key={card.question}
              className="group relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-[var(--color-secondary)]/10 bg-[var(--color-bg-dark)] shadow-sm"
            >
              <img
                src={card.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,30,46,0.14)_0%,rgba(32,30,46,0.76)_78%,rgba(32,30,46,0.92)_100%)]" />
              <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                <p className="font-mono text-xs font-bold text-white/52">0{index + 1}</p>
                <p className="mt-4 max-w-sm text-xl font-semibold leading-8 text-white sm:text-[1.65rem]">
                  {card.question}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
