import Script from "next/script";

interface NottinghamTransportSchemaProps {
  fromLocation?: string;
  estimatedTravelTime?: string;
  transportModes?: string[];
  routeDescription?: string;
}

export default function NottinghamTransportSchema({
  fromLocation = "Nottingham",
  estimatedTravelTime = "15 minutes",
  transportModes = ["car", "taxi", "public_transport"],
  routeDescription = "Direct route via A612 from Nottingham to Burton Joyce"
}: NottinghamTransportSchemaProps) {

  const transportSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "@id": "https://peartree.dental/#travel-from-nottingham",
    "name": `Journey from ${fromLocation} to Pear Tree Dental`,
    "description": `${routeDescription}. ${estimatedTravelTime} journey time with free parking available.`,
    "agent": {
      "@type": "Person",
      "name": "Patient traveling from Nottingham"
    },
    "fromLocation": {
      "@type": "Place",
      "name": fromLocation,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nottingham",
        "addressRegion": "Nottinghamshire",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.9548",
        "longitude": "-1.1581"
      }
    },
    "toLocation": {
      "@type": "Place",
      "name": "Pear Tree Dental Centre",
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
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Free Parking",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Wheelchair Accessible",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Ground Floor Access",
          "value": true
        }
      ]
    },
    "distance": {
      "@type": "QuantitativeValue",
      "value": "8.5",
      "unitCode": "SMI"
    },
    "estimatedDuration": {
      "@type": "Duration",
      "duration": "PT15M"
    },
    "route": {
      "@type": "Route",
      "name": "Nottingham to Burton Joyce via A612",
      "description": routeDescription,
      "routeType": "Road",
      "distance": {
        "@type": "QuantitativeValue",
        "value": "8.5",
        "unitCode": "SMI"
      },
      "estimatedDuration": {
        "@type": "Duration",
        "duration": "PT15M"
      }
    },
    "instrument": transportModes.map(mode => {
      const modeMap: { [key: string]: any } = {
        "car": {
          "@type": "Vehicle",
          "name": "Private Car",
          "vehicleType": "Car",
          "fuelType": "Multiple fuel types supported"
        },
        "taxi": {
          "@type": "Taxi",
          "name": "Taxi Service",
          "vehicleType": "Taxi"
        },
        "public_transport": {
          "@type": "PublicTransportation",
          "name": "Public Transport",
          "vehicleType": "Bus"
        }
      };
      return modeMap[mode] || modeMap["car"];
    }),
    "actionStatus": "ActiveActionStatus",
    "result": {
      "@type": "Place",
      "name": "Arrival at Pear Tree Dental",
      "description": "Professional dental care appointment"
    }
  };

  // Nottingham specific journey data
  const nottinghamJourneySchema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "@id": "https://peartree.dental/#nottingham-journey-guide",
    "name": "Journey Guide from Nottingham to Pear Tree Dental",
    "description": "Complete travel guide for Nottingham patients visiting Pear Tree Dental in Burton Joyce",
    "about": {
      "@type": "Trip",
      "name": "Dental Appointment Journey",
      "fromLocation": {
        "@type": "Place",
        "name": "Nottingham City Centre"
      },
      "toLocation": {
        "@type": "Place",
        "name": "Pear Tree Dental Burton Joyce"
      }
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Route Planning",
        "text": "Take A612 directly from Nottingham to Burton Joyce - fastest route avoiding city center traffic"
      },
      {
        "@type": "HowToStep",
        "name": "Journey Time",
        "text": `${estimatedTravelTime} average journey time from Nottingham city centre`
      },
      {
        "@type": "HowToStep",
        "name": "Parking",
        "text": "Free on-site parking available - no need to search for city center parking"
      },
      {
        "@type": "HowToStep",
        "name": "Accessibility",
        "text": "Ground floor access with wheelchair accessibility"
      }
    ],
    "totalTime": {
      "@type": "Duration",
      "duration": "PT15M"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Free Parking Space"
      },
      {
        "@type": "HowToSupply",
        "name": "Accessible Entrance"
      }
    ]
  };

  return (
    <>
      <Script
        id="nottingham-transport-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(transportSchema)
        }}
      />
      <Script
        id="nottingham-journey-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nottinghamJourneySchema)
        }}
      />
    </>
  );
}
