import { ImageResponse } from "next/og";

import { SITE } from "@/content/site";

// Shared 1200×630 social card, used by both opengraph-image and twitter-image.
// Uses next/og's built-in default font (renders offline; no network fetch).

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = `${SITE.name} | Bay Area fire protection services`;

export function renderOgImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* accent glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(220,38,38,0.12)",
            display: "flex",
          }}
        />

        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #dc2626, #991b1b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            BG
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, color: "#0a0a0b" }}>
              Bay Guard
            </span>
            <span style={{ fontSize: 22, color: "#71717a" }}>Fire Protection</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <span
            style={{
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#0a0a0b",
            }}
          >
            Bay Area fire protection,
          </span>
          <span
            style={{
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#dc2626",
            }}
          >
            done right.
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 26, color: "#3f3f46" }}>
            Sprinklers · Extinguishers · Kitchen suppression · Exit lights
          </span>
          <span style={{ fontSize: 26, fontWeight: 600, color: "#dc2626" }}>
            {SITE.phone.display}
          </span>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
