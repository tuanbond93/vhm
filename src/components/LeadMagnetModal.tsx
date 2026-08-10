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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-[#DCE2E7] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#667085] hover:text-[#14202B] p-2 rounded-lg hover:bg-[#F7F8F5] transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-[#235789] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#2F6FED]" />
          <span>Tài nguyên miễn phí dành cho Operations</span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#14202B] mb-2">
          {title || 'Bộ AI Prompt dành cho Operation Manager'}
        </h3>
        <p className="text-[#435164] text-sm mb-6 leading-relaxed">
          Đăng ký để nhận bộ 30+ Prompts tinh chỉnh thực chiến giúp tự động phân tích điểm nghẽn, báo cáo tuần và tìm nguyên nhân sự cố vận hành.
        </p>

        {/* Value Bullet points */}
        <div className="space-y-2.5 mb-6 text-sm text-[#435164] bg-[#F7F8F5] p-4 rounded-2xl border border-[#DCE2E7]">
          <div className="flex items-center gap-2.5">
            <Check className="w-4 h-4 text-[#167A65] shrink-0" />
            <span>Phân tích tồn đọng & phát hiện bất thường KPI</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="w-4 h-4 text-[#167A65] shrink-0" />
            <span>Soạn thảo báo cáo vận hành tuần/tháng tự động</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="w-4 h-4 text-[#167A65] shrink-0" />
            <span>Ma trận Root-Cause Analysis và Action Plan</span>
          </div>
        </div>

        {/* Form */}
        <LeadCaptureForm
          source="modal_lead_magnet"
          buttonText="Đăng ký nhận tài liệu"
          compact={true}
        />

        <p className="mt-4 text-center text-xs text-[#667085] flex items-center justify-center gap-1.5 font-medium">
          <FileSpreadsheet className="w-3.5 h-3.5 text-[#667085]" />
          <span>Định dạng File Notion + Document. Không spam.</span>
        </p>
      </div>
    </div>
  );
}
