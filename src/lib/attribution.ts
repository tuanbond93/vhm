/**
 * First-party Attribution & UTM Capture module.
 * Implements First-Touch attribution model using sessionStorage.
 * Captures utm_source, utm_medium, utm_campaign, and clean referrer domain.
 */

export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}

const STORAGE_KEY = 'vhm_first_touch_attribution';

function sanitize(value?: string | null, maxLength = 100): string | undefined {
  if (!value) return undefined;
  const str = value.trim();
  if (str.length === 0) return undefined;
  return str.substring(0, maxLength);
}

function extractReferrerDomain(): string | undefined {
  if (typeof window === 'undefined' || !document.referrer) return undefined;
  try {
    const url = new URL(document.referrer);
    // Ignore internal navigation referrer
    if (url.hostname === window.location.hostname) return undefined;
    return sanitize(url.hostname);
  } catch (e) {
    return undefined;
  }
}

export function initAttribution(): AttributionData {
  if (typeof window === 'undefined') return {};

  try {
    const existingStr = sessionStorage.getItem(STORAGE_KEY);
    let existing: AttributionData = existingStr ? JSON.parse(existingStr) : {};

    // Parse current URL params
    const searchParams = new URLSearchParams(window.location.search);
    const newUtmSource = sanitize(searchParams.get('utm_source'));
    const newUtmMedium = sanitize(searchParams.get('utm_medium'));
    const newUtmCampaign = sanitize(searchParams.get('utm_campaign'));
    const newReferrer = extractReferrerDomain();

    // FIRST TOUCH MODEL: Keep original acquisition source if already captured in session
    const updated: AttributionData = {
      utm_source: existing.utm_source || newUtmSource,
      utm_medium: existing.utm_medium || newUtmMedium,
      utm_campaign: existing.utm_campaign || newUtmCampaign,
      referrer: existing.referrer || newReferrer,
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.warn('[Attribution Error]:', err);
    return {};
  }
}

export function getStoredAttribution(): AttributionData {
  if (typeof window === 'undefined') return {};
  try {
    const str = sessionStorage.getItem(STORAGE_KEY);
    return str ? JSON.parse(str) : initAttribution();
  } catch (err) {
    return {};
  }
}
