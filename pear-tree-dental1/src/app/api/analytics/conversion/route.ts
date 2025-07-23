import { type NextRequest, NextResponse } from 'next/server';

interface ConversionEvent {
  event_type: string;
  timestamp: number;
  page_url: string;
  user_session_id: string;
  metadata: Record<string, any>;
}

export async function POST(request: NextRequest) {
  try {
    const conversionEvent: ConversionEvent = await request.json();

    // Validate the event structure
    if (!conversionEvent.event_type || !conversionEvent.timestamp || !conversionEvent.user_session_id) {
      return NextResponse.json(
        { error: 'Invalid conversion event structure' },
        { status: 400 }
      );
    }

    // Log conversion for analysis (in production, you'd send to your analytics service)
    console.log('[Analytics] Conversion Event:', {
      type: conversionEvent.event_type,
      location: conversionEvent.metadata?.detected_location,
      isNottingham: conversionEvent.metadata?.is_nottingham_visitor,
      value: conversionEvent.metadata?.estimated_value,
      engagement: {
        timeOnPage: conversionEvent.metadata?.time_on_page,
        scrollDepth: conversionEvent.metadata?.scroll_percentage
      }
    });

    // In production, you would:
    // 1. Send to Google Analytics 4
    // 2. Send to your CRM (HubSpot, Salesforce, etc.)
    // 3. Store in your database for analysis
    // 4. Trigger marketing automation if high-value conversion

    // For high-value conversions, you might want to:
    if (shouldTriggerAlert(conversionEvent)) {
      await triggerHighValueAlert(conversionEvent);
    }

    // Store in simple analytics log (you'd use a proper database in production)
    await storeConversionEvent(conversionEvent);

    return NextResponse.json(
      {
        success: true,
        event_id: `${conversionEvent.user_session_id}_${conversionEvent.timestamp}`
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Analytics tracking error:', error);

    return NextResponse.json(
      { error: 'Failed to track conversion' },
      { status: 500 }
    );
  }
}

// Determine if this conversion should trigger an alert
function shouldTriggerAlert(event: ConversionEvent): boolean {
  const highValueEvents = ['phone_click', 'membership_plan_select', 'booking_attempt'];
  const estimatedValue = event.metadata?.estimated_value || 0;

  return highValueEvents.includes(event.event_type) || estimatedValue > 300;
}

// Trigger alert for high-value conversions (email, Slack, etc.)
async function triggerHighValueAlert(event: ConversionEvent) {
  try {
    // In production, you would send alerts via:
    // - Email to sales team
    // - Slack notification
    // - CRM notification
    // - SMS for emergency appointments

    console.log('[High Value Alert]', {
      type: event.event_type,
      value: event.metadata?.estimated_value,
      location: event.metadata?.detected_location,
      page: event.page_url
    });

    // Example: Emergency dental appointments get immediate attention
    if (event.event_type === 'phone_click' && event.page_url.includes('emergency')) {
      // Send urgent notification to on-call dentist
      console.log('[URGENT] Emergency dental inquiry from:', event.metadata?.detected_location);
    }

  } catch (error) {
    console.error('Failed to send high value alert:', error);
  }
}

// Store conversion event (use proper database in production)
async function storeConversionEvent(event: ConversionEvent) {
  try {
    // In production, store in your database:
    // - PostgreSQL for relational analysis
    // - ClickHouse for time-series analytics
    // - BigQuery for large-scale analysis

    // For now, just log the structured data
    const analyticsData = {
      timestamp: new Date(event.timestamp).toISOString(),
      event_type: event.event_type,
      session_id: event.user_session_id,
      page_path: new URL(event.page_url).pathname,
      is_nottingham: event.metadata?.is_nottingham_visitor || false,
      location: event.metadata?.detected_location || 'unknown',
      engagement_score: calculateEngagementScore(event.metadata),
      estimated_value: event.metadata?.estimated_value || 0,
      service_type: event.metadata?.service_type || null,
      plan_name: event.metadata?.plan_name || null
    };

    console.log('[Analytics DB]', analyticsData);

  } catch (error) {
    console.error('Failed to store conversion event:', error);
  }
}

// Calculate engagement score based on user behavior
function calculateEngagementScore(metadata: Record<string, any>): number {
  const timeOnPage = metadata?.time_on_page || 0;
  const scrollPercentage = metadata?.scroll_percentage || 0;
  const clickCount = metadata?.click_count || 0;

  // Engagement score algorithm (0-100)
  let score = 0;

  // Time on page (max 40 points)
  score += Math.min(timeOnPage / 30 * 40, 40);

  // Scroll depth (max 30 points)
  score += Math.min(scrollPercentage * 0.3, 30);

  // Click engagement (max 30 points)
  score += Math.min(clickCount * 5, 30);

  return Math.round(score);
}
