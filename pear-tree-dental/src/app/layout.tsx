import type React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Footer from "@/components/Footer";
import SmartNav from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import MedicalPracticeSchema from "@/components/seo/MedicalPracticeSchema";
import ServiceAreaSchema from "@/components/seo/ServiceAreaSchema";
import VoiceSearchSchema from "@/components/seo/VoiceSearchSchema";

import ClientProviders from "@/components/ClientProviders";
import LocationSlideIn from "@/components/LocationSlideIn";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peartree.dental"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://peartree.dental" />
        <LocalBusinessSchema includeDentistSpecific />
        <MedicalPracticeSchema specialty="Comprehensive Dentistry" />
        <ServiceAreaSchema primaryLocation="Nottingham" specialization="Dental Care" />
        <VoiceSearchSchema />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to analytics domains (non-blocking, helps first beacon) */}
        <link rel="preconnect" href="https://scripts.simpleanalyticscdn.com" crossOrigin="" />
        <link rel="preconnect" href="https://queue.simpleanalyticscdn.com" crossOrigin="" />

        {/* Note: Avoid global preloads of hero images to prevent unused-preload warnings on non-home pages.
            Use Next/Image `priority` on the specific page components instead (see Hero.tsx). */}
        {/* If your LCP image ever comes from a remote host (e.g., Contentful), add a preconnect:
        <link rel="preconnect" href="https://images.ctfassets.net" crossOrigin="" />
        */}
      </head>

      <body className={`min-h-screen bg-pear-background ${cormorantGaramond.variable} ${montserrat.variable}`}>
        <ClientProviders>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pear-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-pear-gold"
          >
            Skip to main content
          </a>
          <a
            href="#navigation"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 focus:z-50 focus:px-4 focus:py-2 focus:bg-pear-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-pear-gold"
          >
            Skip to navigation
          </a>

          <ServiceWorkerRegistration />

          {/* ⭐ Ensure the target for #navigation exists */}
          <div id="navigation">
            <SmartNav />
          </div>

          <main id="main-content" className="min-h-screen" role="main">
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />

          <LocationSlideIn />
          <WhatsAppWidget />
        </ClientProviders>

        <Script strategy="lazyOnload" src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
