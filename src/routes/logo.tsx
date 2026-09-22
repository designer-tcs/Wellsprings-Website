import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";
import logoStacked from "@/assets/wellsprings-logo-stacked.jpg";
import logoHorizontal from "@/assets/wellsprings-logo-horizontal.jpg";

export const Route = createFileRoute("/logo")({
  head: () => ({
    meta: [
      { title: "Logo — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content:
          "The Wellsprings Academy logo is a phoenix-flame mark with a Cormorant wordmark. Lockups, exclusion zone, sizes, and misuse.",
      },
      { property: "og:title", content: "Logo — Wellsprings Academy" },
      {
        property: "og:description",
        content: "Mark, lockups, exclusion zone, minimum sizes and misuse.",
      },
    ],
  }),
  component: LogoPage,
});

function LogoPage() {
  return (
    <article>
      <SectionHeader
        num="02"
        title="The mark."
        intro="A bird rising from three flames — coral, sun, sage — set with the Wellsprings wordmark in a classical serif. The bird is the child. The flames are Mind, Body, Heart. The wordmark is the institution that holds them."
      />

      <SubHeader label="2.1" title="Primary lockup — stacked" />
      <div className="flex h-72 items-center justify-center border border-[var(--ws-ink)] bg-white p-8">
        <img src={logoStacked} alt="Wellsprings Academy stacked lockup" className="max-h-full w-auto object-contain" />
      </div>
      <p className="mt-3 font-mono text-[11px] text-[var(--grey-700)]">
        The default. Use this whenever vertical space allows — letterhead, prospectus cover, signage, social avatar.
      </p>

      <SubHeader label="2.2" title="Horizontal lockup" />
      <div className="flex min-h-[28rem] items-center justify-center border border-[var(--ws-ink)] bg-white p-12">
        <img src={logoHorizontal} alt="Wellsprings Academy horizontal lockup" className="h-auto w-full max-w-[900px] object-contain" />
      </div>
      <p className="mt-3 font-mono text-[11px] text-[var(--grey-700)]">
        For wide formats — website headers, email signatures, banner artwork.
      </p>

      <SubHeader label="2.3" title="On color" />
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="flex h-72 items-center justify-center bg-[var(--ws-ink)] p-8">
            <img src={logoStacked} alt="Wellsprings on dark slate" className="h-full w-auto object-contain mix-blend-screen" />
          </div>
          <p className="mt-3 font-mono text-[11px] text-[var(--grey-700)]">
            On Slate 600 — the mark holds at full color against deep ink.
          </p>
        </div>
        <div>
          <div className="flex h-72 items-center justify-center bg-[var(--sage-200)] p-8">
            <img src={logoStacked} alt="Wellsprings on sage" className="h-full w-auto object-contain" />
          </div>
          <p className="mt-3 font-mono text-[11px] text-[var(--grey-700)]">
            On a brand tint — full color logo holds. Use Sage 200, Sun 200 or Coral 200 only.
          </p>
        </div>
      </div>

      <SubHeader label="2.4" title="The crest" />
      <p className="text-[15px] leading-[1.6] text-[var(--grey-800)]">
        On uniforms, certificates and the school crest, the bird-and-flame mark
        may appear without the wordmark — but only when the Wellsprings name is
        already legible in the same field of view (e.g. a uniform shirt with an
        embroidered school name).
      </p>
      <div className="mt-5 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        <div className="flex min-h-[320px] items-center justify-center bg-white p-8">
          <div className="w-full text-center">
            <div className="mx-auto flex h-64 w-full max-w-[420px] items-center justify-center">
              <img src={logoStacked} alt="Wellsprings crest lockup" className="h-full w-full object-contain" />
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
              Crest only — uniform context
            </p>
          </div>
        </div>
        <div className="flex min-h-[200px] flex-col justify-between bg-[var(--coral-200)] p-6">
          <p className="font-serif text-xl text-[var(--coral-1000)]">
            The bird is never re-coloured, re-drawn, or used as a stand-alone icon
            outside the crest context.
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-[var(--coral-1000)]">
            Rule
          </p>
        </div>
      </div>

      <SubHeader label="2.5" title="Exclusion zone" />
      <p className="text-[15px] leading-[1.6] text-[var(--grey-800)]">
        Keep clear space around the mark equal to <strong>the height of the
        capital W</strong> in the wordmark. Nothing — text, image, or page edge
        — may enter this zone.
      </p>
      <div className="mt-6 flex h-72 items-center justify-center border border-[var(--ws-ink)] bg-[var(--grey-200)]">
        <div className="relative">
          <div className="absolute -inset-y-6 -inset-x-8 border border-dashed border-[var(--grey-600)]" />
          <img src={logoHorizontal} alt="Exclusion zone demonstration" className="relative h-32 w-auto object-contain" />
        </div>
      </div>

      <SubHeader label="2.6" title="Minimum size" />
      <div className="grid gap-6 border-y border-[var(--grey-300)] py-8 md:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
            Digital
          </p>
          <p className="mt-2 font-serif text-3xl">120 px wide</p>
          <p className="mt-1 font-sans text-sm text-[var(--grey-800)]">
            Below this width, the wordmark and the tagline lose legibility.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
            Print
          </p>
          <p className="mt-2 font-serif text-3xl">30 mm wide</p>
          <p className="mt-1 font-sans text-sm text-[var(--grey-800)]">
            Always use vector files. Never re-typeset the wordmark by hand.
          </p>
        </div>
      </div>

      <SubHeader label="2.7" title="Misuse" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] sm:grid-cols-2 md:grid-cols-3">
        {[
          { label: "Don't stretch", style: { transform: "scaleX(1.4)" } },
          { label: "Don't recolor the bird", style: { filter: "hue-rotate(180deg)" } },
          { label: "Don't add effects", style: { filter: "drop-shadow(2px 2px 0 var(--coral-600))" } },
          { label: "Don't rotate", style: { transform: "rotate(-7deg)" } },
          { label: "Don't crop the flame", style: { clipPath: "inset(40% 0 0 0)" } },
          { label: "Don't outline", style: { filter: "grayscale(1) contrast(0.4)" } },
        ].map((m) => (
          <div key={m.label} className="bg-white p-5">
            <div className="flex h-20 items-center justify-center overflow-hidden">
              <img src={logoStacked} alt="" className="h-full w-auto object-contain" style={m.style as object} />
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/brand" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← 01 Philosophy
        </Link>
        <Link to="/typography" className="text-lg font-medium underline-offset-4 hover:underline">
          03 — Typography →
        </Link>
      </div>
    </article>
  );
}
