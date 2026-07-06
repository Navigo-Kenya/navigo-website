import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const dynamic = "force-static";
export const alt = "Navigo — Navigate the city you live in";
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
        {/* Top orange accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "#FF6F00", display: "flex" }} />

        {/* Top-right radial glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "rgba(255, 111, 0, 0.13)",
            display: "flex",
          }}
        />

        {/* Bottom-center subtle glow */}
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: "25%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(255, 111, 0, 0.05)",
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
            <img src={logoSrc} height={36} alt="Navigo" />
          </div>

          {/* Headline block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Title — two lines via separate spans in a column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <span style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-2.5px" }}>
                Navigate the city
              </span>
              <span style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-2.5px" }}>
                you live in.
              </span>
            </div>
            {/* Tagline */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 24, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                Real-time matatu & bus navigation for Nairobi.
              </span>
              <span style={{ fontSize: 24, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                AI-powered routing, live tracking.
              </span>
            </div>
          </div>

          {/* Footer row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 16, color: "rgba(255,255,255,0.28)", letterSpacing: "0.3px" }}>
              navigo.co.ke
            </span>
            <div
              style={{
                display: "flex",
                background: "rgba(255,111,0,0.15)",
                border: "1px solid rgba(255,111,0,0.35)",
                borderRadius: 100,
                padding: "9px 22px",
                fontSize: 14,
                fontWeight: 600,
                color: "#FF6F00",
                letterSpacing: "0.4px",
              }}
            >
              iOS & Android
            </div>
          </div>
        </div>

        {/* Right decorative — abstract route line */}
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: 2, height: 90, background: "rgba(255,111,0,0.2)", display: "flex" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FF6F00", display: "flex" }} />
          <div style={{ width: 2, height: 70, background: "rgba(255,111,0,0.18)", display: "flex" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,111,0,0.55)", display: "flex" }} />
          <div style={{ width: 2, height: 55, background: "rgba(255,111,0,0.13)", display: "flex" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,111,0,0.3)", display: "flex" }} />
          <div style={{ width: 2, height: 50, background: "rgba(255,111,0,0.08)", display: "flex" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,111,0,0.18)", display: "flex" }} />
          <div style={{ width: 2, height: 80, background: "rgba(255,111,0,0.05)", display: "flex" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
