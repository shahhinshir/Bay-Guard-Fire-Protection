import { GridBackground } from "@/components/site/GridBackground";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { SITE } from "@/content/site";

export function ContactSection({
  heading = "Contact us today for a free quote",
  headingId = "contact-heading",
}: {
  heading?: string;
  headingId?: string;
}) {
  return (
    <section aria-labelledby={headingId} className="py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-hairline lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info panel */}
          <div className="relative overflow-hidden bg-brand-700 p-8 text-white sm:p-10 lg:p-12">
            <GridBackground className="opacity-20 [mask-image:radial-gradient(120%_120%_at_20%_0%,#000,transparent_75%)]" />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-brand-500/40 blur-3xl"
            />
            <div className="relative">
              <Eyebrow className="bg-white/10 text-white ring-white/20">
                Get in touch
              </Eyebrow>
              <h2
                id={headingId}
                className="mt-5 text-balance text-3xl font-semibold tracking-tight"
              >
                {heading}
              </h2>
              <p className="mt-4 max-w-sm text-pretty text-brand-50/90">
                Tell us what you need protected. We serve the entire{" "}
                {SITE.areaServedLabel}, 24/7.
              </p>

              <dl className="mt-10 space-y-5 text-sm">
                <div className="flex items-center gap-3">
                  <dt className="sr-only">Phone</dt>
                  <PhoneIcon className="h-5 w-5 text-brand-200" width={18} height={18} />
                  <dd>
                    <a href={SITE.phone.href} className="font-medium hover:underline">
                      {SITE.phone.display}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="sr-only">Email</dt>
                  <MailIcon className="h-5 w-5 text-brand-200" width={18} height={18} />
                  <dd>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="break-all font-medium hover:underline"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="sr-only">Hours</dt>
                  <ClockIcon className="h-5 w-5 text-brand-200" width={18} height={18} />
                  <dd className="font-medium">24/7 business hours</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 sm:p-10 lg:p-12">
            <Reveal>
              <h3 className="text-lg font-semibold tracking-tight text-ink">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                We&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
