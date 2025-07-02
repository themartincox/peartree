import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Calendar, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Success Section */}
      <section className="py-20 bg-soft-gray min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>

              {/* Success Message */}
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
                Thank You!
              </h1>
              <p className="text-xl font-body text-gray-600 mb-8">
                We've received your message and will get back to you within 24 hours.
              </p>

              {/* What Happens Next */}
              <div className="bg-soft-gray rounded-lg p-6 mb-8">
                <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-coral-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <p className="font-body text-gray-700">
                      We'll review your enquiry and prepare personalized recommendations
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-coral-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <p className="font-body text-gray-700">
                      One of our growth specialists will contact you directly
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-coral-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <p className="font-body text-gray-700">
                      We'll schedule a consultation to discuss your specific needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-gray-200 pt-6 mb-8">
                <p className="text-sm font-body text-gray-600 mb-4">
                  Need immediate assistance? Contact us directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-coral-red" />
                    <span className="font-body text-gray-700">hello@postino.cc</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-coral-red" />
                    <span className="font-body text-gray-700">+44 7432 039 801</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-coral-red hover:bg-coral-red/90 text-white"
                >
                  <Link href="/">
                    Back to Home
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white"
                >
                  <Link href="/case-studies">
                    View Case Studies
                    <Calendar className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
