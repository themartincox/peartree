import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    console.log('🧪 Testing direct SMTP connection...');

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      return NextResponse.json({
        success: false,
        error: 'Email credentials not configured'
      });
    }

    // Try direct SMTP instead of 'gmail' service
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Test the connection first
    console.log('📧 Testing SMTP connection...');
    await transporter.verify();
    console.log('📧 SMTP connection verified successfully');

    // Send test email
    const result = await transporter.sendMail({
      from: `"Pear Tree Dental Centre" <${emailUser}>`,
      to: 'info@glazingsuppliesdirect.com',
      subject: 'Direct SMTP Test - Membership System',
      html: `
        <h1>Direct SMTP Test Success!</h1>
        <p>This email was sent using direct SMTP settings instead of Gmail service.</p>
        <p><strong>From:</strong> ${emailUser}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        <p>If you receive this, the SMTP authentication is working correctly.</p>
      `
    });

    console.log('📧 Direct SMTP email sent:', result.messageId);

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      message: 'Direct SMTP test successful',
      from: emailUser
    });

  } catch (error) {
    console.error('❌ Direct SMTP test failed:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error instanceof Error ? error.stack : 'No stack trace'
    });
  }
}
