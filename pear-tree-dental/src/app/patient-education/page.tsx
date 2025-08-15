import React from "react";
import {
  ArrowRight,
  Bookmark,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Heart,
  Lightbulb,
  MessageCircle,
  Share2,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SearchableArticleList from "@/components/patient-education/SearchableArticleList";
import EnhancedServiceSchema from "@/components/seo/EnhancedServiceSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Patient Education - Dental Health Guides & Resources | Pear Tree Dental",
  description:
    "Comprehensive dental health education resources, treatment guides, and oral care tips from Pear Tree Dental Burton Joyce. Learn about dental procedures, prevention, and aftercare.",
  keywords: [
    "dental education Burton Joyce",
    "oral health guides",
    "dental treatment information",
    "tooth care tips",
    "dental health resources",
    "dentist advice Nottingham",
    "dental procedure guides",
    "oral hygiene education",
    "dental care instructions",
  ],
  openGraph: {
    title: "Patient Education Hub - Dental Health Resources | Pear Tree Dental",
    description:
      "Expert dental health education and treatment guides to help you maintain optimal oral health",
    type: "website",
    url: "https://peartree.dental/patient-education",
  },
  alternates: {
    canonical: "https://peartree.dental/patient-education",
  },
};

interface EducationArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
  popular?: boolean;
  new?: boolean;
  author: string;
  publishDate: string;
  tags: string[];
  href: string;
  downloadable?: boolean;
}

const educationArticles: EducationArticle[] = [
  {
    id: "1",
    title: "Complete Guide to Dental Implants: What to Expect",
    category: "Treatment Guides",
    description:
      "Everything you need to know about dental implants, from initial consultation to final restoration and long-term care.",
    readTime: "8 min read",
    difficulty: "Intermediate",
    featured: true,
    author: "Dr. Sarah Johnson",
    publishDate: "2024-12-01",
    tags: ["Dental Implants", "Surgery", "Tooth Replacement"],
    href: "/patient-education/dental-implants-guide",
    downloadable: true,
  },
  {
    id: "2",
    title: "Daily Oral Hygiene: Professional Tips for Perfect Teeth",
    category: "Prevention",
    description:
      "Master the art of daily oral care with professional techniques that prevent cavities, gum disease, and other dental problems.",
    readTime: "5 min read",
    difficulty: "Beginner",
    popular: true,
    author: "Dental Hygienist Team",
    publishDate: "2024-11-28",
    tags: ["Oral Hygiene", "Prevention", "Daily Care"],
    href: "/patient-education/daily-oral-hygiene",
  },
  {
    id: "3",
    title: "Teeth Whitening: Professional vs At-Home Options",
    category: "Cosmetic Dentistry",
    description:
      "Compare professional and at-home whitening options to choose the best method for achieving your brightest smile safely.",
    readTime: "6 min read",
    difficulty: "Beginner",
    featured: true,
    author: "Dr. Michael Roberts",
    publishDate: "2024-11-25",
    tags: ["Teeth Whitening", "Cosmetic", "Safety"],
    href: "/patient-education/teeth-whitening-options",
  },
  {
    id: "4",
    title: "Preparing for Your Dental Surgery: A Complete Checklist",
    category: "Treatment Guides",
    description:
      "Comprehensive pre-operative instructions to ensure your dental surgery goes smoothly and recovery is optimal.",
    readTime: "7 min read",
    difficulty: "Intermediate",
    author: "Surgical Team",
    publishDate: "2024-11-20",
    tags: ["Surgery", "Preparation", "Recovery"],
    href: "/patient-education/dental-surgery-preparation",
    downloadable: true,
  },
  {
    id: "5",
    title: "Understanding Gum Disease: Signs, Treatment & Prevention",
    category: "Oral Health",
    description:
      "Learn to recognise early signs of gum disease and discover effective prevention and treatment strategies.",
    readTime: "10 min read",
    difficulty: "Intermediate",
    popular: true,
    author: "Dr. Emma Thompson",
    publishDate: "2024-11-15",
    tags: ["Gum Disease", "Prevention", "Treatment"],
    href: "/patient-education/gum-disease-guide",
  },
  {
    id: "6",
    title: "Children's Dental Health: Age-by-Age Care Guide",
    category: "Paediatric Dentistry",
    description:
      "Complete guide to maintaining your child's dental health from infancy through teenage years.",
    readTime: "12 min read",
    difficulty: "Beginner",
    featured: true,
    author: "Dr. Lisa Chen",
    publishDate: "2024-11-10",
    tags: ["Children", "Prevention", "Development"],
    href: "/patient-education/childrens-dental-health",
  },
  {
    id: "7",
    title: "Post-Treatment Care: Maximising Your Results",
    category: "Aftercare",
    description:
      "Essential aftercare instructions for various dental treatments to ensure optimal healing and lasting results.",
    readTime: "9 min read",
    difficulty: "Beginner",
    author: "Clinical Team",
    publishDate: "2024-11-05",
    tags: ["Aftercare", "Recovery", "Maintenance"],
    href: "/patient-education/post-treatment-care",
    downloadable: true,
  },
  {
    id: "8",
    title: "Dental Emergencies: When to Seek Immediate Care",
    category: "Emergency Care",
    description:
      "Recognise dental emergencies and learn immediate first aid steps while seeking professional care.",
    readTime: "6 min read",
    difficulty: "Beginner",
    new: true,
    popular: true,
    author: "Emergency Team",
    publishDate: "2024-12-15",
    tags: ["Emergency", "First Aid", "Urgent Care"],
    href: "/patient-education/dental-emergencies",
  },
  {
    id: "9",
    title: "Invisalign Treatment: Your Complete Journey Guide",
    category: "Orthodontics",
    description:
      "Step-by-step guide through Invisalign treatment from consultation to retention and maintenance.",
    readTime: "11 min read",
    difficulty: "Intermediate",
    author: "Orthodontic Team",
    publishDate: "2024-10-30",
    tags: ["Invisalign", "Orthodontics", "Clear Aligners"],
    href: "/patient-education/invisalign-journey",
  },
  {
    id: "10",
    title: "Nutrition for Healthy Teeth: Foods That Help and Harm",
    category: "Prevention",
    description:
      "Discover which foods promote dental health and which to avoid for maintaining strong teeth and healthy gums.",
    readTime: "8 min read",
    difficulty: "Beginner",
    author: "Nutritional Consultant",
    publishDate: "2024-10-25",
    tags: ["Nutrition", "Prevention", "Diet"],
    href: "/patient-education/nutrition-dental-health",
  },
];

