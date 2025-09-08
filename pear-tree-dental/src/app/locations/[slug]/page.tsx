import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  fetchLocationBySlug,
  fetchAllLocations,
  fetchAllServices,
  getEntryField
} from '@/lib/contentful';
import { INDEX_PRIORITY_SERVICES } from '@/config/indexing';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = await fetchLocationBySlug(params.slug);

  if (!location) {
    return {
      title: 'Location Not Found | Pear Tree Dental',
      description: 'The requested dental practice location could not be found.',
    };
  }

  const suburb = getEntryField<string>(location, 'suburb') || '';
  const city = getEntryField<string>(location, 'city') || '';

  return {
    title: `Pear Tree Dental in ${suburb} | Dental Practice in ${city}`,
    description: `Visit our dental practice in ${suburb}, ${city}. Book appointments for check-ups, emergency care, and specialized dental treatments.`,
    alternates: {
      canonical: `https://peartree.dental/locations/${params.slug}`,
    },
    openGraph: {
      title: `Pear Tree Dental in ${suburb}`,
      description: `Our dental practice in ${suburb}, ${city} offers a wide range of dental services. Book your appointment today.`,
      type: 'website',
      url: `https://peartree.dental/locations/${params.slug}`,
      images: [
        {
          url: 'https://peartree.dental/og/location-default.jpg',
          width: 1200,
          height: 630,
          alt: `Pear Tree Dental ${suburb}`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const locations = await fetchAllLocations();

  return locations.map((location) => ({
    slug: getEntryField<string>(location, 'slug') || '',
  }));
}

export default async function LocationPage({ params }: { params: { slug: string } }) {
  const location = await fetchLocationBySlug(params.slug);

  if (!location) {
    return notFound();
  }

  const suburb = getEntryField<string>(location, 'suburb') || '';
  const city = getEntryField<string>(location, 'city') || '';
  const address = getEntryField<string>(location, 'address') || '';
  const postcode = getEntryField<string>(location, 'postcode') || '';
  const testimonials = getEntryField<any[]>(location, 'localTestimonials') || [];

  // Fetch services for this location
  const services = await fetchAllServices();
  const priorityServices = services.filter(service => {
    const slug = getEntryField<string>(service, 'slug');
    return slug && INDEX_PRIORITY_SERVICES.includes(slug.toLowerCase());
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/locations" className="hover:underline">Locations</Link>
        <span className="mx-2">/</span>
        <span>{suburb}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl font-bold mb-4">Pear Tree Dental {suburb}</h1>
          <p className="text-xl text-gray-600 mb-6">{city}, {postcode}</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Practice Address</h2>
            <p className="whitespace-pre-line mb-4">{address}</p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link
                href={`/book?location=${params.slug}`}
                className="bg-dental-green text-white text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Book an Appointment
              </Link>

              <Link
                href={`tel:01159694141`}
                className="border border-dental-green text-dental-green text-center px-4 py-3 rounded-lg hover:bg-dental-green hover:bg-opacity-10 transition-colors"
              >
                Call Practice
              </Link>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={`https://source.unsplash.com/featured/?dental,clinic,${suburb.replace(' ', ',')}`}
              alt={`Pear Tree Dental ${suburb}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {testimonials.length > 0 ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">What Our Patients Say</h2>
              <div className="space-y-4">
                {testimonials.slice(0, 2).map((testimonial, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-md">
                    <p className="italic mb-2">{getEntryField<string>(testimonial, 'text')}</p>
                    <p className="text-right text-sm font-medium">— {getEntryField<string>(testimonial, 'author')}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Why Choose Our {suburb} Practice</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Experienced dental professionals</li>
                <li>Modern, comfortable facilities</li>
                <li>Wide range of treatments</li>
                <li>Convenient location in {suburb}</li>
                <li>Emergency appointments available</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Services Available at Our {suburb} Practice</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {priorityServices.slice(0, 6).map((service, idx) => {
            const serviceSlug = getEntryField<string>(service, 'slug') || '';
            const serviceName = getEntryField<string>(service, 'serviceName') || '';

            return (
              <Link
                key={idx}
                href={`/blog/${serviceSlug}/${params.slug}`}
                className="block p-6 border border-gray-200 rounded-lg hover:border-dental-green hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold mb-2">{serviceName}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {serviceName} in {suburb} provided by our expert dental team.
                </p>
                <span className="text-dental-green text-sm font-medium">Learn more →</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`/services`}
            className="inline-block text-pear-primary font-medium hover:underline"
          >
            View all services →
          </Link>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Ready to Book Your Appointment?</h2>
        <p className="text-center mb-8">
          Contact our {suburb} practice today or book online to schedule your next dental visit.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            href={`/book?location=${params.slug}`}
            className="bg-dental-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Book Online
          </Link>
          <Link
            href={`/contact?location=${params.slug}`}
            className="border border-dental-green text-dental-green px-6 py-3 rounded-lg hover:bg-dental-green hover:bg-opacity-10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
