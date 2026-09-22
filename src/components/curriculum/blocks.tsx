import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Languages,
  Repeat,
  FileText,
  NotebookPen,
  MessagesSquare,
} from "lucide-react";
import { PILLAR_COLOR, type Pillar } from "@/components/page/Primitives";

export type Offering = { name: string; note: string; icon: LucideIcon };

export function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-700)]">
      {children}
    </p>
  );
}

export function ModuleHeading({
  kicker,
  title,
  intro,
  pillar = "Think",
}: {
  kicker: string;
  title: string;
  intro?: string;
  pillar?: Pillar;
}) {
  return (
    <div className="max-w-[62ch]">
      <p
        className="font-mono text-[11px] uppercase tracking-[0.24em]"
        style={{ color: PILLAR_COLOR[pillar] }}
      >
        {kicker}
      </p>
      <h3 className="mt-3 text-3xl leading-[1.1] text-[var(--ws-ink)] md:text-4xl">
        {title}
      </h3>
      {intro && (
        <p className="mt-5 text-[17px] leading-[1.75] text-[var(--grey-800)]">{intro}</p>
      )}
    </div>
  );
}

export function StageStatBar({ items }: { items: { k: string; v: string }[] }) {
  return (
    <div className="grid grid-cols-2 border border-[var(--grey-200)] sm:grid-cols-4">
      {items.map((row, i) => (
        <div
          key={row.k}
          className={`bg-white p-5 ${i % 2 === 1 ? "border-l border-[var(--grey-200)]" : ""} ${
            i >= 2 ? "border-t border-[var(--grey-200)] sm:border-t-0" : ""
          } sm:border-l sm:first:border-l-0`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
            {row.k}
          </p>
          <p className="mt-2 font-serif text-xl leading-tight text-[var(--ws-ink)]">{row.v}</p>
        </div>
      ))}
    </div>
  );
}

export function Chips({ items, pillar = "Build" }: { items: string[]; pillar?: Pillar }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span
          key={i}
          className="inline-flex items-center border border-[var(--grey-300)] bg-white px-3 py-1.5 text-[13px] text-[var(--ws-ink)]"
        >
          <span
            className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: PILLAR_COLOR[pillar] }}
            aria-hidden
          />
          {i}
        </span>
      ))}
    </div>
  );
}

