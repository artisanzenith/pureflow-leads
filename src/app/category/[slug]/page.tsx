import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Target,
  TrendingUp,
  Wrench,
  Bot,
  Users,
  Mail,
  Filter,
} from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import { getPostsByCategory } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { PostCard } from "@/components/blog/post-card";
import { NewsletterSection } from "@/components/sections/newsletter";

const iconMap = {
  Target,
  TrendingUp,
  Wrench,
  Bot,
  Users,
  Mail,
  Filter,
} as const;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};
  return createMetadata({
    title: `${category.name} Guides & Resources`,
    description: category.description,
    path: `/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const posts = await getPostsByCategory(slug);
  const Icon = iconMap[category.icon as keyof typeof iconMap];

  return (
    <div>
      <section className="section-padding mx-auto max-w-7xl border-b border-slate-200 dark:border-slate-800">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400">
          <Icon className="h-7 w-7" />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{category.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{category.description}</p>
        <Link
          href="/blog"
          className="mt-4 inline-block text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
        >
          Browse all insights →
        </Link>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-slate-500">Articles coming soon in this category.</p>
        )}
      </section>

      <NewsletterSection />
    </div>
  );
}
