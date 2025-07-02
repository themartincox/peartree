"use client";

import Navigation from "@/components/Navigation";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Calculator,
  FileText,
  Activity,
  Sparkles,
  Building,
  MapPin,
  Mail,
  MessageCircle,
  Phone,
  Users,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const industries = [
  {
    name: "Dental Practices",
    icon: <Heart className="h-8 w-8" />,
    description: "Convert website visitors into booked appointments and grow your practice revenue",
    badge: "Most Popular",
    badgeColor: "bg-blue-600",
    href: "/industries/dental-practices",
    tiers: {
      starter: {
        title: "Solo Practice",
        price: "£3,500",
        monthly: "£750/month + 3%",
        description: "Single-location practice establishing digital presence"
      },
      professional: {
        title: "Established Practice",
        price: "£6,000",
        monthly: "£1,000/month + 5%",
        description: "Growing practice with multiple services/locations"
      },
      premium: {
        title: "Ambitious Growth",
        price: "£10,000",
        monthly: "£1,500/month + 7%",
        description: "Multi-location expansion and market domination"
      }
    },
    features: ["Treatment calculators", "Before/after galleries", "Online booking", "Patient portals"],
    results: "Average 250% increase in leads within 6 months"
  },
  {
    name: "Medical Practices",
    icon: <Activity className="h-8 w-8" />,
    description: "GDPR-compliant websites that build trust and attract patients",
    badge: "High ROI",
    badgeColor: "bg-forest-green",
    href: "/industries/medical-practices",
    tiers: {
      starter: {
        title: "Solo Practitioner",
        price: "£3,500",
        monthly: "£750/month + 3%",
        description: "Individual doctor or small clinic"
      },
      professional: {
        title: "Multi-Doctor Practice",
        price: "£6,000",
        monthly: "£1,000/month + 5%",
        description: "Established practice with multiple specialities"
      },
      premium: {
        title: "Healthcare Group",
        price: "£10,000",
        monthly: "£1,500/month + 7%",
        description: "Multi-location healthcare organisation"
      }
    },
    features: ["Multi-doctor layouts", "Online consultations", "Patient education", "Secure portals"],
    results: "£100k+ additional revenue typical in year 1"
  },
  {
    name: "Accounting Practices",
    icon: <Calculator className="h-8 w-8" />,
    description: "Professional websites that demonstrate expertise and attract quality clients",
    badge: null,
    badgeColor: "",
    href: "/industries/accounting-practices",
    tiers: {
      starter: {
        title: "Solo Accountant",
        price: "£2,500",
        monthly: "£500/month + 3%",
        description: "Individual practitioner or small office"
      },
      professional: {
        title: "Established Firm",
        price: "£4,000",
        monthly: "£750/month + 5%",
        description: "Multi-partner firm with specialist services"
      },
      premium: {
        title: "Regional Firm",
        price: "£7,500",
        monthly: "£1,200/month + 7%",
        description: "Multi-office firm targeting regional growth"
      }
    },
    features: ["Client portals", "Tax calendars", "Service showcases", "Document management"],
    results: "Average 40% increase in high-value client enquiries"
  },
  {
    name: "Legal Practices",
    icon: <FileText className="h-8 w-8" />,
    description: "Professional legal websites that build trust and convert consultations",
    badge: null,
    badgeColor: "",
    href: "/industries/legal-practices",
    tiers: {
      starter: {
        title: "Solo Solicitor",
        price: "£2,800",
        monthly: "£550/month + 3%",
        description: "Individual solicitor or small practice"
      },
      professional: {
        title: "Established Firm",
        price: "£4,500",
        monthly: "£800/month + 5%",
        description: "Multi-solicitor firm with specialities"
      },
      premium: {
        title: "Regional Firm",
        price: "£8,000",
        monthly: "£1,300/month + 7%",
        description: "Multi-office firm with ambitious growth plans"
      }
    },
    features: ["Case study libraries", "Consultation booking", "Document portals", "Legal resources"],
    results: "Average 60% increase in consultation bookings"
  },
  {
    name: "Cosmetic Clinics",
    icon: <Sparkles className="h-8 w-8" />,
    description: "Premium websites for aesthetic procedures that convert consultations",
    badge: "Premium",
    badgeColor: "bg-purple-600",
    href: "/industries/cosmetic-clinics",
    tiers: {
      starter: {
        title: "Single Clinic",
        price: "£4,000",
        monthly: "£800/month + 3%",
        description: "Independent aesthetic clinic or practitioner"
      },
      professional: {
        title: "Established Clinic",
        price: "£7,000",
        monthly: "£1,200/month + 5%",
        description: "Multi-treatment clinic with growth ambitions"
      },
      premium: {
        title: "Clinic Group",
        price: "£12,000",
        monthly: "£2,000/month + 7%",
        description: "Multi-location aesthetic group"
      }
    },
    features: ["Treatment galleries", "Consultation booking", "Financing calculators", "Patient stories"],
    results: "ROI typically exceeds 500% within 18 months"
  },
  {
    name: "Physical Therapy",
    icon: <Users className="h-8 w-8" />,
    description: "Specialised websites for physiotherapy and rehabilitation clinics",
    badge: null,
    badgeColor: "",
    href: "/industries/physical-therapy",
    tiers: {
      starter: {
        title: "Solo Therapist",
        price: "£2,400",
        monthly: "£480/month + 3%",
        description: "Individual therapist or small clinic"
      },
      professional: {
        title: "Multi-Therapist Clinic",
        price: "£3,800",
        monthly: "£700/month + 5%",
        description: "Established clinic with multiple therapists"
      },
      premium: {
        title: "Rehabilitation Centre",
        price: "£6,500",
        monthly: "£1,100/month + 7%",
        description: "Multi-location rehabilitation organisation"
      }
    },
    features: ["Exercise libraries", "Progress tracking", "Insurance integration", "Appointment booking"],
    results: "Average 80% increase in new patient referrals"
  },
  {
    name: "Wellness & Beauty",
    icon: <Sparkles className="h-8 w-8" />,
    description: "Sophisticated websites for aesthetic clinics, spas, and beauty services",
    badge: "Premium",
    badgeColor: "bg-purple-600",
    href: "/wellness-beauty",
    tiers: {
      starter: {
        title: "Independent Clinic",
        price: "£4,000",
        monthly: "£800/month + 3%",
        description: "Single-location wellness or beauty clinic"
      },
      professional: {
        title: "Established Clinic",
        price: "£7,000",
        monthly: "£1,200/month + 5%",
        description: "Multi-treatment facility with growth ambitions"
      },
      premium: {
        title: "Wellness Group",
        price: "£12,000",
        monthly: "£2,000/month + 7%",
        description: "Multi-location wellness organisation"
      }
    },
    features: ["Treatment galleries", "Consultation booking", "Financing calculators", "Client testimonials"],
    results: "ROI typically exceeds 500% within 18 months"
  },
  {
    name: "Ecommerce",
    icon: <DollarSign className="h-8 w-8" />,
    description: "Physical-to-digital transitions and revenue-optimised online stores",
    badge: "Growth Focus",
    badgeColor: "bg-coral-red",
    href: "/ecommerce",
    tiers: {
      starter: {
        title: "Starting Online",
        price: "£3,000",
        monthly: "£600/month + 3%",
        description: "Traditional business moving to ecommerce"
      },
      professional: {
        title: "Established Store",
        price: "£5,500",
        monthly: "£900/month + 5%",
        description: "Growing online presence with multiple channels"
      },
      premium: {
        title: "Multi-Channel Growth",
        price: "£9,000",
        monthly: "£1,400/month + 7%",
        description: "Advanced ecommerce with marketplace integration"
      }
    },
    features: ["Custom ecommerce solutions", "Inventory management", "Multi-channel selling", "Conversion optimisation"],
    results: "Average 180% increase in online revenue within 12 months"
  }
];

