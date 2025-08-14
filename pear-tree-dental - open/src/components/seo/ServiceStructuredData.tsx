"use client";

import Script from "next/script";

interface ServiceStructuredDataProps {
  serviceName: string;
  description: string;
  price?: string;
  category?: string;
  provider?: {
    "@type": string;
    name: string;
    address?: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  areaServed?: string[];
  availableChannel?: {
    "@type": string;
    serviceUrl: string;
    servicePhone: string;
  };
}

export default function ServiceStructuredData({
  serviceName,
  description,
  price,
  category,
  provider,
  areaServed,
  availableChannel,
}: ServiceStructuredDataProps) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    ...(category && { category: category }),
    provider: provider || {
      "@type": "DentalClinic",
      name: "Pear Tree Dental",
      url: "https://peartree.dental",
      telephone: "+44-115-931-2935",
      email: "hello@peartree.dental",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22 Nottingham Road",
        addressLocality: "Burton Joyce",
        addressRegion: "Nottinghamshire",
        postalCode: "NG14 5AE",
        addressCountry: "GB",
      },
    },
    ...(price && {
      offers: {
        "@type": "Offer",
        description: price,
        priceCurrency: "GBP",
      },
    }),
    areaServed: areaServed?.map((area) => ({
      "@type": "Place",
      name: area,
    })) || [
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
    ],
    ...(availableChannel && { availableChannel: availableChannel }),
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData),
      }}
    />
  );
}
