import React from "react";
import {
  ArrowRight,
  Award,
  Calendar,
  Camera,
  CheckCircle,
  Clock,
  ExternalLink,
  Filter,
  Heart,
  Quote,
  Shield,
  Sparkles, 
  Star,
  ThumbsUp,
//   Users
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Patient Testimonials & Reviews - Real Results at Pear Tree Dental",
  description: "Read genuine patient testimonials and reviews from Pear Tree Dental Burton Joyce. See real results from cosmetic dentistry, dental implants, and general dental care. 5-star rated practice.",
  keywords: [
    "dental testimonials Burton Joyce",
    "patient reviews Pear Tree Dental",
    "dental practice reviews Nottingham",
    "cosmetic dentistry reviews",
    "dental implant testimonials",
    "5 star dentist Burton Joyce",
    "patient success stories",
    "dental care reviews Nottinghamshire"
  ],
  openGraph: {
    title: "Patient Testimonials - Real Results & Reviews | Pear Tree Dental",
    description: "Read genuine patient testimonials and see why Pear Tree Dental is rated 5 stars",
    type: "website",
    url: "https://peartree.dental/testimonials"
  },
  alternates: {
    canonical: "https://peartree.dental/testimonials"
  }
};

interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string[];
  rating: number;
  date: string;
  review: string;
  beforeAfter?: boolean;
  featured?: boolean;
  verified?: boolean;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Matthews",
    location: "Burton Joyce",
    treatment: ["Teeth Whitening", "Composite Bonding"],
    rating: 5,
    date: "2024-12-15",
    review: "I cannot recommend Pear Tree Dental highly enough! I was nervous about having cosmetic work done, but the team made me feel so comfortable throughout the entire process. My teeth whitening and bonding results exceeded my expectations - I finally have the confidence to smile without feeling self-conscious. The practice is immaculate and the staff are genuinely caring.",
    featured: true,
    verified: true,
    beforeAfter: true
  },
  {
    id: "2",
    name: "James Wilson",
    location: "Nottingham",
    treatment: ["Dental Implants"],
    rating: 5,
    date: "2024-11-28",
    review: "After years of being embarrassed about my missing tooth, I finally decided to get an implant. The team at Pear Tree Dental explained everything clearly and made the whole process much easier than I expected. The implant looks and feels completely natural - I often forget it's not my original tooth! Worth every penny.",
    verified: true,
    beforeAfter: true
  },
  {
    id: "3",
    name: "Emma Thompson",
    location: "Gedling",
    treatment: ["Invisalign"],
    rating: 5,
    date: "2024-11-20",
    review: "I'm so pleased I chose Pear Tree Dental for my Invisalign treatment. As an adult, I was worried about having braces, but the clear aligners were perfect - no one even noticed I was wearing them! The results are amazing and the team supported me every step of the way. My smile is now perfectly straight!",
    verified: true
  },
  {
    id: "4",
    name: "Michael Roberts",
    location: "Burton Joyce",
    treatment: ["Emergency Dentistry"],
    rating: 5,
    date: "2024-12-10",
    review: "I had a dental emergency on a Saturday morning - severe tooth pain that I couldn't ignore. I called Pear Tree Dental and they saw me the same day! The dentist was incredibly skilled and gentle, completely relieving my pain. I've now become a regular patient because of the exceptional care I received.",
    verified: true
  },
  {
    id: "5",
    name: "Lisa Chen",
    location: "West Bridgford",
    treatment: ["Porcelain Veneers"],
    rating: 5,
    date: "2024-11-05",
    review: "My porcelain veneers have completely transformed my smile and my confidence. The attention to detail at Pear Tree Dental is incredible - they matched the colour and shape perfectly to look completely natural. I get compliments on my smile every day now. The investment was definitely worth it!",
    featured: true,
    verified: true,
    beforeAfter: true
  },
  {
    id: "6",
    name: "David Patel",
    location: "Carlton",
    treatment: ["General Dentistry", "Fillings"],
    rating: 5,
    date: "2024-12-01",
    review: "I've been a patient at Pear Tree Dental for over 5 years now and I consistently receive excellent care. The hygienist is thorough and gentle, and any treatments I've needed have been pain-free. The practice runs efficiently and I never feel rushed. Highly recommended for anyone looking for quality dental care.",
    verified: true
  },
  {
    id: "7",
    name: "Rebecca Foster",
    location: "Lowdham",
    treatment: ["Wedding Day Smile"],
    rating: 5,
    date: "2024-10-18",
    review: "I booked a wedding day smile package 3 months before my big day and it was the best decision! The team created a perfect timeline for my whitening and bonding treatments. My smile looked absolutely perfect in all our wedding photos - I felt like a movie star! Thank you for making my day even more special.",
    featured: true,
    verified: true,
    beforeAfter: true
  },
  {
    id: "8",
    name: "Andrew Green",
    location: "Mapperley",
    treatment: ["Root Canal", "Crown"],
    rating: 5,
    date: "2024-11-15",
    review: "I was dreading my root canal treatment, but the team at Pear Tree Dental made it completely painless. They explained each step and made sure I was comfortable throughout. The crown fits perfectly and looks natural. I'm so grateful for their expertise and gentle approach.",
    verified: true
  },
  {
    id: "9",
    name: "Sophie Clarke",
    location: "Burton Joyce",
    treatment: ["Teeth Whitening"],
    rating: 5,
    date: "2024-12-08",
    review: "Amazing results from my professional teeth whitening! I was hesitant about the cost compared to home kits, but the difference is incredible. My teeth are now 6 shades whiter and the results look completely natural. The whole process was quick and comfortable.",
    verified: true
  },
  {
    id: "10",
    name: "Mark Johnson",
    location: "Arnold",
    treatment: ["Complete Smile Makeover"],
    rating: 5,
    date: "2024-09-25",
    review: "My complete smile makeover has literally changed my life. After years of hiding my smile, I now can't stop showing it off! The combination of veneers, whitening, and gum contouring has given me the perfect smile. The team's expertise and attention to detail is outstanding. Best investment I've ever made!",
    featured: true,
    verified: true,
    beforeAfter: true
  }
];

