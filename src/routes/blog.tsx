import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import {
  PageHero,
  MottoStrip,
  SectionShell,
  SectionEyebrow,
} from "@/components/page/Primitives";
import { ImagePlaceholder } from "@/components/page/ImagePlaceholder";
import { BlogCard, PillarTag } from "@/components/blog/BlogCard";
import { BLOG_POSTS, COVER } from "@/data/blog-posts";
import heroImage from "@/assets/photos/blog-01-hero.webp";
import { MoreToExplore } from "@/components/page/MoreToExplore";
import xAbout1 from "@/assets/photos/why-01-hero.webp";
import xCurr from "@/assets/photos/curr-01-hero.webp";
import xLife from "@/assets/photos/life-01-hero.webp";
import xAdm from "@/assets/photos/adm-01-hero.webp";
import xAboutP from "@/assets/photos/about-01-hero.webp";
import xBlog from "@/assets/photos/blog-01-hero.webp";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Notes from school — The Wellsprings blog | Wellsprings Academy" },
      {
        name: "description",
        content:
          "Short, honest notes from inside the classroom — what children thought, built and belonged to this week. Written by teachers at Wellsprings.",
      },
      { property: "og:title", content: "Notes from school — Wellsprings Academy" },
      {
        property: "og:description",
        content: "Honest, three-beat notes from teachers at Wellsprings. Think · Build · Belong.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--sage-700)" } as CSSProperties}>
      <PageHero
        eyebrow="Notes from school"
        pillar="Belong"
        title={
          <>
            What we
            <br />
            <span className="text-[var(--sage-700)]">noticed this week</span>.
          </>
        }
        intro={
          <p>
            Short notes from inside the classroom, written by the teachers who were there.
            Three beats: what children <em>thought</em>, what they <em>built</em>, what they
            <em> belonged to</em>. No marketing, no superlatives — just the week, told honestly.
          </p>
        }
        image={heroImage}
        imageAlt="A teacher writing a short note at the end of the school day"
        imageCaption="Friday afternoon, writing the week down."
      />

      <MottoStrip tier={1} />

      {/* Featured */}
      <section className="border-t border-[var(--grey-200)] bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-20">
          <SectionEyebrow pillar="Belong">This week's note</SectionEyebrow>
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group mt-6 block overflow-hidden border border-[var(--grey-200)] bg-white transition-colors hover:border-[var(--ws-ink)]"
          >
            <ImagePlaceholder ratio="21/9" category={COVER[featured.pillar]} />
            <div className="grid gap-6 p-7 md:grid-cols-[1.4fr_0.6fr] md:items-end md:p-10">
              <div>
                <PillarTag pillar={featured.pillar} />
                <h2 className="mt-3 font-serif text-3xl leading-[1.1] text-[var(--ws-ink)] transition-colors group-hover:text-[var(--coral-600)] md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-[60ch] text-[16px] leading-[1.7] text-[var(--grey-800)] md:text-[17px]">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between md:flex-col md:items-end md:gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
                  {featured.date}
                  <br className="hidden md:block" />
                  <span className="md:hidden"> · </span>
                  {featured.author}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ws-ink)] transition-colors group-hover:text-[var(--coral-600)]">
                  Read the note
                  <ArrowRight size={16} strokeWidth={1.6} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* More notes */}
      <section className="border-t border-[var(--grey-200)] bg-[var(--ws-paper)]">
        <div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-20">
          <SectionEyebrow pillar="Belong">More notes</SectionEyebrow>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <SectionShell background="paper">
        <div className="grid gap-8 border border-dashed border-[var(--grey-400)] bg-white p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <SectionEyebrow pillar="Belong">Stay in the loop</SectionEyebrow>
            <h3 className="mt-3 font-serif text-2xl text-[var(--ws-ink)] md:text-3xl">
              Get the next note in your inbox.
            </h3>
            <p className="mt-3 max-w-[55ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
              We publish a short note when there's something worth telling. No spam, no newsletters for the sake of it.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[var(--ws-ink)] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[var(--coral-600)]"
          >
            <Mail size={15} strokeWidth={1.6} />
            Ask to be notified
          </a>
        </div>
      </SectionShell>

      <MoreToExplore
        cards={[
          {
            title: "Why Wellsprings",
            body:
              "The seven things we work on through the year, and what you can look for when you visit.",
            href: "/why-wellsprings",
            label: "What we focus on",
            image: xAbout1,
            imageAlt: "A Wellsprings child reading in a morning class",
          },
          {
            title: "What your child learns",
            body:
              "From pre-primary to secondary, how the CBSE curriculum is taught here, year by year.",
            href: "/curriculum",
            label: "See the curriculum",
            image: xCurr,
            imageAlt: "Children at work in a Wellsprings classroom",
          },
          {
            title: "Joining Wellsprings",
            body:
              "How admissions work, what we need from you, and how to book a visit to the campus.",
            href: "/admissions",
            label: "Admissions",
            image: xAdm,
            imageAlt: "A parent and child at the Wellsprings admissions desk",
          },
        ]}
      />
    </div>
  );
}
