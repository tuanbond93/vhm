'use client';

import React from 'react';
import { FileText, Database, Bot, UserCheck, ShieldCheck, CheckSquare, FileCheck2, Share2, RefreshCw } from 'lucide-react';

export function RadarDocumentWorkflow() {
  const steps = [
    {
      step: '01',
      title: 'Operational Evidence',
      label: 'Bằng chứng Vận hành / Ghi chú Thô',
      desc: 'Ghi âm, danh sách kiểm đếm hoặc biên bản họp hiện trường.',
      icon: <FileText className="w-4 h-4 text-[#235789]" />,
      badge: 'INPUT',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '02',
      title: 'Source Material',
      label: 'Tài liệu Nguồn & Quy định An toàn',
      desc: 'Nạp thông số thiết bị, chuẩn mực pháp lý và chính sách đã duyệt.',
      icon: <Database className="w-4 h-4 text-[#235789]" />,
      badge: 'CONTEXT',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '03',
      title: 'AI-Assisted Draft',
      label: 'GenAI Tạo Bản thảo Thô',
      desc: 'Mô hình AI cấu trúc và chuẩn hóa khung văn bản SOP V1.',
      icon: <Bot className="w-4 h-4 text-[#2F6FED]" />,
      badge: 'DRAFT',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '04',
      title: 'Human SME Review',
      label: 'Chuyên gia Kiểm duyệt Chi tiết',
      desc: 'Chuyên gia vận hành rà soát tính chính xác và loại bỏ sai sót.',
      icon: <UserCheck className="w-4 h-4 text-[#235789]" />,
      badge: 'AUDIT',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '05',
      title: 'Field Validation',
      label: 'Thử nghiệm Thực địa',
      desc: 'Cho nhân viên hiện trường làm theo bản thảo để phát hiện điểm thiếu.',
      icon: <ShieldCheck className="w-4 h-4 text-[#C47A16]" />,
      badge: 'TESTING',
      badgeClass: 'bg-[#FEF5E7] text-[#C47A16] border-[#F9E2C1]',
    },
    {
      step: '06',
      title: 'Revision',
      label: 'Chỉnh sửa & Hoàn thiện',
      desc: 'Cập nhật lại quy trình dựa trên phản hồi từ thử nghiệm thực địa.',
      icon: <CheckSquare className="w-4 h-4 text-[#235789]" />,
      badge: 'REFINE',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '07',
      title: 'Authorized Approval',
      label: 'Ký duyệt Phê duyệt',
      desc: 'Trưởng bộ phận ký duyệt chính thức và chịu trách nhiệm vận hành.',
      icon: <FileCheck2 className="w-4 h-4 text-[#167A65]" />,
      badge: 'APPROVAL',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      step: '08',
      title: 'Controlled Release',
      label: 'Ban hành có Kiểm soát',
      desc: 'Đăng tải tài liệu SOP chính thức lên kho tri thức doanh nghiệp.',
      icon: <Share2 className="w-4 h-4 text-[#167A65]" />,
      badge: 'RELEASE',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      step: '09',
      title: 'Feedback / Version Update',
      label: 'Phản hồi & Cập nhật Phiên bản',
      desc: 'Thu thập phản hồi vận hành và cải tiến tài liệu theo chu kỳ.',
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
            Luồng Quản trị Soạn thảo Tài liệu (AI-Assisted Documentation Workflow)
          </h4>
        </div>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-white border border-[#DCE2E7] text-[#435164] self-start sm:self-auto">
          Human Validation Model
        </span>
      </div>

      {/* Workflow Step Grid */}
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
            &ldquo;AI có thể tạo hoặc cấu trúc lại bản thảo thô, nhưng con người bắt buộc phải nắm giữ sự thật vận hành và thẩm quyền ban hành.&rdquo;
          </span>
        </div>
      </div>
    </div>
  );
}
