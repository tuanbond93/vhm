import { Pool, PoolConfig } from 'pg';
import fs from 'fs';
import path from 'path';

export interface DBLeadRecord {
  id: string;
  email: string;
  resource_id: string;
  source_page?: string;
  consent: boolean;
  created_at: string;
  updated_at: string;
  delivery_status: 'pending' | 'delivered' | 'failed';
  delivered_at?: string | null;
  last_delivery_attempt_at?: string | null;
  delivery_error?: string | null;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}

export interface UpsertLeadParams {
  email: string;
  resource_id: string;
  source_page?: string;
  consent?: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}

let pool: Pool | null = null;
let migrationAttempted = false;

// Mock store ONLY for local dev/unit testing when DATABASE_URL is not set
const mockLeadDb = new Map<string, DBLeadRecord>();

export function isPostgresConfigured(): boolean {
  const raw = process.env.DATABASE_URL;
  return Boolean(raw && raw.trim().length > 0);
}

export function sanitizeConnectionString(rawUrl?: string): string {
  if (!rawUrl) return '';
  let str = rawUrl.trim();
  // Strip outer double or single quotes if copied into Vercel ENV
  if (
    (str.startsWith('"') && str.endsWith('"')) ||
    (str.startsWith("'") && str.endsWith("'"))
  ) {
    str = str.slice(1, -1).trim();
  }
  if (str.startsWith('\\"') && str.endsWith('\\"')) {
    str = str.slice(2, -2).trim();
  }
  return str;
}

export function logSafeDbDiagnostics(str: string): void {
  if (!str) {
    console.log('[DB Diagnostic]: DATABASE_URL is not set.');
    return;
  }
  const isPostgresProtocol = str.startsWith('postgres://') || str.startsWith('postgresql://');
  const isPooler = str.includes('pooler.supabase.com') || str.includes('6543');
  const hasSslMode = str.includes('sslmode=');

  // SAFE DIAGNOSTIC: NEVER LOGS PASSWORD OR CREDENTIALS
  console.log('[DB Diagnostic]:', {
    exists: true,
    length: str.length,
    isPostgresProtocol,
    isPooler,
    hasSslMode,
  });
}

export function parsePgConnectionOptions(cleanUrl: string): PoolConfig {
  const isLocal = cleanUrl.includes('localhost') || cleanUrl.includes('127.0.0.1');
  const sslOption = isLocal ? false : { rejectUnauthorized: false };

  try {
    // Attempt standard URL parse
    new URL(cleanUrl);
    return {
      connectionString: cleanUrl,
      ssl: sslOption,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    };
  } catch (err) {
    console.warn('[DB Config]: Standard URL parse failed, applying safe URI component fallback parser...');
    // Fallback regex match for postgresql://[user]:[password]@[host]:[port]/[dbname]
    const match = cleanUrl.match(/^(postgres|postgresql):\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/([^?]+)/);
    if (match) {
      const [, , user, password, host, port, database] = match;
      return {
        user: decodeURIComponent(user),
        password: decodeURIComponent(password),
        host,
        port: parseInt(port, 10),
        database,
        ssl: sslOption,
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000,
      };
    }
    return {
      connectionString: cleanUrl,
      ssl: sslOption,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    };
  }
}

export function getPool(): Pool {
  if (!pool) {
    const rawUrl = process.env.DATABASE_URL;
    const cleanUrl = sanitizeConnectionString(rawUrl);
    if (!cleanUrl) {
      throw new Error('DATABASE_URL is not configured in environment variables.');
    }

    logSafeDbDiagnostics(cleanUrl);
    const config = parsePgConnectionOptions(cleanUrl);

    pool = new Pool(config);

    pool.on('error', (err) => {
      console.error('[DB Pool Error]: Unexpected background error on idle client:', err.message);
    });
  }
  return pool;
}

/**
 * Idempotent migration runner.
 * Safe for Supabase Transaction Pooler (port 6543) and does NOT block lead submissions if table exists.
 */
export async function ensureMigration(): Promise<void> {
  if (migrationAttempted || !isPostgresConfigured()) return;
  migrationAttempted = true;
  try {
    const p = getPool();
    const migrationSql = `
      CREATE TABLE IF NOT EXISTS leads (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT NOT NULL,
        resource_id TEXT NOT NULL,
        source_page TEXT,
        consent BOOLEAN NOT NULL DEFAULT TRUE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        delivery_status TEXT NOT NULL DEFAULT 'pending',
        delivered_at TIMESTAMPTZ NULL,
        last_delivery_attempt_at TIMESTAMPTZ NULL,
        delivery_error TEXT NULL,
        utm_source TEXT NULL,
        utm_medium TEXT NULL,
        utm_campaign TEXT NULL,
        referrer TEXT NULL,
        CONSTRAINT unique_email_resource UNIQUE (email, resource_id)
      );
      CREATE INDEX IF NOT EXISTS idx_leads_email_resource ON leads (email, resource_id);
      CREATE INDEX IF NOT EXISTS idx_leads_delivery_status ON leads (delivery_status);
    `;
    await p.query(migrationSql);
    console.log('[DB Migration]: Leads table check completed.');
  } catch (err) {
    // Non-fatal warning: Table already created or DDL restricted on pooler
    const errMsg = err instanceof Error ? err.message : String(err);
    console.warn('[DB Migration Warning]: DDL check skipped/table existing:', errMsg);
  }
}

