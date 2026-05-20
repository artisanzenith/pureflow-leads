import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { LegalContent } from "@/components/legal/legal-content";
import {
  privacyPolicy,
  termsAndConditions,
  disclaimer,
  cookiePolicy,
} from "@/lib/legal-content";

const legalPages: Record<string, typeof privacyPolicy> = {
  "privacy-policy": privacyPolicy,
  "terms-and-conditions": termsAndConditions,
  disclaimer: disclaimer,
  "cookie-policy": cookiePolicy,
};

type LegalPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) return {};
  return createMetadata({
    title: page.title,
    description: `${page.title} for PureFlow Leads (thepureflowleads.com).`,
    path: `/legal/${slug}`,
  });
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) notFound();

  return <LegalContent title={page.title} lastUpdated={page.lastUpdated} sections={page.sections} />;
}
