import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import {
  PageHero,
  MottoStrip,
  SectionShell,
  SectionEyebrow,
  PhotoTag,
} from "@/components/page/Primitives";
import heroImage from "@/assets/photos/car-01-hero.webp";
import sideImage from "@/assets/photos/car-02.webp";

const CAREERS_EMAIL = "hr@wellspringsacademy.in";
const CAREERS_PHONE_DISPLAY = "063663 61707";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Teach the whole child | Wellsprings Academy" },
      {
        name: "description",
        content:
          "We're looking for teachers who want to teach the whole child — Mind, Body, Heart. Open and upcoming roles at Wellsprings Academy, Sarjapura.",
      },
      { property: "og:title", content: "Careers — Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "Join a school where Think, Build and Belong are taught together. See open and upcoming roles, or write to us.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: CareersPage,
});

const ROLES = [
  // TODO: replace this list with live openings from the academic team
  {
    title: "Primary class teacher",
    pillar: "Think" as const,
    stage: "Grades 1 – 5",
    type: "Full-time · On-campus",
    body:
      "Lead a primary class with a mentor teacher's care. Strong reading and number practice; comfortable holding a circle.",
    status: "Open",
  },
  {
    title: "Maker / design teacher",
    pillar: "Build" as const,
    stage: "Grades 3 – 8",
    type: "Full-time · On-campus",
    body:
      "Run the weekly maker block across primary and middle. Wood, cardboard, simple electronics, basic CAD. Loves a stuck moment.",
    status: "Open",
  },
  {
    title: "Counsellor / wellbeing lead",
    pillar: "Belong" as const,
    stage: "Whole school",
    type: "Full-time · On-campus",
    body:
      "Hold the heart of the school. Train teachers in restorative conversations; meet children individually; partner with parents.",
    status: "Upcoming",
  },
] as const;

function CareersPage() {
  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--sun-700)" } as CSSProperties}>
      <PageHero
        eyebrow="Careers"
        pillar="Build"
        title={
          <>
            Teach the
            <br />
            <span className="text-[var(--sun-700)]">whole child</span>.
          </>
        }
        intro={
          <p>
            We are looking for teachers who do not pick a side. Teachers who can hold a hard idea
            and a hard moment with the same patience. If your best lessons end with a child
            saying "wait, can I try?" — you'll feel at home here.
          </p>
        }
        image={heroImage}
        imageAlt="A teacher working alongside students at the maker corner"
        imageCaption="Maker block, alongside, not above."
        cta={{ label: "Write to us", href: `mailto:${CAREERS_EMAIL}` }}
        secondaryCta={{ label: "Why Wellsprings", href: "/why-wellsprings" }}
      />

      <MottoStrip tier={1} />

      {/* What we look for */}
      <SectionShell
        eyebrow="What we look for"
        title="Three things, in this order."
        intro={
          <p>
            We look for warmth and craft together — and when we must choose, we start with
            warmth, because warmth is the harder thing to teach.
          </p>
        }
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              p: "Belong" as const,
              t: "Warmth",
              b: "You see the child before the work. You can hold a hard moment without escalating it.",
            },
            {
              p: "Think" as const,
              t: "Craft",
              b: "You know your subject deeply enough to teach it simply. You read, you keep learning.",
            },
            {
              p: "Build" as const,
              t: "Initiative",
              b: "You make things. You'd rather build a unit than borrow one. You finish what you start.",
            },
          ].map((x) => (
            <article
              key={x.t}
              className="border border-[var(--grey-200)] bg-white p-7"
            >
              <SectionEyebrow pillar={x.p}>{x.p}</SectionEyebrow>
              <h3 className="mt-2 text-3xl">{x.t}</h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[var(--grey-800)]">{x.b}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* Open roles */}
      <SectionShell
        background="grey"
        eyebrow="Open and upcoming"
        title="Roles we're hiring for."
        intro={
          <p>
            If a role isn't listed but you teach the whole child, write to us anyway. We meet
            teachers all year, not only at intake season.
          </p>
        }
      >
        <ul className="border-y border-[var(--grey-300)]">
          {ROLES.map((role) => (
            <li
              key={role.title}
              className="grid gap-4 border-b border-[var(--grey-300)] py-6 last:border-b-0 md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-8"
            >
              <div>
                <SectionEyebrow pillar={role.pillar}>{role.stage}</SectionEyebrow>
                <h3 className="mt-2 text-2xl">{role.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
                  {role.type}
                </p>
              </div>
              <p className="text-[15px] leading-[1.7] text-[var(--grey-800)]">{role.body}</p>
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{
                    color:
                      role.status === "Open" ? "var(--sage-700)" : "var(--grey-700)",
                  }}
                >
                  {role.status}
                </span>
                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=Application — ${role.title}`}
                  className="inline-flex items-center gap-2 border border-[var(--ws-ink)] px-4 py-2 text-sm font-medium text-[var(--ws-ink)] transition-colors hover:bg-[var(--ws-ink)] hover:text-white"
                >
                  Apply
                  <ArrowRight size={14} strokeWidth={1.6} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* How we hire */}
      <SectionShell
        eyebrow="How we hire"
        title="A quiet, considered process."
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
          <ol className="border-y border-[var(--grey-200)]">
            {[
              { t: "Write to us", b: "A short note and a CV. Tell us about a lesson you're proud of." },
              { t: "Conversation", b: "A 45-minute call. We talk about teaching, not credentials." },
              { t: "A demo class", b: "On campus, with real children. We watch, we don't grade." },
              { t: "Conversation with the principal", b: "About the school, about the child you remember most." },
              { t: "Offer", b: "Clear terms, clear expectations, no fine print." },
            ].map((row, i) => (
              <li
                key={row.t}
                className="grid grid-cols-[auto_1fr_2fr] items-baseline gap-6 border-b border-[var(--grey-200)] py-4 last:border-b-0"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-700)]">
                  0{i + 1}
                </span>
                <span className="font-serif text-lg text-[var(--ws-ink)]">{row.t}</span>
                <span className="text-[15px] leading-[1.6] text-[var(--grey-800)]">{row.b}</span>
              </li>
            ))}
          </ol>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--grey-200)] shadow-[0_30px_80px_-30px_rgba(15,23,42,0.3)]">
            <img
              src={sideImage}
              alt="A teacher leaning in to listen to a student's idea"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <PhotoTag pillar="Think" caption="Listening more than talking." />
          </div>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell background="ink">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <SectionEyebrow>Write to us</SectionEyebrow>
            <h2 className="mt-3 text-4xl leading-[1.05] md:text-5xl">
              Tell us about a lesson you're proud of.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.75] text-[var(--slate-200)]">
              That's a better starting point than a CV.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${CAREERS_EMAIL}`}
              className="inline-flex items-center justify-between gap-2 bg-white px-6 py-4 text-sm font-medium text-[var(--ws-ink)] transition-colors hover:bg-[var(--coral-200)]"
            >
              <span className="inline-flex items-center gap-2">
                <Mail size={16} strokeWidth={1.6} />
                {CAREERS_EMAIL}
              </span>
              <ArrowRight size={16} strokeWidth={1.6} />
            </a>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--slate-200)]">
              Or call us on <a href="tel:06366361707" className="hover:text-[var(--ws-ink)]">{CAREERS_PHONE_DISPLAY}</a>
            </p>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
