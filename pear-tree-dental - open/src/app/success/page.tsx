import { Calendar, CheckCircle, Home, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Thank You | Pear Tree Dental - Message Received",
  description:
    "Thank you for contacting Pear Tree Dental. We've received your message and will get back to you within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-pear-primary mb-6 heading-serif">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We've received your message and will get back to you within 24
              hours during business days.
            </p>
          </div>
        </div>
      </section>

      {/* Success Card */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-pear-primary mb-6">
                  What Happens Next?
                </h2>

                <div className="space-y-6 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pear-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pear-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Message Received
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Your enquiry has been successfully sent to our team at
                        Pear Tree Dental.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pear-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pear-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Quick Response
                      </h3>
                      <p className="text-gray-600 text-sm">
                        We'll review your message and respond within 24 hours
                        during business days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pear-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pear-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Appointment Booking
                      </h3>
                      <p className="text-gray-600 text-sm">
                        If you've requested an appointment, we'll contact you to
                        arrange a suitable time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Need Urgent Care?
                  </h3>
                  <p className="text-red-700 text-sm mb-3">
                    For dental emergencies that can't wait, please call us
                    directly:
                  </p>
                  <a
                    href="tel:01159312935"
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
                  >
                    Call 0115 931 2935
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pear-primary text-center mb-12 heading-serif">
              While You Wait...
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-pear-primary" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">
                    Opening Hours
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Mon-Thu: 8:45AM-5:00PM</p>
                    <p>Fri: 8:00AM-3:30PM</p>
                    <p>Sat-Sun: Closed</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-pear-primary" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">
                    Our Services
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Learn more about our dental treatments and membership plans.
                  </p>
                  <Link href="/services/general">
                    <Button variant="outline" size="sm">
                      View Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-pear-primary" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">
                    Our Practice
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Located in Burton Joyce with free parking and modern
                    facilities.
                  </p>
                  <Link href="/about">
                    <Button variant="outline" size="sm">
                      About Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
