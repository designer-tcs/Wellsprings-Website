import { useParallax } from "@/components/motion/useParallax";

export function PhotoFrame({
  src,
  alt = "",
  ratio = "4/3",
  caption,
  className,
  parallax = false,
}: {
  src: string;
  alt?: string;
  ratio?: string;
  caption?: string;
  className?: string;
  parallax?: boolean;
}) {
  const ref = useParallax<HTMLImageElement>(parallax ? 0.06 : 0, 20);
  return (
    <div className={`relative w-full overflow-hidden ${className ?? ""}`} style={{ aspectRatio: ratio }}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      {caption && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/95 px-2.5 py-1.5 shadow-[0_8px_20px_-10px_rgba(15,23,42,0.3)] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ws-ink)]" aria-hidden />
          <span className="text-[11px] leading-none text-[var(--ws-ink)]">{caption}</span>
        </div>
      )}
    </div>
  );
}
