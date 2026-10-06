import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { SITE } from "@/content/site";

/**
 * Analytics stack.
 * - Google Ads (gtag): `afterInteractive` — Google's recommended strategy;
 *   it loads once the page is interactive, so it never blocks the LCP.
 * - Vercel Analytics + Speed Insights: real-user field data (Web Vitals),
 *   loaded lazily by their own components.
 */
export function SiteAnalytics() {
  const { googleAdsId } = SITE.analytics;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAdsId}');`}
      </Script>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
}
