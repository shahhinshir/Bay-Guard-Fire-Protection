import type { MetadataRoute } from "next";

import { services } from "@/content/content";
import { absoluteUrl } from "@/content/site";

// changeFrequency/priority are intentionally omitted — Google ignores them.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = [
    "/",
    "/services",
    "/about-us",
    "/locations",
    "/contact",
  ];

  const servicePaths = services.map((service) => service.href);

  return [...staticPaths, ...servicePaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
  }));
}
