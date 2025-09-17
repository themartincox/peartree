import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pear Tree Dental",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-32 bg-gradient-to-br from-pear-background/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg">
            <h2>Introduction</h2>
            <p>
              This Privacy Policy outlines how Pear Tree Dental collects, uses, maintains, and discloses
              information collected from users of our website and services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect personal identification information from users in various ways, including
              when users visit our site, register, fill out a form, and in connection with other
              activities, services, features, or resources we make available.
            </p>

            <h2>How We Use Collected Information</h2>
            <p>
              Pear Tree Dental collects and uses personal information for the following purposes:
            </p>
            <ul>
              <li>To improve customer service</li>
              <li>To personalize user experience</li>
              <li>To improve our website</li>
              <li>To process transactions</li>
              <li>To send periodic emails</li>
            </ul>

            <h2>How We Protect Your Information</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security
              measures to protect against unauthorized access, alteration, disclosure, or destruction
              of your personal information.
            </p>

            <h2>Sharing Your Personal Information</h2>
            <p>
              We do not sell, trade, or rent users' personal identification information to others.
              We may share generic aggregated demographic information not linked to any personal
              identification information regarding visitors and users with our business partners,
              trusted affiliates, and advertisers.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              Pear Tree Dental has the discretion to update this privacy policy at any time. We
              encourage users to frequently check this page for any changes. You acknowledge and
              agree that it is your responsibility to review this privacy policy periodically and
              become aware of modifications.
            </p>

            <h2>Your Acceptance of These Terms</h2>
            <p>
              By using this site, you signify your acceptance of this policy. If you do not agree
              to this policy, please do not use our site. Your continued use of the site following
              the posting of changes to this policy will be deemed your acceptance of those changes.
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
