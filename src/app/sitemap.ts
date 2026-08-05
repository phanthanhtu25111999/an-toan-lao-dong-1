import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { services } from "@/content/services";
import { getPostSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/gioi-thieu", "/dich-vu", "/tin-tuc", "/lien-he"].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: new URL(`/dich-vu/${service.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const newsRoutes = getPostSlugs().map((slug) => ({
    url: new URL(`/tin-tuc/${slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...newsRoutes];
}
