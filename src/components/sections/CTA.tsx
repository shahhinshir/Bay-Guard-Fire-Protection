import Image from "next/image";

import { GridBackground } from "@/components/site/GridBackground";
import { Reveal } from "@/components/site/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { images } from "@/content/content";

export function CTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-700 text-white shadow-lift">
            <GridBackground className="opacity-[0.18] [mask-image:radial-gradient(120%_120%_at_100%_0%,#000,transparent_70%)]" />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl"
            />

            <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-10 lg:p-14">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Protect your business, property, and people.
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-brand-50/90">
                  We provide fire safety solutions for building owners,
                  real-estate managers, contractors, engineers, and architects,
                  from annual inspections to full system installation.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="secondary" size="lg">
                    Contact us
                    <ArrowRightIcon className="h-4 w-4" width={16} height={16} />
                  </ButtonLink>
                  <ButtonLink
                    href="/services"
                    size="lg"
                    className="bg-brand-800/60 text-white ring-1 ring-white/20 hover:bg-brand-800"
                  >
                    View all services
                  </ButtonLink>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/15">
                <Image
                  src={images.sprinkler}
                  alt="Commercial fire sprinkler head"
                  fill
                  sizes="(max-width: 1024px) 100vw, 24rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
