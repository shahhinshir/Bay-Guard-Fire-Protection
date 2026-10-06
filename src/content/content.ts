import type { StaticImageData } from "next/image";

import hero from "@/assets/hero.webp";
import pipe from "@/assets/pipe.webp";
import sprinkler from "@/assets/sprinkler.webp";
import location from "@/assets/location.webp";
import exitLight from "@/assets/exit-light.webp";
import fireSprinklers from "@/assets/fire-sprinklers.webp";
import fireExtinguishers from "@/assets/fire-extinguishers.webp";
import fireExInspection from "@/assets/fire-ex-inspection.webp";
import kitchenSystem from "@/assets/kitchen-fire-suppression-system.webp";
import bayGuard from "@/assets/BayGuard.webp";
import abc from "@/assets/abc.webp";
import wet from "@/assets/wet.webp";
import water from "@/assets/water.webp";
import halotron from "@/assets/halotron.webp";

import carouselAlarm from "@/assets/carousel/alarm-valve.webp";
import carouselAnsul from "@/assets/carousel/ansul.webp";
import carouselExt from "@/assets/carousel/extinguishers.webp";
import carouselPipes from "@/assets/carousel/pipes.webp";
import carouselOrange from "@/assets/carousel/orange-sprinkler.webp";
import carouselSystem from "@/assets/carousel/system.webp";
import carouselSprinklers from "@/assets/carousel/sprinklers.webp";

export const images = {
  hero,
  pipe,
  sprinkler,
  location,
  exitLight,
  fireSprinklers,
  fireExtinguishers,
  fireExInspection,
  kitchenSystem,
  bayGuard,
  abc,
  wet,
  water,
  halotron,
};

export const marqueeImages: { src: StaticImageData; alt: string }[] = [
  { src: carouselAlarm, alt: "Fire sprinkler alarm valve assembly" },
  { src: carouselAnsul, alt: "Ansul kitchen fire suppression system" },
  { src: carouselExt, alt: "Row of serviced fire extinguishers" },
  { src: carouselPipes, alt: "Installed fire sprinkler pipe network" },
  { src: carouselOrange, alt: "Commercial fire sprinkler head" },
  { src: carouselSystem, alt: "Fire protection control system" },
  { src: carouselSprinklers, alt: "Ceiling fire sprinkler heads" },
];

/* ---------------------------------------------------------------- *
 * Navigation
 * ---------------------------------------------------------------- */
export type NavLink = { name: string; href: string };

export const primaryNav: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about-us" },
  { name: "Locations", href: "/locations" },
];

/* ---------------------------------------------------------------- *
 * Services
 * ---------------------------------------------------------------- */
export type ServiceKey =
  | "fire-extinguishers"
  | "fire-sprinkler-system"
  | "kitchen-fire-suppression"
  | "exit-and-emergency-sign";

export type ServiceSummary = {
  key: ServiceKey;
  name: string;
  shortName: string;
  href: string;
  summary: string;
};

export const services: ServiceSummary[] = [
  {
    key: "fire-extinguishers",
    name: "Fire Extinguishers",
    shortName: "Fire Extinguishers",
    href: "/services/fire-extinguishers",
    summary:
      "Annual inspection, certification, refills, and same-week service for portable fire extinguishers.",
  },
  {
    key: "fire-sprinkler-system",
    name: "Fire Sprinkler Systems",
    shortName: "Fire Sprinklers",
    href: "/services/fire-sprinkler-system",
    summary:
      "Design, installation, inspection, and repair of wet, dry, deluge, and pre-action sprinkler systems.",
  },
  {
    key: "kitchen-fire-suppression",
    name: "Kitchen Fire Suppression",
    shortName: "Kitchen Suppression",
    href: "/services/kitchen-fire-suppression",
    summary:
      "UL-300 compliant installation and inspection for commercial kitchen fire suppression systems.",
  },
  {
    key: "exit-and-emergency-sign",
    name: "Exit & Emergency Lights",
    shortName: "Exit & Emergency Lights",
    href: "/services/exit-and-emergency-sign",
    summary:
      "NFPA 101 inspection, battery replacement, and installation of exit signs and emergency lights.",
  },
];

/* ---------------------------------------------------------------- *
 * Homepage — trust points
 * ---------------------------------------------------------------- */
export const trustPoints: { label: string; value: string }[] = [
  { value: "24/7", label: "Emergency service" },
  { value: "3", label: "State licenses held" },
  { value: "Bay-wide", label: "Area served" },
  { value: "Same week", label: "Extinguisher service" },
];

