import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bus,
  Camera,
  ClipboardCheck,
  Clock,
  Cpu,
  Drama,
  Dumbbell,
  Flag,
  FlaskConical,
  Goal,
  HeartPulse,
  IdCard,
  Laptop,
  Library,
  LogOut,
  Mail,
  MapPin,
  Music,
  Navigation,
  Palette,
  Pill,
  Ruler,
  ShieldCheck,
  Siren,
  Smile,
  Sun,
  Trophy,
  UserCheck,
  Utensils,
  Waves,
} from "lucide-react";
import { PageHero, MottoStrip, SectionShell } from "@/components/page/Primitives";
import { PhotoFrame } from "@/components/page/PhotoFrame";
import { DisciplineGrid, FactRail, WorkGrid } from "@/components/beyond/blocks";
import { SpaceCollage, type Space } from "@/components/campus/SpaceCollage";
import { VisitUs } from "@/components/page/VisitUs";
import { MoreToExplore } from "@/components/page/MoreToExplore";
import heroImage from "@/assets/glimpses/On_the_Field.webp";
import imgLearn from "@/assets/glimpses/Think_Lab.webp";
import imgScience from "@/assets/glimpses/A_Small_Experiment.webp";
import imgLibrary from "@/assets/glimpses/The_Reading_Corner.webp";
import imgArt from "@/assets/glimpses/The_Art_Room.webp";
import imgEat from "@/assets/glimpses/Lunch_Together.webp";
import imgClassroom2 from "@/assets/campus/classroom-2.webp";
import imgMathsLab from "@/assets/campus/maths-lab.webp";
import imgComputerLab from "@/assets/campus/computer-lab.webp";
import imgMusicRoom from "@/assets/campus/music-room.webp";
import imgDanceStudio from "@/assets/campus/dance-studio.webp";
import imgInfirmary from "@/assets/campus/infirmary.webp";
import imgAssembly from "@/assets/campus/assembly-ground.webp";
import imgPool from "@/assets/campus/pool.webp";
import imgField from "@/assets/campus/field.webp";
import imgCourts from "@/assets/campus/courts.webp";
import imgIndoor from "@/assets/campus/indoor.webp";
import xBeyond from "@/assets/glimpses/Hands_at_Work.webp";
import xLife from "@/assets/photos/life-01-hero.webp";
import xAdm from "@/assets/photos/adm-01-hero.webp";

const ACCENT = "var(--sun-700)";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus — ten acres at Wellsprings Academy, Mugalur" },
      {
        name: "description",
        content:
          "Ten acres near Sarjapura: classrooms and labs, pool, fields and courts, buses with GPS and an attendant, a cafeteria, an infirmary and controlled campus entry.",
      },
      { property: "og:title", content: "Campus — Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "Where they learn, where they play, and the practical things a parent wants to know — transport, meals, health and safety on a ten-acre campus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CampusPage,
});

const CAMPUS_FACTS = [
  { k: "Campus", v: "10 acres" },
  { k: "Board", v: "CBSE 831719" },
  { k: "Location", v: "Mugalur, near Sarjapura" },
];

const LEARN: Space[] = [
  {
    name: "Classrooms",
    note: "Bright, with natural light and space to move around.",
    icon: Sun,
    image: imgClassroom2,
    alt: "A bright classroom with Think, Build, Belong on the wall",
    size: "feature",
  },
  {
    name: "Science laboratories",
    note: "Four — physics, chemistry, biology and composite science.",
    icon: FlaskConical,
    image: imgScience,
    alt: "Children running a small experiment in the science lab",
    size: "tall",
  },
  {
    name: "STEAM lab",
    note: "Where children design, build and test, with real tools and materials.",
    icon: Cpu,
    image: imgLearn,
    alt: "Children building and testing a model in the STEAM lab",
    size: "tall",
  },
  {
    name: "Computer lab",
    note: "Where digital skills are taught, from Grade 1.",
    icon: Laptop,
    image: imgComputerLab,
    alt: "The school computer lab",
    size: "wide",
  },
  {
    name: "Mathematics lab",
    note: "Maths you can see and handle.",
    icon: Ruler,
    image: imgMathsLab,
    alt: "The mathematics lab with manipulatives on the tables",
    size: "wide",
  },
];

