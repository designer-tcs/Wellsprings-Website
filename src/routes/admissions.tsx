import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, MessagesSquare, Footprints, FileSignature, UserCheck, CheckCircle2, Phone } from "lucide-react";
import {
  PageHero,
  MottoStrip,
  SectionShell,
  SectionEyebrow,
} from "@/components/page/Primitives";
import { EnquiryForm } from "@/components/page/EnquiryForm";
import heroImage from "@/assets/photos/adm-01-hero.webp";


export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026–27 — Wellsprings Academy, a CBSE school near Sarjapura" },
      {
        name: "description",
        content:
          "Choosing a school is one of the most important decisions you'll make. Visit Wellsprings, sit inside a real classroom, and see how your child would Think, Build, and Belong.",
      },
      { property: "og:title", content: "Admissions — Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "Visit our campus on the Sarjapura – Chikka Thirupathi road and meet the teachers who would know your child by name.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: AdmissionsPage,
});

const STEPS = [
  {
    Icon: CalendarCheck,
    n: "01",
    title: "Book a campus visit",
    body:
      "Speak to our admissions counsellor, ask for the available slots, and book a time that works for you.",
  },
  {
    Icon: MessagesSquare,
    n: "02",
    title: "Meet the counsellor",
    body:
      "Arrive at the campus and sit down with the counsellor to discuss your child, the grade, and what the school offers.",
  },
  {
    Icon: Footprints,
    n: "03",
    title: "Campus tour",
    body:
      "Walk the campus — classrooms, labs, library, sports and dining areas.",
  },
  {
    Icon: UserCheck,
    n: "04",
    title: "Interaction with the Principal",
    body: "You and your child meet the Principal.",
  },
  {
    Icon: FileSignature,
    n: "05",
    title: "Fill the application",
    body: "Complete the application form and submit the required documents.",
  },
  {
    Icon: CheckCircle2,
    n: "06",
    title: "Confirm admission",
    body:
      "Complete the admission formalities and the fee process. Your child has a place.",
  },
] as const;


const ASKED = [
  {
    q: "How many children are in a class?",
    a: "It varies by stage. Foundation Stage (Nursery, K1 and K2) is 12:1, Grades 1 and 2 are 15:1, and Preparatory, Middle and Secondary (Grades 3–10) maintain a 15:1 ratio, with three sections per grade.",
  },
  {
    q: "What are the school hours?",
    a: "The day runs 8:00 AM to 3:00 PM. Nursery to Grade 5 attend Monday to Friday; Grades 6 to 8 attend Monday to Friday plus two Saturdays a month. Children having breakfast at school arrive by 8:00 AM; those eating at home report by 8:25 AM. The office is open 8:15 AM to 4:30 PM.",
  },
  {
    q: "Which board do you follow, and up to which grade?",
    a: "CBSE, affiliation number 831719, from Nursery through Grade 9.",
  },
  {
    q: "Is transport available?",
    a: "Yes. Every bus has a driver and a lady attendant in uniform with ID badges, CCTV cameras, GPS tracking on all buses, and evacuation drills twice a year. Routes and pick-up times are confirmed by the Transport-in-charge.",
  },
  {
    q: "Are meals provided?",
    a: "Yes. The cafeteria serves breakfast (8:00–8:25 AM), a mid-morning refreshment (10:00–10:15 AM), and lunch (12:55–1:30 PM). We provide a balanced, nutritious diet approved by a dietitian, with dietary restrictions and allergies recorded at the beginning of the academic year.",
  },
  {
    q: "How does the school take care of my child if they are unwell?",
    a: "The school has a four-bed infirmary for students who feel unwell. Parents are informed promptly, and any medication is given only with their consent.",
  },
  {
    q: "How will I hear about my child?",
    a: "The MCB School ERP is the primary platform for attendance, homework, academic updates, report cards, events and other important school communication. Parents can also raise concerns through the portal, while Parent-Teacher Meetings and appointments with the Coordinator or Principal are available when needed.",
  },
  {
    q: "Do you take admissions mid-year?",
    a: "Yes, when a seat is available in the grade. We ask for the previous school's records and a transfer certificate, and the Principal meets the family before confirming.",
  },
  {
    q: "Who is allowed to pick up my child?",
    a: "One authorised person per family, carrying the pick-up ID card issued by the school. Any change must be sent by email at least a day in advance with the person's ID details. Early departure during school hours needs a gate pass approved by the Principal.",
  },
  {
    q: "Is there a uniform, and what attendance is expected?",
    a: "Full school uniform and ID card every day, with black school shoes and socks supplied by the school; Nursery, K1 and K2 carry a spare set. A minimum of 85% attendance across the working days of the year is required for promotion, and leave longer than two days needs the Principal's prior approval by email.",
  },
] as const;



