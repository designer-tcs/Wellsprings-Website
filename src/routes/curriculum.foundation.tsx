import { useState, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookText,
  BookOpen,
  Calculator,
  Languages,
  Leaf,
  Laptop,
  Mic,
  Music,
  ToyBrick,
  Moon,
  UserRound,
  Repeat,
  FileText,
  NotebookPen,
  MessagesSquare,
  LifeBuoy,
  Rocket,
  Library,
  PencilLine,
  Puzzle,
  Hand,
  TrendingUp,
  PenLine,
  Sigma,
  HelpCircle,
  MousePointerClick,
  Users,
  Megaphone,

} from "lucide-react";
import { MottoStrip } from "@/components/page/Primitives";
import { BeyondBooksNote, StageCTA } from "@/components/curriculum/stage";
import {
  StageMasthead,
  StageSection,
  StatRail,
  SubjectMatrix,
  IconTiles,
  AssessmentTrack,
  SupportRail,
  LanguageStrip,
} from "@/components/curriculum/stagekit";
import { CapabilityBoard, MethodList } from "@/components/curriculum/capability";
import heroPhoto from "@/assets/photos/pre-01-hero.webp";
import playPhoto from "@/assets/photos/pre-02.webp";
import classroomPhoto from "@/assets/photos/pre-03.webp";

const ACCENT = "var(--coral-600)";

