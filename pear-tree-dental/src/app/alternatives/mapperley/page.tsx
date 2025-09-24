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
  title: "Looking for a Community Dentist in Mapperley? Try Pear Tree Dental",
  description: "Modern community dental care with free parking and personal service – just 8 minutes from NG3. Discover why Mapperley residents are choosing Pear Tree Dental.",
  keywords: [
    "community dentist Mapperley",
    "Mapperley dental alternative",
    "modern dentist NG3",
    "community dental care Mapperley",
    "dental practice near Mapperley",
    "Mapperley dentist",
    "local dentist NG3"
  ],
  openGraph: {
    title: "Looking for a Community Dentist in Mapperley? Try Pear Tree Dental",
    description: "Modern community dental care with free parking and personal service – just 8 minutes from NG3.",
    url: "https://peartree.dental/alternatives/mapperley"
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/mapperley"
  }
};

export default function CommunityDentistMapperleyOverviewPage() {
  const alternativesFAQs = [
    {
      question: "What are the alternatives to traditional dental practices in Mapperley?",
      answer: "Many community members seek practices offering modern technology, personal service, and convenient parking. Pear Tree Dental delivers these benefits while maintaining the community values Mapperley residents appreciate."
    },
    {
      question: "Why are Mapperley residents switching to practices outside their local area?",
      answer: "Limited parking, outdated facilities, and impersonal service drive residents to seek modern alternatives. Practices like Pear Tree offer free parking, latest technology, and community-focused care."
    },
    {
      question: "How do modern dental practices compare to traditional Mapperley practices?",
      answer: "Modern practices typically offer digital X-rays, CEREC same-day crowns, transparent pricing, and better parking. The investment in community experience often provides superior value and convenience."
    },
    {
      question: "Is it worth traveling outside Mapperley for dental care?",
      answer: "Many Mapperley residents find that an 8-minute drive to a modern practice with free parking actually saves time and provides better community-focused experience than struggling with local parking issues."
    },
    {
      question: "What should Mapperley residents look for in a modern dental practice?",
      answer: "Key factors include convenient parking, modern equipment, transparent pricing, community values, and personal attention. Pear Tree Dental specifically addresses these community priorities."
    }
  ];

  const whyResidentsSwitch = [
    {
      reason: "Local Parking Challenges",
      oldExperience: "Limited parking spaces, competition with shops, resident permits",
      newSolution: "Free parking directly outside practice - no community parking stress",
      impact: "Transforms visits from stressful to relaxed community experience",
      icon: Car
    },
    {
      reason: "Outdated Local Facilities",
      oldExperience: "Old equipment, dated facilities, limited technology options",
      newSolution: "Modern facilities with latest technology and community comfort",
      impact: "Better treatment outcomes and community confidence in care",
      icon: Zap
    },
    {
      reason: "Impersonal Service",
      oldExperience: "High volume practices, rushed appointments, no community connection",
      newSolution: "Personal community-focused care with relationship building",
      impact: "Builds trust and maintains community values in healthcare",
      icon: Heart
    },
    {
      reason: "Hidden Community Costs",
      oldExperience: "Surprise charges, unclear community pricing, budget uncertainty",
      newSolution: "Transparent pricing that respects community budgets",
      impact: "Financial confidence and community trust in treatment costs",
      icon: DollarSign
    },
    {
      reason: "Limited Community Flexibility",
      oldExperience: "Rigid scheduling, no emergency access, limited community accommodation",
      newSolution: "Community-friendly scheduling with emergency care access",
      impact: "Better accommodation of community work and family schedules",
      icon: Calendar
    },
    {
      reason: "Loss of Community Connection",
      oldExperience: "Different staff visits, no continuity, impersonal treatment",
      newSolution: "Consistent community care team, personal relationships",
      impact: "Maintains community spirit and trust in healthcare relationships",
      icon: Shield
    }
  ];

  const communityAdvantages = [
    {
      advantage: "Community-Focused CEREC Crowns",
      description: "Same-day crowns mean community members don't need multiple visits",
      traditionalAlternative: "Multiple appointments, time off work, community scheduling conflicts",
      communityBenefit: "Less disruption to community work and family life",
      technology: "Latest CEREC technology with community-friendly scheduling"
    },
    {
      advantage: "Community-Safe Digital X-Rays",
      description: "90% less radiation and instant results for community health",
      traditionalAlternative: "Higher radiation film X-rays with processing delays",
      communityBenefit: "Safer for community members, faster community service",
      technology: "Digital sensors with instant community-friendly explanations"
    },
    {
      advantage: "Community Education Technology",
      description: "Intraoral cameras help community members understand their care",
      traditionalAlternative: "No visual aids, complex explanations residents don't understand",
      communityBenefit: "Community members understand and trust their treatment",
      technology: "High-definition cameras with community-focused education"
    },
    {
      advantage: "Community Transparent Pricing",
      description: "Clear pricing that respects community budgets and values",
      traditionalAlternative: "Complex pricing, hidden fees, community budget confusion",
      communityBenefit: "Community budgeting confidence and financial trust",
      technology: "Digital treatment planning with community cost transparency"
    },
    {
      advantage: "Community Parking Solution",
      description: "Free parking with easy access for all community members",
      traditionalAlternative: "Limited local parking, resident permit issues, community frustration",
      communityBenefit: "Easy community access without local parking competition",
      technology: "Dedicated community parking with direct practice access"
    },
    {
      advantage: "Community Relationship Care",
      description: "Personal care that builds lasting community relationships",
      traditionalAlternative: "High-volume practices, different staff, no community connection",
      communityBenefit: "Maintains community values and personal healthcare relationships",
      technology: "Community-focused care systems and relationship building"
    }
  ];

  const communityJourneyComparison = [
    {
      stage: "Planning Community Visit",
      traditional: "Check local parking availability, resident permit concerns",
      modern: "Some parking consideration, basic planning",
      peartree: "Guaranteed free parking, easy community planning"
    },
    {
      stage: "Journey to Practice",
      traditional: "Search for local parking, compete with shoppers, community frustration",
      modern: "Some parking options, variable access",
      peartree: "8-minute peaceful drive, free parking directly outside"
    },
    {
      stage: "Community Arrival",
      traditional: "Parking stress, rushing to appointment, community tension",
      modern: "Some stress reduction, basic comfort",
      peartree: "Relaxed arrival, community-friendly welcome"
    },
    {
      stage: "Community Reception",
      traditional: "Busy waiting room, impersonal check-in, community anonymity",
      modern: "Some personal attention, basic recognition",
      peartree: "Personal community greeting, recognized relationships"
    },
    {
      stage: "Community Care Experience",
      traditional: "Rushed appointments, clinical atmosphere, no community connection",
      modern: "Some personal care, basic communication",
      peartree: "Community-focused care, personal attention, relationship building"
    },
    {
      stage: "Community Treatment Planning",
      traditional: "Complex plans, unclear community pricing, budget confusion",
      modern: "Some planning clarity, basic pricing information",
      peartree: "Clear community-focused plans with transparent pricing"
    },
    {
      stage: "Community Treatment Delivery",
      traditional: "Multiple community visits, disrupted local schedules",
      modern: "Some efficiency, fewer visits",
      peartree: "CEREC same-day crowns, minimal community disruption"
    },
    {
      stage: "Community Follow-Up",
      traditional: "Basic follow-up, limited community connection",
      modern: "Some follow-up care, basic community service",
      peartree: "Ongoing community relationships and comprehensive aftercare"
    }
  ];

  const communityBenefits = [
    {
      benefit: "Community Values Maintained",
      description: "Personal relationships and community spirit in healthcare",
      advantage: "Healthcare that reflects Mapperley's community values",
      details: "Personal attention and relationship-based care for community members"
    },
    {
      benefit: "Community Parking Solution",
      description: "Free parking that doesn't compete with local residents or shops",
      advantage: "Solves the biggest community frustration with local dental care",
      details: "Dedicated parking with no impact on local community parking"
    },
    {
      benefit: "Community-Friendly Technology",
      description: "Modern technology explained in community-accessible terms",
      advantage: "Advanced care that community members understand and trust",
      details: "Technology that enhances community relationships rather than replacing them"
    },
    {
      benefit: "Community Budget Respect",
      description: "Transparent pricing that respects community financial planning",
      advantage: "Healthcare costs that community members can plan and trust",
      details: "Clear pricing with community-focused payment options"
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
                "name": "What are the alternatives to traditional dental practices in Mapperley?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many community members seek practices offering modern technology, personal service, and convenient parking. Pear Tree Dental delivers these benefits while maintaining the community values Mapperley residents appreciate."
                }
              },
              {
                "@type": "Question",
                "name": "Why are Mapperley residents switching to practices outside their local area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Limited parking, outdated facilities, and impersonal service drive residents to seek modern alternatives. Practices like Pear Tree offer free parking, latest technology, and community-focused care."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-lime-500 text-white px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Community Alternative for Mapperley
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for a <span className="text-yellow-300">Community Dentist</span> in Mapperley?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Try Pear Tree Dental - The Modern Community Alternative
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Community values, free parking, and modern care – just 8 minutes from NG3
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-lime-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Community Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-lime-600 hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🏘️ Just 8 minutes from Mapperley with free community parking!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Residents Are Switching */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Mapperley Residents Are Switching to Community-Focused Dental Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Local practices have served Mapperley well, but modern community alternatives
                offer significant advantages while maintaining the personal touch residents value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyResidentsSwitch.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-lime-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                        <h3 className="font-bold text-pear-primary">{reason.reason}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Local Experience:</h4>
                          <p className="text-sm text-red-700">{reason.oldExperience}</p>
                        </div>

                        <div className="bg-lime-50 rounded-lg p-3">
                          <h4 className="font-semibold text-lime-700 text-sm mb-1">Community Solution:</h4>
                          <p className="text-sm text-lime-700">{reason.newSolution}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Community Impact:</h4>
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

      {/* Community Advantages */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Modern Community Dental Technology: The Pear Tree Community Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced technology designed with community values –
                better results, personal relationships, and respect for community life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {communityAdvantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">{advantage.advantage}</h3>

                    <div className="space-y-4">
                      <p className="text-gray-700">{advantage.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Traditional Method:</h4>
                          <p className="text-sm text-red-700">{advantage.traditionalAlternative}</p>
                        </div>

                        <div className="bg-lime-50 rounded-lg p-3">
                          <h4 className="font-semibold text-lime-700 text-sm mb-1">Community Benefit:</h4>
                          <p className="text-sm text-lime-700">{advantage.communityBenefit}</p>
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

      {/* Community Journey Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Community Journey: Local vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that community-focused modern dental care makes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Community Journey Stage</div>
                <div className="text-center">Traditional Local</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Community</div>
              </div>

              {communityJourneyComparison.map((stage, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="font-semibold text-gray-700">{stage.stage}</div>
                  <div className="text-center text-sm text-red-600 px-2">{stage.traditional}</div>
                  <div className="text-center text-sm text-blue-600 px-2">{stage.modern}</div>
                  <div className="text-center text-sm text-lime-600 px-2 font-semibold">{stage.peartree}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>The Pear Tree Community Difference:</strong> Every step designed around community values,
                personal relationships, and modern convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Perfect Community Solution for Mapperley Residents
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Modern dental care that understands and maintains community values and relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {communityBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-lime-100 rounded-full">
                        <Users className="w-6 h-6 text-lime-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                        <p className="text-gray-700 mb-3">{benefit.description}</p>

                        <div className="bg-lime-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-lime-700 text-sm mb-1">Community Advantage:</h4>
                          <p className="text-sm text-lime-700">{benefit.advantage}</p>
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
                Why Mapperley Community Members Choose the Modern Alternative
              </h2>
            </div>

            <TestimonialBanner
              text="I'd been struggling with parking at my local Mapperley dentist for years – trying to find spaces between the shops and residential permits was a nightmare. When I heard about Pear Tree from a neighbor, I was skeptical about traveling further, but it's actually only 8 minutes away and so much better. Free parking right outside, modern equipment that makes everything faster, and they still give you that personal attention you expect in a community. My crown was done in one visit which saved me another parking struggle. I've recommended them to half of Mapperley now!"
              author="Margaret D. from Mapperley, NG3"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-lime-600 mb-2">Community choice</div>
                <p className="text-gray-600">Trusted by Mapperley neighbors</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-lime-600 mb-2">No parking stress</div>
                <p className="text-gray-600">Free parking directly outside</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-lime-600 mb-2">Personal attention</div>
                <p className="text-gray-600">Community values maintained</p>
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
              Modern Community Dental Care Results for Mapperley Residents
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that community-focused care and modern technology make
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/mapperley-community-before-case-1.webp"
              afterImage="/images/mapperley-community-after-case-1.webp"
              beforeAlt="Before modern community dental care - traditional local treatment"
              afterAlt="After modern community dental care - natural-looking, precision results"
              title="Modern Community Dental Excellence"
              description="Mapperley resident's transformation with community-focused care"
              treatmentType="CEREC Crown and Community-Focused Care"
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
                Questions About Modern Community Dental Alternatives
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Mapperley residents considering their options
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
              Easy Community Journey from Mapperley to Modern Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Quick 8-Minute Community Journey
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head east on Mapperley Road from NG3</p>
                    <p>2. Continue onto A612 towards Lowdham</p>
                    <p>3. Follow signs to Burton Joyce</p>
                    <p>4. Arrive at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Free community parking directly outside</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-lime-50 rounded-lg p-6">
                    <Users className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                    <h4 className="font-bold text-lime-700 mb-2">Community Convenience</h4>
                    <p className="text-gray-600">No local parking competition</p>
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
      <section className="py-20 bg-gradient-to-br from-lime-700 to-green-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Make the Switch to Modern Community Dental Care
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what Mapperley residents are discovering –
              community values, modern technology, and free parking just minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                The Modern Community Alternative to Local Dental Care
              </p>
              <p className="text-sm opacity-90">
                Community values • Free parking • Modern technology • 8 minutes from NG3
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-lime-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Try Community Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-lime-600 hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Free community parking</span>
              <span>✓ Community values maintained</span>
              <span>✓ Modern dental technology</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
