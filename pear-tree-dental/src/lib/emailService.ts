import nodemailer from 'nodemailer';

// Email service configuration for Gmail SMTP
const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // hello@peartree.dental
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  return transporter;
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
}

export const sendMembershipConfirmationEmail = async (data: MembershipConfirmationData) => {
  try {
    const transporter = createTransporter();

    const htmlContent = generateConfirmationEmailHTML(data);

    const mailOptions = {
      from: {
        name: 'Pear Tree Dental Centre',
        address: process.env.EMAIL_USER || 'hello@peartree.dental'
      },
      to: data.email,
      subject: `Welcome to Pear Tree Dental! Your ${data.planName} membership is confirmed`,
      html: htmlContent,
      attachments: [
        {
          filename: 'pear-tree-logo.png',
          path: 'https://ext.same-assets.com/pear-tree-logo.png',
          cid: 'logo'
        },
        {
          filename: 'direct-debit-logo.png',
          path: 'https://ext.same-assets.com/direct-debit-logo.png',
          cid: 'ddlogo'
        }
      ]
    };

    // Send copy to practice emails (multiple recipients)
    const practiceMailOptions = {
      ...mailOptions,
      to: ['hello@peartree.dental', 'membership@peartree.dental', 'Javaad.mirza@gmail.com'],
      subject: `New Membership Signup: ${data.firstName} ${data.lastName} - ${data.planName} (${data.applicationId})`,
      html: generateInternalNotificationHTML(data)
    };

    // Send both emails
    const patientResult = await transporter.sendMail(mailOptions);
    const practiceResult = await transporter.sendMail(practiceMailOptions);

    console.log('Confirmation email sent successfully:', patientResult.messageId);
    console.log('Internal notification sent to practice team:', practiceResult.messageId);

    return {
      success: true,
      patientMessageId: patientResult.messageId,
      practiceMessageId: practiceResult.messageId,
      practiceRecipients: ['hello@peartree.dental', 'membership@peartree.dental', 'Javaad.mirza@gmail.com']
    };

  } catch (error) {
    console.error('Error sending confirmation email:', error);
    // Don't throw error - let the membership submission continue even if email fails
    console.log('⚠️ Email service unavailable - membership submission will continue');
    return {
      success: false,
      error: 'Email service unavailable - confirmation will be sent later',
      practiceRecipients: ['hello@peartree.dental', 'membership@peartree.dental', 'Javaad.mirza@gmail.com']
    };
  }
};

