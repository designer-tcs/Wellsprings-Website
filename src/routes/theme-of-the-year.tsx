import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionShell, SectionEyebrow } from "@/components/page/Primitives";
import { DocBadge } from "@/components/page/DocBadge";
import { ImagePlaceholder } from "@/components/page/ImagePlaceholder";
import { RootsToWings } from "@/components/brand/RootsToWings";
import { CategoryPill, YearCalendar } from "@/components/theme/YearCalendar";
import { ALL_YEAR, CATEGORY_COLOR } from "@/data/theme-year";
import heroImage from "@/assets/photo-build-3.webp";

export const Route = createFileRoute("/theme-of-the-year")({
  head: () => ({
    meta: [
      { title: "Theme of the Year — Roots to Wings | Wellsprings Academy" },
      {
        name: "description",
        content:
          "The Wellsprings year, on one calendar. Roots to Wings — the theme, the monthly rhythm, and every event that turns it into a real year at school.",
      },
      { property: "og:title", content: "Theme of the Year — Roots to Wings" },
      {
        property: "og:description",
        content:
          "A year shaped by a single idea. Roots to Wings — how the theme runs through assemblies, monthly events, leadership, clubs and field visits at Wellsprings.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: ThemeOfTheYearPage,
});

function ThemeOfTheYearPage() {
  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--sun-700)" } as CSSProperties}>
      {/* Editorial title-spread hero */}
      <section className="relative overflow-hidden border-b border-[var(--ws-ink)]/10 bg-gradient-to-b from-[var(--ws-paper)] to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--ws-ink) 50%, transparent)",
            opacity: 0.08,
          }}
        />
        <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-5 pb-16 pt-14 md:gap-16 md:px-8 md:pb-24 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex items-baseline justify-between gap-6">
              <SectionEyebrow pillar="Build">Theme of the Year · 2026–27</SectionEyebrow>
            </div>

            <DocBadge label="Theme-integrated learning" />
            <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.02em] sm:text-6xl md:text-[80px] lg:text-[128px]">
              <span className="text-[var(--sun-700)]">Roots</span>
              <span className="text-[var(--grey-500)]"> to </span>
              <span className="text-[var(--coral-600)]">Wings</span>
            </h1>

            <p className="mt-10 max-w-[42ch] font-serif text-[20px] italic leading-[1.5] text-[var(--grey-800)] md:text-[22px]">
              One idea, across the whole year.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 45%, color-mix(in srgb, var(--sun-200) 65%, transparent), transparent 70%)",
              }}
            />
            <RootsToWings className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="border-t border-[var(--ws-ink)]/10 bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-20">
          <div>
            <SectionEyebrow>The calendar</SectionEyebrow>
            <h2 className="mt-4 max-w-[24ch] text-3xl leading-[1.1] md:text-5xl">
              The year, on one page.
            </h2>
          </div>

          {/* Strand filter */}
          <YearCalendar />
        </div>
      </section>



      {/* All-year steady rhythm — quieter secondary strip */}
      <section className="border-t border-[var(--ws-ink)]/15 bg-[var(--ws-paper)]">
        <div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-20">
          <div className="flex items-baseline justify-between gap-6">
            <SectionEyebrow>All year · the steady rhythm</SectionEyebrow>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--grey-600)]">
              Not on one date — every week
            </span>
          </div>
          <h2 className="mt-3 max-w-[30ch] text-2xl leading-[1.15] md:text-3xl">
            The parts of the year without a calendar date.
          </h2>

          <ul className="mt-10 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {ALL_YEAR.map((e) => (
              <li
                key={e.title}
                className="flex flex-col overflow-hidden border border-[var(--ws-ink)]/10 bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]"
              >
                <ImagePlaceholder
                  ratio="4/3"
                  category={e.category}
                  caption={e.caption}
                />
                <div
                  className="border-t-2 px-5 pb-5 pt-4"
                  style={{ borderTopColor: CATEGORY_COLOR[e.category] }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <CategoryPill category={e.category} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
                      {e.when}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-[18px] leading-[1.25] text-[var(--ws-ink)]">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--grey-700)]">
                    {e.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </section>




      {/* Closing band */}
      <SectionShell background="ink">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <SectionEyebrow>A year refreshes</SectionEyebrow>
            <h2 className="mt-3 text-4xl leading-[1.05] md:text-5xl">
              Next year, a new theme. The same care.
            </h2>
            <p className="mt-6 max-w-[55ch] text-[17px] leading-[1.75] text-[var(--slate-200)]">
              The theme changes. The discipline behind it does not — that the year is shaped,
              that the events tie back to an idea, and that the children leave with something
              they can name.
            </p>
          </div>
          <a
            href="/admissions"
            className="inline-flex items-center justify-between gap-2 bg-white px-6 py-4 text-sm font-medium text-[var(--ws-ink)] transition-colors hover:bg-[var(--coral-200)]"
          >
            Plan a visit
            <ArrowRight size={16} strokeWidth={1.6} />
          </a>
        </div>
      </SectionShell>

    </div>
  );
}

