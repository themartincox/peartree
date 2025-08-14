"use client";
import React from "react";

import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pear-background to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Dental Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-pear-primary rounded-full flex items-center justify-center text-white text-4xl mb-4">
            🦷
          </div>
          <div className="w-16 h-1 bg-pear-gold mx-auto rounded-full"></div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-pear-primary mb-4 font-cormorant">
          You're Offline
        </h1>

        {/* Description */}
        <p className="text-pear-text-secondary mb-6 leading-relaxed">
          It looks like you're not connected to the internet. Don't worry - you
          can still access previously visited pages once your connection is
          restored.
        </p>

        {/* Connection Tips */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-left">
          <h2 className="font-semibold text-pear-primary mb-3">
            Try these steps:
          </h2>
          <ul className="space-y-2 text-sm text-pear-text-secondary">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pear-gold rounded-full mr-3"></span>
              Check your WiFi or mobile data connection
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pear-gold rounded-full mr-3"></span>
              Move to an area with better signal
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pear-gold rounded-full mr-3"></span>
              Restart your router if using WiFi
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pear-gold rounded-full mr-3"></span>
              Try refreshing the page in a moment
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-pear-primary hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pear-gold focus:ring-opacity-50"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="block w-full bg-white hover:bg-gray-50 text-pear-primary font-semibold py-3 px-6 rounded-lg border-2 border-pear-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pear-gold focus:ring-opacity-50"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Emergency Contact Info */}
        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="font-semibold text-red-800 mb-2">
            Emergency Dental Care
          </h3>
          <p className="text-sm text-red-700 mb-2">
            If you have a dental emergency, please call us directly:
          </p>
          <a
            href="tel:+441159312520"
            className="inline-flex items-center text-red-800 font-semibold hover:text-red-900 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            0115 931 2935
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-pear-text-muted mt-6">
          This page is available offline thanks to our Progressive Web App
          technology
        </p>
      </div>
    </div>
  );
}
