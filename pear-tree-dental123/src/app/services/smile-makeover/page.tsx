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
  Eye,
  Camera,
  Monitor
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppWidget";
import ServiceStructuredData, { serviceData } from "@/components/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Complete Smile Makeover | Total Smile Transformation Burton Joyce - Pear Tree Dental",
  description: "Complete smile makeover in Burton Joyce. Transform your entire smile with digital preview. Comprehensive treatment packages combining multiple cosmetic procedures.",
};

const makeoverPackages = [
  {
    package: "Essential Smile Refresh",
    description: "Perfect starter package for immediate improvement",
    suitability: "Minor cosmetic concerns, budget-conscious patients",
    duration: "2-4 weeks",
    includes: [
      "Professional teeth whitening (Enlighten or home system)",
      "1-3 composite bonding corrections",
      "Scale and polish",
      "Digital smile preview",
      "Aftercare kit"
    ],
    treatments: ["Teeth whitening", "Minor bonding", "Professional cleaning"],
    cost: "£800-1,200",
    results: "Brighter, more even smile with minor corrections",
    ideal: "Patients wanting quick, noticeable improvement"
  },
  {
    package: "Complete Smile Transformation",
    description: "Comprehensive makeover for dramatic results",
    suitability: "Multiple cosmetic issues, full smile redesign",
    duration: "6-8 weeks",
    includes: [
      "6-8 porcelain veneers on upper teeth",
      "Professional teeth whitening",
      "Gum contouring if needed",
      "Digital smile design",
      "Temporary veneers",
      "Follow-up care"
    ],
    treatments: ["Porcelain veneers", "Whitening", "Gum reshaping"],
    cost: "£5,500-7,000",
    results: "Complete smile transformation with perfect aesthetics",
    ideal: "Patients wanting Hollywood-quality results",
    popular: true
  },
  {
    package: "Advanced Reconstruction",
    description: "Complex cases requiring comprehensive treatment",
    suitability: "Worn teeth, bite issues, multiple problems",
    duration: "8-12 weeks",
    includes: [
      "8-12 porcelain veneers/crowns",
      "Orthodontic alignment if needed",
      "Gum treatment and reshaping",
      "Bite reconstruction",
      "Professional whitening",
      "Long-term maintenance plan"
    ],
    treatments: ["Veneers/crowns", "Orthodontics", "Gum treatment", "Bite work"],
    cost: "£8,000-12,000",
    results: "Complete oral rehabilitation with perfect function and aesthetics",
    ideal: "Complex cases requiring full mouth rehabilitation"
  },
  {
    package: "Express Makeover",
    description: "Same-day smile transformation",
    suitability: "Immediate results needed, minor to moderate issues",
    duration: "1 day",
    includes: [
      "4-6 composite veneers",
      "Teeth whitening",
      "Tooth reshaping/contouring",
      "Same-day completion",
      "Immediate results"
    ],
    treatments: ["Composite veneers", "Whitening", "Contouring"],
    cost: "£1,500-2,500",
    results: "Immediate smile improvement in single appointment",
    ideal: "Patients with time constraints wanting quick results"
  }
];

const digitalSmileDesign = [
  {
    stage: "1",
    title: "Initial Photography",
    description: "Comprehensive digital capture of your current smile",
    duration: "15 minutes",
    includes: ["High-resolution smile photos", "Facial photography", "Profile images", "Close-up dental photos"],
    technology: "Professional dental photography system"
  },
  {
    stage: "2",
    title: "Digital Analysis",
    description: "Computer analysis of your facial features and smile",
    duration: "30 minutes",
    includes: ["Facial proportion analysis", "Smile line assessment", "Tooth proportion evaluation", "Symmetry analysis"],
    technology: "Advanced smile design software"
  },
  {
    stage: "3",
    title: "Virtual Makeover",
    description: "Create your new smile digitally before treatment",
    duration: "45 minutes",
    includes: ["Multiple design options", "Color selection", "Shape refinement", "Patient input and feedback"],
    technology: "3D smile simulation technology"
  },
  {
    stage: "4",
    title: "Preview & Approval",
    description: "See your new smile before any treatment begins",
    duration: "20 minutes",
    includes: ["Side-by-side comparison", "Video preview", "Patient approval", "Final adjustments"],
    technology: "Real-time preview system"
  }
];

