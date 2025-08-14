import { NextResponse } from "next/server";
import { validateMembershipForm } from "@/lib/inputSecurity";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Test the security validation
    const validationResult = validateMembershipForm(body);

    return NextResponse.json({
      success: true,
      testName: "Security Validation Test",
      inputReceived: body,
      validationResult: {
        isValid: validationResult.isValid,
        sanitizedData: validationResult.sanitizedData,
        errors: validationResult.errors,
        securityFeatures: [
          "XSS protection via input sanitization",
          "SQL injection prevention",
          "Input length validation",
          "Format validation for financial data",
          "HTML tag stripping",
          "Pattern validation for names, emails, phones",
          "UK-specific validation for postcodes and banking details",
        ],
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Security test failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Security Test Endpoint",
    features: [
      "🔒 Comprehensive input validation and sanitization",
      "🚫 XSS and injection attack prevention",
      "📱 Number-only validation for financial fields",
      "🛡️ Rate limiting (3 submissions per 15 minutes)",
      "📋 Field-specific validation rules",
      "🔐 Security headers on all responses",
      "⚡ Real-time input formatting and validation",
    ],
    usage:
      "POST test data to this endpoint to see security validation in action",
  });
}
