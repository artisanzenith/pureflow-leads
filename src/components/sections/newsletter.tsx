import { NewsletterForm } from "@/components/newsletter-form";

export function NewsletterSection() {
  return (
    <section className="section-padding mx-auto max-w-7xl">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="lg:max-w-md">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            The Weekly Growth Brief
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            One email. Three tactics. Zero spam. Join 45,000+ US operators who start Monday with clarity.
          </p>
        </div>
        <NewsletterForm className="mt-6 w-full lg:mt-0 lg:max-w-md" />
      </div>
    </section>
  );
}
