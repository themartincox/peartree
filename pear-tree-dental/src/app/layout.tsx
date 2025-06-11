import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

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
    url: "https://peartreedental.co.uk",
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
        <link rel="canonical" href="https://peartreedental.co.uk" />
        <meta name="geo.region" content="GB-NTT" />
        <meta name="geo.placename" content="Burton Joyce" />
        <meta name="geo.position" content="52.9769;-1.0085" />
        <meta name="ICBM" content="52.9769, -1.0085" />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DentalClinic",
              "name": "Pear Tree Dental",
              "image": "https://peartreedental.co.uk/og-image.jpg",
              "description": "Premium dental care in Burton Joyce, Nottinghamshire. Modern dentistry with a personal touch.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "The Old School House, Main Street",
                "addressLocality": "Burton Joyce",
                "addressRegion": "Nottinghamshire",
                "postalCode": "NG14 5DP",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.9769",
                "longitude": "-1.0085"
              },
              "telephone": "+44115931252",
              "email": "info@peartreedental.co.uk",
              "url": "https://peartreedental.co.uk",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "400"
              },
              "medicalSpecialty": [
                "General Dentistry",
                "Cosmetic Dentistry",
                "Restorative Dentistry",
                "Implant Dentistry",
                "Orthodontics",
                "Emergency Dentistry"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-pear-background">
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
