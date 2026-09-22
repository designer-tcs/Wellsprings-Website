import { type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  PageHero,
  SectionShell,
  SectionEyebrow,
  PILLAR_COLOR,
  type Pillar,
} from "@/components/page/Primitives";
import heroImage from "@/assets/photos/why-01-hero.webp";
import imgValues from "@/assets/photos/home-04-belong.webp";
import imgAcademics from "@/assets/photos/curr-02.webp";
import imgBeyond from "@/assets/photos/home-03-build.webp";
import imgWellbeing from "@/assets/photos/why-04.webp";
import imgCampus from "@/assets/photos/about-02.webp";
import imgEnvironments from "@/assets/photos/why-03.webp";
import { VisitUs } from "@/components/page/VisitUs";
import { MoreToExplore } from "@/components/page/MoreToExplore";
import imgAbout from "@/assets/photos/about-01-hero.webp";
import imgCurriculum from "@/assets/photos/curr-01-hero.webp";
import imgLife from "@/assets/photos/life-01-hero.webp";
import imgAdmissions from "@/assets/photos/adm-01-hero.webp";

export const Route = createFileRoute("/why-wellsprings")({
  head: () => ({
    meta: [
      { title: "Why Wellsprings — Think, Build, Belong | Wellsprings Academy" },
      {
        name: "description",
        content:
          "Academics, making, sport and the arts, wellbeing, values and a ten-acre campus — what your child is taught here as a whole person, mind, body and heart.",
      },
      { property: "og:title", content: "Why Wellsprings — Think, Build, Belong" },
      {
        property: "og:description",
        content:
          "Six things we work on through the year, grouped under Think, Build and Belong — and the things you can look for when you come and see us.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: WhyWellspringsPage,
});

type Fact = { label: string; value: string };

type Section = {
  pillar: Pillar;
  pillarLabel: string;
  title: string;
  standfirst: string;
  body: ReadonlyArray<string>;
  facts: ReadonlyArray<Fact>;
  closer?: string;
  link?: { label: string; href: string };
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

const SECTIONS: ReadonlyArray<Section> = [
  {
    pillar: "Think",
    pillarLabel: "Think",
    title: "Academic excellence",
    standfirst: "A question comes before the answer.",
    body: [
      "We follow the CBSE curriculum, affiliation number 831719, from the early years through to the board grades. We teach it by asking children what they notice before telling them what to know.",
      "Fifteen children to a teacher, so nobody drifts through a lesson unnoticed. Languages, science, mathematics and social science taught by teachers who know those subjects, and arts and sport taught by specialists rather than whoever is free that period.",
      "Four times a year you get a written account of your child — what they are doing well, what they find hard, and what we are doing about it. It comes as a holistic progress card, not a rank.",
      "Children who want to go further can take Olympiads in five subjects. For children with special needs there is a special educator and regular remedial support — extra time and a different way in, not a label.",
    ],
    facts: [
      { label: "Board", value: "CBSE" },
      { label: "Class ratio", value: "15:1" },
      { label: "Reports", value: "Twice a term" },
      { label: "Parent meetings", value: "Every quarter" },
      { label: "Extra help", value: "Special educator and remedial classes" },
      { label: "Library", value: "Once a week" },
    ],
    image: imgAcademics,
    imageAlt: "Children working through a problem together in a Wellsprings classroom",
  },
  {
    pillar: "Build",
    pillarLabel: "Build",
    title: "Learning by making",
    standfirst: "Some things cannot be learned sitting down.",
    body: [
      "There is a STEAM lab where children design, build, test and rebuild. Four science laboratories where experiments are run rather than read about. A maker space with real tools and real materials.",
      "From Grade 6, children take vocational skill classes — growing food without soil, carpentry, wiring something that switches on, auditing the school’s own water use. Most of the marks come from the work itself, not from a written test.",
    ],
    facts: [
      { label: "Science labs", value: "Four" },
      { label: "STEAM lab", value: "Yes" },
      { label: "Maker space", value: "Real tools" },
      { label: "Vocational work", value: "From Grade 6" },
    ],
    closer:
      "Not everything comes out of a textbook. Some of what children build works, some of it falls apart, and the second kind usually teaches more.",
    link: { label: "See Beyond Books", href: "/life" },
    image: imgBeyond,
    imageAlt: "A Wellsprings child building at the maker table",
  },
  {
    pillar: "Build",
    pillarLabel: "Build",
    title: "Beyond the classroom",
    standfirst: "In the timetable, not after it.",
    body: [
      "Sport runs five periods a week in the early grades and four from Grade 3. Ten coached games — basketball, football, cricket, swimming, skating, taekwondo, gymnastics, chess, yoga and athletics.",
      "The arts get the same seriousness. Art and craft, singing, keyboard, guitar and drums, dance and theatre, all with specialist teachers. Public speaking puts children in front of an audience often enough that it stops being frightening.",
      "Clubs are chosen by the children. Field visits run through the year, and each year group spends a night on campus — independence, teamwork outside regular hours, and a memory that stays.",
    ],
    facts: [
      { label: "Sports coached", value: "Ten" },
      { label: "Arts", value: "Art, music, dance, drama" },
      { label: "Speaking", value: "In front of an audience" },
      { label: "Clubs", value: "Chosen by the children" },
      { label: "Field trips", value: "Through the year" },
      { label: "Stayovers", value: "One a year" },
    ],
    link: { label: "See Beyond Books", href: "/life" },
    image: imgEnvironments,
    imageAlt: "Children at a Wellsprings activity session on the grounds",
  },
  {
    pillar: "Belong",
    pillarLabel: "Belong",
    title: "Emotional wellbeing",
    standfirst: "A child settles before they learn.",
    body: [
      "A child who is anxious does not learn much. A child who dreads Monday does not do their best work on Tuesday.",
      "Every child has a mentor through the year — someone whose job is to know how your child is, not only what they scored. And a class teacher close enough to notice when something has changed.",
      "There is also a behaviour counsellor on campus, a trained psychologist who works with children on the things that are harder to name. Exam nerves. A friendship that has gone wrong. Anger that arrives faster than a child can manage it. She also runs group sessions on resilience and coping, and meets parents who want to talk something through.",
      "Much of the work is early. Spotting a change in a child before it becomes a problem is easier than fixing it afterwards.",
      "In the early years, no child is made to walk into class on the first mornings. There is a quiet room with soft music, toys to sit with, and a teacher who stays. They go in when they are ready — some in ten minutes, some after a fortnight.",
    ],
    facts: [
      { label: "Mentor", value: "One, all year" },
      { label: "Behaviour counsellor", value: "A trained psychologist" },
      { label: "First days", value: "The Settlers Room" },
      { label: "Class teacher", value: "Knows your child" },
    ],
    closer: "Your child should want to come back tomorrow. That is the test we hold ourselves to.",
    image: imgWellbeing,
    imageAlt: "Children sitting together at the end of a school day",
  },
  {
    pillar: "Belong",
    pillarLabel: "Belong",
    title: "Values-led education",
    standfirst: "The things a report card cannot measure.",
    body: [
      "An education that does not teach a child how to treat people has only done half the job.",
      "Kindness · Respect · Empathy · Helpfulness · Compassion.",
      "Noticing when someone is left out. Telling the truth when it costs something. Being patient with someone slower than you. Not only towards family and friends, but towards people a child will never be graded on being kind to.",
    ],
    facts: [
      { label: "Where it shows", value: "Mixed lunch tables, older children helping younger ones" },
      { label: "How we mark it", value: "We do not. We watch for it." },
      { label: "What we look for", value: "A child who helps without being asked" },
    ],
    closer:
      "A child who understands their own feelings and respects other people’s carries that for life, well beyond any exam.",
    image: imgValues,
    imageAlt: "A Wellsprings teacher listening to a child during morning circle",
  },
  {
    pillar: "Think",
    pillarLabel: "The campus",
    title: "Where all of it happens",
    standfirst: "Ten acres, and space to be a child.",
    body: [
      "Classrooms, four science laboratories, a STEAM lab, a maker space and a library every class visits weekly. A swimming pool, playing fields and courts.",
      "Every bus carries a driver and a uniformed attendant, with GPS on every route and evacuation drills twice a year. Entry to the campus is controlled, with CCTV throughout and staff checked before they meet a child. Breakfast, a mid-morning break and lunch are cooked here. There is a four-bed infirmary with a qualified nurse.",
    ],
    facts: [
      { label: "Campus", value: "10 acres" },
      { label: "Buses", value: "GPS, attendant on board" },
      { label: "Entry", value: "Controlled, CCTV" },
      { label: "Cafeteria", value: "On campus" },
      { label: "Infirmary", value: "4 beds, nurse" },
      { label: "Pool", value: "On campus" },
    ],
    closer:
      "And one app carries the school day to you — lessons, homework, attendance, reports, fees and notices, updating as the day goes.",
    link: { label: "See the campus", href: "/life" },
    image: imgCampus,
    imagePosition: "50% 20%",
    imageAlt: "The Wellsprings campus on a school morning",
  },
];

function FactGrid({ facts, color }: { facts: ReadonlyArray<Fact>; color: string }) {
  return (
    <dl className="mt-8 grid grid-cols-2 gap-px border border-[var(--grey-200)] bg-[var(--grey-200)] sm:grid-cols-3">
      {facts.map((f) => (
        <div key={f.label} className="bg-white px-4 py-4">
          <dt
            className="font-mono text-[10px] uppercase tracking-[0.18em]"
            style={{ color }}
          >
            {f.label}
          </dt>
          <dd className="mt-1.5 text-[15px] leading-[1.35] text-[var(--ws-ink)]">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function WhyWellspringsPage() {
  return (
    <div
      className="bg-[var(--ws-paper)]"
      style={{ ["--page-accent" as string]: "var(--coral-600)" } as CSSProperties}
    >
      <PageHero
        eyebrow="Think · Build · Belong"
        pillar="Think"
        title={
          <>
            Why
            <br />
            <span className="text-[var(--coral-600)]">Wellsprings</span>.
          </>
        }
        intro={
          <p>
            Choosing a school takes time. Your child is taught as a whole person here — mind, body
            and heart. These are the things we work on through the year, and the things you can
            look for when you come and see us.
          </p>
        }
        image={heroImage}
        imageAlt="A Wellsprings child reading during a morning class"
        imageCaption="Reading block, late morning."
      />

      <SectionShell eyebrow="What we work on" title="Six sections, three dimensions.">
        <div className="flex flex-col">
          {SECTIONS.map((s, i) => {
            const flip = i % 2 === 1;
            const color = PILLAR_COLOR[s.pillar];
            return (
              <article
                key={s.title}
                className="grid w-full items-start gap-8 border-t border-[var(--grey-200)] py-12 first:border-t-0 first:pt-0 md:grid-cols-2 md:gap-14 md:py-16"
              >
                <div className={flip ? "md:order-2" : ""}>
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)]">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      className="h-full w-full object-cover"
                      style={s.imagePosition ? { objectPosition: s.imagePosition } : undefined}
                      loading="lazy"
                    />
                  </div>
                  <FactGrid facts={s.facts} color={color} />
                </div>

                <div className={flip ? "md:order-1" : ""}>
                  <SectionEyebrow pillar={s.pillar}>{s.pillarLabel}</SectionEyebrow>
                  <h3 className="mt-4 text-3xl leading-[1.1] md:text-5xl">{s.title}</h3>
                  <p className="mt-4 font-serif text-xl leading-[1.4] text-[var(--ws-ink)] md:text-2xl">
                    {s.standfirst}
                  </p>
                  <div className="mt-5 space-y-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
                    {s.body.map((p) => (
                      <p key={p.slice(0, 28)}>{p}</p>
                    ))}
                  </div>
                  {s.closer && (
                    <p
                      className="mt-6 border-l-2 pl-4 text-[16px] leading-[1.7] text-[var(--ws-ink)]"
                      style={{ borderColor: color }}
                    >
                      {s.closer}
                    </p>
                  )}
                  {s.link && (
                    <a
                      href={s.link.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                      style={{ color }}
                    >
                      {s.link.label}
                      <ArrowUpRight size={16} strokeWidth={1.8} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </SectionShell>

      <VisitUs />

      <MoreToExplore
        cards={[
          {
            title: "The people behind the school",
            body:
              "Our vision and mission, and the leadership team who set the tone of the school every day.",
            href: "/about",
            label: "About Wellsprings",
            image: imgAbout,
            imageAlt: "The Wellsprings school building on a working morning",
          },
          {
            title: "What your child learns",
            body:
              "From pre-primary to secondary, how the CBSE curriculum is taught here, year by year.",
            href: "/curriculum",
            label: "See the curriculum",
            image: imgCurriculum,
            imageAlt: "Children at work in a Wellsprings classroom",
          },
          {
            title: "A day at school",
            body:
              "Clubs, sport, music, houses and the ordinary rhythm of a school day at Wellsprings.",
            href: "/life",
            label: "Life at Wellsprings",
            image: imgLife,
            imageAlt: "Children playing on the Wellsprings grounds",
          },
          {
            title: "Joining Wellsprings",
            body:
              "How admissions work, what we need from you, and how to book a visit to the campus.",
            href: "/admissions",
            label: "Admissions",
            image: imgAdmissions,
            imageAlt: "A parent and child at the Wellsprings admissions desk",
          },
        ]}
      />
    </div>
  );
}
