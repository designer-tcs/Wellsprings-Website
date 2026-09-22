import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionEyebrow } from "@/components/page/Primitives";
import { VisitDialog } from "@/components/page/VisitDialog";


/**
 * VisitUs — one shared closing invitation, identical on every page.
 * The address and map are shown on the home page only (`withContact`).
 */
export function VisitUs({ withContact = false }: { withContact?: boolean }) {
  return (
    <section id="contact" className="border-t border-[var(--grey-200)] bg-[var(--grey-100)]">
      <Reveal>
        <div className="mx-auto w-full max-w-[1320px] px-5 py-10 md:px-8 md:py-16">
          <SectionEyebrow>Talk to us</SectionEyebrow>
          <h2 className="mt-3 max-w-[20ch] text-3xl leading-[1.08] md:text-5xl">
            Schedule a campus visit.
          </h2>
          <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.65] text-[var(--grey-800)]">
            Pick a time that suits you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <VisitDialog
              trigger={
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 bg-[var(--coral-600)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--coral-700)]"
                >
                  Book your visit
                  <ArrowRight
                    size={16}
                    strokeWidth={1.6}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              }
            />

            <a
              href="/admissions"
              className="inline-flex items-center gap-2 border border-[var(--grey-400)] px-6 py-3.5 text-sm font-medium text-[var(--ws-ink)] transition-colors hover:border-[var(--ws-ink)]"
            >
              Talk to admissions
            </a>
          </div>

          {withContact && (
            <div className="mt-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-stretch">

              <div className="grid content-start gap-6 text-sm">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
                    Campus
                  </p>
                  <p className="mt-1 text-[var(--ws-ink)]">
                    Sy No. 146/1,2,3, Mugalur Village, Sarjapura – Chikka Thirupathi Road, Anekal
                    Taluk, Bengaluru, Karnataka 562125
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
                    Admissions
                  </p>
                  <a
                    href="tel:06366361707"
                    className="mt-1 inline-block font-sans text-[var(--ws-ink)] hover:text-[var(--coral-600)]"
                  >
                    063663 61707
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
                    Email
                  </p>
                  <a
                    href="mailto:hello@wellspringsacademy.in"
                    className="mt-1 inline-block text-[var(--ws-ink)] hover:text-[var(--coral-600)]"
                  >
                    hello@wellspringsacademy.in
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--grey-200)]">
                <iframe
                  src="https://www.google.com/maps?q=Wellsprings%20Academy%20Mugalur%20Sarjapura%20Bengaluru%20562125&output=embed"
                  loading="lazy"
                  title="Wellsprings Academy location"
                  className="h-full min-h-[300px] w-full"
                />
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
