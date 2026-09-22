import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import imgAcademics from "@/assets/glimpses/Think_Lab.webp";
import imgBeyondBooks from "@/assets/glimpses/The_Art_Room.webp";
import imgCampus from "@/assets/glimpses/On_the_Field.webp";
import imgLife from "@/assets/glimpses/Lunch_Together.webp";
import imgCare from "@/assets/glimpses/Closing_Circle.webp";

type Panel = {
  key: string;
  label: string;
  title: string;
  sub: string;
  body: string;
  cta?: { label: string; href: string };
  bg: string;
  ink: string;
  accent: string;
  image: string;
  alt: string;
};

const PANELS: Panel[] = [
  {
    key: "academics",
    label: "Academics",
    title: "Learning by asking",
    sub: "Fifteen to a teacher. Nobody drifts.",
    body:
      "Children are asked what they notice before they are given the answer. Four times a year you get a written account of your child, not just a grade.",
    cta: { label: "See the curriculum", href: "/curriculum" },
    // Mind · Coral 600 — academics, reading, inquiry, curriculum
    bg: "#CF4E3C",
    ink: "var(--ws-paper)",
    accent: "var(--coral-200)",
    image: imgAcademics,
    alt: "A child reading at her own pace in the reading corner",
  },
  {
    key: "beyond-books",
    label: "Beyond Books",
    title: "Sport and the arts, in the timetable",
    sub: "Part of the week, not added to the end of it.",
    body:
      "Coached games, and art, music, dance and theatre taught by specialists. Clubs, public speaking and robotics run through the year.",
    cta: { label: "See Beyond Books", href: "/beyond-books" },
    // Body · Sun 600 — sport, music, making, movement. Type in Ink.
    bg: "#D4BE3F",
    ink: "var(--ws-ink)",
    accent: "var(--sun-1000)",
    image: imgBeyondBooks,
    alt: "Children painting and making in the art room",
  },
  {
    key: "campus",
    label: "Campus",
    title: "Ten acres",
    sub: "Room to run, rooms to build in.",
    body:
      "Playing fields, courts and a swimming pool outside. Four science laboratories, a STEAM lab, a maker space and a library inside.",
    cta: { label: "See the campus", href: "/campus" },
    // Heart · Sage 600
    bg: "#5FA57B",
    ink: "var(--ws-paper)",
    accent: "var(--sage-200)",
    image: imgCampus,
    alt: "Children running on the school playing field",
  },
  {
    key: "life",
    label: "Life here",
    title: "What a day actually feels like",
    sub: "A routine that is filled with continuous learning",
    body:
      "Field visits, nights away from home, and a whole year carried by one idea. This year it is Roots to Wings.",
    cta: { label: "See life at Wellsprings", href: "/life" },
    // Anchor · Slate 600
    bg: "#354251",
    ink: "var(--ws-paper)",
    accent: "var(--slate-200)",
    image: imgLife,
    alt: "Children eating lunch together at a long table",
  },
  {
    key: "care",
    label: "Care",
    title: "Somebody always notices",
    sub: "Every learner. Every day. By name.",
    body:
      "On the first mornings, no child is made to walk into class before they are ready. There is a counsellor, a nurse, and a teacher who notices when something has changed.",
    cta: { label: "Read Why Wellsprings", href: "/why-wellsprings" },
    // Heart · Sage at its background tint — the quieter side of Belong
    bg: "var(--sage-200)",
    ink: "var(--ws-ink)",
    accent: "var(--sage-800)",
    image: imgCare,
    alt: "A teacher sitting with children in a closing circle",
  },
];

const HOLD_MS = 2500;

