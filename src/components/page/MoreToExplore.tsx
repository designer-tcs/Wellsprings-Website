import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/page/Primitives";

export type ExploreCard = {
  title: string;
  body: string;
  href: string;
  label: string;
  image: string;
  imageAlt: string;
};

/**
 * MoreToExplore — replaces the old ink CTA block at the bottom of inner pages.
 * Three or four quiet routes onward, each with an image, a short description
 * and a single link. No promises, no shouting.
 */
export function MoreToExplore({
  cards,
  eyebrow = "Where to go next",
  title = "More to explore.",
}: {
  cards: ReadonlyArray<ExploreCard>;
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="border-t border-[var(--grey-200)] bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-20">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="mt-3 text-3xl leading-[1.1] md:text-4xl">{title}</h2>

        <div
          className={`mt-9 grid gap-6 sm:grid-cols-2 ${
            cards.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {cards.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group flex flex-col border border-[var(--grey-200)] bg-white transition-all hover:border-[var(--ws-ink)] hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--grey-200)]">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl leading-[1.15] text-[var(--ws-ink)]">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-[var(--grey-800)]">
                  {c.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ws-ink)] transition-colors group-hover:text-[var(--page-accent,var(--coral-600))]">
                  {c.label}
                  <ArrowRight
                    size={16}
                    strokeWidth={1.6}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
