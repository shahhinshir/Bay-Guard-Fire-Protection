import type { Metadata } from "next";
import Image from "next/image";

import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { Container } from "@/components/ui/Container";
import { CheckIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/JsonLd";
import { about, perks } from "@/content/content";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const title = "About Us";
const description =
  "Bay Guard Fire Protection is a locally owned, state-licensed fire protection company serving the Bay Area with inspection, installation, and maintenance for sprinklers, extinguishers, and suppression systems.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd path="/about-us" name={`${title} | Bay Guard Fire Protection`} description={description} />

      <PageHeader eyebrow={about.eyebrow} title={about.title} description={about.intro} />

      {/* Intro image */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-lift ring-1 ring-hairline">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={about.heroImage}
                    alt={about.heroImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 32rem"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Our mission
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
                  {about.mission.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Perks */}
      <section aria-labelledby="about-perks" className="pb-8">
        <Container>
          <h2 id="about-perks" className="sr-only">
            Why work with {SITE.name}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-hairline">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <CheckIcon className="h-5 w-5" width={18} height={18} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {perk.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Marquee />
      <ContactSection />
    </>
  );
}
