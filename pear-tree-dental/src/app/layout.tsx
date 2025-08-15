import React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import LocationDetection from "@/components/LocationDetection";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import MedicalPracticeSchema from "@/components/seo/MedicalPracticeSchema";
import ServiceAreaSchema from "@/components/seo/ServiceAreaSchema";
import VoiceSearchSchema from "@/components/seo/VoiceSearchSchema";

 Optimize Google Fonts loading with font-display: swap
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peartree.dental"),
  title: {
    template: "%s | Pear Tree Dental - Private Dentist Nottingham",
    default:
      "Private Dentist Nottingham | Pear Tree Dental | Trusted Family & Cosmetic Care",
  },
  description:
    "Private dentist in Nottingham offering trusted family and cosmetic dental care. Modern treatments including dental implants, Invisalign, teeth whitening, and emergency care. NHS and private options with membership plans from £10.95/month. Book today.",
  keywords: [
    "private dentist Nottingham",
    "family dentist Nottingham",
    "cosmetic dentistry Nottingham",
    "dental implants Nottingham",
    "Invisalign Nottingham",
    "emergency dentist Nottingham",
    "private dental practice Nottingham",
    "NHS dentist Nottingham",
    "teeth whitening Nottingham",
    "dental membership plans",
    "dentist Burton Joyce",
    "dental practice Nottinghamshire",
    "root canal treatment",
    "dental hygienist Nottingham",
    "preventive dentistry",
    "oral health Nottingham",
  ],
  authors: [{ name: "Pear Tree Dental" }],
  creator: "Pear Tree Dental",
  publisher: "Pear Tree Dental",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://peartree.dental",
    siteName: "Pear Tree Dental",
    title:
      "Private Dentist Nottingham | Pear Tree Dental | Trusted Family & Cosmetic Care",
    description:
      "Private dentist in Nottingham offering trusted family and cosmetic dental care. Modern treatments including dental implants, Invisalign, teeth whitening, and emergency care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern dental clinic interior - Pear Tree Dental, Burton Joyce",
        type: "image/jpeg",
      },
      {
        url: "/social-image.jpg",
        width: 800,
        height: 600,
        alt: "Professional dental care at Pear Tree Dental",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PearTreeDental",
    creator: "@PearTreeDental",
    title:
      "Private Dentist Nottingham | Pear Tree Dental | Trusted Family & Cosmetic Care",
    description:
      "Private dentist in Nottingham offering trusted family and cosmetic dental care. NHS & private treatments, implants, Invisalign & emergency care.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch for faster font loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect for critical font resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical images for LCP optimization */}
        <link rel="preload" as="image" href="/images/dental-practice-hero-burton-joyce.webp" />
        <link rel="preload" as="image" href="/images/general-dental-checkup.webp" />
        <link rel="preload" as="image" href="/images/cosmetic-dentistry-services.webp" />

        <link rel="canonical" href="https://peartree.dental" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <meta name="theme-color" content="#09394d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pear Tree Dental" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Pear Tree Dental" />
        <meta name="msapplication-TileColor" content="#09394d" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="GB-NTT" />
        <meta name="geo.placename" content="Nottingham" />
        <meta name="geo.position" content="52.9769;-1.0085" />
        <meta name="ICBM" content="52.9769, -1.0085" />

        {/* Additional SEO Meta Tags */}
        <meta
          name="business-hours"
          content="Monday-Thursday: 8:45AM-5:00PM, Friday: 8:00AM-3:30PM, Saturday-Sunday: Closed"
        />
        <meta name="payment-accepted" content="Cash, Credit Card, NHS, Private Insurance" />
        <meta name="rating" content="4.9" />
        <meta name="review-count" content="460" />
        <meta
          name="service-area"
          content="Burton Joyce, Nottingham, Gedling, Arnold, Carlton, Mapperley, West Bridgford, Lowdham, East Bridgford, Bingham, NG4, NG14, Rivendell, Radcliffe-on-Trent"
        />

        {/* Medical Practice Meta Tags */}
        <meta name="medical-specialty" content="General Dentistry, Cosmetic Dentistry, Orthodontics, Oral Surgery" />
        <meta name="healthcare-provider" content="NHS and Private Dental Practice" />
        <meta name="emergency-services" content="Available" />

        <LocalBusinessSchema includeDentistSpecific={true} />
        <MedicalPracticeSchema specialty="Comprehensive Dentistry" />
        <ServiceAreaSchema primaryLocation="Nottingham" specialization="Dental Care" />
        <VoiceSearchSchema />

        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`min-h-screen bg-pear-background ${cormorantGaramond.variable} ${montserrat.variable}`}
      >
        {/* Skip Links for Screen Readers */}
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
          aria-label="Skip to navigation"
        >
          Skip to navigation
        </a>

        <ServiceWorkerRegistration />
        <Navigation />

        <main id="main-content" className="min-h-screen" role="main">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
        <LocationDetection />
      </body>
    </html>
  );
}