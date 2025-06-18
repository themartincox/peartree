import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import {
  Heart,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Phone,
  ArrowRight,
  Calendar,
  Star,
  Award,
  Stethoscope,
  Baby,
  UserCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "General Dentistry Burton Joyce | NHS & Private Care | Pear Tree Dental",
  description: "Comprehensive general dentistry in Burton Joyce. Check-ups, cleanings, fillings, extractions. NHS and private options. Book your dental appointment today.",
  keywords: [
    "general dentistry Burton Joyce",
    "dental check-up Nottinghamshire",
    "NHS dentist Burton Joyce",
    "dental cleaning Nottingham",
    "tooth fillings Burton Joyce",
    "dental extractions Burton Joyce",
    "family dentist Nottinghamshire",
    "preventive dental care Nottingham"
  ],
  openGraph: {
    title: "General Dentistry | Pear Tree Dental",
    description: "Comprehensive dental care for the whole family in Burton Joyce",
    type: "website",
    url: "https://peartreedental.co.uk/services/general"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/services/general"
  }
};

export default function GeneralDentistryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <ServiceStructuredData
        serviceName="General Dentistry"
        description="Comprehensive general dentistry including check-ups, cleanings, fillings, and extractions"
        price="From £25 (NHS) / From £65 (Private)"
        category="General Dentistry"
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dental-green/10 via-white to-soft-blue/10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-dental-green rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-soft-blue rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4 bg-dental-green text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Comprehensive Dental Care
                </Badge>
                <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
                  Complete
                  <span className="block text-dental-green">General Dentistry</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Comprehensive dental care for all ages. From routine check-ups to preventive treatments,
                  we provide the foundation for lifelong oral health in a comfortable, caring environment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Check-up
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2525
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-dental-green">NHS</div>
                  <div className="text-sm text-gray-600">& Private care</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dental-green">All Ages</div>
                  <div className="text-sm text-gray-600">Family friendly</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dental-green">Same Day</div>
                  <div className="text-sm text-gray-600">Appointments</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">GENERAL DENTISTRY IMAGE</h3>
                    <p className="text-gray-600">Family receiving dental check-ups</p>
                  </div>
                </div>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-dental-green/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-dental-green rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pear-primary">Family Care</p>
                    <p className="text-sm text-gray-600">All Ages Welcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Essential Dental Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive care covering all aspects of your oral health and wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dental Check-ups",
                description: "Comprehensive examinations to detect issues early",
                features: ["Full oral examination", "Digital X-rays", "Oral cancer screening", "Treatment planning"],
                price: "From £45",
                nhsPrice: "NHS Band 1: £25.80",
                icon: Stethoscope
              },
              {
                title: "Scale & Polish",
                description: "Professional cleaning to remove plaque and tartar",
                features: ["Plaque removal", "Tartar cleaning", "Stain removal", "Fluoride treatment"],
                price: "From £65",
                nhsPrice: "NHS Band 1: £25.80",
                icon: Shield
              },
              {
                title: "Fillings",
                description: "White composite and amalgam fillings for cavities",
                features: ["Tooth-colored fillings", "Pain-free treatment", "Same-day completion", "Natural appearance"],
                price: "From £120",
                nhsPrice: "NHS Band 2: £70.70",
                icon: Heart
              },
              {
                title: "Children's Dentistry",
                description: "Gentle, specialised care for young patients",
                features: ["Fissure sealants", "Fluoride treatments", "Gentle techniques", "Education & prevention"],
                price: "From £35",
                nhsPrice: "NHS: Free under 18",
                icon: Baby
              },
              {
                title: "Oral Health Education",
                description: "Learn proper techniques for optimal oral hygiene",
                features: ["Brushing technique", "Flossing guidance", "Diet advice", "Preventive care"],
                price: "Included",
                nhsPrice: "NHS: Included",
                icon: UserCheck
              },
              {
                title: "Gum Disease Treatment",
                description: "Treatment and management of periodontal conditions",
                features: ["Deep cleaning", "Root planing", "Maintenance therapy", "Monitoring"],
                price: "From £150",
                nhsPrice: "NHS Band 2: £70.70",
                icon: Users
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 border border-dental-green/20 hover:border-dental-green/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-dental-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-pear-primary">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-dental-green flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t">
                      <div className="text-dental-green font-semibold">{service.price}</div>
                      <div className="text-sm text-gray-600">{service.nhsPrice}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* NHS vs Private */}
      <section className="py-16 bg-gradient-to-br from-dental-green/5 to-soft-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              NHS & Private Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer both NHS and private treatments, giving you choice and flexibility in your dental care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-dental-green/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-dental-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pear-primary">NHS Treatment</h3>
                <p className="text-gray-600 mt-2">Quality care at NHS prices</p>
              </div>

              <div className="space-y-4">
                <div className="bg-dental-green/10 rounded-lg p-4">
                  <h4 className="font-semibold text-dental-green mb-2">NHS Band 1 - £25.80</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Examination, diagnosis & advice</li>
                    <li>• Scale & polish if needed</li>
                    <li>• Preventive care</li>
                  </ul>
                </div>

                <div className="bg-dental-green/10 rounded-lg p-4">
                  <h4 className="font-semibold text-dental-green mb-2">NHS Band 2 - £70.70</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• All Band 1 treatments plus:</li>
                    <li>• Fillings</li>
                    <li>• Root canal treatment</li>
                    <li>• Tooth removal</li>
                  </ul>
                </div>

                <div className="bg-dental-green/10 rounded-lg p-4">
                  <h4 className="font-semibold text-dental-green mb-2">NHS Band 3 - £306.80</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• All Band 1 & 2 treatments plus:</li>
                    <li>• Crowns, dentures & bridges</li>
                    <li>• Complex treatments</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-pear-gold/20 bg-gradient-to-br from-pear-gold/5 to-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-pear-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pear-primary">Private Treatment</h3>
                <p className="text-gray-600 mt-2">Enhanced care with membership savings</p>
              </div>

              <div className="space-y-4">
                <div className="bg-pear-gold/10 rounded-lg p-4">
                  <h4 className="font-semibold text-pear-gold mb-2">Enhanced Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Extended appointment times</li>
                    <li>• Premium materials</li>
                    <li>• Cosmetic options</li>
                    <li>• Flexible scheduling</li>
                  </ul>
                </div>

                <div className="bg-pear-gold/10 rounded-lg p-4">
                  <h4 className="font-semibold text-pear-gold mb-2">Membership Savings</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 20% off all treatments</li>
                    <li>• Free check-ups included</li>
                    <li>• Emergency cover</li>
                    <li>• Plans from £10.95/month</li>
                  </ul>
                </div>

                <Button className="w-full btn-gold text-white">
                  Join Membership Plan
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Preventive Care Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Prevention is Better Than Cure
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our focus on preventive care helps you avoid complex dental problems, saving you time,
                discomfort, and money in the long run.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Early Detection",
                    description: "Regular check-ups allow us to spot problems before they become serious, painful, or expensive to treat."
                  },
                  {
                    icon: UserCheck,
                    title: "Patient Education",
                    description: "We teach you proper oral hygiene techniques and provide personalized advice for your specific needs."
                  },
                  {
                    icon: Heart,
                    title: "Whole Health Connection",
                    description: "Good oral health is linked to overall health. We help protect your general wellbeing too."
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex space-x-4">
                      <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-dental-green" />
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
                    <h3 className="text-lg font-bold text-gray-700 mb-2">PREVENTIVE CARE IMAGE</h3>
                    <p className="text-gray-600">Dental hygienist providing preventive treatment</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-green to-dental-green/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Book Your Check-up Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Regular dental check-ups are the foundation of good oral health.
              Book your appointment today and take the first step toward a healthier smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-dental-green hover:bg-white/90 font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book NHS Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-green">
                <Phone className="w-5 h-5 mr-2" />
                Call 0115 931 2525
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Family-friendly practice</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>NHS & private care</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Same-day appointments</span>
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
