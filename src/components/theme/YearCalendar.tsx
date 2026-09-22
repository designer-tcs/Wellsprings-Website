import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  CATEGORY_COLOR,
  CATEGORY_SURFACE,
  EVENTS,
  MONTHS,
  formatLongDate,
  type Category,
  type DatedEvent,
} from "@/data/theme-year";

export function CategoryPill({ category }: { category: Category }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em]"
      style={{
        background: CATEGORY_SURFACE[category],
        color: CATEGORY_COLOR[category],
      }}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: CATEGORY_COLOR[category] }}
      />
      {category}
    </span>
  );
}


function PhotoCarousel({
  photos,
  category,
  title,
}: {
  photos: string[];
  category: Category;
  title: string;
}) {
  const isPlaceholder = photos.length === 0;
  const slides = isPlaceholder ? Array.from({ length: 6 }, (_, i) => String(i)) : photos.slice(0, 20);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((c, i) => {
      const el = c as HTMLElement;
      const cc = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  };

  return (
    <div className="mt-4">
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="shrink-0 basis-[78%] snap-center first:ml-[11%] last:mr-[11%]"
            >
              <div
                className={`overflow-hidden transition-opacity duration-300 ${
                  i === active ? "opacity-100" : "opacity-45"
                }`}
              >
                {isPlaceholder ? (
                  <div className="aspect-[4/3] w-full" style={{ background: CATEGORY_SURFACE[category] }} />
                ) : (
                  <img
                    src={s}
                    alt={`${title} — photo ${i + 1}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full bg-[var(--grey-200)] object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label="Previous photo"
              className="absolute left-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[var(--ws-ink)] shadow-md transition hover:bg-[var(--ws-ink)] hover:text-white disabled:pointer-events-none disabled:opacity-0"
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(slides.length - 1, active + 1))}
              disabled={active === slides.length - 1}
              aria-label="Next photo"
              className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[var(--ws-ink)] shadow-md transition hover:bg-[var(--ws-ink)] hover:text-white disabled:pointer-events-none disabled:opacity-0"
            >
              <ChevronRight size={18} strokeWidth={1.8} />
            </button>
          </>
        )}
      </div>

      <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
        {active + 1} / {slides.length}
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {slides.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className="relative h-12 w-16 shrink-0 overflow-hidden transition-opacity"
            style={{ opacity: i === active ? 1 : 0.5 }}
          >
            {isPlaceholder ? (
              <div className="h-full w-full" style={{ background: CATEGORY_SURFACE[category] }} />
            ) : (
              <img src={s} alt="" loading="lazy" className="h-full w-full object-cover" />
            )}
            {i === active && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 border-2"
                style={{ borderColor: CATEGORY_COLOR[category] }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---- Event overlay -----------------------------------------------------

function EventOverlay({ event, onClose }: { event: DatedEvent; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const photos = event.photos ?? [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={event.title}
      className="fixed inset-0 z-50 flex items-end justify-center bg-[var(--slate-1000)]/60 backdrop-blur-sm animate-in fade-in duration-200 motion-reduce:animate-none md:items-center"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-[980px] flex-col overflow-hidden rounded-t-2xl bg-white shadow-[0_40px_120px_-30px_rgba(15,23,42,0.6)] animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300 motion-reduce:animate-none md:max-h-[88vh] md:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-white/95 text-[var(--ws-ink)] shadow-md transition-colors hover:bg-[var(--ws-ink)] hover:text-white"
        >
          <X size={18} strokeWidth={1.8} />
        </button>


        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-[var(--ws-ink)]/10 pl-6 pr-16 py-6 md:px-10 md:py-7">
            <div className="flex flex-wrap items-center gap-3">
              <CategoryPill category={event.category} />
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--grey-700)]">
                {formatLongDate(event.date)}
                {event.grades ? ` · ${event.grades}` : ""}
              </span>
            </div>
            <h3 className="mt-3 font-serif text-3xl leading-[1.1] text-[var(--ws-ink)] md:text-4xl">
              {event.title}
            </h3>
            <p className="mt-2 font-serif text-[18px] italic leading-[1.45] text-[var(--grey-800)]">
              {event.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {/* The plan */}
            <div className="min-w-0 px-6 py-7 md:border-r md:border-[var(--ws-ink)]/10 md:px-10 md:py-9">
              <p
                className="font-mono text-[10px] uppercase tracking-[0.24em]"
                style={{ color: CATEGORY_COLOR[event.category] }}
              >
                The plan
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-[var(--grey-800)]">{event.body}</p>
              {event.highlights && event.highlights.length > 0 && (
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--grey-700)]">
                    What happens
                  </p>
                  <ul className="mt-3 space-y-2">
                    {event.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] leading-[1.65] text-[var(--grey-800)]"
                      >
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: CATEGORY_COLOR[event.category] }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Event photos */}
            <div className="min-w-0 self-start bg-[var(--ws-paper)]/60 px-6 py-7 md:px-10 md:py-9">
              <div className="flex items-baseline justify-between gap-2">
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.24em]"
                  style={{ color: CATEGORY_COLOR[event.category] }}
                >
                  Event photos
                </p>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-500)]">
                  After the event
                </span>
              </div>
              <PhotoCarousel photos={photos} category={event.category} title={event.title} />
              {photos.length === 0 && (
                <p className="mt-3 text-[13px] leading-[1.6] text-[var(--grey-600)]">
                  Up to 20 photos appear here as a carousel, added by the school after the event.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function YearCalendar() {
  const [activeKey, setActiveKey] = useState<string>("2026-06");
  const [openEvent, setOpenEvent] = useState<DatedEvent | null>(null);
  const [strand, setStrand] = useState<Category | "All">("All");
  const activeMonth = MONTHS.find((m) => m.key === activeKey) ?? MONTHS[0];
  const monthEvents = useMemo(
    () =>
      EVENTS.filter(
        (e) => e.date.startsWith(activeMonth.key) && (strand === "All" || e.category === strand),
      ),
    [activeMonth.key, strand],
  );

  return (
    <>
          <div className="mt-8 flex flex-col gap-3 border-t border-[var(--ws-ink)]/10 pt-6 sm:flex-row sm:items-center sm:gap-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--grey-700)]">
              Filter by strand
            </span>
            <div className="flex flex-wrap gap-2">
              {(["All", ...(Object.keys(CATEGORY_COLOR) as Category[])] as ("All" | Category)[]).map(
                (s) => {
                  const on = strand === s;
                  const color = s === "All" ? "var(--ws-ink)" : CATEGORY_COLOR[s as Category];
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStrand(s)}
                      className={`inline-flex items-center gap-2 border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                        on ? "" : "border-[var(--ws-ink)]/15 bg-white text-[var(--grey-800)] hover:border-[var(--ws-ink)]/50"
                      }`}
                      style={on ? { background: color, borderColor: color, color: "#fff" } : undefined}
                    >
                      {s !== "All" && (
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: on ? "#fff" : color }}
                        />
                      )}
                      {s}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* Month rail + events pane */}
          <div className="mt-8 grid gap-6 md:grid-cols-[210px_1fr] md:gap-10">
            <nav
              aria-label="Months"
              className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-col md:gap-2 md:overflow-visible md:px-0 md:pb-0"
            >
              {MONTHS.map((m) => {
                const on = m.key === activeKey;
                const count = EVENTS.filter(
                  (e) => e.date.startsWith(m.key) && (strand === "All" || e.category === strand),
                ).length;
                return (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setActiveKey(m.key)}
                    aria-current={on ? "true" : undefined}
                    className={`flex shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-full border px-4 py-2.5 text-left transition-colors md:w-full md:rounded-md md:py-3 ${
                      on
                        ? "border-[var(--ws-ink)] bg-[var(--ws-ink)] text-white"
                        : "border-[var(--ws-ink)]/15 bg-white text-[var(--grey-800)] hover:border-[var(--ws-ink)]/50"
                    }`}
                  >
                    <span className="font-serif text-[16px] leading-tight">
                      {m.short} <span className={on ? "text-white/60" : "text-[var(--grey-500)]"}>'{String(m.year).slice(2)}</span>
                    </span>
                    {count > 0 && (
                      <span
                        className="flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 font-mono text-[10px]"
                        style={
                          on
                            ? { background: "rgba(255,255,255,0.22)", color: "#fff" }
                            : { background: "var(--grey-200)", color: "var(--grey-700)" }
                        }
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div
              key={activeKey + strand}
              className="animate-in fade-in slide-in-from-bottom-1 duration-300 motion-reduce:animate-none"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--ws-ink)]/10 pb-5">
                <div>
                  <h3 className="font-serif text-3xl leading-none tracking-[-0.01em] md:text-4xl">
                    {activeMonth.long}
                  </h3>
                  <p className="mt-2 font-serif text-[16px] italic leading-[1.4] text-[var(--grey-700)]">
                    {activeMonth.sub}
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--grey-600)]">
                  {monthEvents.length} {monthEvents.length === 1 ? "event" : "events"}
                </span>
              </div>

              {monthEvents.length === 0 ? (
                <div className="mt-6 border border-dashed border-[var(--ws-ink)]/15 bg-[var(--ws-paper)]/50 p-8 text-center">
                  <p className="font-serif text-xl italic leading-[1.35] text-[var(--ws-ink)]">
                    {strand === "All"
                      ? "A quieter month — the theme lives in the everyday."
                      : `No ${strand} events this month.`}
                  </p>
                </div>
              ) : (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {monthEvents.map((e) => (
                    <button
                      key={`${e.date}-${e.title}`}
                      type="button"
                      onClick={() => setOpenEvent(e)}
                      className="group flex flex-col overflow-hidden border border-[var(--ws-ink)]/10 bg-white text-left transition-all hover:-translate-y-0.5 hover:border-[var(--ws-ink)] hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] motion-reduce:hover:translate-y-0"
                    >
                      <span
                        aria-hidden
                        className="block h-1 w-full shrink-0"
                        style={{ background: CATEGORY_COLOR[e.category] }}
                      />
                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-center gap-2">
                          <CategoryPill category={e.category} />
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-600)]">
                            {new Date(e.date + "T00:00:00").toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                            })}
                            {e.grades ? ` · ${e.grades}` : ""}
                          </span>
                        </div>
                        <h4 className="mt-3 font-serif text-[19px] leading-[1.2] text-[var(--ws-ink)] group-hover:text-[var(--coral-600)]">
                          {e.title}
                        </h4>
                        <p className="mt-1.5 text-[13.5px] leading-[1.5] text-[var(--grey-700)]">
                          {e.subtitle}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-medium text-[var(--ws-ink)] group-hover:text-[var(--coral-600)]">
                          See the day
                          <ArrowRight size={14} strokeWidth={1.6} />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
      {openEvent && <EventOverlay event={openEvent} onClose={() => setOpenEvent(null)} />}
    </>
  );
}
