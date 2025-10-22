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
  Sparkles,
  Award,
  Navigation,
  Users,
  Baby,
  Home,
  CreditCard,
  Calendar,
  ThumbsUp,
  FileText,
  Zap,
  TrendingUp,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "Affordable Teeth Whitening in Mapperley - Professional Results for Working Families | Pear Tree Dental",
  description: "Affordable teeth whitening for Mapperley working families. Professional results, payment plans available, and family-friendly service. Quick drive from Mapperley NG3.",
  keywords: [
    "affordable teeth whitening Mapperley",
    "cheap teeth whitening Mapperley NG3",
    "professional whitening Mapperley",
    "teeth whitening payment plans Mapperley",
    "family teeth whitening Mapperley",
    "budget whitening Mapperley",
    "value teeth whitening Mapperley"
  ],
  openGraph: {
    title: "Affordable Teeth Whitening in Mapperley - Professional Results for Working Families | Pear Tree Dental",
    description: "Affordable teeth whitening for Mapperley working families. Professional results with payment plans available.",
    url: "https://peartree.dental/mapperley/affordable-teeth-whitening"
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/affordable-teeth-whitening"
  }
};

export default function MapperleyAffordableTeethWhiteningPage() {
  const mapperleyWhiteningFAQs = [
    {
      question: "How affordable is professional teeth whitening from Mapperley?",
      answer: "We believe professional teeth whitening should be accessible to Mapperley working families. We offer competitive pricing starting from £195, with payment plan options available. Our transparent pricing means no hidden costs - just professional results at fair prices."
    },
    {
      question: "How does professional whitening compare to shop-bought options?",
      answer: "Professional whitening is significantly more effective and safer than shop-bought kits. We use higher-strength, regulated whitening agents with custom-made trays for even results. Most patients see 3-8 shades improvement versus 1-2 with shop kits."
    },
    {
      question: "Can multiple family members get whitening together?",
      answer: "Absolutely! We offer family whitening packages that can save money when multiple family members want treatment. We can often schedule appointments together and provide family discounts for Mapperley working families."
    },
    {
      question: "How long do the whitening results last?",
      answer: "Professional whitening typically lasts 1-3 years with proper care. We provide aftercare advice and top-up options to help maintain your results. The investment in professional whitening gives longer-lasting results than cheaper alternatives."
    },
    {
      question: "What payment options do you offer for whitening?",
      answer: "We understand budgeting is important for working families. We offer payment plans to spread the cost over several months, making professional whitening more accessible. All payment options are discussed upfront with clear terms."
    }
  ];

  const whiteningOptions = [
    {
      option: "Home Whitening Kit",
      description: "Professional-grade whitening you can do at home",
      duration: "2-3 weeks",
      results: "3-6 shades whiter",
      price: "From £195",
      icon: Home,
      highlight: "Most Popular"
    },
    {
      option: "In-Chair Whitening",
      description: "Fast professional whitening in one appointment",
      duration: "1 hour appointment",
      results: "4-8 shades whiter",
      price: "From £350",
      icon: Zap,
      highlight: "Fastest Results"
    },
    {
      option: "Combined Treatment",
      description: "In-chair plus home kit for maximum results",
      duration: "1 hour + 2 weeks",
      results: "6-10 shades whiter",
      price: "From £485",
      icon: Award,
      highlight: "Best Value"
    },
    {
      option: "Family Package",
      description: "Multiple family members whitening together",
      duration: "Various options",
      results: "Professional results for all",
      price: "From £165 per person",
      icon: Users,
      highlight: "Family Discount"
    }
  ];

  const valueBenefits = [
    {
      benefit: "Transparent Affordable Pricing",
      description: "Clear costs with no hidden fees or surprise charges",
      value: "Budget-friendly confidence",
      icon: DollarSign
    },
    {
      benefit: "Payment Plan Options",
      description: "Spread the cost over several months to fit your budget",
      value: "Manageable payments",
      icon: CreditCard
    },
    {
      benefit: "Professional Grade Results",
      description: "Superior results compared to shop-bought alternatives",
      value: "Better value for money",
      icon: Award
    },
    {
      benefit: "Family Whitening Discounts",
      description: "Special pricing when multiple family members get treatment",
      value: "Additional savings",
      icon: Users
    }
  ];

  const comparisonChart = [
    {
      aspect: "Safety & Regulation",
      professional: "Regulated, dentist-supervised treatment",
      shopBought: "Variable quality, no supervision",
      winner: "Professional"
    },
    {
      aspect: "Whitening Strength",
      professional: "Higher strength, regulated whitening agents",
      shopBought: "Limited strength, less effective",
      winner: "Professional"
    },
    {
      aspect: "Custom Fit",
      professional: "Custom-made trays for even results",
      shopBought: "One-size-fits-all, uneven results",
      winner: "Professional"
    },
    {
      aspect: "Results Duration",
      professional: "1-3 years with proper care",
      shopBought: "3-6 months typically",
      winner: "Professional"
    },
    {
      aspect: "Upfront Cost",
      professional: "Higher initial investment",
      shopBought: "Lower upfront cost",
      winner: "Shop-bought"
    },
    {
      aspect: "Long-term Value",
      professional: "Better value over time",
      shopBought: "Need frequent replacement",
      winner: "Professional"
    }
  ];

  const affordabilityFeatures = [
    {
      feature: "Clear Pricing Structure",
      description: "All costs explained upfront with no hidden fees",
      benefit: "Budget with confidence knowing exact costs"
    },
    {
      feature: "Flexible Payment Plans",
      description: "Spread treatment cost over 6-12 months",
      benefit: "Makes professional whitening accessible to working families"
    },
    {
      feature: "Family Discount Packages",
      description: "Reduced per-person cost for multiple family members",
      benefit: "Whole family can achieve whiter smiles affordably"
    },
    {
      feature: "Value-Focused Treatment Options",
      description: "Range of options to suit different budgets",
      benefit: "Professional results at prices that work for you"
    },
    {
      feature: "Long-Lasting Results",
      description: "Professional whitening lasts significantly longer",
      benefit: "Better value per year compared to shop alternatives"
    },
    {
      feature: "Aftercare Support Included",
      description: "Maintenance advice and top-up options available",
      benefit: "Maximize your investment with ongoing support"
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
            "name": "Pear Tree Dental - Affordable Teeth Whitening in Mapperley",
            "image": "https://peartree.dental/images/affordable-teeth-whitening-mapperley.jpg",
            "url": "https://peartree.dental/mapperley/affordable-teeth-whitening",
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
              "name": "Mapperley, NG3"
            },
            "medicalSpecialty": "Cosmetic Dentistry - Affordable Teeth Whitening",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£165-£485"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-yellow-600 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Mapperley Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Affordable Teeth Whitening in <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Professional Results for Working Families
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Mapperley — Professional whitening from £195 with payment plans
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Affordable Whitening
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-yellow-600 hover:bg-white hover:text-yellow-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">✨ Professional whitening with payment plans for busy Mapperley families!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Affordable Professional Teeth Whitening for Mapperley Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe everyone deserves a confident smile. Our affordable teeth whitening options provide
                professional results with transparent pricing and payment plans designed for working family budgets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {valueBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-yellow-200">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-yellow-100 text-yellow-700">{benefit.value}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-yellow-50 rounded-lg p-8">
              <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Professional Whitening Made Affordable</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Mapperley working families want professional results without breaking the budget.
                Our affordable whitening options provide superior results with flexible payment options.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">From £195</div>
                  <p className="text-gray-600">Professional home whitening</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">Payment plans</div>
                  <p className="text-gray-600">Spread cost over 6-12 months</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">Quick drive</div>
                  <p className="text-gray-600">Convenient from Mapperley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitening Options */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Affordable Professional Whitening Options for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our range of professional whitening options designed to fit
                different budgets and lifestyles for Mapperley working families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {whiteningOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-yellow-400 relative">
                    {option.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-yellow-600 text-white">{option.highlight}</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-yellow-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{option.option}</CardTitle>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{option.price}</p>
                        <div className="flex flex-col gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">{option.duration}</Badge>
                          <span className="text-xs text-gray-600">{option.results}</span>
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

      {/* Professional vs Shop-Bought Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Professional vs Shop-Bought: Value Comparison for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the real value difference between professional whitening and
                shop-bought alternatives helps Mapperley families make informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Comparison Factor</div>
                <div className="text-center">Professional Whitening</div>
                <div className="text-center">Shop-Bought Kits</div>
                <div className="text-center">Better Value</div>
              </div>

              {comparisonChart.map((item, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{item.aspect}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.professional}</div>
                  <div className="text-center text-sm text-gray-600 px-2">{item.shopBought}</div>
                  <div className="text-center">
                    <Badge
                      className={
                        item.winner === "Professional"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }
                    >
                      {item.winner}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>Overall Winner:</strong> Professional whitening provides superior value with longer-lasting,
                safer results that save money over time for Mapperley working families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affordability Features */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Making Professional Whitening Affordable for Mapperley Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to affordability means Mapperley working families can access
                professional teeth whitening with flexible options that fit their budgets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {affordabilityFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{feature.feature}</h3>
                        <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                        <div className="bg-yellow-50 rounded-lg p-3">
                          <p className="text-sm text-yellow-700 font-medium">{feature.benefit}</p>
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
                What Mapperley Families Say About Our Affordable Whitening
              </h2>
            </div>

            <TestimonialBanner
              text="I'd been wanting whiter teeth for years but thought professional whitening was out of our budget. Being just a quick drive from Mapperley made it convenient to pop in for a consultation. When they explained the payment plan options, it suddenly became affordable! The home whitening kit was so easy to use, and the results are amazing - my teeth are 5 shades whiter! It's given me so much more confidence at work and in photos. Best money I've spent in ages!"
              author="Lisa K. from Mapperley, NG3"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">Payment plan</div>
                <p className="text-gray-600">Made professional whitening affordable</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">5 shades whiter</div>
                <p className="text-gray-600">Amazing professional results</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">More confidence</div>
                <p className="text-gray-600">Improved work and social confidence</p>
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
              Professional Whitening Results for Mapperley Families
            </h2>
            <p className="text-lg text-gray-600">
              See the amazing results achieved by Mapperley working families with our affordable professional whitening
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/before-after/whitening-enlighten-composite-edge-bonding-before.webp"
              afterImage="/images/before-after/whitening-enlighten-composite-edge-bonding-after.webp"
              beforeAlt="Before professional whitening — stained, discolored teeth"
              afterAlt="After professional whitening — bright, white, confident smile"
              title="Affordable Professional Whitening Success"
              description="Mapperley working family's amazing transformation with payment plan"
              treatmentType="Professional Home Whitening Kit"
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
                Affordable Whitening Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Mapperley working families about affordable professional teeth whitening
              </p>
            </div>

            <FAQSection faqs={mapperleyWhiteningFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Affordable Professional Whitening - Quick Drive from Mapperley
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Mapperley
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
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <h4 className="font-bold text-yellow-700 mb-2">Affordable Whitening</h4>
                    <p className="text-gray-600">Professional results with payment plans</p>
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
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Mapperley
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Get Professional Teeth Whitening That Fits Your Budget from Mapperley
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't let budget concerns stop you from achieving the confident smile you deserve.
              Book affordable professional whitening with payment plans designed for working families.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Affordable Whitening Specialists
              </p>
              <p className="text-sm opacity-90">
                Professional results • Payment plans available • Family discounts • Quick drive from Mapperley
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Affordable Whitening
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-yellow-600 hover:bg-white hover:text-yellow-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Professional whitening from £195</span>
              <span>✓ Payment plans available</span>
              <span>✓ Family discount packages</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
