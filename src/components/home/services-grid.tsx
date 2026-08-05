import { services } from "@/content/services";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ServiceCard } from "@/components/services/service-card";

export function ServicesGrid() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Dịch vụ nổi bật"
          subtitle="Giải pháp an toàn lao động toàn diện, đáp ứng nhu cầu đa dạng của doanh nghiệp, nhà máy và công trình xây dựng."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={(index % 3) * 0.08}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
