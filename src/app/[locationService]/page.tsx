import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { FaqJsonLd, JsonLd, ServiceJsonLd } from "@/components/ui/JsonLd";
import {
  locationServices,
  serviceDetails,
  services,
  type LocationService,
} from "@/content/content";
import { pageMetadata } from "@/lib/seo";

type Params = { locationService: string };

const slugs = locationServices.map((entry) => entry.slug);

export function generateStaticParams(): Params[] {
  return slugs.map((locationService) => ({ locationService }));
}

// Fully static: any slug not in `locationServices` 404s instead of rendering.
export const dynamicParams = false;

function getEntry(slug: string): LocationService | null {
  return locationServices.find((entry) => entry.slug === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locationService } = await params;
  const entry = getEntry(locationService);
  if (!entry) return {};

  return pageMetadata({
    title: entry.metaTitle,
    description: entry.metaDescription,
    path: `/${entry.slug}`,
  });
}

export default async function LocationServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locationService } = await params;
  const entry = getEntry(locationService);
  if (!entry) notFound();

  const service = serviceDetails[entry.serviceKey];
  const summary = services.find((s) => s.key === entry.serviceKey)!;
  const otherPages = locationServices.filter((e) => e.slug !== entry.slug);

  return (
    <>
      <JsonLd
        path={`/${entry.slug}`}
        name={`${entry.metaTitle} | Bay Guard Fire Protection`}
        description={entry.metaDescription}
      />
      <ServiceJsonLd
        name={entry.h1}
        description={entry.metaDescription}
        path={`/${entry.slug}`}
        serviceType={summary.name}
        areaServed={[entry.city]}
      />
      <FaqJsonLd faqs={entry.faqs} />

      <PageHeader eyebrow={entry.eyebrow} title={entry.h1} description={entry.intro}>
        <ButtonLink href="/contact" size="lg">
          Get a free quote
          <ArrowRightIcon className="h-4 w-4" width={16} height={16} />
        </ButtonLink>
        <CallButton />
      </PageHeader>

      {/* Hero image */}
      <section className="py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-lift ring-1 ring-hairline">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
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

      {/* Localized body + highlights */}
      <section aria-labelledby="ls-body" className="pb-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <h2
                  id="ls-body"
                  className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
                >
                  {entry.body.heading}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
                  {entry.body.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" size="lg">
                    Request a free quote
                    <ArrowRightIcon className="h-4 w-4" width={16} height={16} />
                  </ButtonLink>
                  <CallButton />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-hairline sm:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                  {entry.highlights.heading}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {entry.highlights.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-ink">
                      <CheckIcon
                        className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                        width={18}
                        height={18}
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Neighborhoods served */}
      <section aria-labelledby="ls-areas" className="py-10">
        <Container>
          <h2
            id="ls-areas"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700"
          >
            {entry.city} areas we serve
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {entry.neighborhoods.map((area, i) => (
              <Reveal as="li" key={area} delay={i * 40}>
                <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft ring-1 ring-hairline">
                  {area}
                </span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Localized FAQ (indexable, FAQPage schema emitted above) */}
      <section aria-labelledby="ls-faq" className="py-14 sm:py-16">
        <Container>
          <h2
            id="ls-faq"
            className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            {entry.city} fire protection FAQs
          </h2>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-hairline overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-hairline">
            {entry.faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 50}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium tracking-tight text-ink transition-colors hover:bg-zinc-50 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span aria-hidden className="relative h-4 w-4 shrink-0 text-brand-600">
                      <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded bg-current" />
                      <span className="absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded bg-current transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
                    {faq.answer}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Cross-links: parent service + related location pages */}
      <section aria-labelledby="ls-related" className="pb-4">
        <Container>
          <h2
            id="ls-related"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted"
          >
            Related services &amp; areas
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href={summary.href}
              className="group flex items-center justify-between gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-hairline transition-all hover:-translate-y-0.5 hover:ring-brand-200"
            >
              <span className="text-sm font-semibold tracking-tight text-ink">
                {summary.name} (all areas)
              </span>
              <ArrowRightIcon
                className="h-4 w-4 shrink-0 text-brand-600 transition-transform group-hover:translate-x-1"
                width={16}
                height={16}
              />
            </Link>
            {otherPages.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-hairline transition-all hover:-translate-y-0.5 hover:ring-brand-200"
              >
                <span className="text-sm font-semibold tracking-tight text-ink">
                  {other.h1}
                </span>
                <ArrowRightIcon
                  className="h-4 w-4 shrink-0 text-brand-600 transition-transform group-hover:translate-x-1"
                  width={16}
                  height={16}
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection heading={`Get a free ${entry.city} fire protection quote`} />
    </>
  );
}
