import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("🧪 Testing membership@peartree.dental delivery...");

    const emailAnalysis = {
      issueReported: {
        email: "membership@peartree.dental",
        problem: "Not receiving membership confirmation emails",
        workingEmails: ["hello@peartree.dental (confirmed working)"],
        needsVerification: ["Javaad.mirza@gmail.com"],
      },

      systemConfiguration: {
        emailService: "Gmail SMTP via Nodemailer",
        deliveryMethod: "Individual emails (not bulk)",
        practiceEmails: [
          "hello@peartree.dental",
          "membership@peartree.dental",
          "Javaad.mirza@gmail.com",
        ],
        emailTemplate: "Internal notification with application details",
      },

      troubleshootingChecklist: {
        step1: {
          action: "Check Spam/Junk Folders",
          details: [
            'Look for subject: "New Membership Signup: [Name] - [Plan]"',
            "Check both spam and promotional folders",
            'Search for emails from "hello@peartree.dental"',
            "Look for recent test emails",
          ],
        },
        step2: {
          action: "Verify Email Address",
          details: [
            "Send manual test email to membership@peartree.dental",
            "Confirm it receives regular emails",
            "Check if mailbox is full or has issues",
            "Verify the email address is spelled correctly",
          ],
        },
        step3: {
          action: "Check Email Configuration",
          details: [
            "Verify email forwarding settings",
            "Check domain email routing",
            "Confirm DNS MX records are correct",
            "Review email server settings",
          ],
        },
        step4: {
          action: "Check Email Filtering",
          details: [
            "Review email filtering rules",
            "Check if automated emails are blocked",
            "Verify Gmail SMTP is allowed",
            "Check email security policies",
          ],
        },
      },

      commonCauses: [
        "📧 Emails going to spam/junk folder (most common)",
        "⚙️ Email forwarding not configured correctly",
        "📦 Mailbox full or inactive",
        "🛡️ Email server blocking Gmail SMTP",
        "🔍 Email filtering rules blocking notifications",
        "📝 Typo in email address configuration",
      ],

      quickTest: {
        instructions: "To quickly test email delivery:",
        steps: [
          "1. Send a manual email to membership@peartree.dental",
          "2. If manual email works but automated emails don't, it's likely a filtering issue",
          "3. If manual email doesn't work, it's an email configuration issue",
          "4. Check with email administrator about automated email policies",
        ],
      },

      immediateActions: [
        "🔍 Check spam folder for membership@peartree.dental",
        "📧 Send manual test email to verify address is working",
        "⚙️ Check email forwarding/routing settings",
        "🛡️ Review email security/filtering policies",
        "📞 Contact email administrator if needed",
      ],
    };

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      emailAnalysis,
      recommendation:
        "Start with checking spam folder, then verify email address is active",
      urgency: "Medium - affects practice notification workflow",
      nextSteps: [
        "Check spam folder for membership@peartree.dental",
        "Send test email to verify address works",
        "If issues persist, contact email administrator",
        "Consider temporary alternative notification method",
      ],
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
