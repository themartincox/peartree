import React from "react";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Heart,
  MapPin,
  Phone,
  Stethoscope,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "New Patients - Pear Tree Dental | Burton Joyce, Nottinghamshire",
  description:
    "Welcome to Pear Tree Dental! New patient information, what to expect, forms, and booking your first appointment at our Burton Joyce practice.",
  keywords:
    "new patients, first appointment, dental registration, Burton Joyce dentist, new patient forms",
};

export default function NewPatientsPage() {
  const whatToExpect = [
    {
      icon: Users,
      title: "Warm Welcome",
      description:
        "Our friendly team will greet you and help you feel comfortable from the moment you arrive.",
    },
    {
      icon: FileText,
      title: "Medical History",
      description:
        "We'll review your medical and dental history to provide the best possible care.",
    },
    {
      icon: Stethoscope,
      title: "Comprehensive Examination",
      description:
        "Thorough dental examination including X-rays if needed to assess your oral health.",
    },
    {
      icon: Heart,
      title: "Personalised Treatment Plan",
      description:
        "We'll discuss findings and create a tailored treatment plan that fits your needs and budget.",
    },
  ];

  const whatToBring = [
    "Previous dental records or X-rays if available",
    "List of current medications",
    "Insurance details or membership information",
  ];

  const policies = [
    {
      title: "Appointment Policy",
      description:
        "Please arrive 15 minutes early for your first appointment. We require 24 hours notice for cancellations.",
    },
    {
      title: "Payment Options",
      description:
        "We accept cash, card, and offer flexible payment plans. Membership plans available from £10.95/month.",
    },
    {
      title: "Emergency Care",
      description:
        "For dental emergencies outside office hours, please call our emergency line for guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Google Reviews Widget - Non-homepage */}
      <GoogleReviewsWidget />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pear-background via-white to-pear-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-pear-gold text-white">Welcome</Badge>
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary mb-6">
              Welcome to{" "}
              <span className="text-pear-gold">Pear Tree Dental</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8">
              We're excited to welcome you to our dental family. Here's
              everything you need to know about your first visit to our Burton
              Joyce practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="btn-gold text-white font-semibold group"
                >
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Your First Appointment
                </Button>
              </Link>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-pear-primary border-pear-primary hover:bg-pear-primary hover:text-white"
              >
                <a href="tel:01159312935">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              What to Expect at Your First Visit
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your comfort and care are our top priorities. Here's what you can
              expect during your first appointment with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(whatToExpect || []).map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-pear-primary to-pear-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-pear-primary">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                What to Bring to Your Appointment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To ensure your first visit goes smoothly and we can provide the
                best care possible, please bring the following items with you.
              </p>

              <ul className="space-y-4 mb-8">
                {(whatToBring || []).map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/book">
                <Button size="lg" className="btn-gold text-white font-semibold">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Your First Appointment
                </Button>
              </Link>
            </div>

            <div className="lg:pl-8">
              <Card className="shadow-2xl overflow-hidden relative">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('/images/pear-tree-dental-building-NG145AE.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-pear-primary/50"></div>
                </div>

                <div className="relative z-10 p-6 space-y-4 text-white">
                  <CardTitle className="flex items-center text-white mb-6">
                    <MapPin className="w-5 h-5 mr-2" />
                    Practice Information
                  </CardTitle>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Address</h4>
                    <p className="text-white/90">
                      22 Nottingham Road
                      <br />
                      Burton Joyce, Nottingham
                      <br />
                      UK NG14 5AE
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Phone</h4>
                    <p className="text-white/90">0115 931 2935</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Opening Hours
                    </h4>
                    <div className="text-white/90 text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>8:45 am - 5 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span>8 am - 3:30 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekend</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Practice Policies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding our policies helps ensure a smooth experience for
              all our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(policies || []).map((policy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-pear-primary">
                    {policy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{policy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-pear-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">
              Skip the NHS Waiting Lists
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join our membership plan from just £10.95/month for immediate
              access to dental care, no waiting lists, and significant savings
              on treatments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <Button size="lg" className="btn-gold text-white font-semibold">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Learn About Membership
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-white text-pear-primary hover:bg-white/90 font-semibold"
                >
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 text-pear-gold mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Emergency Care Available</span>
              </div>
              <p className="text-white/90 text-sm">
                Out of hours emergency care by arrangement. Call for urgent
                dental needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
