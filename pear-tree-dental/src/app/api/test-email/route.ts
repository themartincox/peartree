import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    // Use the new, unified environment variable
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.GMAIL_APP_PASSWORD;

    console.log('Email configuration check:');
    console.log('EMAIL_USER:', emailUser ? 'Set' : 'Missing');
    console.log('GMAIL_APP_PASSWORD:', emailPass ? 'Set' : 'Missing');

    if (!emailUser || !emailPass) {
      return NextResponse.json({
        success: false,
        error: 'Email environment variables not configured',
        details: {
          EMAIL_USER: emailUser ? 'Set' : 'Missing',
          GMAIL_APP_PASSWORD: emailPass ? 'Set' : 'Missing'
        }
      });
    }

    if (emailPass === 'your-app-password-here') {
      return NextResponse.json({
        success: false,
        error: 'Gmail App Password not configured',
        message: 'EMAIL_PASS is still set to placeholder value. Please set up a Gmail App Password.',
        instructions: [
          '1. Go to your Google Account settings (myaccount.google.com)',
          '2. Security > 2-Step Verification (must be enabled first)',
          '3. App passwords > Generate new app password',
          '4. Select "Mail" and copy the 16-character password',
          '5. Update EMAIL_PASS environment variable in Netlify'
        ]
      });
    }

    // Test SMTP connection
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Verify connection
    await transporter.verify();

    // Send test email
    const testResult = await transporter.sendMail({
      from: {
        name: 'Pear Tree Dental Centre',
        address: emailUser
      },
      to: emailUser, // Send to self for testing
      subject: 'Email System Test - Pear Tree Dental',
      html: `
        <h2>✅ Email System Test Successful!</h2>
        <p>This is a test email to verify the email configuration.</p>
        <p><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${emailUser}</p>
        <p>The email system is working correctly!</p>
      `
    });

    return NextResponse.json({
      success: true,
      message: 'Email system working correctly',
      testEmailSent: true,
      messageId: testResult.messageId,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Email test error:', error);

    return NextResponse.json({
      success: false,
      error: 'Email configuration failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      troubleshooting: [
        'Check that EMAIL_USER and EMAIL_PASS are set in environment variables',
        'Verify that 2FA is enabled on the Gmail account',
        'Ensure you are using an App Password, not the regular Gmail password',
        'Check that the Gmail account has "Less secure app access" disabled (use App Password instead)'
      ]
    }, { status: 500 });
  }
}
