import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Pear Tree Dental",
  description: "Our terms of service outline the rules and guidelines for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-32 bg-gradient-to-br from-pear-background/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg">
            <h2>Introduction</h2>
            <p>
              These terms and conditions govern your use of the Pear Tree Dental website and services.
              By accessing or using our website, you agree to be bound by these terms.
            </p>

            <h2>Website Use</h2>
            <p>
              The content on our website is for general information and educational purposes only.
              It should not be used as a substitute for professional dental advice, diagnosis, or treatment.
            </p>

            <h2>Appointments and Cancellations</h2>
            <p>
              When booking appointments through our website, you agree to provide accurate information.
              We require at least 24 hours' notice for cancellations. Late cancellations or missed
              appointments may incur a fee.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software,
              is the property of Pear Tree Dental and is protected by copyright and other intellectual
              property laws.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Pear Tree Dental shall not be liable for any direct, indirect, incidental, special,
              or consequential damages resulting from the use or inability to use our services or
              for the cost of procurement of substitute services.
            </p>

            <h2>User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account information
              and for all activities that occur under your account. You agree to notify us immediately
              of any unauthorized use of your account.
            </p>

            <h2>Payment Terms</h2>
            <p>
              For services that require payment, we provide clear information about the fees before
              you confirm the service. Payment is expected at the time of service unless other
              arrangements have been made.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of
              significant changes. Your continued use of our website after such modifications
              constitutes your acceptance of the new terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the United Kingdom. Any disputes relating to
              these terms will be subject to the exclusive jurisdiction of the courts of the United Kingdom.
            </p>

            <div className="mt-10">
              <Link
                href="/"
                className="text-pear-primary hover:text-pear-primary-dark font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
