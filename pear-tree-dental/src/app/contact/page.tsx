import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactFormCard from "@/components/ContactFormCard";
import { practiceInfo } from "@/data/practiceInfo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  Bus,
  CalendarDays,
  MessageSquare,
  Shield,
  Heart,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Pear Tree Dental - Book Your Appointment in Burton Joyce",
  description: "Contact Pear Tree Dental in Burton Joyce, Nottingham. Book appointments, ask questions, or visit our modern practice. Call 0115 931 2935 or use our contact form.",
  keywords: [
    "contact Pear Tree Dental",
    "book appointment Burton Joyce",
    "dental enquiries Nottingham",
    "emergency dental Burton Joyce",
    "dental practice Nottinghamshire",
    "dentist contact details",
    "Burton Joyce dental clinic"
  ],
  openGraph: {
    title: "Contact Us | Pear Tree Dental",
    description: "Get in touch with our friendly dental team in Burton Joyce. Book appointments or ask questions about our services.",
    type: "website",
    url: "https://peartree.dental/contact"
  },
  alternates: {
    canonical: "https://peartree.dental/contact"
  }
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    primary: "0115 931 2935",
    secondary: "For appointments and enquiries",
    action: "tel:01159312935",
    urgent: true
  },
  {
    icon: Mail,
    title: "Email",
    primary: "hello@peartree.dental",
    secondary: "General enquiries and information",
    action: "mailto:hello@peartree.dental",
    urgent: false
  },
  {
    icon: MapPin,
    title: "Address",
    primary: "22 Nottingham Road",
    secondary: "Burton Joyce, Nottingham NG14 5AL",
    action: "https://maps.google.com/?q=22+Nottingham+Road,+Burton+Joyce,+Nottingham,+NG14+5AL",
    urgent: false
  }
];

const openingHours = practiceInfo.openingHours;

const transportInfo = [
  {
    icon: Car,
    title: "By Car",
    description: "Free on-site parking available for all patients. Easy access from A612 and A6097."
  },
  {
    icon: Bus,
    title: "By Public Transport",
    description: "Regular bus services from Nottingham city center. Burton Joyce is well-connected by local bus routes."
  }
];

