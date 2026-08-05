"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ShieldCheck } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { MegaMenu } from "@/components/layout/mega-menu";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur transition-shadow",
        scrolled ? "border-border shadow-sm" : "border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" />
          </span>
          <span className="hidden text-sm leading-tight sm:flex sm:flex-col">
            <span className="text-base font-bold">{siteConfig.shortName}</span>
            <span className="text-[11px] font-normal text-muted-foreground">
              Đào tạo · Kiểm định · Quan trắc · Tư vấn
            </span>
          </span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/" />}
                className={navigationMenuTriggerStyle()}
              >
                Trang chủ
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/gioi-thieu" />}
                className={navigationMenuTriggerStyle()}
              >
                Giới thiệu
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Dịch vụ</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/tin-tuc" />}
                className={navigationMenuTriggerStyle()}
              >
                Tin tức
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/lien-he" />}
                className={navigationMenuTriggerStyle()}
              >
                Liên hệ
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1.5">
          <Button
            render={<a href={siteConfig.hotlineHref} />}
            nativeButton={false}
            variant="secondary"
            className="hidden md:inline-flex"
          >
            <Phone className="size-4" />
            {siteConfig.hotline}
          </Button>
          <Button
            render={<Link href="/lien-he" />}
            nativeButton={false}
            className="hidden sm:inline-flex bg-cta text-cta-foreground hover:bg-cta/90"
          >
            Liên hệ ngay
          </Button>
          <ThemeToggle />
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
