import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Heart,
  Sparkles,
  Target,
  Award,
  Zap,
  Activity
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppWidget";
import ServiceStructuredData from '@/components/seo/ServiceStructuredData';
export const metadata: Metadata = {
  title: "White Dental Fillings | Tooth-Coloured Fillings Burton Joyce - Pear Tree Dental",
  description: "Modern white dental fillings in Burton Joyce. Natural-looking, mercury-free composite fillings. Replace old amalgam fillings with tooth-coloured alternatives.",
};

const fillingTypes = [
  {
    type: "Composite Resin Fillings",
    material: "Tooth-coloured composite resin",
    appearance: "Virtually invisible, matches natural tooth colour",
    durability: "5-10 years with proper care",
    suitability: "Small to medium cavities, front and back teeth",
    advantages: [
      "Natural appearance blends seamlessly",
      "Bonds directly to tooth structure",
      "Preserves more natural tooth",
      "Mercury-free and safe",
      "Can be repaired if damaged"
    ],
    cost: "From £200",
    popular: true
  },
  {
    type: "Ceramic Inlays/Onlays",
    material: "High-strength dental ceramic",
    appearance: "Excellent colour matching and translucency",
    durability: "10-15 years with excellent longevity",
    suitability: "Larger cavities requiring more strength",
    advantages: [
      "Superior strength and durability",
      "Excellent stain resistance",
      "Precise fit with lab fabrication",
      "Biocompatible material",
      "Minimal shrinkage"
    ],
    cost: "From £400"
  },
  {
    type: "Glass Ionomer Fillings",
    material: "Glass particles in acrylic acid",
    appearance: "Tooth-coloured but less translucent",
    durability: "3-5 years, suitable for specific uses",
    suitability: "Root surface cavities, children's teeth",
    advantages: [
      "Releases fluoride for cavity prevention",
      "Good for patients with high decay risk",
      "Bonds well to tooth structure",
      "Less technique sensitive",
      "Good for temporary restorations"
    ],
    cost: "From £195"
  },
  {
    type: "Amalgam Replacement",
    material: "Removing old silver fillings",
    appearance: "Replacing with tooth-coloured alternatives",
    durability: "Depends on replacement material chosen",
    suitability: "Updating old silver fillings for aesthetics",
    advantages: [
      "Improved appearance immediately",
      "Remove mercury-containing material",
      "Strengthen weakened teeth",
      "Prevent further tooth cracking",
      "Modern materials last longer"
    ],
    cost: "From £200"
  }
];

const treatmentProcess = [
  {
    stage: "1",
    title: "Examination & Diagnosis",
    description: "Thorough assessment of decay and treatment planning",
    duration: "15-20 minutes",
    includes: ["Visual examination", "Digital X-rays if needed", "Decay extent assessment", "Treatment options discussion", "Cost estimation"],
    outcome: "Clear treatment plan with realistic expectations"
  },
  {
    stage: "2",
    title: "Local Anaesthetic",
    description: "Comfortable numbing for pain-free treatment",
    duration: "5-10 minutes",
    includes: ["Topical anaesthetic application", "Local injection", "Numbness verification", "Comfort confirmation", "Anxiety management"],
    outcome: "Complete numbness and patient comfort"
  },
  {
    stage: "3",
    title: "Decay Removal",
    description: "Careful removal of decayed tooth material",
    duration: "10-20 minutes",
    includes: ["Precise decay removal", "Healthy tissue preservation", "Cavity preparation", "Disinfection", "Moisture control"],
    outcome: "Clean, prepared cavity ready for filling"
  },
  {
    stage: "4",
    title: "Filling Placement",
    description: "Precise placement of tooth-coloured filling",
    duration: "15-30 minutes",
    includes: ["Bonding agent application", "Layer-by-layer filling", "Light curing", "Shaping and contouring", "Bite adjustment"],
    outcome: "Natural-looking, functional restoration"
  },
  {
    stage: "5",
    title: "Final Polishing",
    description: "Finishing touches for optimal comfort and appearance",
    duration: "5-10 minutes",
    includes: ["Surface smoothing", "Final bite check", "Polish application", "Care instructions", "Follow-up scheduling"],
    outcome: "Smooth, comfortable, natural-looking result"
  }
];

