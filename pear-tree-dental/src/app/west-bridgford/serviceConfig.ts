import type { Metadata } from "next";
import {
  Award,
  Car,
  ClipboardList,
  Crown,
  Diamond,
  Drill,
  Heart,
  LocateFixed,
  MapPin,
  Microscope,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Syringe,
  Timer,
  TrendingUp,
  Wand2
} from "lucide-react";
import type { WestBridgfordServiceConfig } from "@/components/location/WestBridgfordServicePage";
import { practiceInfo } from "@/data/practiceInfo";

const baseUrl = "https://peartree.dental/west-bridgford";
const telHref = `tel:${practiceInfo.contact.phone.replace(/\s+/g, '')}`;
const emergencyTelHref = `tel:${practiceInfo.contact.emergencyPhone.replace(/\s+/g, '')}`;

const buildMetadata = (
  slug: string,
  serviceName: string,
  description: string,
  keywords: string[],
  ogTitle?: string,
  ogDescription?: string
): Metadata => ({
  title: `${serviceName} in West Bridgford | Pear Tree Dental`,
  description,
  keywords,
  openGraph: {
    title: ogTitle ?? `${serviceName} in West Bridgford | Pear Tree Dental`,
    description: ogDescription ?? description,
    url: `${baseUrl}/${slug}`
  },
  alternates: {
    canonical: `${baseUrl}/${slug}`
  }
});

interface ServiceEntry {
  config: WestBridgfordServiceConfig;
  metadata: Metadata;
}

