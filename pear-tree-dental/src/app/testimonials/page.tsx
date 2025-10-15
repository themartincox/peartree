import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import { googleReviews, googleReviewsStats } from "@/data/googleReviews";
import {
  Star,
  Quote,
  ArrowRight,
  CheckCircle,
  Heart,
  Smile,
  Calendar,
  Filter,
  ExternalLink,
  Users,
  Award,
  ThumbsUp,
  MessageCircle,
  Clock,
  Shield,
  Sparkles,
  MapPin,
  Verified
} from "lucide-react";
import Image from "next/image";
import { headers } from "next/headers";
import ReviewsGrid from "@/components/ReviewsGrid";

export const metadata: Metadata = {
  title: "Google Reviews - 5 Star Patient Reviews | Pear Tree Dental Burton Joyce",
  description: "Read our genuine 5-star Google reviews from real patients at Pear Tree Dental Burton Joyce. See why we're the top rated dentist in Nottingham 2025 with 500+ 5-star Google reviews.",
  keywords: [
    "Google reviews Pear Tree Dental",
    "5 star dentist Burton Joyce",
    "dental practice reviews Google",
    "best dentist Nottinghamshire reviews",
    "patient reviews Burton Joyce",
    "Google dental reviews Nottingham",
    "5 star dental practice",
    "top rated dentist reviews",
    "top rated dentist Nottingham reviews"
  ],
  openGraph: {
    title: "5-Star Google Reviews | Pear Tree Dental Burton Joyce",
    description: "See why patients rate us 5 stars on Google - read genuine reviews from our satisfied patients",
    type: "website",
    url: "https://peartree.dental/testimonials"
  },
  alternates: {
    canonical: "https://peartree.dental/testimonials"
  }
};

// Normalize Google Business Profile JSON into the page's expected shape
function mapStar(star: string | undefined): number {
  switch (star) {
    case "FIVE":
      return 5;
    case "FOUR":
      return 4;
    case "THREE":
      return 3;
    case "TWO":
      return 2;
    case "ONE":
      return 1;
    default:
      return 5;
  }
}

function fmt(d?: string): string {
  try {
    if (!d) return "";
    const dt = new Date(d);
    return dt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return d || "";
  }
}

function sanitizeJson(input: string): string {
  // remove BOM
  let s = input.replace(/^\uFEFF/, "");
  // strip // and /* */ comments
  s = s.replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "");
  // remove trailing commas before } or ]
  s = s.replace(/,\s*([}\]])/g, "$1");
  // trim stray non-printables at end
  return s.trim();
}

let mappedReviews: Array<{ id: number; author: string; rating: number; date: string; review: string; verified: boolean; response?: { author: string; text: string; date: string } }> = [];

async function loadReviewsFromFile() {
  // Resolve current origin from request headers (works on Netlify/Vercel/Node)
  const h = headers();
  const host = h.get('x-forwarded-host') || h.get('host');
  const proto = h.get('x-forwarded-proto') || 'https';
  const origin = host ? `${proto}://${host}` : '';

  const candidates: string[] = [];
  if (origin) candidates.push(`${origin}/reviews.json`);
  if (process.env.NEXT_PUBLIC_SITE_URL) candidates.push(`${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')}/reviews.json`);
  candidates.push('https://peartree.dental/reviews.json');
  candidates.push('http://localhost:3000/reviews.json');

  for (const url of candidates) {
    try {
      const res = await fetch(url, { cache: 'no-store', next: { revalidate: 0 } });
      if (!res.ok) continue;
      const raw = await res.text();
      // Tolerate minor edits: strip trailing commas/comments
      const sanitized = raw
        .replace(/^\uFEFF/, '')
        .replace(/\/\/.*$/gm, '')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/,\s*([}\]])/g, '$1')
        .trim();
      const parsed = JSON.parse(sanitized);
      const gbp = Array.isArray(parsed) ? parsed : parsed?.reviews ?? [];
      if (!Array.isArray(gbp) || gbp.length === 0) continue;
      return gbp.map((r: any, i: number) => ({
        id: i + 1,
        author: r?.reviewer?.displayName || 'Anonymous',
        rating: (() => {
          switch (r?.starRating) {
            case 'FIVE':
              return 5;
            case 'FOUR':
              return 4;
            case 'THREE':
              return 3;
            case 'TWO':
              return 2;
            case 'ONE':
              return 1;
            default:
              return 5;
          }
        })(),
        date: (() => {
          try {
            const dt = new Date(r?.createTime);
            return dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
          } catch {
            return r?.createTime || '';
          }
        })(),
        review: r?.comment || '',
        verified: true,
        response: r?.reviewReply?.comment
          ? { author: 'Pear Tree Dental', text: r.reviewReply.comment, date: r?.reviewReply?.updateTime ?? '' }
          : undefined,
      }));
    } catch (e) {
      // try next candidate
    }
  }
  return [] as any[];
}

