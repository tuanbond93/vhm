import React from 'react';
import {
  Database,
  Sliders,
  Cpu,
  ShieldAlert,
  AlertTriangle,
  UserCheck,
  Zap,
  CheckCircle2,
  BarChart3,
  RotateCcw,
} from 'lucide-react';

export function RadarEarlyWarningWorkflow() {
  const steps = [
    {
      id: '01',
      title: 'Operational Events / Dữ liệu WMS Thời gian thực',
      desc: 'Hệ thống liên tục thu thập dữ liệu timestamps đơn hàng, độ dài hàng chờ, SKU và tải trọng thiết bị.',
      icon: Database,
      badge: 'INPUT DATA',
      badgeColor: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      id: '02',
      title: 'Real-Time Feature Layer / Lớp Biến số Thời gian thực',
      desc: 'Trích xuất và chuẩn hóa các đặc tính vận hành (Order Complexity, Shuttle Workload, Item Counts).',
      icon: Sliders,
      badge: 'FEATURE ENG',
      badgeColor: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      id: '03',
      title: 'ML Tardiness Risk Prediction / Dự báo Rủi ro Trễ hạn ML',
      desc: 'Mô hình Machine Learning (Random Forest / XGBoost) tính toán điểm số rủi ro vượt cycle time mục tiêu.',
      icon: Cpu,
      badge: 'AI PREDICTION',
      badgeColor: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
    {
      id: '04',
      title: 'Risk Threshold / Ngưỡng Đánh giá Rủi ro',
      desc: 'So sánh điểm số rủi ro của từng đơn hàng với ngưỡng cấu hình để phân loại ưu tiên.',
      icon: ShieldAlert,
      badge: 'CLASSIFICATION',
      badgeColor: 'bg-[#FEF5E7] text-[#C47A16] border-[#F9E2C1]',
    },
    {
      id: '05',
      title: 'Exception Queue / Danh sách Cảnh báo Ưu tiên',
      desc: 'Tự động đẩy các đơn hàng có nguy cơ trễ cao lên đầu màn hình xử lý ngoại lệ của quản lý kho.',
      icon: AlertTriangle,
      badge: 'ALERTING',
      badgeColor: 'bg-[#FDF2F2] text-[#B5473C] border-[#F8D7D7]',
    },
    {
      id: '06',
      title: 'Human / Governed Review / Con người Đánh giá Cảnh báo',
      desc: 'Quản lý kho rà soát lý do nghẽn và đánh giá bối cảnh hiện trường thực tế.',
      icon: UserCheck,
      badge: 'HUMAN DECISION',
      badgeColor: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      id: '07',
      title: 'Intervention Decision / Quyết định Can thiệp Điều hành',
      desc: 'Ra quyết định điều chuyển nhân sự lấy hàng, thay đổi trạm đóng gói hoặc ưu tiên giải phóng tuyến.',
      icon: Zap,
      badge: 'INTERVENTION',
      badgeColor: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      id: '08',
      title: 'Operational Execution / Thực thi Can thiệp Hiện trường',
      desc: 'Đội ngũ hiện trường triển khai phương án điều phối trước khi đơn hàng đi qua hết quy trình.',
      icon: CheckCircle2,
      badge: 'EXECUTION',
      badgeColor: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
    },
    {
      id: '09',
      title: 'Outcome Measurement / Đo lường Kết quả Đơn hàng',
      desc: 'Ghi nhận thời gian chu kỳ thực tế và trạng thái hoàn thành đơn hàng so với cam kết SLA.',
      icon: BarChart3,
      badge: 'METRICS',
      badgeColor: 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]',
    },
    {
      id: '10',
      title: 'Model & Workflow Learning Loop / Học tập Mô hình & Quy trình',
      desc: 'Nạp phản hồi kết quả thực tế để tinh chỉnh ngưỡng cảnh báo AI và tối ưu hóa quy trình điều phối.',
      icon: RotateCcw,
      badge: 'LEARNING LOOP',
      badgeColor: 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]',
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 bg-[#F7F8F5] rounded-2xl border border-[#DCE2E7] space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCE2E7] pb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white font-mono text-[11px] font-bold">
            VHM OPERATING MODEL
          </span>
          <span className="px-2.5 py-0.5 rounded bg-[#E8F5F2] text-[#167A65] border border-[#BDE3DA] font-mono text-[11px] font-bold">
            VHM RECOMMENDATION
          </span>
        </div>
        <span className="font-mono text-xs text-[#667085]">
          Predict Before You Escalate Governance Model
        </span>
      </div>

      <p className="text-xs text-[#435164] italic">
        (Sơ đồ khung quy trình cảnh báo sớm rủi ro trễ đơn kết hợp can thiệp điều hành do VHM đề xuất dựa trên nguyên lý nghiên cứu Aloini et al. 2025).
      </p>

      {/* Grid of steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.id}
              className="p-3.5 bg-white border border-[#DCE2E7] rounded-xl flex items-start gap-3 shadow-xs hover:border-[#2F6FED] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F7F8F5] border border-[#DCE2E7] flex items-center justify-center shrink-0 mt-0.5 text-[#235789]">
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[11px] font-bold text-[#667085]">
                    #{step.id}
                  </span>
                  <span
                    className={`px-1.5 py-0.2 rounded border font-mono text-[9px] font-bold uppercase ${step.badgeColor}`}
                  >
                    {step.badge}
                  </span>
                </div>
                <h5 className="font-bold text-xs sm:text-sm text-[#14202B] leading-tight">
                  {step.title}
                </h5>
                <p className="text-xs text-[#435164] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
