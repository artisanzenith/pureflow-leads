import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from "./constants";

type PageMetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: PageMetadataProps = {}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Business Growth & Lead Generation`;

  const keywords = [
    "lead generation",
    "b2b lead generation 2025",
    "local service SEO 2025",
    "AI marketing automation",
    "CRM for small business",
    "email marketing 2025",
    "sales funnels",
  ];

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    keywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
