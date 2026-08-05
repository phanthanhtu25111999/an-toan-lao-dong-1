"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Mở menu" />}
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%]">
        <SheetHeader>
          <SheetTitle>{siteConfig.shortName}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
          >
            Trang chủ
          </Link>
          <Link
            href="/gioi-thieu"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
          >
            Giới thiệu
          </Link>

          <button
            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium hover:bg-muted"
            onClick={() => setServicesOpen((v) => !v)}
          >
            Dịch vụ
            <ChevronDown
              className={cn("size-4 transition-transform", servicesOpen && "rotate-180")}
            />
          </button>
          {servicesOpen && (
            <div className="ml-2 flex flex-col gap-0.5 border-l pl-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/dich-vu/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {service.title}
                </Link>
              ))}
              <Link
                href="/dich-vu"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-muted"
              >
                Xem tất cả dịch vụ
              </Link>
            </div>
          )}

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <Button render={<a href={siteConfig.hotlineHref} />} nativeButton={false} className="w-full">
            <Phone className="size-4" />
            Gọi ngay: {siteConfig.hotline}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
