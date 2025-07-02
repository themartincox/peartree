import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  AlertTriangle,
  Heart,
  Zap,
  Target,
  Award,
  Activity,
  X,
  Check,
  Phone
} from "lucide-react";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Root Canal Treatment | Endodontic Therapy Burton Joyce - Pear Tree Dental",
  description: "Expert root canal treatment in Burton Joyce. Save infected teeth with modern, comfortable endodontic therapy. 95% success rate, pain-free treatment from £300.",
  keywords: [
    "root canal treatment Burton Joyce",
    "endodontic therapy",
    "save infected tooth",
    "root canal dentist",
    "tooth pain relief",
    "Burton Joyce endodontics"
  ],
};

const whyRootCanal = [
  {
    condition: "Deep Tooth Decay",
    description: "Bacteria have reached the tooth's nerve center",
    symptoms: ["Severe toothache", "Temperature sensitivity", "Pain when biting", "Throbbing pain"],
    urgency: "Urgent",
    consequences: "Tooth loss, abscess formation, spreading infection"
  },
  {
    condition: "Dental Trauma",
    description: "Injury has damaged the tooth's nerve",
    symptoms: ["Discoloration", "Sensitivity", "Pain", "Swelling"],
    urgency: "Urgent",
    consequences: "Nerve death, tooth darkening, potential loss"
  },
  {
    condition: "Large Filling Failure",
    description: "Extensive restoration has compromised nerve health",
    symptoms: ["Intermittent pain", "Sensitivity", "Discomfort when chewing"],
    urgency: "Moderate to Urgent",
    consequences: "Complete nerve breakdown, need for extraction"
  },
  {
    condition: "Cracked Tooth",
    description: "Crack has exposed nerve to bacteria",
    symptoms: ["Sharp pain when biting", "Temperature sensitivity", "Pain releasing bite"],
    urgency: "Urgent",
    consequences: "Infection, complete tooth fracture, extraction"
  }
];

const treatmentProcess = [
  {
    stage: "1",
    title: "Diagnosis & Planning",
    description: "Comprehensive assessment and treatment planning",
    duration: "30-45 minutes",
    includes: ["Clinical examination", "Digital X-rays", "Pulp vitality tests", "3D imaging if needed", "Treatment planning"],
    outcome: "Confirmed diagnosis and clear treatment plan"
  },
  {
    stage: "2",
    title: "Access & Anaesthesia",
    description: "Comfortable numbing and access to tooth interior",
    duration: "15-20 minutes",
    includes: ["Profound local anaesthesia", "Rubber dam isolation", "Access hole creation", "Initial cleaning", "Comfort verification"],
    outcome: "Pain-free access to infected nerve"
  },
  {
    stage: "3",
    title: "Cleaning & Shaping",
    description: "Thorough removal of infected tissue",
    duration: "45-90 minutes",
    includes: ["Complete nerve removal", "Root canal cleaning", "Disinfection", "Shaping canals", "Irrigation"],
    outcome: "Completely clean, disinfected root canals"
  },
  {
    stage: "4",
    title: "Filling & Sealing",
    description: "Permanent sealing of clean root canals",
    duration: "30-45 minutes",
    includes: ["Canal drying", "Gutta-percha filling", "Sealer application", "Access hole filling", "X-ray verification"],
    outcome: "Permanently sealed, bacteria-proof tooth"
  },
  {
    stage: "5",
    title: "Crown Placement",
    description: "Protective crown to strengthen treated tooth",
    duration: "2 appointments",
    includes: ["Tooth preparation", "Crown impressions", "Temporary crown", "Final crown fitting", "Bite adjustment"],
    outcome: "Strong, functional, natural-looking tooth"
  }
];

const mythsVsFacts = [
  {
    myth: "Root canal treatment is extremely painful",
    fact: "Modern root canal therapy is no more painful than a large filling",
    explanation: "Advanced anaesthetics and techniques make the procedure comfortable. Most pain comes from the infection, which treatment relieves.",
    truthLevel: "Complete myth"
  },
  {
    myth: "It's better to extract the tooth than have root canal",
    fact: "Saving your natural tooth is almost always the best option",
    explanation: "Root canal treatment has a 95% success rate and allows you to keep your natural tooth for life with proper care.",
    truthLevel: "Generally false"
  },
  {
    myth: "Root canal treatment causes illness",
    fact: "Root canal treatment eliminates infection and promotes health",
    explanation: "This myth stems from 100-year-old research that has been thoroughly debunked by modern science.",
    truthLevel: "Complete myth"
  },
  {
    myth: "Root canal treatment takes many appointments",
    fact: "Most root canals are completed in 1-2 visits",
    explanation: "Modern techniques and materials allow most treatments to be completed efficiently in one or two appointments.",
    truthLevel: "Partially outdated"
  },
  {
    myth: "Root canal teeth become brittle and break",
    fact: "Properly restored root canal teeth last as long as natural teeth",
    explanation: "With a crown, root canal treated teeth function normally. Studies show 85-95% success rates over 10+ years.",
    truthLevel: "Myth when crowned"
  },
  {
    myth: "Antibiotics can cure the infection instead",
    fact: "Antibiotics cannot reach inside the tooth where infection lives",
    explanation: "The infection is inside the tooth where blood supply is cut off. Only physical removal can cure it.",
    truthLevel: "Complete myth"
  }
];

