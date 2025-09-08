import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Pear Tree Dental',
  description: 'Get in touch with Pear Tree Dental. Contact our team for appointments, inquiries, or emergency dental care across our Nottinghamshire locations.',
  alternates: {
    canonical: 'https://peartree.dental/contact',
  },
};

// Mock location data
const locations = [
  {
    suburb: 'Nottingham',
    city: 'Nottingham',
    slug: 'nottingham',
    address: '123 Main Street\nNottingham\nNG1 1AA',
  },
  {
    suburb: 'West Bridgford',
    city: 'Nottingham',
    slug: 'west-bridgford',
    address: '456 Bridge Road\nWest Bridgford\nNG2 2BB',
  },
  {
    suburb: 'Burton Joyce',
    city: 'Nottingham',
    slug: 'burton-joyce',
    address: '789 Nottingham Road\nBurton Joyce\nNG14 5CC',
  },
  {
    suburb: 'Gedling',
    city: 'Nottingham',
    slug: 'gedling',
    address: '101 Gedling Road\nGedling\nNG4 3DD',
  },
  {
    suburb: 'Arnold',
    city: 'Nottingham',
    slug: 'arnold',
    address: '202 Front Street\nArnold\nNG5 7EE',
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        We're here to help with all your dental care needs. Contact our friendly team
        for appointments, inquiries, or emergency dental assistance.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="mb-1">Main Reception:</p>
              <a
                href="tel:01159694141"
                className="text-blue-600 text-lg font-medium hover:underline"
              >
                0115 969 4141
              </a>

              <p className="mt-3 mb-1">Emergency Dental Care:</p>
              <a
                href="tel:01159694141"
                className="text-blue-600 text-lg font-medium hover:underline"
              >
                0115 969 4141
              </a>
              <p className="text-sm text-gray-600">
                (Call and follow the prompts for emergency assistance)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a
                href="mailto:info@peartree.dental"
                className="text-blue-600 hover:underline"
              >
                info@peartree.dental
              </a>
              <p className="text-sm text-gray-600 mt-1">
                We aim to respond to all emails within 24 hours during business days.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
              <div className="space-y-1">
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

          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/peartree.dental"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://instagram.com/peartree.dental"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://twitter.com/peartree_dental"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Form</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block mb-1 font-medium">
                Topic
              </label>
              <select
                id="topic"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a topic</option>
                <option value="appointment">Appointment Inquiry</option>
                <option value="treatment">Treatment Information</option>
                <option value="pricing">Pricing & Insurance</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
                required
              />
            </div>

            <div className="flex items-start">
              <input
                id="privacy"
                type="checkbox"
                className="mt-1 mr-2"
                required
              />
              <label htmlFor="privacy" className="text-sm">
                I agree to the <Link href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</Link> and consent to being contacted regarding my inquiry.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Our Locations</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {locations.map((location, index) => {
          return (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{location.suburb}</h3>
                <p className="text-gray-600 mb-4">{location.city}</p>

                {location.address && (
                  <div className="mb-4 text-gray-700">
                    <p className="whitespace-pre-line">{location.address}</p>
                  </div>
                )}

                <Link
                  href={`/locations/${location.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  View practice details →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Need an Appointment?</h2>
        <p className="mb-6">
          Book online for a convenient way to schedule your dental appointment.
        </p>
        <Link
          href="/book"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}
