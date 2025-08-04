import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Heart,
  Zap,
  Target,
  Award,
  Star,
  ShieldCheck
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppWidget";
import ServiceStructuredData, { serviceData } from "@/components/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Professional Teeth Whitening | Brighten Your Smile Burton Joyce - Pear Tree Dental",
  description: "Professional teeth whitening in Burton Joyce. Safe, effective treatments for a brighter smile. Custom whitening trays and in-practice treatment available.",
};

const whiteningOptions = [
  {
    type: "Enlighten Whitening",
    description: "The most effective whitening system guaranteed to work",
    duration: "2-3 weeks treatment",
    results: "Up to 16 shades whiter",
    guarantee: "Guaranteed B1 shade or your money back",
    process: "Home whitening with custom trays for 2 weeks",
    advantages: [
      "Guaranteed results to B1 shade",
      "Longest lasting whitening available",
      "No sensitivity with proper use",
      "Works on tetracycline staining",
      "Lifetime guarantee available"
    ],
    cost: "£650",
    popular: true,
    suitable: "All patients including severe staining"
  },
  {
    type: "Professional Home Whitening",
    description: "Custom-made trays with professional whitening gel",
    duration: "1-2 weeks treatment",
    results: "3-8 shades whiter",
    guarantee: "Visible improvement guaranteed",
    process: "Wear custom trays with gel for prescribed time",
    advantages: [
      "Convenient home treatment",
      "Custom-fitted comfortable trays",
      "Professional strength gel",
      "Gradual, natural-looking results",
      "Top-up treatments available"
    ],
    cost: "£400",
    suitable: "Most patients with natural teeth"
  },
  {
    type: "Combination Treatment",
    description: "In-practice activation followed by home maintenance",
    duration: "1 session + 1 week home",
    results: "5-10 shades whiter",
    guarantee: "Enhanced results guaranteed",
    process: "In-practice treatment then home maintenance",
    advantages: [
      "Fastest initial results",
      "Professional supervision",
      "Long-lasting effects",
      "Customizable intensity",
      "Immediate visible improvement"
    ],
    cost: "£550",
    suitable: "Patients wanting quick dramatic results"
  },
  {
    type: "Maintenance Program",
    description: "Ongoing whitening for existing patients",
    duration: "Ongoing as needed",
    results: "Maintain current shade",
    guarantee: "Consistent shade maintenance",
    process: "Periodic gel top-ups with existing trays",
    advantages: [
      "Cost-effective maintenance",
      "Use existing custom trays",
      "Prevent shade relapse",
      "Flexible scheduling",
      "Professional monitoring"
    ],
    cost: "£150 per kit",
    suitable: "Previous whitening patients"
  }
];

const beforeAfterShades = [
  {
    beforeShade: "C4 (Dark Yellow)",
    afterShade: "B1 (Brightest Natural)",
    improvement: "16 shades whiter",
    treatment: "Enlighten Whitening",
    timeframe: "2-3 weeks"
  },
  {
    beforeShade: "A3 (Medium Yellow)",
    afterShade: "A1 (Light Natural)",
    improvement: "8 shades whiter",
    treatment: "Professional Home Whitening",
    timeframe: "1-2 weeks"
  },
  {
    beforeShade: "B3 (Medium Grey)",
    afterShade: "B1 (Light Natural)",
    improvement: "6 shades whiter",
    treatment: "Combination Treatment",
    timeframe: "1 week"
  }
];