const successRates = [
  {
    timeframe: "1 Year Success Rate",
    percentage: "95-98%",
    description: "Initial healing and symptom resolution",
    factors: ["Complete infection removal", "Proper sealing", "Crown placement"]
  },
  {
    timeframe: "5 Year Success Rate",
    percentage: "90-95%",
    description: "Long-term stability and function",
    factors: ["Good oral hygiene", "Regular check-ups", "Avoiding hard foods"]
  },
  {
    timeframe: "10+ Year Success Rate",
    percentage: "85-90%",
    description: "Lifetime tooth preservation",
    factors: ["Crown maintenance", "Preventing new decay", "Professional monitoring"]
  }
];

const alternativesToExtraction = [
  {
    option: "Root Canal Treatment",
    cost: "£300-450",
    timeframe: "1-2 appointments",
    lifespan: "Lifetime with crown",
    advantages: ["Keep natural tooth", "Normal chewing function", "No gap in smile", "Prevent teeth shifting"],
    disadvantages: ["Higher initial cost", "Requires crown", "2-stage process"],
    successRate: "95%"
  },
  {
    option: "Tooth Extraction",
    cost: "£180-300",
    timeframe: "1 appointment",
    lifespan: "Permanent removal",
    advantages: ["Lower initial cost", "Quick procedure", "Immediate problem resolution"],
    disadvantages: ["Permanent tooth loss", "Needs replacement", "Affects chewing", "Jawbone shrinkage"],
    successRate: "100% (tooth gone)"
  },
  {
    option: "Extraction + Implant",
    cost: "£3,000+",
    timeframe: "3-6 months",
    lifespan: "20+ years",
    advantages: ["Most like natural tooth", "No affect on other teeth", "Excellent function"],
    disadvantages: ["Highest cost", "Surgical procedure", "Long treatment time", "Not suitable for all"],
    successRate: "95-98%"
  },
  {
    option: "Extraction + Bridge",
    cost: "£750+ per unit",
    timeframe: "2-3 weeks",
    lifespan: "10-15 years",
    advantages: ["Fixed solution", "Good appearance", "Relatively quick"],
    disadvantages: ["Affects healthy teeth", "Harder to clean", "May need replacement"],
    successRate: "90-95%"
  }
];

const afterCareInstructions = [
  {
    timeframe: "First 24 Hours",
    instructions: [
      "Take prescribed pain medication as directed",
      "Avoid chewing on treated tooth",
      "Eat soft foods and drink cool liquids",
      "Keep head elevated when sleeping",
      "Use ice packs for any swelling (15 min on/off)"
    ],
    whatToExpect: "Mild discomfort, some sensitivity, possible slight swelling"
  },
  {
    timeframe: "First Week",
    instructions: [
      "Continue pain medication as needed",
      "Gentle brushing around treated area",
      "Avoid hard, sticky, or chewy foods",
      "Rinse with warm salt water if recommended",
      "Attend follow-up appointment if scheduled"
    ],
    whatToExpect: "Decreasing discomfort, improved comfort when eating"
  },
  {
    timeframe: "Until Crown Placement",
    instructions: [
      "Protect temporary filling carefully",
      "Avoid chewing on treated side",
      "Don't delay crown appointment",
      "Report any problems immediately",
      "Maintain excellent oral hygiene"
    ],
    whatToExpect: "Tooth may feel different, temporary filling may wear"
  },
  {
    timeframe: "Long-term Care",
    instructions: [
      "Maintain excellent oral hygiene",
      "Regular dental check-ups every 6 months",
      "Avoid extremely hard foods (ice, hard candy)",
      "Use nightguard if you grind teeth",
      "Monitor for any changes or discomfort"
    ],
    whatToExpect: "Tooth should feel and function normally"
  }
];

