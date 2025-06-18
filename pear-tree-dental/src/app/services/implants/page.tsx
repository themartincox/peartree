import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import {
  Zap,
  Shield,
  CheckCircle,
  Clock,
  Award,
  Heart,
  ArrowRight,
  Calendar,
  Phone,
  Users,
  Star,
  TrendingUp,
  Camera
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Implants Burton Joyce | Permanent Tooth Replacement | Pear Tree Dental",
  description: "Premium dental implants in Burton Joyce. Replace missing teeth permanently with 98% success rate. Consultation, surgery, and crown from £2,500. Finance available.",
  keywords: [
    "dental implants Burton Joyce",
    "tooth replacement Nottingham",
    "missing teeth solution",
    "implant dentist Nottinghamshire",
    "permanent teeth replacement",
    "single tooth implant Burton Joyce",
    "multiple teeth implants Nottingham",
    "implant surgery Burton Joyce"
  ],
  openGraph: {
    title: "Dental Implants | Pear Tree Dental",
    description: "Permanent tooth replacement solutions with 98% success rate",
    type: "website",
    url: "https://peartreedental.co.uk/services/implants"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/services/implants"
  }
};

export default function ImplantsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <ServiceStructuredData
        serviceName="Dental Implants"
        description="Premium dental implants for permanent tooth replacement with 98% success rate"
        price="From £2,500 per implant"
        category="Restorative Dentistry"
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-pear-background via-white to-pear-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pear-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-pear-gold rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4 bg-pear-primary text-white">
                  <Zap className="w-4 h-4 mr-2" />
                  Advanced Tooth Replacement
                </Badge>
                <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
                  Permanent Solutions with
                  <span className="block text-pear-gold">Dental Implants</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Replace missing teeth with titanium implants that look, feel, and function like natural teeth.
                  Restore your confidence with our proven implant solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-gold text-white font-semibold group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2525
                </Button>
              </div>

              {/* Success Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pear-gold">98%</div>
                  <div className="text-sm text-gray-600">Success rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pear-gold">25+</div>
                  <div className="text-sm text-gray-600">Years lifespan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pear-gold">3-6</div>
                  <div className="text-sm text-gray-600">Month healing</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">IMPLANT HERO IMAGE</h3>
                    <p className="text-gray-600">Cross-section showing implant integration with jawbone</p>
                  </div>
                </div>
              </Card>

              {/* Social Proof Sticker */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-pear-primary to-teal-600 text-white rounded-full px-4 py-2 shadow-lg transform -rotate-12">
                <div className="text-center">
                  <div className="text-sm font-bold">RESTORED BY</div>
                  <div className="text-lg font-extrabold">627+</div>
                  <div className="text-xs">PERFECT TEETH</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-pear-primary/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pear-primary rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pear-primary">FDA Approved</p>
                    <p className="text-sm text-gray-600">Premium Materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implant Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Complete Implant Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From single tooth replacement to full mouth reconstruction, we have the right solution for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Single Implant",
                description: "Replace one missing tooth with a natural-looking implant crown",
                price: "From £2,500",
                features: ["One titanium implant", "Custom crown", "Natural appearance", "Preserve adjacent teeth"],
                image: "single-implant"
              },
              {
                title: "Multiple Implants",
                description: "Replace several missing teeth with individual implant solutions",
                price: "From £6,000",
                features: ["Multiple implants", "Individual crowns", "Stable foundation", "Independent function"],
                image: "multiple-implants"
              },
              {
                title: "Implant Bridge",
                description: "Replace multiple adjacent teeth with implant-supported bridge",
                price: "From £8,500",
                features: ["2-4 implants", "Connected crowns", "Cost effective", "Strong support"],
                image: "implant-bridge"
              },
              {
                title: "All-on-4",
                description: "Replace entire arch of teeth with just 4 strategically placed implants",
                price: "From £15,000",
                features: ["4 implants per arch", "Full arch restoration", "Same day teeth", "Minimal surgery"],
                image: "all-on-4"
              }
            ].map((implant, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pear-gold/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-700 text-sm">{implant.image.toUpperCase()}</h4>
                    <p className="text-xs text-gray-600">Clinical diagram</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-pear-primary mb-2">{implant.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{implant.description}</p>
                      <div className="text-lg font-bold text-pear-gold">{implant.price}</div>
                    </div>

                    <ul className="space-y-2">
                      {implant.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gradient-to-br from-pear-background/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              The Implant Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven step-by-step approach for successful implant placement and integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Planning",
                description: "Comprehensive examination, 3D imaging, and treatment planning",
                icon: Camera,
                duration: "1-2 hours"
              },
              {
                step: "02",
                title: "Implant Placement",
                description: "Precise surgical placement of titanium implant into jawbone",
                icon: Zap,
                duration: "1-2 hours"
              },
              {
                step: "03",
                title: "Healing & Integration",
                description: "Osseointegration period for implant to fuse with bone",
                icon: Heart,
                duration: "3-6 months"
              },
              {
                step: "04",
                title: "Crown Placement",
                description: "Custom crown attached to complete your new tooth",
                icon: Award,
                duration: "2-3 weeks"
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-2 border-pear-primary/20 hover:border-pear-primary/40 transition-colors">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-pear-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-pear-gold font-bold text-sm">{step.step}</span>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-pear-primary to-pear-primary/80 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg text-pear-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-pear-gold" />
                      <span className="text-sm text-gray-700 font-medium">{step.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Choose Dental Implants?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Permanent Solution",
                    description: "Dental implants can last 25+ years with proper care, making them the most cost-effective long-term solution."
                  },
                  {
                    icon: Heart,
                    title: "Preserve Bone Health",
                    description: "Implants stimulate jawbone like natural teeth, preventing bone loss that occurs with missing teeth."
                  },
                  {
                    icon: Star,
                    title: "Natural Function",
                    description: "Eat, speak, and smile with confidence. Implants function exactly like your natural teeth."
                  },
                  {
                    icon: TrendingUp,
                    title: "Protect Adjacent Teeth",
                    description: "Unlike bridges, implants don't require altering healthy adjacent teeth for support."
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex space-x-4">
                      <div className="w-12 h-12 bg-pear-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-pear-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pear-primary mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Comparison Table */}
            <div>
              <Card className="overflow-hidden shadow-xl">
                <CardHeader className="bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
                  <CardTitle className="text-xl">Treatment Comparison</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Feature</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-pear-primary">Implants</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Bridge</th>
                          <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Dentures</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          { feature: "Lifespan", implant: "25+ years", bridge: "10-15 years", denture: "5-7 years" },
                          { feature: "Bone Preservation", implant: "✓", bridge: "✗", denture: "✗" },
                          { feature: "Adjacent Teeth", implant: "Preserved", bridge: "Altered", denture: "Preserved" },
                          { feature: "Cleaning", implant: "Brush & Floss", bridge: "Special Tools", denture: "Remove Daily" },
                          { feature: "Eating Ability", implant: "100%", bridge: "90%", denture: "60%" }
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium text-gray-700">{row.feature}</td>
                            <td className="px-4 py-3 text-sm text-center text-pear-primary font-semibold">{row.implant}</td>
                            <td className="px-4 py-3 text-sm text-center text-gray-600">{row.bridge}</td>
                            <td className="px-4 py-3 text-sm text-center text-gray-600">{row.denture}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Financing */}
      <section className="py-16 bg-gradient-to-br from-pear-background/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Investment & Financing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with flexible payment options to make implants affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Pricing */}
            <Card className="border-2 border-gray-200 hover:border-pear-primary/30 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-pear-primary">Single Implant</CardTitle>
                <div className="text-4xl font-bold text-pear-primary mt-4">£2,500</div>
                <p className="text-gray-600">Complete treatment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Premium titanium implant",
                    "Surgical placement",
                    "Healing abutment",
                    "Custom crown",
                    "All follow-up care",
                    "10-year guarantee"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            {/* Membership Pricing */}
            <Card className="border-2 border-pear-gold bg-gradient-to-br from-pear-gold/5 to-white">
              <CardHeader className="text-center">
                <Badge className="bg-pear-gold text-white mb-4">Membership Discount</Badge>
                <CardTitle className="text-2xl text-pear-primary">With Membership</CardTitle>
                <div className="text-4xl font-bold text-pear-gold mt-4">£2,000</div>
                <p className="text-gray-600">Complete treatment (20% off)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "20% discount on all treatments",
                    "Free initial consultation",
                    "Flexible payment plans",
                    "Priority appointment booking",
                    "Extended warranty options",
                    "Ongoing maintenance included"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 btn-gold text-white">
                  Join Membership
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Financing Options */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Make implants affordable with our financing options</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 border border-pear-primary/20">
                <h4 className="font-semibold text-pear-primary mb-2">0% Finance</h4>
                <p className="text-sm text-gray-600">Interest-free payment plans available</p>
              </Card>
              <Card className="p-6 border border-pear-primary/20">
                <h4 className="font-semibold text-pear-primary mb-2">Monthly Payments</h4>
                <p className="text-sm text-gray-600">From £83/month over 3 years</p>
              </Card>
              <Card className="p-6 border border-pear-primary/20">
                <h4 className="font-semibold text-pear-primary mb-2">Insurance</h4>
                <p className="text-sm text-gray-600">Partial coverage may be available</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Restore Your Confidence Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Stop living with missing teeth. Book your implant consultation and discover how we can restore your smile permanently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call 0115 931 2525
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>1000+ Implants Placed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>10 Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
