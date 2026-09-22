import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  PageHero,
  MottoStrip,
  SectionShell,
  SectionEyebrow,
} from "@/components/page/Primitives";
import heroImage from "@/assets/photos/con-01-hero.webp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Wellsprings Academy, Mugalur (Sarjapura Road)" },
      {
        name: "description",
        content:
          "Visit our campus near Sarjapura, talk to admissions, or send us a note. The fastest way to know Wellsprings is to spend an hour with us.",
      },
      { property: "og:title", content: "Contact — Wellsprings Academy" },
      {
        property: "og:description",
        content: "Visit, call, or write. We'd love to meet your family.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  {
    Icon: Phone,
    label: "Admissions",
    value: "063663 61707",
    href: "tel:06366361707",
    note: "Monday to Saturday · 8 am to 5 pm.",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "hello@wellspringsacademy.in",
    href: "mailto:hello@wellspringsacademy.in",
    note: "We reply within one working day.",
  },
  {
    Icon: MapPin,
    label: "Campus",
    value: "Mugalur, near Sarjapura",
    href: "https://maps.app.goo.gl/vwmZyhvP9jBLMGXGA",
    note: "Sy No. 146/1,2,3, Mugalur Village, Sarjapura – Chikka Thirupathi Road, Anekal Taluk, Bengaluru, Karnataka 562125.",
  },
  {
    Icon: Clock,
    label: "School hours",
    value: "8:00 am – 3:00 pm",
    href: "",
    note: "Monday to Friday. Pre-primary has a half-day option, 8:00 am – 12:30 pm.",
  },
] as const;

function ContactPage() {
  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--sage-700)" } as CSSProperties}>
      <PageHero
        eyebrow="Contact & visit"
        pillar="Belong"
        title={
          <>
            Come spend an
            <br />
            <span className="text-[var(--sage-700)]">hour with us</span>.
          </>
        }
        intro={
          <p>
            We would rather meet your family than write to them. Call us, email us, or book
            a visit — campus visits are by appointment, run about 45 minutes to an hour,
            and are usually held on weekends.
          </p>
        }
        image={heroImage}
        imageAlt="A teacher's hand on a young student's shoulder at a Wellsprings doorway"
        imageCaption="A small moment, the end of the day."
        cta={{ label: "Call admissions", href: "tel:06366361707" }}
        secondaryCta={{ label: "Email us", href: "mailto:hello@wellspringsacademy.in" }}
      />

      <MottoStrip tier={2} />

      {/* Channels */}
      <SectionShell eyebrow="How to reach us" title="Call us, email us, or book a visit.">
        <div className="grid gap-px bg-[var(--grey-200)] md:grid-cols-2">
          {CHANNELS.map((c) => {
            const isTel = c.href.startsWith("tel:");
            const isMail = c.href.startsWith("mailto:");
            const buttonLabel = isTel ? "Call now" : isMail ? "Email us" : "Open in Maps";
            return (
              <div key={c.label} className="bg-white p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center bg-[var(--grey-100)]">
                    <c.Icon size={18} strokeWidth={1.6} className="text-[var(--ws-ink)]" />
                  </span>
                  <SectionEyebrow>{c.label}</SectionEyebrow>
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    className="mt-4 block font-serif text-2xl text-[var(--ws-ink)] hover:text-[var(--coral-600)] md:text-3xl"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-4 font-serif text-2xl text-[var(--ws-ink)] md:text-3xl">
                    {c.value}
                  </p>
                )}
                <p className="mt-3 text-[14px] text-[var(--grey-700)]">{c.note}</p>
                {c.href && (isTel || isMail || c.label === "Campus") && (
                  <a
                    href={c.href}
                    {...(c.label === "Campus" ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="mt-5 inline-flex items-center gap-2 bg-[var(--ws-ink)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--coral-600)]"
                  >
                    {buttonLabel}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell background="grey" eyebrow="Enquire or visit" title="Ready to come and see us?"
        intro={<p>Tell us a little about your child and we'll plan a visit around them — by appointment, about 45 minutes to an hour, usually on a weekend.</p>}>
        <a href="/admissions#enquire"
          className="inline-flex items-center gap-2 bg-[var(--ws-ink)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--coral-600)]">
          Book a campus visit
        </a>
      </SectionShell>

      {/* Map / location placeholder */}
      <SectionShell eyebrow="Find us" title="On the Sarjapura – Chikka Thirupathi road.">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-serif text-2xl text-[var(--ws-ink)]">Wellsprings Academy</p>
            <p className="mt-3 text-[15px] leading-[1.7] text-[var(--grey-800)]">
              Sy No. 146/1,2,3, Mugalur Village, Sarjapura – Chikka Thirupathi Road,
              Anekal Taluk, Bengaluru, Karnataka 562125.
            </p>
            <a
              href="https://maps.app.goo.gl/vwmZyhvP9jBLMGXGA"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-[var(--grey-400)] px-4 py-2.5 text-sm font-medium text-[var(--ws-ink)] hover:border-[var(--ws-ink)]"
            >
              Open in Maps
            </a>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--grey-200)]">
            <iframe
              title="Wellsprings Academy on Google Maps"
              src="https://www.google.com/maps?q=Wellsprings%20Academy%20Mugalur%20Sarjapur%20Anekal%20562125&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
