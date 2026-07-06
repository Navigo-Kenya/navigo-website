import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommunityPage } from "@/components/sections/CommunityPage";

export const metadata: Metadata = {
  title: "Community",
  description: "Join thousands of Nairobi riders who make Navigo better every day. Report delays, fix stops, upload photos — earn Safiri Points.",
  alternates: { canonical: "https://navigo.co.ke/community" },
  openGraph: {
    title: "Navigo Community",
    description: "Join thousands of Nairobi riders who make Navigo better every day.",
    url: "https://navigo.co.ke/community",
    siteName: "Navigo",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navigo Community",
    description: "Join thousands of Nairobi riders who make Navigo better every day.",
    site: "@navigo_ke",
    creator: "@navigo_ke",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CommunityPage />
      </main>
      <Footer />
    </>
  );
}
