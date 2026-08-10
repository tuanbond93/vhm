'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { captureLead } from '@/lib/lead-capture';
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
  buttonText = 'Nhận tài liệu',
  placeholder = 'Nhập email làm việc của bạn...',
  className = '',
  compact = false,
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }

    setStatus('loading');
    setMessage('');
    trackEvent('lead_form_submitted', { source, email });

    const res = await captureLead({ email, source });
    if (res.success) {
      setStatus('success');
      setMessage(res.message);
      setEmail('');
    } else {
      setStatus('error');
      setMessage(res.message);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'flex flex-col sm:flex-row gap-3'}>
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
            className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all disabled:opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm active:scale-[0.98] disabled:opacity-50 whitespace-nowrap cursor-pointer"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Đang gửi...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {status === 'success' && (
        <div className="mt-3 flex items-start gap-2 text-emerald-800 text-xs bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
          <span>{message}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-3 flex items-start gap-2 text-amber-800 text-xs bg-amber-50 border border-amber-200 p-3 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
