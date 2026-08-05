import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StructuredData } from "@/components/shared/structured-data";
import { Card, CardContent } from "@/components/ui/card";
import { ContactInfo } from "@/components/contact/contact-info";
import { GoogleMap } from "@/components/contact/google-map";
import { ContactForm } from "@/components/contact/contact-form";
import { images } from "@/content/images";
import { siteConfig } from "@/content/site-config";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Liên hệ",
  description: `Liên hệ ${siteConfig.name} qua hotline ${siteConfig.hotline} (${siteConfig.contactPerson}) hoặc để lại thông tin để được tư vấn.`,
  path: "/lien-he",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: "Liên hệ", path: "/lien-he" }])} />
      <PageHero
        title="Liên hệ với chúng tôi"
        description="Đội ngũ tư vấn sẵn sàng hỗ trợ doanh nghiệp của bạn."
        image={images.contactBanner}
        breadcrumb={[{ name: "Liên hệ", path: "/lien-he" }]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <AnimatedSection className="flex flex-col gap-6">
            <ContactInfo />
            <GoogleMap />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="h-full py-8">
              <CardContent className="flex flex-col gap-6">
                <div>
                  <h2 className="font-heading text-xl font-bold">Gửi yêu cầu tư vấn</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                  </p>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