/**
 * UPSERT a lead into PostgreSQL (or DEV/TEST fallback).
 */
export async function upsertLead(params: UpsertLeadParams): Promise<DBLeadRecord> {
  const normalizedEmail = params.email.trim().toLowerCase();
  const resourceId = params.resource_id;

  if (isPostgresConfigured()) {
    await ensureMigration();
    const p = getPool();
    const sql = `
      INSERT INTO leads (
        email, resource_id, source_page, consent, delivery_status,
        last_delivery_attempt_at, utm_source, utm_medium, utm_campaign, referrer
      ) VALUES (
        $1, $2, $3, $4, 'pending', NOW(), $5, $6, $7, $8
      )
      ON CONFLICT (email, resource_id) DO UPDATE SET
        updated_at = NOW(),
        last_delivery_attempt_at = NOW(),
        source_page = EXCLUDED.source_page,
        consent = EXCLUDED.consent,
        delivery_status = 'pending',
        delivery_error = NULL
      RETURNING id, email, resource_id, source_page, consent, created_at, updated_at, delivery_status;
    `;

    const res = await p.query(sql, [
      normalizedEmail,
      resourceId,
      params.source_page || null,
      params.consent !== false,
      params.utm_source || null,
      params.utm_medium || null,
      params.utm_campaign || null,
      params.referrer || null,
    ]);

    const row = res.rows[0];
    return {
      id: row.id,
      email: row.email,
      resource_id: row.resource_id,
      source_page: row.source_page,
      consent: row.consent,
      created_at: new Date(row.created_at).toISOString(),
      updated_at: new Date(row.updated_at).toISOString(),
      delivery_status: row.delivery_status,
    };
  }

  // Strict check for production: NEVER silently use local mock in production!
  if (process.env.NODE_ENV === 'production') {
    throw new Error('DATABASE_URL is required in production environment.');
  }

  // DEV/TEST Fallback Mode
  console.log('[DB Layer: DEV/TEST Fallback Mode] UPSERT lead for:', normalizedEmail);
  const key = `${normalizedEmail}_${resourceId}`;
  const now = new Date().toISOString();
  const existing = mockLeadDb.get(key);

  const record: DBLeadRecord = {
    id: existing ? existing.id : `mock_uuid_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    email: normalizedEmail,
    resource_id: resourceId,
    source_page: params.source_page,
    consent: params.consent !== false,
    created_at: existing ? existing.created_at : now,
    updated_at: now,
    delivery_status: 'pending',
    last_delivery_attempt_at: now,
  };

  mockLeadDb.set(key, record);

  try {
    const storePath = path.join(process.cwd(), 'assets', 'lead-store', 'leads-dev-only.json');
    const dir = path.dirname(storePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(storePath, JSON.stringify(Array.from(mockLeadDb.values()), null, 2));
  } catch (e) {
    // Ignore dev file write error
  }

  return record;
}

/**
 * Mark lead delivery as successful in PostgreSQL (or DEV/TEST fallback).
 */
export async function markDelivered(leadId: string): Promise<void> {
  if (isPostgresConfigured()) {
    const p = getPool();
    await p.query(
      `UPDATE leads SET delivery_status = 'delivered', delivered_at = NOW(), updated_at = NOW(), delivery_error = NULL WHERE id = $1`,
      [leadId]
    );
    return;
  }

  if (process.env.NODE_ENV === 'production') return;

  for (const [key, record] of mockLeadDb.entries()) {
    if (record.id === leadId) {
      mockLeadDb.set(key, {
        ...record,
        delivery_status: 'delivered',
        delivered_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        delivery_error: null,
      });
      break;
    }
  }
}

/**
 * Mark lead delivery as failed in PostgreSQL (or DEV/TEST fallback).
 * IMPORTANT: Lead row is RETAINED, only delivery_status and error are updated.
 */
export async function markDeliveryFailed(leadId: string, errorMessage: string): Promise<void> {
  const sanitizedError = errorMessage.substring(0, 500);

  if (isPostgresConfigured()) {
    const p = getPool();
    await p.query(
      `UPDATE leads SET delivery_status = 'failed', delivery_error = $2, updated_at = NOW() WHERE id = $1`,
      [leadId, sanitizedError]
    );
    return;
  }

  if (process.env.NODE_ENV === 'production') return;

  for (const [key, record] of mockLeadDb.entries()) {
    if (record.id === leadId) {
      mockLeadDb.set(key, {
        ...record,
        delivery_status: 'failed',
        delivery_error: sanitizedError,
        updated_at: new Date().toISOString(),
      });
      break;
    }
  }
}