export default async function TestimonialsPage() {
  mappedReviews = await loadReviewsFromFile();
  // Use explicit headline stats requested: 515+ out of 545
  const reviewStats = { averageRating: 4.9, totalReviews: 545, fiveStarCount: 515 };
  const stats = [
    { icon: Star, value: `${reviewStats.averageRating}/5`, label: "Google Rating", detail: `500+ 5-star Google reviews` },
    { icon: ThumbsUp, value: `${reviewStats.fiveStarCount}`, label: "5-Star Reviews", detail: "95% of all reviews" },
    { icon: Users, value: "25,000+", label: "Happy Patients", detail: "Since 1999" },
    { icon: Verified, value: "500+", label: "Verified Reviews", detail: "Top rated dentist Nottingham 2025" },
  ];
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 text-yellow-400 fill-current"
      />
    ));
  };

  // Ensure we have reviews data or use an empty array as fallback
  const reviews = mappedReviews;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background/30 to-white">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Google Reviews"
        description="Genuine 5-star Google reviews from patients at Pear Tree Dental Burton Joyce showing real experiences and satisfaction with our dental care"
        price="Free to read"
        category="Patient Reviews & Google Testimonials"
        duration="Browse at your own pace"
        preparation="Read authentic patient experiences"
        recovery="Instant confidence in choosing our practice"
        benefits={[
          "Read verified Google reviews",
          "See real patient experiences",
          "Build confidence in treatment decisions",
          "Learn from other patient journeys",
          "Understand our commitment to excellence"
        ]}
        risks={[
          "Individual experiences may vary",
          "Results depend on individual circumstances"
        ]}
        rating={reviewStats.averageRating}
        reviewCount={reviewStats.totalReviews}
        url="https://peartree.dental/testimonials"
        procedureType="Service"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200">
                <img
                  src="/images/google-logo-mini.webp"
                  alt="Google"
                  className="w-4 h-4 mr-2"
                />
                Google Reviews
              </Badge>

            </div>

            <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary mb-6">
                            <span className="text-blue-600 block">Google Reviews</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Read genuine 5-star reviews from our patients on Google. These authentic testimonials
              showcase the exceptional care and results our patients experience at Pear Tree Dental.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="border-2 border-blue-200 bg-white/80">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-blue-600" />
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
              <Button size="lg" className="bg-soft-pink hover:bg-soft-pink/90 text-white font-semibold" asChild>
                <Link href="/book">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Recent 5-Star Google Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what our patients are saying about their experience at Pear Tree Dental
            </p>
          </div>

          <ReviewsGrid reviews={reviews} />
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-pear-background/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Why Our Patients Love Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistently rated 5 stars for our commitment to excellence in dental care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-pear-primary mb-2">GDC Registered</h3>
              <p className="text-sm text-gray-600">Fully qualified and regulated professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-pear-primary mb-2">25+ Years Experience</h3>
              <p className="text-sm text-gray-600">Established practice with proven results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-pear-primary mb-2">Latest Technology</h3>
              <p className="text-sm text-gray-600">Modern equipment for optimal outcomes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-pear-primary mb-2">Patient-Centered Care</h3>
              <p className="text-sm text-gray-600">Your comfort is our top priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-pear-primary to-soft-pink text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Experience 5-Star Dental Care
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join the {reviewStats.fiveStarCount}+ patients who've given us 5-star reviews.
                Book your consultation today and discover why we're Burton Joyce's top-rated dental practice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-pear-primary hover:bg-white/90 font-semibold" asChild>
                  <Link href="/book">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-pear-primary hover:bg-white/20 hover:border-white/90"
                  asChild
                >
                  <Link href="/smile-gallery">
                    <Smile className="w-5 h-5 mr-2" />
                    View Smile Gallery
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Flexible payment plans</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>5-star rated practice</span>
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
// Always render dynamically so edits to reviews.json are reflected immediately
export const dynamic = "force-dynamic";
