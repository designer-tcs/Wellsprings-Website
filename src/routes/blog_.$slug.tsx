import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SectionEyebrow } from "@/components/page/Primitives";
import { ImagePlaceholder } from "@/components/page/ImagePlaceholder";
import { BlogCard, PillarTag } from "@/components/blog/BlogCard";
import { BLOG_POSTS, COVER, getPost } from "@/data/blog-posts";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    return {
      meta: [
        {
          title: post
            ? `${post.title} — Notes from school | Wellsprings Academy`
            : "Note not found | Wellsprings Academy",
        },
        { name: "description", content: post?.excerpt ?? "" },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--sage-700)" } as CSSProperties}>
        <div className="mx-auto w-full max-w-[680px] px-5 py-24 text-center">
          <h1 className="font-serif text-3xl text-[var(--ws-ink)]">We couldn't find that note.</h1>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ws-ink)] hover:text-[var(--coral-600)]"
          >
            <ArrowLeft size={16} strokeWidth={1.6} /> Back to all notes
          </Link>
        </div>
      </div>
    );
  }

  const others = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-[var(--ws-paper)]" style={{ ["--page-accent" as string]: "var(--sage-700)" } as CSSProperties}>
      <article>
        <div className="mx-auto w-full max-w-[760px] px-5 pt-12 md:pt-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--grey-700)] transition-colors hover:text-[var(--ws-ink)]"
          >
            <ArrowLeft size={14} strokeWidth={1.6} /> Notes from school
          </Link>
          <div className="mt-8">
            <PillarTag pillar={post.pillar} />
          </div>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-[var(--ws-ink)] md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
            {post.date} · {post.author}
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[1100px] px-5 md:px-8">
          <ImagePlaceholder ratio="21/9" category={COVER[post.pillar]} />
        </div>

        <div className="mx-auto w-full max-w-[680px] px-5 py-12 md:py-16">
          {post.body.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-[20px] leading-[1.7] text-[var(--ws-ink)]"
                  : "mt-6 text-[17px] leading-[1.85] text-[var(--grey-800)]"
              }
            >
              {para}
            </p>
          ))}
          <div className="mt-10 border-t border-[var(--grey-200)] pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--grey-700)]">
              {post.author}
            </p>
          </div>
        </div>
      </article>

      <section className="border-t border-[var(--grey-200)] bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-20">
          <SectionEyebrow pillar="Belong">More notes</SectionEyebrow>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {others.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
