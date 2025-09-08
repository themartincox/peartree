import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  fetchServiceBySlug,
  fetchAllServices,
  fetchAllLocations,
  getEntryField
} from '@/lib/contentful';
import RichTextRenderer from '@/components/RichTextRenderer';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await fetchServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | Pear Tree Dental',
      description: 'The requested dental service could not be found.',
    };
  }

  const serviceName = getEntryField<string>(service, 'serviceName') || '';
  const description = getEntryField<string>(service, 'description') || '';
  const metaTitle = getEntryField<string>(service, 'metaTitle') || `${serviceName} | Pear Tree Dental`;
  const metaDescription = getEntryField<string>(service, 'metaDescription') || description;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `https://peartree.dental/services/${params.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'website',
      url: `https://peartree.dental/services/${params.slug}`,
      images: [
        {
          url: 'https://peartree.dental/og/service-default.jpg',
          width: 1200,
          height: 630,
          alt: serviceName,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const services = await fetchAllServices();

  return services.map((service) => ({
    slug: getEntryField<string>(service, 'slug') || '',
  }));
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await fetchServiceBySlug(params.slug);

  if (!service) {
    return notFound();
  }

  const serviceName = getEntryField<string>(service, 'serviceName') || '';
  const description = getEntryField<string>(service, 'description') || '';
  const content = getEntryField(service, 'content');

  // Fetch locations to show service availability
  const locations = await fetchAllLocations();

  // Check if this is an emergency service
  const isEmergency = params.slug.includes('emergency');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:underline">Services</Link>
        <span className="mx-2">/</span>
        <span>{serviceName}</span>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{serviceName}</h1>

          <div className="relative h-64 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={`https://source.unsplash.com/featured/?dental,${serviceName.toLowerCase().replace(' ', ',')}`}
              alt={serviceName}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose max-w-none mb-8">
            {content ? (
              <RichTextRenderer document={content} />
            ) : (
              <>
                <p className="lead">{description}</p>

                <h2>About {serviceName}</h2>
                <p>
                  At Pear Tree Dental, we provide professional {serviceName.toLowerCase()} services
                  tailored to your individual needs. Our experienced dental team uses
                  the latest techniques and technology to ensure you receive the highest
                  quality of care.
                </p>

                <h2>What to Expect</h2>
                <p>
                  During your {serviceName.toLowerCase()} appointment, our dentists will
                  conduct a thorough examination and discuss your treatment options.
                  We believe in transparent communication and will explain each step
                  of the process.
                </p>

                <h2>Benefits of {serviceName}</h2>
                <ul>
                  <li>Improved oral health and function</li>
                  <li>Enhanced appearance and confidence</li>
                  <li>Long-lasting results with proper care</li>
                  <li>Personalized treatment plans</li>
                  <li>Expert care from our experienced team</li>
                </ul>
              </>
            )}
          </div>
        </div>

        <div>
          {isEmergency ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-red-700 mb-4">Dental Emergency?</h2>
              <p className="mb-4">
                If you're experiencing dental pain or have had an accident, call us right away
                for emergency assistance.
              </p>
              <Link
                href="tel:01159694141"
                className="block w-full bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition-colors mb-3"
              >
                Call Now: 0115 969 4141
              </Link>
              <p className="text-sm text-red-700">
                Outside office hours? Follow the prompts for our emergency service.
              </p>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Book Your Appointment</h2>
              <p className="mb-4">
                Ready to schedule your {serviceName.toLowerCase()} appointment? Book online or
                call us today.
              </p>
              <Link
                href={`/book?service=${params.slug}`}
                className="block w-full bg-dental-green text-white text-center py-3 rounded-lg hover:bg-opacity-90 transition-colors mb-3"
              >
                Book Online
              </Link>
              <Link
                href="tel:01159694141"
                className="block w-full border border-dental-green text-dental-green text-center py-3 rounded-lg hover:bg-dental-green hover:bg-opacity-10 transition-colors"
              >
                Call: 0115 969 4141
              </Link>
            </div>
          )}

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Available Locations</h2>
            <p className="mb-4">
              This service is available at the following Pear Tree Dental practices:
            </p>
            <ul className="space-y-2">
              {locations.slice(0, 5).map((location, idx) => {
                const suburb = getEntryField<string>(location, 'suburb') || '';
                const slug = getEntryField<string>(location, 'slug') || '';

                return (
                  <li key={idx}>
                    <Link
                      href={`/blog/${params.slug}/${slug}`}
                      className="flex items-center justify-between p-3 bg-white rounded-md hover:shadow-sm transition-shadow"
                    >
                      <span>{suburb}</span>
                      <span className="text-dental-green text-sm">View Details →</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Have Questions?</h2>
            <p className="mb-4">
              Our team is here to help. Contact us for more information about
              {serviceName.toLowerCase()}.
            </p>
            <Link
              href="/contact"
              className="block w-full border border-gray-300 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Ready to Enhance Your Smile?</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Take the first step toward a healthier, more beautiful smile with our {serviceName.toLowerCase()}
          services. Our team is dedicated to providing personalized care tailored to your needs.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            href={`/book?service=${params.slug}`}
            className="bg-dental-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Book Your Appointment
          </Link>
          <Link
            href="/locations"
            className="border border-dental-green text-dental-green px-6 py-3 rounded-lg hover:bg-dental-green hover:bg-opacity-10 transition-colors"
          >
            Find a Practice
          </Link>
        </div>
      </div>
    </div>
  );
}