const beforeAfterCases = [
  {
    case: "Severe Discoloration & Gaps",
    patientAge: "35-year-old professional",
    problems: ["Heavy tetracycline staining", "Multiple gaps between teeth", "Uneven tooth sizes", "Loss of confidence"],
    treatments: ["8 porcelain veneers", "Professional whitening", "Gum contouring"],
    duration: "6 weeks",
    cost: "£6,500",
    results: [
      "Bright, even white smile",
      "All gaps closed perfectly",
      "Natural-looking proportions",
      "Dramatically increased confidence"
    ],
    satisfaction: "Absolutely thrilled with results"
  },
  {
    case: "Worn & Broken Teeth",
    patientAge: "45-year-old business owner",
    problems: ["Severely worn teeth from grinding", "Multiple chipped teeth", "Aged appearance", "Functional problems"],
    treatments: ["10 porcelain crowns and veneers", "Bite adjustment", "Custom nightguard"],
    duration: "8 weeks",
    cost: "£9,000",
    results: [
      "Restored natural tooth length",
      "Perfect bite alignment",
      "Youthful appearance returned",
      "Protected from further wear"
    ],
    satisfaction: "Life-changing transformation"
  },
  {
    case: "Crooked & Stained Smile",
    patientAge: "28-year-old teacher",
    problems: ["Crooked front teeth", "Coffee staining", "Lack of confidence when speaking", "Avoiding photos"],
    treatments: ["6 porcelain veneers", "Teeth whitening", "Minor gum reshaping"],
    duration: "4 weeks",
    cost: "£5,000",
    results: [
      "Perfectly straight appearance",
      "Beautiful white color",
      "Confident speaking and smiling",
      "Professional appearance enhanced"
    ],
    satisfaction: "Exceeded all expectations"
  }
];

const treatmentCombinations = [
  {
    combination: "Whitening + Bonding",
    description: "Perfect for minor corrections with dramatic brightening",
    benefits: ["Cost-effective", "Quick results", "Conservative approach"],
    timeline: "2-3 weeks",
    cost: "£600-1,000",
    ideal: "Minor chips, gaps, and discoloration"
  },
  {
    combination: "Veneers + Whitening",
    description: "Premium smile makeover with perfect color matching",
    benefits: ["Long-lasting results", "Natural appearance", "Comprehensive solution"],
    timeline: "4-6 weeks",
    cost: "£3,500-6,000",
    ideal: "Multiple aesthetic concerns requiring full transformation"
  },
  {
    combination: "Invisalign + Veneers",
    description: "Straighten teeth first, then perfect with veneers",
    benefits: ["Optimal positioning", "Perfect final result", "Minimal tooth preparation"],
    timeline: "12-18 months",
    cost: "£4,500-8,000",
    ideal: "Significant alignment issues with aesthetic concerns"
  },
  {
    combination: "Gum Reshaping + Veneers",
    description: "Perfect gum line with beautiful veneers",
    benefits: ["Ideal proportions", "Enhanced aesthetics", "Balanced smile"],
    timeline: "6-8 weeks",
    cost: "£4,000-7,000",
    ideal: "Gummy smile or uneven gum line with tooth issues"
  }
];

const smileAnalysis = [
  {
    aspect: "Facial Harmony",
    assessment: "Smile relationship to facial features",
    considerations: [
      "Lip line position",
      "Facial symmetry",
      "Nose and chin proportion",
      "Age-appropriate design"
    ],
    importance: "Ensures natural integration with your unique features"
  },
  {
    aspect: "Tooth Proportions",
    assessment: "Golden ratio and natural proportions",
    considerations: [
      "Width to length ratios",
      "Central to lateral proportions",
      "Canine positioning",
      "Size progression"
    ],
    importance: "Creates naturally beautiful and harmonious smile"
  },
  {
    aspect: "Color & Translucency",
    assessment: "Natural color gradation and light reflection",
    considerations: [
      "Age-appropriate whiteness",
      "Natural translucency patterns",
      "Color variation subtleties",
      "Existing teeth matching"
    ],
    importance: "Achieves realistic, natural-looking results"
  },
  {
    aspect: "Gum Line Design",
    assessment: "Healthy, aesthetic gum architecture",
    considerations: [
      "Gum line symmetry",
      "Papilla (gum triangle) health",
      "Crown length proportions",
      "Tissue biotype"
    ],
    importance: "Frames teeth beautifully and maintains health"
  }
];

const makeoverBenefits = [
  {
    benefit: "Comprehensive Solution",
    description: "Address all smile concerns in coordinated treatment",
    advantages: [
      "Multiple issues treated together",
      "Coordinated treatment planning",
      "Better overall results",
      "Often more cost-effective than separate treatments"
    ],
    icon: Target
  },
  {
    benefit: "Digital Preview",
    description: "See your results before treatment begins",
    advantages: [
      "No surprises or disappointments",
      "Input into final design",
      "Confidence in treatment plan",
      "Realistic expectations set"
    ],
    icon: Monitor
  },
  {
    benefit: "Expert Coordination",
    description: "All treatments expertly sequenced and coordinated",
    advantages: [
      "Optimal treatment sequence",
      "Reduced total treatment time",
      "Expert case management",
      "Seamless patient experience"
    ],
    icon: Award
  },
  {
    benefit: "Long-term Value",
    description: "Investment in lasting confidence and oral health",
    advantages: [
      "Durable, long-lasting results",
      "Improved oral health",
      "Enhanced self-confidence",
      "Professional and social benefits"
    ],
    icon: Heart
  }
];

