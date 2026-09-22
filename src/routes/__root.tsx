import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Home as HomeIcon,
  Compass,
  Users,
  BookOpen,
  HeartHandshake,
  ClipboardList,
  Palette,
  MapPin,
  Briefcase,
  FileText,
  Newspaper,
  Mail,
  ArrowRight,
} from "lucide-react";
import appCss from "../styles.css?url";
import logoMark from "@/assets/wellsprings-logo.png";
import { RootsToWings } from "@/components/brand/RootsToWings";
import { SiteFooter } from "@/components/page/SiteFooter";
import { initLeadTracking } from "@/lib/leads/tracking";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";

type NavChild = { to: string; label: string };
type NavItem = {
  to: string;
  label: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  children?: readonly NavChild[];
  sublabel?: string;
};

const SITE_NAV: readonly NavItem[] = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/about", label: "About Us", icon: Users },
  { to: "/why-wellsprings", label: "Why Wellsprings", icon: Compass },
  {
    to: "/curriculum",
    label: "Curriculum",
    icon: BookOpen,
    children: [
      { to: "/curriculum", label: "Overview" },
      { to: "/curriculum/foundation", label: "Foundation" },
      { to: "/curriculum/preparatory", label: "Preparatory" },
      { to: "/curriculum/middle", label: "Middle" },
      { to: "/curriculum/secondary", label: "Secondary" },
    ],
  },
  { to: "/beyond-books", label: "Beyond Books", icon: Palette },
  { to: "/life", label: "Life at Wellsprings", icon: HeartHandshake },
  { to: "/campus", label: "Campus", icon: MapPin },
  { to: "/admissions", label: "Admissions", icon: ClipboardList },
  { to: "/careers", label: "Careers", icon: Briefcase },
  { to: "/mandatory-disclosure", label: "Mandatory Disclosure", icon: FileText },
  { to: "/blog", label: "Blog", icon: Newspaper },
  { to: "/contact", label: "Contact Us", icon: Mail },
] as const;

const GUIDELINE_NAV = [
  { to: "/brand", label: "Philosophy" },
  { to: "/logo", label: "Logo" },
  { to: "/typography", label: "Typography" },
  { to: "/color", label: "Color" },
  { to: "/iconography", label: "Iconography" },
  { to: "/illustration", label: "Illustration" },
  { to: "/photography", label: "Photography" },
  { to: "/language", label: "Language" },
  { to: "/motion", label: "Motion" },
  { to: "/resources", label: "Resources" },
] as const;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="sl-section-num text-[var(--grey-700)]">404</p>
        <h1 className="mt-3 text-5xl">Page not found.</h1>
        <p className="mt-3 text-sm text-[var(--grey-700)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-[var(--ws-ink)] bg-[var(--ws-ink)] px-4 py-2 text-sm font-medium text-[var(--ws-paper)] transition-colors hover:bg-[var(--ws-paper)] hover:text-[var(--ws-ink)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wellsprings Academy — Think, Build, Belong" },
      {
        name: "description",
        content:
          "Wellsprings Academy is a Whole Child CBSE school where children learn to think deeply, build confidently, and belong fully.",
      },
      { name: "author", content: "Wellsprings Academy" },
      { property: "og:title", content: "Wellsprings Academy — Think, Build, Belong" },
      {
        property: "og:description",
        content:
          "A modern school experience shaped by the Whole Child philosophy — Mind, Body, Soul expressed as Think, Build, Belong.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "data:," },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const location = useLocation();
  const isGuidelines = GUIDELINE_NAV.some((item) => location.pathname.startsWith(item.to));

  useEffect(() => {
    initLeadTracking();
  }, [location.pathname, location.search]);

  if (isGuidelines) return <GuidelinesLayout />;
  return <PublicLayout />;
}