// Generate HTML email template for patient confirmation
const generateConfirmationEmailHTML = (data: MembershipConfirmationData): string => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Pear Tree Dental Membership</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #8B9467 0%, #7BA05B 100%); color: white; padding: 30px 20px; text-align: center; }
    .logo { max-width: 150px; margin-bottom: 20px; }
    .content { background: white; padding: 30px; }
    .highlight-box { background: #f8f9fa; border-left: 4px solid #8B9467; padding: 20px; margin: 20px 0; }
    .plan-details { background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .next-steps { background: #fff9e6; border: 1px solid #ffd700; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; }
    .button { display: inline-block; background: #8B9467; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
    .contact-info { margin: 20px 0; }
    ul { padding-left: 20px; }
    li { margin: 8px 0; }
    .family-members { background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <img src="cid:logo" alt="Pear Tree Dental Centre" class="logo">
      <h1>Welcome to Your Dental Membership!</h1>
      <p>Your membership has been successfully activated</p>
    </div>

    <!-- Main Content -->
    <div class="content">
      <h2>Dear ${data.firstName} ${data.lastName},</h2>

      <p>Congratulations and welcome to Pear Tree Dental Centre! We're delighted that you've joined our membership plan family.</p>

      <div class="highlight-box">
        <h3>🎉 Your Membership is Now Active!</h3>
        <p><strong>Application ID:</strong> ${data.applicationId}<br>
        <strong>Membership Start Date:</strong> ${currentDate}<br>
        <strong>Plan:</strong> ${data.planName}<br>
        <strong>Monthly Investment:</strong> ${data.planPrice}</p>
      </div>

      <!-- Plan Details -->
      <div class="plan-details">
        <h3>Your ${data.planName} includes:</h3>
        ${getPlanFeatures(data.planName)}

        ${data.isFamily ? `
        <div class="family-members">
          <h4>👨‍👩‍👧‍👦 Family Plan Members:</h4>
          <p><strong>Main Account Holder:</strong> ${data.firstName} ${data.lastName}</p>
          ${data.partnerFirstName ? `<p><strong>Partner:</strong> ${data.partnerFirstName} ${data.partnerLastName}</p>` : ''}
          ${data.familyMembers && data.familyMembers.length > 0 ? `
            <p><strong>Additional Family Members:</strong></p>
            <ul>
              ${data.familyMembers.map(member => `<li>${member.firstName} ${member.lastName} (${member.relationship})</li>`).join('')}
            </ul>
          ` : ''}
        </div>
        ` : ''}
      </div>

      <!-- Dentist Information -->
      ${data.dentistName ? `
      <div class="highlight-box">
        <h3>👨‍⚕️ Your Dental Team</h3>
        <p><strong>Your Dentist:</strong> ${data.dentistName}</p>
        ${data.isFamily && data.partnerDentistName ? `<p><strong>Partner's Dentist:</strong> ${data.partnerDentistName}</p>` : ''}
      </div>
      ` : ''}

      <!-- Payment Information -->
      <div class="highlight-box">
        <h3>💳 Payment Details</h3>
        <p><strong>Account Holder:</strong> ${data.accountHolderName}<br>
        <strong>Monthly Payment:</strong> ${data.planPrice}<br>
        <strong>Payment Method:</strong> <img src="cid:ddlogo" alt="Direct Debit" style="height: 20px; vertical-align: middle; margin-left: 5px;"> Direct Debit<br>
        <strong>First Collection:</strong> Your first payment will be collected within the next few days</p>
        <p style="font-size: 12px; color: #666; margin-top: 10px;">
          <img src="cid:ddlogo" alt="Direct Debit Logo" style="height: 16px; vertical-align: middle; margin-right: 5px;">
          Protected by the Direct Debit Guarantee
        </p>
      </div>

      <!-- Next Steps -->
      <div class="next-steps">
        <h3>📋 What Happens Next?</h3>
        <ul>
          <li><strong>Your membership is active immediately</strong> - Emergency cover starts now!</li>
          <li><strong>Book your first appointment:</strong> Call us on 0115 931 2935 or visit our website</li>
          <li><strong>Bring identification:</strong> Please bring photo ID to your first appointment</li>
          <li><strong>Direct Debit setup:</strong> Your first payment will be collected automatically</li>
          <li><strong>Membership documents:</strong> Your personalised terms and Direct Debit guarantee are attached</li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div class="contact-info">
        <h3>📞 Contact Us</h3>
        <p><strong>Practice Address:</strong><br>
        22 Nottingham Road, Burton Joyce<br>
        Nottingham NG14 5AE</p>

        <p><strong>Phone:</strong> 0115 931 2935<br>
        <strong>Email:</strong> hello@peartree.dental<br>
        <strong>Website:</strong> www.peartree.dental</p>

        <p><strong>Practice Hours:</strong><br>
        Monday - Friday: 8:30am - 5:30pm<br>
        Saturday: 8:30am - 2:00pm<br>
        Sunday: Closed</p>
      </div>

      <a href="tel:01159312935" class="button">Call to Book Your First Appointment</a>

      <p>Thank you for choosing Pear Tree Dental Centre. We look forward to taking excellent care of your dental health!</p>

      <p>Warm regards,<br>
      <strong>The Team at Pear Tree Dental Centre</strong></p>

      ${data.isClinicSignup && data.staffMemberName ? `
      <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; font-size: 14px; color: #666;">
        <p><em>This membership was set up in-practice with the assistance of ${data.staffMemberName}.</em></p>
      </div>
      ` : ''}
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>Pear Tree Dental Centre | 22 Nottingham Rd, Burton Joyce, Nottingham NG14 5AE</p>
      <p>Phone: 0115 931 2935 | Email: hello@peartree.dental</p>
      <p style="font-size: 12px; margin-top: 20px;">
        This email was sent to ${data.email} regarding your dental membership signup.
        If you have any questions, please contact us directly.
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

// Generate HTML email template for internal practice notification
const generateInternalNotificationHTML = (data: MembershipConfirmationData): string => {
  const currentDate = new Date().toLocaleString('en-GB');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Membership Signup - ${data.applicationId}</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 700px; margin: 0 auto; padding: 20px; }
    .header { background: #8B9467; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: white; }
    .detail-box { background: #f8f9fa; padding: 15px; margin: 10px 0; border-radius: 5px; }
    .urgent { background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 5px; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background: #f8f9fa; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🆕 New Membership Signup</h1>
      <p>Application ID: ${data.applicationId}</p>
    </div>

    <div class="content">
      <div class="urgent">
        <h3>⚡ Action Required</h3>
        <ul>
          <li>Set up patient record in practice management system</li>
          <li>Confirm Direct Debit setup with Membership Plans Ltd</li>
          <li>Schedule welcome appointment if requested</li>
          ${data.dentistName ? `<li>Notify ${data.dentistName} of new patient assignment</li>` : '<li>Assign dentist based on patient preferences</li>'}
        </ul>
      </div>

      <h3>Patient Information</h3>
      <table>
        <tr><th>Name</th><td>${data.firstName} ${data.lastName}</td></tr>
        <tr><th>Email</th><td>${data.email}</td></tr>
        <tr><th>Plan</th><td>${data.planName} (${data.planPrice}/month)</td></tr>
        <tr><th>Application ID</th><td>${data.applicationId}</td></tr>
        <tr><th>Signup Date</th><td>${currentDate}</td></tr>
        <tr><th>Account Holder</th><td>${data.accountHolderName}</td></tr>
        ${data.dentistName ? `<tr><th>Assigned Dentist</th><td>${data.dentistName}</td></tr>` : ''}
      </table>

      ${data.isFamily ? `
      <h3>👨‍👩‍👧‍👦 Family Plan Details</h3>
      <table>
        <tr><th>Partner</th><td>${data.partnerFirstName || ''} ${data.partnerLastName || ''}</td></tr>
        ${data.partnerDentistName ? `<tr><th>Partner's Dentist</th><td>${data.partnerDentistName}</td></tr>` : ''}
        ${data.familyMembers && data.familyMembers.length > 0 ? `
        <tr><th>Additional Members</th><td>
          <ul>
            ${data.familyMembers.map(member => `<li>${member.firstName} ${member.lastName} (${member.relationship})</li>`).join('')}
          </ul>
        </td></tr>
        ` : ''}
      </table>
      ` : ''}

      ${data.isClinicSignup ? `
      <div class="detail-box">
        <h4>🏥 In-Practice Signup</h4>
        <p><strong>Staff Member:</strong> ${data.staffMemberName || 'Not specified'}</p>
        <p><em>This patient signed up during their visit to the practice.</em></p>
      </div>
      ` : ''}

      <div class="detail-box">
        <h4>📋 Next Steps Checklist</h4>
        <ul>
          <li>□ Create patient record in practice management system</li>
          <li>□ Verify Direct Debit setup with Membership Plans Ltd</li>
          <li>□ Send welcome appointment booking link or call patient</li>
          <li>□ Add patient to appropriate dentist's list</li>
          <li>□ Confirm emergency contact details if provided</li>
          <li>□ File signed membership documents</li>
        </ul>
      </div>

      <p><strong>Patient confirmation email sent to:</strong> ${data.email}</p>
    </div>
  </div>
</body>
</html>
  `;
};

// Helper function to get plan features for email template
const getPlanFeatures = (planName: string): string => {
  const planFeatures: { [key: string]: string[] } = {
    'ESSENTIAL MAINTENANCE': [
      '1 Dental check up per year',
      '1 Scale & Polish per year',
      'Worldwide dental accident & emergency cover'
    ],
    'ROUTINE CARE': [
      '2 Dental check ups per year',
      '1 Scale & Polish per year',
      'Worldwide dental accident & emergency cover'
    ],
    'COMPLETE CARE': [
      '2 Dental check ups per year',
      '2 Scale & Polishes per year',
      'Worldwide dental accident & emergency cover'
    ],
    'COMPLETE CARE PLUS': [
      '2 Dental check ups per year',
      '2 Scale & Polishes per year',
      '1 Free emergency appointment per year',
      '50% off stain removal treatments',
      'Worldwide dental accident & emergency cover'
    ],
    'PERIODONTAL HEALTH': [
      '2 Dental check ups per year',
      '4 Scale & Polishes per year (every 3 months)',
      '1 Free emergency appointment per year',
      '50% off stain removal treatments',
      'Worldwide dental accident & emergency cover'
    ],
    'FAMILY PLAN': [
      'All adults receive Complete Care Plus benefits',
      'Children under 18 included at no extra cost',
      'Same address requirement',
      '10% discount on all additional treatments',
      'Simplified billing for whole family',
      'Priority family appointment booking',
      'Worldwide dental accident & emergency cover'
    ]
  };

  const features = planFeatures[planName] || [];
  return `
    <ul>
      ${features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
  `;
};

export default { sendMembershipConfirmationEmail };
