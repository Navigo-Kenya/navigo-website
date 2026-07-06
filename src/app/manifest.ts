import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Navigo",
    short_name: "Navigo",
    description: "Real-time matatu and bus navigation for Nairobi.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#FF6F00",
    orientation: "portrait",
    categories: ["navigation", "travel", "utilities"],
    icons: [
      { src: "/favicon.ico",   sizes: "any",         type: "image/x-icon" },
      { src: "/navigo.png",    sizes: "512x512",     type: "image/png",   purpose: "any" },
      { src: "/navigo.png",    sizes: "512x512",     type: "image/png",   purpose: "maskable" },
    ],
  };
}
