import type { Metadata } from "next";
import Image from "next/image";

import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { locations } from "@/content/content";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const title = "Locations We Serve";
const description =
  "Bay Guard Fire Protection serves the entire San Francisco Bay Area 24/7, including San Francisco, San Jose, Oakland, Fremont, and surrounding cities. Contact us for a free quote.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd path="/locations" name={`${title} | Bay Guard Fire Protection`} description={description} />

      <PageHeader eyebrow="Coverage" title={locations.title} description={locations.intro} />

      <section aria-labelledby="cities-heading" className="py-14 sm:py-16">
        <Container>
          <h2 id="cities-heading" className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Cities we serve
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {SITE.cities.map((city, i) => (
              <Reveal as="li" key={city} delay={i * 40}>
                <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft ring-1 ring-hairline">
                  {city}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-10 block">
            <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-lift ring-1 ring-hairline">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={locations.image}
                  alt={locations.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 64rem"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
