import React from "react";
import {
  ArrowRight,
  CalendarDays,
  CreditCard,
  MapPin,
  Phone,
  Shield,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Looking for an Alternative to Dental Health Centre Nottingham? Consider Pear Tree Dental",
  description:
    "Seeking an alternative to Dental Health Centre Nottingham? Discover Pear Tree Dental in Burton Joyce - freedom from NHS restrictions, transparent pricing, immediate access.",
  keywords: [
    "Dental Health Centre Nottingham alternative",
    "alternative to Dental Health Centre Nottingham",
    "NHS dental alternative",
    "Burton Joyce dentist",
    "dental membership plans Nottingham",
    "private dental care Nottingham",
  ],
  openGraph: {
    title:
      "Looking for an Alternative to Dental Health Centre Nottingham? Consider Pear Tree Dental",
    description:
      "Escape NHS restrictions with comprehensive membership care and immediate access to all treatments.",
    url: "https://peartree.dental/dental-health-centre-nottingham-alternative-nottingham",
  },
  alternates: {
    canonical:
      "https://peartree.dental/dental-health-centre-nottingham-alternative-nottingham",
  },
};

const reasonsToSwitch = [
  {
    icon: Shield,
    title: "Freedom from NHS Restrictions",
    description:
      "Access all treatments without NHS funding limitations or bureaucratic delays",
    benefit: "Get the dental care you need when you need it",
  },
  {
    icon: CreditCard,
    title: "Transparent Membership Pricing",
    description:
      "Simple monthly plans eliminate NHS bands and unpredictable private charges",
    benefit: "Budget confidently with predictable monthly costs",
  },
  {
    icon: CalendarDays,
    title: "Immediate Access",
    description:
      "Same-day emergency appointments and priority booking without NHS waiting lists",
    benefit: "No more months-long waits for routine care",
  },
  {
    icon: Zap,
    title: "Modern Facilities & Technology",
    description:
      "Purpose-built practice with latest equipment, not limited by NHS funding",
    benefit: "Experience cutting-edge dental care",
  },
];

const switchingProcess = [
  {
    step: "1",
    title: "Free Consultation",
    description: "Book your first appointment to discuss membership options",
  },
  {
    step: "2",
    title: "Transfer NHS Records",
    description: "We'll request your records from Dental Health Centre",
  },
  {
    step: "3",
    title: "Choose Membership",
    description: "Select the plan that eliminates NHS restrictions",
  },
  {
    step: "4",
    title: "Enjoy Complete Freedom",
    description: "Access all treatments without NHS limitations",
  },
];

const nhsVsMembership = [
  {
    aspect: "Waiting Times",
    nhs: "NHS waiting lists for routine care",
    membership: "Same-day emergency, priority booking",
    advantage: "membership",
  },
  {
    aspect: "Treatment Options",
    nhs: "Limited by NHS funding rules",
    membership: "All treatments always available",
    advantage: "membership",
  },
  {
    aspect: "Cost Structure",
    nhs: "NHS bands + private top-ups",
    membership: "Simple monthly membership fee",
    advantage: "membership",
  },
  {
    aspect: "Emergency Care",
    nhs: "NHS emergency appointment queues",
    membership: "Guaranteed same-day access",
    advantage: "membership",
  },
  {
    aspect: "Cosmetic Treatments",
    nhs: "Generally not available on NHS",
    membership: "Included in membership plans",
    advantage: "membership",
  },
  {
    aspect: "Bureaucracy",
    nhs: "NHS forms and restrictions",
    membership: "Direct patient-dentist relationship",
    advantage: "membership",
  },
];

const faqs = [
  {
    question:
      "Why would someone choose Pear Tree Dental as an alternative to NHS Dental Health Centre?",
    answer:
      "Common reasons include escaping NHS waiting lists, accessing all treatment options including cosmetics, transparent monthly pricing, same-day emergency care, and freedom from NHS bureaucracy and funding restrictions that can limit treatment choices.",
  },
  {
    question: "How does membership dental care differ from NHS dental care?",
    answer:
      "Membership care provides unlimited access to all treatments, no waiting lists, priority emergency appointments, and predictable monthly costs. NHS care involves band charges, waiting lists, and treatment limitations based on government funding availability.",
  },
  {
    question: "Can I transfer from NHS dental care to membership care?",
    answer:
      "Yes, we can request your NHS dental records from Dental Health Centre and continue any ongoing treatments. The transition is seamless, and you'll immediately benefit from membership privileges including priority booking and emergency care.",
  },
  {
    question:
      "What treatments are included in membership that might not be available on NHS?",
    answer:
      "Membership includes cosmetic treatments like teeth whitening and bonding, premium materials for fillings and crowns, advanced periodontal treatments, and comprehensive preventive care - all without NHS funding restrictions or waiting lists.",
  },
];

