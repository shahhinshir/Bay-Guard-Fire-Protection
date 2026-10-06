import type { MetadataRoute } from "next";

import { SITE } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.legalName,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbfbfc",
    theme_color: "#dc2626",
    icons: [
      { src: "/logo192.png", sizes: "192x192", type: "image/png" },
      { src: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
