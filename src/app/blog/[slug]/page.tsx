import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { SITE_URL } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/blog/post-card";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { AuthorCard } from "@/components/blog/author-card";
import { SchemaMarkup } from "@/components/schema-markup";
import { NewsletterSection } from "@/components/sections/newsletter";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updatedAt || post.date,
    authors: [post.author.name],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(slug, post.categorySlug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "PureFlow Leads",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };

  return (
    <article>
      <SchemaMarkup data={articleSchema} />

      <header className="section-padding mx-auto max-w-4xl border-b border-slate-200 dark:border-slate-800">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600 dark:hover:text-brand-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to insights
        </Link>
        <Link href={`/category/${post.categorySlug}`}>
          <Badge variant="brand" className="mb-4">
            {post.category}
          </Badge>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readingTime} min read
          </span>
          <span>·</span>
          <span>{post.author.name}</span>
        </div>
      </header>

      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <div
              className="prose-blog max-w-none"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="muted">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-12">
              <AuthorCard author={post.author} />
            </div>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={post.tableOfContents} />
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section-padding mx-auto max-w-7xl border-t border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Related articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <NewsletterSection />
    </article>
  );
}
