import React from "react";
import {
  CalendarDays,
  Car,
  CheckCircle,
  Clock,
  Eye,
  Gift,
  GraduationCap,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Settings,
  Shield,
  Sparkles,
  Star,
  Target,
  UserPlus,
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
    "Family Orthodontics in Mapperley - Teens & Adults Teeth Straightening | Pear Tree Dental",
  description:
    "Family orthodontics for Mapperley families. Teen and adult orthodontics, sibling treatments, and multi-generational care just 15 minutes away. Family payment plans available.",
  keywords: [
    "family orthodontics Mapperley",
    "teen orthodontics Mapperley",
    "adult orthodontics Mapperley NG5",
    "braces Mapperley families",
    "Invisalign Mapperley Sherwood",
    "teeth straightening families Mapperley",
    "sibling orthodontics Mapperley",
  ],
  openGraph: {
    title:
      "Family Orthodontics in Mapperley - Teens & Adults Teeth Straightening | Pear Tree Dental",
    description:
      "Family orthodontics for Mapperley families. Teen and adult teeth straightening with family-focused care just 15 minutes away.",
    url: "https://peartree.dental/mapperley/family-orthodontics",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/family-orthodontics",
  },
};

export default function MapperleyFamilyOrthodonticsPage() {
  const mapperleyOrthodonticsFAQs = [
    {
      question: "How far is family orthodontic treatment from Mapperley?",
      answer:
        "Pear Tree Dental is just 15 minutes from Mapperley via the A6097. We're family orthodontic specialists providing comprehensive teeth straightening for teens, adults, and whole families.",
    },
    {
      question: "Can you treat multiple family members for orthodontics?",
      answer:
        "Absolutely! We love treating families together. Sibling discounts, coordinated appointments, and family payment plans make orthodontic treatment affordable and convenient for Mapperley families.",
    },
    {
      question: "What orthodontic options work best for Mapperley families?",
      answer:
        "We offer Invisalign for adults and teens, clear aligners, ceramic braces, and traditional braces. Each family member gets the best option for their age, lifestyle, and treatment goals.",
    },
    {
      question: "Do you offer family payment plans for orthodontics?",
      answer:
        "Yes! We understand orthodontic treatment is a significant family investment. We offer 0% interest payment plans, sibling discounts, and flexible family payment options.",
    },
    {
      question:
        "What makes your orthodontic service special for Mapperley families?",
      answer:
        "We combine family-focused care, sibling coordination, flexible scheduling, convenient Mapperley access, and comprehensive options for all ages. We treat generations, not just individuals.",
    },
  ];

  const familyOptions = [
    {
      treatment: "Teen Invisalign",
      description: "Clear aligners designed specifically for teenagers",
      features: [
        "Virtually invisible",
        "Removable for sports",
        "Compliance indicators",
        "Teen-friendly features",
      ],
      bestFor: "Image-conscious teenagers",
      duration: "12-18 months",
      price: "From £2,800",
      icon: Eye,
      highlight: "Most Popular",
    },
    {
      treatment: "Adult Invisalign",
      description: "Professional clear aligner treatment for working parents",
      features: [
        "Discreet treatment",
        "Professional confidence",
        "Removable convenience",
        "Predictable results",
      ],
      bestFor: "Working parents and professionals",
      duration: "6-18 months",
      price: "From £2,800",
      icon: Users,
      highlight: "Parent Favorite",
    },
    {
      treatment: "Ceramic Braces",
      description: "Tooth-colored braces that blend with natural teeth",
      features: [
        "Less visible than metal",
        "Effective for all cases",
        "Comfortable fit",
        "Excellent value",
      ],
      bestFor: "Teens who need comprehensive correction",
      duration: "12-20 months",
      price: "From £2,200",
      icon: Sparkles,
      highlight: "Teen Choice",
    },
    {
      treatment: "Traditional Braces",
      description: "Time-tested metal braces for complex cases",
      features: [
        "Maximum effectiveness",
        "Handles all problems",
        "Most affordable option",
        "Fastest results",
      ],
      bestFor: "Complex cases and budget-conscious families",
      duration: "12-18 months",
      price: "From £1,800",
      icon: Settings,
      highlight: "Best Value",
    },
  ];

  const familyBenefits = [
    {
      benefit: "Sibling Discounts",
      description:
        "Save money when multiple children need orthodontic treatment",
      savings: "Up to 20% off",
      icon: Gift,
    },
    {
      benefit: "Family Appointments",
      description: "Schedule multiple family members on the same day",
      savings: "Save time & travel",
      icon: CalendarDays,
    },
    {
      benefit: "Coordinated Treatment",
      description: "Plan treatment timing for optimal family outcomes",
      savings: "Better results",
      icon: Target,
    },
    {
      benefit: "Payment Plans",
      description: "0% interest payment options for families",
      savings: "No interest charges",
      icon: Shield,
    },
  ];

  const ageGroups = [
    {
      ageRange: "Early Teens (11-14)",
      characteristics: "Peak orthodontic age with growing jaws",
      recommendedTreatment: "Traditional braces or Teen Invisalign",
      familyConsiderations: [
        "Coordinate with siblings",
        "School schedule friendly",
        "Sports accommodations",
      ],
      duration: "12-18 months",
      icon: GraduationCap,
    },
    {
      ageRange: "Older Teens (15-18)",
      characteristics: "Image-conscious with social priorities",
      recommendedTreatment: "Invisalign Teen or ceramic braces",
      familyConsiderations: [
        "Discreet options important",
        "College preparation",
        "Independence building",
      ],
      duration: "6-16 months",
      icon: UserPlus,
    },
    {
      ageRange: "Parents (25-45)",
      characteristics: "Busy lifestyles needing convenient solutions",
      recommendedTreatment: "Adult Invisalign or clear aligners",
      familyConsiderations: [
        "Professional appearance",
        "Minimal appointments",
        "Leading by example",
      ],
      duration: "6-18 months",
      icon: Users,
    },
    {
      ageRange: "Grandparents (45+)",
      characteristics: "Health-focused with specific needs",
      recommendedTreatment: "Clear aligners or ceramic braces",
      familyConsiderations: [
        "Comfort priority",
        "Health benefits",
        "Multi-generational coordination",
      ],
      duration: "8-20 months",
      icon: Heart,
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
            name: "Pear Tree Dental - Family Orthodontics in Mapperley",
            image:
              "https://peartree.dental/images/family-orthodontics-mapperley.jpg",
            url: "https://peartree.dental/mapperley/family-orthodontics",
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
              name: "Mapperley, NG5",
            },
            medicalSpecialty:
              "Family Orthodontics - Multi-Generational Teeth Straightening",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£1800-£2800",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-purple-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Mapperley & NG5 Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Orthodontics in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Multi-Generational Teeth Straightening Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Mapperley — Family appointments & sibling
                discounts
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Book Family Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                👨‍👩‍👧‍👦 Treating Mapperley families with sibling discounts &
                payment plans!
              </p>
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
                Family Orthodontic Benefits for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When multiple family members need orthodontic treatment, we make
                it convenient, affordable, and coordinated. Families save time,
                money, and achieve better results together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-purple-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-purple-100 text-purple-700">
                        {benefit.savings}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-purple-50 rounded-lg p-8">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Family Treatment Coordination
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We plan treatments to optimize timing, reduce total
                appointments, and ensure the best outcomes for every family
                member from Mapperley.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    20%
                  </div>
                  <p className="text-gray-600">Sibling discount</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    Same day
                  </div>
                  <p className="text-gray-600">Family appointments</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    0%
                  </div>
                  <p className="text-gray-600">Interest payment plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Orthodontic Options for Every Mapperley Family Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From teens to parents to grandparents, we have the perfect
                orthodontic solution for every family member's age, lifestyle,
                and treatment needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyOptions || []).map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-purple-400 relative"
                  >
                    {option.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-600 text-white">
                          {option.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">
                        {option.treatment}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">
                          {option.price}
                        </p>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {option.duration}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {option.bestFor}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {(option.features || []).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Care */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Orthodontic Care for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each family member has unique orthodontic needs based on their
                age, lifestyle, and goals. We customize treatment approaches for
                optimal results at every life stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(ageGroups || []).map((group, index) => {
                const IconComponent = group.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                        <h3 className="font-bold text-pear-primary">
                          {group.ageRange}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {group.characteristics}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-purple-600 text-sm mb-1">
                            Recommended:
                          </h4>
                          <p className="text-sm text-gray-700">
                            {group.recommendedTreatment}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-purple-600 text-sm mb-1">
                            Family Considerations:
                          </h4>
                          <ul className="space-y-1">
                            {(group.familyConsiderations || []).map(
                              (consideration, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-gray-600 flex items-center gap-1"
                                >
                                  <CheckCircle className="w-3 h-3 text-purple-500 flex-shrink-0" />
                                  {consideration}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <Clock className="w-4 h-4 text-purple-500" />
                          <span className="text-sm text-purple-600 font-medium">
                            {group.duration}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
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
                What Mapperley Families Say About Our Orthodontic Care
              </h2>
            </div>

            <TestimonialBanner
              text="All three of my teenagers needed braces, and I was dreading the cost and logistics. Pear Tree made it so easy with family appointments and a 20% sibling discount. My twins got Invisalign Teen, and my youngest got ceramic braces. The 15-minute drive from Mapperley meant we could coordinate all their appointments. Now they all have perfect smiles, and it was much more affordable than we expected!"
              author="Michelle R. from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  Whole families
                </div>
                <p className="text-gray-600">Multi-generational treatment</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  20% off
                </div>
                <p className="text-gray-600">Sibling discounts</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  Coordinated
                </div>
                <p className="text-gray-600">Family appointments</p>
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
              Beautiful Family Orthodontic Results from Mapperley
            </h2>
            <p className="text-lg text-gray-600">
              See the stunning orthodontic transformations achieved by Mapperley
              families
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/family-orthodontics-before-case-1.webp"
              afterImage="/images/family-orthodontics-after-case-1.webp"
              beforeAlt="Before family orthodontic treatment - teen with crowded teeth"
              afterAlt="After family orthodontic treatment - perfect teenage smile"
              title="Teen Invisalign Family Treatment"
              description="16-year-old from Mapperley family with coordinated sibling treatment"
              treatmentType="Family Orthodontic Program"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Mapperley */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Family Orthodontic Questions from Mapperley Parents
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Mapperley families about family
                orthodontic treatment and coordination
              </p>
            </div>

            <FAQSection faqs={mapperleyOrthodonticsFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Convenient Family Orthodontic Care from Mapperley
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Directions from Mapperley
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Take A6097 towards Lowdham</p>
                    <p>2. Continue for 6 miles through Gedling</p>
                    <p>3. Turn right into Burton Joyce</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      Journey time: 15 minutes
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-bold text-purple-700 mb-2">
                      Family Coordination
                    </h4>
                    <p className="text-gray-600">
                      Multiple family appointments on the same day
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Mapperley,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Mapperley
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Transform Your Family's Smiles with Coordinated Orthodontic Care
              from Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              When multiple family members need orthodontic treatment, make it
              convenient and affordable. Book your family orthodontic
              consultation from Mapperley with sibling discounts and coordinated
              care.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Orthodontic Specialists
              </p>
              <p className="text-sm opacity-90">
                Sibling discounts up to 20% • Family appointments • Payment
                plans • All ages welcome
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Book Family Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Family appointments available</span>
              <span>✓ Sibling discounts up to 20%</span>
              <span>✓ 0% interest payment plans</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
