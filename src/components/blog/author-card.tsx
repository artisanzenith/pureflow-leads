import type { Author } from "@/lib/blog";

type AuthorCardProps = {
  author: Author;
};

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-lg font-bold text-white">
        {author.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">{author.name}</p>
        <p className="text-sm text-brand-600 dark:text-brand-400">{author.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{author.bio}</p>
      </div>
    </div>
  );
}
