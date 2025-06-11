import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
  Heart,
  Target,
  Award,
  Star,
  Palette,
  Eye
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppWidget";
import ServiceStructuredData, { serviceData } from "@/components/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Porcelain Veneers | Premium Smile Makeover Burton Joyce - Pear Tree Dental",
  description: "Premium porcelain veneers in Burton Joyce. Transform your smile with custom-made veneers. Natural-looking results and comprehensive smile makeovers.",
};

const veneerTypes = [
  {
    type: "Porcelain Veneers",
    description: "Ultra-thin porcelain shells for premium aesthetics",
    thickness: "0.3-0.5mm ultra-thin",
    preparation: "Minimal enamel removal",
    durability: "15-20 years average",
    appearance: "Superior translucency and natural look",
    advantages: [
      "Highest aesthetic quality",
      "Excellent stain resistance",
      "Natural light reflection",
      "Long-lasting results",
      "Precision laboratory crafting"
    ],
    cost: "£750 per tooth",
    popular: true,
    suitability: "Ideal for complete smile makeovers"
  },
  {
    type: "Composite Veneers",
    description: "Same-day tooth-coloured resin veneers",
    thickness: "Direct application",
    preparation: "Minimal or no preparation",
    durability: "5-8 years average",
    appearance: "Good aesthetics, more opaque than porcelain",
    advantages: [
      "Same-day results",
      "Lower cost option",
      "Easily repaired",
      "Reversible procedure",
      "No laboratory wait"
    ],
    cost: "£200 per tooth",
    popular: false,
    suitability: "Good for minor corrections and trials"
  },
  {
    type: "Prepless Veneers",
    description: "Ultra-thin veneers requiring no tooth preparation",
    thickness: "0.2-0.3mm contact lens thin",
    preparation: "No tooth reduction required",
    durability: "10-15 years",
    appearance: "Natural but may appear slightly bulky",
    advantages: [
      "No tooth reduction",
      "Completely reversible",
      "Conservative approach",
      "Preserve natural teeth",
      "Quick treatment"
    ],
    cost: "£850 per tooth",
    popular: false,
    suitability: "Specific cases with adequate space"
  },
  {
    type: "Lumineers",
    description: "Brand-name ultra-thin porcelain veneers",
    thickness: "0.2mm contact lens thickness",
    preparation: "Minimal preparation",
    durability: "15-20 years",
    appearance: "Excellent translucency and natural appearance",
    advantages: [
      "Minimal tooth alteration",
      "Proven longevity",
      "Precise fit",
      "Natural translucency",
      "Brand guarantee"
    ],
    cost: "£900 per tooth",
    popular: false,
    suitability: "Premium option for perfect smiles"
  }
];

const treatmentJourney = [
  {
    stage: "1",
    title: "Comprehensive Consultation",
    description: "Detailed smile analysis and treatment planning",
    duration: "60-90 minutes",
    includes: ["Digital smile analysis", "Facial assessment", "Bite evaluation", "Color matching", "Treatment planning", "Cost breakdown"],
    outcome: "Personalized veneer treatment plan"
  },
  {
    stage: "2",
    title: "Digital Smile Design",
    description: "Preview your new smile before treatment",
    duration: "30-45 minutes",
    includes: ["Digital photography", "Smile simulation", "Proportion analysis", "Color selection", "Patient approval", "Final adjustments"],
    outcome: "Approved digital smile design"
  },
  {
    stage: "3",
    title: "Tooth Preparation",
    description: "Gentle preparation for optimal veneer fit",
    duration: "90-120 minutes",
    includes: ["Local anaesthetic", "Precise tooth preparation", "Detailed impressions", "Temporary veneers", "Bite registration"],
    outcome: "Teeth prepared and temporaries fitted"
  },
  {
    stage: "4",
    title: "Laboratory Crafting",
    description: "Custom veneers created by master ceramists",
    duration: "2-3 weeks",
    includes: ["Precision fabrication", "Color matching", "Quality control", "Final adjustments", "Delivery to practice"],
    outcome: "Custom veneers ready for fitting"
  },
  {
    stage: "5",
    title: "Veneer Placement",
    description: "Precise bonding for perfect results",
    duration: "2-3 hours",
    includes: ["Temporary removal", "Try-in and approval", "Precise bonding", "Bite adjustment", "Final polishing"],
    outcome: "Beautiful, natural-looking smile"
  },
  {
    stage: "6",
    title: "Follow-up Care",
    description: "Ensuring optimal results and longevity",
    duration: "15 minutes",
    includes: ["Healing assessment", "Bite evaluation", "Care instructions", "Maintenance schedule", "Long-term planning"],
    outcome: "Optimized long-term results"
  }
];