const whiteVsAmalgam = [
  {
    aspect: "Appearance",
    white: "Tooth-coloured, virtually invisible",
    amalgam: "Silver/grey, highly noticeable",
    advantage: "White fillings"
  },
  {
    aspect: "Mercury Content",
    white: "Mercury-free, completely safe",
    amalgam: "Contains mercury (safety debated)",
    advantage: "White fillings"
  },
  {
    aspect: "Tooth Preservation",
    white: "Minimal tooth removal required",
    amalgam: "More tooth structure removed",
    advantage: "White fillings"
  },
  {
    aspect: "Bonding",
    white: "Bonds directly to tooth",
    amalgam: "Mechanical retention only",
    advantage: "White fillings"
  },
  {
    aspect: "Durability",
    white: "5-10 years average",
    amalgam: "10-15 years average",
    advantage: "Amalgam (slight edge)"
  },
  {
    aspect: "Cost",
    white: "Higher initial cost",
    amalgam: "Lower initial cost",
    advantage: "Amalgam (initial cost)"
  },
  {
    aspect: "Repairability",
    white: "Easily repaired and extended",
    amalgam: "Usually requires complete replacement",
    advantage: "White fillings"
  },
  {
    aspect: "Temperature Sensitivity",
    white: "Minimal thermal expansion",
    amalgam: "Expands/contracts with temperature",
    advantage: "White fillings"
  }
];

const afterCareInstructions = [
  {
    timeframe: "First 2 Hours",
    instructions: [
      "Avoid eating while numb to prevent biting tongue/cheek",
      "Drink cool or room temperature liquids only",
      "Avoid very hot foods and drinks",
      "Take any prescribed pain medication as directed",
      "Rest and avoid strenuous activity"
    ],
    whatToExpect: "Numbness wearing off, mild sensitivity possible"
  },
  {
    timeframe: "First 24 Hours",
    instructions: [
      "Eat soft foods and chew on opposite side",
      "Avoid sticky, hard, or chewy foods",
      "Maintain gentle oral hygiene",
      "Use lukewarm water for rinsing",
      "Avoid alcohol and smoking"
    ],
    whatToExpect: "Some sensitivity to temperature or pressure"
  },
  {
    timeframe: "First Week",
    instructions: [
      "Gradually return to normal diet",
      "Monitor bite - contact us if feels high",
      "Continue careful oral hygiene",
      "Avoid excessive force when chewing",
      "Watch for any unusual symptoms"
    ],
    whatToExpected: "Sensitivity should decrease, normal function returns"
  },
  {
    timeframe: "Long-term Care",
    instructions: [
      "Maintain excellent oral hygiene",
      "Regular dental check-ups every 6 months",
      "Avoid grinding or clenching teeth",
      "Use fluoride toothpaste daily",
      "Report any problems immediately"
    ],
    whatToExpect: "Filling should feel completely natural"
  }
];

const warningSignsAfterFilling = [
  {
    symptom: "Severe or Increasing Pain",
    urgency: "Urgent - Same Day",
    description: "Pain that gets worse instead of better",
    possibleCause: "Nerve irritation or infection",
    action: "Contact practice immediately for emergency appointment"
  },
  {
    symptom: "High Bite",
    urgency: "Moderate - Within Days",
    description: "Filling feels too high when biting",
    possibleCause: "Filling needs adjustment",
    action: "Schedule adjustment appointment - quick and easy fix"
  },
  {
    symptom: "Sensitivity Lasting >2 Weeks",
    urgency: "Moderate - Within Week",
    description: "Temperature sensitivity not improving",
    possibleCause: "Deep filling affecting nerve",
    action: "Evaluation needed - may need additional treatment"
  },
  {
    symptom: "Sharp Edge or Rough Surface",
    urgency: "Moderate - Within Days",
    description: "Filling feels rough or has sharp edges",
    possibleCause: "Filling needs smoothing/polishing",
    action: "Quick polishing appointment needed"
  },
  {
    symptom: "Filling Falls Out",
    urgency: "Urgent - Same Day",
    description: "Part or all of filling comes loose",
    possibleCause: "Bonding failure or further decay",
    action: "Emergency appointment to protect tooth"
  }
];

