interface PatientInfo {
  firstName: string;
  lastName: string;
  planName: string;
  planPrice: string;
  dentistName?: string;
  isExistingPatient?: string;
  dentistGenderPreference?: string;
  // Family plan details
  partnerFirstName?: string;
  partnerLastName?: string;
  partnerDentistName?: string;
  isFamily?: boolean;
  // Direct Debit details
  accountHolderName?: string;
  sortCode?: string;
  accountNumber?: string;
}

export const generateDirectDebitGuaranteePDF = async (patientInfo: PatientInfo): Promise<Blob> => {
  if (typeof window === 'undefined') {
    throw new Error('PDF generation only available on client side');
  }

  const { default: jsPDF } = await import('jspdf');
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;
  const maxWidth = pageWidth - (margin * 2);
  let yPosition = 30;

  // Helper function to check if we need a new page
  const checkPageBreak = (additionalHeight: number) => {
    if (yPosition + additionalHeight > pageHeight - 40) {
      doc.addPage();
      yPosition = 30;
    }
  };

  // Header
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text('DIRECT DEBIT GUARANTEE', pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 20;
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text('Pear Tree Dental Centre', pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 25;

  // Patient Information
  checkPageBreak(50);
  doc.setFont("helvetica", "bold");
  doc.text('Account Holder Information:', margin, yPosition);
  yPosition += 10;

  doc.setFont("helvetica", "normal");
  doc.text(`Main Account Holder: ${patientInfo.firstName} ${patientInfo.lastName}`, margin, yPosition);
  yPosition += 8;

  if (patientInfo.isFamily && patientInfo.partnerFirstName && patientInfo.partnerLastName) {
    doc.text(`Partner: ${patientInfo.partnerFirstName} ${patientInfo.partnerLastName}`, margin, yPosition);
    yPosition += 8;
  }

  doc.text(`Membership Plan: ${patientInfo.planName} - ${patientInfo.planPrice}/month`, margin, yPosition);
  yPosition += 8;

  if (patientInfo.accountHolderName) {
    doc.text(`Direct Debit Account Holder: ${patientInfo.accountHolderName}`, margin, yPosition);
    yPosition += 8;
  }

  if (patientInfo.sortCode && patientInfo.accountNumber) {
    doc.text(`Account Details: Sort Code ${patientInfo.sortCode}, Account ****${patientInfo.accountNumber.slice(-4)}`, margin, yPosition);
    yPosition += 8;
  }

  yPosition += 15;

  // Originator ID
  checkPageBreak(30);
  doc.setFont("helvetica", "bold");
  doc.text("Originator's Identification Number:", margin, yPosition);
  yPosition += 8;
  doc.setFontSize(16);
  doc.text('5 7 5 1 7 1', margin, yPosition);
  yPosition += 20;

  // Instructions
  checkPageBreak(40);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text('Instructions to your Bank or Building Society', margin, yPosition);
  yPosition += 10;

  doc.setFont("helvetica", "normal");
  const instructionsText = `Please pay Membership Plans Limited Direct Debits from account detailed in this instruction subject to the safeguards assumed by the Direct Debit Guarantee. I understand that this instruction may remain with Membership Plans Limited and, if so, details will be passed electronically to my Bank/Building Society.`;
  const instructionsLines = doc.splitTextToSize(instructionsText, maxWidth);

  checkPageBreak(instructionsLines.length * 6 + 20);
  doc.text(instructionsLines, margin, yPosition);
  yPosition += instructionsLines.length * 6 + 15;

  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.text('Banks and Building Societies may not accept Direct Debit Instructions for some types of account.', margin, yPosition);
  yPosition += 20;

  // DD15 Guarantee
  checkPageBreak(100);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text('DD15 The Direct Debit Guarantee', margin, yPosition);
  yPosition += 15;

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  const guaranteePoints = [
    'This Guarantee is offered by all Banks and Building Societies that accept instructions to pay Direct Debits.',
    `If there are any changes to the amount, date or frequency of your Direct Debit, Membership Plans Limited will notify you 10 working days in advance of your account being debited or as otherwise agreed. If you request Membership Plans Limited to collect a payment, confirmation of the amount and date will be given at the time of the request.`,
    'If an error is made in the payment of your Direct Debit by Membership Plans Limited or your Bank or Building Society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.',
    'If you receive a refund you are not entitled to, you must pay it back when Membership Plans Limited asks you to.',
    'You can cancel a Direct Debit at any time by simply contacting your bank or building society. Written confirmation may be required. Please notify us.'
  ];

  guaranteePoints.forEach((point, index) => {
    const bulletPoint = `• ${point}`;
    const lines = doc.splitTextToSize(bulletPoint, maxWidth);

    // Check if we need a page break for this point
    checkPageBreak(lines.length * 6 + 12);

    doc.text(lines, margin, yPosition);
    yPosition += lines.length * 6 + 12; // Increased spacing to prevent overlap
  });

  // Company Information
  yPosition += 15;
  checkPageBreak(30);
  doc.setFont("helvetica", "bold");
  doc.text('Company Information:', margin, yPosition);
  yPosition += 10;

  doc.setFont("helvetica", "normal");
  doc.text('Membership Plans Ltd trading as Lloyd & Whyte Flexiplan is registered in England No 06322047.', margin, yPosition);
  yPosition += 8;
  doc.text('Registered Office: Affinity House, Bindon Road, Taunton, TA2 6AA.', margin, yPosition);
  yPosition += 15;

  // Footer - only add if there's space, otherwise put on next page
  if (yPosition > pageHeight - 40) {
    doc.addPage();
    yPosition = pageHeight - 30;
  } else {
    yPosition = pageHeight - 30;
  }

  doc.setFontSize(10);
  doc.text('Pear Tree Dental Centre | 22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE | 0115 931 2935', pageWidth / 2, yPosition, { align: 'center' });

  return doc.output('blob');
};

export const generateMembershipTermsPDF = async (patientInfo: PatientInfo): Promise<Blob> => {
  if (typeof window === 'undefined') {
    throw new Error('PDF generation only available on client side');
  }

  const { default: jsPDF } = await import('jspdf');
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const maxWidth = pageWidth - (margin * 2);
  let yPosition = 30;

  // Helper function to add text with page breaks
  const addTextWithPageBreaks = (text: string, isBold = false, fontSize = 10, indent = 0) => {
    if (isBold) {
      doc.setFont("helvetica", "bold");
    } else {
      doc.setFont("helvetica", "normal");
    }
    doc.setFontSize(fontSize);

    const lines = doc.splitTextToSize(text, maxWidth - indent);

    // Check if we need a new page
    if (yPosition + (lines.length * 6) > doc.internal.pageSize.height - 40) {
      doc.addPage();
      yPosition = 30;
    }

    doc.text(lines, margin + indent, yPosition);
    yPosition += lines.length * 6;
  };

  // Header
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text('MEMBERSHIP TERMS AND CONDITIONS', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 12;

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text('Pear Tree Dental Centre', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 20;

  // Patient Information Section
  addTextWithPageBreaks('PATIENT INFORMATION', true, 12);
  yPosition += 5;

  addTextWithPageBreaks(`Main Account Holder: ${patientInfo.firstName} ${patientInfo.lastName}`, false, 10);
  yPosition += 5;

  if (patientInfo.isFamily && patientInfo.partnerFirstName && patientInfo.partnerLastName) {
    addTextWithPageBreaks(`Partner: ${patientInfo.partnerFirstName} ${patientInfo.partnerLastName}`, false, 10);
    yPosition += 5;
  }

  addTextWithPageBreaks(`Membership Plan: ${patientInfo.planName} - ${patientInfo.planPrice}/month`, false, 10);
  yPosition += 5;

  if (patientInfo.dentistName) {
    addTextWithPageBreaks(`Assigned Dentist: ${patientInfo.dentistName}`, false, 10);
    yPosition += 5;
  }

  if (patientInfo.isFamily && patientInfo.partnerDentistName) {
    addTextWithPageBreaks(`Partner's Assigned Dentist: ${patientInfo.partnerDentistName}`, false, 10);
    yPosition += 5;
  }

  yPosition += 15;

  // Terms and Conditions Content
  addTextWithPageBreaks('1. Fees payable by the Patient', true, 12);
  yPosition += 8;

  addTextWithPageBreaks(`1.1 The Patient will pay the Practice a Monthly Fee as stated overleaf for the Services listed in 2.2 below.`, false, 10);
  yPosition += 8;

  addTextWithPageBreaks('1.2 Payments will be taken by Direct Debit, through Membership Plans Limited, part of Lloyd & Whyte Group Ltd (MP), who administer the Direct Debit facility on behalf of the Practice.', false, 10);
  yPosition += 8;

  addTextWithPageBreaks('1.3 The first payment may be taken up to 2 months after the date of this Agreement due to administrative reasons and will consist of a "double payment" to include payment for the first and second month.', false, 10);
  yPosition += 15;

  addTextWithPageBreaks('2. Services provided by the Practice', true, 12);
  yPosition += 8;

  addTextWithPageBreaks('2.1 In consideration of the Fees outlined in 1.1 above, the Practice agrees to provide the Services described in 2.2 below either through the Dentist or by a suitably qualified partner, member of staff, deputy or locum.', false, 10);
  yPosition += 8;

  addTextWithPageBreaks('2.2 The services to be provided are:', true, 10);
  yPosition += 5;

  // Plan-specific services
  const planServices: { [key: string]: string[] } = {
    'ESSENTIAL MAINTENANCE': ['1 Exam', '1 Scale & Polish', '£10.95 per month'],
    'ROUTINE CARE': ['2 Exams', '1 Scale & Polish', '£15.95 per month'],
    'COMPLETE CARE': ['2 Exams', '2 Scale & Polish', '£19.95 per month'],
    'COMPLETE CARE PLUS': ['2 Dental check ups a year', '2 Scale & Polishes a year', '1 Free emergency appt a year', '50% off stain removal', '£25.95 per month'],
    'PERIODONTAL HEALTH': ['2 Dental check ups a year', '4 Scale & Polishes a year', '1 Free emergency appt a year', '50% off stain removal', '£29.95 per month'],
    'FAMILY PLAN': ['All adults get Complete Care Plus benefits', 'Children under 18 included free', 'Same address requirement', '10% discount on all treatments', 'Simplified billing for whole family', 'Priority family appointments', '£49.50 per month']
  };

  addTextWithPageBreaks('Adult Plans:', true, 10);
  yPosition += 5;

  const services = planServices[patientInfo.planName] || [];
  if (services.length > 0) {
    addTextWithPageBreaks(`${patientInfo.planName}`, true, 10);
    yPosition += 3;
    for (const service of services) {
      addTextWithPageBreaks(service, false, 10, 10);
      yPosition += 3;
    }
  }
  yPosition += 10;

  addTextWithPageBreaks('2.3 For the purpose of clause 2.2, 12 months will run from the Date of Commencement and each anniversary of that date.', false, 10);
  yPosition += 8;

  addTextWithPageBreaks('2.4 The Fees paid under this Agreement do not cover the costs associated with treatment which has been specifically agreed to be excluded between you and the Practice. This would be charged separately.', false, 10);
  yPosition += 15;

  addTextWithPageBreaks('3. Responsibilities of the Patient', true, 12);
  yPosition += 8;

  addTextWithPageBreaks('3.1 You must pay the Monthly Fee. If the Direct Debit cannot be taken, then all benefits under the Plan will cease from the date it was due to be taken.', false, 10);
  yPosition += 8;

  addTextWithPageBreaks('3.2 You are responsible for ensuring that you make appointments with the Practice. There will be no refunds for any "unused" Services, nor can they be carried forward from one year to another.', false, 10);
  yPosition += 8;

  addTextWithPageBreaks('3.3 You must keep appointments made with the Practice or pay the appropriate missed appointment fee.', false, 10);
  yPosition += 15;

  // Continue with remaining sections
  addTextWithPageBreaks('4. Administration', true, 12);
  yPosition += 8;

  addTextWithPageBreaks('4.1 Administration of this scheme is undertaken (on behalf of the Practice) by L&W. By signing this Agreement you consent to these companies using the data you provide in order to complete such administration, but your personal details will not be used by them for any other reason.', false, 10);
  yPosition += 8;

  addTextWithPageBreaks('4.2 L&W are not party to this Agreement and as such have no liability to the Patient (whether in respect of negligence, breach of contract, defective or unsatisfactory treatment or otherwise) but they may rely on the provisions of this Agreement despite the terms of the Contracts (Rights of Third Parties) Act 1999.', false, 10);
  yPosition += 15;

  addTextWithPageBreaks('5. Complaints', true, 12);
  yPosition += 8;

  addTextWithPageBreaks('5.1 Any complaints should be made in writing to the Practice. Such complaints will be treated fairly and promptly.', false, 10);
  yPosition += 15;

  addTextWithPageBreaks('6. Changes to the Plan', true, 12);
  yPosition += 8;

  addTextWithPageBreaks('6.1 The Practice may change the Fees payable or extent of Services provided under this Agreement at any time. The Patient will always be given as least one month\'s Notice of such changes. Under normal circumstances Fees would only be changed once each year.', false, 10);
  yPosition += 8;

  addTextWithPageBreaks('6.2 Any Notice will be deemed to be valid if sent to your last known preferred method of contact.', false, 10);
  yPosition += 15;

  addTextWithPageBreaks('7. Termination of this Agreement', true, 12);
  yPosition += 8;

  addTextWithPageBreaks('7.1 Either the Practice or Patient can terminate the Agreement at any time, with one month\'s Notice.', false, 10);
  yPosition += 8;

  addTextWithPageBreaks('7.2 If Direct Debits cannot be taken from the Patient, then the Patient will be deemed to have terminated this Agreement.', false, 10);
  yPosition += 8;

  addTextWithPageBreaks('7.3 On termination of this Agreement:', false, 10);
  yPosition += 5;
  addTextWithPageBreaks('• All Services will cease immediately.', false, 10, 10);
  yPosition += 5;
  addTextWithPageBreaks('• If less than 12 months have passed since the commencement of this Agreement, and termination is by the Patient rather than the Practice, then the Patient will be responsible for paying any difference between the amount of Fees paid and the Practice\'s standard costs for Services used.', false, 10, 10);
  yPosition += 5;
  addTextWithPageBreaks('• There will be no refund for any "unused" Services.', false, 10, 10);
  yPosition += 8;

  addTextWithPageBreaks('7.4 If a patient wishes to re-join the Plan, then this is at the discretion of the Practice and may incur a charge which would be advised prior to re-joining.', false, 10);
  yPosition += 15;

  addTextWithPageBreaks('8. Change of Practice', true, 12);
  yPosition += 8;

  addTextWithPageBreaks('8.1 If the Patient moves to a different Practice, then this Agreement will terminate. This Agreement is not transferable.', false, 10);
  yPosition += 15;

  addTextWithPageBreaks('9. Governing Law & Jurisdiction', true, 12);
  yPosition += 8;

  addTextWithPageBreaks('9.1 This Agreement is governed by and constructed in accordance with English Law and the parties hereby irrevocably submit to the exclusive jurisdiction of the English Courts.', false, 10);
  yPosition += 15;

  addTextWithPageBreaks('10. Data Protection', true, 12);
  yPosition += 8;

  addTextWithPageBreaks('10.1 All parties will comply with all applicable Data Protection Legislation:', false, 10);
  yPosition += 5;

  addTextWithPageBreaks('"Data Protection Legislation" means the Data Protection Act 2018, the General Data Protection Regulation (EU) 2016/679 (GDPR), any secondary legislation made pursuant to these, any legislation that replaces these in whole and in part and any guidelines and guidance notes issued from time to time by the Information Commissioner (ICO) (or its successor) and by all other relevant authorities.', false, 10, 10);
  yPosition += 20;

  // Practice Information
  doc.addPage();
  yPosition = 30;

  addTextWithPageBreaks('PRACTICE INFORMATION', true, 14);
  yPosition += 15;

  addTextWithPageBreaks('Pear Tree Dental Centre', true, 12);
  yPosition += 5;
  addTextWithPageBreaks('22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE', false, 10);
  yPosition += 5;
  addTextWithPageBreaks('Phone: 0115 931 2935', false, 10);
  yPosition += 5;
  addTextWithPageBreaks('Email: hello@peartree.dental', false, 10);

  // Footer on each page
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const footerY = doc.internal.pageSize.height - 20;
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(`Page ${i} of ${totalPages}`, pageWidth / 2, footerY, { align: 'center' });
    doc.text('Pear Tree Dental Centre | 22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE | 0115 931 2935', pageWidth / 2, footerY + 10, { align: 'center' });
  }

  return doc.output('blob');
};

export const downloadPDF = (blob: Blob, filename: string) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
