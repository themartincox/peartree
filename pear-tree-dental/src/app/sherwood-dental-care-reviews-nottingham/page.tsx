import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, MapPin, Clock, Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sherwood Dental Care Reviews: What Nottingham Patients Really Think',
  description: 'Honest reviews and analysis of Sherwood Dental Care Nottingham. Compare patient experiences, costs, and services with alternatives like Pear Tree Dental in Burton Joyce.',
  keywords: [
    'Sherwood Dental Care reviews',
    'Sherwood Dental Care Nottingham',
    'Sherwood Dental patient feedback',
    'Nottingham dentist reviews',
    'Sherwood Dental Care alternative',
    'NHS vs private dental care'
  ],
  openGraph: {
    title: 'Sherwood Dental Care Reviews: What Nottingham Patients Really Think',
    description: 'Honest analysis of Sherwood Dental Care patient reviews and experiences. Compare NHS and private options with Burton Joyce alternatives.',
    url: 'https://peartreedental.co.uk/sherwood-dental-care-reviews-nottingham'
  },
  alternates: {
    canonical: 'https://peartreedental.co.uk/sherwood-dental-care-reviews-nottingham'
  }
};

const competitorComparisons = [
  {
    feature: "Starting Price",
    pearTree: "£8.99/month membership",
    competitor: "NHS charges + private fees",
    isHighlight: true
  },
  {
    feature: "Emergency Appointments",
    pearTree: "Same-day guaranteed",
    competitor: "NHS waiting lists apply",
    isHighlight: true
  },
  {
    feature: "Waiting Times",
    pearTree: "Priority booking for members",
    competitor: "NHS appointment delays",
    isHighlight: true
  },
  {
    feature: "Payment Model",
    pearTree: "Predictable monthly costs",
    competitor: "NHS charges + private top-ups"
  },
  {
    feature: "Treatment Choice",
    pearTree: "Full range always available",
    competitor: "Limited by NHS funding"
  },
  {
    feature: "Family Plans",
    pearTree: "From £19.99/month",
    competitor: "Individual NHS registration"
  },
  {
    feature: "Modern Equipment",
    pearTree: "Latest technology",
    competitor: "NHS funding dependent"
  }
];

const patientTestimonials = [
  {
    name: "Michael T.",
    location: "Sherwood",
    text: "Tired of NHS waiting lists and limited treatment options. The membership model at Pear Tree gives me access to everything I need when I need it.",
    rating: 5
  },
  {
    name: "Karen S.",
    location: "Mapperley",
    text: "Was getting surprise bills on top of NHS charges at Sherwood Dental. Much prefer knowing exactly what I'll pay each month.",
    rating: 5
  },
  {
    name: "Steve B.",
    location: "Arnold",
    text: "Couldn't get the cosmetic work I wanted on NHS. Membership at Pear Tree includes everything - no more two-tier system!",
    rating: 5
  }
];

const faqs = [
  {
    question: "How does Pear Tree Dental compare to Sherwood Dental Care?",
    answer: "Pear Tree Dental offers transparent membership pricing from £8.99/month with no NHS waiting lists or restrictions. Our membership model provides predictable costs, same-day emergency appointments, and access to all treatments without the limitations of NHS funding."
  },
  {
    question: "What's the difference between NHS and membership dental care?",
    answer: "NHS dental care involves band charges, waiting lists, and limited treatment options. Our membership model provides unlimited access to all treatments, no waiting lists, priority emergency care, and predictable monthly costs without surprise bills."
  },
  {
    question: "Do you accept emergency dental appointments?",
    answer: "Yes, we offer same-day emergency appointments for both members and new patients. No need to wait for NHS emergency slots or pay emergency call-out fees - it's included in your membership."
  },
  {
    question: "What do patients say about switching from NHS to membership care?",
    answer: "Patients appreciate the freedom from NHS waiting lists, access to all treatment options, transparent pricing, and the convenience of knowing they can get care when they need it without restrictions."
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
          Compare key features and benefits between care models
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
                  Sherwood Dental Care
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
            <li>• <strong>No NHS Waiting Lists:</strong> Immediate access to care</li>
            <li>• <strong>Transparent Pricing:</strong> Membership plans from £8.99/month</li>
            <li>• <strong>All Treatments Available:</strong> No NHS funding restrictions</li>
            <li>• <strong>Same-Day Emergency Care:</strong> No emergency charges</li>
            <li>• <strong>Modern Facilities:</strong> Latest technology without funding delays</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SherwoodDentalCareReviewsPage() {
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
            <li className="text-foreground font-medium">Sherwood Dental Care Reviews</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Sherwood Dental Care Reviews: What Nottingham Patients Really Think
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Exploring patient experiences with Sherwood Dental Care's NHS and private services. We've analyzed reviews, waiting times, and costs to help you understand your options.
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
                  <CardTitle className="text-lg">💷 Payment Model</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-primary">Pear Tree Dental</p>
                      <p className="text-sm text-muted-foreground">Simple membership from £8.99/month</p>
                    </div>
                    <div>
                      <p className="font-semibold">Sherwood Dental Care</p>
                      <p className="text-sm text-muted-foreground">NHS bands + private top-ups</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">⏰ Waiting Times</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-primary">Pear Tree Dental</p>
                      <p className="text-sm text-muted-foreground">Same-day emergency, priority booking</p>
                    </div>
                    <div>
                      <p className="font-semibold">Sherwood Dental Care</p>
                      <p className="text-sm text-muted-foreground">NHS waiting lists apply</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">🎯 Treatment Access</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-primary">Pear Tree Dental</p>
                      <p className="text-sm text-muted-foreground">All treatments available</p>
                    </div>
                    <div>
                      <p className="font-semibold">Sherwood Dental Care</p>
                      <p className="text-sm text-muted-foreground">NHS restrictions may apply</p>
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
              Sherwood Dental Care: A Balanced Overview
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
                    <li>• Established NHS and private practice</li>
                    <li>• Experienced dental team</li>
                    <li>• Mix of NHS and private treatment options</li>
                    <li>• Local Sherwood community presence</li>
                    <li>• Range of dental services available</li>
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
                    <li>• NHS waiting lists for routine appointments</li>
                    <li>• Limited treatment options under NHS funding</li>
                    <li>• Separate charges for NHS and private work</li>
                    <li>• Emergency appointment availability varies</li>
                    <li>• Two-tier system can be confusing</li>
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
                  <h4 className="font-semibold mb-1">⏰ No Waiting Lists</h4>
                  <p className="text-sm text-muted-foreground">Immediate access to care</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">💷 Transparent Pricing</h4>
                  <p className="text-sm text-muted-foreground">Membership from £8.99/month</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">📍 Modern Location</h4>
                  <p className="text-sm text-muted-foreground">Burton Joyce, free parking</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">🎯 All Treatments</h4>
                  <p className="text-sm text-muted-foreground">No NHS restrictions</p>
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
              Ready to Escape NHS Waiting Lists?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover immediate access to all dental treatments with transparent membership pricing
              and no NHS restrictions.
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
