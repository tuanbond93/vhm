'use client';

import React, { useState, useEffect } from 'react';
import {
  Activity,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Cpu,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  User,
  Zap,
  Filter
} from 'lucide-react';
import { Analytics } from '@/lib/analytics';

interface Order {
  id: string;
  stage: string;
  dwellTime: string;
  riskScore: number;
  slaRemaining: string;
  status: 'SAFE' | 'AT_RISK' | 'RESOLVED';
  aiReason: string;
}

const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-7781-BGN',
    stage: 'Chờ Lấy Hàng (Picking)',
    dwellTime: '45 phút',
    riskScore: 89,
    slaRemaining: '15 phút',
    status: 'AT_RISK',
    aiReason: 'Tồn đọng khu vực kệ A4. Nhân sự lấy hàng hiện tại đang quá tải.',
  },
  {
    id: 'ORD-7792-SGN',
    stage: 'Đóng Gói (Packing)',
    dwellTime: '12 phút',
    riskScore: 32,
    slaRemaining: '48 phút',
    status: 'SAFE',
    aiReason: 'Tiến độ bình thường. SLA an toàn.',
  },
  {
    id: 'ORD-7795-HAN',
    stage: 'Chờ Xử Lý (Pending)',
    dwellTime: '5 phút',
    riskScore: 18,
    slaRemaining: '1h 55m',
    status: 'SAFE',
    aiReason: 'Đơn mới nạp. Không có rủi ro.',
  }
];