const businessStages = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Solo/Small Business",
    description: "Individual practitioners or small teams establishing their digital presence",
    priceRange: "£2,400 - £4,000",
    features: ["Professional website", "Basic booking system", "Local SEO", "Review management"],
    ideal: "Solo practitioners, small offices, new businesses"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Established Local Business",
    description: "Growing businesses with multiple services or team members",
    priceRange: "£3,800 - £7,000",
    features: ["Advanced features", "Multi-service showcases", "Team profiles", "CRM integration"],
    ideal: "Multi-partner firms, established practices, growing teams"
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Ambitious Growth Business",
    description: "Multi-location businesses targeting regional expansion",
    priceRange: "£6,500 - £12,000",
    features: ["Multi-location support", "Advanced automation", "Competitive positioning", "Growth analytics"],
    ideal: "Multi-location businesses, regional expansion, market leaders"
  }
];

const qualifyingQuestions = [
  {
    question: "Are you looking to significantly grow your business revenue?",
    context: "Our revenue-sharing model means we only succeed when you do"
  },
  {
    question: "Do you want to dominate local search in your area?",
    context: "We specialise in local SEO and zero-click optimisation"
  },
  {
    question: "Are you frustrated with WordPress maintenance and updates?",
    context: "Our custom-coded solutions eliminate plugin headaches"
  },
  {
    question: "Can you commit to a 12-month growth partnership?",
    context: "Real results take time - we're not looking for quick wins"
  }
];

