import { NextResponse } from 'next/server';

// IP checking for clinic access detection
export async function GET(request: Request) {
  try {
    // Get client IP from request headers
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwarded?.split(',')[0] || realIp || 'unknown';

    // Define clinic IP ranges (adjust these to match your actual clinic IPs)
    const clinicIpRanges = [
      '192.168.1.',    // Local network range
      '10.0.0.',       // Another common local range
      '172.16.',       // Private network range
      // Add your clinic's actual IP addresses or ranges here
    ];

    // Check if the client IP matches any clinic IP range
    const isClinicIp = clinicIpRanges.some(range => clientIp.startsWith(range));

    console.log('IP Check:', { clientIp, isClinicIp });

    return NextResponse.json({
      clientIp,
      isClinicIp,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('IP check error:', error);
    return NextResponse.json({
      clientIp: 'unknown',
      isClinicIp: false,
      error: 'Failed to check IP'
    });
  }
}
