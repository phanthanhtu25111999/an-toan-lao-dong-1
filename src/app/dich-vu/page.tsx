import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StructuredData } from "@/components/shared/structured-data";
import { CtaSection } from "@/components/home/cta-section";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/content/services";
import { images } from "@/content/images";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dịch vụ",
  description:
    "Huấn luyện an toàn lao động, huấn luyện an toàn hóa chất, chứng chỉ y tế lao động, đào tạo vận hành thiết bị nghiêm ngặt, tư vấn đánh giá rủi ro, kiểm định an toàn thiết bị và quan trắc môi trường lao động.",
  path: "/dich-vu",
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: "Dịch vụ", path: "/dich-vu" }])} />
      <PageHero
        title="Dịch vụ của chúng tôi"
        description="Giải pháp an toàn lao động toàn diện cho doanh nghiệp, nhà máy và khu công nghiệp."
        image={images.ctaBanner}
        breadcrumb={[{ name: "Dịch vụ", path: "/dich-vu" }]}
      />
      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={(index % 3) * 0.08}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
