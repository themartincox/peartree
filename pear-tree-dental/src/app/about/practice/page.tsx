import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Clock, Wifi, Car, Shield, Sparkles, Heart, Award, Users } from "lucide-react";
import Image from "next/image";
import { practiceInfo } from "@/data/practiceInfo";

export const metadata: Metadata = {
  title: "Our Practice | Pear Tree Dental - State-of-the-Art Dental Facilities in Burton Joyce",
  description: "Discover our modern dental practice in Burton Joyce, Nottingham. State-of-the-art facilities, advanced technology, and a patient-centered approach to dental care.",
  keywords: [
    "dental practice Burton Joyce",
    "modern dental clinic Nottingham",
    "dental facilities Nottinghamshire",
    "advanced dental technology",
    "state-of-the-art dentistry",
    "patient-centered dental care",
    "dental clinic Burton Joyce"
  ],
  openGraph: {
    title: "Our Practice | Pear Tree Dental",
    description: "State-of-the-art dental facilities with a patient-centered approach in Burton Joyce, Nottingham.",
    type: "website",
    url: "https://peartree.dental/about/practice"
  },
  alternates: {
    canonical: "https://peartree.dental/about/practice"
  }
};

const facilities = [
  {
    icon: Shield,
    title: "Advanced Sterilization",
    description: "Hospital-grade sterilisation protocols ensuring the highest levels of safety and hygiene for all patients."
  },
  {
    icon: Sparkles,
    title: "Digital Technology",
    description: "Latest digital imaging, intraoral cameras, and CAD/CAM technology for precise diagnosis and treatment."
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    description: "Comfortable treatment rooms with modern amenities designed to reduce anxiety and enhance your experience."
  },
  {
    icon: Award,
    title: "Quality Standards",
    description: "Accredited practice maintaining the highest standards of care with regular quality assessments and training."
  }
];

const amenities = [
  {
    icon: Car,
    title: "Free Parking",
    description: "Convenient on-site parking available for all patients"
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Complimentary wireless internet access throughout the practice"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Extended opening hours to accommodate your busy schedule"
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Welcoming environment suitable for patients of all ages"
  }
];

