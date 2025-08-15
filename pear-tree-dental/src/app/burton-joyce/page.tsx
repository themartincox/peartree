import React from "react";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Car,
  CheckCircle,
  Clock,
  Heart,
  House,
  MapPin,
  Navigation,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function BurtonJoycePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-pear-background/50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pear-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-dental-green rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 bg-dental-green text-white"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Your Local Dental Practice
                </Badge>
                <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
                  Burton Joyce
                  <span className="block text-dental-green">Dental Care</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Award-winning dental care right in the heart of Burton Joyce.
                  Modern treatments, friendly service, and convenient location
                  for all your family's dental needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold group"
                >
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Appointment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0115 931 2935
                </Button>
              </div>

              {/* Local Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-dental-green">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">
                    Years serving Burton Joyce
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dental-green">
                    2000+
                  </div>
                  <div className="text-sm text-gray-600">Local patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dental-green">5★</div>
                  <div className="text-sm text-gray-600">Google reviews</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">
                      BURTON JOYCE PRACTICE IMAGE
                    </h3>
                    <p className="text-gray-600">
                      Modern dental practice exterior in Burton Joyce
                    </p>
                  </div>
                </div>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-dental-green/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-dental-green rounded-xl flex items-center justify-center">
                    <House className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pear-primary">
                      Local Practice
                    </p>
                    <p className="text-sm text-gray-600">Burton Joyce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Convenience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Conveniently Located in Burton Joyce
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Easy to find, easy to park, and easy to book appointments that fit
              around your busy life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-dental-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pear-primary mb-2">
                      Practice Address
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Pear Tree Dental Centre
                      <br />
                      25 Main Street
                      <br />
                      Burton Joyce
                      <br />
                      Nottinghamshire NG14 5DP
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-dental-green text-dental-green"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-dental-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pear-primary mb-2">
                      Parking & Access
                    </h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Free on-site parking available</li>
                      <li>• Wheelchair accessible entrance</li>
                      <li>• Ground floor treatment rooms</li>
                      <li>• Close to public transport links</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-dental-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pear-primary mb-2">
                      Opening Hours
                    </h3>
                    <div className="space-y-1 text-gray-700 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>8:30am - 5:30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span>8:30am - 4:30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00am - 1:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <Card className="overflow-hidden shadow-xl h-full">
                <div className="h-full min-h-[400px] bg-gradient-to-br from-dental-green/10 to-dental-green/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-dental-green" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">
                      INTERACTIVE MAP
                    </h3>
                    <p className="text-gray-600">
                      Google Maps showing Burton Joyce location
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      25 Main Street, Burton Joyce, NG14 5DP
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Burton Joyce Residents */}
      <section className="py-16 bg-gradient-to-br from-pear-background/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Complete Dental Care for Burton Joyce Families
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine check-ups to advanced cosmetic treatments, we provide
              comprehensive dental care for all ages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(
              [
                {
                  title: "Family Dentistry",
                  description:
                    "Gentle care for all ages, from toddlers to grandparents",
                  features: [
                    "Children's dentistry",
                    "Adult check-ups",
                    "Preventive care",
                    "Emergency appointments",
                  ],
                  price: "From £45",
                  icon: Users,
                },
                {
                  title: "Cosmetic Treatments",
                  description:
                    "Transform your smile with our aesthetic dental treatments",
                  features: [
                    "Teeth whitening",
                    "Porcelain veneers",
                    "Composite bonding",
                    "Smile makeovers",
                  ],
                  price: "From £350",
                  icon: Star,
                },
                {
                  title: "Orthodontics",
                  description:
                    "Straighten teeth discreetly with modern clear aligners",
                  features: [
                    "Invisalign",
                    "ClearCorrect",
                    "Adult orthodontics",
                    "Teen treatments",
                  ],
                  price: "From £2,800",
                  icon: CheckCircle,
                },
                {
                  title: "Restorative Care",
                  description: "Repair and restore damaged or missing teeth",
                  features: [
                    "Dental implants",
                    "Crowns & bridges",
                    "Root canal treatment",
                    "Dentures",
                  ],
                  price: "From £150",
                  icon: Shield,
                },
                {
                  title: "Preventive Care",
                  description:
                    "Keep your teeth healthy with regular maintenance",
                  features: [
                    "Scale & polish",
                    "Oral health checks",
                    "Fluoride treatments",
                    "Dental hygiene",
                  ],
                  price: "From £65",
                  icon: Heart,
                },
                {
                  title: "Emergency Care",
                  description: "Urgent dental treatment when you need it most",
                  features: [
                    "Same-day appointments",
                    "Pain relief",
                    "Tooth repairs",
                    "Out-of-hours care",
                  ],
                  price: "From £75",
                  icon: Clock,
                },
              ] || []
            ).map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border border-dental-green/20 hover:border-dental-green/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-dental-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-pear-primary">
                          {service.title}
                        </h3>
                        <div className="text-dental-green font-semibold">
                          {service.price}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="space-y-1">
                      {(service.features || []).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-700 flex items-center space-x-2"
                        >
                          <CheckCircle className="w-3 h-3 text-dental-green flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All treatments available with membership plans - save up to 10%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dental-green hover:bg-dental-green/90 text-white"
              >
                View All Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
              >
                Join Membership Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Community & Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Trusted by Burton Joyce Residents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read what your neighbors have to say about their dental care
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(
              [
                {
                  name: "Sarah Williams",
                  location: "Burton Joyce",
                  review:
                    "Excellent local dental practice. The team is friendly, professional, and the location is so convenient. My whole family has been coming here for years.",
                  rating: 5,
                  service: "Family Dentistry",
                },
                {
                  name: "Michael Thompson",
                  location: "Burton Joyce",
                  review:
                    "Had my teeth whitened here last month and couldn't be happier with the results. Professional service and great value for money.",
                  rating: 5,
                  service: "Teeth Whitening",
                },
                {
                  name: "Emma Davis",
                  location: "Burton Joyce",
                  review:
                    "The emergency dental service saved the day when I had a dental emergency on the weekend. Quick, efficient, and very caring staff.",
                  rating: 5,
                  service: "Emergency Care",
                },
              ] || []
            ).map((review, index) => (
              <Card key={index} className="p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-dental-green">
                    {([...Array(review.rating)] || []).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{review.review}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-pear-primary">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {review.location}
                    </div>
                    <div className="text-sm text-dental-green font-medium">
                      {review.service}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-dental-green/10 to-dental-green/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center space-x-1 text-dental-green">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-dental-green">
                  4.9/5
                </span>
              </div>
              <p className="text-gray-700 font-semibold">
                Based on 150+ Google Reviews from Burton Joyce residents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-green to-dental-green/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Book Your Appointment Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of Burton Joyce residents who trust us with their
              dental care. Call us today or book online for your convenience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-dental-green hover:bg-white/90 font-semibold"
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                Book Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-dental-green"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 0115 931 2935
              </Button>
            </div>

            {/* Local Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Local Burton Joyce practice</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>2000+ local patients</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>15+ years in Burton Joyce</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