const beforeAfterTransformations = [
  {
    concern: "Discolored Teeth",
    problem: "Severe tetracycline staining resistant to whitening",
    solution: "8 porcelain veneers on upper front teeth",
    result: "Bright, natural-looking smile with perfect color match",
    timeframe: "3 weeks total treatment",
    cost: "£6,000 (8 veneers)",
    longevity: "15-20 years expected"
  },
  {
    concern: "Gapped Smile",
    problem: "Multiple gaps and uneven teeth",
    solution: "6 porcelain veneers with smile design",
    result: "Perfectly aligned smile with natural proportions",
    timeframe: "3 weeks total treatment",
    cost: "£4,500 (6 veneers)",
    longevity: "15-20 years expected"
  },
  {
    concern: "Worn Down Teeth",
    problem: "Severely worn teeth from grinding",
    solution: "10 porcelain veneers with bite adjustment",
    result: "Restored tooth length and youthful appearance",
    timeframe: "4 weeks total treatment",
    cost: "£7,500 (10 veneers)",
    longevity: "15-20 years with nightguard"
  },
  {
    concern: "Uneven Smile",
    problem: "Irregular tooth shapes and sizes",
    solution: "8 porcelain veneers with digital design",
    result: "Symmetrical, Hollywood-quality smile",
    timeframe: "3 weeks total treatment",
    cost: "£6,000 (8 veneers)",
    longevity: "15-20 years expected"
  }
];

const veneerBenefits = [
  {
    benefit: "Perfect Aesthetics",
    description: "Achieve a flawless, natural-looking smile",
    details: [
      "Custom color matching to your preference",
      "Natural translucency mimics real teeth",
      "Perfect proportion and symmetry",
      "Smooth, stain-resistant surface"
    ],
    icon: Eye
  },
  {
    benefit: "Long-Lasting Results",
    description: "Durable solution for lasting confidence",
    details: [
      "15-20 years average lifespan",
      "Excellent stain resistance",
      "Strong bond to natural teeth",
      "Minimal maintenance required"
    ],
    icon: Award
  },
  {
    benefit: "Conservative Treatment",
    description: "Preserve maximum natural tooth structure",
    details: [
      "Minimal tooth preparation required",
      "Strengthen and protect teeth",
      "Reversible in most cases",
      "Tooth-friendly approach"
    ],
    icon: Heart
  },
  {
    benefit: "Immediate Transformation",
    description: "Dramatic smile improvement in weeks",
    details: [
      "Complete smile makeover possible",
      "Fix multiple issues simultaneously",
      "Predictable, beautiful results",
      "Boost confidence immediately"
    ],
    icon: Sparkles
  }
];

const candidacyAssessment = [
  {
    category: "Excellent Candidates",
    description: "Patients who will achieve outstanding results",
    criteria: [
      "Good oral health and hygiene",
      "Sufficient enamel for bonding",
      "Realistic expectations",
      "Commitment to maintenance",
      "Stable bite and jaw alignment"
    ],
    considerations: "Ideal for comprehensive smile makeovers",
    expectedOutcome: "Outstanding long-term results"
  },
  {
    category: "Good Candidates",
    description: "Suitable patients with minor considerations",
    criteria: [
      "Minor gum issues (treatable first)",
      "Some existing restorations",
      "Mild bite irregularities",
      "Previous dental work on back teeth",
      "Good home care habits"
    ],
    considerations: "May need preliminary treatment",
    expectedOutcome: "Excellent results with proper planning"
  },
  {
    category: "Requires Assessment",
    description: "Patients needing comprehensive evaluation",
    criteria: [
      "Active gum disease",
      "Significant bite problems",
      "Heavy grinding or clenching",
      "Poor oral hygiene habits",
      "Unrealistic expectations"
    ],
    considerations: "Alternative treatments may be better",
    expectedOutcome: "Success depends on addressing underlying issues"
  },
  {
    category: "Not Suitable",
    description: "Patients who should consider alternatives",
    criteria: [
      "Insufficient tooth structure",
      "Severe bite abnormalities",
      "Active tooth decay",
      "Uncontrolled gum disease",
      "Inability to maintain oral hygiene"
    ],
    considerations: "Address underlying problems first",
    expectedOutcome: "Consider crowns or orthodontics instead"
  }
];

