import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import NottinghamTransportSchema from "@/components/seo/NottinghamTransportSchema";
import EmergencyConversionTracking from "@/components/EmergencyConversionTracking";
import {
  Phone,
  Clock,
  MapPin,
  AlertTriangle,
  Zap,
  Shield,
  Heart,
  Car,
  CheckCircle,
  Thermometer,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Dentist Nottingham - Same Day Appointments | Pear Tree Dental",
  description:
    "Emergency dental care for Nottingham patients. Same-day appointments usually available. Just 15 minutes from city centre. Call 0115 931 2935 for urgent dental pain relief.",
  keywords: [
    "emergency dentist Nottingham",
    "dental emergency Nottingham",
    "same day dentist Nottingham",
    "urgent dental care Nottingham",
    "weekend dentist Nottingham",
    "dental pain Nottingham",
    "broken tooth Nottingham",
    "dental abscess Nottingham",
    "emergency dental appointments Nottingham",
  ],
  openGraph: {
    title: "Emergency Dentist Nottingham - Same Day Appointments Available",
    description:
      "Dental emergency? We can see you today. Just 15 minutes from Nottingham city centre with free parking.",
    url: "https://peartree.dental/emergency-dentist-nottingham",
  },
  alternates: {
    canonical: "https://peartree.dental/emergency-dentist-nottingham",
  },
};