const values = [
  {
    title: "Patient-Centered Care",
    description: "Every treatment plan is tailored to your individual needs, preferences, and budget. We believe in involving you in every decision about your oral health.",
    icon: "🎯"
  },
  {
    title: "Continuous Learning",
    description: "Our team regularly attends training courses and conferences to stay updated with the latest techniques and technologies in dentistry.",
    icon: "📚"
  },
  {
    title: "Preventive Approach",
    description: "We focus on preventing dental problems before they occur, helping you maintain optimal oral health for life.",
    icon: "🛡️"
  },
  {
    title: "Transparent Communication",
    description: "We explain all treatment options clearly, including costs, so you can make informed decisions about your dental care.",
    icon: "💬"
  }
];

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Building2 className="h-12 w-12" />
              </div>
            </div>
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-pear-gold">Modern</span> Practice
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-8">
              State-of-the-Art Facilities in Burton Joyce
            </p>
            <p className="text-lg leading-relaxed opacity-80 max-w-3xl mx-auto">
              Located in the heart of Burton Joyce, our practice combines cutting-edge dental technology
              with a warm, welcoming environment to provide exceptional dental care for the whole family.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-pear-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-pear-primary" />
                  </div>
                  <h2 className="heading-serif text-3xl font-bold text-pear-primary">
                    Conveniently Located
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="heading-serif text-xl font-semibold mb-2 text-gray-800">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      22 Nottingham Road<br />
                      Burton Joyce<br />
                      Nottingham, NG14 5AE
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-serif text-xl font-semibold mb-2 text-gray-800">Contact Information</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        📞 <a href="tel:01159312935" className="text-pear-primary hover:underline">0115 931 2935</a>
                      </p>
                      <p className="text-gray-600">
                        ✉️ <a href="mailto:hello@peartree.dental" className="text-pear-primary hover:underline">
                          hello@peartree.dental
                        </a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="heading-serif text-xl font-semibold mb-2 text-gray-800">Opening Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>{practiceInfo.openingHoursDisplay.weekdays}</p>
                      <p>{practiceInfo.openingHoursDisplay.friday}</p>
                      <p>{practiceInfo.openingHoursDisplay.weekend}</p>
                      <p className="text-sm text-pear-primary mt-2">{practiceInfo.openingHoursDisplay.emergency}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="overflow-hidden shadow-xl">
                  <CardContent className="p-0">
                    <a
                      href="https://www.google.com/maps/place/Pear+Tree+Dental+Centre/@52.9857989,-1.0448653,17z/data=!3m1!4b1!4m6!3m5!1s0x4879c65a8b3cba23:0xf52130aa5ccb21b!8m2!3d52.985799!4d-1.039989!16s%2Fg%2F1vxdxtj6?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative group cursor-pointer"
                    >
                      <div className="aspect-video bg-gradient-to-br from-green-100 via-blue-50 to-green-50 relative overflow-hidden">
                        {/* Map-style background with roads and location indicator */}
                        <div className="absolute inset-0">
                          <svg viewBox="0 0 600 400" className="w-full h-full">
                            {/* Background */}
                            <rect width="600" height="400" fill="#f8fdf8" />

                            {/* Roads */}
                            <path d="M0 200 L600 200" stroke="#e2e8f0" strokeWidth="8" />
                            <path d="M300 0 L300 400" stroke="#e2e8f0" strokeWidth="6" />
                            <path d="M150 100 L450 100" stroke="#f1f5f9" strokeWidth="4" />
                            <path d="M150 300 L450 300" stroke="#f1f5f9" strokeWidth="4" />

                            {/* Main Road Label */}
                            <text x="350" y="195" fontSize="12" fill="#64748b" fontFamily="Arial">Nottingham Road</text>

                            {/* Location Pin */}
                            <circle cx="320" cy="180" r="8" fill="#ef4444" />
                            <path d="M320 170 L320 190" stroke="#dc2626" strokeWidth="2" />

                            {/* Practice Building */}
                            <rect x="310" y="185" width="20" height="15" fill="#09394d" rx="2" />

                            {/* Surrounding area indicators */}
                            <circle cx="200" cy="150" r="3" fill="#10b981" opacity="0.6" />
                            <circle cx="450" cy="250" r="3" fill="#10b981" opacity="0.6" />
                            <circle cx="150" cy="300" r="3" fill="#10b981" opacity="0.6" />

                            {/* Burton Joyce label */}
                            <text x="350" y="150" fontSize="14" fill="#09394d" fontWeight="bold" fontFamily="Arial">Burton Joyce</text>
                          </svg>
                        </div>

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-pear-primary" />
                            <span className="text-sm font-medium text-pear-primary">View on Google Maps</span>
                          </div>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200">
                          <h3 className="font-semibold text-pear-primary mb-1">
                            Pear Tree Dental
                          </h3>
                          <p className="text-sm text-gray-600">
                            22 Nottingham Road, Burton Joyce, NG14 5AE
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span>🚗 Free parking available</span>
                            <span>🚌 Bus routes nearby</span>
                          </div>
                          <p className="text-xs text-pear-primary font-medium mt-1">
                            Click to get directions
                          </p>
                        </div>

                        {/* Hover effect indicator */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-pear-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                            Open in Google Maps
                          </div>
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our practice is equipped with the latest technology and designed with your comfort and safety in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {(facilities || []).map((facility) => {
              const IconComponent = facility.icon;
              return (
                <Card key={facility.title} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pear-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-pear-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-pear-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-pear-primary" />
                    </div>
                    <h3 className="heading-serif text-lg font-bold text-pear-primary mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Our Values & Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to exceptional dental care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {(values || []).map((value) => (
              <Card key={value.title} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="heading-serif text-xl font-bold text-pear-primary mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Patient Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've designed our practice to make your visit as comfortable and convenient as possible
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {(amenities || []).map((amenity) => {
              const IconComponent = amenity.icon;
              return (
                <Card key={amenity.title} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="p-2 bg-pear-primary/10 rounded-full w-fit mx-auto mb-3 group-hover:bg-pear-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-pear-primary" />
                    </div>
                    <h3 className="heading-serif font-bold text-pear-primary mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment in Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Investment in Advanced Technology
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We continually invest in the latest dental technology to ensure our patients receive
              the most effective, comfortable, and precise treatments available. From digital X-rays
              that reduce radiation exposure to CAD/CAM technology for same-day crowns, we're committed
              to staying at the forefront of dental innovation.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-pear-primary mb-2">25+</div>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pear-primary mb-2">20,000+</div>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pear-primary mb-2">400+</div>
                <p className="text-gray-600">5-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Experience Our Modern Practice
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Book your appointment today and discover the difference that advanced technology
              and personalized care can make to your dental health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01159312935"
                className="bg-white text-pear-primary px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-300 flex items-center justify-center gap-2"
              >
                📞 Call 0115 931 2935
              </a>
              <a
                href="/about/team"
                className="bg-pear-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-pear-gold/90 transition-colors duration-300"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
