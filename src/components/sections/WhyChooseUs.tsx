import Image from "next/image";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { images, perks } from "@/content/content";

export function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-heading"
      className="border-y border-hairline bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-lift ring-1 ring-hairline">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={images.pipe}
                  alt="Fire sprinkler pipe network installed by Bay Guard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 32rem"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              id="why-heading"
              eyebrow="Why choose us"
              title="A fire protection partner you can trust"
              description="Bay Guard repairs, inspects, designs, installs, and maintains fire protection systems for residential and commercial properties. We're locally owned and operated, state licensed, bonded, and insured."
            />

            <ul className="mt-8 space-y-5">
              {perks.map((perk, i) => (
                <Reveal as="li" key={perk.title} delay={i * 90} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <CheckIcon className="h-5 w-5" width={18} height={18} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-ink">
                      {perk.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {perk.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
