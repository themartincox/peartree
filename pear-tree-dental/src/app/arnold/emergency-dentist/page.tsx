import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  CheckCircle,
  Car,
  CalendarDays,
  Shield,
  Heart,
  AlertTriangle,
  Zap,
  Navigation,
  Users,
  PhoneCall,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Dentist in Arnold - Same Day Dental Pain Relief | Pear Tree Dental",
  description: "Emergency dentist for Arnold residents. Same-day appointments for dental pain, broken teeth, and urgent dental problems. Just 15 minutes away with immediate relief.",
  keywords: [
    "emergency dentist Arnold",
    "dental emergency Arnold",
    "toothache Arnold NG5",
    "same day dentist Arnold",
    "dental pain relief Arnold",
    "broken tooth repair Arnold",
    "urgent dental care Arnold"
  ],
  openGraph: {
    title: "Emergency Dentist in Arnold - Same Day Dental Pain Relief | Pear Tree Dental",
    description: "Emergency dental care for Arnold residents. Same-day appointments for dental pain and urgent problems just 15 minutes away.",
    url: "https://peartree.dental/arnold/emergency-dentist"
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/emergency-dentist"
  }
};

export default function ArnoldEmergencyDentistPage() {
  const arnoldEmergencyFAQs = [
    {
      question: "How quickly can I see an emergency dentist from Arnold?",
      answer: "We often have same-day emergency appointments available. Call us immediately on 0115 931 2935 and we'll do our best to see you the same day, just 15 minutes from Arnold."
    },
    {
      question: "What dental emergencies do you treat for Arnold patients?",
      answer: "We treat all dental emergencies including severe toothache, broken teeth, knocked-out teeth, lost fillings, dental abscesses, and trauma. Pain relief is our immediate priority."
    },
    {
      question: "Can I get emergency dental care at weekends from Arnold?",
      answer: "Yes, we provide emergency dental services including weekends and evenings. Call our emergency line and we'll arrange urgent care for Arnold patients experiencing dental pain."
    },
    {
      question: "What should I do if I have a dental emergency in Arnold?",
      answer: "Call us immediately on 0115 931 2935. For severe pain, take over-the-counter painkillers as directed. For knocked-out teeth, place in milk and come immediately - we're just 15 minutes away."
    },
    {
      question: "Do you accept NHS patients for emergency dental care?",
      answer: "Yes, we accept both NHS and private patients for emergency dental care. We'll treat your emergency first and discuss payment options during your visit."
    }
  ];

  const emergencyTypes = [
    {
      icon: AlertTriangle,
      title: "Severe Toothache",
      description: "Immediate pain relief and treatment for dental pain that won't go away",
      urgency: "Immediate"
    },
    {
      icon: Zap,
      title: "Broken/Chipped Teeth",
      description: "Emergency repair for teeth damaged by accidents or trauma",
      urgency: "Same Day"
    },
    {
      icon: Shield,
      title: "Lost Fillings/Crowns",
      description: "Emergency replacement of lost dental work to prevent further damage",
      urgency: "Within 24hrs"
    },
    {
      icon: Activity,
      title: "Dental Infections",
      description: "Urgent treatment for abscesses and infected teeth with swelling",
      urgency: "Immediate"
    },
    {
      icon: Heart,
      title: "Knocked-Out Teeth",
      description: "Emergency re-implantation - time critical, call immediately",
      urgency: "60 minutes"
    },
    {
      icon: PhoneCall,
      title: "Dental Trauma",
      description: "Comprehensive care for facial and dental injuries from accidents",
      urgency: "Immediate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "Pear Tree Dental - Emergency Dentist in Arnold",
            "image": "https://peartree.dental/images/emergency-dentist-arnold.jpg",
            "url": "https://peartree.dental/arnold/emergency-dentist",
            "telephone": "+44-115-931-2935",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 Nottingham Road",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5AE",
              "addressCountry": "UK"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Arnold, NG5"
            },
            "serviceType": "Emergency Dental Care",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "availableService": {
              "@type": "MedicalService",
              "serviceType": "Emergency Dental Treatment"
            },
            "openingHours": "24/7 Emergency Line Available"
          })
        }}
      />

      {/* Emergency Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-yellow-400 text-red-800 px-4 py-2 text-sm font-bold animate-pulse">
                <AlertTriangle className="w-4 h-4 mr-2" />
                EMERGENCY SERVICE AVAILABLE
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Emergency Dentist in <span className="text-yellow-300">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Same-Day Dental Pain Relief Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Emergency appointments available — Call now for immediate help
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01159312935">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-red-800 px-8 py-4 text-lg font-bold rounded-full animate-pulse">
                  <Phone className="w-5 h-5 mr-2" />
                  CALL NOW: 0115 931 2935
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Emergency Appointment
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🚨 Available 24/7 for Dental Emergencies</p>
              <p className="text-sm opacity-90">Same-day appointments • Pain relief priority • Arnold patients welcome</p>
            </div>
          </div>
        </div>
      </section>

      {/* Localised Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Immediate Dental Emergency Care for Arnold Residents
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                When dental emergencies strike in Arnold, you need immediate professional care.
                Our emergency dental service is just 15 minutes away in Burton Joyce, offering
                same-day appointments, immediate pain relief, and comprehensive emergency treatment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-red-500">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">Same-Day Care</h3>
                  <p className="text-gray-600">Emergency appointments available within hours, not days</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-pear-primary">
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">Pain Relief Priority</h3>
                  <p className="text-gray-600">Immediate pain management while we treat the underlying problem</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-dental-green">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-dental-green mx-auto mb-4" />
                  <h3 className="font-bold text-pear-primary mb-2">Comprehensive Care</h3>
                  <p className="text-gray-600">Full emergency treatment to resolve problems permanently</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Dental Emergencies We Treat for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't suffer in silence. We provide immediate care for all types of dental emergencies,
                ensuring Arnold residents get the urgent treatment they need quickly and effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {(emergencyTypes || []).map((emergency, index) => {
                const IconComponent = emergency.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-red-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-pear-primary">{emergency.title}</h3>
                            <Badge
                              variant="outline"
                              className={emergency.urgency === "Immediate" || emergency.urgency === "60 minutes" ? "border-red-500 text-red-600" : "border-yellow-500 text-yellow-600"}
                            >
                              {emergency.urgency}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm">{emergency.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-red-50 rounded-lg p-8">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Don't Wait - Call Immediately</h3>
              <p className="text-lg text-gray-600 mb-6">
                Dental emergencies can worsen rapidly. The sooner you call, the better we can help relieve your pain
                and prevent further complications.
              </p>
              <a href="tel:01159312935">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  CALL EMERGENCY LINE: 0115 931 2935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                Emergency Care Stories from Arnold Patients
              </h2>
            </div>

            <TestimonialBanner
              text="I woke up at 2AM with excruciating tooth pain and called the emergency line. They saw me first thing in the morning and sorted out my abscess immediately. The pain relief was instant, and the 15-minute drive from Arnold was nothing compared to hours of agony. They literally saved my weekend and probably my tooth!"
              author="Lisa M. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">Same Day</div>
                <p className="text-gray-600">Emergency appointments available</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <p className="text-gray-600">Emergency phone line available</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">15 mins</div>
                <p className="text-gray-600">Quick access from Arnold</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do in Emergency */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                What to Do in a Dental Emergency While Travelling from Arnold
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Immediate Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <p>Call our emergency line immediately: <strong>0115 931 2935</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <p>Take over-the-counter painkillers as directed on packaging</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <p>Apply cold compress to outside of face for swelling</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <p>For knocked-out teeth: place in milk, not water</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-pear-primary">
                <CardHeader>
                  <CardTitle className="text-pear-primary flex items-center gap-2">
                    <Navigation className="w-5 h-5" />
                    Getting to Us Quickly
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-primary mt-1 flex-shrink-0" />
                    <p>We're just 15 minutes from Arnold via A6097</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-primary mt-1 flex-shrink-0" />
                    <p>Free parking available right outside the practice</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-primary mt-1 flex-shrink-0" />
                    <p>Clear directions: 22 Nottingham Road, Burton Joyce, NG14 5AE</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pear-primary mt-1 flex-shrink-0" />
                    <p>We'll prioritise your emergency appointment</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Specific to Arnold */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Emergency Dental Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about emergency dental care
              </p>
            </div>

            <FAQSection faqs={arnoldEmergencyFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Fast Route from Arnold for Emergency Dental Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Emergency Route from Arnold
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p><span className="font-semibold text-red-600">1.</span> Take A6097 towards Lowdham</p>
                    <p><span className="font-semibold text-red-600">2.</span> Continue for 8 miles through Gedling</p>
                    <p><span className="font-semibold text-red-600">3.</span> Turn right into Burton Joyce</p>
                    <p><span className="font-semibold text-red-600">4.</span> We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-red-600 font-bold">Emergency journey time: 15 minutes</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                    <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h4 className="font-bold text-red-600 mb-2">Emergency Priority</h4>
                    <p className="text-gray-600">Emergency patients seen immediately upon arrival</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Arnold,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Emergency Directions from Arnold
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Don't Suffer in Pain - Emergency Help from Arnold Available Now
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Call our emergency line now for immediate dental care. Same-day appointments available
              for Arnold patients experiencing dental emergencies. Don't wait - we're here to help.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <AlertTriangle className="inline w-5 h-5 mr-2 text-yellow-300" />
                24/7 Emergency Line Available
              </p>
              <p className="text-sm opacity-90">
                Immediate pain relief • Same-day appointments • NHS & private patients welcome
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01159312935">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-red-800 px-8 py-4 text-lg font-bold rounded-full animate-pulse">
                  <Phone className="w-5 h-5 mr-2" />
                  CALL NOW: 0115 931 2935
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Emergency Online
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Same-day emergency appointments</span>
              <span>✓ Immediate pain relief priority</span>
              <span>✓ Just 15 minutes from Arnold</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
