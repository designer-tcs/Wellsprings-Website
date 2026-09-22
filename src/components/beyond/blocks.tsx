import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ *
 * Beyond Books — small infographic blocks.
 * Short labels, one line each. No paragraphs inside the graphics.
 * ------------------------------------------------------------------ */

/** Grid of disciplines: icon, name, one line. */
export function DisciplineGrid({
  items,
  accent,
  columns = 5,
}: {
  items: { name: string; note: string; icon: LucideIcon }[];
  accent: string;
  columns?: 2 | 3 | 4 | 5;
}) {
  const cols =
    columns === 5
      ? "sm:grid-cols-3 lg:grid-cols-5"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : columns === 3
          ? "sm:grid-cols-3"
          : "sm:grid-cols-2";
  return (
    <ul className={`grid grid-cols-2 gap-px bg-[var(--grey-200)] ${cols}`}>
      {items.map((s) => {
        const Icon = s.icon;
        return (
          <li key={s.name} className="bg-white p-5 md:p-6">
            <span
              className="flex h-10 w-10 items-center justify-center"
              style={{ background: `color-mix(in oklab, ${accent} 14%, white)` }}
              aria-hidden
            >
              <Icon size={18} strokeWidth={1.5} style={{ color: accent }} />
            </span>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
              {s.name}
            </p>
            <p className="mt-2 text-[14px] leading-[1.55] text-[var(--ws-ink)]">{s.note}</p>
          </li>
        );
      })}
    </ul>
  );
}

/** Quiet row of word chips — PE games, festivals, showcases. */
export function ChipRow({
  label,
  items,
  accent,
}: {
  label: string;
  items: readonly string[];
  accent: string;
}) {
  return (
    <div className="border border-[var(--grey-200)] bg-white p-6 md:p-7">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: accent }}>
        {label}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((i) => (
          <span
            key={i}
            className="border-b-2 bg-[var(--ws-paper)] px-3.5 py-2 text-[15px] text-[var(--ws-ink)]"
            style={{ borderColor: accent }}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Three or four headline facts on one rail. */
export function FactRail({ items, accent }: { items: { k: string; v: string }[]; accent: string }) {
  return (
    <dl className="grid gap-px bg-[var(--grey-200)] sm:grid-cols-3">
      {items.map((f) => (
        <div key={f.k} className="bg-white px-5 py-6">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-600)]">
            {f.k}
          </dt>
          <dd className="mt-2 font-serif text-[20px] leading-[1.25] text-[var(--ws-ink)]">{f.v}</dd>
          <span className="mt-4 block h-[3px] w-8" style={{ background: accent }} aria-hidden />
        </div>
      ))}
    </dl>
  );
}

/** A weekly block, shown as a single clear badge: from / how often / length. */
export function WeeklyBlock({
  from,
  often,
  length,
  accent,
}: {
  from: string;
  often: string;
  length: string;
  accent: string;
}) {
  const parts = [
    { k: "From", v: from },
    { k: "How often", v: often },
    { k: "Length", v: length },
  ];
  return (
    <div className="flex flex-wrap items-stretch gap-px bg-[var(--grey-200)]">
      {parts.map((p) => (
        <div key={p.k} className="min-w-[150px] flex-1 bg-white px-5 py-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-600)]">
            {p.k}
          </p>
          <p className="mt-2 font-serif text-[24px] leading-none" style={{ color: accent }}>
            {p.v}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Progression ladder — what children build, grade band by grade band. */
export function Ladder({
  steps,
  accent,
}: {
  steps: { band: string; body: string }[];
  accent: string;
}) {
  return (
    <ol className="grid gap-px bg-[var(--grey-200)] md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.band} className="relative bg-white p-6 md:p-7">
          <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: accent }}>
            0{i + 1}
          </span>
          <p className="mt-3 font-serif text-[22px] leading-none text-[var(--ws-ink)]">{s.band}</p>
          <span
            className="mt-4 block h-[3px]"
            style={{ background: accent, width: `${33 * (i + 1)}%` }}
            aria-hidden
          />
          <p className="mt-4 text-[15px] leading-[1.7] text-[var(--grey-800)]">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** The loop every making block ends with. */
export function LoopStrip({ steps, accent }: { steps: readonly string[]; accent: string }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-3 gap-y-3">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-3">
          {i > 0 && (
            <span className="text-[var(--grey-400)]" aria-hidden>
              →
            </span>
          )}
          <span className="flex items-center gap-2 border border-[var(--grey-200)] bg-white px-4 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} aria-hidden />
            <span className="text-[15px] text-[var(--ws-ink)]">{s}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Vocational projects, grouped by the kind of work. */
export function WorkGrid({
  items,
  accent,
  columns = 3,
}: {
  items: { kind: string; name: string; note: string; icon: LucideIcon }[];
  accent: string;
  columns?: 2 | 3;
}) {
  return (
    <ul
      className={`grid gap-px bg-[var(--grey-200)] sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
    >
      {items.map((w) => {
        const Icon = w.icon;
        return (
          <li key={w.name} className="bg-white p-6">
            <div className="flex items-center gap-3">
              <Icon size={20} strokeWidth={1.5} style={{ color: accent }} aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
                {w.kind}
              </span>
            </div>
            <p className="mt-4 font-serif text-[20px] leading-tight text-[var(--ws-ink)]">
              {w.name}
            </p>
            <p className="mt-2 text-[14px] leading-[1.65] text-[var(--grey-800)]">{w.note}</p>
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------------------ *
 * Photo-led tiles — each activity gets its own picture and name.
 * ------------------------------------------------------------------ */

export function PhotoTiles({
  items,
  accent,
  columns = 3,
}: {
  items: { name: string; note: string; image: string; alt?: string }[];
  accent: string;
  columns?: 2 | 3 | 4 | 5;
}) {
  const cols =
    columns === 5
      ? "sm:grid-cols-3 lg:grid-cols-5"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : columns === 3
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2";
  return (
    <ul className={`grid grid-cols-1 gap-px bg-[var(--grey-200)] ${cols}`}>
      {items.map((it) => (
        <li key={it.name} className="group bg-white">
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <img
              src={it.image}
              alt={it.alt ?? it.name}
              loading="lazy"
              width={768}
              height={576}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            />
            <span
              className="absolute inset-x-0 bottom-0 h-2/3"
              style={{
                background:
                  "linear-gradient(to top, rgba(12,18,28,0.82), rgba(12,18,28,0.15) 55%, transparent)",
              }}
              aria-hidden
            />
            <span
              className="absolute bottom-0 left-0 h-[4px] w-0 transition-[width] duration-500 ease-out group-hover:w-full"
              style={{ background: accent }}
              aria-hidden
            />
            <p className="absolute bottom-4 left-5 right-5 font-serif text-[24px] leading-[1.1] text-white md:text-[26px]">
              {it.name}
            </p>
          </div>
          <p className="px-5 py-4 text-[14px] leading-[1.6] text-[var(--grey-800)]">{it.note}</p>
        </li>
      ))}
    </ul>
  );
}
