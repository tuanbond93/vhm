'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  Ban,
  CheckCircle2,
  ClipboardCheck,
  RotateCcw,
  Scale,
  SlidersHorizontal,
} from 'lucide-react';
import { Analytics } from '@/lib/analytics';
import {
  applyForecastAdjustment,
  classifyForecastPolicy,
  DEMO_MATERIAL_THRESHOLD_PERCENT,
  DEMO_POLICY_LABEL,
  FORECAST_GOVERNANCE_PRODUCT_ID,
  FORECAST_REASON_OPTIONS,
  FORECAST_SCENARIOS,
  SYNTHETIC_DATA_LABEL,
  SYNTHETIC_FORECAST_PERIODS,
  type ForecastDecision,
  type ForecastReason,
  type ForecastScenarioId,
} from '@/lib/forecast-governance-demo';

const SOURCE_PAGE = '/radar/demand-forecast-governance';

function adjustmentBucket(value: number) {
  if (value === 0) return 'baseline';
  if (Math.abs(value) >= DEMO_MATERIAL_THRESHOLD_PERCENT) return value > 0 ? 'material_up' : 'material_down';
  return value > 0 ? 'small_up' : 'small_down';
}

export function DemandForecastGovernanceWorkspace() {
  const [scenarioId, setScenarioId] = useState<ForecastScenarioId>('baseline');
  const [adjustment, setAdjustment] = useState(0);
  const [reason, setReason] = useState<ForecastReason | ''>('');
  const [otherReason, setOtherReason] = useState('');
  const [decision, setDecision] = useState<ForecastDecision | null>('KEEP_BASELINE');
  const [error, setError] = useState('');
  const lastWarningRef = useRef('');

  const scenario = FORECAST_SCENARIOS.find((item) => item.id === scenarioId) ?? FORECAST_SCENARIOS[0];
  const policy = classifyForecastPolicy(adjustment);
  const requiresReason = policy === 'MATERIAL_OVERRIDE';
  const proposed = useMemo(
    () => SYNTHETIC_FORECAST_PERIODS.map((item) => ({ ...item, proposed: applyForecastAdjustment(item.baseline, adjustment) })),
    [adjustment],
  );
  const baselineTotal = SYNTHETIC_FORECAST_PERIODS.reduce((sum, item) => sum + item.baseline, 0);
  const proposedTotal = proposed.reduce((sum, item) => sum + item.proposed, 0);
  const finalUsesOverride = decision === 'APPLY_OVERRIDE';

  useEffect(() => {
    Analytics.productDemoView(FORECAST_GOVERNANCE_PRODUCT_ID, SOURCE_PAGE);
  }, []);

  const trackWarningOnce = (nextScenarioId: ForecastScenarioId, nextPolicy: ReturnType<typeof classifyForecastPolicy>) => {
    if (nextPolicy === 'BASELINE') {
      lastWarningRef.current = '';
      return;
    }
    const warningKey = `${nextScenarioId}:${nextPolicy}`;
    if (lastWarningRef.current === warningKey) return;
    lastWarningRef.current = warningKey;
    Analytics.governanceWarning(FORECAST_GOVERNANCE_PRODUCT_ID, nextScenarioId, nextPolicy);
  };

  const selectScenario = (nextScenarioId: ForecastScenarioId) => {
    if (nextScenarioId === scenarioId) return;
    const nextScenario = FORECAST_SCENARIOS.find((item) => item.id === nextScenarioId) ?? FORECAST_SCENARIOS[0];
    const nextPolicy = classifyForecastPolicy(nextScenario.adjustmentPercent);
    setScenarioId(nextScenarioId);
    setAdjustment(nextScenario.adjustmentPercent);
    setReason('');
    setOtherReason('');
    setDecision(nextPolicy === 'BASELINE' ? 'KEEP_BASELINE' : null);
    setError('');
    Analytics.forecastAdjustment(FORECAST_GOVERNANCE_PRODUCT_ID, nextScenarioId, adjustmentBucket(nextScenario.adjustmentPercent));
    trackWarningOnce(nextScenarioId, nextPolicy);
  };

  const updateAdjustment = (nextValue: number) => {
    const bounded = Math.max(-20, Math.min(20, nextValue));
    if (bounded === adjustment) return;
    const nextPolicy = classifyForecastPolicy(bounded);
    setAdjustment(bounded);
    setDecision(nextPolicy === 'BASELINE' ? 'KEEP_BASELINE' : null);
    setError('');
    Analytics.forecastAdjustment(FORECAST_GOVERNANCE_PRODUCT_ID, scenarioId, adjustmentBucket(bounded));
    trackWarningOnce(scenarioId, nextPolicy);
  };

  const selectReason = (nextReason: ForecastReason | '') => {
    if (nextReason === reason) return;
    setReason(nextReason);
    setDecision(null);
    setError('');
    if (nextReason) {
      Analytics.forecastReasonSelected(FORECAST_GOVERNANCE_PRODUCT_ID, scenarioId, nextReason);
    }
  };

  const applyOverride = () => {
    if (decision === 'APPLY_OVERRIDE') return;
    if (policy === 'BASELINE') {
      setDecision('KEEP_BASELINE');
      setError('');
      return;
    }
    if (requiresReason && !reason) {
      setError('Hãy chọn mã lý do trước khi xác nhận điều chỉnh trọng yếu.');
      return;
    }
    if (requiresReason && reason === 'MANUAL_OTHER' && !otherReason.trim()) {
      setError('Hãy nhập ngữ cảnh cục bộ cho lựa chọn “Lý do khác”.');
      return;
    }
    setDecision('APPLY_OVERRIDE');
    setError('');
    Analytics.forecastOverrideApplied(
      FORECAST_GOVERNANCE_PRODUCT_ID,
      scenarioId,
      adjustmentBucket(adjustment),
      reason || undefined,
    );
  };

  const keepBaseline = () => {
    if (decision === 'KEEP_BASELINE') return;
    setDecision('KEEP_BASELINE');
    setError('');
    Analytics.forecastOverrideCancelled(FORECAST_GOVERNANCE_PRODUCT_ID, scenarioId, 'KEEP_BASELINE');
  };

  const cancelOverride = () => {
    if (decision === 'CANCEL_OVERRIDE') return;
    setDecision('CANCEL_OVERRIDE');
    setError('');
    Analytics.forecastOverrideCancelled(FORECAST_GOVERNANCE_PRODUCT_ID, scenarioId, 'CANCEL_OVERRIDE');
  };

  const reset = () => {
    if (decision === 'RESET' && adjustment === scenario.adjustmentPercent && !reason && !otherReason) return;
    setAdjustment(scenario.adjustmentPercent);
    setReason('');
    setOtherReason('');
    setDecision(scenario.adjustmentPercent === 0 ? 'KEEP_BASELINE' : 'RESET');
    setError('');
  };

  const policyCopy = policy === 'BASELINE'
    ? 'Không có override. Giữ nguyên baseline.'
    : policy === 'SMALL_OVERRIDE'
      ? 'Cảnh báo vi mô: xem lại tín hiệu trước khi thay đổi baseline; demo không bắt buộc mã lý do.'
      : `Điều chỉnh từ ±${DEMO_MATERIAL_THRESHOLD_PERCENT}% chạm policy gate minh họa và bắt buộc mã lý do.`;

  return (
    <div className="overflow-hidden rounded-3xl border border-[#CBD5E1] bg-white shadow-xl">
      <div className="border-b border-[#CBD5E1] bg-[#F8FAFC] px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#173A5E]">
              <SlidersHorizontal className="h-4 w-4" />
              <h2 className="text-sm font-extrabold sm:text-base">Planner override governance workspace</h2>
            </div>
            <p className="mt-1 font-mono text-[10px] text-[#64748B] sm:text-xs">{SYNTHETIC_DATA_LABEL} · DETERMINISTIC · NO LIVE BACKEND</p>
          </div>
          <span className="self-start rounded-full border border-[#D7A35D] bg-[#FFF8E8] px-3 py-1 font-mono text-[9px] font-bold text-[#8A4B08] sm:self-auto sm:text-[10px]">
            {DEMO_POLICY_LABEL}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <section aria-labelledby="scenario-heading">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 id="scenario-heading" className="text-xs font-extrabold uppercase tracking-wide text-[#14202B]">01 · Chọn tình huống lập kế hoạch</h3>
            <span className="font-mono text-[10px] text-[#64748B]">3 DETERMINISTIC EXAMPLES</span>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            {FORECAST_SCENARIOS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectScenario(item.id)}
                aria-pressed={scenarioId === item.id}
                className={`min-h-[72px] rounded-xl border p-3 text-left transition-colors ${scenarioId === item.id ? 'border-[#2F6FED] bg-[#EBF2FE] ring-1 ring-[#2F6FED]' : 'border-[#DCE2E7] bg-white hover:border-[#94A3B8]'}`}
              >
                <span className="block text-xs font-bold text-[#14202B]">{item.label}</span>
                <span className="mt-1 block text-[11px] leading-relaxed text-[#64748B]">{item.description}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="my-6 h-px bg-[#E2E8F0]" />

        <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <section className="min-w-0 space-y-4" aria-labelledby="forecast-heading">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 id="forecast-heading" className="text-xs font-extrabold uppercase tracking-wide text-[#14202B]">02 · Baseline và forecast đề xuất</h3>
                <p className="mt-1 text-xs text-[#64748B]">Đơn vị minh họa theo tuần · {SYNTHETIC_DATA_LABEL}</p>
              </div>
              <div className="font-mono text-xs text-[#435164]">Baseline {baselineTotal} → Proposed {proposedTotal}</div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {proposed.map((item) => {
                const maxValue = 180;
                return (
                  <div key={item.period} className="rounded-xl border border-[#DCE2E7] bg-[#F8FAFC] p-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-bold text-[#64748B]">{item.period}</span>
                      <span className="font-mono text-[10px] text-[#173A5E]">{item.proposed}</span>
                    </div>
                    <div className="mt-3 flex h-20 items-end justify-center gap-1" aria-label={`${item.period}: baseline ${item.baseline}, proposed ${item.proposed}`}>
                      <div className="w-3 rounded-t bg-[#94A3B8]" style={{ height: `${Math.max(10, (item.baseline / maxValue) * 100)}%` }} />
                      <div className="w-3 rounded-t bg-[#2F6FED]" style={{ height: `${Math.max(10, (item.proposed / maxValue) * 100)}%` }} />
                    </div>
                    <div className="mt-2 flex justify-between font-mono text-[9px] text-[#64748B]"><span>B {item.baseline}</span><span>P {item.proposed}</span></div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl border border-[#DCE2E7] bg-white p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <label htmlFor="forecast-adjustment" className="text-sm font-bold text-[#14202B]">Planner adjustment</label>
                  <p className="mt-1 text-xs text-[#64748B]">Phạm vi demo −20% đến +20%. Không phải khuyến nghị production.</p>
                </div>
                <output htmlFor="forecast-adjustment" className="min-w-20 rounded-xl bg-[#EBF2FE] px-4 py-2 text-center font-mono text-xl font-extrabold text-[#235789]">
                  {adjustment > 0 ? '+' : ''}{adjustment}%
                </output>
              </div>
              <input
                id="forecast-adjustment"
                type="range"
                min="-20"
                max="20"
                step="1"
                value={adjustment}
                onChange={(event) => updateAdjustment(Number(event.target.value))}
                className="mt-4 h-11 w-full cursor-pointer accent-[#2F6FED]"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#64748B]"><span>−20%</span><span>0%</span><span>+20%</span></div>
            </div>
          </section>

          <section className="min-w-0 space-y-4" aria-labelledby="governance-heading">
            <div className={`rounded-2xl border p-4 sm:p-5 ${policy === 'BASELINE' ? 'border-[#BDE3DA] bg-[#E8F5F2]' : 'border-[#F9E2C1] bg-[#FFF8E8]'}`}>
              <div className="flex items-start gap-3">
                {policy === 'BASELINE' ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#167A65]" /> : <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" />}
                <div>
                  <h3 id="governance-heading" className="text-xs font-extrabold text-[#14202B]">03 · POLICY RESULT: {policy}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#435164]">{policyCopy}</p>
                  <p className="mt-2 font-mono text-[9px] font-bold text-[#8A4B08]">{DEMO_POLICY_LABEL}</p>
                </div>
              </div>
            </div>

            {requiresReason && (
              <div className="rounded-2xl border border-[#DCE2E7] bg-[#F8FAFC] p-4 sm:p-5">
                <label htmlFor="forecast-reason" className="text-xs font-bold text-[#14202B]">Mã lý do bắt buộc</label>
                <select
                  id="forecast-reason"
                  value={reason}
                  onChange={(event) => selectReason(event.target.value as ForecastReason | '')}
                  className="mt-2 min-h-11 w-full rounded-xl border border-[#CBD5E1] bg-white px-3 text-sm text-[#14202B]"
                >
                  <option value="">Chọn lý do theo ngữ cảnh…</option>
                  {FORECAST_REASON_OPTIONS.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
                </select>
                {reason === 'MANUAL_OTHER' && (
                  <div className="mt-3">
                    <label htmlFor="forecast-other-reason" className="text-xs font-semibold text-[#435164]">Ngữ cảnh cục bộ</label>
                    <textarea
                      id="forecast-other-reason"
                      value={otherReason}
                      onChange={(event) => setOtherReason(event.target.value)}
                      maxLength={160}
                      rows={3}
                      placeholder="Mô tả ngắn lý do điều chỉnh…"
                      className="mt-1 w-full rounded-xl border border-[#CBD5E1] bg-white p-3 text-sm text-[#14202B]"
                    />
                    <p className="mt-1 text-[10px] text-[#64748B]">Nội dung này chỉ tồn tại trong state cục bộ và không được gửi vào analytics.</p>
                  </div>
                )}
              </div>
            )}

            <div className="rounded-2xl border border-[#DCE2E7] bg-white p-4 sm:p-5">
              <h3 className="text-xs font-extrabold uppercase tracking-wide text-[#14202B]">04 · Human decision</h3>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button type="button" onClick={keepBaseline} className="min-h-[52px] rounded-xl border border-[#CBD5E1] px-3 text-left text-[11px] font-bold text-[#14202B] hover:border-[#2F6FED]">KEEP_BASELINE</button>
                <button type="button" onClick={applyOverride} className="min-h-[52px] rounded-xl bg-[#235789] px-3 text-left text-[11px] font-bold text-white hover:bg-[#1B456D]">APPLY_OVERRIDE</button>
                <button type="button" onClick={cancelOverride} className="min-h-[52px] rounded-xl border border-[#F8D7D7] bg-[#FDF2F2] px-3 text-left text-[11px] font-bold text-[#991B1B]">CANCEL_OVERRIDE</button>
                <button type="button" onClick={reset} className="min-h-[52px] rounded-xl border border-[#CBD5E1] px-3 text-left text-[11px] font-bold text-[#435164]"><RotateCcw className="mr-1 inline h-3.5 w-3.5" />RESET</button>
              </div>
              {error && <p className="mt-3 rounded-xl border border-[#F8D7D7] bg-[#FDF2F2] p-3 text-xs font-semibold text-[#991B1B]" role="alert">{error}</p>}
              {decision && !error && (
                <p className="mt-3 rounded-xl border border-[#BDE3DA] bg-[#E8F5F2] p-3 text-xs text-[#167A65]" role="status" aria-live="polite">
                  <strong>HUMAN DECISION:</strong> {decision}. Chỉ ghi nhận trong prototype; không writeback sang hệ thống thật.
                </p>
              )}
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-[#C5D8F9] bg-[#F4F7FC] p-4 sm:p-6" aria-labelledby="audit-heading">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4 text-[#235789]" />
            <h3 id="audit-heading" className="text-xs font-extrabold uppercase tracking-wide text-[#14202B]">05 · Simulated audit context</h3>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div><span className="font-mono text-[9px] text-[#64748B]">BASELINE</span><p className="mt-1 text-sm font-bold text-[#14202B]">{baselineTotal} units</p></div>
            <div><span className="font-mono text-[9px] text-[#64748B]">PROPOSED CHANGE</span><p className="mt-1 text-sm font-bold text-[#14202B]">{adjustment > 0 ? '+' : ''}{adjustment}% · {proposedTotal} units</p></div>
            <div><span className="font-mono text-[9px] text-[#64748B]">POLICY / REASON</span><p className="mt-1 text-sm font-bold text-[#14202B]">{policy} · {reason || 'NONE'}</p></div>
            <div><span className="font-mono text-[9px] text-[#64748B]">FINAL SIMULATED</span><p className="mt-1 text-sm font-bold text-[#14202B]">{finalUsesOverride ? proposedTotal : baselineTotal} units</p></div>
          </div>
          <div className="mt-4 flex items-start gap-2 border-t border-[#C5D8F9] pt-4 text-xs text-[#435164]">
            {finalUsesOverride ? <Scale className="mt-0.5 h-4 w-4 shrink-0 text-[#235789]" /> : <Ban className="mt-0.5 h-4 w-4 shrink-0 text-[#64748B]" />}
            <p><strong>Decision record:</strong> {decision ?? 'PENDING_HUMAN_DECISION'}. Đây là audit summary mô phỏng; không có forecast hay quyết định nào được ghi vào production.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
