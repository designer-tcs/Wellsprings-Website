import { Fragment, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Baby,
  Bus,
  Compass,
  Dumbbell,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Landmark,
  Palette,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { PageHero, SectionShell, SectionEyebrow } from "@/components/page/Primitives";
import heroImage from "@/assets/photos/about-01-hero.webp";
import principalPhoto from "@/assets/principal.jpg";
import founderPhoto from "@/assets/founder-prasada-reddy.webp";
import akhileshPhoto from "@/assets/leadership-akhilesh.jpg";
import dineshPhoto from "@/assets/leadership-dinesh.jpg";
import cbseLogo from "@/assets/cbse-logo.png";
import { VisitUs } from "@/components/page/VisitUs";
import { MoreToExplore } from "@/components/page/MoreToExplore";
import xAbout1 from "@/assets/photos/why-01-hero.webp";
import xCurr from "@/assets/photos/curr-01-hero.webp";
import xLife from "@/assets/photos/life-01-hero.webp";
import xAdm from "@/assets/photos/adm-01-hero.webp";
import xAboutP from "@/assets/photos/about-01-hero.webp";
import xBlog from "@/assets/photos/blog-01-hero.webp";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Our people, leadership and vision | Wellsprings Academy" },
      {
        name: "description",
        content:
          "The people behind Wellsprings — our founder, directors and principal — along with our vision, mission and CBSE affiliation.",
      },
      { property: "og:title", content: "About Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "Meet the people who lead Wellsprings, and read the vision, mission and affiliation behind a young CBSE school near Sarjapura.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: AboutPage,
});

const AFFILIATION_FACTS = [
  { label: "Board", value: "CBSE" },
  { label: "Affiliation no.", value: "831719" },
  { label: "Founded", value: "2023" },
  { label: "Campus", value: "10 acres" },
] as const;

const AWARDS = [
  {
    body: "The Times Group",
    title: "Times Education Excellence Award 2023",
  },
  {
    body: "ENews Network",
    title: "India's Top Dynamic Schools 2023",
  },
] as const;

const DIRECTORS = [
  {
    name: "Akhilesh Reddy",
    role: "Director",
    image: akhileshPhoto,
    paragraphs: [
      "Meaningful education begins with the understanding that learning is neither linear nor uniform. At Wellsprings, we design the academic experience around this reality, allowing different abilities, aptitudes, and ways of thinking to emerge and develop.",
      "Assessment, therefore, is not treated as a final verdict. It is an ongoing source of insight — helping educators identify progress, recognise gaps, and determine how learning should move forward. Classroom participation, independent thought, application, consistency, and academic performance collectively present a more accurate picture of a student’s development.",
      "Examinations remain important, but they serve a larger educational purpose. They help us understand what has been mastered and where further guidance is required. Our aim is to ensure that every student receives the intellectual challenge and considered support necessary to progress meaningfully.",
    ],
    quote:
      "What children remember most about school is not only what they learned, but whether they felt seen, valued, and confident enough to discover who they could become.",
  },
  {
    name: "Dinesh Reddy",
    role: "Director",
    image: dineshPhoto,

    paragraphs: [
      "A child’s readiness to learn begins long before a lesson does. It begins with trust — the assurance that questions will be welcomed, mistakes will be treated as part of discovery, and every attempt will be met with patience. At Wellsprings, we cultivate this trust deliberately. It informs how we listen, respond, and engage with children, creating an environment where they can participate freely and learn without inhibition.",
      "The same openness defines our relationship with parents. We believe communication should be timely, candid, and constructive. When a child needs greater support, families hear from us early — not merely with an observation, but with clarity about how we intend to help. Parents should always understand where their child stands and know that the school is working alongside them.",
    ],
    quote:
      "A child learns with confidence when mistakes are met with patience and progress is supported by an honest partnership between school and home.",
  },
] as const;


function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

