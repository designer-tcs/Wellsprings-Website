import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  PageHero,
  MottoStrip,
  SectionShell,
  PhotoTag,
  PILLAR_COLOR,
  type Pillar,
} from "@/components/page/Primitives";
import heroImage from "@/assets/photos/curr-01-hero.webp";
import prePrimaryImage from "@/assets/photos/curr-02.webp";
import primaryImage from "@/assets/photos/curr-03.webp";
import secondaryImage from "@/assets/photos/curr-04.webp";
import dayImage from "@/assets/photos/curr-05.webp";
import { MoreToExplore } from "@/components/page/MoreToExplore";
import xAbout1 from "@/assets/photos/why-01-hero.webp";
import xCurr from "@/assets/photos/curr-01-hero.webp";
import xLife from "@/assets/photos/life-01-hero.webp";
import xAdm from "@/assets/photos/adm-01-hero.webp";
import xAboutP from "@/assets/photos/about-01-hero.webp";
import xBlog from "@/assets/photos/blog-01-hero.webp";

export const Route = createFileRoute("/curriculum/")({
  head: () => ({
    meta: [
      { title: "Curriculum — A CBSE curriculum that grows with your child | Wellsprings" },
      {
        name: "description",
        content:
          "From the wonder of pre-primary to the rigour of middle school, Wellsprings teaches the whole child — Mind, Body, Heart — through every stage of growing up.",
      },
      { property: "og:title", content: "Curriculum — Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "Pre-primary, Primary, and Middle School — taught with CBSE rigour and Wellsprings warmth.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: CurriculumOverview,
});

const STAGES: ReadonlyArray<{
  to: string;
  pillar: Pillar;
  stage: string;
  ages: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  body: string;
}> = [
  {
    to: "/curriculum/foundation",
    pillar: "Belong",
    stage: "Foundation Stage",
    ages: "Nursery to Grade 2 · Ages 3 – 8",
    image: prePrimaryImage,
    imageAlt: "A young child at the pre-primary play corner",
    imageCaption: "Pre-primary, mid-morning.",
    body: "Five years. It covers pre-primary, Grades 1 and 2, to give a strong foundation to young learners. This first introduction to school is designed to be fun and engaging.",
  },
  {
    to: "/curriculum/preparatory",
    pillar: "Think",
    stage: "Preparatory Stage",
    ages: "Grades 3 to 5 · Ages 8 – 11",
    image: primaryImage,
    imageAlt: "Two primary students working together over a science worksheet",
    imageCaption: "Preparatory classroom, two heads, one problem.",
    body: "Three years. With a structured curriculum, experiential learning and interactive methods, children are encouraged to explore and learn.",
  },
  {
    to: "/curriculum/middle",
    pillar: "Build",
    stage: "Middle Stage",
    ages: "Grades 6 to 8 · Ages 11 – 14",
    image: secondaryImage,
    imageAlt: "Middle school students at work in a science lab",
    imageCaption: "Middle school, in the lab.",
    body: "Three years. This fosters conceptual understanding and deeper thinking, introducing critical thinking and project-based learning.",
  },
  {
    to: "/curriculum/secondary",
    pillar: "Think",
    stage: "Secondary Stage",
    ages: "Grades 9 to 12 · Ages 14 – 18",
    image: dayImage,
    imageAlt: "A secondary student at work in the science lab",
    imageCaption: "Secondary school, practical work.",
    body: "Four years. It gives children the flexibility to choose future career goals based on their interests, and prepares them for higher education.",
  },
];

function CurriculumOverview() {
  return (
    <div
      className="bg-[var(--ws-paper)]"
      style={{ ["--page-accent" as string]: "var(--coral-600)" } as CSSProperties}
    >
      <PageHero
        eyebrow="Curriculum"
        pillar="Build"
        title={
          <>
            A curriculum that
            <br />
            <span className="text-[var(--sun-700)]">grows with your child</span>.
          </>
        }
        intro={
          <p>
            From the wonder of the early years to the rigour of the board grades, your child moves
            through a CBSE curriculum that grows with them without losing its warmth.
          </p>
        }
        image={heroImage}
        imageAlt="A Wellsprings student building at the maker corner"
        imageCaption="The maker corner, mid-afternoon."
        cta={{ label: "Schedule a campus visit", href: "/admissions#enquire" }}
        secondaryCta={{ label: "Talk to admissions", href: "/contact" }}
      />

      <MottoStrip tier={1} />

      {/* The four stages — overview cards with Learn more */}
      <SectionShell
        eyebrow="The four stages"
        title="Designed for every stage of growing up."
        intro={<p>Each stage has its own shape. Choose one to see how the day flows.</p>}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s) => {
            return (
              <article
                key={s.to}
                className="group relative flex flex-col border border-[var(--grey-200)] bg-white transition-all hover:border-[var(--ws-ink)] hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--grey-200)]">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <PhotoTag pillar={s.pillar} caption={s.imageCaption} position="bottom-left" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-3xl">
                    {s.stage}
                    <span className="block text-base font-normal text-[var(--grey-700)]">
                      {s.ages}
                    </span>
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[var(--grey-800)]">{s.body}</p>
                  <div
                    className="mt-7 h-[2px] w-12 transition-all group-hover:w-20"
                    style={{ background: PILLAR_COLOR[s.pillar] }}
                  />
                  <Link
                    to={s.to}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: PILLAR_COLOR[s.pillar] }}
                  >
                    Learn more
                    <ArrowRight size={15} strokeWidth={1.8} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-[15px] leading-[1.7] text-[var(--grey-800)]">
          Sport, the arts, clubs, STEAM and vocational work sit outside the syllabus —{" "}
          <Link
            to="/life"
            className="underline decoration-[var(--grey-400)] underline-offset-4 hover:text-[var(--ws-ink)]"
          >
            see what a child does beyond books
          </Link>
          .
        </p>
      </SectionShell>

      <MoreToExplore
        cards={[
          {
            title: "Why Wellsprings",
            body: "The seven things we work on through the year, and what you can look for when you visit.",
            href: "/why-wellsprings",
            label: "What we focus on",
            image: xAbout1,
            imageAlt: "A Wellsprings child reading in a morning class",
          },
          {
            title: "A day at school",
            body: "Clubs, sport, music, houses and the ordinary rhythm of a school day at Wellsprings.",
            href: "/life",
            label: "Life at Wellsprings",
            image: xLife,
            imageAlt: "Children playing on the Wellsprings grounds",
          },
          {
            title: "Joining Wellsprings",
            body: "How admissions work, what we need from you, and how to book a visit to the campus.",
            href: "/admissions",
            label: "Admissions",
            image: xAdm,
            imageAlt: "A parent and child at the Wellsprings admissions desk",
          },
        ]}
      />
    </div>
  );
}
