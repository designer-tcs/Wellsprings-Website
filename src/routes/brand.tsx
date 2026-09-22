import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Philosophy — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content:
          "Mind. Body. Heart. The Whole Child philosophy of Wellsprings Academy and the brand idea, motto system, voice and daily expression that flow from it.",
      },
      { property: "og:title", content: "Philosophy — Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "Wellsprings Academy is a Whole Child school. The brand exists to make that promise visible.",
      },
    ],
  }),
  component: PhilosophyPage,
});

const DIMENSIONS = [
  {
    eyebrow: "Mind",
    title: "Think",
    color: "var(--coral-600)",
    body:
      "The child who thinks. Intellectually engaged. Asks questions. Makes sense of the world. Learns to learn.",
  },
  {
    eyebrow: "Body",
    title: "Build",
    color: "var(--sun-700)",
    body:
      "The child who does. Physically engaged. Makes, plays, builds, moves. Learns through hands and action.",
  },
  {
    eyebrow: "Heart",
    title: "Belong",
    color: "var(--sage-700)",
    body:
      "The child who cares. Emotionally engaged. Values, character, belonging. Who the child becomes.",
  },
] as const;

const VOICE = [
  ["Human.", "Not institutional. Write to a parent, not a market."],
  ["Observant.", "Not declarative. Notice the child; don't lecture them."],
  ["Balanced.", "Not biased. Three equal dimensions, never one favourite."],
  ["Honest.", "Not polished. Plain words a six-year-old can repeat."],
] as const;

const DAY_TO_DAY = [
  {
    n: "01",
    title: "Classroom",
    body:
      "Inquiry walls. Maker labs. Circle time. Every lesson holds a Think moment, a Build moment, a Belong moment.",
  },
  {
    n: "02",
    title: "Parent comms",
    body:
      "Weekly note in three beats — one thing your child thought, one thing they built, one thing they belonged to.",
  },
  {
    n: "03",
    title: "School events",
    body:
      "Inquiry Fair (Think). Maker Day (Build). Community Day (Belong). One flagship moment per dimension per term.",
  },
  {
    n: "04",
    title: "Reporting",
    body:
      "Report cards organised as three dimensions, not subjects alone. Parents see the whole child, not just marks.",
  },
] as const;

function PhilosophyPage() {
  return (
    <article>
      <SectionHeader
        num="01"
        title="Mind. Body. Heart."
        intro="Wellsprings Academy is a Whole Child school. Most schools develop one side of your child. We don't choose sides. This brand exists to make that promise visible — in a classroom, on a wall, in a letter home."
      />

      {/* Brand idea */}
      <SubHeader label="Brand idea" title="Grow the whole child — not just the student." />
      <p className="font-sans text-[16px] leading-[1.7] text-[var(--grey-800)]">
        Used as a north star — not a tagline, but a filter. If something we
        publish, decorate or say at assembly doesn't honour all three
        dimensions, it isn't on brand.
      </p>

      {/* The promise */}
      <SubHeader label="The promise" title="Most schools develop one side of your child. We don't choose sides." />
      <blockquote className="border-l-2 border-[var(--coral-600)] pl-6">
        <p className="font-serif text-2xl leading-[1.4] text-[var(--ws-ink)] md:text-3xl">
          To nurture every dimension of a child — intellectual, emotional,
          physical and social — so they grow into balanced individuals who are
          not just successful, but deeply fulfilled.
        </p>
      </blockquote>

      {/* Three dimensions */}
      <SubHeader label="The three dimensions" title="One philosophy. Three words." />
      <p className="font-sans text-[16px] leading-[1.7] text-[var(--grey-800)]">
        <span className="italic">Mind. Body. Heart.</span> is the architecture.{" "}
        <span className="italic">Think. Build. Belong.</span> is how it shows up
        daily — short enough for a poster, active enough for a lesson plan,
        warm enough for a parent.
      </p>

      <div className="mt-8 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-3">
        {DIMENSIONS.map((d) => (
          <div key={d.title} className="bg-white p-7">
            <p
              className="font-mono text-[11px] uppercase tracking-[0.18em]"
              style={{ color: d.color }}
            >
              {d.eyebrow}
            </p>
            <h3 className="mt-3 font-serif text-5xl" style={{ color: d.color }}>
              {d.title}.
            </h3>
            <p className="mt-5 font-sans text-[15px] leading-[1.65] text-[var(--grey-800)]">
              {d.body}
            </p>
          </div>
        ))}
      </div>

      {/* Motto system */}
      <SubHeader label="The motto system" title="Two tiers, one belief" />
      <div className="border border-[var(--ws-ink)] bg-white">
        <div className="grid gap-6 border-b border-[var(--grey-300)] p-7 md:grid-cols-[200px_1fr] md:gap-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
              Tier 1
            </p>
            <p className="mt-1 font-serif text-lg">Permanent motto</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-[var(--ws-ink)] md:text-4xl">
              Think · Build · Belong
            </p>
            <p className="mt-3 font-sans text-[15px] leading-[1.7] text-[var(--grey-800)]">
              Website, prospectus, uniform crest context, main corridor wall.
              The institutional tagline.
            </p>
          </div>
        </div>
        <div className="grid gap-6 p-7 md:grid-cols-[200px_1fr] md:gap-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
              Tier 2
            </p>
            <p className="mt-1 font-serif text-lg">Warmer voice</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-[var(--ws-ink)] md:text-4xl">
              Wonder · Play · Belong
            </p>
            <p className="mt-3 font-sans text-[15px] leading-[1.7] text-[var(--grey-800)]">
              Social media captions, early-years comms, admission open days,
              parent newsletters.
            </p>
          </div>
        </div>
      </div>

      {/* Voice */}
      <SubHeader label="Voice" title="How Wellsprings sounds" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        {VOICE.map(([title, body]) => (
          <div key={title} className="bg-white p-7">
            <p className="font-serif text-3xl text-[var(--ws-ink)]">{title}</p>
            <p className="mt-4 font-sans text-[15px] leading-[1.7] text-[var(--grey-800)]">
              {body}
            </p>
          </div>
        ))}
      </div>

      {/* In the school */}
      <SubHeader label="In the school" title="How the philosophy lives day to day" />
      <ol className="border-t border-[var(--grey-300)]">
        {DAY_TO_DAY.map((row) => (
          <li
            key={row.n}
            className="grid grid-cols-[60px_1fr] gap-6 border-b border-[var(--grey-300)] py-6 md:grid-cols-[80px_220px_1fr] md:gap-10"
          >
            <span className="font-mono text-xs text-[var(--grey-700)]">{row.n}</span>
            <span className="col-span-1 font-serif text-lg text-[var(--ws-ink)] md:col-span-1">
              {row.title}
            </span>
            <p className="col-span-2 font-sans text-[15px] leading-[1.7] text-[var(--grey-800)] md:col-span-1">
              {row.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← Back to website
        </Link>
        <Link to="/logo" className="text-lg font-medium underline-offset-4 hover:underline">
          Next 02 — Logo →
        </Link>
      </div>
    </article>
  );
}
