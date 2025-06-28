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
  Eye,
  Heart,
  Sparkles,
  Target,
  Award,
  Stethoscope,
  Activity,
  Phone
} from "lucide-react";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Dental Check-ups & Professional Cleaning | Routine Dental Care Burton Joyce - Pear Tree Dental",
  description: "Comprehensive dental check-ups and professional cleaning in Burton Joyce. Prevent problems, maintain oral health. Book your routine appointment from £0 with membership.",
  keywords: [
    "dental check up Burton Joyce",
    "professional teeth cleaning",
    "routine dental care",
    "preventive dentistry",
    "dental hygienist",
    "oral health examination",
    "Burton Joyce dentist"
  ],
};

const checkupIncludes = [
  {
    examination: "Oral Health Assessment",
    description: "Comprehensive examination of teeth, gums, and oral tissues",
    details: [
      "Visual examination of all teeth surfaces",
      "Gum health and pocket depth measurement",
      "Oral cancer screening",
      "Bite and jaw alignment check",
      "Assessment of existing restorations"
    ],
    duration: "15-20 minutes",
    frequency: "Every 6 months"
  },
  {
    examination: "Digital X-rays (when needed)",
    description: "Low-radiation digital imaging for comprehensive diagnosis",
    details: [
      "Bitewing X-rays for cavity detection",
      "Panoramic X-ray for overall assessment",
      "Immediate digital results",
      "90% less radiation than traditional X-rays",
      "Stored digitally for comparison"
    ],
    duration: "5-10 minutes",
    frequency: "Annually or as needed"
  },
  {
    examination: "Professional Scale & Polish",
    description: "Thorough cleaning to remove plaque and tartar buildup",
    details: [
      "Ultrasonic scaling to remove tartar",
      "Hand scaling for detailed cleaning",
      "Polishing with professional paste",
      "Stain removal and brightening",
      "Fluoride treatment application"
    ],
    duration: "20-30 minutes",
    frequency: "Every 6 months"
  },
  {
    examination: "Oral Hygiene Education",
    description: "Personalized advice for optimal home care",
    details: [
      "Brushing technique demonstration",
      "Flossing and interdental cleaning guidance",
      "Dietary advice for oral health",
      "Product recommendations",
      "Problem area identification"
    ],
    duration: "10-15 minutes",
    frequency: "Each visit"
  }
];

const preventiveBenefits = [
  {
    benefit: "Early Problem Detection",
    description: "Catch issues before they become painful and expensive",
    examples: ["Small cavities before they need crowns", "Gum disease before tooth loss", "Oral cancer in early stages"],
    savings: "Save 80% on treatment costs",
    icon: Eye
  },
  {
    benefit: "Maintain Excellent Oral Health",
    description: "Keep your teeth and gums healthy for life",
    examples: ["Remove harmful bacteria and plaque", "Prevent gum disease progression", "Maintain fresh breath"],
    savings: "Avoid major treatments",
    icon: Heart
  },
  {
    benefit: "Professional Deep Cleaning",
    description: "Remove buildup that home brushing can't reach",
    examples: ["Tartar removal below gum line", "Stain removal and polishing", "Fluoride strengthening"],
    savings: "Prevent decay and disease",
    icon: Sparkles
  },
  {
    benefit: "Personalized Care Plan",
    description: "Tailored advice for your specific oral health needs",
    examples: ["Custom brushing techniques", "Dietary recommendations", "Product suggestions"],
    savings: "Optimize home care",
    icon: Target
  }
];

const membershipValue = [
  {
    plan: "Without Membership",
    checkupCost: "£60",
    cleaningCost: "£80",
    xrayCost: "£25-50",
    annualCost: "£300-400",
    includes: ["Basic examination", "Standard cleaning", "X-rays when needed"]
  },
  {
    plan: "With Membership",
    checkupCost: "Included",
    cleaningCost: "Included",
    xrayCost: "Included",
    annualCost: "£131.40-191.40",
    includes: ["Comprehensive examination", "Professional cleaning", "All necessary X-rays", "20% off treatments", "Emergency cover"]
  }
];

