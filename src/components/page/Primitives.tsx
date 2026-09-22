import { type ReactNode } from "react";
import { useParallax } from "@/components/motion/useParallax";
import { Reveal } from "@/components/motion/Reveal";


export type Pillar = "Think" | "Build" | "Belong";
export type SoftPillar = "Wonder" | "Play" | "Belong";
export type AnyPillar = Pillar | SoftPillar;

export const PILLAR_COLOR: Record<AnyPillar, string> = {
  Think: "var(--coral-600)",
  Build: "var(--sun-700)",
  Belong: "var(--sage-700)",
  Wonder: "var(--coral-600)",
  Play: "var(--sun-700)",
};

export const PILLAR_SURFACE: Record<AnyPillar, string> = {
  Think: "var(--coral-100)",
  Build: "var(--sun-100)",
  Belong: "var(--sage-100)",
  Wonder: "var(--coral-100)",
  Play: "var(--sun-100)",
};

/**
 * PhotoTag — every photo on the public site MUST carry one of these.
 * Tier 1: Think · Build · Belong (default, institutional)
 * Tier 2: Wonder · Play · Belong (warmer; pre-primary, parent comms, soft moments)
 */
export function PhotoTag({
  pillar,
  caption,
  position = "bottom-left",
}: {
  pillar: AnyPillar;
  caption: string;
  position?: "bottom-left" | "top-right" | "bottom-right" | "top-left";
}) {
  const color = PILLAR_COLOR[pillar];

  const pos =
    position === "bottom-left"
      ? "bottom-3 left-3"
      : position === "top-right"
        ? "top-3 right-3"
        : position === "bottom-right"
          ? "bottom-3 right-3"
          : "top-3 left-3";

  return (
    <div
      className={`absolute ${pos} flex items-center gap-2 bg-white/95 px-3 py-2 shadow-[0_8px_20px_-8px_rgba(15,23,42,0.35)] backdrop-blur`}
    >
      <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      <span
        className="font-mono text-[10px] uppercase tracking-[0.22em]"
        style={{ color }}
      >
        {pillar}
      </span>
      <span className="text-[11px] text-[var(--ws-ink)]">{caption}</span>
    </div>
  );
}

/**
 * SectionEyebrow — rule + mono-cap label. Colour resolves from explicit
 * `color`, then `pillar`, then the page-level `--page-accent` CSS var
 * (fallback: coral). Use `align="center"` for centered section headers.
 */
export function SectionEyebrow({
  children,
  pillar,
  color,
  align = "left",
}: {
  children: ReactNode;
  pillar?: AnyPillar;
  color?: string;
  align?: "left" | "center";
}) {
  const c = color ?? (pillar ? PILLAR_COLOR[pillar] : "var(--page-accent, var(--coral-600))");
  return (
    <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <span aria-hidden className="h-px w-8 shrink-0" style={{ background: c }} />
      <span className="font-mono text-xs uppercase tracking-[0.24em]" style={{ color: c }}>
        {children}
      </span>
    </div>
  );
}

