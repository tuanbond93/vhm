'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Download } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
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
    trackEvent('lead_submit_attempt', {
      source_page: source,
      resource_id: 'ai-prompt-kit-ops-v1',
    });

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source,
          consent,
          hp_field: hpField,
        }),
      });

      const res = await response.json();

      if (res.success) {
        setStatus('success');
        setMessage(res.message);
        setDeliveryStatus(res.delivery_status || '');
        setEmail('');

        trackEvent('lead_submit_success', {
          source_page: source,
          resource_id: 'ai-prompt-kit-ops-v1',
          delivery_status: res.delivery_status,
        });
      } else {
        setStatus('error');
        setMessage(res.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.');

        trackEvent('lead_submit_failed', {
          source_page: source,
          resource_id: 'ai-prompt-kit-ops-v1',
        });
      }
    } catch (err) {
      console.error('[Lead Form Fetch Error]:', err);
      setStatus('error');
      setMessage('Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng và thử lại.');
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'space-y-3'}>
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== 'idle') setStatus('idle');
              }}
              placeholder={placeholder}
              disabled={status === 'loading'}
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

      {/* Success State */}
      {status === 'success' && (
        <div className="mt-4 p-4 bg-[#E8F5F2] border border-[#BDE3DA] rounded-xl space-y-2">
          <div className="flex items-start gap-2.5 text-[#167A65] text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#167A65]" />
            <span>{message}</span>
          </div>

          {/* Fallback direct download link when email is delivered or requested */}
          <div className="pt-2 border-t border-[#BDE3DA] flex items-center justify-between text-xs">
            <span className="text-[#435164]">Hoặc tải bản PDF trực tiếp:</span>
            <a
              href="/api/resources/ai-prompt-kit-ops-v1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#235789] hover:text-[#2F6FED] underline"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải file PDF ngay</span>
            </a>
          </div>
        </div>
      )}

      {/* Error State */}
      {status === 'error' && (
        <div className="mt-3 flex items-start gap-2 text-[#C47A16] text-xs bg-[#FEF5E7] border border-[#F9E2C1] p-3 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#C47A16]" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
