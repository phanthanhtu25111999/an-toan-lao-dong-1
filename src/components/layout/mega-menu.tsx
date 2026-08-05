import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export function MegaMenu() {
  return (
    <div className="grid w-[640px] grid-cols-2 gap-1 p-2">
      {services.map((service) => (
        <NavigationMenuLink
          key={service.slug}
          render={<Link href={`/dich-vu/${service.slug}`} />}
          className="!items-start gap-3 rounded-lg p-3"
        >
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <service.icon className="size-4.5" />
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-foreground">
              {service.title}
            </span>
            <span className="text-xs text-muted-foreground line-clamp-2">
              {service.shortDescription}
            </span>
          </span>
        </NavigationMenuLink>
      ))}
      <Link
        href="/dich-vu"
        className="col-span-2 mt-1 flex items-center justify-between rounded-lg bg-muted px-3 py-2.5 text-sm font-semibold text-primary hover:bg-muted/70"
      >
        Xem tất cả dịch vụ
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
