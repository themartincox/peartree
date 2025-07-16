import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Star,
  CheckCircle,
  Clock,
  Shield,
  Phone,
  ArrowRight,
  CalendarDays,
  Users,
  Award,
  Heart,
  Car,
  Navigation,
  House,
  Route
} from "lucide-react";

export default function ColwickPage() {
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
                <Badge variant="secondary" className="mb-4 bg-dental-green text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  Serving Colwick Residents
                </Badge>
                <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary leading-tight mb-6">
                  Quality Dental Care for
                  <span className="block text-dental-green">Colwick Residents</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Just a short journey from Colwick to our state-of-the-art practice in Burton Joyce.
                  Professional dental care with easy access and convenient appointment times.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold group">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    Book Appointment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    0115 931 2935
                  </Button>
                </a>
              </div>

              {/* Local Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-dental-green">8min</div>
                  <div className="text-sm text-gray-600">Drive from Colwick</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dental-green">300+</div>
                  <div className="text-sm text-gray-600">Colwick patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dental-green">5★</div>
                  <div className="text-sm text-gray-600">Patient reviews</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">PRACTICE EXTERIOR IMAGE</h3>
                    <p className="text-gray-600">Modern dental practice - easy access from Colwick</p>
                  </div>
                </div>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-dental-green/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-dental-green rounded-xl flex items-center justify-center">
                    <Route className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pear-primary">Easy Access</p>
                    <p className="text-sm text-gray-600">From Colwick</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Access from Colwick */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Easy Journey from Colwick
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Burton Joyce practice is easily accessible from Colwick with convenient parking and flexible appointment times
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Route className="w-6 h-6 text-dental-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pear-primary mb-2">Quick Journey</h3>
                    <p className="text-gray-700 mb-2">
                      Just 8 minutes by car from Colwick to our practice in Burton Joyce
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Via A6011 and Main Street</li>
                      <li>• Direct route with minimal traffic</li>
                      <li>• Well-signposted and easy to find</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-dental-green/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dental-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-dental-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pear-primary mb-2">Free Parking</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Dedicated on-site parking</li>
                      <li>• No parking fees or time limits</li>
                      <li>• Wheelchair accessible spaces</li>
                      <li>• Well-lit and secure</li>
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
                    <h3 className="font-bold text-pear-primary mb-2">Flexible Hours</h3>
                    <p className="text-gray-700 mb-2">
                      Extended hours to fit around your schedule
                    </p>
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
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Practice Location */}
            <div className="relative">
              <Card className="overflow-hidden shadow-xl h-full">
                <div className="h-full min-h-[400px] bg-gradient-to-br from-dental-green/10 to-dental-green/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-dental-green" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">ROUTE MAP</h3>
                    <p className="text-gray-600">Colwick to Burton Joyce Practice</p>
                    <p className="text-sm text-gray-500 mt-2">8-minute journey via A6011</p>
                    <div className="mt-4">
                      <p className="font-semibold text-pear-primary">Practice Address:</p>
                      <p className="text-sm text-gray-600">25 Main Street, Burton Joyce, NG14 5DP</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white">
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions from Colwick
            </Button>
          </div>
        </div>
      </section>

      {/* Services Tailored for Colwick Residents */}
      <section className="py-16 bg-gradient-to-br from-pear-background/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Complete Dental Care for Colwick Families
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental services just minutes from Colwick, with appointment times that work for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Family Dentistry",
                description: "Gentle, caring treatment for all ages",
                features: ["Children's dentistry", "Adult check-ups", "Preventive care", "Family appointments"],
                price: "From £45",
                popular: "Most popular with Colwick families"
              },
              {
                title: "Emergency Care",
                description: "Urgent dental treatment when you need it",
                features: ["Same-day appointments", "Weekend availability", "Pain relief", "Dental trauma"],
                price: "From £75",
                popular: "Available for Colwick residents"
              },
              {
                title: "Cosmetic Dentistry",
                description: "Transform your smile with modern treatments",
                features: ["Teeth whitening", "Veneers", "Composite bonding", "Smile makeovers"],
                price: "From £350",
                popular: "Popular with Colwick professionals"
              },
              {
                title: "Orthodontics",
                description: "Straighten teeth with invisible aligners",
                features: ["Invisalign", "Adult braces", "Teen treatments", "Clear aligners"],
                price: "From £2,800",
                popular: "Convenient for busy Colwick lives"
              },
              {
                title: "Implant Dentistry",
                description: "Permanent solutions for missing teeth",
                features: ["Single implants", "Multiple implants", "All-on-4", "Implant bridges"],
                price: "From £2,500",
                popular: "Advanced care near Colwick"
              },
              {
                title: "Preventive Care",
                description: "Keep your teeth healthy for life",
                features: ["Scale & polish", "Oral health checks", "Hygienist appointments", "Gum treatment"],
                price: "From £65",
                popular: "Essential for Colwick residents"
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 border border-dental-green/20 hover:border-dental-green/40 transition-colors">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-pear-primary mb-2">{service.title}</h3>
                    <div className="text-dental-green font-semibold mb-2">{service.price}</div>
                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  </div>

                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-dental-green flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t">
                    <p className="text-xs text-dental-green font-medium">{service.popular}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Membership plans available - save up to 10% on all treatments</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white">
                View All Services
              </Button>
              <Button size="lg" variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                Join Membership Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Colwick Patient Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              What Colwick Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real reviews from your Colwick neighbors about their dental care experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Clarke",
                location: "Colwick",
                review: "Really convenient location from Colwick. The journey is quick and easy, and the quality of care is excellent. The team always accommodates my work schedule.",
                rating: 5,
                service: "Regular Check-ups"
              },
              {
                name: "Rachel Johnson",
                location: "Colwick",
                review: "My children love coming here for their check-ups. The staff are so patient and gentle. Worth the short drive from Colwick for such professional care.",
                rating: 5,
                service: "Children's Dentistry"
              },
              {
                name: "Mark Stevens",
                location: "Colwick",
                review: "Had an emergency dental issue and they saw me the same day. Professional, efficient, and pain-free treatment. Highly recommend to other Colwick residents.",
                rating: 5,
                service: "Emergency Treatment"
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-dental-green">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{review.review}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-pear-primary">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.location} Resident</div>
                    <div className="text-sm text-dental-green font-medium">{review.service}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-dental-green/10 to-dental-green/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center space-x-1 text-dental-green">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-dental-green">4.9/5</span>
              </div>
              <p className="text-gray-700 font-semibold">Based on 80+ reviews from Colwick area patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Colwick CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-green to-dental-green/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Book Your Appointment Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of satisfied Colwick residents who trust us with their dental care.
              Just an 8-minute journey for professional, caring dental treatment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/book">
                <Button size="lg" className="bg-white text-dental-green hover:bg-white/90 font-semibold">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Book Online
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-green">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0115 931 2935
              </Button>
            </div>

            {/* Colwick-specific Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80">
              <div className="flex items-center justify-center space-x-2">
                <Route className="w-4 h-4" />
                <span>8 minutes from Colwick</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>300+ Colwick patients</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Car className="w-4 h-4" />
                <span>Free parking available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
