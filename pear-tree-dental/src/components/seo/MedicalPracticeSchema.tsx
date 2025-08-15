import Script from "next/script";

interface MedicalPracticeSchemaProps {
  specialty?: string;
  serviceName?: string;
  serviceDescription?: string;
  procedureType?: string;
  areaServed?: string[];
}

export default function MedicalPracticeSchema({
  specialty = "General Dentistry",
  serviceName,
  serviceDescription,
  procedureType = "Medical",
  areaServed = [],
}: MedicalPracticeSchemaProps) {
  const medicalPracticeSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://peartree.dental/#medical-organization",
    name: "Pear Tree Dental Centre",
    alternateName: "Private Dentist Nottingham",
    url: "https://peartree.dental",
    logo: "https://peartree.dental/logo.png",
    image: "https://peartree.dental/images/practice-exterior.jpg",
    description:
      "Comprehensive medical dental practice serving Nottinghamshire with specialized dental care, emergency services, and advanced treatment options.",
    telephone: "+441159312520",
    email: "hello@peartree.dental",
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
      latitude: "52.967",
      longitude: "-1.061",
    },
    medicalSpecialty: [
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
      "Family Dentistry",
      "Oral Medicine",
      "Maxillofacial Surgery",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Comprehensive Dental Examination",
        procedureType: "Diagnostic",
        bodyLocation: "Oral Cavity",
        preparation: "No special preparation required",
        followup: "Regular checkups recommended every 6 months",
      },
      {
        "@type": "MedicalProcedure",
        name: "Professional Dental Cleaning and Hygiene",
        procedureType: "Preventive",
        bodyLocation: "Teeth and Gums",
        preparation: "Regular oral hygiene maintenance recommended",
        followup: "Professional cleaning every 3-6 months",
      },
      {
        "@type": "MedicalProcedure",
        name: "Advanced Teeth Whitening Treatment",
        procedureType: "Cosmetic",
        bodyLocation: "Dental Enamel",
        preparation: "Dental examination and cleaning recommended",
        followup: "Maintenance whitening sessions as needed",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dental Restoration Fillings",
        procedureType: "Restorative",
        bodyLocation: "Tooth Structure",
        preparation: "Local anesthesia administered as needed",
        followup: "Regular monitoring and maintenance required",
      },
      {
        "@type": "MedicalProcedure",
        name: "Custom Dental Crown Treatment",
        procedureType: "Restorative",
        bodyLocation: "Individual Tooth",
        preparation: "Multiple appointments for impression and fitting",
        followup: "Long-term durability with proper care",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dental Implant Surgery",
        procedureType: "Oral Surgery",
        bodyLocation: "Jawbone and Surrounding Tissue",
        preparation: "Comprehensive planning and bone assessment required",
        followup: "Healing period and implant integration monitoring",
      },
      {
        "@type": "MedicalProcedure",
        name: "Invisalign Clear Aligner Treatment",
        procedureType: "Orthodontic",
        bodyLocation: "Dental Arch",
        preparation: "3D digital scanning and treatment planning",
        followup: "Regular progress monitoring and aligner changes",
      },
      {
        "@type": "MedicalProcedure",
        name: "Root Canal Endodontic Treatment",
        procedureType: "Endodontic",
        bodyLocation: "Tooth Root and Pulp",
        preparation: "Local anesthesia and multiple treatment sessions",
        followup: "Crown restoration typically required",
      },
      {
        "@type": "MedicalProcedure",
        name: "Porcelain Veneer Application",
        procedureType: "Cosmetic",
        bodyLocation: "Anterior Teeth",
        preparation: "Consultation, color matching, and tooth preparation",
        followup: "Excellent longevity with proper oral hygiene",
      },
      {
        "@type": "MedicalProcedure",
        name: "Emergency Dental Care Services",
        procedureType: "Emergency",
        bodyLocation: "Oral Cavity",
        preparation: "Same-day appointments available for urgent cases",
        followup: "Follow-up care and treatment planning as needed",
      },
      {
        "@type": "MedicalProcedure",
        name: "Periodontal Gum Disease Treatment",
        procedureType: "Periodontic",
        bodyLocation: "Gingival Tissue",
        preparation: "Professional assessment and scaling required",
        followup: "Ongoing maintenance therapy recommended",
      },
      {
        "@type": "MedicalProcedure",
        name: "Complete Smile Design Makeover",
        procedureType: "Comprehensive Cosmetic",
        bodyLocation: "Full Mouth",
        preparation:
          "Digital smile design and comprehensive treatment planning",
        followup: "Long-term maintenance and care plan",
      },
    ],
    areaServed: [
       Comprehensive Nottinghamshire coverage
      {
        "@type": "City",
        name: "Nottingham",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
          containedInPlace: {
            "@type": "Country",
            name: "United Kingdom",
          },
        },
      },
      {
        "@type": "City",
        name: "Burton Joyce",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
      {
        "@type": "City",
        name: "West Bridgford",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
      {
        "@type": "City",
        name: "Bingham",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
      {
        "@type": "City",
        name: "East Bridgford",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
      {
        "@type": "City",
        name: "Arnold",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
      {
        "@type": "City",
        name: "Colwick",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
      {
        "@type": "City",
        name: "Gedling",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
      {
        "@type": "City",
        name: "Mapperly",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
      {
        "@type": "City",
        name: "Lowdham",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
      {
        "@type": "City",
        name: "Rivendell",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      },
       Include custom area served if provided
      ...areaServed.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Nottinghamshire",
        },
      })),
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "52.967",
        longitude: "-1.061",
      },
      geoRadius: "25000",
    },
    isAcceptingNewPatients: true,
    healthPlanNetworkTier: ["NHS", "Private Insurance", "Self-Pay"],
    paymentAccepted: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Bank Transfer",
      "NHS",
      "Private Insurance",
    ],
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-14:00"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Medical Practice Registration",
      recognizedBy: {
        "@type": "Organization",
        name: "General Dental Council",
        url: "https://ww.gdc-uk.org/",
      },
    },
  };

   Add specific service schema if provided
  if (serviceName && serviceDescription) {
     biome-ignore lint/suspicious/noExplicitAny: Schema requires dynamic property assignment
     eslint-disable-next-line @typescript-eslint/no-explicit-any
    (medicalPracticeSchema as any).mainEntityOfPage = {
      "@type": "MedicalProcedure",
      name: serviceName,
      description: serviceDescription,
      procedureType: procedureType,
      performer: {
        "@type": "MedicalOrganization",
        name: "Pear Tree Dental Centre",
      },
      location: {
        "@type": "Place",
        name: "Pear Tree Dental Centre",
        address: {
          "@type": "PostalAddress",
          streetAddress: "22 Nottingham Road",
          addressLocality: "Burton Joyce",
          addressRegion: "Nottinghamshire",
          postalCode: "NG14 5AE",
          addressCountry: "GB",
        },
      },
    };
  }

  return (
    <Script
      id="medical-practice-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(medicalPracticeSchema),
      }}
    />
  );
}
