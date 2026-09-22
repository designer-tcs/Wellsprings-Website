import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PILLAR_COLOR, type Pillar } from "@/components/page/Primitives";
import { ImagePlaceholder } from "@/components/page/ImagePlaceholder";
import { COVER, type BlogPost } from "@/data/blog-posts";

export function PillarTag({ pillar }: { pillar: Pillar }) {
  return (
    <span
      className="inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]"
      style={{ color: PILLAR_COLOR[pillar] }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: PILLAR_COLOR[pillar] }} aria-hidden />
      {pillar}
    </span>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col border border-[var(--grey-200)] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ws-ink)] hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
    >
      <ImagePlaceholder ratio="3/2" category={COVER[post.pillar]} />
      <div className="flex flex-1 flex-col p-6">
        <PillarTag pillar={post.pillar} />
        <h3 className="mt-3 font-serif text-xl leading-[1.25] text-[var(--ws-ink)] transition-colors group-hover:text-[var(--coral-600)]">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[14.5px] leading-[1.6] text-[var(--grey-800)]">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--grey-700)]">{post.date}</span>
          <ArrowRight size={15} strokeWidth={1.6} className="text-[var(--grey-400)] transition-colors group-hover:text-[var(--coral-600)]" />
        </div>
      </div>
    </Link>
  );
}
