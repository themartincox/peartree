import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  CalendarDays,
  Clock,
  Star,
  Shield,
  Heart,
  Award,
  Zap,
  Sun
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Teeth Whitening Burton Joyce | 8 Shades Brighter",
  description: "Professional teeth whitening in Burton Joyce. Safe, effective whitening treatments for a brighter, more confident smile. Results up to 8 shades whiter in 90 minutes.",
  keywords: [
    "teeth whitening Burton Joyce",
    "professional whitening Nottingham",
    "teeth bleaching Burton Joyce",
    "dental whitening Nottinghamshire",
    "laser teeth whitening Burton Joyce",
    "same day whitening Nottingham",
    "cosmetic whitening Burton Joyce"
  ],
  openGraph: {
    title: "Professional Teeth Whitening | Pear Tree Dental",
    description: "Professional teeth whitening treatments - up to 8 shades brighter in 90 minutes",
    type: "website",
    url: "https://peartreedental.co.uk/services/teeth-whitening"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/services/teeth-whitening"
  }
};

const whiteningOptions = [
  {
    treatment: "In-Surgery Whitening",
    price: "From £450",
    duration: "90 minutes",
    results: "Up to 8 shades whiter",
    sessions: "Single appointment",
    description: "Professional whitening treatment completed in one visit",
    benefits: [
      "Immediate dramatic results",
      "Professional supervision",
      "Custom protection for gums",
      "Fastest possible treatment",
      "Pain management available"
    ],
    process: "Protective gel applied, whitening agent activated with special light",
    maintenance: "Touch-up treatments every 6-12 months",
    popular: true
  },
  {
    treatment: "Take-Home Whitening Kit",
    price: "From £350",
    duration: "2-4 weeks",
    results: "Up to 6 shades whiter",
    sessions: "Daily use at home",
    description: "Custom trays with professional-grade whitening gel for home use",
    benefits: [
      "Convenience of home treatment",
      "Gradual, comfortable whitening",
      "Custom-fitted trays",
      "Professional-grade results",
      "Flexible timing"
    ],
    process: "Custom impressions taken, trays made, gel provided with instructions",
    maintenance: "Top-up gel available for ongoing maintenance"
  },
  {
    treatment: "Combination Treatment",
    price: "From £650",
    duration: "Initial visit + 2 weeks home",
    results: "Up to 10 shades whiter",
    sessions: "In-surgery + home maintenance",
    description: "Best of both worlds - immediate results plus home maintenance",
    benefits: [
      "Maximum whitening potential",
      "Immediate and long-term results",
      "Professional and home convenience",
      "Best value for dramatic change",
      "Comprehensive aftercare"
    ],
    process: "In-surgery treatment followed by home maintenance kit",
    maintenance: "Ongoing home maintenance with provided gel"
  }
];

const treatmentProcess = [
  {
    stage: "1",
    title: "Consultation & Assessment",
    description: "Comprehensive evaluation of suitability for whitening",
    duration: "30-45 minutes",
    includes: ["Oral health examination", "Shade assessment", "Expectation discussion", "Treatment selection", "Medical history review"],
    outcome: "Personalized whitening plan with realistic expectations"
  },
  {
    stage: "2",
    title: "Pre-Treatment Preparation",
    description: "Ensuring optimal conditions for whitening success",
    duration: "30 minutes (if needed)",
    includes: ["Professional cleaning", "Gum health check", "Sensitivity prevention", "Custom tray impressions", "Before photos"],
    outcome: "Mouth prepared for optimal whitening results"
  },
  {
    stage: "3",
    title: "Whitening Treatment",
    description: "Professional whitening procedure",
    duration: "60-90 minutes",
    includes: ["Gum protection application", "Whitening gel application", "Light activation (if applicable)", "Multiple gel cycles", "Comfort monitoring"],
    outcome: "Immediate whitening results visible"
  },
  {
    stage: "4",
    title: "Post-Treatment Care",
    description: "Aftercare instructions and follow-up",
    duration: "15 minutes",
    includes: ["After photos", "Sensitivity management", "Diet guidelines", "Home care kit", "Follow-up scheduling"],
    outcome: "Optimized results with minimal sensitivity"
  }
];

