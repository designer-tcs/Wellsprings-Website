import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";

export const Route = createFileRoute("/typography")({
  head: () => ({
    meta: [
      { title: "Typography — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content:
          "Wellsprings typography pairs Lora for the human voice, Inter for the working voice and JetBrains Mono for labels. Scale, tracking and rules.",
      },
      { property: "og:title", content: "Typography — Wellsprings Academy" },
      { property: "og:description", content: "Type system, scale and rules." },
    ],
  }),
  component: TypographyPage,
});

const SCALE = [
  { px: 64, lh: "108%", use: "Display — assembly banners, prospectus covers", family: "serif" },
  { px: 48, lh: "112%", use: "H1 — page titles", family: "serif" },
  { px: 32, lh: "120%", use: "H2 — section opens", family: "serif" },
  { px: 22, lh: "130%", use: "H3 — sub-sections", family: "serif" },
  { px: 18, lh: "150%", use: "Body large — intros, pull quotes", family: "sans" },
  { px: 15, lh: "155%", use: "Body — letters home, long copy", family: "sans" },
  { px: 11, lh: "150%", use: "Caption / labels", family: "mono" },
];

function TypographyPage() {
  return (
    <article>
      <SectionHeader
        num="03"
        title="Typography."
        intro="Two voices that mirror the school: a serif that carries warmth and tradition (Lora — the wordmark face) and a humanist sans for clarity in long-form parent communication (Inter)."
      />

      <SubHeader label="3.1" title="Typefaces" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        <div className="bg-white p-7">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
            Display & headings
          </p>
          <p className="mt-3 font-serif text-6xl">Lora</p>
          <p className="mt-1 font-serif text-2xl italic text-[var(--grey-800)]">Regular · Medium · Semibold</p>
          <p className="mt-4 font-sans text-sm text-[var(--grey-800)]">
            The Wellsprings wordmark is set in this family. Use for titles,
            section headings, pull-quotes and the rare hero phrase. Carries
            warmth, scholarship, and slight romance — never coldness.
          </p>
        </div>
        <div className="bg-white p-7">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
            Body & UI
          </p>
          <p className="mt-3 font-sans text-5xl font-medium">Inter</p>
          <p className="mt-1 font-sans text-base text-[var(--grey-800)]">Regular · Medium · Semibold</p>
          <p className="mt-4 font-sans text-sm text-[var(--grey-800)]">
            For everything a parent needs to read at a glance: weekly notes,
            forms, the website, the report card. Clear at small sizes,
            friendly at large ones, never institutional.
          </p>
        </div>
      </div>
      <div className="mt-3 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)]">
        <div className="bg-white p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
            Tertiary · technical
          </p>
          <p className="mt-2 font-mono text-2xl">JetBrains Mono</p>
          <p className="mt-2 font-sans text-sm text-[var(--grey-800)]">
            Section numerals, labels, dates, room numbers — anything that should feel like a tag, not a sentence.
          </p>
        </div>
      </div>

      <SubHeader label="3.2" title="Scale" />
      <div className="border-y border-[var(--ws-ink)]">
        {SCALE.map((s) => (
          <div
            key={s.px}
            className="grid grid-cols-[60px_70px_1fr] items-baseline gap-4 border-b border-[var(--grey-300)] py-5 last:border-b-0"
          >
            <span className="font-mono text-[11px] text-[var(--grey-700)]">{s.px}px</span>
            <span className="font-mono text-[11px] text-[var(--grey-700)]">{s.lh}</span>
            <span
              className="truncate"
              style={{
                fontSize: `${s.px}px`,
                lineHeight: s.lh,
                fontFamily:
                  s.family === "serif"
                    ? "var(--font-serif)"
                    : s.family === "mono"
                      ? "var(--font-mono)"
                      : "var(--font-sans)",
                fontWeight: s.family === "serif" ? 500 : 400,
              }}
            >
              {s.use}
            </span>
          </div>
        ))}
      </div>

      <SubHeader label="3.3" title="The pairing rule" />
      <ul className="divide-y divide-[var(--grey-300)] border-y border-[var(--grey-300)]">
        {[
          ["Headings", "Lora. Always."],
          ["Body & UI", "Inter. Always."],
          ["Pull-quotes", "Lora italic, 24–32px, with a left rule in a brand color."],
          ["Numbers / dates", "JetBrains Mono — never use mono for sentences."],
          ["Sentence case", "Headings and buttons. Title Case Reads Like A Brochure."],
        ].map(([k, v]) => (
          <li key={k} className="grid grid-cols-[200px_1fr] gap-6 py-4 text-[15px]">
            <span className="font-medium">{k}</span>
            <span className="font-sans text-[var(--grey-800)]">{v}</span>
          </li>
        ))}
      </ul>

      <SubHeader label="3.4" title="Specimen" />
      <div className="border border-[var(--ws-ink)] bg-white p-6 md:p-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          Letter to parents · Term 2 · Week 4
        </p>
        <h3 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
          A small thing your daughter built today.
        </h3>
        <p className="mt-6 max-w-[60ch] font-sans text-[16px] leading-[1.6] text-[var(--grey-800)]">
          In the maker corner this morning, Aanya spent forty minutes solving
          how to balance a paper bridge across two chairs without it sagging in
          the middle. Three attempts. One quiet conversation with Ravi about
          arches. A small triumph that won't appear on a report card.
        </p>
        <blockquote className="mt-8 border-l-2 border-[var(--coral-600)] pl-5 font-serif text-2xl italic leading-snug text-[var(--ws-ink)]">
          &ldquo;Grow the whole child &mdash; not just the student.&rdquo;
        </blockquote>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          Wellsprings Academy · Specimen 03 · 2026
        </p>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/logo" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← 02 Logo
        </Link>
        <Link to="/color" className="text-lg font-medium underline-offset-4 hover:underline">
          04 — Color →
        </Link>
      </div>
    </article>
  );
}