const maintenanceCare = [
  {
    timeframe: "Daily Care",
    priority: "Essential",
    instructions: [
      "Brush twice daily with non-abrasive toothpaste",
      "Floss carefully around veneers",
      "Use alcohol-free mouthwash",
      "Avoid using teeth as tools",
      "Wear nightguard if grinding"
    ],
    products: ["Soft-bristled toothbrush", "Non-abrasive toothpaste", "Gentle floss", "Alcohol-free rinse"]
  },
  {
    timeframe: "Weekly Care",
    priority: "Important",
    instructions: [
      "Deep clean with interdental brushes",
      "Check for any changes or damage",
      "Gentle whitening rinse if desired",
      "Avoid excessive force when cleaning",
      "Monitor gum health around veneers"
    ],
    products: ["Interdental brushes", "Whitening rinse", "Gum health monitoring"]
  },
  {
    timeframe: "Professional Care",
    priority: "Critical",
    instructions: [
      "Regular check-ups every 6 months",
      "Professional cleaning with care",
      "Bite evaluation and adjustment",
      "Early problem detection",
      "Long-term maintenance planning"
    ],
    products: ["Professional assessment", "Specialized cleaning", "Bite analysis"]
  }
];

const avoidanceGuidelines = [
  {
    category: "Foods to Avoid",
    items: ["Very hard foods (ice, hard candy)", "Sticky foods (caramel, taffy)", "Staining foods (first 48 hours)", "Extremely hot foods"],
    reason: "Can chip, stain, or damage veneers",
    alternatives: ["Cut hard foods into pieces", "Choose softer alternatives", "Use lukewarm temperatures"]
  },
  {
    category: "Habits to Change",
    items: ["Nail biting", "Pen chewing", "Using teeth as tools", "Grinding/clenching"],
    reason: "Can cause veneer damage or failure",
    alternatives: ["Stress management techniques", "Use proper tools", "Wear nightguard", "Break nervous habits"]
  },
  {
    category: "Activities to Modify",
    items: ["Contact sports without protection", "Hard object biting", "Excessive force brushing"],
    reason: "Risk of trauma or excessive wear",
    alternatives: ["Wear sports mouthguard", "Gentle cleaning techniques", "Protective equipment"]
  }
];

const longTermExpectations = [
  {
    timeframe: "First Month",
    expectations: [
      "Adjustment to new bite",
      "Slight sensitivity possible",
      "Getting used to new smile",
      "Final settling of veneers"
    ],
    care: "Follow all aftercare instructions carefully"
  },
  {
    timeframe: "First Year",
    expectations: [
      "Complete adaptation to veneers",
      "Established care routine",
      "No sensitivity or discomfort",
      "Full aesthetic integration"
    ],
    care: "Maintain excellent oral hygiene and regular check-ups"
  },
  {
    timeframe: "5-10 Years",
    expectations: [
      "Veneers functioning perfectly",
      "Minimal wear if properly cared for",
      "Possible minor adjustments needed",
      "Continued satisfaction with results"
    ],
    care: "Continue regular maintenance and professional monitoring"
  },
  {
    timeframe: "10-20 Years",
    expectations: [
      "May need replacement depending on wear",
      "Technology improvements available",
      "Assessment for renewal",
      "Long-term satisfaction maintained"
    ],
    care: "Plan for eventual replacement and upgrades"
  }
];