const faqs = [
  {
    question: "Is professional teeth whitening safe?",
    answer: "Yes, professional teeth whitening is very safe when performed by a qualified dentist. We use controlled concentrations of whitening agents and provide gum protection to minimize any risks. Some temporary sensitivity is normal but manageable."
  },
  {
    question: "How white will my teeth get?",
    answer: "Results vary by individual, but most patients achieve 6-8 shades whiter teeth. Factors affecting results include starting shade, age, and type of staining. We'll discuss realistic expectations during your consultation based on your specific situation."
  },
  {
    question: "How long do whitening results last?",
    answer: "Professional whitening typically lasts 1-3 years depending on your diet, lifestyle, and oral hygiene. Avoiding staining foods/drinks and regular dental cleanings help maintain results longer. Touch-up treatments can extend the effects."
  },
  {
    question: "Will whitening make my teeth sensitive?",
    answer: "Some patients experience mild sensitivity during or after treatment, but this is usually temporary and manageable. We provide desensitizing gels and can adjust treatment intensity. Most sensitivity resolves within 24-48 hours."
  },
  {
    question: "Can I whiten if I have crowns or fillings?",
    answer: "Whitening only affects natural tooth structure, not crowns, fillings, or veneers. If you have visible restorations, they may need replacement after whitening to match your new shade. We'll assess this during consultation."
  },
  {
    question: "How much does professional teeth whitening cost?",
    answer: "Professional whitening ranges from £350 for take-home kits to £650 for combination treatment. In-surgery whitening starts at £450. We offer payment plans and will provide a detailed quote during consultation."
  }
];

export default function TeethWhiteningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-yellow-600 text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Professional Whitening
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Teeth
                <span className="block text-yellow-600">Whitening</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your smile with professional teeth whitening. Safe, effective treatments
                that can make your teeth up to 8 shades whiter in just one visit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white">
                  Call 0115 931 2525
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-600">£350</div>
                  <div className="text-sm text-gray-600">From</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">8 Shades</div>
                  <div className="text-sm text-gray-600">Whiter</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">90 mins</div>
                  <div className="text-sm text-gray-600">Single Visit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">Safe</div>
                  <div className="text-sm text-gray-600">Professional</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <Sun className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">PROFESSIONAL WHITENING</h3>
                    <p className="text-gray-600">Brighter, whiter smile</p>
                  </div>
                </div>
              </Card>

              {/* Social Proof Sticker */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full px-4 py-2 shadow-lg transform -rotate-12">
                <div className="text-center">
                  <div className="text-sm font-bold">BRIGHTENED BY</div>
                  <div className="text-lg font-extrabold">1,247+</div>
                  <div className="text-xs">HAPPY PATIENTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitening Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Whitening Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the whitening treatment that best fits your lifestyle and goals
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {whiteningOptions.map((option, index) => (
              <Card key={index} className={`${option.popular ? 'ring-2 ring-yellow-500 scale-105' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{option.treatment}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600">{option.price}</div>
                      <div className="text-sm text-gray-500">{option.results}</div>
                    </div>
                  </div>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <div className="font-medium">{option.duration}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Sessions:</span>
                        <div className="font-medium">{option.sessions}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {option.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded border">
                      <h4 className="font-semibold mb-1">Process:</h4>
                      <p className="text-sm text-gray-700">{option.process}</p>
                    </div>

                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                      Choose {option.treatment}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Whitening Journey
            </h2>
            <p className="text-xl text-gray-600">
              Professional whitening process designed for optimal results and comfort
            </p>
          </div>

          <div className="space-y-8">
            {treatmentProcess.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-20 bg-yellow-600 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{stage.stage}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">{stage.title}</h3>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                      <Badge variant="outline">{stage.duration}</Badge>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Includes:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {stage.includes.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-yellow-600" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Outcome:</h4>
                        <p className="text-sm text-gray-700">{stage.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about professional teeth whitening
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a Brighter, Whiter Smile?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Transform your confidence with professional teeth whitening. Get up to 8 shades whiter
            in just one visit with safe, effective treatments tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              <CalendarDays className="w-5 h-5 mr-2" />
              Book Whitening Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
              Call 0115 931 2525
            </Button>
          </div>

          <div className="text-yellow-100 space-y-2">
            <p className="font-medium">Safe professional treatment • Up to 8 shades whiter • Single visit results</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
