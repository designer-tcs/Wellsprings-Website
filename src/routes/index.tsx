import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Hammer,
  Heart,
  ArrowRight,
} from "lucide-react";

import { RootsToWings } from "@/components/brand/RootsToWings";
import { WholeChildMotion } from "@/components/brand/WholeChildMotion";
import { Reveal } from "@/components/motion/Reveal";
import { VisitUs } from "@/components/page/VisitUs";
import { Glimpses } from "@/components/home/Glimpses";
import { ErpSection } from "@/components/curriculum/ErpSection";
import { FiveWaysIn } from "@/components/home/FiveWaysIn";
import { CinematicHero } from "@/components/home/CinematicHero";
import { SectionEyebrow } from "@/components/page/Primitives";
import thinkImage2 from "@/assets/photos/home-02-think.webp";
import buildImage2 from "@/assets/photos/home-03-build.webp";
import belongImage2 from "@/assets/photos/home-04-belong.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wellsprings Academy — A mind that asks. Hands that create. A heart that cares." },
      {
        name: "description",
        content:
          "A CBSE school in Sarjapura, Bengaluru. Your child will be known by name, taught in mind, body, and heart, and welcomed from the first day. Come and see us.",
      },
      { property: "og:title", content: "Wellsprings Academy — A mind that asks. Hands that create. A heart that cares." },
      {
        property: "og:description",
        content:
          "Choosing a school is no small decision. Here is what your child's day looks like at Wellsprings: Think · Build · Belong, taught by people who know them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],

  }),
  component: HomePage,
});

const PILLARS = [
  {
    eyebrow: "Mind",
    title: "Think",
    Icon: Brain,
    color: "var(--coral-600)",
    surface: "var(--coral-100)",
    body:
      "Your child won't just be asked to recollect facts here — we want to know what they notice. So we encourage them to look closely, ask sharper questions, and persist with a problem until they've resolved it.",
    image: thinkImage2,
    caption: "no question is brushed aside.",

  },
  {
    eyebrow: "Body",
    title: "Build",
    Icon: Hammer,
    color: "var(--sun-700)",
    surface: "var(--sun-100)",
    body:
      "Here, experiential learning and practical learning are integrated into the classroom itself, allowing your child to create, explore, and apply concepts while building a strong foundation in core curriculum subjects.",
    image: buildImage2,
    caption: "Something made, start to end.",
  },
  {
    eyebrow: "Heart",
    title: "Belong",
    Icon: Heart,
    color: "var(--sage-700)",
    surface: "var(--sage-100)",
    body:
      "Your child walks into the comfort of a second home — a place where they feel seen, supported, and part of something.",
    image: belongImage2,
    caption: "Known by name, from day one.",

  },
] as const;


