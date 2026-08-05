import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { AboutIntro } from "@/components/home/about-intro";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { ClientLogos } from "@/components/home/client-logos";
import { Testimonials } from "@/components/home/testimonials";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";
import { StructuredData } from "@/components/shared/structured-data";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { homeFaq } from "@/content/faq";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Huấn luyện - Kiểm định - Quan trắc - Tư vấn An toàn`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={faqJsonLd(homeFaq)} />
      <HeroSection />
      <AboutIntro />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessTimeline />
      <ClientLogos />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </>
  );
}
