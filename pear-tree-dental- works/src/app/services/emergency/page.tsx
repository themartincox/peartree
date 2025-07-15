import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import MedicalOrganizationSchema from "@/components/seo/MedicalOrganizationSchema";
import {
  Clock,
  Phone,
  CalendarDays,
  AlertTriangle,
  Heart,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Dentist Burton Joyce | Same-Day Dental Emergency Care | Pear Tree Dental",
  description: "24/7 emergency dentist in Burton Joyce, Nottinghamshire. Dental pain relief, broken teeth, lost fillings. Same-day emergency appointments. Call 0115 931 2935 now.",
  keywords: [
    "emergency dentist Burton Joyce",
    "dental emergency Nottingham",
    "toothache relief Nottinghamshire",
    "broken tooth emergency",
    "same day dental emergency",
    "urgent dental care",
    "dental pain relief"
  ],
  openGraph: {
    title: "Emergency Dentist | Same-Day Care | Pear Tree Dental",
    description: "24/7 emergency dentist in Burton Joyce. Same-day appointments for dental emergencies. Call now 0115 931 2935",
    type: "website",
    url: "https://peartree.dental/services/emergency"
  },
  alternates: {
    canonical: "https://peartree.dental/services/emergency"
  }
};

export default function EmergencyPage() {
  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Emergency Dentistry" }
  ];

  const emergencyServices = [
    {
      title: "Severe Tooth Pain",
      description: "Immediate pain relief for severe toothaches and dental infections",
      icon: AlertTriangle,
      timeframe: "Within 2 Hours"
    },
    {
      title: "Broken or Chipped Teeth",
      description: "Emergency repair for damaged teeth from accidents or trauma",
      icon: Shield,
      timeframe: "Same Day"
    },
    {
      title: "Lost Fillings or Crowns",
      description: "Quick replacement of lost dental work to prevent further damage",
      icon: Heart,
      timeframe: "Same Day"
    },
    {
      title: "Dental Trauma",
      description: "Immediate care for knocked-out or loose teeth",
      icon: Zap,
      timeframe: "Emergency"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <MedicalOrganizationSchema page="services" serviceType="Emergency Dentistry" />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbSchema items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-red-200 text-red-700">
            <Clock className="w-4 h-4 mr-2" />
            24/7 Emergency Care
          </Badge>

          <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Emergency Dental Care
            <span className="block text-red-600">When You Need It Most</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Dental emergencies don't wait for convenient times. Our experienced team provides
            immediate relief for urgent dental problems with same-day appointments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: 0115 931 2935
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              <CalendarDays className="w-5 h-5 mr-2" />
              Book Emergency Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Dental Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We handle all types of dental emergencies with quick, professional care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {emergencyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-red-600" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="border-red-200 text-red-700">
                        {service.timeframe}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Do in a Dental Emergency
            </h2>
            <p className="text-lg text-gray-600">
              Follow these steps while contacting our emergency line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Stay Calm</h3>
              <p className="text-gray-600">Take a deep breath and assess the situation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Control Bleeding</h3>
              <p className="text-gray-600">Apply gentle pressure with clean gauze or cloth</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Manage Pain</h3>
              <p className="text-gray-600">Use cold compress and over-the-counter pain relief</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">Contact our emergency line immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Don't Suffer in Pain - Call Now
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Our emergency dental team is ready to provide immediate relief
              and professional care when you need it most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 0115 931 2935
              </Button>
              <Link href="/services/emergency-repairs">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Emergency Repairs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
