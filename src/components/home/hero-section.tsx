"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { images } from "@/content/images";
import { siteConfig } from "@/content/site-config";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative flex min-h-[92vh] items-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <Image
          src={images.hero}
          alt="Công nhân mặc đầy đủ trang bị bảo hộ lao động tại công trường"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/55 to-slate-950/20" />
        <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
      </motion.div>

      <Container className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase ring-1 ring-border">
            {siteConfig.shortName}
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            Đối tác tin cậy trong lĩnh vực{" "}
            <span className="text-cta">Huấn luyện An toàn Lao động</span>
          </h1>
          <p className="mt-5 max-w-xl text-balance text-lg text-white/90 drop-shadow-sm">
            Đào tạo – Kiểm định – Quan trắc – Tư vấn An toàn chuyên nghiệp cho doanh
            nghiệp, nhà máy, khu công nghiệp và công trình xây dựng trên toàn quốc.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              render={<a href={siteConfig.hotlineHref} />}
              nativeButton={false}
              className="h-12 bg-cta px-6 text-base text-cta-foreground hover:bg-cta/90"
            >
              <Phone className="size-4.5" />
              Liên hệ ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/dich-vu" />}
              nativeButton={false}
              className="h-12 border-white/40 bg-white/10 px-6 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              Xem dịch vụ
              <ArrowRight className="size-4.5" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
