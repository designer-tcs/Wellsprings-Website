import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";

export const Route = createFileRoute("/motion")({
  head: () => ({
    meta: [
      { title: "Motion — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content: "Motion at Wellsprings is gentle and purposeful — easings, durations, and the 'unhurried, never bouncy' principle.",
      },
      { property: "og:title", content: "Motion — Wellsprings Academy" },
      { property: "og:description", content: "Easing, duration and motion principles for a school brand." },
    ],
  }),
  component: MotionPage,
});

const TOKENS = [
  ["fast", "150ms", "Hover, focus, micro-state on the website"],
  ["base", "240ms", "Buttons, menus, the parent portal"],
  ["slow", "400ms", "Page transitions, modals, image reveals"],
  ["unhurried", "600ms", "Hero reveals on the homepage, tagline reveals"],
];

const EASING = [
  ["gentle", "cubic-bezier(0.25, 0.1, 0.25, 1)", "Default for all entrances and exits"],
  ["settle", "cubic-bezier(0.32, 0, 0, 1)", "When something needs to feel like it's coming to rest"],
  ["linear", "linear", "Loading bars, scrubs, video timelines"],
];

function MotionPage() {
  return (
    <article>
      <SectionHeader
        num="09"
        title="Motion."
        intro="Motion at Wellsprings is unhurried. Things move because they need to — to clarify cause and effect, to anchor a transition, to give a child's eye time to follow. Nothing bounces, nothing celebrates."
      />

      <SubHeader label="9.1" title="Duration" />
      <ul className="divide-y divide-[var(--grey-300)] border-y border-[var(--grey-300)]">
        {TOKENS.map(([k, v, use]) => (
          <li key={k} className="grid grid-cols-[140px_120px_1fr] gap-6 py-4 text-[15px]">
            <span className="font-mono">{k}</span>
            <span className="font-mono text-[var(--grey-800)]">{v}</span>
            <span className="font-sans text-[var(--grey-800)]">{use}</span>
          </li>
        ))}
      </ul>

      <SubHeader label="9.2" title="Easing" />
      <ul className="divide-y divide-[var(--grey-300)] border-y border-[var(--grey-300)]">
        {EASING.map(([k, v, use]) => (
          <li key={k} className="grid grid-cols-[140px_1fr_1fr] gap-6 py-4 text-[15px]">
            <span className="font-mono">{k}</span>
            <span className="font-mono text-[var(--grey-800)]">{v}</span>
            <span className="font-sans text-[var(--grey-800)]">{use}</span>
          </li>
        ))}
      </ul>

      <SubHeader label="9.3" title="Principles" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-3">
        {[
          ["Cause and effect", "Every animation answers a question someone just asked — a click, a scroll, a tap."],
          ["No overshoot", "Things settle where they land. No spring, no wobble, no celebratory bounce."],
          ["Reduced motion", "All transitions honor prefers-reduced-motion. A child or parent who needs stillness gets stillness."],
        ].map(([t, d]) => (
          <div key={t} className="bg-white p-6">
            <h3 className="font-serif text-2xl">{t}.</h3>
            <p className="mt-2 font-sans text-sm text-[var(--grey-800)]">{d}</p>
          </div>
        ))}
      </div>

      <SubHeader label="9.4" title="The motto reveal" />
      <p className="max-w-[60ch] text-[15px] leading-[1.6] text-[var(--grey-800)]">
        On the website hero, Think · Build · Belong appears one word at a time
        — 240ms apart, gentle easing, no fade flash. Each word in its
        dimension's color. Total reveal under one second.
      </p>
      <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 border border-[var(--ws-ink)] bg-white p-10">
        <span className="font-serif text-5xl md:text-7xl" style={{ color: "var(--coral-600)" }}>
          Think.
        </span>
        <span className="font-serif text-5xl md:text-7xl" style={{ color: "var(--sun-700)" }}>
          Build.
        </span>
        <span className="font-serif text-5xl md:text-7xl" style={{ color: "var(--sage-700)" }}>
          Belong.
        </span>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/language" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← 08 Language
        </Link>
        <Link to="/resources" className="text-lg font-medium underline-offset-4 hover:underline">
          10 — Resources →
        </Link>
      </div>
    </article>
  );
}
