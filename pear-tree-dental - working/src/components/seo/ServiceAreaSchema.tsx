import Script from "next/script";

interface ServiceAreaSchemaProps {
  primaryLocation?: string;
  specialization?: string;
}

export default function ServiceAreaSchema({
  primaryLocation = "Burton Joyce",
  specialization = "Dental Care"
}: ServiceAreaSchemaProps) {

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://peartree.dental/#service-area",
    "name": `Professional ${specialization} Services`,
    "description": `Comprehensive ${specialization.toLowerCase()} services provided across Nottinghamshire including ${primaryLocation} and surrounding areas.`,
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Pear Tree Dental Centre",
      "url": "https://peartree.dental",
      "telephone": "+441159312520",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22 Nottingham Road",
        "addressLocality": "Burton Joyce",
        "addressRegion": "Nottinghamshire",
        "postalCode": "NG14 5AL",
        "addressCountry": "GB"
      }
    },
    "areaServed": [
      // Primary service locations with detailed coverage
      {
        "@type": "AdministrativeArea",
        "name": "Nottinghamshire",
        "containedInPlace": {
          "@type": "Country",
          "name": "United Kingdom"
        },
        "hasPartPlace": [
          {
            "@type": "City",
            "name": "Burton Joyce",
            "description": "Primary practice location with comprehensive dental services",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.967",
              "longitude": "-1.061"
            }
          },
          {
            "@type": "City",
            "name": "Nottingham",
            "description": "Major city served with full range of dental treatments",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9548",
              "longitude": "-1.1581"
            }
          },
          {
            "@type": "City",
            "name": "West Bridgford",
            "description": "Premium dental care for West Bridgford residents",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9335",
              "longitude": "-1.1373"
            }
          },
          {
            "@type": "City",
            "name": "Bingham",
            "description": "Family-friendly dental services for Bingham families",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9515",
              "longitude": "-0.9519"
            }
          },
          {
            "@type": "City",
            "name": "East Bridgford",
            "description": "Village dental care with personal touch for East Bridgford",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9847",
              "longitude": "-1.0147"
            }
          },
          {
            "@type": "City",
            "name": "Arnold",
            "description": "Comprehensive dental services for Arnold residents",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.0031",
              "longitude": "-1.1286"
            }
          },
          {
            "@type": "City",
            "name": "Colwick",
            "description": "Professional dental care for Colwick community",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9670",
              "longitude": "-1.0851"
            }
          },
          {
            "@type": "City",
            "name": "Gedling",
            "description": "Quality dental treatments for Gedling area",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9876",
              "longitude": "-1.0984"
            }
          },
          {
            "@type": "City",
            "name": "Mapperly",
            "description": "Accessible dental care for Mapperly residents",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9789",
              "longitude": "-1.1234"
            }
          },
          {
            "@type": "City",
            "name": "Lowdham",
            "description": "Rural dental services for Lowdham village",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.0145",
              "longitude": "-0.9876"
            }
          }
        ]
      },
      // Postal code coverage areas
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG14",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        },
        "description": "Full dental services coverage for NG14 postal area including Burton Joyce, Lowdham, and surrounding villages"
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG4",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        },
        "description": "Comprehensive dental care for NG4 area including Arnold, Colwick, and Gedling"
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG13",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        },
        "description": "Professional dental services for NG13 area including Bingham and East Bridgford"
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG2",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        },
        "description": "Quality dental care for NG2 area including West Bridgford and surrounding areas"
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "NG1",
        "addressCountry": "GB",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Nottinghamshire"
        },
        "description": "Central Nottingham dental services for NG1 city center area"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "52.967",
        "longitude": "-1.061"
      },
      "geoRadius": "25000",
      "description": "25km radius service area covering greater Nottinghamshire region"
    },
    "serviceType": [
      "Emergency Dental Care",
      "General Dentistry",
      "Cosmetic Dentistry",
      "Family Dentistry",
      "Preventive Dentistry",
      "Restorative Dentistry",
      "Orthodontic Services",
      "Implant Dentistry",
      "Periodontal Care",
      "Endodontic Treatment",
      "Oral Surgery",
      "Aesthetic Dentistry"
    ],
    "availableAtLocation": {
      "@type": "Place",
      "name": "Pear Tree Dental Centre",
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
      "hasMap": "https://maps.google.com/?cid=pear-tree-dental-burton-joyce",
      "isAccessibleForFree": false,
      "maximumAttendeeCapacity": 50,
      "smokingAllowed": false
    },
    "hoursAvailable": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nottinghamshire Dental Services",
      "numberOfItems": 12,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Dental Services",
            "description": "Same-day emergency dental care across Nottinghamshire"
          },
          "areaServed": "Nottinghamshire"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Dental Care",
            "description": "Comprehensive dental care for all family members"
          },
          "areaServed": "Nottinghamshire"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cosmetic Dental Treatments",
            "description": "Advanced cosmetic dentistry for smile enhancement"
          },
          "areaServed": "Nottinghamshire"
        }
      ]
    }
  };

  return (
    <Script
      id="service-area-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceAreaSchema)
      }}
    />
  );
}
