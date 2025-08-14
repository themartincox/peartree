import { NextResponse } from "next/server";

// Temporary fix for membership@peartree.dental email issue
export async function POST(request: Request) {
  try {
    const { alternativeEmail } = await request.json();

    if (!alternativeEmail || !alternativeEmail.includes("@")) {
      return NextResponse.json(
        {
          success: false,
          error: "Valid alternative email required",
        },
        { status: 400 },
      );
    }

    const instructions = {
      purpose:
        "Temporary fix for membership@peartree.dental email delivery issue",
      currentIssue: "membership@peartree.dental not receiving automated emails",
      temporaryFix: {
        action: "Replace membership@peartree.dental with alternative email",
        location: "src/lib/emailService.ts line 125",
        currentCode: `const practiceEmails = ['hello@peartree.dental', 'membership@peartree.dental', 'Javaad.mirza@gmail.com'];`,
        fixedCode: `const practiceEmails = ['hello@peartree.dental', '${alternativeEmail}', 'Javaad.mirza@gmail.com'];`,
        revertWhen: "membership@peartree.dental email issue is resolved",
      },
      steps: [
        "1. Update the practiceEmails array in emailService.ts",
        "2. Deploy the change",
        "3. Test with a new membership signup",
        "4. Revert when membership@peartree.dental is fixed",
      ],
    };

    return NextResponse.json({
      success: true,
      instructions,
      warning:
        "This is a temporary fix. Resolve the root cause as soon as possible.",
      alternativeEmail,
      timestamp: new Date().toISOString(),
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

export async function GET() {
  return NextResponse.json({
    purpose: "Temporary email fix utility",
    issue: "membership@peartree.dental not receiving emails",
    solution: "POST with alternativeEmail to get fix instructions",
    usage: 'POST { "alternativeEmail": "working-email@peartree.dental" }',
  });
}
