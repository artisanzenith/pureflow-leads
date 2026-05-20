import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_TAGLINE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-white to-white dark:from-brand-950/30 dark:via-surface-950 dark:to-surface-950" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-500/5" />
      </div>

      <div className="section-padding mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="brand" className="mb-6">
            Trusted by 250K+ US business readers
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            The growth playbook for{" "}
            <span className="text-gradient">ambitious businesses</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
            {SITE_TAGLINE} PureFlow Leads delivers expert lead generation strategies, tool reviews, and free
            resources built for small businesses, agencies, and marketing teams across the USA.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/blog" size="lg">
              Explore insights
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/tools" variant="outline" size="lg">
              <Play className="h-4 w-4" />
              Free business tools
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-200/80 bg-white/60 p-2 shadow-2xl shadow-slate-200/50 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none">
          <div className="rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 p-8 sm:p-12">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { label: "Avg. pipeline lift", value: "+34%" },
                { label: "Tools reviewed", value: "50+" },
                { label: "Weekly guides", value: "3–5" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