const ageSpecificCare = [
  {
    ageGroup: "Children (2-12 years)",
    frequency: "Every 6 months",
    focus: ["Cavity prevention", "Fluoride treatments", "Fissure sealants", "Oral hygiene education"],
    specialNeeds: "Fun, gentle approach to build positive dental experiences"
  },
  {
    ageGroup: "Teenagers (13-18 years)",
    frequency: "Every 6 months",
    focus: ["Orthodontic assessment", "Wisdom tooth monitoring", "Sports mouthguards", "Diet counseling"],
    specialNeeds: "Address aesthetic concerns and lifestyle factors"
  },
  {
    ageGroup: "Adults (19-64 years)",
    frequency: "Every 6 months",
    focus: ["Gum disease prevention", "Wear pattern assessment", "Restoration monitoring", "Cancer screening"],
    specialNeeds: "Comprehensive care addressing work stress and lifestyle"
  },
  {
    ageGroup: "Seniors (65+ years)",
    frequency: "Every 4-6 months",
    focus: ["Dry mouth management", "Medication effects", "Denture care", "Mobility considerations"],
    specialNeeds: "Gentle care accommodating health conditions and medications"
  }
];

const warningSignsToWatch = [
  {
    sign: "Bleeding Gums",
    severity: "Early Warning",
    description: "Blood when brushing or flossing",
    action: "Book check-up within 2-4 weeks",
    meaning: "Early sign of gum disease"
  },
  {
    sign: "Persistent Bad Breath",
    severity: "Moderate",
    description: "Bad breath that doesn't improve with oral hygiene",
    action: "Schedule appointment within 1-2 weeks",
    meaning: "Possible bacterial infection or decay"
  },
  {
    sign: "Tooth Sensitivity",
    severity: "Moderate",
    description: "Pain with hot, cold, or sweet foods",
    action: "Book appointment within 1-2 weeks",
    meaning: "Possible cavity or enamel wear"
  },
  {
    sign: "Tooth Pain",
    severity: "Urgent",
    description: "Any tooth pain or discomfort",
    action: "Emergency appointment needed",
    meaning: "Likely decay or infection"
  },
  {
    sign: "Loose Teeth",
    severity: "Urgent",
    description: "Adult teeth feeling loose or moving",
    action: "Emergency appointment needed",
    meaning: "Advanced gum disease or trauma"
  },
  {
    sign: "Visible Holes or Dark Spots",
    severity: "Urgent",
    description: "Dark spots or holes visible on teeth",
    action: "Urgent appointment within days",
    meaning: "Active tooth decay"
  }
];

const oralHealthTips = [
  {
    category: "Daily Brushing",
    recommendation: "Brush twice daily with fluoride toothpaste",
    technique: [
      "Use soft-bristled toothbrush",
      "Brush for 2 minutes minimum",
      "Use gentle circular motions",
      "Clean tongue and gums too",
      "Replace toothbrush every 3 months"
    ],
    products: ["Electric toothbrush recommended", "Fluoride toothpaste", "Tongue cleaner"]
  },
  {
    category: "Interdental Cleaning",
    recommendation: "Clean between teeth daily",
    technique: [
      "Use dental floss or interdental brushes",
      "Clean gently to avoid gum damage",
      "Use mouthwash to reach all areas",
      "Consider water flossers for ease",
      "Don't skip this crucial step"
    ],
    products: ["Dental floss", "Interdental brushes", "Water flosser", "Antimicrobial mouthwash"]
  },
  {
    category: "Diet & Lifestyle",
    recommendation: "Eat tooth-friendly foods and avoid harmful habits",
    technique: [
      "Limit sugary and acidic foods",
      "Drink plenty of water",
      "Avoid smoking and excessive alcohol",
      "Chew sugar-free gum after meals",
      "Use a straw for acidic drinks"
    ],
    products: ["Sugar-free gum", "Fluoride rinse", "Healthy snacks"]
  }
];

