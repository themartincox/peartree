import {
  ArrowRight,
  Calendar,
  Car,
  Circle,
  DollarSign,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Looking for a Private Dentist in Nottingham? Try Pear Tree Dental",
  description:
    "Escape city centre parking fees and crowds. Modern dental care with free parking and personal attention – just 15 minutes from Nottingham centre.",
  keywords: [
    "private dentist Nottingham",
    "Nottingham dental alternative",
    "modern dentist NG1",
    "private dental care Nottingham",
    "dental practice near Nottingham",
    "Nottingham dentist",
    "escape city centre dental",
  ],
  openGraph: {
    title: "Looking for a Private Dentist in Nottingham? Try Pear Tree Dental",
    description:
      "Escape city centre parking fees and crowds. Modern dental care with free parking and personal attention.",
    url: "https://peartree.dental/alternatives/nottingham",
  },
  alternates: {
    canonical: "https://peartree.dental/alternatives/nottingham",
  },
};

export default function PrivateDentistNottinghamOverviewPage() {
  const alternativesFAQs = [
    {
      question:
        "What are the alternatives to city centre dental practices in Nottingham?",
      answer:
        "Many patients seek practices outside the city centre offering free parking, modern technology, and personal attention. Pear Tree Dental delivers these benefits while providing easy access from all Nottingham areas.",
    },
    {
      question:
        "Why are Nottingham patients switching to practices outside the city centre?",
      answer:
        "Expensive parking, traffic congestion, and rushed service drive patients to seek alternatives. Practices like Pear Tree offer free parking, modern technology, and unhurried personal care.",
    },
    {
      question:
        "How do modern dental practices compare to traditional Nottingham city centre clinics?",
      answer:
        "Modern practices typically offer free parking, digital X-rays, CEREC same-day crowns, and more personal attention. The investment in patient experience often provides superior value and convenience.",
    },
    {
      question:
        "Is it worth traveling outside Nottingham centre for dental care?",
      answer:
        "Many Nottingham patients find that a 15-minute drive to a practice with free parking actually saves time and money compared to struggling with city centre parking and traffic.",
    },
    {
      question:
        "What should Nottingham patients look for in a modern dental practice?",
      answer:
        "Key factors include free convenient parking, modern equipment, transparent pricing, personal attention, and a calm environment. Pear Tree Dental specifically addresses these patient priorities.",
    },
  ];

  const whyPatientsSwitch = [
    {
      reason: "City Centre Parking Costs",
      oldExperience:
        "£5-£10 parking fees, searching for spaces, traffic wardens",
      newSolution: "Free parking directly outside practice - no fees ever",
      impact: "Saves money and eliminates pre-appointment stress",
      icon: Car,
    },
    {
      reason: "Outdated City Centre Practices",
      oldExperience:
        "Old equipment, cramped facilities, dated treatment methods",
      newSolution:
        "Modern facilities, latest technology, spacious comfortable environment",
      impact: "Better treatment outcomes and more comfortable experience",
      icon: Zap,
    },
    {
      reason: "Hidden Costs and Fees",
      oldExperience: "Surprise charges, unclear pricing, administrative fees",
      newSolution: "Transparent pricing, clear estimates, no hidden costs",
      impact: "Financial confidence and better treatment planning",
      icon: DollarSign,
    },
    {
      reason: "Rushed City Centre Service",
      oldExperience:
        "Limited appointment time, hurried treatment, impersonal care",
      newSolution:
        "Unhurried appointments, personal attention, time for questions",
      impact: "Better understanding of treatment and improved dental health",
      icon: Calendar,
    },
    {
      reason: "Traffic and Access Issues",
      oldExperience: "City centre traffic, congestion, difficult access",
      newSolution: "Easy access from all areas, no traffic congestion",
      impact: "Stress-free journey and punctual appointments",
      icon: Heart,
    },
    {
      reason: "Impersonal Mass Treatment",
      oldExperience:
        "High volume practices, different staff, feeling like a number",
      newSolution:
        "Personal care, consistent team, relationship-based treatment",
      impact: "Builds trust and confidence in dental care",
      icon: Shield,
    },
  ];

  const modernAdvantages = [
    {
      advantage: "CEREC Same-Day Crowns",
      description:
        "Complete crown treatment in one visit - no return trips to city centre",
      traditionalAlternative:
        "Multiple visits, temporary crowns, city centre traffic",
      patientBenefit: "Save time, avoid multiple journeys, immediate results",
      technology: "Latest CEREC CAD/CAM technology for precision fitting",
    },
    {
      advantage: "Digital X-Ray Technology",
      description:
        "Instant, high-quality images with enhanced diagnostic capability",
      traditionalAlternative:
        "Film X-rays with processing delays and lower quality",
      patientBenefit: "Safer, faster, and enhanced images for better diagnosis",
      technology: "State-of-the-art digital sensors and imaging software",
    },
    {
      advantage: "Intraoral Cameras",
      description:
        "See exactly what needs attention with detailed close-up images",
      traditionalAlternative: "Verbal descriptions and basic hand mirrors",
      patientBenefit:
        "Better understanding of treatments and oral health status",
      technology:
        "High-definition cameras for patient education and documentation",
    },
    {
      advantage: "Transparent Pricing System",
      description:
        "Clear pricing guides and detailed estimates without hidden fees",
      traditionalAlternative:
        "Quotes only after examination with potential surprises",
      patientBenefit:
        "Budget with confidence and understand value of treatments",
      technology: "Digital treatment planning and cost estimation systems",
    },
    {
      advantage: "Free Parking Convenience",
      description: "Dedicated parking spaces directly outside the practice",
      traditionalAlternative: "Expensive city centre parking or limited spaces",
      patientBenefit: "Save money, reduce stress, arrive relaxed for treatment",
      technology: "Convenient location designed for patient accessibility",
    },
    {
      advantage: "Personal Attention",
      description:
        "Unhurried appointments with time for questions and explanations",
      traditionalAlternative:
        "Rushed appointments in high-volume city practices",
      patientBenefit:
        "Better understanding, improved care, stronger relationships",
      technology: "Practice designed for personal care and patient comfort",
    },
  ];

  const patientJourneyComparison = [
    {
      stage: "Planning Your Visit",
      traditional:
        "Plan around parking costs, traffic, and limited appointment times",
      modern: "Easy online booking, no parking concerns",
      peartree:
        "Book online anytime, confirmed free parking, journey planning help",
    },
    {
      stage: "Journey to Practice",
      traditional:
        "City centre traffic, finding expensive parking, walking to practice",
      modern: "Direct route, designated parking",
      peartree: "15-minute direct journey, free parking directly outside",
    },
    {
      stage: "Arrival Experience",
      traditional:
        "Stress from parking costs/fines, rushed feeling, city noise",
      modern: "Relaxed arrival, quiet environment",
      peartree: "Immediate stress-free parking, calm countryside setting",
    },
    {
      stage: "Clinical Experience",
      traditional: "Rushed appointments, older equipment, hurried explanations",
      modern: "Modern equipment, more time for care",
      peartree: "Latest technology, unhurried care, detailed explanations",
    },
    {
      stage: "Treatment Discussion",
      traditional: "Quick verbal explanation, pressure to decide quickly",
      modern: "Visual aids, time to consider options",
      peartree: "Detailed visual explanation using your images, no pressure",
    },
    {
      stage: "Treatment Planning",
      traditional: "Basic plan, unexpected costs often arise",
      modern: "Comprehensive planning with clear pricing",
      peartree: "Detailed plan with transparent pricing and payment options",
    },
    {
      stage: "Treatment Delivery",
      traditional: "Multiple city centre visits, temporary solutions",
      modern: "Efficient treatment, fewer visits",
      peartree: "CEREC same-day crowns, minimal visits, maximum results",
    },
    {
      stage: "After Your Visit",
      traditional: "Rush back to city centre parking, limited follow-up",
      modern: "Relaxed departure, good follow-up",
      peartree: "Peaceful departure, comprehensive aftercare and support",
    },
  ];

  const escapeAdvantages = [
    {
      benefit: "Escape Parking Fees",
      description: "No more £5-£10 parking charges for every dental visit",
      advantage: "Save £50-£100+ per year on dental visit parking costs",
      details: "Free parking directly outside practice with no time limits",
    },
    {
      benefit: "Escape City Centre Traffic",
      description: "Avoid congested city centre roads and traffic delays",
      advantage: "Predictable journey times and stress-free travel",
      details: "Direct route via A612 avoiding all city centre traffic",
    },
    {
      benefit: "Escape Rushed Treatment",
      description:
        "Move away from high-volume practices with rushed appointments",
      advantage: "Unhurried care with time for questions and explanations",
      details: "Appointments designed for personal attention and thorough care",
    },
    {
      benefit: "Escape Hidden Costs",
      description:
        "Leave behind practices with surprise charges and unclear pricing",
      advantage: "Complete price transparency with no hidden fees or surprises",
      details: "Clear pricing guides and detailed estimates before treatment",
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
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the alternatives to city centre dental practices in Nottingham?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many patients seek practices outside the city centre offering free parking, modern technology, and personal attention. Pear Tree Dental delivers these benefits while providing easy access from all Nottingham areas.",
                },
              },
              {
                "@type": "Question",
                name: "Why are Nottingham patients switching to practices outside the city centre?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Expensive parking, traffic congestion, and rushed service drive patients to seek alternatives. Practices like Pear Tree offer free parking, modern technology, and unhurried personal care.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-emerald-500 text-white px-4 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Escape City Centre Hassles
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Looking for a{" "}
              <span className="text-yellow-300">Private Dentist</span> in
              Nottingham?
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Escape City Centre Parking Fees & Crowds
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <ArrowRight className="inline w-5 h-5 mr-2" />
                Free parking, modern tech, and personal care – just 15 minutes
                from city centre
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-emerald-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Circle className="w-5 h-5 mr-2" />
                  Escape to Modern Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                🚗 Free parking & no city centre fees!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Escape Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Escape City Centre Dental Hassles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Why struggle with expensive parking, traffic, and rushed service
                when there's a better way?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {(escapeAdvantages || []).map((escape, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-2 border-emerald-200"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-100 rounded-full">
                        <ArrowRight className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">
                          {escape.benefit}
                        </h3>
                        <p className="text-gray-700 mb-3">
                          {escape.description}
                        </p>

                        <div className="bg-emerald-50 rounded-lg p-3 mb-3">
                          <h4 className="font-semibold text-emerald-700 text-sm mb-1">
                            Your Advantage:
                          </h4>
                          <p className="text-sm text-emerald-700">
                            {escape.advantage}
                          </p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">
                            How It Works:
                          </h4>
                          <p className="text-sm text-blue-700">
                            {escape.details}
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

      {/* Why Patients Are Switching */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Nottingham Patients Are Escaping City Centre Dental Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                City centre dental practices served Nottingham well in the past,
                but modern alternatives offer significant advantages that
                transform the entire dental experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(whyPatientsSwitch || []).map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow border-2 border-emerald-200"
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <IconComponent className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                        <h3 className="font-bold text-pear-primary">
                          {reason.reason}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">
                            City Centre Experience:
                          </h4>
                          <p className="text-sm text-red-700">
                            {reason.oldExperience}
                          </p>
                        </div>

                        <div className="bg-emerald-50 rounded-lg p-3">
                          <h4 className="font-semibold text-emerald-700 text-sm mb-1">
                            Modern Alternative:
                          </h4>
                          <p className="text-sm text-emerald-700">
                            {reason.newSolution}
                          </p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-1">
                            Impact:
                          </h4>
                          <p className="text-sm text-blue-700">
                            {reason.impact}
                          </p>
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

      {/* Modern Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Modern Dental Technology: Beyond City Centre Limitations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced technology and patient-focused care that transforms
                your dental experience.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {(modernAdvantages || []).map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">
                      {advantage.advantage}
                    </h3>

                    <div className="space-y-4">
                      <p className="text-gray-700">{advantage.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-700 text-sm mb-1">
                            City Centre Method:
                          </h4>
                          <p className="text-sm text-red-700">
                            {advantage.traditionalAlternative}
                          </p>
                        </div>

                        <div className="bg-emerald-50 rounded-lg p-3">
                          <h4 className="font-semibold text-emerald-700 text-sm mb-1">
                            Your Benefit:
                          </h4>
                          <p className="text-sm text-emerald-700">
                            {advantage.patientBenefit}
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-blue-700 text-sm mb-1">
                          Our Technology:
                        </h4>
                        <p className="text-sm text-blue-700">
                          {advantage.technology}
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

      {/* Patient Journey Comparison */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Your Journey: City Centre vs Modern vs Pear Tree
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference that escaping city centre limitations
                makes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-gray-700">
                <div>Journey Stage</div>
                <div className="text-center">City Centre Experience</div>
                <div className="text-center">Modern Practice</div>
                <div className="text-center">Pear Tree Experience</div>
              </div>

              {(patientJourneyComparison || []).map((stage, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div className="font-semibold text-gray-700">
                    {stage.stage}
                  </div>
                  <div className="text-center text-sm text-red-600 px-2">
                    {stage.traditional}
                  </div>
                  <div className="text-center text-sm text-blue-600 px-2">
                    {stage.modern}
                  </div>
                  <div className="text-center text-sm text-emerald-600 px-2 font-semibold">
                    {stage.peartree}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>The Pear Tree Escape:</strong> Every step designed to
                eliminate city centre hassles while providing superior dental
                care and technology.
              </p>
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
                Why Nottingham Patients Choose to Escape City Centre Dental
              </h2>
            </div>

            <TestimonialBanner
              text="I spent years dealing with expensive parking and rushed appointments at my Nottingham city centre dentist. When I discovered Pear Tree, it was like finding an oasis - free parking right outside, they actually listen to you, and the technology is incredible. The drive out of the city is so peaceful, and I arrive relaxed instead of stressed. My CEREC crown was completed in one visit, saving me another trip into town. I'll never go back to city centre dental hassles."
              author="Robert H. from Nottingham, NG1"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  Escape parking fees
                </div>
                <p className="text-gray-600">Save £50-£100+ per year</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  Peaceful journey
                </div>
                <p className="text-gray-600">No city centre traffic stress</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  Personal attention
                </div>
                <p className="text-gray-600">Unhurried, caring service</p>
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
              Modern Dental Care Results for Nottingham Patients
            </h2>
            <p className="text-lg text-gray-600">
              See the difference that escaping city centre limitations makes to
              your smile
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/nottingham-before-case-1.webp"
              afterImage="/images/nottingham-after-case-1.webp"
              beforeAlt="Before escaping city centre dental - older style treatment"
              afterAlt="After modern dental care - natural-looking, precision results"
              title="Escape to Better Dental Care"
              description="Nottingham patient's transformation with modern technology"
              treatmentType="CEREC Crown and Modern Smile Design"
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
                Questions About Escaping City Centre Dental
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Nottingham patients considering their
                alternatives
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
              Escape Route from Nottingham City Centre
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Your 15-Minute Escape Route
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Leave Nottingham centre via A612 east</p>
                    <p>2. Peaceful drive through Lowdham</p>
                    <p>3. Arrive at Burton Joyce</p>
                    <p>4. Park free at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      No traffic, no fees, no stress
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-emerald-50 rounded-lg p-6">
                    <Car className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h4 className="font-bold text-emerald-700 mb-2">
                      Freedom from City Centre
                    </h4>
                    <p className="text-gray-600">
                      No parking fees, no traffic stress
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Your Escape Route
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-teal-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Escape City Centre Dental Hassles Today
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience what Nottingham patients are discovering – better
              technology, free parking, and personal care just minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Your Escape from City Centre Dental Limitations
              </p>
              <p className="text-sm opacity-90">
                Free parking • Modern technology • Personal care • 15 minutes
                from city centre
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-emerald-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Circle className="w-5 h-5 mr-2" />
                  Escape to Better Dental Care
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Free parking - save £50+ per year</span>
              <span>✓ No city centre traffic stress</span>
              <span>✓ Personal, unhurried care</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
