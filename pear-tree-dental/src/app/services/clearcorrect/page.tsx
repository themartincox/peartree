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
  title: "ClearCorrect Burton Joyce | Affordable Clear Aligners from £2,500",
  description: "ClearCorrect clear aligners in Burton Joyce. Affordable alternative to Invisalign with excellent results. Straighten teeth invisibly from £2,500.",
  keywords: [
    "ClearCorrect Burton Joyce",
    "clear aligners Nottingham",
    "Invisalign alternative Burton Joyce",
    "teeth straightening Nottinghamshire",
    "affordable orthodontics Burton Joyce",
    "ClearCorrect cost Nottingham",
    "clear braces Burton Joyce"
  ],
  openGraph: {
    title: "ClearCorrect Clear Aligners | Pear Tree Dental",
    description: "Affordable ClearCorrect clear aligners - excellent alternative to Invisalign from £2,500",
    type: "website",
    url: "https://peartreedental.co.uk/services/clearcorrect"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/services/clearcorrect"
  }
};

const clearCorrectOptions = [
  {
    option: "ClearCorrect Unlimited",
    price: "From £3,200",
    duration: "12-24 months",
    aligners: "Unlimited aligners included",
    complexity: "Complex cases",
    description: "Comprehensive treatment for complex orthodontic issues",
    benefits: [
      "Treats all orthodontic conditions",
      "Unlimited aligner changes",
      "Includes all refinements",
      "Comprehensive treatment plan"
    ],
    suitability: "Complex crowding, bite issues, comprehensive treatment",
    popular: true
  },
  {
    option: "ClearCorrect Limited",
    price: "From £2,500",
    duration: "6-12 months",
    aligners: "Up to 24 aligners",
    complexity: "Moderate cases",
    description: "Cost-effective treatment for moderate alignment issues",
    benefits: [
      "Excellent value for money",
      "Suitable for most cases",
      "Professional results",
      "Shorter treatment time"
    ],
    suitability: "Moderate crowding, spacing, minor bite corrections"
  },
  {
    option: "ClearCorrect Express",
    price: "From £1,800",
    duration: "3-6 months",
    aligners: "Up to 12 aligners",
    complexity: "Minor corrections",
    description: "Quick solution for minor tooth movements",
    benefits: [
      "Most affordable option",
      "Fast visible results",
      "Minimal disruption",
      "Perfect for touch-ups"
    ],
    suitability: "Minor crowding, small gaps, relapse treatment"
  }
];

const treatmentProcess = [
  {
    stage: "1",
    title: "Initial Assessment",
    description: "Comprehensive evaluation and treatment planning",
    duration: "60 minutes",
    includes: ["3D digital scanning", "Photos and records", "Treatment planning", "Cost discussion", "Suitability assessment"],
    outcome: "Personalized ClearCorrect treatment plan"
  },
  {
    stage: "2",
    title: "Treatment Design",
    description: "Custom aligner design and manufacturing",
    duration: "2-3 weeks",
    includes: ["3D treatment simulation", "Virtual result preview", "Treatment approval", "Aligner manufacturing", "Quality control"],
    outcome: "Custom ClearCorrect aligners ready"
  },
  {
    stage: "3",
    title: "Aligner Delivery",
    description: "First aligners fitted with instructions",
    duration: "45 minutes",
    includes: ["Aligner fitting", "Usage instructions", "Care guidelines", "Progress tracking", "Next appointment"],
    outcome: "Treatment begins with first aligners"
  },
  {
    stage: "4",
    title: "Regular Monitoring",
    description: "Progress check-ups throughout treatment",
    duration: "8-10 week intervals",
    includes: ["Progress assessment", "New aligner delivery", "Problem resolution", "Oral health check", "Motivation support"],
    outcome: "Steady progress towards straight smile"
  },
  {
    stage: "5",
    title: "Completion & Retention",
    description: "Treatment completion and retention planning",
    duration: "45 minutes",
    includes: ["Final assessment", "Before/after comparison", "Retainer fitting", "Maintenance planning", "Long-term care"],
    outcome: "Beautiful straight smile with retention plan"
  }
];

const clearCorrectVsInvisalign = [
  {
    aspect: "Cost",
    clearcorrect: "£1,800 - £3,200",
    invisalign: "£2,800 - £4,500",
    advantage: "ClearCorrect - More affordable"
  },
  {
    aspect: "Treatment Time",
    clearcorrect: "3-24 months",
    invisalign: "6-24 months",
    advantage: "Similar timeframes"
  },
  {
    aspect: "Effectiveness",
    clearcorrect: "Excellent for most cases",
    invisalign: "Excellent for most cases",
    advantage: "Both highly effective"
  },
  {
    aspect: "Comfort",
    clearcorrect: "Smooth, comfortable plastic",
    invisalign: "Smooth, comfortable plastic",
    advantage: "Both very comfortable"
  },
  {
    aspect: "Appearance",
    clearcorrect: "Virtually invisible",
    invisalign: "Virtually invisible",
    advantage: "Both nearly invisible"
  },
  {
    aspect: "Compliance",
    clearcorrect: "20-22 hours per day",
    invisalign: "20-22 hours per day",
    advantage: "Same requirements"
  }
];

