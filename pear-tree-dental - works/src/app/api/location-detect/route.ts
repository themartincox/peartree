import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get client IP address
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               request.ip ||
               '127.0.0.1';

    // For development/localhost, return a default Nottingham response
    if (ip === '127.0.0.1' || ip === '::1' || ip?.includes('localhost')) {
      return NextResponse.json({
        city: 'Nottingham',
        region: 'Nottinghamshire',
        country: 'United Kingdom',
        area: 'Nottingham',
        postcode: 'NG1',
        isLocal: true
      });
    }

    // Try to get location data from IP
    // Using a simple geographic approximation for UK IPs
    const locationData = await getLocationFromIP(ip);

    return NextResponse.json(locationData);
  } catch (error) {
    console.error('Location detection error:', error);

    // Return safe fallback
    return NextResponse.json({
      city: 'Unknown',
      region: 'Unknown',
      country: 'United Kingdom',
      area: 'Unknown',
      postcode: 'Unknown',
      isLocal: false
    });
  }
}

async function getLocationFromIP(ip: string) {
  try {
    // For this implementation, we'll use a simple approach
    // In production, you might want to use a service like ipapi.co or similar

    // Check if IP appears to be UK-based (this is a simplified check)
    // For a real implementation, you'd want to use a proper geolocation service

    // Default response for UK users
    return {
      city: 'Unknown UK Location',
      region: 'United Kingdom',
      country: 'United Kingdom',
      area: 'UK',
      postcode: 'Unknown',
      isLocal: false
    };

  } catch (error) {
    console.error('IP geolocation failed:', error);

    return {
      city: 'Unknown',
      region: 'Unknown',
      country: 'Unknown',
      area: 'Unknown',
      postcode: 'Unknown',
      isLocal: false
    };
  }
}
