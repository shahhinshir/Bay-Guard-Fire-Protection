import { SITE } from "@/content/site";
import { PhoneIcon, ShieldIcon } from "@/components/ui/icons";

/** Slim top utility bar — 24/7 message + click-to-call. Server component. */
export function Banner() {
  return (
    <div className="bg-brand-600 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2 text-[0.8rem] sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 font-medium">
          <ShieldIcon className="h-4 w-4 text-brand-100" width={16} height={16} />
          <span className="hidden sm:inline">
            Licensed, bonded &amp; insured &middot; 24/7 service across the Bay Area
          </span>
          <span className="sm:hidden">24/7 Bay Area service</span>
        </p>
        <a
          href={SITE.phone.href}
          className="flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-90"
        >
          <PhoneIcon className="h-4 w-4" width={16} height={16} />
          {SITE.phone.display}
        </a>
      </div>
    </div>
  );
}
