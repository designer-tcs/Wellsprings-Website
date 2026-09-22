import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookText,
  Calculator,
  FlaskConical,
  Globe2,
  Laptop,
  PenLine,
  Sigma,
  HelpCircle,
  MousePointerClick,
  Users,
  Megaphone,
  LifeBuoy,
  Rocket,
  Library,
} from "lucide-react";
import { MottoStrip } from "@/components/page/Primitives";
import { BeyondBooksNote, StageCTA } from "@/components/curriculum/stage";
import {
  StageMasthead,
  StageSection,
  StatRail,
  SubjectMatrix,
  AssessmentTrack,
  SupportRail,
  LanguageStrip,
} from "@/components/curriculum/stagekit";
import { CapabilityBoard, HomeworkRhythm } from "@/components/curriculum/capability";
import heroPhoto from "@/assets/photos/prim-01-hero.webp";
import classroomPhoto from "@/assets/photos/prim-02.webp";

const ACCENT = "var(--coral-600)";

export const Route = createFileRoute("/curriculum/preparatory")({
  head: () => ({
    meta: [
      { title: "Preparatory · Grades 3 to 5 | Wellsprings School" },
      {
        name: "description",
        content:
          "Grades 3 to 5 at Wellsprings: the CBSE syllabus taught with care — strong reading, number sense, science by experiment, and the habit of asking why.",
      },
      { property: "og:title", content: "Preparatory · Grades 3 to 5 | Wellsprings School" },
      {
        property: "og:description",
        content: "Reading, writing, and the first real questions — ages 8 to 11 at Wellsprings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PreparatoryPage,
});

const STATS = [
  { k: "Grades", v: "3 – 5" },
  { k: "Ages", v: "8 – 11" },
  { k: "Ratio", v: "15:1" },
  { k: "Class size", v: "Up to 36" },
  { k: "In the room", v: "A class teacher, plus language teachers" },
  { k: "The day", v: "8am – 3pm" },
  { k: "Week", v: "Monday – Friday" },
  { k: "Library", v: "Once a week" },
];

const SUBJECTS = [
  { name: "English", note: "Longer texts, structured writing, conversation that holds.", icon: BookText },
  { name: "Mathematics", note: "Fractions, geometry and data, on a sure foundation.", icon: Calculator },
  { name: "Science", note: "Ask first, then test it with a small, real experiment.", icon: FlaskConical },
  { name: "Social Science", note: "Maps, communities, how people live and have lived.", icon: Globe2 },
  { name: "Computer", note: "Digital skills that keep pace with the rest of the work.", icon: Laptop },
];

const BUILDS = [
  { name: "Reading and writing", icon: PenLine },
  { name: "Number sense", icon: Sigma },
  { name: "Good questions", icon: HelpCircle },
  { name: "Computer literacy", icon: MousePointerClick },
  { name: "Working with others", icon: Users },
  { name: "Finding their voice", icon: Megaphone },
];


const CYCLES = [
  { t: "Cycle 1", w: "Pre mid-term" },
  { t: "Cycle 2", w: "Mid-term exam" },
  { t: "Cycle 3", w: "Post mid-term" },
  { t: "Cycle 4", w: "Term-end exam" },
];

const SUPPORT = [
  {
    k: "If a child needs more time",
    v: "Remedial classes and a Special Educator, with regular check-ins.",
    icon: LifeBuoy,
    pillar: "Belong" as const,
  },
  {
    k: "If a child races ahead",
    v: "Olympiads in five subjects, plus extension tasks.",
    icon: Rocket,
    pillar: "Build" as const,
  },
  {
    k: "Every week, for everyone",
    v: "The library. Once a week, every week.",
    icon: Library,
    pillar: "Think" as const,
  },
];

function PreparatoryPage() {
  return (
    <div className="bg-white" style={{ ["--page-accent" as string]: ACCENT } as CSSProperties}>
      <StageMasthead
        stage="Preparatory"
        grades="Grades 3 to 5"
        ages="8 – 11"
        titleTop="Reading, writing, and the"
        titleAccent="first real questions."
        standfirst="These are the years where the foundations are set. We teach the CBSE syllabus with care — strong reading, number sense, and the habit of asking why. The day is full but unhurried, and every child is known by name."
        photo={heroPhoto}
        photoCaption="A classroom, mid-morning"
        accent={ACCENT}
      />

      <MottoStrip tier={1} />

      <StageSection
        index="01"
        eyebrow="The stage at a glance"
        accent={ACCENT}
        tone="white"
      >
        <StatRail accent={ACCENT} items={STATS} />
      </StageSection>

      <StageSection
        index="02"
        eyebrow="What these years build"
        title="Six things a child carries out of Preparatory."
        accent={ACCENT}
        tone="paper"
      >
        <CapabilityBoard items={BUILDS} accent={ACCENT} />
      </StageSection>

      <StageSection
        index="03"
        eyebrow="Academics"
        title="The CBSE syllabus, where reading turns into learning."
        accent={ACCENT}
        tone="white"
      >
        <div className="space-y-12">
          <figure>
            <div className="aspect-16/9 w-full overflow-hidden md:aspect-2/1">
              <img
                src={classroomPhoto}
                alt="Two children over one problem"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 30%" }}
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
            <SubjectMatrix items={SUBJECTS} accent={ACCENT} columns={3} />
          </div>

          <div className="space-y-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
              Languages
            </p>
            <LanguageStrip
              accent={ACCENT}
              teachingNote="Every lesson, every subject."
              choices={["Hindi", "Kannada"]}
              note="Families choose two more languages alongside English."
            />
          </div>
        </div>
      </StageSection>

      <StageSection
        index="04"
        eyebrow="How progress is tracked"
        title="Four cycles a year, and nothing kept from you."
        accent={ACCENT}
        tone="paper"
      >
        <div className="space-y-12">
          <AssessmentTrack cycles={CYCLES} accent={ACCENT} />
          <HomeworkRhythm
            accent={ACCENT}
            headline="Homework is given every school day. It is short, and it matches the age of the child."
            rules={[
              { k: "How often", v: "Every school day." },
              { k: "How much", v: "Short, and age-appropriate." },
              { k: "Why", v: "To practise what was taught in class." },
            ]}
          />

        </div>
      </StageSection>

      <StageSection
        index="05"
        eyebrow="Support and stretch"
        title="Children move at different speeds. The plan allows for it."
        accent={ACCENT}
        tone="white"
      >
        <SupportRail items={SUPPORT} accent={ACCENT} />
      </StageSection>

      <BeyondBooksNote />

      <StageCTA
        title="Sit in on a Preparatory morning."
        body="Watch a reading lesson, see a science experiment run, and meet the class teacher your child would have."
        visitLabel="Visit a Preparatory morning"
      />
    </div>
  );
}
