'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Download } from 'lucide-react';
import { Analytics } from '@/lib/analytics';
import { getStoredAttribution } from '@/lib/attribution';

interface LeadCaptureFormProps {
  source?: string;
  buttonText?: string;
  placeholder?: string;
  className?: string;
  compact?: boolean;
}

export function LeadCaptureForm({
  source = 'homepage_newsletter',
  buttonText = 'Đăng ký nhận tài liệu',
  placeholder = 'Nhập email làm việc của bạn...',
  className = '',
  compact = false,
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [hpField, setHpField] = useState(''); // Honeypot
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState<string>('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const formViewTracked = useRef(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || formViewTracked.current) return;

    const trackView = () => {
      if (formViewTracked.current) return;
      formViewTracked.current = true;
      Analytics.leadFormView('ai-prompt-kit-ops-v1', source, compact ? 'compact' : 'inline');
    };

    if (!('IntersectionObserver' in window)) {
      trackView();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackView();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [compact, source]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setStatus('error');
      setMessage('Vui lòng nhập địa chỉ email hợp lệ (ví dụ: name@company.com).');
      return;
    }

    if (!consent) {
      setStatus('error');
      setMessage('Vui lòng xác nhận đồng ý nhận tài nguyên qua email.');
      return;
    }

    setStatus('loading');
    setMessage('');

    // Analytics without PII
    Analytics.leadSubmitAttempt('ai-prompt-kit-ops-v1', source);

    try {
      const attribution = getStoredAttribution();

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: normalizedEmail,
          source,
          consent,
          hp_field: hpField,
          utm_source: attribution.utm_source,
          utm_medium: attribution.utm_medium,
          utm_campaign: attribution.utm_campaign,
          referrer: attribution.referrer,
        }),
      });

      const res = await response.json();

      if (res.success) {
        setStatus('success');
        setMessage(res.message);
        setDeliveryStatus(res.delivery_status || '');
        setDownloadUrl(res.access_url || '');
        setEmail('');

        Analytics.leadSubmitSuccess('ai-prompt-kit-ops-v1', source, res.delivery_status || 'unknown');
        if (res.access_url) {
          Analytics.resourceAccessIssued('ai-prompt-kit-ops-v1', source);
        }
      } else {
        setStatus('error');
        setMessage(res.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.');

        Analytics.leadSubmitFailed('ai-prompt-kit-ops-v1', source, res.message);
      }
    } catch (err) {
      console.error('[Lead Form Fetch Error]:', err);
      setStatus('error');
      setMessage('Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng và thử lại.');
      Analytics.leadSubmitFailed('ai-prompt-kit-ops-v1', source, 'network_error');
    }
  };

  const handleDownload = async () => {
    if (!downloadUrl || isDownloading) return;

    setIsDownloading(true);
    setDownloadError('');
    try {
      const response = await fetch(downloadUrl, {
        method: 'GET',
        credentials: 'same-origin',
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`resource_${response.status}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = objectUrl;
      anchor.download = 'van-hanh-moi-ai-prompt-kit-ops-v1.pdf';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(objectUrl);

      Analytics.resourceAccessSuccess('ai-prompt-kit-ops-v1', source);
    } catch (error) {
      setDownloadError('Không thể tải tài liệu lúc này. Vui lòng thử lại hoặc dùng liên kết trong email.');
      Analytics.resourceAccessFailed(
        'ai-prompt-kit-ops-v1',
        source,
        error instanceof Error ? error.message : 'download_error',
      );
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <noscript>
        <p className="mb-3 text-xs text-[#B5473C] bg-[#FDF2F2] border border-[#F8D7D7] p-3 rounded-xl">
          Vui lòng bật JavaScript để gửi đăng ký và nhận liên kết tài liệu được bảo vệ.
        </p>
      </noscript>
      {status !== 'success' && (
      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        {/* Honeypot Field (Hidden from humans) */}
        <input
          type="text"
          name="hp_field"
          value={hpField}
          onChange={(e) => setHpField(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className={compact ? 'space-y-3' : 'flex flex-col sm:flex-row gap-3'}>
          <div className="relative flex-1">
            <input
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== 'idle') setStatus('idle');
              }}
              placeholder={placeholder}
              disabled={status === 'loading'}
              aria-invalid={status === 'error'}
              aria-describedby={status === 'error' ? `lead-error-${source}` : undefined}
              className="w-full bg-white border border-[#DCE2E7] focus:border-[#2F6FED] focus:ring-1 focus:ring-[#2F6FED] rounded-xl px-4 py-3 text-sm text-[#14202B] placeholder-[#667085] outline-none transition-all disabled:opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 bg-[#2F6FED] hover:bg-[#1D5BD8] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm active:scale-[0.98] disabled:opacity-50 whitespace-nowrap cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Đang xử lý...</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Transparent Consent Notice */}
        <div className="flex items-start gap-2 pt-1 text-[11px] text-[#667085]">
          <input
            type="checkbox"
            id={`consent-${source}`}
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 rounded border-[#DCE2E7] text-[#2F6FED] focus:ring-[#2F6FED]"
          />
          <label htmlFor={`consent-${source}`} className="leading-tight cursor-pointer">
            Nhận AI Prompt Kit qua email và thỉnh thoảng nhận tài nguyên mới từ Vận Hành Mới.
          </label>
        </div>
      </form>
      )}

      {/* Success State */}
      {status === 'success' && (
        <div className="mt-4 p-4 bg-[#E8F5F2] border border-[#BDE3DA] rounded-xl space-y-3" role="status" aria-live="polite">
          <div className="flex items-start gap-2.5 text-[#167A65] text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#167A65]" />
            <span>
              {deliveryStatus === 'delivered'
                ? 'Đăng ký thành công! Tài liệu đã được gửi tới email của bạn. Nếu chưa thấy email sau vài phút, hãy kiểm tra thư mục Spam/Quảng cáo.'
                : 'Đăng ký đã được ghi nhận. Email đang gặp sự cố tạm thời. Bạn có thể tải tài liệu trực tiếp tại đây.'}
            </span>
          </div>

          {downloadUrl && (
            <div className="pt-3 border-t border-[#BDE3DA] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
              <span className="text-[#435164]">Tài liệu đã sẵn sàng:</span>
              <button
                type="button"
                onClick={handleDownload}
                disabled={isDownloading}
                className="inline-flex items-center justify-center gap-1.5 font-bold text-white bg-[#235789] hover:bg-[#1B456D] px-4 py-2.5 rounded-lg disabled:opacity-60"
              >
                {isDownloading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
                <span>{isDownloading ? 'Đang tải...' : 'Tải file PDF ngay'}</span>
              </button>
            </div>
          )}

          {downloadError && (
            <p className="text-[11px] text-[#B5473C]" role="alert">{downloadError}</p>
          )}
        </div>
      )}

      {/* Error State */}
      {status === 'error' && (
        <div id={`lead-error-${source}`} className="mt-3 flex items-start gap-2 text-[#C47A16] text-xs bg-[#FEF5E7] border border-[#F9E2C1] p-3 rounded-xl" role="alert" aria-live="assertive">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#C47A16]" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
