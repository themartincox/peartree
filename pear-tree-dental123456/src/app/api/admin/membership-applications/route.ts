import { type NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface MembershipSubmission {
  id: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  planName: string;
  planPrice: string;
  dentistName?: string;
  isExistingPatient: string;
  [key: string]: unknown;
}

const APPLICATIONS_FILE = path.join(process.cwd(), '.applications', 'membership-applications.json');

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

// Convert applications to CSV format
const convertToCSV = (applications: MembershipSubmission[]): string => {
  if (applications.length === 0) return '';

  // Define CSV headers
  const headers = [
    'Application ID',
    'Timestamp',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Plan Name',
    'Plan Price',
    'Date of Birth',
    'Address',
    'Postcode',
    'Is Existing Patient',
    'Preferred Dentist',
    'Dentist Gender Preference',
    'Account Holder Name',
    'Sort Code',
    'Account Number',
    'Partner First Name',
    'Partner Last Name',
    'Partner Email',
    'Staff Member Name',
    'Family Members Count'
  ];

  // Convert data to CSV rows
  const rows = applications.map(app => [
    app.id || '',
    new Date(app.timestamp).toLocaleString() || '',
    app.firstName || '',
    app.lastName || '',
    app.email || '',
    (app as any).phone || '',
    app.planName || '',
    app.planPrice || '',
    (app as any).dateOfBirth || '',
    (app as any).address || '',
    (app as any).postcode || '',
    app.isExistingPatient || '',
    (app as any).preferredDentist || '',
    app.dentistGenderPreference || '',
    (app as any).accountHolderName || '',
    (app as any).sortCode || '',
    (app as any).accountNumber ? '****' + ((app as any).accountNumber).slice(-4) : '',
    (app as any).partnerFirstName || '',
    (app as any).partnerLastName || '',
    (app as any).partnerEmail || '',
    (app as any).staffMemberName || '',
    (app as any).familyMembers ? JSON.stringify((app as any).familyMembers).length : '0'
  ]);

  // Combine headers and rows
  const csvContent = [headers, ...rows]
    .map(row => row.map(field => `"${field}"`).join(','))
    .join('\n');

  return csvContent;
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format');
    const download = searchParams.get('download') === 'true';

    // Load applications
    const applications = loadApplicationsFromFile();

    if (format === 'csv') {
      const csvContent = convertToCSV(applications);
      const filename = `membership-applications-${new Date().toISOString().split('T')[0]}.csv`;

      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': download ? `attachment; filename="${filename}"` : 'inline',
        },
      });
    }

    // Return JSON by default
    const response = {
      success: true,
      applications: applications.sort((a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ),
      count: applications.length,
      lastUpdated: applications.length > 0 ? applications[0].timestamp : null
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error in admin applications API:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to retrieve applications',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// DELETE endpoint to clear applications (admin only)
export async function DELETE() {
  try {
    if (fs.existsSync(APPLICATIONS_FILE)) {
      fs.unlinkSync(APPLICATIONS_FILE);
    }

    return NextResponse.json({
      success: true,
      message: 'All applications cleared',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error clearing applications:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to clear applications'
      },
      { status: 500 }
    );
  }
}
