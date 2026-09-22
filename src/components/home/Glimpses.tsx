import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";
import quietMorning from "@/assets/glimpses/A_Quiet_morning.webp";
import handsAtWork from "@/assets/glimpses/Hands_at_Work.webp";
import artRoom from "@/assets/glimpses/The_Art_Room.webp";
import onTheField from "@/assets/glimpses/On_the_Field.webp";
import lunchTogether from "@/assets/glimpses/Lunch_Together.webp";
import firstSolo from "@/assets/glimpses/A_First_Solo.webp";
import closingCircle from "@/assets/glimpses/Closing_Circle.webp";
import festivalColours from "@/assets/glimpses/Festival_Colours.webp";
import onTheCourt from "@/assets/glimpses/On_the_Court.webp";
import smallExperiment from "@/assets/glimpses/A_Small_Experiment.webp";
import readingCorner from "@/assets/glimpses/The_Reading_Corner.webp";
import twoHeads from "@/assets/glimpses/Two_Heads_One_Problem.webp";

type Cat = "Academic" | "Co-curricular" | "Sports & Wellness" | "Culture & Community";
type Tone = "coral" | "sun" | "sage";

const TONE: Record<Tone, string> = {
  coral: "var(--coral-600)",
  sun: "var(--sun-700)",
  sage: "var(--sage-700)",
};

const DOT: Record<Cat, string> = {
  Academic: "var(--coral-600)",
  "Co-curricular": "var(--sun-700)",
  "Sports & Wellness": "var(--sage-700)",
  "Culture & Community": "var(--slate-1000)",
};

const TINT: Record<Cat, string> = {
  Academic: "color-mix(in srgb, var(--coral-200) 55%, var(--ws-paper))",
  "Co-curricular": "color-mix(in srgb, var(--sun-200) 55%, var(--ws-paper))",
  "Sports & Wellness": "color-mix(in srgb, var(--sage-200) 55%, var(--ws-paper))",
  "Culture & Community": "color-mix(in srgb, var(--grey-200) 80%, var(--ws-paper))",
};

type Sub =
  | { kind: "photo"; category: Cat; caption: string; src?: string }
  | { kind: "word"; tone: Tone; text: string }
  | { kind: "motto" };

type Col = { w: string; rows: Sub[] };

const COLUMNS: Col[] = [
  { w: "w-[260px] md:w-[340px]", rows: [{ kind: "photo", category: "Academic", caption: "A quiet morning", src: quietMorning }] },
  { w: "w-[260px] md:w-[320px]", rows: [{ kind: "photo", category: "Co-curricular", caption: "Hands at work", src: handsAtWork }, { kind: "word", tone: "coral", text: "Curiosity, inculcated thoughtfully." }] },
  { w: "w-[400px] md:w-[520px]", rows: [{ kind: "photo", category: "Culture & Community", caption: "Creativity", src: artRoom }] },
  { w: "w-[260px] md:w-[320px]", rows: [{ kind: "word", tone: "sage", text: "Every child, known by name." }, { kind: "photo", category: "Sports & Wellness", caption: "On the field", src: onTheField }] },
  { w: "w-[260px] md:w-[340px]", rows: [{ kind: "photo", category: "Academic", caption: "Two heads, one problem", src: twoHeads }] },
  { w: "w-[260px] md:w-[300px]", rows: [{ kind: "motto" }] },
  { w: "w-[260px] md:w-[320px]", rows: [{ kind: "photo", category: "Culture & Community", caption: "Lunch, together", src: lunchTogether }, { kind: "word", tone: "sun", text: "Hands that learn by making." }] },
  { w: "w-[400px] md:w-[520px]", rows: [{ kind: "photo", category: "Co-curricular", caption: "A first solo", src: firstSolo }] },
  { w: "w-[260px] md:w-[340px]", rows: [{ kind: "photo", category: "Sports & Wellness", caption: "Closing circle", src: closingCircle }] },
  { w: "w-[260px] md:w-[320px]", rows: [{ kind: "word", tone: "coral", text: "Made, not just memorised." }, { kind: "photo", category: "Academic", caption: "The reading corner", src: readingCorner }] },
  { w: "w-[260px] md:w-[340px]", rows: [{ kind: "photo", category: "Culture & Community", caption: "Festival colours", src: festivalColours }] },
  { w: "w-[260px] md:w-[320px]", rows: [{ kind: "photo", category: "Co-curricular", caption: "On the court", src: onTheCourt }, { kind: "word", tone: "sage", text: "Looked out for." }] },
  { w: "w-[260px] md:w-[340px]", rows: [{ kind: "photo", category: "Academic", caption: "A small experiment", src: smallExperiment }] },
  { w: "w-[300px] md:w-[360px]", rows: [{ kind: "word", tone: "sun", text: "More than a mark." }] },
];