const faqs = [
  {
    question: "How much do veneers cost?",
    answer: "Porcelain veneers cost £750 per tooth, while composite veneers start from £200 per tooth. Premium options like Lumineers cost £900 per tooth. A typical smile makeover with 8 veneers costs £6,000. Our membership plans include 20% discounts on all treatments."
  },
  {
    question: "How long do veneers last?",
    answer: "Porcelain veneers typically last 15-20 years with proper care, while composite veneers last 5-8 years. Longevity depends on your oral hygiene, diet, habits, and regular dental care. Many patients enjoy their veneers for decades."
  },
  {
    question: "Are veneers painful to get?",
    answer: "The veneer procedure is generally comfortable with local anaesthetic. Some patients experience mild sensitivity after tooth preparation, but this is temporary. Most people find the process much easier than expected and are thrilled with their results."
  },
  {
    question: "Do veneers look natural?",
    answer: "Modern porcelain veneers look incredibly natural when properly designed and fitted. We use digital smile design to preview your results and work with master ceramists to create veneers that match your facial features and desired outcome perfectly."
  },
  {
    question: "Can veneers be whitened?",
    answer: "Veneers cannot be whitened like natural teeth, but they're highly stain-resistant. We recommend whitening natural teeth before veneer treatment to achieve your desired shade. Veneers will maintain their color for many years."
  },
  {
    question: "What if a veneer breaks?",
    answer: "While modern veneers are very strong, they can occasionally chip or break. Composite veneers can often be repaired chairside, while porcelain veneers usually need replacement. We provide detailed care instructions to minimize this risk."
  }
];

