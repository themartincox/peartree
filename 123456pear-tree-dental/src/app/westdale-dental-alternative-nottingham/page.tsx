import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  Car,
  CreditCard,
  CalendarDays,
  Users,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Looking for an Alternative to Westdale Dental? Consider Pear Tree Dental',
  description: 'Seeking an alternative to Westdale Dental Nottingham? Discover Pear Tree Dental in Burton Joyce - modern facilities, transparent pricing, and comprehensive membership plans.',
  keywords: [
    'Westdale Dental alternative',
    'alternative to Westdale Dental',
    'Westdale Dental Nottingham alternative',
    'Burton Joyce dentist',
    'modern dental practice Nottingham',
    'dental membership plans'
  ],
  openGraph: {
    title: 'Looking for an Alternative to Westdale Dental? Consider Pear Tree Dental',
    description: 'Modern dental care alternative with state-of-the-art facilities and transparent membership pricing.',
    url: 'https://peartree.dental/westdale-dental-alternative-nottingham'
  },
  alternates: {
    canonical: 'https://peartree.dental/westdale-dental-alternative-nottingham'
  }
};

const reasonsToSwitch = [
  {
    icon: Zap,
    title: "Modern Technology & Facilities",
    description: "State-of-the-art equipment and purpose-built practice designed for 21st-century dentistry",
    benefit: "Better treatment outcomes with latest dental innovations"
  },
  {
    icon: CreditCard,
    title: "Transparent Membership Pricing",
    description: "Simple monthly membership eliminates unpredictable treatment costs",
    benefit: "Budget confidently with predictable monthly expenses"
  },
  {
    icon: Car,
    title: "Convenient Access & Parking",
    description: "Burton Joyce location with free on-site parking and easy access",
    benefit: "Save time and money on every dental visit"
  },
  {
    icon: Users,
    title: "Comprehensive Family Care",
    description: "Family membership plans and personalized attention for all ages",
    benefit: "One simple plan covers your whole family's dental needs"
  }
];

const switchingProcess = [
  {
    step: "1",
    title: "Book Consultation",
    description: "Schedule your first appointment to see our modern facilities"
  },
  {
    step: "2",
    title: "Transfer Records",
    description: "We'll request your dental records from Westdale Dental"
  },
  {
    step: "3",
    title: "Choose Membership",
    description: "Select the membership plan that suits your needs"
  },
  {
    step: "4",
    title: "Enjoy Modern Care",
    description: "Experience advanced dentistry with transparent pricing"
  }
];

const traditionalVsModern = [
  {
    aspect: "Pricing Model",
    traditional: "Pay-per-treatment charges",
    modern: "Transparent membership plans",
    advantage: "modern"
  },
  {
    aspect: "Technology",
    traditional: "Traditional dental equipment",
    modern: "Latest digital technology",
    advantage: "modern"
  },
  {
    aspect: "Emergency Care",
    traditional: "Subject to availability",
    modern: "Guaranteed same-day access",
    advantage: "modern"
  },
  {
    aspect: "Facilities",
    traditional: "Traditional practice setup",
    modern: "Purpose-built modern environment",
    advantage: "modern"
  },
  {
    aspect: "Cost Predictability",
    traditional: "Variable treatment costs",
    modern: "Fixed monthly membership fee",
    advantage: "modern"
  }
];

const faqs = [
  {
    question: "Why would someone choose Pear Tree Dental as an alternative to Westdale Dental?",
    answer: "Common reasons include seeking modern facilities, transparent pricing, latest dental technology, convenient parking, and a practice designed specifically for contemporary dental care with comprehensive membership benefits."
  },
  {
    question: "How do modern dental facilities benefit patients?",
    answer: "Modern facilities offer the latest equipment for better treatment outcomes, improved comfort, efficient appointments, and a practice designed around patient experience rather than adapting older buildings."
  },
  {
    question: "Can I transfer my dental records from Westdale Dental?",
    answer: "Yes, we can request your dental records from Westdale Dental and continue any ongoing treatments. Our team will create a seamless transition plan using our modern facilities and technology."
  },
  {
    question: "What are the benefits of membership plans over traditional dental fees?",
    answer: "Membership plans from £10.95/month provide predictable costs, no surprise consultation fees, priority emergency care, family discounts, and comprehensive coverage including preventive care and treatment discounts."
  }
];

