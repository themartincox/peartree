import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import * as LucideIcons from 'lucide-react';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import practiceInfo from '@/data/practiceInfo';
import type { LocationPageData } from '@/data/locationData';

// Helper to get Lucide icon component by name string
const Icon = ({ name, ...props }: { name: keyof typeof LucideIcons } & LucideIcons.LucideProps) => {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
};

interface PremiumLocationLayoutProps {
  data: LocationPageData;
}

export default function PremiumLocationLayout({ data }: PremiumLocationLayoutProps) {
  const { hero, access, services, reviews, directions, cta } = data;

  return (
    <div className="min-h-screen bg-dental-navy text-white">
      <LocalBusinessSchema
        pageSpecifics={{
          "@id": `https://peartree.dental/location/${data.slug}`,
          name: `Pear Tree Dental - ${hero.badge}`,
          description: data.metadata.description,
          priceRange: "£££",
          areaServed: {
            "@type": "Place",
            name: data.slug.charAt(0).toUpperCase() + data.slug.slice(1),
          }
        }}
      />

      {/* Premium Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dental-navy via-pear-primary to-dental-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-pear-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-dental-green rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="Crown" className="h-6 w-6 text-pear-gold" />
              <span className="text-pear-gold font-medium">{hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {hero.title}
              <span className="text-pear-gold block">{hero.subtitle}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-dental-navy font-semibold px-8 py-4">
                <Link href={`tel:${practiceInfo.contact.phoneInternational}`}>
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Call: {practiceInfo.contact.phone}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pear-gold text-pear-gold hover:bg-pear-gold hover:text-dental-navy px-8 py-4">
                <Link href="/membership">
                  <Icon name="Sparkles" className="h-5 w-5 mr-2" />
                  Membership Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Access & Convenience */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{access.title}</h2>
              {access.description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{access.description}</p>}
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {access.points.map((point, index) => (
                <Card key={index} className="p-6 border border-pear-gold/20 bg-gradient-to-br from-white to-pear-gold/5">
                  <CardHeader className="text-center pb-4">
                    <Icon name={point.icon as keyof typeof LucideIcons} className="h-12 w-12 mx-auto text-pear-gold mb-4" />
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-pear-gold mb-2">{point.value}</p>
                    <p className="text-gray-600">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{services.title}</h2>
              {services.description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{services.description}</p>}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.items.map((service, index) => (
                <Card key={index} className="p-6 border border-pear-gold/20 hover:border-pear-gold/40 transition-all hover:shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon name={service.icon as keyof typeof LucideIcons} className="h-8 w-8 text-pear-gold flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                          {service.badge && <Badge variant="secondary" className="text-xs mt-1 bg-pear-gold/10 text-pear-gold">{service.badge}</Badge>}
                        </div>
                      </div>
                      {service.price && <div className="text-right"><p className="font-bold text-pear-gold">{service.price}</p></div>}
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center space-x-2">
                          <Icon name="CheckCircle" className="w-3 h-3 text-dental-green flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Reviews Section */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{reviews.title}</h2>
              {reviews.description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{reviews.description}</p>}
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.items.map((review, index) => (
                <Card key={index} className="p-6 shadow-xl border border-pear-gold/20">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-pear-gold">
                      {[...Array(review.rating)].map((_, i) => <Icon key={i} name="Star" className="w-4 h-4 fill-current" />)}
                    </div>
                    <blockquote className="text-gray-700 italic">"{review.text}"</blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-pear-primary">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                      <div className="text-sm text-pear-gold font-medium">{review.service}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Contact Section */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Visit Us from {data.slug.charAt(0).toUpperCase() + data.slug.slice(1)}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="MapPin" className="h-6 w-6 text-pear-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Our Address</h3>
                      <p className="text-gray-700">
                        {practiceInfo.name}<br />
                        {practiceInfo.address.street}<br />
                        {practiceInfo.address.city}<br />
                        {practiceInfo.address.county} {practiceInfo.address.postcode}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Phone" className="h-6 w-6 text-pear-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Contact Us</h3>
                      <p className="text-gray-700">
                        Phone: {practiceInfo.contact.phone}<br />
                        Emergency: Same number
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">{directions.title}</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-pear-gold/20">
                  <h3 className="font-semibold mb-4 text-pear-gold">{directions.routeDescription}</h3>
                  <ol className="space-y-2 text-gray-700">
                    {directions.steps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="bg-pear-gold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 p-3 bg-pear-gold/10 rounded">
                    <p className="text-sm text-dental-navy"><strong>Tip:</strong> {directions.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pear-gold to-dental-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl mb-8 text-white/90">{cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-pear-gold font-semibold px-8 py-4">
                <Link href={`tel:${practiceInfo.contact.phoneInternational}`}>
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Call: {practiceInfo.contact.phone}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pear-gold px-8 py-4">
                <Link href="/membership">
                  <Icon name="Crown" className="h-5 w-5 mr-2" />
                  Membership Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}