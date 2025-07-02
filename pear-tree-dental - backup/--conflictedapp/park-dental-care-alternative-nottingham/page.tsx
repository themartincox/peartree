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
  Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Looking for an Alternative to Park Dental Care? Consider Pear Tree Dental',
  description: 'Seeking an alternative to Park Dental Care in Nottingham? Discover Pear Tree Dental in Burton Joyce - modern facilities, transparent pricing, and free parking.',
  keywords: [
    'Park Dental Care alternative',
    'alternative to Park Dental Care',
    'Pear Tree Dental vs Park Dental',
    'Burton Joyce dentist',
    'Nottingham dentist alternative',
    'modern dental facilities Nottingham'
  ],
  openGraph: {
    title: 'Looking for an Alternative to Park Dental Care? Consider Pear Tree Dental',
    description: 'Modern dental care alternative in Burton Joyce with state-of-the-art facilities and transparent membership pricing.',
    url: 'https://peartreedental.co.uk/park-dental-care-alternative-nottingham'
  },
  alternates: {
    canonical: 'https://peartreedental.co.uk/park-dental-care-alternative-nottingham'
  }
};

const reasonsToSwitch = [
  {
    icon: Building2,
    title: "Modern Facilities",
    description: "Purpose-built practice with state-of-the-art equipment and technology",
    benefit: "Latest dental technology for better treatment outcomes"
  },
  {
    icon: Car,
    title: "Easy Access & Parking",
    description: "Burton Joyce location with free on-site parking, avoiding city center hassles",
    benefit: "Save time and money on every visit"
  },
  {
    icon: CreditCard,
    title: "Predictable Costs",
    description: "Monthly membership eliminates surprise bills and consultation fees",
    benefit: "Budget confidently for your dental care"
  },
  {
    icon: CalendarDays,
    title: "Better Availability",
    description: "Same-day emergency appointments and priority booking for members",
    benefit: "Get the care you need when you need it"
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
    description: "We'll request your dental records from Park Dental Care"
  },
  {
    step: "3",
    title: "Continue Care",
    description: "Seamless transition with a personalized treatment plan"
  },
  {
    step: "4",
    title: "Enjoy Benefits",
    description: "Experience modern dentistry with transparent pricing"
  }
];

const faqs = [
  {
    question: "Why would someone choose Pear Tree Dental as an alternative to Park Dental Care?",
    answer: "Common reasons include seeking modern facilities, easier parking, transparent pricing, or accessibility features that may be limited in historic buildings. Our purpose-built practice offers state-of-the-art technology and equipment."
  },
  {
    question: "How do your facilities compare to historic dental practices?",
    answer: "Our modern, purpose-built practice is designed specifically for 21st-century dentistry. We have the latest equipment, better accessibility, climate control, and facilities designed around patient comfort and clinical efficiency."
  },
  {
    question: "Can I transfer my dental records from Park Dental Care?",
    answer: "Yes, we can request your dental records from Park Dental Care and continue any ongoing treatments. Our team will review your history and create a seamless transition plan."
  },
  {
    question: "What are the benefits of your membership plans?",
    answer: "Our membership plans from £10.95/month provide predictable costs, no surprise consultation fees, priority emergency care, family discounts, and comprehensive coverage including preventive care and treatment discounts."
  }
];

export default function ParkDentalCareAlternativePage() {
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
            <li className="text-foreground font-medium">Park Dental Care Alternative</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Looking for an Alternative to Park Dental Care?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Consider Pear Tree Dental in Burton Joyce - offering modern facilities, transparent membership pricing,
              and convenient parking, without the constraints of historic buildings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-gold hover:bg-accent-gold/90 text-primary">
                <Link href="tel:01159312520">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0115 931 2520
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/park-dental-care-reviews-nottingham">
                  Read Reviews Comparison
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Seek Alternatives */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-12 text-primary">
              Common Reasons People Seek Dental Alternatives
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

      {/* What Makes Pear Tree Different */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold mb-4 text-primary">
                Pear Tree Dental: A Modern Alternative
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Purpose-built for modern dentistry, free from the constraints and limitations
                that come with historic building conversions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-accent-gold/10 border-accent-gold/20">
                <CardHeader className="text-center">
                  <Building2 className="h-12 w-12 mx-auto text-accent-gold mb-4" />
                  <CardTitle className="heading-serif">Modern, Purpose-Built Facilities</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Designed specifically for 21st-century dentistry with the latest equipment and technology.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• State-of-the-art dental equipment</li>
                    <li>• Full accessibility compliance</li>
                    <li>• Climate-controlled environment</li>
                    <li>• Modern sterilization systems</li>
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
                    Know exactly what you'll pay each month with our membership plans starting from £10.95.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• No surprise consultation fees</li>
                    <li>• Predictable monthly budgeting</li>
                    <li>• Family discounts included</li>
                    <li>• Emergency care priority</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader className="text-center">
                  <Car className="h-12 w-12 mx-auto text-green-600 mb-4" />
                  <CardTitle className="heading-serif">Convenient Access & Parking</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Burton Joyce location with easy access and abundant free parking.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Free on-site parking</li>
                    <li>• Easy road access</li>
                    <li>• No city center traffic</li>
                    <li>• Disabled parking available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Modern vs Historic Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-12 text-primary">
              Modern Practice Advantages
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Purpose-Built Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Designed for optimal clinical workflow</li>
                    <li>• Latest equipment integration</li>
                    <li>• Full accessibility compliance</li>
                    <li>• Modern ventilation and infection control</li>
                    <li>• Dedicated spaces for different treatments</li>
                    <li>• Patient comfort and privacy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700 flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    Historic Building Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Equipment placement constraints</li>
                    <li>• Limited accessibility modifications</li>
                    <li>• Older electrical and plumbing systems</li>
                    <li>• Restricted renovation possibilities</li>
                    <li>• Space utilization challenges</li>
                    <li>• Parking and access limitations</li>
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
                  Ready to Make the Switch?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book your consultation today and discover why patients are choosing Pear Tree Dental
                  as their preferred alternative to traditional dental practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent-gold hover:bg-accent-gold/90 text-primary">
                    <Link href="tel:01159312520">
                      <Phone className="h-5 w-5 mr-2" />
                      Call: 0115 931 2520
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
                  <h4 className="font-semibold mb-1">🏢 Facilities</h4>
                  <p className="text-sm text-muted-foreground">Purpose-built for modern dentistry</p>
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

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-serif text-3xl font-bold mb-6">
              Experience the Benefits of Modern Dentistry
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join patients who've discovered the advantages of a purpose-built practice with
              transparent pricing, advanced technology, and convenient access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="tel:01159312520">
                  <Phone className="h-5 w-5 mr-2" />
                  Book Your Visit Today
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
                <span>0115 931 2520</span>
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