const emergencyInfo = {
  title: "Dental Emergency?",
  description: "If you're experiencing a dental emergency outside our normal hours, please call our main number. For severe emergencies, contact NHS 111 or visit your nearest A&E department.",
  phone: "0115 931 2935"
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <MessageSquare className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-8">
              Ready to Start Your Dental Journey?
            </p>
            <p className="text-lg leading-relaxed opacity-80 max-w-3xl mx-auto">
              We're here to help with all your dental needs. Contact us to book an appointment,
              ask questions about our services, or discuss how we can help improve your oral health.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-6 bg-red-50 border-b border-red-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-red-200">
              <div className="p-2 bg-red-100 rounded-full flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 mb-1">{emergencyInfo.title}</h3>
                <p className="text-red-700 text-sm mb-2">{emergencyInfo.description}</p>
                <a
                  href={`tel:${emergencyInfo.phone.replace(/\s/g, '')}`}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Emergency: {emergencyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple ways to reach our friendly team for appointments, enquiries, and support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <Card key={contact.title} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pear-primary/30">
                    <CardContent className="p-8 text-center">
                      <div className={`p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform ${
                        contact.urgent ? 'bg-red-100' : 'bg-pear-primary/10'
                      }`}>
                        <IconComponent className={`h-8 w-8 ${contact.urgent ? 'text-red-600' : 'text-pear-primary'}`} />
                      </div>
                      <h3 className="text-xl font-bold text-pear-primary mb-3">
                        {contact.title}
                      </h3>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-800">
                          {contact.primary}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {contact.secondary}
                        </p>
                      </div>
                      <a
                        href={contact.action}
                        target={contact.title === "Address" ? "_blank" : undefined}
                        rel={contact.title === "Address" ? "noopener noreferrer" : undefined}
                        className={`mt-4 inline-block px-6 py-2 rounded-full font-semibold transition-colors ${
                          contact.urgent
                            ? 'bg-red-600 text-white hover:bg-red-700'
                            : 'bg-pear-primary text-white hover:bg-pear-primary/90'
                        }`}
                      >
                        {contact.title === "Phone" ? "Call Now" :
                         contact.title === "Email" ? "Send Email" : "View Map"}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Hours */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Contact Form */}
              <div>
                <ContactFormCard
                  title="Send us a Message"
                  description="Fill out the form below and we'll get back to you within 24 hours during business days."
                  customField1={{
                    id: "enquiryType",
                    name: "enquiryType",
                    label: "Enquiry Type",
                    type: "select",
                    required: true,
                    options: [
                      { value: "appointment", label: "Book an Appointment" },
                      { value: "emergency", label: "Dental Emergency" },
                      { value: "membership", label: "Membership Enquiry" },
                      { value: "treatment", label: "Treatment Information" },
                      { value: "complaint", label: "Complaint or Feedback" },
                      { value: "other", label: "Other" }
                    ]
                  }}
                  customField2={{
                    id: "preferredTime",
                    name: "preferredTime",
                    label: "Preferred Appointment Time",
                    type: "select",
                    options: [
                      { value: "morning", label: "Morning (8AM - 12PM)" },
                      { value: "afternoon", label: "Afternoon (12PM - 5PM)" },
                      { value: "evening", label: "Evening (5PM - 6PM)" },
                      { value: "saturday", label: "Saturday" }
                    ]
                  }}
                />
              </div>

              {/* Opening Hours & Additional Info */}
              <div className="space-y-8">
                {/* Opening Hours */}
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-pear-primary flex items-center gap-3">
                      <Clock className="h-6 w-6" />
                      Opening Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {openingHours.map((schedule) => (
                        <div
                          key={schedule.day}
                          className={`flex justify-between items-center py-2 px-3 rounded ${
                            !schedule.isOpen ? 'bg-gray-100 border border-gray-200' : 'bg-gray-50'
                          }`}
                        >
                          <span className="font-medium text-gray-800">{schedule.day}</span>
                          <span className={`text-sm ${
                            !schedule.isOpen ? 'text-gray-500 font-medium' : 'text-pear-primary font-semibold'
                          }`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-pear-primary/10 rounded-lg">
                      <p className="text-sm text-pear-primary font-medium flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        Same-day emergency appointments available
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Transport Information */}
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-pear-primary">
                      How to Find Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {transportInfo.map((transport) => {
                        const IconComponent = transport.icon;
                        return (
                          <div key={transport.title} className="flex items-start gap-4">
                            <div className="p-2 bg-pear-primary/10 rounded-full">
                              <IconComponent className="h-5 w-5 text-pear-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-1">
                                {transport.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {transport.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-pear-primary">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <a
                        href="tel:01159312935"
                        className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone className="h-5 w-5" />
                        Call for Emergency
                      </a>
                      <a
                        href="/membership"
                        className="w-full bg-pear-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-pear-primary/90 transition-colors flex items-center justify-center gap-2"
                      >
                        <Heart className="h-5 w-5" />
                        Join Our Practice
                      </a>
                      <a
                        href="/about/team"
                        className="w-full bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
                      >
                        <Shield className="h-5 w-5" />
                        Meet Our Team
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
                Visit Our Practice
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Burton Joyce with easy access and free parking
              </p>
            </div>

            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                {/* Interactive Map */}
                <div className="aspect-video bg-gradient-to-br from-pear-primary/10 to-pear-primary/5 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="h-16 w-16 text-pear-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-pear-primary mb-2">
                        Interactive Map
                      </h3>
                      <p className="text-gray-600 mb-4">
                        22 Nottingham Road, Burton Joyce, Nottingham NG14 5AL
                      </p>
                      <a
                        href="https://maps.google.com/?q=22+Nottingham+Road,+Burton+Joyce,+Nottingham,+NG14+5AL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pear-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-pear-primary/90 transition-colors"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-8 bg-white">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="p-3 bg-pear-primary/10 rounded-full w-fit mx-auto mb-3">
                        <Car className="h-6 w-6 text-pear-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Free Parking</h4>
                      <p className="text-gray-600 text-sm">On-site parking available for all patients</p>
                    </div>
                    <div>
                      <div className="p-3 bg-pear-primary/10 rounded-full w-fit mx-auto mb-3">
                        <MapPin className="h-6 w-6 text-pear-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Easy Access</h4>
                      <p className="text-gray-600 text-sm">Ground floor access with disabled facilities</p>
                    </div>
                    <div>
                      <div className="p-3 bg-pear-primary/10 rounded-full w-fit mx-auto mb-3">
                        <Bus className="h-6 w-6 text-pear-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Public Transport</h4>
                      <p className="text-gray-600 text-sm">Regular bus services from Nottingham</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
