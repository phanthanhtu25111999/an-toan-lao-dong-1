import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { newsCovers } from "@/content/images";

const NEWS_DIR = path.join(process.cwd(), "src/content/news");

export type PostFrontmatter = {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  cover?: string;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
  cover: string;
  readingTime: number;
};

export type Post = PostSummary & {
  content: string;
};

function readingTimeFromContent(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function coverForSlug(slug: string, explicit?: string) {
  if (explicit) return explicit;
  const index = slug
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return newsCovers[index % newsCovers.length];
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(NEWS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(NEWS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  return {
    ...frontmatter,
    slug,
    cover: coverForSlug(slug, frontmatter.cover),
    readingTime: readingTimeFromContent(content),
    content,
  };
}

function toSummary({ content, ...summary }: Post): PostSummary {
  void content;
  return summary;
}

export function getAllPosts(): PostSummary[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => Boolean(post))
    .map(toSummary)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCategories(): string[] {
  const categories = new Set(getAllPosts().map((post) => post.category));
  return Array.from(categories);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): PostSummary[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}
