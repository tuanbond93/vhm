'use client';

import React from 'react';
import { Package, Layers, Bot, UserCheck, ShieldCheck, CheckCircle2, BarChart2, RefreshCw } from 'lucide-react';

export function RadarAMRWorkflow() {
  const steps = [
    {
      step: '01',
      title: 'Warehouse Task Demand',
      label: 'Nhu cầu Vận chuyển / Đơn hàng Kho',
      desc: 'Tiếp nhận các lệnh luân chuyển vật liệu và đơn hàng phát sinh.',
      icon: <Package className="w-4 h-4 text-[#235789]" />,
      badge: 'INPUT',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '02',
      title: 'Task Classification',
      label: 'Phân loại Nhiệm vụ',
      desc: 'Phân tích đặc tính tải trọng, tuyến đường và độ phức tạp thao tác.',
      icon: <Layers className="w-4 h-4 text-[#235789]" />,
      badge: 'ANALYSIS',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '03',
      title: 'AMR-Suitable / Human-or-Exception-Suitable',
      label: 'Phân luồng Tác vụ AMR vs Con người',
      desc: 'Tách biệt công việc di chuyển lặp lại và thao tác khéo léo/ngoại lệ.',
      icon: <Bot className="w-4 h-4 text-[#2F6FED]" />,
      badge: 'ROUTING',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '04',
      title: 'AMR Execution',
      label: 'AMR Thực thi Vận chuyển',
      desc: 'Đội xe AMR tự di chuyển vật liệu theo tuyến đường tối ưu.',
      icon: <Bot className="w-4 h-4 text-[#2F6FED]" />,
      badge: 'EXECUTION',
      badgeClass: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      step: '05',
      title: 'Human Exception Handling',
      label: 'Con người Xử lý Ngoại lệ',
      desc: 'Nhân viên thực hiện bốc xếp khéo, kiểm đếm và xử lý sự cố hiện trường.',
      icon: <UserCheck className="w-4 h-4 text-[#C47A16]" />,
      badge: 'HUMAN ROLE',
      badgeClass: 'bg-[#FEF5E7] text-[#C47A16] border-[#F9E2C1]',
    },
    {
      step: '06',
      title: 'Safety & Quality Gate',
      label: 'Kiểm soát An toàn & Chất lượng',
      desc: 'Giám sát an toàn tương tác hiện trường và độ chính xác kiện hàng.',
      icon: <ShieldCheck className="w-4 h-4 text-[#167A65]" />,
      badge: 'SAFETY',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      step: '07',
      title: 'Operational Outcome',
      label: 'Kết quả Vận hành Hoàn tất',
      desc: 'Đơn hàng được xử lý đúng tiến độ với tỷ lệ sự cố tối thiểu.',
      icon: <CheckCircle2 className="w-4 h-4 text-[#167A65]" />,
      badge: 'OUTCOME',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      step: '08',
      title: 'Performance Measurement',
      label: 'Đo lường Hiệu suất Vận hành',
      desc: 'Đo lường throughput, downtime, mật độ giao thông và sự cố near-misses.',
      icon: <BarChart2 className="w-4 h-4 text-[#235789]" />,
      badge: 'METRICS',
      badgeClass: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      step: '09',
      title: 'Workflow Redesign / Learning Loop',
      label: 'Cải tiến Luồng & Học tập Vận hành',
      desc: 'Cập nhật lại layout, quy tắc phân công và tuyến đường dựa trên dữ liệu thực tế.',
      icon: <RefreshCw className="w-4 h-4 text-[#167A65]" />,
      badge: 'LEARNING',
      badgeClass: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
  ];

  return (
    <div className="my-6 sm:my-8 p-4 sm:p-6 bg-[#F7F8F5] border border-[#DCE2E7] rounded-2xl overflow-hidden">
      <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#DCE2E7] pb-4">
        <div>
          <div className="font-mono text-xs font-semibold text-[#235789] uppercase tracking-wider mb-1">
            VHM OPERATING MODEL · VHM RECOMMENDATION
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#14202B]">
            Sơ đồ Luồng Phân công Nhiệm vụ Con người – Robot (Human–Robot Task Allocation Workflow)
          </h4>
        </div>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-white border border-[#DCE2E7] text-[#435164] self-start sm:self-auto">
          Human–Robot Governance Model
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
            &ldquo;Giá trị thực tế của AMR nằm ở năng lực tái thiết kế luồng công việc và phân công nhiệm vụ phù hợp giữa Con người và Robot.&rdquo;
          </span>
        </div>
      </div>
    </div>
  );
}
