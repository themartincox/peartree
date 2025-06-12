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
  Calendar,
  TreePine,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Looking for an Alternative to City Dental Nottingham? Consider Pear Tree Dental',
  description: 'Seeking an alternative to City Dental Nottingham? Discover Pear Tree Dental in Burton Joyce - suburban tranquility, transparent pricing, and stress-free parking.',
  keywords: [
    'City Dental Nottingham alternative',
    'alternative to City Dental Nottingham',
    'suburban dentist Nottingham',
    'Burton Joyce dentist',
    'city center dentist alternative',
    'dental membership plans Nottingham'
  ],
  openGraph: {
    title: 'Looking for an Alternative to City Dental Nottingham? Consider Pear Tree Dental',
    description: 'Escape city center dental stress with suburban tranquility and transparent membership pricing.',
    url: 'https://peartreedental.co.uk/city-dental-nottingham-alternative-nottingham'
  },
  alternates: {
    canonical: 'https://peartreedental.co.uk/city-dental-nottingham-alternative-nottingham'
  }
};

const reasonsToSwitch = [
  {
    icon: TreePine,
    title: "Suburban Tranquility",
    description: "Escape the stress of city center dental visits with a relaxed suburban environment",
    benefit: "Enjoy a calm, peaceful dental experience away from urban chaos"
  },
  {
    icon: Car,
    title: "Stress-Free Parking",
    description: "Free on-site parking eliminates city center parking fees and search stress",
    benefit: "Save money and time on every dental visit"
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "Simple monthly membership eliminates surprise bills and consultation fees",
    benefit: "Budget confidently with predictable dental costs"
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Smaller suburban practice means more time and attention for each patient",
    benefit: "Experience personalized care without the city center rush"
  }
];

const switchingProcess = [
  {
    step: "1",
    title: "Book Consultation",
    description: "Schedule a visit to experience our suburban tranquility"
  },
  {
    step: "2",
    title: "Transfer Records",
    description: "We'll request your records from City Dental"
  },
  {
    step: "3",
    title: "Choose Membership",
    description: "Select the plan that fits your lifestyle"
  },
  {
    step: "4",
    title: "Enjoy Peaceful Care",
    description: "Experience stress-free suburban dental care"
  }
];

const cityVsSuburban = [
  {
    aspect: "Environment",
    city: "Busy, stressful city center",
    suburban: "Peaceful, relaxed setting",
    advantage: "suburban"
  },
  {
    aspect: "Parking",
    city: "Expensive city center charges",
    suburban: "Free on-site parking",
    advantage: "suburban"
  },
  {
    aspect: "Traffic",
    city: "City center congestion",
    suburban: "Easy suburban access",
    advantage: "suburban"
  },
  {
    aspect: "Pricing Model",
    city: "Fee-per-service charges",
    suburban: "Transparent membership plans",
    advantage: "suburban"
  },
  {
    aspect: "Patient Time",
    city: "Rushed city appointments",
    suburban: "Relaxed, unhurried care",
    advantage: "suburban"
  }
];

const faqs = [
  {
    question: "Why would someone choose Pear Tree Dental as an alternative to City Dental Nottingham?",
    answer: "Common reasons include escaping city center stress, avoiding parking fees, seeking transparent pricing, and preferring a more relaxed, personalized dental experience in a suburban setting with modern facilities."
  },
  {
    question: "What are the advantages of suburban vs city center dental care?",
    answer: "Suburban dental care offers free parking, a relaxed environment, more personalized attention, easier access without traffic stress, and often better value with transparent pricing models like our membership plans."
  },
  {
    question: "Can I transfer my dental records from City Dental Nottingham?",
    answer: "Yes, we can request your dental records from City Dental Nottingham and continue any ongoing treatments. The transition is seamless, and you'll immediately benefit from our suburban environment and membership pricing."
  },
  {
    question: "How does the suburban location affect the quality of care?",
    answer: "Our suburban location allows us to provide more personalized, unhurried care with modern facilities and equipment. You get superior treatment quality without the stress and expense of city center dentistry."
  }
];

