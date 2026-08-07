import Link from "next/link";
import { MessageCircle, Phone, MapPin, Mail, ShieldCheck } from "lucide-react";
import { FacebookIcon, YoutubeIcon } from "@/components/icons/social-icons";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/content/site-config";
import { services } from "@/content/services";

const quickLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/40">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-5" />
            </span>
            <span className="text-base font-bold">{siteConfig.shortName}</span>
          </Link>
          <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          <div className="flex gap-2">
            <a
              href={siteConfig.socials.facebook}
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-background text-muted-foreground ring-1 ring-border hover:text-primary"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={siteConfig.socials.zalo}
              aria-label="Zalo"
              className="flex size-9 items-center justify-center rounded-full bg-background text-muted-foreground ring-1 ring-border hover:text-primary"
            >
              <MessageCircle className="size-4" />
            </a>
            <a
              href={siteConfig.socials.youtube}
              aria-label="Youtube"
              className="flex size-9 items-center justify-center rounded-full bg-background text-muted-foreground ring-1 ring-border hover:text-primary"
            >
              <YoutubeIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold">Liên kết nhanh</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold">Dịch vụ</h3>
          <ul className="flex flex-col gap-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/dich-vu/${service.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold">Thông tin liên hệ</h3>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={siteConfig.hotlineHref} className="hover:text-primary">
                {siteConfig.hotline} ({siteConfig.contactPerson})
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {year} {siteConfig.legalName}. Đã đăng ký bản quyền.
          </p>
          <p>
            Thiết kế &amp; phát triển bởi{" "}
            <a
              href="https://www.facebook.com/chophandog/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary"
            >
              Tu Phan
            </a>
            .
          </p>
        </Container>
      </div>
    </footer>
  );
}
