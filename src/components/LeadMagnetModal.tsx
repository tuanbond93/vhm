'use client';

import React from 'react';
import { X, Sparkles, Check, FileSpreadsheet } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function LeadMagnetModal({ isOpen, onClose, title }: LeadMagnetModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-300 text-xs font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Tài nguyên miễn phí dành cho Operations</span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">
          {title || 'Bộ AI Prompt dành cho Operation Manager'}
        </h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Tải ngay trọn bộ 30+ Prompts được tinh chỉnh thực chiến giúp tự động phân tích điểm nghẽn, báo cáo tuần và tìm nguyên nhân sự cố vận hành.
        </p>

        {/* Value Bullet points */}
        <div className="space-y-2.5 mb-6 text-sm text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-850">
          <div className="flex items-center gap-2.5">
            <Check className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Phân tích tồn đọng & phát hiện bất thường KPI</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Soạn thảo báo cáo vận hành tuần/tháng tự động</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Ma trận Root-Cause Analysis và Action Plan</span>
          </div>
        </div>

        {/* Form */}
        <LeadCaptureForm
          source="modal_lead_magnet"
          buttonText="Tải ngay lập tức"
          compact={true}
        />

        <p className="mt-4 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Định dạng File Notion + Document sạch sẽ. Không spam.</span>
        </p>
      </div>
    </div>
  );
}
