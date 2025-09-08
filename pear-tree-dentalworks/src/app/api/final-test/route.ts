import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// This is a new, clean endpoint to bypass any potential caching issues.
export async function GET() {
  console.log('--- ENTERING /api/final-test ---');

  try {
    const emailUser = process.env.EMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    // Log exactly what the environment variables contain.
    console.log(`Final Test - EMAIL_USER found: ${!!emailUser}`);
    console.log(`Final Test - GMAIL_APP_PASSWORD found: ${!!gmailAppPassword}`);

    if (!emailUser || !gmailAppPassword) {
      console.log('Final Test - ABORTING: Missing required env vars.');
      return NextResponse.json({
        success: false,
        error: 'Configuration Error: Required environment variables are missing.',
        details: {
          isEmailUserSet: !!emailUser,
          isGmailAppPasswordSet: !!gmailAppPassword,
        },
        instructions: "Please ensure EMAIL_USER and GMAIL_APP_PASSWORD are set correctly in Netlify and redeploy."
      }, { status: 500 });
    }

    console.log('Final Test - Credentials found, attempting to create transporter...');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: gmailAppPassword,
      },
    });

    console.log('Final Test - Verifying transporter...');
    await transporter.verify();
    console.log('Final Test - Transporter verified. Sending email...');

    const testResult = await transporter.sendMail({
      from: `"Pear Tree Final Test" <${emailUser}>`,
      to: emailUser,
      subject: '✅ Final Test Successful - Pear Tree Dental',
      html: `<h1>This is the final test.</h1><p>If you received this, the GMAIL_APP_PASSWORD is working.</p>`
    });

    console.log('Final Test - Email sent! Message ID:', testResult.messageId);

    return NextResponse.json({
      success: true,
      message: 'Final test successful! Email has been sent.',
      messageId: testResult.messageId,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('--- FINAL TEST FAILED ---', errorMessage);
    return NextResponse.json({
      success: false,
      error: 'Final test failed.',
      details: errorMessage,
    }, { status: 500 });
  }
}
