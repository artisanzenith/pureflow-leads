import {
  Calculator,
  Sparkles,
  PieChart,
  DollarSign,
  Lightbulb,
  Bell,
} from "lucide-react";
import { FREE_TOOLS } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsletterSection } from "@/components/sections/newsletter";

export const metadata = createMetadata({
  title: "Free Business Tools",
  description:
    "Free calculators and generators for ROI, marketing budgets, lead costs, email subjects, and business naming.",
  path: "/tools",
});

const iconMap = {
  Calculator,
  Sparkles,
  PieChart,
  DollarSign,
  Lightbulb,
} as const;

export default function ToolsPage() {
  return (
    <div>
      <section className="section-padding mx-auto max-w-7xl border-b border-slate-200 dark:border-slate-800">
        <Badge variant="brand" className="mb-4">
          Launching 2025
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Free business tools</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Practical calculators and generators built for founders, agencies, and marketing teams. No fluff—just
          numbers you can act on.
        </p>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FREE_TOOLS.map((tool) => {
            const Icon = iconMap[tool.icon as keyof typeof iconMap];
            return (
              <Card key={tool.slug} hover className="flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 dark:from-brand-900/50 dark:to-brand-800/30 dark:text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant="muted">Coming soon</Badge>
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{tool.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {tool.description}
                </p>
                <Button variant="outline" size="sm" className="mt-6 w-full" disabled>
                  <Bell className="h-4 w-4" />
                  Notify me at launch
                </Button>
              </Card>
            );
          })}
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
