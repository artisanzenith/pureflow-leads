"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

// Note: metadata export must be in a separate file for client components - we'll use layout or move form

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Contact us</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Partnership inquiries, editorial pitches, or general questions—we read every message and respond within
              2 business days.
            </p>
            <div className="mt-8 space-y-4">
              <Card hover={false}>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Editorial & partnerships</p>
                <a
                  href="mailto:hello@thepureflowleads.com"
                  className="mt-1 text-sm text-brand-600 hover:underline dark:text-brand-400"
                >
                  hello@thepureflowleads.com
                </a>
              </Card>
              <Card hover={false}>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Press & media</p>
                <a
                  href="mailto:press@thepureflowleads.com"
                  className="mt-1 text-sm text-brand-600 hover:underline dark:text-brand-400"
                >
                  press@thepureflowleads.com
                </a>
              </Card>
            </div>
          </div>

          <Card hover={false} className="p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-brand-600" />
                <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Message sent</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input label="First name" name="firstName" required placeholder="Jane" />
                  <Input label="Last name" name="lastName" required placeholder="Smith" />
                </div>
                <Input label="Email" name="email" type="email" required placeholder="you@company.com" />
                <Input label="Company" name="company" placeholder="Acme Inc." />
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">Partnership / sponsorship</option>
                    <option value="editorial">Editorial pitch</option>
                    <option value="tools">Free tools feedback</option>
                    <option value="general">General inquiry</option>
                  </select>
                </div>
                <Textarea label="Message" name="message" required rows={5} placeholder="How can we help?" />
                <Button type="submit" className="w-full">
                  Send message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
