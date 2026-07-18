import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/about", "/gallery", "/contact"];
  return routes.map((route) => ({
    url: `${BUSINESS.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
