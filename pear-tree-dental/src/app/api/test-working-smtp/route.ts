import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    console.log('🧪 Testing with working SMTP configuration...');

    // Use the working SMTP configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.FROM_EMAIL;

    console.log('📧 SMTP Config:', {
      host: smtpHost,
      port: smtpPort,
      user: smtpUser ? '***configured***' : 'missing',
      pass: smtpPass ? '***configured***' : 'missing',
      from: fromEmail
    });

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      return NextResponse.json({
        success: false,
        error: 'Working SMTP credentials not fully configured',
        missing: {
          host: !smtpHost,
          port: !smtpPort,
          user: !smtpUser,
          pass: !smtpPass
        }
      });
    }

    // Create transporter with working SMTP settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === '465', // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      }
    });

    // Test the connection
    console.log('📧 Testing working SMTP connection...');
    await transporter.verify();
    console.log('📧 Working SMTP connection verified successfully');

    // Send test membership email
    const result = await transporter.sendMail({
      from: `"Pear Tree Dental Centre" <${fromEmail || smtpUser}>`,
      to: 'info@glazingsuppliesdirect.com',
      subject: 'SUCCESS: Membership Email Test - Working SMTP',
      html: `
        <h1>🎉 SUCCESS! Working SMTP Found!</h1>
        <p>This membership email was sent using your working SMTP configuration!</p>
        <h3>Configuration Used:</h3>
        <ul>
          <li><strong>SMTP Host:</strong> ${smtpHost}</li>
          <li><strong>SMTP Port:</strong> ${smtpPort}</li>
          <li><strong>From Email:</strong> ${fromEmail || smtpUser}</li>
          <li><strong>Time:</strong> ${new Date().toISOString()}</li>
        </ul>
        <p><strong>Next Step:</strong> Update membership system to use this working configuration!</p>
      `
    });

    console.log('📧 Working SMTP membership test sent:', result.messageId);

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      message: 'Working SMTP membership test successful!',
      smtpConfig: {
        host: smtpHost,
        port: smtpPort,
        from: fromEmail || smtpUser
      }
    });

  } catch (error) {
    console.error('❌ Working SMTP test failed:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error instanceof Error ? error.stack : 'No stack trace'
    });
  }
}
