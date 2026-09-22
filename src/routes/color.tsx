import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SubHeader } from "@/components/brand/SectionHeader";

export const Route = createFileRoute("/color")({
  head: () => ({
    meta: [
      { title: "Color — Wellsprings Academy Brand Guidelines" },
      {
        name: "description",
        content:
          "The Wellsprings palette: Coral (Mind), Sun (Body), Sage (Heart) and Slate (institution), supported by warm Greys on Paper.",
      },
      { property: "og:title", content: "Color — Wellsprings Academy" },
      { property: "og:description", content: "Palette, tints, dimension mapping and pairings." },
    ],
  }),
  component: ColorPage,
});

const TINTS = [200, 300, 400, 500, 600, 700, 800, 900, 1000] as const;

const FAMILIES: { name: string; key: string; meaning: string }[] = [
  { name: "Coral", key: "coral", meaning: "MIND · Think — the bird's body" },
  { name: "Sun", key: "sun", meaning: "BODY · Build — the yellow flame" },
  { name: "Sage", key: "sage", meaning: "HEART · Belong — the green flame" },
  { name: "Slate", key: "slate", meaning: "Institution — the wordmark" },
  { name: "Grey", key: "grey", meaning: "Neutral — type, rules, surfaces" },
];

const BRAND_4 = [
  { name: "Coral", hex: "#DF6856", token: "--coral-500", cmyk: "C9 M73 Y64 K0", rgb: "R223 G104 B86" },
  { name: "Sun", hex: "#EFDD5D", token: "--sun-500", cmyk: "C8 M7 Y77 K0", rgb: "R239 G221 B93" },
  { name: "Sage", hex: "#80C097", token: "--sage-500", cmyk: "C52 M5 Y51 K0", rgb: "R128 G192 B151" },
  { name: "Slate", hex: "#354251", token: "--slate-600", cmyk: "C80 M66 Y48 K38", rgb: "R53 G66 B81" },
];

function Swatch({ family, tint }: { family: string; tint: number }) {
  const varName = `--${family}-${tint}`;
  const isLight = tint <= 400;
  return (
    <div className="flex flex-col">
      <div
        className="aspect-square w-full border border-[var(--grey-300)]"
        style={{ backgroundColor: `var(${varName})` }}
      >
        <div className="flex h-full items-end p-2">
          <span
            className="font-mono text-[10px]"
            style={{ color: isLight ? "var(--grey-900)" : "var(--ws-paper)" }}
          >
            {tint}
          </span>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l border-[var(--ws-ink)] pl-4">
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-2 font-sans text-sm text-[var(--grey-700)]">{body}</p>
    </div>
  );
}

