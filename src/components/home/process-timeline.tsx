import Image from "next/image";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { processSteps } from "@/content/process";
import { images } from "@/content/images";

export function ProcessTimeline() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Quy trình"
          title="Quy trình làm việc"
          subtitle="Quy trình phối hợp rõ ràng, minh bạch giúp doanh nghiệp chủ động theo dõi tiến độ dịch vụ."
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={images.process}
              alt="Chuyên viên lên kế hoạch quy trình thực hiện dịch vụ"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>
          <AnimatedSection>
            <ol className="flex flex-col">
              {processSteps.map((step, index) => (
                <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
                  {index !== processSteps.length - 1 && (
                    <span className="absolute top-9 left-[15px] h-[calc(100%-1.5rem)] w-px bg-border" />
                  )}
                  <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
