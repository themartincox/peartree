import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  CheckCircle,
  Car,
  CalendarDays,
  Shield,
  Heart,
  Users,
  Baby,
  Award,
  Navigation,
  Home,
  CreditCard,
  Calendar,
  ThumbsUp,
  FileText,
  Stethoscope,
  Activity,
  GraduationCap,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Family Dentistry in Gedling - Comprehensive Care for Working Families | Pear Tree Dental",
  description: "Family dentistry for Gedling working families. Comprehensive dental care for all ages, flexible appointments, and honest pricing. Quick drive from Gedling NG4.",
  keywords: [
    "family dentistry Gedling",
    "family dentist Gedling NG4",
    "comprehensive dental care Gedling",
    "working families dentist Gedling",
    "children's dentistry Gedling",
    "adult dental care Gedling",
    "affordable family dentist Gedling"
  ],
  openGraph: {
    title: "Family Dentistry in Gedling - Comprehensive Care for Working Families | Pear Tree Dental",
    description: "Family dentistry for Gedling working families. Comprehensive care for all ages with flexible scheduling.",
    url: "https://peartree.dental/gedling/family-dentistry"
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/family-dentistry"
  }
};

export default function GedlingFamilyDentistryPage() {
  const gedlingFamilyFAQs = [
    {
      question: "How convenient is family dentistry from Gedling?",
      answer: "Pear Tree Dental is just a quick drive from Gedling, making it easy for working families to access comprehensive dental care. We offer flexible appointment scheduling that works around work and school commitments, with evening and weekend options available."
    },
    {
      question: "Do you treat all family members from babies to grandparents?",
      answer: "Yes! We provide comprehensive family dentistry for all ages, from toddler check-ups to adult treatments and senior care. Our gentle approach works for anxious children and adults alike, making dental visits comfortable for the whole Gedling family."
    },
    {
      question: "What family dental services do you offer to Gedling patients?",
      answer: "We offer complete family care including children's dentistry, adult preventive care, restorative treatments, cosmetic dentistry, and emergency care. We can handle all your family's dental needs in one convenient location with honest, transparent pricing."
    },
    {
      question: "How do you make dental care affordable for working families?",
      answer: "We believe quality dental care should be accessible to Gedling working families. We offer transparent pricing, flexible payment plans, and family package deals. We'll always discuss treatment options and costs upfront so you can make informed decisions."
    },
    {
      question: "Can you schedule appointments to fit around our work schedule?",
      answer: "Absolutely! We understand working families in Gedling have busy schedules. We offer early morning, evening, and Saturday appointments to accommodate work and school timetables. We can often schedule multiple family members together to save time."
    }
  ];

  const familyServices = [
    {
      service: "Children's Dental Care",
      description: "Gentle, fun dental care for kids of all ages",
      ageGroup: "Ages 2-16",
      approach: "Child-friendly, anxiety-free environment",
      pricing: "From £45",
      icon: Baby
    },
    {
      service: "Adult Preventive Care",
      description: "Comprehensive health-focused dental care",
      ageGroup: "Adults 17+",
      approach: "Health-focused, efficient treatment",
      pricing: "From £65",
      icon: Shield
    },
    {
      service: "Senior Dental Care",
      description: "Specialized care for mature family members",
      ageGroup: "Seniors 65+",
      approach: "Gentle, comfort-focused treatment",
      pricing: "From £55",
      icon: Heart
    },
    {
      service: "Family Emergency Care",
      description: "Same-day urgent care for all family members",
      ageGroup: "All ages",
      approach: "Fast, effective emergency treatment",
      pricing: "From £85",
      icon: Target
    }
  ];

  const familyBenefits = [
    {
      benefit: "Comprehensive Family Care",
      description: "Complete dental care for all family members under one roof",
      value: "Convenient one-stop care",
      icon: Users
    },
    {
      benefit: "Flexible Family Scheduling",
      description: "Appointments that work around work and school schedules",
      value: "Time-saving convenience",
      icon: Calendar
    },
    {
      benefit: "Transparent Family Pricing",
      description: "Clear costs with family discounts and payment plans",
      value: "Budget-friendly care",
      icon: CreditCard
    },
    {
      benefit: "Child-Friendly Environment",
      description: "Anxiety-free dental care that kids actually enjoy",
      value: "Stress-free visits",
      icon: ThumbsUp
    }
  ];

  const ageSpecificCare = [
    {
      ageGroup: "Toddlers & Pre-School (Ages 2-5)",
      keyServices: "First dental visits, cavity prevention, habit counseling",
      specialApproach: "Fun, gentle introduction to dental care",
      commonTreatments: ["Fluoride application", "Cleaning", "Oral health education", "Habit counseling"],
      parentBenefits: "Early prevention saves money and prevents problems"
    },
    {
      ageGroup: "School Age Children (Ages 6-12)",
      keyServices: "Preventive care, orthodontic assessment, sealants",
      specialApproach: "Educational focus with age-appropriate communication",
      commonTreatments: ["Dental sealants", "Fluoride treatments", "Orthodontic monitoring", "Cavity treatment"],
      parentBenefits: "Preventing problems during key development years"
    },
    {
      ageGroup: "Teenagers (Ages 13-18)",
      keyServices: "Orthodontics, cosmetic care, wisdom tooth monitoring",
      specialApproach: "Building confidence with aesthetic focus",
      commonTreatments: ["Teeth whitening", "Orthodontic treatment", "Wisdom tooth care", "Aesthetic bonding"],
      parentBenefits: "Building confidence for social and academic success"
    },
    {
      ageGroup: "Working Adults (Ages 19-64)",
      keyServices: "Preventive care, restorative treatment, cosmetic dentistry",
      specialApproach: "Efficient, health-focused care for busy schedules",
      commonTreatments: ["Professional cleaning", "Fillings and crowns", "Teeth whitening", "Gum disease treatment"],
      parentBenefits: "Maintaining health and appearance for professional success"
    },
    {
      ageGroup: "Seniors (Ages 65+)",
      keyServices: "Health-focused care, dentures, medication considerations",
      specialApproach: "Gentle, comfort-focused treatment with health integration",
      commonTreatments: ["Gum disease management", "Denture care", "Medication-aware treatment", "Health monitoring"],
      parentBenefits: "Maintaining quality of life and overall health"
    }
  ];

  const workingFamilyFeatures = [
    {
      feature: "Family Appointment Coordination",
      description: "Schedule multiple family members together to save time",
      benefit: "Fewer trips, more family time together"
    },
    {
      feature: "Flexible Evening & Weekend Hours",
      description: "Appointments outside standard work and school hours",
      benefit: "No need to miss work or school for dental care"
    },
    {
      feature: "Family Treatment Planning",
      description: "Coordinated care planning across all family members",
      benefit: "Comprehensive family oral health management"
    },
    {
      feature: "Budget-Friendly Payment Options",
      description: "Family packages and payment plans available",
      benefit: "Quality dental care that fits your family budget"
    },
    {
      feature: "Child Behavior Management",
      description: "Specialized techniques to help anxious children feel comfortable",
      benefit: "Positive dental experiences that last a lifetime"
    },
    {
      feature: "Preventive Focus for Growing Families",
      description: "Early intervention and prevention to avoid costly problems",
      benefit: "Healthier teeth and lower long-term dental costs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Pear Tree Dental - Family Dentistry in Gedling",
            "image": "https://peartree.dental/images/family-dentistry-gedling.jpg",
            "url": "https://peartree.dental/gedling/family-dentistry",
            "telephone": "+44-115-931-2935",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 Nottingham Road",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5AE",
              "addressCountry": "UK"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Gedling, NG4"
            },
            "medicalSpecialty": "Family Dentistry - Comprehensive Care All Ages",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£45-£85"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Gedling Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Dentistry in <span className="text-yellow-300">Gedling</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Comprehensive Care for Busy Working Families
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Gedling — Complete family dental care for all ages
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Users className="w-5 h-5 mr-2" />
                  Book Family Appointment
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">👨‍👩‍👧‍👦 Complete family dental care for busy Gedling families!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Complete Family Dental Care for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that Gedling working families need dental care that fits their busy schedules and
                budget considerations. Our comprehensive family practice provides quality care for all ages with flexible scheduling and honest pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {familyBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-blue-200">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-blue-100 text-blue-700">{benefit.value}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-blue-50 rounded-lg p-8">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Family-Centered Dental Care</h3>
              <p className="text-lg text-gray-600 mb-6">
                We know that Gedling working families juggle many priorities. Our family dental practice is designed
                to provide comprehensive care that's convenient, affordable, and gentle for every family member.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">All ages welcome</div>
                  <p className="text-gray-600">From toddlers to grandparents</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Flexible scheduling</div>
                  <p className="text-gray-600">Work around your busy schedule</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Quick drive</div>
                  <p className="text-gray-600">Convenient from Gedling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Services */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Dental Services for Every Gedling Family Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From children's first dental visits to adult preventive care and senior dental health,
                we provide complete family dental services with age-appropriate care for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {familyServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-blue-400">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{service.service}</CardTitle>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{service.pricing}</p>
                        <Badge variant="outline" className="mb-2">{service.ageGroup}</Badge>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-sm text-blue-700 font-medium">{service.approach}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Age-Specific Care */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Dental Care for Every Gedling Family Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each family member has unique dental needs at different life stages.
                Our age-specific approach ensures optimal care for every generation in your family.
              </p>
            </div>

            <div className="space-y-8">
              {ageSpecificCare.map((group, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-pear-primary mb-2 text-lg">{group.ageGroup}</h3>
                        <p className="text-gray-600 text-sm mb-3">{group.keyServices}</p>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-blue-700 font-medium">{group.specialApproach}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-600 text-sm mb-2">Common Treatments:</h4>
                        <ul className="space-y-1">
                          {group.commonTreatments.map((treatment, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
                              {treatment}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-600 text-sm mb-2">Family Benefits:</h4>
                        <p className="text-sm text-gray-700">{group.parentBenefits}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Family Features */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Family Dental Care Designed for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our family dental practice understands the unique challenges of working families,
                providing convenient, comprehensive, and budget-friendly dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workingFamilyFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{feature.feature}</h3>
                        <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-blue-700 font-medium">{feature.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Gedling Families Say About Our Family Dental Care
              </h2>
            </div>

            <TestimonialBanner
              text="Finding a family dentist that works with our busy schedule has been a game-changer. Being just a quick drive from Gedling makes it so convenient, and they've been brilliant with both our kids and us adults. They scheduled our whole family together on a Saturday morning, which saved us so much time. The kids actually enjoy going now, and the pricing is transparent and fair. It's exactly what working families like us need - quality care without the hassle!"
              author="Mike and Emma T. from Gedling, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Whole family care</div>
                <p className="text-gray-600">All ages treated together</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Weekend appointments</div>
                <p className="text-gray-600">Convenient scheduling options</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Fair pricing</div>
                <p className="text-gray-600">Transparent, budget-friendly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Family Dental Care Results for Gedling Families
            </h2>
            <p className="text-lg text-gray-600">
              See how our comprehensive family care keeps Gedling families healthy and smiling
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/family-dental-before-case-1.webp"
              afterImage="/images/family-dental-after-case-1.webp"
              beforeAlt="Before family dental care - various dental issues affecting family health"
              afterAlt="After family dental care - healthy, confident family smiles"
              title="Complete Family Dental Transformation"
              description="Gedling working family's comprehensive dental health improvement"
              treatmentType="Family Preventive & Restorative Care"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Family Dental Questions from Gedling Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Gedling working families about comprehensive family dental care
              </p>
            </div>

            <FAQSection faqs={gedlingFamilyFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Family Dental Care - Quick Drive from Gedling
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Gedling
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head south on Arnold Lane towards the A612</p>
                    <p>2. Continue on the A612 towards Lowdham</p>
                    <p>3. Follow signs to Burton Joyce (8 miles)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey: Quick 15-minute drive</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-blue-700 mb-2">Family Dental Care</h4>
                    <p className="text-gray-600">Comprehensive care for all ages</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Gedling,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Gedling
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Complete Family Dental Care for Busy Gedling Families
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Make dental care simple for your whole family. Book comprehensive care that fits your
              schedule and budget, with gentle treatment that keeps everyone smiling.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Dental Specialists
              </p>
              <p className="text-sm opacity-90">
                All ages welcome • Flexible scheduling • Transparent pricing • Quick drive from Gedling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Users className="w-5 h-5 mr-2" />
                  Book Family Appointment
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Complete family dental care</span>
              <span>✓ Flexible appointment scheduling</span>
              <span>✓ Budget-friendly payment options</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
