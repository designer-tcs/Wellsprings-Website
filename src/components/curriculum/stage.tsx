import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  SectionShell,
  SectionEyebrow,
  PILLAR_COLOR,
  type AnyPillar,
} from "@/components/page/Primitives";
import { PhotoFrame } from "@/components/page/PhotoFrame";

/** Hero shared by every curriculum stage page. */
export function StageHero({
  eyebrow,
  titleTop,
  titleAccent,
  intro,
  notes,
  photo,
  photoCaption,
  accent = "var(--coral-600)",
}: {
  eyebrow: string;
  titleTop: string;
  titleAccent: string;
  intro: ReactNode;
  notes: [string, string][];
  photo: string;
  photoCaption: string;
  accent?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid w-full max-w-[1320px] gap-x-12 gap-y-7 px-5 pb-16 pt-10 md:gap-x-16 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="lg:col-start-1 lg:row-start-1">
          <SectionEyebrow color={accent}>{eyebrow}</SectionEyebrow>
          <h1 className="mt-5 text-4xl leading-[1.05] tracking-[-0.01em] sm:text-5xl md:text-7xl">
            {titleTop}
            <br />
            <span style={{ color: accent }}>{titleAccent}</span>
          </h1>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
          <PhotoFrame src={photo} ratio="4/5" caption={photoCaption} />
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <div className="max-w-[55ch] text-[19px] leading-[1.65] text-[var(--grey-800)]">
            {intro}
          </div>
          <dl className="mt-8 max-w-[55ch] border-t border-[var(--grey-200)]">
            {notes.map(([k, v]) => (
              <div
                key={k}
                className="grid gap-1 border-b border-[var(--grey-200)] py-3.5 sm:grid-cols-[190px_1fr] sm:items-baseline sm:gap-6"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--grey-600)]">
                  {k}
                </dt>
                <dd className="text-[15px] leading-[1.6] text-[var(--ws-ink)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** A responsive grid of small labelled facts. */
export function FactGrid({ items }: { items: { k: string; v: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-px border border-[var(--grey-200)] bg-[var(--grey-200)] sm:grid-cols-4">
      {items.map((row) => (
        <div key={row.k} className="bg-white p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
            {row.k}
          </p>
          <p className="mt-2 font-serif text-lg leading-tight text-[var(--ws-ink)]">{row.v}</p>
        </div>
      ))}
    </div>
  );
}

/** "What these years build" chips with pillar-coloured icons. */
export function BuildsGrid({
  items,
}: {
  items: { label: string; pillar: AnyPillar; icon: React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties; className?: string }> }[];
}) {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {items.map((f) => {
        const Icon = f.icon;
        return (
          <li
            key={f.label}
            className="flex items-center gap-3 border border-[var(--grey-200)] bg-white px-4 py-4"
          >
            <Icon
              size={18}
              strokeWidth={1.6}
              style={{ color: PILLAR_COLOR[f.pillar] }}
              className="shrink-0"
            />
            <span className="font-serif text-lg text-[var(--ws-ink)]">{f.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

/** Pointer to everything a child does outside the syllabus. */
export function BeyondBooksNote() {
  return (
    <section className="border-y border-[var(--grey-200)] bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-8 md:px-8">
        <p className="text-[15px] leading-[1.7] text-[var(--grey-800)]">
          Sport, the arts, clubs, STEAM and field visits sit outside the syllabus and run
          through every stage —{" "}
          <Link
            to="/life"
            className="underline decoration-[var(--grey-400)] underline-offset-4 hover:text-[var(--ws-ink)]"
          >
            see what a child does beyond books
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

/** Closing CTA for a stage page. */
export function StageCTA({
  title,
  body,
  visitLabel,
}: {
  title: string;
  body: string;
  visitLabel: string;
}) {
  return (
    <SectionShell background="ink">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <SectionEyebrow>Next step</SectionEyebrow>
          <h2 className="mt-3 text-4xl leading-[1.05] md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-[55ch] text-[16px] leading-[1.7] text-[var(--slate-200)]">
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="/admissions"
            className="inline-flex items-center justify-between gap-2 bg-white px-6 py-4 text-sm font-medium text-[var(--ws-ink)] transition-colors hover:bg-[var(--coral-200)]"
          >
            {visitLabel}
            <ArrowRight size={16} strokeWidth={1.6} />
          </a>
          <Link
            to="/curriculum"
            className="inline-flex items-center justify-between gap-2 border border-[var(--grey-700)] px-6 py-4 text-sm font-medium text-white transition-colors hover:border-white"
          >
            <span className="inline-flex items-center gap-2">
              <ArrowLeft size={16} strokeWidth={1.6} /> Back to curriculum
            </span>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
