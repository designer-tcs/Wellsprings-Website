import {
  BookOpen,
  ClipboardList,
  Bell,
  CreditCard,
  CalendarCheck,
  FileBarChart,
  CalendarX,
  Images,
} from "lucide-react";
import { SectionShell } from "@/components/page/Primitives";

const FEED = [
  { icon: BookOpen, color: "var(--coral-600)", surface: "var(--coral-200)", label: "Lesson", title: "Mathematics", detail: "Introduction to fractions" },
  { icon: ClipboardList, color: "var(--sun-700)", surface: "var(--sun-200)", label: "Homework", title: "Worksheet 4", detail: "Due tomorrow" },
  { icon: Bell, color: "var(--sage-700)", surface: "var(--sage-200)", label: "Notice", title: "Annual Sports Day", detail: "Friday, 29 August" },
  { icon: CreditCard, color: "var(--slate-1000)", surface: "var(--grey-200)", label: "Fees", title: "Term 2 invoice", detail: "Now available" },
];

const FEATURES = [
  {
    icon: BookOpen,
    color: "var(--coral-600)",
    surface: "var(--coral-200)",
    title: "Lessons and homework",
    body: "What was taught today, and the worksheets that go with it.",
  },
  {
    icon: CalendarCheck,
    color: "var(--sage-700)",
    surface: "var(--sage-200)",
    title: "Daily attendance",
    body: "Marked in the morning and visible to you the same day, along with the term's record.",
  },
  {
    icon: FileBarChart,
    color: "var(--coral-600)",
    surface: "var(--coral-200)",
    title: "Assessment reports",
    body: "Unit tests, term assessments and the teacher's written remarks, term by term.",
  },
  {
    icon: Images,
    color: "var(--coral-600)",
    surface: "var(--coral-200)",
    title: "Photos, reports, and appreciation",
    body: "View event galleries, read event reports, and celebrate your child's achievements.",
  },
  {
    icon: CreditCard,
    color: "var(--sun-700)",
    surface: "var(--sun-200)",
    title: "Fees, paid online",
    body: "Term invoices, payment history and receipts — settled from the app.",
  },
  {
    icon: CalendarX,
    color: "var(--sun-700)",
    surface: "var(--sun-200)",
    title: "Leave requests",
    body: "Whether it's planned leave or a sudden sick day, one request and both the class teacher and office are notified.",
  },
  {
    icon: Bell,
    color: "var(--sage-700)",
    surface: "var(--sage-200)",
    title: "Circulars and events",
    body: "Holiday lists, PTM slots, event notices and last-minute changes.",
  },
  {
    icon: ClipboardList,
    color: "var(--slate-1000)",
    surface: "var(--grey-200)",
    title: "One thread with school",
    body: "Message the class teacher, book a meeting, and access the whole conversation on a single dashboard.",
  },
];

export function ErpSection() {
  return (
    <SectionShell
      background="grey"
      eyebrow="Parent communication"
      pillar="Think"
      title="Get instant access to your child's school day, as it unfolds."
      intro={
        <p>
          Follow your child’s school journey through one unified dashboard. Access daily updates, upcoming events, and academic progress, while staying informed and involved at every step.
        </p>
      }
    >
      <div className="grid gap-12 md:grid-cols-[1fr_0.7fr] md:items-start">
        <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li key={f.title} className="flex items-start gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ background: f.surface }}
              >
                <f.icon size={18} strokeWidth={1.6} style={{ color: f.color }} />
              </span>
              <div>
                <p className="text-[15px] font-medium text-[var(--ws-ink)]">{f.title}</p>
                <p className="mt-1 text-[14px] leading-[1.6] text-[var(--grey-800)]">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mx-auto w-full max-w-[280px]">
          <div className="overflow-hidden rounded-[2.2rem] border-[10px] border-[var(--slate-1000)] bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)]">
            <div className="bg-[var(--slate-1000)] px-5 pb-4 pt-3 text-white">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">Wellsprings · Parent App</p>
              <p className="mt-2 font-serif text-lg leading-none">Today</p>
              <p className="mt-1 text-[12px] text-white/70">Your child · Grade 3</p>
            </div>
            <div className="space-y-2.5 bg-[var(--grey-100)] p-4">
              {FEED.map((f) => (
                <div key={f.label} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: f.surface }}>
                    <f.icon size={15} strokeWidth={1.7} style={{ color: f.color }} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em]" style={{ color: f.color }}>{f.label}</p>
                    <p className="text-[12.5px] font-medium leading-tight text-[var(--ws-ink)]">{f.title}</p>
                    <p className="text-[11.5px] leading-tight text-[var(--grey-700)]">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-[13px] leading-[1.6] text-[var(--grey-700)]">
            Available on Android and iOS. Login details are shared with parents at admission.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
