import React from "react";
import {
  ArrowRight,
  Award,
  CheckCircle,
  ChevronLeft,
  Clock,
  Crown,
  Grid,
  Shield,
  Smile, 
  Star,
  Target,
  Zap
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ServiceNavigation from "@/components/ServiceNavigation";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import ServiceFAQSchema from "@/components/seo/ServiceFAQSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "All-on-4 Dental Implants - Full Arch Restoration | Pear Tree Dental",
  description: "All-on-4 dental implants in Burton Joyce. Replace entire arch of teeth with just 4 strategically placed implants. From £15,000. Same day teeth available.",
  keywords: [
    "All-on-4 implants Burton Joyce",
    "full arch dental implants",
    "same day teeth implants",
    "complete mouth restoration",
    "All-on-4 Nottingham",
    "full mouth implants",
    "immediate load implants"
  ],
  openGraph: {
    title: "All-on-4 Dental Implants - Full Arch Restoration | Pear Tree Dental",
    description: "Replace entire arch of teeth with All-on-4 implants. Revolutionary same-day teeth solution.",
    type: "website",
    url: "https://peartree.dental/services/implants/all-on-4"
  },
  alternates: {
    canonical: "https://peartree.dental/services/implants/all-on-4"
  }
};

export default function AllOn4Page() {
  const allOn4FAQs = [
    {
      question: "What is All-on-4 and how does it work?",
      answer: "All-on-4 is a revolutionary technique that replaces an entire arch of teeth using just 4 strategically placed implants. The rear implants are angled to maximize bone contact and avoid the need for bone grafting."
    },
    {
      question: "Can I really get new teeth in one day?",
      answer: "Yes! All-on-4 allows for immediate loading, meaning you can receive a temporary set of teeth on the same day as your implant surgery. Final teeth are placed after 3-6 months of healing."
    },
    {
      question: "Am I a candidate if I have bone loss?",
      answer: "Often yes! All-on-4 is designed for patients with bone loss. The angled rear implants and strategic positioning often eliminate the need for bone grafting procedures."
    },
    {
      question: "How long do All-on-4 implants last?",
      answer: "All-on-4 implants can last 20+ years with proper care. The prosthetic teeth may need replacement after 10-15 years, but the implants themselves can last a lifetime."
    },
    {
      question: "What's the difference between All-on-4 and traditional implants?",
      answer: "All-on-4 uses only 4 implants per arch compared to 6-8 traditional implants. It's more cost-effective, requires less surgery, and often avoids bone grafting with immediate results."
    }
  ];

  const benefits = [
    {
      icon: Grid,
      title: "Just 4 Implants",
      description: "Replace entire arch with only 4 strategically placed implants"
    },
    {
      icon: Zap,
      title: "Same Day Teeth",
      description: "Walk out with a new smile on the day of surgery"
    },
    {
      icon: Shield,
      title: "Avoid Bone Grafting",
      description: "Angled implants often eliminate need for bone grafts"
    },
    {
      icon: Award,
      title: "Proven Technique",
      description: "Decades of research and millions of successful cases worldwide"
    }
  ];

  const advantages = [
    "Only 4 implants needed per arch",
    "Same-day teeth placement possible",
    "Often avoids bone grafting",
    "Faster treatment time",
    "More cost-effective than individual implants",
    "Immediate functional improvement",
    "Stable, secure prosthetic",
    "Proven long-term success"
  ];

  const candidates = [
    {
      condition: "Multiple Missing Teeth",
      description: "Most or all teeth missing in upper or lower arch",
      suitable: "Excellent candidate",
      icon: Target
    },
    {
      condition: "Failing Dentition",
      description: "Multiple teeth requiring extraction due to disease",
      suitable: "Ideal solution",
      icon: Crown
    },
    {
      condition: "Bone Loss",
      description: "Moderate bone loss that would require grafting for individual implants",
      suitable: "Often suitable",
      icon: Shield
    },
    {
      condition: "Denture Problems",
      description: "Difficulty with loose, uncomfortable, or ill-fitting dentures",
      suitable: "Perfect upgrade",
      icon: Smile
    }
  ];

  const comparison = [
    {
      feature: "Implants Required",
      allOn4: "4 per arch",
      traditional: "6-8 per arch",
      dentures: "None"
    },
    {
      feature: "Treatment Time",
      allOn4: "Same day teeth",
      traditional: "6-12 months",
      dentures: "4-6 weeks"
    },
    {
      feature: "Bone Grafting",
      allOn4: "Usually not needed",
      traditional: "Often required",
      dentures: "Not applicable"
    },
    {
      feature: "Function",
      allOn4: "90-95% of natural",
      traditional: "95-100% of natural",
      dentures: "60-70% of natural"
    },
    {
      feature: "Stability",
      allOn4: "Excellent",
      traditional: "Excellent",
      dentures: "Variable"
    },
    {
      feature: "Cost",
      allOn4: "From £15,000",
      traditional: "From £25,000+",
      dentures: "From £875"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Comprehensive Planning",
      description: "3D imaging and computer-guided planning for precise implant placement",
      duration: "2-3 hours"
    },
    {
      step: "2",
      title: "Surgery Day",
      description: "Extractions (if needed), implant placement, and immediate temporary teeth",
      duration: "4-6 hours"
    },
    {
      step: "3",
      title: "Healing Period",
      description: "Osseointegration while wearing comfortable temporary prosthetic",
      duration: "3-6 months"
    },
    {
      step: "4",
      title: "Final Restoration",
      description: "Custom final prosthetic designed for optimal function and aesthetics",
      duration: "2-3 weeks"
    }
  ];

  const technology = [
    {
      aspect: "3D Planning",
      description: "Computer-guided surgery for precise implant placement",
      benefit: "Optimal positioning and reduced surgery time"
    },
    {
      aspect: "Angled Implants",
      description: "Posterior implants placed at 30-45 degree angles",
      benefit: "Maximizes bone contact and avoids anatomical structures"
    },
    {
      aspect: "Immediate Loading",
      description: "Temporary teeth attached same day as surgery",
      benefit: "Never be without teeth during healing"
    },
    {
      aspect: "Tilted Design",
      description: "Strategic implant positioning to optimize support",
      benefit: "Better force distribution and stability"
    }
  ];

  const timeline = [
    {
      phase: "Consultation",
      time: "Day 0",
      activities: ["Comprehensive examination", "3D CT scanning", "Treatment planning", "Medical clearance"]
    },
    {
      phase: "Surgery",
      time: "Day 1",
      activities: ["Extractions if needed", "4 implant placement", "Immediate temporary teeth", "Post-op instructions"]
    },
    {
      phase: "Healing",
      time: "Weeks 1-12",
      activities: ["Soft diet period", "Regular check-ups", "Osseointegration", "Prosthetic adjustments"]
    },
    {
      phase: "Final Restoration",
      time: "Months 3-6",
      activities: ["Final impressions", "Custom prosthetic fabrication", "Final fitting", "Ongoing maintenance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-amber-50/30">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="All-on-4 Dental Implants"
        description="Revolutionary full arch restoration using 4 strategically placed implants to replace entire upper or lower arch of teeth"
        price="From £15,000"
        category="Advanced Implant Dentistry"
        duration="Same day teeth, 3-6 months total treatment"
        preparation="Comprehensive planning, 3D imaging, computer-guided surgery"
        recovery="Immediate function with temporary teeth, final restoration after healing"
        benefits={([
          "Same day teeth replacement",
          "Only 4 implants needed per arch",
          "Often avoids bone grafting",
          "Immediate functional improvement",
          "Cost-effective full arch solution"
        ]}
        risks={([
          "Surgical risks (minimal)",
          "Temporary diet restrictions",
          "Possible prosthetic adjustments needed",
          "Requires good oral hygiene"
        ]}
        rating={4.9}
        reviewCount={75}
        url="https://peartree.dental/services/implants/all-on-4"
        procedureType="MedicalProcedure"
      />

      <ServiceFAQSchema
        serviceName="All-on-4 Dental Implants"
        faqs={allOn4FAQs}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-pear-primary">Services</Link>
            <span>/</span>
            <Link href="/services/implants" className="hover:text-pear-primary">Implants</Link>
            <span>/</span>
            <span className="text-orange-600 font-medium">All-on-4</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Link href="/services/implants" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Implants
              </Link>

              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                <Grid className="w-4 h-4 mr-2" />
                Full Arch Restoration
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary leading-tight">
                All-on-4
                <span className="text-orange-600 block">Implants</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Replace an entire arch of teeth with just 4 strategically placed implants.
                Revolutionary same-day teeth solution for complete smile restoration.
              </p>

              {/* Social Proof */}
              <div className="inline-flex items-center bg-gradient-to-r from-pear-gold/20 to-pear-gold/10 border border-pear-gold/30 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-pear-gold mr-2 fill-current" />
                <span className="text-sm font-semibold text-pear-gold">Revolutionary technique - millions of successful cases worldwide</span>
              </div>

              {/* Key Benefits */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-pear-primary mb-4">Why Choose All-on-4?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Same day teeth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Only 4 implants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Avoid bone grafting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">Cost-effective</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-white border-2 border-orange-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Starting from</div>
                  <div className="text-3xl font-bold text-orange-600">£15,000</div>
                  <div className="text-sm text-gray-600">Per arch</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold">
                    Book All-on-4 Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
                    Call 0115 931 2935
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-orange-100 to-amber-100 p-8 h-96">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-orange-500 text-white">Revolutionary Technique</Badge>
                    <div className="flex space-x-1">
                      {([...Array(5)] || []).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-pear-primary">Same Day Transformation</h3>
                  <p className="text-gray-600">
                    All-on-4 revolutionizes implant dentistry by providing immediate
                    teeth on the day of surgery with minimal implants needed.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-orange-600">4 hours</div>
                      <div className="text-gray-600">Surgery time</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="font-semibold text-orange-600">Same day</div>
                      <div className="text-gray-600">New teeth</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              The All-on-4 Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All-on-4 has transformed implant dentistry by providing immediate,
              stable, and cost-effective full arch restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(benefits || []).map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Advanced All-on-4 Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology and precise surgical techniques
              ensure optimal results and patient comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(technology || []).map((tech) => (
              <Card key={tech.aspect} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-pear-primary">{tech.aspect}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <span className="text-sm font-medium text-orange-700">Benefit: </span>
                    <span className="text-sm text-gray-700">{tech.benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Are You an All-on-4 Candidate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All-on-4 is ideal for various situations involving extensive
              tooth loss or failing dentition requiring comprehensive restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(candidates || []).map((candidate) => {
              const Icon = candidate.icon;
              return (
                <Card key={candidate.condition} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">{candidate.condition}</h3>
                    <p className="text-sm text-gray-600 mb-3">{candidate.description}</p>
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      {candidate.suitable}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              All-on-4 Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive advantages that make All-on-4
              the preferred choice for full arch restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {(advantages || []).map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              All-on-4 vs Other Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare All-on-4 with traditional implants and dentures
              for full arch tooth replacement.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">All-on-4</th>
                    <th className="py-4 px-6 text-center">Traditional Implants</th>
                    <th className="py-4 px-6 text-center">Dentures</th>
                  </tr>
                </thead>
                <tbody>
                  {(comparison || []).map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-pear-primary">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span className="text-orange-600 font-medium">{item.allOn4}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.traditional}</td>
                      <td className="py-4 px-6 text-center text-gray-500">{item.dentures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your All-on-4 Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to final restoration, understand the complete
              All-on-4 journey and what to expect at each stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(timeline || []).map((phase, _index) => (
              <Card key={phase.phase} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-primary">{phase.phase}</CardTitle>
                  <Badge variant="outline" className="text-orange-600 border-orange-600 w-fit">
                    {phase.time}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {(phase.activities || []).map((activity, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Your All-on-4 Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-step process ensures your All-on-4 treatment
              delivers optimal results with minimal discomfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(process || []).map((step, index) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-xs text-orange-600 font-medium">{step.duration}</span>
                  </div>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-orange-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-orange-600 to-amber-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Transform Your Life in One Day
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Experience the revolutionary All-on-4 solution. Walk in with failing teeth
                or dentures, walk out with a beautiful, functional smile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-semibold">
                  Book All-on-4 Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/services/treatment-comparison">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                    Compare All Treatment Options
                  </Button>
                </Link>
              </div>

              <div className="text-sm text-white/80">
                From £15,000 per arch • Same day teeth • 20+ year lifespan
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