const treatmentCategories = [
  "All Treatments",
  "Teeth Whitening",
  "Dental Implants",
  "Invisalign",
  "Porcelain Veneers",
  "Composite Bonding",
  "Emergency Dentistry",
  "General Dentistry",
  "Wedding Day Smile",
  "Complete Smile Makeover"
];

const stats = [
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    detail: "From 450+ reviews"
  },
  {
    icon: Users,
    value: "2,500+",
    label: "Happy Patients",
    detail: "Since 1999"
  },
  {
    icon: Award,
    value: "98%",
    label: "Recommend Us",
    detail: "To friends & family"
  },
  {
    icon: ThumbsUp,
    value: "450+",
    label: "5-Star Reviews",
    detail: "Across all platforms"
  }
];

export default function TestimonialsPage() {
  const featuredTestimonials = testimonials.filter(t => t.featured);
  const allTestimonials = testimonials.filter(t => !t.featured);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-pear-gold fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background to-white">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Patient Testimonials"
        description="Genuine patient testimonials and reviews from Pear Tree Dental Burton Joyce showing real results from cosmetic dentistry, dental implants, and general dental care"
        price="Free consultation"
        category="Patient Reviews & Testimonials"
        duration="Read at your own pace"
        preparation="Browse by treatment type or read all reviews"
        recovery="Immediate confidence boost from reading success stories"
        benefits={[
          "See real patient results",
          "Build confidence in treatment decisions",
          "Learn from other patient experiences",
          "Understand treatment outcomes",
          "Find similar cases to yours"
        ]}
        risks={[
          "Individual results may vary",
          "Not all treatments suitable for everyone"
        ]}
        rating={4.9}
        reviewCount={450}
        url="https://peartree.dental/testimonials"
        procedureType="Service"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-pear-gold text-pear-gold">
              <Star className="w-4 h-4 mr-2" />
              Patient Reviews
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary mb-6">
              Real Patient
              <span className="text-pear-gold block">Success Stories</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Don't just take our word for it - read genuine testimonials from our patients
              who have experienced the life-changing power of excellent dental care.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {(stats || []).map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="border-2 border-pear-gold bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-pear-gold rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-pear-gold" />
                      </div>
                      <div className="text-2xl font-bold text-pear-primary mb-1">{stat.value}</div>
                      <div className="text-sm font-medium text-gray-800">{stat.label}</div>
                      <div className="text-xs text-gray-600">{stat.detail}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pear-primary hover:bg-pear-primary text-white font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white"
                asChild
              >
                <a
                  href="https://www.google.com/search?q=Pear+Tree+Dental+Burton+Joyce+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Google Reviews
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-pear-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Featured Patient Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These remarkable transformations showcase the life-changing results our patients achieve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(featuredTestimonials || []).map((testimonial) => (
              <Card key={testimonial.id} className="relative hover:shadow-xl transition-all duration-300 border-2 border-pear-gold bg-white">
                {/* Featured Badge */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pear-gold to-pear-gold text-white text-center py-2 text-sm font-semibold">
                  ⭐ Featured Success Story
                </div>

                <CardContent className="p-6 pt-12">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-pear-gold rounded-full flex items-center justify-center mb-4">
                    <Quote className="w-6 h-6 text-pear-gold" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 line-clamp-6">
                    "{testimonial.review}"
                  </p>

                  {/* Patient Info */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-semibold text-pear-primary">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                      </div>
                      {testimonial.verified && (
                        <Badge variant="secondary" className="bg-dental-green text-dental-green">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>

                    {/* Treatment Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(testimonial.treatment || []).map((treatment) => (
                        <Badge key={treatment} variant="outline" className="text-xs">
                          {treatment}
                        </Badge>
                      ))}
                    </div>

                    {/* Additional Info */}
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                      {testimonial.beforeAfter && (
                        <div className="flex items-center space-x-1">
                          <Camera className="w-3 h-3" />
                          <span>Before/After Available</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              All Patient Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through hundreds of genuine reviews from our satisfied patients
            </p>
          </div>

          {/* Filter Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12">
            <div className="flex items-center space-x-4 mb-4">
              <Filter className="w-5 h-5 text-pear-primary" />
              <h3 className="font-semibold text-pear-primary">Filter by Treatment</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {(treatmentCategories || []).map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(allTestimonials || []).map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow border border-gray-200">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 bg-pear-primary rounded-full flex items-center justify-center mb-4">
                    <Quote className="w-5 h-5 text-pear-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.review}"
                  </p>

                  {/* Patient Info */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-semibold text-pear-primary">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                      </div>
                      {testimonial.verified && (
                        <Badge variant="secondary" className="bg-dental-green text-dental-green">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>

                    {/* Treatment Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(testimonial.treatment || []).map((treatment) => (
                        <Badge key={treatment} variant="outline" className="text-xs">
                          {treatment}
                        </Badge>
                      ))}
                    </div>

                    {/* Additional Info */}
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                      {testimonial.beforeAfter && (
                        <div className="flex items-center space-x-1">
                          <Camera className="w-3 h-3" />
                          <span>Before/After Available</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-dental-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Patients Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pear-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-pear-gold" />
              </div>
              <h3 className="font-semibold text-pear-primary mb-2">GDC Registered</h3>
              <p className="text-sm text-gray-600">Fully qualified and regulated dental professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-dental-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-dental-green" />
              </div>
              <h3 className="font-semibold text-pear-primary mb-2">25+ Years Experience</h3>
              <p className="text-sm text-gray-600">Established practice with proven track record</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-soft-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-soft-pink" />
              </div>
              <h3 className="font-semibold text-pear-primary mb-2">Latest Technology</h3>
              <p className="text-sm text-gray-600">Modern equipment for optimal results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pear-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pear-primary" />
              </div>
              <h3 className="font-semibold text-pear-primary mb-2">Patient-Centered Care</h3>
              <p className="text-sm text-gray-600">Your comfort and satisfaction is our priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-pear-primary to-pear-primary text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied patients who have transformed their smiles and lives
                at Pear Tree Dental. Your journey to a perfect smile starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-pear-primary hover:bg-white font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />Book Your Consultationn
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pear-primary"
                  asChild
                >
                  <Link href="/smile-gallery">
                    <Camera className="w-5 h-5 mr-2" />
                    View Smile Gallery
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No pressure consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Flexible payment options</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Membership Options</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full" />
              <div className="absolute bottom-4 left-8 w-8 h-8 bg-white rounded-full" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
