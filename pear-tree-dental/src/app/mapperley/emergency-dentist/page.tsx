import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
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
  Award,
  Navigation,
  Users,
  Baby,
  Home,
  CreditCard,
  Calendar,
  ThumbsUp,
  FileText,
  Stethoscope,
  Timer
} from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Dentist in Mapperley - Fast Relief for Working Families | Pear Tree Dental",
  description: "Emergency dentist for Mapperley working families. Fast pain relief, child-friendly emergency care, and convenient appointments. Quick drive from Mapperley NG3.",
  keywords: [
    "emergency dentist Mapperley",
    "dental emergency Mapperley NG3",
    "emergency dental care Mapperley",
    "dental pain relief Mapperley",
    "family emergency dentist Mapperley",
    "same day dentist Mapperley",
    "urgent dental care Mapperley"
  ],
  openGraph: {
    title: "Emergency Dentist in Mapperley - Fast Relief for Working Families | Pear Tree Dental",
    description: "Emergency dentist for Mapperley working families. Fast pain relief and convenient emergency care.",
    url: "https://peartree.dental/mapperley/emergency-dentist"
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/emergency-dentist"
  }
};

export default function MapperleyEmergencyDentistPage() {
  const mapperleyEmergencyFAQs = [
    {
      question: "How quick is emergency dental care from Mapperley?",
      answer: "Pear Tree Dental is just a quick drive from Mapperley. We prioritize emergency appointments and offer same-day urgent care for working families dealing with dental pain or trauma. Our convenient location makes emergency visits manageable even during busy work schedules."
    },
    {
      question: "Do you treat children's dental emergencies from Mapperley families?",
      answer: "Absolutely! We specialize in family emergency care, treating both adults and children from Mapperley. Our gentle approach helps anxious children feel comfortable during emergency visits, and we understand the urgency when a child is in pain."
    },
    {
      question: "What emergency services do you offer to Mapperley patients?",
      answer: "We provide comprehensive emergency care including severe toothache relief, broken tooth repair, lost fillings, dental trauma, abscesses, and emergency extractions. We aim to see Mapperley emergency patients the same day with honest, upfront pricing."
    },
    {
      question: "How do costs work for emergency dental care from Mapperley?",
      answer: "We believe in transparent pricing for Mapperley working families. Emergency consultation fees are clearly explained upfront, and we offer flexible payment options. We'll always discuss costs before treatment and provide options that work for your family budget."
    },
    {
      question: "Can you fit emergency appointments around work schedules?",
      answer: "Yes! We understand working families in Mapperley have busy schedules. We offer emergency slots throughout the day and will do our best to accommodate urgent appointments around work commitments. Your dental emergency shouldn't wait for convenience."
    }
  ];

  const emergencyServices = [
    {
      emergency: "Severe Toothache Relief",
      description: "Fast pain relief for unbearable tooth pain",
      urgency: "Same day treatment",
      approach: "Gentle, effective pain management",
      cost: "From £85",
      icon: AlertTriangle
    },
    {
      emergency: "Broken Tooth Repair",
      description: "Quick repair for chipped, cracked, or broken teeth",
      urgency: "Same day consultation",
      approach: "Temporary and permanent solutions",
      cost: "From £120",
      icon: Shield
    },
    {
      emergency: "Child Dental Trauma",
      description: "Gentle emergency care for children's dental injuries",
      urgency: "Priority appointments",
      approach: "Child-friendly, anxiety-free treatment",
      cost: "From £65",
      icon: Baby
    },
    {
      emergency: "Lost Filling/Crown",
      description: "Urgent replacement of lost dental work",
      urgency: "Same day repair",
      approach: "Quick, reliable restoration",
      cost: "From £95",
      icon: Stethoscope
    }
  ];

  const familyBenefits = [
    {
      benefit: "Same Day Emergency Care",
      description: "Fast appointments for urgent dental problems",
      value: "Quick pain relief",
      icon: Timer
    },
    {
      benefit: "Family-Friendly Emergency Service",
      description: "Gentle care for all ages during dental emergencies",
      value: "Comfortable treatment",
      icon: Users
    },
    {
      benefit: "Transparent Emergency Pricing",
      description: "Clear, upfront costs with flexible payment options",
      value: "Budget-friendly care",
      icon: CreditCard
    },
    {
      benefit: "Convenient Mapperley Location",
      description: "Quick drive from Mapperley for urgent appointments",
      value: "Easy access",
      icon: Car
    }
  ];

  const emergencyScenarios = [
    {
      scenario: "Severe Weekend Toothache",
      immediateAction: "Contact our emergency line for urgent guidance",
      treatmentApproach: "Same-day pain relief and diagnosis",
      familyConsideration: "We understand weekend emergencies disrupt family time",
      outcomes: "Fast pain relief and treatment planning"
    },
    {
      scenario: "Child's Broken Tooth at School",
      immediateAction: "Priority appointment during school hours if needed",
      treatmentApproach: "Gentle, child-friendly emergency treatment",
      familyConsideration: "Minimal disruption to parent's work schedule",
      outcomes: "Quick repair and child comfort restored"
    },
    {
      scenario: "Lost Filling During Dinner",
      immediateAction: "Emergency consultation to assess and treat",
      treatmentApproach: "Same-day temporary or permanent restoration",
      familyConsideration: "Evening appointment options available",
      outcomes: "Function and comfort restored immediately"
    },
    {
      scenario: "Dental Abscess Pain",
      immediateAction: "Urgent antibiotic prescription and pain relief",
      treatmentApproach: "Immediate infection control and treatment",
      familyConsideration: "Quick relief to get back to normal routine",
      outcomes: "Infection resolved, health restored"
    }
  ];

  const workingFamilyFeatures = [
    {
      feature: "Flexible Emergency Scheduling",
      description: "We work around your work and family commitments",
      benefit: "Minimal disruption to your busy schedule"
    },
    {
      feature: "Child-Friendly Emergency Care",
      description: "Gentle treatment that reduces anxiety for young patients",
      benefit: "Comfortable experience for the whole family"
    },
    {
      feature: "Clear Emergency Pricing",
      description: "Transparent costs with payment plan options available",
      benefit: "Budget-friendly emergency dental care"
    },
    {
      feature: "Same-Day Treatment Options",
      description: "Most emergency problems resolved in single visit",
      benefit: "Quick resolution to get life back to normal"
    },
    {
      feature: "Family Emergency Coordination",
      description: "Can handle multiple family members' emergencies together",
      benefit: "Convenient care for entire family when needed"
    },
    {
      feature: "Follow-Up Care Included",
      description: "Comprehensive aftercare to ensure complete recovery",
      benefit: "Peace of mind with ongoing support"
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
            "@type": "MedicalBusiness",
            "name": "Pear Tree Dental - Emergency Dentist in Mapperley",
            "image": "https://peartree.dental/images/emergency-dentist-mapperley.jpg",
            "url": "https://peartree.dental/mapperley/emergency-dentist",
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
              "name": "Mapperley, NG3"
            },
            "medicalSpecialty": "Emergency Dentistry - Family Emergency Care",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£65-£120"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Mapperley Working Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Emergency Dentist in <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Fast Relief for Working Families - Quick Drive from Mapperley
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Quick drive from Mapperley — Same-day emergency appointments available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01159312935">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-red-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Line: 0115 931 2935
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="border-white text-red-600 hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Emergency Appointment
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🚨 Same-day emergency care for Mapperley working families!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Emergency Dental Care for Mapperley Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When dental emergencies strike, Mapperley working families need fast, reliable care that fits their
                busy schedules. Our emergency dental service provides quick relief with honest pricing and family-friendly care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {familyBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-red-200">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-red-600 mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.benefit}</h3>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-red-100 text-red-700">{benefit.value}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-red-50 rounded-lg p-8">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Emergency Care Built for Busy Families</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that Mapperley working families have packed schedules and budget considerations.
                Our emergency service is designed to provide fast, effective treatment that gets you back to your routine quickly.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">Same day care</div>
                  <p className="text-gray-600">Fast emergency appointments</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">Family friendly</div>
                  <p className="text-gray-600">Gentle care for all ages</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">Quick drive</div>
                  <p className="text-gray-600">Convenient from Mapperley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Emergency Dental Services for Mapperley Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive emergency dental care with transparent pricing and
                family-friendly treatment for all dental emergencies affecting Mapperley working families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {emergencyServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-red-400">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-red-600" />
                      </div>
                      <CardTitle className="text-lg text-pear-primary">{service.emergency}</CardTitle>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-pear-primary mb-1">{service.cost}</p>
                        <Badge variant="outline" className="mb-2">{service.urgency}</Badge>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-sm text-red-700 font-medium">{service.approach}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Scenarios */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Common Emergency Scenarios for Mapperley Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real emergency situations that Mapperley families face and how we provide
                fast, effective treatment that works around your busy schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {emergencyScenarios.map((scenario, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pear-primary mb-3 text-lg">{scenario.scenario}</h3>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-red-600 text-sm mb-1">Immediate Action:</h4>
                        <p className="text-sm text-gray-700">{scenario.immediateAction}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-red-600 text-sm mb-1">Treatment Approach:</h4>
                        <p className="text-sm text-gray-700">{scenario.treatmentApproach}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-red-600 text-sm mb-1">Family Consideration:</h4>
                        <p className="text-sm text-gray-700">{scenario.familyConsideration}</p>
                      </div>

                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-sm text-red-700 font-medium">{scenario.outcomes}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Family Features */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Emergency Care Designed for Mapperley Working Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our emergency dental service understands the unique needs of working families,
                providing convenient, affordable, and family-friendly emergency care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workingFamilyFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-100 rounded-full">
                        <ThumbsUp className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-pear-primary mb-2">{feature.feature}</h3>
                        <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                        <div className="bg-red-50 rounded-lg p-3">
                          <p className="text-sm text-red-700 font-medium">{feature.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                What Mapperley Families Say About Our Emergency Care
              </h2>
            </div>

            <TestimonialBanner
              text="When my daughter broke her front tooth at school, I was panicking about fitting an emergency appointment around work. Being just a quick drive from Mapperley made all the difference. They saw us the same hour I called, were incredibly gentle with my anxious daughter, and had her tooth fixed beautifully within the hour. The pricing was transparent and fair, and they even gave me flexible payment options. Couldn't have asked for better emergency care!"
              author="Sarah M. from Mapperley, NG3"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">Same hour care</div>
                <p className="text-gray-600">Emergency seen immediately</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">Child-friendly</div>
                <p className="text-gray-600">Gentle, anxiety-free treatment</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">Fair pricing</div>
                <p className="text-gray-600">Transparent, budget-friendly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Emergency Dental Results for Mapperley Families
            </h2>
            <p className="text-lg text-gray-600">
              See how our emergency care quickly resolves dental problems for working families
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/emergency-dental-before-case-1.webp"
              afterImage="/images/emergency-dental-after-case-1.webp"
              beforeAlt="Before emergency treatment - broken front tooth causing pain and embarrassment"
              afterAlt="After emergency treatment - perfectly repaired tooth, natural appearance restored"
              title="Same-Day Emergency Tooth Repair"
              description="Mapperley working parent's broken tooth repaired same day"
              treatmentType="Emergency Composite Bonding"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Emergency Dental Questions from Mapperley Families
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Mapperley working families about emergency dental care
              </p>
            </div>

            <FAQSection faqs={mapperleyEmergencyFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Emergency Dental Care - Quick Drive from Mapperley
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    From Mapperley
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Head south on Arnold Lane towards the A612</p>
                    <p>2. Continue on the A612 towards Lowdham</p>
                    <p>3. Follow signs to Burton Joyce (8 miles)</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey: Quick 15-minute drive</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-red-50 rounded-lg p-6">
                    <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h4 className="font-bold text-red-700 mb-2">Emergency Dental Care</h4>
                    <p className="text-gray-600">Fast relief for working families</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/Mapperley,+Nottingham/22+Nottingham+Rd,+Burton+Joyce,+Nottingham+NG14+5AE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Mapperley
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Get Fast Emergency Dental Care from Mapperley Today
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't let dental emergencies disrupt your family's routine. Call now for same-day emergency
              care that's convenient, affordable, and designed for busy Mapperley working families.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Emergency Dental Specialists
              </p>
              <p className="text-sm opacity-90">
                Same day care • Family friendly • Transparent pricing • Quick drive from Mapperley
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01159312935">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-red-800 px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Line: 0115 931 2935
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="border-white text-red-600 hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Emergency Appointment
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Same-day emergency appointments</span>
              <span>✓ Family-friendly emergency care</span>
              <span>✓ Transparent, fair pricing</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
