"use client";

import { useEffect } from "react";
import { useConversionTracking } from "@/hooks/useConversionTracking";

export default function EmergencyConversionTracking() {
  const {
    trackServiceInterest,
    trackPhoneClick,
    trackBookingAttempt,
    trackLocationConversion,
  } = useConversionTracking();

  useEffect(() => {
     Track emergency page visit
    trackServiceInterest("Emergency Dental Care", "emergency");

     Add click tracking to emergency CTAs
    const setupClickTracking = () => {
       Primary emergency phone CTAs
      const emergencyPhonePrimary = document.getElementById(
        "emergency-phone-primary",
      );
      const emergencyPhoneConditions = document.getElementById(
        "emergency-phone-conditions",
      );
      const emergencyPhoneFinal = document.getElementById(
        "emergency-phone-final",
      );

       Secondary CTAs
      const emergencyDirections = document.getElementById(
        "emergency-directions",
      );
      const emergencyBookOnline = document.getElementById(
        "emergency-book-online",
      );
      const emergencyMembership = document.getElementById(
        "emergency-membership",
      );

       Track primary phone clicks
      [
        emergencyPhonePrimary,
        emergencyPhoneConditions,
        emergencyPhoneFinal,
      ].forEach((element, index) => {
        if (element) {
          element.addEventListener("click", () => {
            trackPhoneClick(
              `emergency_phone_${["primary", "conditions", "final"][index]}`,
              "0115 931 2935",
            );

             High-value emergency conversion
            trackLocationConversion("emergency_phone_click", "burton_joyce");
          });
        }
      });

       Track directions click
      if (emergencyDirections) {
        emergencyDirections.addEventListener("click", () => {
          trackLocationConversion("emergency_directions", "burton_joyce");
        });
      }

       Track online booking from emergency page
      if (emergencyBookOnline) {
        emergencyBookOnline.addEventListener("click", () => {
          trackBookingAttempt("emergency_page", "booking");
        });
      }

       Track membership interest from emergency
      if (emergencyMembership) {
        emergencyMembership.addEventListener("click", () => {
          trackLocationConversion(
            "emergency_prevention_interest",
            "burton_joyce",
          );
        });
      }
    };

     Set up tracking after DOM is ready
    const timer = setTimeout(setupClickTracking, 100);

    return () => clearTimeout(timer);
  }, [
    trackServiceInterest,
    trackPhoneClick,
    trackBookingAttempt,
    trackLocationConversion,
  ]);

//    Add emergency medical service schema
  const emergencySchema = {
    "@context": "https://schema.org",
    "@type": ["EmergencyService", "MedicalBusiness"],
    "@id": "https://peartree.dental/emergency-dentist-nottingham",
    name: "Emergency Dentist Nottingham - Pear Tree Dental",
    description:
      "Emergency dental care for Nottingham patients with same-day appointments available. Professional urgent dental treatment just 15 minutes from city centre.",
    url: "https://peartree.dental/emergency-dentist-nottingham",
    telephone: "+441159312935",
    image: "https://peartree.dental/images/emergency-dental-care.jpg",
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
      latitude: "52.9847",
      longitude: "-1.0147",
    },
    serviceArea: [
      {
        "@type": "City",
        name: "Nottingham",
      },
      {
        "@type": "AdministrativeArea",
        name: "Nottinghamshire",
      },
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Emergency Dental Pain Relief",
        procedureType: "Emergency",
        description: "Immediate pain relief for severe dental emergencies",
      },
      {
        "@type": "MedicalProcedure",
        name: "Broken Tooth Repair",
        procedureType: "Emergency",
        description: "Same-day repair for chipped, cracked, or broken teeth",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dental Abscess Treatment",
        procedureType: "Emergency",
        description: "Urgent treatment for dental infections and abscesses",
      },
      {
        "@type": "MedicalProcedure",
        name: "Lost Filling Replacement",
        procedureType: "Emergency",
        description: "Emergency replacement of lost fillings and crowns",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Emergency Dental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Same-Day Emergency Appointment",
            description:
              "Emergency dental appointments usually available same day",
          },
          availability: "InStock",
          availabilityStarts: "2024-01-01T00:00:00Z",
        },
      ],
    },
    openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
    specialOpeningHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:45",
        closes: "17:00",
        validFrom: "2024-01-01",
        description: "Emergency appointments available during normal hours",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "15:30",
        validFrom: "2024-01-01",
        description: "Friday emergency appointments available",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(emergencySchema),
      }}
    />
  );
}
