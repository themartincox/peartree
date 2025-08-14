"use client";

import { Download, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DirectDebitGuaranteeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DirectDebitGuaranteeModal({
  isOpen,
  onClose,
}: DirectDebitGuaranteeModalProps) {
  if (!isOpen) return null;

  const downloadGuarantee = () => {
    const guaranteeText = `
DIRECT DEBIT GUARANTEE

Originator's Identification Number: 575171

Instructions to your Bank or Building Society
Please pay Membership Plans Limited Direct Debits from account detailed in this instruction subject to the safeguards assumed by the Direct Debit Guarantee. I understand that this instruction may remain with Membership Plans Limited and, if so, details will be passed electronically to my Bank/Building Society.

Banks and Building Societies may not accept Direct Debit Instructions for some types of account.

DD15 The Direct Debit Guarantee

• This Guarantee is offered by all Banks and Building Societies that accept instructions to pay Direct Debits.

• If there are any changes to the amount, date or frequency of your Direct Debit, Membership Plans Limited will notify you 10 working days in advance of your account being debited or as otherwise agreed. If you request Membership Plans Limited to collect a payment, confirmation of the amount and date will be given at the time of the request.

• If an error is made in the payment of your Direct Debit by Membership Plans Limited or your Bank or Building Society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.

• If you receive a refund you are not entitled to, you must pay it back when Membership Plans Limited asks you to.

• You can cancel a Direct Debit at any time by simply contacting your bank or building society. Written confirmation may be required. Please notify us.

Membership Plans Ltd trading as Lloyd & Whyte Flexiplan is registered in England No 06322047. Registered Office: Affinity House, Bindon Road, Taunton, TA2 6AA.
    `;

    const blob = new Blob([guaranteeText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Direct-Debit-Guarantee-Pear-Tree-Dental.txt";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Shield className="w-6 h-6 text-blue-600" />
            Direct Debit Guarantee
          </CardTitle>
          <div className="flex gap-2">
            <Button onClick={downloadGuarantee} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button onClick={onClose} variant="ghost" size="sm">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Originator ID */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">
                Originator's Identification Number
              </h3>
              <div className="text-2xl font-mono font-bold text-blue-900 tracking-wider">
                5 7 5 1 7 1
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Instructions to your Bank or Building Society
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Please pay Membership Plans Limited Direct Debits from account
                detailed in this instruction subject to the safeguards assumed
                by the Direct Debit Guarantee. I understand that this
                instruction may remain with Membership Plans Limited and, if so,
                details will be passed electronically to my Bank/Building
                Society.
              </p>
              <p className="text-sm text-gray-600 mt-2 italic">
                Banks and Building Societies may not accept Direct Debit
                Instructions for some types of account.
              </p>
            </div>

            {/* DD15 Guarantee */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-blue-800">
                DD15 The Direct Debit Guarantee
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    This Guarantee is offered by all Banks and Building
                    Societies that accept instructions to pay Direct Debits.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    If there are any changes to the amount, date or frequency of
                    your Direct Debit, Membership Plans Limited will notify you
                    10 working days in advance of your account being debited or
                    as otherwise agreed. If you request Membership Plans Limited
                    to collect a payment, confirmation of the amount and date
                    will be given at the time of the request.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    If an error is made in the payment of your Direct Debit by
                    Membership Plans Limited or your Bank or Building Society,
                    you are entitled to a full and immediate refund of the
                    amount paid from your bank or building society.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    If you receive a refund you are not entitled to, you must
                    pay it back when Membership Plans Limited asks you to.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    You can cancel a Direct Debit at any time by simply
                    contacting your bank or building society. Written
                    confirmation may be required. Please notify us.
                  </span>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Company Information</h4>
              <p className="text-sm text-gray-600">
                Membership Plans Ltd trading as Lloyd & Whyte Flexiplan is
                registered in England No 06322047. <br />
                Registered Office: Affinity House, Bindon Road, Taunton, TA2
                6AA.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
