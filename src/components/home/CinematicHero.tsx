import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import hero01 from "@/assets/hero/hero-01.webp";
import hero02 from "@/assets/hero/hero-02.webp";
import hero03 from "@/assets/hero/hero-03.webp";
import hero04 from "@/assets/hero/hero-04.webp";
import hero05 from "@/assets/hero/hero-05.webp";
import hero06 from "@/assets/hero/hero-06.webp";
import hero07 from "@/assets/hero/hero-07.webp";

type Pillar = "Think" | "Build" | "Belong";

const FRAMES: { url: string; alt: string; pillar: Pillar; caption: string }[] = [
  {
    url: hero01,
    alt: "A Wellsprings student working through a problem in the library",
    pillar: "Think",
    caption: "A question, taken seriously.",
  },
  {
    url: hero02,
    alt: "Wellsprings students talking together on the lawn",
    pillar: "Belong",
    caption: "Time with people who know you.",
  },
  {
    url: hero03,
    alt: "A Wellsprings student assembling a robotics project in the STEM lab",
    pillar: "Build",
    caption: "Made by hand, tested by hand.",
  },
  {
    url: hero04,
    alt: "A Wellsprings student reading and annotating a textbook",
    pillar: "Think",
    caption: "Reading closely, not quickly.",
  },
  {
    url: hero05,
    alt: "Wellsprings children playing basketball on the court",
    pillar: "Build",
    caption: "Play, every single week.",
  },
  {
    url: hero06,
    alt: "A Wellsprings student skateboarding across the courtyard",
    pillar: "Build",
    caption: "Balance, learned by falling.",
  },
  {
    url: hero07,
    alt: "An older Wellsprings student tying a younger child's shoelace",
    pillar: "Belong",
    caption: "Looked after, and looking after.",
  },
];

const DWELL = 6000;

const FACTS: { value: string; label: string }[] = [
  { value: "CBSE · 831719", label: "Affiliated curriculum" },
  { value: "Nursery – Grade 12", label: "Grades we teach" },
];

const PILLAR_COLOR: Record<Pillar, string> = {
  Think: "var(--coral-600)",
  Build: "var(--sun-700)",
  Belong: "var(--sage-700)",
};