const preventingCavities = [
  {
    strategy: "Effective Oral Hygiene",
    description: "Remove plaque and bacteria that cause decay",
    actions: [
      "Brush twice daily with fluoride toothpaste",
      "Floss daily to clean between teeth",
      "Use antimicrobial mouthwash",
      "Clean tongue regularly",
      "Replace toothbrush every 3 months"
    ],
    effectiveness: "Up to 90% cavity reduction"
  },
  {
    strategy: "Smart Dietary Choices",
    description: "Reduce sugar and acid exposure",
    actions: [
      "Limit sugary snacks and drinks",
      "Choose tooth-friendly foods",
      "Drink water throughout the day",
      "Use straws for acidic beverages",
      "Chew sugar-free gum after meals"
    ],
    effectiveness: "50-70% cavity reduction"
  },
  {
    strategy: "Regular Professional Care",
    description: "Professional monitoring and prevention",
    actions: [
      "6-monthly check-ups and cleaning",
      "Professional fluoride treatments",
      "Early cavity detection",
      "Personalised prevention advice",
      "Risk assessment and management"
    ],
    effectiveness: "80% early detection rate"
  },
  {
    strategy: "Additional Protection",
    description: "Extra preventive measures for high-risk patients",
    actions: [
      "Prescription fluoride toothpaste",
      "Fissure sealants on back teeth",
      "Xylitol products for bacteria control",
      "Saliva substitutes if dry mouth",
      "Custom mouthguards for grinding"
    ],
    effectiveness: "Additional 20-40% protection"
  }
];

const faqs = [
  {
    question: "How long do white fillings last?",
    answer: "White composite fillings typically last 5-10 years with proper care, while ceramic inlays/onlays can last 10-15 years. Longevity depends on size, location, your bite, oral hygiene, and dietary habits. Regular check-ups help monitor filling condition and catch any issues early."
  },
  {
    question: "Are white fillings as strong as silver amalgam fillings?",
    answer: "Modern composite materials are very strong and suitable for most cavities. While amalgam may have a slight edge in durability for very large back teeth fillings, white fillings bond to the tooth structure, actually strengthening the remaining tooth. For most patients, the benefits of white fillings outweigh this small difference."
  },
  {
    question: "How much do white fillings cost?",
    answer: "White composite fillings cost from £200-250 depending on size and complexity. Ceramic inlays/onlays cost from £400-600. While more expensive initially than amalgam, many patients feel the aesthetic and health benefits justify the cost. Our membership plans include 20% discounts on all treatments."
  },
  {
    question: "Is the filling procedure painful?",
    answer: "The procedure is not painful as we use effective local anaesthetic. You may feel pressure or vibration but no pain. Some patients experience mild sensitivity for a few days after treatment, which is normal and usually resolves quickly. We prioritise your comfort throughout the process."
  },
  {
    question: "Can I eat normally after a white filling?",
    answer: "Avoid eating while numb (2-3 hours) to prevent accidentally biting your tongue or cheek. After numbness wears off, you can eat normally, though we recommend starting with softer foods for the first day. The filling is fully set when you leave the practice."
  },
  {
    question: "Should I replace my old silver fillings with white ones?",
    answer: "We don't routinely recommend replacing functioning amalgam fillings unless there are problems like cracks, decay, or aesthetic concerns. However, when amalgam fillings need replacement due to wear or damage, white fillings are an excellent alternative that looks natural and preserves more tooth structure."
  }
];

