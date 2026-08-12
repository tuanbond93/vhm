import {
  upsertLead,
  markDelivered,
  markDeliveryFailed,
  DBLeadRecord,
} from './db';
import { validateLeadCaptureRequest } from './lead-validation';
import { checkLeadRateLimit } from './rate-limit';
import {
  assertResourceAccessConfigured,
  createResourceAccessUrl,
} from './resource-access';

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
  db_error?: boolean;
  access_url?: string;
  error_code?: 'validation_error' | 'rate_limited' | 'service_unavailable';
  retry_after_seconds?: number;
}

// Allowed resource ID whitelist
const ALLOWED_RESOURCES = ['ai-prompt-kit-ops-v1'];

export interface LeadCaptureDependencies {
  upsertLead?: typeof upsertLead;
  checkLeadRateLimit?: typeof checkLeadRateLimit;
}

/**
 * Capture lead into PostgreSQL and handle transactional email delivery via Resend.
 */
export async function captureLead(
  payload: LeadCaptureRequest,
  dependencies: LeadCaptureDependencies = {}
): Promise<LeadCaptureResponse> {
  const persistLead = dependencies.upsertLead ?? upsertLead;
  const enforceRateLimit = dependencies.checkLeadRateLimit ?? checkLeadRateLimit;
  // 1. Honeypot check (Anti-abuse)
  if (typeof payload?.hp_field === 'string' && payload.hp_field.trim().length > 0) {
    // Silently trap spam bot without error message or DB write
    return {
      success: true,
      message: 'Đăng ký thành công! Vui lòng kiểm tra hộp thư của bạn.',
      delivery_status: 'delivered',
      isMock: true,
    };
  }

  // 2. Validate every externally controlled string before it can reach persistence.
  const validation = validateLeadCaptureRequest(payload);
  if (!validation.valid) {
    return {
      success: false,
      message: 'Dữ liệu gửi không hợp lệ hoặc quá dài.',
      delivery_status: 'failed',
      isMock: false,
      error_code: 'validation_error',
    };
  }
  const validatedPayload = validation.value;

  // 3. Resource ID validation
  const resourceId = validatedPayload.resource_id || 'ai-prompt-kit-ops-v1';
  if (!ALLOWED_RESOURCES.includes(resourceId)) {
    return {
      success: false,
      message: 'Tài nguyên yêu cầu không tồn tại.',
      delivery_status: 'failed',
      isMock: false,
    };
  }

  // 4. Email normalization happened in the validation boundary.
  const rawEmail = validatedPayload.email;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!rawEmail || !emailRegex.test(rawEmail)) {
    return {
      success: false,
      message: 'Vui lòng nhập địa chỉ email hợp lệ (ví dụ: name@company.com).',
      delivery_status: 'failed',
      isMock: false,
    };
  }

  // 5. Consent check
  if (validatedPayload.consent === (false as boolean)) {
    return {
      success: false,
      message: 'Vui lòng xác nhận đồng ý nhận tài nguyên qua email.',
      delivery_status: 'failed',
      isMock: false,
    };
  }

  // 6. Fail closed in production if signed resource authorization is not configured.
  try {
    assertResourceAccessConfigured();
  } catch (err) {
    console.error('[Resource Access Configuration]:', err instanceof Error ? err.message : String(err));
    return {
      success: false,
      message: 'Hệ thống đang bận. Vui lòng thử lại sau ít phút.',
      delivery_status: 'failed',
      isMock: false,
      error_code: 'service_unavailable',
    };
  }

  // 7. Shared rate limiting. A backing-store error fails closed.
  try {
    const rateLimit = await enforceRateLimit({
      ip: validatedPayload.ip,
      email: rawEmail,
    });
    if (!rateLimit.allowed) {
      return {
        success: false,
        message: 'Bạn đã thử lại quá nhiều lần. Vui lòng đợi 10 phút trước khi gửi lại.',
        delivery_status: 'failed',
        isMock: false,
        error_code: 'rate_limited',
        retry_after_seconds: rateLimit.retryAfterSeconds,
      };
    }
  } catch (err) {
    console.error('[Distributed Rate Limit Failure]:', err instanceof Error ? err.message : String(err));
    return {
      success: false,
      message: 'Hệ thống đang bận. Vui lòng thử lại sau ít phút.',
      delivery_status: 'failed',
      isMock: false,
      error_code: 'service_unavailable',
    };
  }

  // 8. UPSERT lead into PostgreSQL Database (or DEV/TEST fallback)
  let leadRecord: DBLeadRecord;
  try {
    leadRecord = await persistLead({
      email: rawEmail,
      resource_id: resourceId,
      source_page: validatedPayload.source || 'website',
      consent: validatedPayload.consent !== false,
      utm_source: validatedPayload.utm_source,
      utm_medium: validatedPayload.utm_medium,
      utm_campaign: validatedPayload.utm_campaign,
      referrer: validatedPayload.referrer,
    });
  } catch (dbErr) {
    const errText = dbErr instanceof Error ? dbErr.message : String(dbErr);
    console.error('[Lead Storage Failure]:', errText);
    return {
      success: false,
      message: 'Hệ thống đang bận. Vui lòng thử lại sau ít phút.',
      delivery_status: 'failed',
      isMock: false,
      db_error: true,
    };
  }

  // 9. Create a signed, time-limited URL only after successful persistence.
  const resendApiKey = process.env.RESEND_API_KEY || process.env.LEAD_CAPTURE_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Vận Hành Mới <no-reply@vanhanhmoi.com>';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanhanhmoi.com';
  const downloadUrl = createResourceAccessUrl(siteUrl, resourceId, leadRecord.id);

  if (!resendApiKey) {
    console.log('[Resend Notice]: RESEND_API_KEY not configured.');
    return {
      success: true,
      message: 'Đã ghi nhận thông tin đăng ký của bạn. Bạn có thể truy cập tài liệu trực tiếp bên dưới.',
      delivery_status: 'credentials_required',
      isMock: true,
      leadId: leadRecord.id,
      db_error: false,
      access_url: downloadUrl,
    };
  }

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(10000),
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
              .btn { display: inline-block; background-color: #2F6FED; color: #ffffff !important; font-weight: 700; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-size: 14px; margin-bottom: 24px; text-align: center; }
              .footer { font-size: 12px; color: #667085; border-top: 1px solid #DCE2E7; padding-top: 16px; margin-top: 24px; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="logo">VẬN HÀNH MỚI</div>
              <h1>Cảm ơn bạn đã đăng ký nhận tài liệu</h1>
              <p>Bộ <strong>AI Prompt Kit cho Operation Manager (Phiên bản V1)</strong> đã sẵn sàng. Tài liệu bao gồm 32 Prompts thực chiến chia làm 8 Module giúp tự động hóa phân tích tồn đọng, phát hiện bất thường SLA và chuẩn hóa SOP.</p>
              <p>Nhấp vào nút bên dưới để xem và tải về bản PDF hoàn chỉnh:</p>
              <a href="${downloadUrl}" target="_blank" style="display: inline-block; background-color: #2F6FED; color: #ffffff !important; font-weight: 700; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-size: 14px; margin-bottom: 24px; text-align: center;">
                <span style="color: #ffffff !important; text-decoration: none;">Tải về AI Prompt Kit V1 (PDF)</span>
              </a>
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
        message: 'Đăng ký thành công! Tài liệu đã được gửi tới email của bạn. Nếu chưa thấy email sau vài phút, hãy kiểm tra thư mục Spam/Quảng cáo.',
        delivery_status: 'delivered',
        isMock: false,
        leadId: leadRecord.id,
        db_error: false,
        access_url: downloadUrl,
      };
    }

    const errText = await emailResponse.text();
    console.error('[Resend Delivery Error]:', errText);

    // Mark delivery failed in database (LEAD IS RETAINED!)
    await markDeliveryFailed(leadRecord.id, errText);

    return {
      success: true,
      message: 'Đăng ký đã được ghi nhận. Email đang gặp sự cố tạm thời. Bạn có thể tải tài liệu trực tiếp tại đây.',
      delivery_status: 'failed',
      isMock: false,
      leadId: leadRecord.id,
      db_error: false,
      access_url: downloadUrl,
    };
  } catch (err) {
    const errMessage = err instanceof Error ? err.message : String(err);
    console.error('[Resend Delivery Exception]:', errMessage);

    // Mark delivery failed in database (LEAD IS RETAINED!)
    await markDeliveryFailed(leadRecord.id, errMessage);

    return {
      success: true,
      message: 'Đăng ký đã được ghi nhận. Email đang gặp sự cố tạm thời. Bạn có thể tải tài liệu trực tiếp tại đây.',
      delivery_status: 'failed',
      isMock: false,
      leadId: leadRecord.id,
      db_error: false,
      access_url: downloadUrl,
    };
  }
}
