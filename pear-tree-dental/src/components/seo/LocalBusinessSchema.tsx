import Script from "next/script";

interface LocalBusinessSchemaProps {
  includeDentistSpecific?: boolean;
}

export default function LocalBusinessSchema({ includeDentistSpecific = false }: LocalBusinessSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "DentistOffice", "MedicalOrganization"],
    "name": "Pear Tree Dental Centre",
    "alternateName": "Pear Tree Dental",
    "description": "Modern dental practice in Burton Joyce offering comprehensive dental care including general, cosmetic, and restorative dentistry. Membership plans available.",
    "url": "https://peartreedental.co.uk",
    "telephone": "+441159312520",
    "email": "peartreedentalcentre@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "22 Nottingham Road",
      "addressLocality": "Burton Joyce",
      "addressRegion": "Nottinghamshire",
      "postalCode": "NG14 5AL",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.967",
      "longitude": "-1.061"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-14:00"
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
    "currenciesAccepted": "GBP",
    "priceRange": "££",
    "image": "https://peartreedental.co.uk/images/practice-exterior.jpg",
    "logo": "https://peartreedental.co.uk/logo.png",
    "sameAs": [
      "https://www.facebook.com/peartreedentalcentre",
      "https://www.instagram.com/peartreedentalcentre"
    ],
    "founder": {
      "@type": "Person",
      "name": "Javaad Mirza",
      "jobTitle": "Principal Dentist",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Medical Degree",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "identifier": "290378"
        }
      }
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Javaad Mirza",
        "jobTitle": "Principal Dentist",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "MD, BDS",
          "recognizedBy": {
            "@type": "Organization",
            "name": "General Dental Council",
            "identifier": "290378"
          }
        }
      },
      {
        "@type": "Person",
        "name": "Imrana Ishaque",
        "jobTitle": "Principal Dentist",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "BDS, MFDS",
          "recognizedBy": {
            "@type": "Organization",
            "name": "General Dental Council",
            "identifier": "252578"
          }
        }
      },
      {
        "@type": "Person",
        "name": "Janet Kerr",
        "jobTitle": "Associate Dentist",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "BDS LDS RCS",
          "recognizedBy": {
            "@type": "Organization",
            "name": "General Dental Council",
            "identifier": "60861"
          }
        }
      },
      {
        "@type": "Person",
        "name": "Gavin Goh",
        "jobTitle": "Associate Dentist",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "BDS",
          "recognizedBy": {
            "@type": "Organization",
            "name": "General Dental Council",
            "identifier": "264893"
          }
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Dentistry",
            "description": "Comprehensive dental examinations, cleanings, and preventive care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cosmetic Dentistry",
            "description": "Teeth whitening, veneers, and aesthetic dental treatments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restorative Dentistry",
            "description": "Crowns, bridges, and dental restoration services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Dentistry",
            "description": "Same-day emergency dental care and urgent treatments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Orthodontics",
            "description": "Invisalign and ClearCorrect teeth straightening treatments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Implants",
            "description": "Permanent tooth replacement with dental implant technology"
          }
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Dental Membership Plan",
        "description": "Affordable monthly payment plan for dental care",
        "url": "https://peartreedental.co.uk/membership"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Burton Joyce"
      },
      {
        "@type": "City",
        "name": "Nottingham"
      },
      {
        "@type": "City",
        "name": "Colwick"
      },
      {
        "@type": "City",
        "name": "East Bridgford"
      },
      {
        "@type": "City",
        "name": "Lowdham"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent service and very professional team. The new patient welcome was thorough and the facilities are modern and clean."
      }
    ]
  };

  if (includeDentistSpecific) {
    // Add additional dental-specific schema
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
(localBusinessSchema as any).medicalSpecialty = [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Restorative Dentistry",
      "Emergency Dentistry",
      "Orthodontics"
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
(localBusinessSchema as any).availableService = [
      {
        "@type": "MedicalProcedure",
        "name": "Dental Examination",
        "procedureType": "Diagnostic"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Cleaning",
        "procedureType": "Preventive"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Teeth Whitening",
        "procedureType": "Cosmetic"
      }
    ];
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema)
      }}
    />
  );
  }
