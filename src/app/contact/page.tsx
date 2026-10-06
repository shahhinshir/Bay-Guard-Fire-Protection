import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata } from "@/lib/seo";

const title = "Contact Us";
const description =
  "Contact Bay Guard Fire Protection for a free quote on fire sprinkler, extinguisher, kitchen suppression, and exit-light services across the Bay Area. Available 24/7.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd path="/contact" name={`${title} | Bay Guard Fire Protection`} description={description} />

      <PageHeader
        eyebrow="Contact"
        title="Let's protect what matters"
        description="Reach out for a free quote or emergency service. Fill out the form and we'll get back to you as soon as possible."
      />

      <ContactSection heading="Send us a message" headingId="contact-form-heading" />
    </>
  );
}
