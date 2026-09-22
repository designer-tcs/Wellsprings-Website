import { useEffect, useRef } from "react";

/**
 * Shared scroll listener — one rAF tick drives every subscribed element.
 */
type Sub = (scrollY: number) => void;
const subs = new Set<Sub>();
let ticking = false;
let started = false;

function tick() {
  ticking = false;
  const y = window.scrollY;
  subs.forEach((s) => s(y));
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(tick);
  }
}

function ensureListener() {
  if (started || typeof window === "undefined") return;
  started = true;
  window.addEventListener("scroll", onScroll, { passive: true });
}

export function useParallax<T extends HTMLElement>(
  factor: number = 0.08,
  max: number = 24
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!factor) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    let offsetTop = 0;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      offsetTop = rect.top + window.scrollY;
    };
    measure();

    const sub: Sub = (y) => {
      const delta = (y - offsetTop) * factor;
      const clamped = Math.max(-max, Math.min(max, delta));
      el.style.transform = `translate3d(0, ${clamped.toFixed(2)}px, 0)`;
    };
    subs.add(sub);
    ensureListener();
    // initial position
    sub(window.scrollY);

    const ro = "ResizeObserver" in window ? new ResizeObserver(measure) : null;
    ro?.observe(document.body);
    window.addEventListener("resize", measure);

    return () => {
      subs.delete(sub);
      ro?.disconnect();
      window.removeEventListener("resize", measure);
      el.style.transform = "";
    };
  }, [factor, max]);

  return ref;
}
