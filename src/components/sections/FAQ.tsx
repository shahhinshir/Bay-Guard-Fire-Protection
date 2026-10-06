import { Reveal } from "@/components/site/Reveal";
import { Container } from "@/components/ui/Container";
import { FaqJsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/content";

// Uses <details>/<summary> so every answer is present in the server-rendered
// HTML (indexable) and expandable without any JavaScript.
export function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="py-20 sm:py-24">
      <FaqJsonLd faqs={faqs} />
      <Container>
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Answers to the fire protection questions Bay Area owners and managers ask us most."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-hairline overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-hairline">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 50}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium tracking-tight text-ink transition-colors hover:bg-zinc-50 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden
                    className="relative h-4 w-4 shrink-0 text-brand-600"
                  >
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
  );
}
