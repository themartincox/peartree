import { type NextRequest, NextResponse } from 'next/server';
import { sendMembershipConfirmationEmail } from '@/lib/emailService';

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

// Helper function to get plan price from plan name
const getPlanPrice = (planName: string): string => {
  const planPrices: { [key: string]: string } = {
    'ESSENTIAL MAINTENANCE': '£10.95',
    'ROUTINE CARE': '£15.95',
    'COMPLETE CARE': '£19.95',
    'COMPLETE CARE PLUS': '£25.95',
    'PERIODONTAL HEALTH': '£29.95',
    'FAMILY PLAN': '£49.50'
  };
  return planPrices[planName] || '£0.00';
};

// Helper function to get plan name from selected plan key
const getPlanName = (selectedPlan: string): string => {
  const planNames: { [key: string]: string } = {
    'planA': 'ESSENTIAL MAINTENANCE',
    'planB': 'ROUTINE CARE',
    'planC': 'COMPLETE CARE',
    'planD': 'COMPLETE CARE PLUS',
    'planE': 'PERIODONTAL HEALTH',
    'family': 'FAMILY PLAN'
  };
  return planNames[selectedPlan] || selectedPlan;
};

// Helper function to get dentist name
const getDentistName = (formData: Record<string, unknown>): string => {
  if (formData.isExistingPatient === 'yes' && formData.preferredDentist) {
    return String(formData.preferredDentist);
  }

  if (formData.isExistingPatient === 'no' && formData.dentistGenderPreference) {
    const preference = String(formData.dentistGenderPreference);
    if (preference === 'no-preference') {
      return 'To be assigned based on availability';
    }
    return `${preference.charAt(0).toUpperCase()}${preference.slice(1)} dentist (to be assigned)`;
  }

  return 'To be assigned';
};

// Helper function to get partner dentist name for family plans
const getPartnerDentistName = (formData: Record<string, unknown>): string => {
  if (formData.partnerIsExistingPatient === 'yes' && formData.partnerPreferredDentist) {
    return String(formData.partnerPreferredDentist);
  }

  if (formData.partnerIsExistingPatient === 'no' && formData.partnerDentistGenderPreference) {
    const preference = String(formData.partnerDentistGenderPreference);
    if (preference === 'no-preference') {
      return 'To be assigned based on availability';
    }
    return `${preference.charAt(0).toUpperCase()}${preference.slice(1)} dentist (to be assigned)`;
  }

  return 'To be assigned';
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Get plan details
    const planName = getPlanName(body.selectedPlan);
    const planPrice = getPlanPrice(planName);
    const dentistName = getDentistName(body);

    // Create submission record
    const submission: MembershipSubmission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      planName: planName,
      planPrice: planPrice,
      dentistName: dentistName,
      isExistingPatient: body.isExistingPatient,
      dentistGenderPreference: body.dentistGenderPreference,
      ...body // Include any additional fields
    };

    // Store submission (in production, save to database)
    membershipSubmissions.push(submission);

    // Generate application ID
    const applicationId = `PTDC-${Date.now()}`;

    // Prepare email data
    const emailData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      planName: planName,
      planPrice: planPrice,
      applicationId: applicationId,
      isFamily: body.selectedPlan === 'family',
      partnerFirstName: body.partnerFirstName || '',
      partnerLastName: body.partnerLastName || '',
      dentistName: dentistName,
      partnerDentistName: body.selectedPlan === 'family' ? getPartnerDentistName(body) : '',
      accountHolderName: body.accountHolderName,
      familyMembers: body.familyMembers || [],
      isClinicSignup: body.isClinicSignup || false,
      staffMemberName: body.staffMemberName || ''
    };

    // Send confirmation email
    try {
      const emailResult = await sendMembershipConfirmationEmail(emailData);
      console.log('Email sent successfully:', emailResult);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the entire request if email fails
      // Return success but log the email failure
    }

    return NextResponse.json({
      success: true,
      applicationId,
      message: 'Membership application submitted successfully',
      emailSent: true // Indicate email was attempted
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
