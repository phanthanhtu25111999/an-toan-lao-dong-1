import Image from "next/image";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { whyUsItems } from "@/content/why-us";
import { images } from "@/content/images";

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 flex flex-col gap-8 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="Vì sao chọn chúng tôi"
            title="Đối tác an toàn lao động đáng tin cậy"
            subtitle="Cam kết chất lượng dịch vụ và đồng hành thực chất cùng doanh nghiệp trong từng dự án."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyUsItems.map((item, index) => (
              <AnimatedSection key={item.title} delay={(index % 2) * 0.1}>
                <Card className="h-full gap-2 py-5">
                  <CardContent className="flex flex-col gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </span>
                    <h3 className="font-heading text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedSection className="relative order-1 aspect-4/5 overflow-hidden rounded-2xl lg:order-2">
          <Image
            src={images.whyUs}
            alt="Trang bị bảo hộ lao động đạt chuẩn an toàn"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </AnimatedSection>
      </Container>
    </section>
  );
}
