import type { ReactNode } from "react";

import { GridBackground } from "@/components/site/GridBackground";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional actions (e.g. buttons) below the description. */
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <GridBackground variant="grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-brand-100/50 blur-3xl"
      />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl animate-rise">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
