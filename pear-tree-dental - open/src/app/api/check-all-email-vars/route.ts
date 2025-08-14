import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("🔍 Checking ALL email environment variables...");

    // Get all email-related environment variables with their actual values (safely)
    const allEmailVars = {
      // Current failing configs
      EMAIL_USER: process.env.EMAIL_USER || "not set",
      EMAIL_PASS: process.env.EMAIL_PASS
        ? `***${process.env.EMAIL_PASS.slice(-4)}`
        : "not set",

      // SMTP configs
      SMTP_HOST: process.env.SMTP_HOST || "not set",
      SMTP_PORT: process.env.SMTP_PORT || "not set",
      SMTP_USER: process.env.SMTP_USER || "not set",
      SMTP_PASS: process.env.SMTP_PASS
        ? `***${process.env.SMTP_PASS.slice(-4)}`
        : "not set",

      // Other email configs we saw
      EMAIL_HOST: process.env.EMAIL_HOST || "not set",
      EMAIL_PORT: process.env.EMAIL_PORT || "not set",
      EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME || "not set",
      EMAIL_SECURE: process.env.EMAIL_SECURE || "not set",

      FROM_EMAIL: process.env.FROM_EMAIL || "not set",
      PRACTICE_EMAIL: process.env.PRACTICE_EMAIL || "not set",
      PATIENT_EMAIL: process.env.PATIENT_EMAIL || "not set",

      // Check lengths to see what's actually configured
      EMAIL_USER_LENGTH: process.env.EMAIL_USER?.length || 0,
      EMAIL_PASS_LENGTH: process.env.EMAIL_PASS?.length || 0,
      SMTP_USER_LENGTH: process.env.SMTP_USER?.length || 0,
      SMTP_PASS_LENGTH: process.env.SMTP_PASS?.length || 0,

      // Are they the same values?
      EMAIL_USER_EQUALS_SMTP_USER:
        process.env.EMAIL_USER === process.env.SMTP_USER,
      EMAIL_PASS_EQUALS_SMTP_PASS:
        process.env.EMAIL_PASS === process.env.SMTP_PASS,
      EMAIL_HOST_EQUALS_SMTP_HOST:
        process.env.EMAIL_HOST === process.env.SMTP_HOST,
    };

    console.log("📧 All email environment variables:", allEmailVars);

    return NextResponse.json({
      message: "Complete email environment debug",
      timestamp: new Date().toISOString(),
      emailVariables: allEmailVars,
    });
  } catch (error) {
    console.error("❌ Debug error:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
