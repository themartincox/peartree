import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle,
  Phone,
  Shield,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import MedicalOrganizationSchema from "@/components/seo/MedicalOrganizationSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Emergency Dental Repairs Burton Joyce | Rapid Fixes | Pear Tree Dental",
  description:
    "Urgent dental repairs in Burton Joyce. Broken crowns, lost fillings, damaged dentures. Rapid emergency repairs, aiming for same day. Call 0115 931 2935 for immediate help.",
  keywords: [
    "emergency dental repairs Burton Joyce",
    "broken crown repair Nottingham",
    "lost filling emergency",
    "damaged denture repair",
    "rapid dental repairs",
    "urgent dental fixes",
    "dental emergency Nottinghamshire",
  ],
};

export default function EmergencyRepairsPage() {
  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Emergency Repairs" },
  ];

  const emergencyRepairs = [
    {
      title: "Broken Crowns & Bridges",
      description:
        "Immediate repair or replacement of damaged crowns and bridges",
      icon: Shield,
      urgency: "Aim for same day",
    },
    {
      title: "Lost Fillings",
      description:
        "Quick replacement of lost or damaged fillings to prevent pain",
      icon: Wrench,
      urgency: "Rapid",
    },
    {
      title: "Damaged Dentures",
      description: "Repair cracked or broken dentures to restore function",
      icon: CheckCircle,
      urgency: "Aim for same day",
    },
    {
      title: "Loose Restorations",
      description: "Re-cement loose crowns, bridges, or other dental work",
      icon: AlertTriangle,
      urgency: "Emergency",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <MedicalOrganizationSchema
        page="services"
        serviceType="Emergency Dental Repairs"
      />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbSchema items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-red-200 text-red-700">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Emergency Dental Repairs
          </Badge>

          <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Emergency
            <span className="block text-red-600">Dental Repairs</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't let a broken crown, lost filling, or damaged denture ruin your
            day. We provide immediate emergency repairs to get you smiling
            again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:01159312935">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line: 0115 931 2935
              </Button>
            </a>
            <Link href="/book">
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                Book Urgent Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Repairs Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Emergency Repairs We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team can handle most dental emergencies rapidly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {(emergencyRepairs || []).map((repair, index) => {
              const Icon = repair.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-red-600" />
                        </div>
                        <CardTitle className="text-xl">
                          {repair.title}
                        </CardTitle>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-red-200 text-red-700"
                      >
                        {repair.urgency}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{repair.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Emergency Repair Process
            </h2>
            <p className="text-lg text-gray-600">
              Quick, efficient, and designed to get you back to normal as soon
              as possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Immediately</h3>
              <p className="text-gray-600">
                Contact our emergency line for immediate advice and appointment
                scheduling
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Assessment</h3>
              <p className="text-gray-600">
                Quick examination to determine the best repair approach for your
                situation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Immediate Repair</h3>
              <p className="text-gray-600">
                Professional repair or temporary solution to restore function
                and comfort
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Don't Wait - Get Emergency Repair Now
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Every minute counts when you have a dental emergency. Our team is
              ready to help restore your smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 0115 931 2935
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