export function FiveWaysIn() {
  const [active, setActive] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const select = (i: number) => {
    clearTimers();
    startedRef.current = true;
    setActive(i);
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (reduced) {
        setActive(0);
        return;
      }
      PANELS.forEach((_, i) => {
        timersRef.current.push(
          setTimeout(() => {
            setActive((cur) => (cur === null || cur === i - 1 ? i : cur));
          }, i * HOLD_MS),
        );
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.4) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: [0, 0.4, 0.5] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimers();
    };
  }, []);

  const panel = active === null ? null : PANELS[active];

  return (
    <div ref={rootRef} className="mt-10 overflow-x-hidden md:mt-14">
      {/* Desktop: five in-place expanding panels */}
      <div className="hidden md:flex md:h-[520px] md:w-full md:overflow-hidden">
        {PANELS.map((p, i) => {
          const on = i === active;
          return (
            <div
              key={p.key}
              onClick={() => select(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  select(i);
                }
              }}
              aria-expanded={on}
              className="relative flex h-full cursor-pointer overflow-hidden focus:outline-none"
              style={{
                background: p.bg,
                color: p.ink,
                opacity: active === null || on ? 1 : 0.9,
                flexGrow: on ? 1 : 0,
                flexShrink: 0,
                flexBasis: "92px",
                minWidth: "92px",
                transition:
                  "flex-grow 800ms cubic-bezier(0.65, 0, 0.35, 1), opacity 500ms ease",
              }}
            >
              {/* Spine — always visible */}
              <div className="relative flex w-[92px] shrink-0 flex-col items-center justify-between py-7">
                <span
                  className="mt-2 whitespace-nowrap font-serif text-[26px] leading-none tracking-tight"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {p.label}
                </span>
                <span
                  className="font-mono text-[13px] tracking-[0.18em]"
                  style={{ opacity: on ? 1 : 0.72 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {on && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-[3px]"
                    style={{ background: p.accent }}
                  />
                )}
              </div>

              {/* Expanded content — lives inside this panel */}
              {on && (
                <div className="flex min-w-0 flex-1 animate-[fadeUp_600ms_ease-out]">
                  <div className="flex min-w-0 flex-1 flex-col justify-between p-10 lg:p-14">
                    <div className="max-w-[46ch]">
                      <h3 className="text-4xl leading-[1.1] lg:text-5xl">{p.title}</h3>
                      <p className="mt-4 font-serif text-lg italic" style={{ color: p.accent }}>
                        {p.sub}
                      </p>
                      <p className="mt-7 text-[16px] leading-[1.8] opacity-90">{p.body}</p>
                    </div>
                    {p.cta && (
                      <a
                        href={p.cta.href}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-8 inline-flex w-fit items-center gap-2 border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-70"
                        style={{ borderColor: p.ink, color: p.ink }}
                      >
                        {p.cta.label}
                        <ArrowRight size={14} strokeWidth={1.6} />
                      </a>
                    )}
                  </div>
                  <div className="relative hidden h-full w-[38%] shrink-0 overflow-hidden lg:block">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="h-full w-full animate-[fadeUp_700ms_ease-out] object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>



      {/* Mobile: five persistent tabs + one content area below */}
      <div className="md:hidden">
        <div className="flex">
          {PANELS.map((p, i) => {
            const on = i === active;
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => select(i)}
                aria-expanded={on}
                className="flex flex-1 flex-col items-center justify-end gap-2 py-4 transition-opacity"
                style={{
                  background: p.bg,
                  color: p.ink,
                  opacity: active === null || on ? 1 : 0.78,
                }}
              >
                <span
                  className="whitespace-nowrap font-serif text-[15px] leading-none"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {p.label}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] opacity-75">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
        {panel && (
          <div
            key={panel.key}
            className="animate-[fadeUp_350ms_ease-out] px-5 pb-7 pt-6"
            style={{ background: panel.bg, color: panel.ink }}
          >
            <h3 className="text-2xl leading-[1.15]">{panel.title}</h3>
            <p className="mt-2 font-serif text-base italic" style={{ color: panel.accent }}>
              {panel.sub}
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] opacity-90">{panel.body}</p>
            <img
              src={panel.image}
              alt={panel.alt}
              loading="lazy"
              className="mt-5 h-52 w-full object-cover"
            />
            {panel.cta && (
              <a
                href={panel.cta.href}
                className="mt-5 inline-flex items-center gap-2 border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em]"
                style={{ borderColor: panel.ink, color: panel.ink }}
              >
                {panel.cta.label}
                <ArrowRight size={14} strokeWidth={1.6} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Admissions CTA */}
      <div className="mt-12 flex flex-col gap-5 border-t border-[var(--grey-200)] pt-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[42ch] font-serif text-xl italic text-[var(--grey-700)] md:text-2xl">
          The best way to know what makes Wellsprings different is to come see it yourself.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="/admissions#enquire"
            className="inline-flex items-center gap-2 bg-[var(--ws-ink)] px-6 py-3.5 text-sm font-medium text-[var(--ws-paper)] transition-colors hover:bg-[var(--coral-600)]"
          >
            Book your visit
            <ArrowRight size={16} strokeWidth={1.6} />
          </a>
          <a
            href="/admissions"
            className="text-sm font-medium text-[var(--ws-ink)] underline-offset-4 hover:text-[var(--coral-600)] hover:underline"
          >
            See how admission works
          </a>
        </div>
      </div>
    </div>
  );
}
