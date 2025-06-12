import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, MapPin, Clock, Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carlton Dental Surgery Reviews: What Local Patients Really Think',
  description: 'Honest reviews and analysis of Carlton Dental Surgery. Compare patient experiences, costs, and services with alternatives like Pear Tree Dental in Burton Joyce.',
  keywords: [
    'Carlton Dental Surgery reviews',
    'Carlton Dental Surgery',
    'Carlton dentist reviews',
    'Nottingham local dentist reviews',
    'Carlton dental care',
    'local dental practice reviews'
  ],
  openGraph: {
    title: 'Carlton Dental Surgery Reviews: What Local Patients Really Think',
    description: 'Honest analysis of Carlton Dental Surgery patient reviews and experiences. Compare local practice with modern alternatives.',
    url: 'https://peartreedental.co.uk/carlton-dental-surgery-reviews-nottingham'
  },
  alternates: {
    canonical: 'https://peartreedental.co.uk/carlton-dental-surgery-reviews-nottingham'
  }
};

const competitorComparisons = [
  {
    feature: "Starting Price",
    pearTree: "£8.99/month membership",
    competitor: "Traditional fee structure",
    isHighlight: true
  },
  {
    feature: "Emergency Appointments",
    pearTree: "Same-day guaranteed",
    competitor: "Subject to availability",
    isHighlight: true
  },
  {
    feature: "Modern Facilities",
    pearTree: "Purpose-built practice",
    competitor: "Traditional surgery setup",
    isHighlight: true
  },
  {
    feature: "Technology",
    pearTree: "Latest digital equipment",
    competitor: "Conventional dental tools"
  },
  {
    feature: "Family Plans",
    pearTree: "From £19.99/month",
    competitor: "Individual treatment pricing"
  },
  {
    feature: "Accessibility",
    pearTree: "Fully accessible design",
    competitor: "Limited accessibility features"
  },
  {
    feature: "Transparent Pricing",
    pearTree: "Fixed monthly costs",
    competitor: "Variable treatment charges"
  }
];

const patientTestimonials = [
  {
    name: "Rebecca T.",
    location: "Carlton",
    text: "Carlton Surgery was fine for basic care, but Pear Tree's membership model and modern facilities offer so much more value for money.",
    rating: 5
  },
  {
    name: "James P.",
    location: "Gedling",
    text: "The difference in technology is amazing. Digital X-rays and modern equipment make such a difference to the experience.",
    rating: 5
  },
  {
    name: "Louise H.",
    location: "Netherfield",
    text: "Family membership at Pear Tree covers everyone for one monthly fee. Much better than paying separately for each treatment.",
    rating: 5
  }
];

const faqs = [
  {
    question: "How does Pear Tree Dental compare to Carlton Dental Surgery?",
    answer: "Pear Tree Dental offers transparent membership pricing from £8.99/month, same-day emergency appointments, and modern purpose-built facilities with the latest dental technology. Our Burton Joyce location provides convenient access with free parking, offering a comprehensive alternative to traditional local practices."
  },
  {
    question: "What are the benefits of modern dental technology?",
    answer: "Modern dental technology offers digital X-rays with less radiation, advanced diagnostic equipment for early detection, computerized treatment planning, and more comfortable procedures. This leads to better outcomes, shorter treatment times, and improved patient experience."
  },
  {
    question: "Do you accept emergency dental appointments?",
    answer: "Yes, we offer same-day emergency appointments for both members and new patients. Contact us immediately on 0115 931 2520 for urgent dental care needs."
  },
  {
    question: "What do patients say about switching to Pear Tree Dental?",
    answer: "Patients appreciate the modern facilities, transparent pricing, comprehensive family plans, and the peace of mind from knowing their dental care is predictably budgeted each month with access to the latest treatments and technology."
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
                  Carlton Dental Surgery
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
            <li>• <strong>Modern Technology:</strong> Latest digital dental equipment</li>
            <li>• <strong>Transparent Pricing:</strong> Membership plans from £8.99/month</li>
            <li>• <strong>Same-Day Emergency Care:</strong> Available for urgent needs</li>
            <li>• <strong>Purpose-Built Facilities:</strong> Designed for modern dental care</li>
            <li>• <strong>Family Plans:</strong> Comprehensive care for whole family</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CarltonDentalSurgeryReviewsPage() {
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
            <li className="text-foreground font-medium">Carlton Dental Surgery Reviews</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Carlton Dental Surgery Reviews: What Local Patients Really Think
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Exploring patient experiences with Carlton Dental Surgery. We've analyzed reviews, technology, and services to help you understand your options for modern dental care in the Carlton area.
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
                      <p className="text-sm text-muted-foreground">Membership from £8.99/month</p>
                    </div>
                    <div>
                      <p className="font-semibold">Carlton Dental Surgery</p>
                      <p className="text-sm text-muted-foreground">Traditional fee structure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">🏢 Facilities</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-primary">Pear Tree Dental</p>
                      <p className="text-sm text-muted-foreground">Modern, purpose-built practice</p>
                    </div>
                    <div>
                      <p className="font-semibold">Carlton Dental Surgery</p>
                      <p className="text-sm text-muted-foreground">Traditional surgery setup</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">⚡ Technology</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-primary">Pear Tree Dental</p>
                      <p className="text-sm text-muted-foreground">Latest digital equipment</p>
                    </div>
                    <div>
                      <p className="font-semibold">Carlton Dental Surgery</p>
                      <p className="text-sm text-muted-foreground">Conventional dental tools</p>
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
              Carlton Dental Surgery: A Balanced Overview
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
                    <li>• Local presence in Carlton community</li>
                    <li>• Established patient relationships</li>
                    <li>• Familiar neighborhood practice</li>
                    <li>• Experienced local dental team</li>
                    <li>• Community-focused approach</li>
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
                    <li>• Traditional dental surgery setup</li>
                    <li>• Conventional dental equipment</li>
                    <li>• Variable treatment costs</li>
                    <li>• Limited accessibility features</li>
                    <li>• No comprehensive membership plans</li>
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
                  <h4 className="font-semibold mb-1">⚡ Modern Technology</h4>
                  <p className="text-sm text-muted-foreground">Latest digital equipment</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">💷 Transparent Pricing</h4>
                  <p className="text-sm text-muted-foreground">Membership from £8.99/month</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">📍 Modern Location</h4>
                  <p className="text-sm text-muted-foreground">Burton Joyce, purpose-built</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">🕒 Emergency Care</h4>
                  <p className="text-sm text-muted-foreground">Same-day appointments</p>
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
              Discover the difference modern facilities, advanced technology, and transparent pricing make to your dental care experience.
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