function HomePage() {
  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--coral-600)" } as CSSProperties}>
      <CinematicHero />







      {/* WHOLE CHILD — single section: idea → animation → three detail cards */}
      <section id="why-wellsprings" className="border-t border-[var(--grey-200)] bg-white">
        <Reveal><div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-28">
          <div className="mx-auto max-w-[60ch] text-center">
            <SectionEyebrow align="center">The whole child</SectionEyebrow>
            <h2 className="mx-auto mt-4 max-w-[32ch] text-4xl leading-[1.06] md:text-6xl">
              Three different parts
              <br />
              <span className="whitespace-nowrap">of your child grow here,</span>
              <br />
              all at the same time.
            </h2>
          </div>
          <WholeChildMotion dimensionLabels className="mx-auto mt-10 max-w-[680px]" />
          <p className="mt-20 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--grey-700)]">
            What this means for your child.
          </p>


          <div className="mt-6 grid gap-6 md:grid-cols-3">

            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
              <article
                className="group relative flex h-full flex-col border border-[var(--grey-200)] bg-white transition-all hover:border-[var(--ws-ink)] hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--grey-200)]">
                  <img
                    src={pillar.image}
                    alt={`${pillar.title} at Wellsprings — ${pillar.caption}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center"
                    style={{ background: pillar.surface }}
                  >
                    <pillar.Icon size={22} strokeWidth={1.5} style={{ color: pillar.color }} />
                  </div>
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.22em]"
                    style={{ color: pillar.color }}
                  >
                    {pillar.eyebrow}
                  </p>
                  <h3 className="mt-2 text-4xl">{pillar.title}.</h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[var(--grey-800)]">
                    {pillar.body}
                  </p>
                  <div
                    className="mt-7 h-[2px] w-12 transition-all group-hover:w-20"
                    style={{ background: pillar.color }}
                  />
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div></Reveal>
      </section>

      {/* THE SCHOOL AT A GLANCE — six ways in */}
      <section id="at-a-glance" className="border-t border-[var(--grey-200)] bg-[var(--ws-paper)]">
        <Reveal><div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-24">
          <SectionEyebrow>THE WELLSPRINGS EXPERIENCE</SectionEyebrow>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-6xl">School At A Glance</h2>
          <p className="mt-5 max-w-[54ch] text-[17px] leading-[1.75] text-[var(--grey-800)]">
            A quick look at the learning, opportunities, spaces and support that shape everyday life at Wellsprings.
          </p>
          <FiveWaysIn />
        </div></Reveal>
      </section>

      {/* THEME OF THE YEAR — elevated feature card, clearly lifted off the page */}
      <section className="border-y border-[var(--sun-200)] bg-[color-mix(in_oklab,var(--sun-100)_22%,var(--ws-paper))]">
        <Reveal><div className="mx-auto w-full max-w-[1320px] px-5 py-16 md:px-8 md:py-28">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-x-2 -bottom-2 top-3 -z-10 bg-[var(--sun-200)]/60"
            />
            <div className="relative grid gap-12 border border-[var(--sun-200)] bg-white p-7 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.35)] md:grid-cols-[1fr_1fr] md:items-center md:p-14">
              {/* Text column — left on desktop */}
              <div className="max-w-[54ch]">
                <span className="inline-flex items-center gap-2 bg-[var(--sun-100)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--sun-700)]">
                  Theme of the year · 2026–27
                </span>
                <h2 className="mt-5 text-5xl leading-[1.05] md:text-6xl">
                  <span className="text-[var(--sun-700)]">Roots</span>{" "}
                  <span className="text-[var(--grey-500)]">to</span>{" "}
                  <span className="text-[var(--coral-600)]">Wings</span>
                </h2>
                <p className="mt-6 text-[17px] leading-[1.75] text-[var(--grey-800)]">
                  This year's theme is Roots to Wings, depicted all through the assemblies, projects, and events in the Academic Year. Roots means the habits and values your child inculcates. Wings translates into the confidence to propel further with them.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="/theme-of-the-year"
                    className="inline-flex items-center gap-2 bg-[var(--ws-ink)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--sun-700)]"
                  >
                    Explore the calendar
                    <ArrowRight size={16} strokeWidth={1.6} />
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 border-t border-[var(--grey-200)] pt-6">
                  {["Academic", "Co-curricular", "Sports & Wellness", "Culture & Community"].map(
                    (tag, i, arr) => (
                      <span key={tag} className="flex items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
                          {tag}
                        </span>
                        {i < arr.length - 1 && (
                          <span className="text-[var(--grey-400)]">·</span>
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Illustration column — right on desktop */}
              <div className="relative flex items-center justify-center">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      "radial-gradient(55% 55% at 50% 50%, color-mix(in srgb, var(--sun-200) 60%, transparent), transparent 70%)",
                  }}
                />
                <RootsToWings className="h-[220px] w-auto md:h-[280px]" />
              </div>
            </div>
          </div>
        </div></Reveal>
      </section>

      {/* GLIMPSES — mood board collage */}
      <Glimpses />

      <ErpSection />

      <VisitUs withContact />

    </div>
  );
}
