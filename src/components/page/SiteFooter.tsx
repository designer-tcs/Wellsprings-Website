import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/wellsprings-logo.png";
import { SectionEyebrow, PILLAR_COLOR } from "@/components/page/Primitives";
import { VisitDialog } from "@/components/page/VisitDialog";
import {
  SITE_ADDRESS,
  SITE_CBSE,
  SITE_EMAIL,
  SITE_HOURS,
  SITE_MAPS_URL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/lib/site";

const EXPLORE_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/why-wellsprings", label: "Why Wellsprings" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/beyond-books", label: "Beyond Books" },
  { to: "/life", label: "Life at Wellsprings" },
  { to: "/campus", label: "Campus" },
] as const;

const SCHOOL_LINKS = [
  { to: "/admissions", label: "Admissions" },
  { to: "/careers", label: "Careers" },
  { to: "/mandatory-disclosure", label: "Mandatory Disclosure" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;

const MOTTO = ["Think", "Build", "Belong"] as const;

function FooterLinkGroup({
  eyebrow,
  links,
}: {
  eyebrow: string;
  links: readonly { to: string; label: string }[];
}) {
  return (
    <nav aria-label={eyebrow}>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
        {eyebrow}
      </p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="text-[14px] text-[var(--grey-800)] transition-colors hover:text-[var(--coral-600)]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-700)]">
        {label}
      </p>
      <div className="mt-1.5 text-[14px] leading-[1.6] text-[var(--ws-ink)]">{children}</div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--grey-200)] bg-[var(--ws-paper)] pb-24 md:pb-0">
      {/* Brand 4 — equal-weight pillar strip */}
      <div className="flex h-1 w-full" aria-hidden>
        <span className="flex-1 bg-[var(--coral-600)]" />
        <span className="flex-1 bg-[var(--sun-600)]" />
        <span className="flex-1 bg-[var(--sage-600)]" />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-16">
          {/* Brand column */}
          <div>
            <Link to="/" aria-label="Wellsprings Academy — home">
              <img
                src={logoMark}
                alt="Wellsprings Academy"
                className="h-16 w-auto object-contain md:h-[4.5rem]"
              />
            </Link>

            <p className="mt-6 max-w-[28ch] font-serif text-xl leading-[1.25] tracking-[-0.01em] text-[var(--ws-ink)] md:text-2xl">
              A Whole Child CBSE school in Sarjapura.
            </p>

            <p className="mt-4 font-serif text-lg tracking-[-0.01em] md:text-xl">
              {MOTTO.map((word, i) => (
                <span key={word}>
                  <span style={{ color: PILLAR_COLOR[word] }}>{word}</span>
                  {i < MOTTO.length - 1 && (
                    <span className="mx-2 text-[var(--grey-500)]">·</span>
                  )}
                </span>
              ))}
            </p>

            <div className="mt-8">
              <VisitDialog
                trigger={
                  <button
                    type="button"
                    className="group inline-flex items-center gap-2 bg-[var(--ws-ink)] px-5 py-3 text-sm font-medium text-[var(--ws-paper)] transition-colors hover:bg-[var(--coral-600)]"
                  >
                    Book a campus visit
                    <ArrowRight
                      size={15}
                      strokeWidth={1.6}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>
                }
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-1">
            <FooterLinkGroup eyebrow="Explore" links={EXPLORE_LINKS} />
            <FooterLinkGroup eyebrow="School" links={SCHOOL_LINKS} />
          </div>

          {/* Contact */}
          <div>
            <SectionEyebrow>Reach us</SectionEyebrow>

            <div className="mt-6 grid gap-6">
              <ContactBlock label="Campus">
                <address className="not-italic">
                  {SITE_ADDRESS.line1}
                  <br />
                  {SITE_ADDRESS.line2}
                  <br />
                  {SITE_ADDRESS.city}
                </address>
                <a
                  href={SITE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--coral-600)] transition-colors hover:text-[var(--coral-700)]"
                >
                  Open in Maps
                  <ArrowRight size={14} strokeWidth={1.6} />
                </a>
              </ContactBlock>

              <ContactBlock label="Admissions">
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="transition-colors hover:text-[var(--coral-600)]"
                >
                  {SITE_PHONE_DISPLAY}
                </a>
              </ContactBlock>

              <ContactBlock label="Email">
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="transition-colors hover:text-[var(--coral-600)]"
                >
                  {SITE_EMAIL}
                </a>
              </ContactBlock>

              <ContactBlock label="Hours">{SITE_HOURS}</ContactBlock>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--grey-200)] bg-white/60">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-xs leading-relaxed text-[var(--grey-700)]">
            © {new Date().getFullYear()} Wellsprings Academy · CBSE affiliated (No. {SITE_CBSE})
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--grey-700)]">
            <Link to="/admissions" className="transition-colors hover:text-[var(--ws-ink)]">
              Admissions
            </Link>
            <Link
              to="/mandatory-disclosure"
              className="transition-colors hover:text-[var(--ws-ink)]"
            >
              Disclosure
            </Link>
            <Link to="/contact" className="transition-colors hover:text-[var(--ws-ink)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
