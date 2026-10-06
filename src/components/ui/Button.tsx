import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold tracking-tight transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:opacity-60 disabled:pointer-events-none";

const sizes = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3 text-[0.95rem]",
} as const;

const variants = {
  primary:
    "bg-brand-600 text-white shadow-[0_1px_2px_rgba(185,28,28,0.4),0_10px_24px_-12px_rgba(220,38,38,0.7)] hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white text-ink ring-1 ring-hairline shadow-soft hover:ring-zinc-300 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink-soft hover:text-ink hover:bg-zinc-100",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonAsLink = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonAsLink) {
  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
