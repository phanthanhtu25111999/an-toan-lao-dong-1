import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group h-full gap-4 border-border/80 py-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <CardHeader>
        <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <service.icon className="size-6" />
        </span>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <h3 className="font-heading text-lg font-semibold">{service.title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{service.shortDescription}</p>
        <Link
          href={`/dich-vu/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          Xem chi tiết
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
