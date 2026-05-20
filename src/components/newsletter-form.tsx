"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type NewsletterFormProps = {
  variant?: "inline" | "stacked";
  className?: string;
};

export function NewsletterForm({ variant = "inline", className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`flex items-center gap-2 text-brand-600 dark:text-brand-400 ${className}`}>
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        <p className="text-sm font-medium">You&apos;re subscribed. Check your inbox for confirmation.</p>
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <Button type="submit" className="w-full">
          Subscribe free
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-2 sm:flex-row ${className}`}>
      <Input
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="sm:flex-1"
        aria-label="Email address"
      />
      <Button type="submit" size="md" className="shrink-0">
        Subscribe
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