export default function VeneersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData {...serviceData.veneers} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-purple-600 text-white">
                <Crown className="w-4 h-4 mr-2" />
                Premium Smile Makeover
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Porcelain
                <span className="block text-purple-600">Veneers</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your smile with custom-made porcelain veneers.
                Achieve Hollywood-quality results with natural-looking, long-lasting smile makeovers.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-bold text-purple-800">PREMIUM QUALITY</div>
                    <div className="text-purple-700 text-sm">Master ceramist crafted for perfect aesthetics</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Call 0115 931 2525
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">£750</div>
                  <div className="text-sm text-gray-600">Per Tooth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">15-20yrs</div>
                  <div className="text-sm text-gray-600">Lifespan</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">3 Weeks</div>
                  <div className="text-sm text-gray-600">Treatment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">Natural</div>
                  <div className="text-sm text-gray-600">Appearance</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <Crown className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">PORCELAIN VENEERS</h3>
                    <p className="text-gray-600">Premium smile transformation</p>
                  </div>
                </div>
              </Card>

              {/* Premium badge */}
              <Card className="absolute -top-4 -right-4 bg-purple-600 text-white p-3 shadow-lg">
                <div className="text-center">
                  <Star className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-bold">PREMIUM</p>
                  <p className="text-xs">QUALITY</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Veneer Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Types of Veneers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect veneer type for your smile goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {veneerTypes.map((veneer, index) => (
              <Card key={index} className={`${veneer.popular ? 'ring-2 ring-purple-600 scale-105' : ''}`}>
                {veneer.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{veneer.type}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">{veneer.cost}</div>
                      <div className="text-sm text-gray-500">{veneer.durability}</div>
                    </div>
                  </div>
                  <CardDescription>{veneer.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Thickness:</span>
                      <div className="font-medium">{veneer.thickness}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Preparation:</span>
                      <div className="font-medium">{veneer.preparation}</div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h4 className="font-semibold mb-1 text-purple-800">Appearance:</h4>
                    <p className="text-sm text-purple-700">{veneer.appearance}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Advantages:</h4>
                    <ul className="space-y-1">
                      {veneer.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Best for:</h4>
                    <p className="text-sm text-gray-700">{veneer.suitability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veneer Treatment Journey
            </h2>
            <p className="text-xl text-gray-600">
              Step-by-step process to your perfect smile
            </p>
          </div>

          <div className="space-y-8">
            {treatmentJourney.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-20 bg-purple-600 flex items-center justify-center">
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
                              <CheckCircle className="w-4 h-4 text-purple-600" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded">
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
              Veneer Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why veneers are the premium choice for smile transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {veneerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 mb-3">{benefit.description}</p>

                      <ul className="space-y-1">
                        {benefit.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-purple-600" />
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

      {/* Before/After Transformations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Smile Transformations
            </h2>
            <p className="text-xl text-gray-600">
              Real patient transformations with porcelain veneers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterTransformations.map((transformation, index) => (
              <Card key={index} className="p-6">
                <div className="text-center mb-4">
                  <Badge className="bg-purple-600 text-white mb-2">{transformation.cost}</Badge>
                  <h3 className="font-semibold text-lg text-gray-900">{transformation.concern}</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <h4 className="font-semibold mb-1 text-red-800">Problem:</h4>
                    <p className="text-sm text-red-700">{transformation.problem}</p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h4 className="font-semibold mb-1 text-blue-800">Solution:</h4>
                    <p className="text-sm text-blue-700">{transformation.solution}</p>
                  </div>

                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h4 className="font-semibold mb-1 text-green-800">Result:</h4>
                    <p className="text-sm text-green-700">{transformation.result}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-center">
                    <div>
                      <span className="text-gray-500">Treatment Time:</span>
                      <div className="font-medium">{transformation.timeframe}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Expected Lifespan:</span>
                      <div className="font-medium">{transformation.longevity}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Candidacy Assessment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Are You a Good Candidate?
            </h2>
            <p className="text-xl text-gray-600">
              Assessment criteria for successful veneer treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {candidacyAssessment.map((category, index) => (
              <Card key={index} className={`p-6 ${
                category.category === 'Excellent Candidates' ? 'border-2 border-green-600 bg-green-50' :
                category.category === 'Good Candidates' ? 'border-2 border-blue-600 bg-blue-50' :
                category.category === 'Requires Assessment' ? 'border-2 border-yellow-600 bg-yellow-50' :
                'border-2 border-red-600 bg-red-50'
              }`}>
                <h3 className={`font-semibold text-lg mb-3 ${
                  category.category === 'Excellent Candidates' ? 'text-green-800' :
                  category.category === 'Good Candidates' ? 'text-blue-800' :
                  category.category === 'Requires Assessment' ? 'text-yellow-800' :
                  'text-red-800'
                }`}>{category.category}</h3>

                <p className="text-gray-600 mb-4">{category.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Criteria:</h4>
                    <ul className="space-y-1">
                      {category.criteria.map((criterion, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className={`w-4 h-4 ${
                            category.category === 'Excellent Candidates' ? 'text-green-600' :
                            category.category === 'Good Candidates' ? 'text-blue-600' :
                            category.category === 'Requires Assessment' ? 'text-yellow-600' :
                            'text-red-600'
                          }`} />
                          <span className="text-sm">{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold mb-1">Considerations:</h4>
                    <p className="text-sm text-gray-700">{category.considerations}</p>
                  </div>

                  <div className="text-center">
                    <Badge className={`${
                      category.category === 'Excellent Candidates' ? 'bg-green-600' :
                      category.category === 'Good Candidates' ? 'bg-blue-600' :
                      category.category === 'Requires Assessment' ? 'bg-yellow-600' :
                      'bg-red-600'
                    } text-white`}>
                      {category.expectedOutcome}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Care */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veneer Maintenance & Care
            </h2>
            <p className="text-xl text-gray-600">
              Keep your veneers looking perfect for decades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenanceCare.map((care, index) => (
              <Card key={index} className={`p-6 ${care.priority === 'Critical' ? 'border-2 border-purple-600 bg-purple-50' : ''}`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-purple-600 text-lg">{care.timeframe}</h3>
                  <Badge className={`${
                    care.priority === 'Critical' ? 'bg-purple-600' :
                    care.priority === 'Essential' ? 'bg-blue-600' :
                    'bg-green-600'
                  } text-white`}>
                    {care.priority}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Instructions:</h4>
                    <ul className="space-y-2">
                      {care.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Recommended Products:</h4>
                    <div className="flex flex-wrap gap-1">
                      {care.products.map((product, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {product}
                        </Badge>
                      ))}
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
              Veneer Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about porcelain veneers
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Your Dream Smile?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Transform your smile with premium porcelain veneers.
            Achieve natural-looking, long-lasting results with our expert smile makeover team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Call 0115 931 2525
            </Button>
          </div>

          <div className="text-purple-100 space-y-2">
            <p className="font-medium">👑 Premium quality • Natural results • 15-20 year lifespan • 20% membership discount</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
