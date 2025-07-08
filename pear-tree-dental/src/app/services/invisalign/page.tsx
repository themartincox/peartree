import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  CheckCircle,
  ArrowRight,
  CalendarDays,
  Clock,
  Star,
  Shield,
  Heart,
  Award,
  Sparkles,
  Smile
} from "lucide-react";

export const metadata: Metadata = {
  title: "Invisalign Clear Aligners Burton Joyce | From £2,800",
  description: "Invisalign clear aligners in Burton Joyce. Straighten teeth invisibly with custom aligners. Professional Invisalign treatment from £2,800. Free consultation available.",
  keywords: [
    "Invisalign Burton Joyce",
    "clear aligners Nottingham",
    "invisible braces Burton Joyce",
    "teeth straightening Nottinghamshire",
    "Invisalign cost Burton Joyce",
    "adult braces Nottingham",
    "orthodontics Burton Joyce"
  ],
  openGraph: {
    title: "Invisalign Clear Aligners | Pear Tree Dental",
    description: "Invisalign clear aligners for invisible teeth straightening from £2,800",
    type: "website",
    url: "https://peartree.dental/services/invisalign"
  },
  alternates: {
    canonical: "https://peartree.dental/services/invisalign"
  }
};

const invisalignTreatmentOptions = [
  {
    option: "Invisalign Comprehensive",
    price: "From £4,500",
    duration: "12-24 months",
    aligners: "Unlimited aligners included",
    complexity: "Complex cases, all tooth movements",
    description: "Complete orthodontic treatment for comprehensive tooth straightening",
    benefits: [
      "Treats all orthodontic issues",
      "Unlimited aligner changes",
      "Includes attachments and IPR",
      "5-year warranty on treatment"
    ],
    suitability: "Severe crowding, complex bite issues, comprehensive treatment",
    popular: true
  },
  {
    option: "Invisalign Moderate",
    price: "From £3,500",
    duration: "6-18 months",
    aligners: "Up to 26 aligners",
    complexity: "Moderate cases",
    description: "Mid-level treatment for moderate alignment issues",
    benefits: [
      "Faster treatment time",
      "Cost-effective option",
      "Includes refinements",
      "Suitable for most cases"
    ],
    suitability: "Moderate crowding, spacing, minor bite corrections"
  },
  {
    option: "Invisalign Lite",
    price: "From £2,800",
    duration: "3-8 months",
    aligners: "Up to 14 aligners",
    complexity: "Minor corrections",
    description: "Quick treatment for minor tooth movements",
    benefits: [
      "Shortest treatment time",
      "Most affordable option",
      "Perfect for minor corrections",
      "Fast visible results"
    ],
    suitability: "Minor crowding, small gaps, relapse cases"
  },
  {
    option: "Invisalign Teen",
    price: "From £4,200",
    duration: "12-24 months",
    aligners: "Unlimited with compliance indicators",
    complexity: "All teenage orthodontic needs",
    description: "Specially designed for teenage patients",
    benefits: [
      "Blue compliance indicators",
      "6 free replacement aligners",
      "Eruption tabs for growing teeth",
      "Designed for teenage lifestyle"
    ],
    suitability: "Teenagers aged 12-17 with various orthodontic needs"
  }
];

const treatmentProcess = [
  {
    stage: "1",
    title: "Initial Consultation",
    description: "Comprehensive assessment and digital planning",
    duration: "60-90 minutes",
    includes: ["3D digital scan", "Photos and X-rays", "Treatment planning", "Cost discussion", "Invisalign suitability assessment"],
    outcome: "Personalized treatment plan with predicted results"
  },
  {
    stage: "2",
    title: "ClinCheck Treatment Plan",
    description: "3D treatment simulation and approval",
    duration: "1-2 weeks",
    includes: ["3D treatment simulation", "Virtual result preview", "Treatment timeline", "Plan approval", "Aligner manufacturing"],
    outcome: "Approved treatment plan and aligner production"
  },
  {
    stage: "3",
    title: "Aligner Delivery",
    description: "First aligners fitted with attachments if needed",
    duration: "60 minutes",
    includes: ["Aligner fitting", "Attachment placement", "Usage instructions", "Cleaning guidance", "Next appointment"],
    outcome: "Treatment begins with first aligners"
  },
  {
    stage: "4",
    title: "Progress Monitoring",
    description: "Regular check-ups throughout treatment",
    duration: "6-8 week intervals",
    includes: ["Progress assessment", "New aligner sets", "Attachment adjustments", "IPR if needed", "Problem solving"],
    outcome: "Smooth treatment progression"
  },
  {
    stage: "5",
    title: "Treatment Completion",
    description: "Final results and retention planning",
    duration: "60 minutes",
    includes: ["Final assessment", "Attachment removal", "Retainer fitting", "Maintenance planning", "Long-term care"],
    outcome: "Beautiful straight smile with retention plan"
  }
];