function SubTile({ sub }: { sub: Sub }) {
  if (sub.kind === "photo") {
    return (
      <div className="relative min-h-0 flex-1 overflow-hidden" style={{ background: TINT[sub.category] }}>
        {sub.src ? (
          <img
            src={sub.src}
            alt={sub.caption}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
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
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon size={32} strokeWidth={1.2} className="text-[var(--grey-500)]/70" />
        </div>
          </>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/95 px-2.5 py-1.5 shadow-[0_8px_20px_-10px_rgba(15,23,42,0.3)] backdrop-blur">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: DOT[sub.category] }} />
          <span className="text-[11px] leading-none text-[var(--ws-ink)]">{sub.caption}</span>
        </div>
      </div>
    );
  }
  if (sub.kind === "word") {
    return (
      <div className="flex min-h-0 flex-1 items-center px-6 py-6" style={{ background: TONE[sub.tone] }}>
        <p className="font-serif text-[22px] leading-[1.2] text-white md:text-[26px]">{sub.text}</p>
      </div>
    );
  }
  return (
    <div className="flex min-h-0 flex-1 flex-col justify-center gap-3 bg-[var(--ws-ink)] px-6 py-6">
      <span className="flex gap-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--coral-600)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--sun-700)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--sage-700)" }} />
      </span>
      <p className="font-serif text-[22px] leading-[1.2] text-[var(--ws-paper)] md:text-[26px]">
        Think · Build · Belong.
      </p>
    </div>
  );
}

export function Glimpses() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mqDesk = window.matchMedia("(min-width: 768px)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPinned(!mqReduce.matches);
    update();
    mqDesk.addEventListener("change", update);
    mqReduce.addEventListener("change", update);
    return () => {
      mqDesk.removeEventListener("change", update);
      mqReduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!pinned) {
      if (track) track.style.transform = "";
      if (barRef.current) barRef.current.style.width = "0%";
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const outer = outerRef.current;
        const tr = trackRef.current;
        if (!outer || !tr) return;
        const vh = window.innerHeight;
        const distance = outer.offsetHeight - vh;
        const progress = distance > 0 ? Math.min(1, Math.max(0, -outer.getBoundingClientRect().top / distance)) : 0;
        const maxX = Math.max(0, tr.scrollWidth - window.innerWidth + 32);
        tr.style.transform = `translate3d(${(-progress * maxX).toFixed(1)}px,0,0)`;
        if (barRef.current) barRef.current.style.width = `${(progress * 100).toFixed(1)}%`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pinned]);

  return (
    <section ref={outerRef} className="relative" style={pinned ? { height: "300vh" } : undefined}>
      <div
        className={`flex flex-col overflow-hidden border-y border-[var(--grey-200)] bg-[var(--ws-paper)] ${
          pinned ? "sticky top-0 h-screen justify-start pt-28 md:pt-32" : "justify-center py-14 md:py-20"
        }`}
      >
        <div className="mx-auto w-full max-w-[1320px] shrink-0 px-5 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--grey-700)]">Glimpses</p>
          <h2 className="mt-3 text-3xl leading-[1.05] md:text-5xl">What it feels like to be here.</h2>
          <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.7] text-[var(--grey-800)] md:text-[16px]">
            Lived moments from an ordinary week — here’s a quick glance.
          </p>
        </div>

        <div className={`mt-6 ${pinned ? "overflow-hidden" : "overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"}`}>
          <div
            ref={trackRef}
            className="flex h-[44vh] w-max items-stretch gap-4 px-5 will-change-transform md:h-[46vh] md:px-8"
          >
            {COLUMNS.map((col, i) => (
              <div key={i} className={`flex h-full shrink-0 flex-col gap-4 ${col.w}`}>
                {col.rows.map((sub, j) => (
                  <SubTile key={j} sub={sub} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {pinned && (
          <div className="mx-auto mt-6 w-full max-w-[1320px] shrink-0 px-5 md:px-8">
            <div className="h-0.5 w-full bg-[var(--grey-200)]">
              <div ref={barRef} className="h-full bg-[var(--ws-ink)]" style={{ width: "0%" }} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
