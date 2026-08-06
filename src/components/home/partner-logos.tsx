import Image from "next/image";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { partners } from "@/content/partners";

export function PartnerLogos() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Đối tác"
          title="Đối tác - Khách hàng tiêu biểu"
          subtitle="Một số đơn vị đã tin tưởng hợp tác cùng chúng tôi."
        />
        <AnimatedSection className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-24 items-center justify-center rounded-xl border bg-card px-4 py-3 grayscale transition-all hover:grayscale-0 hover:shadow-md"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="h-full w-auto object-contain"
                />
              ) : (
                <span className="text-center text-sm font-bold tracking-wide text-foreground/80">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
