import Link from "next/link";
import {
  Target,
  TrendingUp,
  Wrench,
  Bot,
  Users,
  Mail,
  Filter,
  ArrowRight,
} from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import { Card } from "@/components/ui/card";

const iconMap = {
  Target,
  TrendingUp,
  Wrench,
  Bot,
  Users,
  Mail,
  Filter,
} as const;

export function CategoriesSection() {
  return (
    <section className="section-padding mx-auto max-w-7xl">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Explore by topic
          </h2>
          <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-400">
            Deep-dive guides across the disciplines that drive measurable business growth.
          </p>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
        >
          View all articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon as keyof typeof iconMap];
          return (
            <Link key={cat.slug} href={`/category/${cat.slug}`} className="group">
              <Card className="h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2 dark:text-slate-400">{cat.description}</p>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
