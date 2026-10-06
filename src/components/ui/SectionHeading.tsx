import type { ReactNode } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={60}>
        <h2
          id={id}
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={120}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
