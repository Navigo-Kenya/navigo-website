import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://navigo.co.ke"),
  title: {
    default: "Navigo — Navigate the city you live in",
    template: "%s | Navigo",
  },
  description:
    "Real-time matatu and bus navigation for Nairobi. Live tracking, AI-powered route planning, service alerts, built for the city you actually live in.",
  keywords: ["matatu", "Nairobi", "bus", "transit", "navigation", "Kenya", "public transport", "route planner"],
  applicationName: "Navigo",
  authors: [{ name: "Navigo Kenya", url: "https://navigo.co.ke" }],
  creator: "Navigo Kenya",
  publisher: "Navigo Kenya",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Navigo",
    // og:image injected by opengraph-image.tsx file convention
  },
  twitter: {
    card: "summary_large_image",
    site: "@navigo_ke",
    creator: "@navigo_ke",
    // twitter:image falls back to og:image; twitter-image.tsx overrides per-page
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // favicon.ico auto-detected from app/favicon.ico
  // apple-icon auto-detected from app/apple-icon.tsx
};

export const viewport: Viewport = {
  themeColor: "#FF6F00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
