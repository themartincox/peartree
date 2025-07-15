import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import {
  Camera,
  ArrowRight,
  Filter,
  Eye,
  Star,
  Calendar,
  CheckCircle,
  Sparkles,
  Shield,
  Heart,
  Zap,
  Award,
  Users,
  Clock,
  PlayCircle,
  ExternalLink,
  Download
} from "lucide-react";

export const metadata: Metadata = {
  title: "Smile Gallery - Before & After Results | Pear Tree Dental Burton Joyce",
  description: "View our stunning before and after smile transformations. Real patient results from cosmetic dentistry, teeth whitening, veneers, dental implants and smile makeovers in Burton Joyce.",
  keywords: [
    "smile gallery Burton Joyce",
    "before after dental photos",
    "smile transformation results",
    "cosmetic dentistry results",
    "teeth whitening before after",
    "dental veneers results",
    "smile makeover gallery",
    "dental implants before after",
    "Burton Joyce dentist results"
  ],
  openGraph: {
    title: "Smile Gallery - Amazing Before & After Results | Pear Tree Dental",
    description: "See incredible smile transformations from our Burton Joyce dental practice",
    type: "website",
    url: "https://peartree.dental/smile-gallery"
  },
  alternates: {
    canonical: "https://peartree.dental/smile-gallery"
  }
};

interface GalleryItem {
  id: string;
  title: string;
  treatment: string[];
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  duration: string;
  featured?: boolean;
  patientAge: string;
  concern: string;
  result: string;
  beforeDescription: string;
  afterDescription: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Complete Smile Makeover with Veneers",
    treatment: ["Porcelain Veneers", "Teeth Whitening"],
    category: "Smile Makeover",
    beforeImage: "/images/gallery/smile-makeover-before-1.webp",
    afterImage: "/images/gallery/smile-makeover-after-1.webp",
    description: "Dramatic transformation using porcelain veneers to create a perfectly aligned, bright smile",
    duration: "3 months",
    featured: true,
    patientAge: "32",
    concern: "Crooked, discolored teeth affecting confidence",
    result: "Perfect alignment and natural white color",
    beforeDescription: "Heavily stained and misaligned front teeth",
    afterDescription: "Beautiful, natural-looking porcelain veneers"
  },
  {
    id: "2",
    title: "Professional Teeth Whitening Results",
    treatment: ["Professional Whitening"],
    category: "Whitening",
    beforeImage: "/images/gallery/whitening-before-1.webp",
    afterImage: "/images/gallery/whitening-after-1.webp",
    description: "6 shades whiter in just one session with our professional whitening treatment",
    duration: "1 session",
    patientAge: "28",
    concern: "Years of coffee and wine staining",
    result: "Dramatically whiter, brighter smile",
    beforeDescription: "Heavily stained teeth from lifestyle habits",
    afterDescription: "Bright, natural-looking white teeth"
  },
  {
    id: "3",
    title: "Single Tooth Implant Restoration",
    treatment: ["Dental Implant", "Crown"],
    category: "Implants",
    beforeImage: "/images/gallery/implant-before-1.webp",
    afterImage: "/images/gallery/implant-after-1.webp",
    description: "Seamless replacement of a missing front tooth with a dental implant and crown",
    duration: "4 months",
    featured: true,
    patientAge: "45",
    concern: "Missing front tooth affecting speech and confidence",
    result: "Natural-looking tooth that functions perfectly",
    beforeDescription: "Gap from missing central incisor",
    afterDescription: "Perfectly matched implant crown"
  },
  {
    id: "4",
    title: "Invisalign Smile Correction",
    treatment: ["Invisalign"],
    category: "Orthodontics",
    beforeImage: "/images/gallery/invisalign-before-1.webp",
    afterImage: "/images/gallery/invisalign-after-1.webp",
    description: "Straightened crowded teeth using clear Invisalign aligners",
    duration: "14 months",
    patientAge: "24",
    concern: "Crowded and crooked front teeth",
    result: "Perfectly aligned teeth without braces",
    beforeDescription: "Severely crowded lower front teeth",
    afterDescription: "Beautifully aligned smile"
  },
  {
    id: "5",
    title: "Composite Bonding Transformation",
    treatment: ["Composite Bonding"],
    category: "Bonding",
    beforeImage: "/images/gallery/bonding-before-1.webp",
    afterImage: "/images/gallery/bonding-after-1.webp",
    description: "Closed gaps and reshaped teeth using composite bonding in a single visit",
    duration: "1 session",
    featured: true,
    patientAge: "26",
    concern: "Gaps between front teeth and uneven shape",
    result: "Even, gap-free smile achieved same day",
    beforeDescription: "Multiple gaps and uneven tooth shapes",
    afterDescription: "Uniform, gap-free front teeth"
  },
  {
    id: "6",
    title: "Wedding Day Smile Enhancement",
    treatment: ["Teeth Whitening", "Composite Bonding"],
    category: "Wedding Smile",
    beforeImage: "/images/gallery/wedding-before-1.webp",
    afterImage: "/images/gallery/wedding-after-1.webp",
    description: "Perfect bridal smile achieved in time for the big day",
    duration: "3 weeks",
    patientAge: "29",
    concern: "Wanted perfect smile for wedding photos",
    result: "Picture-perfect bridal smile",
    beforeDescription: "Slightly stained teeth with minor imperfections",
    afterDescription: "Bright, flawless wedding day smile"
  },
  {
    id: "7",
    title: "Full Mouth Dental Implants",
    treatment: ["Multiple Implants", "Implant Bridge"],
    category: "Implants",
    beforeImage: "/images/gallery/full-mouth-before-1.webp",
    afterImage: "/images/gallery/full-mouth-after-1.webp",
    description: "Complete smile restoration using multiple dental implants",
    duration: "8 months",
    featured: true,
    patientAge: "58",
    concern: "Multiple missing teeth affecting eating and speech",
    result: "Full function restored with natural-looking teeth",
    beforeDescription: "Multiple missing teeth throughout the mouth",
    afterDescription: "Complete smile restored with implant-supported teeth"
  },
  {
    id: "8",
    title: "Gum Disease Treatment Results",
    treatment: ["Periodontal Treatment", "Crown Lengthening"],
    category: "Restorative",
    beforeImage: "/images/gallery/gum-before-1.webp",
    afterImage: "/images/gallery/gum-after-1.webp",
    description: "Healthy gums and improved smile after comprehensive periodontal treatment",
    duration: "6 months",
    patientAge: "42",
    concern: "Red, swollen gums and 'gummy' smile",
    result: "Healthy pink gums with perfect tooth-to-gum ratio",
    beforeDescription: "Inflamed gums with excessive gum tissue",
    afterDescription: "Healthy gums with ideal proportions"
  }
];

