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
  title: "Looking for a Rural Dentist in East Bridgford? Try Pear Tree Dental",
  description: "Modern countryside dental care with easy rural access and personal service – just 5 minutes from NG13. Discover why East Bridgford residents are choosing Pear Tree Dental.",
  keywords: [
    "rural dentist East Bridgford",
    "East Bridgford dental alternative",
    "countryside dentist NG13",
    "rural dental care East Bridgford",
    "dental practice near East Bridgford",
    "East Bridgford dentist",
    "countryside dental NG13"
  ],
  openGraph: {
    title: "Looking for a Rural Dentist in East Bridgford? Try Pear Tree Dental",
    description: "Modern countryside dental care with easy rural access and personal service – just 5 minutes from NG13.",
    url: "https://peartree.dental/alternatives/east-bridgford"
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/east-bridgford"
  }
};

export default function RuralDentistEastBridgfordOverviewPage() {
  const alternativesFAQs = [
    {
      question: "What are the alternatives to limited rural dental practices serving East Bridgford?",
      answer: "Many rural residents seek practices offering modern technology, convenient countryside access, and comprehensive care. Pear Tree Dental delivers these benefits while maintaining the personal touch valued in rural communities."
    },
    {
      question: "Why are East Bridgford residents switching to practices outside their immediate area?",
      answer: "Limited local options, outdated rural facilities, and long urban travels drive residents to seek modern alternatives. Practices like Pear Tree offer cutting-edge technology with easy countryside access."
    },
    {
      question: "How do modern dental practices compare to traditional rural options for East Bridgford?",
      answer: "Modern practices typically offer digital X-rays, CEREC same-day crowns, transparent pricing, and efficient treatment. The investment in technology and rural accessibility often provides superior value."
    },
    {
      question: "Is it worth traveling outside East Bridgford for dental care?",
      answer: "Many rural residents find that a 5-minute drive to a modern practice with comprehensive facilities actually provides better access than limited local options or long urban travels."
    },
    {
      question: "What should East Bridgford rural residents look for in a modern dental practice?",
      answer: "Key factors include easy countryside access, modern equipment, efficient treatment, transparent pricing, and understanding of rural lifestyle needs. Pear Tree Dental specifically addresses these rural priorities."
    }
  ];

  const whyRuralResidentsSwitch = [
    {
      reason: "Limited Rural Options",
      oldExperience: "Few local practices, limited schedules, basic equipment",
      newSolution: "Comprehensive modern practice with easy rural access",
      impact: "Access to full range of modern dental services close to countryside",
      icon: Car
    },
    {
      reason: "Outdated Rural Equipment",
      oldExperience: "Basic rural equipment, outdated technology, limited treatment options",
      newSolution: "Latest digital technology and advanced treatment options",
      impact: "Better treatment outcomes with countryside convenience",
      icon: Zap
    },
    {
      reason: "Urban Travel Burden",
      oldExperience: "Long travels to cities, traffic, complex parking, time loss",
      newSolution: "Modern care just 5 minutes from rural home",
      impact: "Saves time and eliminates urban travel stress",
      icon: Heart
    },
    {
      reason: "Multiple Trip Requirements",
      oldExperience: "Multiple appointments, repeated rural travels, time inefficiency",
      newSolution: "Same-day treatments, comprehensive care in fewer visits",
      impact: "Minimizes travel and maximizes treatment efficiency",
      icon: Calendar
    },
    {
      reason: "Unclear Rural Pricing",
      oldExperience: "Variable rural pricing, hidden costs, limited payment options",
      newSolution: "Transparent pricing with rural-friendly payment plans",
      impact: "Clear costs for rural family budgeting and planning",
      icon: DollarSign
    },
    {
      reason: "Urban Practice Impersonality",
      oldExperience: "High-volume city practices, no rural understanding, impersonal care",
      newSolution: "Personal rural-aware care with countryside values",
      impact: "Maintains rural community values in modern healthcare",
      icon: Shield
    }
  ];

  const ruralAdvantages = [
    {
      advantage: "Rural-Friendly CEREC Crowns",
      description: "Same-day crowns eliminate multiple countryside trips",
      traditionalAlternative: "Multiple rural travels, time off farm work, efficiency loss",
      ruralBenefit: "Complete treatment in one countryside visit",
      technology: "Latest CEREC technology with rural-efficient scheduling"
    },
    {
      advantage: "Rural-Safe Digital X-Rays",
      description: "90% less radiation and instant results for rural family health",
      traditionalAlternative: "Higher radiation equipment, processing delays",
      ruralBenefit: "Safer for rural families, immediate rural consultation",
      technology: "Digital sensors with instant rural-friendly explanations"
    },
    {
      advantage: "Rural Education Technology",
      description: "Intraoral cameras help rural families understand their care",
      traditionalAlternative: "Complex explanations, no visual aids for rural understanding",
      ruralBenefit: "Rural families see and understand their treatment needs",
      technology: "High-definition cameras with countryside-friendly education"
    },
    {
      advantage: "Rural Transparent Pricing",
      description: "Clear pricing that works with rural budgeting and seasonal income",
      traditionalAlternative: "Hidden costs, inflexible payment, rural budget complications",
      ruralBenefit: "Rural family financial planning and payment flexibility",
      technology: "Digital treatment planning with rural-sensitive cost options"
    },
    {
      advantage: "Rural Access Solution",
      description: "Easy countryside access with convenient parking for rural vehicles",
      traditionalAlternative: "Limited rural parking, difficult urban access",
      ruralBenefit: "Easy access for rural families with farm vehicles and equipment",
      technology: "Rural-accessible location with countryside parking facilities"
    },
    {
      advantage: "Rural Lifestyle Understanding",
      description: "Scheduling and care that understands farming and countryside life",
      traditionalAlternative: "Urban scheduling, no rural lifestyle accommodation",
      ruralBenefit: "Care that fits with seasonal work and rural family needs",
      technology: "Rural-aware scheduling systems and lifestyle-sensitive care"
    }
  ];

  const ruralJourneyComparison = [
    {
      stage: "Planning Rural Visit",
      traditional: "Limited local options, long urban travels required",
      modern: "Some rural options, basic accessibility",
      peartree: "Easy 5-minute countryside access, comprehensive modern care"
    },
    {
      stage: "Rural Journey",
      traditional: "Long urban travels, traffic, complex city navigation",
      modern: "Some improved access, variable convenience",
      peartree: "Quick countryside drive, familiar rural roads"
    },
    {
      stage: "Rural Arrival",
      traditional: "Urban parking challenges, unfamiliar city environment",
      modern: "Some parking provision, basic rural accommodation",
      peartree: "Free countryside parking, rural-friendly facility design"
    },
    {
      stage: "Rural Reception",
      traditional: "Urban practice environment, no rural understanding",
      modern: "Some rural awareness, basic accommodation",
      peartree: "Rural-aware welcome, countryside values respected"
    },
    {
      stage: "Rural Care Experience",
      traditional: "City practice pace, no rural lifestyle consideration",
      modern: "Some flexibility, basic rural understanding",
      peartree: "Rural-sensitive care, countryside lifestyle accommodation"
    },
    {
      stage: "Rural Treatment Planning",
      traditional: "Urban-focused planning, limited rural consideration",
      modern: "Some rural awareness, basic scheduling flexibility",
      peartree: "Rural-aware planning with seasonal work consideration"
    },
    {
      stage: "Rural Treatment Delivery",
      traditional: "Multiple urban trips, complex rural scheduling",
      modern: "Some efficiency, limited rural optimization",
      peartree: "CEREC same-day crowns, minimized rural travel"
    },
    {
      stage: "Rural Follow-Up",
      traditional: "Urban-focused follow-up, limited rural accessibility",
      modern: "Some rural accommodation, basic follow-up",
      peartree: "Rural-accessible follow-up with countryside-friendly scheduling"
    }
  ];

  const ruralBenefits = [
    {
      benefit: "Countryside Accessibility",
      description: "Easy access from rural areas without urban travel complications",
      advantage: "Eliminates city travel while providing modern dental technology",
      details: "Just 5 minutes from East Bridgford with rural-friendly roads and parking"
    },
    {
      benefit: "Rural Lifestyle Understanding",
      description: "Scheduling and care that accommodates farming and countryside work",
      advantage: "Dental care that fits with seasonal agricultural schedules",
      details: "Flexible timing for harvest, lambing, and other rural work priorities"
    },
    {
      benefit: "Countryside Family Care",
      description: "Comprehensive care for rural families from children to grandparents",
      advantage: "One practice serving all rural family dental needs",
      details: "Family-efficient scheduling and multi-generational countryside care"
    },
    {
      benefit: "Rural Value Pricing",
      description: "Transparent pricing that respects rural family budgeting patterns",
      advantage: "Clear costs with rural-friendly payment options and seasonal flexibility",
      details: "Understanding of rural income patterns and agricultural cash flow"
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
                "name": "What are the alternatives to limited rural dental practices serving East Bridgford?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many rural residents seek practices offering modern technology, convenient countryside access, and comprehensive care. Pear Tree Dental delivers these benefits while maintaining the personal touch valued in rural communities."
                }
              },
              {
                "@type": "Question",
                "name": "Why are East Bridgford residents switching to practices outside their immediate area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Limited local options, outdated rural facilities, and long urban travels drive residents to seek modern alternatives. Practices like Pear Tree offer cutting-edge technology with easy countryside access."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Modern Rural Alternative for East Bridgford
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for a <span className="text-yellow-300">Rural Dentist</span> in East Bridgford?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Try Pear Tree Dental - The Modern Countryside Alternative
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Rural values, modern tech, and easy countryside access – just 5 minutes from NG13
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Rural Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🌾 Just 5 minutes from East Bridgford with rural-friendly access!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rural Residents Are Switching */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why East Bridgford Rural Residents Are Switching to Modern Countryside Dental Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Limited rural options and long urban travels have led countryside residents
                to seek modern alternatives that understand and accommodate rural life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyRuralResidentsSwitch.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-green-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <h3 className="font-bold text-pear-primary">{reason.reason}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Rural Challenge:</h4>
                          <p className="text-sm text-red-700">{reason.oldExperience}</p>
                        </div>

                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">Modern Rural Solution:</h4>
                          <p className="text-sm text-green-700">{reason.newSolution}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Rural Impact:</h4>
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

      {/* Rural Advantages */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Modern Rural Dental Technology: The Pear Tree Countryside Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced technology designed for rural accessibility –
                better results, efficient treatment, and respect for countryside life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {ruralAdvantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">{advantage.advantage}</h3>

                    <div className="space-y-4">
                      <p className="text-gray-700">{advantage.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Traditional Rural Method:</h4>
                          <p className="text-sm text-red-700">{advantage.traditionalAlternative}</p>
                        </div>

                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">Rural Benefit:</h4>
                          <p className="text-sm text-green-700">{advantage.ruralBenefit}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-blue-700 text-sm mb-1">Our Rural Technology:</h4>
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

      {/* Rural Journey Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Rural Journey: Traditional vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that rural-aware modern dental care makes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Rural Journey Stage</div>
                <div className="text-center">Traditional Rural</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Rural</div>
              </div>

              {ruralJourneyComparison.map((stage, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{stage.stage}</div>
                  <div className="text-center text-sm text-red-600 px-2">{stage.traditional}</div>
                  <div className="text-center text-sm text-blue-600 px-2">{stage.modern}</div>
                  <div className="text-center text-sm text-green-600 px-2 font-semibold">{stage.peartree}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>The Pear Tree Rural Difference:</strong> Every step designed around countryside accessibility,
                rural values, and efficient modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rural Benefits */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Perfect Rural Solution for East Bridgford Countryside Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Modern dental care that understands and accommodates rural life and countryside values.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {ruralBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                        <p className="text-gray-700 mb-3">{benefit.description}</p>

                        <div className="bg-green-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-1">Rural Advantage:</h4>
                          <p className="text-sm text-green-700">{benefit.advantage}</p>
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
                Why East Bridgford Rural Families Choose the Modern Alternative
              </h2>
            </div>

            <TestimonialBanner
              text="We farm near East Bridgford and always struggled with dental access - either basic local options or long trips to Nottingham. When we found Pear Tree, it was perfect - only 5 minutes away but with all the modern technology you'd expect in the city. They understand our farming schedule and work around harvest time, and the CEREC machine meant I got my crown done in one visit instead of multiple trips during busy season. The whole family goes there now, and they really understand rural life."
              author="Richard T. from East Bridgford, NG13"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Rural-friendly</div>
                <p className="text-gray-600">Understands farming schedules</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">5 minutes away</div>
                <p className="text-gray-600">Easy countryside access</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Modern technology</div>
                <p className="text-gray-600">City-quality rural care</p>
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
              Modern Rural Dental Care Results for East Bridgford Families
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that rural-accessible modern technology makes
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/east-bridgford-rural-before-case-1.webp"
              afterImage="/images/east-bridgford-rural-after-case-1.webp"
              beforeAlt="Before modern rural dental care - traditional countryside treatment"
              afterAlt="After modern rural dental care - natural-looking, precision results"
              title="Modern Rural Dental Excellence"
              description="East Bridgford resident's transformation with countryside-accessible care"
              treatmentType="CEREC Crown and Rural-Friendly Care"
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
                Questions About Modern Rural Dental Alternatives
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from East Bridgford countryside residents considering their options
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
              Easy Countryside Journey from East Bridgford to Modern Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Quick 5-Minute Countryside Journey
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head west from East Bridgford village</p>
                    <p>2. Follow countryside roads to Burton Joyce</p>
                    <p>3. Quick rural drive through farmland</p>
                    <p>4. Arrive at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Free rural parking for farm vehicles</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-6">
                    <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-green-700 mb-2">Rural Convenience</h4>
                    <p className="text-gray-600">Easy countryside access</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/East+Bridgford,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from East Bridgford
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-teal-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Make the Switch to Modern Rural Dental Care
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what East Bridgford countryside families are discovering –
              modern technology, rural values, and easy access just minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                The Modern Rural Alternative to Limited Countryside Options
              </p>
              <p className="text-sm opacity-90">
                Rural accessibility • Modern technology • Countryside values • 5 minutes from NG13
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Try Rural Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Easy rural access</span>
              <span>✓ Countryside values respected</span>
              <span>✓ Modern dental technology</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
