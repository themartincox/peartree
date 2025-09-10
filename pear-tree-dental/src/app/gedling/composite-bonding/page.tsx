import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import practiceInfo from "@/data/practiceInfo";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BeforeAfterSliderPair from "@/components/BeforeAfterSliderPair";
import {
  CheckCircle,
  Heart,
  Smile,
  Star,
  ThumbsUp,
  Zap,
  Phone,
  Calendar,
  Shield,
  Award,
  Gem,
  Palette,
  Clock,
  Wallet,
  Users,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Composite Bonding in Gedling | Pear Tree Dental",
  description:
    "Affordable composite bonding near Gedling. Transform your smile in one visit with prices from £120. Repair chips, close gaps, and whiten your teeth instantly. Book your free consultation.",
  keywords: [
    "composite bonding Gedling",
    "teeth bonding Gedling",
    "affordable composite bonding Nottingham",
    "cosmetic dentist Gedling",
    "fix chipped tooth Gedling",
    "smile makeover Gedling",
  ],
  openGraph: {
    title: "Composite Bonding in Gedling | Pear Tree Dental",
    description:
      "Affordable composite bonding near Gedling. Transform your smile in one visit with prices from £120.",
    url: "https://peartree.dental/gedling/composite-bonding",
  },
  alternates: {
    canonical: "https://peartree.dental/gedling/composite-bonding",
  },
};

const gedlingBondingFAQs = [
  {
    question: "How much does composite bonding cost near Gedling?",
    answer:
      "Our composite bonding prices are highly competitive for the Gedling area, starting from just £120 per tooth. We offer flexible payment plans to make your dream smile affordable.",
  },
  {
    question: "How long does composite bonding take?",
    answer:
      "Composite bonding is a quick treatment, often completed in a single visit. A full smile makeover can be achieved in just a few hours, making it a convenient option for Gedling residents.",
  },
  {
    question: "Is composite bonding painful?",
    answer:
      "No, composite bonding is a painless and minimally invasive procedure. There are no needles or drills involved, ensuring a comfortable experience.",
  },
  {
    question: "How long does composite bonding last?",
    answer:
      "With proper care, composite bonding can last for 5-7 years. We provide all our Gedling patients with comprehensive aftercare advice to maximize the longevity of their new smile.",
  },
];

const bondingOptions = [
  {
    title: "Edge Bonding",
    price: "From £120 per tooth",
    description: "Perfect for repairing minor chips and imperfections on the edges of your teeth.",
    icon: Gem,
    features: [
      "Repairs minor chips & cracks",
      "Corrects uneven edges",
      "Quick and affordable",
    ],
  },
  {
    title: "Composite Veneers",
    price: "From £250 per tooth",
    description: "A complete smile transformation, covering the entire front surface of the tooth.",
    icon: Palette,
    features: [
      "Complete smile makeover",
      "Closes gaps between teeth",
      "Covers severe discoloration",
    ],
  },
  {
    title: "Full Smile Makeover",
    price: "From £1500",
    description: "A comprehensive package combining bonding with other treatments for a total transformation.",
    icon: Award,
    features: [
      "Multiple teeth treated",
      "Often includes whitening",
      "Personalized treatment plan",
    ],
  },
];

export default function CompositeBondingGedlingPage() {
  const testimonials = [
    {
      text: "I live in Gedling and couldn't be happier with my composite bonding from Pear Tree. The results are amazing and it was so affordable. The team made me feel so comfortable.",
      author: "Sarah L, Gedling",
    },
    {
      text: "The best decision I made for my smile. The journey from Gedling was quick and easy, and the results are life-changing. Highly recommend!",
      author: "Mark R, Gedling",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
      {/* 
        Structured Data Schema.
        CRITICAL: Ensure Name, Address, Phone (NAP) data is consistent across the entire website.
        This data should be centralized in a config file.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            // This schema is specific to the composite bonding service for Gedling
            "name": "Pear Tree Dental - Composite Bonding in Gedling",
            "image": "https://peartree.dental/images/composite-bonding-gedling.jpg",
            "url": "https://peartree.dental/gedling/composite-bonding",
            "telephone": practiceInfo.contact.phoneInternational,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": practiceInfo.address.street,
              "addressLocality": practiceInfo.address.city,
              "addressRegion": practiceInfo.address.county,
              "postalCode": practiceInfo.address.postcode,
              "addressCountry": "GB"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Gedling, NG4"
            },
            "medicalSpecialty": "Cosmetic Dentistry - Affordable Composite Bonding",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": practiceInfo.geo.latitude,
              "longitude": practiceInfo.geo.longitude
            },
            "openingHours": [
              "Mo-Th 08:45-17:00",
              "Fr 08:00-15:30"
            ],
            "priceRange": "£120-£600"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-pink-600">
            Composite Bonding near Gedling
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Dream Smile in One Visit
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Affordable, painless composite bonding for Gedling residents. Repair
            chips, close gaps, and whiten your teeth instantly from just £120.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100"
            >
              <Link href="#consultation">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-pink-600">
              <a href={`tel:${practiceInfo.contact.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call: {practiceInfo.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Gedling Residents Choose Us for Composite Bonding
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              We combine artistry with advanced materials to create stunning,
              natural-looking smiles that last.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Wallet className="h-12 w-12 mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-gray-600">
                From just £120 per tooth with flexible payment plans available.
              </p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">One-Visit Transformation</h3>
              <p className="text-gray-600">
                Achieve your new smile in a single, comfortable appointment.
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 mx-auto text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Painless Procedure</h3>
              <p className="text-gray-600">
                No needles, no drills. A minimally invasive and comfortable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <BeforeAfterSliderPair
            sectionTitle="See the Transformation"
            sectionDescription="Real results for patients from the Gedling area. Swipe to see the amazing difference composite bonding can make."
            primarySlider={{
              beforeImage: "/images/before-after/composite-bonding-before-1.jpg",
              afterImage: "/images/before-after/composite-bonding-after-1.jpg",
              beforeAlt: "Before composite bonding treatment",
              afterAlt: "After composite bonding treatment",
              title: "Closing Gaps & Whitening",
              treatmentType: "Composite Veneers"
            }}
            secondarySlider={{
              beforeImage: "/images/before-after/composite-bonding-before-2.jpg",
              afterImage: "/images/before-after/composite-bonding-after-2.jpg",
              beforeAlt: "Chipped tooth before bonding",
              afterAlt: "Chipped tooth repaired with bonding",
              title: "Repairing Chipped Teeth",
              treatmentType: "Edge Bonding"
            }}
          />
        </div>
      </section>

      {/* Pricing Options Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Transparent Pricing for Gedling Patients
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Clear, honest pricing with no hidden fees. Choose the option that's right for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {bondingOptions.map((option) => (
              <Card key={option.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <option.icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle>{option.title}</CardTitle>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{option.price}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                    <Link href="#consultation">Get Started</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <TestimonialBanner
        text={testimonials[0].text}
        author={testimonials[0].author}
        className="my-16"
      />

      {/* Consultation Form Section */}
      <section id="consultation" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready for Your New Smile?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book your FREE, no-obligation consultation today. We're a short,
              easy drive from Gedling with free on-site parking.
            </p>
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Book Your Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Placeholder for a form component */}
                <div className="space-y-4">
                  <p className="text-center text-gray-700">
                    Our online booking form is coming soon! For now, please
                    call us to book your free consultation.
                  </p>
                  <Button asChild size="lg" className="w-full bg-pink-600 hover:bg-pink-700">
                    <a href={`tel:${practiceInfo.contact.phone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call to Book: {practiceInfo.contact.phone}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}