const faqs = [
  {
    question: "How often should I have a dental check-up and cleaning?",
    answer: "Most patients should visit every 6 months for routine check-ups and cleaning. However, some patients with gum disease or high cavity risk may need more frequent visits every 3-4 months. We'll recommend the right frequency based on your individual oral health needs."
  },
  {
    question: "What's included in a routine dental check-up?",
    answer: "A comprehensive check-up includes examination of all teeth and gums, oral cancer screening, bite assessment, review of existing fillings/crowns, digital X-rays when needed, professional cleaning and polishing, fluoride treatment, and personalized oral hygiene advice."
  },
  {
    question: "Is professional cleaning painful?",
    answer: "Professional cleaning should not be painful. You may feel some pressure during scaling and slight sensitivity if you have gum inflammation. We use gentle techniques and can apply topical anaesthetic if needed. Most patients find the cleaning comfortable and refreshing."
  },
  {
    question: "How much does a dental check-up and cleaning cost?",
    answer: "Without membership: Check-up £60, Cleaning £80, X-rays £25-50 (total £165-190). With our membership plans, both check-ups and cleanings are included, saving you £300+ annually. Membership starts from £10.95/month."
  },
  {
    question: "Can I skip check-ups if my teeth feel fine?",
    answer: "No, regular check-ups are essential even if you feel fine. Many dental problems like early cavities and gum disease develop without symptoms. Regular visits catch problems early when they're easier and cheaper to treat, potentially saving you from painful and expensive treatments later."
  },
  {
    question: "What happens if you find a problem during my check-up?",
    answer: "If we find any issues, we'll explain them clearly and discuss treatment options. For minor problems, we can often treat them immediately. For larger issues, we'll schedule appropriate treatment and provide advice for managing any discomfort until your next appointment."
  }
];

