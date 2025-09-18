import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Define the structure of an analytics event
interface AnalyticsEvent {
  event: string;
  path: string;
  variant?: string;
  [key: string]: any; // Allow for other custom properties
}

// Define the structure of the data we want to log
interface LogData extends AnalyticsEvent {
  timestamp: string;
  ip?: string;
  geo?: {
    city?: string;
    region?: string;
    country?: string;
  };
  cohort?: {
    variant?: string;
    device?: string;
    timeOfDay?: string;
    isLocal?: string;
  };
}

/**
 * First-party endpoint for tracking events (e.g., views, CTA clicks, form submissions).
 * This is designed to be a privacy-first alternative to third-party analytics tools.
 */
export async function POST(req: NextRequest) {
  try {
    // 1. Parse the event data from the request body
    const eventData: AnalyticsEvent = await req.json();

    if (!eventData.event || !eventData.path) {
      return NextResponse.json({ message: 'Missing required event data' }, { status: 400 });
    }

    // 2. Get headers from the request (set by edge functions)
    const requestHeaders = headers();
    const ip = requestHeaders.get('x-forwarded-for');

    // 3. Construct a structured log object
    const logData: LogData = {
      ...eventData,
      timestamp: new Date().toISOString(),
      ip: ip ?? undefined,
      geo: {
        city: requestHeaders.get('x-peartree-city') ?? undefined,
        region: requestHeaders.get('x-peartree-region') ?? undefined,
        country: requestHeaders.get('x-peartree-country') ?? undefined,
      },
      cohort: {
        variant: requestHeaders.get('x-ptd-variant') ?? eventData.variant, // Use header first, then body
        device: requestHeaders.get('x-peartree-device') ?? undefined,
        timeOfDay: requestHeaders.get('x-peartree-time-of-day') ?? undefined,
        isLocal: requestHeaders.get('x-peartree-is-local') ?? undefined,
      },
    };

    // 4. Log the event data to the console (server-side)
    // In a real-world scenario, you would send this data to a database or a logging service.
    console.log('[Analytics Event]:', JSON.stringify(logData, null, 2));

    // 5. Respond with a success message
    return NextResponse.json({ status: 'ok' }, { status: 200 });

  } catch (error) {
    let errorMessage = 'Error processing analytics event';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error('[Analytics API Error]:', errorMessage);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
