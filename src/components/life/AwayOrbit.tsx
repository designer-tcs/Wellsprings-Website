import { Trees, Landmark, Sprout, Tent, Palette, Users } from "lucide-react";

const PLACES = [
  { icon: Sprout, label: "Farms", color: "var(--sage-700)", surface: "var(--sage-200)" },
  { icon: Trees, label: "Parks", color: "var(--sage-700)", surface: "var(--sage-200)" },
  { icon: Landmark, label: "Museums", color: "var(--coral-600)", surface: "var(--coral-200)" },
  { icon: Palette, label: "Workshops", color: "var(--sun-700)", surface: "var(--sun-200)" },
  { icon: Users, label: "Village visits", color: "var(--coral-600)", surface: "var(--coral-200)" },
  { icon: Tent, label: "A night at school", color: "var(--slate-1000)", surface: "var(--grey-200)" },
];

export function AwayOrbit() {
  return (
    <div className="w-full">
      {/* Orbit — large screens */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[460px] lg:block">
        {/* dashed ring: radius 36% of the box — every icon sits exactly on it */}
        <div
          aria-hidden
          className="absolute inset-[14%] rounded-full border border-dashed border-[var(--grey-300,var(--grey-200))]"
        />
        <div className="absolute inset-[30%] flex flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)]">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
            School
          </p>
          <p className="mt-1 px-5 font-serif text-[17px] leading-[1.2] text-[var(--ws-ink)]">
            Class starts here
          </p>
          <p className="mt-1 px-6 text-[11px] leading-[1.35] text-[var(--grey-700)]">
            and goes outside too
          </p>
        </div>

        {PLACES.map((p, i) => {
          const a = (i / PLACES.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * 36;
          const y = 50 + Math.sin(a) * 36;
          const below = Math.sin(a) >= -0.2;
          return (
            <div
              key={p.label}
              className="absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--grey-200)] shadow-[0_10px_24px_-16px_rgba(15,23,42,0.5)]"
                style={{ background: p.surface }}
              >
                <p.icon size={19} strokeWidth={1.6} style={{ color: p.color }} />
              </span>
              <span
                className="absolute left-1/2 w-[112px] -translate-x-1/2 text-center font-mono text-[9px] uppercase leading-[1.3] tracking-[0.1em] text-[var(--grey-700)]"
                style={below ? { top: "calc(100% + 6px)" } : { bottom: "calc(100% + 6px)" }}
              >
                {p.label}
              </span>
            </div>
          );
        })}
      </div>


      {/* Simple grid — phones and tablets */}
      <div className="lg:hidden">
        <div className="border border-[var(--grey-200)] bg-white p-5 text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
            School
          </p>
          <p className="mt-1 font-serif text-lg leading-[1.2] text-[var(--ws-ink)]">
            Class starts here, and goes outside too
          </p>
        </div>
        <div className="mt-px grid grid-cols-2 gap-px bg-[var(--grey-200)]">
          {PLACES.map((p) => (
            <div key={p.label} className="flex items-center gap-3 bg-white p-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: p.surface }}
              >
                <p.icon size={18} strokeWidth={1.6} style={{ color: p.color }} />
              </span>
              <span className="font-mono text-[10px] uppercase leading-[1.3] tracking-[0.1em] text-[var(--grey-700)]">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
