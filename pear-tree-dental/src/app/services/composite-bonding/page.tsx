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
  Zap,
  Heart,
  Target,
  Award,
  Star,
  Palette,
  Smile
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppWidget";
import ServiceStructuredData, { serviceData } from "@/components/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Composite Bonding | Same-Day Smile Transformation Burton Joyce - Pear Tree Dental",
  description: "Composite bonding in Burton Joyce. Same-day smile transformation with tooth-coloured resin. Fix chips, gaps, and discoloration instantly.",
};

const bondingApplications = [
  {
    application: "Tooth Reshaping & Contouring",
    description: "Sculpt and shape teeth for perfect symmetry",
    suitability: "Uneven, misshapen, or worn teeth",
    timeframe: "30-60 minutes per tooth",
    durability: "5-7 years with proper care",
    advantages: [
      "Immediate transformation",
      "Conservative approach",
      "No anaesthetic needed",
      "Reversible procedure",
      "Natural-looking results"
    ],
    cost: "£150 per tooth",
    popular: false
  },
  {
    application: "Gap Closure",
    description: "Close small gaps between teeth seamlessly",
    suitability: "Small to medium gaps (diastemas)",
    timeframe: "45-90 minutes treatment",
    durability: "5-8 years average lifespan",
    advantages: [
      "No orthodontics needed",
      "Same-day results",
      "Preserve tooth structure",
      "Cost-effective solution",
      "Easy maintenance"
    ],
    cost: "£150-300 per gap",
    popular: true
  },
  {
    application: "Chip & Crack Repair",
    description: "Restore damaged teeth to original appearance",
    suitability: "Minor to moderate chips and cracks",
    timeframe: "20-45 minutes per tooth",
    durability: "3-5 years depending on location",
    advantages: [
      "Immediate pain relief",
      "Prevent further damage",
      "Match existing tooth color",
      "Strong, durable repair",
      "Same-day completion"
    ],
    cost: "£150 per repair",
    popular: false
  },
  {
    application: "Discoloration Coverage",
    description: "Mask stains and discoloration permanently",
    suitability: "Intrinsic stains, white spots, fluorosis",
    timeframe: "60-90 minutes per tooth",
    durability: "5-7 years with care",
    advantages: [
      "Alternative to veneers",
      "No tooth reduction",
      "Perfect color matching",
      "Cost-effective solution",
      "Immediate results"
    ],
    cost: "£150-200 per tooth",
    popular: false
  }
];

const treatmentProcess = [
  {
    stage: "1",
    title: "Consultation & Design",
    description: "Plan your perfect smile transformation",
    duration: "30 minutes",
    includes: ["Smile analysis", "Color matching", "Treatment planning", "Digital preview", "Cost estimation"],
    outcome: "Personalized treatment plan"
  },
  {
    stage: "2",
    title: "Tooth Preparation",
    description: "Minimal preparation for optimal bonding",
    duration: "15 minutes",
    includes: ["Gentle surface preparation", "Isolation techniques", "Moisture control", "Etching process", "Bonding agent application"],
    outcome: "Teeth ready for composite application"
  },
  {
    stage: "3",
    title: "Composite Application",
    description: "Artistic sculpting and shaping",
    duration: "45-90 minutes",
    includes: ["Layer-by-layer application", "Artistic shaping", "Color blending", "Light curing", "Texture creation"],
    outcome: "Beautifully shaped and colored teeth"
  },
  {
    stage: "4",
    title: "Finishing & Polishing",
    description: "Perfect the final result",
    duration: "20 minutes",
    includes: ["Bite adjustment", "Surface smoothing", "High-gloss polishing", "Final inspection", "Comfort verification"],
    outcome: "Natural-looking, smooth finish"
  },
  {
    stage: "5",
    title: "Aftercare Instructions",
    description: "Guidance for long-lasting results",
    duration: "10 minutes",
    includes: ["Care instructions", "What to avoid", "Maintenance tips", "Follow-up scheduling", "Emergency contact"],
    outcome: "Knowledge for optimal longevity"
  }
];

