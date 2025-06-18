'use client';

import Script from 'next/script';

interface ServiceStructuredDataProps {
  serviceName: string;
  description: string;
  price: string;
  category: string;
}

export default function ServiceStructuredData({
  serviceName,
  description,
  price,
  category
}: ServiceStructuredDataProps) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "category": category,
    "provider": {
      "@type": "DentalClinic",
      "name": "Pear Tree Dental",
      "url": "https://peartreedental.co.uk",
      "telephone": "+44-115-931-2935",
      "email": "info@peartreedental.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The Old Stables, Main Street",
        "addressLocality": "Burton Joyce",
        "addressRegion": "Nottinghamshire",
        "postalCode": "NG14 5AE",
        "addressCountry": "GB"
      }
    },
    "offers": {
      "@type": "Offer",
      "description": price,
      "priceCurrency": "GBP"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Burton Joyce"
      },
      {
        "@type": "Place",
        "name": "Nottingham"
      },
      {
        "@type": "Place",
        "name": "Nottinghamshire"
      }
    ]
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData)
      }}
    />
  );
}