const faqs = [
  {
    question: "How does ClearCorrect compare to Invisalign?",
    answer: "ClearCorrect offers similar results to Invisalign but at a more affordable price point. Both use clear, removable aligners and require similar wear time. The main difference is cost - ClearCorrect typically costs £500-£1,000 less than Invisalign while delivering excellent results."
  },
  {
    question: "Is ClearCorrect as effective as traditional braces?",
    answer: "Yes, ClearCorrect is highly effective for treating most orthodontic issues including crowding, spacing, and bite problems. Clinical studies show excellent results comparable to traditional braces, with the added benefits of being removable and virtually invisible."
  },
  {
    question: "How much does ClearCorrect cost?",
    answer: "ClearCorrect treatment ranges from £1,800 for Express treatment to £3,200 for Unlimited treatment. The exact cost depends on your case complexity and treatment duration. We offer payment plans to make treatment more affordable."
  },
  {
    question: "How long does ClearCorrect treatment take?",
    answer: "Treatment time varies from 3 months for minor corrections with ClearCorrect Express to 24 months for complex cases with ClearCorrect Unlimited. Most cases are completed within 12-18 months. Your specific timeline will be discussed during consultation."
  },
  {
    question: "Will anyone notice I'm wearing ClearCorrect aligners?",
    answer: "ClearCorrect aligners are virtually invisible and made from clear, medical-grade plastic. Most people won't notice you're wearing them unless they look very closely, making them perfect for adults and teens who want discreet treatment."
  },
  {
    question: "Can I eat and drink with ClearCorrect aligners?",
    answer: "You should remove ClearCorrect aligners when eating or drinking anything other than water. This prevents staining and damage to the aligners. One of the main advantages is no food restrictions since aligners are removable for meals."
  }
];

export default function ClearCorrectPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-green-600 text-white">
                <Eye className="w-4 h-4 mr-2" />
                Affordable Clear Aligners
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                ClearCorrect
                <span className="block text-green-600">Clear Aligners</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Get the same great results as Invisalign at a more affordable price.
                ClearCorrect clear aligners straighten your teeth invisibly with excellent results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Call 0115 931 2525
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">£1,800</div>
                  <div className="text-sm text-gray-600">From</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">Invisible</div>
                  <div className="text-sm text-gray-600">Treatment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">3-24 months</div>
                  <div className="text-sm text-gray-600">Treatment Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">Affordable</div>
                  <div className="text-sm text-gray-600">Alternative</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">CLEARCORRECT TREATMENT</h3>
                    <p className="text-gray-600">Affordable clear aligners</p>
                  </div>
                </div>
              </Card>

              {/* Social Proof Sticker */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full px-4 py-2 shadow-lg transform rotate-12">
                <div className="text-center">
                  <div className="text-sm font-bold">LOVED BY</div>
                  <div className="text-lg font-extrabold">164+</div>
                  <div className="text-xs">SMART CHOICES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ClearCorrect Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ClearCorrect Treatment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right ClearCorrect package for your orthodontic needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {clearCorrectOptions.map((option, index) => (
              <Card key={index} className={`${option.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{option.option}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{option.price}</div>
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
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded border">
                      <h4 className="font-semibold mb-1">Best for:</h4>
                      <p className="text-sm text-gray-700">{option.suitability}</p>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Choose {option.option.split(' ')[1]}
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
              Your ClearCorrect Journey
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to your perfect smile in 5 carefully planned stages
            </p>
          </div>

          <div className="space-y-8">
            {treatmentProcess.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-20 bg-green-600 flex items-center justify-center">
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
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded">
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

      {/* ClearCorrect vs Invisalign Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ClearCorrect vs Invisalign
            </h2>
            <p className="text-xl text-gray-600">
              Compare the two leading clear aligner systems
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
              <CardTitle className="text-xl">Treatment Comparison</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Aspect</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-green-600">ClearCorrect</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-blue-600">Invisalign</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {clearCorrectVsInvisalign.map((comparison, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{comparison.aspect}</td>
                        <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">{comparison.clearcorrect}</td>
                        <td className="px-4 py-3 text-sm text-center text-blue-600 font-medium">{comparison.invisalign}</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-600 font-medium">{comparison.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about ClearCorrect treatment
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Affordable Clear Aligner Treatment?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get excellent results at a more affordable price with ClearCorrect.
            Book a consultation to see if ClearCorrect clear aligners are right for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <CalendarDays className="w-5 h-5 mr-2" />
              Book ClearCorrect Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Call 0115 931 2525
            </Button>
          </div>

          <div className="text-green-100 space-y-2">
            <p className="font-medium">Affordable alternative • Virtually invisible • Excellent results</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
