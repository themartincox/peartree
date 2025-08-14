import {
  Baby,
  Car,
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Star,
  Target,
  ThumbsUp,
  Timer,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Children's Dentistry in Gedling - Convenient Care for Working Parents | Pear Tree Dental",
  description:
    "Children's dentistry for Gedling working families. Convenient appointments, gentle care, and prevention focus. Child-friendly environment. Quick drive from Gedling NG4.",
  keywords: [
    "children's dentistry Gedling",
    "kids dentist Gedling NG4",
    "child dental care Gedling",
    "family dentist Gedling",
    "working parents dentist Gedling",
    "convenient children dentist Gedling",
    "child dental check ups Gedling",
  ],
  openGraph: {
    title:
      "Children's Dentistry in Gedling - Convenient Care for Working Parents | Pear Tree Dental",
    description:
      "Children's dentistry for Gedling working families. Convenient appointments and gentle, child-friendly care.",
    url: "https://peartree.dental/gedling/childrens-dentistry",
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/childrens-dentistry",
  },
};

export default function GedlingChildrensDentistryPage() {
  const gedlingChildrensFAQs = [
    {
      question:
        "How convenient is children's dental care from Gedling for working parents?",
      answer:
        "We understand working parents in Gedling have packed schedules. We offer early morning, after-school, and Saturday appointments for children. Being just a quick drive from Gedling, we can often fit urgent appointments into busy work schedules.",
    },
    {
      question: "What age should children start visiting the dentist?",
      answer:
        "We recommend children visit by their first birthday or within 6 months of their first tooth appearing. Early visits help children become comfortable with dental care and allow us to monitor development and provide preventive guidance to Gedling parents.",
    },
    {
      question: "How do you help anxious children feel comfortable?",
      answer:
        "Our gentle, child-friendly approach includes explaining procedures in age-appropriate language, using distraction techniques, and allowing children to see and touch instruments. We work at the child's pace and praise positive behavior to build confidence.",
    },
    {
      question: "What preventive care do you offer children from Gedling?",
      answer:
        "We provide comprehensive preventive care including fluoride applications, dental sealants, oral hygiene instruction, and dietary advice. Our focus on prevention helps Gedling working families avoid costly problems and emergency dental visits.",
    },
    {
      question:
        "How do you coordinate appointments for working family schedules?",
      answer:
        "We can often schedule multiple children together or coordinate with parent appointments to save time. We offer flexible scheduling including school holiday appointments and can provide appointment reminders to help busy Gedling families stay organized.",
    },
  ];

  const childrenServices = [
    {
      service: "First Dental Visits",
      description: "Gentle introduction to dental care for toddlers",
      ageRange: "1-3 years",
      approach: "Fun, non-threatening introduction",
      benefits: "Builds comfort and prevents dental anxiety",
      pricing: "From £45",
      icon: Baby,
    },
    {
      service: "Routine Check-ups",
      description: "Regular monitoring and cleaning for children",
      ageRange: "3-16 years",
      approach: "Age-appropriate care and education",
      benefits: "Prevents problems, maintains oral health",
      pricing: "From £55",
      icon: Shield,
    },
    {
      service: "Preventive Treatments",
      description: "Sealants and fluoride to prevent cavities",
      ageRange: "6-14 years",
      approach: "Proactive protection for developing teeth",
      benefits: "Significant reduction in cavity risk",
      pricing: "From £35 per tooth",
      icon: Target,
    },
    {
      service: "Child-Friendly Treatments",
      description: "Gentle fillings and restorations for children",
      ageRange: "All ages",
      approach: "Anxiety-free treatment with comfort measures",
      benefits: "Positive dental experiences, restored function",
      pricing: "From £85",
      icon: Heart,
    },
  ];

  const workingParentsBenefits = [
    {
      benefit: "Flexible Scheduling",
      description:
        "Early morning, after-school, and weekend appointments available",
      value: "Minimal work disruption",
      icon: Clock,
    },
    {
      benefit: "Efficient Appointments",
      description: "Well-organized visits that respect your time constraints",
      value: "Quick, thorough care",
      icon: Timer,
    },
    {
      benefit: "Prevention Focus",
      description:
        "Emphasis on preventing problems that could cause urgent visits",
      value: "Fewer emergency situations",
      icon: Shield,
    },
    {
      benefit: "Family Coordination",
      description:
        "Can schedule multiple children or coordinate with parent visits",
      value: "Time-saving convenience",
      icon: Users,
    },
  ];

  const ageAppropriateServices = [
    {
      ageGroup: "Babies & Toddlers (6 months - 3 years)",
      focusAreas:
        "Gentle introduction, development monitoring, habit counseling",
      keyServices: [
        "First dental visit",
        "Oral health guidance",
        "Feeding advice",
        "Thumbsucking guidance",
      ],
      parentBenefits:
        "Early prevention saves money and prevents future problems",
      typicalFrequency: "Every 6 months once teeth appear",
    },
    {
      ageGroup: "Preschoolers (3-5 years)",
      focusAreas:
        "Building confidence, cavity prevention, oral hygiene training",
      keyServices: [
        "Gentle cleaning",
        "Fluoride application",
        "Oral hygiene education",
        "Early orthodontic screening",
      ],
      parentBenefits:
        "Establishes good habits and prevents school dental problems",
      typicalFrequency: "Every 6 months",
    },
    {
      ageGroup: "School Age (6-12 years)",
      focusAreas:
        "Permanent tooth care, sealant protection, orthodontic monitoring",
      keyServices: [
        "Dental sealants",
        "Comprehensive cleaning",
        "Cavity treatment",
        "Development tracking",
      ],
      parentBenefits:
        "Protects new permanent teeth during critical development",
      typicalFrequency: "Every 6 months, more if high risk",
    },
    {
      ageGroup: "Teenagers (13-18 years)",
      focusAreas:
        "Independence building, wisdom tooth monitoring, cosmetic concerns",
      keyServices: [
        "Comprehensive care",
        "Wisdom tooth assessment",
        "Orthodontic consultation",
        "Sports mouthguards",
      ],
      parentBenefits:
        "Builds responsibility while maintaining oral health through critical years",
      typicalFrequency: "Every 6 months with orthodontic monitoring",
    },
  ];

  const convenientFeatures = [
    {
      feature: "After-School Appointments",
      description: "Available 3:30pm onwards to fit around school schedules",
      benefit: "No need to take children out of school for dental care",
    },
    {
      feature: "Saturday Morning Availability",
      description: "Weekend appointments for busy working family schedules",
      benefit: "Convenient family dental care without work absence",
    },
    {
      feature: "Quick Appointment Times",
      description: "Efficient visits typically 20-30 minutes for routine care",
      benefit: "Minimal disruption to work and school schedules",
    },
    {
      feature: "School Holiday Appointments",
      description: "Extended availability during school holidays",
      benefit: "Perfect timing for more extensive treatments if needed",
    },
    {
      feature: "Emergency Accommodation",
      description: "Same-day urgent appointments for child dental emergencies",
      benefit: "Quick resolution of problems affecting work and family life",
    },
    {
      feature: "Parent Education Support",
      description: "Clear guidance on home care and development milestones",
      benefit: "Confident parenting with expert dental guidance",
    },
  ];

  const preventionStrategies = [
    {
      strategy: "Early Dental Visits",
      approach: "Start dental visits by first birthday to establish routine",
      benefit: "Prevents dental anxiety and identifies issues early",
      longTermValue:
        "Children with early dental visits have fewer cavities throughout childhood",
    },
    {
      strategy: "Dental Sealant Protection",
      approach: "Apply protective sealants to permanent molars as they erupt",
      benefit: "Up to 90% reduction in cavity risk on sealed teeth",
      longTermValue:
        "Saves hundreds of pounds in future filling and crown costs",
    },
    {
      strategy: "Fluoride Application",
      approach:
        "Professional fluoride treatments to strengthen developing teeth",
      benefit: "Significant reduction in cavity formation",
      longTermValue: "Stronger teeth that resist decay throughout life",
    },
    {
      strategy: "Oral Hygiene Education",
      approach: "Age-appropriate brushing and flossing instruction",
      benefit: "Children develop effective home care habits",
      longTermValue: "Lifelong good habits prevent gum disease and decay",
    },
    {
      strategy: "Dietary Guidance",
      approach: "Education about tooth-friendly foods and drink choices",
      benefit: "Reduces cavity risk from sugar and acid exposure",
      longTermValue: "Healthy eating habits benefit teeth and overall health",
    },
    {
      strategy: "Development Monitoring",
      approach: "Track tooth eruption and jaw development patterns",
      benefit: "Early identification of orthodontic needs",
      longTermValue:
        "Earlier intervention often means simpler, less expensive treatment",
    },
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
            name: "Pear Tree Dental - Children's Dentistry in Gedling",
            image:
              "https://peartree.dental/images/childrens-dentistry-gedling.jpg",
            url: "https://peartree.dental/gedling/childrens-dentistry",
            telephone: "+44-115-931-2935",
            address: {
              "@type": "PostalAddress",
              streetAddress: "22 Nottingham Road",
              addressLocality: "Burton Joyce",
              addressRegion: "Nottinghamshire",
              postalCode: "NG14 5AE",
              addressCountry: "UK",
            },
            areaServed: {
              "@type": "Place",
              name: "Gedling, NG4",
            },
            medicalSpecialty:
              "Pediatric Dentistry - Child-Friendly Dental Care",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£35-£85",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Gedling Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Children's Dentistry in{" "}
              <span className="text-yellow-300">Gedling</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Convenient Care for Working Parents
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Gedling — Gentle, child-friendly care with
                flexible scheduling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Baby className="w-5 h-5 mr-2" />
                  Book Children's Appointment
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                👶 Gentle, convenient children's dental care for busy Gedling
                families!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Parents Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Convenient Children's Dental Care for Gedling Working Parents
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that working parents in Gedling need children's
                dental care that fits busy schedules. Our child-friendly
                approach and flexible appointment times make quality pediatric
                dental care achievable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(workingParentsBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-green-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-green-100 text-green-700">
                        {benefit.value}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-green-50 rounded-lg p-8">
              <Baby className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Child-Friendly Care Built for Busy Families
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We know that Gedling working parents need children's dental care
                that's convenient, gentle, and effective. Our child-friendly
                environment and flexible scheduling ensure positive dental
                experiences for the whole family.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    After-school times
                  </div>
                  <p className="text-gray-600">
                    Convenient 3:30pm+ appointments
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    Gentle approach
                  </div>
                  <p className="text-gray-600">
                    Child-friendly, anxiety-free care
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    Quick drive
                  </div>
                  <p className="text-gray-600">Convenient from Gedling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Services */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Comprehensive Children's Dental Services for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From first dental visits to teenage care, we provide gentle,
                age-appropriate dental services that help children develop
                healthy teeth and positive attitudes toward dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(childrenServices || []).map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-green-400"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-green-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {service.service}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {service.pricing}
                        </p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {service.ageRange}
                          </Badge>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm text-green-700 font-medium">
                          {service.benefits}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Dental Care for Every Stage of Childhood
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each stage of childhood has different dental needs and
                considerations. Our age-specific approach ensures optimal care
                for children at every development stage.
              </p>
            </div>

            <div className="space-y-8">
              {(ageAppropriateServices || []).map((group, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-pear-primary mb-2 text-lg">
                          {group.ageGroup}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {group.focusAreas}
                        </p>
                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">
                            Visit Frequency:
                          </h4>
                          <p className="text-sm text-green-700">
                            {group.typicalFrequency}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 text-sm mb-2">
                          Key Services:
                        </h4>
                        <ul className="space-y-1">
                          {(group.keyServices || []).map((service, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-700 flex items-center gap-2"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 text-sm mb-2">
                          Parent Benefits:
                        </h4>
                        <p className="text-sm text-gray-700">
                          {group.parentBenefits}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Convenient Features */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Convenient Features for Gedling Working Parents
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our children's dental practice is designed around the needs of
                working families, providing convenient, efficient, and
                comprehensive pediatric dental care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(convenientFeatures || []).map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {feature.feature}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {feature.description}
                        </p>
                        <div className="bg-green-50 rounded-lg p-3">
                          <p className="text-sm text-green-700 font-medium">
                            {feature.benefit}
                          </p>
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

      {/* Prevention Strategies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Prevention-Focused Strategies for Gedling Children
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our prevention-focused approach helps Gedling working families
                avoid costly dental problems and emergency visits that disrupt
                busy schedules.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(preventionStrategies || []).map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {strategy.strategy}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-green-600 text-sm mb-1">
                              Approach:
                            </h4>
                            <p className="text-sm text-gray-700">
                              {strategy.approach}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-600 text-sm mb-1">
                              Immediate Benefit:
                            </h4>
                            <p className="text-sm text-gray-700">
                              {strategy.benefit}
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <h4 className="font-semibold text-green-700 text-sm mb-1">
                              Long-Term Value:
                            </h4>
                            <p className="text-sm text-green-700">
                              {strategy.longTermValue}
                            </p>
                          </div>
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
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Gedling Parents Say About Our Children's Dental Care
              </h2>
            </div>

            <TestimonialBanner
              text="As working parents with two young children, finding convenient dental care seemed impossible until we found Pear Tree Dental. Being just a quick drive from Gedling has been a lifesaver. They offer 4pm appointments which is perfect after school pickup, and the team is incredible with the kids. My daughter used to cry at dentist visits, but now she actually looks forward to going! They've done sealants for both kids and really focus on prevention. The scheduling is so flexible - they even saw us on a Saturday when our son had a dental emergency. Perfect for busy working families!"
              author="Jenny and Paul M. from Gedling, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  4pm appointments
                </div>
                <p className="text-gray-600">Perfect after-school timing</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Child-friendly
                </div>
                <p className="text-gray-600">
                  Kids actually look forward to visits
                </p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Saturday emergency
                </div>
                <p className="text-gray-600">
                  Flexible when families need it most
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Children's Dental Care Results for Gedling Families
            </h2>
            <p className="text-lg text-gray-600">
              See how our gentle, prevention-focused approach keeps Gedling
              children healthy and smiling
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/childrens-dentistry-before-case-1.webp"
              afterImage="/images/childrens-dentistry-after-case-1.webp"
              beforeAlt="Before children's preventive care - early cavity formation and poor oral hygiene"
              afterAlt="After children's preventive care - healthy, cavity-free teeth with excellent oral hygiene"
              title="Prevention-Focused Children's Care Success"
              description="Gedling child's transformation through preventive dental care"
              treatmentType="Comprehensive Children's Preventive Program"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Children's Dental Questions from Gedling Parents
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Gedling working parents about convenient
                children's dental care
              </p>
            </div>

            <FAQSection faqs={gedlingChildrensFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Convenient Children's Dental Care - Quick Drive from Gedling
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
                    <p className="text-pear-primary font-semibold">
                      Journey: Quick 15-minute drive
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-6">
                    <Baby className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-green-700 mb-2">
                      Children's Dental Care
                    </h4>
                    <p className="text-gray-600">
                      Gentle, convenient care for all ages
                    </p>
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
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Gedling
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Give Your Children the Best Start with Convenient Dental Care from
              Gedling
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't let busy schedules prevent your children from getting
              quality dental care. Book convenient, child-friendly appointments
              that work around work and school commitments.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Children's Dental Specialists
              </p>
              <p className="text-sm opacity-90">
                Gentle, child-friendly care • Flexible scheduling • Prevention
                focus • Quick drive from Gedling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Baby className="w-5 h-5 mr-2" />
                  Book Children's Appointment
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ After-school appointments available</span>
              <span>✓ Child-friendly, gentle approach</span>
              <span>✓ Prevention-focused care</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
