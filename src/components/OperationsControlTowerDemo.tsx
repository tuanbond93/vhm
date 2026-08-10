'use client';

import React from 'react';
import { Activity, AlertTriangle, TrendingUp, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function OperationsControlTowerDemo() {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-6 text-slate-100 font-sans text-xs space-y-4 relative overflow-hidden">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-slate-300 font-semibold tracking-wider text-[11px] uppercase">
            OPERATIONS CONTROL TOWER
          </span>
        </div>
        <span className="font-mono text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
          DEMO HỆ THỐNG
        </span>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] text-slate-400 font-mono block">BACKLOG</span>
          <div className="text-base sm:text-lg font-bold font-mono text-slate-100 flex items-center justify-between">
            <span>124</span>
            <span className="text-[10px] text-amber-400 font-normal flex items-center">
              +4% <TrendingUp className="w-3 h-3 ml-0.5" />
            </span>
          </div>
        </div>

        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] text-slate-400 font-mono block">SLA RISK</span>
          <div className="text-base sm:text-lg font-bold font-mono text-rose-400 flex items-center justify-between">
            <span>8</span>
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
          </div>
        </div>

        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] text-slate-400 font-mono block">COST/ORDER</span>
          <div className="text-base sm:text-lg font-bold font-mono text-emerald-400">
            <span>14,820đ</span>
          </div>
        </div>
      </div>

      {/* Real-time Alert */}
      <div className="bg-amber-950/40 border border-amber-900/60 p-3 rounded-xl flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="text-[11px] font-bold text-amber-300 block">
            Cảnh báo điểm nghẽn tuyến Phú Thọ
          </span>
          <p className="text-[11px] text-slate-300 leading-normal">
            32 đơn có nguy cơ vượt mốc SLA trong 4 giờ tới do lượng tồn ca trước cao.
          </p>
        </div>
      </div>

      {/* AI Analysis Box */}
      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-semibold text-blue-400 flex items-center gap-1.5 font-mono">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>AI ASSISTANT ANALYSIS</span>
          </span>
          <span className="text-[10px] text-slate-400 font-mono">REAL-TIME</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
          "Backlog tăng đột biến tập trung ở các đơn có tuổi tồn trên 24h. Nguyên nhân do thiếu nhân lực phân loại ca tối."
        </p>
        <div className="pt-1 flex items-center justify-between text-[11px] text-emerald-400 border-t border-slate-900">
          <span className="font-medium">Hành động đề xuất:</span>
          <span className="text-slate-200 font-mono text-[10px]">Điều chuyển 2 nhân sự ca sáng</span>
        </div>
      </div>
    </div>
  );
}
