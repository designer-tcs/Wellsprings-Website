import { ImageIcon } from "lucide-react";
import { useParallax } from "@/components/motion/useParallax";


import { CATEGORY_COLOR } from "@/data/theme-year";

const TINT: Record<string, string> = {
  "Field Visits & Stay Over": "color-mix(in srgb, var(--sage-200) 55%, var(--ws-paper))",
  "Important Academic Days": "color-mix(in srgb, var(--coral-200) 55%, var(--ws-paper))",
  Holidays: "color-mix(in srgb, var(--grey-200) 80%, var(--ws-paper))",
  "Major Events": "color-mix(in srgb, var(--sun-200) 55%, var(--ws-paper))",
  Celebration: "color-mix(in srgb, var(--grey-200) 80%, var(--ws-paper))",
  Academic: "color-mix(in srgb, var(--coral-200) 55%, var(--ws-paper))",
  "Co-curricular": "color-mix(in srgb, var(--sun-200) 55%, var(--ws-paper))",
  "Sports & Wellness": "color-mix(in srgb, var(--sage-200) 55%, var(--ws-paper))",
  "Culture & Community": "color-mix(in srgb, var(--grey-200) 80%, var(--ws-paper))",
};

const DOT: Record<string, string> = {
  ...(CATEGORY_COLOR as Record<string, string>),
  Academic: "var(--coral-600)",
  "Co-curricular": "var(--sun-700)",
  "Sports & Wellness": "var(--sage-700)",
  "Culture & Community": "var(--slate-1000)",
};

export function ImagePlaceholder({
  ratio = "4/3",
  category,
  caption,
  className,
  parallax = false,
}: {
  ratio?: string;
  category?: string;
  caption?: string;
  className?: string;
  parallax?: boolean;
}) {
  const dot = (category && DOT[category]) || "var(--grey-500)";
  const tint = (category && TINT[category]) || "var(--grey-200)";
  const innerRef = useParallax<HTMLDivElement>(parallax ? 0.06 : 0, 20);

  return (
    <div
      className={`relative w-full overflow-hidden ${className ?? ""}`}
      style={{ aspectRatio: ratio, background: tint }}
    >
      {/* TODO: replace with a real / AI image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--ws-ink) 1px, transparent 1px), linear-gradient(90deg, var(--ws-ink) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.04,
        }}
      />
      <div ref={innerRef} className="absolute inset-0 flex items-center justify-center will-change-transform">
        <ImageIcon
          size={36}
          strokeWidth={1.2}
          className="text-[var(--grey-500)]/70"
        />
      </div>
      {caption && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/95 px-2.5 py-1.5 shadow-[0_8px_20px_-10px_rgba(15,23,42,0.3)] backdrop-blur">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: dot }}
          />
          <span className="text-[11px] leading-none text-[var(--ws-ink)]">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}
