interface PatientInfo {
  firstName: string;
  lastName: string;
  planName: string;
  planPrice: string;
  dentistName: string;
  isExistingPatient: string;
  dentistGenderPreference?: string;
}

export const generateDirectDebitGuaranteePDF = async (patientInfo: PatientInfo): Promise<Blob> => {
  if (typeof window === 'undefined') {
    throw new Error('PDF generation only available on client side');
  }

  const { default: jsPDF } = await import('jspdf');
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const maxWidth = pageWidth - (margin * 2);
  let yPosition = 30;

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
  doc.setFont("helvetica", "bold");
  doc.text('Patient Information:', margin, yPosition);
  yPosition += 10;

  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${patientInfo.firstName} ${patientInfo.lastName}`, margin, yPosition);
  yPosition += 8;
  doc.text(`Membership Plan: ${patientInfo.planName} - ${patientInfo.planPrice}/month`, margin, yPosition);
  yPosition += 8;

  // Dentist information
  if (patientInfo.isExistingPatient === 'yes') {
    doc.text(`Preferred Dentist: ${patientInfo.dentistName}`, margin, yPosition);
  } else {
    const preference = patientInfo.dentistGenderPreference === 'no-preference'
      ? 'No preference'
      : `${patientInfo.dentistGenderPreference?.charAt(0).toUpperCase()}${patientInfo.dentistGenderPreference?.slice(1)} dentist`;
    doc.text(`Dentist Preference: ${preference}`, margin, yPosition);
  }
  yPosition += 15;

  // Originator ID
  doc.setFont("helvetica", "bold");
  doc.text("Originator's Identification Number:", margin, yPosition);
  yPosition += 8;
  doc.setFontSize(16);
  doc.text('5 7 5 1 7 1', margin, yPosition);
  yPosition += 15;

  // Instructions
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text('Instructions to your Bank or Building Society', margin, yPosition);
  yPosition += 10;

  doc.setFont("helvetica", "normal");
  const instructionsText = `Please pay Membership Plans Limited Direct Debits from account detailed in this instruction subject to the safeguards assumed by the Direct Debit Guarantee. I understand that this instruction may remain with Membership Plans Limited and, if so, details will be passed electronically to my Bank/Building Society.`;
  const instructionsLines = doc.splitTextToSize(instructionsText, maxWidth);
  doc.text(instructionsLines, margin, yPosition);
  yPosition += instructionsLines.length * 6 + 10;

  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.text('Banks and Building Societies may not accept Direct Debit Instructions for some types of account.', margin, yPosition);
  yPosition += 15;

  // DD15 Guarantee
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
    doc.text(lines, margin, yPosition);
    yPosition += lines.length * 5 + 8;
  });

  // Company Information
  yPosition += 10;
  doc.setFont("helvetica", "bold");
  doc.text('Company Information:', margin, yPosition);
  yPosition += 8;

  doc.setFont("helvetica", "normal");
  doc.text('Membership Plans Ltd trading as Lloyd & Whyte Flexiplan is registered in England No 06322047.', margin, yPosition);
  yPosition += 6;
  doc.text('Registered Office: Affinity House, Bindon Road, Taunton, TA2 6AA.', margin, yPosition);

  // Footer
  const footerY = doc.internal.pageSize.height - 20;
  doc.setFontSize(10);
  doc.text('Pear Tree Dental Centre | 22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE | 0115 931 2935', pageWidth / 2, footerY, { align: 'center' });

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

  // Header
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text('MEMBERSHIP TERMS AND CONDITIONS', pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 15;
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text('Pear Tree Dental Centre', pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 25;

  // Patient Information
  doc.setFont("helvetica", "bold");
  doc.text('Patient Information:', margin, yPosition);
  yPosition += 10;

  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${patientInfo.firstName} ${patientInfo.lastName}`, margin, yPosition);
  yPosition += 8;
  doc.text(`Membership Plan: ${patientInfo.planName} - ${patientInfo.planPrice}/month`, margin, yPosition);
  yPosition += 8;

  if (patientInfo.isExistingPatient === 'yes') {
    doc.text(`Preferred Dentist: ${patientInfo.dentistName}`, margin, yPosition);
  } else {
    const preference = patientInfo.dentistGenderPreference === 'no-preference'
      ? 'No preference'
      : `${patientInfo.dentistGenderPreference?.charAt(0).toUpperCase()}${patientInfo.dentistGenderPreference?.slice(1)} dentist`;
    doc.text(`Dentist Preference: ${preference}`, margin, yPosition);
  }
  yPosition += 20;

  // Terms content
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text('1. Fees payable by the Patient', margin, yPosition);
  yPosition += 10;

  doc.setFont("helvetica", "normal");
  let termsText = `1.1 The Patient will pay the Practice a Monthly Fee of ${patientInfo.planPrice} for the Services listed in 2.2 below.`;
  let lines = doc.splitTextToSize(termsText, maxWidth);
  doc.text(lines, margin, yPosition);
  yPosition += lines.length * 6 + 5;

  termsText = '1.2 Payments will be taken by Direct Debit, through Membership Plans Limited, part of Lloyd & Whyte Group Ltd (MP), who administer the Direct Debit facility on behalf of the Practice.';
  lines = doc.splitTextToSize(termsText, maxWidth);
  doc.text(lines, margin, yPosition);
  yPosition += lines.length * 6 + 5;

  termsText = '1.3 The first payment may be taken up to 2 months after the date of this Agreement due to administrative reasons and will consist of a "double payment" to include payment for the first and second month.';
  lines = doc.splitTextToSize(termsText, maxWidth);
  doc.text(lines, margin, yPosition);
  yPosition += lines.length * 6 + 15;

  // Section 2
  doc.setFont("helvetica", "bold");
  doc.text('2. Services provided by the Practice', margin, yPosition);
  yPosition += 10;

  doc.setFont("helvetica", "normal");
  termsText = '2.1 In consideration of the Fees outlined in 1.1 above, the Practice agrees to provide the Services described in 2.2 below either through the Dentist or by a suitably qualified partner, member of staff, deputy or locum.';
  lines = doc.splitTextToSize(termsText, maxWidth);
  doc.text(lines, margin, yPosition);
  yPosition += lines.length * 6 + 10;

  doc.setFont("helvetica", "bold");
  doc.text('2.2 The services to be provided are:', margin, yPosition);
  yPosition += 10;

  // Plan-specific services
  doc.setFont("helvetica", "bold");
  doc.text(`${patientInfo.planName} - ${patientInfo.planPrice} per month`, margin, yPosition);
  yPosition += 8;

  doc.setFont("helvetica", "normal");
  const planServices: { [key: string]: string[] } = {
    'PLAN A': ['1 Exam', '1 Scale & Polish'],
    'PLAN B': ['2 Exams', '1 Scale & Polish'],
    'PLAN C': ['2 Exams', '2 Scale & Polish'],
    'PLAN D': ['2 Dental check ups a year', '2 Scale & Polishes a year', '1 Free emergency appt a year', '50% off stain removal'],
    'PLAN E': ['2 Dental check ups a year', '4 Scale & Polishes a year', '1 Free emergency appt a year', '50% off stain removal']
  };

  const services = planServices[patientInfo.planName] || [];
  services.forEach(service => {
    doc.text(`• ${service}`, margin + 10, yPosition);
    yPosition += 6;
  });

  yPosition += 10;

  // Continue with remaining terms (abbreviated for space)
  const remainingTerms = [
    '2.3 For the purpose of clause 2.2, 12 months will run from the Date of Commencement and each anniversary of that date.',
    '2.4 The Fees paid under this Agreement do not cover the costs associated with treatment which has been specifically agreed to be excluded between you and the Practice. This would be charged separately.',
    '',
    '3. Responsibilities of the Patient',
    '3.1 You must pay the Monthly Fee. If the Direct Debit cannot be taken, then all benefits under the Plan will cease from the date it was due to be taken.',
    '3.2 You are responsible for ensuring that you make appointments with the Practice. There will be no refunds for any "unused" Services, nor can they be carried forward from one year to another.',
    '3.3 You must keep appointments made with the Practice or pay the appropriate missed appointment fee.'
  ];

  remainingTerms.forEach(term => {
    if (term === '') {
      yPosition += 10;
      return;
    }

    if (term.startsWith('3.')) {
      doc.setFont("helvetica", "bold");
    } else {
      doc.setFont("helvetica", "normal");
    }

    lines = doc.splitTextToSize(term, maxWidth);

    // Check if we need a new page
    if (yPosition + (lines.length * 6) > doc.internal.pageSize.height - 40) {
      doc.addPage();
      yPosition = 30;
    }

    doc.text(lines, margin, yPosition);
    yPosition += lines.length * 6 + 5;
  });

  // Add new page for remaining sections
  doc.addPage();
  yPosition = 30;

  // Continue with sections 4-10 (abbreviated)
  const additionalSections = [
    '4. Administration',
    '5. Complaints',
    '6. Changes to the Plan',
    '7. Termination of this Agreement',
    '8. Change of Practice',
    '9. Governing Law & Jurisdiction',
    '10. Data Protection'
  ];

  additionalSections.forEach((section, index) => {
    doc.setFont("helvetica", "bold");
    doc.text(section, margin, yPosition);
    yPosition += 10;

    doc.setFont("helvetica", "normal");
    doc.text(`[Full terms available at practice - Section ${index + 4} details]`, margin, yPosition);
    yPosition += 15;
  });

  // Footer
  const footerY = doc.internal.pageSize.height - 20;
  doc.setFontSize(10);
  doc.text('Pear Tree Dental Centre | 22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE | 0115 931 2935', pageWidth / 2, footerY, { align: 'center' });

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
