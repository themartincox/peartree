"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Download, Eye } from "lucide-react";
import { jsPDF } from "jspdf";

interface TermsAndConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
  planPrice?: string;
}

const plans = {
  planA: { name: "PLAN A", price: "£10.95" },
  planB: { name: "PLAN B", price: "£15.95" },
  planC: { name: "PLAN C", price: "£19.95" },
  planD: { name: "PLAN D", price: "£25.95" },
  planE: { name: "PLAN E", price: "£29.95" },
  family: { name: "FAMILY PLAN", price: "£49.50" }
};

export default function TermsAndConditionsModal({
  isOpen,
  onClose,
  selectedPlan = "planB",
  planPrice
}: TermsAndConditionsModalProps) {
  const currentPlan = plans[selectedPlan as keyof typeof plans] || plans.planB;

  const handleDownload = () => {
    const doc = new jsPDF();
    let yPosition = 20;

    // Header
    doc.setFontSize(20);
    doc.setTextColor(9, 57, 77);
    doc.text('PEAR TREE DENTAL PRACTICE', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(16);
    doc.text('MEMBERSHIP TERMS & CONDITIONS', 20, yPosition);
    yPosition += 15;

    // Plan details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Selected Plan: ${currentPlan.name}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Monthly Fee: ${planPrice || currentPlan.price}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Generated: ${new Date().toLocaleDateString('en-GB')}`, 20, yPosition);
    yPosition += 15;

    // Content sections
    const sections = [
      { title: '1. MEMBERSHIP AGREEMENT', content: 'This Dental Care Plan agreement is between you (the Patient) and Pear Tree Dental Practice. Your membership begins on the start date specified in your application and continues monthly until cancelled by either party with one month\'s written notice.' },
      { title: '2. PAYMENT TERMS', content: `Monthly payments of ${planPrice || currentPlan.price} are collected by Direct Debit on the same date each month. The first payment will be taken on your specified start date. If payment fails, we reserve the right to suspend membership benefits until payment is received.` },
      { title: '3. WHAT\'S INCLUDED', content: `Your ${currentPlan.name} includes: ${getPlanBenefits()}, Worldwide dental accident & emergency cover, 10% discount on additional treatments, Priority appointment booking.` },
      { title: '4. WHAT\'S NOT INCLUDED', content: 'Laboratory fees and prescription charges, Specialist referrals, OPG x-rays and advanced imaging, Orthodontic treatment, Dental implants and oral surgery. These treatments are available at a 10% discount to plan members.' },
      { title: '5. CANCELLATION', content: 'Either party may cancel with one month\'s written notice. On cancellation, any treatments received in excess of payments made must be paid at our standard private rates.' },
      { title: '6. DATA PROTECTION', content: 'We process your personal data in accordance with GDPR and our Privacy Policy. Your data is used solely for providing dental care and managing your membership.' }
    ];

    sections.forEach(section => {
      // Check if we need a new page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(12);
      doc.setTextColor(9, 57, 77);
      doc.text(section.title, 20, yPosition);
      yPosition += 8;

      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const lines = doc.splitTextToSize(section.content, 170);
      lines.forEach(line => {
        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(line, 20, yPosition);
        yPosition += 6;
      });
      yPosition += 8;
    });

    // Practice details
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(12);
    doc.setTextColor(9, 57, 77);
    doc.text('PRACTICE CONTACT DETAILS', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('Pear Tree Dental Practice', 20, yPosition);
    yPosition += 6;
    doc.text('22 Nottingham Road, Burton Joyce', 20, yPosition);
    yPosition += 6;
    doc.text('Nottingham, UK, NG14 5AE', 20, yPosition);
    yPosition += 6;
    doc.text('Tel: 0115 931 2525', 20, yPosition);
    yPosition += 6;
    doc.text('Email: hello@peartree.dental', 20, yPosition);

    // Save the PDF
    doc.save(`Pear-Tree-Dental-Terms-Conditions-${currentPlan.name.replace(/\s+/g, '-')}.pdf`);
  };

  const getPlanBenefits = () => {
    switch(selectedPlan) {
      case 'planA': return '1 Dental examination per year, 1 Scale & polish per year';
      case 'planB': return '2 Dental examinations per year, 1 Scale & polish per year';
      case 'planC': return '2 Dental examinations per year, 2 Scale & polishes per year';
      case 'planD': return '2 Dental examinations per year, 2 Scale & polishes per year, 1 Free emergency appointment per year, 50% discount on stain removal';
      case 'planE': return '2 Dental examinations per year, 4 Scale & polishes per year, 1 Free emergency appointment per year, 50% discount on stain removal';
      case 'family': return '2 Adults receive Plan C benefits, Children under 18 included free';
      default: return '2 Dental examinations per year, 1 Scale & polish per year';
    }
  };

  const generateTermsContent = () => {
    return `PEAR TREE DENTAL PRACTICE
MEMBERSHIP TERMS & CONDITIONS

Selected Plan: ${currentPlan.name}
Monthly Fee: ${planPrice || currentPlan.price}
Generated: ${new Date().toLocaleDateString('en-GB')}

1. MEMBERSHIP AGREEMENT
This Dental Care Plan agreement is between you (the Patient) and Pear Tree Dental Practice. Your membership begins on the start date specified in your application and continues monthly until cancelled by either party with one month's written notice.

2. PAYMENT TERMS
2.1 Monthly payments of ${planPrice || currentPlan.price} are collected by Direct Debit on the same date each month.
2.2 The first payment will be taken on your specified start date.
2.3 If payment fails, we reserve the right to suspend membership benefits until payment is received.
2.4 Missed appointments may be charged at our standard private rates.

3. WHAT'S INCLUDED IN YOUR ${currentPlan.name}
${selectedPlan === 'planA' ?
`- 1 Dental examination per year
- 1 Scale & polish per year` :
selectedPlan === 'planB' ?
`- 2 Dental examinations per year
- 1 Scale & polish per year` :
selectedPlan === 'planC' ?
`- 2 Dental examinations per year
- 2 Scale & polishes per year` :
selectedPlan === 'planD' ?
`- 2 Dental examinations per year
- 2 Scale & polishes per year
- 1 Free emergency appointment per year
- 50% discount on stain removal` :
selectedPlan === 'planE' ?
`- 2 Dental examinations per year
- 4 Scale & polishes per year (every 3 months)
- 1 Free emergency appointment per year
- 50% discount on stain removal` :
`- 2 Adults receive Plan C benefits
- Children under 18 included free
- All family members at same address`}
- Worldwide dental accident & emergency cover
- 10% discount on additional treatments
- Priority appointment booking

4. WHAT'S NOT INCLUDED
4.1 Laboratory fees and prescription charges
4.2 Specialist referrals and second opinions
4.3 OPG x-rays, CT scans, and advanced imaging
4.4 Orthodontic treatment (braces/aligners)
4.5 Dental implants and oral surgery
4.6 Treatments deemed cosmetic only
These treatments are available at a 10% discount to plan members.

5. APPOINTMENTS
5.1 You must book appointments within your plan allowance during the membership year.
5.2 Missed appointments without 24 hours notice may be charged.
5.3 Emergency appointments are subject to availability.
5.4 Plan allowances do not roll over to the following year.

6. CANCELLATION
6.1 Either party may cancel with one month's written notice.
6.2 On cancellation, any treatments received in excess of payments made must be paid at our standard private rates, less plan payments already made.
6.3 No refunds are given for unused treatments.
6.4 Membership cannot be paused or suspended.

7. CHANGES TO TERMS
7.1 We may update these terms with one month's written notice.
7.2 Changes to pricing require two months' written notice.
7.3 Continued membership after notice constitutes acceptance.

8. TREATMENT STANDARDS
8.1 All treatments are subject to clinical assessment.
8.2 Treatment must be carried out at Pear Tree Dental Practice.
8.3 We reserve the right to decline treatment if clinically inappropriate.
8.4 Emergency cover is provided through our insurance partner.

9. DATA PROTECTION
9.1 We process personal data in accordance with GDPR and our Privacy Policy.
9.2 Data is used solely for dental care and membership management.
9.3 Marketing communications are optional and can be opted out anytime.

10. LIABILITY
10.1 Our liability is limited to the annual membership fee paid.
10.2 We maintain professional indemnity insurance.
10.3 Emergency worldwide cover is provided by our insurance partner.

11. DISPUTES
11.1 Any disputes should first be raised with the practice manager.
11.2 Unresolved complaints can be referred to the Dental Complaints Service.
11.3 These terms are governed by English law.

PRACTICE DETAILS
Pear Tree Dental Practice
22 Nottingham Road, Burton Joyce
Nottingham, UK, NG14 5AE
Tel: 0115 931 2525
Email: hello@peartree.dental

GDC Registration Numbers:
- Javaad Mirza - MD, BDS (GDC: 290378)
- Imrana Ishaque - BDS, MFDS (GDC: 252578)
- Janet Kerr - BDS LDS RCS - (GDC: 60861)

Last Updated: ${new Date().toLocaleDateString('en-GB')}
`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-pear-primary">Terms & Conditions</h2>
            <p className="text-gray-600">Selected Plan: {currentPlan.name} - {planPrice || currentPlan.price}/month</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-1" />
              Download
            </Button>
            <Button size="sm" variant="ghost" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 prose prose-sm max-w-none">
          <div className="mb-6 p-4 bg-pear-primary/5 rounded-lg border border-pear-primary/20">
            <h3 className="text-lg font-semibold text-pear-primary mb-2">Your Membership Details</h3>
            <p><strong>Plan:</strong> {currentPlan.name}</p>
            <p><strong>Monthly Fee:</strong> {planPrice || currentPlan.price}</p>
            <p><strong>Generated:</strong> {new Date().toLocaleDateString('en-GB')}</p>
          </div>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">1. MEMBERSHIP AGREEMENT</h3>
            <p className="text-gray-700 leading-relaxed">
              This Dental Care Plan agreement is between you (the Patient) and Pear Tree Dental Practice.
              Your membership begins on the start date specified in your application and continues monthly
              until cancelled by either party with one month's written notice.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">2. PAYMENT TERMS</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Monthly payments of <strong>{planPrice || currentPlan.price}</strong> are collected by Direct Debit on the same date each month</li>
              <li>The first payment will be taken on your specified start date</li>
              <li>If payment fails, we reserve the right to suspend membership benefits until payment is received</li>
              <li>Missed appointments may be charged at our standard private rates</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">3. WHAT'S INCLUDED IN YOUR {currentPlan.name}</h3>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
              <ul className="list-disc list-inside space-y-1 text-green-800">
                {selectedPlan === 'planA' && (
                  <>
                    <li>1 Dental examination per year</li>
                    <li>1 Scale & polish per year</li>
                  </>
                )}
                {selectedPlan === 'planB' && (
                  <>
                    <li>2 Dental examinations per year</li>
                    <li>1 Scale & polish per year</li>
                  </>
                )}
                {selectedPlan === 'planC' && (
                  <>
                    <li>2 Dental examinations per year</li>
                    <li>2 Scale & polishes per year</li>
                  </>
                )}
                {selectedPlan === 'planD' && (
                  <>
                    <li>2 Dental examinations per year</li>
                    <li>2 Scale & polishes per year</li>
                    <li>1 Free emergency appointment per year</li>
                    <li>50% discount on stain removal</li>
                  </>
                )}
                {selectedPlan === 'planE' && (
                  <>
                    <li>2 Dental examinations per year</li>
                    <li>4 Scale & polishes per year (every 3 months)</li>
                    <li>1 Free emergency appointment per year</li>
                    <li>50% discount on stain removal</li>
                  </>
                )}
                {selectedPlan === 'family' && (
                  <>
                    <li>2 Adults receive Plan C benefits</li>
                    <li>Children under 18 included free</li>
                    <li>All family members must live at same address</li>
                  </>
                )}
                <li>Worldwide dental accident & emergency cover</li>
                <li>20% discount on additional treatments</li>
                <li>Priority appointment booking</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">4. WHAT'S NOT INCLUDED</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Laboratory fees and prescription charges</li>
              <li>Specialist referrals and second opinions</li>
              <li>OPG x-rays, CT scans, and advanced imaging</li>
              <li>Orthodontic treatment (braces/aligners)</li>
              <li>Dental implants and oral surgery</li>
              <li>Treatments deemed cosmetic only</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2 italic">
              These treatments are available at a 10% discount to plan members.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">5. APPOINTMENTS</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>You must book appointments within your plan allowance during the membership year</li>
              <li>Missed appointments without 24 hours notice may be charged</li>
              <li>Emergency appointments are subject to availability</li>
              <li>Plan allowances do not roll over to the following year</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">6. CANCELLATION</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Either party may cancel with one month's written notice</li>
              <li>On cancellation, any treatments received in excess of payments made must be paid at our standard private rates</li>
              <li>No refunds are given for unused treatments</li>
              <li>Membership cannot be paused or suspended</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">7. DATA PROTECTION</h3>
            <p className="text-gray-700 leading-relaxed">
              We process your personal data in accordance with GDPR and our Privacy Policy.
              Your data is used solely for providing dental care and managing your membership.
              Marketing communications are optional and can be opted out of at any time.
            </p>
          </section>

          <section className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">PRACTICE CONTACT DETAILS</h3>
            <div className="text-gray-700">
              <p><strong>Pear Tree Dental Practice</strong></p>
              <p>22 Nottingham Road, Burton Joyce</p>
              <p>Nottingham, UK, NG14 5AE</p>
              <p>Tel: 0115 931 2525</p>
              <p>Email: hello@peartree.dental</p>
            </div>
          </section>

          <div className="text-center text-sm text-gray-500 border-t pt-4">
            <p>Last Updated: {new Date().toLocaleDateString('en-GB')}</p>
            <p>This document was generated for your selected membership plan</p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t p-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download Copy
          </Button>
          <Button onClick={onClose} className="bg-pear-primary hover:bg-pear-primary/90">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