const timelineExpectations = [
  {
    phase: "Consultation Phase",
    duration: "1-2 weeks",
    appointments: "2-3 visits",
    activities: [
      "Initial consultation and examination",
      "Digital smile design session",
      "Treatment planning and approval",
      "Financial arrangements"
    ],
    outcome: "Approved treatment plan with digital preview"
  },
  {
    phase: "Preparation Phase",
    duration: "1-2 weeks",
    appointments: "1-2 visits",
    activities: [
      "Preliminary treatments (cleaning, minor repairs)",
      "Impressions and measurements",
      "Temporary restorations if needed",
      "Laboratory work begins"
    ],
    outcome: "Ready to begin main treatment phase"
  },
  {
    phase: "Treatment Phase",
    duration: "2-6 weeks",
    appointments: "3-6 visits",
    activities: [
      "Main cosmetic procedures",
      "Precision fitting and adjustments",
      "Color and shape refinements",
      "Final bonding and polishing"
    ],
    outcome: "Beautiful new smile completed"
  },
  {
    phase: "Maintenance Phase",
    duration: "Ongoing",
    appointments: "Every 6 months",
    activities: [
      "Regular check-ups and cleaning",
      "Professional monitoring",
      "Minor adjustments if needed",
      "Long-term care planning"
    ],
    outcome: "Lasting results and optimal oral health"
  }
];

const financingOptions = [
  {
    option: "Membership Plan Discount",
    description: "20% discount on all treatments for members",
    benefits: ["Significant cost savings", "Includes regular care", "Emergency cover", "Priority booking"],
    example: "£6,000 treatment becomes £4,800 with membership",
    eligibility: "All patients"
  },
  {
    option: "Payment Plans",
    description: "Spread treatment cost over manageable payments",
    benefits: ["0% finance available", "Flexible terms", "Quick approval", "Budget-friendly"],
    example: "£6,000 treatment = £500/month for 12 months",
    eligibility: "Subject to credit approval"
  },
  {
    option: "Package Pricing",
    description: "Combined treatments at reduced total cost",
    benefits: ["Better value than individual treatments", "Comprehensive care", "Predictable costs"],
    example: "Veneers + whitening package saves £200-500",
    eligibility: "Package participants"
  }
];

const faqs = [
  {
    question: "How much does a complete smile makeover cost?",
    answer: "Smile makeover costs range from £800 for basic packages to £12,000 for complex full-mouth reconstructions. Most patients invest £3,500-7,000 for comprehensive transformations. We offer 20% membership discounts and 0% finance options to make treatment affordable."
  },
  {
    question: "How long does a smile makeover take?",
    answer: "Timeline varies by complexity: Express makeovers take 1 day, essential packages 2-4 weeks, complete transformations 6-8 weeks, and complex reconstructions 8-12 weeks. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "Will I be able to see my results before treatment?",
    answer: "Yes! Our digital smile design technology shows you exactly how your new smile will look before any treatment begins. You can see different options and make changes until you're completely happy with the design."
  },
  {
    question: "Is a smile makeover painful?",
    answer: "Modern techniques make smile makeovers very comfortable. We use effective local anaesthetic for any invasive procedures, and many treatments like bonding and whitening are virtually painless. Most patients are surprised by how comfortable the process is."
  },
  {
    question: "How long do smile makeover results last?",
    answer: "Results depend on treatments chosen: composite bonding lasts 5-8 years, porcelain veneers last 15-20 years, and teeth whitening lasts 1-3 years. With proper care and regular maintenance, your investment will provide lasting value and confidence."
  },
  {
    question: "Can a smile makeover improve my oral health?",
    answer: "Absolutely! Many smile makeover treatments also improve oral health by correcting bite problems, replacing damaged teeth, treating gum issues, and making teeth easier to clean. It's often a health investment as well as a cosmetic one."
  }
];