const faqs = [
  {
    question: "How much does Invisalign cost?",
    answer: "Invisalign treatment ranges from £2,800 for Invisalign Lite to £4,500 for Comprehensive treatment. The exact cost depends on your case complexity and treatment duration. We offer payment plans to make treatment affordable, and many dental insurance plans cover orthodontic treatment."
  },
  {
    question: "How long does Invisalign treatment take?",
    answer: "Treatment time varies from 3-24 months depending on case complexity. Minor corrections may take just 3-8 months with Invisalign Lite, while comprehensive cases typically take 12-24 months. Your personalized timeline will be established during your consultation."
  },
  {
    question: "Is Invisalign as effective as traditional braces?",
    answer: "Yes, Invisalign is highly effective for most orthodontic issues. Clinical studies show Invisalign achieves comparable results to traditional braces for the vast majority of cases. The 3D treatment planning also makes results more predictable."
  },
  {
    question: "How often do I need to wear the aligners?",
    answer: "Aligners must be worn 20-22 hours per day for optimal results. They should only be removed for eating, drinking (except water), and oral hygiene. Consistent wear is crucial for staying on track with your treatment timeline."
  },
  {
    question: "Do Invisalign aligners hurt?",
    answer: "You may experience mild discomfort for the first few days with each new aligner set as teeth begin to move. This is normal and indicates the treatment is working. The discomfort is typically much less than traditional braces and can be managed with over-the-counter pain relief if needed."
  },
  {
    question: "Will anyone be able to see my Invisalign aligners?",
    answer: "Invisalign aligners are virtually invisible. Most people won't notice you're wearing them unless they look very closely. This makes Invisalign perfect for adults and teens who want to straighten their teeth discreetly."
  }
];

export default function InvisalignPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-600 text-white">
                <Eye className="w-4 h-4 mr-2" />
                Virtually Invisible Orthodontics
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Invisalign
                <span className="block text-blue-600">Clear Aligners</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Straighten your teeth invisibly with Invisalign, the world's most advanced
                clear aligner system. Get the smile you've always wanted without anyone knowing you're having treatment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Call 0115 931 2935
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">£2,800</div>
                  <div className="text-sm text-gray-600">From</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Invisible</div>
                  <div className="text-sm text-gray-600">Treatment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">6-24 months</div>
                  <div className="text-sm text-gray-600">Treatment Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Removable</div>
                  <div className="text-sm text-gray-600">For Eating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">INVISALIGN TREATMENT</h3>
                    <p className="text-gray-600">Virtually invisible aligners</p>
                  </div>
                </div>
              </Card>

              {/* Social Proof Sticker */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-4 py-2 shadow-lg transform -rotate-12">
                <div className="text-center">
                  <div className="text-sm font-bold">PERFECTED BY</div>
                  <div className="text-lg font-extrabold">289+</div>
                  <div className="text-xs">INVISIBLE JOURNEYS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invisalign Treatment Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Invisalign Treatment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right Invisalign package based on your orthodontic needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {invisalignTreatmentOptions.map((option, index) => (
              <Card key={index} className={`${option.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{option.option}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{option.price}</div>
                      <div className="text-sm text-gray-500">{option.duration}</div>
                    </div>
                  </div>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Aligners:</span>
                        <div className="font-medium">{option.aligners}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Complexity:</span>
                        <div className="font-medium">{option.complexity}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {option.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-3 rounded border">
                      <h4 className="font-semibold mb-1">Best for:</h4>
                      <p className="text-sm text-gray-700">{option.suitability}</p>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More About {option.option.split(' ')[1]}
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
              Your Invisalign Journey
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to your perfect smile in 5 carefully planned stages
            </p>
          </div>

          <div className="space-y-8">
            {treatmentProcess.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-20 bg-blue-600 flex items-center justify-center">
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
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded">
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
              Common questions about Invisalign treatment
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Your Invisible Smile Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your journey to a straighter smile with Invisalign. Book a consultation
            to see your personalized treatment plan and discover how Invisalign can transform your smile invisibly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <CalendarDays className="w-5 h-5 mr-2" />
              Book Invisalign Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Call 0115 931 2935
            </Button>
          </div>

          <div className="text-blue-100 space-y-2">
            <p className="font-medium">Virtually invisible • Removable aligners • Predictable results</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
