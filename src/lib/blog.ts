import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { slugify } from "./utils";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type Author = {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  htmlContent: string;
  date: string;
  updatedAt?: string;
  category: string;
  categorySlug: string;
  author: Author;
  readingTime: number;
  featured?: boolean;
  tags: string[];
  tableOfContents: { id: string; title: string; level: number }[];
};

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function extractTableOfContents(content: string): Post["tableOfContents"] {
  const headings: Post["tableOfContents"] = [];
  const regex = /^#{2,3}\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const level = match[0].startsWith("###") ? 3 : 2;
    const title = match[1].trim();
    headings.push({ id: slugify(title), title, level });
  }
  return headings;
}

function addHeadingIds(htmlContent: string, toc: Post["tableOfContents"]): string {
  let result = htmlContent;
  toc.forEach(({ id, title }) => {
    const tag = result.includes(`<h3>${title}</h3>`) ? "h3" : "h2";
    result = result.replace(
      new RegExp(`<${tag}>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</${tag}>`),
      `<${tag} id="${id}">${title}</${tag}>`
    );
  });
  return result;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const processed = await remark().use(html, { sanitize: false }).process(content);
    const toc = extractTableOfContents(content);
    const htmlContent = addHeadingIds(processed.toString(), toc);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      htmlContent,
      date: data.date,
      updatedAt: data.updatedAt,
      category: data.category,
      categorySlug: data.categorySlug,
      author: data.author,
      readingTime: calculateReadingTime(content),
      featured: data.featured ?? false,
      tags: data.tags ?? [],
      tableOfContents: toc,
    };
  } catch {
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts
    .filter((p): p is Post => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedPosts(limit = 3): Promise<Post[]> {
  const posts = await getAllPosts();
  const featured = posts.filter((p) => p.featured);
  return (featured.length >= limit ? featured : posts).slice(0, limit);
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.categorySlug === categorySlug);
}

export async function getRelatedPosts(
  currentSlug: string,
  categorySlug: string,
  limit = 3
): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts
    .filter((p) => p.slug !== currentSlug && p.categorySlug === categorySlug)
    .slice(0, limit);
}

export async function searchPosts(query: string): Promise<Post[]> {
  const posts = await getAllPosts();
  const q = query.toLowerCase().trim();
  if (!q) return posts;
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
  );
}
