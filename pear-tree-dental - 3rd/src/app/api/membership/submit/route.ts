import { type NextRequest, NextResponse } from 'next/server';
import { sendMembershipConfirmationEmail } from '@/lib/emailService';
import { validateMembershipForm } from '@/lib/inputSecurity';
import { validateMembershipRequest, getSecurityHeaders } from '@/lib/rateLimiting';
import { supabaseAdmin } from '@/lib/supabase';
import { encryptBankDetail } from '@/lib/encryption';

// Check if we're in a build environment
const isBuildOrSSR = process.env.NODE_ENV === 'production' && typeof window === 'undefined';

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

// --- helpers: put these near the top of the file ---
function extractClientIp(req: NextRequest): string | null {
  // Prefer x-forwarded-for (may contain comma-separated list)
  const raw =
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    null;
  if (!raw) return null;

  const first = raw.split(',')[0]?.trim();
  // Very light sanity check: IPv4-ish or has ":" (IPv6)
  const ok = /^(\d{1,3}\.){3}\d{1,3}$|:/.test(first);
  return ok ? first : null;
}

function toISODateOrNull(s: unknown): string | null {
  if (typeof s !== 'string' || !s) return null;
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

// --- REPLACEMENT: saveApplicationToSupabase ---
const saveApplicationToSupabase = async (
  formData: Record<string, unknown>,
  applicationId: string,
  planName: string,
  planPrice: string,
  dentistName: string,
  request: NextRequest
) => {
  try {
    // Build/SSR short-circuit (unchanged)
    if (isBuildOrSSR && process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder')) {
      console.log('Build environment detected, returning mock success response');
      return { success: true, id: applicationId };
    }

    console.log('💾 Saving application to Supabase:', applicationId);

    // Encrypt sensitive bank details
    const sortCodeEncrypted = encryptBankDetail(String(formData.sortCode || ''));
    const accountNumberEncrypted = encryptBankDetail(String(formData.accountNumber || ''));

    // Audit: valid inet or null (NEVER "unknown")
    const ip = extractClientIp(request);
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Ensure correct types for JSONB & booleans
    const familyMembers = Array.isArray(formData.familyMembers) ? formData.familyMembers : [];
    const isClinicSignup = !!formData.isClinicSignup;

    // Map to DB schema (normalize dates to YYYY-MM-DD, fix status, allow nulls where appropriate)
    const applicationData = {
      application_id: applicationId,

      // Personal info
      title: formData.title ?? null,
      first_name: formData.firstName ?? null,
      last_name: formData.lastName ?? null,
      email: formData.email ?? null,
      phone: formData.phone ?? null,
      date_of_birth: toISODateOrNull(formData.dateOfBirth),
      address: formData.address ?? null,
      postcode: formData.postcode ?? null,

      // Partner info (family plans)
      partner_title: formData.partnerTitle ?? null,
      partner_first_name: formData.partnerFirstName ?? null,
      partner_last_name: formData.partnerLastName ?? null,
      partner_email: formData.partnerEmail ?? null,
      partner_phone: formData.partnerPhone ?? null,
      partner_date_of_birth: toISODateOrNull(formData.partnerDateOfBirth),
      partner_is_existing_patient: formData.partnerIsExistingPatient ?? null,
      partner_preferred_dentist: formData.partnerPreferredDentist ?? null,
      partner_dentist_gender_preference: formData.partnerDentistGenderPreference ?? null,

      // Bank details (encrypted)
      account_holder_name: formData.accountHolderName ?? null,
      sort_code_encrypted: sortCodeEncrypted,
      account_number_encrypted: accountNumberEncrypted,
      bank_name: formData.bankName ?? null,

      // Plan info
      selected_plan: formData.selectedPlan ?? null,
      plan_name: planName,
      plan_price: planPrice,

      // Patient preferences
      is_existing_patient: formData.isExistingPatient ?? null,
      preferred_dentist: formData.preferredDentist ?? null,
      dentist_gender_preference: formData.dentistGenderPreference ?? null,
      dentist_name: dentistName,
      preferred_appointment_time: formData.preferredAppointmentTime ?? null,
      communication_preference: formData.communicationPreference ?? null,

      // Consents / confirmations
      direct_debit_confirmed: !!formData.directDebitConfirmed,
      dd_guarantee_read: !!formData.ddGuaranteeRead,
      membership_terms_read: !!formData.membershipTermsRead,
      marketing_consent: !!formData.marketingConsent,
      terms_accepted: !!formData.termsAccepted,

      // Staff info
      is_clinic_signup: isClinicSignup,
      staff_member_name: formData.staffMemberName ?? null,
      staff_member_id: formData.staffMemberId ?? null,

      // Family members JSONB
      family_members: familyMembers,

      // Status tracking
      status: 'pending',     // 🟢 changed from 'new'
      email_sent: false,
      email_error: null,

      // Audit trail
      ip_address: ip,        // 🟢 null or valid inet
      user_agent: userAgent,
      submission_source: 'website',
    };

    const { data, error } = await supabaseAdmin
      .from('membership_applications')
      .insert(applicationData)
      .select('id')
      .single();

    if (error) {
      console.error('❌ Supabase insert error:', error);
      // If it's a data error, surface it to the caller so they can return 400 instead of 500
      return {
        success: false,
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        }
      };
    }

    console.log('✅ Application saved to Supabase, ID:', data.id);
    return { success: true, id: data.id };
  } catch (error) {
    console.error('❌ Failed to save application to Supabase:', error);
    return { success: false, error };
  }
};


