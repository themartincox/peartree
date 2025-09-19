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
  Award,
  Navigation,
  Home,
  CreditCard,
  Calendar,
  ThumbsUp,
  FileText,
  Activity,
  TrendingUp,
  Target,
  Timer,
  Crown,
  Zap,
  DollarSign,
  Circle,
  ArrowRight,
  Sparkles,
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Looking for an Executive Dentist in Nottingham City? Try Pear Tree Dental",
  description: "Premium executive dental care with parking convenience and professional service – just 15 minutes from NG1. Discover why city professionals are choosing Pear Tree Dental.",
  keywords: [
    "executive dentist Nottingham City",
    "Nottingham City dental alternative",
    "professional dentist NG1",
    "executive dental care Nottingham City",
    "dental practice near Nottingham City",
    "Nottingham City dentist",
    "professional dental NG1"
  ],
  openGraph: {
    title: "Looking for an Executive Dentist in Nottingham City? Try Pear Tree Dental",
    description: "Premium executive dental care with parking convenience and professional service – just 15 minutes from NG1.",
    url: "https://peartree.dental/alternatives/nottingham-city"
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/nottingham-city"
  }
};

export default function ExecutiveDentistNottinghamCityOverviewPage() {
  const alternativesFAQs = [
    {
      question: "What are the alternatives to city centre dental practices for Nottingham professionals like City Dental?",
      answer: "Many city professionals seek practices offering executive convenience, premium service, and parking solutions. Pear Tree Dental delivers these benefits while maintaining the professional excellence valued by city centre executives."
    },
    {
      question: "Why are Nottingham City professionals switching to practices outside the city centre?",
      answer: "Expensive parking, crowded environments, and time-consuming city centre access drive professionals to seek executive alternatives. Practices like Pear Tree offer premium service with convenient access away from city complications."
    },
    {
      question: "How do modern dental practices compare to traditional city centre options for professionals?",
      answer: "Modern practices typically offer free parking, executive service standards, professional scheduling, and premium convenience. The investment in professional experience often provides superior value for demanding executives."
    },
    {
      question: "Is it worth traveling outside Nottingham City centre for executive dental care?",
      answer: "Many city professionals find that a 15-minute drive to a practice with free parking and executive service actually saves time compared to dealing with city centre parking fees and complications."
    },
    {
      question: "What should Nottingham City professionals look for in an executive dental practice?",
      answer: "Key factors include convenient parking, professional service standards, executive scheduling flexibility, premium technology, and understanding of business demands. Pear Tree Dental specifically addresses these professional priorities."
    }
  ];

  const whyProfessionalsSwitch = [
    {
      reason: "City Centre Parking Complications",
      oldExperience: "Expensive parking fees, time wasted searching, appointment delays",
      newSolution: "Free executive parking directly outside practice",
      impact: "Eliminates parking stress and saves money on professional visits",
      icon: Car
    },
    {
      reason: "Crowded City Centre Environment",
      oldExperience: "Busy waiting rooms, crowded facilities, stressful atmosphere",
      newSolution: "Professional spa-like environment away from city crowds",
      impact: "Relaxing executive experience matching professional expectations",
      icon: Building2
    },
    {
      reason: "Inflexible Professional Scheduling",
      oldExperience: "Rigid city hours, limited emergency access, business conflict",
      newSolution: "Executive scheduling flexibility with business travel accommodation",
      impact: "Dental care that fits demanding professional schedules",
      icon: Calendar
    },
    {
      reason: "City Centre Service Quality Issues",
      oldExperience: "Rushed appointments, variable quality, impersonal service",
      newSolution: "Consistent executive service exceeding professional expectations",
      impact: "Reliable quality matching business environment standards",
      icon: Award
    },
    {
      reason: "Time-Consuming City Access",
      oldExperience: "Traffic delays, complex navigation, professional time loss",
      newSolution: "Efficient 15-minute escape from city centre complications",
      impact: "Saves valuable professional time with convenient access",
      icon: Timer
    },
    {
      reason: "Limited Professional Technology",
      oldExperience: "Basic city equipment, multiple visits, inefficient treatments",
      newSolution: "Cutting-edge technology with same-day executive treatments",
      impact: "Advanced care that maximizes professional efficiency",
      icon: Zap
    }
  ];

  const executiveAdvantages = [
    {
      advantage: "Executive CEREC Crown Service",
      description: "Same-day premium crowns eliminating multiple professional visits",
      traditionalAlternative: "Multiple city appointments, parking fees, professional time loss",
      executiveBenefit: "Complete treatment in one visit, maximizing professional efficiency",
      technology: "Premium CEREC technology designed for executive convenience"
    },
    {
      advantage: "Professional Digital Imaging",
      description: "Advanced digital X-rays with immediate executive consultation",
      traditionalAlternative: "Processing delays, additional appointments, professional disruption",
      executiveBenefit: "Instant results with immediate professional consultation",
      technology: "Cutting-edge digital sensors with executive-level explanations"
    },
    {
      advantage: "Executive Scheduling Technology",
      description: "Professional scheduling systems accommodating business demands",
      traditionalAlternative: "Rigid city scheduling, business conflicts, limited flexibility",
      executiveBenefit: "Scheduling that works around meetings, travel, and business priorities",
      technology: "Advanced scheduling systems with executive priority access"
    },
    {
      advantage: "Professional Parking Solution",
      description: "Free executive parking eliminating city centre parking fees",
      traditionalAlternative: "Expensive city parking, time wasted searching, financial drain",
      executiveBenefit: "Free convenient parking saving money and professional time",
      technology: "Dedicated executive parking with direct practice access"
    },
    {
      advantage: "Executive Service Standards",
      description: "Professional service delivery matching business environment expectations",
      traditionalAlternative: "Variable city service, inconsistent quality, professional disappointment",
      executiveBenefit: "Consistent executive service exceeding professional standards",
      technology: "Executive service protocols with professional excellence focus"
    },
    {
      advantage: "Business-Grade Technology",
      description: "Professional-level equipment and treatment matching executive expectations",
      traditionalAlternative: "Basic city equipment, limited technology, standard treatment",
      executiveBenefit: "Premium technology delivering executive-level results",
      technology: "Professional-grade equipment with executive treatment protocols"
    }
  ];

  const executiveJourneyComparison = [
    {
      stage: "Executive Planning",
      traditional: "Complex city booking, parking concerns, professional complications",
      modern: "Some convenience, basic professional accommodation",
      peartree: "Executive booking with guaranteed parking and professional priority"
    },
    {
      stage: "Executive Journey",
      traditional: "City traffic, expensive parking, professional stress",
      modern: "Some parking options, variable convenience",
      peartree: "15-minute efficient escape from city centre with free executive parking"
    },
    {
      stage: "Executive Arrival",
      traditional: "Parking stress, crowded environment, professional frustration",
      modern: "Some convenience, basic comfort",
      peartree: "Stress-free arrival with executive parking and professional welcome"
    },
    {
      stage: "Executive Reception",
      traditional: "Busy city reception, impersonal check-in, professional anonymity",
      modern: "Some personal attention, basic recognition",
      peartree: "Executive reception with professional recognition and premium service"
    },
    {
      stage: "Executive Consultation",
      traditional: "Rushed city appointments, basic technology, limited explanation",
      modern: "Some professional attention, basic consultation",
      peartree: "Executive consultation with cutting-edge technology and professional focus"
    },
    {
      stage: "Executive Treatment Planning",
      traditional: "Basic city planning, unclear professional pricing, limited options",
      modern: "Some planning clarity, basic professional consideration",
      peartree: "Executive treatment planning with premium options and transparent pricing"
    },
    {
      stage: "Executive Treatment Delivery",
      traditional: "Multiple city visits, parking fees, professional disruption",
      modern: "Some efficiency, reduced visits",
      peartree: "Same-day executive treatments minimizing professional disruption"
    },
    {
      stage: "Executive Aftercare",
      traditional: "Basic city follow-up, limited professional accommodation",
      modern: "Some professional consideration, basic follow-up",
      peartree: "Executive aftercare with professional priority and convenient access"
    }
  ];

  const executiveBenefits = [
    {
      benefit: "Professional Parking Solution",
      description: "Free parking that eliminates expensive city centre fees and complications",
      advantage: "Significant cost savings and time efficiency for professional visits",
      details: "Dedicated parking directly outside practice with no city centre fees or searching"
    },
    {
      benefit: "Executive Time Efficiency",
      description: "Same-day treatments and efficient service maximizing professional time",
      advantage: "Minimal disruption to demanding business schedules and commitments",
      details: "CEREC same-day crowns and streamlined executive service protocols"
    },
    {
      benefit: "Professional Service Standards",
      description: "Executive-level service matching business environment expectations",
      advantage: "Consistent quality and professionalism that executives can depend on",
      details: "Service delivery designed to exceed professional standards and expectations"
    },
    {
      benefit: "Business Schedule Accommodation",
      description: "Flexible scheduling that works around meetings, travel, and business priorities",
      advantage: "Dental care that fits professional demands rather than disrupting them",
      details: "Executive scheduling with emergency access and business travel understanding"
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are the alternatives to city centre dental practices for Nottingham professionals like City Dental?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many city professionals seek practices offering executive convenience, premium service, and parking solutions. Pear Tree Dental delivers these benefits while maintaining the professional excellence valued by city centre executives."
                }
              },
              {
                "@type": "Question",
                "name": "Why are Nottingham City professionals switching to practices outside the city centre?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Expensive parking, crowded environments, and time-consuming city centre access drive professionals to seek executive alternatives. Practices like Pear Tree offer premium service with convenient access away from city complications."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-indigo-500 text-white px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Executive Alternative for Nottingham City
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for an <span className="text-yellow-300">Executive Dentist</span> in Nottingham City?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Try Pear Tree Dental - The Professional Alternative
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Executive service, free parking, and professional convenience – just 15 minutes from NG1
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-indigo-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Executive Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🏢 Just 15 minutes from Nottingham City with executive convenience!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Are Switching */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Nottingham City Professionals Are Switching to Executive Dental Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                City centre dental care comes with complications that busy professionals shouldn't have to tolerate.
                Executive alternatives offer significant advantages that respect professional time and expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyProfessionalsSwitch.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-indigo-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                        <h3 className="font-bold text-pear-primary">{reason.reason}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">City Centre Challenge:</h4>
                          <p className="text-sm text-red-700">{reason.oldExperience}</p>
                        </div>

                        <div className="bg-indigo-50 rounded-lg p-3">
                          <h4 className="font-semibold text-indigo-700 text-sm mb-1">Executive Solution:</h4>
                          <p className="text-sm text-indigo-700">{reason.newSolution}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Professional Impact:</h4>
                          <p className="text-sm text-blue-700">{reason.impact}</p>
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

      {/* Executive Advantages */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Executive Dental Technology: The Pear Tree Professional Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional-grade technology designed for executives –
                superior results with executive convenience that eliminates city centre complications.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {executiveAdvantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">{advantage.advantage}</h3>

                    <div className="space-y-4">
                      <p className="text-gray-700">{advantage.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">City Centre Method:</h4>
                          <p className="text-sm text-red-700">{advantage.traditionalAlternative}</p>
                        </div>

                        <div className="bg-indigo-50 rounded-lg p-3">
                          <h4 className="font-semibold text-indigo-700 text-sm mb-1">Executive Benefit:</h4>
                          <p className="text-sm text-indigo-700">{advantage.executiveBenefit}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-blue-700 text-sm mb-1">Our Technology:</h4>
                        <p className="text-sm text-blue-700">{advantage.technology}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Journey Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Executive Journey: City Centre vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that executive-focused dental care makes at every step.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Executive Journey Stage</div>
                <div className="text-center">City Centre Practice</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Executive</div>
              </div>

              {executiveJourneyComparison.map((stage, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{stage.stage}</div>
                  <div className="text-center text-sm text-red-600 px-2">{stage.traditional}</div>
                  <div className="text-center text-sm text-blue-600 px-2">{stage.modern}</div>
                  <div className="text-center text-sm text-indigo-600 px-2 font-semibold">{stage.peartree}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>The Pear Tree Executive Difference:</strong> Every step designed around professional needs,
                executive convenience, and elimination of city centre complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Benefits */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Perfect Executive Solution for Nottingham City Professionals
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional dental care that understands and accommodates the demanding schedules and high expectations of city executives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {executiveBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-full">
                        <Building2 className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                        <p className="text-gray-700 mb-3">{benefit.description}</p>

                        <div className="bg-indigo-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-indigo-700 text-sm mb-1">Executive Advantage:</h4>
                          <p className="text-sm text-indigo-700">{benefit.advantage}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Details:</h4>
                          <p className="text-sm text-blue-700">{benefit.details}</p>
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
                Why Nottingham City Professionals Choose the Executive Alternative
              </h2>
            </div>

            <TestimonialBanner
              text="Working in Nottingham city centre, I was constantly frustrated with dental appointments - expensive parking, crowded waiting rooms, and inflexible scheduling that clashed with business meetings. When I discovered Pear Tree Dental, it was exactly what I needed as a professional - no parking fees, no city centre hassles, and they actually understand business schedules. The CEREC crown was completed in one visit which was perfect for my packed calendar. It's only 15 minutes from the city but feels like a completely different world - professional, efficient, and designed for people like me who value their time."
              author="James T. from Nottingham City, NG1"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">Executive service</div>
                <p className="text-gray-600">Professional standards</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">No city hassles</div>
                <p className="text-gray-600">Free parking, no crowds</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">15 minutes</div>
                <p className="text-gray-600">Quick escape from city centre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Executive Dental Care Results for Nottingham City Professionals
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that professional-grade technology and executive service make
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/nottingham-city-executive-before-case-1.webp"
              afterImage="/images/nottingham-city-executive-after-case-1.webp"
              beforeAlt="Before executive dental care - city centre complications"
              afterAlt="After executive dental care - professional, precision results"
              title="Executive Dental Excellence"
              description="Nottingham City professional's transformation with executive care"
              treatmentType="CEREC Crown and Executive Professional Care"
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
                Questions About Executive Dental Alternatives
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Nottingham City professionals considering their options
              </p>
            </div>

            <FAQSection faqs={alternativesFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Executive Escape from Nottingham City Centre to Professional Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Executive 15-Minute Journey
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Exit city centre via A612 east</p>
                    <p>2. Escape city traffic through countryside</p>
                    <p>3. Professional destination at Burton Joyce</p>
                    <p>4. Arrive at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Free executive parking directly outside</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <Building2 className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h4 className="font-bold text-indigo-700 mb-2">Executive Convenience</h4>
                    <p className="text-gray-600">Professional escape from city complications</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Nottingham+City+Centre/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from City Centre
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Make the Switch to Executive Dental Care
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what Nottingham City professionals are discovering –
              executive convenience, professional service, and freedom from city centre complications.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                The Executive Alternative to City Centre Dental Complications
              </p>
              <p className="text-sm opacity-90">
                Executive service • Free parking • Professional convenience • 15 minutes from NG1
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-indigo-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Executive Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Free executive parking</span>
              <span>✓ Professional service standards</span>
              <span>✓ Business schedule accommodation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
