import {
  faqPageJsonLd,
  jsonLdScript,
  serviceJsonLd,
  siteJsonLd,
} from "@/lib/seo";

/** Server-rendered structured data for a page. */
export function JsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  const html = jsonLdScript(siteJsonLd({ path, name, description }));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** Service structured data, linked to the LocalBusiness as provider. */
export function ServiceJsonLd(props: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaServed?: readonly string[];
}) {
  const html = jsonLdScript(serviceJsonLd(props));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** FAQPage structured data for a list of question/answer pairs. */
export function FaqJsonLd({
  faqs,
}: {
  faqs: readonly { question: string; answer: string }[];
}) {
  const html = jsonLdScript(faqPageJsonLd(faqs));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
