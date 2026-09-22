import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    when: "Day one",
    title: "A quiet corner and one known adult",
    body: "No child is pushed into the classroom. There is a place to sit and watch until they feel ready.",
  },
  {
    when: "First week",
    title: "A little inside, a little outside",
    body: "A story, then a break. A song, then a break. The day is given in small pieces.",
  },
  {
    when: "Within two weeks",
    title: "They walk in on their own",
    body: "Some children do this on day two. Some take two weeks. Both are normal here.",
  },
];

export function SettlingIn() {
  return (
    <div className="border border-[var(--grey-200)] bg-white p-7 md:p-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--sun-700)]">
        Settling in · the youngest children
      </p>
      <h3 className="mt-3 font-serif text-2xl leading-[1.2] md:text-3xl">
        No child is rushed into class on day one.
      </h3>


      <ol className="mt-8 grid gap-px bg-[var(--grey-200)] md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.when} delay={i * 140} as="li" className="bg-white p-6">
            <div className="flex items-center gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full font-mono text-[11px]"
                style={{
                  background: "var(--sun-200)",
                  color: "var(--sun-700)",
                }}
              >
                {i + 1}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
                {s.when}
              </span>
            </div>
            <p className="mt-4 text-[15px] font-medium text-[var(--ws-ink)]">{s.title}</p>
            <p className="mt-2 text-[14px] leading-[1.7] text-[var(--grey-800)]">{s.body}</p>
            <div
              className="mt-5 h-[3px] w-full origin-left"
              style={{
                background: `linear-gradient(90deg, var(--sun-700) ${(i + 1) * 33}%, var(--grey-200) ${(i + 1) * 33}%)`,
              }}
            />
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
