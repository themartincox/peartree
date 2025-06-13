import { type NextRequest, NextResponse } from 'next/server';
import type { Variant } from '@/lib/ab-testing';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { variant, event, data } = body;

    // Validate variant
    if (!variant || !['A', 'B', 'C'].includes(variant)) {
      return NextResponse.json(
        { error: 'Invalid variant' },
        { status: 400 }
      );
    }

    // Create tracking data
    const trackingData = {
      timestamp: new Date().toISOString(),
      variant: variant as Variant,
      event,
      user_agent: request.headers.get('user-agent'),
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown',
      referer: request.headers.get('referer'),
      data,
    };

    // Log to console (replace with your analytics service)
    console.log('[A/B Test Analytics]:', trackingData);

    // Here you would send to your analytics service
    // Examples:
    // - Google Analytics Measurement Protocol
    // - Custom analytics database
    // - Third-party analytics service

    // Example: Send to Google Analytics via Measurement Protocol
    // await sendToGoogleAnalytics(trackingData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('A/B Test analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Example function to send to Google Analytics (replace with your GA4 ID)
async function sendToGoogleAnalytics(data: {
  variant: Variant;
  event: string;
  ip: string;
  data?: Record<string, unknown>;
}) {
  const measurementId = process.env.GA_MEASUREMENT_ID;
  const apiSecret = process.env.GA_API_SECRET;

  if (!measurementId || !apiSecret) {
    console.warn('Google Analytics credentials not configured');
    return;
  }

  try {
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: generateClientId(data.ip), // Generate a client ID based on IP
          events: [
            {
              name: data.event,
              parameters: {
                variant: data.variant,
                custom_parameter_1: data.variant,
                ...data.data,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      console.warn('Failed to send to Google Analytics:', response.status);
    }
  } catch (error) {
    console.warn('Google Analytics tracking failed:', error);
  }
}

// Generate a simple client ID from IP address
function generateClientId(ip: string): string {
  // This is a simple hash function for demo purposes
  // In production, you might want to use a more sophisticated approach
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString();
}
