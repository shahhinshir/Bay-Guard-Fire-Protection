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
