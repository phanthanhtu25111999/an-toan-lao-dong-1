import Image from "next/image";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { images } from "@/content/images";
import { siteConfig } from "@/content/site-config";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src={images.ctaBanner}
        alt="Nhà máy công nghiệp"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/90" />
      <Container className="relative">
        <AnimatedSection className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center text-primary-foreground">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Cần tư vấn về huấn luyện an toàn?
          </h2>
          <p className="text-balance text-primary-foreground/85 sm:text-lg">
            Liên hệ ngay với {siteConfig.contactPerson} để được tư vấn miễn phí và
            nhận báo giá phù hợp cho doanh nghiệp của bạn.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              render={<a href={siteConfig.hotlineHref} />}
              nativeButton={false}
              className="h-12 bg-cta px-6 text-base text-cta-foreground hover:bg-cta/90"
            >
              <Phone className="size-4.5" />
              Gọi ngay: {siteConfig.hotline}
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/lien-he" />}
              nativeButton={false}
              className="h-12 border-white/50 bg-white/10 px-6 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              <FileText className="size-4.5" />
              Lấy báo giá
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
