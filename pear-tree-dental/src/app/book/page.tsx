import React from "react";
import { Clock } from "lucide-react";
import type { Metadata } from "next";
import ContactFormCard from "@/components/ContactFormCard";

export const metadata: Metadata = {
  title: "Book Your Appointment | Pear Tree Dental Burton Joyce",
  description:
    "Book your dental appointment online at Pear Tree Dental. Quick and easy appointment booking for all dental services. Call 0115 931 2935 for urgent appointments.",
  keywords: [
    "book dental appointment Burton Joyce",
    "online dental booking",
    "dental appointment Nottingham",
    "emergency dental booking",
    "dentist appointment Burton Joyce",
  ],
};

export default function BookPage() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-pear-background to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take care of your dental health? Fill out the form below
            and we'll contact you to confirm your appointment time. For urgent
            dental emergencies, please call us directly at{" "}
            <a
              href="tel:01159312935"
              className="text-pear-primary font-semibold hover:underline"
            >
              0115 931 2935
            </a>
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-6xl mx-auto">
          <ContactFormCard
            title="Book Your Appointment"
            description="Fill out the form below and we'll contact you to confirm your appointment time. For urgent dental emergencies, please call us directly at 0115 931 2935."
            formType="booking"
            showContactInfo={true}
          />
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-pear-primary mb-4">
                What Happens Next?
              </h2>
              <p className="text-gray-600">
                After you submit your booking request, here's what you can
                expect:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pear-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-pear-primary mb-2">
                  We'll Contact You
                </h3>
                <p className="text-sm text-gray-600">
                  Our team will call you within 24 hours to confirm your
                  preferred appointment time
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pear-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-pear-primary mb-2">
                  Appointment Confirmed
                </h3>
                <p className="text-sm text-gray-600">
                  We'll send you a confirmation with your appointment details
                  and any preparation instructions
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pear-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-pear-primary mb-2">
                  Your Visit
                </h3>
                <p className="text-sm text-gray-600">
                  Arrive 10 minutes early for check-in. We'll take great care of
                  you!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="bg-pear-primary text-white rounded-xl p-6">
            <Clock className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div>Monday - Thursday: 8:45am - 5:00pm</div>
              <div>Friday: 8:00am - 3:30pm</div>
              <div>Saturday - Sunday: Closed</div>
              <div className="col-span-full mt-2 font-semibold">
                Emergency appointments available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
