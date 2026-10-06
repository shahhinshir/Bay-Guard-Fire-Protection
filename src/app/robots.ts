import type { MetadataRoute } from "next";

import { SITE, absoluteUrl } from "@/content/site";

// Allow everything; only the conversion confirmation page is kept out.
// Vercel automatically serves `X-Robots-Tag: noindex` on preview (non-production)
// deployments, so no extra config is needed to keep previews out of the index.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/thank-you",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
