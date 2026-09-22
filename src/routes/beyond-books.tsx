import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bot,
  CircuitBoard,
  Compass,
  Drama,
  Droplets,
  Hammer,
  HeartPulse,
  Leaf,
  Mic,
  PawPrint,
  Sprout,
  Store,
} from "lucide-react";
import { PageHero, MottoStrip, SectionShell } from "@/components/page/Primitives";
import { PhotoFrame } from "@/components/page/PhotoFrame";
import {
  ChipRow,
  FactRail,
  Ladder,
  LoopStrip,
  PhotoTiles,
  WeeklyBlock,
  WorkGrid,
} from "@/components/beyond/blocks";
import { ClubShowcase } from "@/components/beyond/ClubShowcase";
import sBasketball from "@/assets/beyond/sport-basketball.jpg";
import sFootball from "@/assets/beyond/sport-football.jpg";
import sCricket from "@/assets/beyond/sport-cricket.jpg";
import sSwimming from "@/assets/beyond/sport-swimming.jpg";
import sSkating from "@/assets/beyond/sport-skating.jpg";
import sTaekwondo from "@/assets/beyond/sport-taekwondo.jpg";
import sGymnastics from "@/assets/beyond/sport-gymnastics.jpg";
import sChess from "@/assets/beyond/sport-chess.jpg";
import sYoga from "@/assets/beyond/sport-yoga.jpg";
import sAthletics from "@/assets/beyond/sport-athletics.jpg";
import aCraft from "@/assets/beyond/art-craft.jpg";
import aVocal from "@/assets/beyond/art-vocal.jpg";
import aInstruments from "@/assets/beyond/art-instruments.jpg";
import aDance from "@/assets/beyond/art-dance.jpg";
import aDrama from "@/assets/beyond/art-drama.jpg";
import aMovement from "@/assets/beyond/art-movement.jpg";
import tCoding from "@/assets/beyond/steam-coding.jpg";
import tRobotics from "@/assets/beyond/steam-robotics.jpg";
import tAi from "@/assets/beyond/steam-ai.jpg";
import t3d from "@/assets/beyond/steam-3d.jpg";
import tDesign from "@/assets/beyond/steam-design.jpg";
import tEnterprise from "@/assets/beyond/steam-enterprise.jpg";
import cEco from "@/assets/beyond/club-eco.jpg";
import cLiterary from "@/assets/beyond/club-literary.jpg";
import cWellness from "@/assets/beyond/club-wellness.jpg";
import cRobotics from "@/assets/beyond/club-robotics.jpg";
import cScouts from "@/assets/beyond/club-scouts.jpg";
import { VisitUs } from "@/components/page/VisitUs";
import { MoreToExplore } from "@/components/page/MoreToExplore";
import imgArts from "@/assets/glimpses/The_Art_Room.webp";
import imgSteam from "@/assets/glimpses/Think_Lab.webp";
import imgWork from "@/assets/glimpses/Hands_at_Work.webp";
import xCurr from "@/assets/photos/curr-01-hero.webp";
import xLife from "@/assets/photos/life-01-hero.webp";
import xAdm from "@/assets/photos/adm-01-hero.webp";

const ACCENT = "var(--sun-700)";

