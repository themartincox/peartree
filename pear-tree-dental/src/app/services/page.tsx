import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { fetchAllServices, getEntryField } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'Our Dental Services | Pear Tree Dental',
  description: 'Explore our comprehensive range of dental services including general dentistry, cosmetic treatments, orthodontics, and emergency dental care.',
  alternates: {
    canonical: 'https://peartree.dental/services',
  },
};

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
    const description = getEntryField<string>(service, 'description') || '';

    // Simple categorization logic - in a real app this would use proper category fields
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

export default async function ServicesPage() {
  const services = await fetchAllServices();
  const serviceCategories = groupServicesByCategory(services);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Dental Services</h1>

      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        At Pear Tree Dental, we offer a comprehensive range of dental treatments
        to keep your smile healthy and beautiful. All services are available across
        our practices in Nottinghamshire.
      </p>

      {/* Hero services section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {['Emergency Care', 'Cosmetic Dentistry', 'Orthodontics'].map((category, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={`https://source.unsplash.com/featured/?dental,${category.toLowerCase().replace(' ', ',')}`}
                alt={category}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{category}</h2>
              <p className="text-gray-600 mb-4">
                {category === 'Emergency Care' && 'Urgent dental care when you need it most. Same-day appointments available.'}
                {category === 'Cosmetic Dentistry' && 'Transform your smile with our range of cosmetic dental treatments.'}
                {category === 'Orthodontics' && 'Straighten your teeth with modern orthodontic solutions like Invisalign.'}
              </p>

              <Link
                href={`/services/categories/${category.toLowerCase().replace(' ', '-').replace('\'', '')}`}
                className="text-dental-green font-medium hover:underline"
              >
                View {category} Services →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* All services by category */}
      {Object.entries(serviceCategories).map(([category, categoryServices]) => (
        categoryServices.length > 0 && (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">{category}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryServices.map((service, idx) => {
                const slug = getEntryField<string>(service, 'slug') || '';
                const name = getEntryField<string>(service, 'serviceName') || '';
                const description = getEntryField<string>(service, 'description') ||
                  `Professional ${name} services provided by our experienced dental team.`;

                return (
                  <Link
                    key={idx}
                    href={`/services/${slug}`}
                    className="block p-6 border border-gray-200 rounded-lg hover:border-dental-green hover:shadow-sm transition-all"
                  >
                    <h3 className="font-semibold mb-2">{name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                      {description}
                    </p>
                    <span className="text-dental-green text-sm font-medium">Learn more →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )
      ))}

      {/* CTA section */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Book Your Appointment?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Whether you need a routine check-up or a specific treatment, our team is ready to help.
          Book your appointment today at any of our locations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/book"
            className="bg-dental-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Book an Appointment
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
