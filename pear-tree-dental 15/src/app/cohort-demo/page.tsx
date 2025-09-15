'use client';

import React from 'react';
import Link from 'next/link';

export default function CohortEngineDemoPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Cohort Engine Demonstration</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          This page demonstrates our advanced cohort engine that personalizes content based on various user signals:
        </p>

        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li><strong>Geolocation:</strong> City, region, and travel time detection</li>
          <li><strong>Device:</strong> Mobile, tablet, or desktop personalization</li>
          <li><strong>Time context:</strong> Office hours and time of day</li>
          <li><strong>User behavior:</strong> New, returning, or frequent visitor status</li>
          <li><strong>Intent signals:</strong> Emergency, research, booking, or price-shopping</li>
        </ul>

        <p className="mt-4">
          To see the cohort engine in action, visit our service pages, which dynamically adjust based on your context:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Personalized Components</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>CohortStrip:</strong> Context-aware CTAs that adapt to your needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>LocalProof:</strong> Location-specific trust signals</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>PriceExplainer:</strong> Service-specific pricing information</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>IntentSurvey:</strong> Capture visitor needs with a simple survey</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>ExitIntent:</strong> Abandonment recovery with geo-context</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Technical Highlights</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span><strong>SEO Safe:</strong> Personalization without cloaking or affecting indexability</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span><strong>Ephemeral Headers:</strong> Clean, stateless architecture via Next.js middleware</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span><strong>Travel Time:</strong> Sophisticated distance and mode estimation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span><strong>Visitor Recognition:</strong> Session and visit tracking</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span><strong>Bot Detection:</strong> Serves clean, neutral content to crawlers</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Experience Different Contexts</h2>
        <p className="mb-4">Try visiting these pages to see the cohort engine in action:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/blog/orthodontics-invisalign/nottingham" className="bg-indigo-50 hover:bg-indigo-100 p-4 rounded-lg border border-indigo-200">
            <h3 className="font-semibold">Invisalign Nottingham</h3>
            <p className="text-sm text-gray-600">High-consideration treatment example</p>
          </Link>

          <Link href="/blog/emergency-dentist/west-bridgford" className="bg-red-50 hover:bg-red-100 p-4 rounded-lg border border-red-200">
            <h3 className="font-semibold">Emergency Dental Care</h3>
            <p className="text-sm text-gray-600">Urgent treatment pathways</p>
          </Link>

          <Link href="/blog/cosmetic-teeth-whitening-enlighten/burton-joyce" className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold">Teeth Whitening</h3>
            <p className="text-sm text-gray-600">Cosmetic treatment journey</p>
          </Link>
        </div>
      </div>

      <div className="mt-10 bg-emerald-50 p-6 rounded-lg border border-emerald-200">
        <h2 className="text-xl font-semibold mb-2">Technical Documentation</h2>
        <p>
          Our cohort engine delivers a personalized experience while maintaining SEO best practices.
          It uses ephemeral request headers set in middleware, which are read by server components
          to tailor the user experience without affecting the core, indexable content.
        </p>
        <p className="mt-4">
          <strong>Key components:</strong> middleware.ts, cohort.ts, travel-time.ts
        </p>
      </div>
    </div>
  );
}
