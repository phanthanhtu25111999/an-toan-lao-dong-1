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
              className="flex flex-col items-center gap-3 rounded-xl border bg-card p-4 transition-shadow hover:shadow-md"
            >
              <div className="flex h-16 w-full items-center justify-center overflow-hidden rounded-lg">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={64}
                    className="h-full w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="text-center text-sm font-bold tracking-wide text-foreground/80">
                    {partner.name}
                  </span>
                )}
              </div>
              <span className="text-center text-xs font-medium text-muted-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
