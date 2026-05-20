import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-padding mx-auto flex max-w-lg flex-col items-center text-center">
      <p className="text-6xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
      <Link href="/blog" className="mt-4 text-sm text-brand-600 hover:underline dark:text-brand-400">
        Browse insights
      </Link>
    </section>
  );
}
