import { getFeaturedPosts } from "@/lib/blog";
import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { CategoriesSection } from "@/components/sections/categories";
import { FeaturedPostsSection } from "@/components/sections/featured-posts";
import { CtaSection } from "@/components/sections/cta";
import { ToolsPreviewSection } from "@/components/sections/tools-preview";
import { NewsletterSection } from "@/components/sections/newsletter";

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts(3);

  return (
    <>
      <HeroSection />
      <TrustSection />
      <CategoriesSection />
      <FeaturedPostsSection posts={featuredPosts} />
      <CtaSection />
      <ToolsPreviewSection />
      <NewsletterSection />
    </>
  );
}
