/**
 * Single source of truth for site-wide constants.
 * Every absolute URL in the app derives from `SITE.url`.
 */
export const SITE = {
  name: "Bay Guard Fire Protection",
  legalName: "Bay Guard Fire Protection Services",
  shortName: "Bay Guard",
  /** Canonical host — www, with the apex redirected to it (see next.config.ts). */
  url: "https://www.bayguardfireprotection.com",
  tagline: "Fire protection services for the entire Bay Area",
  description:
    "Bay Area fire protection services: fire sprinkler, fire extinguisher, kitchen fire suppression, and exit and emergency light inspection, installation, and repair. Licensed, bonded, insured. 24/7 service.",
  locale: "en_US",
  phone: {
    display: "+1 (408) 318-8636",
    href: "tel:+14083188636",
  },
  email: "info@bayguardfireprotection.com",
  areaServedLabel: "San Francisco Bay Area, California",
  cities: [
    "San Francisco",
    "San Jose",
    "Oakland",
    "Fremont",
    "Santa Clara",
    "Sunnyvale",
    "Palo Alto",
    "Hayward",
    "Berkeley",
    "Daly City",
  ],
  address: {
    locality: "San Francisco",
    region: "CA",
    country: "US",
  },
  licenses: [
    "C-16 CSLB License #1085623, Fire Sprinkler",
    "Automatic Extinguishing Systems License #A019043",
    "Portable Fire Extinguisher License #3756",
  ],
  social: {
    yelp: "https://www.yelp.com/biz/bay-guard-fire-protection-san-francisco",
  },
  keywords: [
    "fire protection services Bay Area",
    "fire sprinkler inspection San Francisco",
    "fire extinguisher service Bay Area",
    "kitchen fire suppression system",
    "exit and emergency lights inspection",
    "commercial fire protection California",
  ],
  analytics: {
    googleAdsId: "AW-10808147810",
    conversionLabel: "AW-10808147810/eEW7CKnPiecDEOL-3KEo",
  },
} as const;

/** Build an absolute URL from a root-relative path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.url).toString();
}
