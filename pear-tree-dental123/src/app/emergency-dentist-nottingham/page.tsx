import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NottinghamTransportSchema from '@/components/seo/NottinghamTransportSchema';
import {
  AlertTriangle,
  Phone,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  Car,
  Shield,
  Heart,
  Users,
  Zap,
  Calendar,
  Timer,
  Stethoscope,
  Activity,
  Eye,
  Smile
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Emergency Dentist Nottingham - Same Day Appointments | Pear Tree Dental',
  description: 'Emergency dental care for Nottingham patients. Same-day appointments usually available. Just 15 minutes from city centre. Call 0115 931 2935 for urgent dental pain relief.',
  keywords: [
    'emergency dentist Nottingham',
    'dental emergency Nottingham',
    'same day dentist Nottingham',
    'urgent dental care Nottingham',
    'weekend dentist Nottingham',
    'dental pain Nottingham',
    'broken tooth Nottingham',
    'dental abscess Nottingham',
    'emergency dental appointments Nottingham'
  ],
  openGraph: {
    title: 'Emergency Dentist Nottingham - Same Day Appointments Available',
    description: 'Dental emergency? We can see you today. Just 15 minutes from Nottingham city centre with free parking.',
    url: 'https://peartree.dental/emergency-dentist-nottingham'
  },
  alternates: {
    canonical: 'https://peartree.dental/emergency-dentist-nottingham'
  }
};

