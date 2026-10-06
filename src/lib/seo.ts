import type { Metadata } from "next";
import type { Graph } from "schema-dts";

import { SITE, absoluteUrl } from "@/content/site";

/* ---------------------------------------------------------------- *
 * Per-page <head> metadata. Canonical + OpenGraph + Twitter.
 * OG/Twitter images are supplied automatically by the file-based
 * `opengraph-image.tsx` / `twitter-image.tsx` conventions.
 * ---------------------------------------------------------------- */
export function pageMetadata(input: {
  title: string;
  description: string;
  /** Root-relative path, e.g. "/services". */
  path: string;
}): Metadata {
  const { title, description, path } = input;
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title,
      description,
      locale: SITE.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ---------------------------------------------------------------- *
 * Structured data. One @graph with stable @id values linking
 * Organization → WebSite → LocalBusiness → WebPage.
 * ---------------------------------------------------------------- */
const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const BUSINESS_ID = `${SITE.url}/#localbusiness`;
const LOGO_ID = `${SITE.url}/#logo`;

const daysOfWeek = [
  "https://schema.org/Monday",
  "https://schema.org/Tuesday",
  "https://schema.org/Wednesday",
  "https://schema.org/Thursday",
  "https://schema.org/Friday",
  "https://schema.org/Saturday",
  "https://schema.org/Sunday",
] as const;

export function siteJsonLd(page: {
  path: string;
  name: string;
  description: string;
}): Graph {
  const pageUrl = absoluteUrl(page.path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phone.display,
        logo: {
          "@type": "ImageObject",
          "@id": LOGO_ID,
          url: absoluteUrl("/logo.png"),
          caption: SITE.name,
        },
        image: { "@id": LOGO_ID },
        sameAs: [SITE.social.yelp],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-US",
      },
      {
        "@type": "LocalBusiness",
        "@id": BUSINESS_ID,
        name: SITE.name,
        image: { "@id": LOGO_ID },
        logo: { "@id": LOGO_ID },
        url: SITE.url,
        telephone: SITE.phone.display,
        email: SITE.email,
        priceRange: "$$",
        parentOrganization: { "@id": ORG_ID },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.country,
        },
        areaServed: SITE.cities.map((name) => ({
          "@type": "City",
          name,
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [...daysOfWeek],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        sameAs: [SITE.social.yelp],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.name,
        description: page.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        inLanguage: "en-US",
      },
    ],
  };
}

/**
 * Render JSON-LD safely inside a <script> tag.
 * Escapes `<` so the payload can never break out of the script element.
 */
export function jsonLdScript(data: Graph): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