/**
 * PageHero — every public page opens with this.
 * Wires together: dimension → eyebrow color, headline, intro, tagged image.
 * The hero image is REQUIRED to carry a Pillar tag — this enforces the
 * imagery common-sense rule at the type level.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  pillar,
  imageCaption,
  facts,
  cta,
  secondaryCta,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image: string;
  imageAlt: string;
  pillar: AnyPillar;
  imageCaption: string;
  facts?: { label: string; value: string }[];
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  const imgRef = useParallax<HTMLImageElement>(0.07, 22);
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid w-full max-w-[1320px] gap-x-12 gap-y-7 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-x-16 md:px-8 md:pb-24 md:pt-16">
        {/* Heading + intro — one stacked block, so nothing stretches to the image height */}
        <div className="md:col-start-1 md:row-start-1">
          <SectionEyebrow pillar={pillar}>{eyebrow}</SectionEyebrow>
          <h1 className="mt-5 text-4xl leading-[1.05] tracking-[-0.01em] sm:text-5xl md:text-7xl">
            {title}
          </h1>
          <div className="mt-6 max-w-[55ch] text-[17px] leading-[1.7] text-[var(--grey-800)] md:mt-8">
            {intro}
          </div>
          {facts && facts.length > 0 && (
            <dl className="mt-10 grid gap-5 border-t border-[var(--grey-200)] pt-7 sm:grid-cols-3 sm:gap-0">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={i > 0 ? "sm:border-l sm:border-[var(--grey-200)] sm:pl-5" : "sm:pr-5"}
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 text-xl leading-[1.2] text-[var(--ws-ink)]">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {(cta || secondaryCta) && (

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {cta && (
                <a
                  href={cta.href}
                  className="inline-flex items-center gap-2 bg-[var(--ws-ink)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--coral-600)]"
                >
                  {cta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 border border-[var(--grey-400)] px-6 py-3.5 text-sm font-medium text-[var(--ws-ink)] transition-colors hover:border-[var(--ws-ink)]"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Image — right column on desktop, below the copy on mobile */}
        <div className="relative md:col-start-2 md:row-start-1 md:self-center">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2px]"
            style={{
              background: `radial-gradient(60% 50% at 70% 30%, color-mix(in srgb, ${PILLAR_SURFACE[pillar]} 90%, transparent), transparent 70%), radial-gradient(50% 40% at 20% 80%, color-mix(in srgb, var(--sage-200) 50%, transparent), transparent 70%)`,
            }}
          />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden bg-[var(--grey-200)] shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
            <img ref={imgRef} src={image} alt={imageAlt} className="h-full w-full object-cover will-change-transform" />
            <PhotoTag pillar={pillar} caption={imageCaption} position="bottom-left" />
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * MottoStrip — keeps the two-tier motto visible without inventing a new slogan.
 * Tier 1 = institutional (default). Tier 2 = warm/early-years.
 */
export function MottoStrip({ tier = 1 }: { tier?: 1 | 2 }) {
  const words: AnyPillar[] = tier === 1 ? ["Think", "Build", "Belong"] : ["Wonder", "Play", "Belong"];
  const label = tier === 1 ? "Our promise to your child" : "How school feels in the early years";

  return (
    <section className="border-y border-[var(--grey-200)] bg-[var(--ws-paper)]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--grey-700)]">
          {label}
        </p>
        <p className="font-serif text-2xl tracking-[-0.01em] md:text-3xl">
          {words.map((w, i) => (
            <span key={w}>
              <span style={{ color: PILLAR_COLOR[w] }}>{w}</span>
              {i < words.length - 1 && (
                <span className="mx-3 text-[var(--grey-500)]">·</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

/**
 * MindBodyHeartGrid — three-up content that explicitly maps to the philosophy.
 * Pages dealing with curriculum, admissions, programs etc. should use this
 * rather than inventing fresh three-up structures.
 */
export function MindBodyHeartGrid({
  items,
  withImages = false,
}: {
  items: {
    pillar: Pillar;
    title: string;
    body: ReactNode;
    image?: string;
    imageAlt?: string;
    imageCaption?: string;
  }[];
  withImages?: boolean;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => {
        const dim =
          item.pillar === "Think" ? "Mind" : item.pillar === "Build" ? "Body" : "Heart";
        return (
          <article
            key={item.pillar + item.title}
            className="group relative flex flex-col border border-[var(--grey-200)] bg-white transition-all hover:border-[var(--ws-ink)] hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
          >
            {withImages && item.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--grey-200)]">
                <img
                  src={item.image}
                  alt={item.imageAlt ?? `${item.pillar} at Wellsprings`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <PhotoTag
                  pillar={item.pillar}
                  caption={item.imageCaption ?? ""}
                  position="bottom-left"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-7">
              <SectionEyebrow pillar={item.pillar}>{dim} · {item.pillar}</SectionEyebrow>
              <h3 className="mt-2 text-3xl">{item.title}</h3>
              <div className="mt-4 text-[15px] leading-[1.7] text-[var(--grey-800)]">
                {item.body}
              </div>
              <div
                className="mt-7 h-[2px] w-12 transition-all group-hover:w-20"
                style={{ background: PILLAR_COLOR[item.pillar] }}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}

/**
 * SectionShell — consistent vertical rhythm + eyebrow/title/intro pattern
 * so every page section reads in the same voice.
 */
export function SectionShell({
  id,
  background = "white",
  eyebrow,
  pillar,
  title,
  intro,
  aside,
  children,
}: {
  id?: string;
  background?: "white" | "paper" | "grey" | "ink";
  eyebrow?: string;
  pillar?: AnyPillar;
  title?: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}) {
  const bg =
    background === "paper"
      ? "bg-[var(--ws-paper)]"
      : background === "grey"
        ? "bg-[var(--grey-100)]"
        : background === "ink"
          ? "bg-[var(--slate-1000)] text-white"
          : "bg-white";

  return (
    <section id={id} className={`border-t border-[var(--grey-200)] ${bg}`}>
      <Reveal>
        <div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-28">
          {(eyebrow || title || intro) && (
            <div
              className={
                aside
                  ? "grid gap-10 md:grid-cols-[1.05fr_0.85fr] md:items-end md:gap-16"
                  : "max-w-[60ch]"
              }
            >
              <div className="max-w-[60ch]">
                {eyebrow && <SectionEyebrow pillar={pillar}>{eyebrow}</SectionEyebrow>}
                {title && (
                  <h2 className="mt-4 text-4xl leading-[1.06] md:text-6xl">{title}</h2>
                )}
                {intro && (
                  <div
                    className={`mt-6 text-[17px] leading-[1.75] ${
                      background === "ink" ? "text-[var(--slate-200)]" : "text-[var(--grey-800)]"
                    }`}
                  >
                    {intro}
                  </div>
                )}
              </div>
              {aside && <div>{aside}</div>}
            </div>
          )}
          <div className={eyebrow || title || intro ? "mt-14" : ""}>{children}</div>

        </div>
      </Reveal>
    </section>
  );
}