export default function EmergencyDentistNottinghamPage() {
  return (
    <div className="min-h-screen bg-red-50">
      {/* Emergency Medical Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["EmergencyService", "MedicalBusiness"],
            "@id": "https://peartree.dental/emergency-dentist-nottingham",
            "name": "Emergency Dentist Nottingham - Pear Tree Dental",
            "description": "Emergency dental care for Nottingham patients with same-day appointments available. Professional urgent dental treatment just 15 minutes from city centre.",
            "url": "https://peartree.dental/emergency-dentist-nottingham",
            "telephone": "+441159312935",
            "image": "https://peartree.dental/images/emergency-dental-care.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 Nottingham Road",
              "addressLocality": "Burton Joyce",
              "addressRegion": "Nottinghamshire",
              "postalCode": "NG14 5AL",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.9847",
              "longitude": "-1.0147"
            },
            "serviceArea": [
              {
                "@type": "City",
                "name": "Nottingham"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Nottinghamshire"
              }
            ],
            "availableService": [
              {
                "@type": "MedicalProcedure",
                "name": "Emergency Dental Pain Relief",
                "procedureType": "Emergency",
                "description": "Immediate pain relief for severe dental emergencies"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Broken Tooth Repair",
                "procedureType": "Emergency",
                "description": "Same-day repair for chipped, cracked, or broken teeth"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Dental Abscess Treatment",
                "procedureType": "Emergency",
                "description": "Urgent treatment for dental infections and abscesses"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Lost Filling Replacement",
                "procedureType": "Emergency",
                "description": "Emergency replacement of lost fillings and crowns"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Emergency Dental Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Same-Day Emergency Appointment",
                    "description": "Emergency dental appointments usually available same day"
                  },
                  "availability": "InStock",
                  "availabilityStarts": "2024-01-01T00:00:00Z"
                }
              ]
            },
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 08:00-14:00"
            ],
            "specialOpeningHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00",
                "validFrom": "2024-01-01",
                "description": "Emergency appointments available during normal hours"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "14:00",
                "validFrom": "2024-01-01",
                "description": "Weekend emergency appointments available"
              }
            ]
          })
        }}
      />

      {/* Enhanced Emergency Transport Schema */}
      <NottinghamTransportSchema
        fromLocation="Nottingham (Emergency)"
        estimatedTravelTime="15 minutes"
        transportModes={["car", "taxi", "public_transport"]}
        routeDescription="Urgent route via A612 - fastest access for dental emergencies"
      />

      {/* URGENT HERO SECTION */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white text-red-600 mb-6 px-4 py-2">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency Dental Care Available
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Emergency Dentist
              <span className="block text-yellow-300">for Nottingham</span>
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
              Dental emergency? We can see you today. Just 15 minutes from Nottingham city centre.
              <br className="hidden sm:block" />
              Same-day appointments usually available for urgent dental pain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-yellow-100 font-bold text-lg h-16 px-8 shadow-2xl"
              >
                <Link href="tel:01159312935">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Now: 0115 931 2935
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg h-16 px-8"
              >
                <Link href="/contact">
                  <Clock className="w-6 h-6 mr-3" />
                  Book Emergency Slot
                </Link>
              </Button>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 inline-block border border-white/20">
              <div className="text-sm font-medium opacity-90 mb-1">From Nottingham City Centre:</div>
              <div className="text-3xl font-bold mb-1">15 minutes</div>
              <div className="text-sm opacity-90">Free parking • No city centre traffic • Easy A612 route</div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY CONDITIONS WE TREAT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              We Treat All Dental Emergencies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From severe pain to broken teeth - we provide rapid relief for all urgent dental problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Severe Tooth Pain",
                urgent: true,
                description: "Immediate pain relief available",
                time: "Same day"
              },
              {
                icon: Shield,
                title: "Broken/Chipped Teeth",
                urgent: false,
                description: "Emergency repairs and protection",
                time: "Same day"
              },
              {
                icon: AlertTriangle,
                title: "Dental Abscess",
                urgent: true,
                description: "Urgent infection treatment",
                time: "Immediate"
              },
              {
                icon: Heart,
                title: "Lost Fillings/Crowns",
                urgent: false,
                description: "Temporary and permanent solutions",
                time: "Within 24hrs"
              },
              {
                icon: Activity,
                title: "Facial Swelling",
                urgent: true,
                description: "Anti-inflammatory treatment",
                time: "Same day"
              },
              {
                icon: Eye,
                title: "Trauma & Accidents",
                urgent: true,
                description: "Sports injuries and accidents",
                time: "Immediate"
              }
            ].map((condition) => {
              const Icon = condition.icon;
              return (
                <Card
                  key={condition.title}
                  className={`p-6 transition-all hover:shadow-lg ${
                    condition.urgent
                      ? 'border-2 border-red-500 bg-red-50'
                      : 'border-2 border-orange-300 bg-orange-50'
                  }`}
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <Icon className={`w-8 h-8 mt-1 ${
                      condition.urgent ? 'text-red-600' : 'text-orange-600'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-lg">{condition.title}</h3>
                        <Badge className={`text-xs ${
                          condition.urgent
                            ? 'bg-red-500 text-white'
                            : 'bg-orange-500 text-white'
                        }`}>
                          {condition.urgent ? 'URGENT' : 'PRIORITY'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{condition.description}</p>
                      <div className="flex items-center space-x-2">
                        <Timer className="w-4 h-4 text-dental-green" />
                        <span className="text-sm font-medium text-dental-green">{condition.time}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMERGENCY JOURNEY FROM NOTTINGHAM */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Fast Emergency Access from Nottingham
            </h2>
            <p className="text-xl text-gray-600">
              When every minute counts - we're closer than you think
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  area: "City Centre",
                  time: "15 min",
                  route: "A612 Direct",
                  description: "Fastest route avoiding traffic",
                  traffic: "Usually clear"
                },
                {
                  area: "West Bridgford",
                  time: "10 min",
                  route: "A52 → A612",
                  description: "Quick dual carriageway access",
                  traffic: "Minimal delays"
                },
                {
                  area: "Arnold",
                  time: "18 min",
                  route: "A614 → A612",
                  description: "Direct route via Gedling",
                  traffic: "Avoid city centre"
                }
              ].map((journey) => (
                <Card key={journey.area} className="p-8 text-center bg-white shadow-xl border-2 border-red-200">
                  <div className="text-4xl font-bold text-red-600 mb-3">{journey.time}</div>
                  <div className="text-xl font-semibold text-pear-primary mb-2">{journey.area}</div>
                  <div className="text-sm text-gray-600 mb-3">{journey.route}</div>
                  <div className="text-sm font-medium text-dental-green mb-2">{journey.description}</div>
                  <div className="text-xs text-gray-500">{journey.traffic}</div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-red-600 text-white rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Emergency Parking & Access</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Car className="w-5 h-5" />
                    <span>Free emergency parking</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Ground floor access</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>No waiting for parking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY PROCESS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              What Happens When You Call
            </h2>
            <p className="text-xl text-gray-600">
              Our emergency process gets you seen fast and pain-free
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "1",
                  title: "Call Our Emergency Line",
                  description: "Speak directly to our dental team. We assess your emergency and book you in immediately.",
                  time: "Within 2 minutes",
                  icon: Phone
                },
                {
                  step: "2",
                  title: "Emergency Slot Confirmed",
                  description: "We'll reserve an emergency appointment slot and give you journey directions from Nottingham.",
                  time: "Same day usually",
                  icon: Calendar
                },
                {
                  step: "3",
                  title: "Fast Journey & Parking",
                  description: "15-minute journey from Nottingham. Free parking right outside - no city centre stress.",
                  time: "15 minutes travel",
                  icon: Car
                },
                {
                  step: "4",
                  title: "Immediate Pain Relief",
                  description: "Priority treatment to stop your pain immediately. Full treatment plan discussed after relief.",
                  time: "Pain relief first",
                  icon: Stethoscope
                }
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <Card key={step.step} className="p-6 border-2 border-red-200 hover:border-red-400 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon className="w-6 h-6 text-red-600" />
                          <h3 className="text-lg font-bold text-pear-primary">{step.title}</h3>
                        </div>
                        <p className="text-gray-700 mb-3">{step.description}</p>
                        <div className="flex items-center space-x-2">
                          <Timer className="w-4 h-4 text-dental-green" />
                          <span className="text-sm font-medium text-dental-green">{step.time}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* URGENT CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Don't Suffer in Pain
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Emergency dental appointments available today. Call now for immediate relief.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-yellow-100 text-red-600 font-bold text-xl h-16 px-12 shadow-2xl"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-6 w-6 mr-3" />
                  Emergency: 0115 931 2935
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Same-Day Available</h3>
                <p className="text-sm opacity-90">Emergency slots usually available same day</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">15 Min from Nottingham</h3>
                <p className="text-sm opacity-90">Faster than city centre with free parking</p>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Pain Relief Priority</h3>
                <p className="text-sm opacity-90">Stopping your pain is our first priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
