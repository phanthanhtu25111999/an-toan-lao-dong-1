import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0aa54a",
    icons: [
      { src: "/icon.png", sizes: "500x500", type: "image/png" },
    ],
  };
}