export function OfferingCards({
  items,
  pillar,
  cols = 2,
}: {
  items: Offering[];
  pillar: Pillar;
  cols?: 2 | 3;
}) {
  const gridCols = cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <ul className={`grid gap-3 ${gridCols}`}>
      {items.map((o) => {
        const Icon = o.icon;
        return (
          <li
            key={o.name}
            className="flex gap-3 border border-[var(--grey-200)] bg-white p-4 transition-colors hover:border-[var(--ws-ink)]"
          >
            <span
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ background: `color-mix(in oklab, ${PILLAR_COLOR[pillar]} 14%, white)` }}
              aria-hidden
            >
              <Icon size={18} strokeWidth={1.6} style={{ color: PILLAR_COLOR[pillar] }} />
            </span>
            <div className="min-w-0">
              <p className="font-serif text-lg leading-tight text-[var(--ws-ink)]">{o.name}</p>
              <p className="mt-1 text-[14px] leading-[1.55] text-[var(--grey-800)]">{o.note}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function GradeBands({
  bands,
  pillar,
}: {
  bands: { id: string; label: string; note: string; subjects: Offering[] }[];
  pillar: Pillar;
}) {
  const [active, setActive] = useState(bands[0].id);
  const band = bands.find((b) => b.id === active) ?? bands[0];
  return (
    <div>
      <div className="inline-flex flex-wrap border border-[var(--grey-300)] p-1">
        {bands.map((b) => {
          const on = b.id === active;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => setActive(b.id)}
              className="px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors"
              style={{
                background: on ? PILLAR_COLOR[pillar] : "transparent",
                color: on ? "#fff" : "var(--grey-700)",
              }}
            >
              {b.label}
            </button>
          );
        })}
      </div>
      <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
        {band.note}
      </p>
      <div className="mt-5">
        <OfferingCards items={band.subjects} pillar={pillar} cols={3} />
      </div>
    </div>
  );
}

export function LanguageMap({ choices, note }: { choices: string[]; note: string }) {
  return (
    <div className="border border-[var(--grey-200)] bg-white p-6 md:p-8">
      <div className="grid gap-7 md:grid-cols-[auto_1px_1fr] md:items-center md:gap-9">
        <div className="flex items-center gap-4">
          <span
            className="flex h-16 w-16 items-center justify-center bg-[var(--ws-ink)] text-white"
            aria-hidden
          >
            <Languages size={26} strokeWidth={1.5} />
          </span>
          <div>
            <p className="font-serif text-2xl leading-none text-[var(--ws-ink)]">English</p>
            <p className="mt-1.5 text-[13px] text-[var(--grey-700)]">
              Everyone · the language we teach in
            </p>
          </div>
        </div>
        <span className="hidden h-16 w-px bg-[var(--grey-200)] md:block" aria-hidden />
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-700)]">
            + two more, chosen by the family
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {choices.map((c) => (
              <span
                key={c}
                className="border border-[var(--grey-300)] bg-[var(--ws-paper)] px-4 py-2 font-serif text-lg text-[var(--ws-ink)]"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[14px] leading-[1.6] text-[var(--grey-800)]">{note}</p>
        </div>
      </div>
    </div>
  );
}

export function ProgressCycle() {
  const steps = [
    { t: "Pre mid-term", w: "early check" },
    { t: "Mid-term", w: "exam" },
    { t: "Post mid-term", w: "check" },
    { t: "Term-end", w: "exam" },
  ];
  const pills = [
    { icon: Repeat, t: "Unit test after every chapter" },
    { icon: FileText, t: "Two report cards a year" },
    { icon: NotebookPen, t: "Learning Journals at each mid-point" },
    { icon: MessagesSquare, t: "Parent meeting after each cycle" },
  ];
  return (
    <div className="border border-[var(--grey-200)] bg-white p-6 md:p-8">
      <ol className="relative flex flex-col gap-6 sm:flex-row sm:gap-0">
        {steps.map((s, i) => (
          <li
            key={s.t}
            className="relative flex items-center gap-4 sm:flex-1 sm:flex-col sm:items-center sm:gap-0 sm:text-center"
          >
            {i < steps.length - 1 && (
              <span
                className="absolute left-5 top-10 hidden h-px w-full bg-[var(--grey-300)] sm:left-1/2 sm:top-5 sm:block"
                aria-hidden
              />
            )}
            <span
              className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white font-mono text-[13px]"
              style={{ borderColor: PILLAR_COLOR.Think, color: PILLAR_COLOR.Think }}
            >
              {i + 1}
            </span>
            <div className="sm:mt-3">
              <p className="font-serif text-[16px] leading-tight text-[var(--ws-ink)]">{s.t}</p>
              <p className="text-[12px] text-[var(--grey-700)]">{s.w}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-7 flex flex-wrap gap-2 border-t border-[var(--grey-200)] pt-6">
        {pills.map((p) => {
          const Icon = p.icon;
          return (
            <span
              key={p.t}
              className="inline-flex items-center gap-2 bg-[var(--ws-paper)] px-3 py-2 text-[13px] text-[var(--ws-ink)]"
            >
              <Icon size={15} strokeWidth={1.6} className="text-[var(--grey-700)]" aria-hidden />
              {p.t}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function HomeworkWeek({
  days,
  note,
}: {
  days: { d: string; on: boolean }[];
  note: string;
}) {
  return (
    <div className="border border-[var(--grey-200)] bg-white p-6 md:p-8">
      <div className="flex flex-wrap gap-2">
        {days.map((day) => (
          <span
            key={day.d}
            className="flex h-11 w-11 items-center justify-center rounded-full font-mono text-[11px] uppercase tracking-[0.06em]"
            style={
              day.on
                ? { background: "var(--ws-ink)", color: "#fff" }
                : {
                    background: "var(--ws-paper)",
                    color: "var(--grey-400)",
                    border: "1px dashed var(--grey-300)",
                  }
            }
          >
            {day.d}
          </span>
        ))}
      </div>
      <p className="mt-5 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">{note}</p>
    </div>
  );
}

export function SupportStretch({
  support,
  stretch,
}: {
  support: string;
  stretch: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="border border-[var(--grey-200)] bg-white p-6">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: PILLAR_COLOR.Belong }}
        >
          If a child needs more time
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-[var(--grey-800)]">{support}</p>
      </div>
      <div className="border border-[var(--grey-200)] bg-white p-6">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: PILLAR_COLOR.Build }}
        >
          If a child races ahead
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-[var(--grey-800)]">{stretch}</p>
      </div>
    </div>
  );
}
