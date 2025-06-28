import type { Metadata } from "next";
import Link from "next/link";
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
  Monitor,
  Phone
} from "lucide-react";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Complete Smile Makeover | Total Smile Transformation Burton Joyce - Pear Tree Dental",
  description: "Complete smile makeover in Burton Joyce. Transform your entire smile with digital preview. Comprehensive treatment packages combining multiple cosmetic procedures from £800.",
  keywords: [
    "smile makeover Burton Joyce",
    "complete smile transformation",
    "digital smile design",
    "cosmetic dentistry packages",
    "porcelain veneers makeover",
    "teeth whitening makeover",
    "Burton Joyce cosmetic dentist"
  ],
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
      <ServiceStructuredData
        serviceName="Complete Smile Makeover"
        description="Transform your entire smile with comprehensive makeover packages combining multiple cosmetic procedures. Digital preview technology shows results before treatment."
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
          "serviceUrl": "https://peartree.dental/services/smile-makeover",
          "servicePhone": "0115 931 2935"
        }}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-soft-pink via-white to-soft-lavender">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-pear-gold text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Complete Transformation
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary leading-tight mb-6">
                Complete Smile
                <span className="block text-pear-gold">Makeover</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your entire smile with our comprehensive makeover packages.
                See your new smile before treatment with digital preview technology.
              </p>

              <div className="bg-pear-background border border-pear-gold/20 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Camera className="w-6 h-6 text-pear-gold" />
                  <div>
                    <div className="font-bold text-pear-primary">DIGITAL PREVIEW</div>
                    <div className="text-gray-600 text-sm">See your new smile before any treatment begins!</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="btn-gold text-white w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
                <Link href="tel:01159312935">
                  <Button variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 0115 931 2935
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-pear-gold">£800</div>
                  <div className="text-sm text-gray-600">From</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pear-gold">Digital</div>
                  <div className="text-sm text-gray-600">Preview</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pear-gold">2-8 Weeks</div>
                  <div className="text-sm text-gray-600">Complete</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pear-gold">Lifetime</div>
                  <div className="text-sm text-gray-600">Confidence</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-pear-background to-soft-lavender flex items-center justify-center">
                  <div className="text-center">
                    <Crown className="w-16 h-16 text-pear-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-pear-primary mb-2">SMILE MAKEOVER</h3>
                    <p className="text-gray-600">Complete transformation</p>
                  </div>
                </div>
              </Card>

              {/* Social Proof Sticker */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pear-gold to-pear-primary text-white rounded-full px-4 py-2 shadow-lg transform rotate-12">
                <div className="text-center">
                  <div className="text-sm font-bold">TRANSFORMED</div>
                  <div className="text-lg font-extrabold">400+</div>
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
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Smile Makeover Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your smile goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {makeoverPackages.map((pkg, index) => (
              <Card key={index} className={`${pkg.popular ? 'ring-2 ring-pear-gold scale-105 relative' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pear-gold text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{pkg.package}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pear-gold">{pkg.cost}</div>
                      <div className="text-sm text-gray-500">{pkg.duration}</div>
                    </div>
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-pear-background p-3 rounded border border-pear-gold/20">
                    <h4 className="font-semibold mb-1 text-pear-primary">Best for:</h4>
                    <p className="text-sm text-gray-600">{pkg.suitability}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((include, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
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

                  <div className="bg-soft-blue/20 p-3 rounded border">
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
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
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
                  <div className="w-20 bg-pear-gold flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{stage.stage}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-xl text-pear-primary mb-2">{stage.title}</h3>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="border-pear-primary text-pear-primary">{stage.duration}</Badge>
                        <div className="text-sm text-gray-500 mt-1">{stage.technology}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Process Includes:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {stage.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-pear-gold" />
                            <span className="text-sm">{item}</span>
                          </div>
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
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
                    <div className="w-12 h-12 bg-pear-gold rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 mb-3">{benefit.description}</p>

                      <ul className="space-y-1">
                        {benefit.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-pear-gold" />
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

      {/* FAQ Section */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
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
                  <h3 className="font-semibold text-pear-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-pear-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Your Dream Smile?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your entire smile with our comprehensive makeover packages.
            See your results with digital preview before any treatment begins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-pear-primary hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <Link href="tel:01159312935">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call 0115 931 2935
              </Button>
            </Link>
          </div>

          <div className="text-white/90 space-y-2">
            <p className="font-medium">✨ Digital preview • Complete transformation • Expert coordination • 20% membership discount</p>
            <p className="text-sm">22 Nottingham Road, Burton Joyce, Nottinghamshire NG14 5AE</p>
          </div>
        </div>
      </section>
    </div>
  );
}
