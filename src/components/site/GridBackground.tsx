import { cn } from "@/lib/cn";

/**
 * Faint grid backdrop, faded at the edges with a radial mask.
 * Purely decorative — sits behind content and never intercepts clicks.
 */
export function GridBackground({
  className,
  variant = "grid",
}: {
  className?: string;
  variant?: "grid" | "dots";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        variant === "grid" ? "bg-grid" : "bg-dots",
        "[mask-image:radial-gradient(120%_100%_at_50%_0%,#000_35%,transparent_85%)]",
        className,
      )}
    />
  );
}