export const perks: { title: string; description: string }[] = [
  {
    title: "Fire safety solutions",
    description:
      "Fire safety solutions for building owners, real-estate managers, general contractors, engineers, and architects.",
  },
  {
    title: "Licensed & certified",
    description:
      "Licensed by the State Fire Marshal to perform annual inspection and maintenance of portable fire extinguishers and semiannual inspection and installation of kitchen fire suppression systems.",
  },
  {
    title: "24-hour speedy service",
    description:
      "Fast 24-hour service on fire sprinkler systems, commercial kitchen fire suppression systems, and portable fire extinguishers.",
  },
];

/* ---------------------------------------------------------------- *
 * FAQ
 * ---------------------------------------------------------------- */
export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Why do I need a fire sprinkler system in my building?",
    answer:
      "Buildings with a working fire sprinkler system see an average property loss and risk of death per fire that is 50 to 66 percent lower than buildings without sprinkler systems.",
  },
  {
    question: "How many fire extinguishers do I need in my building?",
    answer:
      "The number of fire extinguishers required varies with each building's layout and hazard level. An ABC fire extinguisher must be supplied every seventy-five feet or less.",
  },
  {
    question: "How often do I need a fire extinguisher inspection?",
    answer:
      "Fire extinguishers are required to be inspected once a month, and they must also be inspected and certified by a licensed fire extinguisher company once a year.",
  },
  {
    question: "What kind of fire extinguisher do I need in my commercial kitchen?",
    answer:
      "A commercial kitchen needs a special fire suppression system to stay safe from fires, and a Wet Class K portable fire extinguisher is required alongside it.",
  },
  {
    question:
      "What is the best fire extinguisher for sensitive electrical equipment?",
    answer:
      "For sensitive electronics, such as a computer room or data center, water or dry-chemical extinguishers can cause as much damage as the fire itself. Use a Clean Agent (Halotron) fire extinguisher instead.",
  },
];

/* ---------------------------------------------------------------- *
 * Service detail pages
 * ---------------------------------------------------------------- */
export type ServiceDetail = {
  key: ServiceKey;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: StaticImageData;
  heroImageAlt: string;
  /** Metadata */
  metaTitle: string;
  metaDescription: string;
  /** Body blocks */
  lead: { heading: string; paragraphs: string[] };
  list: { heading: string; items: string[] };
  gallery?: { heading: string; items: { name: string; src: StaticImageData }[] };
};

