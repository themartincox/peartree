import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  Star,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  Calendar,
  Phone,
  Heart,
  Award,
  Users
} from "lucide-react";

export default function VeneersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-pear-background via-white to-pear-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pear-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-soft-pink rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4 bg-pear-gold text-white">
                  <Crown className="w-4 h-4 mr-2" />
                  Premium Cosmetic Treatment
                </Badge>
                <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
                  Transform Your Smile with
                  <span className="block text-pear-gold">Porcelain Veneers</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Instantly correct chips, stains, gaps, and misalignment with ultra-thin porcelain shells.
                  Get the Hollywood smile you've always dreamed of in just 2-3 visits.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-gold text-white font-semibold group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2525
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pear-gold">10-15</div>
                  <div className="text-sm text-gray-600">Years lifespan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pear-gold">2-3</div>
                  <div className="text-sm text-gray-600">Visits required</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pear-gold">Same</div>
                  <div className="text-sm text-gray-600">Day preview</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">VENEERS HERO IMAGE</h3>
                    <p className="text-gray-600">Beautiful woman showing perfect white veneered teeth</p>
                  </div>
                </div>
              </Card>

              {/* Social Proof Sticker */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pear-gold to-yellow-600 text-white rounded-full px-4 py-2 shadow-lg transform rotate-12">
                <div className="text-center">
                  <div className="text-sm font-bold">TRANSFORMED BY</div>
                  <div className="text-lg font-extrabold">832+</div>
                  <div className="text-xs">DREAM SMILES</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-pear-gold/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pear-gold rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <p className="font-semibold text-pear-primary">Premium Quality</p>
                    <p className="text-sm text-gray-600">Stain Resistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Real Patient Transformations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the dramatic improvements our porcelain veneers have made for real patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-700">BEFORE/AFTER {item}</h4>
                    <p className="text-sm text-gray-600">Patient transformation</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-pear-primary">Case Study {item}</p>
                      <p className="text-sm text-gray-600">6 porcelain veneers</p>
                    </div>
                    <Badge variant="secondary" className="bg-pear-gold/10 text-pear-gold">
                      Premium
                    </Badge>
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
              Your Veneer Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple 3-step process to your perfect smile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Design",
                description: "Comprehensive examination, digital imaging, and smile design preview",
                icon: Heart,
                features: ["Digital smile preview", "Treatment planning", "Color matching"]
              },
              {
                step: "02",
                title: "Preparation & Temporaries",
                description: "Gentle tooth preparation and fitting of temporary veneers",
                icon: Crown,
                features: ["Minimal tooth removal", "Temporary veneers", "Comfort assured"]
              },
              {
                step: "03",
                title: "Final Placement",
                description: "Precise bonding of your custom porcelain veneers",
                icon: Sparkles,
                features: ["Perfect fit guaranteed", "Final adjustments", "Care instructions"]
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-2 border-pear-gold/20 hover:border-pear-gold/40 transition-colors">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-pear-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-pear-gold font-bold">{step.step}</span>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pear-gold to-pear-gold/80 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-pear-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Choose Porcelain Veneers?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Long-lasting Beauty",
                    description: "Porcelain veneers last 10-15 years with proper care, providing exceptional durability and stain resistance."
                  },
                  {
                    icon: Star,
                    title: "Natural Appearance",
                    description: "Custom-crafted to match your facial features and desired shade for a completely natural look."
                  },
                  {
                    icon: Clock,
                    title: "Quick Transformation",
                    description: "Achieve your dream smile in just 2-3 visits, with immediate results that boost your confidence."
                  },
                  {
                    icon: Award,
                    title: "Minimally Invasive",
                    description: "Preserves most of your natural tooth structure while dramatically improving appearance."
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex space-x-4">
                      <div className="w-12 h-12 bg-pear-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-pear-gold" />
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

            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-700 mb-2">BENEFITS IMAGE</h3>
                    <p className="text-gray-600">Close-up of perfect porcelain veneers</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Membership */}
      <section className="py-16 bg-gradient-to-br from-pear-background/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Investment in Your Smile
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with flexible payment options and membership discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Pricing */}
            <Card className="border-2 border-gray-200 hover:border-pear-gold/30 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-pear-primary">Porcelain Veneers</CardTitle>
                <div className="text-4xl font-bold text-pear-gold mt-4">£450-£800</div>
                <p className="text-gray-600">per tooth</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Premium porcelain materials",
                    "Custom shade matching",
                    "Digital smile design",
                    "2-3 appointments",
                    "10-15 year lifespan",
                    "Stain resistant finish"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
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
                <div className="text-4xl font-bold text-pear-gold mt-4">£360-£640</div>
                <p className="text-gray-600">per tooth (20% off)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "20% discount on all treatments",
                    "Priority appointment booking",
                    "Free consultations included",
                    "Flexible payment plans",
                    "Worldwide dental cover",
                    "Cancel anytime"
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

          {/* Payment Options */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Flexible payment options available</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="outline" className="border-pear-primary text-pear-primary">
                0% Finance Available
              </Badge>
              <Badge variant="outline" className="border-pear-primary text-pear-primary">
                Payment Plans
              </Badge>
              <Badge variant="outline" className="border-pear-primary text-pear-primary">
                Insurance Accepted
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Ready for Your Perfect Smile?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book your free consultation today and see how porcelain veneers can transform your confidence
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
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
                <span>500+ Veneers Placed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Award Winning Practice</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>10 Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
