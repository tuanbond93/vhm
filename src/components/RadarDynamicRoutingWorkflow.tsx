'use client';

import React, { useState } from 'react';
import { RefreshCw, ShieldCheck, AlertTriangle, ArrowRight, Zap, CheckCircle2, XCircle } from 'lucide-react';

interface GateConstraint {
  id: string;
  name: string;
  description: string;
  status: 'valid' | 'invalid';
  detail: string;
}

export function RadarDynamicRoutingWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(5); // Default highlighting Feasibility Gate
  const [simulatedScenario, setSimulatedScenario] = useState<'normal' | 'low_battery'>('normal');

  const constraints: GateConstraint[] = simulatedScenario === 'normal' 
    ? [
        { id: 'c1', name: 'Năng lượng & Pin', description: 'Pin dự phòng ≥ Ngưỡng an toàn cấu hình', status: 'valid', detail: 'Dung lượng pin còn lại đạt 28% (Vượt ngưỡng an toàn cấu hình)' },
        { id: 'c2', name: 'Cửa sổ Thời gian', description: 'Không vi phạm cam kết giờ giao hàng', status: 'valid', detail: 'Tuyến mới đảm bảo giao đúng cam kết khung giờ' },
        { id: 'c3', name: 'Tải trọng & Thể tích', description: 'Tải trọng xe ≤ Sức chứa định mức', status: 'valid', detail: 'Tổng trọng lượng nằm trong định mức sức chứa' },
        { id: 'c4', name: 'Hạ tầng Trạm sạc', description: 'Trụ sạc dự kiến khả dụng', status: 'valid', detail: 'Trạm sạc dự kiến có trụ sạc trống khả dụng' }
      ]
    : [
        { id: 'c1', name: 'Năng lượng & Pin', description: 'Pin dự phòng ≥ Ngưỡng an toàn cấu hình', status: 'invalid', detail: 'Dung lượng pin dự báo vi phạm ngưỡng an toàn' },
        { id: 'c2', name: 'Cửa sổ Thời gian', description: 'Không vi phạm cam kết giờ giao hàng', status: 'valid', detail: 'Tuyến mới đảm bảo giao đúng cam kết' },
        { id: 'c3', name: 'Tải trọng & Thể tích', description: 'Tải trọng xe ≤ Sức chứa định mức', status: 'valid', detail: 'Tải trọng hợp lệ' },
        { id: 'c4', name: 'Hạ tầng Trạm sạc', description: 'Trụ sạc dự kiến khả dụng', status: 'valid', detail: 'Trạm sạc khả dụng' }
      ];

  const loopSteps = [
    { num: 1, title: 'Operational State', desc: 'Xe di chuyển trên lộ trình hiện tại' },
    { num: 2, title: 'Event Sensing', desc: 'Nhận dữ liệu kẹt xe / đơn mới / tiêu hao pin' },
    { num: 3, title: 'State Estimation', desc: 'Cập nhật tọa độ GPS & mức năng lượng thực tế' },
    { num: 4, title: 'AI Policy Decision', desc: 'Safe DRL tính toán tuyến & điểm sạc dự báo' },
    { num: 5, title: 'Feasibility Gate', desc: 'Cổng kiểm tra 4 giới hạn khả thi vận hành' },
    { num: 6, title: 'Execute Action', desc: 'Tái định tuyến tự động hoặc điều hướng trạm sạc' },
    { num: 7, title: 'Observe Outcome', desc: 'Ghi nhận phản hồi thực tế & lặp lại vòng kín' }
  ];

  return (
    <div className="my-8 rounded-2xl border border-[#DCE2E7] bg-white p-4 sm:p-6 md:p-8 shadow-xs overflow-hidden">
      {/* Visual Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#DCE2E7]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#B2DDFF] text-[#026AA2] text-xs font-semibold uppercase tracking-wider mb-2">
            <RefreshCw className="w-3.5 h-3.5 text-[#026AA2] animate-spin" style={{ animationDuration: '8s' }} />
            VHM Closed-Loop Dynamic Control Architecture
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#14202B] tracking-tight">
            Luồng Điều khiển Vòng kín: Tái định tuyến dưới Giới hạn Khả thi
          </h3>
          <p className="text-xs sm:text-sm text-[#435164] mt-1 max-w-2xl">
            Khác với luồng xử lý hàng chờ tĩnh (Radar #006), Radar #007 vận hành theo chuỗi ra quyết định liên tục (Sequential Decision-Making), nơi mọi phương án AI đều phải đi qua Cổng kiểm tra Giới hạn Khả thi Vận hành.
          </p>
        </div>

        {/* Interactive Scenario Toggle */}
        <div className="flex items-center gap-2 bg-[#F7F8F5] p-1.5 rounded-xl border border-[#DCE2E7] text-xs shrink-0 self-start md:self-auto">
          <span className="text-[#667085] pl-2 font-medium">Mô phỏng:</span>
          <button
            onClick={() => setSimulatedScenario('normal')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              simulatedScenario === 'normal'
                ? 'bg-[#027A48] text-white shadow-xs'
                : 'text-[#667085] hover:text-[#14202B]'
            }`}
          >
            Tuyến Hợp lệ
          </button>
          <button
            onClick={() => setSimulatedScenario('low_battery')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              simulatedScenario === 'low_battery'
                ? 'bg-[#B45309] text-white shadow-xs'
                : 'text-[#667085] hover:text-[#14202B]'
            }`}
          >
            Vi phạm Giới hạn Pin
          </button>
        </div>
      </div>

      {/* Main Interactive Workflow Diagram */}
      <div className="py-6">
        {/* Step Indicator Badges (Mobile & Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 mb-8">
          {loopSteps.map((s) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(s.num)}
              className={`p-2.5 rounded-xl border text-left transition-all relative ${
                activeStep === s.num
                  ? 'bg-[#F0F9FF] border-[#2F6FED] text-[#175CD3] ring-2 ring-[#2F6FED]/20 shadow-xs'
                  : 'bg-[#F7F8F5] border-[#DCE2E7] text-[#667085] hover:border-slate-300 hover:text-[#14202B]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  activeStep === s.num ? 'bg-[#2F6FED] text-white' : 'bg-[#E2E8F0] text-[#475569]'
                }`}>
                  STEP 0{s.num}
                </span>
                {s.num === 5 && (
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B45309]" />
                )}
              </div>
              <div className="text-xs font-semibold line-clamp-1">{s.title}</div>
            </button>
          ))}
        </div>

        {/* Highlighted Stage Focus Card */}
        <div className="bg-[#F8F9FC] rounded-xl border border-[#EAECF0] p-5 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#EFF8FF] border border-[#B2DDFF] flex items-center justify-center text-[#175CD3] shrink-0 font-bold">
              {activeStep}
            </div>
            <div>
              <h4 className="text-base font-bold text-[#14202B] mb-1">
                {loopSteps[activeStep - 1].title}: <span className="text-[#026AA2] font-normal">{loopSteps[activeStep - 1].desc}</span>
              </h4>
              <p className="text-xs text-[#435164]">
                {activeStep === 5 ? (
                  'Cổng kiểm tra khả thi vận hành (Feasibility Gate) mã hóa các giới hạn an toàn năng lượng và SLA. Đây là chốt chặn đảm bảo AI không bao giờ đưa ra hành động tái định tuyến không khả thi.'
                ) : activeStep === 7 ? (
                  'Kết quả của hành động được ghi nhận trở lại trạng thái hệ thống, khép kín vòng lặp quyết định (Closed-Loop). AI không đưa ra quyết định một lần rồi thôi mà liên tục cập nhật theo phản hồi môi trường.'
                ) : (
                  'Trong mô hình chuỗi quyết định, hệ thống liên tục đánh giá lại trạng thái xe, tình hình kẹt xe và tiêu hao pin thời gian thực để sẵn sàng kích hoạt thuật toán Safe DRL.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* OPERATIONAL FEASIBILITY GATE (Central Highlight Component) */}
        <div className="rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-5 sm:p-6 mb-8 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#FCD34D]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] border border-[#F59E0B]/40 flex items-center justify-center text-[#B45309]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#92400E] uppercase tracking-wider">
                  Cổng Kiểm tra Giới hạn Khả thi Vận hành (Operational Feasibility Gate)
                </h4>
                <p className="text-xs text-[#B45309]/80">
                  Mã hóa 4 ranh giới an toàn cứng bắt buộc phải thỏa mãn trước khi phê duyệt phương án tái định tuyến
                </p>
              </div>
            </div>
            <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-bold border ${
              simulatedScenario === 'normal'
                ? 'bg-[#ECFDF3] border-[#ABE5C6] text-[#027A48]'
                : 'bg-[#FEF2F2] border-[#FCA5A5] text-[#B91C1C]'
            }`}>
              {simulatedScenario === 'normal' ? 'GATE STATUS: PASSED' : 'GATE STATUS: REJECTED'}
            </span>
          </div>

          {/* Constraints Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {constraints.map((c) => (
              <div
                key={c.id}
                className={`p-3.5 rounded-lg border text-xs transition-all ${
                  c.status === 'valid'
                    ? 'bg-white border-[#DCE2E7] text-[#14202B]'
                    : 'bg-[#FEF2F2] border-[#FCA5A5] text-[#991B1B] ring-1 ring-red-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-[#14202B] flex items-center gap-1.5">
                    {c.status === 'valid' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#027A48] shrink-0" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-[#B91C1C] shrink-0" />
                    )}
                    {c.name}
                  </span>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                    c.status === 'valid'
                      ? 'bg-[#ECFDF3] text-[#027A48] border border-[#ABE5C6]'
                      : 'bg-[#FEF2F2] text-[#B91C1C] border border-[#FCA5A5]'
                  }`}>
                    {c.status === 'valid' ? 'HỢP LỆ' : 'VI PHẠM'}
                  </span>
                </div>
                <div className="text-[#667085] text-[11px] mb-1">{c.description}</div>
                <div className={`text-[11px] font-mono ${c.status === 'valid' ? 'text-[#027A48]' : 'text-[#B91C1C]'}`}>
                  {c.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Gate Decision Branch Output */}
          <div className="bg-white p-4 rounded-lg border border-[#DCE2E7] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              {simulatedScenario === 'normal' ? (
                <div className="w-8 h-8 rounded-full bg-[#ECFDF3] text-[#027A48] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#FEF2F2] text-[#B91C1C] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              )}
              <div>
                <div className="text-xs font-bold text-[#14202B]">
                  {simulatedScenario === 'normal'
                    ? 'Quyết định Thuật toán: Phê duyệt Tái định tuyến & Cập nhật Tuyến mới'
                    : 'Quyết định Thuật toán: Từ chối Tuyến tham lam, Chuyển sang Lộ trình Trạm sạc Dự phòng'}
                </div>
                <div className="text-[11px] text-[#667085]">
                  {simulatedScenario === 'normal'
                    ? 'Xe tự động nhận bản đồ tuyến tối ưu năng lượng mới trực tiếp qua Telemetry app.'
                    : 'Kích hoạt phương án an toàn: Điều hướng xe về trạm sạc gần nhất trước khi tiếp tục lộ trình.'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-[#026AA2] shrink-0">
              <span>Tiếp tục Vòng kín</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Closed-Loop Visual Return Cue */}
        <div className="flex items-center justify-center gap-2 pt-2 text-xs text-[#667085] font-mono">
          <RefreshCw className="w-3.5 h-3.5 text-[#026AA2] animate-spin" style={{ animationDuration: '10s' }} />
          <span>Vòng lặp kín: Observe Outcome → Update State → Decision Epoch tiếp theo</span>
        </div>
      </div>
    </div>
  );
}
