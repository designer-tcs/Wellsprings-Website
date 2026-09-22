import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookText,
  Calculator,
  FlaskConical,
  Globe2,
  Languages,
  Lightbulb,
  PenLine,
  TestTubes,
  Search,
  Megaphone,
  Users,
  Layers,
  Handshake,
  Hammer,
  Puzzle,
  MessageSquareQuote,
  Laptop,
  FileText,
  MessagesSquare,
  LifeBuoy,
  Rocket,
  Library,
  ClipboardCheck,
  Clock4,
  CalendarDays,
  FileSearch,
  Timer,
  Compass,
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
  IconTiles,
  NotePanel,
} from "@/components/curriculum/stagekit";
import { CapabilityBoard, MethodList, ChoiceRow, LabRail } from "@/components/curriculum/capability";
import heroPhoto from "@/assets/glimpses/Think_Lab.webp";
import practicalPhoto from "@/assets/glimpses/A_Small_Experiment.webp";

const ACCENT = "var(--coral-600)";

export const Route = createFileRoute("/curriculum/secondary")({
  head: () => ({
    meta: [
      { title: "Secondary · Grades 9 to 12 | Wellsprings School" },
      {
        name: "description",
        content:
          "Grades 9 to 12 at Wellsprings: board-year teaching with subject specialists, four laboratories, daily after-school support, pre-boards and stream counselling.",
      },
      { property: "og:title", content: "Secondary · Grades 9 to 12 | Wellsprings School" },
      {
        property: "og:description",
        content: "The years that ask for focus — ages 14 to 18 at Wellsprings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SecondaryPage,
});

const STATS = [
  { k: "Grades", v: "9 – 12" },
  { k: "Ages", v: "14 – 18" },
  { k: "Ratio", v: "15:1" },
  { k: "Class size", v: "Up to 36" },
  { k: "In the room", v: "Class teacher, specialists and reinforcement teachers" },
  { k: "The day", v: "8am – 3pm" },
  { k: "Week", v: "Monday – Saturday" },
  { k: "After school", v: "One hour of support, daily" },
];

const SUBJECTS = [
  { name: "English", note: "Literature, comprehension and structured writing.", icon: BookText },
  { name: "Mathematics", note: "Standard or Basic, chosen with the family and the teacher.", icon: Calculator },
  { name: "Science", note: "Physics, chemistry and biology, with full practicals.", icon: FlaskConical },
  { name: "Social Science", note: "History, geography, civics and economics.", icon: Globe2 },
  { name: "Second language", note: "Chosen by the family.", icon: Languages },
  { name: "Computers / IT", note: "Digital skills carried through both years.", icon: Laptop },
];

const SKILL_SUBJECTS = [
  { name: "Information Technology", note: "Applied digital work." },
  { name: "Artificial Intelligence", note: "Data, logic and modern tools." },
  { name: "Computer Applications", note: "Programming and problem solving." },
];

const BUILDS = [
  { name: "Study habits that hold", icon: Lightbulb },
  { name: "Answer writing", icon: PenLine },
  { name: "Lab discipline", icon: TestTubes },
  { name: "Research and case studies", icon: Search },
  { name: "Presenting an argument", icon: Megaphone },
  { name: "Working in a team", icon: Users },
];

const METHOD = [
  { name: "Competency-based", icon: ClipboardCheck },
  { name: "Project-based", icon: Hammer },
  { name: "Experiential", icon: FlaskConical },
  { name: "Collaborative", icon: Users },
  { name: "Case studies", icon: FileSearch },
  { name: "Peer learning", icon: Handshake },
  { name: "Interdisciplinary work", icon: Layers },
  { name: "Real-life application", icon: Puzzle },
  { name: "Continuous feedback", icon: MessageSquareQuote },
];

const STAGES_TRACK = [
  { t: "Stage 1", w: "Pre mid-term" },
  { t: "Stage 2", w: "Mid-term exam" },
  { t: "Stage 3", w: "Post mid-term" },
  { t: "Stage 4", w: "Preparatory exam" },
  { t: "Stage 5", w: "Final exam" },
];

const BOARD_PREP = [
  { k: "Assessment stages", v: "Five through the year", icon: ClipboardCheck },
  { k: "Daily support", v: "One hour after school", icon: Clock4 },
  { k: "Saturdays", v: "Revision and remedial on non-working Saturdays", icon: CalendarDays },
  { k: "Past papers", v: "Previous CBSE papers, competency and case-study questions", icon: FileSearch },
  { k: "Pre-boards", v: "Sahodaya pre-boards, marked outside the school", icon: FileText },
  { k: "Mock tests", v: "For timing, accuracy and presentation", icon: Timer },
];

const SUPPORT = [
  {
    k: "If a child needs more time",
    v: "Reinforcement worksheets, chapter-wise revision material, an hour of support daily, and extra sessions on non-working Saturdays.",
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
    v: "Every class visits the library once a week.",
    icon: Library,
    pillar: "Think" as const,
  },
];

function SecondaryPage() {
  return (
    <div className="bg-white" style={{ ["--page-accent" as string]: ACCENT } as CSSProperties}>
      <StageMasthead
        stage="Secondary"
        grades="Grades 9 to 12"
        ages="14 – 18"
        titleTop="The years that ask"
        titleAccent="for focus."
        standfirst="Grades 9 and 10 carry the weight of the board years. A class teacher, subject specialists and reinforcement teachers work together, with an hour of academic support every day after school."
        photo={heroPhoto}
        photoCaption="A secondary science lab"
        photoFocus="center 40%"
        accent={ACCENT}
      />

      <MottoStrip tier={1} />

      <StageSection index="01" eyebrow="The stage at a glance" accent={ACCENT} tone="white">
        <StatRail accent={ACCENT} items={STATS} />
      </StageSection>

      <StageSection
        index="02"
        eyebrow="What these years build"
        title="Six things a child carries out of Secondary."
        accent={ACCENT}
        tone="paper"
      >
        <CapabilityBoard items={BUILDS} accent={ACCENT} />
      </StageSection>

      <StageSection
        index="03"
        eyebrow="Grades 9 and 10 · Academics"
        title="The CBSE syllabus, taught for understanding."
        accent={ACCENT}
        tone="white"
      >
        <div className="space-y-12">
          <figure>
            <div className="aspect-16/9 w-full overflow-hidden">
              <img
                src={practicalPhoto}
                alt="Students working through a science experiment in class"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 50%" }}
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
              A Grade 9 lesson, in class
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
              Skill subjects — chosen in Grade 9, carried through Grade 10
            </p>
            <ChoiceRow
              items={SKILL_SUBJECTS}
              accent={ACCENT}
              note="One skill subject is chosen in Grade 9 and carried through Grade 10."
            />
          </div>

          <div className="space-y-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
              Laboratories
            </p>
            <LabRail
              items={["Physics", "Chemistry", "Biology", "Computer Science"]}
              accent={ACCENT}
              note="All four are used through the year, with practicals sitting alongside classroom teaching so experiments follow the concepts they belong to."
            />
          </div>

          <MethodList items={METHOD} accent={ACCENT} />
        </div>
      </StageSection>

      <StageSection
        index="04"
        eyebrow="How progress is tracked"
        title="Five stages a year, and a monthly conversation."
        accent={ACCENT}
        tone="paper"
      >
        <div className="space-y-10">
          <AssessmentTrack cycles={STAGES_TRACK} accent={ACCENT} />
          <p className="max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
            You meet the teacher every month. Reports come at the end of each term in a grading
            format, Learning Journals carry written feedback after the pre and post mid-term
            assessments, and there is an orientation before the major examinations.
          </p>
        </div>
      </StageSection>

      <StageSection
        index="05"
        eyebrow="Board preparation"
        title="Built into the timetable from the first term."
        accent={ACCENT}
        tone="white"
      >
        <div className="space-y-px">
          <IconTiles items={BOARD_PREP.slice(0, 4)} accent={ACCENT} />
          <IconTiles items={BOARD_PREP.slice(4)} accent={ACCENT} />
        </div>
      </StageSection>

      <StageSection
        index="06"
        eyebrow="Support and stretch"
        title="Children move at different speeds. The plan allows for it."
        accent={ACCENT}
        tone="paper"
      >
        <SupportRail items={SUPPORT} accent={ACCENT} />
      </StageSection>

      <StageSection
        index="07"
        eyebrow="After Grade 10"
        title="Choosing a stream, with people who know the child."
        lede="Orientation sessions for students and parents explain the two streams available — Science and Commerce — along with what each asks for and where each leads."
        accent={ACCENT}
        tone="white"
      >
        <div className="space-y-10">
          <IconTiles
            accent={ACCENT}
            items={[
              { k: "Streams", v: "Science and Commerce", icon: Compass },
              { k: "Board", v: "CBSE, through to Grade 12", icon: ClipboardCheck },
              { k: "Choice made", v: "In Grade 10, with counselling", icon: MessagesSquare },
              { k: "Who counsels", v: "Leadership, coordinators and subject teachers", icon: Globe2 },
            ]}
          />
          <p className="max-w-[62ch] text-[16px] leading-[1.75] text-[var(--grey-800)]">
            Alongside those sessions, children are counselled individually based on their
            performance, aptitude and interests. Parents are part of that conversation.
          </p>
          <NotePanel
            accent={ACCENT}
            label="Grades 11 and 12"
            body="Opening as our children grow into them. Wellsprings adds a grade as its first cohorts move up, rather than before it can teach it well. Subjects and timetable will be published as they are confirmed."
            facts={[
              { k: "Streams", v: "Science and Commerce" },
              { k: "Board", v: "CBSE" },
              { k: "Opens", v: "As each cohort moves up" },
            ]}
          />
        </div>
      </StageSection>

      <BeyondBooksNote />

      <StageCTA
        title="See a board year up close."
        body="Sit in on a practical, look at the revision plan, and meet the teachers who carry Grades 9 and 10."
        visitLabel="Visit a Secondary morning"
      />
    </div>
  );
}
