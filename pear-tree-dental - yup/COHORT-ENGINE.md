# Pear Tree Dental: Cohort Engine Documentation

## Overview

The Cohort Engine is a sophisticated personalization system that tailors the user experience based on visitor context without compromising SEO. It uses a combination of server-side data collection, middleware, and React server components to create a personalized experience while maintaining search engine visibility.

## Core Concepts

### 1. Cohort Dimensions

The engine segments visitors across multiple dimensions:

- **Geo-Location**: City, region, and travel distance/time
- **Device**: Mobile, tablet, or desktop
- **Time Context**: Time of day, office hours, and day of week
- **User Status**: New, returning, or frequent visitor
- **User Intent**: Emergency, research, booking, or price shopping
- **Page Context**: Current service, location, and emergency status

### 2. Architecture

The Cohort Engine follows a clean, middleware-based approach:

1. **Data Collection Layer**: Next.js middleware collects context data
2. **Signal Storage**: Ephemeral headers store context (no cookies for key signals)
3. **Server Components**: Read headers to personalize UI without affecting SEO content
4. **Client Components**: Enhance with interactive behaviors and tracking

### 3. SEO Protection

- No cloaking or dynamic content replacement in indexable content
- Bot detection with neutral content fallback
- Personalization in UI components only, not core content
- Clear separation between indexable content and personalization

## Implementation Files

### Core Engine

- `src/lib/cohort-engine/cohort.ts`: Main cohort logic and type definitions
- `src/lib/cohort-engine/geo.ts`: Geolocation services
- `src/lib/cohort-engine/travel-time.ts`: Distance and travel time calculation
- `src/lib/cohort-engine/cache.ts`: In-memory caching for performance
- `src/lib/cohort-engine/adMode.ts`: Ad campaign mode detection
- `src/middleware.ts`: Request processing, header setting, and signal collection

### UI Components

- `src/components/cohort/CohortStrip.tsx`: Main personalized CTA bar
- `src/components/cohort/LocalProof.tsx`: Location-specific social proof
- `src/components/cohort/StickyCtaBar.tsx`: Mobile-specific fixed navigation
- `src/components/cohort/CallbackCard.tsx`: Out-of-hours lead capture
- `src/components/cohort/OpenToday.tsx`: Office hours and review display
- `src/components/cohort/IntentSurvey.tsx`: Visitor intent capture
- `src/components/cohort/PriceExplainer.tsx`: Service-specific pricing
- `src/components/cohort/ChangeArea.tsx`: Location selector
- `src/components/cohort/ExitIntent.tsx`: Abandonment recovery

### Client-Side Tracking

- `src/components/TrackingProvider.tsx`: Event tracking and user/session management
- `src/app/api/track/route.ts`: Server endpoint for tracking events
- `src/app/api/lead/route.ts`: Server endpoint for lead capture
- `src/app/api/revalidate/route.ts`: Content revalidation API

## Key Features

### 1. Travel Time Estimation

The system estimates travel time between the visitor and practice locations:

- **Distance Calculation**: Haversine formula for geo-coordinates
- **Transport Mode Inference**: Selects walking, transit, or driving based on distance
- **Time Estimation**: Uses average speeds for each transport mode
- **Caching**: In-memory TTL cache for performance

### 2. CTA Prioritization

CTAs are dynamically ordered based on cohort data:

- **Emergency**: Call first during office hours
- **Research Intent**: Contact or informational CTAs first
- **Booking Intent**: Book now buttons prioritized
- **Price Shopping**: Membership and pricing CTAs first
- **Device Context**: Mobile-specific CTA ordering
- **Time Context**: Different CTAs during/outside office hours

### 3. Contextual Messaging

The engine generates context-aware messages:

- **City-Based**: "Hello [City]! How can we help you today?"
- **Time-Based**: "Good morning [City]! We're open today until 5pm."
- **Office Hours**: "We're currently closed, but you can book online for tomorrow."
- **Travel Context**: "[City] is approximately [X minutes] away from our practice."
- **Emergency**: "Need emergency dental care in [City]? Call us now."