export default function WestdaleDentalAlternativePage() {
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
            <li className="text-foreground font-medium">Westdale Dental Alternative</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Looking for an Alternative to Westdale Dental?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Consider Pear Tree Dental in Burton Joyce - offering modern facilities, state-of-the-art technology,
              and transparent membership pricing designed for 21st-century dental care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-gold hover:bg-accent-gold/90 text-primary">
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0115 931 2935
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/westdale-dental-reviews-nottingham">
                  Read Reviews Comparison
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Seek Modern Alternatives */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-12 text-primary">
              Common Reasons People Seek Modern Dental Alternatives
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {reasonsToSwitch.map((reason) => (
                <Card key={reason.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <reason.icon className="h-8 w-8 text-accent-gold" />
                      <CardTitle className="text-xl heading-serif">{reason.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{reason.description}</p>
                    <p className="text-sm font-medium text-primary">{reason.benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs Modern Comparison */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold mb-4 text-primary">
                Traditional vs Modern Dental Practice
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding the differences between traditional dental practices
                and modern, purpose-built practices designed for today's patients.
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="heading-serif text-2xl text-center">
                  Practice Approach Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 heading-serif font-semibold">Aspect</th>
                        <th className="text-center py-3 px-4 heading-serif font-semibold text-muted-foreground">Traditional Practice</th>
                        <th className="text-center py-3 px-4 heading-serif font-semibold text-primary">
                          Modern Practice
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {traditionalVsModern.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="py-4 px-4 font-medium">{item.aspect}</td>
                          <td className="py-4 px-4 text-center text-muted-foreground">{item.traditional}</td>
                          <td className="py-4 px-4 text-center font-medium text-primary">{item.modern}</td>
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
                Pear Tree Dental: A Modern Alternative
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience dental care in a practice designed specifically for modern dentistry,
                with transparent pricing and patient-focused amenities.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-accent-gold/10 border-accent-gold/20">
                <CardHeader className="text-center">
                  <Zap className="h-12 w-12 mx-auto text-accent-gold mb-4" />
                  <CardTitle className="heading-serif">Advanced Technology</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    State-of-the-art digital equipment and modern treatment techniques for superior care.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Digital X-rays and imaging</li>
                    <li>• Advanced sterilization systems</li>
                    <li>• Modern treatment suites</li>
                    <li>• Latest dental innovations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="text-center">
                  <CreditCard className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="heading-serif">Transparent Membership Pricing</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Simple monthly membership from £8.99 with no surprise bills or hidden consultation fees.
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
                  <Car className="h-12 w-12 mx-auto text-green-600 mb-4" />
                  <CardTitle className="heading-serif">Convenient Location & Access</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Burton Joyce location with easy access and abundant free parking for all patients.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Free on-site parking</li>
                    <li>• Easy suburban access</li>
                    <li>• Disabled parking available</li>
                    <li>• Modern, accessible facilities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Switch */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-12 text-primary">
              Making the Switch is Simple
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {switchingProcess.map((step, index) => (
                <Card key={step.step} className="text-center relative">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent-gold text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg heading-serif">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
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
              <Card className="bg-primary/5 border-primary/20 p-6">
                <h3 className="heading-serif text-xl font-semibold mb-4">
                  Ready to Experience Modern Dentistry?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book your consultation today and discover the difference modern facilities and
                  transparent pricing make to your dental care experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent-gold hover:bg-accent-gold/90 text-primary">
                    <Link href="tel:01159312935">
                      <Phone className="h-5 w-5 mr-2" />
                      Call: 0115 931 2935
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/membership">
                      View Membership Plans
                    </Link>
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
              Frequently Asked Questions About Switching
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
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
              <h3 className="heading-serif text-xl font-semibold mb-4">Quick Answers:</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-1">⚡ Modern Technology</h4>
                  <p className="text-sm text-muted-foreground">Latest digital dental equipment</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">💷 Transparent Pricing</h4>
                  <p className="text-sm text-muted-foreground">Membership from £10.95/month</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">📍 Convenient Location</h4>
                  <p className="text-sm text-muted-foreground">Burton Joyce, easy access</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">🚗 Free Parking</h4>
                  <p className="text-sm text-muted-foreground">On-site parking included</p>
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
              Experience the Future of Dental Care
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join patients who've discovered the advantages of modern dental care with
              advanced technology, transparent pricing, and facilities designed for your comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="tel:01159312935">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Your Modern Experience
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/membership">
                  Explore Membership Options
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
                <span>0115 931 2935</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Same-day emergencies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
