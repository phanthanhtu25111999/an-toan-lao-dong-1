import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, ShieldCheck, Handshake } from "lucide-react";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { images } from "@/content/images";

const highlights = [
  { icon: Users, text: "Đội ngũ chuyên môn giàu kinh nghiệm" },
  { icon: Award, text: "Dịch vụ chuyên nghiệp, uy tín" },
  { icon: ShieldCheck, text: "Tuân thủ quy định pháp luật" },
  { icon: Handshake, text: "Đồng hành lâu dài cùng doanh nghiệp" },
];

export function AboutIntro() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <AnimatedSection className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image
            src={images.about}
            alt="Bắt tay hợp tác giữa doanh nghiệp và đội ngũ tư vấn an toàn lao động"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            Về chúng tôi
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Cùng doanh nghiệp xây dựng môi trường làm việc an toàn
          </h2>
          <p className="text-muted-foreground sm:text-lg">
            Công ty TNHH Huấn Luyện An Toàn 1 cung cấp giải pháp an toàn lao động
            toàn diện — từ huấn luyện, đào tạo nghề, kiểm định thiết bị đến quan
            trắc môi trường lao động và tư vấn an toàn, giúp doanh nghiệp tuân thủ
            đúng quy định pháp luật và bảo vệ người lao động.
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item.text} className="flex items-center gap-2.5 text-sm font-medium">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-4" />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
          <Link
            href="/gioi-thieu"
            className="mt-2 inline-flex w-fit items-center gap-1.5 font-semibold text-primary"
          >
            Tìm hiểu thêm về chúng tôi
            <ArrowRight className="size-4" />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
