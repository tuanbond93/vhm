'use client';

import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  RefreshCw, 
  Layers, 
  ArrowRight, 
  ArrowDown, 
  Zap, 
  ShieldCheck, 
  Info 
} from 'lucide-react';

interface WorkflowStep {
  num: number;
  title: string;
  desc: string;
  tag: 'SIGNAL' | 'ASSESSMENT' | 'ADJUSTMENT' | 'EXECUTION' | 'FEEDBACK';
}

export function RadarWorkforceCapacityWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(5);
  const [simulatedScenario, setSimulatedScenario] = useState<'spike' | 'normal'>('spike');

  const steps: WorkflowStep[] = [
    { num: 1, title: 'Demand Forecast / Workload Signal', desc: 'Dự báo biến động sản lượng & số lượng đơn hàng theo ca', tag: 'SIGNAL' },
    { num: 2, title: 'Required Productive Capacity', desc: 'Quy đổi sản lượng thành tổng giờ công hiệu quả cần thiết', tag: 'ASSESSMENT' },
    { num: 3, title: 'Current Regular Workforce Capacity', desc: 'Đánh giá tổng năng lực khả dụng của lực lượng cố định', tag: 'ASSESSMENT' },
    { num: 4, title: 'Flexible Labor Candidate Pool', desc: 'Xác định lực lượng lao động linh hoạt khả thi cho ca', tag: 'ASSESSMENT' },
    { num: 5, title: 'Learning Curve / Experience Adjustment', desc: 'Điều chỉnh năng suất lao động linh hoạt theo số ca tích lũy', tag: 'ADJUSTMENT' },
    { num: 6, title: 'Effective Capacity Estimate', desc: 'Tổng hợp Năng lực Sản xuất Thực tế của toàn bộ nhân sự ca', tag: 'ASSESSMENT' },
    { num: 7, title: 'Capacity Gap Evaluation', desc: 'Kiểm tra chênh lệch giữa Năng lực Thực tế và Nhu cầu', tag: 'EXECUTION' },
    { num: 8, title: 'Shift Allocation & Dispatch', desc: 'Phân bổ nhân sự linh hoạt vào các tác vụ phù hợp', tag: 'EXECUTION' },
    { num: 9, title: 'Actual Productivity Measurement', desc: 'Đo lường năng suất thực tế theo thời gian thực', tag: 'FEEDBACK' },
    { num: 10, title: 'Learning Curve Update', desc: 'Cập nhật số ca tích lũy vào hồ sơ nhân sự cho chu kỳ sau', tag: 'FEEDBACK' },
  ];

  return (
    <div className="my-8 rounded-2xl border border-[#DCE2E7] bg-white p-4 sm:p-6 md:p-8 shadow-xs overflow-hidden">
      {/* Workflow Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#DCE2E7]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#B2DDFF] text-[#026AA2] text-xs font-semibold uppercase tracking-wider mb-2">
            <RefreshCw className="w-3.5 h-3.5 text-[#026AA2] animate-spin" style={{ animationDuration: '10s' }} />
            VHM OPERATING MODEL · VHM RECOMMENDATION
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#14202B] tracking-tight">
            Quy trình Cấu hình Năng lực Nhân sự Thích ứng (Workforce Capacity Workflow)
          </h3>
          <p className="text-xs sm:text-sm text-[#435164] mt-1 max-w-2xl">
            Mô hình quy trình ra quyết định cấu hình tỷ lệ nhân sự cố định và linh hoạt dựa trên điều chỉnh đường cong học tập trước khi ca làm việc vận hành.
          </p>
        </div>

        {/* Interactive Scenario Toggle */}
        <div className="flex items-center gap-2 bg-[#F7F8F5] p-1.5 rounded-xl border border-[#DCE2E7] text-xs shrink-0 self-start md:self-auto">
          <span className="text-[#667085] pl-2 font-medium">Kịch bản:</span>
          <button
            onClick={() => setSimulatedScenario('spike')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              simulatedScenario === 'spike'
                ? 'bg-[#175CD3] text-white shadow-xs'
                : 'text-[#667085] hover:text-[#14202B]'
            }`}
          >
            Sản lượng Đột biến (Peak Spike)
          </button>
          <button
            onClick={() => setSimulatedScenario('normal')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              simulatedScenario === 'normal'
                ? 'bg-[#027A48] text-white shadow-xs'
                : 'text-[#667085] hover:text-[#14202B]'
            }`}
          >
            Sản lượng Ổn định (Normal)
          </button>
        </div>
      </div>

      {/* Main Step Navigation */}
      <div className="py-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2 mb-6">
          {steps.map((s) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(s.num)}
              className={`p-2 rounded-xl border text-left transition-all relative ${
                activeStep === s.num
                  ? 'bg-[#F0F9FF] border-[#2F6FED] text-[#175CD3] ring-2 ring-[#2F6FED]/20 shadow-xs'
                  : 'bg-[#F7F8F5] border-[#DCE2E7] text-[#667085] hover:border-slate-300 hover:text-[#14202B]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  activeStep === s.num ? 'bg-[#175CD3] text-white' : 'bg-[#E4E7EC] text-[#344054]'
                }`}>
                  BƯỚC {s.num}
                </span>
              </div>
              <div className="text-[11px] font-bold truncate leading-tight mt-1">
                {s.title.split('/')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Detail Panel */}
        {steps.find(s => s.num === activeStep) && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#1E293B] text-white">
                  BƯỚC {activeStep} / 10
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {steps.find(s => s.num === activeStep)?.title}
                </h4>
              </div>
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wide">
                Giai đoạn: {steps.find(s => s.num === activeStep)?.tag}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#334155] mt-3 font-medium leading-relaxed">
              {steps.find(s => s.num === activeStep)?.desc}
            </p>

            {/* Step 5 Special Highlight */}
            {activeStep === 5 && (
              <div className="mt-4 p-3.5 rounded-xl border border-[#B2DDFF] bg-[#F0F9FF] text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#026AA2]">
                  <TrendingUp className="w-4 h-4 text-[#026AA2]" />
                  Mô phỏng Điều chỉnh Năng suất Lao động Linh hoạt:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono">
                  <div className="p-2 rounded bg-white border border-[#D1E9FF] text-[#1D2939]">
                    <span className="block text-[10px] text-[#667085]">NHÓM MỚI (1-2 ca):</span>
                    <span className="font-bold text-[#D92D20]">Năng suất ban đầu thấp hơn</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-[#D1E9FF] text-[#1D2939]">
                    <span className="block text-[10px] text-[#667085]">NHÓM TÍCH LŨY (3-5 ca):</span>
                    <span className="font-bold text-[#B45309]">Tăng trưởng theo đường cong</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-[#D1E9FF] text-[#1D2939]">
                    <span className="block text-[10px] text-[#667085]">NHÓM QUEN THUỘC (6+ ca):</span>
                    <span className="font-bold text-[#027A48]">Tiệm cận nhân sự cố định</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Visual Workflow Flowchart */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#F7F8F5] border border-[#DCE2E7]">
        <div className="text-xs font-mono font-bold text-[#667085] uppercase tracking-wider mb-4 flex items-center justify-between">
          <span>SƠ ĐỒ LUỒNG ĐIỀU HÀNH NĂNG LỰC NHÂN SỰ</span>
          <span>KỊCH BẢN: {simulatedScenario === 'spike' ? 'SẢN LƯỢNG ĐỘT BIẾN' : 'SẢN LƯỢNG ỔN ĐỊNH'}</span>
        </div>

        <div className="flex flex-col items-center space-y-3 max-w-2xl mx-auto text-xs font-sans">
          {/* Node 1 */}
          <div className="w-full p-3 rounded-xl bg-white border border-[#DCE2E7] text-center shadow-2xs font-medium">
            <span className="font-mono text-[10px] text-[#667085] block">TÍN HIỆU ĐẦU VÀO</span>
            Dự báo Sản lượng Đơn hàng Ca làm việc
          </div>

          <ArrowDown className="w-4 h-4 text-[#98A2B3]" />

          {/* Node 2 */}
          <div className="w-full p-3 rounded-xl bg-white border border-[#DCE2E7] text-center shadow-2xs font-medium">
            <span className="font-mono text-[10px] text-[#667085] block">QUY ĐỔI NĂNG LỰC</span>
            Tính toán Giờ công Hiệu quả Cần thiết (C<sub>required</sub>)
          </div>

          <ArrowDown className="w-4 h-4 text-[#98A2B3]" />

          {/* Node 3 & 4 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="p-3 rounded-xl bg-white border border-[#DCE2E7] text-center shadow-2xs">
              <span className="font-mono text-[10px] text-[#667085] block">NHÂN SỰ CỐ ĐỊNH</span>
              Năng lực Khả dụng cố định (N<sub>regular</sub> × P<sub>regular</sub>)
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#DCE2E7] text-center shadow-2xs">
              <span className="font-mono text-[10px] text-[#667085] block">LAO ĐỘNG LINH HOẠT</span>
              Danh sách Đăng ký Ca Linh hoạt khả thi
            </div>
          </div>

          <ArrowDown className="w-4 h-4 text-[#98A2B3]" />

          {/* Core Adjustment Box */}
          <div className="w-full p-4 rounded-xl bg-[#F0F9FF] border-2 border-[#2F6FED] text-center shadow-xs">
            <span className="font-mono text-[10px] font-bold text-[#175CD3] uppercase block mb-1">
              BƯỚC ĐIỀU CHỈNH CỐT LÕI (LEARNING CURVE ADJUSTMENT)
            </span>
            <div className="text-sm font-extrabold text-[#14202B]">
              Hiệu chỉnh Năng suất Lao động Linh hoạt theo Số ca Tích lũy
            </div>
            <div className="text-[11px] text-[#435164] mt-1 font-mono">
              C<sub>effective</sub> = N<sub>regular</sub> × P<sub>regular</sub> + ∑ P<sub>flex</sub>(s<sub>i</sub>)
            </div>
          </div>

          <ArrowDown className="w-4 h-4 text-[#98A2B3]" />

          {/* Decision Split */}
          <div className="w-full p-3.5 rounded-xl bg-white border border-[#DCE2E7] text-center shadow-2xs">
            <span className="font-mono text-[10px] text-[#667085] block mb-1">ĐÁNH GIÁ KHOẢNG TRỐNG NĂNG LỰC</span>
            <div className="flex items-center justify-center gap-4 text-xs font-bold">
              {simulatedScenario === 'spike' ? (
                <div className="p-2 rounded-lg bg-[#FEF3F2] border border-[#FECDCA] text-[#B42318] w-full">
                  CÓ KHOẢNG TRỐNG (GAP) → Phân bổ & Gọi bổ sung Linh hoạt
                </div>
              ) : (
                <div className="p-2 rounded-lg bg-[#ECFDF3] border border-[#ABE5C5] text-[#027A48] w-full">
                  CÂN BẰNG (BALANCED) → Duy trì Định biên Ca Hiện tại
                </div>
              )}
            </div>
          </div>

          <ArrowDown className="w-4 h-4 text-[#98A2B3]" />

          {/* Feedback Loop */}
          <div className="w-full p-3 rounded-xl bg-white border border-[#DCE2E7] text-center shadow-2xs font-medium">
            <span className="font-mono text-[10px] text-[#667085] block">VÒNG LẶP PHẢN HỒI (CLOSED LOOP)</span>
            Đo lường Năng suất Ca → Cập nhật Đường cong Học tập cho Chu kỳ Sau
          </div>
        </div>
      </div>

      {/* Operating Model Disclaimer Footer */}
      <div className="mt-4 pt-3 border-t border-[#E4E7EC] flex items-center gap-2 text-[11px] text-[#667085]">
        <Info className="w-3.5 h-3.5 text-[#667085] shrink-0" />
        <span>
          <strong>Ghi chú Ranh giới:</strong> Quy trình điều hành này là mô hình khuyến nghị của Vận Hành Mới (VHM Recommendation), không phải quy trình trực tiếp trích xuất từ công trình của Auad et al. (2026).
        </span>
      </div>
    </div>
  );
}