export function CinematicHero() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [copyFade, setCopyFade] = useState(1);
  const [clipTop, setClipTop] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const raf = requestAnimationFrame(() => setEntered(true));

    const update = () => {
      const section = sectionRef.current;
      const header = document.getElementById("site-header");
      if (!section || !header) return;

      const logo = header.querySelector("img");
      const clipLine =
        Math.max(
          header.getBoundingClientRect().bottom,
          logo?.getBoundingClientRect().bottom ?? 0,
        ) + 10;
      const sectionTop = section.getBoundingClientRect().top;
      setClipTop(Math.max(0, Math.ceil(clipLine - sectionTop)));

      const fadeRange = Math.max(clipLine, 80);
      setCopyFade(Math.max(0, 1 - window.scrollY / fadeRange));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    timer.current = setInterval(() => setActive((i) => (i + 1) % FRAMES.length), DWELL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reduced, active]);

  const go = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setActive(i);
  };

  const current = FRAMES[active]!;

  const rise = (delay: number, duration = 420) =>
    ({
      opacity: entered || reduced ? 1 : 0,
      transform: entered || reduced ? "translateY(0)" : "translateY(12px)",
      transition:
        reduced
          ? "none"
          : `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }) as const;

  const MOTTO_DELAYS = { think: 60, build: 300, belong: 540 } as const;

  return (
    <section
      ref={sectionRef}
      className="relative isolate h-[100svh] min-h-[560px] w-full overflow-hidden bg-[var(--ws-ink)]"
      aria-label={current.alt}
    >
      {/* Frames */}
      {FRAMES.map((f, i) => (
        <img
          key={f.url}
          src={f.url}
          alt={i === 0 ? f.alt : ""}
          aria-hidden={i !== active}
          loading={i === 0 ? "eager" : "lazy"}
          // eslint-disable-next-line react/no-unknown-property
          fetchPriority={i === 0 ? "high" : undefined}
          className="absolute inset-0 h-full w-full object-cover will-change-[opacity,transform]"
          style={{
            opacity: i === active ? 1 : 0,
            transition: "opacity 1600ms cubic-bezier(0.4,0,0.2,1)",
            animation:
              !reduced && i === active ? "ws-kenburns 14000ms ease-out forwards" : undefined,
            transform: reduced ? "scale(1.02)" : undefined,
          }}
        />
      ))}

      {/* Grey / ink veil */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--ws-ink) 74%, transparent) 0%, color-mix(in srgb, var(--ws-ink) 30%, transparent) 34%, color-mix(in srgb, var(--ws-ink) 34%, transparent) 58%, color-mix(in srgb, var(--ws-ink) 82%, transparent) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "color-mix(in srgb, var(--grey-800) 26%, transparent)" }}
      />

      {/* Copy is clipped at the logo so it can never paint over it */}
      <div
        className="relative z-10 h-full"
        style={{ clipPath: `inset(${clipTop}px 0 0 0)` }}
      >
        <div className="flex h-full w-full items-start pt-[calc(var(--site-header-h)+1.25rem)]">
          <div className="mx-auto w-full max-w-[1320px] px-6 pb-28 md:px-8">
            <div
              style={{
                opacity: copyFade,
                pointerEvents: copyFade < 0.12 ? "none" : undefined,
              }}
            >
              <p
                className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ws-paper)]/75"
                style={rise(0)}
              >
                Sarjapur · Bengaluru
              </p>

              <h1 className="mt-6 font-serif text-[clamp(2.4rem,6.6vw,5.5rem)] leading-[0.98] tracking-[-0.01em] text-[var(--ws-paper)]">
                <span className="block" style={rise(MOTTO_DELAYS.think)}>
                  Think
                </span>
                <span className="block" style={rise(MOTTO_DELAYS.build)}>
                  Build
                </span>
                <span className="block" style={rise(MOTTO_DELAYS.belong)}>
                  Belong
                </span>
              </h1>

              <p
                className="mt-7 max-w-[34ch] text-[17px] leading-[1.7] text-[var(--ws-paper)]/85 md:text-[19px]"
                style={rise(720)}
              >
                <span className="block">A mind that asks.</span>
                <span className="block">Hands that create.</span>
                <span className="block">A heart that cares.</span>
              </p>

              <div className="mt-9" style={rise(880)}>
                <a
                  href="/admissions#enquire"
                  className="group inline-flex items-center gap-3 bg-[var(--ws-paper)] px-7 py-4 font-mono text-[11px] uppercase tracking-[0.26em] text-[var(--ws-ink)] transition-colors hover:bg-white"
                >
                  Book a tour
                  <ArrowRight
                    size={16}
                    strokeWidth={1.6}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Frame dots */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[92px] px-5 md:px-8 md:bottom-[104px]">
          <div className="mx-auto flex w-full max-w-[1320px] justify-end">
            <div className="pointer-events-auto flex items-center gap-2">
              {FRAMES.map((f, i) => (
                <button
                  key={f.url}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show photograph ${i + 1}`}
                  aria-current={i === active}
                  className="group h-4 w-7 md:w-9"
                >
                  <span className="block h-px w-full bg-[var(--ws-paper)]/35 transition-colors group-hover:bg-[var(--ws-paper)]/70">
                    <span
                      className="block h-px bg-[var(--ws-paper)]"
                      style={{
                        width: i === active ? "100%" : "0%",
                        transition:
                          i === active && !reduced
                            ? `width ${DWELL}ms linear`
                            : "width 300ms ease-out",
                      }}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Facts band, inside the first screen */}
        <div className="absolute inset-x-0 bottom-0 border-t border-[var(--ws-paper)]/20 bg-[var(--ws-ink)]/55 backdrop-blur-sm">
          <dl className="mx-auto flex w-full max-w-[1320px] items-center gap-8 px-5 py-4 md:px-8">
            {FACTS.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex flex-1 items-center gap-3 ${i > 0 ? "border-l border-[var(--ws-paper)]/20 pl-6" : ""}`}
              >
                <div className="min-w-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ws-paper)]/60">
                    {fact.label}
                  </dt>
                  <dd className="mt-0.5 text-[15px] text-[var(--ws-paper)] md:text-[17px]">
                    {fact.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
