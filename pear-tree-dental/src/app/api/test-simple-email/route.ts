import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    console.log("🧪 Testing simple membership email...");

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      return NextResponse.json({
        success: false,
        error: "Email credentials not configured",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Simple email without attachments or complex HTML
    const simpleMailOptions = {
      from: {
        name: "Pear Tree Dental Centre",
        address: emailUser,
      },
      to: "info@glazingsuppliesdirect.com", // Use your test email
      subject: "Test: Simple Membership Confirmation",
      html: `
        <h1>Test Membership Confirmation</h1>
        <p>This is a simplified test of the membership email system.</p>
        <p><strong>Test Application ID:</strong> TEST-${Date.now()}</p>
        <p>If you receive this, the basic email sending is working.</p>
      `,
    };

    console.log("📧 Sending simple email test...");
    const result = await transporter.sendMail(simpleMailOptions);
    console.log("📧 Simple email sent:", result.messageId);

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      message: "Simple membership email test sent successfully",
    });
  } catch (error) {
    console.error("❌ Simple email test failed:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      details: error instanceof Error ? error.stack : "No stack trace",
    });
  }
}
