import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Pear Tree Dental",
  description:
    "Our terms of service outline the rules and guidelines for using our website and services.",
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
            <h2>Website Terms of Use &amp; Booking Terms</h2>
            <p>
              These Terms govern your use of peartree.dental (the “Site”) and—where
              offered—our online booking and deposit services. By using the Site, you
              agree to these Terms. If you do not agree, do not use the Site.
            </p>
            <ul>
              <li>
                <strong>Provider:</strong> Pear Tree Dental, 22 Nottingham Rd, Burton Joyce,
                Nottingham NG14 5AE,{" "}
                <a href="mailto:Peartreedentalcentre@outlook.com">
                  Peartreedentalcentre@outlook.com
                </a>
                , 0115 931 2935
              </li>
              <li>
                <strong>Regulation:</strong> We are regulated by the Care Quality Commission
                (CQC) and our dental professionals are regulated by the General Dental
                Council (GDC).
              </li>
              <li>
                <strong>CQC registration details:</strong> The Pear Tree Dental Centre
                Limited, Provider ID: 1-152985637, Location ID: 1-197783918
              </li>
            </ul>

            <h2>Website Use</h2>
            <p>
              The Site is provided on an “as is” and “as available” basis for general
              information about our services. Do not misuse the Site (e.g., introduce
              malware, attempt unauthorised access, scrape content, or disrupt service).
              We may suspend or withdraw the Site without notice for maintenance or security.
            </p>

            <h3>No medical advice</h3>
            <p>
              Content on the Site (including articles and educational material) is general
              information and not medical advice. Always seek a professional assessment.
              Individual treatment suitability is determined only after a clinical
              examination by a qualified dentist.
            </p>

            <h2>Appointments and Cancellations</h2>
            <p>
              When booking appointments through our website, you agree to provide accurate
              information. We require at least 24 hours’ notice for cancellations. Late
              cancellations or missed appointments may incur a fee.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and
              software, is the property of Pear Tree Dental and is protected by copyright
              and other intellectual property laws. You must not reproduce, adapt, or
              republish content without our prior written permission, except for personal,
              non-commercial use and fair dealing permitted by law.
            </p>

            <h2>Third-party Links</h2>
            <p>
              Links to third-party sites are provided for convenience only. We are not
              responsible for their content, accuracy, or availability.
            </p>

            <h2>Online Booking &amp; Deposits</h2>
            <ul>
              <li>
                <strong>Bookings:</strong> When you request an appointment online, we will
                confirm by email/SMS or propose alternatives. An appointment is not final
                until confirmed by us.
              </li>
              <li>
                <strong>Deposits:</strong> Certain appointments/treatments may require a
                deposit to secure your booking. The deposit will be credited against your
                treatment cost.
              </li>
              <li>
                <strong>Cancellations &amp; rescheduling:</strong> Please give at least 48
                hours’ notice to cancel or reschedule. With less notice, we may retain the
                deposit or apply a missed-appointment fee to cover clinical time.
              </li>
              <li>
                <strong>Failure to attend (FTA) / late arrival:</strong> If you do not
                attend or arrive too late for treatment to proceed safely, we may retain
                your deposit and ask you to rebook.
              </li>
              <li>
                <strong>Refunds:</strong> Where due, refunds are made to the original
                payment method. Please allow up to 10 working days for processing by your
                card provider.
              </li>
              <li>
                <strong>Cooling-off:</strong> Your statutory rights under UK consumer law
                are not affected. Where services are scheduled to be provided within any
                cooling-off period, you consent to us beginning the service and acknowledge
                that reasonable charges may apply if you subsequently cancel.
              </li>
              <li>
                <strong>Clinical judgement:</strong> Final treatment decisions rest with the
                clinician after examination and consent. If a treatment is not clinically
                appropriate, we will explain alternatives and refund any deposit for the
                unavailable service.
              </li>
            </ul>

            <h2>Prices &amp; Payments (including Membership Plans)</h2>
            <p>
              Indicative prices may be shown on the Site and are subject to examination and
              treatment planning. We will provide itemised estimates before treatment. We
              accept various payment methods (details provided at the practice or during
              online checkout). Balances are typically due on the day of treatment unless
              agreed otherwise.
            </p>
            <p>
              <strong>Membership plans:</strong> Where offered, plan terms, fees, and
              eligibility criteria will be provided separately. Any finance products are
              subject to status and the finance provider’s terms.
            </p>

            <h2>User Submissions &amp; Reviews</h2>
            <p>
              You are responsible for any content you submit (e.g., reviews). We may
              moderate or remove submissions that are unlawful, defamatory, misleading, or
              otherwise inappropriate.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Nothing in these Terms limits or excludes liability for death or personal
              injury caused by negligence, fraud, or any liability that cannot be excluded
              under law. Subject to the foregoing, we are not liable for: (a) indirect or
              consequential loss; (b) loss of data; (c) business losses; or (d) reliance on
              Site content.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide
              notice of significant changes. Your continued use of our website after such
              modifications constitutes your acceptance of the new terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of England and Wales. The courts of
              England and Wales have exclusive jurisdiction, except that consumers resident
              elsewhere in the UK may bring claims in their local courts.
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