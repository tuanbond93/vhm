export const FORECAST_GOVERNANCE_PRODUCT_ID = 'demand_forecast_governance';
export const DEMO_POLICY_LABEL = 'DEMO POLICY HYPOTHESIS — NOT VALIDATED';
export const SYNTHETIC_DATA_LABEL = 'SYNTHETIC DEMO DATA';

export const DEMO_MATERIAL_THRESHOLD_PERCENT = 10;

export type ForecastScenarioId = 'baseline' | 'small-override' | 'material-override';
export type ForecastDecision = 'KEEP_BASELINE' | 'APPLY_OVERRIDE' | 'CANCEL_OVERRIDE' | 'RESET';
export type ForecastReason =
  | 'PROMOTION'
  | 'WEATHER'
  | 'STOCKOUT_RECOVERY'
  | 'EVENT'
  | 'CAPACITY_CHANGE'
  | 'MANUAL_OTHER';

export interface ForecastScenario {
  id: ForecastScenarioId;
  label: string;
  description: string;
  adjustmentPercent: number;
}

export const FORECAST_SCENARIOS: ForecastScenario[] = [
  {
    id: 'baseline',
    label: 'Giữ baseline',
    description: 'Không có planner override; baseline được giữ nguyên.',
    adjustmentPercent: 0,
  },
  {
    id: 'small-override',
    label: 'Điều chỉnh nhỏ',
    description: 'Điều chỉnh vi mô nhận cảnh báo governance trước khi xác nhận.',
    adjustmentPercent: 4,
  },
  {
    id: 'material-override',
    label: 'Điều chỉnh trọng yếu',
    description: 'Điều chỉnh chạm ngưỡng demo và bắt buộc chọn lý do theo ngữ cảnh.',
    adjustmentPercent: 15,
  },
];

export const FORECAST_REASON_OPTIONS: Array<{ id: ForecastReason; label: string }> = [
  { id: 'PROMOTION', label: 'Khuyến mãi / promotion' },
  { id: 'WEATHER', label: 'Yếu tố thời tiết' },
  { id: 'STOCKOUT_RECOVERY', label: 'Phục hồi sau stockout' },
  { id: 'EVENT', label: 'Sự kiện theo lịch' },
  { id: 'CAPACITY_CHANGE', label: 'Thay đổi năng lực cung ứng' },
  { id: 'MANUAL_OTHER', label: 'Lý do khác (nhập cục bộ)' },
];

export const SYNTHETIC_FORECAST_PERIODS = [
  { period: 'W1', baseline: 120 },
  { period: 'W2', baseline: 128 },
  { period: 'W3', baseline: 132 },
  { period: 'W4', baseline: 125 },
  { period: 'W5', baseline: 140 },
  { period: 'W6', baseline: 146 },
];

export const DEMAND_FORECAST_PROOF_CARD = {
  id: 'c4',
  tag: 'PRODUCT PROOF #002',
  title: 'Demand Forecast Governance Guardrails',
  summary: 'Planning workspace minh họa cách con người điều chỉnh dự báo trong một policy gate có lý do và audit context.',
  result: 'Interactive Demo',
  href: '/radar/demand-forecast-governance',
};

export function classifyForecastPolicy(adjustmentPercent: number) {
  const magnitude = Math.abs(adjustmentPercent);
  if (magnitude === 0) return 'BASELINE' as const;
  if (magnitude >= DEMO_MATERIAL_THRESHOLD_PERCENT) return 'MATERIAL_OVERRIDE' as const;
  return 'SMALL_OVERRIDE' as const;
}

export function applyForecastAdjustment(baseline: number, adjustmentPercent: number) {
  return Math.round(baseline * (1 + adjustmentPercent / 100));
}
