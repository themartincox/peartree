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
  title: "Looking for a Family Dentist in Carlton? Try Pear Tree Dental",
  description: "Modern family dental care with free parking and child-friendly service – just 12 minutes from NG4. Discover why Carlton families are choosing Pear Tree Dental.",
  keywords: [
    "family dentist Carlton",
    "Carlton dental alternative",
    "modern dentist NG4",
    "family dental care Carlton",
    "dental practice near Carlton",
    "Carlton dentist",
    "child-friendly dentist NG4"
  ],
  openGraph: {
    title: "Looking for a Family Dentist in Carlton? Try Pear Tree Dental",
    description: "Modern family dental care with free parking and child-friendly service – just 12 minutes from NG4.",
    url: "https://peartree.dental/alternatives/carlton"
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/carlton"
  }
};

export default function FamilyDentistCarltonOverviewPage() {
  const alternativesFAQs = [
    {
      question: "What are the alternatives to traditional dental practices in Carlton?",
      answer: "Many families seek newer practices offering modern technology, child-friendly environments, and convenient parking. Pear Tree Dental delivers these benefits while maintaining comprehensive family care."
    },
    {
      question: "Why are Carlton families switching to practices outside their local area?",
      answer: "Limited parking, outdated facilities, and lack of child-friendly environments drive families to seek modern alternatives. Practices like Pear Tree offer free parking, latest technology, and family-focused care."
    },
    {
      question: "How do modern family dentists compare to traditional Carlton practices?",
      answer: "Modern family practices typically offer digital X-rays, child-friendly environments, CEREC same-day crowns, and better parking. The investment in family experience often provides superior value."
    },
    {
      question: "Is it worth traveling outside Carlton for family dental care?",
      answer: "Many Carlton families find that a 12-minute drive to a modern practice with free parking and child-friendly care actually saves time and provides better experience for the whole family."
    },
    {
      question: "What should Carlton families look for in a modern dental practice?",
      answer: "Key factors include convenient parking, child-friendly environment, modern equipment, transparent pricing, and family-focused scheduling. Pear Tree Dental specifically addresses these family priorities."
    }
  ];

  const whyFamiliesSwitch = [
    {
      reason: "Parking Problems for Families",
      oldExperience: "Limited parking, carrying children and equipment, stress before appointments",
      newSolution: "Free parking directly outside - easy family access",
      impact: "Transforms family visits from stressful to relaxed",
      icon: Car
    },
    {
      reason: "Child-Unfriendly Environment",
      oldExperience: "Clinical atmosphere, no child entertainment, anxious children",
      newSolution: "Welcoming environment designed for families and children",
      impact: "Children feel comfortable and less anxious about dental visits",
      icon: Heart
    },
    {
      reason: "Outdated Technology",
      oldExperience: "Film X-rays, messy impressions, multiple visits for crowns",
      newSolution: "Digital X-rays, CEREC same-day crowns, child-friendly technology",
      impact: "Fewer visits, more comfortable treatment for children",
      icon: Zap
    },
    {
      reason: "Inflexible Family Scheduling",
      oldExperience: "Limited hours, no family appointments, difficult scheduling",
      newSolution: "Family-friendly scheduling, multiple family members together",
      impact: "Better fits family schedules and reduces multiple trips",
      icon: Calendar
    },
    {
      reason: "Hidden Costs for Families",
      oldExperience: "Surprise charges, unclear family pricing, budget uncertainty",
      newSolution: "Transparent family pricing, clear estimates, no surprises",
      impact: "Family budgeting confidence and trust in treatment costs",
      icon: DollarSign
    },
    {
      reason: "Impersonal Service",
      oldExperience: "Rushed appointments, different staff, no family continuity",
      newSolution: "Personal family care, consistent team, relationship building",
      impact: "Builds trust and comfort for entire family",
      icon: Shield
    }
  ];

  const familyAdvantages = [
    {
      advantage: "Child-Friendly CEREC Crowns",
      description: "Same-day crowns mean children don't need multiple visits",
      traditionalAlternative: "Multiple appointments, temporary crowns, anxious returns",
      familyBenefit: "Less time off school, reduced anxiety, immediate results",
      technology: "Child-friendly CEREC technology with entertainment during treatment"
    },
    {
      advantage: "Digital X-Rays for Children",
      description: "90% less radiation and instant results for child safety",
      traditionalAlternative: "Higher radiation film X-rays with processing delays",
      familyBenefit: "Safer for children, faster results, less waiting time",
      technology: "Child-safe digital sensors and instant family-friendly explanations"
    },
    {
      advantage: "Family Entertainment Technology",
      description: "Intraoral cameras and screens keep children engaged",
      traditionalAlternative: "No visual aids, verbal explanations children don't understand",
      familyBenefit: "Children understand their treatment and feel involved",
      technology: "High-definition cameras and child-friendly displays"
    },
    {
      advantage: "Transparent Family Pricing",
      description: "Clear family treatment plans and pricing for all members",
      traditionalAlternative: "Complex pricing, separate quotes, family budget confusion",
      familyBenefit: "Family budget planning and understanding of all costs",
      technology: "Digital family treatment planning and cost estimation"
    },
    {
      advantage: "Family Parking Convenience",
      description: "Free parking with easy access for families with children",
      traditionalAlternative: "Limited parking, carrying children and bags, stress",
      familyBenefit: "Easy family arrivals, no parking stress or costs",
      technology: "Dedicated family parking with direct practice access"
    },
    {
      advantage: "Comprehensive Family Care",
      description: "Care for all family members from children to grandparents",
      traditionalAlternative: "Age-limited services, referrals to other practices",
      familyBenefit: "One practice for whole family, continuity of care",
      technology: "Age-appropriate technology and treatment approaches"
    }
  ];

  const familyJourneyComparison = [
    {
      stage: "Planning Family Visit",
      traditional: "Individual appointments, complex scheduling, parking concerns",
      modern: "Family scheduling options, easier planning",
      peartree: "Coordinated family appointments, guaranteed free parking"
    },
    {
      stage: "Arrival with Family",
      traditional: "Search for parking with children, carry equipment, stress",
      modern: "Designated parking, easier access",
      peartree: "Free parking directly outside, easy family access"
    },
    {
      stage: "Children's Comfort",
      traditional: "Clinical environment, anxious children, no entertainment",
      modern: "Some child considerations, basic comfort",
      peartree: "Child-friendly environment, entertainment, family comfort"
    },
    {
      stage: "Family Treatment",
      traditional: "Separate treatments, different explanations, confusion",
      modern: "Some family coordination, better communication",
      peartree: "Coordinated family care, visual explanations for all ages"
    },
    {
      stage: "Treatment Understanding",
      traditional: "Adult-focused explanations, children don't understand",
      modern: "Some age-appropriate communication",
      peartree: "Age-appropriate explanations using visual technology"
    },
    {
      stage: "Family Treatment Planning",
      traditional: "Individual plans, complex family coordination",
      modern: "Some family planning, better coordination",
      peartree: "Comprehensive family treatment plans with clear pricing"
    },
    {
      stage: "Treatment Delivery",
      traditional: "Multiple visits, temporary solutions, anxious returns",
      modern: "Fewer visits, some modern technology",
      peartree: "Same-day treatments, minimal family visits, maximum comfort"
    },
    {
      stage: "Family Follow-Up",
      traditional: "Individual follow-ups, complex family scheduling",
      modern: "Some family coordination, basic follow-up",
      peartree: "Coordinated family aftercare and preventive planning"
    }
  ];

  const familyBenefits = [
    {
      benefit: "One Practice for Whole Family",
      description: "Care for all ages from toddlers to grandparents",
      advantage: "Simplified family dental care with consistent team",
      details: "Comprehensive services for every family member's needs"
    },
    {
      benefit: "Child-Friendly Environment",
      description: "Welcoming atmosphere designed to reduce children's anxiety",
      advantage: "Positive dental experiences that last a lifetime",
      details: "Entertainment systems and gentle approach for young patients"
    },
    {
      benefit: "Family Scheduling Convenience",
      description: "Coordinate multiple family members in efficient appointments",
      advantage: "Less time off work and school, fewer practice visits",
      details: "Back-to-back appointments and family treatment coordination"
    },
    {
      benefit: "Family Budget Transparency",
      description: "Clear pricing for family treatments and payment plans",
      advantage: "Plan family dental budgets with confidence",
      details: "Family discounts and flexible payment options available"
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
                "name": "What are the alternatives to traditional dental practices in Carlton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many families seek newer practices offering modern technology, child-friendly environments, and convenient parking. Pear Tree Dental delivers these benefits while maintaining comprehensive family care."
                }
              },
              {
                "@type": "Question",
                "name": "Why are Carlton families switching to practices outside their local area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Limited parking, outdated facilities, and lack of child-friendly environments drive families to seek modern alternatives. Practices like Pear Tree offer free parking, latest technology, and family-focused care."
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
                Modern Family Alternative for Carlton
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for a <span className="text-yellow-300">Family Dentist</span> in Carlton?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Try Pear Tree Dental - The Modern Family Alternative
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Child-friendly care, free parking, and modern tech – just 12 minutes from NG4
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-indigo-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Experience Modern Family Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-indigo-600 hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">👨‍👩‍👧‍👦 Just 12 minutes from Carlton with free family parking!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Are Switching */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Carlton Families Are Switching to Modern Family Dental Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Traditional local practices have served Carlton families, but modern family alternatives
                offer significant advantages that improve the entire family dental experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyFamiliesSwitch.map((reason, index) => {
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
                          <h4 className="font-semibold text-red-700 text-sm mb-1">Traditional Experience:</h4>
                          <p className="text-sm text-red-700">{reason.oldExperience}</p>
                        </div>

                        <div className="bg-indigo-50 rounded-lg p-3">
                          <h4 className="font-semibold text-indigo-700 text-sm mb-1">Family Solution:</h4>
                          <p className="text-sm text-indigo-700">{reason.newSolution}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">Family Impact:</h4>
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

      {/* Family Advantages */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Modern Family Dental Technology: The Pear Tree Family Advantage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced technology designed specifically for families –
                better results, less anxiety, and more convenient for everyone.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {familyAdvantages.map((advantage, index) => (
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

                        <div className="bg-indigo-50 rounded-lg p-3">
                          <h4 className="font-semibold text-indigo-700 text-sm mb-1">Family Benefit:</h4>
                          <p className="text-sm text-indigo-700">{advantage.familyBenefit}</p>
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

      {/* Family Journey Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Family Journey: Traditional vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that modern family dental care makes at every step.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Family Journey Stage</div>
                <div className="text-center">Traditional Practice</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Family Care</div>
              </div>

              {familyJourneyComparison.map((stage, index) => (
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
                <strong>The Pear Tree Family Difference:</strong> Every step designed around your family's comfort,
                convenience, and creating positive dental experiences for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Benefits */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Perfect Family Solution for Carlton Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                One practice that truly understands and caters to the needs of modern families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {familyBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-full">
                        <Users className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                        <p className="text-gray-700 mb-3">{benefit.description}</p>

                        <div className="bg-indigo-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-indigo-700 text-sm mb-1">Family Advantage:</h4>
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
                Why Carlton Families Choose the Modern Family Alternative
              </h2>
            </div>

            <TestimonialBanner
              text="We'd been with our Carlton dentist for years, but taking the kids was always stressful - difficult parking, they weren't great with children, and the old equipment made everything take longer. When we switched to Pear Tree, it was like discovering what family dental care should be - free parking right outside, the kids actually enjoy going, and they did my husband's crown in one visit. At 12 minutes from Carlton, it's actually easier than our old practice and so much better for our family."
              author="Rachel W. from Carlton, NG4"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">Kids love it</div>
                <p className="text-gray-600">Child-friendly environment</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">Free family parking</div>
                <p className="text-gray-600">Easy access for families</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">One-visit crowns</div>
                <p className="text-gray-600">Less time off for parents</p>
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
              Modern Family Dental Care Results for Carlton Families
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that family-focused care and modern technology make
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/before-after/whitening-enlighten-composite-edge-bonding-before.webp"
              afterImage="/images/before-after/whitening-enlighten-composite-edge-bonding-after.webp"
              beforeAlt="Before modern family dental care - traditional treatment"
              afterAlt="After modern family dental care - natural-looking family results"
              title="Modern Family Dental Excellence"
              description="Carlton family's transformation with child-friendly care"
              treatmentType="Family CEREC Crowns and Child-Friendly Care"
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
                Questions About Modern Family Dental Alternatives
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Carlton families considering their options
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
              Easy Family Journey from Carlton to Modern Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Quick 12-Minute Family Journey
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head north on Carlton Hill from NG4</p>
                    <p>2. Continue onto A612 towards Lowdham</p>
                    <p>3. Follow signs to Burton Joyce</p>
                    <p>4. Arrive at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Free family parking directly outside</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h4 className="font-bold text-indigo-700 mb-2">Family Convenience</h4>
                    <p className="text-gray-600">Easy access for the whole family</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Carlton,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Carlton
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
              Make the Switch to Modern Family Dental Care
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what Carlton families are discovering –
              child-friendly care, free parking, and modern technology just minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                The Modern Family Alternative to Traditional Dental Care
              </p>
              <p className="text-sm opacity-90">
                Child-friendly care • Free family parking • Modern technology • 12 minutes from NG4
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-indigo-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Circle className="w-5 h-5 mr-2" />
                  Try Modern Family Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-indigo-600 hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Free family parking</span>
              <span>✓ Child-friendly environment</span>
              <span>✓ Modern family technology</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
