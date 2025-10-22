import Script from "next/script";

const VoiceSearchSchema = () => {
  const voiceSearchSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["DentalClinic", "LocalBusiness"],
        "@id": "https://peartree.dental/#dentist",
        "name": "Pear Tree Dental Centre",
        "alternateName": ["Pear Tree Dental", "Burton Joyce Dentist"],
        "description": "Modern dental practice in Burton Joyce offering comprehensive dental care, emergency appointments, and flexible membership plans from £10.95/month.",
        "telephone": "+44 115 931 2935",
        "email": "hello@peartree.dental",
        "url": "https://peartree.dental",
        "image": "https://peartree.dental/images/practice-exterior.jpg",
        "priceRange": "£10.95-£29.95 per month",
        "paymentAccepted": ["Cash", "Credit Card", "NHS", "Private Insurance"],
        "currenciesAccepted": "GBP",
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
          "latitude": 52.9873,
          "longitude": -1.0454
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
            "opens": "08:45",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": "08:00",
            "closes": "15:30"
          }
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Burton Joyce"
          },
          {
            "@type": "City",
            "name": "Colwick"
          },
          {
            "@type": "City",
            "name": "Lowdham"
          },
          {
            "@type": "City",
            "name": "East Bridgford"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Nottinghamshire"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Dental Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Dental Checkup and Cleaning"
              },
              "price": "25.80",
              "priceCurrency": "GBP",
              "description": "NHS Band 1 treatment or included free with membership plans"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Dental Membership Plan"
              },
              "price": "10.95",
              "priceCurrency": "GBP",
              "description": "Monthly membership including checkups, cleaning, and 10% treatment discount"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1",
          "itemReviewed": { "@id": "https://peartree.dental/#localbusiness" }
        },
        "sameAs": [
          "https://www.facebook.com/peartreeDental",
          "https://www.google.com/maps/place/Pear+Tree+Dental+Centre"
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".voice-search-content", ".practice-hours", ".emergency-phone"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://peartree.dental/#website",
        "url": "https://peartree.dental",
        "name": "Pear Tree Dental Centre",
        "description": "Burton Joyce's premier dental practice offering modern dental care with membership plans from £10.95/month",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://peartree.dental/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://peartree.dental/contact"
            },
            "name": "Book Dental Appointment"
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="voice-search-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(voiceSearchSchema)
      }}
    />
  );
};

export default VoiceSearchSchema;