export default function EmergencyDentistNottinghamPage() {
  return (
    <>
      {/* Emergency conversion tracking component */}
      <EmergencyConversionTracking />

      {/* Enhanced SEO Schema */}
      <NottinghamTransportSchema
        fromLocation="Nottingham"
        estimatedTravelTime="15 minutes"
        transportModes={["car", "taxi", "public_transport"]}
        routeDescription="Emergency dental care accessible from Nottingham city center via A612 direct route"
      />

      {/* Emergency Hero Section with urgent conversion design */}
      <section className="pt-12 sm:pt-20 pb-16 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
        {/* Urgent background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Urgent Alert Badge */}
            <Badge className="bg-red-600 text-white mb-6 px-6 py-2 text-lg font-bold animate-pulse">
              <AlertTriangle className="w-5 h-5 mr-2" />
              URGENT DENTAL CARE AVAILABLE
            </Badge>

            {/* Emergency Headline */}
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-red-700 mb-6 leading-tight">
              Emergency Dentist Nottingham
              <span className="block text-gray-800 text-2xl sm:text-3xl mt-4">
                Same-Day Emergency Appointments Available
              </span>
            </h1>

            {/* Urgent Value Proposition */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-8 border-2 border-red-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 text-red-600 mb-2" />
                  <h3 className="font-bold text-gray-900">15 Minutes</h3>
                  <p className="text-sm text-gray-600">From Nottingham City Centre</p>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="w-8 h-8 text-red-600 mb-2" />
                  <h3 className="font-bold text-gray-900">Same Day</h3>
                  <p className="text-sm text-gray-600">Emergency Appointments</p>
                </div>
                <div className="flex flex-col items-center">
                  <Car className="w-8 h-8 text-red-600 mb-2" />
                  <h3 className="font-bold text-gray-900">Free Parking</h3>
                  <p className="text-sm text-gray-600">No City Centre Hassle</p>
                </div>
              </div>
            </div>

            {/* Primary Emergency CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                id="emergency-phone-primary"
                asChild
              >
                <a href="tel:01159312935">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Now: 0115 931 2935
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-6 text-xl"
                id="emergency-directions"
              >
                <Link
                  href="https://maps.google.com/maps?q=22+Nottingham+Road,+Burton+Joyce,+Nottingham,+NG14+5AL"
                  target="_blank"
                >
                  <MapPin className="w-6 h-6 mr-3" />
                  Get Directions
                </Link>
              </Button>
            </div>

            {/* Emergency Operating Hours */}
            <div className="bg-red-100 rounded-lg p-4 mb-8">
              <h3 className="font-bold text-red-800 mb-2">Emergency Hours Today</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center justify-center">
                  <Activity className="w-4 h-4 text-red-600 mr-2" />
                  <span className="text-red-700">Monday-Thursday: 8:45am-5pm</span>
                </div>
                <div className="flex items-center justify-center">
                  <Activity className="w-4 h-4 text-red-600 mr-2" />
                  <span className="text-red-700">Friday: 8am-3:30pm</span>
                </div>
              </div>
              <p className="text-red-600 font-medium mt-2">
                Call immediately - we prioritize emergency cases
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Conditions - Mobile Optimized */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Emergency Dental Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't suffer in pain. We provide immediate relief for these urgent dental emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Severe Tooth Pain",
                description:
                  "Unbearable throbbing or constant pain that won't respond to pain relief",
                urgency: "URGENT",
                icon: Thermometer,
                color: "red",
              },
              {
                title: "Knocked Out Tooth",
                description: "Tooth completely knocked out from accident or injury",
                urgency: "CRITICAL",
                icon: AlertTriangle,
                color: "red",
              },
              {
                title: "Broken/Chipped Tooth",
                description:
                  "Fractured tooth causing pain or sharp edges cutting your mouth",
                urgency: "URGENT",
                icon: Activity,
                color: "orange",
              },
              {
                title: "Dental Abscess",
                description:
                  "Swelling, pus, fever, or bad taste indicating serious infection",
                urgency: "CRITICAL",
                icon: Shield,
                color: "red",
              },
              {
                title: "Lost Filling/Crown",
                description: "Filling or crown has fallen out exposing sensitive tooth",
                urgency: "PRIORITY",
                icon: Heart,
                color: "orange",
              },
              {
                title: "Bleeding Gums",
                description:
                  "Excessive bleeding that won't stop after injury or procedure",
                urgency: "URGENT",
                icon: Activity,
                color: "red",
              },
            ].map((condition, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <condition.icon className={`w-6 h-6 text-${condition.color}-600`} />
                    <Badge
                      variant={
                        condition.urgency === "CRITICAL"
                          ? "destructive"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {condition.urgency}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{condition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{condition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Action CTA */}
          <div className="text-center mt-12">
            <div className="bg-red-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Experiencing Any of These?
              </h3>
              <p className="text-red-700 mb-6">
                Don't wait - dental emergencies can worsen quickly and lead to serious complications.
              </p>

              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg mb-4"
                id="emergency-phone-conditions"
                asChild
              >
                <a href="tel:01159312935">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Line: 0115 931 2935
                </a>
              </Button>

              <p className="text-sm text-red-600">
                Or{" "}
                <Link
                  href="/book"
                  className="underline font-medium"
                  id="emergency-book-online"
                >
                  book online
                </Link>{" "}
                if non-urgent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nottingham Journey Benefits */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Nottingham Patients Choose Us for Emergency Care
            </h2>
            <p className="text-xl text-gray-600">
              The 15-minute journey is worth it for immediate, expert care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Car className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Free Parking</h3>
              <p className="text-gray-600 text-sm">
                No stress finding parking in city center
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Faster Access</h3>
              <p className="text-gray-600 text-sm">
                15 minutes vs hours waiting at hospital A&E
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Specialist Care</h3>
              <p className="text-gray-600 text-sm">
                Dental specialists, not general A&E doctors
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Personal Service</h3>
              <p className="text-gray-600 text-sm">
                Same dentist throughout your emergency care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Happens When You Call?
            </h2>
            <p className="text-xl text-gray-600">
              Our emergency process ensures you get the fastest possible care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Immediate Assessment
              </h3>
              <p className="text-gray-600">
                We assess your emergency over the phone and book you in immediately
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pain Relief Priority
              </h3>
              <p className="text-gray-600">
                First priority is stopping your pain and stabilizing the emergency
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Treatment Plan
              </h3>
              <p className="text-gray-600">
                Comprehensive treatment plan to prevent future emergencies
              </p>
            </div>
          </div>

          {/* Final Emergency CTA */}
          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to End Your Dental Pain?
              </h3>
              <p className="text-gray-600 mb-6">
                Every minute counts in a dental emergency. Call now for immediate relief.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                  id="emergency-phone-final"
                  asChild
                >
                  <a href="tel:01159312935">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency: 0115 931 2935
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 font-bold px-8 py-4 text-lg"
                  id="emergency-membership"
                >
                  <Link href="/membership">
                    <Shield className="w-5 h-5 mr-2" />
                    Prevent Future Emergencies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialBanner
            text="I called in agony at 9am with severe tooth pain. They saw me within 2 hours and the dentist was incredibly gentle. The relief was immediate and the whole team were fantastic during my emergency."
            author="Sarah M, Nottingham"
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>
    </>
  );
}
