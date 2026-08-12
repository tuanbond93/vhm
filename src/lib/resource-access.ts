import { createHmac, timingSafeEqual } from 'crypto';

const TOKEN_VERSION = 1;
export const RESOURCE_ACCESS_TTL_SECONDS = 24 * 60 * 60;
const DEVELOPMENT_SECRET = 'vhm-local-development-resource-secret-only';

interface ResourceAccessPayload {
  v: number;
  resourceId: string;
  leadId: string;
  issuedAt: number;
  expiresAt: number;
}

interface TokenOptions {
  secret?: string;
  now?: number;
  ttlSeconds?: number;
}

function base64UrlEncode(value: string | Buffer): string {
  return Buffer.from(value).toString('base64url');
}

function getSecret(explicitSecret?: string): string {
  const secret = explicitSecret ?? process.env.RESOURCE_DOWNLOAD_SECRET;
  if (secret && secret.length >= 32) return secret;

  if (process.env.NODE_ENV === 'production') {
    throw new Error('RESOURCE_DOWNLOAD_SECRET must be configured with at least 32 characters.');
  }

  return DEVELOPMENT_SECRET;
}

function sign(encodedPayload: string, secret: string): string {
  return createHmac('sha256', secret).update(encodedPayload).digest('base64url');
}

export function assertResourceAccessConfigured(secret?: string): void {
  getSecret(secret);
}

export function createResourceAccessToken(
  resourceId: string,
  leadId: string,
  options: TokenOptions = {}
): string {
  const now = options.now ?? Math.floor(Date.now() / 1000);
  const payload: ResourceAccessPayload = {
    v: TOKEN_VERSION,
    resourceId,
    leadId,
    issuedAt: now,
    expiresAt: now + (options.ttlSeconds ?? RESOURCE_ACCESS_TTL_SECONDS),
  };
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  return `${encodedPayload}.${sign(encodedPayload, getSecret(options.secret))}`;
}

export function createResourceAccessUrl(
  siteUrl: string,
  resourceId: string,
  leadId: string,
  options: TokenOptions = {}
): string {
  const token = createResourceAccessToken(resourceId, leadId, options);
  const baseUrl = siteUrl.replace(/\/$/, '');
  return `${baseUrl}/api/resources/${encodeURIComponent(resourceId)}?token=${encodeURIComponent(token)}`;
}

export function verifyResourceAccessToken(
  token: string | null,
  expectedResourceId: string,
  options: Pick<TokenOptions, 'secret' | 'now'> = {}
): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [encodedPayload, suppliedSignature] = parts;

  try {
    const expectedSignature = sign(encodedPayload, getSecret(options.secret));
    const suppliedBuffer = Buffer.from(suppliedSignature, 'base64url');
    const expectedBuffer = Buffer.from(expectedSignature, 'base64url');
    if (
      suppliedBuffer.length !== expectedBuffer.length ||
      !timingSafeEqual(suppliedBuffer, expectedBuffer)
    ) {
      return false;
    }

    const payload = JSON.parse(
      Buffer.from(encodedPayload, 'base64url').toString('utf8')
    ) as Partial<ResourceAccessPayload>;
    const now = options.now ?? Math.floor(Date.now() / 1000);

    return (
      payload.v === TOKEN_VERSION &&
      payload.resourceId === expectedResourceId &&
      typeof payload.leadId === 'string' &&
      payload.leadId.length > 0 &&
      typeof payload.issuedAt === 'number' &&
      payload.issuedAt <= now + 60 &&
      typeof payload.expiresAt === 'number' &&
      payload.expiresAt > now
    );
  } catch {
    return false;
  }
}
