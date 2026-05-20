import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type PostCardProps = {
  post: Post;
  featured?: boolean;
};

export function PostCard({ post, featured }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className={featured ? "h-full lg:p-8" : "h-full"} hover>
        <div className="flex items-start justify-between gap-4">
          <Badge variant="brand">{post.category}</Badge>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
        </div>
        <h3
          className={`mt-4 font-semibold tracking-tight text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 ${
            featured ? "text-2xl lg:text-3xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>
        <p className={`mt-2 text-slate-600 dark:text-slate-400 ${featured ? "text-base line-clamp-3" : "text-sm line-clamp-2"}`}>
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime} min read
          </span>
        </div>
      </Card>
    </Link>
  );
}
