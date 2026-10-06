import Image from "next/image";

import { Reveal } from "@/components/site/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/content/content";

const standards: { value: string; label: string }[] = [
  { value: "NFPA 101", label: "Life Safety Code inspections" },
  { value: "UL-300", label: "Kitchen suppression compliant" },
  { value: "C-16 License", label: "State Fire Marshal certified" },
  { value: "24/7", label: "Emergency Bay Area response" },
];

export function ProofBand() {
  return (
    <section aria-labelledby="standards-heading" className="py-8 sm:py-12">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink text-white shadow-lift">
            {/* background image + overlays for depth */}
            <Image
              src={images.fireSprinklers}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 1024px) 100vw, 72rem"
              className="object-cover opacity-25"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl"
            />

            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14 lg:p-16">
              <div>
                <Eyebrow className="bg-white/10 text-white ring-white/20">
                  Standards &amp; compliance
                </Eyebrow>
                <h2
                  id="standards-heading"
                  className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
                >
                  Every job meets code, not guesswork.
                </h2>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-white/70">
                  We inspect, install, and certify to the exact standards your
                  building is held to, so you pass inspection and stay protected
                  year-round.
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15">
                {standards.map((item) => (
                  <div key={item.value} className="bg-ink/60 p-5 backdrop-blur-sm sm:p-6">
                    <dt className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {item.value}
                    </dt>
                    <dd className="mt-1 text-sm leading-snug text-white/60">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
