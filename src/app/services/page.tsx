import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Marquee } from "@/components/site/Marquee";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata } from "@/lib/seo";

const title = "Fire Protection Services";
const description =
  "Fire extinguisher, fire sprinkler, kitchen fire suppression, and exit & emergency light services for commercial and residential properties across the Bay Area.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd path="/services" name={`${title} | Bay Guard Fire Protection`} description={description} />

      <PageHeader
        eyebrow="Services"
        title="Fire protection, from inspection to installation"
        description="Whether you need a single extinguisher inspected or a full sprinkler system installed, our licensed team keeps your Bay Area property compliant and protected."
      >
        <ButtonLink href="/contact" size="lg">
          Get a free quote
        </ButtonLink>
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container>
          <ServicesGrid />
        </Container>
      </section>

      <Marquee />
      <ContactSection />
    </>
  );
}
