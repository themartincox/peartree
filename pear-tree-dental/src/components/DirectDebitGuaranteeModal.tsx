"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Download, Shield } from "lucide-react";
import { jsPDF } from "jspdf";

interface DirectDebitGuaranteeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DirectDebitGuaranteeModal({ isOpen, onClose }: DirectDebitGuaranteeModalProps) {

  const handleDownload = () => {
    const doc = new jsPDF();
    let yPosition = 20;

    // Header
    doc.setFontSize(20);
    doc.setTextColor(9, 57, 77);
    doc.text('DIRECT DEBIT GUARANTEE', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(14);
    doc.text('Pear Tree Dental Practice', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Generated: ${new Date().toLocaleDateString('en-GB')}`, 20, yPosition);
    yPosition += 15;

    // Main guarantee text
    doc.setFontSize(12);
    doc.setTextColor(9, 57, 77);
    doc.text('THE DIRECT DEBIT GUARANTEE', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    const guaranteeText = 'This Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits. If there are any changes to the amount, date or frequency of your Direct Debit, Pear Tree Dental Practice will notify you 10 working days in advance of your account being debited or as otherwise agreed. If an error is made in the payment of your Direct Debit, by Pear Tree Dental Practice or your bank or building society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.';

    const guaranteeLines = doc.splitTextToSize(guaranteeText, 170);
    guaranteeLines.forEach(line => {
      if (yPosition > 280) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, 20, yPosition);
      yPosition += 6;
    });
    yPosition += 10;

    // Rights section
    doc.setFontSize(12);
    doc.setTextColor(9, 57, 77);
    doc.text('YOUR RIGHTS AS A DIRECT DEBIT PAYER', 20, yPosition);
    yPosition += 10;

    const rights = [
      'ADVANCE NOTIFICATION: We will give you at least 10 working days\' notice of any changes.',
      'IMMEDIATE REFUND RIGHTS: If an error is made by us or your bank, you are entitled to an immediate and full refund.',
      'CANCELLATION RIGHTS: You can cancel your Direct Debit at any time by contacting your bank.',
      'PROTECTION GUARANTEE: This guarantee is backed by all UK banks and building societies.'
    ];

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    rights.forEach(right => {
      if (yPosition > 280) {
        doc.addPage();
        yPosition = 20;
      }
      const rightLines = doc.splitTextToSize(`• ${right}`, 170);
      rightLines.forEach(line => {
        doc.text(line, 20, yPosition);
        yPosition += 6;
      });
      yPosition += 3;
    });

    yPosition += 10;

    // Practice contact details
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
    doc.save('Pear-Tree-Dental-Direct-Debit-Guarantee.pdf');
  };

  const generateGuaranteeContent = () => {
    return `DIRECT DEBIT GUARANTEE
Pear Tree Dental Practice

Generated: ${new Date().toLocaleDateString('en-GB')}

THE DIRECT DEBIT GUARANTEE

This Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits.

If there are any changes to the amount, date or frequency of your Direct Debit Pear Tree Dental Practice will notify you 10 working days in advance of your account being debited or as otherwise agreed. If you request Pear Tree Dental Practice to collect a payment, confirmation of the amount and date will be given to you at the time of the request.

If an error is made in the payment of your Direct Debit, by Pear Tree Dental Practice or your bank or building society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.

- If you receive a refund you are not entitled to, you must pay it back when Pear Tree Dental Practice asks you to.

You can cancel a Direct Debit at any time by simply contacting your bank or building society. Written confirmation may be required. Please also notify us.

YOUR RIGHTS AS A DIRECT DEBIT PAYER:

1. ADVANCE NOTIFICATION
We will give you at least 10 working days' notice of any changes to the amount, date or frequency of your Direct Debit.

2. IMMEDIATE REFUND RIGHTS
If an error is made by us or your bank, you are entitled to an immediate and full refund from your bank or building society.

3. CANCELLATION RIGHTS
You can cancel your Direct Debit at any time by contacting your bank or building society. Please also inform us of any cancellation.

4. PROTECTION GUARANTEE
This guarantee is backed by all UK banks and building societies that participate in the Direct Debit scheme.

PRACTICE DETAILS:
Pear Tree Dental Practice
22 Nottingham Road, Burton Joyce
Nottingham, UK, NG14 5AE
Tel: 0115 931 2525
Email: hello@peartree.dental

Service User Number: [SUN Number]
Sort Code: [Practice Sort Code]
Account Number: [Practice Account]

For Direct Debit enquiries, please contact our practice directly.

Last Updated: ${new Date().toLocaleDateString('en-GB')}
`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-pear-primary">Direct Debit Guarantee</h2>
              <p className="text-gray-600">Your rights and protections</p>
            </div>
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
        <div className="p-6">
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-800">Protected by UK Banking Standards</h3>
            </div>
            <p className="text-blue-700 text-sm">
              This guarantee is offered by all banks and building societies that accept Direct Debit instructions.
            </p>
          </div>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">THE DIRECT DEBIT GUARANTEE</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                This Guarantee is offered by all banks and building societies that accept
                instructions to pay Direct Debits.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If there are any changes to the amount, date or frequency of your Direct Debit,
                <strong> Pear Tree Dental Practice will notify you 10 working days in advance</strong> of
                your account being debited or as otherwise agreed. If you request Pear Tree Dental Practice
                to collect a payment, confirmation of the amount and date will be given to you at the time
                of the request.
              </p>

              <p className="text-gray-700 leading-relaxed">
                If an error is made in the payment of your Direct Debit, by Pear Tree Dental Practice
                or your bank or building society, <strong>you are entitled to a full and immediate refund</strong>
                of the amount paid from your bank or building society.
              </p>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">YOUR RIGHTS AS A DIRECT DEBIT PAYER</h3>

            <div className="space-y-4">
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">1. ADVANCE NOTIFICATION</h4>
                <p className="text-green-700 text-sm">
                  We will give you at least <strong>10 working days' notice</strong> of any changes
                  to the amount, date or frequency of your Direct Debit.
                </p>
              </div>

              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">2. IMMEDIATE REFUND RIGHTS</h4>
                <p className="text-blue-700 text-sm">
                  If an error is made by us or your bank, you are entitled to an
                  <strong> immediate and full refund</strong> from your bank or building society.
                </p>
              </div>

              <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-2">3. CANCELLATION RIGHTS</h4>
                <p className="text-orange-700 text-sm">
                  You can <strong>cancel your Direct Debit at any time</strong> by contacting your
                  bank or building society. Please also inform us of any cancellation.
                </p>
              </div>

              <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                <h4 className="font-semibold text-purple-800 mb-2">4. PROTECTION GUARANTEE</h4>
                <p className="text-purple-700 text-sm">
                  This guarantee is <strong>backed by all UK banks and building societies</strong>
                  that participate in the Direct Debit scheme.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">IMPORTANT NOTES</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 text-yellow-800 text-sm">
                <li>If you receive a refund you are not entitled to, you must pay it back when we ask you to</li>
                <li>Written confirmation may be required when cancelling through your bank</li>
                <li>Please notify both your bank and our practice if you cancel your Direct Debit</li>
                <li>All Direct Debit collections are protected under UK banking regulations</li>
              </ul>
            </div>
          </section>

          <section className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-pear-primary mb-3">PRACTICE CONTACT DETAILS</h3>
            <div className="text-gray-700 text-sm space-y-1">
              <p><strong>Pear Tree Dental Practice</strong></p>
              <p>22 Nottingham Road, Burton Joyce</p>
              <p>Nottingham, UK, NG14 5AE</p>
              <p><strong>Tel:</strong> 0115 931 2525</p>
              <p><strong>Email:</strong> hello@peartree.dental</p>
              <div className="mt-3 pt-3 border-t border-gray-300">
                <p className="text-xs text-gray-600">
                  For Direct Debit enquiries, please contact our practice directly during business hours.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center text-sm text-gray-500 border-t pt-4">
            <p>Generated: {new Date().toLocaleDateString('en-GB')}</p>
            <p>This guarantee complies with UK Direct Debit scheme rules</p>
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
