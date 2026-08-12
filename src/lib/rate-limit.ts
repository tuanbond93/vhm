import { createHash } from 'crypto';
import { ensureMigration, getPool, isPostgresConfigured } from './db';

export interface RateLimitRule {
  identifier: string;
  maxRequests: number;
  windowSeconds: number;
}

export interface RateLimitConsumption {
  allowed: boolean;
  count: number;
  retryAfterSeconds: number;
}

export interface RateLimitStore {
  consume(rule: RateLimitRule): Promise<RateLimitConsumption>;
}

export interface LeadRateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
  limitedBy?: 'ip' | 'email';
}

const WINDOW_SECONDS = 10 * 60;
const IP_MAX_REQUESTS = 5;
const EMAIL_MAX_REQUESTS = 3;

function hashIdentifier(scope: string, value: string): string {
  return createHash('sha256').update(`${scope}:${value}`).digest('hex');
}

export function createMemoryRateLimitStore(now: () => number = Date.now): RateLimitStore {
  const buckets = new Map<string, { count: number; expiresAt: number }>();

  return {
    async consume(rule) {
      const currentTime = now();
      const existing = buckets.get(rule.identifier);
      const bucket = !existing || existing.expiresAt <= currentTime
        ? { count: 0, expiresAt: currentTime + rule.windowSeconds * 1000 }
        : existing;

      bucket.count += 1;
      buckets.set(rule.identifier, bucket);

      return {
        allowed: bucket.count <= rule.maxRequests,
        count: bucket.count,
        retryAfterSeconds: Math.max(1, Math.ceil((bucket.expiresAt - currentTime) / 1000)),
      };
    },
  };
}

const localDevelopmentStore = createMemoryRateLimitStore();

function createPostgresRateLimitStore(): RateLimitStore {
  return {
    async consume(rule) {
      await ensureMigration();
      const result = await getPool().query(
        `
          WITH cleanup AS (
            DELETE FROM rate_limit_buckets WHERE expires_at <= NOW()
          )
          INSERT INTO rate_limit_buckets (
            bucket_key, window_started_at, request_count, expires_at
          ) VALUES (
            $1, NOW(), 1, NOW() + ($2::double precision * INTERVAL '1 second')
          )
          ON CONFLICT (bucket_key) DO UPDATE SET
            window_started_at = CASE
              WHEN rate_limit_buckets.expires_at <= NOW() THEN NOW()
              ELSE rate_limit_buckets.window_started_at
            END,
            request_count = CASE
              WHEN rate_limit_buckets.expires_at <= NOW() THEN 1
              ELSE rate_limit_buckets.request_count + 1
            END,
            expires_at = CASE
              WHEN rate_limit_buckets.expires_at <= NOW()
                THEN NOW() + ($2::double precision * INTERVAL '1 second')
              ELSE rate_limit_buckets.expires_at
            END
          RETURNING request_count, expires_at
        `,
        [rule.identifier, rule.windowSeconds]
      );

      const row = result.rows[0];
      const expiresAt = new Date(row.expires_at).getTime();
      const count = Number(row.request_count);

      return {
        allowed: count <= rule.maxRequests,
        count,
        retryAfterSeconds: Math.max(1, Math.ceil((expiresAt - Date.now()) / 1000)),
      };
    },
  };
}

export async function checkLeadRateLimit(
  input: { ip?: string; email: string },
  store?: RateLimitStore
): Promise<LeadRateLimitResult> {
  let activeStore = store;

  if (!activeStore) {
    if (isPostgresConfigured()) {
      activeStore = createPostgresRateLimitStore();
    } else if (process.env.NODE_ENV === 'production') {
      throw new Error('Distributed rate limiting requires DATABASE_URL in production.');
    } else {
      activeStore = localDevelopmentStore;
    }
  }

  const rules: Array<RateLimitRule & { kind: 'ip' | 'email' }> = [];
  const normalizedIp = input.ip?.trim();
  if (normalizedIp) {
    rules.push({
      kind: 'ip',
      identifier: hashIdentifier('lead-ip', normalizedIp),
      maxRequests: IP_MAX_REQUESTS,
      windowSeconds: WINDOW_SECONDS,
    });
  }
  rules.push({
    kind: 'email',
    identifier: hashIdentifier('lead-email', input.email),
    maxRequests: EMAIL_MAX_REQUESTS,
    windowSeconds: WINDOW_SECONDS,
  });

  for (const rule of rules) {
    const result = await activeStore.consume(rule);
    if (!result.allowed) {
      return {
        allowed: false,
        retryAfterSeconds: result.retryAfterSeconds,
        limitedBy: rule.kind,
      };
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}
