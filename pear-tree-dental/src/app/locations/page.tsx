import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { fetchAllLocations, getEntryField } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'Our Dental Practice Locations | Pear Tree Dental',
  description: 'Find a Pear Tree Dental practice near you. We have multiple locations across Nottinghamshire providing high-quality dental care.',
  alternates: {
    canonical: 'https://peartree.dental/locations',
  },
};

export default async function LocationsPage() {
  const locations = await fetchAllLocations();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Dental Practice Locations</h1>

      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        With multiple practices across Nottinghamshire, we provide high-quality dental care
        close to where you live. Find your nearest Pear Tree Dental practice below.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => {
          const suburb = getEntryField<string>(location, 'suburb') || '';
          const city = getEntryField<string>(location, 'city') || '';
          const slug = getEntryField<string>(location, 'slug') || '';
          const address = getEntryField<string>(location, 'address') || '';

          return (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full bg-gray-100">
                <Image
                  src={`https://source.unsplash.com/featured/?dental,clinic,${suburb.replace(' ', ',')}`}
                  alt={`Pear Tree Dental ${suburb}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{suburb}</h2>
                <p className="text-gray-600 mb-4">{city}</p>

                {address && (
                  <div className="mb-4 text-gray-700">
                    <p>{address}</p>
                  </div>
                )}

                <div className="flex space-x-4 mt-4">
                  <Link
                    href={`/locations/${slug}`}
                    className="bg-dental-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    View Practice
                  </Link>

                  <Link
                    href={`/book?location=${slug}`}
                    className="border border-dental-green text-dental-green px-4 py-2 rounded-lg hover:bg-dental-green hover:bg-opacity-10 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Looking for a specific service?</h2>
        <p className="mb-6">
          We offer a wide range of dental treatments across all our locations.
        </p>
        <Link
          href="/services"
          className="bg-pear-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Browse Our Services
        </Link>
      </div>
    </div>
  );
}
