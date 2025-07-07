import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import Link from "next/link";
import {
  Star,
  CheckCircle,
  Phone,
  CalendarDays,
  CreditCard,
  Shield,
  Heart,
  Sparkles,
  ArrowRight
} from "lucide-react";
import {
  membershipPlans,
  generalTreatments,
  cosmeticTreatments,
  restorativeTreatments,
  orthodonticTreatments,
  implantTreatments,
  examinationPrices
} from "@/data/pricing";

export const metadata: Metadata = {
  title: "Dental Treatment Prices | Pear Tree Dental Burton Joyce",
  description: "Transparent dental treatment pricing in Burton Joyce. Check-ups from £25, fillings from £65, veneers from £180. Membership plans available from £10.95/month.",
  keywords: "dental prices Burton Joyce, dental treatment costs, private dentist prices, NHS dentist prices, dental membership plans"
};

export default function PricingPage() {
  // Convert imported prices to match the expected format
  const formattedGeneralTreatments = generalTreatments.map(treatment => ({
    name: treatment.name,
    nhsPrice: "N/A", // We don't offer NHS services, so mark as N/A
    privatePrice: treatment.price
  }));

  const formattedCosmeticTreatments = cosmeticTreatments.map(treatment => ({
    name: treatment.name,
    price: treatment.price
  }));

  const formattedRestorativeTreatments = restorativeTreatments.map(treatment => ({
    name: treatment.name,
    price: treatment.price
  }));

  const formattedOrthodonticTreatments = orthodonticTreatments.map(treatment => ({
    name: treatment.name,
    price: treatment.price
  }));

  const formattedImplantTreatments = implantTreatments.map(treatment => ({
    name: treatment.name,
    price: treatment.price
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Google Reviews Widget - Non-homepage */}
      <GoogleReviewsWidget />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pear-background via-white to-pear-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-pear-gold text-white">Transparent Pricing</Badge>
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary mb-6">
              Clear, Fair <span className="text-pear-gold">Dental Pricing</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8">
              No hidden fees, no surprises. See exactly what your dental treatment costs
              with our transparent pricing structure and flexible payment options.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <Button size="lg" className="btn-gold text-white font-semibold group">
                  <Star className="w-5 h-5 mr-2" />
                  View Membership Plans
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-pear-primary border-pear-primary hover:bg-pear-primary hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Get Quote: 0115 931 2525
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Membership Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our membership plan and save money while getting priority access to dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${index === 1 ? 'border-pear-gold border-2 relative' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-pear-gold text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-pear-gold">
                    {plan.price}<span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/membership" className="block mt-6">
                    <Button className="w-full bg-pear-primary text-white hover:bg-pear-primary/90">
                      Join Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General Dentistry */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              General Dentistry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential dental care with both NHS and private options available.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-dental-green" />
                  General Treatment Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-pear-primary">Treatment</th>
                        <th className="text-center py-3 px-4 font-semibold text-dental-green">NHS Price</th>
                        <th className="text-center py-3 px-4 font-semibold text-pear-gold">Private Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formattedGeneralTreatments.map((treatment, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{treatment.name}</td>
                          <td className="py-3 px-4 text-center text-dental-green">{treatment.nhsPrice}</td>
                          <td className="py-3 px-4 text-center text-pear-gold">{treatment.privatePrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cosmetic Dentistry */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Cosmetic Dentistry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your smile with our aesthetic dental treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formattedCosmeticTreatments.map((treatment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-soft-pink to-soft-lavender rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-pear-primary">{treatment.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pear-gold mb-4">{treatment.price}</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Professional cosmetic treatment to enhance your smile
                  </p>
                  <Link href="/services/cosmetic">
                    <Button variant="outline" className="w-full text-pear-primary border-pear-primary hover:bg-pear-primary hover:text-white">
                      View Cosmetic Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restorative Dentistry */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Restorative Dentistry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Repair and restore your teeth to optimal health and function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formattedRestorativeTreatments.map((treatment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-dental-green to-soft-blue rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-pear-primary">{treatment.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pear-gold mb-4">{treatment.price}</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Advanced restorative treatment for lasting results
                  </p>
                  <Link href="/services/restorative">
                    <Button variant="outline" className="w-full text-pear-primary border-pear-primary hover:bg-pear-primary hover:text-white">
                      View Restorative Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Orthodontics & Implants */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Orthodontics */}
            <div>
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Orthodontics
              </h2>
              <p className="text-gray-600 mb-8">
                Straighten your teeth with modern clear aligner technology.
              </p>
              <div className="space-y-4">
                {formattedOrthodonticTreatments.map((treatment, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-pear-primary">{treatment.name}</h3>
                        <p className="text-gray-600 text-sm">Clear aligner treatment</p>
                      </div>
                      <div className="text-xl font-bold text-pear-gold">{treatment.price}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Implants */}
            <div>
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Dental Implants
              </h2>
              <p className="text-gray-600 mb-8">
                Permanent tooth replacement solutions that look and feel natural.
              </p>
              <div className="space-y-4">
                {formattedImplantTreatments.map((treatment, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-pear-primary">{treatment.name}</h3>
                        <p className="text-gray-600 text-sm">Permanent tooth replacement</p>
                      </div>
                      <div className="text-xl font-bold text-pear-gold">{treatment.price}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-pear-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Flexible Payment Options
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We believe everyone deserves quality dental care. That's why we offer
              various payment options to help make treatment affordable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CreditCard className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                  <CardTitle>Membership Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">Monthly membership with included treatments and discounts</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CalendarDays className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                  <CardTitle>Payment Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">Spread the cost of treatment with flexible payment options</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                  <CardTitle>Insurance Accepted</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">We work with most dental insurance providers</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-gold text-white font-semibold">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call 0115 931 2525
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
