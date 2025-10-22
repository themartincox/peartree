import type { Metadata } from "next";
import ContactFormCard from "@/components/ContactFormCard";
import Image from "next/image";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Dentist in Nottingham | Pear Tree Dental",
  description:
    "Book your dental appointment with our Nottingham dental practice. Quick and easy online booking for all dental services in Nottingham. Call 0115 931 2935 for urgent appointments.",
  keywords: [
    "book dental appointment Nottingham",
    "online dental booking Nottingham",
    "dental appointment Nottingham",
    "emergency dental booking Nottingham",
    "dentist appointment Nottingham"
  ],
  openGraph: {
    title: "Book a Dentist in Nottingham | Pear Tree Dental",
    description:
      "Book your dental appointment with our Nottingham dental practice. Easy online booking for all Nottingham dental services.",
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
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take care of your dental health in Nottingham? Let’s get started.
          </p>
        </div>

        {/* Awards badge (keep visible, remove clinic picture) */}
        <div className="flex justify-center mb-10">
          <div className="relative w-40 h-40">
            <Image
              src="/images/pear-tree-dental-private-dentistry-awards-finalist.webp"
              alt="Private Dentistry Awards finalist"
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>
        </div>

        {/* Option A: Online booking embed */}
        <section aria-labelledby="online-booking" className="max-w-4xl mx-auto mt-8">
          <h2 id="online-booking" className="sr-only">Online booking</h2>
          <iframe
            src="https://booking.uk.hsone.app/soe/new/?pid=UKJMR01"
            className="w-full h-[600px] border-0 rounded-xl shadow-lg"
            title="Pear Tree Dental Booking System"
            loading="lazy"
          />
        </section>

        {/* Option B: Request a callback / manual booking form */}
        <section aria-labelledby="booking-form" className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h2 id="booking-form" className="text-2xl font-bold text-pear-primary mb-4">
              Prefer to request a callback?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fill out the form and we’ll contact you to confirm a time. For urgent
              dental emergencies, please call{" "}
              <a href="tel:01159312935" className="text-pear-primary font-semibold underline-offset-2 hover:underline">
                0115&nbsp;931&nbsp;2935
              </a>.
            </p>
          </div>

          <ContactFormCard
            title="Book Your Appointment"
            description="Tell us a little about your needs and preferred times. We’ll get back to you to confirm."
            formType="booking"
            showContactInfo={true}
          />
        </section>

        {/* What happens next */}
        <section aria-labelledby="what-next" className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 id="what-next" className="text-2xl font-bold text-pear-primary mb-4">
                What Happens Next?
              </h2>
              <p className="text-gray-600">
                After you submit your booking request, here’s what to expect:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pear-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold text-pear-primary mb-2">We’ll Contact You</h3>
                <p className="text-sm text-gray-600">Our team will call within 24 hours to confirm a time.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pear-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold text-pear-primary mb-2">Appointment Confirmed</h3>
                <p className="text-sm text-gray-600">We’ll send confirmation and any preparation details.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pear-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold text-pear-primary mb-2">Your Visit</h3>
                <p className="text-sm text-gray-600">Arrive 10 minutes early for check-in. We’ll take great care of you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opening hours */}
        <section aria-labelledby="opening-hours" className="max-w-2xl mx-auto mt-12 text-center">
          <div className="bg-pear-primary text-white rounded-xl p-6">
            <Clock className="w-8 h-8 mx-auto mb-4" aria-hidden="true" />
            <h2 id="opening-hours" className="text-xl font-bold mb-4">Opening Hours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div>Monday – Thursday: 8:45am – 5:00pm</div>
              <div>Friday: 8:00am – 3:30pm</div>
              <div className="col-span-full">Saturday – Sunday: Closed</div>
              <div className="col-span-full mt-2 font-semibold">Emergency appointments available</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
