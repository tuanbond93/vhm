'use client';

import React from 'react';
import { Award, Layers, Bot, UserCheck, MessageSquareCode, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';

export function RadarKnowledgeWorkflow() {
  const steps = [
    {
      step: '01',
      title: 'Expert Knowledge / Complex Cases',
      label: 'Tri thức Chuyên gia & Ca Phức tạp',
      desc: 'Nhóm nhân sự kinh nghiệm cao xử lý các ca đặc biệt ngoài quy chuẩn.',
      icon: <Award className="w-4 h-4 text-[#235789]" />,
      badge: 'EXPERTISE',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '02',
      title: 'Successful Interaction Patterns',
      label: 'Thu thập Mẫu Giao tiếp Thành công',
      desc: 'Trích xuất các câu trả lời tối ưu và quy trình xử lý hiệu quả nhất.',
      icon: <Layers className="w-4 h-4 text-[#2F6FED]" />,
      badge: 'PATTERNS',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '03',
      title: 'Organizational AI Knowledge Layer',
      label: 'Lớp AI Tri thức Tổ chức',
      desc: 'Mô hình AI đóng gói và tổng hợp tri thức thành tài sản chung.',
      icon: <Bot className="w-4 h-4 text-[#2F6FED]" />,
      badge: 'AI LAYER',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '04',
      title: 'Frontline / New Agent',
      label: 'Nhân viên Frontline & Nhân sự Mới',
      desc: 'Nhân viên hiện trường nhận gợi ý để nâng chuẩn năng lực xử lý.',
      icon: <UserCheck className="w-4 h-4 text-[#235789]" />,
      badge: 'FRONTLINE',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '05',
      title: 'Contextual AI Recommendation',
      label: 'Gợi ý Ngữ cảnh Thời gian thực',
      desc: 'AI đề xuất câu trả lời chuẩn xác và bước quy trình tiếp theo.',
      icon: <MessageSquareCode className="w-4 h-4 text-[#2F6FED]" />,
      badge: 'COACHING',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '06',
      title: 'Human Review & Decision',
      label: 'Con người Đánh giá & Ra Quyết định',
      desc: 'Nhân viên kiểm tra bối cảnh và duyệt phản hồi trước khi gửi.',
      icon: <ShieldCheck className="w-4 h-4 text-[#167A65]" />,
      badge: 'AUTHORITY',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      step: '07',
      title: 'Customer / Operational Outcome',
      label: 'Kết quả Giao tiếp & Vận hành',
      desc: 'Sự cố được giải quyết với chất lượng chuẩn hóa và hài lòng cao.',
      icon: <CheckCircle2 className="w-4 h-4 text-[#167A65]" />,
      badge: 'OUTCOME',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      step: '08',
      title: 'Feedback & Knowledge Update',
      label: 'Vòng Phản hồi & Cập nhật Tri thức',
      desc: 'Đánh giá định kỳ, cập nhật ca mới và duy trì chất lượng mô hình.',
      icon: <RefreshCw className="w-4 h-4 text-[#167A65]" />,
      badge: 'FEEDBACK',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
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
            Luồng Quản trị Tri thức AI (AI Knowledge Governance Workflow)
          </h4>
        </div>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-white border border-[#DCE2E7] text-[#435164] self-start sm:self-auto">
          Knowledge Multiplier Model
        </span>
      </div>

      {/* Workflow Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
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
            &ldquo;Giá trị lớn nhất của GenAI nằm ở việc đóng gói và phổ biến tri thức từ nhóm nhân sự làm việc hiệu quả sang nhóm nhân sự mới.&rdquo;
          </span>
        </div>
      </div>
    </div>
  );
}
