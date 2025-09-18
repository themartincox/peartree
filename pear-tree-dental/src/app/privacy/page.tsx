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
              Who we are
Pear Tree Dental (the “Practice”, “we”, “us”, “our”) operates the website peartree.dental and provides dental care services at Burton Joyce, Nottinghamshire, UK (full address: 22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE) We are the data controller for personal information processed in connection with our services and this website.
Contact (data protection):
●	Email: Peartreedentalcentre@outlook.com

●	Phone: 0115 931 2935

●	Postal: Pear Tree Dental, 22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE

What this policy covers
This policy explains what personal data we collect, why and how we use it, our lawful bases, who we share it with, how long we keep it, and your rights under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.

            </p>

            <h2>Information We Collect</h2>
            <p>
              Depending on how you interact with us, we may process:
Patient & enquiry data
●	Identity & contact: name, date of birth, address, email, phone, emergency contact.

●	Clinical information (special category): medical/dental history, notes, images, x‑rays, prescriptions, referrals, contraindications, allergies.

●	Appointment & billing: appointment history, payments, deposits, insurance details, UTR/NHS number (if relevant), membership plan data (if applicable).

●	Communications: messages sent via forms, email, phone, SMS/WhatsApp, chatbot transcripts.

Website & device data
●	Usage data: pages visited, links clicked, time on page, referrers, UTM parameters, campaign tags.

●	Technical data: IP address, browser, OS, device identifiers, PWA/app install state.

●	Approximate location: derived from IP/geolocation to show distance/driving directions to the practice.

●	Cookies & similar tech: see Cookies below.

Recruitment
●	Applicant data: CV, cover letter, employment history, referees, right‑to‑work documentation.

            </p>

            <h2>Lawful bases for processing</h2>
            <p>
              We rely on one or more of the following legal bases:
●	Consent (Art. 6(1)(a)) for optional communications (e.g., marketing), certain cookies/analytics, and where we ask for explicit consent to process health data (Art. 9(2)(a)) beyond clinical necessity.

●	Contract (Art. 6(1)(b)) to take steps at your request before entering into a contract and to provide treatments, bookings, and membership plans you request.

●	Legal obligation (Art. 6(1)(c)) to maintain clinical records, comply with dental regulations, taxation, anti‑fraud and CQC/GDC obligations.

●	Vital interests (Art. 6(1)(d) / Art. 9(2)(c)) in rare emergencies to protect life.

●	Legitimate interests (Art. 6(1)(f)) for website security, spam/fraud prevention, service improvement, and anonymised analytics that respect your rights and freedoms.

How we use your information
●	To register you as a patient, assess suitability for treatment, and deliver dental care.

●	To manage appointments, deposits, reminders, and follow‑ups.

●	To process payments, issue invoices/receipts, and prevent fraud.

●	To respond to enquiries and handle complaints (see Complaints)

●	To provide our website, improve performance, and measure marketing effectiveness.

●	To meet legal and regulatory requirements (CQC/GDC, clinical governance, safeguarding).



            <h2>Sources of data</h2>
            <p>
              Most data comes directly from you. We may also receive information from: your previous dentist or GP (with consent), referral partners, insurers, payment providers, and—where relevant—your parent/guardian or carer.
            </p>


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

We share data only as necessary with trusted data processors and partners under appropriate contracts, including:
●	Hosting & infrastructure: Netlify (site hosting), [CDN provider], backups.

●	CMS & forms/databases: Contentful (content), Supabase/secure forms/database for leads and appointment requests.

●	Analytics & performance: privacy‑respecting analytics; Google Analytics 4 (if enabled) with IP anonymisation.

●	Communications: email and SMS providers; practice management and appointment systems; secure imaging/lab partners.

●	Payment processing: PCI‑compliant payment processors for deposits and balances.

●	Regulators/authorities: CQC, GDC, NHS, HMRC, law enforcement where legally required.

A current list of key processors can be obtained by contacting us.


            </p>

<h2>Retention</h2>
            <p>
●	Clinical records: retained in line with professional guidance and legal requirements; typically at least 11 years for adults and until age 25 for children (or longer if required by law or for ongoing care/defence of legal claims).

●	Enquiry & booking data: usually up to 24 months from last contact if you do not become a patient.

●	Marketing data: until you opt out or withdraw consent; we routinely refresh and minimise data.

●	Recruitment: usually 6 months for unsuccessful applicants unless you consent to a talent pool.

We securely delete or anonymise data when it is no longer needed.

            </p>

<h2>Cookies and similar technologies</h2>
            <p>
              We use:
●	Essential cookies for security, load balancing, and core site features (cannot be switched off).

●	Analytics/performance (consent‑based where required) to understand how the site is used and improve it (e.g., Google Analytics 4 with IP anonymisation).

●	Preference cookies to remember choices (e.g., PWA install state).

reCAPTCHA & spam protection: If enabled on forms, Google reCAPTCHA helps prevent abuse. Its use is subject to Google’s Privacy Policy and Terms of Service.
Managing cookies: You can accept/decline non‑essential cookies via our banner (where shown) and in your browser settings. Blocking some cookies may impact site functionality, including driving‑direction and performance features.
Security
We use appropriate technical and organisational measures including encryption in transit (HTTPS), access controls, least‑privilege staff access, and regular reviews. No system is 100% secure; please contact us immediately if you suspect misuse of your data.

            </p>

<h2>Children</h2>
            <p>
              We process children’s data with appropriate safeguards and, where required, parental responsibility/consent. Please contact us for guidance if you are a parent/guardian.
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