### 4. Visitor Recognition

The system tracks visitor frequency for personalization:

- **New Visitors**: Standard introduction and guidance
- **Returning Visitors**: "Welcome back!" messaging
- **Frequent Visitors**: Membership-focused CTAs

## Implementation Examples

### Middleware Header Setting

```typescript
// Key section from middleware.ts
requestHeaders.set('x-peartree-device', device)
requestHeaders.set('x-peartree-office-hours', officeOpen ? 'true' : 'false')
requestHeaders.set('x-peartree-time-of-day', timeOfDay)

// For non-bots, add geo and travel data
if (!isBot) {
  const geoData = await lookupGeoFromIp(ip)
  requestHeaders.set('x-peartree-city', geoData.city)

  // Travel time estimation
  const travelEstimate = await estimateTravelTime(
    { latitude: geoData.latitude, longitude: geoData.longitude },
    practiceLocation
  )

  requestHeaders.set('x-peartree-travel-time', travelEstimate.time)
  requestHeaders.set('x-peartree-travel-distance', travelEstimate.distance)
  requestHeaders.set('x-peartree-travel-mode', travelEstimate.mode)
}
```

### CTA Selection Logic

```typescript
// Key section from cohort.ts
export function chooseCtas(opts: { cohort: Cohort, serviceSlug?: string, emergency?: boolean }): [CtaType, CtaType, CtaType] {
  const { cohort } = opts
  const emergency = opts.emergency || cohort.emergency

  // Emergency always shows call first
  if (emergency) {
    return ['call', 'book', 'contact']
  }

  // Different CTA patterns based on intent
  switch (cohort.intentSignals) {
    case 'booking':
      return ['book', 'call', 'membership']
    case 'price-shopping':
      return ['membership', 'book', 'call']
    case 'research':
      // Personalization based on device and office hours
      if (cohort.device === 'mobile' && !cohort.officeOpen) {
        return ['call', 'contact', 'book']
      }
      return ['contact', 'book', 'call']
    default:
      // More complex logic based on time, visitor status, etc.
      // ...
  }
}
```

## Security & Privacy

- No PII (Personally Identifiable Information) is stored
- User IDs are anonymous, persistent identifiers
- Bot detection prevents wasting resources on crawlers
- Headers are ephemeral and not stored in a database
- All tracking is first-party (no third-party cookies)

## SEO Considerations

- The cohort engine is designed to comply with Google's guidelines:
  - No cloaking (showing different content to users vs. bots)
  - No content swapping affecting indexability
  - Personalization in UI elements only, not core content
  - Bot detection for clean crawler experience

## Performance Optimizations

- In-memory caching for geo and travel data
- Conditional execution based on bot detection
- Async middleware operations for minimal impact
- Client components only where interactivity needed

## Usage Guidelines

1. **Adding New Cohort Dimensions**:
   - Add new header in middleware.ts
   - Update Cohort interface in cohort.ts
   - Use the new dimension in chooseCtas or getContextualMessage

2. **Creating New Personalized Components**:
   - Import getCohort from '@/lib/cohort-engine/cohort'
   - Use in a Server Component with async/await
   - Implement bot-safe fallbacks (return null when no signals)

3. **Testing Different Contexts**:
   - Use the cohort-demo page to see different component variations
   - Test with different devices, locations, and times
   - Verify bot experience with crawler User-Agent strings

## Monitoring & Analytics

The cohort engine integrates with the site's analytics system to track:

- CTA clicks by cohort segment
- Conversion rates across different cohorts
- User engagement patterns by cohort
- Travel time correlation with conversion

---

## Future Enhancements

1. **A/B Testing Framework**:
   - Split testing for different cohort rules
   - Conversion optimization by cohort segment

2. **Enhanced Intent Detection**:
   - Natural language processing for search terms
   - Referrer and UTM parameter analysis

3. **Admin Dashboard**:
   - Cohort performance visualization
   - Rule management interface

4. **Predictive Models**:
   - Machine learning for CTA selection
   - Conversion likelihood scoring
