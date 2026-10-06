import Image from "next/image";

import { GridBackground } from "@/components/site/GridBackground";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRightIcon, CheckIcon, ShieldIcon } from "@/components/ui/icons";
import { images, services, trustPoints } from "@/content/content";
import { SITE } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6">
      <GridBackground
        variant="grid"
        className="[mask-image:radial-gradient(120%_90%_at_70%_0%,#000_30%,transparent_80%)]"
      />
      {/* soft warm glow behind the image */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[42rem] w-[42rem] rounded-full bg-brand-100/60 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="animate-rise">
          <Eyebrow>{SITE.areaServedLabel}</Eyebrow>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.75rem]">
            Bay Area{" "}
            <span className="text-gradient">fire protection</span>, done right.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Bay Guard Fire Protection inspects, installs, and maintains fire
            extinguishers, sprinklers, kitchen suppression, and exit &amp;
            emergency lights for commercial and residential properties across
            the Bay Area.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" size="lg">
              Get a free quote
              <ArrowRightIcon className="h-4 w-4" width={16} height={16} />
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Explore services
            </ButtonLink>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
            {["Licensed, bonded & insured", "24/7 emergency service", "Free quotes"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-brand-600" width={16} height={16} />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Layered visual */}
        <div className="animate-rise [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md lg:mr-0">
            {/* primary image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-hairline">
              <Image
                src={images.hero}
                alt="Bay Guard technician servicing fire protection equipment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 28rem"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
              />
            </div>

            {/* overlapping secondary image */}
            <div className="absolute -bottom-10 -left-10 hidden w-44 overflow-hidden rounded-xl shadow-lift ring-4 ring-canvas sm:block">
              <div className="relative aspect-[4/3]">
                <Image
                  src={images.fireExInspection}
                  alt="Technician inspecting a fire extinguisher"
                  fill
                  sizes="11rem"
                  className="object-cover"
                />
              </div>
            </div>

            {/* floating 24/7 card */}
            <div className="absolute -right-4 top-6 rounded-xl bg-white/90 p-4 shadow-lift ring-1 ring-hairline backdrop-blur-md sm:-right-8">
              <p className="text-3xl font-bold tracking-tight text-brand-600">24/7</p>
              <p className="text-xs font-medium text-ink-muted">Emergency response</p>
            </div>

            {/* floating credential card */}
            <div className="absolute -bottom-6 right-4 flex items-center gap-2.5 rounded-xl bg-white/90 px-4 py-3 shadow-lift ring-1 ring-hairline backdrop-blur-md sm:right-0">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <ShieldIcon className="h-4 w-4" width={16} height={16} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">C-16 Licensed</p>
                <p className="text-xs text-ink-muted">State Fire Marshal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-y border-hairline bg-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-hairline px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="px-4 py-7 text-center lg:py-8">
              <dt className="sr-only">{point.label}</dt>
              <dd>
                <span className="block text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {point.value}
                </span>
                <span className="mt-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {point.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* keep a semantic reference to services for crawlers even above the fold */}
      <p className="sr-only">
        Services offered: {services.map((s) => s.name).join(", ")}.
      </p>
    </section>
  );
}