const treatmentProcess = [
  {
    stage: "1",
    title: "Consultation & Assessment",
    description: "Comprehensive evaluation of your teeth and expectations",
    duration: "30 minutes",
    includes: ["Shade assessment", "Oral health check", "Treatment planning", "Expectation setting", "Option selection"],
    outcome: "Personalized whitening plan"
  },
  {
    stage: "2",
    title: "Custom Tray Creation",
    description: "Precise impressions for perfectly fitting whitening trays",
    duration: "20 minutes",
    includes: ["Detailed impressions", "Bite registration", "Tray design", "Comfort optimization", "Fit verification"],
    outcome: "Custom-fitted whitening trays"
  },
  {
    stage: "3",
    title: "Whitening Instruction",
    description: "Detailed guidance on proper whitening technique",
    duration: "15 minutes",
    includes: ["Gel application technique", "Timing instructions", "Safety precautions", "Sensitivity management", "Progress monitoring"],
    outcome: "Confident home whitening"
  },
  {
    stage: "4",
    title: "Progress Monitoring",
    description: "Regular check-ins to ensure optimal results",
    duration: "10 minutes",
    includes: ["Shade progress checks", "Sensitivity assessment", "Technique refinement", "Motivation support", "Schedule adjustment"],
    outcome: "Optimized treatment progress"
  },
  {
    stage: "5",
    title: "Final Results",
    description: "Assessment of final shade and aftercare planning",
    duration: "20 minutes",
    includes: ["Final shade measurement", "Results documentation", "Maintenance planning", "Aftercare instructions", "Future touch-ups"],
    outcome: "Bright, confident smile"
  }
];

const whiteningMythsVsFacts = [
  {
    myth: "Whitening damages tooth enamel",
    fact: "Professional whitening is safe and doesn't damage enamel",
    explanation: "Professional whitening gels work by opening enamel pores to release stains, then rehydrating the tooth. Studies show no enamel damage when used as directed."
  },
  {
    myth: "Whitening makes teeth permanently sensitive",
    fact: "Any sensitivity is temporary and manageable",
    explanation: "Sensitivity typically lasts 24-48 hours after treatment. Professional products include desensitizing agents, and we provide guidance to minimize discomfort."
  },
  {
    myth: "All whitening products give the same results",
    fact: "Professional treatments are significantly more effective",
    explanation: "Professional gels contain higher concentrations of active ingredients and custom trays ensure even coverage. Over-the-counter products are much weaker."
  },
  {
    myth: "Whitening results are immediate",
    fact: "Best results develop gradually over 1-3 weeks",
    explanation: "While some improvement is visible immediately, optimal results develop as stains are gradually lifted from deep within the tooth structure."
  }
];

const stainingCauses = [
  {
    category: "Food & Beverages",
    items: ["Coffee", "Tea", "Red wine", "Berries", "Curry", "Tomato sauce"],
    prevention: "Use straws, rinse after consuming, wait 1 hour before brushing",
    severity: "Moderate to Heavy"
  },
  {
    category: "Lifestyle Habits",
    items: ["Smoking", "Tobacco use", "Poor oral hygiene", "Mouth breathing"],
    prevention: "Quit tobacco, maintain excellent oral hygiene, address dry mouth",
    severity: "Heavy to Severe"
  },
  {
    category: "Medications",
    items: ["Tetracycline", "Fluorosis", "Iron supplements", "Chlorhexidine"],
    prevention: "Take medications with food, use fluoride appropriately",
    severity: "Moderate to Severe"
  },
  {
    category: "Natural Aging",
    items: ["Enamel thinning", "Dentin yellowing", "Surface wear", "Genetic factors"],
    prevention: "Professional whitening, good oral care, avoid excessive wear",
    severity: "Gradual"
  }
];

const aftercareInstructions = [
  {
    timeframe: "First 48 Hours",
    instructions: [
      "Avoid staining foods and drinks completely",
      "No coffee, tea, red wine, or dark sodas",
      "Stick to white/clear foods only",
      "Use sensitive toothpaste if needed",
      "Avoid extremely hot or cold foods"
    ],
    foods: {
      avoid: ["Coffee", "Tea", "Wine", "Berries", "Chocolate", "Colored sauces"],
      recommended: ["White fish", "Chicken", "Rice", "Pasta", "White bread", "Clear soups"]
    }
  },
  {
    timeframe: "First Week",
    instructions: [
      "Gradually reintroduce staining foods",
      "Use a straw for colored beverages",
      "Rinse mouth after eating/drinking staining items",
      "Continue with sensitive toothpaste",
      "Maintain excellent oral hygiene"
    ],
    foods: {
      avoid: ["Heavy staining foods", "Excessive coffee/tea", "Dark sodas"],
      recommended: ["Light-colored foods", "Water", "Milk", "White wine (limited)"]
    }
  },
  {
    timeframe: "Long-term Maintenance",
    instructions: [
      "Use whitening toothpaste 2-3 times per week",
      "Professional cleaning every 6 months",
      "Touch-up whitening as needed (usually yearly)",
      "Avoid excessive staining habits",
      "Regular dental check-ups"
    ],
    foods: {
      avoid: ["Excessive staining foods", "Tobacco products"],
      recommended: ["Balanced diet", "Plenty of water", "Calcium-rich foods"]
    }
  }
];

