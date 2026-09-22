import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import {
  PageHero,
  SectionShell,
  SectionEyebrow,
} from "@/components/page/Primitives";
import heroImage from "@/assets/photos/disc-01-noticeboard.webp";

export const Route = createFileRoute("/mandatory-disclosure")({
  head: () => ({
    meta: [
      { title: "Mandatory Public Disclosure | Wellsprings Academy" },
      {
        name: "description",
        content:
          "CBSE Mandatory Public Disclosure for Wellsprings Academy — affiliation, infrastructure, staff, results and fee structure.",
      },
      { property: "og:title", content: "Mandatory Public Disclosure — Wellsprings Academy" },
      {
        property: "og:description",
        content:
          "All CBSE-mandated public disclosures for Wellsprings Academy in one place.",
      },
    ],
  }),
  component: MandatoryDisclosurePage,
});

// TODO: replace every TODO value with the actual school information
// before this page is published. Until then we render the structure
// honestly with a "to be confirmed" marker so nothing reads as cocky.
const TBC = "To be confirmed";

const GENERAL = [
  { label: "Name of the school", value: "Wellsprings Academy" },
  { label: "Affiliation No. (CBSE)", value: "831719" },
  { label: "School code", value: TBC },
  { label: "Complete address with pin code", value: "Sy No. 146/1,2,3, Mugalur Village, Sarjapura – Chikka Thirupathi Road, Anekal Taluk, Bengaluru, Karnataka 562125" },
  { label: "Principal name & qualification", value: TBC },
  { label: "School email", value: "hello@wellspringsacademy.in" },
  { label: "Contact number", value: "063663 61707" },
] as const;

const DOCUMENTS = [
  { label: "Affiliation / upgradation letter from CBSE", href: "#", note: TBC },
  { label: "Trust / society / company registration certificate", href: "#", note: TBC },
  { label: "No-Objection Certificate (NOC) from State Government", href: "#", note: TBC },
  { label: "Recognition certificate under RTE Act, 2009", href: "#", note: TBC },
  { label: "Building safety certificate", href: "#", note: TBC },
  { label: "Fire safety certificate", href: "#", note: TBC },
  { label: "Health & sanitary certificate", href: "#", note: TBC },
  { label: "DEO certificate for Right to Education", href: "#", note: TBC },
  { label: "Copy of valid water, health and sanitation certificates", href: "#", note: TBC },
] as const;

const RESULTS = [
  { label: "Class X — last three years", value: TBC },
  { label: "Class XII — last three years", value: TBC },
] as const;

const STAFF = [
  { label: "Principal", value: TBC },
  { label: "Total teaching staff (PRT/TGT/PGT)", value: TBC },
  { label: "Special educators", value: TBC },
  { label: "Counsellors / wellness coordinators", value: TBC },
] as const;

const INFRA = [
  { label: "Total campus area (sq m)", value: TBC },
  { label: "Built-up area (sq m)", value: TBC },
  { label: "Number of classrooms & size", value: TBC },
  { label: "Library — books and digital resources", value: TBC },
  { label: "Science / computer / maker labs", value: TBC },
  { label: "Sports facilities", value: TBC },
  { label: "Internet / Wi-Fi", value: TBC },
] as const;

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-[var(--grey-200)] py-4 last:border-b-0 sm:grid-cols-[1fr_2fr] sm:gap-6">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
        {label}
      </span>
      <span className="text-[15px] text-[var(--ws-ink)]">{value}</span>
    </div>
  );
}

function MandatoryDisclosurePage() {
  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--grey-700)" } as CSSProperties}>
      <PageHero
        eyebrow="Public disclosure"
        pillar="Belong"
        title={
          <>
            Mandatory
            <br />
            <span className="text-[var(--sage-700)]">public disclosure</span>.
          </>
        }
        intro={
          <p>
            As a CBSE-affiliated school, we publish the following information for parents,
            applicants and the general public. Where a value reads <em>To be confirmed</em>,
            it means the document or number is being finalised — please write to us if you
            need it sooner than it appears here.
          </p>
        }
        image={heroImage}
        imageAlt="The Wellsprings school noticeboard"
        imageCaption="The school noticeboard."
      />

      {/* General information */}
      <SectionShell eyebrow="A. General information" title="The school, in numbers and names.">
        <div className="border-y border-[var(--grey-200)]">
          {GENERAL.map((row) => (
            <Row key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
      </SectionShell>

      {/* Documents */}
      <SectionShell
        background="grey"
        eyebrow="B. Documents and information"
        title="Statutory documents."
        intro={
          <p>
            Click a row to download. If a document hasn't been linked yet, it will say
            <em> {TBC}</em> next to it — write to us and we'll send the latest copy.
          </p>
        }
      >
        <ul className="border-y border-[var(--grey-300)]">
          {DOCUMENTS.map((doc) => (
            <li
              key={doc.label}
              className="grid grid-cols-[auto_1fr] items-center gap-3 border-b border-[var(--grey-300)] py-4 last:border-b-0 sm:grid-cols-[auto_1fr_auto] sm:gap-6"
            >
              <FileText size={18} strokeWidth={1.5} className="text-[var(--grey-700)]" />
              <span className="text-[15px] text-[var(--ws-ink)]">{doc.label}</span>
              {doc.note === TBC ? (
                <span className="col-span-2 justify-self-start font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--grey-700)] sm:col-span-1 sm:justify-self-auto">
                  {TBC}
                </span>
              ) : (
                <a
                  href={doc.href}
                  className="col-span-2 inline-flex items-center gap-2 justify-self-start border border-[var(--ws-ink)] px-3 py-1.5 text-xs font-medium text-[var(--ws-ink)] hover:bg-[var(--ws-ink)] hover:text-white sm:col-span-1 sm:justify-self-auto"
                >
                  <Download size={12} strokeWidth={1.6} />
                  Download
                </a>
              )}
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* Results */}
      <SectionShell eyebrow="C. Results & academic performance" title="Board exam results.">
        <div className="border-y border-[var(--grey-200)]">
          {RESULTS.map((row) => (
            <Row key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
          Detailed PDFs — TODO upload year-wise result sheets here once available.
        </p>
      </SectionShell>

      {/* Staff */}
      <SectionShell background="grey" eyebrow="D. Staff" title="Teaching and support staff.">
        <div className="border-y border-[var(--grey-300)]">
          {STAFF.map((row) => (
            <Row key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
      </SectionShell>

      {/* Infrastructure */}
      <SectionShell eyebrow="E. School infrastructure" title="Land, building and facilities.">
        <div className="border-y border-[var(--grey-200)]">
          {INFRA.map((row) => (
            <Row key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
      </SectionShell>

      {/* Contact for clarifications */}
      <SectionShell background="ink">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <SectionEyebrow>For clarifications</SectionEyebrow>
            <h2 className="mt-3 text-4xl leading-[1.05] md:text-5xl">
              Need a document that isn't here yet?
            </h2>
            <p className="mt-5 text-[17px] leading-[1.75] text-[var(--slate-200)]">
              Write to us and we will send the latest copy by email, usually the same day.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-between gap-2 bg-white px-6 py-4 text-sm font-medium text-[var(--ws-ink)] transition-colors hover:bg-[var(--coral-200)]"
          >
            Contact the school office
          </a>
        </div>
      </SectionShell>
    </div>
  );
}
