/**
 * Clean analytics readiness abstraction.
 * Supports future plug-and-play integrations (Google Analytics, Plausible, PostHog).
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
}

export function trackEvent(name: string, properties?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  const eventPayload: AnalyticsEvent = {
    name,
    properties: {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      ...properties,
    },
  };

  // Environment feature flag for console logging in dev
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Analytics Event]', eventPayload);
  }

  // Hook point for Google Analytics / Plausible / PostHog
  if (window && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag('event', name, properties);
  }
}