const candidacyAssessment = [
  {
    condition: "Ideal Candidates",
    description: "Patients who will achieve excellent results",
    criteria: [
      "Healthy teeth and gums",
      "Yellow/brown staining",
      "Realistic expectations",
      "Good oral hygiene",
      "No recent dental work on front teeth"
    ],
    expectedResults: "8-16 shades improvement"
  },
  {
    condition: "Good Candidates",
    description: "Patients who will see significant improvement",
    criteria: [
      "Minor sensitivity issues",
      "Some existing restorations",
      "Mild tetracycline staining",
      "Slightly worn enamel",
      "Commitment to aftercare"
    ],
    expectedResults: "4-8 shades improvement"
  },
  {
    condition: "Limited Candidates",
    description: "Patients who may see some improvement",
    criteria: [
      "Severe tetracycline staining",
      "Many front restorations",
      "Intrinsic grey staining",
      "Significant enamel loss",
      "Unrealistic expectations"
    ],
    expectedResults: "2-4 shades improvement"
  },
  {
    condition: "Not Suitable",
    description: "Patients who should consider alternatives",
    criteria: [
      "Pregnant or breastfeeding",
      "Under 16 years old",
      "Active tooth decay",
      "Severe gum disease",
      "Allergies to whitening ingredients"
    ],
    expectedResults: "Consider alternatives first"
  }
];

const faqs = [
  {
    question: "How much does professional teeth whitening cost?",
    answer: "Professional home whitening starts from £400, while our premium Enlighten Whitening system costs £650 and comes with a guarantee to reach B1 shade or your money back. Combination treatments cost £550, and maintenance kits are £150."
  },
  {
    question: "How long do teeth whitening results last?",
    answer: "Professional whitening results typically last 1-3 years depending on your diet and habits. Enlighten whitening can last even longer with proper maintenance. Touch-up treatments can extend results indefinitely."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening is completely safe when performed by qualified dental professionals. Our whitening gels are pH neutral and contain desensitizing agents to minimize sensitivity while protecting your enamel."
  },
  {
    question: "Will whitening work on my crowns and fillings?",
    answer: "Whitening only works on natural tooth structure, not on crowns, fillings, or veneers. We assess your existing restorations during consultation and may recommend replacement after whitening to match your new shade."
  },
  {
    question: "How white can my teeth get?",
    answer: "Results vary by individual, but most patients achieve 3-8 shades whiter with standard treatment. Enlighten whitening can achieve up to 16 shades whiter and guarantees reaching the B1 shade (brightest natural shade on the dental scale)."
  },
  {
    question: "Does teeth whitening cause sensitivity?",
    answer: "Some patients experience temporary sensitivity during or after whitening. We use desensitizing gels and provide specific instructions to minimize discomfort. Any sensitivity typically resolves within 24-48 hours after treatment."
  }
];