export default function CityDentalNottinghamAlternativePage() {
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
            <li className="text-foreground font-medium">City Dental Nottingham Alternative</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Looking for an Alternative to City Dental Nottingham?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Escape the stress of city center dentistry with Pear Tree Dental in Burton Joyce.
              Experience suburban tranquility, free parking, and transparent membership pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-gold hover:bg-accent-gold/90 text-primary">
                <Link href="tel:01159312520">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0115 931 2520
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/city-dental-nottingham-reviews-nottingham">
                  Read Reviews Comparison
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Seek Suburban Alternatives */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-serif text-3xl font-bold text-center mb-12 text-primary">
              Common Reasons People Seek Suburban Dental Alternatives
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

      {/* City vs Suburban Comparison */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-serif text-3xl font-bold mb-4 text-primary">
                City Center vs Suburban Dental Experience
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding the fundamental differences between urban and suburban dental care
                and why many patients are making the switch.
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="heading-serif text-2xl text-center">
                  Environment Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 heading-serif font-semibold">Aspect</th>
                        <th className="text-center py-3 px-4 heading-serif font-semibold text-muted-foreground">City Center</th>
                        <th className="text-center py-3 px-4 heading-serif font-semibold text-primary">
                          Suburban Practice
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cityVsSuburban.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="py-4 px-4 font-medium">{item.aspect}</td>
                          <td className="py-4 px-4 text-center text-muted-foreground">{item.city}</td>
                          <td className="py-4 px-4 text-center font-medium text-primary">{item.suburban}</td>
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
                Pear Tree Dental: Your Suburban Sanctuary
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the peace of suburban dental care with modern facilities,
                transparent pricing, and a genuine focus on your comfort and wellbeing.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-accent-gold/10 border-accent-gold/20">
                <CardHeader className="text-center">
                  <TreePine className="h-12 w-12 mx-auto text-accent-gold mb-4" />
                  <CardTitle className="heading-serif">Peaceful Environment</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Escape the hustle and bustle of city center dentistry in our tranquil suburban setting.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Quiet, relaxed atmosphere</li>
                    <li>• No city center noise or stress</li>
                    <li>• Calming natural surroundings</li>
                    <li>• Unhurried appointment times</li>
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
                    Simple monthly membership from £8.99 with no hidden fees or city center premium charges.
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
                  <CardTitle className="heading-serif">Stress-Free Access</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Free parking and easy suburban access without city center traffic and parking stress.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Abundant free parking</li>
                    <li>• No parking fees or meters</li>
                    <li>• Easy suburban access roads</li>
                    <li>• No city center congestion</li>
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
              Making the Switch to Suburban Care
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
                  Ready to Escape City Center Dental Stress?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book your consultation today and discover the peace and tranquility of suburban dental care
                  with modern facilities, transparent pricing, and genuine personal attention.
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
              Frequently Asked Questions About Suburban Dental Care
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
                  <h4 className="font-semibold mb-1">🌳 Peaceful Setting</h4>
                  <p className="text-sm text-muted-foreground">Suburban tranquility, no city stress</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">💷 Transparent Pricing</h4>
                  <p className="text-sm text-muted-foreground">Membership from £8.99/month</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">🚗 Free Parking</h4>
                  <p className="text-sm text-muted-foreground">No city center parking charges</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">👥 Personal Care</h4>
                  <p className="text-sm text-muted-foreground">Unhurried, personalized attention</p>
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
              Experience Suburban Dental Tranquility
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join patients who've discovered the peace of suburban dental care with free parking,
              transparent pricing, and a genuinely relaxed environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="tel:01159312520">
                  <Phone className="h-5 w-5 mr-2" />
                  Escape to Suburban Care
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
                <TreePine className="h-4 w-4" />
                <span>Peaceful suburban setting</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
