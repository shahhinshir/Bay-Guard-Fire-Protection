"use client";

import {
  buttonClasses,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/icons";
import { SITE } from "@/content/site";

/**
 * Click-to-call button that reports the tap to Google Ads.
 *
 * - Always fires a `click_to_call` event (useful in Analytics as a soft
 *   signal of call intent).
 * - Fires a conversion when `SITE.analytics.callConversionLabel` is set,
 *   so taps count toward the website phone-call conversion created in
 *   Google Ads (see the playbook, Part 3.2). No-ops until that label
 *   exists, so it is safe to ship now.
 */
export function CallButton({
  variant = "secondary",
  size = "lg",
  className,
  label,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Override the visible text; defaults to "Call (xxx) xxx-xxxx". */
  label?: string;
}) {
  const handleClick = () => {
    window.gtag?.("event", "click_to_call", {
      event_category: "engagement",
      event_label: "call_button",
    });
    const { callConversionLabel } = SITE.analytics;
    if (callConversionLabel) {
      window.gtag?.("event", "conversion", { send_to: callConversionLabel });
    }
  };

  return (
    <a
      href={SITE.phone.href}
      onClick={handleClick}
      className={buttonClasses(variant, size, className)}
    >
      <PhoneIcon className="h-4 w-4" width={16} height={16} />
      {label ?? `Call ${SITE.phone.display}`}
    </a>
  );
}
