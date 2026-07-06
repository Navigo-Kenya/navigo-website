import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const dynamic = "force-static";
export const alt = "Navigo Privacy Policy";
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
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "#FF6F00", display: "flex" }} />
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "rgba(255, 111, 0, 0.08)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 80px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logoSrc} height={32} alt="Navigo" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Section label */}
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 100,
                padding: "6px 18px",
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.5px",
              }}
            >
              Legal
            </div>

            <span style={{ fontSize: 76, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.0, letterSpacing: "-2.5px" }}>
              Privacy Policy
            </span>

            <span style={{ fontSize: 22, color: "rgba(255,255,255,0.45)", lineHeight: 1.4, maxWidth: 560 }}>
              How Navigo collects, uses, and protects your personal data.
            </span>
          </div>

          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.22)" }}>
            navigo.co.ke/privacy
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