function Portrait({
  name,
  role,
  size = "lg",
  image,
  priority = false,
}: {
  name: string;
  role: string;
  size?: "lg" | "sm";
  image?: string;
  priority?: boolean;
}) {
  if (image) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-[var(--grey-100)] ${
          size === "lg" ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={image}
          alt={`${name}, ${role} at Wellsprings Academy`}
          className="h-full w-full object-cover object-top"
          loading={priority ? "eager" : "lazy"}
          // eslint-disable-next-line react/no-unknown-property
          fetchPriority={priority ? "high" : undefined}
        />
      </div>
    );
  }
  return (
    <div
      className={`relative w-full overflow-hidden bg-[var(--grey-100)] ${
        size === "lg" ? "aspect-[4/5]" : "aspect-[4/3]"
      }`}
      style={{
        backgroundImage: "linear-gradient(135deg, var(--grey-200), var(--grey-100))",
      }}
    >
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex flex-col items-center gap-3">
          <span
            className={`grid place-items-center rounded-full bg-white font-serif text-[var(--ws-ink)] shadow-[0_10px_24px_-12px_rgba(15,23,42,0.4)] ${
              size === "lg" ? "h-20 w-20 text-2xl" : "h-14 w-14 text-lg"
            }`}
          >
            {initials(name)}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--grey-700)]">
            {role} · photograph coming soon
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * PeopleCircleIllustration — the school drawn as the people around one child:
 * teachers, support staff and leadership, each with their own icon, orbiting
 * slowly around a child at the centre.
 */
const PEOPLE_RING: {
  icon: LucideIcon;
  label: string;
  group: "Teachers" | "Support staff" | "Leadership";
  color: string;
}[] = [
  { icon: GraduationCap, label: "Class teachers", group: "Teachers", color: "var(--coral-600)" },
  { icon: FlaskConical, label: "Lab & subject faculty", group: "Teachers", color: "var(--coral-600)" },
  { icon: Palette, label: "Art & music", group: "Teachers", color: "var(--coral-600)" },
  { icon: Dumbbell, label: "Sports coaches", group: "Teachers", color: "var(--coral-600)" },
  { icon: UtensilsCrossed, label: "Kitchen team", group: "Support staff", color: "var(--sun-700)" },
  { icon: Bus, label: "Transport team", group: "Support staff", color: "var(--sun-700)" },
  { icon: HeartPulse, label: "Nurse & counsellor", group: "Support staff", color: "var(--sun-700)" },
  { icon: Compass, label: "Principal", group: "Leadership", color: "var(--sage-700)" },
  { icon: Landmark, label: "Management", group: "Leadership", color: "var(--sage-700)" },
];

function PeopleCircleIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div className="relative aspect-square w-full">
        {/* dotted orbits */}
        <div className="absolute inset-[4%] rounded-full border border-dashed border-[var(--grey-300,#d6dae0)]" />
        <div className="absolute inset-[26%] rounded-full border border-dashed border-[var(--grey-300,#d6dae0)]" />

        {/* the child at the centre */}
        <div className="absolute left-1/2 top-1/2 grid h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--ws-ink)] bg-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.5)]">
          <Baby size={30} strokeWidth={1.4} className="text-[var(--ws-ink)]" />
        </div>
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full border border-[var(--sage-700)] opacity-30"
        />

        {/* the people, orbiting slowly */}
        <div className="absolute inset-0 animate-[spin_90s_linear_infinite] motion-reduce:animate-none">
          {PEOPLE_RING.map(({ icon: Icon, label, color }, i) => {
            const angle = (i / PEOPLE_RING.length) * 2 * Math.PI - Math.PI / 2;
            const r = 42; // % of half-size
            const left = 50 + r * Math.cos(angle);
            const top = 50 + r * Math.sin(angle);
            return (
              <div
                key={label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <div
                  className="grid h-14 w-14 place-items-center rounded-full border bg-white shadow-[0_12px_28px_-18px_rgba(15,23,42,0.55)] animate-[spin_90s_linear_infinite_reverse] motion-reduce:animate-none"
                  style={{ borderColor: color, animationDelay: `${i * -0.4}s` }}
                  title={label}
                >
                  <Icon size={22} strokeWidth={1.5} style={{ color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
        {(["Teachers", "Support staff", "Leadership"] as const).map((g) => {
          const color =
            g === "Teachers"
              ? "var(--coral-600)"
              : g === "Support staff"
                ? "var(--sun-700)"
                : "var(--sage-700)";
          return (
            <span key={g} className="flex items-center gap-2">
              <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: color }} />
              {g}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--sage-700)" } as CSSProperties}>
      <PageHero
        eyebrow="About Wellsprings"
        pillar="Belong"
        title={
          <>
            Shaped by people who{" "}
            <span className="text-[var(--sage-700)]">care deeply</span>
            <br />
            <span className="text-[var(--sage-700)]">about a child&apos;s growth</span>.
          </>
        }
        intro={
          <p>
            At Wellsprings, one shared belief unites our visionaries, teachers, and support staff: a school must do more than prepare a child for an exam. This belief shapes our culture, our learning spaces, and every child’s experience, every single day.
          </p>
        }
        image={heroImage}
        imageAlt="A Wellsprings teacher in conversation with a student"
        imageCaption="A teacher who knows your child."
      />


      {/* Vision & Mission */}
      <SectionShell eyebrow="What we stand for" title="Vision and mission.">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col border border-[var(--grey-200)] bg-white p-8">
            <SectionEyebrow pillar="Think">Vision</SectionEyebrow>
            <h3 className="mt-3 font-serif text-3xl leading-[1.15] md:text-4xl">
              Raising citizens of the world.
            </h3>
            <p className="mt-5 text-[15px] leading-[1.75] text-[var(--grey-800)]">
              To develop confident, compassionate and capable individuals with strong character, a global perspective and a lifelong passion for learning, empowering them to lead with purpose and make a positive impact in an ever-evolving world.
            </p>
          </article>
          <article className="flex flex-col border border-[var(--grey-200)] bg-white p-8">
            <SectionEyebrow pillar="Belong">Mission</SectionEyebrow>
            <h3 className="mt-3 font-serif text-3xl leading-[1.15] md:text-4xl">
              Teaching that shapes the whole child.
            </h3>
            <p className="mt-5 text-[15px] leading-[1.75] text-[var(--grey-800)]">
              To provide a nurturing, inclusive environment where every child discovers their potential, builds strong values and character, and learns to think critically, creatively and confidently. To foster curiosity, collaboration, compassion and continuous learning, equipping students with the knowledge, skills and global perspective to act responsibly, embrace challenges and contribute meaningfully to society.
            </p>

          </article>
        </div>
      </SectionShell>

      {/* Accreditation */}
      <SectionShell background="grey" eyebrow="Accreditation" title="Affiliated to CBSE.">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="mx-auto w-full max-w-[280px] shrink-0 overflow-hidden border border-[var(--grey-200)] bg-white p-6 sm:max-w-[320px] lg:mx-0">
            <img
              src={cbseLogo}
              alt="Central Board of Secondary Education (CBSE) emblem"
              className="mx-auto h-auto w-full max-h-[220px] object-contain"
              width={320}
              height={240}
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[17px] leading-[1.75] text-[var(--grey-800)]">
              Wellsprings Academy is affiliated to the Central Board of Secondary Education,
              affiliation number 831719.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-[var(--grey-800)]">
              The Board sets standards for curriculum, teaching, examinations and safety, and our affiliation means we comply with them. Additionally, it means that your child&apos;s certification is recognised across India and abroad. We teach the CBSE framework — from the early years to the Board grades.
            </p>
          </div>
        </div>

        <dl className="mt-10 grid gap-px border border-[var(--grey-200)] bg-[var(--grey-200)] sm:grid-cols-2 lg:grid-cols-4">
          {AFFILIATION_FACTS.map((f) => (
            <div key={f.label} className="bg-white px-6 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
                {f.label}
              </dt>
              <dd className="mt-1.5 font-serif text-2xl leading-[1.15] text-[var(--ws-ink)]">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </SectionShell>

      {/* Recognition */}
      <SectionShell eyebrow="Recognition" title="Recognition.">
        <p className="max-w-[72ch] text-[17px] leading-[1.75] text-[var(--grey-800)]">
          Wellsprings has been recognised by India&rsquo;s Top Dynamic Schools and the Times
          Educational Excellence awards.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {AWARDS.map((a) => (
            <article
              key={a.title}
              className="flex items-start gap-4 border border-[var(--grey-200)] bg-white p-7"
            >
              <span
                aria-hidden
                className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-[var(--sage-100)]"
              >
                <Award size={18} strokeWidth={1.6} className="text-[var(--sage-700)]" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
                  {a.body}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-[1.2]">{a.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* Our People */}
      <SectionShell background="grey" eyebrow="Our people" title="The people behind the school.">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div className="max-w-[62ch]">
            <p className="text-[17px] leading-[1.75] text-[var(--grey-800)]">
              A school is only as good as the people who show up for it each morning: our teachers, our support staff, and the people who lead them.
            </p>
            <p className="mt-5 text-[17px] leading-[1.75] text-[var(--grey-800)]">
              We choose teachers who know their subject well and teach it with kindness. A child who is corrected gently tries again, instead of giving up.
            </p>
            <p className="mt-5 text-[17px] leading-[1.75] text-[var(--grey-800)]">
              Everyone at Wellsprings shares the same belief: education can change a life, and through it, change the world for the better. Our children remind us of this every day, and that is what keeps us going.
            </p>
          </div>
          <PeopleCircleIllustration />
        </div>
      </SectionShell>


      {/* Leadership — founder */}
      <SectionShell
        background="grey"
        eyebrow="Leadership"
        title="From our founder."
        intro={
          <p>
            At Wellsprings, the child is the centre of the institution’s vision. Every choice, every space, and every step forward reflects an unwavering commitment to their growth and well-being.
          </p>
        }

      >
        <article className="grid gap-8 border border-[var(--grey-200)] bg-white md:grid-cols-[0.75fr_1.25fr]">
          <Portrait name="N H R Prasada Reddy" role="Founder" image={founderPhoto} priority />
          <div className="flex flex-col justify-center p-8 pr-20 md:py-10 md:pr-10">
            <SectionEyebrow>Founder &amp; Chairman</SectionEyebrow>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl">N H R Prasada Reddy</h3>
            <p className="mt-5 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              &ldquo;Wellsprings was founded on the belief that education should nurture every aspect of a child’s development. Knowledge, character and confidence form the foundation of this purpose, strengthened by the trust families place in us when they choose our school.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              As Founder, I regard that trust as a deeply personal responsibility. Parents entrust us with years that shape how their children think, relate to others and see themselves. Every decision we make must honour that responsibility and remain faithful to the values on which Wellsprings was built.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              I have witnessed how education can widen a child’s horizons. A teacher who recognises potential, an opportunity to discover an unfamiliar strength, or encouragement at the right moment can change what a young person believes is possible. These experiences are central to the school we are building.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              We want every child to leave Wellsprings intellectually capable, emotionally grounded and guided by integrity. We hope they carry the confidence to make independent choices, the resilience to face challenges and the consideration to understand perspectives beyond their own.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              To every family that has entrusted us with their child’s education, thank you. Your continued trust calls us to listen closely, act thoughtfully and uphold the standards of care and education your children deserve.&rdquo;
            </p>
          </div>
        </article>
      </SectionShell>

      {/* Founder quote */}
      <SectionShell background="ink">
        <blockquote className="mx-auto max-w-[62ch] text-center">
          <p className="font-serif text-3xl leading-[1.25] md:text-5xl">
            &ldquo;Lessons fade with time, but the feeling of being loved, safe, and happy at
            school stays with a child forever.&rdquo;
          </p>
          <footer className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--slate-200)]">
              N H R Prasada Reddy
            </p>
            <p className="mt-2 text-sm text-[var(--slate-200)]">
              Founder &amp; Chairman, Wellsprings Academy
            </p>
          </footer>
        </blockquote>
      </SectionShell>

      {/* Directors */}
      <SectionShell background="grey" title="The Directors.">
        <div className="grid gap-6">
          {DIRECTORS.map((d) => (
            <Fragment key={d.name}>
              <article className="grid gap-8 border border-[var(--grey-200)] bg-white md:grid-cols-[0.75fr_1.25fr]">
                <Portrait name={d.name} role={d.role} image={d.image} />
                <div className="flex flex-col justify-center p-8 md:py-10 md:pr-10">
                  <SectionEyebrow>{d.role}</SectionEyebrow>
                  <h3 className="mt-3 font-serif text-3xl md:text-4xl">{d.name}</h3>
                  {d.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 24)}
                      className="mt-4 text-[15px] leading-[1.75] text-[var(--grey-800)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
              {"quote" in d && d.quote ? (
                <blockquote className="border border-[var(--grey-200)] bg-[var(--ws-ink)] px-8 py-12 text-center text-white md:px-14 md:py-16">
                  <p className="mx-auto max-w-[62ch] font-serif text-2xl leading-[1.35] md:text-4xl">
                    &ldquo;{d.quote}&rdquo;
                  </p>
                  <footer className="mt-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--slate-200)]">
                      {d.name}
                    </p>
                    <p className="mt-2 text-sm text-[var(--slate-200)]">
                      {d.role}, Wellsprings Academy
                    </p>
                  </footer>
                </blockquote>
              ) : null}
            </Fragment>
          ))}
        </div>
      </SectionShell>

      {/* Principal */}
      <SectionShell
        eyebrow="From the principal's desk"
        title="Meet our school principal."
        intro={
          <p>
            Good classrooms alone don&apos;t make a school. Someone also has to set the tone for how people treat each other, how mistakes are handled, and what the place feels like on any given day.
          </p>
        }
      >
        <article className="grid gap-8 border border-[var(--grey-200)] bg-white md:grid-cols-[0.75fr_1.25fr]">
          <Portrait name="Sree Vidya" role="Principal" image={principalPhoto} />
          <div className="flex flex-col justify-center p-8 md:py-10 md:pr-10">
            <SectionEyebrow>Principal</SectionEyebrow>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl">Sree Vidya</h3>
            <p className="mt-5 text-[16px] leading-[1.75] text-[var(--grey-800)]">Dear Parents,</p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              Welcome to Wellsprings Academy — a place we like to think of not just as a school,
              but as a second home for every child who walks through our doors.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              If you ask me what matters most to me as an educator, my answer will always be the
              same: I want our children to be happy. Not happy in spite of school, but happy
              because of it. A child who feels safe, valued, and excited to walk into their
              classroom each morning is a child who is truly ready to learn. That belief is the
              foundation on which everything else at Wellsprings is built.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              So, what does that look like in practice?
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              It means we have moved away from learning that is only about marks, memorisation, and
              matching a textbook. Instead, we follow a competency-based approach — one where we
              ask not &ldquo;did the child memorise this?&rdquo; but &ldquo;can the child
              understand it, use it, and build on it?&rdquo; Our children learn concepts by doing
              them: through activity-based learning that turns classrooms into spaces of
              exploration — building models, running experiments, working in teams, asking
              questions, and sometimes even getting things wonderfully wrong before getting them
              right. We believe that is how real understanding — and real confidence — is built.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              It also means we care just as much about how our children feel as we do about how
              much they know. At Wellsprings, a child&rsquo;s heart is nurtured with the same care
              as their mind. We actively nurture empathy, self-awareness, patience, and kindness
              alongside academic skills, because we know that the world does not just need bright
              minds — it needs good, grounded human beings. A child who understands their own
              emotions and respects those of others carries that gift for life, well beyond any
              exam.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              As Principal, it is one of the greatest joys of my life to walk through our corridors
              and see children laughing, curious, and unafraid to be themselves. That, to me, is
              what a school should feel like.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--grey-800)]">
              I invite you to visit us, meet our teachers, and see this philosophy come alive in
              our classrooms. Whether you are a parent considering Wellsprings for your child, or
              simply someone curious about what we stand for — I hope you will feel, even from
              these words, the warmth that our school is built on.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--grey-700)]">
              With warm regards · Sree Vidya · Principal, Wellsprings Academy
            </p>
          </div>
        </article>
      </SectionShell>

      {/* Principal quote */}
      <SectionShell background="ink">
        <blockquote className="mx-auto max-w-[62ch] text-center">
          <p className="font-serif text-3xl leading-[1.25] md:text-5xl">
            &ldquo;We don&rsquo;t just teach children; we create experiences that inspire them to Explore, Discover, and Learn for life.&rdquo;
          </p>
          <footer className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--slate-200)]">
              Sree Vidya
            </p>
            <p className="mt-2 text-sm text-[var(--slate-200)]">
              Principal, Wellsprings Academy
            </p>
          </footer>
        </blockquote>
      </SectionShell>

      <VisitUs />

      <MoreToExplore
        cards={[
          {
            title: "Why Wellsprings",
            body:
              "The seven things we work on through the year, and what you can look for when you visit.",
            href: "/why-wellsprings",
            label: "What we focus on",
            image: xAbout1,
            imageAlt: "A Wellsprings child reading in a morning class",
          },
          {
            title: "What your child learns",
            body:
              "From pre-primary to secondary, how the CBSE curriculum is taught here, year by year.",
            href: "/curriculum",
            label: "See the curriculum",
            image: xCurr,
            imageAlt: "Children at work in a Wellsprings classroom",
          },
          {
            title: "A day at school",
            body:
              "Clubs, sport, music, houses and the ordinary rhythm of a school day at Wellsprings.",
            href: "/life",
            label: "Life at Wellsprings",
            image: xLife,
            imageAlt: "Children playing on the Wellsprings grounds",
          },
          {
            title: "Joining Wellsprings",
            body:
              "How admissions work, what we need from you, and how to book a visit to the campus.",
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
