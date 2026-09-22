import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content: "Download the Wellsprings Academy logo, type specimen, color tokens, parent-note templates and more.",
      },
      { property: "og:title", content: "Resources — Wellsprings Academy" },
      { property: "og:description", content: "Brand assets, templates and downloads." },
    ],
  }),
  component: ResourcesPage,
});

const ASSETS = [
  ["Logo pack", "SVG, PDF, PNG of the Wellsprings mark in stacked, horizontal and crest variants.", "wellsprings-logo-pack.zip", "2.4 MB"],
  ["Type specimen", "Cormorant Garamond + Inter with full character set, weights and brand scale.", "wellsprings-type-specimen.pdf", "3.1 MB"],
  ["Color tokens", "CSS variables, Figma styles and Tailwind config for the Coral / Sun / Sage / Slate system.", "wellsprings-color-tokens.zip", "180 KB"],
  ["Parent note template", "Word and Google Doc — the three-beat note (Think · Build · Belong).", "wellsprings-parent-note.zip", "92 KB"],
  ["Report card template", "InDesign + PDF — three-dimension report card layout.", "wellsprings-report-card.zip", "1.6 MB"],
  ["Keynote template", "16:9 deck with covers, content layouts and a closing slide for school events.", "wellsprings-keynote.zip", "9.4 MB"],
];

const CONTACTS = [
  ["Brand & assets", "Anything visual. New logo file, a presentation cover, a poster review.", "brand@wellspringsacademy.in"],
  ["Admissions & comms", "Letters home, the parent newsletter, social media.", "communications@wellspringsacademy.in"],
  ["Founders", "Strategy, motto, philosophical questions about how the brand evolves.", "office@wellspringsacademy.in"],
];

function ResourcesPage() {
  return (
    <article>
      <SectionHeader
        num="10"
        title="Resources."
        intro="Everything you need to apply the Wellsprings brand. Logo files, type, color tokens, the parent-note template, the three-dimension report card, and a deck. If something is missing, ask."
      />

      <SubHeader label="10.1" title="Downloads" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        {ASSETS.map(([title, desc, file, size]) => (
          <div key={file} className="flex flex-col bg-white p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-2xl">{title}</h3>
              <span className="font-mono text-[11px] text-[var(--grey-700)]">{size}</span>
            </div>
            <p className="mt-2 flex-1 font-sans text-sm text-[var(--grey-800)]">{desc}</p>
            <button
              type="button"
              className="mt-5 inline-flex w-fit items-center gap-2 border border-[var(--ws-ink)] bg-[var(--ws-ink)] px-4 py-2 text-sm font-medium text-[var(--ws-paper)] transition-colors hover:bg-[var(--ws-paper)] hover:text-[var(--ws-ink)]"
            >
              Download · <span className="font-mono">{file}</span>
            </button>
          </div>
        ))}
      </div>

      <SubHeader label="10.2" title="Who to write to" />
      <ul className="divide-y divide-[var(--grey-300)] border-y border-[var(--grey-300)]">
        {CONTACTS.map(([who, what, email]) => (
          <li key={email} className="grid gap-3 py-5 md:grid-cols-[200px_1fr_280px] md:gap-6">
            <span className="font-serif text-xl">{who}</span>
            <span className="font-sans text-[14px] text-[var(--grey-800)]">{what}</span>
            <span className="font-mono text-sm text-[var(--ws-ink)]">{email}</span>
          </li>
        ))}
      </ul>

      <SubHeader label="10.3" title="Credits" />
      <div className="border border-[var(--ws-ink)] bg-white p-6">
        <p className="font-sans text-[15px] leading-[1.6] text-[var(--grey-800)]">
          Brand strategy and motto system developed with{" "}
          <span className="font-medium text-[var(--ws-ink)]">The Chalk Story</span>.
          Visual identity and brand guidelines extended in-house. Whole Child
          philosophy authored by the Wellsprings Academy founding team.
        </p>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/motion" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← 09 Motion
        </Link>
        <Link to="/brand" className="text-lg font-medium underline-offset-4 hover:underline">
          ↑ Back to Philosophy
        </Link>
      </div>
    </article>
  );
}
