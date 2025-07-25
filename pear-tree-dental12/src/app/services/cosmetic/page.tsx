import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceNavigation from "@/components/ServiceNavigation";
import ServiceHero from "@/components/ServiceHero";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import {
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Zap,
  Award,
  Heart,
  Smile,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Services Burton Joyce | Pear Tree Dental",
  description: "Transform your smile with our comprehensive cosmetic dentistry services in Burton Joyce. Teeth whitening, veneers, smile makeovers and more. Book consultation today.",
  keywords: [
    "cosmetic dentistry Burton Joyce",
    "teeth whitening Nottingham",
    "dental veneers Burton Joyce",
    "smile makeover Nottingham",
    "cosmetic dental treatments",
    "aesthetic dentistry Nottinghamshire"
  ],
  openGraph: {
    title: "Cosmetic Dentistry Services | Pear Tree Dental Burton Joyce",
    description: "Expert cosmetic dental treatments to transform your smile. Professional teeth whitening, veneers, and aesthetic dentistry in Burton Joyce.",
    type: "website",
    url: "https://peartree.dental/services/cosmetic"
  },
  alternates: {
    canonical: "https://peartree.dental/services/cosmetic"
  }
};

export default function CosmeticDentistryPage() {
  const cosmeticServices = [
    {
      name: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile",
      price: "From £400",
      duration: "1-2 hours",
      results: "Up to 8 shades whiter",
      popular: true,
      link: "/services/cosmetic/teeth-whitening",
      socialProof: "4.9/5 patient rating"
    },
    {
      name: "Teeth Straightening",
      description: "Modern clear aligners and braces for perfectly aligned teeth",
      price: "From £2,500",
      duration: "12-24 months",
      results: "Straight, aligned smile",
      popular: true,
      link: "/services/orthodontics",
      socialProof: "Discreet treatment"
    },
    {
      name: "Veneers",
      description: "Transform your smile with custom-made porcelain or composite veneers",
      price: "From £200",
      duration: "2-3 appointments",
      results: "Perfect smile shape",
      popular: true,
      link: "/services/cosmetic/veneers",
      socialProof: "98% satisfaction rate"
    },
    {
      name: "Bonding",
      description: "Repair chips and improve tooth shape with natural-looking composite bonding",
      price: "From £150",
      duration: "1-2 hours",
      results: "Seamless repairs",
      popular: false,
      link: "/services/cosmetic/edge-bonding",
      socialProof: "Same-day treatment"
    },
    {
      name: "Wedding Day Smile",
      description: "Complete smile transformation timed perfectly for your special day",
      price: "From £995",
      duration: "4-8 weeks",
      results: "Picture-perfect smile",
      popular: true,
      link: "/services/cosmetic/wedding-day-smile",
      socialProof: "Perfect timing guarantee"
    },
    {
      name: "Smile Makeover",
      description: "Comprehensive smile transformation combining multiple treatments",
      price: "From £2,500",
      duration: "6-12 weeks",
      results: "Complete transformation",
      popular: true,
      link: "/services/complete-smile-makeover",
      socialProof: "Life-changing results"
    },
    {
      name: "Buccal Corridor Correction",
      description: "Eliminate dark spaces at the corners of your smile for a fuller appearance",
      price: "From £2,500",
      duration: "3-18 months",
      results: "Fuller, balanced smile",
      popular: false,
      link: "/services/cosmetic/buccal-corridor-correction",
      socialProof: "95% patient satisfaction"
    }
  ];

  const beforeAfterCases = [
    {
      title: "Teeth Whitening Transformation",
      description: "Professional whitening achieved 6 shades improvement",
      timeframe: "Single appointment"
    },
    {
      title: "Complete Veneer Makeover",
      description: "8 porcelain veneers creating perfect symmetry",
      timeframe: "3 weeks"
    },
    {
      title: "Wedding Smile Enhancement",
      description: "Combination treatment completed before special day",
      timeframe: "6 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-pink/10 via-white to-soft-lavender/10">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Cosmetic Dentistry Services"
        description="Comprehensive cosmetic dental treatments including teeth whitening, veneers, smile makeovers and aesthetic dental procedures"
        price="From £150"
        category="Cosmetic Dentistry"
        duration="1 hour to 8 weeks depending on treatment"
        preparation="Consultation and treatment planning"
        recovery="Minimal downtime for most procedures"
        benefits={[
          "Enhanced smile appearance",
          "Increased confidence",
          "Professional results",
          "Long-lasting outcomes",
          "Customised treatment plans"
        ]}
        risks={[
          "Temporary sensitivity possible",
          "Individual results may vary",
          "Maintenance required",
          "Investment in appearance"
        ]}
        rating={4.9}
        reviewCount={289}
        url="https://peartree.dental/services/cosmetic"
        procedureType="Service"
      />

      {/* Hero Section */}
      <ServiceHero
        title="Transform Your"
        subtitle="Smile"
        description="Discover the confidence that comes with a beautiful smile. Our expert cosmetic dentistry treatments combine artistry with advanced techniques to create naturally stunning results."
        heroVideo="/videos/heroes/cosmetic-dentistry-hero.mp4"
        heroVideoType="mp4"
        heroImageAlt="Cosmetic dentistry transformation results"
        badgeText="Cosmetic Dentistry"
        badgeIcon="Sparkles"
        keyBenefits={[
          { text: "Beautiful results", icon: "Star" },
          { text: "Boost confidence", icon: "Heart" },
          { text: "Expert care", icon: "Award" },
          { text: "Natural looking", icon: "Eye" }
        ]}
        primaryCTA={{
          text: "Book Smile Consultation",
          href: "/book"
        }}
        secondaryCTA={{
          text: "View Treatments",
          href: "#services",
          icon: "ArrowRight"
        }}
        gradientFrom="soft-pink/10"
        gradientTo="soft-lavender/10"
        textColor="pear-primary"
      />

      {/* Services Grid */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Cosmetic Dentistry Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional aesthetic treatments designed to enhance your natural beauty and boost your confidence
            </p>
          </div>

          {/* Custom Layout Grid */}
          <div className="space-y-8">
            {/* Top Row: Teeth Whitening & Teeth Straightening */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cosmeticServices.slice(0, 2).map((service) => (
                <Card key={service.name} className="hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-semibold text-pear-primary group-hover:text-pear-gold transition-colors">
                        {service.name}
                      </CardTitle>
                      {service.popular && (
                        <Badge className="bg-pear-gold text-white">Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Price:</span>
                          <div className="font-semibold text-pear-primary">{service.price}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Duration:</span>
                          <div className="font-semibold text-pear-primary">{service.duration}</div>
                        </div>
                      </div>

                      <div className="bg-soft-pink/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Expected Results:</span>
                          <span className="font-medium text-pear-primary">{service.results}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                          <span className="text-gray-600">Patient Feedback:</span>
                          <span className="font-medium text-pear-gold">{service.socialProof}</span>
                        </div>
                      </div>

                      <Link href={service.link}>
                        <Button className="w-full group-hover:bg-pear-gold transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Middle Row: Veneers & Bonding */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cosmeticServices.slice(2, 4).map((service) => (
                <Card key={service.name} className="hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-semibold text-pear-primary group-hover:text-pear-gold transition-colors">
                        {service.name}
                      </CardTitle>
                      {service.popular && (
                        <Badge className="bg-pear-gold text-white">Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Price:</span>
                          <div className="font-semibold text-pear-primary">{service.price}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Duration:</span>
                          <div className="font-semibold text-pear-primary">{service.duration}</div>
                        </div>
                      </div>

                      <div className="bg-soft-pink/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Expected Results:</span>
                          <span className="font-medium text-pear-primary">{service.results}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                          <span className="text-gray-600">Patient Feedback:</span>
                          <span className="font-medium text-pear-gold">{service.socialProof}</span>
                        </div>
                      </div>

                      <Link href={service.link}>
                        <Button className="w-full group-hover:bg-pear-gold transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Row: Wedding Day & Smile Makeover */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cosmeticServices.slice(4, 6).map((service) => (
                <Card key={service.name} className="hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-semibold text-pear-primary group-hover:text-pear-gold transition-colors">
                        {service.name}
                      </CardTitle>
                      {service.popular && (
                        <Badge className="bg-pear-gold text-white">Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Price:</span>
                          <div className="font-semibold text-pear-primary">{service.price}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Duration:</span>
                          <div className="font-semibold text-pear-primary">{service.duration}</div>
                        </div>
                      </div>

                      <div className="bg-soft-pink/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Expected Results:</span>
                          <span className="font-medium text-pear-primary">{service.results}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                          <span className="text-gray-600">Patient Feedback:</span>
                          <span className="font-medium text-pear-gold">{service.socialProof}</span>
                        </div>
                      </div>

                      <Link href={service.link}>
                        <Button className="w-full group-hover:bg-pear-gold transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Single Card: Buccal Corridor Correction */}
            <div className="flex justify-center">
              <div className="w-full md:w-1/2">
                {cosmeticServices.slice(6, 7).map((service) => (
                  <Card key={service.name} className="hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl font-semibold text-pear-primary group-hover:text-pear-gold transition-colors">
                          {service.name}
                        </CardTitle>
                        {service.popular && (
                          <Badge className="bg-pear-gold text-white">Popular</Badge>
                        )}
                      </div>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Price:</span>
                            <div className="font-semibold text-pear-primary">{service.price}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Duration:</span>
                            <div className="font-semibold text-pear-primary">{service.duration}</div>
                          </div>
                        </div>

                        <div className="bg-soft-pink/10 p-3 rounded-lg">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Expected Results:</span>
                            <span className="font-medium text-pear-primary">{service.results}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm mt-1">
                            <span className="text-gray-600">Patient Feedback:</span>
                            <span className="font-medium text-pear-gold">{service.socialProof}</span>
                          </div>
                        </div>

                        <Link href={service.link}>
                          <Button className="w-full group-hover:bg-pear-gold transition-colors">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Real Patient Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the remarkable results achieved by our patients through expert cosmetic dentistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterCases.map((case_study, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-soft-pink/20 to-soft-lavender/20 rounded-2xl flex items-center justify-center mb-4">
                    <Smile className="w-16 h-16 text-soft-pink" />
                  </div>
                  <h3 className="font-semibold text-pear-primary mb-2">{case_study.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{case_study.description}</p>
                  <Badge variant="secondary">{case_study.timeframe}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pear Tree Section */}
      <section className="py-16 bg-gradient-to-r from-soft-pink/5 to-soft-lavender/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
                Expert Cosmetic Dentistry
              </h2>
              <p className="text-xl text-gray-600">
                Why patients choose Pear Tree Dental for their smile transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Artistic Excellence</h3>
                    <p className="text-gray-600 text-sm">
                      Our dentists combine technical expertise with artistic vision to create naturally beautiful smiles that complement your facial features.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Personalised Treatment</h3>
                    <p className="text-gray-600 text-sm">
                      Every smile is unique. We create bespoke treatment plans tailored to your goals, lifestyle, and budget.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Premium Materials</h3>
                    <p className="text-gray-600 text-sm">
                      We use only the finest dental materials and work with leading dental laboratories to ensure exceptional quality and longevity.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pear-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-pear-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pear-primary mb-2">Comfortable Experience</h3>
                    <p className="text-gray-600 text-sm">
                      Our relaxing practice environment and gentle approach ensure you feel comfortable throughout your smile transformation journey.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-pinky-fade text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Book your cosmetic dentistry consultation today and discover how we can help you achieve the smile of your dreams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-pinky hover:bg-white/90 font-semibold">
                    Book Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:01159312935">
                  <Button size="lg" className="bg-white text-pinky hover:bg-white/90 border-2 border-white">
                    Call 0115 931 2935
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Treatment planning</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Flexible payment options</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation />
    </div>
  );
}
