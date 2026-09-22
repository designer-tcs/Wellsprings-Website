import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";

export const Route = createFileRoute("/iconography")({
  head: () => ({
    meta: [
      { title: "Iconography — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content: "Wellsprings icons: 24px grid, 1.5px stroke, rounded caps, monotone — soft enough for a child, clear enough for a parent.",
      },
      { property: "og:title", content: "Iconography — Wellsprings Academy" },
      { property: "og:description", content: "Icon system, grid, stroke and pictograms for the three dimensions." },
    ],
  }),
  component: IconographyPage,
});

// Three dimension pictograms — Think, Build, Belong
const DIMENSION_ICONS = [
  {
    label: "Think",
    color: "var(--coral-600)",
    paths: (
      <>
        <circle cx="12" cy="11" r="6" />
        <path d="M9 18h6M10 21h4" />
        <path d="M12 5v-2M5 8l-1.5-1M19 8l1.5-1" />
      </>
    ),
  },
  {
    label: "Build",
    color: "var(--sun-700)",
    paths: (
      <>
        <path d="M4 20h16" />
        <path d="M6 20v-7l6-5 6 5v7" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
  },
  {
    label: "Belong",
    color: "var(--sage-700)",
    paths: (
      <>
        <circle cx="9" cy="10" r="3" />
        <circle cx="16" cy="10" r="2.5" />
        <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
        <path d="M14 19c0-2.2 1.8-4 4-4 2 0 3 1.5 3 3" />
      </>
    ),
  },
];

const ICONS = [
  <path key="1" d="M4 4h16v16H4z" />,
  <path key="2" d="M4 7h16M4 12h16M4 17h10" />,
  <path key="3" d="M5 12l5 5L19 7" />,
  <path key="4" d="M12 3v18M3 12h18" />,
  <circle key="5" cx="12" cy="12" r="8" />,
  <path key="6" d="M4 17l6-6 4 4 6-7" />,
  <path key="7" d="M3 7l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4" />,
  <path key="8" d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />,
];

function IconographyPage() {
  return (
    <article>
      <SectionHeader
        num="05"
        title="Iconography."
        intro="Icons are line-based, monotone, and built on a 24-pixel grid. Soft corners and rounded caps keep them friendly — these are icons for a school, not a stock exchange."
      />

      <SubHeader label="5.1" title="The three dimensions" />
      <p className="max-w-[60ch] text-[15px] leading-[1.6] text-[var(--grey-800)]">
        Three primary pictograms anchor the icon set. Each carries one dimension
        of the Whole Child and is tinted in its brand color when used as a heading mark.
      </p>
      <div className="mt-6 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-3">
        {DIMENSION_ICONS.map((d) => (
          <div key={d.label} className="flex flex-col items-center justify-center bg-white p-10">
            <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              stroke={d.color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {d.paths}
            </svg>
            <p className="mt-4 font-serif text-2xl" style={{ color: d.color }}>
              {d.label}.
            </p>
          </div>
        ))}
      </div>

      <SubHeader label="5.2" title="System" />
      <ul className="divide-y divide-[var(--grey-300)] border-y border-[var(--grey-300)]">
        {[
          ["Grid", "24 × 24 px, 2 px live area padding"],
          ["Stroke", "1.5 px, uniform — never variable"],
          ["Caps & joins", "Round, always"],
          ["Color", "currentColor — never multi-tone in the same icon"],
          ["Corners", "2px corner radius — gentle, never sharp"],
        ].map(([k, v]) => (
          <li key={k} className="grid grid-cols-[160px_1fr] gap-6 py-4 text-[15px]">
            <span className="font-medium">{k}</span>
            <span className="font-mono text-[var(--grey-800)]">{v}</span>
          </li>
        ))}
      </ul>

      <SubHeader label="5.3" title="UI set" />
      <div className="grid grid-cols-3 gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] sm:grid-cols-4">
        {ICONS.map((icon, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center bg-white text-[var(--ws-ink)]"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icon}
            </svg>
          </div>
        ))}
      </div>

      <SubHeader label="5.4" title="Sizes" />
      <div className="flex items-end gap-8 border-y border-[var(--grey-300)] py-8">
        {[16, 20, 24, 32, 48].map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <svg
              width={s}
              height={s}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="8" />
              <path d="M12 8v4l3 2" />
            </svg>
            <span className="font-mono text-[11px] text-[var(--grey-700)]">{s}px</span>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/color" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← 04 Color
        </Link>
        <Link to="/illustration" className="text-lg font-medium underline-offset-4 hover:underline">
          06 — Illustration →
        </Link>
      </div>
    </article>
  );
}