export const Route = createFileRoute("/beyond-books")({
  head: () => ({
    meta: [
      { title: "Beyond Books — sport, arts, speaking and making at Wellsprings" },
      {
        name: "description",
        content:
          "Sport, the arts, public speaking, the STEAM lab, vocational skills and clubs — all timetabled at Wellsprings Academy and taught by specialists.",
      },
      { property: "og:title", content: "Beyond Books — Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "Timetabled sport, specialist arts teaching, a weekly speaking block, a weekly STEAM block, vocational work and clubs children choose themselves.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BeyondBooksPage,
});

const SPORTS = [
  { name: "Basketball", note: "Coached weekly, with inter-school teams.", image: sBasketball },
  { name: "Football", note: "Skills, small games and school matches.", image: sFootball },
  {
    name: "Cricket",
    note: "Batting, bowling and fielding, taught with patience.",
    image: sCricket,
  },
  { name: "Swimming", note: "Pool sessions through the year, safety built in.", image: sSwimming },
  { name: "Skating", note: "Balance and confidence on wheels.", image: sSkating },
  { name: "Taekwondo", note: "Discipline, focus and respect on the mat.", image: sTaekwondo },
  {
    name: "Gymnastics",
    note: "Strength and body awareness, in proper progressions.",
    image: sGymnastics,
  },
  { name: "Chess", note: "Quiet thinking, real stakes, inter-school play.", image: sChess },
  { name: "Yoga", note: "Breath, balance and stillness through the week.", image: sYoga },
  { name: "Athletics", note: "Track and field, building to sports day.", image: sAthletics },
];

const PE_GAMES = [
  "Athletics",
  "Volleyball",
  "Throwball",
  "Kho-kho",
  "Dodgeball",
  "Touch rugby",
  "Handball",
  "Frisbee",
] as const;

const SPORT_FACTS = [
  { k: "PE periods", v: "Five a week early on, four from Grade 3" },
  { k: "Teams", v: "Play other schools through the year" },
  { k: "Facilities", v: "Pool, playing fields, courts" },
];

const ARTS = [
  { name: "Art & craft", note: "Drawing, painting and making, led by specialists.", image: aCraft },
  { name: "Music — vocal", note: "Singing across many styles, in groups.", image: aVocal },
  {
    name: "Music — instruments",
    note: "Keyboard, guitar and drums, in small batches.",
    image: aInstruments,
  },
  { name: "Dance", note: "Freestyle, hip-hop, contemporary, Bollywood, folk.", image: aDance },
  { name: "Drama", note: "Navarasa, mime and street play — voice and presence.", image: aDrama },
  {
    name: "Movement & rhythm",
    note: "For the youngest — body, beat and balance.",
    image: aMovement,
  },
];

const SHOWCASES = [
  "Annual Day",
  "Sports Day",
  "Investiture",
  "Festivals",
  "Culture and Traditions Day",
  "Global Awareness Day",
  "Inter-school competitions",
] as const;

const STEAM_LEARN = [
  { name: "Coding", note: "From blocks to real code, and the thinking behind it.", image: tCoding },
  { name: "Robotics", note: "Motors, sensors and machines that do a job.", image: tRobotics },
  {
    name: "Artificial intelligence",
    note: "How machines learn, tried out first-hand.",
    image: tAi,
  },
  { name: "3D design", note: "Drawn on screen, printed and held in the hand.", image: t3d },
  { name: "Design thinking", note: "Find the problem before building the answer.", image: tDesign },
  {
    name: "Entrepreneurship",
    note: "An idea, a price, a customer — and a stall to run.",
    image: tEnterprise,
  },
];

const STEAM_LADDER = [
  {
    band: "Grades 1–2",
    body: "LEGO construction, simple machines, paper circuits, balancing structures and visual coding.",
  },
  {
    band: "Grades 3–5",
    body: "Hydraulic bridges, earthquake-resistant towers, robotic vehicles, smart city models and basic automation.",
  },
  {
    band: "Grade 6 upward",
    body: "AI applications, robotics challenges, IoT prototypes, 3D-designed models and real product prototypes.",
  },
];

const LOOP = ["Design", "Build", "Test", "Improve", "Present"] as const;

const WORK = [
  {
    kind: "Living things",
    name: "Growing things",
    note: "Microgreens without soil — building the system, testing the water, keeping it alive.",
    icon: Sprout,
  },
  {
    kind: "Living things",
    name: "Caring for animals",
    note: "Feeding charts, health records, and a visit to see it done properly.",
    icon: PawPrint,
  },
  {
    kind: "Machines and materials",
    name: "Wood and bamboo",
    note: "Real tools, a finished product, and the school's own broken furniture repaired.",
    icon: Hammer,
  },
  {
    kind: "Machines and materials",
    name: "Making things work",
    note: "Breadboards, sensors and circuits — a night light or an alarm that actually works.",
    icon: CircuitBoard,
  },
  {
    kind: "Human services",
    name: "Auditing water",
    note: "Surveying what the school uses, reading three months of bills, writing up what should change.",
    icon: Droplets,
  },
  {
    kind: "Human services",
    name: "Working with a business",
    note: "Interviewing a shopkeeper nearby, designing a campaign, presenting it back to them.",
    icon: Store,
  },
];

const CLUBS = [
  {
    name: "Eco club",
    note: "Looks after the campus and garden, and runs the seed-ball drive.",
    icon: Leaf,
    image: cEco,
  },
  {
    name: "Literary club",
    note: "Reads and writes together, and runs the open-mic and debates.",
    icon: Mic,
    image: cLiterary,
  },
  {
    name: "Health & wellness",
    note: "Food, sleep, movement and feelings — looking after yourself.",
    icon: HeartPulse,
    image: cWellness,
  },
  {
    name: "Robotics",
    note: "Building, coding and solving — hands on the work.",
    icon: Bot,
    image: cRobotics,
  },
  {
    name: "Scouts & guides",
    note: "Service, the outdoors and small responsibilities.",
    icon: Compass,
    image: cScouts,
  },
];

function BeyondBooksPage() {
  return (
    <div
      className="bg-[var(--ws-paper)]"
      style={{ ["--page-accent" as string]: ACCENT } as CSSProperties}
    >
      <PageHero
        eyebrow="Beyond Books"
        pillar="Build"
        title={
          <span className="block [text-wrap:balance]">
            <span className="block">Learning does not</span>
            <span className="block">stop at the</span>
            <span className="block">
              <span className="text-[var(--sun-700)]">classroom door</span>.
            </span>
          </span>
        }
        intro={
          <p>
            Sport, the arts, making things, speaking in front of people, looking after a garden.
            None of it is an extra here. It is timetabled, and taught by specialists.
          </p>
        }
        image={sBasketball}
        imageAlt="Students playing a basketball match on the school court"
        imageCaption="On the court, after the last bell."
      />

      <MottoStrip tier={1} />

      {/* Sport */}
      <SectionShell
        id="sport"
        eyebrow="Sport"
        pillar="Build"
        title="In the timetable, not after it."
        intro={
          <p>
            Children are coached rather than supervised. They learn to warm up properly, to play a
            position, to lose a match and come back the next week.
          </p>
        }
      >
        <FactRail items={SPORT_FACTS} accent={ACCENT} />
        <div className="mt-10">
          <PhotoTiles items={SPORTS} accent={ACCENT} columns={5} />
        </div>
        <div className="mt-10">
          <ChipRow label="Also played in PE" items={PE_GAMES} accent={ACCENT} />
        </div>
        <p className="mt-6 text-[15px] leading-[1.7] text-[var(--grey-800)]">
          The stronger teams represent the school at inter-school meets.
        </p>
      </SectionShell>

      {/* Arts */}
      <SectionShell
        id="arts"
        background="grey"
        eyebrow="The arts"
        pillar="Build"
        title="Taught by people who do them."
        intro={
          <p>Specialist teachers, proper rooms, and enough time to make a mess and find a voice.</p>
        }
        aside={
          <PhotoFrame
            src={imgArts}
            alt="A child painting in the art room"
            ratio="4/3"
            caption="The art room."
          />
        }
      >
        <PhotoTiles items={ARTS} accent={ACCENT} columns={3} />
        <div className="mt-10">
          <ChipRow label="Where it is shown" items={SHOWCASES} accent={ACCENT} />
        </div>
        <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
          Most children find the thing they are good at here, and it is rarely the thing anyone
          predicted.
        </p>
      </SectionShell>

      {/* Speaking */}
      <SectionShell
        id="speaking"
        eyebrow="Play to speak"
        pillar="Build"
        title="Confidence is built by doing it often."
        intro={
          <p>
            Taught through games, not lectures. Children take turns, argue a point, tell a story and
            stand in front of a group often enough that it stops being frightening.
          </p>
        }
      >
        <WeeklyBlock from="Grade 2" often="One block a week" length="80 minutes" accent={ACCENT} />
      </SectionShell>

      {/* STEAM */}
      <SectionShell
        id="steam"
        background="grey"
        eyebrow="The STEAM lab"
        pillar="Build"
        title="Learning by making."
        intro={
          <p>
            From Grade 1, every child has a STEAM block once a week — designing, building, testing
            and improving.
          </p>
        }
        aside={
          <PhotoFrame
            src={imgSteam}
            alt="Children building and testing a model in the STEAM lab"
            ratio="4/3"
            caption="In the STEAM lab."
          />
        }
      >
        <WeeklyBlock from="Grade 1" often="One block a week" length="80 minutes" accent={ACCENT} />
        <div className="mt-10">
          <PhotoTiles items={STEAM_LEARN} accent={ACCENT} columns={3} />
        </div>
        <div className="mt-10">
          <Ladder steps={STEAM_LADDER} accent={ACCENT} />
        </div>
        <div className="mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
            Every block ends the same way
          </p>
          <div className="mt-4">
            <LoopStrip steps={LOOP} accent={ACCENT} />
          </div>
          <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
            Some of it works. Some of it falls apart, and that usually teaches more.
          </p>
        </div>
      </SectionShell>

      {/* Vocational */}
      <SectionShell
        id="vocational"
        eyebrow="Vocational skills"
        pillar="Build"
        title="Real work, with real tools."
        intro={
          <p>
            From Grade 6, children take CBSE's vocational skill classes. Each project runs about
            thirty hours, includes a visit to see the work done for real, and ends with children
            showing what they made.
          </p>
        }
        aside={
          <PhotoFrame
            src={imgWork}
            alt="Children working with tools and materials"
            ratio="4/3"
            caption="Hands at work."
          />
        }
      >
        <WorkGrid items={WORK} accent={ACCENT} />
        <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
          Most of the marks come from the work itself, not from a written test. That is the point.
        </p>
      </SectionShell>

      {/* Clubs */}
      <SectionShell
        id="clubs"
        background="grey"
        eyebrow="Clubs"
        pillar="Build"
        title="Chosen by the children."
        intro={
          <p>
            From Grade 3, every child picks a club. It meets once a week, all year, and it is
            usually where a child finds a first real interest — and the friends who share it.
          </p>
        }
      >
        <ClubShowcase clubs={CLUBS} accent={ACCENT} />
        <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
          Younger children have circle time, storytelling and free play instead. From Grade 6, clubs
          give way to the weekly vocational block.
        </p>
      </SectionShell>

      <VisitUs />

      <MoreToExplore
        cards={[
          {
            title: "Curriculum",
            body: "What is taught, stage by stage, from Nursery to Grade 10.",
            href: "/curriculum",
            label: "See the curriculum",
            image: xCurr,
            imageAlt: "A classroom at Wellsprings",
          },
          {
            title: "Life at Wellsprings",
            body: "A day here, hour by hour, and the year around it.",
            href: "/life",
            label: "See a day here",
            image: xLife,
            imageAlt: "Children at the end of the school day",
          },
          {
            title: "Admissions",
            body: "How joining works, and what to expect at each step.",
            href: "/admissions",
            label: "See how it works",
            image: xAdm,
            imageAlt: "Families visiting the school",
          },
        ]}
      />
    </div>
  );
}