const PLAY: Space[] = [
  {
    name: "Swimming pool",
    note: "Coached sessions through the year, safety built in.",
    icon: Waves,
    image: imgPool,
    alt: "The school swimming pool with lane ropes",
    size: "wide",
  },
  {
    name: "Playing fields",
    note: "Football and athletics.",
    icon: Goal,
    image: imgField,
    alt: "Children playing football on the school field",
    size: "wide",
  },
  {
    name: "Courts",
    note: "Volleyball, throwball, basketball, tennis, paddle and skating.",
    icon: Trophy,
    image: imgCourts,
    alt: "Children playing tennis on the school court",
    size: "wide",
  },
  {
    name: "Indoor spaces",
    note: "Chess, yoga, taekwondo and gymnastics.",
    icon: Dumbbell,
    image: imgIndoor,
    alt: "Children playing chess indoors",
    size: "wide",
  },
];

const TRANSPORT = [
  {
    kind: "On the bus",
    name: "Driver & attendant",
    note: "A uniformed attendant on every bus, alongside the driver.",
    icon: Bus,
  },
  { kind: "On the bus", name: "GPS", note: "On every route.", icon: Navigation },
  {
    kind: "Practice",
    name: "Drills",
    note: "Evacuation drills twice a year.",
    icon: Siren,
  },
  {
    kind: "Practice",
    name: "Routes",
    note: "Confirmed with the transport in-charge at admission.",
    icon: MapPin,
  },
];

const MEALS = [
  { k: "Breakfast", v: "8:00 – 8:25 am" },
  { k: "Mid-morning snack", v: "10:00 – 10:15 am" },
  { k: "Lunch", v: "12:55 – 1:30 pm" },
];

const CARE = [
  {
    kind: "On campus",
    name: "Infirmary",
    note: "Four beds, with a qualified school nurse.",
    icon: HeartPulse,
  },
  {
    kind: "On campus",
    name: "Behaviour counsellor",
    note: "A clinical psychologist, on campus.",
    icon: Smile,
  },
  {
    kind: "If a child is unwell",
    name: "Parents are called",
    note: "The same day, not at the end of the week.",
    icon: Clock,
  },
  {
    kind: "If a child is unwell",
    name: "Medication",
    note: "Handed in at reception with a written note and prescription.",
    icon: Pill,
  },
];

const SAFETY = [
  { name: "Entry", note: "Controlled entry to the campus.", icon: ShieldCheck },
  { name: "CCTV", note: "Throughout the campus.", icon: Camera },
  { name: "Staff", note: "Verified before they meet a child.", icon: UserCheck },
  {
    name: "Pick-up",
    note: "One authorised person per family, carrying the school-issued ID card.",
    icon: IdCard,
  },
  { name: "Changes", note: "Sent by email a day in advance, with ID details.", icon: Mail },
  { name: "Early departure", note: "A gate pass approved by the Principal.", icon: LogOut },
];

const SPACES_ALSO: Space[] = [
  {
    name: "Library",
    note: "Visited once a week by every class, to read and to borrow.",
    icon: Library,
    image: imgLibrary,
    alt: "Children choosing books in the school library",
    size: "feature",
  },
  {
    name: "Art room",
    note: "Paint, clay and paper — a room that is allowed to get messy.",
    icon: Palette,
    image: imgArt,
    alt: "A child painting in the art room",
    size: "tall",
  },
  {
    name: "Music room",
    note: "Keyboard, guitar and drums, taught in small batches.",
    icon: Music,
    image: imgMusicRoom,
    alt: "The music room with keyboard, drums and percussion",
    size: "tall",
  },
  {
    name: "Dance studio",
    note: "Mirrors, sprung space and room for a full class to move.",
    icon: Drama,
    image: imgDanceStudio,
    alt: "The dance studio with mirrors and a sprung floor",
    size: "standard",
  },
  {
    name: "Assembly ground",
    note: "Where the week starts, and where the school gathers.",
    icon: Flag,
    image: imgAssembly,
    alt: "The assembly ground and stage",
    size: "standard",
  },
  {
    name: "Cafeteria",
    note: "Breakfast, snack and lunch, at fixed times each day.",
    icon: Utensils,
    image: imgEat,
    alt: "Children eating lunch together",
    size: "wide",
  },
  {
    name: "Infirmary",
    note: "Four beds and a qualified school nurse, through the school day.",
    icon: HeartPulse,
    image: imgInfirmary,
    alt: "The school infirmary",
    size: "band",
  },
];

