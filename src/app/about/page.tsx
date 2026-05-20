import { createMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NewsletterSection } from "@/components/sections/newsletter";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "PureFlow Leads helps US small businesses, agencies, and marketers grow with expert lead generation content and free tools.",
  path: "/about",
});

const values = [
  {
    title: "Practitioner-first",
    description: "Every guide is written for operators who need tactics they can deploy this week—not theory for slide decks.",
  },
  {
    title: "USA market focus",
    description: "We prioritize regulations, benchmarks, and buying behavior relevant to American small businesses and agencies.",
  },
  {
    title: "Transparent recommendations",
    description: "Affiliate and sponsored content is always disclosed. Our editorial standards come before commission.",
  },
  {
    title: "Tools that earn trust",
    description: "Free calculators and resources are built to deliver real utility—the foundation for long-term audience loyalty.",
  },
];

const team = [
  { name: "Sarah Mitchell", role: "Editor-in-Chief", focus: "Lead gen & outbound" },
  { name: "James Chen", role: "Head of Research", focus: "SaaS & martech reviews" },
  { name: "Elena Rodriguez", role: "Growth Strategist", focus: "Funnels & conversion" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="section-padding mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Building the most trusted growth resource for US businesses
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {SITE_NAME} was founded on a simple belief: small businesses deserve the same quality of marketing
            intelligence that enterprise teams pay consultants thousands for. We publish actionable content,
            honest tool reviews, and free resources that help you acquire customers sustainably.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Whether you run a local agency, a bootstrapped SaaS, or a service business scaling past six figures,
            our mission is to give you clarity on what works—and what&apos;s noise—in modern lead generation.
          </p>
          <div className="mt-8 flex gap-4">
            <Button href="/blog">Read our insights</Button>
            <Button href="/contact" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What we stand for</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <Card key={v.title} hover={false}>
              <h3 className="font-semibold text-slate-900 dark:text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{v.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl border-t border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Editorial leadership</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Our team combines agency, in-house, and startup experience across B2B and B2C growth.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} hover={false}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm text-brand-600 dark:text-brand-400">{member.role}</p>
              <p className="mt-1 text-sm text-slate-500">{member.focus}</p>
            </Card>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
