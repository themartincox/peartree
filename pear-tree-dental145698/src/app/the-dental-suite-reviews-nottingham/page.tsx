import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, MapPin, Clock, Phone, MessageCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Dental Suite Reviews: What Nottingham Patients Really Think',
  description: 'Honest reviews and analysis of The Dental Suite Nottingham. Compare patient experiences, costs, and services with alternatives like Pear Tree Dental in Burton Joyce.',
  keywords: [
    'The Dental Suite reviews',
    'The Dental Suite Nottingham',
    'Dental Suite patient feedback',
    'Nottingham dentist reviews',
    'The Dental Suite alternative',
    'Pear Tree Dental vs Dental Suite'
  ],
  openGraph: {
    title: 'The Dental Suite Reviews: What Nottingham Patients Really Think',
    description: 'Honest analysis of The Dental Suite patient reviews and experiences. Compare costs and services with Burton Joyce alternatives.',
    url: 'https://peartree.dental/the-dental-suite-reviews-nottingham'
  },
  alternates: {
    canonical: 'https://peartree.dental/the-dental-suite-reviews-nottingham'
  }
};

const competitorComparisons = [
  {
    feature: "Starting Price",
    pearTree: "£10.95/month membership",
    competitor: "Consultation fees vary",
    isHighlight: true
  },
  {
    feature: "Emergency Appointments",
    pearTree: "Same-day guaranteed",
    competitor: "Subject to availability",
    isHighlight: true
  },
  {
    feature: "Parking",
    pearTree: "Free on-site",
    competitor: "City center parking fees",
    isHighlight: true
  },
  {
    feature: "Location",
    pearTree: "Burton Joyce (easy access)",
    competitor: "Nottingham city center"
  },
  {
    feature: "Weekend Hours",
    pearTree: "Available",
    competitor: "Limited"
  },
  {
    feature: "Family Plans",
    pearTree: "From £19.99/month",
    competitor: "Individual pricing"
  },
  {
    feature: "Transparent Pricing",
    pearTree: "Fixed monthly costs",
    competitor: "Varies by treatment"
  }
];

const patientTestimonials = [
  {
    name: "Sarah M.",
    location: "Gedling",
    text: "Switched from city center practice after parking became too expensive. Love the membership model - no surprise bills!",
    rating: 5
  },
  {
    name: "David R.",
    location: "Carlton",
    text: "Same-day emergency appointment saved me when I chipped a tooth. Much faster than my previous dentist.",
    rating: 5
  },
  {
    name: "Lisa T.",
    location: "Burton Joyce",
    text: "Finally found a practice that's transparent about costs upfront. The monthly membership gives me peace of mind.",
    rating: 5
  }
];

const faqs = [
  {
    question: "How does Pear Tree Dental compare to The Dental Suite?",
    answer: "Pear Tree Dental offers transparent membership pricing from £10.95/month, same-day emergency appointments, and modern facilities in Burton Joyce with free parking. Our membership model provides predictable costs and comprehensive care, offering an alternative to traditional fee-per-service practices."
  },
  {
    question: "What are the benefits of dental membership plans?",
    answer: "Membership plans provide predictable monthly costs, no surprise consultation fees, priority emergency care, family discounts, and comprehensive coverage including preventive care and treatment discounts. You avoid NHS waiting lists without premium private fees."
  },
  {
    question: "Do you accept emergency dental appointments?",
    answer: "Yes, we offer same-day emergency appointments for both members and new patients. Contact us immediately on 0115 931 2520 for urgent dental care needs."
  },
  {
    question: "What do patients say about switching from The Dental Suite to Pear Tree Dental?",
    answer: "Patients appreciate our transparent pricing, reduced waiting times, modern facilities, and the convenience of our Burton Joyce location with free parking. Many highlight the peace of mind from knowing their monthly costs upfront."
  }
];

