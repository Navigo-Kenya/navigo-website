import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const dynamic = "force-static";
export const alt = "Navigo Community — Help make Nairobi transit better";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "navigo-white.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0A0A0A",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top orange accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "#FF6F00", display: "flex" }} />

        {/* Top-right glow */}
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(255, 111, 0, 0.1)",
            display: "flex",
          }}
        />

        {/* Main content column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 80px",
            width: "100%",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logoSrc} height={32} alt="Navigo" />
          </div>

          {/* Main block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Section label */}
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                background: "rgba(255,111,0,0.15)",
                border: "1px solid rgba(255,111,0,0.3)",
                borderRadius: 100,
                padding: "6px 18px",
                fontSize: 13,
                fontWeight: 600,
                color: "#FF6F00",
                letterSpacing: "0.5px",
              }}
            >
              Community
            </div>

            {/* Headline */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <span style={{ fontSize: 66, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-2px" }}>
                Help make Nairobi
              </span>
              <span style={{ fontSize: 66, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-2px" }}>
                transit better.
              </span>
            </div>

            {/* Tagline */}
            <span style={{ fontSize: 22, color: "rgba(255,255,255,0.48)", lineHeight: 1.4, maxWidth: 580 }}>
              Join riders who improve stop data, report delays, and keep the map accurate.
            </span>
          </div>

          {/* Footer */}
          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.25)" }}>
            navigo.co.ke/community
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
