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
    title: `Dental Services in ${suburb} | Pear Tree Dental`,
    description: `Explore our range of dental services available at our ${suburb} practice. Book your appointment today with our experienced dental team in ${city}.`,
    alternates: {
      canonical: `https://peartree.dental/locations/${params.slug}/services`,
    },
  };
}

export async function generateStaticParams() {
  const locations = await fetchAllLocations();

  return locations.map((location) => ({
    slug: getEntryField<string>(location, 'slug') || '',
  }));
}

// Group services by category
function groupServicesByCategory(services: any[]) {
  const categories: Record<string, any[]> = {
    'General Dentistry': [],
    'Cosmetic Dentistry': [],
    'Orthodontics': [],
    'Emergency Care': [],
    'Children\'s Dentistry': [],
    'Other Services': [],
  };

  services.forEach(service => {
    const name = getEntryField<string>(service, 'serviceName') || '';

    // Simple categorization logic
    if (name.toLowerCase().includes('emergency')) {
      categories['Emergency Care'].push(service);
    } else if (name.toLowerCase().includes('cosmetic') ||
               name.toLowerCase().includes('whitening') ||
               name.toLowerCase().includes('veneer')) {
      categories['Cosmetic Dentistry'].push(service);
    } else if (name.toLowerCase().includes('orthodontic') ||
               name.toLowerCase().includes('invisalign') ||
               name.toLowerCase().includes('braces') ||
               name.toLowerCase().includes('clearcorrect')) {
      categories['Orthodontics'].push(service);
    } else if (name.toLowerCase().includes('child') ||
               name.toLowerCase().includes('pediatric')) {
      categories['Children\'s Dentistry'].push(service);
    } else if (name.toLowerCase().includes('general') ||
               name.toLowerCase().includes('check') ||
               name.toLowerCase().includes('hygiene') ||
               name.toLowerCase().includes('cleaning')) {
      categories['General Dentistry'].push(service);
    } else {
      categories['Other Services'].push(service);
    }
  });

  return categories;
}

export default async function LocationServicesPage({ params }: { params: { slug: string } }) {
  const location = await fetchLocationBySlug(params.slug);

  if (!location) {
    return notFound();
  }

  const suburb = getEntryField<string>(location, 'suburb') || '';
  const city = getEntryField<string>(location, 'city') || '';

  // Fetch all services
  const services = await fetchAllServices();

  // Group services by category
  const serviceCategories = groupServicesByCategory(services);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/locations" className="hover:underline">Locations</Link>
        <span className="mx-2">/</span>
        <Link href={`/locations/${params.slug}`} className="hover:underline">{suburb}</Link>
        <span className="mx-2">/</span>
        <span>Services</span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Dental Services in {suburb}</h1>

      <p className="text-lg mb-8 max-w-3xl">
        Our {suburb} practice offers a comprehensive range of dental services for patients of all ages.
        From routine check-ups to advanced cosmetic treatments, our experienced team is here to provide
        exceptional care tailored to your needs.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-64 rounded-lg overflow-hidden">
          <Image
            src={`https://source.unsplash.com/featured/?dental,clinic,${suburb.toLowerCase().replace(' ', ',')}`}
            alt={`Pear Tree Dental ${suburb} practice`}
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Why Choose Our {suburb} Practice?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-dental-green mr-2">✓</span>
              <span>Experienced dental professionals dedicated to your care</span>
            </li>
            <li className="flex items-start">
              <span className="text-dental-green mr-2">✓</span>
              <span>Modern, comfortable facilities with the latest technology</span>
            </li>
            <li className="flex items-start">
              <span className="text-dental-green mr-2">✓</span>
              <span>Comprehensive range of treatments in one location</span>
            </li>
            <li className="flex items-start">
              <span className="text-dental-green mr-2">✓</span>
              <span>Convenient location in {suburb}, {city}</span>
            </li>
            <li className="flex items-start">
              <span className="text-dental-green mr-2">✓</span>
              <span>Flexible appointment times to suit your schedule</span>
            </li>
          </ul>

          <div className="mt-6">
            <Link
              href={`/book?location=${params.slug}`}
              className="inline-block bg-dental-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Services by category */}
      {Object.entries(serviceCategories).map(([category, categoryServices]) => (
        categoryServices.length > 0 && (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">{category}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryServices.map((service, idx) => {
                const slug = getEntryField<string>(service, 'slug') || '';
                const name = getEntryField<string>(service, 'serviceName') || '';

                return (
                  <Link
                    key={idx}
                    href={`/blog/${slug}/${params.slug}`}
                    className="block p-6 border border-gray-200 rounded-lg hover:border-dental-green hover:shadow-sm transition-all"
                  >
                    <h3 className="font-semibold mb-2">{name}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {name} services available at our {suburb} practice.
                    </p>
                    <span className="text-dental-green text-sm font-medium">Learn more →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )
      ))}

      <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Book Your Appointment?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact our {suburb} practice today to schedule your next dental visit. Whether you need
          a routine check-up or a specific treatment, our team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`/book?location=${params.slug}`}
            className="bg-dental-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Book Online
          </Link>
          <Link
            href="tel:01159694141"
            className="border border-dental-green text-dental-green px-6 py-3 rounded-lg hover:bg-dental-green hover:bg-opacity-10 transition-colors"
          >
            Call: 0115 969 4141
          </Link>
        </div>
      </div>
    </div>
  );
}
