import { useEffect, useRef, useState } from "react";
import {
  Sunrise,
  Mic,
  MessagesSquare,
  UtensilsCrossed,
  Hammer,
  HeartHandshake,
  Backpack,
} from "lucide-react";

type Stop = {
  time: string;
  label: string;
  title: string;
  body: string;
  icon: typeof Sunrise;
  color: string;
  surface: string;
};

const STOPS: Stop[] = [
  {
    time: "8:00",
    label: "Arrive",
    title: "Breakfast first",
    body: "Children come in, eat and talk. Nothing is asked of them for the first half hour.",
    icon: Sunrise,
    color: "var(--sun-700)",
    surface: "var(--sun-200)",
  },
  {
    time: "8:40",
    label: "Assembly",
    title: "The whole school meets",
    body: "One thought for the day, one song, and one child speaking in front of everyone.",
    icon: Mic,
    color: "var(--coral-600)",
    surface: "var(--coral-200)",
  },
  {
    time: "9:00",
    label: "Lessons",
    title: "Classes begin with a question",
    body: "What did you see? Why did it happen? What will you try next? Children work it out, then explain it.",
    icon: MessagesSquare,
    color: "var(--coral-600)",
    surface: "var(--coral-200)",
  },
  {
    time: "12:15",
    label: "Lunch",
    title: "Hot food, cooked at school",
    body: "Children from different classes sit at the same table, so they make new friends.",
    icon: UtensilsCrossed,
    color: "var(--sage-700)",
    surface: "var(--sage-200)",
  },
  {
    time: "1:00",
    label: "Make & move",
    title: "Afternoons are for doing",
    body: "Labs, art, music, the field and the court. Work you can hold or show at the end of it.",
    icon: Hammer,
    color: "var(--sun-700)",
    surface: "var(--sun-200)",
  },
  {
    time: "2:40",
    label: "Circle",
    title: "The class talks about the day",
    body: "What went well, what did not, and who helped. Five minutes, every day.",
    icon: HeartHandshake,
    color: "var(--sage-700)",
    surface: "var(--sage-200)",
  },
  {
    time: "3:00",
    label: "Home",
    title: "Home by 3 o'clock",
    body: "Notes for parents, a quick word with the class teacher, and out of the gate.",
    icon: Backpack,
    color: "var(--slate-1000)",
    surface: "var(--grey-200)",
  },
];


function arcY(t: number) {
  return 118 - Math.sin(t * Math.PI) * 62 - t * 28;
}

const ARC_PATH = Array.from({ length: 81 }, (_, i) => {
  const t = i / 80;
  const x = 20 + t * 960;
  return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${arcY(t).toFixed(1)}`;
}).join(" ");

export function DayArc() {

  const ref = useRef<HTMLDivElement | null>(null);
  const [live, setLive] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setLive(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setLive(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const current = STOPS[active]!;

  return (
    <div ref={ref} className="w-full">
      {/* Arc rail — desktop */}
      <div className="relative hidden py-10 md:block">
        <svg viewBox="0 0 1000 150" className="h-[150px] w-full" preserveAspectRatio="none" aria-hidden>
          <path d={ARC_PATH} fill="none" stroke="var(--grey-200)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path
            d={ARC_PATH}
            fill="none"
            stroke="var(--sun-700)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="1400"
            strokeDashoffset={live ? 0 : 1400}
            style={{ transition: "stroke-dashoffset 2200ms ease-out" }}
          />
        </svg>

        <ul className="absolute inset-x-0 top-10 h-[150px]">
          {STOPS.map((s, i) => {
            const t = i / (STOPS.length - 1);
            const y = arcY(t);
            const isActive = i === active;
            return (
              <li
                key={s.label}
                className="absolute"
                style={{
                  left: `${2 + t * 96}%`,
                  top: `${(y / 150) * 100}%`,
                  opacity: live ? 1 : 0,
                  transform: `translate(-50%,-50%) scale(${live ? 1 : 0.7})`,
                  transition: `opacity 420ms ease-out ${300 + i * 180}ms, transform 420ms cubic-bezier(.2,.9,.3,1.4) ${300 + i * 180}ms`,
                }}
              >

                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group flex flex-col items-center gap-2 outline-none"
                  aria-label={`${s.time} — ${s.label}`}
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      background: isActive ? s.color : s.surface,
                      borderColor: isActive ? s.color : "transparent",
                      boxShadow: isActive
                        ? `0 14px 30px -12px color-mix(in srgb, ${s.color} 70%, transparent)`
                        : "none",
                      transform: isActive ? "scale(1.12)" : "scale(1)",
                    }}
                  >
                    <s.icon
                      size={22}
                      strokeWidth={1.6}
                      style={{ color: isActive ? "white" : s.color }}
                    />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
                    {s.time}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Detail card — desktop */}
      <div className="mt-6 hidden md:block">
        <div
          key={current.label}
          className="flex items-start gap-5 border-l-2 bg-white p-7"
          style={{ borderColor: current.color }}
        >
          <div>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: current.color }}
            >
              {current.time} · {current.label}
            </p>
            <h3 className="mt-2 font-serif text-2xl leading-[1.25] md:text-3xl">
              {current.title}
            </h3>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.75] text-[var(--grey-800)]">
              {current.body}
            </p>
          </div>
        </div>
      </div>

      {/* Vertical rail — mobile */}
      <ol className="relative ml-5 space-y-7 border-l border-[var(--grey-200)] pl-7 md:hidden">
        {STOPS.map((s) => (
          <li key={s.label} className="relative">
            <span
              className="absolute -left-[52px] flex h-10 w-10 items-center justify-center rounded-full"
              style={{ background: s.surface }}
            >
              <s.icon size={18} strokeWidth={1.6} style={{ color: s.color }} />
            </span>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{ color: s.color }}
            >
              {s.time} · {s.label}
            </p>
            <p className="mt-1 font-serif text-xl leading-[1.3]">{s.title}</p>
            <p className="mt-2 text-[14.5px] leading-[1.7] text-[var(--grey-800)]">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
