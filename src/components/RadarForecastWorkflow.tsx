'use client';

import React from 'react';
import { Database, Cpu, AlertTriangle, UserCheck, CheckSquare, Tag, BarChart3, LineChart, RefreshCw } from 'lucide-react';

export function RadarForecastWorkflow() {
  const steps = [
    {
      step: '01',
      title: 'Demand Data',
      label: 'Thu thập Dữ liệu Nhu cầu',
      desc: 'Nạp lịch sử bán hàng, biến động mùa vụ và dữ liệu giao dịch.',
      icon: <Database className="w-4 h-4 text-[#235789]" />,
      badge: 'INPUT',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '02',
      title: 'Baseline Forecast',
      label: 'Dự báo Cơ sở Tự động',
      desc: 'Mô hình máy tính/ML tạo dự báo cơ sở mặc định cho 100% SKU.',
      icon: <Cpu className="w-4 h-4 text-[#2F6FED]" />,
      badge: 'MODEL',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '03',
      title: 'Exception Detection',
      label: 'Nhận diện Ngoại lệ',
      desc: 'Bẫy phát hiện các SKU có mức biến động dự báo vượt ngưỡng rủi ro.',
      icon: <AlertTriangle className="w-4 h-4 text-[#C47A16]" />,
      badge: 'TRIGGER',
      badgeClass: 'bg-[#FEF5E7] text-[#C47A16] border-[#F9E2C1]',
    },
    {
      step: '04',
      title: 'Human Review',
      label: 'Con người Xem xét',
      desc: 'Chuyên viên kế hoạch đánh giá bối cảnh ngoại lệ ngoài mô hình.',
      icon: <UserCheck className="w-4 h-4 text-[#235789]" />,
      badge: 'EVALUATE',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '05',
      title: 'Override / No Override',
      label: 'Quyết định Can thiệp',
      desc: 'Giữ nguyên số liệu cơ sở hoặc phê duyệt điều chỉnh theo phân quyền.',
      icon: <CheckSquare className="w-4 h-4 text-[#167A65]" />,
      badge: 'DECISION',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      step: '06',
      title: 'Reason Code Logging',
      label: 'Bắt buộc Ghi Mã Lý do',
      desc: 'Nhập mã lý do bối cảnh (Audit Trail) cho mọi lượt can thiệp.',
      icon: <Tag className="w-4 h-4 text-[#235789]" />,
      badge: 'GOVERNANCE',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '07',
      title: 'Actual Demand',
      label: 'Ghi nhận Nhu cầu Thực tế',
      desc: 'Theo dõi lượng đơn hàng và nhu cầu thực tế phát sinh thị trường.',
      icon: <BarChart3 className="w-4 h-4 text-[#235789]" />,
      badge: 'ACTUALS',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '08',
      title: 'Forecast Error Review',
      label: 'Đánh giá Sai số Dự báo',
      desc: 'So sánh sai số trước và sau can thiệp để đo lường hiệu quả con người.',
      icon: <LineChart className="w-4 h-4 text-[#B5473C]" />,
      badge: 'AUDIT',
      badgeClass: 'bg-[#FDF2F2] text-[#B5473C] border-[#F8D7D7]',
    },
    {
      step: '09',
      title: 'Learning Loop',
      label: 'Cải tiến Quy tắc Vận hành',
      desc: 'Cập nhật lại ngưỡng cảnh báo ngoại lệ và quy định phân quyền.',
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
            Luồng Quản trị Dự báo Nhu cầu (Governed Forecast Workflow)
          </h4>
        </div>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-white border border-[#DCE2E7] text-[#435164] self-start sm:self-auto">
          Model-First Governance
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
            &ldquo;Mô hình tạo dự báo cơ sở ổn định hơn con người, nhưng con người can thiệp hiệu quả khi có thông tin bối cảnh lớn và được quản trị bằng quy định phân quyền rõ ràng.&rdquo;
          </span>
        </div>
      </div>
    </div>
  );
}