// Helper function to update email status in Supabase
const updateEmailStatus = async (
  applicationId: string,
  emailSent: boolean,
  emailError?: string
) => {
  try {
    const { error } = await supabaseAdmin
      .from('membership_applications')
      .update({
        email_sent: emailSent,
        email_error: emailError || null
      })
      .eq('application_id', applicationId);

    if (error) {
      console.error('❌ Failed to update email status:', error);
    }
  } catch (err) {
    console.error('❌ Error updating email status:', err);
  }
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
  const securityHeaders = getSecurityHeaders();

  // Build-time check: short-circuit and return mock response if in build/SSR with placeholder Supabase URL
  if (isBuildOrSSR && process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder')) {
    const applicationId = `PTDC-${Date.now()}`;
    const response = {
      success: true,
      applicationId,
      message: 'Membership application submitted successfully (build/mock)',
      emailSent: true,
      emailError: null,
      submissionId: applicationId
    };
    const successResponse = NextResponse.json(response);
    Object.entries(securityHeaders).forEach(([key, value]) => {
      successResponse.headers.set(key, value);
    });
    successResponse.headers.set('X-RateLimit-Limit', '3');
    successResponse.headers.set('X-RateLimit-Remaining', '3');
    successResponse.headers.set('X-RateLimit-Reset', `${Math.floor(Date.now() / 1000) + 900}`);
    return successResponse;
  }

  try {
    console.log('🟢 POST /api/membership/submit called');

    // 🛡️ SECURITY VALIDATION & RATE LIMITING
    console.log('🛡️ Running security validation...');
    const securityValidation = validateMembershipRequest(request);

    if (!securityValidation.valid) {
      console.error('❌ Security validation failed:', securityValidation.error);
      console.error('🚫 Client IP:', securityValidation.clientIP);

      const errorResponse = NextResponse.json(
        {
          success: false,
          error: 'Request validation failed',
          details: securityValidation.error
        },
        { status: securityValidation.error?.includes('Rate limit') ? 429 : 400 }
      );

      // Add security headers and rate limit info
      Object.entries(securityHeaders).forEach(([key, value]) => {
        errorResponse.headers.set(key, value);
      });

      if (securityValidation.rateLimitResult.limited) {
        errorResponse.headers.set('Retry-After', '900'); // 15 minutes
        errorResponse.headers.set('X-RateLimit-Limit', '3');
        errorResponse.headers.set('X-RateLimit-Remaining', '0');
        errorResponse.headers.set(
          'X-RateLimit-Reset',
          securityValidation.rateLimitResult.resetTime?.toString() || ''
        );
      }

      return errorResponse;
    }

    console.log('✅ Security validation passed');
    console.log('📊 Rate limit remaining:', securityValidation.rateLimitResult.remaining);
    console.log('🔄 Membership submission started...');

    const body = await request.json();
    console.log('📩 Incoming form data (sanitized)');
    console.log('📝 Received submission for validation');

    // 🔒 COMPREHENSIVE SECURITY VALIDATION
    console.log('🔒 Running comprehensive security validation...');
    const validationResult = validateMembershipForm(body);

    if (!validationResult.isValid) {
      console.error('❌ Validation failed:', validationResult.errors);
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: 'Please check your input and try again',
          validationErrors: validationResult.errors
        },
        { status: 400 }
      );
    }

    // Use sanitized data for all subsequent operations
    const sanitizedData = validationResult.sanitizedData;
    console.log(
      '✅ Input validation passed'
    );
    console.log(
      '📝 Processing submission for:',
      sanitizedData.firstName,
      sanitizedData.lastName,
      sanitizedData.email
    );

    // Get plan details using sanitized data
    const planName = getPlanName(sanitizedData.selectedPlan);
    const planPrice = getPlanPrice(planName);
    const dentistName = getDentistName(sanitizedData);
    const applicationId = `PTDC-${Date.now()}`;

    console.log('📋 Plan details:', { planName, planPrice, dentistName, applicationId });

    // 🛠️ SAVE APPLICATION TO SUPABASE
    console.log('💾 About to save submission to Supabase...');
    const saveResult = await saveApplicationToSupabase(
      sanitizedData,
      applicationId,
      planName,
      planPrice,
      dentistName,
      request
    );

    if (!saveResult.success) {
      console.error('❌ Failed to save to Supabase:', saveResult.error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to save application',
          details: 'An error occurred while saving your application'
        },
        { status: 500 }
      );
    }

    console.log('✅ Saved submission to Supabase - ID:', applicationId);

    // Prepare email data using sanitized inputs
    const emailData = {
      firstName: sanitizedData.firstName,
      lastName: sanitizedData.lastName,
      email: sanitizedData.email,
      planName: planName,
      planPrice: planPrice,
      applicationId: applicationId,
      isFamily: sanitizedData.selectedPlan === 'family',
      partnerFirstName: sanitizedData.partnerFirstName || '',
      partnerLastName: sanitizedData.partnerLastName || '',
      dentistName: dentistName,
      partnerDentistName:
        sanitizedData.selectedPlan === 'family'
          ? getPartnerDentistName(sanitizedData)
          : '',
      accountHolderName: sanitizedData.accountHolderName,
      familyMembers: sanitizedData.familyMembers || [],
      isClinicSignup: sanitizedData.isClinicSignup || false,
      staffMemberName: sanitizedData.staffMemberName || '',
      ddGuaranteePdf: sanitizedData.ddGuaranteePdf,
      membershipTermsPdf: sanitizedData.membershipTermsPdf,
    };

    // ✅ TRY TO SEND EMAIL (but don't fail the whole thing if email fails)
    let emailSent = false;
    let emailError = null;
    try {
      console.log('📧 About to send confirmation email...');
      console.log('📧 Email recipient:', emailData.email);
      console.log(
        '📧 Email data being sent:',
        JSON.stringify(
          {
            firstName: emailData.firstName,
            lastName: emailData.lastName,
            planName: emailData.planName,
            applicationId: emailData.applicationId
          },
          null,
          2
        )
      );

      const emailResult = await sendMembershipConfirmationEmail(emailData);
      console.log('📧 Email service result:', emailResult);

      if (emailResult && emailResult.success) {
        emailSent = true;
        console.log('✅ Email sent successfully to:', emailData.email);
        console.log('📧 Patient email ID:', emailResult.patientMessageId);
        console.log(
          '📧 Practice emails sent:',
          emailResult.practiceEmailsSent,
          'out of',
          emailResult.practiceResults.length
        );
      } else {
        emailSent = false;
        emailError = emailResult?.error || 'Email service returned failure';
        console.log('❌ Email sending failed:', emailError);
      }
    } catch (emailErr) {
      console.error('❌ Email failed with exception:', emailErr);
      console.error(
        '❌ Email error details:',
        emailErr instanceof Error ? emailErr.message : 'Unknown'
      );
      console.error(
        '❌ Email error stack:',
        emailErr instanceof Error ? emailErr.stack : 'No stack trace'
      );
      emailError = emailErr instanceof Error ? emailErr.message : 'Email service error';
      emailSent = false;
      // Continue - application is already saved
    }

    // Update email status in Supabase
    await updateEmailStatus(applicationId, emailSent, emailError);

    // Always return success if we got this far (application is saved)
    const response = {
      success: true,
      applicationId,
      message: 'Membership application submitted successfully',
      emailSent,
      emailError,
      submissionId: applicationId
    };

    console.log('✅ Submission complete:', { success: true, applicationId, emailSent });

    // Create response with security headers
    const successResponse = NextResponse.json(response);
    Object.entries(securityHeaders).forEach(([key, value]) => {
      successResponse.headers.set(key, value);
    });

    // Add rate limit headers
    successResponse.headers.set('X-RateLimit-Limit', '3');
    successResponse.headers.set(
      'X-RateLimit-Remaining',
      securityValidation.rateLimitResult.remaining?.toString() || '0'
    );
    successResponse.headers.set(
      'X-RateLimit-Reset',
      securityValidation.rateLimitResult.resetTime?.toString() || ''
    );

    return successResponse;
  } catch (error) {
    console.error('❌ Membership submission error:', error);

    const errorResponse = NextResponse.json(
      {
        success: false,
        error: 'Failed to submit membership application',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );

    // Add security headers to error response
    Object.entries(securityHeaders).forEach(([key, value]) => {
      errorResponse.headers.set(key, value);
    });

    return errorResponse;
  }
}