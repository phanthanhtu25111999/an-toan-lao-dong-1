"use client";

import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Khách hàng nói gì"
          title="Đánh giá từ khách hàng"
          subtitle="Một số chia sẻ minh họa từ các doanh nghiệp đã sử dụng dịch vụ (nội dung mang tính ví dụ)."
        />
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem key={item.name} className="sm:basis-1/2 lg:basis-1/3">
                <Card className="h-full py-6">
                  <CardContent className="flex h-full flex-col gap-4">
                    <Quote className="size-7 text-primary/40" />
                    <p className="flex-1 text-sm text-muted-foreground">{item.content}</p>
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
}
