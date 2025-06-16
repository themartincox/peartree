import Script from "next/script";

interface MedicalOrganizationSchemaProps {
  page?: 'home' | 'services' | 'about' | 'contact' | 'membership';
  serviceType?: string;
}

export default function MedicalOrganizationSchema({
  page = 'home',
  serviceType
}: MedicalOrganizationSchemaProps) {

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": ["DentistOffice", "MedicalOrganization", "LocalBusiness"],
    "name": "Pear Tree Dental Centre",
    "alternateName": "Pear Tree Dental",
    "url": "https://peartreedental.co.uk",
    "logo": "https://peartreedental.co.uk/logo.png",
    "image": [
      "https://peartreedental.co.uk/images/practice-exterior.jpg",
      "https://peartreedental.co.uk/images/practice-interior.jpg",
      "https://peartreedental.co.uk/images/dental-team.jpg"
    ],
    "description": "Modern dental practice in Burton Joyce offering comprehensive dental care including general dentistry, cosmetic treatments, orthodontics, and emergency care. Membership plans available from £10.95/month.",

    // Contact Information
    "telephone": "+441159312520",
    "email": "peartreedentalcentre@outlook.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+441159312520",
      "contactType": "customer service",
      "areaServed": ["GB-NTT", "Nottinghamshire"],
      "availableLanguage": ["English"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    },

    // Location
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

    // Opening Hours
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-14:00"
    ],

    // Medical Specialty
    "medicalSpecialty": [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Restorative Dentistry",
      "Emergency Dentistry",
      "Orthodontics",
      "Preventive Dentistry"
    ],

    // Services Offered
    "availableService": [
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
        "name": "Dental Fillings",
        "procedureType": "Restorative"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Teeth Whitening",
        "procedureType": "Cosmetic"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Veneers",
        "procedureType": "Cosmetic"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Orthodontic Treatment",
        "procedureType": "Orthodontic"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Implants",
        "procedureType": "Restorative"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Emergency Dental Care",
        "procedureType": "Emergency"
      }
    ],

    // Staff/Doctors
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
      }
    ],

    // Reviews
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "127"
    },

    // Payment Options
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
    "currenciesAccepted": "GBP",
    "priceRange": "££",

    // Areas Served
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

    // Membership Plans
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Adult Dental Membership Plan",
        "description": "Comprehensive dental care for adults with 2 check-ups per year, 2 hygiene appointments, and 20% discount on treatments",
        "price": "14.99",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "14.99",
          "priceCurrency": "GBP",
          "unitText": "MONTH"
        }
      },
      {
        "@type": "Offer",
        "name": "Child Dental Membership Plan",
        "description": "Specialised dental care for children with preventive focus and most treatments included",
        "price": "8.99",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "8.99",
          "priceCurrency": "GBP",
          "unitText": "MONTH"
        }
      }
    ]
  };

  // Add page-specific enhancements
  if (page === 'services' && serviceType) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (baseSchema as any).mainContentOfPage = {
      "@type": "MedicalWebPage",
      "about": {
        "@type": "MedicalProcedure",
        "name": serviceType
      }
    };
  }

  if (page === 'membership') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (baseSchema as any).offers = baseSchema.makesOffer;
  }

  return (
    <Script
      id="medical-organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseSchema)
      }}
    />
  );
}
