import { Suspense } from "react";
import { getAllPosts, searchPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { PostCard } from "@/components/blog/post-card";
import { BlogSearch } from "@/components/blog/blog-search";
import { CategoryFilter } from "@/components/blog/category-filter";
import { NewsletterSection } from "@/components/sections/newsletter";

export const metadata = createMetadata({
  title: "Business Growth Insights & Guides",
  description:
    "Expert articles on lead generation, marketing tools, CRM, email marketing, and sales funnels for US businesses.",
  path: "/blog",
});

type BlogPageProps = {
  searchParams: Promise<{ q?: string; category?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  let posts = params.q ? await searchPosts(params.q) : await getAllPosts();

  if (params.category) {
    posts = posts.filter((p) => p.categorySlug === params.category);
  }

  return (
    <div>
      <section className="section-padding mx-auto max-w-7xl border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Insights</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Practical strategies for lead generation, growth, and the tools that power modern marketing teams.
        </p>
        <div className="mt-8 max-w-md">
          <Suspense fallback={<div className="h-10 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" />}>
            <BlogSearch />
          </Suspense>
        </div>
        <div className="mt-6">
          <Suspense fallback={null}>
            <CategoryFilter />
          </Suspense>
        </div>
        {params.q && (
          <p className="mt-4 text-sm text-slate-500">
            {posts.length} result{posts.length !== 1 ? "s" : ""} for &ldquo;{params.q}&rdquo;
          </p>
        )}
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">No articles found. Try a different search or category.</p>
        )}
      </section>

      <NewsletterSection />
    </div>
  );
}