export default function SmileMakeoverPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData {...serviceData.smileMakeover} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-pink-600 text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Complete Transformation
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Complete Smile
                <span className="block text-pink-600">Makeover</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your entire smile with our comprehensive makeover packages.
                See your new smile before treatment with digital preview technology.
              </p>

              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Camera className="w-6 h-6 text-pink-600" />
                  <div>
                    <div className="font-bold text-pink-800">DIGITAL PREVIEW</div>
                    <div className="text-pink-700 text-sm">See your new smile before any treatment begins!</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                  Call 0115 931 2525
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-pink-600">£800</div>
                  <div className="text-sm text-gray-600">From</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">Digital</div>
                  <div className="text-sm text-gray-600">Preview</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">2-8 Weeks</div>
                  <div className="text-sm text-gray-600">Complete</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">Lifetime</div>
                  <div className="text-sm text-gray-600">Confidence</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <Crown className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE MAKEOVER</h3>
                    <p className="text-gray-600">Complete transformation</p>
                  </div>
                </div>
              </Card>

              {/* Social Proof Sticker */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full px-4 py-2 shadow-lg transform rotate-12">
                <div className="text-center">
                  <div className="text-sm font-bold">LIFE-CHANGED BY</div>
                  <div className="text-lg font-extrabold">394+</div>
                  <div className="text-xs">NEW SMILES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makeover Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Smile Makeover Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your smile goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {makeoverPackages.map((pkg, index) => (
              <Card key={index} className={`${pkg.popular ? 'ring-2 ring-pink-600 scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{pkg.package}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pink-600">{pkg.cost}</div>
                      <div className="text-sm text-gray-500">{pkg.duration}</div>
                    </div>
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-pink-50 p-3 rounded border border-pink-200">
                    <h4 className="font-semibold mb-1 text-pink-800">Best for:</h4>
                    <p className="text-sm text-pink-700">{pkg.suitability}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((include, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span className="text-sm">{include}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Main Treatments:</span>
                      <div className="font-medium">{pkg.treatments.join(", ")}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Expected Results:</span>
                      <div className="font-medium">{pkg.results}</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Ideal Patient:</h4>
                    <p className="text-sm text-gray-700">{pkg.ideal}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Smile Design */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Digital Smile Design Process
            </h2>
            <p className="text-xl text-gray-600">
              Preview your perfect smile before any treatment begins
            </p>
          </div>

          <div className="space-y-8">
            {digitalSmileDesign.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-20 bg-pink-600 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{stage.stage}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">{stage.title}</h3>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{stage.duration}</Badge>
                        <div className="text-sm text-gray-500 mt-1">{stage.technology}</div>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Process Includes:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {stage.includes.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-pink-600" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
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
              Smile Makeover Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose a comprehensive smile makeover approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {makeoverBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 mb-3">{benefit.description}</p>

                      <ul className="space-y-1">
                        {benefit.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-pink-600" />
                            <span className="text-sm text-gray-700">{advantage}</span>
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

      {/* Before/After Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Patient Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See the life-changing results achieved with smile makeovers
            </p>
          </div>

          <div className="space-y-8">
            {beforeAfterCases.map((case_, index) => (
              <Card key={index} className="p-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold text-xl text-gray-900">{case_.case}</h3>
                      <Badge className="bg-pink-600 text-white">{case_.cost}</Badge>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-800">Problems:</h4>
                        <ul className="space-y-1">
                          {case_.problems.map((problem, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                              <span className="text-sm text-red-700">{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-blue-800">Treatments:</h4>
                        <ul className="space-y-1">
                          {case_.treatments.map((treatment, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              <span className="text-sm text-blue-700">{treatment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-green-50 p-4 rounded border border-green-200 mb-4">
                      <h4 className="font-semibold mb-2 text-green-800">Results Achieved:</h4>
                      <ul className="space-y-1">
                        {case_.results.map((result, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-center">
                      <div>
                        <span className="text-gray-500">Treatment Time:</span>
                        <div className="font-medium">{case_.duration}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Patient Age:</span>
                        <div className="font-medium">{case_.patientAge}</div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <Badge className="bg-yellow-600 text-white">
                        "{case_.satisfaction}"
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Treatment Timeline
            </h2>
            <p className="text-xl text-gray-600">
              What to expect during your smile makeover journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {timelineExpectations.map((phase, index) => (
              <Card key={index} className="p-6">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-pink-600 text-lg mb-2">{phase.phase}</h3>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <span>Duration: {phase.duration}</span>
                    <span>Visits: {phase.appointments}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Activities:</h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-pink-600" />
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Phase Outcome:</h4>
                    <p className="text-sm text-gray-700">{phase.outcome}</p>
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
              Smile Makeover Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about complete smile transformations
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
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Your Dream Smile?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Transform your entire smile with our comprehensive makeover packages.
            See your results with digital preview before any treatment begins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              Call 0115 931 2525
            </Button>
          </div>

          <div className="text-pink-100 space-y-2">
            <p className="font-medium">✨ Digital preview • Complete transformation • Expert coordination • 20% membership discount</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
