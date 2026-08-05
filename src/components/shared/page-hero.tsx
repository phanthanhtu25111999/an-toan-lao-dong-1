import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/shared/breadcrumb";

export function PageHero({
  title,
  description,
  image,
  breadcrumb,
}: {
  title: string;
  description?: string;
  image: string;
  breadcrumb: BreadcrumbItem[];
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-primary/60" />
      <Container className="relative flex flex-col gap-4">
        <Breadcrumb items={breadcrumb} variant="invert" />
        <h1 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-balance text-white/90 sm:text-lg">{description}</p>
        )}
      </Container>
    </section>
  );
}
