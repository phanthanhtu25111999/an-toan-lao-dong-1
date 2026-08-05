import { MapPin, Phone, Mail, User, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site-config";

const items = [
  { icon: MapPin, label: "Địa chỉ", value: siteConfig.address },
  { icon: Phone, label: "Hotline", value: siteConfig.hotline, href: siteConfig.hotlineHref },
  { icon: User, label: "Người liên hệ", value: siteConfig.contactPerson },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Giờ làm việc", value: siteConfig.workingHours },
];

export function ContactInfo() {
  return (
    <Card className="h-full py-8">
      <CardContent className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-bold">Thông tin liên hệ</h2>
        <ul className="flex flex-col gap-5">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-semibold hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