function SpecPanel({
  bg,
  textColor,
  border,
  rows,
}: {
  bg: string;
  textColor: string;
  border?: boolean;
  rows: [string, string][];
}) {
  return (
    <div
      className={`relative aspect-square w-full ${border ? "border border-[var(--grey-300)]" : ""}`}
      style={{ backgroundColor: bg }}
    >
      <div
        className="absolute bottom-6 left-6 font-mono text-[11px] leading-[1.6]"
        style={{ color: textColor }}
      >
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[64px_1fr]">
            <span>{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ColorPage() {
  return (
    <article>
      <SectionHeader
        num="04"
        title="Color."
        intro="Four brand colors carry meaning. Coral is Mind. Sun is Body. Sage is Heart. Slate is the institution that holds them. Everything else — warm greys on a paper background — exists so the four can sing."
      />

      <SubHeader label="4.1" title="The basics" />
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div />
        <div className="space-y-12">
          <p className="max-w-2xl font-serif text-2xl italic leading-snug text-[var(--ws-ink)]">
            A warm, hand-mixed palette — never neon, never corporate. Built for
            a school where children read, parents linger, and walls last decades.
          </p>

          <div>
            <h3 className="mb-4 text-xl">Print and screen</h3>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <InfoBlock
                title="Print"
                body="When designing for print we work with CMYK or PMS values, in software that supports those values, such as Adobe Illustrator or InDesign."
              />
              <InfoBlock
                title="Screen"
                body="When designing for screen we work with RGB or HEX values, in Figma, Adobe suite, Google Slides, Keynote or any motion software."
              />
              <InfoBlock
                title="Note"
                body="Print color values will not display accurately on screen. Screen colors will not print accurately. Always test before a large print run."
              />
            </div>
          </div>
        </div>
      </div>

      <SubHeader label="4.2" title="The four brand colors" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] sm:grid-cols-2">
        {BRAND_4.map((c) => (
          <SpecPanel
            key={c.name}
            bg={c.hex}
            textColor={["Coral", "Slate"].includes(c.name) ? "var(--ws-paper)" : "var(--grey-1000)"}
            rows={[
              ["NAME:", c.name.toUpperCase()],
              ["HEX:", c.hex],
              ["RGB:", c.rgb],
              ["CMYK:", c.cmyk],
              ["TOKEN:", c.token],
            ]}
          />
        ))}
      </div>

      <SubHeader label="4.3" title="Paper & ink" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-2">
        <SpecPanel
          bg="var(--ws-paper)"
          textColor="var(--grey-900)"
          border
          rows={[
            ["NAME:", "PAPER"],
            ["HEX:", "#FBF8F1"],
            ["USE:", "DEFAULT BACKGROUND"],
          ]}
        />
        <SpecPanel
          bg="var(--ws-ink)"
          textColor="var(--ws-paper)"
          rows={[
            ["NAME:", "INK"],
            ["HEX:", "#354251"],
            ["USE:", "TYPE & RULES"],
          ]}
        />
      </div>

      <SubHeader label="4.4" title="Families & tints" />
      <div className="space-y-10">
        {FAMILIES.map((fam) => (
          <div key={fam.key}>
            <div className="mb-3 flex items-baseline justify-between">
              <div>
                <h3 className="font-serif text-2xl">{fam.name}</h3>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
                  {fam.meaning}
                </p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
                200 → 1000
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-9">
              {TINTS.map((t) => (
                <Swatch key={t} family={fam.key} tint={t} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <SubHeader label="4.5" title="Usage" />
      <div className="grid gap-px border border-[var(--ws-ink)] bg-[var(--ws-ink)] md:grid-cols-3">
        {[
          { pct: "70%", t: "Paper & ink", d: "Paper background, Ink type, warm greys for surfaces and rules. The base of every layout." },
          { pct: "20%", t: "One brand color", d: "One of Coral, Sun, Sage or Slate as the dominant accent for a given communication." },
          { pct: "10%", t: "A second", d: "A supporting brand color for emphasis — a pull-quote rule, an icon, a chart accent." },
        ].map((u) => (
          <div key={u.pct} className="bg-white p-6">
            <p className="font-mono text-3xl">{u.pct}</p>
            <p className="mt-2 text-base font-medium">{u.t}</p>
            <p className="mt-1 font-sans text-sm text-[var(--grey-800)]">{u.d}</p>
          </div>
        ))}
      </div>

      <SubHeader label="4.6" title="Pairings we like" />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["coral-500", "sage-200", "MIND meets HEART"],
          ["sun-500", "slate-600", "BODY meets institution"],
          ["sage-600", "coral-200", "HEART meets MIND"],
          ["slate-600", "sun-300", "Institution meets BODY"],
          ["coral-600", "sun-300", "Coral on warm sun"],
          ["sage-700", "ws-paper", "Sage on paper"],
        ].map(([a, b, label]) => (
          <div key={a} className="border border-[var(--ws-ink)]">
            <div className="flex h-32">
              <div className="flex-1" style={{ backgroundColor: `var(--${a})` }} />
              <div className="flex-1" style={{ backgroundColor: `var(--${b})` }} />
            </div>
            <div className="border-t border-[var(--ws-ink)] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[var(--grey-800)]">
              <div className="flex justify-between">
                <span>{a}</span>
                <span>{b}</span>
              </div>
              <div className="mt-1 text-[var(--grey-700)]">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-[var(--ws-ink)] pt-6">
        <Link to="/typography" className="font-mono text-[11px] uppercase tracking-wider text-[var(--grey-700)]">
          ← 03 Typography
        </Link>
        <Link to="/iconography" className="text-lg font-medium underline-offset-4 hover:underline">
          05 — Iconography →
        </Link>
      </div>
    </article>
  );
}