const categories = [
  "All Results",
  "Smile Makeover",
  "Whitening",
  "Implants",
  "Orthodontics",
  "Bonding",
  "Wedding Smile",
  "Restorative"
];

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Smile Transformations"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Patient Satisfaction"
  },
  {
    icon: Award,
    value: "98%",
    label: "Recommend Us"
  },
  {
    icon: Clock,
    value: "25+",
    label: "Years Experience"
  }
];

export default function SmileGalleryPage() {
  const featuredItems = galleryItems.filter(item => item.featured);
  const allItems = galleryItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background/30 to-white">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Smile Gallery"
        description="Browse our extensive before and after smile transformation gallery showcasing real patient results from cosmetic dentistry, dental implants, and smile makeovers"
        price="Free to view"
        category="Smile Transformation Gallery"
        duration="Browse at your own pace"
        preparation="Filter by treatment type to find results similar to your needs"
        recovery="Immediate inspiration for your own smile journey"
        benefits={[
          "See real patient results",
          "Visualize potential outcomes",
          "Build confidence in treatments",
          "Find similar cases to yours",
          "Understand treatment possibilities"
        ]}
        risks={[
          "Individual results may vary",
          "Not all outcomes are typical",
          "Consultation required for personalized assessment"
        ]}
        rating={4.9}
        reviewCount={450}
        url="https://peartree.dental/smile-gallery"
        procedureType="Service"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-soft-pink/10 text-soft-pink">
              <Camera className="w-4 h-4 mr-2" />
              Before & After Gallery
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary mb-6">
              Amazing Smile
              <span className="text-soft-pink block">Transformations</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See the incredible results our patients have achieved with our expert dental treatments.
              These real before and after photos showcase the life-changing power of modern dentistry.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="border-2 border-soft-pink/20 bg-white/80">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-soft-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-soft-pink" />
                      </div>
                      <div className="text-2xl font-bold text-pear-primary mb-1">{stat.value}</div>
                      <div className="text-sm font-medium text-gray-800">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-soft-pink hover:bg-soft-pink/90 text-white font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                asChild
              >
                <Link href="/testimonials">
                  <Star className="w-5 h-5 mr-2" />
                  Read Patient Stories
                </Link>
              </Button>
            </div>

            {/* Privacy Notice */}
            <div className="mt-8 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shield className="w-4 h-4 text-dental-green" />
                <span className="font-medium">Patient Privacy Protected</span>
              </div>
              <p>All photos shared with written patient consent. Individual results may vary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Filter className="w-5 h-5 text-pear-primary" />
              <h3 className="font-semibold text-pear-primary">Filter by Treatment Type</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="border-soft-pink/30 text-pear-primary hover:bg-soft-pink hover:text-white hover:border-soft-pink"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Transformations */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Featured Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most dramatic and inspiring smile makeovers that showcase the full potential of modern cosmetic dentistry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-xl border-2 border-soft-pink/20 hover:shadow-2xl transition-all duration-300">
                {/* Featured Badge */}
                <div className="bg-gradient-to-r from-soft-pink to-soft-lavender text-white text-center py-2 text-sm font-semibold">
                  ⭐ Featured Transformation
                </div>

                <CardContent className="p-6">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                          <div className="text-center">
                            <Camera className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                            <div className="text-sm font-medium text-gray-700">BEFORE</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 text-center">{item.beforeDescription}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-soft-pink/20 to-soft-lavender/20">
                          <div className="text-center">
                            <Sparkles className="w-8 h-8 text-soft-pink mx-auto mb-2" />
                            <div className="text-sm font-medium text-soft-pink">AFTER</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 text-center">{item.afterDescription}</p>
                    </div>
                  </div>

                  {/* Treatment Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-xl text-pear-primary mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>

                    {/* Treatment Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.treatment.map((treatment) => (
                        <Badge key={treatment} variant="outline" className="text-soft-pink border-soft-pink">
                          {treatment}
                        </Badge>
                      ))}
                    </div>

                    {/* Patient Details */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-800">Patient Age:</span>
                          <div className="text-gray-600">{item.patientAge} years</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Treatment Time:</span>
                          <div className="text-gray-600">{item.duration}</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Main Concern:</span>
                          <div className="text-gray-600">{item.concern}</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Result Achieved:</span>
                          <div className="text-gray-600">{item.result}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-soft-pink hover:bg-soft-pink/90 text-white">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Size
                      </Button>
                      <Button variant="outline" className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Results Gallery */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Complete Results Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our extensive collection of smile transformations across all treatment types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  {/* Before/After Split Image */}
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-2">
                      {/* Before Side */}
                      <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="w-6 h-6 text-gray-500 mx-auto mb-1" />
                          <div className="text-xs font-medium text-gray-700">BEFORE</div>
                        </div>
                      </div>
                      {/* After Side */}
                      <div className="bg-gradient-to-br from-soft-pink/20 to-soft-lavender/20 flex items-center justify-center">
                        <div className="text-center">
                          <Sparkles className="w-6 h-6 text-soft-pink mx-auto mb-1" />
                          <div className="text-xs font-medium text-soft-pink">AFTER</div>
                        </div>
                      </div>
                    </div>

                    {/* Divider Line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10"></div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-soft-pink text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-pear-primary mb-2 line-clamp-2">{item.title}</h3>

                  {/* Treatment Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.treatment.map((treatment) => (
                      <Badge key={treatment} variant="outline" className="text-xs">
                        {treatment}
                      </Badge>
                    ))}
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                    <div>
                      <span className="font-medium">Age:</span> {item.patientAge}
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span> {item.duration}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white">
              <Camera className="w-5 h-5 mr-2" />
              Load More Results
            </Button>
          </div>
        </div>
      </section>

      {/* Treatment Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Browse by Treatment Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore specific treatment results to see what's possible for your unique smile goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Teeth Whitening", icon: Sparkles, count: "150+", color: "pear-gold" },
              { name: "Dental Veneers", icon: Shield, count: "85+", color: "soft-pink" },
              { name: "Dental Implants", icon: Award, count: "200+", color: "dental-green" },
              { name: "Smile Makeovers", icon: Heart, count: "65+", color: "pear-primary" }
            ].map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.name} href={`/smile-gallery?category=${category.name.toLowerCase().replace(' ', '-')}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 text-center cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-${category.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-8 h-8 text-${category.color}`} />
                      </div>
                      <h3 className="font-semibold text-pear-primary mb-2">{category.name}</h3>
                      <div className="text-sm text-gray-600">{category.count} Results</div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-soft-pink to-soft-lavender text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Ready for Your Own Transformation?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                These incredible results could be yours too. Book a free consultation to discuss
                your smile goals and discover what's possible for your unique situation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-soft-pink hover:bg-white/90 font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-soft-pink"
                  asChild
                >
                  <Link href="/testimonials">
                    <Star className="w-5 h-5 mr-2" />
                    Read Patient Stories
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Digital smile preview</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Flexible payment plans</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Build Your Dream Smile</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full" />
              <div className="absolute bottom-4 left-8 w-8 h-8 bg-white/20 rounded-full" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
