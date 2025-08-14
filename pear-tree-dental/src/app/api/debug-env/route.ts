import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("🔍 Debugging email environment variables...");

    // Check all environment variables that might be email-related
    const emailEnvVars = {
      // Current setup
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,

      // Common email service variables
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: !!process.env.SMTP_PORT,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,

      // Alternative email services
      SENDGRID_API_KEY: !!process.env.SENDGRID_API_KEY,
      MAILGUN_API_KEY: !!process.env.MAILGUN_API_KEY,
      MAILGUN_DOMAIN: !!process.env.MAILGUN_DOMAIN,
      RESEND_API_KEY: !!process.env.RESEND_API_KEY,

      // Other common patterns
      FROM_EMAIL: !!process.env.FROM_EMAIL,
      PRACTICE_EMAIL: !!process.env.PRACTICE_EMAIL,
      PATIENT_EMAIL: !!process.env.PATIENT_EMAIL,

      // WordPress/Contact form services
      CONTACT_FORM_EMAIL: !!process.env.CONTACT_FORM_EMAIL,
      ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,

      // Email lengths (for configured ones)
      EMAIL_USER_LENGTH: process.env.EMAIL_USER?.length || 0,
      EMAIL_PASS_LENGTH: process.env.EMAIL_PASS?.length || 0,
      SMTP_HOST_VALUE: process.env.SMTP_HOST || "not set",
      FROM_EMAIL_VALUE: process.env.FROM_EMAIL || "not set",
      PRACTICE_EMAIL_VALUE: process.env.PRACTICE_EMAIL || "not set",
    };

    console.log("📧 Email environment variables:", emailEnvVars);

    return NextResponse.json({
      message: "Email environment debug",
      timestamp: new Date().toISOString(),
      emailConfig: emailEnvVars,
    });
  } catch (error) {
    console.error("❌ Debug env error:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
