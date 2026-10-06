import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { SITE } from "@/content/site";

// A conversion confirmation page — no SEO value, so keep it out of the index.
export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <>
      <PageHeader eyebrow="Message sent" title="Thank you for reaching out">
        <span />
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-lift ring-1 ring-hairline sm:p-12">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <CheckIcon className="h-7 w-7" width={28} height={28} />
            </span>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
              Your message has been sent
            </h2>
            <p className="mt-3 text-ink-soft">
              We&apos;ll be in touch and contact you soon. For urgent needs, call
              us any time at{" "}
              <a href={SITE.phone.href} className="font-medium text-brand-700 hover:underline">
                {SITE.phone.display}
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/" size="lg">
                Back home
                <ArrowRightIcon className="h-4 w-4" width={16} height={16} />
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" size="lg">
                Explore services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
