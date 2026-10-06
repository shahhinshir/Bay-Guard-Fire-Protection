import { jsonLdScript, siteJsonLd } from "@/lib/seo";

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
