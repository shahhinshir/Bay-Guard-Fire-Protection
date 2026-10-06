// Global typing for the Google Ads gtag() function loaded via next/script.
export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event" | "config" | "js" | "set",
      targetId: string | Date,
      params?: Record<string, unknown>,
    ) => void;
  }
}
