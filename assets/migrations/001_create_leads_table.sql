-- Migration 001: Create leads table for Vận Hành Mới
-- Production-ready PostgreSQL schema for lead capture & delivery tracking

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

-- Performance & Deduplication Indexes
CREATE INDEX IF NOT EXISTS idx_leads_email_resource ON leads (email, resource_id);
CREATE INDEX IF NOT EXISTS idx_leads_delivery_status ON leads (delivery_status);
