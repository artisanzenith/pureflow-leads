"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-surface-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
            <Zap className="h-4 w-4" />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Pure<span className="text-brand-600 dark:text-brand-400">Flow</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            "mega" in item && item.mega ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {item.label}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", megaOpen && "rotate-180")} />
                </button>
                {megaOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-[520px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                      <div className="grid grid-cols-2 gap-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-xl p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                          >
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">{child.label}</p>
                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{child.description}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800">
                        <Link
                          href="/blog"
                          className="text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
                        >
                          View all insights →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />
          <Button href="/blog" size="sm" className="hidden sm:inline-flex">
            Start reading
          </Button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 lg:hidden dark:border-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden dark:border-slate-800 dark:bg-surface-950">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) =>
              "mega" in item && item.mega ? (
                <div key={item.label} className="space-y-1">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {child.label}
                    </Link>
                  ))}
                  <Link
                    href="/blog"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-600 dark:text-brand-400"
                  >
                    All articles
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-3 dark:border-slate-800">
              <ThemeToggle />
              <Button href="/blog" size="sm" className="flex-1 justify-center">
                Start reading
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
