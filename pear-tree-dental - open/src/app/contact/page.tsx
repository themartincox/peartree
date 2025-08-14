import type { Metadata } from "next";
import ContactFormCard from "@/components/ContactFormCard";

export const metadata: Metadata = {
  title:
    "Contact Us | Pear Tree Dental - Book Your Appointment in Burton Joyce",
  description:
    "Contact Pear Tree Dental in Burton Joyce, Nottingham. Book appointments, ask questions, or visit our modern practice. Call 0115 931 2935 or use our contact form.",
  keywords: [
    "contact Pear Tree Dental",
    "book appointment Burton Joyce",
    "dental enquiries Nottingham",
    "emergency dental Burton Joyce",
    "dental practice Nottinghamshire",
    "dentist contact details",
    "Burton Joyce dental clinic",
  ],
  openGraph: {
    title: "Contact Us | Pear Tree Dental",
    description:
      "Get in touch with our friendly dental team in Burton Joyce. Book appointments or ask questions about our services.",
    type: "website",
    url: "https://peartree.dental/contact",
  },
  alternates: {
    canonical: "https://peartree.dental/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://peartree.dental/contact",
            name: "Contact Pear Tree Dental Centre",
            description:
              "Get in touch with Pear Tree Dental Centre in Burton Joyce. Contact us for appointments, dental emergencies, or general inquiries.",
            url: "https://peartree.dental/contact",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Pear Tree Dental Centre",
              url: "https://peartree.dental",
              telephone: "+441159312935",
              email: "hello@peartree.dental",
              address: {
                "@type": "PostalAddress",
                streetAddress: "22 Nottingham Road",
                addressLocality: "Burton Joyce",
                addressRegion: "Nottinghamshire",
                postalCode: "NG14 5AE",
                addressCountry: "GB",
              },
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-pear-background to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our friendly team. We're here to help with any
              questions about our services, appointments, or dental care.
            </p>
          </div>

          <ContactFormCard
            title="Send us a Message"
            description="Fill out the form below and we'll get back to you within 24 hours during business days. For urgent dental emergencies, please call us directly."
            type="general"
            showContactInfo={true}
          />
        </div>
      </div>
    </>
  );
}
