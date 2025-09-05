import { type NextRequest, NextResponse } from 'next/server';
import { sendMembershipConfirmationEmail } from '@/lib/emailService';
import { validateMembershipForm } from '@/lib/inputSecurity';
import { validateMembershipRequest, getSecurityHeaders } from '@/lib/rateLimiting';
import { supabaseAdmin } from '@/lib/supabase';
import { encryptBankDetail } from '@/lib/encryption';

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

// Helper function to save application to Supabase
const saveApplicationToSupabase = async (formData: Record<string, unknown>, applicationId: string, planName: string, planPrice: string, dentistName: string, request: NextRequest) => {
  try {
    console.log('💾 Saving application to Supabase:', applicationId);

    // Encrypt sensitive bank details
    const sortCodeEncrypted = encryptBankDetail(String(formData.sortCode || ''));
    const accountNumberEncrypted = encryptBankDetail(String(formData.accountNumber || ''));

    // Get client IP and user agent for audit
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Map form data to database schema
    const applicationData = {
      application_id: applicationId,

      // Personal info
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || null,
      date_of_birth: formData.dateOfBirth || null,
      address: formData.address || null,
      postcode: formData.postcode || null,

      // Bank details (encrypted)
      account_holder_name: formData.accountHolderName,
      sort_code_encrypted: sortCodeEncrypted,
      account_number_encrypted: accountNumberEncrypted,

      // Plan info
      selected_plan: formData.selectedPlan,
      plan_name: planName,
      plan_price: planPrice,

      // Patient preferences
      is_existing_patient: formData.isExistingPatient,
      preferred_dentist: formData.preferredDentist || null,
      dentist_gender_preference: formData.dentistGenderPreference || null,
      dentist_name: dentistName,

      // Partner info (if family plan)
      partner_first_name: formData.partnerFirstName || null,
      partner_last_name: formData.partnerLastName || null,
      partner_email: formData.partnerEmail || null,
      partner_is_existing_patient: formData.partnerIsExistingPatient || null,
      partner_preferred_dentist: formData.partnerPreferredDentist || null,
      partner_dentist_gender_preference: formData.partnerDentistGenderPreference || null,

      // Staff info
      is_clinic_signup: formData.isClinicSignup || false,
      staff_member_name: formData.staffMemberName || null,

      // Family members
      family_members: formData.familyMembers || [],

      // Status tracking
      status: 'new',
      email_sent: false,

      // Audit trail
      ip_address: ip,
      user_agent: userAgent,
      submission_source: 'website'
    };

    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('membership_applications')
      .insert(applicationData)
      .select('id')
      .single();

    if (error) {
      console.error('❌ Supabase insert error:', error);
      throw error;
    }

    console.log('✅ Application saved to Supabase, ID:', data.id);
    return { success: true, id: data.id };
  } catch (error) {
    console.error('❌ Failed to save application to Supabase:', error);
    return { success: false, error };
  }
};

// Helper function to update email status in Supabase
const updateEmailStatus = async (applicationId: string, emailSent: boolean, emailError?: string) => {
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

  try {
    console.log('🟢 POST /api/membership/submit called');

    // 🛡️ SECURITY VALIDATION & RATE LIMITING
    console.log('🛡️ Running security validation...');
    const securityValidation = validateMembershipRequest(request);

    if (!securityValidation.valid) {
      console.error('❌ Security validation failed:', securityValidation.error);
      console.error('🚫 Client IP:', securityValidation.clientIP);

      const errorResponse = NextResponse.json({
        success: false,
        error: 'Request validation failed',
        details: securityValidation.error
      }, { status: securityValidation.error?.includes('Rate limit') ? 429 : 400 });

      // Add security headers and rate limit info
      Object.entries(securityHeaders).forEach(([key, value]) => {
        errorResponse.headers.set(key, value);
      });

      if (securityValidation.rateLimitResult.limited) {
        errorResponse.headers.set('Retry-After', '900'); // 15 minutes
        errorResponse.headers.set('X-RateLimit-Limit', '3');
        errorResponse.headers.set('X-RateLimit-Remaining', '0');
        errorResponse.headers.set('X-RateLimit-Reset', securityValidation.rateLimitResult.resetTime?.toString() || '');
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
      return NextResponse.json({
        success: false,
        error: 'Invalid form data',
        details: 'Please check your input and try again',
        validationErrors: validationResult.errors
      }, { status: 400 });
    }

    // Use sanitized data for all subsequent operations
    const sanitizedData = validationResult.sanitizedData;
    console.log('✅ Input validation passed');
    console.log('📝 Processing submission for:', sanitizedData.firstName, sanitizedData.lastName, sanitizedData.email);

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
      return NextResponse.json({
        success: false,
        error: 'Failed to save application',
        details: 'An error occurred while saving your application'
      }, { status: 500 });
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
      partnerDentistName: sanitizedData.selectedPlan === 'family' ? getPartnerDentistName(sanitizedData) : '',
      accountHolderName: sanitizedData.accountHolderName,
      familyMembers: sanitizedData.familyMembers || [],
      isClinicSignup: sanitizedData.isClinicSignup || false,
      staffMemberName: sanitizedData.staffMemberName || ''
    };

    // ✅ TRY TO SEND EMAIL (but don't fail the whole thing if email fails)
    let emailSent = false;
    let emailError = null;
    try {
      console.log('📧 About to send confirmation email...');
      console.log('📧 Email recipient:', emailData.email);
      console.log('📧 Email data being sent:', JSON.stringify({
        firstName: emailData.firstName,
        lastName: emailData.lastName,
        planName: emailData.planName,
        applicationId: emailData.applicationId
      }, null, 2));

      const emailResult = await sendMembershipConfirmationEmail(emailData);
      console.log('📧 Email service result:', emailResult);

      if (emailResult && emailResult.success) {
        emailSent = true;
        console.log('✅ Email sent successfully to:', emailData.email);
        console.log('📧 Patient email ID:', emailResult.patientMessageId);
        console.log('📧 Practice emails sent:', emailResult.practiceEmailsSent, 'out of', emailResult.practiceResults.length);
      } else {
        emailSent = false;
        emailError = emailResult?.error || 'Email service returned failure';
        console.log('❌ Email sending failed:', emailError);
      }
    } catch (emailErr) {
      console.error('❌ Email failed with exception:', emailErr);
      console.error('❌ Email error details:', emailErr instanceof Error ? emailErr.message : 'Unknown');
      console.error('❌ Email error stack:', emailErr instanceof Error ? emailErr.stack : 'No stack trace');
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
    successResponse.headers.set('X-RateLimit-Remaining', securityValidation.rateLimitResult.remaining?.toString() || '0');
    successResponse.headers.set('X-RateLimit-Reset', securityValidation.rateLimitResult.resetTime?.toString() || '');

    return successResponse;

  } catch (error) {
    console.error('❌ Membership submission error:', error);

    const errorResponse = NextResponse.json({
      success: false,
      error: 'Failed to submit membership application',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });

    // Add security headers to error response
    Object.entries(securityHeaders).forEach(([key, value]) => {
      errorResponse.headers.set(key, value);
    });

    return errorResponse;
  }
}
