import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { StructuredData } from "@/components/shared/structured-data";
import { NewsCard } from "@/components/news/news-card";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/mdx";
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/tin-tuc/${post.slug}`,
    image: post.cover,
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category);

  return (
    <>
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "Tin tức", path: "/tin-tuc" },
            { name: post.title, path: `/tin-tuc/${post.slug}` },
          ]),
          articleJsonLd(post),
        ]}
      />
      <PageHero
        title={post.title}
        description={post.excerpt}
        image={post.cover}
        breadcrumb={[
          { name: "Tin tức", path: "/tin-tuc" },
          { name: post.title, path: `/tin-tuc/${post.slug}` },
        ]}
      />

      <article className="py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readingTime} phút đọc
            </span>
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-a:text-primary">
            <MDXRemote source={post.content} />
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-secondary/30 py-16 sm:py-20">
          <Container className="flex flex-col gap-10">
            <SectionHeading eyebrow="Xem thêm" title="Bài viết liên quan" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <NewsCard key={item.slug} post={item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
