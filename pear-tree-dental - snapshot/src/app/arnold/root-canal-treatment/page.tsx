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
  Crown,
  Sparkles,
  Award,
  Navigation,
  Zap,
  Target,
  Activity,
  AlertTriangle,
  Stethoscope
} from "lucide-react";

export const metadata: Metadata = {
  title: "Root Canal Treatment in Arnold - Pain Relief & Tooth Preservation | Pear Tree Dental",
  description: "Expert root canal treatment for Arnold residents. Gentle pain relief and tooth preservation with modern techniques just 15 minutes away. Save your natural teeth.",
  keywords: [
    "root canal Arnold",
    "endodontic treatment Arnold",
    "root canal therapy Arnold NG5",
    "tooth pain relief Arnold",
    "infected tooth Arnold",
    "toothache treatment Arnold",
    "save tooth Arnold"
  ],
  openGraph: {
    title: "Root Canal Treatment in Arnold - Pain Relief & Tooth Preservation | Pear Tree Dental",
    description: "Expert root canal treatment for Arnold residents. Gentle pain relief and tooth preservation just 15 minutes away.",
    url: "https://peartree.dental/arnold/root-canal-treatment"
  },
  alternates: {
    canonical: "https://peartree.dental/arnold/root-canal-treatment"
  }
};