function GuidelinesLayout() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--ws-paper)] text-[var(--ws-ink)]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col px-5 md:flex-row md:px-8">
        <aside className="border-b border-[var(--grey-200)] py-6 md:sticky md:top-0 md:h-screen md:w-[260px] md:shrink-0 md:overflow-y-auto md:border-b-0 md:border-r md:py-10 md:pr-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoMark} alt="Wellsprings Academy" className="h-10 w-auto object-contain" />
          </Link>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-700)]">
            Brand guidelines
          </p>

          <button
            type="button"
            onClick={() => setNavOpen((v) => !v)}
            className="mt-4 inline-flex items-center gap-2 border border-[var(--grey-300)] px-3 py-2 text-xs md:hidden"
            aria-expanded={navOpen}
          >
            {navOpen ? <X size={14} /> : <Menu size={14} />}
            {navOpen ? "Close" : "Sections"}
          </button>

          <nav className={`mt-6 flex-col gap-1 md:flex ${navOpen ? "flex" : "hidden md:flex"}`}>
            {GUIDELINE_NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setNavOpen(false)}
                  className={`border-l-2 py-2 pl-3 text-sm transition-colors ${
                    active
                      ? "border-[var(--ws-ink)] text-[var(--ws-ink)]"
                      : "border-transparent text-[var(--grey-700)] hover:border-[var(--grey-400)] hover:text-[var(--ws-ink)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-10 border-t border-[var(--grey-200)] pt-6">
            <Link
              to="/"
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-700)] hover:text-[var(--ws-ink)]"
            >
              ← Back to website
            </Link>
          </div>
        </aside>

        <main className="flex-1 py-10 md:py-14 md:pl-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavRow({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const Icon = item.icon;
  const inSection =
    item.to === "/"
      ? pathname === "/"
      : pathname === item.to || pathname.startsWith(`${item.to}/`);
  const [open, setOpen] = useState(inSection);

  // Re-open if user navigates into this section
  useEffect(() => {
    if (inSection) setOpen(true);
  }, [inSection]);

  if (item.children && item.children.length > 0) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={`group flex w-full items-center gap-4 rounded-md px-4 py-3 text-left text-[15px] transition-colors ${
            inSection
              ? "bg-[var(--grey-100)] text-[var(--coral-600)]"
              : "text-[var(--ws-ink)] hover:bg-[var(--grey-100)] hover:text-[var(--coral-600)]"
          }`}
        >
          <Icon
            size={18}
            strokeWidth={1.6}
            className={`shrink-0 ${
              inSection
                ? "text-[var(--coral-600)]"
                : "text-[var(--grey-700)] group-hover:text-[var(--coral-600)]"
            }`}
          />
          <span className="flex-1">{item.label}</span>
          <ChevronDown
            size={16}
            strokeWidth={1.6}
            className={`shrink-0 transition-transform ${open ? "rotate-180" : ""} ${
              inSection ? "text-[var(--coral-600)]" : "text-[var(--grey-700)]"
            }`}
          />
        </button>
        {open && (
          <div className="ml-6 mt-1 mb-2 flex flex-col border-l border-[var(--grey-200)] pl-3">
            {item.children.map((child) => {
              const childActive =
                pathname === child.to ||
                (child.to !== item.to && pathname.startsWith(`${child.to}/`));
              return (
                <Link
                  key={child.to}
                  to={child.to}
                  onClick={onNavigate}
                  className={`rounded-md px-3 py-2 text-[14px] transition-colors ${
                    childActive
                      ? "text-[var(--coral-600)]"
                      : "text-[var(--grey-800)] hover:text-[var(--coral-600)]"
                  }`}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.to}
      onClick={onNavigate}
      className={`group relative flex items-center gap-4 rounded-md px-4 py-3 text-[15px] transition-colors ${
        inSection
          ? "bg-[var(--grey-100)] text-[var(--coral-600)]"
          : "text-[var(--ws-ink)] hover:bg-[var(--grey-100)] hover:text-[var(--coral-600)]"
      } ${item.sublabel ? "bg-[var(--sun-100)]/20" : ""}`}
    >
      {item.sublabel && (
        <span
          className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-sm bg-[var(--sun-700)]"
          aria-hidden
        />
      )}
      <Icon
        size={18}
        strokeWidth={1.6}
        className={`shrink-0 ${
          inSection
            ? "text-[var(--coral-600)]"
            : "text-[var(--grey-700)] group-hover:text-[var(--coral-600)]"
        }`}
      />
      <div className="flex flex-col">
        <span>{item.label}</span>
        {item.sublabel && (
          <span className="font-mono text-[11px] text-[var(--sun-700)]">{item.sublabel}</span>
        )}
      </div>
    </Link>
  );
}

function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  const overHero = location.pathname === "/";

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Header goes transparent over the home hero, solid once past it
  useEffect(() => {
    if (!overHero) {
      setScrolledPastHero(true);
      return;
    }
    const onScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const transparent = overHero && !scrolledPastHero;

  // Lock body scroll + ESC to close while drawer is open
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--ws-paper)] text-[var(--ws-ink)]">
      <header
        id="site-header"
        className={`top-0 z-50 transition-colors duration-500 ${
          overHero ? "fixed inset-x-0" : "sticky"
        } ${
          transparent
            ? "border-b border-transparent bg-transparent text-white"
            : "border-b border-[var(--grey-200)] bg-white text-[var(--ws-ink)]"
        }`}
      >

        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-3 px-5 py-3 md:gap-6 md:px-8">
          {/* Left: logo */}
          <Link
            to="/"
            className="relative z-10 flex shrink-0 items-center"
            aria-label="Wellsprings Academy — home"
          >
            <img
              src={logoMark}
              alt="Wellsprings Academy"
              className={`h-14 w-auto object-contain transition-[filter] duration-500 md:h-24 ${
                transparent ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Centre: motto — on every page, hidden only over the home hero */}
          <div className="hidden justify-center md:flex">
            {!transparent && (
              <p className="font-mono text-[11px] uppercase tracking-[0.28em]">
                <span style={{ color: "var(--coral-600)" }}>Think</span>
                <span className="mx-2 text-[var(--grey-500)]">·</span>
                <span style={{ color: "var(--sun-700)" }}>Build</span>
                <span className="mx-2 text-[var(--grey-500)]">·</span>
                <span style={{ color: "var(--sage-700)" }}>Belong</span>
              </p>
            )}
          </div>

          {/* Right: phone pill (desktop) + hamburger (always) */}
          <div className="flex items-center justify-end gap-2">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className={`hidden items-center gap-2 border px-3 py-2 text-xs font-medium transition-colors md:inline-flex ${
                transparent
                  ? "border-white/50 text-white hover:border-white"
                  : "border-[var(--grey-300)] text-[var(--ws-ink)] hover:border-[var(--ws-ink)]"
              }`}
            >
              <Phone size={14} strokeWidth={1.6} />
              <span className="font-sans tracking-[0.02em]">{SITE_PHONE_DISPLAY}</span>
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="site-drawer"
              onClick={() => setMobileOpen(true)}
              className={`inline-flex h-11 w-11 items-center justify-center border transition-colors ${
                transparent
                  ? "border-white/60 text-white hover:bg-white hover:text-[var(--ws-ink)]"
                  : "border-[var(--ws-ink)] text-[var(--ws-ink)] hover:bg-[var(--ws-ink)] hover:text-white"
              }`}
            >
              <Menu size={18} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>


      {/* Right-side slide-in drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-[var(--ws-ink)]/40 backdrop-blur-[2px] transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          id="site-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute right-0 top-0 flex h-full w-[88vw] max-w-[420px] flex-col bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.45)] transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[var(--grey-200)] px-6 py-5">
            <span className="font-serif text-2xl text-[var(--ws-ink)]">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center text-[var(--ws-ink)] transition-colors hover:text-[var(--coral-600)]"
            >
              <X size={20} strokeWidth={1.6} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4">

            {/* Theme of the Year feature card — featured at top of nav */}
            <div className="mb-3 border-b border-[var(--grey-200)] pb-3">
              <Link
                to="/theme-of-the-year"
                onClick={() => setMobileOpen(false)}
                className="group relative block overflow-hidden border border-[var(--sun-200)] bg-[color-mix(in_oklab,var(--sun-100)_18%,var(--ws-paper))] px-3 py-3"
              >
                <div className="flex items-center gap-3">
                  <RootsToWings className="h-10 w-auto shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--sun-700)]">
                      Theme · 2026–27
                    </p>
                    <h3 className="mt-0.5 text-[15px] leading-tight">
                      <span className="text-[var(--sun-700)]">Roots</span>{" "}
                      <span className="text-[var(--grey-500)]">to</span>{" "}
                      <span className="text-[var(--coral-600)]">Wings</span>
                    </h3>
                  </div>
                  <ArrowRight size={14} strokeWidth={1.6} className="shrink-0 text-[var(--ws-ink)] transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </div>

            {SITE_NAV.map((item) => (
              <NavRow
                key={item.to}
                item={item}
                pathname={location.pathname}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}

          </nav>



          <div className="border-t border-[var(--grey-200)] px-6 py-5">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="flex items-center gap-3 text-[15px] text-[var(--ws-ink)] hover:text-[var(--coral-600)]"
            >
              <Phone size={18} strokeWidth={1.6} className="text-[var(--grey-700)]" />
              <span className="font-sans tracking-[0.02em]">{SITE_PHONE_DISPLAY}</span>
            </a>
          </div>
        </aside>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Floating call pill — bottom right, compact, doesn't cover footer */}
      <a
        href={`tel:${SITE_PHONE_TEL}`}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--ws-ink)] px-5 py-3 text-sm font-medium text-white shadow-[0_18px_40px_-12px_rgba(15,23,42,0.4)] transition-colors hover:bg-[var(--coral-600)] md:bottom-6 md:right-6"
        aria-label={`Call admissions ${SITE_PHONE_DISPLAY}`}
      >
        <Phone size={15} strokeWidth={1.8} />
        <span className="hidden sm:inline">Call admissions</span>
        <span className="sm:hidden">Call</span>
      </a>

      <SiteFooter />
    </div>
  );
}
