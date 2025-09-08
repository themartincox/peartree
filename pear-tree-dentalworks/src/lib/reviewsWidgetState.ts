// Simple event system to coordinate reviews widget state between components
// This allows the PracticeShowcase widget to communicate with the floating ClientGoogleReviews widget

// Define custom event names
export const REVIEW_WIDGET_EVENTS = {
  SHOWCASE_WIDGET_STICKY: 'showcase-widget-sticky',
  SHOWCASE_WIDGET_UNSTICKY: 'showcase-widget-unsticky',
};

// Event emitter to dispatch events
export function emitReviewWidgetEvent(eventName: string, detail: any = {}) {
  // Only run in browser
  if (typeof window === 'undefined') return;

  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true,
  });

  window.dispatchEvent(event);
}

// Hook to listen for review widget events
export function useReviewWidgetEvent(
  eventName: string,
  callback: (detail: any) => void
) {
  // Only run in browser
  if (typeof window === 'undefined') return () => {};

  const handleEvent = (event: any) => {
    callback(event.detail);
  };

  window.addEventListener(eventName, handleEvent);

  // Return cleanup function
  return () => {
    window.removeEventListener(eventName, handleEvent);
  };
}