function CampusPage() {
  return (
    <div
      className="bg-[var(--ws-paper)]"
      style={{ ["--page-accent" as string]: ACCENT } as CSSProperties}
    >
      <PageHero
        eyebrow="Campus"
        pillar="Build"
        title={
          <span className="block [text-wrap:balance]">
            <span className="block">Ten acres to</span>
            <span className="block">
              <span className="text-[var(--sun-700)]">learn</span> in.
            </span>
          </span>
        }
        intro={
          <p>
            Space to run, rooms built for the work that happens in them, and the quieter things a
            parent wants to know about — how a child gets here, what they eat, and who looks after
            them if something goes wrong.
          </p>
        }
        image={heroImage}
        imageAlt="Children playing on the school field in the morning"
        imageCaption="The field, mid-morning."
      />

      <section className="border-b border-[var(--grey-200)] bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-5 py-10 md:px-8 md:py-12">
          <FactRail items={CAMPUS_FACTS} accent={ACCENT} />
        </div>
      </section>

      <MottoStrip tier={1} />

      {/* Where they learn */}
      <SectionShell
        id="learn"
        eyebrow="Where they learn"
        pillar="Build"
        title="Rooms built for the work."
        intro={
          <p>
            A lab is a lab, not a classroom with a poster on the wall. Each room is set up for what
            actually happens in it.
          </p>
        }
      >
        <div>
          <SpaceCollage spaces={LEARN} accent={ACCENT} />
        </div>

        <div className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-600)]">
            The rest of the campus
          </p>
          <div className="mt-6">
            <SpaceCollage spaces={SPACES_ALSO} accent={ACCENT} />
          </div>
        </div>

        <p className="mt-8 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
          Every class visits the library once a week to read and borrow. Choosing a book stays a
          small ceremony.{" "}
          <a href="/beyond-books" className="underline underline-offset-4">
            See Beyond Books →
          </a>
        </p>
      </SectionShell>

      {/* Where they play */}
      <SectionShell
        id="play"
        background="grey"
        eyebrow="Where they play"
        pillar="Build"
        title="Space to play, every day."
        intro={
          <p>
            Sport runs five periods a week in the early grades. The facilities are used every day,
            not kept for sports day.
          </p>
        }
      >
        <SpaceCollage spaces={PLAY} accent={ACCENT} />
        <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
          <a href="/beyond-books" className="underline underline-offset-4">
            See Beyond Books →
          </a>
        </p>
      </SectionShell>

      {/* Getting here */}
      <SectionShell
        id="transport"
        eyebrow="Getting here"
        pillar="Build"
        title="Every bus, every route."
        intro={
          <p>
            The bus is the first part of a child's day and the last part of it, so it is staffed and
            tracked like any other part of school.
          </p>
        }
      >
        <WorkGrid items={TRANSPORT} accent={ACCENT} columns={2} />
      </SectionShell>

      {/* Eating here */}
      <SectionShell
        id="cafeteria"
        background="grey"
        eyebrow="Eating here"
        pillar="Belong"
        title="A cafeteria on campus."
        intro={
          <p>
            Three fixed times in the day, so nobody eats in a hurry and nobody eats alone at their
            desk.
          </p>
        }
        aside={
          <PhotoFrame
            src={imgEat}
            alt="Children eating lunch together"
            ratio="4/3"
            caption="Lunch together."
          />
        }
      >
        <FactRail items={MEALS} accent={ACCENT} />
        <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
          Families who want to use the cafeteria can arrange it through the school office. Dietary
          restrictions and allergies are recorded at the start of the year.
        </p>
      </SectionShell>

      {/* Health */}
      <SectionShell
        id="health"
        eyebrow="If something goes wrong"
        pillar="Belong"
        title="A nurse, and someone to talk to."
        intro={
          <p>
            A grazed knee and a hard week are both looked after here, by people whose job that is.
          </p>
        }
      >
        <WorkGrid items={CARE} accent={ACCENT} columns={2} />
      </SectionShell>

      {/* Safety */}
      <SectionShell
        id="safety"
        background="grey"
        eyebrow="Keeping children safe"
        pillar="Belong"
        title="Who comes in, and who goes out."
        intro={
          <p>
            The rules are simple, written down, and applied the same way on a busy Friday as on a
            quiet Tuesday.
          </p>
        }
      >
        <DisciplineGrid items={SAFETY} accent={ACCENT} columns={3} />
        <p className="mt-6 flex items-center gap-2 text-[15px] leading-[1.7] text-[var(--grey-800)]">
          <ClipboardCheck size={18} strokeWidth={1.5} style={{ color: ACCENT }} aria-hidden />
          Pick-up details are confirmed with the school office at the start of each year.
        </p>
      </SectionShell>

      <VisitUs />

      <MoreToExplore
        cards={[
          {
            title: "Beyond Books",
            body: "Sport, the arts, the STEAM lab and clubs — all timetabled.",
            href: "/beyond-books",
            label: "See what else happens",
            image: xBeyond,
            imageAlt: "Children working with tools and materials",
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
