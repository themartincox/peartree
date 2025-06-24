import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Phone,
  Clock,
  MapPin,
  Star,
  Shield,
  AlertTriangle,
  CheckCircle,
  Zap,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Dental Pain Relief Burton Joyce | Same Day Appointments Available",
  description: "Urgent dental pain? Get immediate relief today in Burton Joyce. Emergency dental appointments available. Call 0115 931 2935 for same-day emergency care.",
  keywords: [
    "emergency dental pain Burton Joyce",
    "urgent dental care Nottinghamshire",
    "same day dental appointments",
    "dental pain relief today",
    "emergency dentist Burton Joyce",
    "urgent dental appointments Nottinghamshire",
    "dental emergency today",
    "toothache relief Burton Joyce"
  ],
  openGraph: {
    title: "Emergency Dental Pain Relief Burton Joyce | Same Day Appointments",
    description: "Don't suffer in pain. Get immediate dental relief today in Burton Joyce. Emergency appointments available - call 0115 931 2935",
    type: "website",
    url: "https://peartreedental.co.uk/urgent-dental-pain"
  },
  alternates: {
    canonical: "https://peartreedental.co.uk/urgent-dental-pain"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function UrgentDentalPainPage() {
  const painReliefTips = [
    {
      icon: "🧊",
      title: "Apply ice pack for 15-20 minutes to reduce swelling",
      description: "Use a cold compress on the outside of your cheek"
    },
    {
      icon: "💊",
      title: "Take over-the-counter pain relief as directed on package",
      description: "Ibuprofen or paracetamol can help manage pain and inflammation"
    },
    {
      icon: "🧂",
      title: "Rinse with warm salt water (1 tsp salt in warm water)",
      description: "Gentle saltwater rinses can help reduce bacteria and inflammation"
    },
    {
      icon: "🚫",
      title: "Avoid very hot or cold foods and drinks",
      description: "Temperature extremes can trigger or worsen dental pain"
    },
    {
      icon: "😴",
      title: "Sleep with your head elevated to reduce pressure",
      description: "Use extra pillows to keep your head raised while resting"
    }
  ];

  const emergencyWarnings = [
    "Severe facial swelling that affects your ability to open your mouth",
    "Difficulty swallowing or breathing",
    "High fever with dental pain",
    "Facial swelling that extends to your eye or neck area"
  ];

  return (
    <>
      {/* Emergency Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["DentalClinic", "EmergencyService"],
            "name": "Pear Tree Dental Emergency Care",
            "url": "https://peartreedental.co.uk/urgent-dental-pain",
            "telephone": "+441159312935",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 Nottingham Road",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5AE",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.0041",
              "longitude": "-1.0792"
            },
            "availableService": [
              {
                "@type": "MedicalProcedure",
                "name": "Emergency Dental Care",
                "description": "Same day emergency dental appointments for urgent dental pain relief"
              }
            ],
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "sameAs": [
              "https://www.google.com/maps/place/Pear+Tree+Dental"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "400"
            }
          })
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Emergency Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-white to-red-50 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-red-600 text-white text-sm sm:text-base px-4 py-2">
                🚨 EMERGENCY DENTAL CARE
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600 mb-4 leading-tight">
                We'll See You Today
              </h1>

              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                Don't suffer in pain. Get immediate relief with our emergency dental appointments in Burton Joyce.
              </p>

              {/* Emergency Phone CTA */}
              <div className="bg-red-600 rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl">
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
                  Can't wait? Call us now for immediate assistance
                </h2>
                <a href="tel:+441159312935" className="block">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100 font-bold text-2xl sm:text-3xl py-4 sm:py-6 px-8 sm:px-12 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                    0115 931 2935
                  </Button>
                </a>
                <p className="text-white/90 text-sm mt-3">
                  Emergency appointments available today
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/80 rounded-xl p-4 border border-red-100">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Same Day Appointments</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 border border-red-100">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">5-Star Rated Practice</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 border border-red-100">
                  <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Burton Joyce Location</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Relief While You Wait */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
                Pain Relief While You Wait
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                These steps can help manage your pain until we can see you
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {painReliefTips.map((tip, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-red-500">
                    <CardHeader>
                      <div className="text-4xl mb-3">{tip.icon}</div>
                      <CardTitle className="text-lg text-gray-800 leading-tight">
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  ⚠️ These are temporary measures. You still need professional dental care for a permanent solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Call 999 */}
        <section className="py-16 bg-red-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <AlertTriangle className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-6">
                When to Call 999
              </h2>
              <div className="bg-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <p className="text-white text-lg sm:text-xl mb-6 font-medium">
                  If you experience any of these symptoms, call emergency services immediately:
                </p>
                <ul className="space-y-3 text-white text-left max-w-2xl mx-auto">
                  {emergencyWarnings.map((warning, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100 font-bold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call 999 for Life-Threatening Emergencies
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  Burton Joyce, Nottinghamshire
                </h2>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">5-star rated practice</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardHeader className="bg-red-600 text-white">
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Emergency Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                        <p className="text-gray-600">
                          22 Nottingham Road<br />
                          Burton Joyce, Nottingham<br />
                          UK, NG14 5AE
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Emergency Phone</h4>
                        <a href="tel:+441159312935" className="text-red-600 font-bold text-lg hover:underline">
                          0115 931 2935
                        </a>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Emergency Hours</h4>
                        <p className="text-gray-600">
                          Same-day appointments available<br />
                          Monday - Friday: 8:45am - 5:00pm<br />
                          Emergency care by arrangement
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader className="bg-green-600 text-white">
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Why Choose Pear Tree Dental
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Same-day emergency appointments available</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Experienced emergency dental team</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Modern pain management techniques</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Located in Burton Joyce with free parking</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">5-star rated practice with 400+ reviews</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-6">
                Don't Wait - Get Relief Today
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Our emergency dental team is ready to help you get out of pain quickly and safely.
              </p>

              <div className="space-y-4">
                <a href="tel:+441159312935" className="block">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 px-8 rounded-full w-full sm:w-auto"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Call Now: 0115 931 2935
                  </Button>
                </a>

                <p className="text-white/70 text-sm">
                  Emergency appointments available today • Burton Joyce, Nottinghamshire
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
