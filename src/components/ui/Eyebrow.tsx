import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/** Small kicker label above a heading, in the brand accent. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700 ring-1 ring-brand-100",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden />
      {children}
    </span>
  );
}
