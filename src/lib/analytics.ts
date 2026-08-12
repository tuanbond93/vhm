import { track as vercelTrack } from '@vercel/analytics';
import { getStoredAttribution } from './attribution';

/**
 * Clean analytics readiness abstraction.
 * Strict PII Policy: NEVER include email, name, phone, or raw form data in event properties.
 */

export interface BaseEventProperties {
  page_path?: string;
  source_page?: string;
  resource_id?: string;
  radar_id?: string;
  radar_type?: string;
  verdict?: string;
  source_tier?: string;
  tool_id?: string;
  cta_id?: string;
  content_id?: string;
  article_id?: string;
  placement?: string;
  target_url?: string;
  category?: string;
  cta_label?: string;
  file_type?: string;
  delivery_status?: string;
  error_type?: string;
  type?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  [key: string]: unknown;
}

const PII_KEYS = ['email', 'user_email', 'name', 'full_name', 'phone', 'phone_number', 'password', 'ip', 'leadId', 'lead_id'];

function sanitizeProperties(props?: BaseEventProperties): Record<string, unknown> {
  if (!props) return {};

  const clean: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(props)) {
    // Filter out any accidental PII properties
    if (PII_KEYS.includes(key.toLowerCase())) continue;
    if (val !== undefined && val !== null) {
      clean[key] = typeof val === 'string' ? val.substring(0, 200) : val;
    }
  }

  // Inject UTM attribution safely if available client-side
  if (typeof window !== 'undefined') {
    const attr = getStoredAttribution();
    if (attr.utm_source && !clean.utm_source) clean.utm_source = attr.utm_source;
    if (attr.utm_medium && !clean.utm_medium) clean.utm_medium = attr.utm_medium;
    if (attr.utm_campaign && !clean.utm_campaign) clean.utm_campaign = attr.utm_campaign;
    if (attr.referrer && !clean.referrer) clean.referrer = attr.referrer;
  }

  return clean;
}

export function track(eventName: string, properties?: BaseEventProperties): void {
  if (typeof window === 'undefined') return;

  const cleanProps = sanitizeProperties(properties);

  // 1. Dev Console Logging
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Track: ${eventName}]`, cleanProps);
  }

  // 2. Vercel Web Analytics
  try {
    vercelTrack(eventName, cleanProps as Record<string, string | number | boolean | null>);
  } catch (err) {
    // Non-blocking analytics failure
  }

  // 3. Google Analytics / gtag Hook Point
  if (window && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag('event', eventName, cleanProps);
  }
}

// Backward compatibility helper
export function trackEvent(name: string, properties?: Record<string, unknown>): void {
  track(name, properties as BaseEventProperties);
}

// Typed Helper Methods for Taxonomy Events
export const Analytics = {
  pageView: (page_path: string, title?: string) =>
    track('page_view', { page_path, title }),

  ctaClick: (cta_id: string, source_page: string, placement?: string, target_url?: string) =>
    track('cta_click', { cta_id, source_page, placement, target_url }),

  toolView: (tool_id: string, category?: string) =>
    track('tool_view', { tool_id, category }),

  toolCtaClick: (tool_id: string, cta_label: string, source_page: string) =>
    track('tool_cta_click', { tool_id, cta_label, source_page }),

  leadModalOpen: (resource_id: string, source_page: string, placement?: string) =>
    track('lead_modal_open', { resource_id, source_page, placement }),

  leadModalClose: (resource_id: string, source_page: string) =>
    track('lead_modal_close', { resource_id, source_page }),

  leadFormView: (resource_id: string, source_page: string, placement = 'inline') =>
    track('lead_form_view', { resource_id, source_page, placement }),

  leadSubmitAttempt: (resource_id: string, source_page: string) =>
    track('lead_submit_attempt', { resource_id, source_page }),

  leadSubmitSuccess: (resource_id: string, source_page: string, delivery_status: string) =>
    track('lead_submit_success', { resource_id, source_page, delivery_status }),

  resourceAccessIssued: (resource_id: string, source_page: string) =>
    track('resource_access_issued', { resource_id, source_page }),

  leadSubmitFailed: (resource_id: string, source_page: string, error_type?: string) =>
    track('lead_submit_failed', { resource_id, source_page, error_type }),

  resourceAccessSuccess: (resource_id: string, source_page: string, file_type = 'pdf') =>
    track('resource_access_success', { resource_id, source_page, file_type }),

  resourceAccessFailed: (resource_id: string, source_page: string, error_type?: string) =>
    track('resource_access_failed', { resource_id, source_page, error_type }),

  knowledgeView: (article_id: string, category?: string) =>
    track('knowledge_view', { article_id, category }),

  knowledgeCtaClick: (article_id: string, cta_label: string, source_page: string) =>
    track('knowledge_cta_click', { article_id, cta_label, source_page }),

  contactIntent: (source_page: string, type = 'contact_form') =>
    track('contact_intent', { source_page, type }),

  // Radar Analytics
  radarView: (source_page = '/radar') =>
    track('radar_view', { source_page }),

  radarArticleView: (radar_id: string, verdict: string, source_tier: string) =>
    track('radar_article_view', { radar_id, verdict, source_tier }),

  radarSourceClick: (radar_id: string, target_url: string) =>
    track('radar_source_click', { radar_id, target_url }),

  radarCtaClick: (radar_id: string, cta_label: string, source_page: string) =>
    track('radar_cta_click', { radar_id, cta_label, source_page }),

  // Product Proof Analytics
  productDemoView: (product_id: string, source_page?: string) =>
    track('product_demo_view', { product_id, source_page }),

  diagnosticInteraction: (product_id: string, action_type: string, target_id?: string) =>
    track('diagnostic_interaction', { product_id, action_type, target_id }),

  riskItemInspection: (product_id: string, item_id: string, risk_level?: string | number) =>
    track('risk_item_inspection', { product_id, item_id, risk_level }),

  scenarioChange: (product_id: string, scenario_id: string) =>
    track('scenario_change', { product_id, scenario_id }),

  escalationInspection: (product_id: string, scenario_id: string, risk_level?: string) =>
    track('escalation_inspection', { product_id, scenario_id, risk_level }),

  humanTakeover: (product_id: string, scenario_id: string) =>
    track('human_takeover', { product_id, scenario_id }),

  humanDecision: (product_id: string, scenario_id: string, decision_type: string) =>
    track('human_decision', { product_id, scenario_id, decision_type }),
};