const categories = [
  "All Articles",
  "Treatment Guides",
  "Prevention",
  "Cosmetic Dentistry",
  "Oral Health",
  "Aftercare",
  "Emergency Care",
  "Orthodontics",
  "Paediatric Dentistry",
];

const stats = [
  {
    icon: BookOpen,
    value: "50+",
    label: "Educational Articles",
  },
  {
    icon: Download,
    value: "25+",
    label: "Downloadable Guides",
  },
];

const quickAccess = [
  {
    title: "Pre-Treatment Guides",
    description: "Preparation instructions for various procedures",
    icon: CheckCircle,
    color: "dental-green",
    count: "12 guides",
  },
  {
    title: "Post-Treatment Care",
    description: "Recovery and aftercare instructions",
    icon: Heart,
    color: "soft-pink",
    count: "15 guides",
  },
  {
    title: "Prevention Tips",
    description: "Daily care and prevention strategies",
    icon: Shield,
    color: "pear-primary",
    count: "20 articles",
  },
  {
    title: "Emergency Procedures",
    description: "What to do in dental emergencies",
    icon: Lightbulb,
    color: "pear-gold",
    count: "8 guides",
  },
];

export default function PatientEducationPage() {
  const featuredArticles = educationArticles.filter(
    (article) => article.featured,
  );
  const popularArticles = educationArticles.filter(
    (article) => article.popular,
  );
  const newArticles = educationArticles.filter((article) => article.new);
  const allArticles = educationArticles.filter((article) => !article.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "dental-green";
      case "Intermediate":
        return "pear-gold";
      case "Advanced":
        return "soft-pink";
      default:
        return "gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background to-white">
      {/* Enhanced SEO Schema */}
      <EnhancedServiceSchema
        serviceName="Patient Education Hub"
        description="Comprehensive dental health education resources, treatment guides, and oral care information from qualified dental professionals"
        price="Free educational resources"
        category="Dental Education & Resources"
        duration="Self-paced learning"
        preparation="Browse by topic or search for specific information"
        recovery="Immediate knowledge gain to improve oral health"
        benefits={[
          "Improve oral health knowledge",
          "Make informed treatment decisions",
          "Learn proper care techniques",
          "Understand dental procedures",
          "Prevent dental problems",
        ]}
        risks={[
          "Information supplements but doesn't replace professional advice",
          "Individual circumstances may vary",
        ]}
        rating={4.8}
        reviewCount={250}
        url="https://peartree.dental/patient-education"
        procedureType="Service"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 bg-pear-primary text-pear-primary"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Educational Resources
            </Badge>

            <h1 className="heading-serif text-4xl sm:text-6xl font-bold text-pear-primary mb-6">
              Your Dental Health
              <span className="text-pear-gold block">Education Hub</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover expert-written guides, treatment information, and oral
              health tips from our qualified dental team. Knowledge is the first
              step towards optimal oral health.
            </p>

            {/* Stats Grid */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 max-w-2xl mx-auto">
              {(stats || []).map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="border-2 border-pear-primary bg-white flex-1"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-8 bg-pear-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-pear-primary" />
                      </div>
                      <div className="text-2xl font-bold text-pear-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary text-white font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-white"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Guides
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Categories */}
      <section className="py-16 bg-gradient-to-r from-pear-primary to-pear-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Quick Access Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you need with our organized resource categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(quickAccess || []).map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-pear-primary"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-8 h-8 text-${item.color}`} />
                    </div>
                    <h3 className="font-semibold text-pear-primary mb-2 group-hover:text-pear-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {item.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {item.count}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Featured Educational Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most comprehensive and popular guides to help you understand
              dental treatments and maintain oral health
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(featuredArticles || []).map((article) => (
              <Card
                key={article.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-pear-gold"
              >
                {/* Featured Badge */}
                <div className="bg-gradient-to-r from-pear-gold to-pear-gold text-white text-center py-2 text-sm font-semibold">
                  ⭐ Featured Guide
                </div>

                <CardContent className="p-6">
                  {/* Article Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>

                        {article.downloadable && (
                          <Badge
                            variant="outline"
                            className="text-xs text-dental-green border-dental-green"
                          >
                            <Download className="w-3 h-3 mr-1" />
                            PDF
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-bold text-xl text-pear-primary mb-2 group-hover:text-pear-gold transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                  </div>

                  {/* Article Content */}
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(article.tags || []).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-gray-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Article Meta */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <span>
                        {new Date(article.publishDate).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button
                        className="flex-1 bg-pear-primary hover:bg-pear-primary text-white"
                        asChild
                      >
                        <Link href={article.href}>
                          <BookOpen className="w-4 h-4 mr-2" />
                          Read Guide
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                      >
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter & All Articles */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Complete Resource Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of dental health resources
              and treatment guides
            </p>
          </div>

          {/* Searchable Article List */}
          <SearchableArticleList
            articles={allArticles}
            categories={categories}
          />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-pear-primary to-pear-primary text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
                Stay Informed About Your Oral Health
              </h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our monthly newsletter for the latest dental health
                tips, treatment updates, and exclusive educational content
                delivered to your inbox.
              </p>

              {/* Newsletter Signup */}
              <div className="max-w-md mx-auto mb-8">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Button className="bg-white text-pear-primary hover:bg-white font-semibold">
                    Subscribe
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Monthly health tips</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Treatment updates</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Exclusive content</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full" />
              <div className="absolute bottom-4 left-8 w-8 h-8 bg-white rounded-full" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pear-background to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
              Questions About Your Oral Health?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              While our educational resources provide valuable information,
              nothing replaces personalised advice from our dental
              professionals. Book a consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-pear-primary hover:bg-pear-primary text-white font-semibold"
              >
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
                <Link href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask a Question
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
