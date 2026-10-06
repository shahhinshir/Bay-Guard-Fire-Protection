import type { Metadata } from "next";

import { CTA } from "@/components/sections/CTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { ProofBand } from "@/components/sections/ProofBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Marquee } from "@/components/site/Marquee";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE.name} | Bay Area Fire Protection Services`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        path="/"
        name={`${SITE.name} | Bay Area Fire Protection Services`}
        description={SITE.description}
      />

      <Hero />
      <WhyChooseUs />
      <ProofBand />

      <section aria-labelledby="services-heading" className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Complete fire protection services"
            description="From portable extinguishers to full sprinkler systems, we cover every layer of fire protection your property needs."
            align="center"
            className="mb-12"
          />
          <ServicesGrid />
        </Container>
      </section>

      <CTA />
      <Marquee />
      <FAQ />
      <ContactSection />
    </>
  );
}
