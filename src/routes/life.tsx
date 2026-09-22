import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, MottoStrip, SectionShell, SectionEyebrow } from "@/components/page/Primitives";
import { PhotoFrame } from "@/components/page/PhotoFrame";
import { YearCalendar } from "@/components/theme/YearCalendar";
import { ErpSection } from "@/components/curriculum/ErpSection";
import { RootsToWings } from "@/components/brand/RootsToWings";
import { DayArc } from "@/components/life/DayArc";
import { SettlingIn } from "@/components/life/SettlingIn";
import { LunchTable } from "@/components/life/LunchTable";
import { AwayOrbit } from "@/components/life/AwayOrbit";
import heroImage from "@/assets/photos/life-01-hero.webp";
import imgMorning from "@/assets/photos/life-breakfast.webp";
import imgClass from "@/assets/glimpses/Two_Heads_One_Problem.webp";
import imgLunch from "@/assets/glimpses/Lunch_Together.webp";
import imgAway from "@/assets/photos/life-field-visit.webp";
import imgCircle from "@/assets/glimpses/Closing_Circle.webp";
import { VisitUs } from "@/components/page/VisitUs";
import { MoreToExplore } from "@/components/page/MoreToExplore";
import xCurr from "@/assets/photos/curr-01-hero.webp";
import xAdm from "@/assets/photos/adm-01-hero.webp";
import xAboutP from "@/assets/photos/about-01-hero.webp";

