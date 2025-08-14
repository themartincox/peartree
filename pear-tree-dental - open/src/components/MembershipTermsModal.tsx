"use client";

import { Download, Scale, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MembershipTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MembershipTermsModal({
  isOpen,
  onClose,
}: MembershipTermsModalProps) {
  if (!isOpen) return null;

  const downloadTerms = () => {
    const termsText = `
MEMBERSHIP TERMS AND CONDITIONS
Pear Tree Dental Centre

1. Fees payable by the Patient

1.1 The Patient will pay the Practice a Monthly Fee as stated overleaf for the Services listed in 2.2 below.

1.2 Payments will be taken by Direct Debit, through Membership Plans Limited, part of Lloyd & Whyte Group Ltd (MP), who administer the Direct Debit facility on behalf of the Practice.

1.3 The first payment may be taken up to 2 months after the date of this Agreement due to administrative reasons and will consist of a "double payment" to include payment for the first and second month.

2. Services provided by the Practice

2.1 In consideration of the Fees outlined in 1.1 above, the Practice agrees to provide the Services described in 2.2 below either through the Dentist or by a suitably qualified partner, member of staff, deputy or locum.

2.2 The services to be provided are:

Adult Plans:

Plan A
1 Exam
1 Scale & Polish
£10.95 per month

Plan B
2 Exams
1 Scale & Polish
£15.95 per month

Plan C
2 Exams
2 Scale & Polish
£19.95 per month

Plan D
2 Dental check ups a year
2 Scale & Polishes a year
1 Free emergency appt a year
50% off stain removal
£25.95 per month

Plan E
2 Dental check ups a year
4 Scale & Polishes a year
1 Free emergency appt a year
50% off stain removal
£29.95 per month

2.3 For the purpose of clause 2.2, 12 months will run from the Date of Commencement and each anniversary of that date.

2.4 The Fees paid under this Agreement do not cover the costs associated with treatment which has been specifically agreed to be excluded between you and the Practice. This would be charged separately.

3. Responsibilities of the Patient

3.1 You must pay the Monthly Fee. If the Direct Debit cannot be taken, then all benefits under the Plan will cease from the date it was due to be taken.

3.2 You are responsible for ensuring that you make appointments with the Practice. There will be no refunds for any "unused" Services, nor can they be carried forward from one year to another.

3.3 You must keep appointments made with the Practice or pay the appropriate missed appointment fee.

4. Administration

4.1 Administration of this scheme is undertaken (on behalf of the Practice) by L&W. By signing this Agreement you consent to these companies using the data you provide in order to complete such administration, but your personal details will not be used by them for any other reason.

4.2 L&W are not party to this Agreement and as such have no liability to the Patient (whether in respect of negligence, breach of contract, defective or unsatisfactory treatment or otherwise) but they may rely on the provisions of this Agreement despite the terms of the Contracts (Rights of Third Parties) Act 1999.

5. Complaints

5.1 Any complaints should be made in writing to the Practice. Such complaints will be treated fairly and promptly.

6. Changes to the Plan

6.1 The Practice may change the Fees payable or extent of Services provided under this Agreement at any time. The Patient will always be given as least one month's Notice of such changes. Under normal circumstances Fees would only be changed once each year.

6.2 Any Notice will be deemed to be valid if sent to your last known preferred method of contact.

7. Termination of this Agreement

7.1 Either the Practice or Patient can terminate the Agreement at any time, with one month's Notice.

7.2 If Direct Debits cannot be taken from the Patient, then the Patient will be deemed to have terminated this Agreement.

7.3 On termination of this Agreement:
• All Services will cease immediately.
• If less than 12 months have passed since the commencement of this Agreement, and termination is by the Patient rather than the Practice, then the Patient will be responsible for paying any difference between the amount of Fees paid and the Practice's standard costs for Services used.
• There will be no refund for any "unused" Services.

7.4 If a patient wishes to re-join the Plan, then this is at the discretion of the Practice and may incur a charge which would be advised prior to re-joining.

8. Change of Practice

8.1 If the Patient moves to a different Practice, then this Agreement will terminate. This Agreement is not transferable.

9. Governing Law & Jurisdiction

9.1 This Agreement is governed by and constructed in accordance with English Law and the parties hereby irrevocably submit to the exclusive jurisdiction of the English Courts.

10. Data Protection

10.1 All parties will comply with all applicable Data Protection Legislation:

"Data Protection Legislation" means the Data Protection Act 2018, the General Data Protection Regulation (EU) 2016/679 (GDPR), any secondary legislation made pursuant to these, any legislation that replaces these in whole and in part and any guidelines and guidance notes issued from time to time by the Information Commissioner (ICO) (or its successor) and by all other relevant authorities.

---

Pear Tree Dental Centre
22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE
Phone: 0115 931 2935
Email: hello@peartree.dental
    `;

    const blob = new Blob([termsText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Membership-Terms-Conditions-Pear-Tree-Dental.txt";
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
            <Scale className="w-6 h-6 text-pear-primary" />
            Membership Terms and Conditions
          </CardTitle>
          <div className="flex gap-2">
            <Button onClick={downloadTerms} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button onClick={onClose} variant="ghost" size="sm">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-sm">
            {/* Section 1 */}
            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                1. Fees payable by the Patient
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>1.1</strong> The Patient will pay the Practice a
                  Monthly Fee as stated overleaf for the Services listed in 2.2
                  below.
                </p>
                <p>
                  <strong>1.2</strong> Payments will be taken by Direct Debit,
                  through Membership Plans Limited, part of Lloyd & Whyte Group
                  Ltd (MP), who administer the Direct Debit facility on behalf
                  of the Practice.
                </p>
                <p>
                  <strong>1.3</strong> The first payment may be taken up to 2
                  months after the date of this Agreement due to administrative
                  reasons and will consist of a "double payment" to include
                  payment for the first and second month.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                2. Services provided by the Practice
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>2.1</strong> In consideration of the Fees outlined in
                  1.1 above, the Practice agrees to provide the Services
                  described in 2.2 below either through the Dentist or by a
                  suitably qualified partner, member of staff, deputy or locum.
                </p>
                <p>
                  <strong>2.2</strong> The services to be provided are:
                </p>

                <div className="bg-blue-50 p-4 rounded-lg mt-3">
                  <h4 className="font-semibold mb-2">Adult Plans:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-semibold text-pear-primary">
                        Plan A - £10.95 per month
                      </h5>
                      <ul className="text-sm mt-1">
                        <li>• 1 Exam</li>
                        <li>• 1 Scale & Polish</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-semibold text-pear-primary">
                        Plan B - £15.95 per month
                      </h5>
                      <ul className="text-sm mt-1">
                        <li>• 2 Exams</li>
                        <li>• 1 Scale & Polish</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-semibold text-pear-primary">
                        Plan C - £19.95 per month
                      </h5>
                      <ul className="text-sm mt-1">
                        <li>• 2 Exams</li>
                        <li>• 2 Scale & Polish</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-semibold text-pear-primary">
                        Plan D - £25.95 per month
                      </h5>
                      <ul className="text-sm mt-1">
                        <li>• 2 Dental check ups a year</li>
                        <li>• 2 Scale & Polishes a year</li>
                        <li>• 1 Free emergency appt a year</li>
                        <li>• 50% off stain removal</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border md:col-span-2">
                      <h5 className="font-semibold text-pear-primary">
                        Plan E - £29.95 per month
                      </h5>
                      <ul className="text-sm mt-1">
                        <li>• 2 Dental check ups a year</li>
                        <li>• 4 Scale & Polishes a year</li>
                        <li>• 1 Free emergency appt a year</li>
                        <li>• 50% off stain removal</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  <strong>2.3</strong> For the purpose of clause 2.2, 12 months
                  will run from the Date of Commencement and each anniversary of
                  that date.
                </p>
                <p>
                  <strong>2.4</strong> The Fees paid under this Agreement do not
                  cover the costs associated with treatment which has been
                  specifically agreed to be excluded between you and the
                  Practice. This would be charged separately.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                3. Responsibilities of the Patient
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>3.1</strong> You must pay the Monthly Fee. If the
                  Direct Debit cannot be taken, then all benefits under the Plan
                  will cease from the date it was due to be taken.
                </p>
                <p>
                  <strong>3.2</strong> You are responsible for ensuring that you
                  make appointments with the Practice. There will be no refunds
                  for any "unused" Services, nor can they be carried forward
                  from one year to another.
                </p>
                <p>
                  <strong>3.3</strong> You must keep appointments made with the
                  Practice or pay the appropriate missed appointment fee.
                </p>
              </div>
            </div>

            {/* Continue with remaining sections... */}
            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                4. Administration
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>4.1</strong> Administration of this scheme is
                  undertaken (on behalf of the Practice) by L&W. By signing this
                  Agreement you consent to these companies using the data you
                  provide in order to complete such administration, but your
                  personal details will not be used by them for any other
                  reason.
                </p>
                <p>
                  <strong>4.2</strong> L&W are not party to this Agreement and
                  as such have no liability to the Patient (whether in respect
                  of negligence, breach of contract, defective or unsatisfactory
                  treatment or otherwise) but they may rely on the provisions of
                  this Agreement despite the terms of the Contracts (Rights of
                  Third Parties) Act 1999.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                5. Complaints
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>5.1</strong> Any complaints should be made in writing
                  to the Practice. Such complaints will be treated fairly and
                  promptly.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                6. Changes to the Plan
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>6.1</strong> The Practice may change the Fees payable
                  or extent of Services provided under this Agreement at any
                  time. The Patient will always be given as least one month's
                  Notice of such changes. Under normal circumstances Fees would
                  only be changed once each year.
                </p>
                <p>
                  <strong>6.2</strong> Any Notice will be deemed to be valid if
                  sent to your last known preferred method of contact.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                7. Termination of this Agreement
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>7.1</strong> Either the Practice or Patient can
                  terminate the Agreement at any time, with one month's Notice.
                </p>
                <p>
                  <strong>7.2</strong> If Direct Debits cannot be taken from the
                  Patient, then the Patient will be deemed to have terminated
                  this Agreement.
                </p>
                <p>
                  <strong>7.3</strong> On termination of this Agreement:
                </p>
                <ul className="ml-4 space-y-1">
                  <li>• All Services will cease immediately.</li>
                  <li>
                    • If less than 12 months have passed since the commencement
                    of this Agreement, and termination is by the Patient rather
                    than the Practice, then the Patient will be responsible for
                    paying any difference between the amount of Fees paid and
                    the Practice's standard costs for Services used.
                  </li>
                  <li>• There will be no refund for any "unused" Services.</li>
                </ul>
                <p>
                  <strong>7.4</strong> If a patient wishes to re-join the Plan,
                  then this is at the discretion of the Practice and may incur a
                  charge which would be advised prior to re-joining.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                8. Change of Practice
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>8.1</strong> If the Patient moves to a different
                  Practice, then this Agreement will terminate. This Agreement
                  is not transferable.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                9. Governing Law & Jurisdiction
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>9.1</strong> This Agreement is governed by and
                  constructed in accordance with English Law and the parties
                  hereby irrevocably submit to the exclusive jurisdiction of the
                  English Courts.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-pear-primary mb-3">
                10. Data Protection
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>10.1</strong> All parties will comply with all
                  applicable Data Protection Legislation:
                </p>
                <p className="italic">
                  "Data Protection Legislation" means the Data Protection Act
                  2018, the General Data Protection Regulation (EU) 2016/679
                  (GDPR), any secondary legislation made pursuant to these, any
                  legislation that replaces these in whole and in part and any
                  guidelines and guidance notes issued from time to time by the
                  Information Commissioner (ICO) (or its successor) and by all
                  other relevant authorities.
                </p>
              </div>
            </div>

            {/* Practice Information */}
            <div className="bg-pear-background/20 p-4 rounded-lg border-t-4 border-pear-primary">
              <h4 className="font-semibold text-pear-primary mb-2">
                Pear Tree Dental Centre
              </h4>
              <p className="text-sm text-gray-600">
                22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE
                <br />
                Phone: 0115 931 2935
                <br />
                Email: hello@peartree.dental
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
