'use client';

import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  Bot,
  CheckCircle2,
  ChevronRight,
  CirclePause,
  Eye,
  MessageSquareText,
  ShieldAlert,
  UserCheck,
} from 'lucide-react';
import { Analytics } from '@/lib/analytics';
import {
  HUMAN_DECISIONS,
  HUMAN_LOOP_PRODUCT_ID,
  HUMAN_LOOP_SCENARIOS,
  type HumanDecision,
} from '@/lib/human-in-loop-demo';

const riskStyles = {
  LOW: 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]',
  MEDIUM: 'bg-[#FEF5E7] text-[#B45309] border-[#F9E2C1]',
  HIGH: 'bg-[#FDF2F2] text-[#991B1B] border-[#F8D7D7]',
};

export function HumanInLoopEscalationWorkspace() {
  const [scenarioId, setScenarioId] = useState(HUMAN_LOOP_SCENARIOS[0].id);
  const [decision, setDecision] = useState<HumanDecision | null>(null);
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const scenario = HUMAN_LOOP_SCENARIOS.find((item) => item.id === scenarioId) ?? HUMAN_LOOP_SCENARIOS[0];
  const requiresHuman = scenario.status === 'HUMAN_REVIEW_REQUIRED';

  useEffect(() => {
    Analytics.productDemoView(HUMAN_LOOP_PRODUCT_ID, '/radar/ai-agent-human-in-the-loop');
  }, []);

  const selectScenario = (nextId: typeof scenarioId) => {
    setScenarioId(nextId);
    setDecision(null);
    setInspectionOpen(false);
    Analytics.scenarioChange(HUMAN_LOOP_PRODUCT_ID, nextId);
  };

  const inspectEscalation = () => {
    setInspectionOpen(true);
    Analytics.escalationInspection(HUMAN_LOOP_PRODUCT_ID, scenario.id, scenario.risk);
  };

  const recordDecision = (nextDecision: HumanDecision) => {
    setDecision(nextDecision);
    if (nextDecision === 'TAKE_OVER') {
      Analytics.humanTakeover(HUMAN_LOOP_PRODUCT_ID, scenario.id);
    }
    Analytics.humanDecision(HUMAN_LOOP_PRODUCT_ID, scenario.id, nextDecision);
  };

  return (
    <div className="rounded-3xl border border-[#DCE2E7] bg-white shadow-xl overflow-hidden">
      <div className="bg-[#0F172A] text-white px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#60A5FA]" />
            <h2 className="font-bold text-sm sm:text-base">Human-in-the-loop Case Workspace</h2>
          </div>
          <p className="text-[11px] text-slate-400 font-mono mt-1">SYNTHETIC CASES · DETERMINISTIC RULES · NO LIVE LLM</p>
        </div>
        <span className="self-start sm:self-auto text-[10px] font-mono font-bold rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-200 px-3 py-1">
          DEMO POLICY — NOT VALIDATED
        </span>
      </div>

      <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] min-w-0">
        <aside className="border-b lg:border-b-0 lg:border-r border-[#DCE2E7] bg-[#F8FAFC] p-4 sm:p-5" aria-label="Danh sách case demo">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-[#14202B] uppercase tracking-wide">Case inbox</h3>
            <span className="font-mono text-[10px] text-[#667085]">3 CASES</span>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-2">
            {HUMAN_LOOP_SCENARIOS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectScenario(item.id)}
                aria-pressed={scenario.id === item.id}
                className={`min-h-11 text-left rounded-xl border p-3 transition-colors ${
                  scenario.id === item.id
                    ? 'border-[#2F6FED] bg-[#EBF2FE] ring-1 ring-[#2F6FED]'
                    : 'border-[#DCE2E7] bg-white hover:border-[#AAB7C4]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold text-[#235789]">{item.caseId}</span>
                  <span className={`text-[9px] font-mono border rounded px-1.5 py-0.5 ${riskStyles[item.risk]}`}>{item.risk}</span>
                </div>
                <span className="block text-xs font-semibold text-[#14202B] mt-1.5 leading-snug">{item.title}</span>
                <span className="block text-[10px] text-[#667085] mt-1">{item.status === 'AI_HANDLED' ? 'AI HANDLED' : 'REVIEW REQUIRED'}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="p-4 sm:p-6 space-y-5 min-w-0">
          <div className={`rounded-2xl border p-4 sm:p-5 ${requiresHuman ? 'bg-[#FDF2F2] border-[#F8D7D7]' : 'bg-[#E8F5F2] border-[#BDE3DA]'}`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex items-start gap-3 min-w-0">
                {requiresHuman ? <CirclePause className="w-6 h-6 text-[#991B1B] shrink-0" /> : <CheckCircle2 className="w-6 h-6 text-[#167A65] shrink-0" />}
                <div className="min-w-0">
                  <div className={`font-mono text-xs font-extrabold ${requiresHuman ? 'text-[#991B1B]' : 'text-[#167A65]'}`}>
                    {requiresHuman ? 'AI PAUSED · HUMAN REVIEW REQUIRED' : 'AI HANDLED · NO ESCALATION'}
                  </div>
                  <p className="text-xs sm:text-sm text-[#435164] mt-1 leading-relaxed">{scenario.handlingState}</p>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-[10px] font-mono text-[#667085] block">CONFIDENCE · ILLUSTRATIVE</span>
                <span className="font-mono font-bold text-[#14202B]">{scenario.initialConfidence}% → {scenario.currentConfidence}%</span>
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] gap-5 min-w-0">
            <section className="rounded-2xl border border-[#DCE2E7] p-4 sm:p-5 min-w-0" aria-labelledby="activity-title">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquareText className="w-4 h-4 text-[#235789]" />
                <h3 id="activity-title" className="font-bold text-sm text-[#14202B]">Conversation / activity timeline</h3>
              </div>
              <ol className="space-y-4">
                {scenario.timeline.map((event, index) => (
                  <li key={`${scenario.id}-${index}`} className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 min-w-0">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${event.actor === 'AI' ? 'bg-[#EBF2FE] text-[#235789]' : event.actor === 'SYSTEM' ? 'bg-[#F7F8F5] text-[#667085]' : 'bg-[#E8F5F2] text-[#167A65]'}`}>
                      {event.actor === 'AI' ? <Bot className="w-3.5 h-3.5" /> : event.actor === 'SYSTEM' ? <ChevronRight className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-[#14202B]">{event.label}</span>
                        <span className="text-[9px] font-mono text-[#667085]">STEP {index + 1}</span>
                      </div>
                      <p className="text-xs text-[#435164] mt-1 leading-relaxed break-words">{event.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-2xl border border-[#DCE2E7] bg-[#F8FAFC] p-4 sm:p-5 space-y-4 min-w-0" aria-labelledby="ai-panel-title">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#2F6FED]" />
                <h3 id="ai-panel-title" className="font-bold text-sm text-[#14202B]">AI context package</h3>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#667085] uppercase">Tóm tắt ngữ cảnh</span>
                <p className="text-xs text-[#435164] leading-relaxed mt-1">{scenario.summary}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#667085] uppercase">Tín hiệu phát hiện</span>
                <ul className="mt-2 space-y-1.5">
                  {scenario.signals.map((signal) => (
                    <li key={signal} className="flex items-start gap-2 text-xs text-[#435164]">
                      <span className="w-1.5 h-1.5 bg-[#2F6FED] rounded-full mt-1.5 shrink-0" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-[#C5D8F9] bg-white p-3">
                <span className="text-[10px] font-mono text-[#235789] uppercase">Proposed next action</span>
                <p className="text-xs font-semibold text-[#14202B] mt-1 leading-relaxed">{scenario.proposedAction}</p>
              </div>
            </section>
          </div>

          {requiresHuman ? (
            <section className="rounded-2xl border border-[#F9E2C1] bg-[#FFFBF5] p-4 sm:p-5 space-y-4" aria-labelledby="why-escalated-title">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#B45309]" />
                  <h3 id="why-escalated-title" className="font-bold text-sm text-[#14202B]">WHY ESCALATED</h3>
                </div>
                <button type="button" onClick={inspectEscalation} className="min-h-11 inline-flex items-center justify-center gap-2 rounded-xl border border-[#D7A35D] bg-white px-4 text-xs font-bold text-[#8A4B08] hover:bg-[#FEF5E7]">
                  <Eye className="w-4 h-4" /> Xem bằng chứng & ranh giới
                </button>
              </div>
              {inspectionOpen && (
                <div className="grid md:grid-cols-2 gap-3" role="region" aria-live="polite">
                  {scenario.triggers.map((item) => (
                    <div key={item.trigger} className="rounded-xl border border-[#F9E2C1] bg-white p-4 space-y-2">
                      <p className="text-xs font-bold text-[#8A4B08]">Trigger: {item.trigger}</p>
                      <p className="text-xs text-[#435164]"><strong>Evidence:</strong> {item.evidence}</p>
                      <p className="text-xs text-[#435164]"><strong>Why AI stops:</strong> {item.stopReason}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t border-[#F9E2C1] pt-4">
                <span className="text-[10px] font-mono text-[#667085] uppercase">Human decision required</span>
                <p className="text-sm font-bold text-[#14202B] mt-1">{scenario.humanQuestion}</p>
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-2 mt-3">
                  {HUMAN_DECISIONS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => recordDecision(item.id)}
                      aria-pressed={decision === item.id}
                      className={`min-h-[52px] rounded-xl border px-3 py-2 text-left transition-colors ${decision === item.id ? 'border-[#167A65] bg-[#E8F5F2]' : 'border-[#DCE2E7] bg-white hover:border-[#2F6FED]'}`}
                    >
                      <span className="block text-[11px] font-mono font-bold text-[#14202B]">{item.id}</span>
                      <span className="block text-[10px] text-[#667085] mt-1">{item.description}</span>
                    </button>
                  ))}
                </div>
                {decision && (
                  <div className="mt-3 rounded-xl border border-[#BDE3DA] bg-[#E8F5F2] p-3 text-xs text-[#167A65]" role="status" aria-live="polite">
                    <strong>HUMAN CONFIRMED:</strong> {decision}. Quyết định chỉ được ghi nhận trong prototype; không có hành động ngoài đời thực nào được thực thi.
                  </div>
                )}
              </div>
            </section>
          ) : (
            <div className="rounded-2xl border border-[#BDE3DA] bg-[#E8F5F2] p-4 text-xs text-[#167A65]">
              <strong>Policy result:</strong> Không có trigger escalation. Đây chỉ là kết quả deterministic của kịch bản mẫu, không phải tuyên bố về độ chính xác AI.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
