import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookText,
  Calculator,
  FlaskConical,
  Globe2,
  Laptop,
  Lightbulb,
  PenLine,
  TestTubes,
  MousePointerClick,
  Megaphone,
  Users,
  LifeBuoy,
  Rocket,
  Microscope,
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
  LabStrip,
} from "@/components/curriculum/stagekit";
import { CapabilityBoard, HomeworkRhythm } from "@/components/curriculum/capability";
import heroPhoto from "@/assets/photos/mid-01-hero.webp";
import labPhoto from "@/assets/photos/mid-02.webp";

const ACCENT = "var(--coral-600)";

export const Route = createFileRoute("/curriculum/middle")({
  head: () => ({
    meta: [
      { title: "Middle School · Grades 6 to 8 | Wellsprings School" },
      {
        name: "description",
        content:
          "Grades 6 to 8 at Wellsprings: specialist teachers, six laboratories, structured writing and the CBSE syllabus kept rigorous but human.",
      },
      { property: "og:title", content: "Middle School · Grades 6 to 8 | Wellsprings School" },
      {
        property: "og:description",
        content: "Where the questions get bigger — ages 11 to 14 at Wellsprings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MiddlePage,
});

const STATS = [
  { k: "Grades", v: "6 – 8" },
  { k: "Ages", v: "11 – 14" },
  { k: "Ratio", v: "15:1" },
  { k: "Class size", v: "Up to 36" },
  { k: "In the room", v: "A class teacher, plus a specialist for every subject" },
  { k: "The day", v: "8am – 3pm" },
  { k: "Week", v: "Mon – Fri, plus the first two Saturdays" },
  { k: "Library", v: "Once a week" },
];

const SUBJECTS = [
  { name: "English", note: "Literature, structured writing, real discussion.", icon: BookText },
  { name: "Mathematics", note: "Algebra, geometry and reasoning that holds up.", icon: Calculator },
  { name: "Science", note: "Physics, chemistry and biology — learned by doing.", icon: FlaskConical },
  { name: "Social Science", note: "History, geography and civics, joined up.", icon: Globe2 },
  { name: "Computer", note: "Digital literacy, internet safety and first code.", icon: Laptop },
];

const BUILDS = [
  { name: "Independent thinking", icon: Lightbulb },
  { name: "Writing with structure", icon: PenLine },
  { name: "Lab skills", icon: TestTubes },
  { name: "Digital fluency", icon: MousePointerClick },
  { name: "Speaking up", icon: Megaphone },
  { name: "Working in teams", icon: Users },
];

const LABS = [
  "Physics",
  "Chemistry",
  "Biology",
  "Computer",
  "Mathematics",
  "Composite Science",
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
];

function MiddlePage() {
  return (
    <div className="bg-white" style={{ ["--page-accent" as string]: ACCENT } as CSSProperties}>
      <StageMasthead
        stage="Middle"
        grades="Grades 6 to 8"
        ages="11 – 14"
        titleTop="Where the questions"
        titleAccent="get bigger."
        standfirst="By these years, children can hold a real argument, run an experiment, and own their work. We keep the CBSE syllabus rigorous but human — labs, languages, and the habit of thinking for themselves."
        photo={heroPhoto}
        photoCaption="A science lab, mid-experiment"
        accent={ACCENT}
      />

      <MottoStrip tier={1} />

      <StageSection index="01" eyebrow="The stage at a glance" accent={ACCENT} tone="white">
        <StatRail accent={ACCENT} items={STATS} />
      </StageSection>

      <StageSection
        index="02"
        eyebrow="What these years build"
        title="Six things a child carries out of Middle School."
        accent={ACCENT}
        tone="paper"
      >
        <CapabilityBoard items={BUILDS} accent={ACCENT} />
      </StageSection>

      <StageSection
        index="03"
        eyebrow="Academics"
        title="The CBSE syllabus, with room to think."
        accent={ACCENT}
        tone="white"
      >
        <div className="space-y-12">
          <figure>
            <div className="aspect-16/9 w-full overflow-hidden md:aspect-2/1">
              <img
                src={labPhoto}
                alt="Mid-experiment"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 30%" }}
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
              Mid-experiment
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

          <div className="space-y-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
              Laboratories
            </p>
            <LabStrip items={LABS} accent={ACCENT} icon={Microscope} />
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
          <p className="max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
            Unit tests follow each chapter. Reports come twice a year, journals at each mid-point,
            and you meet the teacher after every cycle.
          </p>
          <HomeworkRhythm
            accent={ACCENT}
            headline="Homework is given every school day. It is short, and it matches the age of the child."
            rules={[
              { k: "How often", v: "Every school day." },
              { k: "How much", v: "Short, and age-appropriate." },
              { k: "Why", v: "To practise what was taught in class." },
            ]}
            week={[
              { d: "Mon", s: "English · Maths" },
              { d: "Tue", s: "Science · Second language" },
              { d: "Wed", s: "Social Science · Third language" },
              { d: "Thu", s: "English · Maths" },
              { d: "Fri", s: "Science · Computer" },
              { d: "Sat", s: "Social Science · English reading and writing" },
            ]}
            weekNote="Saturdays run on the first two weekends of the month."
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
        title="Spend a morning in Middle School."
        body="Watch a lab session, sit in on a discussion, and meet the specialists who teach these years."
        visitLabel="Visit a Middle-school morning"
      />
    </div>
  );
}
