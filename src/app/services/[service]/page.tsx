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
import { JsonLd, ServiceJsonLd } from "@/components/ui/JsonLd";
import { serviceDetails, services, type ServiceKey } from "@/content/content";
import { pageMetadata } from "@/lib/seo";

type Params = { service: string };

const keys = Object.keys(serviceDetails) as ServiceKey[];

export function generateStaticParams(): Params[] {
  return keys.map((service) => ({ service }));
}

// Fully static: unknown params 404 instead of rendering on demand.
export const dynamicParams = false;

function getDetail(param: string) {
  return keys.includes(param as ServiceKey)
    ? serviceDetails[param as ServiceKey]
    : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service } = await params;
  const detail = getDetail(service);
  if (!detail) return {};

  return pageMetadata({
    title: detail.metaTitle,
    description: detail.metaDescription,
    path: `/services/${detail.key}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service } = await params;
  const detail = getDetail(service);
  if (!detail) notFound();

  const others = services.filter((s) => s.key !== detail.key);

  return (
    <>
      <JsonLd
        path={`/services/${detail.key}`}
        name={`${detail.metaTitle} | Bay Guard Fire Protection`}
        description={detail.metaDescription}
      />
      <ServiceJsonLd
        name={detail.title}
        description={detail.metaDescription}
        path={`/services/${detail.key}`}
      />

      <PageHeader eyebrow={detail.eyebrow} title={detail.title} description={detail.intro}>
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
                  src={detail.heroImage}
                  alt={detail.heroImageAlt}
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

      {/* Lead + checklist */}
      <section aria-labelledby="detail-lead" className="pb-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <h2
                  id="detail-lead"
                  className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
                >
                  {detail.lead.heading}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
                  {detail.lead.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-hairline sm:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                  {detail.list.heading}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {detail.list.items.map((item) => (
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

      {/* Gallery / sub-types */}
      {detail.gallery ? (
        <section aria-labelledby="detail-gallery" className="py-14 sm:py-16">
          <Container>
            <h2
              id="detail-gallery"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700"
            >
              {detail.gallery.heading}
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {detail.gallery.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 70}>
                  <figure className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-hairline">
                    <div className="relative aspect-square bg-zinc-50">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 16rem"
                        className="object-contain p-6"
                      />
                    </div>
                    <figcaption className="border-t border-hairline px-4 py-3 text-center text-sm font-medium text-ink">
                      {item.name}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Other services */}
      <section aria-labelledby="other-services" className="pb-4">
        <Container>
          <h2
            id="other-services"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted"
          >
            Other services
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.key}
                href={other.href}
                className="group flex items-center justify-between gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-hairline transition-all hover:-translate-y-0.5 hover:ring-brand-200"
              >
                <span className="text-sm font-semibold tracking-tight text-ink">
                  {other.name}
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

      <ContactSection />
    </>
  );
}