export const serviceDetails: Record<ServiceKey, ServiceDetail> = {
  "fire-extinguishers": {
    key: "fire-extinguishers",
    eyebrow: "Fire protection",
    title: "Fire Extinguishers",
    intro:
      "We sell fire extinguishers and provide full service, including inspections, refills, recharges, and maintenance, throughout the Bay Area.",
    heroImage: fireExInspection,
    heroImageAlt: "Technician inspecting a portable fire extinguisher",
    metaTitle: "Fire Extinguisher Service & Inspection",
    metaDescription:
      "Fire extinguisher inspection, certification, refills, and sales across the Bay Area. Same-week service to keep your business up to fire code.",
    lead: {
      heading: "Everything you need",
      paragraphs: [
        "A fire extinguisher is often the best first line of defense. It can stop small flames from growing out of control. Every public facility must undergo annual testing on all fire extinguishers on the premises.",
        "Need to get compliant? We provide high-grade fire extinguisher inspections, sales, refills, and installations for clients throughout the Bay Area, CA. We come to your location and service your portable extinguishers to help ensure you're up to fire code.",
      ],
    },
    list: {
      heading: "Fire extinguisher services",
      items: [
        "Yearly inspection service and certification",
        "Fast, same-week fire extinguisher service",
        "Wholesale pricing on new fire extinguishers",
        "Fire extinguisher delivery",
        "Fire extinguisher cabinets",
        "Cabinet glass service, maintenance, and repair",
        "Recharge and refill",
        "6-year maintenance service",
        "Hydrostatic testing",
      ],
    },
    gallery: {
      heading: "Fire extinguishers we provide",
      items: [
        { name: "ABC fire extinguishers", src: abc },
        { name: "Wet Class K fire extinguishers", src: wet },
        { name: "Water fire extinguishers", src: water },
        { name: "Halotron fire extinguishers", src: halotron },
      ],
    },
  },
  "fire-sprinkler-system": {
    key: "fire-sprinkler-system",
    eyebrow: "Fire protection",
    title: "Fire Sprinkler Systems",
    intro:
      "Solutions for commercial and residential buildings, multi-tenant properties, single- and multi-family homes, hotels, restaurants, retail, and more.",
    heroImage: fireSprinklers,
    heroImageAlt: "Installed commercial fire sprinkler system",
    metaTitle: "Fire Sprinkler System Inspection & Installation",
    metaDescription:
      "Fire sprinkler design, installation, inspection, testing, and repair for commercial and residential buildings across the Bay Area. Wet, dry, deluge, and pre-action systems.",
    lead: {
      heading: "Everything you need",
      paragraphs: [
        "Whether it's your home or business, an existing building or a new project, we have the expertise to meet your fire protection needs. Fire sprinklers react quickly to reduce heat, flames, and smoke, delivering water before a fire can grow and spread through a room.",
        "Fire sprinkler systems are crucial to your building's safety. We offer quarterly and yearly inspection services plus five-year testing to eliminate system defects and compliance issues. Our goal is to keep your system functioning at its full potential at an affordable price.",
      ],
    },
    list: {
      heading: "Our services",
      items: [
        "Commercial and residential fire sprinkler inspection",
        "Yearly fire sprinkler inspection",
        "Five-year fire sprinkler testing",
        "Fire sprinkler repair and sprinkler-head relocation",
        "ADUs, single-family homes, and duplexes",
        "Fire sprinkler leak repair",
        "Tenant improvements",
      ],
    },
    gallery: {
      heading: "System types we service",
      items: [
        { name: "Wet pipe", src: fireSprinklers },
        { name: "Dry pipe", src: fireSprinklers },
        { name: "Deluge", src: fireSprinklers },
        { name: "Pre-action", src: fireSprinklers },
      ],
    },
  },
  "kitchen-fire-suppression": {
    key: "kitchen-fire-suppression",
    eyebrow: "Fire protection",
    title: "Kitchen Fire Suppression",
    intro:
      "Installation and inspection for industrial and commercial kitchen fire suppression systems, all compliant with UL-300 standards.",
    heroImage: kitchenSystem,
    heroImageAlt: "Commercial kitchen fire suppression system over cooking line",
    metaTitle: "Commercial Kitchen Fire Suppression Systems",
    metaDescription:
      "UL-300 compliant kitchen fire suppression installation and inspection for restaurants, hotels, schools, and food trucks across the Bay Area.",
    lead: {
      heading: "We provide",
      paragraphs: [
        "Kitchen fires can spread quickly through multiple sources of heat. A fire suppression system helps stop kitchen fires before they can spread to other areas.",
        "We service and certify a wide range of fire suppression systems, all compliant with the standards set by Underwriters Laboratories (UL-300), protecting cooking equipment such as stoves, fryers, ovens, griddles, charbroilers, and woks, as well as hoods, ducts, plenums, and filters.",
      ],
    },
    list: {
      heading: "Systems we service",
      items: [
        "Ansul system",
        "Pyrochem",
        "Range Guard",
        "Kidde",
        "Buckeye",
        "Amerex",
      ],
    },
    gallery: {
      heading: "Commercial kitchens we protect",
      items: [
        { name: "Restaurants", src: kitchenSystem },
        { name: "Hotels & casinos", src: kitchenSystem },
        { name: "Schools & hospitals", src: kitchenSystem },
        { name: "Food trucks & trailers", src: kitchenSystem },
      ],
    },
  },
  "exit-and-emergency-sign": {
    key: "exit-and-emergency-sign",
    eyebrow: "Fire protection",
    title: "Exit & Emergency Lights",
    intro:
      "Emergency lights and exit signs are among the most important safety devices in any building. We keep them fully operational to guide occupants to safety.",
    heroImage: exitLight,
    heroImageAlt: "Illuminated exit sign in a commercial building",
    metaTitle: "Exit Sign & Emergency Light Inspection",
    metaDescription:
      "NFPA 101 exit sign and emergency light inspection, battery replacement, and installation for commercial and residential buildings across the Bay Area.",
    lead: {
      heading: "Everything you need",
      paragraphs: [
        "We install and service exit and emergency lights across the Bay Area, including San Francisco and San Jose. These are among the most important safety devices in any building, and it's crucial they stay fully operational to guide occupants to safety in an emergency.",
        "NFPA 101, the Life Safety Code, requires all exit and emergency lights to be serviced annually. Every sign must stay illuminated while the building is occupied, and a yearly test must confirm the emergency lights remain lit for a minimum of 90 minutes.",
      ],
    },
    list: {
      heading: "How the service works",
      items: ["Visual inspection", "Physical inspection", "Verification"],
    },
    gallery: {
      heading: "What we provide",
      items: [
        { name: "New batteries", src: exitLight },
        { name: "New exit & emergency lights", src: exitLight },
        { name: "Commercial & residential", src: exitLight },
      ],
    },
  },
};

