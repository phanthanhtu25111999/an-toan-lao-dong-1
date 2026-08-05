import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaq } from "@/content/faq";

export function FaqSection() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <Container className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading
          eyebrow="Hỏi đáp"
          title="Câu hỏi thường gặp"
          subtitle="Một số thắc mắc phổ biến của doanh nghiệp khi tìm hiểu dịch vụ."
        />
        <AnimatedSection>
          <Accordion className="rounded-2xl border bg-background px-5">
            {homeFaq.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </Container>
    </section>
  );
}
