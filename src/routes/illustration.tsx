import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";

export const Route = createFileRoute("/illustration")({
  head: () => ({
    meta: [
      { title: "Illustration — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content:
          "Wellsprings illustration grows from the bird-and-flame mark — organic shapes, hand-mixed brand colors, soft textures.",
      },
      { property: "og:title", content: "Illustration — Wellsprings Academy" },
      { property: "og:description", content: "Style, color pairings, gradients and texture." },
    ],
  }),
  component: IllustrationPage,
});

function TwoCol({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t border-[var(--grey-300)] py-8 md:grid-cols-[200px_1fr]">
      <div className="font-serif text-xl">{label}</div>
      <div className="max-w-[60ch] font-sans text-[15px] leading-[1.6] text-[var(--grey-800)]">
        {children}
      </div>
    </div>
  );
}

function Tile({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden ${className}`}>{children}</div>
  );
}

function NoiseDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <filter id="ws-noise" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.20 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <linearGradient id="ws-grad-coral" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--coral-300)" />
          <stop offset="100%" stopColor="var(--coral-700)" />
        </linearGradient>
        <linearGradient id="ws-grad-sun" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--sun-300)" />
          <stop offset="100%" stopColor="var(--sun-700)" />
        </linearGradient>
        <linearGradient id="ws-grad-sage" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="var(--sage-300)" />
          <stop offset="100%" stopColor="var(--sage-800)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* 1 — Three flames stacked, evoking the mark */
function StyleA() {
  return (
    <Tile>
      <div className="absolute inset-0" style={{ background: "var(--ws-paper)" }} />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path d="M120 240 Q90 180 130 120 Q150 80 180 60 Q170 130 200 200 Q190 240 120 240Z" fill="var(--coral-500)" />
        <path d="M180 245 Q160 200 190 150 Q210 120 230 110 Q220 170 240 220 Q230 245 180 245Z" fill="var(--sun-500)" />
        <path d="M230 245 Q220 215 240 180 Q260 160 280 155 Q270 200 290 230 Q280 245 230 245Z" fill="var(--sage-500)" />
      </svg>
    </Tile>
  );
}

/* 2 — Concentric arcs in coral on paper */
function StyleB() {
  const arcs = [140, 110, 82, 56, 32];
  return (
    <Tile>
      <div className="absolute inset-0" style={{ background: "var(--coral-200)" }} />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {arcs.map((r, i) => (
          <circle
            key={i}
            cx="200"
            cy="280"
            r={r * 1.5}
            fill="none"
            stroke="var(--coral-700)"
            strokeWidth="2"
            opacity={0.85 - i * 0.1}
          />
        ))}
      </svg>
    </Tile>
  );
}

/* 3 — Sun rays */
function StyleC() {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <Tile>
      <div className="absolute inset-0" style={{ background: "var(--sun-300)" }} />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <g transform="translate(200 150)">
          {rays.map((r, i) => (
            <rect
              key={i}
              x="-2"
              y="-130"
              width="4"
              height="60"
              fill="var(--sun-700)"
              opacity="0.85"
              transform={`rotate(${r})`}
            />
          ))}
          <circle cx="0" cy="0" r="42" fill="var(--coral-500)" />
        </g>
      </svg>
    </Tile>
  );
}

/* 4 — Sage hills with noise */
function StyleD() {
  return (
    <Tile>
      <div className="absolute inset-0" style={{ background: "var(--sage-1000)" }} />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path d="M0 240 Q100 160 200 200 T400 180 L400 300 L0 300Z" fill="var(--sage-700)" />
        <path d="M0 270 Q120 220 240 250 T400 240 L400 300 L0 300Z" fill="var(--sage-500)" />
        <circle cx="320" cy="80" r="28" fill="var(--sun-400)" />
      </svg>
      <div
        className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay"
        style={{ filter: "url(#ws-noise)", background: "var(--grey-900)" }}
      />
    </Tile>
  );
}

/* 5 — Coral gradient leaf */
function StyleE() {
  return (
    <Tile>
      <div className="absolute inset-0" style={{ background: "var(--ws-paper)" }} />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path
          d="M80 250 Q100 100 220 60 Q340 40 320 200 Q260 290 80 250Z"
          fill="url(#ws-grad-coral)"
        />
        <path d="M110 230 Q200 170 290 110" stroke="var(--ws-paper)" strokeWidth="3" fill="none" opacity="0.7" />
      </svg>
    </Tile>
  );
}

/* 6 — Sage circles arrangement (community) */
function StyleF() {
  const dots: [number, number, number, string][] = [
    [120, 110, 50, "var(--sage-600)"],
    [220, 80, 32, "var(--sage-800)"],
    [290, 140, 44, "var(--sage-400)"],
    [200, 200, 38, "var(--coral-500)"],
    [120, 230, 26, "var(--sun-500)"],
    [310, 230, 22, "var(--sage-700)"],
  ];
  return (
    <Tile>
      <div className="absolute inset-0" style={{ background: "var(--sage-200)" }} />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {dots.map(([cx, cy, r, c], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={c} />
        ))}
      </svg>
    </Tile>
  );
}

type Pair = { bg: string; fg: string; bgLabel: string; fgLabel: string };

const PAIRS: Pair[] = [
  { bg: "var(--coral-500)", fg: "var(--ws-paper)", bgLabel: "CORAL 500", fgLabel: "PAPER" },
  { bg: "var(--coral-200)", fg: "var(--coral-700)", bgLabel: "CORAL 200", fgLabel: "CORAL 700" },
  { bg: "var(--sun-500)", fg: "var(--slate-600)", bgLabel: "SUN 500", fgLabel: "SLATE 600" },
  { bg: "var(--sun-300)", fg: "var(--coral-600)", bgLabel: "SUN 300", fgLabel: "CORAL 600" },
  { bg: "var(--sage-500)", fg: "var(--ws-paper)", bgLabel: "SAGE 500", fgLabel: "PAPER" },
  { bg: "var(--sage-200)", fg: "var(--sage-800)", bgLabel: "SAGE 200", fgLabel: "SAGE 800" },
  { bg: "var(--slate-600)", fg: "var(--sun-400)", bgLabel: "SLATE 600", fgLabel: "SUN 400" },
  { bg: "var(--slate-600)", fg: "var(--coral-400)", bgLabel: "SLATE 600", fgLabel: "CORAL 400" },
  { bg: "var(--ws-paper)", fg: "var(--coral-600)", bgLabel: "PAPER", fgLabel: "CORAL 600" },
  { bg: "var(--ws-paper)", fg: "var(--sage-700)", bgLabel: "PAPER", fgLabel: "SAGE 700" },
  { bg: "var(--coral-700)", fg: "var(--sun-300)", bgLabel: "CORAL 700", fgLabel: "SUN 300" },
  { bg: "var(--sage-800)", fg: "var(--sun-400)", bgLabel: "SAGE 800", fgLabel: "SUN 400" },
];

function PairTile({ pair }: { pair: Pair }) {
  return (
    <div>
      <div className="aspect-square w-full" style={{ background: pair.bg }}>
        <div className="h-full w-full p-[22%]">
          <div className="h-full w-full rounded-full" style={{ background: pair.fg }} />
        </div>
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase leading-[1.5] tracking-[0.08em] text-[var(--grey-800)]">
        <div>{pair.bgLabel}</div>
        <div>{pair.fgLabel}</div>
      </div>
    </div>
  );
}

function GradientA() {
  return (
    <Tile className="w-full">
      <div className="absolute inset-0" style={{ background: "var(--ws-paper)" }} />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <ellipse cx="200" cy="150" rx="170" ry="110" fill="url(#ws-grad-coral)" />
      </svg>
    </Tile>
  );
}

function GradientB() {
  return (
    <Tile className="w-full">
      <div className="absolute inset-0" style={{ background: "var(--slate-700)" }} />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <rect x="40" y="40" width="150" height="220" fill="url(#ws-grad-sun)" />
        <rect x="210" y="40" width="150" height="220" fill="url(#ws-grad-sage)" />
      </svg>
    </Tile>
  );
}

function NoiseTile() {
  return (
    <Tile className="w-full">
      <div className="absolute inset-0" style={{ background: "var(--coral-500)" }} />
      <div
        className="pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay"
        style={{ filter: "url(#ws-noise)", background: "var(--grey-1000)" }}
      />
      <div className="absolute inset-x-8 bottom-8 font-serif text-3xl text-[var(--ws-paper)]">
        Think.
      </div>
    </Tile>
  );
}

function IllustrationPage() {
  return (
    <article>
      <NoiseDefs />

      <SectionHeader
        num="06"
        title="Illustration."
        intro="The mark is a bird rising from three flames. Our illustration grows out of that — organic curves, hand-mixed brand colors, soft paper texture. Never clip-art, never overly literal, never icons of children holding hands."
      />

      <SubHeader label="6.1" title="Style" />
      <TwoCol label="Style">
        <p>
          Illustration extends the geometry of the bird-and-flame: arcs, leaves,
          flames, suns, hills, and clusters of circles standing for community.
          Always built with brand colors. Always with a touch of warmth — paper
          background, slight texture, rounded corners.
        </p>
        <p className="mt-4 border-l border-[var(--coral-500)] pl-4 italic text-[var(--grey-800)]">
          Restraint matters. One illustrative motif per surface — a poster, a
          newsletter, a wall — never four competing for attention.
        </p>
      </TwoCol>

      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <StyleA />
        <StyleB />
        <StyleC />
        <StyleD />
        <StyleE />
        <StyleF />
      </div>

      <SubHeader label="6.2" title="Color pairings" />
      <TwoCol label="Color pairings">
        Pair within a family (Coral 200 + Coral 700) for tonal warmth, or across
        families (Sage 500 + Coral 400) for energy. Always anchor to Paper or
        Slate so the warm colors don't fight each other.
      </TwoCol>

      <div className="mt-2 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
        {PAIRS.map((p, i) => (
          <PairTile key={i} pair={p} />
        ))}
      </div>

      <SubHeader label="6.3" title="Gradients" />
      <TwoCol label="Gradients">
        Use sparingly — a gradient should suggest light or growth, not be the
        whole illustration. Always within one family (Coral 300 → Coral 700) or
        across two adjacent families (Sun → Sage).
      </TwoCol>
      <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        <GradientA />
        <GradientB />
      </div>

      <SubHeader label="6.4" title="Texture" />
      <TwoCol label="Texture">
        A 1px noise overlay at 50–70% opacity, blend mode overlay, gives our
        illustrations the feel of a print on warm paper rather than a clean
        digital fill. Use it on solid color blocks, never on type.
      </TwoCol>
      <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        <NoiseTile />
        <Tile>
          <div className="absolute inset-0" style={{ background: "var(--sage-600)" }} />
          <div
            className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay"
            style={{ filter: "url(#ws-noise)", background: "var(--grey-1000)" }}
          />
          <div className="absolute inset-x-8 bottom-8 font-serif text-3xl text-[var(--ws-paper)]">
            Belong.
          </div>
        </Tile>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/iconography" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← 05 Iconography
        </Link>
        <Link to="/photography" className="text-lg font-medium underline-offset-4 hover:underline">
          07 — Photography →
        </Link>
      </div>
    </article>
  );
}