function AdmissionsPage() {
  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--coral-600)" } as CSSProperties}>
      <PageHero
        eyebrow="Admissions 2026 – 27"
        pillar="Think"
        title={
          <>
            Come see Wellsprings
            <br />
            <span className="text-[var(--coral-600)]">for yourself</span>.
          </>
        }
        intro={
          <>
            <p>
              Choosing a school is an important decision. The best way to know if
              Wellsprings is right for your family is to walk through our gates,
              see the classrooms, and watch how our children think, build, and belong.
            </p>
            <p className="mt-4 text-[15px] text-[var(--grey-700)]">
              CBSE (No. 831719) · Mugalur, near Sarjapura · Nursery to Grade 9
            </p>
          </>
        }
        image={heroImage}
        imageAlt="A Wellsprings student reading by a sunlit classroom window"
        imageCaption="A real morning, mid-lesson."
        cta={{ label: "Schedule a campus visit", href: "#enquire" }}
        secondaryCta={{ label: "Talk to admissions", href: "tel:06366361707" }}
      />

      <MottoStrip tier={1} />

      {/* The six steps */}
      <SectionShell
        background="grey"
        eyebrow="How admission works"
        title="Six steps, in order."
        intro={
          <p>
            The visit is built so you see the campus, meet the people who would
            teach your child, and get clear answers before you decide.
          </p>
        }
      >
        <ol className="relative ml-3 border-l border-[var(--grey-300)] pl-8 md:ml-5 md:pl-12">
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className={`relative ${i === STEPS.length - 1 ? "" : "pb-9 md:pb-11"}`}
            >
              <span className="absolute -left-[calc(2rem+1px)] top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--grey-300)] bg-white md:-left-[calc(3rem+1px)] md:h-10 md:w-10">
                <step.Icon
                  size={16}
                  strokeWidth={1.6}
                  className="text-[var(--coral-600)] md:hidden"
                />
                <step.Icon
                  size={18}
                  strokeWidth={1.6}
                  className="hidden text-[var(--coral-600)] md:block"
                />
              </span>
              <div className="pt-1">
                <span className="font-mono text-xs tracking-wide text-[var(--coral-600)]">
                  {step.n}
                </span>
                <p className="mt-1 text-lg text-[var(--ws-ink)]">{step.title}</p>
                <p className="mt-1 max-w-2xl text-[15px] leading-[1.7] text-[var(--grey-800)]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </SectionShell>

      {/* What parents ask */}
      <SectionShell eyebrow="What parents ask" title="The questions we hear most.">
        <div className="grid gap-px bg-[var(--grey-200)] md:grid-cols-2">
          {ASKED.map((item, i) => (
            <div key={item.q} className="bg-[var(--ws-paper)] px-1 py-6 md:px-7">
              <span className="font-mono text-xs text-[var(--coral-600)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-lg text-[var(--ws-ink)]">{item.q}</p>
              <span className="mt-3 block h-px w-10 bg-[var(--coral-600)]" />
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--grey-800)]">{item.a}</p>
            </div>
          ))}
        </div>
      </SectionShell>



      <SectionShell background="grey" id="enquire" eyebrow="Enquire or visit" title="Tell us a little, and we'll plan it around your child.">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <EnquiryForm />
          <div className="border border-[var(--grey-200)] bg-white p-7">
            <SectionEyebrow>Prefer to call?</SectionEyebrow>
            <p className="mt-4 text-[15px] leading-[1.7] text-[var(--grey-800)]">
              Admissions is open Monday to Saturday, 8 am to 5 pm. We're happy to answer questions before you book.
            </p>
            <a href="tel:06366361707" aria-label="Call admissions at 063663 61707"
              className="mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--coral-600)] to-[var(--sun-700)] px-6 py-3 font-sans text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(15,23,42,0.55)] transition-all hover:shadow-lg hover:brightness-105 active:scale-[0.98]">
              <Phone size={18} strokeWidth={2} />
              <span>Call 063663 61707</span>
            </a>
            <a href="mailto:hello@wellspringsacademy.in"
              className="mt-3 block text-[15px] text-[var(--ws-ink)] hover:text-[var(--coral-600)]">
              hello@wellspringsacademy.in
            </a>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
