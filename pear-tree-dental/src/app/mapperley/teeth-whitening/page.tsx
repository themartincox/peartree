import React from "react";
import {
  Award,
  CalendarDays,
  Car,
  CheckCircle,
  Coffee,
  Gift,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
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
    "Family Teeth Whitening in Mapperley - Safe Whitening for All Ages | Pear Tree Dental",
  description:
    "Family teeth whitening for Mapperley families. Safe whitening for teens and adults, family packages, and gentle treatments just 15 minutes away. Transform your family's smiles.",
  keywords: [
    "teeth whitening Mapperley",
    "family teeth whitening Mapperley",
    "teen teeth whitening Mapperley NG5",
    "safe teeth whitening Sherwood",
    "family whitening packages Mapperley",
    "gentle teeth whitening Mapperley",
    "parent teen whitening Mapperley",
  ],
  openGraph: {
    title:
      "Family Teeth Whitening in Mapperley - Safe Whitening for All Ages | Pear Tree Dental",
    description:
      "Family teeth whitening for Mapperley families. Safe whitening for teens and adults with family packages just 15 minutes away.",
    url: "https://peartree.dental/mapperley/teeth-whitening",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/teeth-whitening",
  },
};

export default function MapperleyTeethWhiteningPage() {
  const mapperleyWhiteningFAQs = [
    {
      question: "How far is family teeth whitening from Mapperley?",
      answer:
        "Pear Tree Dental is just 15 minutes from Mapperley via the A6097. We're family whitening specialists providing safe, effective treatments for teens, parents, and the whole family.",
    },
    {
      question: "Is teeth whitening safe for teenagers from Mapperley?",
      answer:
        "Yes! We offer age-appropriate whitening for teens 16+ with fully developed teeth. Our gentle methods are perfectly safe and specially designed for younger patients.",
    },
    {
      question: "Can families get whitening treatments together?",
      answer:
        "Absolutely! We love treating families together. Family whitening packages, coordinated appointments, and bulk discounts make it affordable for multiple family members.",
    },
    {
      question: "What whitening options work best for Mapperley families?",
      answer:
        "We offer professional in-chair whitening, take-home kits, and combination treatments. Each family member gets the best option for their lifestyle, sensitivity, and desired results.",
    },
    {
      question:
        "What makes your whitening service special for Mapperley families?",
      answer:
        "We combine family-safe formulations, age-appropriate treatments, family packages, convenient Mapperley access, and gentle techniques perfect for all family members.",
    },
  ];

  const whiteningOptions = [
    {
      treatment: "Professional In-Chair",
      description: "Advanced whitening completed in one family visit",
      features: [
        "1-hour appointment",
        "Immediate results",
        "Professional strength",
        "Custom protection",
      ],
      bestFor: "Busy families wanting immediate results",
      results: "Up to 8 shades whiter",
      price: "£450 per person",
      icon: Zap,
      highlight: "Fastest Results",
    },
    {
      treatment: "Take-Home Family Kits",
      description: "Custom trays for convenient home whitening",
      features: [
        "Custom-fitted trays",
        "Professional gel",
        "Gradual whitening",
        "Family supervision",
      ],
      bestFor: "Families preferring gradual improvement",
      results: "4-6 shades whiter",
      price: "£280 per person",
      icon: Home,
      highlight: "Family Favorite",
    },
    {
      treatment: "Teen-Safe Whitening",
      description: "Gentle whitening specifically for teenagers",
      features: [
        "Age-appropriate strength",
        "Extra sensitivity care",
        "Parental guidance",
        "Gradual approach",
      ],
      bestFor: "Teenagers aged 16+ with parent approval",
      results: "3-5 shades whiter",
      price: "£220 per teen",
      icon: GraduationCap,
      highlight: "Teen Approved",
    },
    {
      treatment: "Family Combination",
      description: "In-chair boost followed by take-home maintenance",
      features: [
        "Best of both methods",
        "Long-lasting results",
        "Family coordination",
        "Maximum value",
      ],
      bestFor: "Families wanting optimal results",
      results: "6-10 shades whiter",
      price: "£580 per person",
      icon: Award,
      highlight: "Best Value",
    },
  ];

  const familyBenefits = [
    {
      benefit: "Family Packages",
      description:
        "Special pricing when multiple family members whiten together",
      savings: "Save up to £100",
      icon: Gift,
    },
    {
      benefit: "Same-Day Appointments",
      description: "Coordinate whitening for the whole family on one day",
      savings: "Save time & travel",
      icon: CalendarDays,
    },
    {
      benefit: "Teen-Safe Options",
      description:
        "Age-appropriate whitening for teenagers with parental approval",
      savings: "Peace of mind",
      icon: Shield,
    },
    {
      benefit: "Maintenance Support",
      description: "Family whitening tips and touch-up guidance",
      savings: "Long-lasting results",
      icon: Heart,
    },
  ];

  const familyConsiderations = [
    {
      ageGroup: "Teenagers (16+)",
      considerations: "Parental approval required, gentler concentrations used",
      whiteningTips: [
        "Avoid staining foods",
        "Use whitening toothpaste",
        "Regular dental checkups",
      ],
      bestOptions: ["Teen-safe whitening", "Take-home kits with supervision"],
      icon: GraduationCap,
    },
    {
      ageGroup: "Young Adults (18-30)",
      considerations:
        "Lifestyle factors like coffee, wine, smoking affect results",
      whiteningTips: [
        "Minimize staining habits",
        "Use a straw for drinks",
        "Rinse after eating",
      ],
      bestOptions: ["Professional in-chair", "Combination treatments"],
      icon: Coffee,
    },
    {
      ageGroup: "Parents (30-50)",
      considerations:
        "Busy schedules need convenient options, may have sensitivity",
      whiteningTips: [
        "Take-home convenience",
        "Gradual improvement",
        "Manage sensitivity",
      ],
      bestOptions: ["Take-home kits", "Family combination packages"],
      icon: Users,
    },
    {
      ageGroup: "Older Adults (50+)",
      considerations:
        "May have more sensitivity, dental work affects whitening",
      whiteningTips: [
        "Professional assessment first",
        "Gentle formulations",
        "Realistic expectations",
      ],
      bestOptions: [
        "Professional consultation",
        "Custom sensitivity management",
      ],
      icon: Heart,
    },
  ];

  const whiteningTips = [
    {
      category: "Before Whitening",
      tips: [
        "Professional dental cleaning",
        "Address any sensitivity",
        "Remove surface stains",
        "Set realistic expectations",
      ],
      icon: Target,
    },
    {
      category: "During Treatment",
      tips: [
        "Follow instructions carefully",
        "Use custom trays properly",
        "Monitor sensitivity levels",
        "Maintain oral hygiene",
      ],
      icon: Shield,
    },
    {
      category: "After Whitening",
      tips: [
        "Avoid staining foods 48 hours",
        "Use whitening toothpaste",
        "Regular dental visits",
        "Touch-up as needed",
      ],
      icon: Sparkles,
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
            name: "Pear Tree Dental - Family Teeth Whitening in Mapperley",
            image:
              "https://peartree.dental/images/family-teeth-whitening-mapperley.jpg",
            url: "https://peartree.dental/mapperley/teeth-whitening",
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
            medicalSpecialty: "Cosmetic Dentistry - Family Teeth Whitening",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£220-£580",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-yellow-400 text-orange-800 px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Mapperley & NG5 Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Teeth Whitening in{" "}
              <span className="text-white">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Safe Family Whitening Just 15 Minutes Away
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Mapperley — Family packages & teen-safe
                options
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Family Whitening
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                ✨ Safe whitening for the whole family - teens to grandparents!
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
                Family Teeth Whitening Benefits for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When families whiten together, everyone benefits from
                coordinated care, special pricing, and shared motivation for
                maintaining beautiful smiles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow border-2 border-yellow-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.benefit}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {benefit.description}
                      </p>
                      <Badge className="bg-yellow-100 text-yellow-700">
                        {benefit.savings}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-yellow-50 rounded-lg p-8">
              <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">
                Family Whitening Coordination
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We coordinate family whitening treatments to ensure everyone
                achieves their best results safely and conveniently from one
                Mapperley location.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    £100
                  </div>
                  <p className="text-gray-600">Family package savings</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    Same day
                  </div>
                  <p className="text-gray-600">Family appointments</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    Teen-safe
                  </div>
                  <p className="text-gray-600">Age-appropriate options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitening Options */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Safe Whitening Options for Every Mapperley Family Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From teenagers to parents to grandparents, we have safe,
                effective whitening options tailored to each family member's
                age, sensitivity, and lifestyle needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(whiteningOptions || []).map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-yellow-400 relative"
                  >
                    {option.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-yellow-600 text-white">
                          {option.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-yellow-600" />
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
                        <p className="text-sm text-gray-600 mb-2">
                          {option.results}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {option.bestFor}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {(option.features || []).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
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

      {/* Age-Specific Considerations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Whitening for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each family member has unique whitening needs based on their
                age, lifestyle, and dental health. We customize treatments for
                safe, optimal results at every life stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyConsiderations || []).map((group, index) => {
                const IconComponent = group.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                        <h3 className="font-bold text-pear-primary">
                          {group.ageGroup}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {group.considerations}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-yellow-600 text-sm mb-1">
                            Best Options:
                          </h4>
                          <ul className="space-y-1">
                            {(group.bestOptions || []).map((option, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-gray-600 flex items-center gap-1"
                              >
                                <CheckCircle className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                {option}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-yellow-600 text-sm mb-1">
                            Whitening Tips:
                          </h4>
                          <ul className="space-y-1">
                            {(group.whiteningTips || []).map((tip, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-gray-600 flex items-center gap-1"
                              >
                                <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Whitening Tips Section */}
            <div className="grid md:grid-cols-3 gap-6">
              {(whiteningTips || []).map((tipCategory, index) => {
                const IconComponent = tipCategory.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="text-center pb-4">
                      <IconComponent className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                      <CardTitle className="text-lg text-pear-primary">
                        {tipCategory.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {(tipCategory.tips || []).map((tip, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Mapperley Families Say About Our Whitening Results
              </h2>
            </div>

            <TestimonialBanner
              text="My 17-year-old daughter was self-conscious about her stained teeth from her teenage coffee habit. We decided to whiten together as a mother-daughter bonding experience. The team at Pear Tree made sure her treatment was teen-safe and appropriate. The 15-minute drive from Mapperley was easy, and we both love our new bright smiles! It's given her so much confidence for college."
              author="Karen M. from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  All ages
                </div>
                <p className="text-gray-600">Safe family whitening</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  8+ shades
                </div>
                <p className="text-gray-600">Brighter smiles achieved</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  Family packages
                </div>
                <p className="text-gray-600">Save up to £100</p>
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
              Stunning Family Whitening Results from Mapperley
            </h2>
            <p className="text-lg text-gray-600">
              See the beautiful whitening transformations achieved by Mapperley
              families
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/family-whitening-before-case-1.webp"
              afterImage="/images/family-whitening-after-case-1.webp"
              beforeAlt="Before family teeth whitening - discolored teeth"
              afterAlt="After family teeth whitening - bright white family smiles"
              title="Family Whitening Transformation"
              description="Mother and teenage daughter from Mapperley with safe family whitening"
              treatmentType="Family Whitening Package"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Mapperley */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Family Whitening Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Mapperley families about safe teeth
                whitening for all ages
              </p>
            </div>

            <FAQSection faqs={mapperleyWhiteningFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Easy Family Whitening from Mapperley
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
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <h4 className="font-bold text-yellow-700 mb-2">
                      Family Whitening
                    </h4>
                    <p className="text-gray-600">
                      Safe treatments for the whole family
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
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Brighten Your Family's Smiles with Safe Whitening from Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Give your family the gift of confident, bright smiles. Book your
              family whitening consultation from Mapperley with teen-safe
              options, family packages, and gentle treatments for all ages.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Whitening Specialists
              </p>
              <p className="text-sm opacity-90">
                Teen-safe options • Family packages save £100 • Same-day
                appointments • Professional results
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Family Whitening
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Safe for teens 16+</span>
              <span>✓ Family packages available</span>
              <span>✓ Up to 8 shades whiter</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
