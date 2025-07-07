import { type NextRequest, NextResponse } from 'next/server';
import { sendMembershipConfirmationEmail } from '@/lib/emailService';
import fs from 'fs';
import path from 'path';

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

// File path for storing applications (in production, use a proper database)
const APPLICATIONS_FILE = path.join(process.cwd(), '.applications', 'membership-applications.json');

// Ensure applications directory exists
const ensureApplicationsDir = () => {
  try {
    const dir = path.dirname(APPLICATIONS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log('Created applications directory:', dir);
    }
    return true;
  } catch (error) {
    console.error('Failed to create applications directory:', error);
    return false;
  }
};

// Save application to file as backup
const saveApplicationToFile = async (submission: MembershipSubmission) => {
  try {
    console.log('Saving application to file for:', submission.firstName, submission.lastName);

    ensureApplicationsDir();

    let applications: MembershipSubmission[] = [];

    // Read existing applications if file exists
    if (fs.existsSync(APPLICATIONS_FILE)) {
      try {
        const fileContent = fs.readFileSync(APPLICATIONS_FILE, 'utf-8');
        if (fileContent.trim()) {
          applications = JSON.parse(fileContent);
          console.log('Existing applications loaded:', applications.length);
        }
      } catch (parseError) {
        console.error('Error parsing existing applications file:', parseError);
        // Start with empty array if file is corrupted
        applications = [];
      }
    }

    // Add new application
    applications.push(submission);
    console.log('Total applications after adding new one:', applications.length);

    // Write back to file
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applications, null, 2));
    console.log(`✅ Application saved to backup file: ${submission.id}`);

    // Verify the file was written correctly
    if (fs.existsSync(APPLICATIONS_FILE)) {
      const verifyContent = fs.readFileSync(APPLICATIONS_FILE, 'utf-8');
      const verifyApplications = JSON.parse(verifyContent);
      console.log('✅ File verification successful, applications count:', verifyApplications.length);
    }

    return true;
  } catch (error) {
    console.error('❌ Failed to save application to file:', error);
    return false;
  }
};

// Load applications from file
const loadApplicationsFromFile = (): MembershipSubmission[] => {
  try {
    if (fs.existsSync(APPLICATIONS_FILE)) {
      const fileContent = fs.readFileSync(APPLICATIONS_FILE, 'utf-8');
      return JSON.parse(fileContent);
    }
    return [];
  } catch (error) {
    console.error('Failed to load applications from file:', error);
    return [];
  }
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
    console.log('🔄 Membership submission started...');

    const body = await request.json();
    console.log('📝 Received submission for:', body.firstName, body.lastName, body.email);

    // Get plan details
    const planName = getPlanName(body.selectedPlan);
    const planPrice = getPlanPrice(planName);
    const dentistName = getDentistName(body);

    console.log('📋 Plan details:', { planName, planPrice, dentistName });

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

    console.log('💾 Created submission record with ID:', submission.id);

    // Store submission (in production, save to database)
    membershipSubmissions.push(submission);
    console.log('📊 In-memory submissions count:', membershipSubmissions.length);

    // BACKUP: Save to file in case email fails
    const fileSaved = await saveApplicationToFile(submission);
    console.log('💿 File save result:', fileSaved);

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
    let emailSent = false;
    let emailError = null;
    try {
      console.log('📧 Attempting to send confirmation email...');
      const emailResult = await sendMembershipConfirmationEmail(emailData);
      console.log('📧 Email sent successfully:', emailResult);
      emailSent = true;
    } catch (emailErr) {
      console.error('❌ Failed to send confirmation email:', emailErr);
      emailError = emailErr instanceof Error ? emailErr.message : 'Unknown email error';
      // Don't fail the entire request if email fails - continue with success
      console.log('⚠️ Continuing with membership submission despite email failure');
    }

    const response = {
      success: true,
      applicationId,
      message: 'Membership application submitted successfully',
      emailSent: emailSent,
      emailError: emailError,
      backupSaved: fileSaved,
      submissionId: submission.id,
      debug: {
        planName,
        planPrice,
        inMemoryCount: membershipSubmissions.length,
        filePath: APPLICATIONS_FILE,
        fileExists: fs.existsSync(APPLICATIONS_FILE)
      }
    };

    console.log('✅ Submission complete:', response);
    return NextResponse.json(response);

  } catch (error) {
    console.error('❌ Membership submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit membership application',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log('📊 GET request - retrieving submissions');

    // Return list of submissions (for admin purposes) - combine memory and file
    const fileApplications = loadApplicationsFromFile();
    const allApplications = [...membershipSubmissions, ...fileApplications];

    // Remove duplicates based on ID
    const uniqueApplications = allApplications.filter((app, index, self) =>
      index === self.findIndex(a => a.id === app.id)
    );

    // Sort by timestamp (newest first)
    uniqueApplications.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    console.log('📈 Returning submissions:', {
      memory: membershipSubmissions.length,
      file: fileApplications.length,
      unique: uniqueApplications.length
    });

    return NextResponse.json({
      submissions: uniqueApplications,
      count: uniqueApplications.length,
      sources: {
        memory: membershipSubmissions.length,
        file: fileApplications.length,
        total: uniqueApplications.length
      }
    });
  } catch (error) {
    console.error('❌ Error in GET submissions:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to retrieve submissions'
      },
      { status: 500 }
    );
  }
}
