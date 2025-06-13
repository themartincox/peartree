import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

// Optimize Google Fonts loading with font-display: swap
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pear Tree Dental - Premium Dentistry in Burton Joyce",
    default: "Pear Tree Dental - Premium Dentistry in Burton Joyce, Nottinghamshire"
  },
  description: "Premium dental care in Burton Joyce, Nottinghamshire. Modern dentistry with a personal touch. NHS and private treatments, membership plans from £8.99/month. Book your consultation today.",
  keywords: [
    "dentist Burton Joyce",
    "dental practice Nottinghamshire",
    "cosmetic dentistry",
    "dental implants",
    "Invisalign",
    "emergency dentist",
    "dental membership plans",
    "NHS dentist",
    "private dentistry"
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
    title: "Pear Tree Dental - Premium Dentistry in Burton Joyce",
    description: "Premium dental care in Burton Joyce, Nottinghamshire. Modern dentistry with a personal touch.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pear Tree Dental - Premium Dentistry in Burton Joyce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pear Tree Dental - Premium Dentistry in Burton Joyce",
    description: "Premium dental care in Burton Joyce, Nottinghamshire. Modern dentistry with a personal touch.",
    images: ["/og-image.jpg"],
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
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect for critical font resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link rel="canonical" href="https://peartree.dental" />
        <meta name="geo.region" content="GB-NTT" />
        <meta name="geo.placename" content="Burton Joyce" />
        <meta name="geo.position" content="52.9769;-1.0085" />
        <meta name="ICBM" content="52.9769, -1.0085" />

        <LocalBusinessSchema includeDentistSpecific={true} />
      </head>
      <body className={`min-h-screen bg-pear-background ${cormorantGaramond.variable} ${montserrat.variable}`}>
        <Navigation />
        <main className="min-h-screen">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
