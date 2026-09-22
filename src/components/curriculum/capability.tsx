import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export type Capability = {
  name: string;
  icon: LucideIcon;
};

/**
 * "What these years build" — icon + name only. No explanation, no meters.
 */
export function CapabilityBoard({
  items,
  accent,
}: {
  items: Capability[];
  accent: string;
}) {
  return (
    <div className="grid gap-px bg-[var(--grey-200)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => {
        const Icon = c.icon;
        return (
          <Reveal key={c.name} delay={i * 70}>
            <article className="group h-full bg-white p-6">
              <span
                className="flex h-11 w-11 items-center justify-center transition-transform duration-500 group-hover:-translate-y-1"
                style={{ background: `color-mix(in oklab, ${accent} 12%, white)` }}
                aria-hidden
              >
                <Icon size={20} strokeWidth={1.5} style={{ color: accent }} />
              </span>
              <p className="mt-5 text-[15px] leading-[1.6] text-[var(--ws-ink)]">{c.name}</p>
            </article>
          </Reveal>

        );
      })}
    </div>
  );
}

/**
 * Homework — a big, plain heading and three short facts.
 */
export function HomeworkRhythm({
  accent,
  rules,
  headline,
  week,
  weekNote,
}: {
  accent: string;
  headline: string;
  rules: { k: string; v: string }[];
  week?: { d: string; s: string }[];
  weekNote?: string;
}) {
  return (
    <div className="border border-[var(--grey-200)] bg-white">
      <div className="p-7 md:p-10">
        <h3
          className="font-serif text-[40px] leading-[1.05] text-[var(--ws-ink)] md:text-[56px]"
          style={{ color: accent }}
        >
          Homework
        </h3>
        <p className="mt-4 max-w-[40ch] text-[17px] leading-[1.6] text-[var(--grey-800)] md:text-[19px]">
          {headline}
        </p>
      </div>

      <div className="grid gap-px border-t border-[var(--grey-200)] bg-[var(--grey-200)] sm:grid-cols-3">
        {rules.map((r) => (
          <div key={r.k} className="bg-[var(--ws-paper)] p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
              {r.k}
            </p>
            <p className="mt-2 text-[17px] leading-[1.5] text-[var(--ws-ink)]">{r.v}</p>
          </div>
        ))}
      </div>

      {week && week.length > 0 && (
        <div className="border-t border-[var(--grey-200)] p-7 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
            The week at a glance
          </p>
          <ul className="mt-5">
            {week.map((w, i) => (
              <Reveal key={w.d} delay={i * 50}>
                <li className="flex items-baseline gap-5 border-b border-[var(--grey-200)] py-3.5 last:border-b-0">
                  <span
                    className="w-10 shrink-0 font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    {w.d}
                  </span>
                  <span className="text-[15px] leading-[1.6] text-[var(--ws-ink)]">{w.s}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          {weekNote && (
            <p className="mt-5 text-[14px] leading-[1.6] text-[var(--grey-600)]">{weekNote}</p>
          )}
        </div>
      )}
    </div>
  );
}


/**
 * "How we teach" — numbered lines on paper rather than another tile grid.
 * Different in texture from SubjectMatrix / CapabilityBoard, but kept in the
 * site palette (no near-black blocks).
 */
export function MethodList({
  items,
  accent,
  label = "How we teach",
}: {
  items: Capability[];
  accent: string;
  label?: string;
}) {
  return (
    <div className="border border-[var(--grey-200)] bg-[var(--ws-paper)] px-6 py-8 md:px-10 md:py-11">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
        {label}
      </p>
      <ul className="mt-7 grid gap-x-12 md:grid-cols-2">
        {items.map((m, i) => {
          const Icon = m.icon;
          return (
            <Reveal key={m.name} delay={i * 60}>
              <li className="flex items-center gap-4 border-b border-[var(--grey-200)] py-4">
                <span
                  className="font-mono text-[11px] tabular-nums"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon size={20} strokeWidth={1.5} style={{ color: accent }} aria-hidden />
                <span className="text-[15px] leading-[1.6] text-[var(--ws-ink)]">{m.name}</span>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Skill subjects — a "choose one" row with large numerals, deliberately not a
 * tile grid so it reads differently from Subjects offered.
 */
export function ChoiceRow({
  items,
  accent,
  note,
}: {
  items: { name: string; note: string }[];
  accent: string;
  note?: string;
}) {
  return (
    <div className="border border-[var(--grey-200)] bg-white">
      <ul className="grid gap-px bg-[var(--grey-200)] sm:grid-cols-3">
        {items.map((s, i) => (
          <Reveal key={s.name} delay={i * 70}>
            <li className="h-full bg-white p-7">
              <span
                className="font-serif text-[44px] leading-none"
                style={{ color: `color-mix(in oklab, ${accent} 45%, white)` }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-6 font-serif text-[22px] leading-[1.2] text-[var(--ws-ink)]">
                {s.name}
              </p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--grey-800)]">{s.note}</p>
            </li>
          </Reveal>
        ))}
      </ul>
      {note && (
        <p className="border-t border-[var(--grey-200)] p-6 text-[15px] leading-[1.7] text-[var(--grey-800)] md:px-7">
          {note}
        </p>
      )}
    </div>
  );
}

/**
 * Laboratories — a single tinted rail of chips, not a card grid.
 */
export function LabRail({
  items,
  accent,
  note,
}: {
  items: string[];
  accent: string;
  note?: string;
}) {
  return (
    <div>
      <div
        className="flex flex-wrap items-center gap-3 p-6 md:gap-4 md:p-8"
        style={{ background: `color-mix(in oklab, ${accent} 8%, white)` }}
      >
        {items.map((l, i) => (
          <Reveal key={l} delay={i * 60}>
            <span
              className="inline-flex items-center gap-3 border bg-white px-5 py-3 text-[15px] leading-none text-[var(--ws-ink)]"
              style={{ borderColor: `color-mix(in oklab, ${accent} 30%, white)` }}
            >
              <span
                className="font-mono text-[10px] tracking-[0.2em]"
                style={{ color: accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {l}
            </span>
          </Reveal>
        ))}
      </div>
      {note && (
        <p className="mt-5 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">{note}</p>
      )}
    </div>
  );
}

