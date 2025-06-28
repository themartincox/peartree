import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateMembershipPDF } from '@/lib/pdfGenerator';

// Define the plans data
const plans = {
  planA: {
    name: "PLAN A",
    price: "£10.95",
    features: [
      "1 Dental check up a year",
      "1 Scale & Polish a year"
    ]
  },
  planB: {
    name: "PLAN B",
    price: "£15.95",
    features: [
      "2 Dental check ups a year",
      "1 Scale & Polish a year"
    ]
  },
  planC: {
    name: "PLAN C",
    price: "£19.95",
    features: [
      "2 Dental check ups a year",
      "2 Scale & Polishes a year"
    ]
  },
  planD: {
    name: "PLAN D",
    price: "£25.95",
    features: [
      "2 Dental check ups a year",
      "2 Scale & Polishes a year",
      "1 Free emergency appt a year",
      "50% off stain removal"
    ]
  },
  planE: {
    name: "PLAN E",
    price: "£29.95",
    features: [
      "2 Dental check ups a year",
      "4 Scale & Polishes a year",
      "1 Free emergency appt a year",
      "50% off stain removal"
    ]
  }
};

interface FormData {
  selectedPlan: keyof typeof plans;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  postcode: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  familyMembers: Array<{
    title: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    relationship: string;
    plan: string;
  }>;
  isExistingPatient: boolean;
  preferredDentist: string;
  genderPreference: string;
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  sortCode: string;
  startDate: string;
  patientSignature: string;
  signatureDate: string;
  termsAccepted: boolean;
  ddGuaranteeAccepted: boolean;
  consentGiven: boolean;
  marketingConsent: boolean;
}

