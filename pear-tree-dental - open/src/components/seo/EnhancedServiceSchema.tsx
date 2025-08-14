"use client";

import Script from "next/script";

interface EnhancedServiceSchemaProps {
  serviceName: string;
  description: string;
  price: string;
  category: string;
  duration?: string;
  preparation?: string;
  recovery?: string;
  benefits?: string[];
  risks?: string[];
  rating?: number;
  reviewCount?: number;
  url?: string;
  procedureType?: "MedicalProcedure" | "Service";
}

export default function EnhancedServiceSchema({
  serviceName,
  description,
  price,
  category,
  duration,
  preparation,
  recovery,
  benefits = [],
  risks = [],
  rating = 4.8,
  reviewCount = 127,
  url,
  procedureType = "MedicalProcedure",
}: EnhancedServiceSchemaProps) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": procedureType,
    name: serviceName,
    description: description,
    category: category,
    url:
      url ||
      `https://peartree.dental/services/${serviceName.toLowerCase().replace(/\s+/g, "-")}`,
    provider: {
      "@type": "DentalClinic",
      name: "Pear Tree Dental",
      url: "https://peartree.dental",
      telephone: "+44-115-931-2935",
      email: "hello@peartree.dental",
      priceRange: "££-£££",
      paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Finance"],
      currenciesAccepted: "GBP",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22 Nottingham Road",
        addressLocality: "Burton Joyce",
        addressRegion: "Nottinghamshire",
        postalCode: "NG14 5AE",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "52.9617",
        longitude: "-1.0731",
      },
      openingHours: ["Mo-Th 08:00-17:00", "Fr 08:00-16:00"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating,
        reviewCount: reviewCount,
        bestRating: "5",
        worstRating: "1",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional License",
        recognizedBy: {
          "@type": "Organization",
          name: "General Dental Council",
        },
      },
    },
    offers: {
      "@type": "Offer",
      description: price,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
      priceValidUntil: new Date(
        Date.now() + 365 * 24 * 60 * 60 * 1000,
      ).toISOString(),
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Burton Joyce",
      },
      {
        "@type": "Place",
        name: "Nottingham",
      },
      {
        "@type": "Place",
        name: "Nottinghamshire",
      },
      {
        "@type": "Place",
        name: "East Bridgford",
      },
      {
        "@type": "Place",
        name: "Lowdham",
      },
      {
        "@type": "Place",
        name: "Colwick",
      },
    ],
  };

  // Add medical procedure specific data
  if (procedureType === "MedicalProcedure") {
    Object.assign(baseData, {
      procedureType: "Dental",
      bodyLocation: {
        "@type": "AnatomicalStructure",
        name: "Teeth and Oral Cavity",
      },
      followup: recovery || "Follow-up appointments as recommended",
      preparation: preparation || "Consultation and examination required",
    });

    if (duration) {
      Object.assign(baseData, {
        estimatedDuration: duration,
      });
    }

    if (benefits.length > 0) {
      Object.assign(baseData, {
        expectedResult: benefits.join(", "),
      });
    }

    if (risks.length > 0) {
      Object.assign(baseData, {
        riskFactor: risks.join(", "),
      });
    }
  }

  return (
    <Script
      id={`enhanced-service-schema-${serviceName.replace(/\s+/g, "-").toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseData),
      }}
    />
  );
}
