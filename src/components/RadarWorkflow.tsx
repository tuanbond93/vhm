'use client';

import React from 'react';
import { Bot, AlertTriangle, ShieldAlert, UserCheck, FileCheck2, ArrowRight, CornerDownRight } from 'lucide-react';

export function RadarWorkflow() {
  const steps = [
    {
      step: '01',
      title: 'Bounded AI Action',
      label: 'AI tự động hóa có ranh giới',
      desc: 'Xử lý các case chuẩn hóa trong ngưỡng SLA & tự tin cao.',
      icon: <Bot className="w-4 h-4 text-[#2F6FED]" />,
      badge: 'AUTOMATED',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '02',
      title: 'Failure Detection',
      label: 'Phát hiện bất thường / Lỗi',
      desc: 'Bẫy nhận diện sai lệch dữ liệu, mâu thuẫn hoặc điểm nghẽn.',
      icon: <AlertTriangle className="w-4 h-4 text-[#C47A16]" />,
      badge: 'TRIGGER',
      badgeClass: 'bg-[#FEF5E7] text-[#C47A16] border-[#F9E2C1]',
    },
    {
      step: '03',
      title: 'Risk Classification',
      label: 'Phân cấp rủi ro',
      desc: 'Đánh giá mức độ ảnh hưởng tài chính / khách hàng.',
      icon: <ShieldAlert className="w-4 h-4 text-[#B5473C]" />,
      badge: 'EVALUATE',
      badgeClass: 'bg-[#FDF2F2] text-[#B5473C] border-[#F8D7D7]',
    },
    {
      step: '04',
      title: 'Early Escalation',
      label: 'Escalation sớm',
      desc: 'Đẩy case bất thường về đúng người quản lý trước khi bể SLA.',
      icon: <CornerDownRight className="w-4 h-4 text-[#235789]" />,
      badge: 'ROUTE',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '05',
      title: 'Human Decision',
      label: 'Con người ra quyết định',
      desc: 'Quản lý hiện trường duyệt phương án & chịu trách nhiệm.',
      icon: <UserCheck className="w-4 h-4 text-[#167A65]" />,
      badge: 'AUTHORITY',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      step: '06',
      title: 'Evidence & Follow-up',
      label: 'Lưu bằng chứng & Theo dõi',
      desc: 'Ghi log bằng chứng, phản hồi quy trình & cập nhật SOP.',
      icon: <FileCheck2 className="w-4 h-4 text-[#235789]" />,
      badge: 'CLOSING',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
  ];

  return (
    <div className="my-6 sm:my-8 p-4 sm:p-6 bg-[#F7F8F5] border border-[#DCE2E7] rounded-2xl overflow-hidden">
      <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#DCE2E7] pb-4">
        <div>
          <div className="font-mono text-xs font-semibold text-[#235789] uppercase tracking-wider mb-1">
            WORKFLOW ARCHITECTURE
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#14202B]">
            Kiến trúc Workflow Bounded Automation + Early Escalation
          </h4>
        </div>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-white border border-[#DCE2E7] text-[#435164] self-start sm:self-auto">
          Control Tower Model
        </span>
      </div>

      {/* Workflow Step Grid / Sequence */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {steps.map((item) => (
          <div
            key={item.step}
            className="bg-white border border-[#DCE2E7] rounded-xl p-4 flex flex-col justify-between space-y-3 relative group hover:border-[#2F6FED] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#667085]">{item.step}</span>
                <span className="p-1.5 rounded-lg bg-[#F7F8F5] border border-[#DCE2E7]">
                  {item.icon}
                </span>
              </div>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.badgeClass}`}>
                {item.badge}
              </span>
            </div>

            <div>
              <h5 className="font-bold text-xs sm:text-sm text-[#14202B] mb-1">
                {item.title}
              </h5>
              <div className="text-xs font-semibold text-[#235789] mb-1">
                {item.label}
              </div>
              <p className="text-[11px] sm:text-xs text-[#435164] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Operator Insight Callout Box */}
      <div className="mt-5 sm:mt-6 bg-white border border-[#C5D8F9] border-l-4 border-l-[#2F6FED] p-4 rounded-xl flex items-start gap-3">
        <div className="p-1.5 rounded-lg bg-[#EBF2FE] text-[#2F6FED] shrink-0 mt-0.5">
          <UserCheck className="w-4 h-4" />
        </div>
        <div className="text-xs sm:text-sm text-[#14202B] leading-relaxed">
          <strong className="font-mono text-xs uppercase text-[#235789] block mb-1">
            VHM OPERATOR INSIGHT:
          </strong>
          <span className="italic font-medium">
            &ldquo;Human-in-the-loop phải được thiết kế như một workflow vận hành, không phải một nút &apos;chuyển cho người&apos; đặt ở cuối quy trình.&rdquo;
          </span>
        </div>
      </div>
    </div>
  );
}