/* ---------------------------------------------------------------- *
 * About page
 * ---------------------------------------------------------------- */
export const about = {
  eyebrow: "About",
  title: "Full fire-protection solutions you can trust",
  intro:
    "Bay Guard Fire Protection repairs, inspects, designs, installs, and maintains fire sprinkler systems for both residential and commercial properties. We are locally owned and operated, state licensed, bonded, and insured, and we understand the complexities of fire protection.",
  heroImage: fireExtinguishers,
  heroImageAlt: "Bay Guard fire extinguisher lineup",
  missionImage: bayGuard,
  missionImageAlt: "Bay Guard Fire Protection service work",
  mission: [
    "At Bay Guard Fire Protection Services, our mission is to provide the highest-quality fire safety products and services to our customers. We deliver the best possible solutions for each customer's unique needs, on time and professionally.",
    "We provide fast 24-hour service on fire sprinkler systems, commercial kitchen fire suppression systems, and portable fire extinguishers. Our highly trained team is excited to work with you to protect your business, property, and loved ones.",
  ],
};

export const locations = {
  title: "Locations we serve",
  intro:
    "We proudly serve the entire Bay Area, 24/7. Bay Guard Fire Protection is ready to handle your fire protection needs across San Francisco, San Jose, and beyond. Contact us today for a free quote or to learn more about the cities we serve.",
  image: location,
  imageAlt: "Map of the San Francisco Bay Area cities we serve",
};

/* ---------------------------------------------------------------- *
 * Location × service landing pages
 * ----------------------------------------------------------------
 * Root-relative SEO landing pages that intersect one service with one
 * city (e.g. /oakland-commercial-fire-sprinklers). Each carries unique,
 * localized copy so it ranks for "[service] in [city]" searches without
 * duplicating the generic service pages. Rendered by `app/[locationService]`.
 * ---------------------------------------------------------------- */
export type LocationService = {
  /** Root-relative slug, no leading slash. */
  slug: string;
  /** Links back to the matching service for imagery + cross-linking. */
  serviceKey: ServiceKey;
  city: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Shown as the hero description. */
  intro: string;
  body: { heading: string; paragraphs: string[] };
  highlights: { heading: string; items: string[] };
  neighborhoods: string[];
  /** Localized Q&A — also emitted as FAQPage structured data. */
  faqs: Faq[];
};

