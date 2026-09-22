import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";
import think1 from "@/assets/photo-think-1.webp";
import think2 from "@/assets/photo-think-2.webp";
import think3 from "@/assets/photo-think-3.webp";
import think4 from "@/assets/photo-think-4.webp";
import build1 from "@/assets/photo-build-1.webp";
import build2 from "@/assets/photo-build-2.webp";
import build3 from "@/assets/photo-build-3.webp";
import build4 from "@/assets/photo-build-4.webp";
import belong1 from "@/assets/photo-belong-1.jpg";
import belong2 from "@/assets/photo-belong-2.webp";
import belong3 from "@/assets/photo-belong-3.webp";
import belong4 from "@/assets/photo-belong-4.webp";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content:
          "Wellsprings photography is observational — three categories that mirror the philosophy: Think (children at work), Build (children making), Belong (children together).",
      },
      { property: "og:title", content: "Photography — Wellsprings Academy" },
      {
        property: "og:description",
        content: "An observational style across the three dimensions of the Whole Child.",
      },
    ],
  }),
  component: PhotographyPage,
});

const STYLE_PRINCIPLES = [
  {
    label: "Observed",
    body: "We don't pose children. We wait for the moment, then we quietly take it.",
  },
  {
    label: "Available light",
    body: "Daylight from a window, sun through a corridor. No flash. No studio.",
  },
  {
    label: "Specific",
    body: "A hand on a magnifying glass. Two foreheads close over a worksheet. The thing itself, not a stand-in for it.",
  },
  {
    label: "Faces never staged",
    body: "Children in their own world, mid-thought. Smiles welcome only when they happen on their own.",
  },
];

const DO_DONT = {
  do: [
    "Wait. The good frame is twenty seconds away.",
    "Photograph hands, books, materials — not just faces.",
    "Use real students, real teachers, real classrooms.",
    "Leave the background a little messy. Real schools are.",
  ],
  dont: [
    "Use stock photos of children pointing at globes or holding apples.",
    "Stage groups of four around a single laptop, all smiling at the camera.",
    "Over-saturate or apply heavy filters. The paper palette already does the work.",
    "Crop tightly to a single beaming face. We're not a brochure.",
  ],
};

function FrameTile({ src, alt, caption, ratio = "aspect-[4/3]" }: {
  src: string;
  alt: string;
  caption: string;
  ratio?: string;
}) {
  return (
    <figure className="bg-white">
      <div className={`${ratio} relative w-full overflow-hidden bg-[var(--grey-200)]`}>
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <figcaption className="border-t border-[var(--ws-ink)] px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-[var(--grey-800)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function PhotographyPage() {
  return (
    <article>
      <SectionHeader
        num="07"
        title="Photography."
        intro="Three categories that mirror the philosophy. Think — children at work. Build — children making. Belong — children together. All shot the same way: observed, never staged."
      />

      <SubHeader label="7.1" title="Style" />
      <p className="max-w-[60ch] text-[15px] text-[var(--grey-800)]">
        Four principles guide every shot, regardless of subject.
      </p>
      <div className="mt-6 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        {STYLE_PRINCIPLES.map((p) => (
          <div key={p.label} className="bg-white p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
              {p.label}
            </p>
            <p className="mt-2 font-sans text-[15px] text-[var(--grey-900)]">{p.body}</p>
          </div>
        ))}
      </div>

      <SubHeader label="7.2" title="Think" />
      <p className="max-w-[60ch] text-[15px] text-[var(--grey-800)]">
        The intellectually engaged child. Reading, writing, asking, observing,
        puzzling something out. We photograph the moment of attention — eyes
        narrowed, brow lowered — not the moment of answer.
      </p>
      <div className="mt-6 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        <FrameTile src={think1} alt="A girl reading at a library table by a window" caption="Library · A girl mid-page, daylight from the left" />
        <FrameTile src={think2} alt="Two students working on a science worksheet" caption="Classroom · Two heads over a science worksheet" />
        <FrameTile src={think3} alt="A boy watching ants on a wall outside" caption="Outdoors · A child watching ants on a wall" />
        <FrameTile src={think4} alt="A finger tracing a line of text in a book" caption="Hands · A finger tracing a line of text" />
      </div>

      <SubHeader label="7.3" title="Build" />
      <p className="max-w-[60ch] text-[15px] text-[var(--grey-800)]">
        The physically engaged child. Making, playing, moving, fixing. We
        photograph the hands and the materials at least as often as the face.
      </p>
      <div className="mt-6 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        <FrameTile src={build1} alt="A girl taping cardboard at the maker corner" caption="Maker corner · Tape, cardboard, a structure taking shape" />
        <FrameTile src={build2} alt="A child mid-jump on the school field at golden hour" caption="Field · Mid-jump in a long shadow" />
        <FrameTile src={build3} alt="Hands shaping wet clay on a wooden table" caption="Hands · Clay, mid-shape" />
        <FrameTile src={build4} alt="A boy playing violin in the music room" caption="Music room · A bow on the strings" />
      </div>

      <SubHeader label="7.4" title="Belong" />
      <p className="max-w-[60ch] text-[15px] text-[var(--grey-800)]">
        The emotionally engaged child. Sitting with a friend, sharing a meal,
        helping a younger student. The frames where you can feel the room is
        warm even though the photograph is silent.
      </p>
      <div className="mt-6 grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        <FrameTile src={belong1} alt="An older student helping a younger child in the corridor" caption="Buddy week · A Class 8 student helping a Class 1 child" />
        <FrameTile src={belong2} alt="Students sharing a tiffin at lunch" caption="Lunch · A shared tiffin, two hands meeting" />
        <FrameTile src={belong3} alt="A teacher's hand resting on a student's shoulder at a classroom doorway" caption="Door · A teacher's hand on a small shoulder" />
        <FrameTile src={belong4} alt="Students sharing a tiffin at lunch from above" caption="Belong · Shared moments of care" />
      </div>

      <SubHeader label="7.5" title="Do / don't" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        <div className="bg-white p-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--sage-700)]">Do</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            {DO_DONT.do.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--coral-700)]">Don't</p>
          <ul className="mt-3 space-y-2 text-[15px] text-[var(--grey-800)]">
            {DO_DONT.dont.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <SubHeader label="7.6" title="Consent & care" />
      <p className="max-w-[60ch] text-[15px] leading-[1.6] text-[var(--grey-800)]">
        No photograph of a Wellsprings child is published without an active
        media consent on file from a parent or guardian. When in doubt, frame
        from behind, focus on hands and materials, or do not publish.
      </p>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/illustration" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← 06 Illustration
        </Link>
        <Link to="/language" className="text-lg font-medium underline-offset-4 hover:underline">
          08 — Language →
        </Link>
      </div>
    </article>
  );
}
