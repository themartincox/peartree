import React from "react";
import {
  AlertTriangle,
  Baby,
  Car,
  Clock,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Navigation,
  PhoneCall,
  Star,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Emergency Dentist in Mapperley - Family Dental Emergency Care | Pear Tree Dental",
  description:
    "Emergency dentist for Mapperley families. Child dental trauma, family dental emergencies, and urgent care for all ages just 15 minutes away. Same-day appointments available.",
  keywords: [
    "emergency dentist Mapperley",
    "family dental emergency Mapperley",
    "child dental trauma Mapperley NG5",
    "dental emergency Sherwood",
    "toothache relief Mapperley",
    "family dentist emergency Mapperley",
    "urgent dental care Mapperley",
  ],
  openGraph: {
    title:
      "Emergency Dentist in Mapperley - Family Dental Emergency Care | Pear Tree Dental",
    description:
      "Emergency dentist for Mapperley families. Child dental trauma and urgent care for all ages just 15 minutes away.",
    url: "https://peartree.dental/mapperley/emergency-dentist",
  },
  alternates: {
    canonical: "https://peartree.dental/mapperley/emergency-dentist",
  },
};

export default function MapperleyEmergencyDentistPage() {
  const mapperleyEmergencyFAQs = [
    {
      question: "How far is emergency dental care from Mapperley families?",
      answer:
        "Pear Tree Dental is just 15 minutes from Mapperley via the A6097. We're experienced family emergency dentists providing urgent care for children, parents, and grandparents.",
    },
    {
      question: "Do you handle child dental emergencies from Mapperley?",
      answer:
        "Yes! We specialize in child dental trauma including knocked-out teeth, chipped teeth from sports, and severe toothache. We're gentle, reassuring, and experienced with anxious children.",
    },
    {
      question: "Can you see my whole family for dental emergencies?",
      answer:
        "Absolutely! We provide emergency care for all ages - from toddlers to grandparents. Same-day appointments available for the whole family when needed.",
    },
    {
      question: "What should I do if my child knocks out a tooth in Mapperley?",
      answer:
        "Call us immediately! Keep the tooth moist (in milk or saliva), don't scrub it, and get to us within 30-60 minutes. We can often save knocked-out teeth with quick action.",
    },
    {
      question:
        "What makes your emergency service special for Mapperley families?",
      answer:
        "We combine child-friendly emergency care, multi-generational experience, same-day family appointments, and convenient Mapperley access. We understand family dental emergencies.",
    },
  ];

  const familyEmergencies = [
    {
      emergency: "Child Dental Trauma",
      description: "Sports injuries, playground accidents, knocked-out teeth",
      urgency: "Immediate",
      ageGroup: "Children & Teens",
      action: "Call within 30 minutes for best outcomes",
      icon: Baby,
    },
    {
      emergency: "Family Toothache",
      description: "Severe pain affecting eating, sleeping, or school/work",
      urgency: "Same Day",
      ageGroup: "All Ages",
      action: "Same-day appointments for pain relief",
      icon: AlertTriangle,
    },
    {
      emergency: "Broken Family Dentures",
      description: "Grandparents unable to eat or speak properly",
      urgency: "Within 24 hours",
      ageGroup: "Adults & Seniors",
      action: "Repair or temporary replacement options",
      icon: Users,
    },
    {
      emergency: "Teen Orthodontic Emergency",
      description: "Broken braces, loose wires, or bracket problems",
      urgency: "Within 48 hours",
      ageGroup: "Teenagers",
      action: "Prevent damage and discomfort to treatment",
      icon: GraduationCap,
    },
  ];

  const familyBenefits = [
    {
      icon: Users,
      title: "Whole Family Care",
      description:
        "Emergency appointments for all family members from toddlers to grandparents",
    },
    {
      icon: Heart,
      title: "Child-Friendly Approach",
      description:
        "Gentle, reassuring care specifically designed for anxious children",
    },
    {
      icon: Zap,
      title: "Same-Day Family Slots",
      description:
        "Multiple family appointments available on the same day when needed",
    },
    {
      icon: Home,
      title: "Family Peace of Mind",
      description:
        "Experienced with children's fears and parental concerns during emergencies",
    },
  ];

  const emergencyProtocol = [
    {
      step: "1",
      title: "Emergency Call",
      description: "Call our family emergency line and describe the situation",
      familyFocus: "Stay calm - we'll guide you through immediate care",
    },
    {
      step: "2",
      title: "Immediate Advice",
      description: "Get instant guidance for home care while traveling to us",
      familyFocus: "Child-friendly instructions for parents",
    },
    {
      step: "3",
      title: "Priority Treatment",
      description: "Fast-track family emergency appointments",
      familyFocus: "Minimize waiting time for distressed children",
    },
    {
      step: "4",
      title: "Family Follow-Up",
      description: "Ensure recovery and prevent future family emergencies",
      familyFocus: "Prevention advice for the whole family",
    },
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
            name: "Pear Tree Dental - Emergency Dentist in Mapperley",
            image:
              "https://peartree.dental/images/emergency-dentist-mapperley.jpg",
            url: "https://peartree.dental/mapperley/emergency-dentist",
            telephone: "+44-115-931-2935",
            address: {
              "@type": "PostalAddress",
              streetAddress: "22 Nottingham Road",
              addressLocality: "Burton Joyce",
              addressRegion: "Nottinghamshire",
              postalCode: "NG14 5AE",
              addressCountry: "UK",
            },
            areaServed: {
              "@type": "Place",
              name: "Mapperley, NG5",
            },
            medicalSpecialty: "Emergency Dentistry - Family Emergency Care",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.97335,
              longitude: -1.04211,
            },
            openingHours: ["Mo-Th 08:45-17:00", "Fr 08:00-15:30"],
            priceRange: "£80-£300",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Mapperley & NG5 Families
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Emergency Dentist in{" "}
              <span className="text-yellow-300">Mapperley</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Family Dental Emergency Care Just 15 Minutes Away
            </p>

            <div className="bg-white rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Mapperley — Child-friendly emergency care
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-red-800 px-8 py-4 text-lg font-bold rounded-full"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  EMERGENCY: 0115 931 2935
                </Button>
              </a>
              <Link href="/book">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Book Family Emergency
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">
                🚨 Child dental trauma? Call immediately - we'll see your family
                today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Emergency Types */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-red-700 mb-6">
                Common Family Dental Emergencies from Mapperley
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From playground accidents to midnight toothaches, we understand
                family dental emergencies. Our experienced team provides gentle,
                effective care for every family member.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(familyEmergencies || []).map((emergency, index) => {
                const IconComponent = emergency.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow border-l-4 border-red-500"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-red-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-red-700">
                              {emergency.emergency}
                            </h3>
                            <Badge className="bg-red-100 text-red-700 text-xs">
                              {emergency.ageGroup}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">
                            {emergency.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-red-500" />
                              <span className="text-sm font-medium text-red-600">
                                {emergency.urgency}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 font-medium">
                              {emergency.action}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-red-100 rounded-lg p-8">
              <PhoneCall className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">
                Family Emergency? Don't Wait!
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Child dental trauma needs immediate attention. The sooner we see
                your family, the better the outcome. We're experienced with
                children's dental emergencies.
              </p>
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl font-bold"
                >
                  <PhoneCall className="w-6 h-6 mr-2" />
                  CALL NOW: 0115 931 2935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Family Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Why Mapperley Families Choose Our Emergency Care
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that family dental emergencies are stressful,
                especially with children involved. Our gentle, experienced
                approach puts families at ease while providing effective
                emergency treatment.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {(familyBenefits || []).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Protocol */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Our Family Emergency Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When your family faces a dental emergency, we spring into action
                with a proven process designed to minimize stress and maximize
                care for all ages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(emergencyProtocol || []).map((step, _index) => (
                <Card
                  key={step.step}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-blue-700 font-medium">
                        {step.familyFocus}
                      </p>
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
              text="My 8-year-old daughter knocked out her front tooth at school on Friday afternoon. I was panicking! The team at Pear Tree saw us immediately and saved her tooth. They were so gentle and reassuring with both of us. The 15-minute drive from Mapperley felt like nothing when we knew expert help was waiting. My daughter was back to her normal smile by Monday!"
              author="Sarah J. from Mapperley, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  Same day
                </div>
                <p className="text-gray-600">Family emergency appointments</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  All ages
                </div>
                <p className="text-gray-600">Toddlers to grandparents</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  Child-friendly
                </div>
                <p className="text-gray-600">Gentle, reassuring care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Specific to Mapperley */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Family Emergency Questions from Mapperley Parents
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Mapperley families about emergency dental
                care for children and adults
              </p>
            </div>

            <FAQSection faqs={mapperleyEmergencyFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Quick Access from Mapperley for Family Dental Emergencies
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Directions from Mapperley
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Take A6097 towards Lowdham</p>
                    <p>2. Continue for 6 miles through Gedling</p>
                    <p>3. Turn right into Burton Joyce</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">
                      Journey time: 15 minutes
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-red-50 rounded-lg p-6">
                    <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h4 className="font-bold text-red-700 mb-2">
                      Family Emergency Priority
                    </h4>
                    <p className="text-gray-600">
                      Fast-track appointments for families with children in
                      distress
                    </p>
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
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Mapperley
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
              Family Dental Emergency? We're Here to Help Mapperley Families
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't let dental emergencies disrupt your family. From child
              dental trauma to family toothaches, we provide gentle, expert
              emergency care just 15 minutes from Mapperley.
            </p>

            <div className="bg-white rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-yellow-300" />
                Family Emergency Services
              </p>
              <p className="text-sm opacity-90">
                Child dental trauma specialists • Same-day family appointments •
                Gentle care for all ages
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01159312935">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-red-800 px-8 py-4 text-lg font-bold rounded-full"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  EMERGENCY: 0115 931 2935
                </Button>
              </a>
              <Link href="/book">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Book Family Emergency
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Child dental trauma specialists</span>
              <span>✓ Same-day family appointments</span>
              <span>✓ Gentle care for all ages</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
