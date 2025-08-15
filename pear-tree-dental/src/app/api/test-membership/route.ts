import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const APPLICATIONS_FILE = path.join(process.cwd(), '.applications', 'membership-applications.json');

// Test endpoint to verify file system operations work
export async function POST() {
  try {
    console.log('🧪 Test endpoint called');

    // Ensure directory exists
    const dir = path.dirname(APPLICATIONS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log('✅ Created directory:', dir);
    }

    // Create test submission
    const testSubmission = {
      id: `test-${Date.now()}`,
      timestamp: new Date().toISOString(),
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      planName: 'COMPLETE CARE',
      planPrice: '£19.95',
      isExistingPatient: 'no',
      dentistGenderPreference: 'no-preference'
    };

    console.log('🧪 Created test submission:', testSubmission);

    // Read existing applications
    let applications = [];
    if (fs.existsSync(APPLICATIONS_FILE)) {
      try {
        const fileContent = fs.readFileSync(APPLICATIONS_FILE, 'utf-8');
        if (fileContent.trim()) {
          applications = JSON.parse(fileContent);
          console.log('📖 Read existing applications:', applications.length);
        }
      } catch (parseError) {
        console.error('❌ Parse error:', parseError);
        applications = [];
      }
    } else {
      console.log('📁 File does not exist, starting fresh');
    }

    // Add test submission
    applications.push(testSubmission);
    console.log('📝 Total applications after adding test:', applications.length);

    // Write to file
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applications, null, 2));
    console.log('💾 Wrote to file successfully');

    // Verify file was written
    const verifyContent = fs.readFileSync(APPLICATIONS_FILE, 'utf-8');
    const verifyApplications = JSON.parse(verifyContent);
    console.log('✅ Verification successful:', verifyApplications.length);

    return NextResponse.json({
      success: true,
      message: 'Test submission created successfully',
      testSubmission,
      totalApplications: verifyApplications.length,
      filePath: APPLICATIONS_FILE,
      fileExists: fs.existsSync(APPLICATIONS_FILE),
      lastApplication: verifyApplications[verifyApplications.length - 1]
    });

  } catch (error) {
    console.error('❌ Test endpoint error:', error);
    return NextResponse.json({
      success: false,
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    console.log('🧪 Test GET endpoint called');

    const fileExists = fs.existsSync(APPLICATIONS_FILE);
    let applications = [];
    let fileContent = '';

    if (fileExists) {
      fileContent = fs.readFileSync(APPLICATIONS_FILE, 'utf-8');
      if (fileContent.trim()) {
        applications = JSON.parse(fileContent);
      }
    }

    return NextResponse.json({
      success: true,
      filePath: APPLICATIONS_FILE,
      fileExists,
      fileSize: fileExists ? fs.statSync(APPLICATIONS_FILE).size : 0,
      applicationCount: applications.length,
      applications: applications.slice(-5), // Last 5 applications
      rawFileContent: fileContent.substring(0, 500) // First 500 chars
    });

  } catch (error) {
    console.error('❌ Test GET error:', error);
    return NextResponse.json({
      success: false,
      error: 'Test GET failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
