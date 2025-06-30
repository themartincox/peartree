import { NextRequest, NextResponse } from 'next/server';

// Define proper interface for membership submissions
interface MembershipSubmission {
  id: string
  timestamp: string
  firstName: string
  lastName: string
  email: string
  planName: string
  planPrice: string
  dentistName?: string
  isExistingPatient: string
  dentistGenderPreference?: string
  [key: string]: unknown // Allow for additional fields
}

const membershipSubmissions: MembershipSubmission[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Create submission record
    const submission: MembershipSubmission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      planName: body.planName,
      planPrice: body.planPrice,
      dentistName: body.dentistName,
      isExistingPatient: body.isExistingPatient,
      dentistGenderPreference: body.dentistGenderPreference,
      ...body // Include any additional fields
    };

    // Store submission (in production, save to database)
    membershipSubmissions.push(submission);

    // Generate application ID
    const applicationId = `PTDC-${Date.now()}`;

    return NextResponse.json({
      success: true,
      applicationId,
      message: 'Membership application submitted successfully'
    });

  } catch (error) {
    console.error('Membership submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit membership application'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return list of submissions (for admin purposes)
  return NextResponse.json({
    submissions: membershipSubmissions,
    count: membershipSubmissions.length
  });
}
