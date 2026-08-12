import type { LeadCaptureRequest } from './lead-capture';

export const LEAD_STRING_LIMITS = {
  email: 254,
  source: 100,
  utm_source: 200,
  utm_medium: 200,
  utm_campaign: 200,
  referrer: 500,
} as const;

export type ValidatedLeadCaptureRequest = LeadCaptureRequest & {
  email: string;
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
};

export type LeadValidationResult =
  | { valid: true; value: ValidatedLeadCaptureRequest }
  | { valid: false; field: keyof typeof LEAD_STRING_LIMITS; reason: 'type' | 'length' };

function validateOptionalString(
  value: unknown,
  field: Exclude<keyof typeof LEAD_STRING_LIMITS, 'email'>
): { valid: true; value?: string } | { valid: false; field: typeof field; reason: 'type' | 'length' } {
  if (value === undefined || value === null || value === '') {
    return { valid: true, value: undefined };
  }

  if (typeof value !== 'string') {
    return { valid: false, field, reason: 'type' };
  }

  if (value.length > LEAD_STRING_LIMITS[field]) {
    return { valid: false, field, reason: 'length' };
  }

  return { valid: true, value };
}

/**
 * Runtime validation boundary for every externally controlled string persisted
 * by the lead-capture flow. Values are rejected, never truncated.
 */
export function validateLeadCaptureRequest(payload: LeadCaptureRequest): LeadValidationResult {
  if (typeof payload?.email !== 'string') {
    return { valid: false, field: 'email', reason: 'type' };
  }

  const email = payload.email.trim().toLowerCase();
  if (email.length > LEAD_STRING_LIMITS.email) {
    return { valid: false, field: 'email', reason: 'length' };
  }

  const validated: ValidatedLeadCaptureRequest = { ...payload, email };
  const optionalFields = [
    'source',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'referrer',
  ] as const;

  for (const field of optionalFields) {
    const result = validateOptionalString(payload[field], field);
    if (!result.valid) return result;
    validated[field] = result.value;
  }

  return { valid: true, value: validated };
}
