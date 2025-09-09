import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactFormCard from "@/components/ContactFormCard";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Dentist in Nottingham | Pear Tree Dental",
  description: "Book your dental appointment with our Nottingham dental practice. Quick and easy online booking for all dental services in Nottingham. Call 0115 931 2935 for urgent appointments.",
  keywords: [
    "book dental appointment Nottingham",
    "online dental booking Nottingham",
    "dental appointment Nottingham",
    "emergency dental booking Nottingham",
    "dentist appointment Nottingham"
  ],
  openGraph: {
    title: "Book a Dentist in Nottingham | Pear Tree Dental",
    description: "Book your dental appointment with our Nottingham dental practice. Easy online booking for all Nottingham dental services.",
    type: "website",
    url: "https://peartree.dental/book"
  },
  alternates: {
    canonical: "https://peartree.dental/book"
  }
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
            Ready to take care of your dental health in Nottingham? Let's gooooo
          </p>
        </div>

        {/* Booking Form */}
        https://booking.uk.hsone.app/soe/new/%20?pid=UKJMR01


        {/* Opening Hours */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="bg-pear-primary text-white rounded-xl p-6">
            <Clock className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div>Monday - Thursday: 8:45am - 5:00pm</div>
              <div>Friday: 8:00am - 3:30pm</div>
              <div>Saturday - Sunday: Closed</div>
              <div className="col-span-full mt-2 font-semibold">Emergency appointments available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}