export default function ArnoldRootCanalPage() {
  const arnoldRootCanalFAQs = [
    {
      question: "How far is root canal treatment from Arnold?",
      answer: "Pear Tree Dental is just 15 minutes from Arnold via the A6097. We're experienced endodontic specialists offering gentle root canal therapy with modern pain-free techniques."
    },
    {
      question: "How painful is root canal treatment for Arnold patients?",
      answer: "Modern root canal treatment is virtually painless. We use advanced local anesthesia and gentle techniques. Most patients experience immediate pain relief after treatment."
    },
    {
      question: "Can I get same-day root canal treatment near Arnold?",
      answer: "Yes, we often provide same-day root canal treatment for Arnold patients in pain. We prioritize emergency cases and can usually see you within 24 hours."
    },
    {
      question: "How long does root canal treatment take?",
      answer: "Most root canal treatments are completed in 1-2 appointments. Simple cases can be finished in 60-90 minutes, while complex cases may require a second visit."
    },
    {
      question: "What's the success rate of root canal treatment?",
      answer: "Modern root canal treatment has a 90-95% success rate. With proper aftercare, treated teeth can last a lifetime and function just like natural teeth."
    }
  ];

  const treatmentStages = [
    {
      stage: "1",
      title: "Pain Assessment",
      description: "Thorough examination and X-rays to diagnose the issue",
      duration: "15-20 minutes",
      icon: Stethoscope
    },
    {
      stage: "2",
      title: "Anesthesia",
      description: "Complete numbness with gentle local anesthetic",
      duration: "10 minutes",
      icon: Shield
    },
    {
      stage: "3",
      title: "Root Canal Therapy",
      description: "Gentle removal of infected tissue and cleaning",
      duration: "45-60 minutes",
      icon: Target
    },
    {
      stage: "4",
      title: "Sealing & Crown",
      description: "Seal the tooth and place protective crown",
      duration: "30 minutes",
      icon: Crown
    }
  ];

  const symptoms = [
    {
      symptom: "Severe Toothache",
      description: "Intense pain when biting or applying pressure",
      urgency: "Immediate",
      icon: AlertTriangle
    },
    {
      symptom: "Temperature Sensitivity",
      description: "Prolonged pain from hot or cold foods/drinks",
      urgency: "Within 48 hours",
      icon: Activity
    },
    {
      symptom: "Swelling & Tenderness",
      description: "Facial swelling or tender, swollen gums",
      urgency: "Same day",
      icon: Heart
    },
    {
      symptom: "Tooth Discoloration",
      description: "Darkening or discoloration of the tooth",
      urgency: "Within week",
      icon: Target
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Save Natural Tooth",
      description: "Preserve your original tooth instead of extraction"
    },
    {
      icon: Shield,
      title: "Pain Relief",
      description: "Immediate relief from severe toothache and infection"
    },
    {
      icon: Award,
      title: "High Success Rate",
      description: "90-95% success rate with modern techniques"
    },
    {
      icon: Sparkles,
      title: "Natural Function",
      description: "Treated teeth function just like healthy natural teeth"
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
            "name": "Pear Tree Dental - Root Canal Treatment in Arnold",
            "image": "https://peartree.dental/images/root-canal-arnold.jpg",
            "url": "https://peartree.dental/arnold/root-canal-treatment",
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
            "medicalSpecialty": "Endodontics - Root Canal Treatment",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.97335,
              "longitude": -1.04211
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£400-£800"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-pear-gold text-white px-4 py-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Arnold & NG5
              </Badge>
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Root Canal Treatment in <span className="text-pear-gold">Arnold</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
              Gentle Pain Relief & Tooth Preservation Just 15 Minutes Away
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-medium">
                <Car className="inline w-5 h-5 mr-2" />
                Only 15 mins from Arnold — Emergency appointments available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  <Shield className="w-5 h-5 mr-2" />
                  Book Root Canal Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 text-yellow-200">
              <p className="text-lg font-semibold">🚨 Severe tooth pain? Same-day appointments available</p>
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
                Why Arnold Residents Choose Expert Root Canal Treatment
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                When Arnold residents experience severe tooth pain, expert endodontic care makes all the difference.
                Our gentle root canal specialists in Burton Joyce use modern pain-free techniques to save natural teeth
                and provide immediate relief, just 15 minutes from Arnold with emergency appointments available.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                      <h3 className="font-bold text-pear-primary mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Signs You May Need Root Canal Treatment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't ignore these warning signs. Early treatment can save your natural tooth
                and prevent more serious complications requiring extraction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {symptoms.map((symptom, index) => {
                const IconComponent = symptom.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-red-100 rounded-full">
                          <IconComponent className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-pear-primary">{symptom.symptom}</h3>
                            <Badge
                              variant="outline"
                              className={symptom.urgency === "Immediate" || symptom.urgency === "Same day" ? "border-red-500 text-red-600" : "border-yellow-500 text-yellow-600"}
                            >
                              {symptom.urgency}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm">{symptom.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-red-50 rounded-lg p-8">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pear-primary mb-4">Don't Delay Treatment</h3>
              <p className="text-lg text-gray-600 mb-6">
                Root canal infections can worsen rapidly and may lead to serious complications.
                Early treatment greatly improves success rates and reduces discomfort.
              </p>
              <a href="tel:01159312935">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call For Emergency Appointment: 0115 931 2935
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Gentle Root Canal Process for Arnold Patients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our modern root canal treatment is gentle, efficient, and virtually painless.
                Most patients experience immediate relief from their symptoms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {treatmentStages.map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <Card key={stage.stage} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-pear-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {stage.stage}
                      </div>
                      <IconComponent className="w-8 h-8 text-pear-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-pear-primary mb-2">{stage.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{stage.description}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-4 h-4 text-pear-primary" />
                        <span className="text-xs text-pear-primary font-medium">{stage.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
                What Arnold Patients Say About Their Root Canal Experience
              </h2>
            </div>

            <TestimonialBanner
              text="I was terrified about needing root canal treatment, but the team at Pear Tree made it completely painless. I had severe toothache on Friday evening, called Saturday morning, and was seen that afternoon. The 15-minute drive from Arnold was nothing compared to the immediate relief I felt. The tooth that was going to be extracted is now completely fine!"
              author="Mark T. from Arnold, NG5"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">90-95%</div>
                <p className="text-gray-600">Success rate</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">1-2 visits</div>
                <p className="text-gray-600">Treatment completion</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-pear-primary mb-2">Lifetime</div>
                <p className="text-gray-600">Tooth preservation potential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Module */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Successful Root Canal Treatments from Local Patients
            </h2>
            <p className="text-lg text-gray-600">
              See how root canal treatment saves natural teeth and restores function
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/root-canal-before-case-1.webp"
              afterImage="/images/root-canal-after-case-1.webp"
              beforeAlt="Before root canal treatment - infected tooth with abscess"
              afterAlt="After root canal treatment - healthy restored tooth with crown"
              title="Root Canal Treatment Success"
              description="Infected tooth saved with root canal therapy and crown restoration"
              treatmentType="Root Canal Treatment & Crown"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* FAQs Specific to Arnold */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
                Root Canal Questions from Arnold Patients
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from our Arnold patients about root canal treatment
              </p>
            </div>

            <FAQSection faqs={arnoldRootCanalFAQs} />
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-6">
              Quick Access from Arnold for Emergency Root Canal Care
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-pear-primary mb-4">
                    <Navigation className="inline w-5 h-5 mr-2" />
                    Directions from Arnold
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>1. Take A6097 towards Lowdham</p>
                    <p>2. Continue for 8 miles through Gedling</p>
                    <p>3. Turn right into Burton Joyce</p>
                    <p>4. We're at 22 Nottingham Road (NG14 5AE)</p>
                    <p className="text-pear-primary font-semibold">Journey time: 15 minutes</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-pear-primary/10 rounded-lg p-6">
                    <Car className="w-12 h-12 text-pear-primary mx-auto mb-4" />
                    <h4 className="font-bold text-pear-primary mb-2">Emergency Priority</h4>
                    <p className="text-gray-600">Same-day appointments for tooth pain relief</p>
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
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary/90 text-white px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions from Arnold
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Save Your Natural Tooth with Expert Root Canal Treatment from Arnold
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Don't lose your natural tooth to infection. Book your root canal consultation from Arnold —
              gentle treatment, immediate pain relief, and tooth preservation just 15 minutes away.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg font-medium mb-2">
                <Star className="inline w-5 h-5 mr-2 text-pear-gold" />
                Emergency Care for Arnold Patients
              </p>
              <p className="text-sm opacity-90">
                Same-day appointments for tooth pain • 90-95% success rate • Modern pain-free techniques
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  <Shield className="w-5 h-5 mr-2" />
                  Book Emergency Consultation
                </Button>
              </Link>
              <a href="tel:01159312935">
                <Button size="lg" variant="outline" className="border-white text-pear-primary hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0115 931 2935
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
              <span>✓ Same-day emergency appointments</span>
              <span>✓ Modern pain-free techniques</span>
              <span>✓ 90-95% success rate</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
