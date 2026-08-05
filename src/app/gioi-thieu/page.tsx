import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StructuredData } from "@/components/shared/structured-data";
import { CtaSection } from "@/components/home/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { images } from "@/content/images";
import { companyHistory, vision, mission, coreValues } from "@/content/about";
import { teamGroups } from "@/content/team";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Giới thiệu công ty",
  description:
    "Tìm hiểu lịch sử hình thành, tầm nhìn, sứ mệnh, giá trị cốt lõi và đội ngũ của Công ty TNHH Huấn Luyện An Toàn 1.",
  path: "/gioi-thieu",
});

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Giới thiệu", path: "/gioi-thieu" }])}
      />
      <PageHero
        title="Giới thiệu công ty"
        description="Đồng hành cùng doanh nghiệp xây dựng môi trường làm việc an toàn, tuân thủ đúng quy định pháp luật."
        image={images.about}
        breadcrumb={[{ name: "Giới thiệu", path: "/gioi-thieu" }]}
      />

      <section className="py-20 sm:py-24">
        <Container className="mx-auto flex max-w-3xl flex-col gap-6">
          <AnimatedSection>
            <SectionHeading align="left" title={companyHistory.title} />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex flex-col gap-4">
            {companyHistory.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground sm:text-lg">
                {paragraph}
              </p>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-24">
        <Container className="grid gap-6 sm:grid-cols-2">
          {[vision, mission].map((item) => (
            <AnimatedSection key={item.title}>
              <Card className="h-full py-8">
                <CardContent className="flex flex-col gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-6" />
                  </span>
                  <h2 className="font-heading text-xl font-bold">{item.title}</h2>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="Giá trị cốt lõi" title="Điều làm nên sự khác biệt" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <Card className="h-full py-6 text-center">
                  <CardContent className="flex flex-col items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <value.icon className="size-6" />
                    </span>
                    <h3 className="font-heading text-base font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="Đội ngũ" title="Đội ngũ chuyên môn" subtitle="Cơ cấu nhân sự chuyên môn đồng hành trong từng dịch vụ." />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamGroups.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.08}>
                <Card className="h-full py-6 text-center">
                  <CardContent className="flex flex-col items-center gap-3">
                    <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <group.icon className="size-6" />
                    </span>
                    <h3 className="font-heading text-base font-semibold">{group.title}</h3>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