const faqs = [
  {
    question: "Is root canal treatment really painful?",
    answer: "Modern root canal treatment is not painful! We use powerful local anaesthetics that completely numb the area. Most patients report the procedure feels similar to having a large filling. Any discomfort typically comes from the original infection, which the treatment relieves."
  },
  {
    question: "How much does root canal treatment cost?",
    answer: "Root canal treatment costs £300-450 depending on which tooth is treated (single canal £300, 2 canals £350, molar £450). While this investment may seem significant, it's much less than extraction and replacement with an implant (£3,000+) or bridge (£750+ per unit), and saves your natural tooth."
  },
  {
    question: "How long does root canal treatment take?",
    answer: "Most root canal treatments are completed in 1-2 appointments, each lasting 60-90 minutes. Front teeth often need just one visit, while back teeth may require two visits. We'll give you a timeline specific to your situation during consultation."
  },
  {
    question: "Do I need a crown after root canal treatment?",
    answer: "Yes, a crown is usually recommended after root canal treatment, especially for back teeth. The crown protects the tooth from fracture and restores full function. Front teeth sometimes only need a filling, but crowns provide the best long-term protection."
  },
  {
    question: "What are the alternatives to root canal treatment?",
    answer: "The main alternative is tooth extraction, but this creates new problems requiring expensive solutions like implants or bridges. Root canal treatment has a 95% success rate and allows you to keep your natural tooth, making it usually the best choice."
  },
  {
    question: "How successful is root canal treatment?",
    answer: "Root canal treatment has a 95-98% success rate initially, with 85-90% of treated teeth lasting a lifetime when properly crowned and maintained. This makes it one of the most successful dental procedures and much more predictable than tooth extraction and replacement."
  }
];

