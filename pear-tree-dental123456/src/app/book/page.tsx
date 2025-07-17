import type { Metadata } from "next";
import ContactFormCard from "@/components/ContactFormCard";
import { practiceInfo } from "@/data/practiceInfo";
import { CalendarDays, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Appointment | Pear Tree Dental - Schedule Your Visit in Burton Joyce",
  description: "Book your dental appointment with Pear Tree Dental in Burton Joyce, Nottingham. Easy online booking for routine check-ups, emergencies, cosmetic treatments, and membership enquiries.",
  keywords: [
    "book dental appointment Burton Joyce",
    "schedule dental visit Nottingham",
    "dental booking online",
    "dentist appointment Burton Joyce",
    "emergency dental booking",
    "cosmetic dentistry appointment",
    "dental membership booking",
    "Pear Tree Dental appointments"
  ],
  openGraph: {
    title: "Book Your Appointment | Pear Tree Dental",
    description: "Schedule your dental appointment online with our friendly team in Burton Joyce. Book routine check-ups, emergency care, or cosmetic consultations.",
    type: "website",
    url: "https://peartree.dental/book"
  },
  alternates: {
    canonical: "https://peartree.dental/book"
  }
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
      {/* Hero/Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <CalendarDays className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 heading-serif">
              Book in with <span className="text-pear-gold">Pear Tree Dental</span>
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-8">
              Schedule Your Appointment Today
            </p>
            <p className="text-lg leading-relaxed opacity-80 max-w-3xl mx-auto">
              Complete the form below to book your appointment. Whether you need a routine check-up,
              emergency care, or want to explore our cosmetic treatments, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-pear-gold rounded-full"></div>
                <span className="text-gray-600 font-medium">Usually respond within 24 hours</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-pear-gold rounded-full"></div>
                <span className="text-gray-600 font-medium">Emergency appointments available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-pear-gold rounded-full"></div>
                <span className="text-gray-600 font-medium">Flexible appointment times</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ContactFormCard
              title="Book Your Appointment"
              description="Fill out the form below and we'll contact you to confirm your appointment time. For urgent dental emergencies, please call us directly at 0115 931 2935."
              formAction="/success"
              submitText="Submit Booking Request"
              customField1={{
                id: "bookingType",
                name: "bookingType",
                label: "Booking Type",
                type: "select",
                required: true,
                options: [
                  { value: "routine", label: "Routine appointment" },
                  { value: "emergency", label: "Dental emergency" },
                  { value: "cosmetic", label: "Cosmetic enquiry" },
                  { value: "membership", label: "Membership enquiry" }
                ]
              }}
              customField2={{
                id: "preferredTime",
                name: "preferredTime",
                label: "Preferred Appointment Time",
                type: "select",
                options: [
                  { value: "early morning", label: "Early Morning (8AM - 9AM)" },
                  { value: "morning", label: "Morning (9AM - 12PM)" },
                  { value: "afternoon", label: "Afternoon (12PM - 5PM)" },
                  { value: "saturday", label: "Saturday" }
                ]
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-pear-primary mb-8 heading-serif">
              Need Immediate Assistance?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-pear-primary mb-2">Emergency Care</h3>
                <p className="text-gray-600 mb-4">
                  For urgent dental emergencies, call us immediately for same-day appointments.
                </p>
                <a
                  href="tel:01159312935"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
                >
                  Call 0115 931 2935
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-pear-primary" />
                </div>
                <h3 className="text-xl font-bold text-pear-primary mb-2">General Enquiries</h3>
                <p className="text-gray-600 mb-4">
                  Have questions about our treatments or services? We're here to help.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-pear-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-pear-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-pear-primary mb-8 heading-serif">
              Opening Hours
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                {practiceInfo.openingHours.map((schedule, index) => (
                  <div
                    key={schedule.day}
                    className={`flex justify-between items-center py-3 ${
                      index < practiceInfo.openingHours.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <span className="font-medium text-gray-800">{schedule.day}</span>
                    <span className={`font-semibold ${
                      schedule.isOpen ? 'text-pear-primary' : 'text-gray-500'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-pear-primary/10 rounded-lg">
                <p className="text-sm text-pear-primary font-medium">
                  Emergency appointments available by calling {practiceInfo.contact.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