const compositeBenefits = [
  {
    benefit: "Same-Day Results",
    description: "Complete transformation in a single visit",
    details: ["No waiting for lab work", "Immediate improvement", "Walk out with perfect smile", "No temporary restorations"],
    icon: Zap
  },
  {
    benefit: "Conservative Treatment",
    description: "Minimal or no tooth removal required",
    details: ["Preserve natural tooth structure", "Reversible procedure", "No anaesthetic usually needed", "Tooth-friendly approach"],
    icon: Heart
  },
  {
    benefit: "Natural Appearance",
    description: "Seamlessly blends with natural teeth",
    details: ["Perfect color matching", "Natural translucency", "Customizable shape", "Invisible repairs"],
    icon: Eye
  },
  {
    benefit: "Cost-Effective",
    description: "Affordable alternative to veneers",
    details: ["Lower cost than porcelain", "No lab fees", "Single appointment", "Excellent value"],
    icon: Target
  }
];

const bondingVsAlternatives = [
  {
    aspect: "Treatment Time",
    bonding: "1 appointment (1-2 hours)",
    veneers: "2-3 appointments (2-3 weeks)",
    crowns: "2-3 appointments (2-3 weeks)",
    advantage: "Composite Bonding"
  },
  {
    aspect: "Tooth Preparation",
    bonding: "Minimal to none",
    veneers: "Moderate enamel removal",
    crowns: "Significant tooth reduction",
    advantage: "Composite Bonding"
  },
  {
    aspect: "Cost",
    bonding: "£150-300 per tooth",
    veneers: "£750+ per tooth",
    crowns: "£750+ per tooth",
    advantage: "Composite Bonding"
  },
  {
    aspect: "Durability",
    bonding: "3-7 years",
    veneers: "10-15 years",
    crowns: "15-20 years",
    advantage: "Veneers/Crowns"
  },
  {
    aspect: "Repairability",
    bonding: "Easily repaired/extended",
    veneers: "Complete replacement needed",
    crowns: "Complete replacement needed",
    advantage: "Composite Bonding"
  },
  {
    aspect: "Aesthetic Result",
    bonding: "Excellent",
    veneers: "Superior",
    crowns: "Superior",
    advantage: "Depends on case"
  }
];

const idealCandidates = [
  {
    category: "Perfect Candidates",
    description: "Patients who will achieve excellent results",
    criteria: [
      "Minor cosmetic concerns",
      "Good oral hygiene",
      "Realistic expectations",
      "Healthy teeth and gums",
      "Non-heavy biters"
    ],
    expectedOutcome: "Excellent long-term results"
  },
  {
    category: "Good Candidates",
    description: "Patients suitable with some considerations",
    criteria: [
      "Moderate cosmetic issues",
      "Good home care habits",
      "Understanding of maintenance",
      "Willing to avoid hard foods",
      "Regular dental visits"
    ],
    expectedOutcome: "Very good results with care"
  },
  {
    category: "Consider Alternatives",
    description: "Patients who might benefit from other treatments",
    criteria: [
      "Heavy bite forces",
      "Teeth grinding/clenching",
      "Large restorations needed",
      "Significant color change required",
      "Poor oral hygiene"
    ],
    expectedOutcome: "May need veneers or crowns"
  }
];

const careInstructions = [
  {
    timeframe: "First 48 Hours",
    critical: true,
    instructions: [
      "Avoid staining foods and drinks",
      "No coffee, tea, red wine, or berries",
      "Eat soft foods only",
      "Avoid biting with front teeth",
      "Use lukewarm beverages only"
    ],
    reasoning: "Composite is most vulnerable to staining in first 48 hours"
  },
  {
    timeframe: "First Week",
    critical: false,
    instructions: [
      "Gradually introduce normal foods",
      "Cut food into smaller pieces",
      "Use straw for colored beverages",
      "Gentle brushing around bonded areas",
      "Avoid sticky or hard foods"
    ],
    reasoning: "Allow composite to fully cure and integrate"
  },
  {
    timeframe: "Long-term Care",
    critical: false,
    instructions: [
      "Maintain excellent oral hygiene",
      "Regular dental check-ups every 6 months",
      "Avoid using teeth as tools",
      "Don't bite fingernails or ice",
      "Consider nightguard if grinding"
    ],
    reasoning: "Maximize longevity and prevent damage"
  }
];

