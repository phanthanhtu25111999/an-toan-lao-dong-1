import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function Breadcrumb({
  items,
  variant = "default",
}: {
  items: BreadcrumbItem[];
  variant?: "default" | "invert";
}) {
  const invert = variant === "invert";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm",
        invert ? "text-white/80" : "text-muted-foreground"
      )}
    >
      <Link
        href="/"
        className={cn("flex items-center gap-1", invert ? "hover:text-white" : "hover:text-primary")}
      >
        <Home className="size-3.5" />
        Trang chủ
      </Link>
      {items.map((item, index) => (
        <span key={item.path} className="flex items-center gap-1.5">
          <ChevronRight className="size-3.5" />
          {index === items.length - 1 ? (
            <span
              aria-current="page"
              className={cn("font-medium", invert ? "text-white" : "text-foreground")}
            >
              {item.name}
            </span>
          ) : (
            <Link href={item.path} className={invert ? "hover:text-white" : "hover:text-primary"}>
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