export const Route = createFileRoute("/curriculum/foundation")({
  head: () => ({
    meta: [
      { title: "Foundation · Nursery to Grade 2 | Wellsprings School" },
      {
        name: "description",
        content:
          "Nursery to Grade 2 at Wellsprings: two teachers in every early years room, play-led learning, the Settlers Room, and the CBSE syllabus taught in small steps.",
      },
      { property: "og:title", content: "Foundation · Nursery to Grade 2 | Wellsprings School" },
      {
        property: "og:description",
        content:
          "Where school starts to feel like belonging — the early years at Wellsprings, ages 3 to 8.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FoundationPage,
});

/* ---------------------------------- data --------------------------------- */

const PRE_STATS = [
  { k: "Ages", v: "3 – 5" },
  { k: "Ratio", v: "12:1" },
  { k: "Class size", v: "Up to 25" },
  { k: "In the room", v: "Mother Teacher + Co-Teacher" },
  { k: "The day", v: "8am – 3pm, Mon – Fri" },
];

const PRE_AREAS = [
  { name: "Language arts", note: "Early reading, talk and listening.", icon: BookText },
  { name: "Phonics", note: "Sounds before spelling.", icon: Mic },
  { name: "Numeracy", note: "Counting, sorting and pattern — with real objects.", icon: Calculator },
  { name: "EVS", note: "The body, weather, plants, the everyday.", icon: Leaf },
  { name: "Story & rhyme", note: "The heart of the day — books, songs, circle time.", icon: BookOpen },
  { name: "Hindi & Kannada", note: "Introduced gently, through song and play.", icon: Languages },
];

const METHOD = [
  { name: "Activity-based", icon: ToyBrick },
  { name: "Play-based", icon: Puzzle },
  { name: "Story-led", icon: BookOpen },
  { name: "Sensory-first", icon: Hand },
  { name: "Language-rich", icon: Languages },
  { name: "Gentle progression", icon: TrendingUp },
];

const G12_BUILDS = [
  { name: "Reading and writing", icon: PenLine },
  { name: "Number sense", icon: Sigma },
  { name: "Good questions", icon: HelpCircle },
  { name: "Computer literacy", icon: MousePointerClick },
  { name: "Working with others", icon: Users },
  { name: "Finding their voice", icon: Megaphone },
];


const SETTLERS = [
  { k: "Music", v: "Playing softly", icon: Music },
  { k: "Toys", v: "To settle with", icon: ToyBrick },
  { k: "Rest", v: "A place to lie down", icon: Moon },
  { k: "A teacher", v: "Stays with them", icon: UserRound },
];

const G12_STATS = [
  { k: "Ages", v: "6 – 8" },
  { k: "Ratio", v: "15:1" },
  { k: "Class size", v: "Up to 36" },
  { k: "In the room", v: "A class teacher, plus language teachers" },
  { k: "The day", v: "8am – 3pm, Mon – Fri" },
];

const G12_SUBJECTS = [
  { name: "English", note: "Reading, writing and talk that sharpens thinking.", icon: BookText },
  { name: "Mathematics", note: "Number sense before procedure — counters, drawings, talk.", icon: Calculator },
  { name: "EVS", note: "The world up close — body, home, neighbourhood, seasons.", icon: Leaf },
  { name: "Computer", note: "Digital literacy, built up gently from Grade 1.", icon: Laptop },
];

const CYCLES = [
  { t: "Cycle 1", w: "Pre mid-term" },
  { t: "Cycle 2", w: "Mid-term exam" },
  { t: "Cycle 3", w: "Post mid-term" },
  { t: "Cycle 4", w: "Term-end exam" },
];

const RECEIPTS = [
  { k: "Unit tests", v: "After every chapter", icon: Repeat },
  { k: "Reports", v: "Two a year", icon: FileText },
  { k: "Journals", v: "At each mid-point", icon: NotebookPen },
  { k: "Meetings", v: "After each cycle", icon: MessagesSquare },
];

const SUPPORT = [
  {
    k: "If a child needs more time",
    v: "Remedial classes and a Special Educator give extra time and a different way in, with regular check-ins. Support, not labels.",
    icon: LifeBuoy,
    pillar: "Belong" as const,
  },
  {
    k: "If a child races ahead",
    v: "Olympiads in five subjects, plus extension tasks that go further rather than faster.",
    icon: Rocket,
    pillar: "Build" as const,
  },
  {
    k: "Every week, for everyone",
    v: "A library visit — choosing a book stays a small ceremony.",
    icon: Library,
    pillar: "Think" as const,
  },
];

/* ---------------------------------- page --------------------------------- */

function FoundationPage() {
  const [tab, setTab] = useState<"pre" | "g12">("pre");
  return (
    <div
      className="bg-white"
      style={{ ["--page-accent" as string]: ACCENT } as CSSProperties}
    >
      <StageMasthead
        stage="Foundation"
        grades="Nursery to Grade 2"
        ages="3 – 8"
        titleTop="Where school starts to feel like"
        titleAccent="belonging."
        standfirst="Settling in, falling for stories, learning through play. The day is warm and unhurried — a Mother Teacher and a Co-Teacher who know every child, and a room set up for curiosity."
        photo={heroPhoto}
        photoCaption="A pre-primary morning, circle time"
        accent={ACCENT}
      />

      <MottoStrip tier={2} />

      {/* 01 — why the early years matter */}
      <StageSection
        index="01"
        eyebrow="How school feels in the early years"
        title="How a child feels about school gets decided here."
        lede="Whether they will put a hand up. Whether they ask when they do not understand. Whether they see school as a place they want to be. That gets set in the first year or two, and it is hard to shift later."
        accent={ACCENT}
        tone="white"
      >
        <IconTiles
          accent={ACCENT}
          items={[
            { k: "So we go slowly", v: "We slow down where it matters, so learning remains meaningful and every child gets the attention they need.", icon: UserRound },
            { k: "No tests", v: "Learning is observed continuously, without formal tests.", icon: PencilLine },
            { k: "A room to settle", v: "For as long as a child needs, on the first mornings", icon: Moon },
            { k: "What we watch", v: "Settling in, language, confidence with others", icon: BookOpen },
          ]}
        />
      </StageSection>



      {tab === "pre" ? (
        <StageSection
          index="02"
          eyebrow="Nursery, K1 and K2"
          title="Play is the work, at this age."
          lede="Everything is hands-on, story-led and sensory. The aim is a child who loves coming to school, and who is ready — when the time comes — for the structure of Grade 1."
          accent={ACCENT}
          tone="paper"
          topSlot={<YearTabs tab={tab} setTab={setTab} />}
        >
          <div className="space-y-12">
            <StatRail
              accent={ACCENT}
              items={[...PRE_STATS, { k: "Half day", v: "Nursery and K1, up to 12:30" }]}
            />


            <figure>
              <div className="aspect-16/9 w-full overflow-hidden md:aspect-2/1">
                <img
                  src={playPhoto}
                  alt="Learning through play"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
                Learning through play
              </figcaption>
            </figure>

            <div className="space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
                The areas we explore
              </p>
              <SubjectMatrix items={PRE_AREAS} accent={ACCENT} columns={3} />
            </div>

            <div className="space-y-6">
              <MethodList items={METHOD} accent={ACCENT} />
            </div>

            <div className="space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
                How we see progress
              </p>
              <IconTiles
                accent={ACCENT}
                items={[
                  { k: "Tests", v: "None. We watch and note.", icon: PencilLine },
                  { k: "Journal", v: "A termly learning journal, shared with you", icon: NotebookPen },
                  { k: "Conversations", v: "Regular and easy, with your child's teacher", icon: MessagesSquare },
                ]}
              />
            </div>
          </div>
        </StageSection>
      ) : (
        <StageSection
          index="02"
          eyebrow="Grades 1 and 2"
          title="The CBSE syllabus, taught with care."
          lede="The subject list is the easy part. What matters is how it is taught — small steps, real materials, and a class teacher who knows your child by name. In these two years the world arrives as one subject, EVS, alongside English, maths and computers."
          accent={ACCENT}
          tone="paper"
          topSlot={<YearTabs tab={tab} setTab={setTab} />}
        >
          <div className="space-y-12">
            <StatRail accent={ACCENT} items={G12_STATS} />


            <figure>
              <div className="aspect-16/9 w-full overflow-hidden md:aspect-2/1">
                <img
                  src={classroomPhoto}
                  alt="Two children over one problem"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
                Two children over one problem
              </figcaption>
            </figure>

            <div className="space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
                Subjects offered
              </p>
              <SubjectMatrix items={G12_SUBJECTS} accent={ACCENT} columns={4} />
            </div>

            <div className="space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
                Languages
              </p>
              <LanguageStrip
                accent={ACCENT}
                teachingNote="Every lesson, every subject, from the first year."
                choices={["Hindi", "Kannada"]}
                note="Families choose two more languages alongside English."
              />
            </div>

            <div className="space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
                What these years build
              </p>
              <CapabilityBoard items={G12_BUILDS} accent={ACCENT} />

            </div>
          </div>
        </StageSection>
      )}

      {/* 03 — Settlers Room */}
      <StageSection
        index="03"
        eyebrow="The Settlers Room"
        title="Nobody is made to walk in before they are ready."
        lede="For many children, the first day of school is also the first time they step away from home. Before a child can learn, they have to feel safe. So a crying or anxious child is never rushed into a classroom — they go in when they are ready, at their own pace."
        accent={ACCENT}
        tone="white"
      >
        <div className="space-y-10">
          <IconTiles items={SETTLERS} accent={ACCENT} />
          <p className="max-w-[30ch] font-serif text-2xl leading-[1.3] text-[var(--ws-ink)] md:text-3xl">
            Before a child can truly Think or Build, they first need to feel that they Belong.
          </p>
        </div>
      </StageSection>

      {/* 04 — progress (Grades 1 and 2) */}
      {tab === "g12" && (
        <StageSection
          index="04"
          eyebrow="How progress is tracked in Grades 1 and 2"
          title="Four cycles a year, and nothing kept from you."
          lede="Homework runs Monday to Friday, planned subject by subject and kept age-appropriate. Practice, not overload."
          accent={ACCENT}
          tone="white"
        >
          <AssessmentTrack cycles={CYCLES} receipts={RECEIPTS} accent={ACCENT} />
        </StageSection>
      )}

      {/* support and stretch */}
      <StageSection
        index={tab === "g12" ? "05" : "04"}

        eyebrow="Support and stretch"
        title="Children move at different speeds. The plan allows for it."
        accent={ACCENT}
        tone="paper"
      >
        <SupportRail items={SUPPORT} accent={ACCENT} />
      </StageSection>

      <BeyondBooksNote />

      <StageCTA
        title="Meet the teachers your child would have."
        body="Spend a morning with us — watch a circle time, see the Settlers Room, and meet a Mother Teacher. No rush, no pressure."
        visitLabel="Visit a Foundation morning"
      />
    </div>
  );
}

/** Sleek inline switch between the two Foundation year groups. */
function YearTabs({
  tab,
  setTab,
}: {
  tab: "pre" | "g12";
  setTab: (t: "pre" | "g12") => void;
}) {
  const items = [
    { id: "pre", label: "Nursery · K1 · K2", sub: "Ages 3 – 5" },
    { id: "g12", label: "Grades 1 – 2", sub: "Ages 6 – 8" },
  ] as const;
  return (
    <div
      role="tablist"
      aria-label="Foundation year groups"
      className="inline-flex border border-[var(--grey-300)] p-1"
    >
      {items.map((t) => {
        const on = tab === t.id;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            onClick={() => setTab(t.id)}
            className="px-6 py-3 font-mono text-[12px] uppercase tracking-[0.28em] transition-colors md:px-10 md:py-4 md:text-[13px]"
            style={{
              background: on ? ACCENT : "transparent",
              color: on ? "#ffffff" : "var(--grey-600)",
            }}
          >
            <span className="block">{t.label}</span>
            <span
              className="mt-1.5 block text-[10px] tracking-[0.22em]"
              style={{ opacity: on ? 0.8 : 0.65 }}
            >
              {t.sub}
            </span>
          </button>
        );
      })}
    </div>
  );

}
