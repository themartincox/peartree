import type React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Footer from "@/components/Footer";
import LocationDetection from "@/components/LocationDetection";
import SmartNav from "@/components/SmartNav";              // ✅ using SmartNav
import PageTransition from "@/components/PageTransition";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import MedicalPracticeSchema from "@/components/seo/MedicalPracticeSchema";
import ServiceAreaSchema from "@/components/seo/ServiceAreaSchema";
import VoiceSearchSchema from "@/components/seo/VoiceSearchSchema";
import TrackingProvider from "@/components/cohort/TrackingProvider";

/* ... your metadata block stays the same ... */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fimages%2Fheroes%2Fpear-tree-home-hero-full.webp&w=1920&q=85"
          imagesrcset="/_next/image?url=%2Fimages%2Fheroes%2Fpear-tree-home-hero-full.webp&w=640&q=85 640w, /_next/image?url=%2Fimages%2Fheroes%2Fpear-tree-home-hero-full.webp&w=1080&q=85 1080w, /_next/image?url=%2Fimages%2Fheroes%2Fpear-tree-home-hero-full.webp&w=1920&q=85 1920w"
          imagesizes="100vw"
        />
        <link rel="preload" as="image" href="/images/dental-practice-hero-burton-joyce.webp" />
        <link rel="preload" as="image" href="/images/general-dental-checkup.webp" />
        <link rel="preload" as="image" href="/images/cosmetic-dentistry-services.webp" />

        <link rel="canonical" href="https://peartree.dental" />
        {/* ... rest of your <head> unchanged ... */}
        <LocalBusinessSchema includeDentistSpecific />
        <MedicalPracticeSchema specialty="Comprehensive Dentistry" />
        <ServiceAreaSchema primaryLocation="Nottingham" specialization="Dental Care" />
        <VoiceSearchSchema />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`min-h-screen bg-pear-background ${cormorantGaramond.variable} ${montserrat.variable}`}>
        <TrackingProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pear-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-pear-gold"
            aria-label="Skip to main content"
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
          <SmartNav /> {/* ✅ swapped in */}

          <main id="main-content" className="min-h-screen" role="main">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <LocationDetection />
        </TrackingProvider>

        {/* Simple Analytics - deferred */}
        <Script strategy="afterInteractive" src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
