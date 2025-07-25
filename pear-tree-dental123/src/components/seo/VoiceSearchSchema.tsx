import Script from "next/script";

const VoiceSearchSchema = () => {
  const voiceSearchSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DentalClinic",
        "@id": "https://peartreedentalcentre.co.uk/#dentist",
        "name": "Pear Tree Dental Centre",
        "alternateName": ["Pear Tree Dental", "Burton Joyce Dentist"],
        "description": "Modern dental practice in Burton Joyce offering comprehensive dental care, emergency appointments, and flexible membership plans from £10.95/month.",
        "telephone": "+44 115 931 2935",
        "email": "hello@peartree.dental",
        "url": "https://peartreedentalcentre.co.uk",
        "image": "https://peartreedentalcentre.co.uk/images/practice-exterior.jpg",
        "priceRange": "£10.95-£29.95 per month",
        "paymentAccepted": ["Cash", "Credit Card", "NHS", "Private Insurance"],
        "currenciesAccepted": "GBP",
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
          "reviewCount": "400",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://www.facebook.com/peartreedentalcentre",
          "https://www.google.com/maps/place/Pear+Tree+Dental+Centre"
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".voice-search-content", ".practice-hours", ".emergency-phone"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://peartreedentalcentre.co.uk/#voice-faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is the nearest dentist in Burton Joyce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pear Tree Dental Centre is located at 22 Nottingham Road, Burton Joyce, NG14 5AL. We're the closest dental practice to Burton Joyce village center, just 2 minutes from the main shops."
            }
          },
          {
            "@type": "Question",
            "name": "What time does the dentist open?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We open at 8:45 AM Monday through Thursday, and 8:00 AM on Friday. We're open until 5:00 PM Monday-Thursday and 3:30 PM Friday."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a dental checkup cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NHS dental checkups cost £25.80, but our membership plans start at £10.95 per month and include free checkups, cleaning, and 10% off treatments."
            }
          },
          {
            "@type": "Question",
            "name": "Do you take emergency appointments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide same-day emergency appointments. Call 0115 931 2935 immediately for urgent dental problems including severe pain, swelling, or trauma."
            }
          },
          {
            "@type": "Question",
            "name": "Are you accepting new patients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we're accepting new NHS and private patients. Our membership plans offer immediate access with no waiting lists, starting from £10.95 per month."
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://peartreedentalcentre.co.uk/#website",
        "url": "https://peartreedentalcentre.co.uk",
        "name": "Pear Tree Dental Centre",
        "description": "Burton Joyce's premier dental practice offering modern dental care with membership plans from £10.95/month",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://peartreedentalcentre.co.uk/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://peartreedentalcentre.co.uk/contact"
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
