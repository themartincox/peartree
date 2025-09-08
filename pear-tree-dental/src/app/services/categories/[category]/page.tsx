import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { fetchAllServices, getEntryField } from '@/lib/contentful';

// Define categories and their metadata
const categories = {
  'general': {
    title: 'General Dentistry',
    description: 'Comprehensive dental care for your everyday needs including check-ups, cleanings, and preventive treatments.',
    image: 'general-dentistry',
  },
  'cosmetic': {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our range of cosmetic dental treatments designed to enhance your natural beauty.',
    image: 'cosmetic-dentistry',
  },
  'orthodontics': {
    title: 'Orthodontics',
    description: 'Straighten your teeth and improve your bite with our modern orthodontic solutions for patients of all ages.',
    image: 'orthodontics',
  },
  'emergency': {
    title: 'Emergency Dental Care',
    description: 'Urgent dental care when you need it most. We provide prompt treatment for dental emergencies.',
    image: 'emergency-dentistry',
  },
  'children': {
    title: 'Children\'s Dentistry',
    description: 'Gentle and compassionate dental care specifically designed for children to promote lifelong oral health.',
    image: 'childrens-dentistry',
  },
};

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category;

  if (!Object.keys(categories).includes(category)) {
    return {
      title: 'Category Not Found | Pear Tree Dental',
      description: 'The requested dental service category could not be found.',
    };
  }

  const categoryData = categories[category as keyof typeof categories];

  return {
    title: `${categoryData.title} Services | Pear Tree Dental`,
    description: categoryData.description,
    alternates: {
      canonical: `https://peartree.dental/services/categories/${category}`,
    },
    openGraph: {
      title: `${categoryData.title} Services | Pear Tree Dental`,
      description: categoryData.description,
      type: 'website',
      url: `https://peartree.dental/services/categories/${category}`,
      images: [
        {
          url: `https://peartree.dental/og/${categoryData.image}.jpg`,
          width: 1200,
          height: 630,
          alt: categoryData.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  if (!Object.keys(categories).includes(params.category)) {
    return notFound();
  }

  const categoryData = categories[params.category as keyof typeof categories];

  // Fetch all services
  const allServices = await fetchAllServices();

  // Filter services based on category
  const categoryServices = allServices.filter(service => {
    const name = getEntryField<string>(service, 'serviceName') || '';
    const description = getEntryField<string>(service, 'description') || '';

    switch (params.category) {
      case 'emergency':
        return name.toLowerCase().includes('emergency');
      case 'cosmetic':
        return name.toLowerCase().includes('cosmetic') ||
               name.toLowerCase().includes('whitening') ||
               name.toLowerCase().includes('veneer');
      case 'orthodontics':
        return name.toLowerCase().includes('orthodontic') ||
               name.toLowerCase().includes('invisalign') ||
               name.toLowerCase().includes('braces') ||
               name.toLowerCase().includes('clearcorrect');
      case 'children':
        return name.toLowerCase().includes('child') ||
               name.toLowerCase().includes('pediatric');
      case 'general':
        return name.toLowerCase().includes('general') ||
               name.toLowerCase().includes('check') ||
               name.toLowerCase().includes('hygiene') ||
               name.toLowerCase().includes('cleaning');
      default:
        return false;
    }
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:underline">Services</Link>
        <span className="mx-2">/</span>
        <span>{categoryData.title}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">{categoryData.title}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {categoryData.description}
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Why Choose Our {categoryData.title} Services?</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-dental-green mr-2">✓</span>
                <span>Experienced dental professionals specializing in {categoryData.title.toLowerCase()}</span>
              </li>
              <li className="flex items-start">
                <span className="text-dental-green mr-2">✓</span>
                <span>Modern techniques and state-of-the-art equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-dental-green mr-2">✓</span>
                <span>Personalized treatment plans tailored to your needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-dental-green mr-2">✓</span>
                <span>Comfortable, relaxing environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-dental-green mr-2">✓</span>
                <span>Transparent pricing and treatment explanations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image
            src={`https://source.unsplash.com/featured/?dental,${categoryData.title.toLowerCase().replace(' ', ',')}`}
            alt={categoryData.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Our {categoryData.title} Services</h2>

      {categoryServices.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoryServices.map((service, idx) => {
            const slug = getEntryField<string>(service, 'slug') || '';
            const name = getEntryField<string>(service, 'serviceName') || '';
            const description = getEntryField<string>(service, 'description') ||
              `Professional ${name} services provided by our experienced dental team.`;

            return (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={`https://source.unsplash.com/featured/?dental,${name.toLowerCase().replace(' ', ',')}`}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold mb-2">{name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {description}
                  </p>

                  <Link
                    href={`/services/${slug}`}
                    className="text-dental-green font-medium hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg mb-12 text-center">
          <p className="text-lg">No services found in this category. Please check back later or explore our other services.</p>
          <Link
            href="/services"
            className="inline-block mt-4 text-dental-green font-medium hover:underline"
          >
            View all services →
          </Link>
        </div>
      )}

      <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Book Your Appointment?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Whether you need a routine check-up or a specific {categoryData.title.toLowerCase()} treatment,
          our team is ready to help. Book your appointment today at any of our locations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`/book?category=${params.category}`}
            className="bg-dental-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Book an Appointment
          </Link>
          <Link
            href="/contact"
            className="border border-dental-green text-dental-green px-6 py-3 rounded-lg hover:bg-dental-green hover:bg-opacity-10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