export function SLAEarlyWarningControlTower() {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'AT_RISK' | 'RESOLVED'>('ALL');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  useEffect(() => {
    // 1. product_demo_view: fire once when mounted
    Analytics.productDemoView('sla_early_warning', typeof window !== 'undefined' ? window.location.pathname : '/radar/sla-early-warning');
  }, []);

  const handleFilterChange = (filter: 'ALL' | 'AT_RISK' | 'RESOLVED') => {
    setSelectedFilter(filter);
    // 2. diagnostic_interaction: filter changes
    Analytics.diagnosticInteraction('sla_early_warning', 'filter_change', filter);
  };

  const handleInspectItem = (order: Order) => {
    setSelectedOrder(order.id);
    // 3. risk_item_inspection: when user inspects/selects an item
    Analytics.riskItemInspection('sla_early_warning', order.id, order.riskScore);
  };

  const handleIntervene = (e: React.MouseEvent, orderId: string) => {
    e.stopPropagation();
    // 2. diagnostic_interaction: intervention action
    Analytics.diagnosticInteraction('sla_early_warning', 'human_intervention', orderId);

    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status: 'RESOLVED', riskScore: 12, slaRemaining: 'Đã điều chuyển ưu tiên', aiReason: 'Quản lý đã can thiệp: Điều chuyển 1 nhân sự bổ sung khu kệ A4.' }
          : order
      )
    );
  };

  const filteredOrders = orders.filter((o) => {
    if (selectedFilter === 'AT_RISK') return o.status === 'AT_RISK';
    if (selectedFilter === 'RESOLVED') return o.status === 'RESOLVED';
    return true;
  });

  const riskCount = orders.filter(o => o.status === 'AT_RISK').length;
  const resolvedCount = orders.filter(o => o.status === 'RESOLVED').length;

  return (
    <div className="w-full bg-[#0F172A] border border-[#1E293B] rounded-2xl shadow-2xl p-4 sm:p-6 text-slate-100 font-sans space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1E293B] pb-4 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <div>
            <h3 className="font-bold text-slate-100 text-sm sm:text-base tracking-wide flex items-center gap-2">
              SLA EARLY WARNING SYSTEM
              <span className="font-mono text-[10px] bg-[#3B82F6]/10 text-[#3B82F6] px-2 py-0.5 rounded border border-[#3B82F6]/20">
                PROTOTYPE
              </span>
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">ZONE A · REAL-TIME WMS DATA</p>
          </div>
        </div>
      </div>

      {/* Metrics Board */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#1E293B]/50 p-3 sm:p-4 rounded-xl border border-[#334155] space-y-1 sm:space-y-2">
          <span className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase">Total Queue</span>
          <div className="text-lg sm:text-2xl font-bold font-mono text-slate-100">
            342
          </div>
        </div>
        <div className="bg-[#451A1E]/30 p-3 sm:p-4 rounded-xl border border-[#7F1D1D]/50 space-y-1 sm:space-y-2 relative overflow-hidden">
          {riskCount > 0 && <div className="absolute top-0 left-0 w-full h-1 bg-[#EF4444]" />}
          <span className="text-[10px] sm:text-xs text-[#FCA5A5] font-mono uppercase">At Risk (SLA &lt; 20m)</span>
          <div className="text-lg sm:text-2xl font-bold font-mono text-[#EF4444] flex items-center justify-between">
            <span>{riskCount}</span>
            {riskCount > 0 && <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF4444] animate-pulse" />}
          </div>
        </div>
        <div className="bg-[#064E3B]/30 p-3 sm:p-4 rounded-xl border border-[#065F46]/50 space-y-1 sm:space-y-2">
          <span className="text-[10px] sm:text-xs text-[#6EE7B7] font-mono uppercase">Intervened</span>
          <div className="text-lg sm:text-2xl font-bold font-mono text-[#10B981] flex items-center justify-between">
            <span>{resolvedCount}</span>
            {resolvedCount > 0 && <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981]" />}
          </div>
        </div>
      </div>

      {/* AI Risk Queue */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>AI Prioritized Exception Queue</span>
          </div>
          {/* Diagnostic Filter Interaction Controls */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <Filter className="w-3.5 h-3.5 text-slate-500 mr-1" />
            <button
              onClick={() => handleFilterChange('ALL')}
              className={`px-2.5 py-1 rounded transition-colors ${
                selectedFilter === 'ALL'
                  ? 'bg-[#334155] text-slate-100 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Tất cả ({orders.length})
            </button>
            <button
              onClick={() => handleFilterChange('AT_RISK')}
              className={`px-2.5 py-1 rounded transition-colors ${
                selectedFilter === 'AT_RISK'
                  ? 'bg-[#7F1D1D] text-[#FCA5A5] font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Rủi ro ({riskCount})
            </button>
            <button
              onClick={() => handleFilterChange('RESOLVED')}
              className={`px-2.5 py-1 rounded transition-colors ${
                selectedFilter === 'RESOLVED'
                  ? 'bg-[#064E3B] text-[#6EE7B7] font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Đã xử lý ({resolvedCount})
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              onClick={() => handleInspectItem(order)}
              className={`p-4 rounded-xl border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                order.id === selectedOrder ? 'ring-2 ring-[#3B82F6]' : ''
              } ${
                order.status === 'AT_RISK'
                  ? 'bg-[#1F1214] border-[#991B1B] shadow-[0_0_15px_rgba(220,38,38,0.1)]'
                  : order.status === 'RESOLVED'
                  ? 'bg-[#062F21] border-[#047857]'
                  : 'bg-[#1E293B]/40 border-[#334155]'
              }`}
            >
              {order.status === 'AT_RISK' && (
                <div className="absolute top-0 right-0 p-1 bg-[#991B1B] text-[9px] font-mono font-bold px-2 rounded-bl-lg text-white flex items-center gap-1">
                  <Zap className="w-3 h-3" /> ACTION REQUIRED
                </div>
              )}
              {order.status === 'RESOLVED' && (
                <div className="absolute top-0 right-0 p-1 bg-[#047857] text-[9px] font-mono font-bold px-2 rounded-bl-lg text-white flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> RESOLVED BY HUMAN
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mt-2 sm:mt-0">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-sm text-slate-200">{order.id}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono border ${
                      order.status === 'AT_RISK' ? 'bg-[#7F1D1D]/30 border-[#991B1B] text-[#FCA5A5]' :
                      order.status === 'RESOLVED' ? 'bg-[#064E3B]/50 border-[#059669] text-[#6EE7B7]' :
                      'bg-[#334155]/50 border-[#475569] text-slate-300'
                    }`}>
                      Risk Score: {order.riskScore}/100
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
                    <div><span className="block text-[10px] text-slate-500 mb-0.5">Stage</span>{order.stage}</div>
                    <div><span className="block text-[10px] text-slate-500 mb-0.5">Dwell Time</span>{order.dwellTime}</div>
                  </div>

                  <div className={`text-xs p-2.5 rounded-lg border ${
                    order.status === 'AT_RISK' ? 'bg-[#2E1012] border-[#7F1D1D]/50 text-[#FCA5A5]' :
                    order.status === 'RESOLVED' ? 'bg-[#064E3B]/30 border-[#059669]/50 text-[#6EE7B7]' :
                    'bg-[#0F172A] border-[#1E293B] text-slate-400'
                  }`}>
                    <strong className="font-semibold block mb-1 flex items-center gap-1.5">
                      {order.status === 'AT_RISK' ? <AlertTriangle className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                      {order.status === 'RESOLVED' ? 'Intervention Log:' : 'AI Diagnostic:'}
                    </strong>
                    {order.aiReason}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 sm:pl-4 sm:border-l border-[#334155] sm:min-w-[140px] shrink-0">
                  <div className="text-right w-full">
                    <span className="block text-[10px] text-slate-500 font-mono uppercase mb-1">SLA Deadline</span>
                    <div className={`font-mono font-bold text-sm flex items-center justify-end gap-1.5 ${
                      order.status === 'AT_RISK' ? 'text-[#EF4444]' :
                      order.status === 'RESOLVED' ? 'text-[#10B981]' :
                      'text-slate-300'
                    }`}>
                      <Clock className="w-3.5 h-3.5" />
                      {order.slaRemaining}
                    </div>
                  </div>
                  
                  {order.status === 'AT_RISK' && (
                    <button
                      onClick={(e) => handleIntervene(e, order.id)}
                      className="w-full mt-auto bg-[#EF4444] hover:bg-[#DC2626] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(239,68,68,0.3)] cursor-pointer"
                    >
                      <User className="w-3.5 h-3.5" />
                      Can thiệp
                    </button>
                  )}
                  {order.status === 'RESOLVED' && (
                    <div className="w-full mt-auto bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[11px] font-bold px-3 py-2 rounded-lg text-center font-mono">
                      SAFE
                    </div>
                  )}
                  {order.status === 'SAFE' && (
                    <div className="w-full mt-auto text-slate-500 text-[10px] font-mono text-center py-2">
                      NO ACTION NEEDED
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
