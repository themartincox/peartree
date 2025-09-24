import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pear Tree Dental",
  description:
    "Our privacy policy explains how we collect, use, and protect your personal information.",
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
            <h3>Who we are</h3>
            <p>
              Pear Tree Dental (the “Practice”, “we”, “us”, “our”) operates the website
              peartree.dental and provides dental care services at Burton Joyce,
              Nottinghamshire, UK (full address: 22 Nottingham Rd, Burton Joyce, Nottingham
              NG14 5AE). We are the data controller for personal information processed in
              connection with our services and this website.
            </p>

            <h3>Contact (data protection)</h3>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:Peartreedentalcentre@outlook.com">
                  Peartreedentalcentre@outlook.com
                </a>
              </li>
              <li>Phone: 0115 931 2935</li>
              <li>
                Postal: Pear Tree Dental, 22 Nottingham Rd, Burton Joyce, Nottingham NG14
                5AE
              </li>
            </ul>

            <h3>What this policy covers</h3>
            <p>
              This policy explains what personal data we collect, why and how we use it, our
              lawful bases, who we share it with, how long we keep it, and your rights under
              the UK General Data Protection Regulation (UK GDPR) and Data Protection Act
              2018.
            </p>

            <h2>Information We Collect</h2>
            <h3>Patient &amp; enquiry data</h3>
            <ul>
              <li>
                <strong>Identity &amp; contact:</strong> name, date of birth, address,
                email, phone, emergency contact.
              </li>
              <li>
                <strong>Clinical information (special category):</strong> medical/dental
                history, notes, images, x-rays, prescriptions, referrals, contraindications,
                allergies.
              </li>
              <li>
                <strong>Appointment &amp; billing:</strong> appointment history, payments,
                deposits, insurance details, UTR/NHS number (if relevant), membership plan
                data (if applicable).
              </li>
              <li>
                <strong>Communications:</strong> messages sent via forms, email, phone,
                SMS/WhatsApp, chatbot transcripts.
              </li>
            </ul>

            <h3>Website &amp; device data</h3>
            <ul>
              <li>
                <strong>Usage data:</strong> pages visited, links clicked, time on page,
                referrers, UTM parameters, campaign tags.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser, OS, device
                identifiers, PWA/app install state.
              </li>
              <li>
                <strong>Approximate location:</strong> derived from IP/geolocation to show
                distance/driving directions to the practice.
              </li>
              <li>
                <strong>Cookies &amp; similar tech:</strong> see Cookies below.
              </li>
            </ul>

            <h3>Recruitment</h3>
            <ul>
              <li>
                <strong>Applicant data:</strong> CV, cover letter, employment history,
                referees, right-to-work documentation.
              </li>
            </ul>

            <h2>Lawful bases for processing</h2>
            <ul>
              <li>
                <strong>Consent (Art. 6(1)(a))</strong> for optional communications (e.g.,
                marketing), certain cookies/analytics, and where we ask for explicit consent
                to process health data (Art. 9(2)(a)) beyond clinical necessity.
              </li>
              <li>
                <strong>Contract (Art. 6(1)(b))</strong> to take steps at your request
                before entering into a contract and to provide treatments, bookings, and
                membership plans you request.
              </li>
              <li>
                <strong>Legal obligation (Art. 6(1)(c))</strong> to maintain clinical
                records, comply with dental regulations, taxation, anti-fraud and CQC/GDC
                obligations.
              </li>
              <li>
                <strong>Vital interests (Art. 6(1)(d) / Art. 9(2)(c))</strong> in rare
                emergencies to protect life.
              </li>
              <li>
                <strong>Legitimate interests (Art. 6(1)(f))</strong> for website security,
                spam/fraud prevention, service improvement, and anonymised analytics that
                respect your rights and freedoms.
              </li>
            </ul>

            <h3>How we use your information</h3>
            <ul>
              <li>
                To register you as a patient, assess suitability for treatment, and deliver
                dental care.
              </li>
              <li>To manage appointments, deposits, reminders, and follow-ups.</li>
              <li>
                To process payments, issue invoices/receipts, and prevent fraud.
              </li>
              <li>To respond to enquiries and handle complaints (see Complaints).</li>
              <li>
                To provide our website, improve performance, and measure marketing
                effectiveness.
              </li>
              <li>
                To meet legal and regulatory requirements (CQC/GDC, clinical governance,
                safeguarding).
              </li>
            </ul>

            <h2>Sources of data</h2>
            <p>
              Most data comes directly from you. We may also receive information from: your
              previous dentist or GP (with consent), referral partners, insurers, payment
              providers, and—where relevant—your parent/guardian or carer.
            </p>

            <h2>How We Protect Your Information</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and
              security measures to protect against unauthorized access, alteration,
              disclosure, or destruction of your personal information.
            </p>

            <h2>Sharing Your Personal Information</h2>
            <p>
              We do not sell, trade, or rent users&apos; personal identification information
              to others. We may share generic aggregated demographic information not linked
              to any personal identification information regarding visitors and users with
              our business partners, trusted affiliates, and advertisers.
            </p>
            <p>We share data only as necessary with trusted processors and partners:</p>
            <ul>
              <li>
                <strong>Hosting &amp; infrastructure:</strong> Netlify (site hosting),
                CDN, backups.
              </li>
              <li>
                <strong>CMS &amp; forms/databases:</strong> Contentful (content), Supabase /
                secure forms / database for leads and appointment requests.
              </li>
              <li>
                <strong>Analytics &amp; performance:</strong> privacy-respecting analytics;
                Google Analytics 4 (if enabled) with IP anonymisation.
              </li>
              <li>
                <strong>Communications:</strong> email and SMS providers; practice
                management and appointment systems; secure imaging/lab partners.
              </li>
              <li>
                <strong>Payment processing:</strong> PCI-compliant payment processors for
                deposits and balances.
              </li>
              <li>
                <strong>Regulators/authorities:</strong> CQC, GDC, NHS, HMRC, law
                enforcement where legally required.
              </li>
            </ul>
            <p>
              A current list of key processors can be obtained by contacting us.
            </p>

            <h2>Retention</h2>
            <ul>
              <li>
                <strong>Clinical records:</strong> retained in line with professional
                guidance and legal requirements; typically at least 11 years for adults and
                until age 25 for children (or longer if required by law or for ongoing care/
                defence of legal claims).
              </li>
              <li>
                <strong>Enquiry &amp; booking data:</strong> usually up to 24 months from
                last contact if you do not become a patient.
              </li>
              <li>
                <strong>Marketing data:</strong> until you opt out or withdraw consent; we
                routinely refresh and minimise data.
              </li>
              <li>
                <strong>Recruitment:</strong> usually 6 months for unsuccessful applicants
                unless you consent to a talent pool.
              </li>
            </ul>
            <p>We securely delete or anonymise data when it is no longer needed.</p>

            <h2>Cookies and similar technologies</h2>
            <ul>
              <li>
                <strong>Essential cookies</strong> for security, load balancing, and core
                site features (cannot be switched off).
              </li>
              <li>
                <strong>Analytics/performance</strong> (consent-based where required) to
                understand how the site is used and improve it (e.g., Google Analytics 4
                with IP anonymisation).
              </li>
              <li>
                <strong>Preference cookies</strong> to remember choices (e.g., PWA install
                state).
              </li>
            </ul>
            <p>
              <strong>reCAPTCHA &amp; spam protection:</strong> If enabled on forms, Google
              reCAPTCHA helps prevent abuse. Its use is subject to Google’s Privacy Policy
              and Terms of Service.
            </p>
            <p>
              <strong>Managing cookies:</strong> You can accept/decline non-essential
              cookies via our banner (where shown) and in your browser settings. Blocking
              some cookies may impact site functionality, including driving-direction and
              performance features.
            </p>

            <h3>Security</h3>
            <p>
              We use appropriate technical and organisational measures including encryption
              in transit (HTTPS), access controls, least-privilege staff access, and regular
              reviews. No system is 100% secure; please contact us immediately if you
              suspect misuse of your data.
            </p>

            <h2>Children</h2>
            <p>
              We process children’s data with appropriate safeguards and, where required,
              parental responsibility/consent. Please contact us for guidance if you are a
              parent/guardian.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              Pear Tree Dental has the discretion to update this privacy policy at any time.
              We encourage users to frequently check this page for any changes. You
              acknowledge and agree that it is your responsibility to review this privacy
              policy periodically and become aware of modifications.
            </p>

            <h2>Your Acceptance of These Terms</h2>
            <p>
              By using this site, you signify your acceptance of this policy. If you do not
              agree to this policy, please do not use our site. Your continued use of the
              site following the posting of changes to this policy will be deemed your
              acceptance of those changes.
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