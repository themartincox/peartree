import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Guides",
      icon: BookOpen,
      color: "bg-forest-green",
      items: [
        {
          title: "Complete Guide to Growth Marketing for SMEs",
          description:
            "A comprehensive 50-page guide covering everything from strategy development to execution and measurement.",
          type: "PDF Guide",
          downloadLink: "#",
          featured: true,
        },
        {
          title: "AI Automation Implementation Checklist",
          description:
            "Step-by-step checklist for implementing AI automation in your business processes.",
          type: "PDF Checklist",
          downloadLink: "#",
        },
        {
          title: "SEO Strategy Template for Small Businesses",
          description:
            "Ready-to-use template for developing your SEO strategy with keyword research and content planning.",
          type: "Template",
          downloadLink: "#",
        },
      ],
    },
    {
      category: "Tools & Templates",
      icon: Zap,
      color: "bg-coral-red",
      items: [
        {
          title: "Marketing ROI Calculator",
          description:
            "Calculate the return on investment for your marketing activities with our interactive tool.",
          type: "Online Tool",
          downloadLink: "#",
        },
        {
          title: "Content Calendar Template",
          description:
            "12-month content planning template with built-in social media scheduling.",
          type: "Excel Template",
          downloadLink: "#",
        },
        {
          title: "Email Marketing Audit Checklist",
          description:
            "Comprehensive checklist to audit and improve your email marketing performance.",
          type: "PDF Checklist",
          downloadLink: "#",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue via-forest-green to-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white mb-6">
              Free Resources
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Everything You Need to{" "}
              <span className="text-coral-red">Grow Your Business</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Access our library of guides, templates, tools, and insights to
              accelerate your growth marketing and AI automation journey.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="#resources">
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Choose Your Resource Category
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              From comprehensive guides to practical tools, find exactly what
              you need to implement effective growth strategies.
            </p>
          </div>

          <div className="space-y-16">
            {resources.map((category, categoryIndex) => (
              <div
                key={`category-${categoryIndex}-${category.category.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="flex items-center mb-8">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-midnight-blue">
                    {category.category}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={`item-${categoryIndex}-${itemIndex}-${item.title.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
                      className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                        item.featured
                          ? "border-2 border-coral-red"
                          : "border-gray-200"
                      }`}
                    >
                      {item.featured && (
                        <div className="bg-coral-red text-white text-center py-2 text-sm font-heading font-semibold">
                          Featured Resource
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {item.type}
                          </Badge>
                          <FileText className="h-5 w-5 text-gray-400" />
                        </div>
                        <CardTitle className="text-lg font-heading text-midnight-blue leading-tight">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-coral-red text-coral-red hover:bg-coral-red hover:text-white"
                        >
                          <Link href={item.downloadLink}>
                            <Download className="mr-2 h-4 w-4" />
                            Access Resource
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-6">
              Get New Resources First
            </h2>
            <p className="text-lg font-body text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to access new guides,
              templates, and tools as soon as we release them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
              />
              <Button className="bg-coral-red hover:bg-coral-red/90 text-white px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              See These Resources in Action
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Discover how our clients have used these resources to achieve
              remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-forest-green to-midnight-blue text-white shadow-lg">
              <CardHeader>
                <Badge className="bg-white/20 text-white w-fit">
                  Case Study
                </Badge>
                <CardTitle className="text-xl font-heading">
                  How TechFlow Used Our SEO Template
                </CardTitle>
                <CardDescription className="text-white/80">
                  See how a software company achieved 245% traffic growth using
                  our SEO strategy template.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-forest-green"
                >
                  <Link href="/case-studies">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-coral-red to-forest-green text-white shadow-lg">
              <CardHeader>
                <Badge className="bg-white/20 text-white w-fit">
                  Success Story
                </Badge>
                <CardTitle className="text-xl font-heading">
                  Manufacturing Company's AI Transformation
                </CardTitle>
                <CardDescription className="text-white/80">
                  Learn how our AI implementation guide helped save 45+ hours
                  per week in manual tasks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-coral-red"
                >
                  <Link href="/case-studies">
                    View Success Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Need More Than Resources?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            While our resources provide valuable insights, nothing beats
            personalised guidance. Let's discuss how we can accelerate your
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/growth-consultation">
                Book Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link
                href="/contact"
                className="text-white hover:text-midnight-blue"
              >
                <span className="font-heading font-semibold">Get in Touch</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Where growth meets AI innovation. Helping SMEs achieve
                measurable success through expert marketing and intelligent
                automation.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-marketing"
                    className="hover:text-white transition-colors"
                  >
                    Growth Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation"
                    className="hover:text-white transition-colors"
                  >
                    AI & Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seo-services"
                    className="hover:text-white transition-colors"
                  >
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/content-strategy"
                    className="hover:text-white transition-colors"
                  >
                    Content Strategy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Growth Strategy Session
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation-demo"
                    className="hover:text-white transition-colors"
                  >
                    Automation Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-white transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Empowering SME growth through intelligent marketing.
            </p>
            <p className="font-body text-gray-500 text-sm mt-2">
              Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
