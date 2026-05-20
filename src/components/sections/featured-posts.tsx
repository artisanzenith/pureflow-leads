import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";

type FeaturedPostsSectionProps = {
  posts: Post[];
};

export function FeaturedPostsSection({ posts }: FeaturedPostsSectionProps) {
  const [featured, ...rest] = posts;

  return (
    <section className="section-padding mx-auto max-w-7xl bg-slate-50/50 dark:bg-slate-900/20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Featured insights</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Actionable strategies from practitioners who scale real businesses.
          </p>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
        >
          All articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {featured && (
          <div className="lg:row-span-2">
            <PostCard post={featured} featured />
          </div>
        )}
        <div className="grid gap-6">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
