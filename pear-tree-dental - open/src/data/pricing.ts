//
// Centralized pricing configuration for Pear Tree Dental
// Update prices here and they will automatically update throughout the site
//

export interface TreatmentPrice {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
  category: string;
}

export interface MembershipPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  includes: string[];
  popular?: boolean;
}

// Membership Plans
export const membershipPlans: MembershipPlan[] = [
  {
    name: "Adult Plan",
    price: "from £10.50",
    period: "/month",
    description: "Complete dental care for adults",
    includes: [
      "2 check-ups per year",
      "2 hygienist visits",
      "X-rays included",
      "10% discount on treatments",
      "Emergency care priority",
    ],
    popular: true,
  },
  {
    name: "Child Plan",
    price: "Free",
    period: "with Adult plan",
    description: "Comprehensive care for children",
    includes: [
      "2 check-ups per year",
      "Fluoride treatments",
      "X-rays included",
      "10% discount on treatments",
      "Emergency care priority",
    ],
  },
  {
    name: "Family Plan",
    price: "£49.50",
    period: "/month",
    description: "Complete care for up to 5 people",
    includes: [
      "Up to 5 family members",
      "All check-ups included",
      "All hygienist visits",
      "10% discount on treatments",
      "Emergency care priority",
    ],
  },
];

// Examination & Hygiene Fees
export const examinationPrices: TreatmentPrice[] = [
  { name: "New Patient Exam", price: "£60", category: "examination" },
  { name: "Routine Exam", price: "£60", category: "examination" },
  { name: "Emergency Appointment", price: "£50", category: "examination" },
  { name: "Under 16 Examination", price: "£30", category: "examination" },
  {
    name: "Scale and Polish (Hygienist)",
    price: "From £70",
    category: "hygiene",
  },
  {
    name: "Scale and Polish (Dentist)",
    price: "From £80",
    category: "hygiene",
  },
  { name: "Air Flow Stain Removal", price: "From £150", category: "hygiene" },
];

// General Dentistry
export const generalTreatments: TreatmentPrice[] = [
  { name: "Dental Check-up", price: "£60", category: "general" },
  { name: "Emergency Consultation", price: "£50", category: "general" },
  { name: "Amalgam Metal Filling", price: "From £150", category: "general" },
  { name: "White Fillings", price: "From £200", category: "general" },
  { name: "Biodentine Filling", price: "From £195", category: "general" },
  {
    name: "Root Canal (Single Canal)",
    price: "From £300",
    category: "general",
  },
  { name: "Root Canal (2 Canals)", price: "From £350", category: "general" },
  { name: "Root Canal (Molar)", price: "From £450", category: "general" },
  { name: "Routine Extraction", price: "From £180", category: "general" },
  { name: "Surgical Extraction", price: "From £300", category: "general" },
];

// Cosmetic Dentistry
export const cosmeticTreatments: TreatmentPrice[] = [
  {
    name: "Teeth Whitening",
    price: "From £400",
    popular: true,
    category: "cosmetic",
  },
  { name: "Enlighten Whitening", price: "£650", category: "cosmetic" },
  {
    name: "Composite Veneers",
    price: "From £200 per tooth",
    category: "cosmetic",
  },
  {
    name: "Porcelain Veneers",
    price: "From £750 per tooth",
    category: "cosmetic",
  },
  {
    name: "Composite Edge Bonding",
    price: "From £150 per tooth",
    category: "cosmetic",
  },
  { name: "Wedding Day Smile", price: "From £995", category: "cosmetic" },
  {
    name: "Buccal Corridor Correction",
    price: "From £2,500",
    category: "cosmetic",
  },
  { name: "Smile Makeover", price: "From £2,500", category: "cosmetic" },
];

// Restorative Dentistry
export const restorativeTreatments: TreatmentPrice[] = [
  { name: "Dental Crowns", price: "From £750", category: "restorative" },
  {
    name: "Ceramic Bridge",
    price: "From £710 per unit",
    category: "restorative",
  },
  {
    name: "Acrylic Partial Dentures",
    price: "From £750 per arch",
    category: "restorative",
  },
  {
    name: "Complete Acrylic Dentures",
    price: "From £850 per arch",
    category: "restorative",
  },
  {
    name: "Valplast Dentures",
    price: "From £1,100 per arch",
    category: "restorative",
  },
  {
    name: "Cobalt Chrome Dentures",
    price: "From £1,100",
    category: "restorative",
  },
  { name: "Hybrid Dentures", price: "From £1,800", category: "restorative" },
];

// Orthodontic Treatments
export const orthodonticTreatments: TreatmentPrice[] = [
  {
    name: "ClearCorrect Clear Aligners",
    price: "From £2,000",
    category: "orthodontic",
  },
  {
    name: "Invisalign",
    price: "From £2,100",
    popular: true,
    category: "orthodontic",
  },
  { name: "Retainers", price: "From £150 per arch", category: "orthodontic" },
];

// Implant Dentistry
export const implantTreatments: TreatmentPrice[] = [
  {
    name: "Single Dental Implant",
    price: "From £3,000",
    popular: true,
    category: "implant",
  },
  { name: "Implant Bridge", price: "From £8,000", category: "implant" },
  {
    name: "All-on-4 Implants",
    price: "POA",
    description: "Price on Application",
    category: "implant",
  },
];

// Helper functions to get specific treatments
export const getTreatmentPrice = (treatmentName: string): string => {
  const allTreatments = [
    ...examinationPrices,
    ...generalTreatments,
    ...cosmeticTreatments,
    ...restorativeTreatments,
    ...orthodonticTreatments,
    ...implantTreatments,
  ];

  const treatment = allTreatments.find(
    (t) =>
      t.name.toLowerCase().includes(treatmentName.toLowerCase()) ||
      treatmentName.toLowerCase().includes(t.name.toLowerCase()),
  );

  return treatment?.price || "POA";
};

export const getTreatmentsByCategory = (category: string): TreatmentPrice[] => {
  const allTreatments = [
    ...examinationPrices,
    ...generalTreatments,
    ...cosmeticTreatments,
    ...restorativeTreatments,
    ...orthodonticTreatments,
    ...implantTreatments,
  ];

  return allTreatments.filter((t) => t.category === category);
};

// Legacy price mappings for backward compatibility
export const LEGACY_PRICES = {
  TEETH_WHITENING: "From £400",
  COMPOSITE_VENEERS: "From £200 per tooth",
  PORCELAIN_VENEERS: "From £750 per tooth",
  INVISALIGN: "From £2,100",
  CLEARCORRECT: "From £2,000",
  SINGLE_IMPLANT: "From £3,000",
  DENTAL_CROWNS: "From £750",
  ROOT_CANAL: "From £300",
  ROUTINE_EXAM: "£60",
  EMERGENCY_APPOINTMENT: "£50",
};