const maintenanceAndRepair = [
  {
    issue: "Minor Chipping",
    frequency: "Occasional (10-20% patients)",
    repairability: "Easily repaired in single visit",
    cost: "£50-100 repair",
    prevention: "Avoid hard foods, use nightguard"
  },
  {
    issue: "Staining",
    frequency: "Gradual over time",
    repairability: "Polishing or surface replacement",
    cost: "£30-80 polishing",
    prevention: "Good oral hygiene, avoid staining foods"
  },
  {
    issue: "Wear",
    frequency: "Normal after 3-5 years",
    repairability: "Touch-up or partial replacement",
    cost: "£50-150 depending on extent",
    prevention: "Proper care, regular check-ups"
  },
  {
    issue: "Complete Failure",
    frequency: "Rare with proper care",
    repairability: "Complete replacement needed",
    cost: "Full treatment cost",
    prevention: "Follow care instructions, regular maintenance"
  }
];

const beforeAfterScenarios = [
  {
    concern: "Small Gap Between Front Teeth",
    treatment: "Composite addition to adjacent teeth",
    timeRequired: "60 minutes",
    cost: "£300 (2 teeth)",
    result: "Gap completely closed, natural appearance",
    longevity: "5-8 years"
  },
  {
    concern: "Chipped Front Tooth",
    treatment: "Composite restoration and reshaping",
    timeRequired: "30 minutes",
    cost: "£150",
    result: "Tooth restored to original shape and size",
    longevity: "3-5 years"
  },
  {
    concern: "Uneven Tooth Edges",
    treatment: "Composite contouring and addition",
    timeRequired: "90 minutes (4 teeth)",
    cost: "£600",
    result: "Perfect symmetry and proportion",
    longevity: "5-7 years"
  },
  {
    concern: "White Spots from Fluorosis",
    treatment: "Composite masking technique",
    timeRequired: "45 minutes per tooth",
    cost: "£150-200 per tooth",
    result: "Uniform color, spots completely hidden",
    longevity: "5-7 years"
  }
];

const faqs = [
  {
    question: "How much does composite bonding cost?",
    answer: "Composite edge bonding starts from £150 per tooth. Costs vary depending on the complexity and number of teeth treated. Gap closure typically costs £300 for two teeth, while full smile makeovers range from £900-1500. Our membership plans include 20% discounts."
  },
  {
    question: "How long does composite bonding last?",
    answer: "Composite bonding typically lasts 3-7 years depending on location, your bite, and how well you care for it. Front teeth bonding generally lasts longer than back teeth. With proper care and regular maintenance, bonding can be easily refreshed or extended."
  },
  {
    question: "Is composite bonding painful?",
    answer: "Composite bonding is usually completely painless and requires no anaesthetic. You may feel slight pressure during the procedure but no pain. Some patients experience minor sensitivity for 24-48 hours after treatment, which is completely normal."
  },
  {
    question: "Can composite bonding be removed?",
    answer: "Yes, composite bonding is completely reversible. It can be removed without damaging your natural teeth since minimal or no tooth preparation is required. This makes it an excellent 'trial' option before considering more permanent treatments like veneers."
  },
  {
    question: "How do I care for composite bonding?",
    answer: "Care for bonded teeth like natural teeth with regular brushing and flossing. Avoid staining foods for 48 hours after treatment, don't use teeth as tools, and avoid biting very hard foods. Regular dental visits help maintain and monitor the bonding."
  },
  {
    question: "Can composite bonding stain?",
    answer: "Composite bonding can stain over time, especially if exposed to coffee, tea, wine, or tobacco. However, staining develops gradually and can often be polished away during regular cleanings. Modern composites are more stain-resistant than older materials."
  }
];