// Configure email transporter
const createTransporter = async () => {
  try {
    // Generate fresh Ethereal Email test account
    console.log('🔧 Creating fresh Ethereal Email test account...');
    console.log('📡 Attempting nodemailer.createTestAccount()...');
    const testAccount = await nodemailer.createTestAccount();
    console.log('📧 Test account object received:', JSON.stringify(testAccount, null, 2));

    console.log('✅ Ethereal test account created:');
    console.log('   User:', testAccount.user);
    console.log('   Pass:', testAccount.pass);
    console.log('   SMTP:', `${testAccount.smtp.host}:${testAccount.smtp.port}`);

    // Create transporter with fresh test account
    return nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
  } catch (error) {
    console.error('❌ Failed to create Ethereal test account:', error);
    console.error('   Error type:', error.constructor.name);
    console.error('   Error message:', error.message);
    console.error('   Stack trace:', error.stack);
    console.warn('⚠️ Falling back to console logging mode...');
    // Fallback to console logging if Ethereal fails
    return nodemailer.createTransport({
      streamTransport: true,
      newline: 'unix',
      buffer: true
    });
  }
};

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique application ID
    const applicationId = `PTD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Get selected plan data
    const selectedPlan = plans[formData.selectedPlan];
    if (!selectedPlan) {
      return NextResponse.json(
        { error: 'Invalid plan selected' },
        { status: 400 }
      );
    }

    // Generate PDF
    console.log('Generating PDF for application:', applicationId);
    console.log('FormData keys:', Object.keys(formData));
    console.log('Selected plan:', selectedPlan);

    let pdfBuffer: Buffer;
    try {
      // Generate PDF using jsPDF (no React components)
      console.log('📄 Generating PDF using jsPDF...');
      pdfBuffer = generateMembershipPDF(formData, selectedPlan, applicationId);
      console.log('✅ PDF generated successfully, size:', pdfBuffer.length, 'bytes');
    } catch (pdfError) {
      console.error('❌ PDF generation failed:', pdfError);
      throw new Error(`PDF generation failed: ${pdfError.message}`);
    }

    // Create email transporter
    const transporter = await createTransporter();

    // Email content for practice
    const practiceEmailHtml = `
      <h2>New Membership Application Received</h2>
      <p><strong>Application ID:</strong> ${applicationId}</p>
      <p><strong>Patient Name:</strong> ${formData.title} ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Selected Plan:</strong> ${selectedPlan.name} (${selectedPlan.price}/month)</p>
      <p><strong>Existing Patient:</strong> ${formData.isExistingPatient ? 'Yes' : 'No'}</p>
      ${formData.familyMembers.length > 0 ? `<p><strong>Family Members:</strong> ${formData.familyMembers.length}</p>` : ''}

      <h3>Direct Debit Details</h3>
      <p><strong>Account Holder:</strong> ${formData.accountHolderName}</p>
      <p><strong>Bank:</strong> ${formData.bankName}</p>
      <p><strong>Sort Code:</strong> ${formData.sortCode}</p>
      <p><strong>Account Number:</strong> ****${formData.accountNumber.slice(-4)}</p>
      <p><strong>Start Date:</strong> ${new Date(formData.startDate).toLocaleDateString('en-GB')}</p>

      <p>Please find the complete membership agreement attached as PDF.</p>
      <p><em>This application was submitted on ${new Date().toLocaleString('en-GB')}</em></p>
    `;

    // Email content for patient
    const patientEmailHtml = `
      <h2>Welcome to Pear Tree Dental!</h2>
      <p>Dear ${formData.firstName},</p>

      <p>Thank you for your membership application. We have received your details and will process your direct debit setup within 2 business days.</p>

      <h3>Your Application Details</h3>
      <p><strong>Application ID:</strong> ${applicationId}</p>
      <p><strong>Selected Plan:</strong> ${selectedPlan.name} (${selectedPlan.price}/month)</p>
      <p><strong>Start Date:</strong> ${new Date(formData.startDate).toLocaleDateString('en-GB')}</p>

      <h3>What happens next?</h3>
      <ul>
        <li>We'll set up your direct debit and confirm payment collection</li>
        <li>Your membership benefits will be active from your start date</li>
        <li>You can book appointments by calling 0115 931 2525 or online</li>
        <li>Your worldwide emergency cover is active immediately</li>
      </ul>

      <p>Please keep the attached membership agreement for your records.</p>

      <p>If you have any questions, please don't hesitate to contact us:</p>
      <ul>
        <li><strong>Phone:</strong> 0115 931 2525</li>
        <li><strong>Email:</strong> hello@peartree.dental</li>
        <li><strong>Address:</strong> 1 Pinfold Lane, Burton Joyce, NG14 5DP</li>
      </ul>

      <p>Welcome to the Pear Tree family!</p>

      <p>Best regards,<br>
      The Pear Tree Dental Team</p>
    `;

    // Send email to practice (testing - goes to martin@postino.cc)
    const practiceEmail = {
      from: 'hello@peartree.dental',
      to: 'martin@postino.cc',
      subject: `[PRACTICE] New Membership Application - ${formData.firstName} ${formData.lastName} (${applicationId})`,
      html: practiceEmailHtml,
      attachments: [
        {
          filename: `membership-agreement-${applicationId}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    };

    // Send email to patient (testing - also goes to martin@postino.cc)
    const patientEmail = {
      from: 'hello@peartree.dental',
      to: 'martin@postino.cc',
      subject: `[PATIENT] Welcome to Pear Tree Dental - Application ${applicationId}`,
      html: patientEmailHtml,
      attachments: [
        {
          filename: `your-membership-agreement-${applicationId}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    };

    // Send emails
    console.log('Processing emails for application:', applicationId);

    try {
      console.log(`\n📧 SENDING REAL EMAILS - Application: ${applicationId}`);
      console.log('===============================================');

      // Send practice email
      console.log('\n📧 Sending practice email...');
      const practiceInfo = await transporter.sendMail(practiceEmail);
      console.log('✅ Practice email sent successfully!');
      console.log('   Message ID:', practiceInfo.messageId);

      // Get preview URL if available (Ethereal only)
      const practicePreviewUrl = nodemailer.getTestMessageUrl(practiceInfo);
      if (practicePreviewUrl) {
        console.log('   Preview URL:', practicePreviewUrl);
      }

      // Send patient email
      console.log('\n📧 Sending patient email...');
      const patientInfo = await transporter.sendMail(patientEmail);
      console.log('✅ Patient email sent successfully!');
      console.log('   Message ID:', patientInfo.messageId);

      // Get preview URL if available (Ethereal only)
      const patientPreviewUrl = nodemailer.getTestMessageUrl(patientInfo);
      if (patientPreviewUrl) {
        console.log('   Preview URL:', patientPreviewUrl);
      }

      console.log('\n✅ ALL EMAILS SENT SUCCESSFULLY!');
      console.log(`📊 Total: 2 emails sent with PDF attachments`);
      console.log(`📎 PDF Size: ${pdfBuffer.length} bytes each`);
      console.log('📧 Check email preview URLs above to view sent emails');
      console.log('===============================================\n');

    } catch (emailError) {
      console.error('❌ Email processing failed:', emailError);
      throw emailError; // Re-throw to trigger main error handler
    }

    // Log application data (in production, save to database)
    console.log('Membership application submitted:', {
      applicationId,
      patientName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      plan: selectedPlan.name,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return NextResponse.json({
      success: true,
      applicationId,
      message: 'Membership application submitted successfully',
      patientName: `${formData.firstName} ${formData.lastName}`,
      plan: selectedPlan.name,
      startDate: formData.startDate
    });

  } catch (error) {
    console.error('❌ DETAILED ERROR processing membership application:', error);

    // More specific error message for debugging
    let errorMessage = 'Failed to process membership application';
    let errorDetails = '';

    if (error instanceof Error) {
      errorMessage = error.message;
      errorDetails = error.stack || '';
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? {
          message: errorMessage,
          stack: errorDetails,
          fullError: error
        } : undefined
      },
      { status: 500 }
    );
  }
}
