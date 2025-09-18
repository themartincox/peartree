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
            <h2>Website Terms of Use & Booking Terms</h2>
            <p>
              These Terms govern your use of peartree.dental (the “Site”) and—where offered—our online booking and deposit services. By using the Site, you agree to these Terms. If you do not agree, do not use the Site.
●	Provider: Pear Tree Dental, 22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE, Peartreedentalcentre@outlook.com , 0115 931 2935


●	Regulation: We are regulated by the Care Quality Commission (CQC) and our dental professionals are regulated by the General Dental Council (GDC). 
●	CQC registration details
●	The Pear Tree Dental Centre Limited,
●	Provider ID:1-152985637
●	Location ID: 1-197783918


            </p>

            <h2>Website Use</h2>
            <p>
              ●	The Site is provided on an “as is” and “as available” basis for general information about our services.

●	Do not misuse the Site (e.g., introduce malware, attempt unauthorised access, scrape content, or disrupt service).

●	We may suspend or withdraw the Site without notice for maintenance or security.

<h2No medical advice</h2>
Content on the Site (including articles and educational material) is general information and not medical advice. Always seek a professional assessment. Individual treatment suitability is determined only after a clinical examination by a qualified dentist.


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

            <h2>Intellectual property and Third-part Links</h2>
            <p>
            
All content on the Site (text, design, graphics, logos, images, video, code) is owned by or licensed to us. You must not reproduce, adapt, or republish content without our prior written permission, except for personal, non‑commercial use and fair dealing permitted by law.

Links to third‑party sites are provided for convenience only. We are not responsible for their content, accuracy or availability.

            </p>

            <h2>Online booking & deposits</h2>
            <p>
            
Bookings: When you request an appointment online, we will confirm by email/SMS or propose alternatives. An appointment is not final until confirmed by us.

Deposits: Certain appointments/treatments may require a deposit to secure your booking. The deposit will be credited against your treatment cost.

Cancellations & rescheduling: Please give at least 48 hours’ notice to cancel or reschedule. With less notice, we may retain the deposit or apply a missed‑appointment fee to cover clinical time.

Failure to attend (FTA)/late arrival: If you do not attend or arrive too late for treatment to proceed safely, we may retain your deposit and ask you to rebook.

Refunds: Where due, refunds are made to the original payment method. Please allow up to 10 working days for processing by your card provider.
Cooling‑off: Your statutory rights under UK consumer law are not affected. Where services are scheduled to be provided within any cooling‑off period, you consent to us beginning the service and acknowledge that reasonable charges may apply if you subsequently cancel.

Clinical judgement: Final treatment decisions rest with the clinician after examination and consent. If a treatment is not clinically appropriate, we will explain alternatives and refund any deposit for the unavailable service.


            </p>
<h2>Prices & payments including Membership plans</h2>
<p>
Indicative prices may be shown on the Site and are subject to examination and treatment planning. We will provide itemised estimates before treatment.

We accept various payment methods (details provided at the practice or during online checkout). Balances are typically due on the day of treatment unless agreed otherwise.

Membership plans 
Where offered, plan terms, fees, and eligibility criteria will be provided separately. Any finance products are subject to status and terms of the finance provider.


            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of
              significant changes. Your continued use of our website after such modifications
              constitutes your acceptance of the new terms.
            </p>


            <h2>User submissions & reviews</h2>
            <p>
              Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded under law. Subject to the foregoing, we are not liable for: (a) indirect or consequential loss; (b) loss of data; (c) business losses; or (d) reliance on Site content.
            </p>


            <h2>Limitation of liability</h2>
            <p>
              These Terms are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction, except that consumers resident elsewhere in the UK may bring claims in their local courts.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction, except that consumers resident elsewhere in the UK may bring claims in their local courts.
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
