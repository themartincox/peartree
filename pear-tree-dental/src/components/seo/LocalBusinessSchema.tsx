import Script from "next/script";

interface LocalBusinessSchemaProps {
  includeDentistSpecific?: boolean;
}

export default function LocalBusinessSchema({ includeDentistSpecific = false }: LocalBusinessSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "DentistOffice", "MedicalOrganization"],
    "name": "Pear Tree Dental Centre",
    "alternateName": ["Pear Tree Dental", "Private Dentist Nottingham"],
    "description": "Private dental practice serving Nottinghamshire offering comprehensive family and cosmetic dental care including general dentistry, cosmetic treatments, dental implants, Invisalign, and emergency care. Trusted by families across Nottingham, Burton Joyce, West Bridgford, Bingham, and East Bridgford.",
    "url": "https://peartree.dental",
    "telephone": "+441159312520",
    "email": "hello@peartree.dental",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "22 Nottingham Road",
      "addressLocality": "Burton Joyce",
      "addressRegion": "Nottinghamshire",
      "postalCode": "NG14 5AE",
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
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "NHS", "Private Insurance"],
    "currenciesAccepted": "GBP",
    "priceRange": "££",
    "image": "https://peartree.dental/images/practice-exterior.jpg",
    "logo": "https://peartree.dental/logo.png",
    "sameAs": [
      "https://www.facebook.com/peartreeDental",
      "https://www.instagram.com/peartree_dental/"
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
      "name": "Comprehensive Dental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Dentistry",
            "description": "Comprehensive dental examinations, cleanings, fillings, and preventive care for all ages",
            "provider": {
              "@type": "DentistOffice",
              "name": "Pear Tree Dental"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cosmetic Dentistry",
            "description": "Teeth whitening, veneers, composite bonding, and smile design treatments",
            "provider": {
              "@type": "DentistOffice",
              "name": "Pear Tree Dental"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restorative Dentistry",
            "description": "Crowns, bridges, dentures, and comprehensive dental restoration services",
            "provider": {
              "@type": "DentistOffice",
              "name": "Pear Tree Dental"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Dentistry",
            "description": "Same-day emergency dental care, urgent treatments, and pain relief",
            "provider": {
              "@type": "DentistOffice",
              "name": "Pear Tree Dental"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Orthodontics",
            "description": "Invisalign, ClearCorrect, and modern teeth straightening treatments for all ages",
            "provider": {
              "@type": "DentistOffice",
              "name": "Pear Tree Dental"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Implants",
            "description": "Single implants, multiple implants, and All-on-4 permanent tooth replacement solutions",
            "provider": {
              "@type": "DentistOffice",
              "name": "Pear Tree Dental"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Hygiene",
            "description": "Professional teeth cleaning, gum disease treatment, and preventive oral health care",
            "provider": {
              "@type": "DentistOffice",
              "name": "Pear Tree Dental"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Dentistry",
            "description": "Comprehensive dental care for patients of all ages from children to seniors",
            "provider": {
              "@type": "DentistOffice",
              "name": "Pear Tree Dental"
            }
          }
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Dental Membership Plan",
        "description": "Affordable monthly payment plan for dental care starting from £10.95/month",
        "url": "https://peartree.dental/membership",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "10.95",
          "priceCurrency": "GBP",
          "unitText": "MONTH"
        }
      },
      {
        "@type": "Offer",
        "name": "New Patient Consultation",
        "description": "Comprehensive dental examination and treatment planning for new patients",
        "url": "https://peartree.dental/new-patients"
      }
    ],
    "areaServed": [
      // Main practice location
      {
        "@type": "City",
        "name": "Burton Joyce",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      // Major cities and towns served
      {
        "@type": "City",
        "name": "Nottingham",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "City",
        "name": "West Bridgford",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "City",
        "name": "Bingham",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "City",
        "name": "East Bridgford",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "City",
        "name": "Arnold",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "City",
        "name": "Colwick",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "City",
        "name": "Gedling",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "City",
        "name": "Mapperly",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "City",
        "name": "Lowdham",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "City",
        "name": "Rivendell",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      // Postal code areas served
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG14",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG4",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG13",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG2",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG1",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "52.967",
        "longitude": "-1.061"
      },
      "geoRadius": "25000"
    },
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
        "itemReviewed": {
          "@type": "LocalBusiness",
          "@id": "https://peartree.dental/#organization",
          "name": "Pear Tree Dental Centre"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Excellent service and very professional team. The new patient welcome was thorough and the facilities are modern and clean.",
        "datePublished": "2024-06-15"
      }
    ]
  };

  if (includeDentistSpecific) {
    // Add comprehensive dental-specific schema
    // biome-ignore lint/suspicious/noExplicitAny: Schema requires dynamic property assignment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (localBusinessSchema as any).medicalSpecialty = [
      "General Dentistry",
      "Preventive Dentistry",
      "Cosmetic Dentistry",
      "Restorative Dentistry",
      "Emergency Dentistry",
      "Orthodontics",
      "Oral Surgery",
      "Periodontics",
      "Endodontics",
      "Prosthodontics",
      "Pediatric Dentistry",
      "Implant Dentistry",
      "Aesthetic Dentistry",
      "Family Dentistry"
    ];

    // biome-ignore lint/suspicious/noExplicitAny: Schema requires dynamic property assignment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (localBusinessSchema as any).availableService = [
      {
        "@type": "MedicalProcedure",
        "name": "Dental Examination",
        "procedureType": "Diagnostic",
        "bodyLocation": "Mouth",
        "preparation": "No special preparation required"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Professional Dental Cleaning",
        "procedureType": "Preventive",
        "bodyLocation": "Teeth and Gums",
        "preparation": "Regular dental hygiene recommended"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Teeth Whitening",
        "procedureType": "Cosmetic",
        "bodyLocation": "Teeth",
        "preparation": "Dental examination recommended prior to treatment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Fillings",
        "procedureType": "Restorative",
        "bodyLocation": "Teeth",
        "preparation": "Local anesthesia may be required"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Crown",
        "procedureType": "Restorative",
        "bodyLocation": "Teeth",
        "preparation": "Multiple appointments typically required"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Implant",
        "procedureType": "Oral Surgery",
        "bodyLocation": "Jawbone and Teeth",
        "preparation": "Comprehensive consultation and planning required"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Invisalign Treatment",
        "procedureType": "Orthodontic",
        "bodyLocation": "Teeth",
        "preparation": "3D scanning and treatment planning required"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Root Canal Treatment",
        "procedureType": "Endodontic",
        "bodyLocation": "Tooth Root",
        "preparation": "Local anesthesia and multiple appointments may be required"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Veneers",
        "procedureType": "Cosmetic",
        "bodyLocation": "Front Teeth",
        "preparation": "Consultation and color matching required"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Emergency Dental Care",
        "procedureType": "Emergency",
        "bodyLocation": "Mouth",
        "preparation": "Same-day appointments available"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Gum Disease Treatment",
        "procedureType": "Periodontic",
        "bodyLocation": "Gums",
        "preparation": "Professional assessment and ongoing care required"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Complete Smile Makeover",
        "procedureType": "Cosmetic",
        "bodyLocation": "Full Mouth",
        "preparation": "Comprehensive consultation and digital smile design"
      }
    ];

    // Add medical organization specific properties
    // biome-ignore lint/suspicious/noExplicitAny: Schema requires dynamic property assignment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (localBusinessSchema as any).isAcceptingNewPatients = true;

    // biome-ignore lint/suspicious/noExplicitAny: Schema requires dynamic property assignment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (localBusinessSchema as any).healthPlanNetworkTier = ["NHS", "Private", "Insurance Accepted"];
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
