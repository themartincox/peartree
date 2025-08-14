import { NextResponse } from "next/server";
import { sendMembershipConfirmationEmail } from "@/lib/emailService";

export async function GET() {
  try {
    console.log("🧪 Testing fixed email system...");

    // Test data for email system
    const testEmailData = {
      firstName: "Test",
      lastName: "Patient",
      email: "martin@postino.cc", // Use your test email
      planName: "COMPLETE CARE",
      planPrice: "£19.95",
      applicationId: `TEST-FIXED-${Date.now()}`,
      isFamily: false,
      partnerFirstName: "",
      partnerLastName: "",
      dentistName: "Dr. Test Dentist",
      partnerDentistName: "",
      accountHolderName: "Test Account Holder",
      familyMembers: [],
      isClinicSignup: false,
      staffMemberName: "",
    };

    console.log("📧 Sending test membership confirmation email...");
    const emailResult = await sendMembershipConfirmationEmail(testEmailData);
    console.log("📧 Email service result:", emailResult);

    return NextResponse.json({
      success: true,
      message: "Fixed email system test completed",
      emailResult: emailResult,
      testData: {
        applicationId: testEmailData.applicationId,
        patientEmail: testEmailData.email,
        practiceEmails: [
          "hello@peartree.dental",
          "membership@peartree.dental",
          "Javaad.mirza@gmail.com",
        ],
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Fixed email test failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        details: error instanceof Error ? error.stack : "No stack trace",
      },
      { status: 500 },
    );
  }
}
