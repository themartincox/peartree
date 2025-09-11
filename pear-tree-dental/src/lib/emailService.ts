import nodemailer from 'nodemailer';

// Reuse a single transporter instance for better performance
let cachedTransporter: nodemailer.Transporter | null = null;

 // Email service configuration for Gmail SMTP
const getTransporter = () => {
  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // hello@peartree.dental
        pass: process.env.GMAIL_APP_PASSWORD, // App password
      },
    });
  }
  return cachedTransporter;
};

export interface MembershipConfirmationData {
  firstName: string;
  lastName: string;
  email: string;
  planName: string;
  planPrice: string;
  applicationId: string;
  isFamily?: boolean;
  partnerFirstName?: string;
  partnerLastName?: string;
  dentistName?: string;
  partnerDentistName?: string;
  accountHolderName: string;
  familyMembers?: Array<{
    firstName: string;
    lastName: string;
    relationship: string;
  }>;
  isClinicSignup?: boolean;
  staffMemberName?: string;
  ddGuaranteePdf?: string;
  membershipTermsPdf?: string;
}

export const sendMembershipConfirmationEmail = async (data: MembershipConfirmationData) => {
  if (process.env.DISABLE_EMAIL_SENDING === 'true') {
    console.log('⚠️ Email sending is disabled via environment variable in emailService.ts.');
    return {
      success: true,
      patientMessageId: 'email_disabled',
      practiceResults: [],
      practiceEmailsSent: 0,
      practiceEmailsFailed: 0,
      practiceRecipients: []
    };
  }

  try {
    console.log('📧 Email service called with data:', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      planName: data.planName,
      applicationId: data.applicationId
    });

       // Check environment variables first
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.GMAIL_APP_PASSWORD;

  // Only log whether credentials are present to avoid leaking information
   console.log('📧 Environment check:', {
  emailUserConfigured: Boolean(emailUser),
  emailPassConfigured: Boolean(emailPass)
});

    if (!emailUser || !emailPass) {
      throw new Error('Email configuration missing: EMAIL_USER or GMAIL_APP_PASSWORD not configured');
    }

    const transporter = getTransporter();
    console.log('📧 Transporter created successfully');

    const attachments = [];
    if (data.ddGuaranteePdf) {
      attachments.push({
        filename: 'direct-debit-guarantee.pdf',
        content: data.ddGuaranteePdf.split('base64,')[1],
        encoding: 'base64',
      });
    }
    if (data.membershipTermsPdf) {
      attachments.push({
        filename: 'membership-terms.pdf',
        content: data.membershipTermsPdf.split('base64,')[1],
        encoding: 'base64',
      });
    }

    const mailOptions = {
      from: {
        name: 'Pear Tree Dental Centre',
        address: process.env.EMAIL_USER || 'hello@peartree.dental'
      },
      to: data.email,
      subject: `Welcome to Pear Tree Dental Centre!`,
      html: `
        <p>Dear ${data.firstName} ${data.lastName},</p>
        <p>Your membership application has been successfully submitted!</p>
        <h3>Membership Details:</h3>
        <ul>
          <li><strong>Application ID:</strong> ${data.applicationId}</li>
          <li><strong>Plan:</strong> ${data.planName}</li>
          <li><strong>Monthly Payment:</strong> ${data.planPrice}</li>
          <li><strong>Account Holder:</strong> ${data.accountHolderName}</li>
        </ul>
        <p>We'll contact you within 2 working days to confirm your membership setup.</p>
        <p>Contact us: 0115 931 2935 | hello@peartree.dental</p>
        <p>Best regards,<br>Pear Tree Dental Centre Team</p>
      `,
      attachments: attachments,
    };

    // Practice emails will be sent individually (see loop below)

    let patientResult;

    try {
      patientResult = await transporter.sendMail(mailOptions);
      console.log('✅ Patient email sent successfully:', patientResult.messageId);
    } catch (error) {
      console.error('❌ email failed, trying complex version:', error);
      patientResult = await transporter.sendMail(mailOptions);
      console.log('✅ Complex patient email sent:', patientResult.messageId);
    }

    console.log('📧 About to send practice notification...');

    // Send practice notifications individually with detailed logging
    // Note: membership@peartree.dental is an alias of hello@peartree.dental
    // Google blocks emails sent from hello@ to membership@ (alias loop protection)
    // Since both go to the same inbox, we only send to hello@ to avoid delivery issues
    const practiceEmails = ['hello@peartree.dental', 'Javaad.mirza@gmail.com'];
    const practiceResults = [];

    for (const practiceEmail of practiceEmails) {
      try {
        console.log(`📧 Sending practice notification to: ${practiceEmail}`);

        const practiceMailOptions = {
          from: {
            name: 'Pear Tree Dental Centre',
            address: process.env.EMAIL_USER || 'hello@peartree.dental'
          },
          replyTo: 'hello@peartree.dental', // Still reply to hello@
          to: practiceEmail, // Single recipient
          subject: `🆕 New Membership Signup: ${data.firstName} ${data.lastName} - ${data.planName} (${data.applicationId})`,
          html: `
            <h1>🆕 New Membership Signup</h1>
            <p><strong>Application ID:</strong> ${data.applicationId}</p>
            <h2>⚡ Action Required</h2>
            <ul>
              <li>Set up patient record in practice management system</li>
              <li>Confirm Direct Debit setup with Membership Plans Ltd</li>
              <li>Schedule welcome appointment if requested</li>
              <li>Notify ${data.dentistName} of new patient assignment</li>
            </ul>
            <h2>Patient Information</h2>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Plan:</strong> ${data.planName} (${data.planPrice}/month)</p>
            <p><strong>Application ID:</strong> ${data.applicationId}</p>
            <p><strong>Signup Date:</strong> ${new Date().toLocaleString('en-GB')}</p>
            <p><strong>Account Holder:</strong> ${data.accountHolderName}</p>
            <p><strong>Assigned Dentist:</strong> ${data.dentistName}</p>
            <h2>📋 Next Steps Checklist</h2>
            <ul>
              <li>□ Create patient record in practice management system</li>
              <li>□ Verify Direct Debit setup with Membership Plans Ltd</li>
              <li>□ Send welcome appointment booking link or call patient</li>
              <li>□ Add patient to appropriate dentist's list</li>
              <li>□ Confirm emergency contact details if provided</li>
              <li>□ File signed membership documents</li>
            </ul>
            <p>Patient confirmation email sent to: ${data.email}</p>
            <p><a href="https://peartree.dental/admin/membership-applications/${data.applicationId}">View application in Supabase</a></p>
          `,
          attachments: attachments,
        };

        const result = await transporter.sendMail(practiceMailOptions);
        console.log(`✅ Practice email sent successfully to ${practiceEmail}:`, result.messageId);

        practiceResults.push({
          email: practiceEmail,
          success: true,
          messageId: result.messageId
        });

      } catch (practiceError) {
        console.error(`❌ Practice email failed for ${practiceEmail}:`, practiceError);
        practiceResults.push({
          email: practiceEmail,
          success: false,
          error: practiceError instanceof Error ? practiceError.message : 'Unknown error'
        });
      }
    }

    console.log('📧 Practice email results:', practiceResults);

    console.log('Confirmation email sent successfully:', patientResult.messageId);
    console.log('Practice notification results:', practiceResults);

    const successfulPracticeEmails = practiceResults.filter(r => r.success);
    const failedPracticeEmails = practiceResults.filter(r => !r.success);

    return {
      success: true,
      patientMessageId: patientResult.messageId,
      practiceResults: practiceResults,
      practiceEmailsSent: successfulPracticeEmails.length,
      practiceEmailsFailed: failedPracticeEmails.length,
      practiceRecipients: ['hello@peartree.dental', 'membership@peartree.dental', 'Javaad.mirza@gmail.com']
    };

  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    console.error('❌ Error type:', typeof error);
    console.error('❌ Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('❌ Error stack:', error instanceof Error ? error.stack : 'No stack trace');

    // Check for common email errors
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        console.error('❌ Email authentication failed - check EMAIL_USER and GMAIL_APP_PASSWORD');
      } else if (error.message.includes('getaddrinfo ENOTFOUND')) {
        console.error('❌ Network error - cannot reach email server');
      } else if (error.message.includes('configuration missing')) {
        console.error('❌ Email environment variables not configured');
      }
    }

    // Don't throw error - let the membership submission continue even if email fails
    console.log('⚠️ Email service unavailable - membership submission will continue');
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Email service unavailable - confirmation will be sent later',
      practiceResults: [],
      practiceEmailsSent: 0,
      practiceEmailsFailed: 0,
      practiceRecipients: ['hello@peartree.dental', 'membership@peartree.dental', 'Javaad.mirza@gmail.com']
    };
  }
};

export default { sendMembershipConfirmationEmail };