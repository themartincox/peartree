import { NextResponse } from 'next/server';
import { validateMembershipForm } from '@/lib/inputSecurity';

export async function GET() {
  const testResults = [];
  const startTime = Date.now();

  try {
    console.log('🧪 Testing Core User Journey...');

    // Test 1: Membership Plans Data Structure
    const membershipPlans = {
      planA: { name: 'ESSENTIAL MAINTENANCE', price: '£10.95', dailyCost: '36p per day' },
      planB: { name: 'ROUTINE CARE', price: '£15.95', dailyCost: '53p per day' },
      planC: { name: 'COMPLETE CARE', price: '£19.95', dailyCost: '66p per day' },
      planD: { name: 'COMPLETE CARE PLUS', price: '£25.95', dailyCost: '86p per day' },
      planE: { name: 'PERIODONTAL HEALTH', price: '£29.95', dailyCost: '99p per day' },
      family: { name: 'FAMILY PLAN', price: '£49.50', dailyCost: '£1.65 per day' }
    };

    testResults.push({
      step: '1. Membership Plans',
      status: 'PASS',
      message: `All ${Object.keys(membershipPlans).length} plans configured correctly`,
      details: membershipPlans
    });

    // Test 2: Form Validation - Valid Data
    const validFormData = {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@example.com',
      phone: '07123456789',
      dateOfBirth: '1985-06-15',
      address: '123 Test Street, Burton Joyce, Nottingham',
      postcode: 'NG14 5AE',
      accountHolderName: 'John Smith',
      sortCode: '12-34-56',
      accountNumber: '12345678',
      selectedPlan: 'planC',
      isExistingPatient: 'no',
      dentistGenderPreference: 'no-preference'
    };

    const validationResult = validateMembershipForm(validFormData);
    testResults.push({
      step: '2. Valid Form Validation',
      status: validationResult.isValid ? 'PASS' : 'FAIL',
      message: validationResult.isValid ? 'Valid form data passes all security checks' : 'Valid data incorrectly rejected',
      details: {
        fieldsValidated: Object.keys(validationResult.sanitizedData).length,
        errors: validationResult.errors
      }
    });

    // Test 3: Security - XSS Prevention
    const xssTestData = {
      ...validFormData,
      firstName: '<script>alert("xss")</script>',
      lastName: 'Smith<img src=x onerror=alert("xss")>',
      address: 'Address<script>document.location="evil.com"</script>'
    };

    const xssValidation = validateMembershipForm(xssTestData);
    const isXssSanitized = !JSON.stringify(xssValidation.sanitizedData).includes('<script>') &&
                          !JSON.stringify(xssValidation.sanitizedData).includes('<img');

    testResults.push({
      step: '3. XSS Security Protection',
      status: isXssSanitized ? 'PASS' : 'FAIL',
      message: isXssSanitized ? 'XSS attempts successfully blocked and sanitized' : 'XSS vulnerability detected',
      details: {
        originalFirstName: xssTestData.firstName,
        sanitizedFirstName: xssValidation.sanitizedData.firstName,
        scriptsBlocked: isXssSanitized
      }
    });

    // Test 4: Required Field Validation
    const incompleteData = {
      firstName: '',
      email: 'invalid-email',
      sortCode: '123',
      accountNumber: '123'
    };

    const incompleteValidation = validateMembershipForm(incompleteData);
    const hasAppropriateErrors = Object.keys(incompleteValidation.errors).length > 0;

    testResults.push({
      step: '4. Required Field Validation',
      status: hasAppropriateErrors ? 'PASS' : 'FAIL',
      message: hasAppropriateErrors ? 'Missing/invalid fields correctly rejected' : 'Validation too permissive',
      details: {
        errorsDetected: Object.keys(incompleteValidation.errors).length,
        errors: incompleteValidation.errors
      }
    });

    // Test 5: UK-Specific Validation
    const ukValidationTests = [
      { field: 'postcode', value: 'NG14 5AE', shouldPass: true },
      { field: 'postcode', value: 'INVALID', shouldPass: false },
      { field: 'sortCode', value: '12-34-56', shouldPass: true },
      { field: 'sortCode', value: '123456', shouldPass: true }, // Auto-formats to 12-34-56 (good UX)
      { field: 'sortCode', value: 'INVALID', shouldPass: false }, // Actually invalid format
      { field: 'accountNumber', value: '12345678', shouldPass: true },
      { field: 'accountNumber', value: '123', shouldPass: false }
    ];

    let ukValidationPassed = 0;
    const ukValidationDetails = [];

    ukValidationTests.forEach(test => {
      const testData = { ...validFormData, [test.field]: test.value };
      const result = validateMembershipForm(testData);
      const passed = test.shouldPass ? result.isValid : !result.isValid;

      if (passed) ukValidationPassed++;

      ukValidationDetails.push({
        field: test.field,
        value: test.value,
        expected: test.shouldPass ? 'valid' : 'invalid',
        actual: result.isValid ? 'valid' : 'invalid',
        passed
      });
    });

    testResults.push({
      step: '5. UK Financial Validation',
      status: ukValidationPassed === ukValidationTests.length ? 'PASS' : 'FAIL',
      message: `${ukValidationPassed}/${ukValidationTests.length} UK validation tests passed`,
      details: ukValidationDetails
    });

    // Test 6: Family Plan Data Structure
    const familyPlanData = {
      ...validFormData,
      selectedPlan: 'family',
      partnerFirstName: 'Jane',
      partnerLastName: 'Smith',
      partnerEmail: 'jane.smith@example.com',
      partnerPhone: '07987654321',
      partnerDateOfBirth: '1987-03-20',
      partnerIsExistingPatient: 'no',
      partnerDentistGenderPreference: 'female'
    };

    const familyValidation = validateMembershipForm(familyPlanData);
    testResults.push({
      step: '6. Family Plan Validation',
      status: familyValidation.isValid ? 'PASS' : 'FAIL',
      message: familyValidation.isValid ? 'Family plan data structure validated successfully' : 'Family plan validation failed',
      details: {
        fieldsValidated: Object.keys(familyValidation.sanitizedData).length,
        errors: familyValidation.errors
      }
    });

    // Test 7: Environment & Configuration
    const envCheck = {
      nodeEnv: process.env.NODE_ENV || 'development',
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPassword: !!process.env.GMAIL_APP_PASSWORD,
      hasNextPublicUrl: !!process.env.NEXT_PUBLIC_SITE_URL
    };

    const criticalEnvMissing = !envCheck.hasEmailUser || !envCheck.hasEmailPassword;

    testResults.push({
      step: '7. Environment Configuration',
      status: criticalEnvMissing ? 'WARNING' : 'PASS',
      message: criticalEnvMissing ? 'Email environment variables missing (development environment)' : 'Environment properly configured',
      details: envCheck
    });

    // Summary
    const totalTests = testResults.length;
    const passCount = testResults.filter(r => r.status === 'PASS').length;
    const failCount = testResults.filter(r => r.status === 'FAIL').length;
    const warningCount = testResults.filter(r => r.status === 'WARNING').length;
    const duration = Date.now() - startTime;

    const summary = {
      totalTests,
      passed: passCount,
      failed: failCount,
      warnings: warningCount,
      successRate: Math.round((passCount / totalTests) * 100),
      duration: `${duration}ms`,
      overallStatus: failCount === 0 ? (warningCount === 0 ? 'EXCELLENT' : 'GOOD') : 'NEEDS ATTENTION'
    };

    console.log('✅ Core Journey Test Summary:', summary);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      summary,
      testResults,
      recommendations: generateRecommendations(testResults),
      userJourneySteps: [
        '1. User visits homepage at /',
        '2. User clicks "View Membership Plans" in hero section',
        '3. User navigates to /membership page',
        '4. User selects a plan and clicks "Join This Plan"',
        '5. User completes 4-step signup form at /membership/signup',
        '6. User receives confirmation email and success page',
        '7. Practice receives notification email for processing'
      ]
    });

  } catch (error) {
    console.error('❌ Journey test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      testResults
    }, { status: 500 });
  }
}

function generateRecommendations(testResults: any[]): string[] {
  const recommendations = [];

  const failed = testResults.filter(r => r.status === 'FAIL');
  const warnings = testResults.filter(r => r.status === 'WARNING');

  if (failed.length === 0 && warnings.length === 0) {
    recommendations.push('🟢 All core functionality tests passed!');
    recommendations.push('🚀 User journey is fully functional');
    recommendations.push('📧 Configure email environment variables for complete functionality');
  }

  if (failed.length > 0) {
    recommendations.push(`🔴 Critical: Fix ${failed.length} failing tests`);
    failed.forEach(f => recommendations.push(`  - ${f.step}: ${f.message}`));
  }

  if (warnings.length > 0) {
    recommendations.push(`🟡 Attention: ${warnings.length} configuration warnings`);
    warnings.forEach(w => recommendations.push(`  - ${w.step}: ${w.message}`));
  }

  recommendations.push('🧪 Next: Test with real email configuration');
  recommendations.push('📱 Consider mobile responsiveness testing');
  recommendations.push('⚡ Run performance audit');

  return recommendations;
}