export const westBridgfordServiceContent: Record<string, ServiceEntry> = {
  "dental-implants": {
    metadata: buildMetadata(
      "dental-implants",
      "Dental Implants",
      "Premium dental implant solutions for West Bridgford professionals. Concierge planning, advanced 3D diagnostics, and lifetime-quality restorations just a short drive away.",
      [
        "dental implants West Bridgford",
        "implant dentist West Bridgford",
        "All-on-4 West Bridgford",
        "single implant West Bridgford",
        "implant bridge West Bridgford"
      ],
      "Premium Dental Implants in West Bridgford | Pear Tree Dental",
      "Concierge dental implant planning, All-on-4 full arch transformations, and lifetime-quality restorations for West Bridgford professionals."
    ),
    config: {
      slug: "dental-implants",
      serviceName: "Dental Implants",
      serviceCategory: "Implant Dentistry",
      heroTagline: "Concierge Implant Dentistry",
      heroHeading: "Dental Implants in West Bridgford",
      heroDescription:
        "Restore confidence with digitally planned, lifetime-quality implants delivered with a concierge experience tailored to West Bridgford professionals.",
      travelNote: "12 minutes from West Bridgford with private parking and dedicated implant suites.",
      heroStats: [
        { label: "Implant success rate", value: "98%" },
        { label: "Planning appointments", value: "2" },
        { label: "Membership savings", value: "10%" }
      ],
      highlights: [
        {
          icon: Crown,
          title: "Lifetime-Quality Materials",
          description: "Premium Swiss and German implant systems engineered for durability, aesthetics, and bio-compatibility."
        },
        {
          icon: Microscope,
          title: "Digital 3D Planning",
          description: "CBCT imaging and guided placement for predictable, minimally invasive implant surgery."
        },
        {
          icon: Award,
          title: "Full-Arch Expertise",
          description: "Dedicated team experienced in All-on-4, full arch rehabilitation, and complex restorative cases."
        }
      ],
      premiumBenefits: [
        {
          icon: Sparkles,
          title: "Smile Preview",
          description: "Digital smile design previews help you visualise final implant restorations before treatment begins."
        },
        {
          icon: ShieldCheck,
          title: "Sedation Options",
          description: "Conscious sedation and calming suites for a relaxed surgical experience tailored to anxious patients."
        },
        {
          icon: TrendingUp,
          title: "Wellness Follow-Up",
          description: "Dedicated implant hygiene protocols and three-year aftercare pathway for long-term success."
        }
      ],
      packages: [
        {
          name: "Single Implant & Crown",
          description: "Ideal for replacing a single missing tooth with seamless aesthetics.",
          priceLabel: "From £2,495",
          duration: "3 visit pathway",
          features: [
            "CBCT scan and digital planning",
            "Guided implant placement",
            "Bespoke porcelain crown"
          ],
          icon: Tooth
        },
        {
          name: "Smile-In-A-Day",
          description: "Same-day implant and temporary crown for visible smile zones.",
          priceLabel: "From £3,950",
          duration: "1 day placement",
          features: [
            "Immediate provisional crown",
            "Soft-tissue sculpting",
            "Final porcelain upgrade"
          ],
          icon: Sparkles
        },
        {
          name: "All-on-4 Platinum",
          description: "Full arch transformation for complete smile restoration.",
          priceLabel: "From £12,995",
          duration: "12 week journey",
          features: [
            "Four premium implants",
            "Same-day fixed bridge",
            "Proactive maintenance plan"
          ],
          icon: Diamond
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Concierge Consultation",
          description: "Comprehensive implant assessment, digital scans, and concierge scheduling around your commitments."
        },
        {
          icon: Microscope,
          title: "Guided Placement",
          description: "Computer-guided surgery in our dedicated implant suite with sedation options available."
        },
        {
          icon: Shield,
          title: "Restorative Finish",
          description: "Master technician-crafted crowns or bridges with lifetime aftercare and hygiene pathway."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "12 Minute Drive",
          description: "Direct route via A60 and A612 with concierge arrival text alerts and reserved parking."
        },
        {
          icon: Timer,
          title: "Flexible Scheduling",
          description: "Early morning implant surgery slots with same-day review for minimal disruption."
        },
        {
          icon: Shield,
          title: "Post-Op Care",
          description: "Personal aftercare kit, on-call implant clinician, and wellness review within 48 hours."
        }
      ],
      testimonial: {
        quote: "The implant journey was exceptionally smooth. Every visit was planned around my City centre commute and the results are flawless.",
        author: "James P, West Bridgford"
      },
      faqs: [
        {
          question: "Do you offer evening implant consultations for West Bridgford patients?",
          answer: "Yes. We reserve late afternoon and early evening consultations mid-week specifically for West Bridgford professionals, with digital scans completed in a single visit."
        },
        {
          question: "Can I spread the cost of dental implants?",
          answer: "We offer 0% finance for up to 12 months and flexible plans up to 60 months, exclusive membership savings, and bespoke packages for full arch cases."
        },
        {
          question: "What if I need a temporary solution while waiting for implants?",
          answer: "We provide immediate provisional restorations, including same-day temporary crowns or bridges, so you never leave with a gap."
        },
        {
          question: "How many visits are required for full arch implants?",
          answer: "Most full arch transformations are completed over three key visits: digital planning, implant placement with temporary bridge, and final porcelain upgrade after healing."
        },
        {
          question: "Do you handle complex implant cases referred by other dentists?",
          answer: "Yes. Our implant team accepts referrals for bone grafting, sinus lifts, and restorative planning, coordinating with your West Bridgford dentist if required."
        }
      ],
      cta: {
        primary: { label: "Book Implant Consultation", href: "/book" },
        secondary: { label: "Download Implant Brochure", href: "/services/implants#guide" }
      },
      structuredData: {
        image: "https://peartree.dental/images/dental-implants-procedure.webp",
        medicalSpecialty: "Oral and Maxillofacial Surgery",
        priceRange: "£2500-£13000"
      }
    }
  },
  "complete-smile-makeover": {
    metadata: buildMetadata(
      "complete-smile-makeover",
      "Complete Smile Makeover",
      "Full smile transformations for West Bridgford residents combining veneers, bonding, whitening, and orthodontics into a bespoke pathway managed by a dedicated concierge.",
      [
        "smile makeover West Bridgford",
        "full smile design West Bridgford",
        "cosmetic dentist West Bridgford",
        "digital smile design West Bridgford",
        "luxury cosmetic dentistry West Bridgford"
      ]
    ),
    config: {
      slug: "complete-smile-makeover",
      serviceName: "Complete Smile Makeover",
      serviceCategory: "Cosmetic Dentistry",
      heroTagline: "Curated for West Bridgford",
      heroHeading: "Complete Smile Makeovers",
      heroDescription:
        "A bespoke sequence of veneers, alignment, whitening, and bonding tailored to your lifestyle and aesthetic goals, orchestrated by your personal treatment concierge.",
      travelNote: "Luxury smile design 15 minutes from West Bridgford with private digital planning suites.",
      heroStats: [
        { label: "Treatment duration", value: "8-16 weeks" },
        { label: "Preview sessions", value: "3D" },
        { label: "Smile guarantee", value: "12 months" }
      ],
      highlights: [
        {
          icon: Sparkles,
          title: "Digital Smile Preview",
          description: "Visualise every detail of your new smile before treatment with 4K digital mock-ups and trial smiles."
        },
        {
          icon: Crown,
          title: "Multidisciplinary Team",
          description: "Cosmetic dentists, orthodontists, and implant surgeons collaborate on every West Bridgford smile journey."
        },
        {
          icon: Award,
          title: "Concierge Scheduling",
          description: "Evening planning consultations and consolidated visits tailored to busy professional diaries."
        }
      ],
      premiumBenefits: [
        {
          icon: Smile,
          title: "Aesthetic Specialist",
          description: "Colour mapping, facial profiling, and tooth characterisation for natural yet elevated results."
        },
        {
          icon: Diamond,
          title: "Artisan Laboratories",
          description: "Hand-finished veneers and restorations crafted by boutique ceramists for unparalleled detail."
        },
        {
          icon: TrendingUp,
          title: "Confidence Coaching",
          description: "Post-treatment whitening top-ups, retainers, and photo session support to celebrate your new smile."
        }
      ],
      packages: [
        {
          name: "Executive Refresh",
          description: "Edge bonding, contouring, and boutique whitening for instant lift.",
          priceLabel: "From £1,495",
          duration: "Single visit",
          features: [
            "Full smile audit",
            "Shade-matched bonding",
            "Complimentary whitening top-up"
          ],
          icon: Sparkles
        },
        {
          name: "Signature Makeover",
          description: "Combination of Invisalign, whitening, and porcelain veneers.",
          priceLabel: "From £6,950",
          duration: "16 week pathway",
          features: [
            "Digital smile design",
            "Sequential alignment",
            "Porcelain veneer artistry"
          ],
          icon: Diamond
        },
        {
          name: "Red Carpet Transformation",
          description: "Ultimate smile plan with implants, veneers, and supportive dermatology referrals.",
          priceLabel: "POA",
          duration: "Bespoke timeline",
          features: [
            "Complex case coordination",
            "Sedation available",
            "VIP out-of-hours reviews"
          ],
          icon: Crown
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Vision & Preview",
          description: "Facial analysis, shade mapping, and mock-up preview to design a smile that suits your lifestyle."
        },
        {
          icon: Sparkles,
          title: "Smile Creation",
          description: "Sequenced treatments delivered in curated appointments with comfort options throughout."
        },
        {
          icon: ShieldCheck,
          title: "Reveal & Support",
          description: "Finishing touches, long-term retainers, and wellness reviews at 6 and 12 months."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "15 Minute Journey",
          description: "Leave West Bridgford after school run, arrive to refreshments and dedicated concierge welcome."
        },
        {
          icon: LocateFixed,
          title: "Private Suite",
          description: "Digital planning lounge with privacy screens, secure Wi-Fi, and work-friendly facilities."
        },
        {
          icon: Timer,
          title: "Weekend Reviews",
          description: "Saturday smile reveal appointments available by arrangement for major transformations."
        }
      ],
      testimonial: {
        quote: "The planning was meticulous and the concierge team handled every detail. My veneers look natural yet flawless.",
        author: "Alexandra L, West Bridgford"
      },
      faqs: [
        {
          question: "How many appointments does a full smile makeover require?",
          answer: "Most West Bridgford makeovers are completed across 4-6 curated appointments, combining treatments wherever possible to minimise travel."
        },
        {
          question: "Can you coordinate whitening, orthodontics, and veneers together?",
          answer: "Yes. Your case coordinator sequences alignment, whitening, bonding, and veneers with digital planning so each stage enhances the next."
        },
        {
          question: "Do you provide trial smiles before committing to veneers?",
          answer: "We create 3D-printed trial smiles and composite mock-ups so you can experience the look and feel before finalising treatment."
        },
        {
          question: "Is sedation available for cosmetic treatments?",
          answer: "We provide IV sedation or oral relaxation options to ensure maximum comfort during longer cosmetic appointments."
        },
        {
          question: "Can you help with travel or childcare arrangements?",
          answer: "Our concierge can recommend partner services, arrange for seamless parking, and schedule appointments around childcare or commute needs."
        }
      ],
      cta: {
        primary: { label: "Reserve Smile Design Consultation", href: "/book" },
        secondary: { label: "Explore Smile Makeover Gallery", href: "/smile-gallery" }
      },
      structuredData: {
        image: "https://peartree.dental/images/complete-smile-makeover.webp",
        medicalSpecialty: "Cosmetic Dentistry",
        priceRange: "£1495-£15000"
      }
    }
  },
  "composite-bonding": {
    metadata: buildMetadata(
      "composite-bonding",
      "Composite Bonding",
      "Same-day composite bonding for West Bridgford patients seeking refined yet conservative smile enhancements. Artistic contouring, boutique whitening, and concierge aftercare.",
      [
        "composite bonding West Bridgford",
        "edge bonding West Bridgford",
        "tooth bonding West Bridgford",
        "affordable cosmetic dentistry West Bridgford"
      ]
    ),
    config: {
      slug: "composite-bonding",
      serviceName: "Composite Bonding",
      serviceCategory: "Cosmetic Dentistry",
      heroTagline: "Same-Day Smile Refinement",
      heroHeading: "Composite Bonding for West Bridgford",
      heroDescription:
        "Close gaps, refine tooth edges, and repair chips in a single visit with our artistic bonding experts favoured by West Bridgford professionals.",
      travelNote: "10 minutes from Central Avenue with evening bonding clinics every Thursday.",
      heroStats: [
        { label: "Average visit time", value: "90 mins" },
        { label: "Teeth restored per visit", value: "2-8" },
        { label: "Longevity", value: "5-8 years" }
      ],
      highlights: [
        {
          icon: Sparkles,
          title: "Artistic Finishing",
          description: "Layered composite techniques that mimic natural translucency and shine for camera-ready results."
        },
        {
          icon: Wand2,
          title: "No-Prep Treatment",
          description: "Reversible enhancements without drilling or injections, ideal for minimal downtime."
        },
        {
          icon: Award,
          title: "Colour Mapping",
          description: "Multi-shade blending to match surrounding enamel perfectly under studio lighting."
        }
      ],
      premiumBenefits: [
        {
          icon: Award,
          title: "LED Finishing Suite",
          description: "Dedicated polishing system for a glass-like finish that resists staining and photographs beautifully."
        },
        {
          icon: Shield,
          title: "Refinement Review",
          description: "Complimentary refinement appointment within 14 days to tweak shaping once you have lived with your new smile."
        },
        {
          icon: Heart,
          title: "Gentle Experience",
          description: "Noise-cancelling headphones, Netflix streaming, and warm neck pillows to help you unwind."
        }
      ],
      packages: [
        {
          name: "Edge Perfection",
          description: "Subtle edge bonding for wear or uneven lengths.",
          priceLabel: "From £160 per tooth",
          duration: "60 minutes",
          features: [
            "Pre-treatment whitening boost",
            "Precision shade layering",
            "Refinement appointment"
          ],
          icon: Sparkles
        },
        {
          name: "Gap Closure",
          description: "Close diastemas or reshape 2-4 teeth in one visit.",
          priceLabel: "From £495",
          duration: "90 minutes",
          features: [
            "Digital smile planning",
            "Texture & gloss finishing",
            "Complimentary whitening kit"
          ],
          icon: Smile
        },
        {
          name: "Instant Glow Up",
          description: "Eight-tooth enhancement for full smile refresh.",
          priceLabel: "From £1,495",
          duration: "Half day",
          features: [
            "Photography session",
            "Custom finishing kit",
            "Two-year maintenance review"
          ],
          icon: Star
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Smile Mapping",
          description: "Digital preview and wax-up to agree on shape, length, and shade before treatment starts."
        },
        {
          icon: Wand2,
          title: "Layered Bonding",
          description: "Composite sculpted in micro layers, light-cured, and polished to a mirror finish."
        },
        {
          icon: ShieldCheck,
          title: "Finishing Touches",
          description: "Protective coatings, home care guidance, and optional refinement appointment within 2 weeks."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "10 Minute Drive",
          description: "Quick access via A612 with concierge text alerts when the surgery is ready for you."
        },
        {
          icon: MapPin,
          title: "Reserved Parking",
          description: "Dedicated parking with EV charging available upon request for bonding patients."
        },
        {
          icon: Timer,
          title: "Lunch Hour Friendly",
          description: "Appointments available over lunchtime with curated playlists and refreshments."
        }
      ],
      testimonial: {
        quote: "My front teeth were transformed in under two hours and colleagues just noticed I looked ‘healthier’. Perfectly natural.",
        author: "Sophie R, West Bridgford"
      },
      faqs: [
        {
          question: "Will composite bonding stain over time?",
          answer: "Modern nano-hybrid composites resist staining, and we provide a finishing kit plus six-month maintenance plan to keep your smile bright."
        },
        {
          question: "Can bonding be combined with whitening?",
          answer: "We complete whitening first, then layer composite to match your enhanced shade for seamless results."
        },
        {
          question: "How do I look after my bonding?",
          answer: "Avoid biting pens or opening packages with teeth, use the provided polish, and attend 6-month reviews for re-glossing as needed."
        },
        {
          question: "Is bonding suitable before an event?",
          answer: "Yes. Most West Bridgford clients book 10-14 days before weddings or events to allow for optional refinement."
        },
        {
          question: "Can bonding fix crowded teeth?",
          answer: "Mild crowding can be disguised with bonding, but we may recommend Invisalign for optimal alignment before finishing touches."
        }
      ],
      cta: {
        primary: { label: "Book Bonding Consultation", href: "/book" },
        secondary: { label: "See Smile Transformations", href: "/smile-gallery" }
      },
      structuredData: {
        image: "https://peartree.dental/images/composite-dentistry.webp",
        medicalSpecialty: "Cosmetic Dentistry",
        priceRange: "£160-£1500"
      }
    }
  },
  "dental-bridges": {
    metadata: buildMetadata(
      "dental-bridges",
      "Dental Bridges",
      "Precision dental bridges for West Bridgford patients seeking seamless tooth replacement. Bespoke ceramic craftsmanship, digital scanning, and concierge appointments.",
      [
        "dental bridges West Bridgford",
        "tooth bridge West Bridgford",
        "bridge dentist West Bridgford",
        "ceramic bridge West Bridgford"
      ]
    ),
    config: {
      slug: "dental-bridges",
      serviceName: "Dental Bridges",
      serviceCategory: "Restorative Dentistry",
      heroTagline: "Seamless Tooth Replacement",
      heroHeading: "Dental Bridges for West Bridgford",
      heroDescription:
        "Restore missing teeth with beautiful, long-lasting bridges crafted by master ceramists and fitted with digital precision for West Bridgford residents.",
      travelNote: "Comfortable 14 minute drive with express fitting visits and on-site parking.",
      heroStats: [
        { label: "Bridge longevity", value: "15+ yrs" },
        { label: "Scan appointment", value: "30 mins" },
        { label: "Follow-up reviews", value: "2" }
      ],
      highlights: [
        {
          icon: Drill,
          title: "Digital Scans",
          description: "No messy impressions – ultra-accurate digital scans for perfect fitting bridges."
        },
        {
          icon: Crown,
          title: "Ceramic Artistry",
          description: "Bridges crafted by award-winning technicians with natural translucency and shading."
        },
        {
          icon: ShieldCheck,
          title: "Strength & Comfort",
          description: "Reinforced cores and gentle bite adjustments ensure confidence when eating and speaking."
        }
      ],
      premiumBenefits: [
        {
          icon: Sparkles,
          title: "Shade Atelier",
          description: "Custom shade appointment under daylight lamps to ensure seamless integration with your smile."
        },
        {
          icon: Heart,
          title: "Comfort-first Fitting",
          description: "Relaxed appointments with music, aromatherapy, and optional bite massage to settle the jaw."
        },
        {
          icon: Shield,
          title: "Maintenance Plan",
          description: "Complimentary bridge inspection after 6 months and bespoke hygiene plan to protect supporting teeth."
        }
      ],
      packages: [
        {
          name: "Single Tooth Bridge",
          description: "Replace one missing tooth using neighbouring anchors.",
          priceLabel: "From £1,395",
          duration: "2 appointments",
          features: [
            "Digital scan & wax-up",
            "Temporary bridge",
            "Premium ceramic finish"
          ],
          icon: Tooth
        },
        {
          name: "Three-Unit Bridge",
          description: "Restore wider gaps with beautifully balanced ceramics.",
          priceLabel: "From £1,995",
          duration: "3 weeks total",
          features: [
            "Strength-optimised substructure",
            "Gum-contouring finish",
            "Complimentary night guard"
          ],
          icon: Shield
        },
        {
          name: "Implant-Supported Bridge",
          description: "Combine implants and bridges for lasting stability.",
          priceLabel: "From £4,995",
          duration: "8 week pathway",
          features: [
            "Implant planning",
            "Temporary aesthetic bridge",
            "Final porcelain restoration"
          ],
          icon: Crown
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Precision Planning",
          description: "Bespoke treatment plan with wellness assessment and tooth preparation preview."
        },
        {
          icon: Microscope,
          title: "Try-In Session",
          description: "Temporary bridge fitted for comfort check and aesthetic refinement before final fabrication."
        },
        {
          icon: ShieldCheck,
          title: "Final Placement",
          description: "Ceramic bridge bonded, bite balanced, and aftercare kit provided for long-term protection."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "14 Minute Drive",
          description: "Straightforward route with concierge text updates and EV charging on request."
        },
        {
          icon: Timer,
          title: "Express Fittings",
          description: "Early morning or lunchtime appointments to fit around corporate schedules."
        },
        {
          icon: Shield,
          title: "Bridge Warranty",
          description: "Five-year guarantee with membership hygiene compliance."
        }
      ],
      testimonial: {
        quote: "My bridge looks identical to my natural teeth. The entire process was seamless and timed perfectly around work."
,        author: "Catherine H, West Bridgford"
      },
      faqs: [
        {
          question: "How long do dental bridges last?",
          answer: "With excellent hygiene and regular reviews, premium ceramic bridges typically last 10-15 years or longer. We include annual bridge checks for West Bridgford patients."
        },
        {
          question: "Will the bridge feel bulky?",
          answer: "No. Our digital design process ensures a slim, natural profile that feels comfortable from the first day."
        },
        {
          question: "Can bridges be placed on implants?",
          answer: "Yes – implant-supported bridges are the gold standard for larger gaps, offering stability without impacting neighbouring teeth."
        },
        {
          question: "Do I need a temporary bridge?",
          answer: "We provide beautifully finished temporaries so you maintain confidence while the final bridge is crafted."
        },
        {
          question: "Is sedation available for bridge preparation?",
          answer: "We offer oral and IV sedation options for patients who prefer additional comfort."
        }
      ],
      cta: {
        primary: { label: "Arrange Bridge Consultation", href: "/book" },
        secondary: { label: "Discuss Implant Bridge Options", href: "/services/implants/implant-bridge" }
      },
      structuredData: {
        image: "https://peartree.dental/images/restorative-dental-treatment.webp",
        medicalSpecialty: "Prosthodontics",
        priceRange: "£1395-£4995"
      }
    }
  },
  "dental-crowns": {
    metadata: buildMetadata(
      "dental-crowns",
      "Dental Crowns",
      "Handcrafted dental crowns for West Bridgford patients needing durable, aesthetic tooth restoration. Same-day emergency cover and bespoke design appointments available.",
      [
        "dental crowns West Bridgford",
        "tooth crown West Bridgford",
        "porcelain crown West Bridgford",
        "crown dentist West Bridgford"
      ]
    ),
    config: {
      slug: "dental-crowns",
      serviceName: "Dental Crowns",
      serviceCategory: "Restorative Dentistry",
      heroTagline: "Strength & Aesthetics",
      heroHeading: "Dental Crowns for West Bridgford",
      heroDescription:
        "Protect and enhance teeth with handcrafted porcelain crowns engineered for strength, longevity, and indistinguishable aesthetics.",
      travelNote: "11 minute drive with reserved parking and express refurbishment appointments.",
      heroStats: [
        { label: "Crown lifespan", value: "12+ yrs" },
        { label: "Preparation visit", value: "75 mins" },
        { label: "Emergency cover", value: "Same day" }
      ],
      highlights: [
        {
          icon: Crown,
          title: "Master Ceramists",
          description: "Boutique ceramics lab replicates natural translucency, halo effects, and surface texture."
        },
        {
          icon: Microscope,
          title: "Digital Precision",
          description: "3D scanning and milling ensure flawless margin fit and comfortable bite alignment."
        },
        {
          icon: ShieldCheck,
          title: "Strength & Comfort",
          description: "High-strength materials reinforced for bruxism with optional night guard packages."
        }
      ],
      premiumBenefits: [
        {
          icon: Sparkles,
          title: "Shade Immersion",
          description: "Personalised shade session under daylight-balanced lighting with optional photo references."
        },
        {
          icon: Heart,
          title: "Comfort-focused",
          description: "Topical anaesthetic, warm blankets, and optional sedation for longer crown appointments."
        },
        {
          icon: Shield,
          title: "Longevity Plan",
          description: "Annual crown polish and bite check included for West Bridgford membership patients."
        }
      ],
      packages: [
        {
          name: "Porcelain Crown",
          description: "Premium porcelain bonded crown for visible smile zones.",
          priceLabel: "From £795",
          duration: "2 visits",
          features: [
            "Digital scan & wax-up",
            "Hand-layered porcelain",
            "Shade customisation"
          ],
          icon: Crown
        },
        {
          name: "E-Max Aesthetic Crown",
          description: "Ultra-translucent lithium disilicate for superior aesthetics.",
          priceLabel: "From £895",
          duration: "2-3 weeks",
          features: [
            "Trial fit appointment",
            "Texture & gloss finishing",
            "Complimentary whitening top-up"
          ],
          icon: Sparkles
        },
        {
          name: "Crown Rescue Package",
          description: "Same-day crown repair or replacement following accidental damage.",
          priceLabel: "From £595",
          duration: "Same day",
          features: [
            "Emergency triage",
            "Temporary crown provided",
            "Priority lab turnaround"
          ],
          icon: ShieldCheck
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Detailed Assessment",
          description: "Bite analysis, shade selection, and digital imaging to design the ideal crown."
        },
        {
          icon: Microscope,
          title: "Preparation & Scan",
          description: "Precise tooth preparation with digital scan for laboratory excellence."
        },
        {
          icon: Crown,
          title: "Fit & Finish",
          description: "Pain-free fitting, bite adjustment, and glazed finish for long-lasting brilliance."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "11 Minute Access",
          description: "Direct route with VIP parking and concierge greeting upon arrival."
        },
        {
          icon: Timer,
          title: "Express Appointments",
          description: "Early morning or lunchtime seatings for time-conscious professionals."
        },
        {
          icon: Shield,
          title: "Comfort Options",
          description: "Noise-cancelling headphones, aromatherapy, and optional sedation available."
        }
      ],
      testimonial: {
        quote: "My porcelain crown is indistinguishable from natural tooth. The whole process was calm, efficient, and luxurious.",
        author: "Eleanor S, West Bridgford"
      },
      faqs: [
        {
          question: "How long do crowns take from start to finish?",
          answer: "Most crowns are completed over two visits within three weeks. Emergency replacements can be turned around faster where required."
        },
        {
          question: "Can I have whitening before crown treatment?",
          answer: "Absolutely – we recommend whitening first so your crown can be matched to your ideal shade."
        },
        {
          question: "Are crowns covered by membership discounts?",
          answer: "Yes, West Bridgford members receive 10% off crowns and complimentary annual polish appointments."
        },
        {
          question: "Do crowns feel different to natural teeth?",
          answer: "After a short settling period they feel identical. We fine-tune the bite and edges for seamless comfort."
        },
        {
          question: "Can crowns break?",
          answer: "High-quality crowns are extremely durable. If accidental damage occurs we provide priority repair with our rescue package."
        }
      ],
      cta: {
        primary: { label: "Schedule Crown Consultation", href: "/book" },
        secondary: { label: "Request Emergency Crown Repair", href: "/services/emergency" }
      },
      structuredData: {
        image: "https://peartree.dental/images/dental-crown-treatment.webp",
        medicalSpecialty: "Restorative Dentistry",
        priceRange: "£595-£995"
      }
    }
  },
  "dentures": {
    metadata: buildMetadata(
      "dentures",
      "Dentures",
      "Premium, natural-looking dentures for West Bridgford residents seeking comfort, stability, and discreet craftsmanship. Implant-retained and lightweight cobalt-chrome options available.",
      [
        "dentures West Bridgford",
        "implant dentures West Bridgford",
        "cobalt chrome dentures West Bridgford",
        "premium dentures West Bridgford"
      ]
    ),
    config: {
      slug: "dentures",
      serviceName: "Dentures",
      serviceCategory: "Restorative Dentistry",
      heroTagline: "Natural & Confident",
      heroHeading: "Premium Dentures for West Bridgford",
      heroDescription:
        "Experience lightweight, natural-looking dentures designed for comfort and confidence. From cobalt-chrome to implant-retained solutions, every detail is tailored to you.",
      travelNote: "Premium denture craftsmanship just 15 minutes from West Bridgford with home whitening included.",
      heroStats: [
        { label: "Fitting appointments", value: "3" },
        { label: "Comfort reviews", value: "2" },
        { label: "Membership savings", value: "10%" }
      ],
      highlights: [
        {
          icon: Smile,
          title: "Natural Aesthetics",
          description: "Individually characterised teeth and gums for a personalised, age-appropriate appearance."
        },
        {
          icon: Shield,
          title: "Secure Fit",
          description: "Precision impressions, palette-free options, and implant stabilisation keep dentures secure all day."
        },
        {
          icon: Award,
          title: "Comfort Guarantee",
          description: "48-hour comfort adjustments and complimentary refinement visits for West Bridgford patients."
        }
      ],
      premiumBenefits: [
        {
          icon: Diamond,
          title: "Boutique Craftsmanship",
          description: "UK artisan technicians craft every denture tooth and gum tone specifically for your features."
        },
        {
          icon: TrendingUp,
          title: "Implant Upgrades",
          description: "Upgrade pathways to implant-retained dentures with exclusive West Bridgford pricing."
        },
        {
          icon: Heart,
          title: "Wellness Support",
          description: "Nutrition advice, speech coaching, and comfort reviews ensure a seamless transition."
        }
      ],
      packages: [
        {
          name: "Signature Acrylic",
          description: "Lightweight premium acrylic dentures with natural gum shading.",
          priceLabel: "From £1,095",
          duration: "3 visits",
          features: [
            "Digital smile preview",
            "Precision impressions",
            "Comfort review"
          ],
          icon: Smile
        },
        {
          name: "Cobalt Chrome",
          description: "Durable, slim framework offering superior comfort and stability.",
          priceLabel: "From £1,495",
          duration: "4 visits",
          features: [
            "Custom metal framework",
            "Stain-resistant finish",
            "Annual reline included"
          ],
          icon: ShieldCheck
        },
        {
          name: "Implant-Retained",
          description: "Gold standard for complete stability and chewing confidence.",
          priceLabel: "From £5,995",
          duration: "8-10 weeks",
          features: [
            "Implant placement",
            "Fixed locator system",
            "Complimentary hygiene plan"
          ],
          icon: Crown
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Design Consultation",
          description: "Face shape analysis, tooth selection, and smile preview with your treatment concierge."
        },
        {
          icon: Microscope,
          title: "Precision Try-In",
          description: "Wax try-in appointment to refine comfort, speech, and aesthetics before final fitting."
        },
        {
          icon: ShieldCheck,
          title: "Comfort Review",
          description: "Follow-up adjustments, polishing, and bespoke care plan for confident everyday wear."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "15 Minute Journey",
          description: "Door-to-door concierge directions and parking reserved for mobility-friendly access."
        },
        {
          icon: Timer,
          title: "Flexible Clinics",
          description: "Morning and afternoon clinics to fit around commitments, with home visits available on request."
        },
        {
          icon: Shield,
          title: "Emergency Support",
          description: "On-call denture repairs with same-day relining for accidental damage."
        }
      ],
      testimonial: {
        quote: "My new dentures are secure, light, and look beautifully natural – a world apart from my previous set.",
        author: "Patricia M, West Bridgford"
      },
      faqs: [
        {
          question: "How many appointments will I need?",
          answer: "Most denture journeys involve three to four appointments including design, try-in, fitting, and comfort review."
        },
        {
          question: "Can dentures look natural?",
          answer: "Yes – we customise tooth shade, gum tint, and texture to mimic natural appearance and age-appropriate characteristics."
        },
        {
          question: "Will they stay in securely?",
          answer: "We offer advanced impression techniques, precision-fit designs, and implant-retained options for absolute stability."
        },
        {
          question: "Can you repair my old dentures?",
          answer: "Yes. We provide rapid repairs and relines with optional aesthetic upgrades for improved comfort."
        },
        {
          question: "Do you offer implant-retained dentures?",
          answer: "We provide implant-retained overdentures with as few as two implants for a stable, confidence-boosting solution."
        }
      ],
      cta: {
        primary: { label: "Book Denture Consultation", href: "/book" },
        secondary: { label: "Request Implant Denture Guide", href: "/services/dentures/hybrid-dentures" }
      },
      structuredData: {
        image: "https://peartree.dental/images/dentures-hero.webp",
        medicalSpecialty: "Prosthodontics",
        priceRange: "£1095-£5995"
      }
    }
  },
  "emergency-dentist": {
    metadata: buildMetadata(
      "emergency-dentist",
      "Emergency Dentist",
      "Priority emergency dental appointments for West Bridgford residents. Same-day pain relief, out-of-hours availability, and follow-up restorative care.",
      [
        "emergency dentist West Bridgford",
        "same-day dentist West Bridgford",
        "out of hours dentist West Bridgford",
        "urgent dental care West Bridgford"
      ]
    ),
    config: {
      slug: "emergency-dentist",
      serviceName: "Emergency Dental Care",
      serviceCategory: "Emergency Dentistry",
      heroTagline: "Same-Day Relief",
      heroHeading: "Emergency Dentist for West Bridgford",
      heroDescription:
        "Fast-track emergency appointments with calming clinical suites, advanced diagnostics, and reassuring aftercare for West Bridgford families.",
      travelNote: "Rapid access from West Bridgford with priority parking and on-call clinician support.",
      heroStats: [
        { label: "Average appointment", value: "30 mins" },
        { label: "Pain relief success", value: "95%" },
        { label: "Follow-up booking", value: "within 48h" }
      ],
      highlights: [
        {
          icon: Shield,
          title: "Immediate Stabilisation",
          description: "On-the-spot pain relief, temporary repairs, and same-day prescriptions."
        },
        {
          icon: Microscope,
          title: "Advanced Diagnostics",
          description: "Emergency CBCT and digital imaging to identify fractures or infection sources quickly."
        },
        {
          icon: Heart,
          title: "Comfort Lounge",
          description: "Private triage lounge with refreshments and calming amenities while you wait."
        }
      ],
      premiumBenefits: [
        {
          icon: ShieldCheck,
          title: "Priority Access",
          description: "Reserved emergency slots each morning for West Bridgford callers and direct line to the clinical team."
        },
        {
          icon: Syringe,
          title: "Sedation Available",
          description: "IV, inhalation, and oral sedation options for complex emergency procedures."
        },
        {
          icon: TrendingUp,
          title: "Restorative Follow-Up",
          description: "Comprehensive treatment plans scheduled within 48 hours to complete long-term repairs."
        }
      ],
      packages: [
        {
          name: "Emergency Appointment",
          description: "Pain relief, diagnosis, and immediate stabilisation.",
          priceLabel: "£95 consultation",
          duration: "30-45 mins",
          features: [
            "Priority access",
            "Prescription if required",
            "Follow-up plan"
          ],
          icon: Shield
        },
        {
          name: "Cosmetic Repair",
          description: "Same-day repair for chipped or broken front teeth.",
          priceLabel: "From £160",
          duration: "60 mins",
          features: [
            "Colour-matched bonding",
            "Polish & seal",
            "Future prevention advice"
          ],
          icon: Sparkles
        },
        {
          name: "Trauma Concierge",
          description: "Full support after dental trauma including imaging and referrals.",
          priceLabel: "From £295",
          duration: "Up to 2 hours",
          features: [
            "CBCT imaging",
            "Multi-specialist review",
            "Insurance reporting"
          ],
          icon: ShieldCheck
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Immediate Triage",
          description: "Call our emergency line for instant triage and appointment allocation."
        },
        {
          icon: Microscope,
          title: "Diagnosis & Relief",
          description: "In-clinic assessment with on-the-spot treatment to relieve pain or stabilise damage."
        },
        {
          icon: Shield,
          title: "Restorative Plan",
          description: "Treatment plan arranged within 48 hours to complete definitive care."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "Priority Parking",
          description: "Reserved emergency spaces by the entrance with wheelchair assistance on request."
        },
        {
          icon: Timer,
          title: "Rapid Arrival",
          description: "Average 12 minute drive – concierge team tracks traffic and keeps you updated."
        },
        {
          icon: Shield,
          title: "24/7 Guidance",
          description: "Clinician follow-up and direct contact details for after-hours reassurance."
        }
      ],
      testimonial: {
        quote: "They saw me within the hour and fixed my cracked veneer before a client presentation. Incredibly calm and efficient.",
        author: "Michael F, West Bridgford"
      },
      faqs: [
        {
          question: "How quickly can you see me in an emergency?",
          answer: "We reserve emergency spaces daily for West Bridgford patients and will see you the same day – often within a couple of hours."
        },
        {
          question: "Do you treat dental trauma out of hours?",
          answer: "Yes. Our on-call clinician can provide guidance and arrange out-of-hours care when required."
        },
        {
          question: "What should I do if I lose a crown or veneer?",
          answer: "Call us immediately, store the restoration safely, and avoid using the tooth. We can usually re-bond or remake same-day."
        },
        {
          question: "Can you help with dental pain while I’m away on business?",
          answer: "We provide remote triage, prescriptions where appropriate, and plan follow-up treatment on your return."
        },
        {
          question: "Will treatment be finished in one visit?",
          answer: "We always relieve pain immediately. Complex treatments may require a follow-up visit which we schedule within 48 hours."
        }
      ],
      cta: {
        primary: { label: "Call Emergency Line", href: emergencyTelHref },
        secondary: { label: "Secure Priority Appointment", href: "/book?type=emergency" }
      },
      structuredData: {
        image: "https://peartree.dental/images/emergency-dental-care.webp",
        medicalSpecialty: "Emergency Dentistry",
        priceRange: "£95-£495"
      }
    }
  },
  "invisalign": {
    metadata: buildMetadata(
      "invisalign",
      "Invisalign",
      "Discreet Invisalign treatment for West Bridgford professionals. Digital outcome simulations, remote monitoring, and concierge check-ins to suit busy schedules.",
      [
        "Invisalign West Bridgford",
        "clear aligners West Bridgford",
        "adult braces West Bridgford",
        "Invisalign dentist West Bridgford"
      ]
    ),
    config: {
      slug: "invisalign",
      serviceName: "Invisalign",
      serviceCategory: "Orthodontics",
      heroTagline: "Discreet Alignment",
      heroHeading: "Invisalign for West Bridgford",
      heroDescription:
        "Straighten teeth discreetly with Invisalign aligners, remote monitoring, and a concierge team aligned with your professional commitments.",
      travelNote: "Invisalign Platinum providers 10 minutes from West Bridgford with digital scans and remote check-ins.",
      heroStats: [
        { label: "Average treatment", value: "6-12 months" },
        { label: "Review visits", value: "Every 8 weeks" },
        { label: "Remote monitoring", value: "Included" }
      ],
      highlights: [
        {
          icon: Sparkles,
          title: "Digital Outcome Simulator",
          description: "See your new smile in minutes with iTero 3D scanning and progression visuals."
        },
        {
          icon: TrendingUp,
          title: "Remote Monitoring",
          description: "AI-powered aligner tracking reduces in-practice visits without compromising results."
        },
        {
          icon: Shield,
          title: "Comprehensive Package",
          description: "Includes whitening, composite edge contouring, and Vivera retainers for lasting impact."
        }
      ],
      premiumBenefits: [
        {
          icon: Smile,
          title: "Lifestyle Focused",
          description: "Aligner protocols tailored for travel, client meetings, and evenings out in West Bridgford."
        },
        {
          icon: Heart,
          title: "Comfort Enhancements",
          description: "Comfort chewies, lip balms, and support kit included to ease each aligner change."
        },
        {
          icon: ShieldCheck,
          title: "Retention Plan",
          description: "10-year security with retainers, annual reviews, and included refinement aligners if needed."
        }
      ],
      packages: [
        {
          name: "Express Invisalign",
          description: "Ideal for minor crowding or spacing corrections.",
          priceLabel: "From £2,850",
          duration: "6-8 months",
          features: [
            "Digital scan & outcome preview",
            "Whitening included",
            "Vivera retainers"
          ],
          icon: Sparkles
        },
        {
          name: "Signature Invisalign",
          description: "Most popular option for moderate alignment needs.",
          priceLabel: "From £3,495",
          duration: "9-12 months",
          features: [
            "Remote monitoring",
            "Composite edge contouring",
            "3 sets of premium retainers"
          ],
          icon: Smile
        },
        {
          name: "Comprehensive Invisalign",
          description: "For complex cases requiring full arch refinement.",
          priceLabel: "From £4,495",
          duration: "12-18 months",
          features: [
            "Unlimited aligners",
            "Refinement aligners",
            "12-month retention plan"
          ],
          icon: Crown
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Digital Assessment",
          description: "Smile analysis, 3D scans, and preview of your Invisalign journey in under 45 minutes."
        },
        {
          icon: Sparkles,
          title: "Aligner Journey",
          description: "Aligners delivered in curated sets with remote monitoring to reduce in-clinic visits."
        },
        {
          icon: ShieldCheck,
          title: "Retention & Finish",
          description: "Final refinements, whitening, and retainers included to protect your new smile."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "10 Minute Drive",
          description: "Straight route from West Bridgford with on-site parking and refreshments on arrival."
        },
        {
          icon: LocateFixed,
          title: "Remote Check-Ins",
          description: "Video reviews and digital monitoring keep visits minimal for busy diaries."
        },
        {
          icon: Shield,
          title: "Professional Friendly",
          description: "Aligner change reminders aligned with your working week for seamless routine integration."
        }
      ],
      testimonial: {
        quote: "Remote monitoring meant I only visited every couple of months. My aligners were discreet and the whitening finish was brilliant.",
        author: "Harriet G, West Bridgford"
      },
      faqs: [
        {
          question: "How often do I need appointments?",
          answer: "Most Invisalign patients visit every 8-10 weeks, with remote monitoring to track progress in between."
        },
        {
          question: "Can I start Invisalign after composite bonding?",
          answer: "We typically align your teeth first, then enhance with bonding. We’ll design a bespoke sequence for your goals."
        },
        {
          question: "Are retainers included?",
          answer: "Yes. All packages include premium Vivera retainers and ongoing retention check-ups."
        },
        {
          question: "What if I travel frequently?",
          answer: "We can provide multiple aligner sets, schedule remote check-ins, and adapt the treatment plan around your travel commitments."
        },
        {
          question: "Can I pair Invisalign with whitening?",
          answer: "Absolutely. Whitening is included once alignment is complete so your new smile looks its brightest."
        }
      ],
      cta: {
        primary: { label: "Book Invisalign Consultation", href: "/book" },
        secondary: { label: "Download Invisalign Guide", href: "/services/orthodontics/invisalign" }
      },
      structuredData: {
        image: "https://peartree.dental/images/invisalign-aligners.webp",
        medicalSpecialty: "Orthodontics",
        priceRange: "£2850-£4495"
      }
    }
  },
  "orthodontics": {
    metadata: buildMetadata(
      "orthodontics",
      "Orthodontics",
      "Comprehensive orthodontic solutions for West Bridgford families, from Invisalign to specialist braces and retention. Concierge scheduling and digital monitoring included.",
      [
        "orthodontist West Bridgford",
        "braces West Bridgford",
        "clear braces West Bridgford",
        "retainers West Bridgford"
      ]
    ),
    config: {
      slug: "orthodontics",
      serviceName: "Orthodontics",
      serviceCategory: "Orthodontics",
      heroTagline: "Family Orthodontics",
      heroHeading: "Orthodontic Experts for West Bridgford",
      heroDescription:
        "From teen braces to adult Invisalign, our orthodontic team designs discreet, effective treatment plans with the convenience West Bridgford families expect.",
      travelNote: "Centred 12 minutes from West Bridgford with evening and weekend orthodontic clinics.",
      heroStats: [
        { label: "Patients aligned", value: "2,500+" },
        { label: "Team experience", value: "20 yrs" },
        { label: "Check-ins", value: "6-8 week" }
      ],
      highlights: [
        {
          icon: Smile,
          title: "Comprehensive Options",
          description: "Invisalign, ClearCorrect, ceramic braces, and specialist fixed appliances for complex cases."
        },
        {
          icon: Shield,
          title: "Specialist Orthodontist",
          description: "Treatments planned by GDC-registered specialists with hospital training backgrounds."
        },
        {
          icon: TrendingUp,
          title: "Performance Tracking",
          description: "Digital monitoring and remote check-ins keep treatment efficient and on schedule."
        }
      ],
      premiumBenefits: [
        {
          icon: Sparkles,
          title: "Smile Finishing",
          description: "Post-orthodontic bonding and whitening packages included to perfect your final result."
        },
        {
          icon: ShieldCheck,
          title: "Retention Promise",
          description: "Long-term retention plan with Vivera retainers and wire options tailored to lifestyle."
        },
        {
          icon: Heart,
          title: "Family Scheduling",
          description: "Back-to-back appointments for siblings and weekend clinics for minimal school disruption."
        }
      ],
      packages: [
        {
          name: "Teen Ceramic Braces",
          description: "Discreet ceramic brackets for confident school and social life.",
          priceLabel: "From £3,250",
          duration: "18 months",
          features: [
            "Specialist fitting",
            "Monthly adjustments",
            "Retainers included"
          ],
          icon: Shield
        },
        {
          name: "Hybrid Invisalign",
          description: "Combination aligners and precision braces for complex adult cases.",
          priceLabel: "From £4,450",
          duration: "12-18 months",
          features: [
            "Digital planning",
            "Remote monitoring",
            "Finishing contouring"
          ],
          icon: Smile
        },
        {
          name: "Accelerated Treatment",
          description: "Advanced systems such as PROPEL to reduce treatment time by up to 50%.",
          priceLabel: "Add-on £495",
          duration: "Flexible",
          features: [
            "OrthoPulse light therapy",
            "Priority consultations",
            "Monthly progress analytics"
          ],
          icon: TrendingUp
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Orthodontic Assessment",
          description: "Comprehensive bite analysis, digital scans, and treatment simulation."
        },
        {
          icon: Sparkles,
          title: "Treatment Journey",
          description: "Tailored appliances fitted with comfort aids and digital monitoring."
        },
        {
          icon: ShieldCheck,
          title: "Retention & Enhancement",
          description: "Retainers, finishing touches, and long-term follow-up to protect results."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "12 Minute Drive",
          description: "Central route with text reminders and refreshments on arrival for busy parents."
        },
        {
          icon: Timer,
          title: "After-School Slots",
          description: "Late afternoon appointments for children and teens to minimise school disruption."
        },
        {
          icon: Shield,
          title: "Retention Reviews",
          description: "Annual retention review included with membership discount."
        }
      ],
      testimonial: {
        quote: "My son’s ceramic braces were handled brilliantly and the results are incredible. The team worked around our schedules effortlessly.",
        author: "Laura D, West Bridgford"
      },
      faqs: [
        {
          question: "Do you treat both adults and children?",
          answer: "Yes. Our specialist orthodontists treat all ages with tailored appliance options for each lifestyle."
        },
        {
          question: "Can I choose between braces and Invisalign?",
          answer: "We’ll assess your goals and recommend the most effective option, often combining systems for the best outcome."
        },
        {
          question: "How often are appointments?",
          answer: "Most treatments require visits every 6-8 weeks, with remote monitoring to keep things efficient."
        },
        {
          question: "Are retainers extra?",
          answer: "No – all orthodontic plans include retainers and follow-up to secure your new smile."
        },
        {
          question: "Do you offer accelerated treatment?",
          answer: "We provide PROPEL and OrthoPulse technologies to safely reduce treatment time for suitable cases."
        }
      ],
      cta: {
        primary: { label: "Book Orthodontic Consultation", href: "/book" },
        secondary: { label: "Compare Treatment Options", href: "/services/treatment-comparison" }
      },
      structuredData: {
        image: "https://peartree.dental/images/orthodontics-invisalign-treatment.webp",
        medicalSpecialty: "Orthodontics",
        priceRange: "£3250-£4450"
      }
    }
  },
  "porcelain-veneers": {
    metadata: buildMetadata(
      "porcelain-veneers",
      "Porcelain Veneers",
      "Hand-crafted porcelain veneers for West Bridgford executives seeking flawless yet natural smile enhancements. Digital mock-ups, trial smiles, and concierge planning included.",
      [
        "porcelain veneers West Bridgford",
        "veneers dentist West Bridgford",
        "smile makeover veneers West Bridgford"
      ]
    ),
    config: {
      slug: "porcelain-veneers",
      serviceName: "Porcelain Veneers",
      serviceCategory: "Cosmetic Dentistry",
      heroTagline: "Elevated Aesthetics",
      heroHeading: "Porcelain Veneers for West Bridgford",
      heroDescription:
        "Bespoke porcelain veneers crafted by master ceramists, designed to deliver camera-ready confidence while protecting natural tooth structure.",
      travelNote: "Discreet veneer studio 15 minutes from West Bridgford with private planning lounge and photo studio.",
      heroStats: [
        { label: "Veneer durability", value: "15+ yrs" },
        { label: "Preview fittings", value: "2" },
        { label: "Touch-up warranty", value: "12 months" }
      ],
      highlights: [
        {
          icon: Sparkles,
          title: "Trial Smile",
          description: "Wear a temporary smile to refine shape and colour based on feedback from family or colleagues."
        },
        {
          icon: Diamond,
          title: "Boutique Ceramists",
          description: "Each veneer handcrafted with layered porcelain for natural translucency and lifelike detail."
        },
        {
          icon: ShieldCheck,
          title: "Minimal Prep",
          description: "Ultra-thin veneer options preserve enamel while delivering dramatic improvements."
        }
      ],
      premiumBenefits: [
        {
          icon: Wand2,
          title: "Photography Suite",
          description: "Professional-grade smile photography pre and post treatment to showcase results."
        },
        {
          icon: Heart,
          title: "Comfort Enhancements",
          description: "Luxurious touches including noise-cancelling headphones, aromatherapy, and sedation options."
        },
        {
          icon: Shield,
          title: "Confidence Guarantee",
          description: "Complimentary refinement appointment and polishing session within 6 months."
        }
      ],
      packages: [
        {
          name: "Executive Duo",
          description: "Two-to-four veneers to refine social six teeth.",
          priceLabel: "From £2,950",
          duration: "4 weeks",
          features: [
            "Digital smile design",
            "Trial smile",
            "Complimentary whitening"
          ],
          icon: Crown
        },
        {
          name: "Signature Six",
          description: "Six veneers for balanced, harmonious smile transformation.",
          priceLabel: "From £4,950",
          duration: "6 weeks",
          features: [
            "Wax-up preview",
            "Individual shading",
            "Night guard included"
          ],
          icon: Diamond
        },
        {
          name: "Red Carpet Twelve",
          description: "Full arch veneer transformation for ultimate impact.",
          priceLabel: "From £7,950",
          duration: "8 weeks",
          features: [
            "Facial profiling",
            "Bespoke ceramist visit",
            "Annual polish & maintenance"
          ],
          icon: Sparkles
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Design Consultation",
          description: "Vision setting, digital scans, and wax-up creation with aesthetic specialist."
        },
        {
          icon: Microscope,
          title: "Trial Smile",
          description: "Temporary veneers fitted to test comfort, length, and overall look before final crafting."
        },
        {
          icon: ShieldCheck,
          title: "Final Placement",
          description: "Pain-free veneer placement, bite refinement, and finishing polish for seamless integration."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "15 Minute Journey",
          description: "Private arrival entrance and concierge host to escort you to the veneer suite."
        },
        {
          icon: Wand2,
          title: "Photo Ready",
          description: "On-site photo studio for professional headshots after treatment by arrangement."
        },
        {
          icon: Shield,
          title: "Aftercare Luxury",
          description: "Complimentary spa whitening top-ups and veneer maintenance kit."
        }
      ],
      testimonial: {
        quote: "My veneers are elegant and subtle – colleagues just say I look ‘rested’. The process was a dream from start to finish.",
        author: "Natasha V, West Bridgford"
      },
      faqs: [
        {
          question: "Will my veneers look fake?",
          answer: "Not at all – we customise each veneer to your facial proportions, and the ceramist layers porcelain for natural translucency."
        },
        {
          question: "How long do porcelain veneers last?",
          answer: "With proper care, porcelain veneers typically last 12-15 years or more. Our membership plan includes maintenance visits."
        },
        {
          question: "Do veneers damage natural teeth?",
          answer: "We use minimal-prep techniques that protect enamel while still delivering dramatic improvements."
        },
        {
          question: "Can I preview the results?",
          answer: "Yes – we provide digital mock-ups, wax-ups, and temporary trial smiles before final fitting."
        },
        {
          question: "Do you offer financing?",
          answer: "We offer interest-free finance up to 12 months and flexible plans up to 60 months."
        }
      ],
      cta: {
        primary: { label: "Arrange Veneer Consultation", href: "/book" },
        secondary: { label: "View Veneer Gallery", href: "/smile-gallery" }
      },
      structuredData: {
        image: "https://peartree.dental/images/porcelain-veneers.webp",
        medicalSpecialty: "Cosmetic Dentistry",
        priceRange: "£2950-£7950"
      }
    }
  },
  "root-canal-treatment": {
    metadata: buildMetadata(
      "root-canal-treatment",
      "Root Canal Treatment",
      "Comfort-focused root canal therapy for West Bridgford patients with dental pain. Microscopic treatment, sedation options, and same-day crowns to protect your smile.",
      [
        "root canal West Bridgford",
        "endodontist West Bridgford",
        "root canal specialist West Bridgford",
        "painless root canal West Bridgford"
      ]
    ),
    config: {
      slug: "root-canal-treatment",
      serviceName: "Root Canal Treatment",
      serviceCategory: "Endodontics",
      heroTagline: "Pain-Free Protection",
      heroHeading: "Root Canal Treatment for West Bridgford",
      heroDescription:
        "Microscope-enhanced root canal procedures completed with gentle sedation, soothing amenities, and restorative crowns for long-term protection.",
      travelNote: "Endodontic specialists 13 minutes from West Bridgford with emergency access and secure parking.",
      heroStats: [
        { label: "Treatment success", value: "96%" },
        { label: "Average visits", value: "1-2" },
        { label: "Comfort reviews", value: "100%" }
      ],
      highlights: [
        {
          icon: Microscope,
          title: "Microscope Precision",
          description: "High magnification ensures complete cleaning and sealing of root canals."
        },
        {
          icon: ShieldCheck,
          title: "Comfort Protocol",
          description: "Warm anaesthetic, calming sedation, and comfort aids for a relaxed experience."
        },
        {
          icon: Crown,
          title: "Integrated Restoration",
          description: "Same-day crown or onlay fitting available to protect the treated tooth immediately."
        }
      ],
      premiumBenefits: [
        {
          icon: Heart,
          title: "Wellness Lounge",
          description: "Relaxing scents, warm blankets, and curated playlists create a spa-like environment."
        },
        {
          icon: Shield,
          title: "Sedation Choices",
          description: "IV sedation, oral sedation, and noise-cancelling headphones ensure total comfort."
        },
        {
          icon: TrendingUp,
          title: "Aftercare Kit",
          description: "Personalised recovery plan, soft diet suggestions, and follow-up calls within 24 hours."
        }
      ],
      packages: [
        {
          name: "Single Root Canal",
          description: "Ideal for front teeth or premolars.",
          priceLabel: "From £595",
          duration: "90 mins",
          features: [
            "Microscope-assisted",
            "Warm obturation",
            "Comfort review"
          ],
          icon: Shield
        },
        {
          name: "Molar Root Canal",
          description: "Complex molar treatment with additional canal cleaning.",
          priceLabel: "From £695",
          duration: "120 mins",
          features: [
            "CBCT imaging",
            "Gentle sedation",
            "Temporary crown included"
          ],
          icon: Microscope
        },
        {
          name: "Retreatment",
          description: "Specialist care for previously treated teeth requiring attention.",
          priceLabel: "From £795",
          duration: "2 visits",
          features: [
            "Ultrasonic cleaning",
            "Antibacterial seal",
            "Crown upgrade option"
          ],
          icon: TrendingUp
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Assessment & Imaging",
          description: "CBCT imaging, vitality tests, and treatment planning with your endodontic specialist."
        },
        {
          icon: Microscope,
          title: "Comfortable Treatment",
          description: "Microscope-guided cleaning and sealing with state-of-the-art obturation systems."
        },
        {
          icon: ShieldCheck,
          title: "Restore & Protect",
          description: "Immediate restoration plan including on-site crown or onlay for strength."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "13 Minute Drive",
          description: "Easy access route with valet-style parking and concierge greeting."
        },
        {
          icon: Timer,
          title: "Emergency Slots",
          description: "Same-day pain relief appointments reserved for West Bridgford referrals."
        },
        {
          icon: Shield,
          title: "Comfort Check",
          description: "Follow-up call and review appointment included to ensure complete recovery."
        }
      ],
      testimonial: {
        quote: "I dreaded root canal treatment, but the team made it calm and painless. I even watched Netflix during the procedure!",
        author: "Jonathan W, West Bridgford"
      },
      faqs: [
        {
          question: "Will the treatment be painful?",
          answer: "No. We use advanced anaesthetic techniques and offer sedation so you remain comfortable throughout."
        },
        {
          question: "How long does a root canal take?",
          answer: "Most are completed in 60-120 minutes depending on the tooth. Complex cases may require a second visit."
        },
        {
          question: "Do I need a crown afterwards?",
          answer: "Back teeth typically require crowns for strength. We can place a temporary or same-day crown immediately."
        },
        {
          question: "Can you fix failed root canals?",
          answer: "Yes. Our specialist endodontists handle retreatments with advanced technology to save previously treated teeth."
        },
        {
          question: "Is sedation available?",
          answer: "We provide IV and oral sedation options and a calming environment for anxious patients."
        }
      ],
      cta: {
        primary: { label: "Book Emergency Assessment", href: "/book" },
        secondary: { label: "Speak to Endodontic Team", href: emergencyTelHref }
      },
      structuredData: {
        image: "https://peartree.dental/images/root-canal-treatment.webp",
        medicalSpecialty: "Endodontics",
        priceRange: "£595-£895"
      }
    }
  },
  "teeth-whitening": {
    metadata: buildMetadata(
      "teeth-whitening",
      "Teeth Whitening",
      "Professional teeth whitening for West Bridgford clients. Boutique home whitening, in-clinic power whitening, and maintenance plans for radiant confidence.",
      [
        "teeth whitening West Bridgford",
        "Boutique whitening West Bridgford",
        "professional whitening West Bridgford",
        "smile brightening West Bridgford"
      ]
    ),
    config: {
      slug: "teeth-whitening",
      serviceName: "Teeth Whitening",
      serviceCategory: "Cosmetic Dentistry",
      heroTagline: "Brighter in Weeks",
      heroHeading: "Teeth Whitening for West Bridgford",
      heroDescription:
        "Achieve a luminous, confident smile with bespoke whitening protocols tailored for your diary – from boutique home systems to in-clinic power whitening.",
      travelNote: "Concierge whitening programmes minutes from West Bridgford with evening clinics and maintenance plans.",
      heroStats: [
        { label: "Shade improvement", value: "Up to 7" },
        { label: "Treatment timeline", value: "14 days" },
        { label: "Sensitivity care", value: "Included" }
      ],
      highlights: [
        {
          icon: Sparkles,
          title: "Boutique Home Kits",
          description: "Custom trays and day/night gels for flexible whitening around meetings and events."
        },
        {
          icon: Wand2,
          title: "Enlighten Evolution",
          description: "Guaranteed B1 shade using the UK’s leading combination whitening system."
        },
        {
          icon: ShieldCheck,
          title: "Sensitivity Management",
          description: "BioMin paste, fluoride varnish, and comfort protocols keep sensitivity to a minimum."
        }
      ],
      premiumBenefits: [
        {
          icon: Heart,
          title: "Lifestyle Coaching",
          description: "Guidance on coffee, wine, and gym-friendly routines to maintain brightness long-term."
        },
        {
          icon: Sparkles,
          title: "Photography Ready",
          description: "Pre-event whitening boosters and finishing polish to look immaculate in photos."
        },
        {
          icon: Shield,
          title: "Maintenance Membership",
          description: "Quarterly top-up gels, polish appointments, and whitening-friendly hygiene cleans."
        }
      ],
      packages: [
        {
          name: "Boutique DayWhite",
          description: "Daytime whitening for fast results without overnight trays.",
          priceLabel: "£295",
          duration: "14 days",
          features: [
            "Custom trays",
            "Desensitising kit",
            "Shade tracking"
          ],
          icon: Sparkles
        },
        {
          name: "Boutique NightBright",
          description: "Sleep-friendly whitening ideal for busy lifestyles.",
          priceLabel: "£295",
          duration: "14 days",
          features: [
            "Overnight gels",
            "Travel case",
            "Refill discount"
          ],
          icon: Wand2
        },
        {
          name: "Enlighten Ultimate",
          description: "Combination in-clinic and home whitening with guaranteed results.",
          priceLabel: "£595",
          duration: "3 weeks",
          features: [
            "In-surgery power session",
            "Deep bleaching trays",
            "Top-up syringes"
          ],
          icon: Diamond
        }
      ],
      process: [
        {
          icon: ClipboardList,
          title: "Smile Assessment",
          description: "Shade analysis, dental health check, and lifestyle review to choose the best whitening system."
        },
        {
          icon: Sparkles,
          title: "Whitening Programme",
          description: "Tailored at-home protocol with weekly concierge check-ins and optional in-clinic boosters."
        },
        {
          icon: ShieldCheck,
          title: "Maintain & Glow",
          description: "Maintenance plan with top-up gels, hygiene cleans, and lifestyle strategies to stay bright."
        }
      ],
      travelInfo: [
        {
          icon: Car,
          title: "8 Minute Drive",
          description: "Quick access with complimentary valet-style parking for evening whitening clinics."
        },
        {
          icon: Timer,
          title: "Express Appointments",
          description: "30-minute mould appointments and 45-minute in-clinic boosting sessions."
        },
        {
          icon: Shield,
          title: "Event Ready",
          description: "Concierge scheduling to align with weddings, photoshoots, or corporate events."
        }
      ],
      testimonial: {
        quote: "My teeth are brighter than they’ve ever been. The maintenance plan keeps my smile photo-ready for client events.",
        author: "Priya S, West Bridgford"
      },
      faqs: [
        {
          question: "Is whitening safe for sensitive teeth?",
          answer: "Yes. We tailor gels to your sensitivity level and provide desensitising products to keep you comfortable."
        },
        {
          question: "How long do results last?",
          answer: "Most clients maintain their new shade for 12+ months with occasional top-ups and good oral hygiene."
        },
        {
          question: "Can I whiten if I have bonding or veneers?",
          answer: "We’ll match and schedule whitening around existing restorations, or refresh bonding afterwards for a perfect blend."
        },
        {
          question: "Is Enlighten worth the investment?",
          answer: "If you want guaranteed results with minimal sensitivity, Enlighten offers long-term brightness and includes aftercare products."
        },
        {
          question: "Do you offer group whitening for weddings?",
          answer: "Yes. We create custom timelines and pricing for bridal parties and corporate teams preparing for events."
        }
      ],
      cta: {
        primary: { label: "Book Whitening Consultation", href: "/book" },
        secondary: { label: "Join Whitening Maintenance", href: "/membership" }
      },
      structuredData: {
        image: "https://peartree.dental/images/teeth-whitening.webp",
        medicalSpecialty: "Cosmetic Dentistry",
        priceRange: "£295-£595"
      }
    }
  }
};

export function getWestBridgfordServiceEntry(slug: string): ServiceEntry {
  const entry = westBridgfordServiceContent[slug];
  if (!entry) {
    throw new Error(`No West Bridgford service configuration found for slug: ${slug}`);
  }
  return entry;
}