export default function TeethWhiteningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData {...serviceData.teethWhitening} />

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
                Professional
                <span className="block text-yellow-600">Teeth Whitening</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your smile with safe, professional teeth whitening.
                Achieve dramatic results up to 16 shades whiter with our guaranteed Enlighten system.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-yellow-600" />
                  <div>
                    <div className="font-bold text-yellow-800">ENLIGHTEN GUARANTEE</div>
                    <div className="text-yellow-700 text-sm">Guaranteed to reach B1 shade or your money back!</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white">
                  Call 0115 931 2525
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-600">£400</div>
                  <div className="text-sm text-gray-600">From</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">16 Shades</div>
                  <div className="text-sm text-gray-600">Whiter</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">2-3 Weeks</div>
                  <div className="text-sm text-gray-600">Treatment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">Guaranteed</div>
                  <div className="text-sm text-gray-600">Results</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">TEETH WHITENING</h3>
                    <p className="text-gray-600">Professional smile transformation</p>
                  </div>
                </div>
              </Card>

              {/* Guarantee badge */}
              <Card className="absolute -top-4 -right-4 bg-yellow-600 text-white p-3 shadow-lg">
                <div className="text-center">
                  <Award className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-bold">MONEY BACK</p>
                  <p className="text-xs">GUARANTEE</p>
                </div>
              </Card>
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
              Choose the whitening treatment that best suits your needs and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whiteningOptions.map((option, index) => (
              <Card key={index} className={`${option.popular ? 'ring-2 ring-yellow-600 scale-105' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{option.type}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600">{option.cost}</div>
                      <div className="text-sm text-gray-500">{option.duration}</div>
                    </div>
                  </div>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Results:</span>
                      <div className="font-medium">{option.results}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Suitable for:</span>
                      <div className="font-medium">{option.suitable}</div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                    <h4 className="font-semibold mb-1 text-yellow-800">Guarantee:</h4>
                    <p className="text-sm text-yellow-700">{option.guarantee}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Advantages:</h4>
                    <ul className="space-y-1">
                      {option.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                          <span className="text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
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
              Whitening Treatment Process
            </h2>
            <p className="text-xl text-gray-600">
              Step-by-step journey to your brightest smile
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

      {/* Before/After Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Whitening Results Examples
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic improvements achieved with professional whitening
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfterShades.map((result, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Badge className="mx-auto bg-yellow-600 text-white mb-2">
                    {result.improvement}
                  </Badge>
                  <CardTitle className="text-lg">{result.treatment}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 p-4 rounded">
                        <h4 className="font-semibold text-gray-800 mb-1">Before</h4>
                        <p className="text-sm text-gray-600">{result.beforeShade}</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded">
                        <h4 className="font-semibold text-yellow-800 mb-1">After</h4>
                        <p className="text-sm text-yellow-700">{result.afterShade}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Treatment time:</strong> {result.timeframe}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Whitening Myths vs Facts
            </h2>
            <p className="text-xl text-gray-600">
              Get the truth about professional teeth whitening
            </p>
          </div>

          <div className="space-y-6">
            {whiteningMythsVsFacts.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded border border-red-200">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-white text-xs font-bold">✗</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-red-800 mb-2">MYTH</h3>
                          <p className="text-red-700">{item.myth}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded border border-green-200">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-green-800 mb-2">FACT</h3>
                          <p className="text-green-700">{item.fact}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
                    <p className="text-blue-700 text-sm">{item.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare Instructions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Post-Whitening Care
            </h2>
            <p className="text-xl text-gray-600">
              Maintain your bright smile with proper aftercare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aftercareInstructions.map((period, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-yellow-600 text-lg mb-4">{period.timeframe}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Instructions:</h4>
                    <ul className="space-y-2">
                      {period.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-red-50 p-2 rounded">
                      <h5 className="font-semibold text-red-800 mb-1">Avoid:</h5>
                      <div className="space-y-1">
                        {period.foods.avoid.map((food, idx) => (
                          <div key={idx} className="text-red-700">• {food}</div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <h5 className="font-semibold text-green-800 mb-1">Recommended:</h5>
                      <div className="space-y-1">
                        {period.foods.recommended.map((food, idx) => (
                          <div key={idx} className="text-green-700">• {food}</div>
                        ))}
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-gray-900 mb-4">
              Whitening Questions
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
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a Brighter Smile?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Transform your confidence with professional teeth whitening.
            Guaranteed results up to 16 shades whiter with our Enlighten system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
              Call 0115 931 2525
            </Button>
          </div>

          <div className="text-yellow-100 space-y-2">
            <p className="font-medium">✨ Guaranteed results • Professional supervision • Money-back guarantee • 20% membership discount</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
