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
  Smile,
  TrendingUp,
  DollarSign,
  Target,
  Activity,
  Timer
} from "lucide-react";

export const metadata: Metadata = {
  title: "Family Orthodontics in Gedling - Affordable Braces for Working Families | Pear Tree Dental",
  description: "Family orthodontics for Gedling working families. Affordable braces, flexible payment plans, and convenient scheduling. Quality teeth straightening. Quick drive from Gedling NG4.",
  keywords: [
    "family orthodontics Gedling",
    "affordable braces Gedling NG4",
    "cheap braces Gedling",
    "family braces Gedling",
    "working families orthodontics Gedling",
    "teeth straightening Gedling",
    "invisalign Gedling"
  ],
  openGraph: {
    title: "Family Orthodontics in Gedling - Affordable Braces for Working Families | Pear Tree Dental",
    description: "Family orthodontics for Gedling working families. Affordable braces with flexible payment plans and convenient scheduling.",
    url: "https://peartree.dental/gedling/family-orthodontics"
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/family-orthodontics"
  }
};

export default function GedlingFamilyOrthodonticsPage() {
  const gedlingOrthoFAQs = [
    {
      question: "How affordable are braces for working families from Gedling?",
      answer: "We believe quality orthodontics should be accessible to Gedling working families. Our affordable braces start from £2,200 with flexible payment plans available to spread costs over 24-36 months. We provide transparent pricing and family discounts for multiple children."
    },
    {
      question: "Can multiple family members get braces at the same time?",
      answer: "Absolutely! Many Gedling working families choose to start orthodontic treatment for multiple children together. We offer family discounts and can coordinate appointments to save time and travel. Payment plans can cover the whole family treatment."
    },
    {
      question: "How do you fit orthodontic appointments around work schedules?",
      answer: "We understand working families in Gedling have busy schedules. We offer early morning, evening, and Saturday appointments for orthodontic care. Regular adjustment appointments are typically quick (15-20 minutes) and can often be scheduled during lunch breaks."
    },
    {
      question: "What's the difference between affordable and expensive braces?",
      answer: "Our affordable braces use quality materials and proven techniques, just with simpler brackets and fewer aesthetic options. More expensive options offer faster treatment or near-invisible appearance. We explain all options honestly so Gedling families can choose what fits their budget."
    },
    {
      question: "How long does orthodontic treatment take for children and adults?",
      answer: "Treatment typically takes 18-24 months for children and 18-30 months for adults. We provide realistic timelines upfront and regular progress updates. The investment in straight teeth provides lifelong benefits for confidence and oral health."
    }
  ];

  const orthodonticOptions = [
    {
      option: "Traditional Metal Braces",
      description: "Reliable, effective braces for all ages",
      suitability: "Children and adults",
      duration: "18-24 months",
      pricing: "From £2,200",
      benefits: "Most affordable option, proven results",
      icon: Shield
    },
    {
      option: "Ceramic Clear Braces",
      description: "Less visible braces with tooth-colored brackets",
      suitability: "Teens and adults",
      duration: "18-26 months",
      pricing: "From £2,800",
      benefits: "Discreet appearance, effective",
      icon: Smile
    },
    {
      option: "Invisalign Teen",
      description: "Clear removable aligners for teenagers",
      suitability: "Teens 13+",
      duration: "12-18 months",
      pricing: "From £3,200",
      benefits: "Nearly invisible, removable",
      icon: Target
    },
    {
      option: "Adult Invisalign",
      description: "Professional clear aligner treatment",
      suitability: "Adults",
      duration: "12-20 months",
      pricing: "From £3,500",
      benefits: "Discreet, convenient for work",
      icon: Award
    }
  ];

  const familyBenefits = [
    {
      benefit: "Affordable Payment Plans",
      description: "Spread treatment costs over 24-36 months with 0% interest options",
      value: "Budget-friendly orthodontics",
      icon: DollarSign
    },
    {
      benefit: "Family Coordination",
      description: "Schedule multiple family members together for convenience",
      value: "Time-saving efficiency",
      icon: Users
    },
    {
      benefit: "Flexible Scheduling",
      description: "Early morning, evening, and weekend appointments available",
      value: "Work-friendly timing",
      icon: Clock
    },
    {
      benefit: "Quality Results",
      description: "Proven orthodontic techniques with affordable options",
      value: "Value for money",
      icon: Award
    }
  ];

  const ageSpecificTreatment = [
    {
      ageGroup: "Children (7-11 years)",
      approach: "Early intervention orthodontics",
      benefits: "Guide jaw development, prevent complex problems",
      options: "Space maintainers, expanders, limited braces",
      investment: "From £1,200 - prevents costly future treatment",
      familyValue: "Early treatment often shorter and less expensive"
    },
    {
      ageGroup: "Teenagers (12-18 years)",
      approach: "Comprehensive orthodontic treatment",
      benefits: "Straight teeth, improved confidence, better oral health",
      options: "Metal braces, ceramic braces, Invisalign Teen",
      investment: "From £2,200 - investment in lifelong confidence",
      familyValue: "Most effective age for treatment, lasting results"
    },
    {
      ageGroup: "Young Adults (18-25 years)",
      approach: "Professional appearance orthodontics",
      benefits: "Career confidence, improved facial aesthetics",
      options: "Clear braces, Invisalign, lingual braces",
      investment: "From £2,800 - professional investment in appearance",
      familyValue: "Discretion important for work and social situations"
    },
    {
      ageGroup: "Parents (25+ years)",
      approach: "Adult orthodontics with family considerations",
      benefits: "Set good example, improve confidence, better health",
      options: "Invisalign, clear braces, traditional braces",
      investment: "From £3,200 - family investment in health and confidence",
      familyValue: "Show children importance of dental health"
    }
  ];

  const affordabilityStrategies = [
    {
      strategy: "Family Treatment Planning",
      approach: "Coordinate orthodontic treatment across family members",
      benefit: "Family discounts and efficient use of appointments",
      savings: "Save up to 15% when treating multiple family members"
    },
    {
      strategy: "Flexible Payment Options",
      approach: "Spread costs over 24-36 months with 0% interest plans",
      benefit: "Make quality orthodontics affordable for working family budgets",
      savings: "Monthly payments from £75-£120 instead of large upfront cost"
    },
    {
      strategy: "Early Intervention",
      approach: "Start treatment at optimal age to reduce complexity",
      benefit: "Shorter, simpler treatment with better results",
      savings: "Early treatment often 30-50% less expensive than later correction"
    },
    {
      strategy: "Treatment Option Guidance",
      approach: "Honest advice about which option offers best value",
      benefit: "Choose treatment that fits needs and budget",
      savings: "Avoid paying for features you don't need"
    },
    {
      strategy: "Insurance Coordination",
      approach: "Maximize dental insurance benefits for orthodontic care",
      benefit: "Reduce out-of-pocket costs for working families",
      savings: "Insurance can cover £500-£1,500 of treatment costs"
    },
    {
      strategy: "Maintenance Planning",
      approach: "Proper retainer care to maintain results long-term",
      benefit: "Protect investment with good aftercare",
      savings: "Prevent need for re-treatment worth thousands"
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
            "name": "Pear Tree Dental - Family Orthodontics in Gedling",
            "image": "https://peartree.dental/images/family-orthodontics-gedling.jpg",
            "url": "https://peartree.dental/gedling/family-orthodontics",
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
            "medicalSpecialty": "Orthodontics - Family Braces & Teeth Straightening",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£1,200-£3,500"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-purple-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Gedling Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Family Orthodontics in <span className="text-yellow-300">Gedling</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Affordable Braces for Working Families
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Gedling — Quality braces from £2,200 with payment plans
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Smile className="w-5 h-5 mr-2" />
                  Book Family Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-purple-600 hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">👨‍👩‍👧‍👦 Affordable family orthodontics with payment plans for Gedling families!</p>
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
                Affordable Family Orthodontics for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that Gedling working families want quality orthodontic treatment that fits their
                budget and schedule. Our affordable braces and flexible payment plans make straight teeth achievable for the whole family.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {familyBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-purple-200">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-purple-100 text-purple-700">{benefit.value}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-purple-50 rounded-lg p-8">
              <Smile className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Quality Orthodontics Made Affordable</h3>
              <p className="text-lg text-gray-600 mb-6">
                We believe every Gedling family deserves access to quality orthodontic care. Our affordable options
                and flexible payment plans ensure straight teeth and confident smiles are within reach for working families.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">From £2,200</div>
                  <p className="text-gray-600">Quality braces for all ages</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Payment plans</div>
                  <p className="text-gray-600">From £75 per month</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Quick drive</div>
                  <p className="text-gray-600">Convenient from Gedling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orthodontic Options */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Affordable Orthodontic Options for Gedling Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our range of quality orthodontic treatments designed to fit
                different budgets and lifestyles for Gedling working families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {orthodonticOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-purple-400">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{option.option}</CardTitle>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{option.pricing}</p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">{option.duration}</Badge>
                          <span className="text-xs text-gray-600">{option.suitability}</span>
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="text-sm text-purple-700 font-medium">{option.benefits}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Age-Specific Treatment */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Age-Appropriate Orthodontics for Every Gedling Family Member
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each family member has different orthodontic needs and considerations.
                Our age-specific approach ensures optimal treatment timing and value for working families.
              </p>
            </div>

            <div className="space-y-8">
              {ageSpecificTreatment.map((group, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-pear-primary mb-2 text-lg">{group.ageGroup}</h3>
                        <p className="text-gray-600 text-sm mb-3">{group.approach}</p>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <h4 className="font-semibold text-purple-700 text-sm mb-1">Benefits:</h4>
                          <p className="text-sm text-purple-700">{group.benefits}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-purple-600 text-sm mb-2">Treatment Options:</h4>
                        <p className="text-sm text-gray-700 mb-3">{group.options}</p>
                        <h4 className="font-semibold text-purple-600 text-sm mb-2">Investment:</h4>
                        <p className="text-sm text-gray-700">{group.investment}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-purple-600 text-sm mb-2">Family Value:</h4>
                        <p className="text-sm text-gray-700">{group.familyValue}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affordability Strategies */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Making Orthodontics Affordable for Gedling Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to affordability means Gedling working families can access
                quality orthodontic care with smart strategies that fit their budgets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {affordabilityStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{strategy.strategy}</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-purple-600 text-sm mb-1">Approach:</h4>
                            <p className="text-sm text-gray-700">{strategy.approach}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-purple-600 text-sm mb-1">Benefit:</h4>
                            <p className="text-sm text-gray-700">{strategy.benefit}</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3">
                            <h4 className="font-semibold text-purple-700 text-sm mb-1">Savings:</h4>
                            <p className="text-sm text-purple-700">{strategy.savings}</p>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Gedling Families Say About Our Affordable Orthodontics
              </h2>
            </div>

            <TestimonialBanner
              text="We have three kids and always thought braces would be impossible to afford. Being just a quick drive from Gedling made it easy to visit for a consultation. When they showed us the payment plan options, suddenly it became manageable - just £85 per month per child! Now all three kids have beautiful straight teeth, and their confidence has soared. The flexible appointment times meant we could fit visits around our work schedules. Best family investment we've ever made!"
              author="Rachel and Tom P. from Gedling, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">£85 per month</div>
                <p className="text-gray-600">Affordable family payment plan</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">Three children</div>
                <p className="text-gray-600">All treated successfully</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">Flexible times</div>
                <p className="text-gray-600">Worked around busy schedules</p>
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
              Family Orthodontic Results for Gedling Families
            </h2>
            <p className="text-lg text-gray-600">
              See the amazing transformations achieved by Gedling working families with our affordable orthodontic treatment
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/before-after/orthodontics-clearcorrect-before.webp"
              afterImage="/images/before-after/orthodontics-clearcorrect-after.webp"
              beforeAlt="Before family orthodontic treatment - crooked teeth affecting confidence"
              afterAlt="After family orthodontic treatment - beautiful straight smiles for the whole family"
              title="Affordable Family Orthodontic Success"
              description="Gedling working family's transformation with payment plan"
              treatmentType="Family Metal Braces Treatment"
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
                Family Orthodontic Questions from Gedling Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Gedling working families about affordable family orthodontic treatment
              </p>
            </div>

            <FAQSection faqs={gedlingOrthoFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Affordable Family Orthodontics - Quick Drive from Gedling
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
                  <div className="bg-purple-50 rounded-lg p-6">
                    <Smile className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-bold text-purple-700 mb-2">Family Orthodontics</h4>
                    <p className="text-gray-600">Affordable braces with payment plans</p>
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Give Your Family the Gift of Straight Teeth from Gedling
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't let budget concerns stop your family from achieving beautiful, confident smiles.
              Book affordable orthodontic treatment with payment plans designed for working families.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Orthodontic Specialists
              </p>
              <p className="text-sm opacity-90">
                Affordable braces • Payment plans available • Family discounts • Quick drive from Gedling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Smile className="w-5 h-5 mr-2" />
                  Book Family Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-purple-600 hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Quality braces from £2,200</span>
              <span>✓ Payment plans from £75/month</span>
              <span>✓ Family coordination available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
