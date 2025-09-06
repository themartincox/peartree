import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  title: "Dental Prices in Nottingham | Pear Tree Dental",
  description: "Transparent dental pricing in Nottingham. View our competitive treatment costs, membership plans, and payment options for patients across Nottingham. No hidden fees, clear pricing.",
  keywords: [
    "dental prices Nottingham",
    "dentist costs Nottingham",
    "dental treatment prices Nottingham",
    "affordable dentistry Nottingham",
    "dental fees Nottinghamshire",
    "dental membership plans Nottingham",
    "payment plans dentist Nottingham"
  ],
  openGraph: {
    title: "Dental Prices in Nottingham | Pear Tree Dental",
    description: "Transparent dental pricing in Nottingham with competitive treatment costs and flexible payment options for all Nottingham patients",
    type: "website",
    url: "https://peartree.dental/pricing"
  },
  alternates: {
    canonical: "https://peartree.dental/pricing"
  }
};

export default function PricingPage() {
  // Format treatments for display
  const formattedGeneralTreatments = generalTreatments.map(treatment => ({
    name: treatment.name,
    price: treatment.price
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
      <GoogleReviewsWidget />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pear-background via-white to-pear-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-pear-gold text-white">Transparent Pricing</Badge>
            <h1 className="heading-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-pear-primary mb-4 sm:mb-6">
              Clear, Fair <span className="text-pear-gold">Dental Pricing</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              No hidden fees, no surprises. Our transparent pricing helps you make informed decisions about your dental care with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white font-semibold">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pear-primary mb-4">
              Membership Plans - Helping You Save Time and Money
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our membership plan for significant savings and priority access to appointments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-2 border-pear-gold' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-pear-gold text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-pear-primary">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-pear-gold">{plan.price}</div>
                  <p className="text-sm text-gray-600">{plan.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-pear-gold flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/membership">
                    <Button className="w-full bg-pear-primary hover:bg-pear-primary/90 text-white">
                      Join Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Prices Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pear-primary mb-4">
              Treatment Prices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Competitive pricing for all dental treatments with flexible payment options available
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* General Treatments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-pear-primary">General Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {formattedGeneralTreatments.map((treatment, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{treatment.name}</span>
                      <span className="font-semibold text-pear-primary">{treatment.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cosmetic Treatments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-pear-primary">Cosmetic Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {formattedCosmeticTreatments.map((treatment, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{treatment.name}</span>
                      <span className="font-semibold text-pear-primary">{treatment.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Restorative Treatments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-pear-primary">Restorative Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {formattedRestorativeTreatments.map((treatment, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{treatment.name}</span>
                      <span className="font-semibold text-pear-primary">{treatment.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Implant Treatments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-pear-primary">Dental Implants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {formattedImplantTreatments.map((treatment, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{treatment.name}</span>
                      <span className="font-semibold text-pear-primary">{treatment.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pear-primary mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer various payment methods to make dental care affordable for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <CreditCard className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                <h3 className="font-semibold text-pear-primary mb-2">Payment Plans</h3>
                <p className="text-sm text-gray-600">Spread the cost of treatment with our flexible payment plans</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                <h3 className="font-semibold text-pear-primary mb-2">Insurance Welcome</h3>
                <p className="text-sm text-gray-600">We accept most dental insurance plans and can help with claims</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-pear-gold mx-auto mb-4" />
                <h3 className="font-semibold text-pear-primary mb-2">Membership Savings</h3>
                <p className="text-sm text-gray-600">Save 10% on treatments with our membership plans</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today for a consultation and personalised treatment plan with transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-pear-primary hover:bg-gray-100 font-semibold">
                <CalendarDays className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <a href="tel:01159312935">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary font-semibold bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Call 0115 931 2935
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