export default function RootCanalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData
        serviceName="Root Canal Treatment"
        description="Modern, comfortable endodontic therapy to save infected teeth. Pain-free treatment with 95% success rate - keep your natural tooth for life."
        provider={{
          "@type": "Dentist",
          "name": "Pear Tree Dental Centre",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "22 Nottingham Road",
            "addressLocality": "Burton Joyce",
            "addressRegion": "Nottinghamshire",
            "postalCode": "NG14 5AE",
            "addressCountry": "GB"
          }
        }}
        areaServed={["Burton Joyce", "Nottingham", "Nottinghamshire"]}
        availableChannel={{
          "@type": "ServiceChannel",
          "serviceUrl": "https://peartree.dental/services/restorative/root-canal",
          "servicePhone": "0115 931 2935"
        }}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-dental-green/10 via-white to-soft-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-dental-green text-white">
                <Shield className="w-4 h-4 mr-2" />
                Save Your Natural Tooth
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary leading-tight mb-6">
                Root Canal
                <span className="block text-dental-green">Treatment</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Modern, comfortable endodontic therapy to save infected teeth.
                Pain-free treatment with 95% success rate - keep your natural tooth for life.
              </p>

              <div className="bg-soft-blue/20 border border-soft-blue rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-6 h-6 text-soft-blue" />
                  <div>
                    <div className="font-bold text-pear-primary">MYTH BUSTER</div>
                    <div className="text-gray-600 text-sm">Root canal treatment RELIEVES pain, doesn't cause it!</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
                <Link href="tel:01159312935">
                  <Button variant="outline" className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 0115 931 2935
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-dental-green">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">Pain-Free</div>
                  <div className="text-sm text-gray-600">Modern Treatment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">1-2 Visits</div>
                  <div className="text-sm text-gray-600">Completion</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">Lifetime</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-dental-green/20 to-soft-blue/20 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-dental-green mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-pear-primary mb-2">ROOT CANAL THERAPY</h3>
                    <p className="text-gray-600">Save your natural tooth</p>
                  </div>
                </div>
              </Card>

              {/* Success badge */}
              <div className="absolute -top-4 -right-4 bg-dental-green text-white rounded-full px-4 py-2 shadow-lg">
                <div className="text-center">
                  <Award className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-bold">95%</p>
                  <p className="text-xs">SUCCESS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Root Canal is Needed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              When Root Canal Treatment is Needed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the conditions that require endodontic therapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyRootCanal.map((condition, index) => (
              <Card key={index} className={`border-l-4 ${
                condition.urgency === 'Urgent' ? 'border-red-600 bg-red-50' :
                'border-orange-600 bg-orange-50'
              }`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{condition.condition}</CardTitle>
                    <Badge className={`${
                      condition.urgency === 'Urgent' ? 'bg-red-600' : 'bg-orange-600'
                    } text-white`}>
                      {condition.urgency}
                    </Badge>
                  </div>
                  <CardDescription>{condition.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Symptoms:</h4>
                    <ul className="space-y-1">
                      {condition.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-dental-green" />
                          <span className="text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded border border-red-200">
                    <h4 className="font-semibold mb-1 text-red-800">Without Treatment:</h4>
                    <p className="text-sm text-red-700">{condition.consequences}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Root Canal Myths vs Facts
            </h2>
            <p className="text-xl text-gray-600">
              Debunking common misconceptions about root canal treatment
            </p>
          </div>

          <div className="space-y-6">
            {mythsVsFacts.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded border border-red-200">
                      <div className="flex items-start space-x-3">
                        <X className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-red-800 mb-2">MYTH</h3>
                          <p className="text-red-700">{item.myth}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded border border-green-200">
                      <div className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-green-800 mb-2">FACT</h3>
                          <p className="text-green-700">{item.fact}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-soft-blue/20 rounded border border-soft-blue">
                    <h4 className="font-semibold text-pear-primary mb-2">Explanation:</h4>
                    <p className="text-gray-700 text-sm">{item.explanation}</p>
                    <Badge className="mt-2 bg-pear-primary text-white">{item.truthLevel}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Root Canal Treatment Process
            </h2>
            <p className="text-xl text-gray-600">
              Step-by-step modern endodontic therapy
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
                        <h3 className="font-semibold text-xl text-pear-primary mb-2">{stage.title}</h3>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                      <Badge variant="outline" className="border-pear-primary text-pear-primary">{stage.duration}</Badge>
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
                      <div className="bg-dental-green/10 p-4 rounded">
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

      {/* Success Rates */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Root Canal Success Rates
            </h2>
            <p className="text-xl text-gray-600">
              Proven long-term success of endodontic treatment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successRates.map((rate, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-4xl font-bold text-dental-green mb-2">{rate.percentage}</div>
                <h3 className="font-semibold text-lg text-pear-primary mb-3">{rate.timeframe}</h3>
                <p className="text-gray-600 mb-4">{rate.description}</p>

                <div>
                  <h4 className="font-semibold mb-2">Key Factors:</h4>
                  <ul className="space-y-1">
                    {rate.factors.map((factor, idx) => (
                      <li key={idx} className="flex items-center space-x-2 justify-center">
                        <CheckCircle className="w-4 h-4 text-dental-green" />
                        <span className="text-sm">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Alternatives Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Treatment Options Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Compare root canal with alternatives to make an informed decision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {alternativesToExtraction.map((option, index) => (
              <Card key={index} className={`${option.option === 'Root Canal Treatment' ? 'ring-2 ring-dental-green relative' : ''}`}>
                {option.option === 'Root Canal Treatment' && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-dental-green text-white">
                    Recommended
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{option.option}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dental-green">{option.cost}</div>
                      <div className="text-sm text-gray-500">{option.timeframe}</div>
                    </div>
                  </div>
                  <CardDescription>
                    <strong>Lifespan:</strong> {option.lifespan} | <strong>Success:</strong> {option.successRate}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">Advantages:</h4>
                    <ul className="space-y-1">
                      {option.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-orange-700">Disadvantages:</h4>
                    <ul className="space-y-1">
                      {option.disadvantages.map((disadvantage, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <X className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">{disadvantage}</span>
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

      {/* After Care */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Post-Treatment Care
            </h2>
            <p className="text-xl text-gray-600">
              Essential aftercare for optimal healing and success
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

                  <div className="bg-dental-green/10 p-3 rounded border">
                    <h4 className="font-semibold mb-1">What to Expect:</h4>
                    <p className="text-sm text-gray-700">{period.whatToExpect}</p>
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
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
              Root Canal Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about endodontic treatment
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-pear-primary mb-3">{faq.question}</h3>
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
            Save Your Natural Tooth Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let tooth pain control your life. Modern root canal treatment is comfortable,
            successful, and saves your natural tooth for life. Book your consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-dental-green hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <Link href="tel:01159312935">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-green">
                <Phone className="w-5 h-5 mr-2" />
                Call 0115 931 2935
              </Button>
            </Link>
          </div>

          <div className="text-white/90 space-y-2">
            <p className="font-medium">💚 95% success rate • Pain-free treatment • Save natural tooth • 20% membership discount</p>
            <p className="text-sm">22 Nottingham Road, Burton Joyce, Nottinghamshire NG14 5AE</p>
          </div>
        </div>
      </section>
    </div>
  );
}