export default function DentalHealthCentreNottinghamAlternativePage() {
  return (
    <div className="min-h-screen bg-pear-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-secondary py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">
              Dental Health Centre Alternative
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Looking for an Alternative to Dental Health Centre Nottingham?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Break free from NHS restrictions and waiting lists with Pear Tree
              Dental's membership model in Burton Joyce. Experience immediate
              access to all treatments, transparent pricing, and freedom from
              bureaucratic limitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent-gold hover:bg-accent-gold/90 text-primary"
              >
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0115 931 2935
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/dental-health-centre-nottingham-reviews-nottingham">
                  Read Reviews Comparison
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Seek Alternatives to NHS */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-12 text-primary">
              Common Reasons People Seek Alternatives to NHS Dental Care
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {(reasonsToSwitch || []).map((reason) => (
                <Card
                  key={reason.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <reason.icon className="h-8 w-8 text-accent-gold" />
                      <CardTitle className="text-xl heading-serif">
                        {reason.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      {reason.description}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {reason.benefit}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NHS vs Membership Comparison */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold mb-4 text-primary">
                NHS vs Membership Care: Complete Freedom Comparison
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding the fundamental differences between NHS
                restrictions and the complete freedom of membership-based dental
                care.
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="heading-serif text-2xl text-center">
                  Side-by-Side Freedom Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 heading-serif font-semibold">
                          Aspect
                        </th>
                        <th className="text-center py-3 px-4 heading-serif font-semibold text-muted-foreground">
                          NHS Care
                        </th>
                        <th className="text-center py-3 px-4 heading-serif font-semibold text-primary">
                          Membership Care
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(nhsVsMembership || []).map((item, index) => (
                        <tr
                          key={index}
                          className="border-b hover:bg-muted/50 transition-colors"
                        >
                          <td className="py-4 px-4 font-medium">
                            {item.aspect}
                          </td>
                          <td className="py-4 px-4 text-center text-muted-foreground">
                            {item.nhs}
                          </td>
                          <td className="py-4 px-4 text-center font-medium text-primary">
                            {item.membership}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Pear Tree Different */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold mb-4 text-primary">
                Pear Tree Dental: Complete Freedom from NHS Limitations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience dental care without the constraints of NHS funding,
                waiting lists, or restricted treatment options.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-accent-gold border-accent-gold">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 mx-auto text-accent-gold mb-4" />
                  <CardTitle className="heading-serif">
                    No NHS Restrictions
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Access all treatments without waiting for NHS approval or
                    funding limitations.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• All cosmetic treatments available</li>
                    <li>• Premium materials included</li>
                    <li>• No treatment rationing</li>
                    <li>• Advanced procedures available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary">
                <CardHeader className="text-center">
                  <CreditCard className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="heading-serif">
                    Transparent Membership Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Simple monthly membership from £8.99 covers everything - no
                    NHS bands or surprise charges.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• No consultation fees</li>
                    <li>• Predictable monthly costs</li>
                    <li>• Family discounts available</li>
                    <li>• Emergency care included</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader className="text-center">
                  <CalendarDays className="h-12 w-12 mx-auto text-green-600 mb-4" />
                  <CardTitle className="heading-serif">
                    Immediate Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Same-day emergency appointments and priority booking without
                    NHS waiting lists.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Same-day emergency care</li>
                    <li>• Priority member booking</li>
                    <li>• No months-long waiting</li>
                    <li>• Immediate pain relief</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Switch from NHS */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-12 text-primary">
              Breaking Free from NHS Limitations is Simple
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(switchingProcess || []).map((step, index) => (
                <Card key={step.step} className="text-center relative">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent-gold text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg heading-serif">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                  {index < switchingProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-primary/5 border-primary p-6">
                <h3 className="heading-serif text-xl font-semibold mb-4">
                  Ready to Break Free from NHS Restrictions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book your consultation today and discover the freedom of
                  membership-based dental care without NHS limitations, waiting
                  lists, or restricted treatment options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent-gold hover:bg-accent-gold/90 text-primary"
                  >
                    <Link href="tel:01159312935">
                      <Phone className="h-5 w-5 mr-2" />
                      Call: 0115 931 2935
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/membership">View Membership Plans</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-8 text-primary">
              Frequently Asked Questions About Breaking Free from NHS
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {(faqs || []).map((faq, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 py-2 bg-card"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="heading-serif text-xl font-semibold mb-4">
                Quick Answers:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-1">🚫 No NHS Waiting</h4>
                  <p className="text-sm text-muted-foreground">
                    Immediate access to all treatments
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">💷 Simple Pricing</h4>
                  <p className="text-sm text-muted-foreground">
                    Membership from £10.95/month
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">🎯 All Treatments</h4>
                  <p className="text-sm text-muted-foreground">
                    No NHS funding restrictions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">📍 Burton Joyce</h4>
                  <p className="text-sm text-muted-foreground">
                    Modern practice, free parking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold mb-6">
              Experience Complete Freedom from NHS Limitations
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of patients who've discovered the freedom of
              membership-based care with immediate access, transparent pricing,
              and all treatments available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Break Free Today
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/membership">View Freedom Plans</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Burton Joyce, Nottinghamshire</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>0115 931 2935</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>No NHS restrictions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
