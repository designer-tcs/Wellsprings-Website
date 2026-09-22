import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { PILLAR_COLOR, type AnyPillar } from "@/components/page/Primitives";

/* ------------------------------------------------------------------ *
 * Shared kit for all four curriculum stage pages.
 * Foundation / Preparatory / Middle / Secondary use the same blocks in
 * the same order, so the pages read as siblings.
 * ------------------------------------------------------------------ */

export const STAGES = [
  { to: "/curriculum/foundation", label: "Foundation", sub: "Nursery – G2" },
  { to: "/curriculum/preparatory", label: "Preparatory", sub: "G3 – G5" },
  { to: "/curriculum/middle", label: "Middle", sub: "G6 – G8" },
  { to: "/curriculum/secondary", label: "Secondary", sub: "G9 – G10" },
] as const;

/** Editorial masthead: photo left, title + big stat rail right. */
export function StageMasthead({
  stage,
  grades,
  ages,
  titleTop,
  titleAccent,
  standfirst,
  photo,
  photoCaption,
  photoFocus = "center",
  accent,
  stats,
}: {
  stage: string;
  grades: string;
  ages: string;
  titleTop: string;
  titleAccent: string;
  standfirst: string;
  photo: string;
  photoCaption: string;
  photoFocus?: string;
  accent: string;
  stats?: { k: string; v: string }[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 pt-10 md:px-8 md:pt-14">
        <StageSwitch current={stage} accent={accent} />
      </div>

      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-5 pb-10 pt-8 md:px-8 md:pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <figure className="relative">
          <div className="relative aspect-4/5 w-full overflow-hidden">
            <img
              src={photo}
              alt={photoCaption}
              className="h-full w-full object-cover"
              style={{ objectPosition: photoFocus }}
              loading="eager"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
            {photoCaption}
          </figcaption>
        </figure>


        <div>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.24em]"
            style={{ color: accent }}
          >
            {stage} · {grades} · Ages {ages}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.03] tracking-[-0.01em] sm:text-5xl md:text-7xl">
            {titleTop}
            <br />
            <span style={{ color: accent }}>{titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-[18px] leading-[1.7] text-[var(--grey-800)]">
            {standfirst}
          </p>
          {stats && stats.length > 0 ? (
            <div className="mt-9">
              <StatRail items={stats} accent={accent} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Sibling navigation across the four stages. */
export function StageSwitch({ current, accent }: { current: string; accent: string }) {
  return (
    <nav aria-label="Curriculum stages" className="flex flex-wrap gap-px bg-[var(--grey-200)]">
      {STAGES.map((s) => {
        const on = s.label === current;
        return (
          <Link
            key={s.to}
            to={s.to}
            className="flex min-w-[130px] flex-1 flex-col gap-0.5 px-4 py-3 transition-colors"
            style={
              on
                ? { background: accent, color: "#fff" }
                : { background: "#fff", color: "var(--grey-700)" }
            }
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-80">
              {s.sub}
            </span>
            <span className="font-serif text-[17px] leading-none">{s.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

/** Horizontal rail of headline numbers / facts. */
export function StatRail({
  items,
  accent,
}: {
  items: { k: string; v: string }[];
  accent: string;
}) {
  return (
    <dl
      className={`grid grid-cols-2 gap-px bg-[var(--grey-200)] sm:grid-cols-3 ${
        items.length === 6
          ? "lg:grid-cols-3"
          : items.length % 4 === 0
            ? "sm:grid-cols-4 lg:grid-cols-4"
            : items.length > 4
              ? "lg:grid-cols-5"
              : "lg:grid-cols-4"
      }`}
    >
      {items.map((s) => (
        <div key={s.k} className="bg-white px-4 py-5">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-600)]">
            {s.k}
          </dt>
          <dd
            className="mt-2 hyphens-auto break-words font-serif text-[19px] leading-[1.2] text-[var(--ws-ink)] md:text-[21px]"
            style={{ textWrap: "balance" } as never}
          >
            {s.v}
          </dd>
          <span className="mt-3 block h-[3px] w-8" style={{ background: accent }} aria-hidden />
        </div>
      ))}
    </dl>
  );
}

/** Section wrapper used by every stage module. */
export function StageSection({
  id,
  tone = "white",
  index,
  eyebrow,
  title,
  lede,
  accent,
  topSlot,
  children,
}: {
  id?: string;
  tone?: "white" | "paper" | "ink";
  index?: string;
  eyebrow: string;
  title?: string;
  lede?: string;
  accent: string;
  topSlot?: ReactNode;
  children: ReactNode;
}) {
  const bg =
    tone === "paper"
      ? "bg-[var(--ws-paper)]"
      : tone === "ink"
        ? "bg-[var(--slate-1000)] text-white"
        : "bg-white";
  return (
    <section id={id} className={`border-t border-[var(--grey-200)] ${bg}`}>
      <Reveal>
        <div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-24">
          {topSlot && <div className="mb-8 md:mb-10">{topSlot}</div>}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            {index && (
              <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: accent }}>
                {index}
              </span>
            )}
            <span
              className="font-mono text-[11px] uppercase tracking-[0.24em]"
              style={{ color: accent }}
            >
              {eyebrow}
            </span>
          </div>
          {title && (
            <h2
              className="mt-4 max-w-[22ch] text-3xl leading-[1.06] md:text-5xl"
              style={{ textWrap: "balance" } as never}
            >
              {title}
            </h2>
          )}
          {lede && (
            <p
              className={`mt-5 max-w-[58ch] text-[17px] leading-[1.7] ${
                tone === "ink" ? "text-[var(--slate-200)]" : "text-[var(--grey-800)]"
              }`}
            >
              {lede}
            </p>
          )}
          <div className="mt-10 md:mt-12">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}

/** THE standard "subjects offered" block — identical on every stage page. */
export function SubjectMatrix({
  items,
  accent,
  columns = 3,
}: {
  items: { name: string; note: string; icon: LucideIcon }[];
  accent: string;
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid gap-px bg-[var(--grey-200)] ${cols}`}>
      {items.map((s) => {
        const Icon = s.icon;
        return (
          <li key={s.name} className="group bg-white p-6">
            <span
              className="flex h-11 w-11 items-center justify-center"
              style={{ background: `color-mix(in oklab, ${accent} 12%, white)` }}
              aria-hidden
            >
              <Icon size={20} strokeWidth={1.5} style={{ color: accent }} />
            </span>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
              {s.name}
            </p>
            <p className="mt-2 text-[15px] leading-[1.6] text-[var(--ws-ink)]">{s.note}</p>
          </li>
        );
      })}
    </ul>
  );
}

/** Method words, set as a quiet ribbon rather than a paragraph. */
export function MethodRibbon({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {items.map((m, i) => (
        <li key={m} className="flex items-center gap-3">
          {i > 0 && (
            <span className="h-1 w-1 rounded-full bg-[var(--grey-300)]" aria-hidden />
          )}
          <span
            className="border-b-2 pb-1 font-serif text-lg text-[var(--ws-ink)] md:text-xl"
            style={{ borderColor: accent }}
          >
            {m}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Small icon tiles — used for feature panels (Settlers Room, library etc). */
export function IconTiles({
  items,
  accent,
  onDark = false,
}: {
  items: { k: string; v: string; icon: LucideIcon }[];
  accent: string;
  onDark?: boolean;
}) {
  return (
    <ul
      className={`grid grid-cols-2 gap-px bg-[var(--grey-200)] ${
        items.length % 4 === 0 ? "sm:grid-cols-4" : items.length % 3 === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {items.map((t) => {
        const Icon = t.icon;
        return (
          <li key={t.k} className={onDark ? "bg-[var(--slate-1000)] p-5" : "bg-white p-5"}>
            <Icon size={20} strokeWidth={1.5} style={{ color: accent }} aria-hidden />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
              {t.k}
            </p>
            <p
              className={`mt-1.5 text-[15px] leading-[1.55] ${
                onDark ? "text-white" : "text-[var(--ws-ink)]"
              }`}
            >
              {t.v}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

/** Assessment rhythm: four cycles on a line, plus what parents receive. */
export function AssessmentTrack({
  cycles,
  receipts,
  accent,
}: {
  cycles: { t: string; w: string }[];
  receipts?: { k: string; v: string; icon: LucideIcon }[];
  accent: string;
}) {
  return (
    <div className="border border-[var(--grey-200)] bg-white">
      <ol
        className={`relative grid gap-6 p-6 sm:gap-0 md:p-8 ${
          cycles.length >= 5 ? "sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-4"
        }`}
      >
        {cycles.map((c, i) => (
          <li key={c.t} className="relative flex items-center gap-4 sm:flex-col sm:items-start">
            {i < cycles.length - 1 && (
              <span
                className="absolute left-[18px] top-11 hidden h-full w-px bg-[var(--grey-200)] sm:left-9 sm:top-[18px] sm:h-px sm:w-full sm:block"
                aria-hidden
              />
            )}
            <span
              className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[12px] text-white"
              style={{ background: accent }}
            >
              {i + 1}
            </span>
            <div className="sm:mt-4 sm:pr-6">
              <p className="font-serif text-[18px] leading-tight text-[var(--ws-ink)]">{c.t}</p>
              <p className="mt-1 text-[13px] text-[var(--grey-700)]">{c.w}</p>
            </div>
          </li>
        ))}
      </ol>
      {receipts && receipts.length > 0 && (
      <div className="grid gap-px border-t border-[var(--grey-200)] bg-[var(--grey-200)] sm:grid-cols-2 lg:grid-cols-4">
        {receipts.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.k} className="bg-[var(--ws-paper)] p-5">
              <Icon size={17} strokeWidth={1.6} className="text-[var(--grey-700)]" aria-hidden />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
                {r.k}
              </p>
              <p className="mt-1.5 text-[15px] leading-[1.55] text-[var(--ws-ink)]">{r.v}</p>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
}

/** Support / stretch / library — three ways a child is met where they are. */
export function SupportRail({
  items,
  accent,
}: {
  items: { k: string; v: string; icon: LucideIcon; pillar?: AnyPillar }[];
  accent: string;
}) {
  return (
    <ul className="grid gap-px bg-[var(--grey-200)] md:grid-cols-3">
      {items.map((s) => {
        const Icon = s.icon;
        const color = s.pillar ? PILLAR_COLOR[s.pillar] : accent;
        return (
          <li key={s.k} className="bg-white p-6 md:p-7">
            <Icon size={22} strokeWidth={1.5} style={{ color }} aria-hidden />
            <p
              className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{ color }}
            >
              {s.k}
            </p>
            <p className="mt-3 text-[15px] leading-[1.7] text-[var(--grey-800)]">{s.v}</p>
          </li>
        );
      })}
    </ul>
  );
}

/** A single line, given room to breathe. */
export function StageQuote({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <section className="border-t border-[var(--grey-200)] bg-[var(--ws-paper)]">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 md:px-8 md:py-24">
        <p
          className="max-w-[26ch] border-l-2 pl-6 font-serif text-2xl leading-[1.3] text-[var(--ws-ink)] md:max-w-[30ch] md:text-4xl"
          style={{ borderColor: accent }}
        >
          {children}
        </p>
      </div>
    </section>
  );
}

/** Language offer — same shape on every stage page. */
export function LanguageStrip({
  teachingNote,
  choices,
  note,
  accent,
}: {
  teachingNote: string;
  choices: string[];
  note: string;
  accent: string;
}) {
  return (
    <div className="grid gap-px bg-[var(--grey-200)] md:grid-cols-[0.8fr_1.2fr]">
      <div className="bg-[var(--slate-1000)] p-7 text-white md:p-9">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--slate-200)]">
          The language we teach in
        </p>
        <p className="mt-3 font-serif text-4xl leading-none">English</p>
        <p className="mt-4 text-[14px] leading-[1.6] text-[var(--slate-200)]">{teachingNote}</p>
      </div>
      <div className="bg-white p-7 md:p-9">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
          + two more, chosen by the family
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {choices.map((c) => (
            <span
              key={c}
              className="border-b-2 bg-[var(--ws-paper)] px-4 py-2.5 font-serif text-lg text-[var(--ws-ink)]"
              style={{ borderColor: accent }}
            >
              {c}
            </span>
          ))}
        </div>
        <p className="mt-5 max-w-[52ch] text-[14px] leading-[1.65] text-[var(--grey-800)]">
          {note}
        </p>
      </div>
    </div>
  );
}

/** Laboratories / facilities, as a plain premium strip. */
export function LabStrip({
  items,
  accent,
  note,
  icon: Icon,
}: {
  items: string[];
  accent: string;
  note?: string;
  icon: LucideIcon;
}) {
  return (
    <div className="border border-[var(--grey-200)] bg-white p-6 md:p-8">
      <ul
        className={`grid gap-x-8 gap-y-5 sm:grid-cols-2 ${
          items.length % 3 === 0 ? "lg:grid-cols-3" : items.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-2"
        }`}
      >
        {items.map((l) => (
          <li key={l} className="flex items-center gap-4">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center"
              style={{ background: `color-mix(in oklab, ${accent} 12%, white)` }}
              aria-hidden
            >
              <Icon size={20} strokeWidth={1.5} style={{ color: accent }} />
            </span>
            <span className="text-[15px] leading-[1.5] text-[var(--ws-ink)]">{l}</span>
          </li>
        ))}
      </ul>
      {note && (
        <p className="mt-6 max-w-[62ch] border-t border-[var(--grey-200)] pt-5 text-[15px] leading-[1.7] text-[var(--grey-800)]">
          {note}
        </p>
      )}
    </div>
  );
}

/** Homework, day by day. */
export function HomeworkWeek({
  days,
  note,
  accent,
}: {
  days: { d: string; work: string }[];
  note?: string;
  accent: string;
}) {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-px bg-[var(--grey-200)] sm:grid-cols-3 lg:grid-cols-6">
        {days.map((day) => (
          <li key={day.d} className="bg-white p-5">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              {day.d}
            </span>
            <p className="mt-3 text-[15px] leading-[1.55] text-[var(--ws-ink)]">{day.work}</p>
          </li>
        ))}
      </ul>
      {note && (
        <p className="mt-4 text-[14px] leading-[1.7] text-[var(--grey-700)]">{note}</p>
      )}
    </div>
  );
}

/** A quiet note panel — used for things that are coming, or house rules. */
export function NotePanel({
  label,
  body,
  facts,
  accent,
}: {
  label: string;
  body: string;
  facts?: { k: string; v: string }[];
  accent: string;
}) {
  return (
    <div className="grid gap-px bg-[var(--grey-200)] md:grid-cols-[1.1fr_0.9fr]">
      <div className="bg-white p-7 md:p-9">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: accent }}
        >
          {label}
        </p>
        <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.75] text-[var(--grey-800)]">
          {body}
        </p>
      </div>
      {facts && (
        <dl className="grid gap-px bg-[var(--grey-200)] sm:grid-cols-3 md:grid-cols-1">
          {facts.map((f) => (
            <div key={f.k} className="bg-[var(--ws-paper)] p-6">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
                {f.k}
              </dt>
              <dd className="mt-2 font-serif text-lg text-[var(--ws-ink)]">{f.v}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
