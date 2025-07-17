import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { practiceInfo } from "@/data/practiceInfo";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Message Sent | Pear Tree Dental - Thank You",
  description: "Thank you for contacting Pear Tree Dental. We'll get back to you within 24 hours.",
  robots: "noindex, nofollow"
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-pear-primary/10 rounded-full">
            <CheckCircle className="h-16 w-16 text-pear-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-pear-primary mb-6 heading-serif">
          Thank You!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your message has been sent successfully. We'll get back to you within 24 hours during business days.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-pear-primary mb-4">Our Opening Hours</h2>
          <div className="space-y-2 text-sm">
            <p>{practiceInfo.openingHoursDisplay.weekdays}</p>
            <p>{practiceInfo.openingHoursDisplay.friday}</p>
            <p>{practiceInfo.openingHoursDisplay.weekend}</p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            {practiceInfo.openingHoursDisplay.emergency}
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-3">
              Return to Homepage
            </Button>
          </Link>
          <br />
          <a href={`tel:${practiceInfo.contact.phone.replace(/\s/g, '')}`} className="text-pear-primary hover:underline">
            For urgent care, call {practiceInfo.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