export default function DentalFillingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData {...serviceData.dentalFillings} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-dental-green-50 via-white to-soft-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-dental-green text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Natural-Looking Restorations
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                White Dental
                <span className="block text-dental-green">Fillings</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Modern tooth-coloured fillings that blend seamlessly with your natural teeth.
                Mercury-free, strong, and aesthetically pleasing alternatives to traditional silver fillings.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white">
                  Call 0115 931 2525
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-dental-green">£200</div>
                  <div className="text-sm text-gray-600">From</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">Invisible</div>
                  <div className="text-sm text-gray-600">Natural Look</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">5-10yrs</div>
                  <div className="text-sm text-gray-600">Durability</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">Mercury</div>
                  <div className="text-sm text-gray-600">Free</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-dental-green-100 to-soft-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-dental-green mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">WHITE FILLINGS</h3>
                    <p className="text-gray-600">Natural-looking restorations</p>
                  </div>
                </div>
              </Card>

              {/* Natural badge */}
              <Card className="absolute -top-4 -right-4 bg-dental-green text-white p-3 shadow-lg">
                <div className="text-center">
                  <Eye className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-bold">NATURAL</p>
                  <p className="text-xs">LOOKING</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of White Fillings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Types of White Fillings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right filling material for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fillingTypes.map((filling, index) => (
              <Card key={index} className={`${filling.popular ? 'ring-2 ring-dental-green scale-105' : ''}`}>
                {filling.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-dental-green text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{filling.type}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dental-green">{filling.cost}</div>
                    </div>
                  </div>
                  <CardDescription>
                    <strong>Material:</strong> {filling.material}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Durability:</span>
                        <div className="font-medium">{filling.durability}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Appearance:</span>
                        <div className="font-medium">{filling.appearance}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Advantages:</h4>
                      <ul className="space-y-1">
                        {filling.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-dental-green flex-shrink-0" />
                            <span className="text-sm">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-dental-green-50 p-3 rounded border">
                      <h4 className="font-semibold mb-1">Best for:</h4>
                      <p className="text-sm text-gray-700">{filling.suitability}</p>
                    </div>
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
              Filling Treatment Process
            </h2>
            <p className="text-xl text-gray-600">
              Comfortable, precise treatment for natural-looking results
            </p>
          </div>

          <div className="space-y-8">
            {treatmentProcess.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-20 bg-dental-green flex items-center justify-center">
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
                              <CheckCircle className="w-4 h-4 text-dental-green" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-dental-green-50 p-4 rounded">
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

      {/* White vs Amalgam Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              White vs Silver Fillings
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive comparison of filling materials
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-dental-green to-soft-blue text-white">
              <CardTitle className="text-xl">Material Comparison</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Aspect</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-dental-green">White Fillings</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Silver Amalgam</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {whiteVsAmalgam.map((comparison, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{comparison.aspect}</td>
                        <td className="px-4 py-3 text-sm text-center text-dental-green font-medium">{comparison.white}</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-600 font-medium">{comparison.amalgam}</td>
                        <td className="px-4 py-3 text-sm text-center font-medium">
                          <Badge variant={comparison.advantage.includes('White') ? 'default' : 'secondary'}
                                 className={comparison.advantage.includes('White') ? 'bg-dental-green' : ''}>
                            {comparison.advantage}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* After Care */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              After Care Instructions
            </h2>
            <p className="text-xl text-gray-600">
              Ensure optimal healing and longevity of your filling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {afterCareInstructions.map((period, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-dental-green text-lg mb-4">{period.timeframe}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Instructions:</h4>
                    <ul className="space-y-2">
                      {period.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-dental-green-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">What to Expect:</h4>
                    <p className="text-sm text-gray-700">{period.whatToExpect}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              When to Contact Us
            </h2>
            <p className="text-xl text-gray-600">
              Warning signs that require professional attention
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {warningSignsAfterFilling.map((warning, index) => (
              <Card key={index} className={`border-l-4 ${
                warning.urgency.includes('Urgent') ? 'border-red-600 bg-red-50' :
                'border-orange-600 bg-orange-50'
              }`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{warning.symptom}</CardTitle>
                    <Badge className={`${
                      warning.urgency.includes('Urgent') ? 'bg-red-600' : 'bg-orange-600'
                    } text-white`}>
                      {warning.urgency.split(' - ')[0]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-700">{warning.description}</p>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold mb-1">Possible Cause:</h4>
                    <p className="text-sm text-gray-700">{warning.possibleCause}</p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Action Required:</h4>
                    <p className="text-sm text-gray-700">{warning.action}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preventing Future Cavities
            </h2>
            <p className="text-xl text-gray-600">
              Strategies to keep your teeth healthy and avoid future fillings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {preventingCavities.map((strategy, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-gray-900">{strategy.strategy}</h3>
                  <Badge className="bg-dental-green text-white">{strategy.effectiveness}</Badge>
                </div>

                <p className="text-gray-600 mb-4">{strategy.description}</p>

                <div>
                  <h4 className="font-semibold mb-2">Action Steps:</h4>
                  <ul className="space-y-2">
                    {strategy.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
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
              White Filling Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about tooth-coloured fillings
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
      <section className="py-16 bg-gradient-to-r from-dental-green to-soft-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Need a Natural-Looking Filling?
          </h2>
          <p className="text-xl text-dental-green-100 mb-8 max-w-2xl mx-auto">
            Get mercury-free, tooth-coloured fillings that blend seamlessly with your natural teeth.
            Book your consultation today for invisible, long-lasting results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-dental-green hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-green">
              Call 0115 931 2525
            </Button>
          </div>

          <div className="text-dental-green-100 space-y-2">
            <p className="font-medium">✨ Natural appearance • Mercury-free • Long-lasting • 20% membership discount</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
