import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";

export const Route = createFileRoute("/language")({
  head: () => ({
    meta: [
      { title: "Language — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content:
          "How Wellsprings sounds in writing — sentence case, plain words, the four voice principles, and the three-beat parent note.",
      },
      { property: "og:title", content: "Language — Wellsprings Academy" },
      { property: "og:description", content: "Voice, tone, the three-beat note, and naming." },
    ],
  }),
  component: LanguagePage,
});

const NAMES = [
  ["Wellsprings Academy", "The school. Always two words, capital W and A. Never abbreviate to WSA in parent-facing copy."],
  ["Think · Build · Belong", "The motto. Use a thin space and a middle dot ( · ), not a comma or hyphen."],
  ["Mind · Body · Heart", "The philosophy. Same punctuation as the motto."],
  ["The Whole Child", "Capitalised when used as a proper noun for our approach. Lowercase otherwise."],
  ["Wonder · Play · Belong", "Tier 2 voice — early years and parent newsletters only."],
];

const VOICE = [
  ["Human", "Not institutional. Write to a parent at a kitchen table, not a board of trustees."],
  ["Observant", "Not declarative. We notice the child. We don't lecture them."],
  ["Balanced", "Not biased. Equal weight to Mind, Body and Heart in every long communication."],
  ["Honest", "Not polished. Plain words a six-year-old can repeat back."],
];

const DO_DONT = [
  ["Aanya spent the morning building a paper bridge.", "Our students engaged in a STEAM-aligned engineering ideation."],
  ["Most schools develop one side of your child. We don't choose sides.", "Wellsprings Academy delivers holistic 360-degree educational outcomes."],
  ["Maker Day is on Friday. Bring a shoebox.", "Kindly note that the Maker Day initiative shall transpire on Friday."],
  ["Your son cared for a younger student today.", "Demonstrated values-driven peer leadership behaviours."],
];

function LanguagePage() {
  return (
    <article>
      <SectionHeader
        num="08"
        title="Language."
        intro="How we write is part of how we look. The rules are short on purpose: sentence case, plain words, three beats per parent note. We sound like a thoughtful adult talking about your child, not a brochure talking about itself."
      />

      <SubHeader label="8.1" title="Sentence case, always" />
      <p className="text-[15px] leading-[1.6] text-[var(--grey-800)]">
        Headings, buttons, nav items, page titles, event names — all sentence
        case. Only proper nouns take a capital (Wellsprings, Aanya, Sarjapura,
        Bangalore). Title Case Reads Like A School Brochure From 1998.
      </p>
      <div className="mt-5 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        <div className="bg-white p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--sage-700)]">
            Yes
          </p>
          <p className="mt-2 font-serif text-2xl">Maker day this Friday</p>
        </div>
        <div className="bg-white p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--coral-700)]">
            No
          </p>
          <p className="mt-2 font-serif text-2xl text-[var(--grey-600)] line-through">
            Maker Day This Friday
          </p>
        </div>
      </div>

      <SubHeader label="8.2" title="Voice" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        {VOICE.map(([t, d]) => (
          <div key={t} className="bg-white p-6">
            <h3 className="font-serif text-2xl">{t}.</h3>
            <p className="mt-2 font-sans text-sm text-[var(--grey-800)]">{d}</p>
          </div>
        ))}
      </div>

      <SubHeader label="8.3" title="The three-beat parent note" />
      <p className="max-w-[60ch] text-[15px] leading-[1.6] text-[var(--grey-800)]">
        Every weekly note home follows the same shape — one Think moment, one
        Build moment, one Belong moment. Specific. Named. Short.
      </p>
      <div className="mt-5 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-3">
        {[
          { c: "var(--coral-600)", label: "Think", body: "“Aanya asked why the moon looks bigger near the horizon. We didn't have an answer; we have a plan to find one.”" },
          { c: "var(--sun-700)", label: "Build", body: "“Forty minutes on a paper bridge. Three failed prototypes. The fourth held a pencil case.”" },
          { c: "var(--sage-700)", label: "Belong", body: "“Sat with a Class 1 student at lunch. Tied her shoelace without being asked.”" },
        ].map((b) => (
          <div key={b.label} className="bg-white p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider" style={{ color: b.c }}>
              {b.label}
            </p>
            <p className="mt-3 font-serif text-[18px] italic leading-snug text-[var(--ws-ink)]">
              {b.body}
            </p>
          </div>
        ))}
      </div>

      <SubHeader label="8.4" title="Naming" />
      <ul className="divide-y divide-[var(--grey-300)] border-y border-[var(--grey-300)]">
        {NAMES.map(([n, d]) => (
          <li key={n} className="grid gap-3 py-4 text-[15px] md:grid-cols-[260px_1fr] md:gap-6">
            <span className="font-serif text-lg">{n}</span>
            <span className="font-sans text-[var(--grey-800)]">{d}</span>
          </li>
        ))}
      </ul>

      <SubHeader label="8.5" title="Do / don't" />
      <div className="border-y border-[var(--ws-ink)]">
        <div className="grid grid-cols-1 border-b border-[var(--grey-300)] py-3 font-mono text-[11px] uppercase tracking-wider sm:grid-cols-2">
          <span className="text-[var(--sage-700)]">Do</span>
          <span className="text-[var(--coral-700)]">Don't</span>
        </div>
        {DO_DONT.map(([yes, no]) => (
          <div
            key={yes}
            className="grid grid-cols-1 gap-6 border-b border-[var(--grey-300)] py-4 text-[15px] last:border-b-0 sm:grid-cols-2"
          >
            <span>{yes}</span>
            <span className="text-[var(--grey-600)] line-through">{no}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/photography" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← 07 Photography
        </Link>
        <Link to="/motion" className="text-lg font-medium underline-offset-4 hover:underline">
          09 — Motion →
        </Link>
      </div>
    </article>
  );
}
