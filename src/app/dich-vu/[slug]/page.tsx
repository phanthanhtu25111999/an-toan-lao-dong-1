import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StructuredData } from "@/components/shared/structured-data";
import { ContactForm } from "@/components/contact/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { services, getServiceBySlug } from "@/content/services";
import { serviceImages } from "@/content/images";
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/dich-vu/${service.slug}`,
    image: serviceImages[service.slug]?.image,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const media = serviceImages[service.slug];

  return (
    <>
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "Dịch vụ", path: "/dich-vu" },
            { name: service.title, path: `/dich-vu/${service.slug}` },
          ]),
          serviceJsonLd(service),
          faqJsonLd(service.faq),
        ]}
      />
      <PageHero
        title={service.title}
        description={service.shortDescription}
        image={media.image}
        breadcrumb={[
          { name: "Dịch vụ", path: "/dich-vu" },
          { name: service.title, path: `/dich-vu/${service.slug}` },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <AnimatedSection className="flex flex-col gap-6">
            <SectionHeading align="left" eyebrow="Giới thiệu" title="Tổng quan dịch vụ" />
            <p className="text-muted-foreground sm:text-lg">{service.summary}</p>

            <div className="flex flex-col gap-3">
              <h3 className="flex items-center gap-2 font-heading text-lg font-semibold">
                <Users className="size-5 text-primary" />
                Đối tượng áp dụng
              </h3>
              <ul className="flex flex-col gap-2">
                {service.audience.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={media.gallery[0] ?? media.image}
              alt={service.title}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="Quy trình" title="Quy trình thực hiện" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <AnimatedSection key={step.title} delay={(index % 3) * 0.08}>
                <Card className="h-full py-6">
                  <CardContent className="flex flex-col gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <h3 className="font-heading text-base font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="Lợi ích" title="Lợi ích khi sử dụng dịch vụ" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <AnimatedSection key={benefit} delay={(index % 2) * 0.1}>
                <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium">{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {media.gallery.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {media.gallery.map((src, index) => (
                <AnimatedSection
                  key={src}
                  delay={index * 0.08}
                  className="relative aspect-video overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt={`${service.title} - hình ảnh minh họa ${index + 1}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </AnimatedSection>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-24">
        <Container className="mx-auto flex max-w-3xl flex-col gap-10">
          <SectionHeading eyebrow="Hỏi đáp" title="Câu hỏi thường gặp" />
          <Accordion className="rounded-2xl border bg-background px-5">
            {service.faq.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {service.legalNote && (
            <p className="text-center text-xs text-muted-foreground">{service.legalNote}</p>
          )}
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="mx-auto max-w-2xl">
          <Card className="py-8">
            <CardContent className="flex flex-col gap-6">
              <SectionHeading
                align="left"
                eyebrow="Liên hệ"
                title="Đăng ký tư vấn dịch vụ"
                subtitle="Để lại thông tin, chúng tôi sẽ liên hệ tư vấn trong thời gian sớm nhất."
              />
              <ContactForm defaultService={service.title} />
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
