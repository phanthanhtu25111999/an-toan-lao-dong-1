import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { StructuredData } from "@/components/shared/structured-data";
import { NewsFilters } from "@/components/news/news-filters";
import { getAllPosts, getCategories } from "@/lib/mdx";
import { images } from "@/content/images";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tin tức",
  description: "Cập nhật kiến thức, quy định pháp luật và tin tức mới nhất về an toàn lao động.",
  path: "/tin-tuc",
});

export default function NewsPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: "Tin tức", path: "/tin-tuc" }])} />
      <PageHero
        title="Tin tức - Kiến thức an toàn"
        description="Cập nhật quy định pháp luật, kiến thức và hoạt động mới nhất về an toàn lao động."
        image={images.ctaBanner}
        breadcrumb={[{ name: "Tin tức", path: "/tin-tuc" }]}
      />
      <section className="py-20 sm:py-24">
        <Container>
          <NewsFilters posts={posts} categories={categories} />
        </Container>
      </section>
    </>
  );
}
