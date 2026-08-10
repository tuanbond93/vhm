import {
  upsertLead,
  markDelivered,
  markDeliveryFailed,
  DBLeadRecord,
} from './db';

export interface LeadCaptureRequest {
  email: string;
  source?: string;
  name?: string;
  role?: string;
  consent?: boolean;
  hp_field?: string; // Honeypot field for anti-abuse
  resource_id?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  ip?: string;
}

export interface LeadCaptureResponse {
  success: boolean;
  message: string;
  delivery_status: 'delivered' | 'failed' | 'pending' | 'credentials_required';
  isMock: boolean;
  leadId?: string;
}

// Allowed resource ID whitelist
const ALLOWED_RESOURCES = ['ai-prompt-kit-ops-v1'];

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

/**
 * Capture lead into PostgreSQL and handle transactional email delivery via Resend.
 */
export async function captureLead(payload: LeadCaptureRequest): Promise<LeadCaptureResponse> {
  // 1. Honeypot check (Anti-abuse)
  if (payload.hp_field && payload.hp_field.trim().length > 0) {
    // Silently trap spam bot without error message or DB write
    return {
      success: true,
      message: 'Đăng ký thành công! Vui lòng kiểm tra hộp thư của bạn.',
      delivery_status: 'delivered',
      isMock: true,
    };
  }

  // 2. Resource ID validation
  const resourceId = payload.resource_id || 'ai-prompt-kit-ops-v1';
  if (!ALLOWED_RESOURCES.includes(resourceId)) {
    return {
      success: false,
      message: 'Tài nguyên yêu cầu không tồn tại.',
      delivery_status: 'failed',
      isMock: false,
    };
  }

  // 3. Email normalization & format check
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

  // 4. Consent check
  if (payload.consent === (false as boolean)) {
    return {
      success: false,
      message: 'Vui lòng xác nhận đồng ý nhận tài nguyên qua email.',
      delivery_status: 'failed',
      isMock: false,
    };
  }

  // 5. Rate limiting check
  const rateLimitKey = payload.ip ? `${payload.ip}_${rawEmail}` : rawEmail;
  if (!checkRateLimit(rateLimitKey)) {
    return {
      success: false,
      message: 'Bạn đã thử lại quá nhiều lần. Vui lòng đợi 10 phút trước khi gửi lại.',
      delivery_status: 'failed',
      isMock: false,
    };
  }

  // 6. UPSERT lead into PostgreSQL Database (or DEV/TEST fallback)
  let leadRecord: DBLeadRecord;
  try {
    leadRecord = await upsertLead({
      email: rawEmail,
      resource_id: resourceId,
      source_page: payload.source || 'website',
      consent: payload.consent !== false,
      utm_source: payload.utm_source,
      utm_medium: payload.utm_medium,
      utm_campaign: payload.utm_campaign,
      referrer: payload.referrer,
    });
  } catch (dbErr) {
    console.error('[Lead Storage Failure]:', dbErr);
    return {
      success: false,
      message: 'Hệ thống đang bận. Vui lòng thử lại sau vài phút.',
      delivery_status: 'failed',
      isMock: false,
    };
  }

  // 7. Transactional Email Delivery (via Resend)
  const resendApiKey = process.env.RESEND_API_KEY || process.env.LEAD_CAPTURE_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Vận Hành Mới <onboarding@resend.dev>';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanhanhmoi.com';
  const downloadUrl = `${siteUrl}/api/resources/${resourceId}`;

  if (!resendApiKey) {
    console.log('[Resend Notice]: RESEND_API_KEY not configured.');
    return {
      success: true,
      message: 'Đã ghi nhận thông tin đăng ký của bạn. Bạn có thể truy cập tài liệu trực tiếp bên dưới.',
      delivery_status: 'credentials_required',
      isMock: true,
      leadId: leadRecord.id,
    };
  }

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
        subject: 'AI Prompt Kit cho Operation Manager — Vận Hành Mới',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #F7F8F5; color: #14202B; margin: 0; padding: 24px; }
              .card { background: #FFFFFF; border: 1px solid #DCE2E7; border-radius: 16px; padding: 32px; max-width: 560px; margin: 0 auto; }
              .logo { font-size: 16px; font-weight: bold; color: #14202B; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.05em; }
              h1 { font-size: 22px; color: #14202B; margin-bottom: 12px; }
              p { font-size: 14px; color: #435164; line-height: 1.6; margin-bottom: 20px; }
              .btn { display: inline-block; background-color: #2F6FED; color: #FFFFFF; font-weight: bold; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-size: 14px; margin-bottom: 24px; }
              .footer { font-size: 12px; color: #667085; border-top: 1px solid #DCE2E7; padding-top: 16px; margin-top: 24px; }
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
      // Mark as delivered in database
      await markDelivered(leadRecord.id);
      return {
        success: true,
        message: 'Đăng ký thành công! Vui lòng kiểm tra hộp thư của bạn. Nếu chưa thấy email sau vài phút, hãy kiểm tra thư mục Spam/Quảng cáo.',
        delivery_status: 'delivered',
        isMock: false,
        leadId: leadRecord.id,
      };
    }

    const errText = await emailResponse.text();
    console.error('[Resend Delivery Error]:', errText);

    // Mark delivery failed in database (LEAD IS RETAINED!)
    await markDeliveryFailed(leadRecord.id, errText);

    return {
      success: true,
      message: 'Đã lưu thông tin đăng ký của bạn! Rất tiếc có sự cố tạm thời khi gửi email. Bạn vẫn có thể truy cập tài liệu trực tiếp bên dưới.',
      delivery_status: 'failed',
      isMock: false,
      leadId: leadRecord.id,
    };
  } catch (err) {
    const errMessage = err instanceof Error ? err.message : String(err);
    console.error('[Resend Delivery Exception]:', errMessage);

    // Mark delivery failed in database (LEAD IS RETAINED!)
    await markDeliveryFailed(leadRecord.id, errMessage);

    return {
      success: true,
      message: 'Đã lưu thông tin đăng ký của bạn! Rất tiếc có sự cố kết nối khi gửi email. Bạn vẫn có thể truy cập tài liệu trực tiếp bên dưới.',
      delivery_status: 'failed',
      isMock: false,
      leadId: leadRecord.id,
    };
  }
}
