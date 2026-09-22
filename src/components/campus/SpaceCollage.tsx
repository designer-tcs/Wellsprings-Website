import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

export type Space = {
  /** Name of the space, shown on the tile. */
  name: string;
  /** One line about what happens in it. */
  note: string;
  /** Real photograph. Leave empty and the tile shows a marked placeholder. */
  image?: string;
  alt?: string;
  icon: LucideIcon;
  /** Tile weight in the collage. */
  size?: "feature" | "band" | "wide" | "tall" | "standard";
};

const SPAN: Record<NonNullable<Space["size"]>, string> = {
  feature: "sm:col-span-2 lg:col-span-6 lg:row-span-2",
  band: "sm:col-span-2 lg:col-span-12",
  wide: "sm:col-span-2 lg:col-span-6",
  tall: "lg:col-span-3 lg:row-span-2",
  standard: "lg:col-span-3",
};

const MIN_H: Record<NonNullable<Space["size"]>, string> = {
  feature: "min-h-[380px] lg:min-h-0",
  band: "min-h-[240px] lg:min-h-0",
  wide: "min-h-[260px] lg:min-h-0",
  tall: "min-h-[320px] lg:min-h-0",
  standard: "min-h-[260px] lg:min-h-0",
};

/**
 * SpaceCollage — a mosaic of the school's rooms and facilities.
 * Infrastructure is shown, not listed: every space gets a picture slot,
 * its name set large over the image, and one quiet line underneath.
 */
export function SpaceCollage({ spaces, accent }: { spaces: Space[]; accent: string }) {
  return (
    <ul className="grid grid-cols-1 gap-px bg-[var(--grey-200)] sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-12">
      {spaces.map((s, i) => {
        const size = s.size ?? "standard";
        const Icon = s.icon;
        return (
          <li key={s.name} className={`group relative bg-white ${SPAN[size]} ${MIN_H[size]}`}>
            <div className="relative h-full w-full overflow-hidden">
              {s.image ? (
                <img
                  src={s.image}
                  alt={s.alt ?? s.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: `color-mix(in oklab, ${accent} 9%, var(--ws-paper))` }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--ws-ink) 1px, transparent 1px), linear-gradient(90deg, var(--ws-ink) 1px, transparent 1px)",
                      backgroundSize: "34px 34px",
                      opacity: 0.05,
                    }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon
                      size={size === "standard" ? 28 : 38}
                      strokeWidth={1.1}
                      style={{ color: `color-mix(in oklab, ${accent} 55%, white)` }}
                      aria-hidden
                    />
                  </span>
                  <span className="absolute right-3 top-3 bg-white/90 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
                    Photograph to come
                  </span>
                </div>
              )}

              {/* Scrim */}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-3/4"
                style={{
                  background: s.image
                    ? "linear-gradient(to top, rgba(12,18,28,0.86), rgba(12,18,28,0.18) 58%, transparent)"
                    : "linear-gradient(to top, rgba(255,255,255,0.96), rgba(255,255,255,0.55) 55%, transparent)",
                }}
              />

              {/* Index */}
              <span
                className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.24em]"
                style={{ color: s.image ? "rgba(255,255,255,0.75)" : "var(--grey-600)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Name plate */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <span
                  className="mb-3 flex h-9 w-9 items-center justify-center"
                  style={{
                    background: s.image ? "rgba(255,255,255,0.94)" : "white",
                  }}
                  aria-hidden
                >
                  <Icon size={17} strokeWidth={1.5} style={{ color: accent }} />
                </span>
                <p
                  className={`font-serif leading-[1.08] ${
                    size === "feature" ? "text-[30px] md:text-[38px]" : "text-[22px] md:text-[25px]"
                  }`}
                  style={{ color: s.image ? "white" : "var(--ws-ink)" }}
                >
                  {s.name}
                </p>
                <p
                  className="mt-2 max-w-[42ch] text-[13.5px] leading-[1.6]"
                  style={{ color: s.image ? "rgba(255,255,255,0.86)" : "var(--grey-800)" }}
                >
                  {s.note}
                </p>
              </div>

              {/* Accent sweep */}
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-[4px] w-0 transition-[width] duration-500 ease-out group-hover:w-full"
                style={{ background: accent }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