function ComparisonTable() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="heading-serif text-2xl text-center">
          At a Glance Comparison
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Compare key features and benefits between practices
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 heading-serif font-semibold">Feature</th>
                <th className="text-center py-3 px-4 heading-serif font-semibold text-primary">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="h-4 w-4 fill-accent-gold text-accent-gold" />
                    <span>Pear Tree Dental</span>
                  </div>
                </th>
                <th className="text-center py-3 px-4 heading-serif font-semibold text-muted-foreground">
                  The Dental Suite
                </th>
              </tr>
            </thead>
            <tbody>
              {competitorComparisons.map((item, index) => (
                <tr
                  key={`comparison-${index}`}
                  className={`border-b hover:bg-muted/50 transition-colors ${
                    item.isHighlight ? 'bg-accent-gold/10' : ''
                  }`}
                >
                  <td className="py-4 px-4 font-medium">
                    {item.feature}
                    {item.isHighlight && (
                      <Star className="h-3 w-3 inline ml-1 fill-accent-gold text-accent-gold" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center font-medium">
                    {item.pearTree}
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    {item.competitor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-accent-gold/10 rounded-lg">
          <h3 className="heading-serif font-semibold mb-2">Key Advantages Summary:</h3>
          <ul className="text-sm space-y-1">
            <li>• <strong>Transparent Pricing:</strong> Membership plans from £10.95/month</li>
            <li>• <strong>Same-Day Emergency Care:</strong> Available for urgent needs</li>
            <li>• <strong>Modern Facilities:</strong> State-of-the-art equipment in Burton Joyce</li>
            <li>• <strong>Free Parking:</strong> No city center parking fees</li>
            <li>• <strong>Family Plans:</strong> Affordable care for whole family from £19.99/month</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TheDentalSuiteReviewsPage() {
  return (
    <div className="min-h-screen bg-pear-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-secondary py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">The Dental Suite Reviews</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              The Dental Suite Reviews: What Nottingham Patients Really Think
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Exploring patient experiences with The Dental Suite in Nottingham. We've analyzed reviews, costs, and services to help you make an informed choice about your dental care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-gold hover:bg-accent-gold/90 text-primary">
                <Link href="tel:01159312520">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 0115 931 2520
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/membership">
                  Compare Membership Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Summary */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-8 text-primary">
              Quick Comparison Summary
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">💷 Pricing Model</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-primary">Pear Tree Dental</p>
                      <p className="text-sm text-muted-foreground">Membership from £10.95/month</p>
                    </div>
                    <div>
                      <p className="font-semibold">The Dental Suite</p>
                      <p className="text-sm text-muted-foreground">Fee-per-service model</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">🚗 Location & Parking</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-primary">Pear Tree Dental</p>
                      <p className="text-sm text-muted-foreground">Burton Joyce, free parking</p>
                    </div>
                    <div>
                      <p className="font-semibold">The Dental Suite</p>
                      <p className="text-sm text-muted-foreground">City center, paid parking</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">⚡ Emergency Care</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-primary">Pear Tree Dental</p>
                      <p className="text-sm text-muted-foreground">Same-day appointments</p>
                    </div>
                    <div>
                      <p className="font-semibold">The Dental Suite</p>
                      <p className="text-sm text-muted-foreground">Subject to availability</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Balanced Analysis Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold mb-8 text-primary">
              The Dental Suite: A Balanced Overview
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Recognized Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Established practice with 1000+ reviews</li>
                    <li>• Central Nottingham location</li>
                    <li>• Comprehensive range of treatments</li>
                    <li>• Experienced dental team</li>
                    <li>• Modern dental equipment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Common Patient Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Variable consultation and treatment costs</li>
                    <li>• City center parking challenges and fees</li>
                    <li>• Appointment availability during busy periods</li>
                    <li>• Less predictable monthly costs</li>
                    <li>• Limited weekend emergency coverage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable />
        </div>
      </section>

      {/* Patient Success Stories */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-12 text-primary">
              Why Patients Choose Pear Tree Dental
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {patientTestimonials.map((testimonial, index) => (
                <Card key={`testimonial-${index}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={`star-${i}`} className="h-4 w-4 fill-accent-gold text-accent-gold" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.name} - {testimonial.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.text}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-8 text-primary">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 py-2"
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
              <h3 className="heading-serif text-xl font-semibold mb-4">Quick Answers:</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-1">🕒 Emergency Care</h4>
                  <p className="text-sm text-muted-foreground">Same-day appointments available</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">💷 Pricing</h4>
                  <p className="text-sm text-muted-foreground">Membership from £10.95/month</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">📍 Location</h4>
                  <p className="text-sm text-muted-foreground">Burton Joyce, easy access</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">🚗 Parking</h4>
                  <p className="text-sm text-muted-foreground">Free on-site parking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold mb-6">
              Ready to Experience Modern Dental Care?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover transparent pricing, same-day emergency care, and a modern approach to dentistry in Burton Joyce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="tel:01159312520">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0115 931 2520
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/membership">
                  View Membership Plans
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Burton Joyce, Nottinghamshire</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>0115 931 2520</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
