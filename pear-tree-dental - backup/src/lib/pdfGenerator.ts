import { jsPDF } from 'jspdf';

interface FormData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  postcode: string;
  accountHolderName: string;
  bankName: string;
  sortCode: string;
  accountNumber: string;
  startDate: string;
  patientSignature: string;
  signatureDate: string;
  isExistingPatient: boolean;
  preferredDentist: string;
  genderPreference: string;
}

interface PlanData {
  name: string;
  price: string;
  features: string[];
}

export function generateMembershipPDF(
  formData: FormData,
  selectedPlan: PlanData,
  applicationId: string
): Buffer {
  const doc = new jsPDF();
  let yPosition = 20;

  // Header
  doc.setFontSize(20);
  doc.setTextColor(9, 57, 77); // Pear Tree blue
  doc.text('PEAR TREE DENTAL', 20, yPosition);
  yPosition += 10;

  doc.setFontSize(12);
  doc.text('MEMBERSHIP AGREEMENT', 20, yPosition);
  yPosition += 15;

  // Application ID
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Application ID: ${applicationId}`, 140, 20);
  doc.text(`Date: ${new Date().toLocaleDateString('en-GB')}`, 140, 30);

  // Patient Details
  doc.setFontSize(14);
  doc.setTextColor(9, 57, 77);
  doc.text('PATIENT DETAILS', 20, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(`Name: ${formData.title} ${formData.firstName} ${formData.lastName}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Email: ${formData.email}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Phone: ${formData.phone}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Date of Birth: ${new Date(formData.dateOfBirth).toLocaleDateString('en-GB')}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Address: ${formData.address}, ${formData.city}, ${formData.postcode}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Existing Patient: ${formData.isExistingPatient ? 'Yes' : 'No'}`, 20, yPosition);
  yPosition += 15;

  // Selected Plan
  doc.setFontSize(14);
  doc.setTextColor(9, 57, 77);
  doc.text('SELECTED MEMBERSHIP PLAN', 20, yPosition);
  yPosition += 10;

  doc.setFontSize(12);
  doc.setTextColor(72, 204, 108); // Dental green
  doc.text(`${selectedPlan.name} - ${selectedPlan.price} per month`, 20, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('Plan Benefits:', 20, yPosition);
  yPosition += 7;

  selectedPlan.features.forEach((feature) => {
    doc.text(`• ${feature}`, 25, yPosition);
    yPosition += 6;
  });
  doc.text('• Worldwide dental accident & emergency cover', 25, yPosition);
  yPosition += 6;
  doc.text('• 10% discount on all additional treatments', 25, yPosition);
  yPosition += 15;

  // Payment Details
  doc.setFontSize(14);
  doc.setTextColor(9, 57, 77);
  doc.text('DIRECT DEBIT DETAILS', 20, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(`Account Holder: ${formData.accountHolderName}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Bank Name: ${formData.bankName}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Sort Code: ${formData.sortCode}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Account Number: ****${formData.accountNumber.slice(-4)}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Start Date: ${new Date(formData.startDate).toLocaleDateString('en-GB')}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Monthly Payment: ${selectedPlan.price}`, 20, yPosition);
  yPosition += 15;

  // Signature
  doc.setFontSize(14);
  doc.setTextColor(9, 57, 77);
  doc.text('PATIENT DECLARATION & SIGNATURE', 20, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(`Patient Signature: ${formData.patientSignature}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Date: ${new Date(formData.signatureDate).toLocaleDateString('en-GB')}`, 120, yPosition - 7);

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Pear Tree Dental Practice | 22 Nottingham Road, Burton Joyce, UK, NG14 5AE | Tel: 0115 931 2525', 20, 280);
  doc.text('Email: hello@peartree.dental | www.peartree.dental', 20, 287);

  // Convert to buffer
  const pdfArrayBuffer = doc.output('arraybuffer');
  return Buffer.from(pdfArrayBuffer);
}
