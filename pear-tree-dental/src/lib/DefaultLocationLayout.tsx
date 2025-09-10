import type { LocationPageData } from '@/data/locationData';
import practiceInfo from '@/data/practiceInfo';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';

// Helper to get Lucide icon component by name string
const Icon = ({ name, ...props }: { name: keyof typeof LucideIcons } & LucideIcons.LucideProps) => {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
};

interface DefaultLocationLayoutProps {
  data: LocationPageData;
}

export default function DefaultLocationLayout({ data }: DefaultLocationLayoutProps) {
  const { hero, access, services, reviews, directions, cta } = data;
  const themeColor = hero.theme === 'green' ? 'dental-green' : 'dental-teal';
  const themeHoverColor = hero.theme === 'green' ? 'dental-green/90' : 'dental-teal/90';

  return (
    <div className="min-h-screen bg-dental-navy text-white">
      <LocalBusinessSchema
        pageSpecifics={{
          "@id": `https://peartree.dental/location/${data.slug}`,
          name: `Pear Tree Dental - ${hero.badge}`,
          description: data.metadata.description,
          areaServed: {
            "@type": "Place",
            name: data.slug.charAt(0).toUpperCase() + data.slug.slice(1),
          }
        }}
      />

      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br from-dental-navy via-${themeColor} to-dental-navy`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="MapPin" className="h-6 w-6 text-pear-gold" />
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
              <Button asChild size="lg" className={`bg-${themeColor} hover:bg-${themeHoverColor} text-dental-navy font-semibold px-8 py-4`}>
                <Link href={`tel:${practiceInfo.contact.phoneInternational}`}>
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Call: {practiceInfo.contact.phone}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className={`border-${themeColor} text-${themeColor} hover:bg-${themeColor} hover:text-dental-navy px-8 py-4`}>
                <Link href="/membership">
                  View Membership Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Access Info Section */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">{access.title}</h2>
            {access.description && <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">{access.description}</p>}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {access.points.map((point, index) => (
                <Card key={index} className={`p-6 border border-${themeColor}/20`}>
                  <CardHeader className="text-center pb-4">
                    <Icon name={point.icon as keyof typeof LucideIcons} className={`h-12 w-12 mx-auto text-${themeColor} mb-4`} />
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className={`text-2xl font-bold text-${themeColor} mb-2`}>{point.value}</p>
                    <p className="text-gray-600">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">{services.title}</h2>
            {services.description && <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">{services.description}</p>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.items.map((service, index) => (
                <Card key={index} className={`p-6 border border-${themeColor}/20 hover:border-${themeColor}/40 transition-colors`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name={service.icon as keyof typeof LucideIcons} className={`h-8 w-8 text-${themeColor} flex-shrink-0`} />
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center space-x-2">
                          <Icon name="CheckCircle" className={`w-3 h-3 text-${themeColor} flex-shrink-0`} />
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

      {/* Reviews Section */}
      <section className="py-16 bg-white text-dental-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">{reviews.title}</h2>
            {reviews.description && <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">{reviews.description}</p>}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {reviews.items.map((review, index) => (
                <Card key={index} className="p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-dental-green">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic">"{review.text}"</blockquote>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-gray-500">{review.location}</span>
                    </div>
                    <div className="text-xs text-dental-green font-medium">{review.service}</div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center space-x-1 text-dental-green">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-dental-navy">{reviews.overallRating.toFixed(1)}</span>
              </div>
              <p className="text-gray-600">Based on {reviews.reviewCount}+ reviews from {data.slug} area patients</p>
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
                    <Icon name="MapPin" className={`h-6 w-6 text-${themeColor} mt-1 flex-shrink-0`} />
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
                    <Icon name="Phone" className={`h-6 w-6 text-${themeColor} mt-1 flex-shrink-0`} />
                    <div>
                      <h3 className="font-semibold mb-2">Contact Us</h3>
                      <p className="text-gray-700">
                        Phone: {practiceInfo.contact.phone}<br />
                        Emergency: Same number
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Clock" className={`h-6 w-6 text-${themeColor} mt-1 flex-shrink-0`} />
                    <div>
                      <h3 className="font-semibold mb-2">Opening Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>{practiceInfo.openingHoursDisplay.weekdays}</p>
                        <p>{practiceInfo.openingHoursDisplay.friday}</p>
                        <p>{practiceInfo.openingHoursDisplay.weekend}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">{directions.title}</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className={`font-semibold mb-4 text-${themeColor}`}>{directions.routeDescription}</h3>
                  <ol className="space-y-2 text-gray-700">
                    {directions.steps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className={`bg-${themeColor} text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0`}>{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className={`mt-4 p-3 bg-${themeColor}/10 rounded`}>
                    <p className="text-sm text-dental-navy"><strong>Tip:</strong> {directions.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`py-16 bg-${themeColor} text-dental-navy`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl mb-8">{cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dental-navy hover:bg-dental-navy/90 text-white font-semibold px-8 py-4">
                <Link href={`tel:${practiceInfo.contact.phoneInternational}`}>
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Call: {practiceInfo.contact.phone}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-dental-navy text-dental-navy hover:bg-dental-navy hover:text-white px-8 py-4">
                <Link href="/membership">
                  View Membership Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}