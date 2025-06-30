import { type NextRequest, NextResponse } from 'next/server';

// In a real application, this would be stored in a database
// For now, we'll store in memory (this will reset on server restart)
const membershipSubmissions: any[] = [];
const staffLeaderboard: Record<string, {
  name: string;
  id: string;
  signups: number;
  lastSignup: string;
}> = {};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Generate application ID
    const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create submission record
    const submission = {
      id: applicationId,
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };

    // Store submission
    membershipSubmissions.push(submission);

    // Track staff performance if this was a clinic signup
    if (formData.staffMemberName && formData.staffMemberName.trim()) {
      const staffKey = formData.staffMemberName.toLowerCase().trim();

      if (!staffLeaderboard[staffKey]) {
        staffLeaderboard[staffKey] = {
          name: formData.staffMemberName,
          id: formData.staffMemberId || '',
          signups: 0,
          lastSignup: ''
        };
      }

      staffLeaderboard[staffKey].signups += 1;
      staffLeaderboard[staffKey].lastSignup = new Date().toISOString();

      console.log(`📊 Staff signup tracked: ${formData.staffMemberName} (Total: ${staffLeaderboard[staffKey].signups})`);
    }

    console.log(`✅ Membership submission received: ${applicationId}`);
    console.log(`👤 Member: ${formData.firstName} ${formData.lastName}`);
    console.log(`📋 Plan: ${formData.selectedPlan || 'Not specified'}`);
    if (formData.staffMemberName) {
      console.log(`👨‍⚕️ Staff Member: ${formData.staffMemberName} (${formData.staffMemberId || 'No ID'})`);
    }

    return NextResponse.json({
      success: true,
      applicationId,
      message: 'Membership application submitted successfully',
      staffTracked: !!formData.staffMemberName
    });

  } catch (error) {
    console.error('Membership submission error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to submit membership application'
    }, { status: 500 });
  }
}

// GET endpoint to retrieve staff leaderboard
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const action = url.searchParams.get('action');

    if (action === 'leaderboard') {
      // Convert leaderboard to array and sort by signups
      const leaderboardArray = Object.values(staffLeaderboard)
        .sort((a, b) => b.signups - a.signups);

      return NextResponse.json({
        success: true,
        leaderboard: leaderboardArray,
        totalSubmissions: membershipSubmissions.length,
        clinicSignups: membershipSubmissions.filter(s => s.staffMemberName).length
      });
    }

    if (action === 'submissions') {
      // Return recent submissions (last 10)
      const recentSubmissions = membershipSubmissions
        .slice(-10)
        .reverse()
        .map(submission => ({
          id: submission.id,
          name: `${submission.firstName} ${submission.lastName}`,
          plan: submission.selectedPlan,
          staffMember: submission.staffMemberName || null,
          submittedAt: submission.submittedAt
        }));

      return NextResponse.json({
        success: true,
        submissions: recentSubmissions
      });
    }

    return NextResponse.json({
      success: true,
      totalSubmissions: membershipSubmissions.length,
      clinicSignups: membershipSubmissions.filter(s => s.staffMemberName).length
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({
      success: false,
      message: 'API request failed'
    }, { status: 500 });
  }
}
