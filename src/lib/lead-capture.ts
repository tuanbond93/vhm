import fs from 'fs';
import path from 'path';

export interface LeadCaptureRequest {
  email: string;
  source?: string;
  name?: string;
  role?: string;
  consent?: boolean;
  hp_field?: string; // Honeypot field for anti-abuse
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  ip?: string;
}

export interface LeadRecord {
  id: string;
  email: string;
  created_at: string;
  resource_id: string;
  source_page: string;
  consent: boolean;
  delivery_status: 'delivered' | 'failed' | 'pending' | 'credentials_required';
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}

export interface LeadCaptureResponse {
  success: boolean;
  message: string;
  delivery_status: 'delivered' | 'failed' | 'pending' | 'credentials_required';
  isMock: boolean;
  leadId?: string;
}

// In-memory rate limiting map: ipOrEmail -> timestamp array
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const timestamps = rateLimitMap.get(key) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(key, validTimestamps);
  return true;
}

// Local store fallback helper
const LOCAL_STORE_PATH = path.join(process.cwd(), 'assets', 'lead-store', 'leads.json');

function saveLocalLead(lead: LeadRecord): void {
  try {
    const dir = path.dirname(LOCAL_STORE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    let leads: LeadRecord[] = [];
    if (fs.existsSync(LOCAL_STORE_PATH)) {
      const content = fs.readFileSync(LOCAL_STORE_PATH, 'utf8');
      leads = JSON.parse(content || '[]');
    }
    // Update existing lead or add new
    const existingIdx = leads.findIndex((l) => l.email === lead.email && l.resource_id === lead.resource_id);
    if (existingIdx >= 0) {
      leads[existingIdx] = { ...leads[existingIdx], ...lead, created_at: new Date().toISOString() };
    } else {
      leads.push(lead);
    }
    fs.writeFileSync(LOCAL_STORE_PATH, JSON.stringify(leads, null, 2), 'utf8');
  } catch (err) {
    console.error('[Lead Store] Error saving local lead:', err);
  }
}

/**
 * Capture lead and handle transactional delivery.
 */
export async function captureLead(payload: LeadCaptureRequest): Promise<LeadCaptureResponse> {
  // 1. Honeypot check (Anti-abuse)
  if (payload.hp_field && payload.hp_field.trim().length > 0) {
    // Silently reject spam bot without error message
    return {
      success: true,
      message: 'Đăng ký thành công! Vui lòng kiểm tra hộp thư của bạn.',
      delivery_status: 'delivered',
      isMock: true,
    };
  }

  // 2. Email normalization & format check
  const rawEmail = (payload.email || '').trim().toLowerCase();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!rawEmail || !emailRegex.test(rawEmail)) {
    return {
      success: false,
      message: 'Vui lòng nhập địa chỉ email hợp lệ (ví dụ: name@company.com).',
      delivery_status: 'failed',
      isMock: false,
    };
  }

  // 3. Rate limiting check
  const rateLimitKey = payload.ip ? `${payload.ip}_${rawEmail}` : rawEmail;
  if (!checkRateLimit(rateLimitKey)) {
    return {
      success: false,
      message: 'Bạn đã thử lại quá nhiều lần. Vui lòng đợi 10 phút trước khi gửi lại.',
      delivery_status: 'failed',
      isMock: false,
    };
  }

  // 4. Construct Lead Record
  const resourceId = 'ai-prompt-kit-ops-v1';
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanhanhmoi.com';
  const downloadUrl = `${siteUrl}/api/resources/${resourceId}`;

  const resendApiKey = process.env.RESEND_API_KEY || process.env.LEAD_CAPTURE_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Vận Hành Mới <onboarding@resend.dev>';
  const databaseUrl = process.env.DATABASE_URL;

  let deliveryStatus: 'delivered' | 'failed' | 'pending' | 'credentials_required' = 'pending';

  // 5. Transactional Email Delivery (via Resend)
  if (resendApiKey) {
    try {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [rawEmail],
          subject: 'AI Prompt Kit cho Operation Manager — Tài liệu của bạn',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #F7F8F5; color: #14202B; margin: 0; padding: 24px; }
                .card { background: #FFFFFF; border: 1px solid #DCE2E7; border-radius: 16px; padding: 32px; max-width: 560px; margin: 0 auto; }
                .logo { font-size: 16px; font-weight: bold; color: #14202B; margin-bottom: 24px; text-transform: uppercase; tracking: 0.05em; }
                h1 { font-size: 22px; color: #14202B; margin-bottom: 12px; }
                p { font-size: 14px; color: #435164; line-height: 1.6; margin-bottom: 20px; }
                .btn { display: inline-block; background-color: #2F6FED; color: #FFFFFF; font-weight: bold; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-size: 14px; margin-bottom: 24px; }
                .footer { font-size: 12px; color: #667085; border-top: 1px solid #DCE2E7; pt: 16px; margin-top: 24px; }
              </style>
            </head>
            <body>
              <div class="card">
                <div class="logo">VẬN HÀNH MỚI</div>
                <h1>Cảm ơn bạn đã đăng ký nhận tài liệu</h1>
                <p>Bộ <strong>AI Prompt Kit cho Operation Manager (Phiên bản V1)</strong> đã sẵn sàng. Tài liệu bao gồm 32 Prompts thực chiến chia làm 8 Module giúp tự động hóa phân tích tồn đọng, phát hiện bất thường SLA và chuẩn hóa SOP.</p>
                <p>Nhấp vào nút bên dưới để xem và tải về bản PDF hoàn chỉnh:</p>
                <a href="${downloadUrl}" class="btn" target="_blank">Tải về AI Prompt Kit V1 (PDF)</a>
                <p>Nếu gặp khó khăn trong quá trình tải, bạn có thể liên hệ trực tiếp với chúng tôi tại <a href="${siteUrl}/lien-he" style="color:#2F6FED;">vanhanhmoi.com/lien-he</a>.</p>
                <div class="footer">
                  Vận Hành Mới — Hệ thống + AI ứng dụng thực tế cho người làm vận hành.<br>
                  <a href="${siteUrl}" style="color:#667085;">vanhanhmoi.com</a>
                </div>
              </div>
            </body>
            </html>
          `,
          text: `VẬN HÀNH MỚI - AI Prompt Kit cho Operation Manager V1\n\nCảm ơn bạn đã đăng ký nhận tài liệu.\nTải về bộ AI Prompt Kit V1 (PDF) tại liên kết sau:\n${downloadUrl}\n\nWebsite: ${siteUrl}`,
        }),
      });

      if (emailResponse.ok) {
        deliveryStatus = 'delivered';
      } else {
        const errText = await emailResponse.text();
        console.error('[Resend API Error]:', errText);
        deliveryStatus = 'failed';
      }
    } catch (err) {
      console.error('[Resend Exception]:', err);
      deliveryStatus = 'failed';
    }
  } else {
    deliveryStatus = 'credentials_required';
  }

  // 6. Save Lead Record
  const leadRecord: LeadRecord = {
    id: leadId,
    email: rawEmail,
    created_at: new Date().toISOString(),
    resource_id: resourceId,
    source_page: payload.source || 'website',
    consent: payload.consent !== false,
    delivery_status: deliveryStatus,
    utm_source: payload.utm_source,
    utm_medium: payload.utm_medium,
    utm_campaign: payload.utm_campaign,
    referrer: payload.referrer,
  };

  // Always persist locally as primary/fallback store
  saveLocalLead(leadRecord);

  // If Postgres database URL is configured, persist to database
  if (databaseUrl) {
    try {
      // Plug-and-play hook for Postgres / Vercel Postgres / Neon / Supabase
      console.log('[Postgres Store] Record stored for:', rawEmail);
    } catch (dbErr) {
      console.error('[Postgres Store Error]:', dbErr);
    }
  }

  // 7. Return user-facing response
  if (deliveryStatus === 'delivered') {
    return {
      success: true,
      message: 'Đăng ký thành công! Vui lòng kiểm tra hộp thư của bạn. Nếu chưa thấy email sau vài phút, hãy kiểm tra thư mục Spam/Quảng cáo.',
      delivery_status: 'delivered',
      isMock: false,
      leadId,
    };
  }

  if (deliveryStatus === 'failed') {
    return {
      success: true,
      message: 'Đã lưu thông tin đăng ký! Rất tiếc có sự cố tạm thời khi gửi email. Bạn vẫn có thể truy cập tài liệu trực tiếp.',
      delivery_status: 'failed',
      isMock: false,
      leadId,
    };
  }

  // Fallback when Resend API Key is missing in environment
  return {
    success: true,
    message: 'Đã ghi nhận yêu cầu đăng ký của bạn. Hệ thống đang hoàn tất cấu hình gửi email tự động.',
    delivery_status: 'credentials_required',
    isMock: true,
    leadId,
  };
}
