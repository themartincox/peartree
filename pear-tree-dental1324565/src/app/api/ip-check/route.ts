import { type NextRequest, NextResponse } from 'next/server';

// Define clinic IP addresses (you can configure these)
const CLINIC_IPS = [
  '127.0.0.1', // localhost for development
  '::1', // localhost IPv6
  '172.31.47.230', // Add current dev IP for testing
  // Add actual clinic IP addresses here
  // '203.0.113.1', // Example clinic IP
  // '198.51.100.1', // Example clinic IP 2
];

export async function GET(request: NextRequest) {
  try {
    // Get client IP from various headers
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const remoteAddress = request.headers.get('x-vercel-forwarded-for');

    // Determine the client IP
    let clientIp = forwarded?.split(',')[0] || realIp || remoteAddress || 'unknown';

    // Clean up the IP (remove port if present)
    clientIp = clientIp.split(':')[0];

    // Check if IP is from clinic
    const isClinicIp = CLINIC_IPS.includes(clientIp);

    console.log(`IP Check - Client IP: ${clientIp}, Is Clinic: ${isClinicIp}`);

    return NextResponse.json({
      clientIp,
      isClinicIp,
      message: isClinicIp ? 'Access from clinic detected' : 'External access detected'
    });

  } catch (error) {
    console.error('IP check error:', error);
    return NextResponse.json({
      clientIp: 'unknown',
      isClinicIp: false,
      message: 'Could not determine IP address'
    }, { status: 200 }); // Still return 200 to avoid breaking the form
  }
}