export default function CompositeBondingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData {...serviceData.compositeBonding} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-600 text-white">
                <Zap className="w-4 h-4 mr-2" />
                Same-Day Transformation
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Composite
                <span className="block text-blue-600">Bonding</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your smile in just one visit with composite bonding.
                Fix chips, close gaps, and reshape teeth instantly with tooth-coloured resin.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-blue-800">SAME-DAY RESULTS</div>
                    <div className="text-blue-700 text-sm">Complete smile transformation in one appointment!</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Call 0115 931 2525
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">£150</div>
                  <div className="text-sm text-gray-600">From</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Same Day</div>
                  <div className="text-sm text-gray-600">Results</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">1-2 Hours</div>
                  <div className="text-sm text-gray-600">Treatment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Painless</div>
                  <div className="text-sm text-gray-600">Procedure</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <Palette className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">COMPOSITE BONDING</h3>
                    <p className="text-gray-600">Artistic smile transformation</p>
                  </div>
                </div>
              </Card>

              {/* Social Proof Sticker */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-4 py-2 shadow-lg transform rotate-12">
                <div className="text-center">
                  <div className="text-sm font-bold">ENHANCED BY</div>
                  <div className="text-lg font-extrabold">1,563+</div>
                  <div className="text-xs">CONFIDENT SMILES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonding Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Composite Bonding Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile treatment for multiple cosmetic concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bondingApplications.map((application, index) => (
              <Card key={index} className={`${application.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}>
                {application.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{application.application}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{application.cost}</div>
                      <div className="text-sm text-gray-500">{application.timeframe}</div>
                    </div>
                  </div>
                  <CardDescription>{application.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Best for:</span>
                      <div className="font-medium">{application.suitability}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Durability:</span>
                      <div className="font-medium">{application.durability}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Advantages:</h4>
                    <ul className="space-y-1">
                      {application.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
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
              Bonding Treatment Process
            </h2>
            <p className="text-xl text-gray-600">
              Artistic transformation completed in one appointment
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Composite Bonding Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose composite bonding for your smile transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {compositeBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 mb-3">{benefit.description}</p>

                      <ul className="space-y-1">
                        {benefit.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison with Alternatives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bonding vs Other Treatments
            </h2>
            <p className="text-xl text-gray-600">
              Compare composite bonding with alternative treatments
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardTitle className="text-xl">Treatment Comparison</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Aspect</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-blue-600">Composite Bonding</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Porcelain Veneers</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Crowns</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bondingVsAlternatives.map((comparison, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{comparison.aspect}</td>
                        <td className="px-4 py-3 text-sm text-center text-blue-600 font-medium">{comparison.bonding}</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-600 font-medium">{comparison.veneers}</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-600 font-medium">{comparison.crowns}</td>
                        <td className="px-4 py-3 text-sm text-center font-medium">
                          <Badge variant={comparison.advantage.includes('Bonding') ? 'default' : 'secondary'}
                                 className={comparison.advantage.includes('Bonding') ? 'bg-blue-600' : ''}>
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

      {/* Before/After Scenarios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Treatment Examples
            </h2>
            <p className="text-xl text-gray-600">
              Real scenarios and expected outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterScenarios.map((scenario, index) => (
              <Card key={index} className="p-6">
                <div className="text-center mb-4">
                  <Badge className="bg-blue-600 text-white mb-2">{scenario.cost}</Badge>
                  <h3 className="font-semibold text-lg text-gray-900">{scenario.concern}</h3>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Treatment:</span>
                      <div className="font-medium">{scenario.treatment}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Time:</span>
                      <div className="font-medium">{scenario.timeRequired}</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Expected Result:</h4>
                    <p className="text-sm text-gray-700">{scenario.result}</p>
                  </div>

                  <div className="text-center">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      Longevity: {scenario.longevity}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Aftercare Instructions
            </h2>
            <p className="text-xl text-gray-600">
              Ensure long-lasting results with proper care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {careInstructions.map((period, index) => (
              <Card key={index} className={`p-6 ${period.critical ? 'border-2 border-red-200 bg-red-50' : ''}`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-blue-600 text-lg">{period.timeframe}</h3>
                  {period.critical && (
                    <Badge className="bg-red-600 text-white">Critical</Badge>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Instructions:</h4>
                    <ul className="space-y-2">
                      {period.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Why Important:</h4>
                    <p className="text-sm text-gray-700">{period.reasoning}</p>
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
              Bonding Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about composite bonding treatment
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Transform Your Smile Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get instant results with composite bonding. Fix chips, close gaps,
            and reshape teeth in just one appointment. Same-day smile transformation!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Call 0115 931 2525
            </Button>
          </div>

          <div className="text-blue-100 space-y-2">
            <p className="font-medium">⚡ Same-day results • Painless procedure • Conservative treatment • 20% membership discount</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
