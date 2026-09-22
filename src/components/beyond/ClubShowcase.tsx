import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

export type Club = {
  name: string;
  note: string;
  image: string;
  icon: LucideIcon;
};

const DURATION = 5000;

/**
 * Clubs, shown as an animated infographic: the picture changes on a timer,
 * the rail on the right shows where you are and lets you jump.
 */
export function ClubShowcase({ clubs, accent }: { clubs: Club[]; accent: string }) {
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);
  const wrap = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !running || !inView) return;
    const started = Date.now();
    const id = window.setInterval(() => {
      const p = Math.min(1, (Date.now() - started) / DURATION);
      setProgress(p);
      if (p >= 1) {
        setActive((a) => (a + 1) % clubs.length);
        setProgress(0);
      }
    }, 60);
    return () => window.clearInterval(id);
  }, [active, running, inView, clubs.length]);

  const select = (i: number) => {
    setActive(i);
    setProgress(0);
  };

  return (
    <div
      ref={wrap}
      className="grid gap-px bg-[var(--grey-200)] lg:grid-cols-[1.35fr_1fr]"
      onMouseEnter={() => setRunning(false)}
      onMouseLeave={() => setRunning(true)}
    >
      {/* Stage */}
      <div className="relative bg-white">
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/11" }}>
          {clubs.map((c, i) => (
            <img
              key={c.name}
              src={c.image}
              alt={c.name}
              loading="lazy"
              width={768}
              height={576}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "scale(1.02)" : "scale(1)",
                transition: "opacity 700ms ease-out, transform 6s linear",
              }}
            />
          ))}
          <span
            className="absolute inset-x-0 bottom-0 h-3/5"
            style={{
              background:
                "linear-gradient(to top, rgba(12,18,28,0.88), rgba(12,18,28,0.2) 60%, transparent)",
            }}
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Club {String(active + 1).padStart(2, "0")} / {String(clubs.length).padStart(2, "0")}
            </p>
            <p className="mt-2 font-serif text-[28px] leading-[1.1] text-white md:text-[34px]">
              {clubs[active]!.name}
            </p>
            <p className="mt-2 max-w-[46ch] text-[14px] leading-[1.65] text-white/85">
              {clubs[active]!.note}
            </p>
          </div>
        </div>
      </div>

      {/* Rail */}
      <ul className="grid bg-white">
        {clubs.map((c, i) => {
          const Icon = c.icon;
          const on = i === active;
          return (
            <li key={c.name} className="border-b border-[var(--grey-200)] last:border-b-0">
              <button
                type="button"
                onClick={() => select(i)}
                onFocus={() => select(i)}
                aria-current={on ? "true" : undefined}
                className="relative flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-[var(--ws-paper)] md:px-6"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center transition-colors"
                  style={{
                    background: on ? accent : `color-mix(in oklab, ${accent} 12%, white)`,
                  }}
                  aria-hidden
                >
                  <Icon size={18} strokeWidth={1.5} style={{ color: on ? "white" : accent }} />
                </span>
                <span className="min-w-0">
                  <span className="block font-serif text-[19px] leading-tight text-[var(--ws-ink)]">
                    {c.name}
                  </span>
                  <span className="mt-1 block truncate text-[13px] text-[var(--grey-600)]">
                    {c.note}
                  </span>
                </span>
                <span
                  className="absolute inset-x-0 bottom-0 h-[3px] bg-[var(--grey-200)]"
                  aria-hidden
                >
                  <span
                    className="block h-full"
                    style={{
                      width: on ? `${Math.round(progress * 100)}%` : "0%",
                      background: accent,
                    }}
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