export default function IndustriesPage() {
  const [stickyContactVisible, setStickyContactVisible] = useState(false);
  const [contactOptionsOpen, setContactOptionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const businessStagesSection = document.getElementById('business-stages');
      const industriesSection = document.getElementById('industries-section');

      if (businessStagesSection && industriesSection) {
        const businessStagesBottom = businessStagesSection.offsetTop + businessStagesSection.offsetHeight;
        const industriesBottom = industriesSection.offsetTop + industriesSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (window.scrollY > businessStagesBottom && scrollPosition < industriesBottom + 200) {
          setStickyContactVisible(true);
        } else {
          setStickyContactVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-500 hover:text-midnight-blue">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-midnight-blue font-semibold">
                  Industries
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="bg-gradient-to-br from-midnight-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Revenue-Focused Websites for
              <span className="text-cyan-300 block">Ambitious Businesses</span>
            </h1>
            <p className="text-xl font-body mb-8 opacity-90 max-w-3xl mx-auto">
              Stop losing clients to competitors with outdated websites. Our industry-specialised
              solutions are designed to convert visitors into appointments and grow your business revenue.
            </p>
            <Badge className="bg-white/20 text-white mb-8 text-sm px-6 py-3">
              🎯 12-Month Partnership • Revenue Share Model • Custom-Coded Technology
            </Badge>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">
              Is This Right for Your Business?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {qualifyingQuestions.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{item.question}</p>
                    <p className="text-sm opacity-80">{item.context}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg mb-4">
                If you answered "yes" to most of these, we're perfect partners.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="/contact">
                  Get Your Revenue Forecast
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="business-stages" className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Which Business Stage Are You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with businesses at every stage of growth. From solo practitioners
              establishing their presence to multi-location businesses dominating their markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {businessStages.map((stage, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    {stage.icon}
                  </div>
                  <CardTitle className="text-2xl font-heading text-midnight-blue mb-2">
                    {stage.title}
                  </CardTitle>
                  <div className="text-xl font-bold text-blue-600 mb-4">
                    {stage.priceRange}
                  </div>
                  <CardDescription className="text-gray-600">
                    {stage.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-midnight-blue mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {stage.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-forest-green flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-blue-800 mb-1">Ideal for:</p>
                    <p className="text-sm text-blue-700">{stage.ideal}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {stickyContactVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative">
            {contactOptionsOpen && (
              <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[280px]">
                <h3 className="font-heading font-bold text-midnight-blue mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@postino.co.uk?subject=Website Enquiry&body=Hi, I'm interested in learning more about your industry-specific websites. Please get in touch."
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-midnight-blue">Email Us</div>
                      <div className="text-sm text-gray-600">hello@postino.co.uk</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/447432039801?text=Hi! I'm interested in learning more about your industry-specific websites. Can we chat?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white group-hover:bg-green-700">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-midnight-blue">WhatsApp</div>
                      <div className="text-sm text-gray-600">Quick response</div>
                    </div>
                  </a>

                  <a
                    href="tel:+447432039801"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white group-hover:bg-purple-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-midnight-blue">Call Us</div>
                      <div className="text-sm text-gray-600">+44 74 3203 9801</div>
                    </div>
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Ready to discuss your project? We typically respond within 2 hours.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setContactOptionsOpen(!contactOptionsOpen)}
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="font-heading font-semibold">Contact Us</span>
              <div className={`transform transition-transform duration-200 ${contactOptionsOpen ? 'rotate-180' : ''}`}>
                <ArrowRight className="h-4 w-4 rotate-90" />
              </div>
            </button>
          </div>
        </div>
      )}

      {contactOptionsOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setContactOptionsOpen(false)}
        />
      )}

      <section id="industries-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Choose Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific websites with tailored features, compliance requirements,
              and proven conversion strategies for your profession.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {industry.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className={`${industry.badgeColor} text-white px-4 py-2`}>
                      {industry.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-2xl font-heading text-midnight-blue mb-4">
                    {industry.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6">
                    {industry.description}
                  </CardDescription>

                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <div className="font-semibold text-sm text-gray-800">{industry.tiers.starter.title}</div>
                        <div className="text-xs text-gray-500">{industry.tiers.starter.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">{industry.tiers.starter.price}</div>
                        <div className="text-xs text-gray-500">{industry.tiers.starter.monthly}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <div className="font-semibold text-sm text-gray-800">{industry.tiers.professional.title}</div>
                        <div className="text-xs text-gray-500">{industry.tiers.professional.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">{industry.tiers.professional.price}</div>
                        <div className="text-xs text-gray-500">{industry.tiers.professional.monthly}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <div className="font-semibold text-sm text-gray-800">{industry.tiers.premium.title}</div>
                        <div className="text-xs text-gray-500">{industry.tiers.premium.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">{industry.tiers.premium.price}</div>
                        <div className="text-xs text-gray-500">{industry.tiers.premium.monthly}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-midnight-blue mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-forest-green flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold text-blue-800 mb-1">Typical Results:</p>
                    <p className="text-sm text-blue-700">{industry.results}</p>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white group-hover:bg-blue-600 transition-colors"
                  >
                    <Link href={industry.href}>
                      View {industry.name} Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Industry Specialisation Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generic web agencies create generic results. We understand the unique challenges,
              regulations, and customer behaviour patterns in your industry.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-red-600 mb-6">Generic Agencies:</h3>
              <ul className="space-y-4">
                {[
                  "One-size-fits-all website templates",
                  "No understanding of industry regulations",
                  "Generic booking systems that don't integrate",
                  "Copy that could apply to any business",
                  "No knowledge of customer decision-making patterns"
                ].map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-forest-green mb-6">Our Approach:</h3>
              <ul className="space-y-4">
                {[
                  "Industry-specific design and functionality",
                  "Full compliance and regulatory requirements built-in",
                  "Integrated systems that work with your existing software",
                  "Copy written specifically for your customer demographic",
                  "Deep understanding of what drives bookings in your field"
                ].map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-4">
                Ready to Work with Industry Specialists?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Get a free audit of your current website and discover exactly how we'd
                improve it for your specific industry and business stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/contact">
                    Get Free Website Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white"
                >
                  <Link href="/growth-consultation">
                    Book Strategy Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Industry-specialised websites for ambitious businesses.
                Custom-coded solutions with revenue-sharing partnerships.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Healthcare</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/industries/dental-practices"
                    className="hover:text-white transition-colors"
                  >
                    Dental Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/medical-practices"
                    className="hover:text-white transition-colors"
                  >
                    Medical Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/cosmetic-clinics"
                    className="hover:text-white transition-colors"
                  >
                    Cosmetic Clinics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Professional Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/industries/accounting-practices"
                    className="hover:text-white transition-colors"
                  >
                    Accounting Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/legal-practices"
                    className="hover:text-white transition-colors"
                  >
                    Legal Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/physical-therapy"
                    className="hover:text-white transition-colors"
                  >
                    Physical Therapy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Get Free Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/growth-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Book Strategy Call
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+4407432039801"
                    className="hover:text-white transition-colors"
                  >
                    +44 74 3203 9801
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. | Revenue-focused websites for ambitious businesses.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