export default function CheckupsCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData
        serviceName="Dental Check-ups & Professional Cleaning"
        description="Comprehensive dental check-ups and professional cleaning to prevent problems and maintain excellent oral health. Regular preventive care for lasting dental wellness."
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
          "serviceUrl": "https://peartree.dental/services/general/check-ups",
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
                Preventive Care
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary leading-tight mb-6">
                Dental Check-ups
                <span className="block text-dental-green">& Professional Cleaning</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Maintain excellent oral health with regular professional care. Our comprehensive
                check-ups and cleaning prevent problems before they start, saving you time, money, and discomfort.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Check-up
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
                  <div className="text-2xl font-bold text-dental-green">£0</div>
                  <div className="text-sm text-gray-600">With Membership</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">6 Months</div>
                  <div className="text-sm text-gray-600">Recommended</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">60min</div>
                  <div className="text-sm text-gray-600">Comprehensive</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">Prevention</div>
                  <div className="text-sm text-gray-600">Focused</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-dental-green/20 to-soft-blue/20 flex items-center justify-center">
                  <div className="text-center">
                    <Stethoscope className="w-16 h-16 text-dental-green mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-pear-primary mb-2">PREVENTIVE CARE</h3>
                    <p className="text-gray-600">Professional examination & cleaning</p>
                  </div>
                </div>
              </Card>

              {/* Preventive badge */}
              <div className="absolute -top-4 -right-4 bg-dental-green text-white rounded-full px-4 py-2 shadow-lg">
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-bold">PREVENT</p>
                  <p className="text-xs">PROBLEMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Comprehensive Check-up Includes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every visit includes thorough examination and professional cleaning
            </p>
          </div>

          <div className="space-y-8">
            {checkupIncludes.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-20 bg-dental-green flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-xl text-pear-primary mb-2">{item.examination}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>Duration: {item.duration}</div>
                        <div>Frequency: {item.frequency}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-dental-green" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Benefits */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Benefits of Regular Check-ups
            </h2>
            <p className="text-xl text-gray-600">
              Prevention is always better than cure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {preventiveBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dental-green rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 mb-3">{benefit.description}</p>

                      <div className="space-y-2 mb-4">
                        {benefit.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-dental-green" />
                            <span className="text-sm text-gray-700">{example}</span>
                          </div>
                        ))}
                      </div>

                      <Badge className="bg-dental-green text-white">
                        {benefit.savings}
                      </Badge>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Value Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Membership Plan Savings
            </h2>
            <p className="text-xl text-gray-600">
              Save significantly with our membership plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipValue.map((plan, index) => (
              <Card key={index} className={`p-6 ${index === 1 ? 'border-2 border-dental-green bg-dental-green/5 relative' : ''}`}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-dental-green text-white">
                    Best Value
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-semibold text-xl text-pear-primary mb-2">{plan.plan}</h3>
                  <div className="text-3xl font-bold text-dental-green mb-2">{plan.annualCost}</div>
                  <div className="text-sm text-gray-600">per year for routine care</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Check-up (2x/year):</span>
                    <span className="font-medium">{plan.checkupCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning (2x/year):</span>
                    <span className="font-medium">{plan.cleaningCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>X-rays (as needed):</span>
                    <span className="font-medium">{plan.xrayCost}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {plan.includes.map((include, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-dental-green" />
                      <span className="text-sm">{include}</span>
                    </div>
                  ))}
                </div>

                {index === 1 && (
                  <div className="mt-6">
                    <Badge className="bg-dental-green text-white w-full justify-center">
                      Save £100-200+ per year
                    </Badge>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Care */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Care for Every Age
            </h2>
            <p className="text-xl text-gray-600">
              Tailored dental care from childhood through senior years
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ageSpecificCare.map((group, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-pear-primary">{group.ageGroup}</h3>
                  <Badge variant="outline" className="text-dental-green border-dental-green">
                    {group.frequency}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.focus.map((focus, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {focus}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-dental-green/10 p-3 rounded">
                    <h4 className="font-semibold mb-1">Special Considerations:</h4>
                    <p className="text-sm text-gray-700">{group.specialNeeds}</p>
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
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Warning Signs to Watch For
            </h2>
            <p className="text-xl text-gray-600">
              Don't wait for your next check-up if you notice these symptoms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSignsToWatch.map((warning, index) => (
              <Card key={index} className={`border-l-4 ${
                warning.severity === 'Urgent' ? 'border-red-600 bg-red-50' :
                warning.severity === 'Moderate' ? 'border-orange-600 bg-orange-50' :
                'border-yellow-600 bg-yellow-50'
              }`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{warning.sign}</CardTitle>
                    <Badge className={`${
                      warning.severity === 'Urgent' ? 'bg-red-600' :
                      warning.severity === 'Moderate' ? 'bg-orange-600' :
                      'bg-yellow-600'
                    } text-white`}>
                      {warning.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-700">{warning.description}</p>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold mb-1">Action:</h4>
                    <p className="text-sm text-gray-700">{warning.action}</p>
                  </div>

                  <div className="text-xs text-gray-600">
                    <strong>Likely cause:</strong> {warning.meaning}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Oral Health Tips */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Home Care Tips
            </h2>
            <p className="text-xl text-gray-600">
              Maintain your oral health between visits
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {oralHealthTips.map((tip, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-dental-green text-lg mb-4">{tip.category}</h3>

                <div className="space-y-4">
                  <div className="bg-dental-green/10 p-3 rounded">
                    <h4 className="font-semibold mb-1">Recommendation:</h4>
                    <p className="text-sm text-gray-700">{tip.recommendation}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technique:</h4>
                    <ul className="space-y-1">
                      {tip.technique.map((tech, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-dental-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Recommended Products:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tip.products.map((product, idx) => (
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
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
              Check-up Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about routine dental care
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
            Book Your Routine Check-up Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Maintain excellent oral health with regular professional care.
            Prevention is always better and cheaper than cure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-dental-green hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Check-up
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
            <p className="font-medium">💚 Prevention focused • Comprehensive care • Membership savings available</p>
            <p className="text-sm">22 Nottingham Road, Burton Joyce, Nottinghamshire NG14 5AE</p>
          </div>
        </div>
      </section>
    </div>
  );
}
