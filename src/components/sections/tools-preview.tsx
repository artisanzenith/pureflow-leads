import Link from "next/link";
import {
  Calculator,
  Sparkles,
  PieChart,
  DollarSign,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { FREE_TOOLS } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap = {
  Calculator,
  Sparkles,
  PieChart,
  DollarSign,
  Lightbulb,
} as const;

export function ToolsPreviewSection() {
  return (
    <section className="section-padding mx-auto max-w-7xl">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Free business tools</h2>
          <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-400">
            Calculators and generators to make smarter decisions—no signup required when they launch.
          </p>
        </div>
        <Button href="/tools" variant="ghost">
          View all tools
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FREE_TOOLS.slice(0, 3).map((tool) => {
          const Icon = iconMap[tool.icon as keyof typeof iconMap];
          return (
            <Link key={tool.slug} href="/tools">
              <Card className="h-full">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge variant="muted">Coming soon</Badge>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{tool.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{tool.description}</p>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