export const locationServices: LocationService[] = [
  {
    slug: "oakland-commercial-fire-sprinklers",
    serviceKey: "fire-sprinkler-system",
    city: "Oakland",
    eyebrow: "Oakland · Fire sprinklers",
    h1: "Commercial Fire Sprinkler Service in Oakland",
    metaTitle: "Oakland Commercial Fire Sprinkler Inspection & Repair",
    metaDescription:
      "Commercial fire sprinkler inspection, testing, and repair in Oakland, CA. Licensed C-16 contractor, fast local response, and free quotes. Call Bay Guard.",
    intro:
      "Keep your Oakland commercial property code-compliant with fast, licensed fire sprinkler inspection, testing, and repair — without the corporate wait times.",
    body: {
      heading: "Oakland's local fire sprinkler specialists",
      paragraphs: [
        "Oakland property managers and building owners are responsible for keeping fire sprinkler systems tested and tagged under California Code of Regulations Title 19 and NFPA 25. Lapsed inspections are one of the most common citations the Oakland Fire Department issues during annual permit reviews — and they can hold up a lease, a sale, or a certificate of occupancy.",
        "Bay Guard is a locally based C-16 licensed fire sprinkler contractor (CSLB #1085623). Because we work out of the East Bay, we can usually reach Oakland sites faster than the large corporate firms, whether you need an annual inspection, five-year internal testing, a sprinkler-head relocation for a tenant improvement, or an emergency leak repair.",
        "We handle wet-pipe, dry-pipe, deluge, and pre-action systems across warehouses, multi-tenant offices, retail, and multifamily buildings throughout Oakland — and we hand you the signed documentation your insurer and the fire marshal need.",
      ],
    },
    highlights: {
      heading: "What we cover in Oakland",
      items: [
        "Annual Title-19 / NFPA 25 sprinkler inspection and certification",
        "Five-year internal pipe inspection and testing",
        "Sprinkler leak and low-pressure emergency repair",
        "Sprinkler-head relocation for tenant improvements",
        "Backflow and riser inspection coordination",
        "Signed documentation for insurers and the fire marshal",
      ],
    },
    neighborhoods: [
      "Downtown Oakland",
      "Jack London Square",
      "Fruitvale",
      "Rockridge",
      "Temescal",
      "West Oakland",
    ],
    faqs: [
      {
        question: "How often does Oakland require a commercial fire sprinkler inspection?",
        answer:
          "Under California Title 19 and NFPA 25, commercial wet-pipe sprinkler systems need a licensed inspection at least annually, with additional quarterly checks of gauges and valves and a full internal inspection every five years. Bay Guard tracks your due dates so you never miss one.",
      },
      {
        question: "Can you repair a leaking fire sprinkler quickly in Oakland?",
        answer:
          "Yes. We offer fast local and 24/7 emergency response for sprinkler leaks, broken heads, and low-pressure alarms across Oakland. Call (408) 318-8636 and we will dispatch a technician.",
      },
      {
        question: "Are you licensed to work on fire sprinklers in California?",
        answer:
          "Bay Guard holds a C-16 CSLB license (#1085623) and is bonded and insured, so our inspections and repairs are accepted by the Oakland Fire Department and your insurer.",
      },
    ],
  },
  {
    slug: "berkeley-fire-sprinkler-inspection",
    serviceKey: "fire-sprinkler-system",
    city: "Berkeley",
    eyebrow: "Berkeley · Fire sprinklers",
    h1: "Fire Sprinkler Inspection in Berkeley",
    metaTitle: "Berkeley Fire Sprinkler Inspection & Testing",
    metaDescription:
      "Licensed fire sprinkler inspection, testing, and repair in Berkeley, CA. Fast East Bay response, Title-19 compliant, free quotes. Call Bay Guard Fire Protection.",
    intro:
      "Annual and five-year fire sprinkler inspection and testing for Berkeley commercial and multifamily buildings — done fast, documented, and code-compliant.",
    body: {
      heading: "Berkeley fire sprinkler inspection you can schedule this week",
      paragraphs: [
        "Berkeley's mix of older commercial buildings, university-adjacent housing, and multi-tenant properties means a lot of sprinkler systems that need careful, on-time inspection. The City of Berkeley Fire Department enforces California Title 19 and NFPA 25, and a missed annual tag is an easy citation to avoid.",
        "Bay Guard is an East Bay-based C-16 licensed contractor (CSLB #1085623), so we can get a technician to your Berkeley property quickly instead of routing you through a corporate scheduling queue. We inspect, test, tag, and repair wet, dry, and pre-action systems and give you the paperwork your insurer and the fire marshal expect.",
        "Whether you manage a single storefront near Shattuck Avenue or a portfolio of apartment buildings, we keep your inspection schedule on track and flag small issues before they become expensive failures.",
      ],
    },
    highlights: {
      heading: "Berkeley sprinkler services",
      items: [
        "Annual fire sprinkler inspection, testing, and tagging",
        "Five-year internal inspection per NFPA 25",
        "Repairs, head replacement, and leak fixes",
        "Deficiency correction and re-inspection",
        "Tenant-improvement sprinkler modifications",
        "Compliance documentation for owners and insurers",
      ],
    },
    neighborhoods: [
      "Downtown Berkeley",
      "Shattuck Avenue",
      "West Berkeley",
      "Elmwood",
      "North Berkeley",
      "Telegraph Avenue",
    ],
    faqs: [
      {
        question: "Do you provide the inspection tag and report for Berkeley compliance?",
        answer:
          "Yes. After every inspection we tag the system and provide a signed NFPA 25 report you can submit to the Berkeley Fire Department and your insurance carrier.",
      },
      {
        question: "How fast can you inspect my Berkeley building?",
        answer:
          "Because we are based in the East Bay, we can usually schedule a Berkeley inspection within the same week, and sooner for urgent compliance deadlines. Call (408) 318-8636.",
      },
      {
        question: "What happens if my system fails inspection?",
        answer:
          "We document every deficiency, give you a clear repair quote, fix the issue, and re-inspect so your system passes and stays compliant.",
      },
    ],
  },
  {
    slug: "east-bay-restaurant-fire-suppression",
    serviceKey: "kitchen-fire-suppression",
    city: "East Bay",
    eyebrow: "East Bay · Kitchen suppression",
    h1: "Restaurant Fire Suppression Systems in the East Bay",
    metaTitle: "East Bay Restaurant Fire Suppression System Service",
    metaDescription:
      "UL-300 kitchen fire suppression installation, inspection, and repair for East Bay restaurants. Pass your health inspection. Fast local service. Call Bay Guard.",
    intro:
      "UL-300 compliant kitchen hood fire suppression installation, semiannual inspection, and repair for East Bay restaurants — so you pass inspection and stay open.",
    body: {
      heading: "Keep your East Bay kitchen compliant and open",
      paragraphs: [
        "Every commercial kitchen in the East Bay needs a UL-300 listed fire suppression system over the cooking line, inspected and certified twice a year. Fire marshals and county health inspectors across Alameda and Contra Costa counties check for a current service tag — and a failed or expired system can shut your kitchen down during your busiest service.",
        "Bay Guard installs, inspects, services, and repairs commercial kitchen suppression systems — Ansul, Pyrochem, Range Guard, Kidde, Buckeye, and Amerex — protecting fryers, ranges, charbroilers, woks, hoods, ducts, and plenums. We are a licensed Automatic Extinguishing Systems contractor (#A019043) and we move fast because we are local.",
        "From a single Oakland taqueria to a Walnut Creek hotel kitchen, we keep your semiannual schedule current, handle fusible-link replacement and nozzle repositioning after a remodel, and provide the tagged documentation your health inspector wants to see.",
      ],
    },
    highlights: {
      heading: "East Bay kitchen suppression services",
      items: [
        "UL-300 system installation for new and remodeled kitchens",
        "Semiannual inspection and certification",
        "Fusible-link and nozzle replacement",
        "System recharge after discharge",
        "Wet Class K extinguisher supply and service",
        "Health-inspection-ready service tags and reports",
      ],
    },
    neighborhoods: [
      "Oakland",
      "Berkeley",
      "Emeryville",
      "Alameda",
      "Hayward",
      "Walnut Creek",
    ],
    faqs: [
      {
        question: "How often must an East Bay restaurant suppression system be inspected?",
        answer:
          "UL-300 kitchen fire suppression systems require a licensed inspection every six months. Bay Guard tracks your due dates and tags the system so you stay compliant with the fire marshal and county health department.",
      },
      {
        question: "Do you install systems for new restaurant build-outs?",
        answer:
          "Yes. We design and install UL-300 compliant suppression for new kitchens and tenant improvements, and we coordinate with your hood and the local fire authority for sign-off.",
      },
      {
        question: "My system discharged — can you recharge it fast?",
        answer:
          "We provide fast and 24/7 emergency recharge and repair so you can reopen quickly. Call (408) 318-8636.",
      },
    ],
  },
  {
    slug: "oakland-kitchen-fire-suppression",
    serviceKey: "kitchen-fire-suppression",
    city: "Oakland",
    eyebrow: "Oakland · Kitchen suppression",
    h1: "Kitchen Fire Suppression Service in Oakland",
    metaTitle: "Oakland Kitchen Fire Suppression System Inspection",
    metaDescription:
      "UL-300 commercial kitchen fire suppression inspection, service, and installation in Oakland, CA. Pass your health inspection with Bay Guard. Call for a free quote.",
    intro:
      "Semiannual inspection, installation, and repair of UL-300 kitchen hood suppression systems for Oakland restaurants and commercial kitchens.",
    body: {
      heading: "Oakland restaurants trust Bay Guard for suppression",
      paragraphs: [
        "Oakland's restaurant scene runs on busy commercial kitchens — and every one of them needs a UL-300 listed suppression system over the cooking line, inspected and tagged every six months. The Oakland Fire Department and Alameda County environmental health both check for a current tag, and an expired system is a fast way to fail inspection.",
        "Bay Guard services and certifies Ansul, Pyrochem, Range Guard, Kidde, Buckeye, and Amerex systems across Oakland — from Fruitvale and Jack London Square to Downtown and Temescal. As a local Automatic Extinguishing Systems contractor (#A019043), we schedule quickly and work around your service hours.",
        "We cover fusible links, nozzles, cylinders, and the Wet Class K extinguisher that must accompany the system, and we leave you with the tagged documentation your inspector requires.",
      ],
    },
    highlights: {
      heading: "Oakland suppression services",
      items: [
        "Semiannual UL-300 inspection and certification",
        "New system installation and remodel modifications",
        "Fusible-link and nozzle replacement",
        "Post-discharge recharge and repair",
        "Wet Class K extinguisher service",
        "Scheduling around your kitchen's hours",
      ],
    },
    neighborhoods: [
      "Downtown Oakland",
      "Jack London Square",
      "Fruitvale",
      "Temescal",
      "Chinatown",
      "Lake Merritt",
    ],
    faqs: [
      {
        question: "Will Bay Guard's tag satisfy the Oakland health inspector?",
        answer:
          "Yes. We inspect to UL-300 standards, tag the system, and provide a signed report accepted by the Oakland Fire Department and Alameda County environmental health.",
      },
      {
        question: "Can you service my system outside business hours?",
        answer:
          "We schedule around your kitchen so inspection and service don't interrupt your service. Call (408) 318-8636 to arrange a time.",
      },
      {
        question: "Do I also need a fire extinguisher in my kitchen?",
        answer:
          "Yes — a Wet Class K portable extinguisher is required alongside the suppression system. We supply and service those too.",
      },
    ],
  },
  {
    slug: "hayward-commercial-fire-extinguisher-service",
    serviceKey: "fire-extinguishers",
    city: "Hayward",
    eyebrow: "Hayward · Fire extinguishers",
    h1: "Commercial Fire Extinguisher Service in Hayward",
    metaTitle: "Hayward Commercial Fire Extinguisher Inspection & Recharge",
    metaDescription:
      "Commercial fire extinguisher inspection, recharge, and certification in Hayward, CA. On-site annual service, same-week scheduling, free quotes. Call Bay Guard.",
    intro:
      "On-site annual inspection, recharge, and certification of commercial fire extinguishers for Hayward businesses — keeping you up to fire code.",
    body: {
      heading: "On-site extinguisher service for Hayward businesses",
      paragraphs: [
        "Every Hayward business is required to have its portable fire extinguishers inspected and certified annually by a licensed company, with monthly visual checks in between. The Hayward Fire Department looks for a current service tag during inspections, and an out-of-date or discharged extinguisher is an easy citation — and a real safety gap.",
        "Bay Guard comes to your location to inspect, recharge, refill, and certify extinguishers for warehouses, offices, retail, and industrial sites throughout Hayward and the surrounding East Bay. We hold a Portable Fire Extinguisher license (#3756) and offer fast, same-week scheduling so you're never caught non-compliant.",
        "We service ABC, Wet Class K, CO2, water, and Halotron clean-agent extinguishers, handle six-year maintenance and hydrostatic testing, and supply new units and cabinets at wholesale pricing when you need them.",
      ],
    },
    highlights: {
      heading: "Hayward extinguisher services",
      items: [
        "Annual on-site inspection and certification",
        "Recharge, refill, and six-year maintenance",
        "Hydrostatic testing",
        "New extinguishers and cabinets at wholesale pricing",
        "ABC, Wet Class K, CO2, water, and Halotron units",
        "Same-week scheduling and tagged documentation",
      ],
    },
    neighborhoods: [
      "Downtown Hayward",
      "Industrial Hayward",
      "Southland",
      "Mt. Eden",
      "Jackson Triangle",
      "Tennyson–Alquire",
    ],
    faqs: [
      {
        question: "How often do Hayward businesses need extinguisher service?",
        answer:
          "California fire code requires a licensed annual inspection and certification of every portable fire extinguisher, plus monthly visual checks by staff. Bay Guard handles the annual service on-site and tags each unit.",
      },
      {
        question: "Do you come to our location in Hayward?",
        answer:
          "Yes — we service your extinguishers on-site across Hayward and the East Bay, usually within the same week. Call (408) 318-8636 to schedule.",
      },
      {
        question: "Can you supply new extinguishers if some fail?",
        answer:
          "Yes. We sell new ABC, Wet Class K, CO2, and clean-agent extinguishers and cabinets at wholesale pricing and install them during the same visit.",
      },
    ],
  },
];