export const Route = createFileRoute("/life")({
  head: () => ({
    meta: [
      { title: "Life at Wellsprings — a child's day and the year around it" },
      {
        name: "description",
        content:
          "Morning, lessons, lunch and the days spent off campus — a Wellsprings day from arrival to home time, the year around it, and the app that carries all of it to you.",
      },
      { property: "og:title", content: "Life at Wellsprings" },
      {
        property: "og:description",
        content: "A child's day at Wellsprings, the year around it, and how parents see all of it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: LifePage,
});

const AWAY_FACTS = [
  { k: "How often", v: "Once a month in the early grades, twice a term after that" },
  { k: "Night at school", v: "Once a year, one year group at a time" },
  { k: "Where they go", v: "Farms, parks, museums, and places around the city" },
] as const;

const YEAR_EVENTS = [
  "Environment Day",
  "Student Council elections",
  "Yoga Day",
  "Investiture",
  "Community Service Day",
  "Market Day",
  "Grandparents' Day",
  "Dandiya Night",
  "Children's Day",
  "Annual Function",
  "Sports Day",
  "Open House",
  "Graduation Day",
] as const;

function LifePage() {
  return (
    <div
      className="bg-[var(--ws-paper)]"
      style={{ ["--page-accent" as string]: "var(--sage-700)" } as CSSProperties}
    >
      <PageHero
        eyebrow="Life at Wellsprings"
        pillar="Belong"
        title={
          <span className="block [text-wrap:balance]">
            <span className="block">There's more to a</span>
            <span className="block">
              day than <span className="text-[var(--sage-700)]">lessons</span>.
            </span>
          </span>
        }
        intro={
          <p>
            A day here should be a happy one. Your child will think, make things and look after the
            people around them — and go home wanting to come back.
          </p>
        }
        image={heroImage}
        imageAlt="Children in a closing circle at the end of the day"
        imageCaption="Closing circle, end of the day."
      />

      <MottoStrip tier={2} />

      {/* The shape of a day — the anchor infographic */}
      <SectionShell
        eyebrow="The shape of a day"
        title="A day here, hour by hour."
        intro={
          <p>
            Every day follows the same simple order: come in, meet, learn, eat, make, talk, go home.
            Tap any time below to see what happens then.
          </p>
        }
      >
        <DayArc />
      </SectionShell>

      {/* The morning */}
      <SectionShell
        background="grey"
        eyebrow="The morning"
        title="The day starts with breakfast."
        intro={
          <p>
            Children eat first, and they are noisy about it. Then the whole school meets for
            assembly — one thought for the day, one song, and one child at the microphone. Lessons
            start only after everyone has settled in.
          </p>
        }
      >

        <div className="grid items-stretch gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <PhotoFrame
            src={imgMorning}
            alt="Children arriving and eating breakfast together at school"
            ratio="4/3"
            parallax
          />
          <div className="self-center">
            <ol className="grid gap-4">
              {[
                { k: "8:00", t: "Gates open", c: "var(--sun-700)", s: "var(--sun-200)" },
                { k: "8:20", t: "Breakfast", c: "var(--sage-700)", s: "var(--sage-200)" },
                { k: "8:40", t: "Assembly", c: "var(--coral-600)", s: "var(--coral-200)" },
              ].map((r) => (
                <li
                  key={r.k}
                  className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-center gap-5 border border-[var(--grey-200)] bg-white p-6"
                >
                  <span
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-mono text-[13px] tracking-[0.06em]"
                    style={{ background: r.s, color: r.c }}
                  >
                    {r.k}
                  </span>
                  <p className="min-w-0 truncate font-serif text-2xl leading-[1.2] text-[var(--ws-ink)]">
                    {r.t}
                  </p>
                </li>
              ))}
            </ol>
          </div>

        </div>

        <div className="mt-10">
          <SettlingIn />
        </div>
      </SectionShell>

      {/* In class */}
      <SectionShell
        eyebrow="In class"
        title="Lessons here start with a question."
        intro={
          <p>
            What did you see? Why did that happen? What will you try next? This takes longer than
            giving the answer, but children remember it for much longer.
          </p>
        }
      >
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <ol className="grid gap-px bg-[var(--grey-200)]">
              {[
                { n: "01", t: "Start with a question", b: "The class is given something to think about before it is given a method." },
                { n: "02", t: "Try, get it wrong, try again", b: "Children work in pairs and small groups. A wrong answer is still useful here." },
                { n: "03", t: "Explain what you found", b: "Every child says their answer out loud. That is what makes it stay." },

              ].map((s) => (
                <li key={s.n} className="flex gap-5 bg-white p-6">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--coral-600)]">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-[var(--ws-ink)]">{s.t}</p>
                    <p className="mt-1.5 text-[14px] leading-[1.7] text-[var(--grey-800)]">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 border-l-2 border-[var(--coral-600)] bg-[var(--coral-200)] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--coral-600)]">
                Every child, every year
              </p>
              <p className="mt-2 font-serif text-xl leading-[1.3] text-[var(--ws-ink)]">
                Every child has a mentor teacher who knows how they are, not only what they scored.
              </p>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-[var(--grey-800)]">
                So if something is wrong on a given day, someone notices before you have to ask.
              </p>
            </div>

            <p className="mt-6 text-sm text-[var(--grey-700)]">
              What is taught, stage by stage, sits on{" "}
              <Link
                to="/curriculum"
                className="underline decoration-[var(--grey-400)] underline-offset-4 hover:text-[var(--ws-ink)]"
              >
                the curriculum pages
              </Link>
              .
            </p>
          </div>
          <PhotoFrame
            src={imgClass}
            alt="Two children working through a problem together in a Wellsprings classroom"
            ratio="4/5"
            parallax
          />
        </div>
      </SectionShell>

      {/* Lunch */}
      <SectionShell
        background="grey"
        eyebrow="Lunch"
        title="Everyone eats together."
        intro={
          <p>
            Half an hour, one kitchen, and hot food cooked here every morning. Children from
            different classes sit at the same table, so they make friends outside their own class.
          </p>
        }
      >
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <LunchTable />
          <div>
            <PhotoFrame
              src={imgLunch}
              alt="Children eating lunch together at a shared table"
              ratio="16/10"
            />
            <div className="mt-8 grid gap-px bg-[var(--grey-200)] lg:grid-cols-3">
              {[
                { k: "Kitchen", v: "In school, cooked fresh every morning" },
                { k: "Menu", v: "Vegetarian, changes weekly, sent to parents" },
                { k: "Tables", v: "Classes mixed, and seats changed each term" },

              ].map((f) => (
                <div key={f.k} className="bg-white p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
                    {f.k}
                  </p>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--ws-ink)]">{f.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Away from school */}
      <SectionShell
        eyebrow="Outside the classroom"
        title="Learning trips, planned often."
        intro={
          <p>
            Farms, parks, museums and workshops. Every trip is linked to what the class is studying
            at the time. Each year group also spends one night at school — games, stories, a late
            snack, and a first night away from home, safely looked after.
          </p>
        }
      >
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1fr]">
          <AwayOrbit />
          <div>
            <PhotoFrame
              src={imgAway}
              alt="Children and their teacher on a field visit to an organic farm"
              ratio="16/10"
              parallax
            />
            <div className="mt-8 grid gap-px bg-[var(--grey-200)]">
              {AWAY_FACTS.map((f) => (
                <div key={f.k} className="bg-white p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
                    {f.k}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[var(--ws-ink)]">{f.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Home time */}
      <SectionShell background="grey" eyebrow="Home time" title="Home by 3 o'clock.">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="max-w-[52ch] font-serif text-2xl leading-[1.35] text-[var(--ws-ink)] md:text-3xl">
              Before the bags are picked up, the class sits together and talks about the day: what
              went well, what did not, and who helped.
            </p>
            <p className="mt-6 max-w-[54ch] text-[15px] leading-[1.75] text-[var(--grey-800)]">
              Then notes for parents, a few minutes with the class teacher, and out of the gate.
              Children leave the way they came in — known by name, and with something to tell you
              about at home.
            </p>
          </div>
          <PhotoFrame
            src={imgCircle}
            alt="A class sitting in a closing circle at the end of the day"
            ratio="4/3"
          />
        </div>
      </SectionShell>

      {/* The year */}
      <SectionShell
        eyebrow="The year"
        title="One idea runs through the whole year."
        intro={
          <p>
            Every year has a theme. This year it is Roots to Wings. You will see it in the morning
            assemblies, the monthly celebrations, the trips, the competitions and the stage shows.
          </p>
        }
      >
        <div className="mb-12 grid items-center gap-8 border border-[var(--grey-200)] bg-white p-7 md:grid-cols-[1fr_0.8fr] md:p-10">
          <div>
            <SectionEyebrow>Theme of the Year · 2026–27</SectionEyebrow>
            <h3 className="mt-4 font-serif text-5xl leading-[1] md:text-6xl">
              <span className="text-[var(--sun-700)]">Roots</span>
              <span className="text-[var(--grey-500)]"> to </span>
              <span className="text-[var(--coral-600)]">Wings</span>
            </h3>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.75] text-[var(--grey-800)]">
              Roots first — the habits and values a child stands on. Wings after — the confidence to
              go further. The events of the year are planned around this one idea.
            </p>
            <a
              href="/theme-of-the-year"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ws-ink)] hover:text-[var(--coral-600)]"
            >
              Read about the theme
              <ArrowRight size={14} strokeWidth={1.6} />
            </a>
          </div>
          <div className="mx-auto w-full max-w-[380px]">
            <RootsToWings className="h-auto w-full" />
          </div>
        </div>

        <div className="mb-12">
          <SectionEyebrow>Some of what fills a year</SectionEyebrow>
          <ul className="mt-4 flex flex-wrap gap-2">
            {YEAR_EVENTS.map((e) => (
              <li
                key={e}
                className="border border-[var(--grey-200)] bg-white px-4 py-2 text-[14px] leading-none text-[var(--grey-800)]"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>

        <YearCalendar />
      </SectionShell>

      {/* And you see all of it */}
      <ErpSection />

      <VisitUs />

      <MoreToExplore
        cards={[
          {
            title: "What your child learns",
            body: "From foundation to secondary, how the CBSE curriculum is taught here, stage by stage.",
            href: "/curriculum",
            label: "See the curriculum",
            image: xCurr,
            imageAlt: "Children at work in a Wellsprings classroom",
          },
          {
            title: "The people behind the school",
            body: "Our vision and mission, and the leadership team who set the tone of the school every day.",
            href: "/about",
            label: "About Wellsprings",
            image: xAboutP,
            imageAlt: "The Wellsprings school building on a working morning",
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
