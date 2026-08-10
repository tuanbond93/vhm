'use client';

import React, { useState } from 'react';
import { Download, Sparkles, LayoutDashboard, FileText, BarChart3, CalendarCheck, Check } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { LeadMagnetModal } from '@/components/LeadMagnetModal';
import { TOOLS_DATA } from '@/lib/data';

export default function ToolsPage() {
  const [selectedToolTitle, setSelectedToolTitle] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-teal-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-teal-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-teal-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <Badge variant="accent">Thư viện Công cụ & Templates</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 font-heading tracking-tight">
          Công cụ & Templates thực chiến
        </h1>
        <p className="text-slate-400 text-base leading-relaxed">
          Tổng hợp các mẫu Dashboard, bộ AI Prompts tinh chỉnh sẵn, SOP templates và khung làm việc dành cho quản lý vận hành. Tải về và áp dụng ngay.
        </p>
      </div>

      {/* Grid Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS_DATA.map((tool) => (
          <div
            key={tool.id}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {getIcon(tool.iconName)}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={tool.badge === 'Miễn phí' ? 'accent' : 'outline'}>
                    {tool.badge}
                  </Badge>
                </div>
              </div>

              <h2 className="text-lg font-bold text-slate-100">
                {tool.title}
              </h2>

              <p className="text-slate-400 text-xs leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              {tool.downloadsCount ? (
                <span className="text-[11px] text-slate-400 font-mono">
                  {tool.downloadsCount}
                </span>
              ) : (
                <span className="text-[11px] text-slate-400 font-mono">
                  Chuẩn bị ra mắt
                </span>
              )}

              <button
                onClick={() => setSelectedToolTitle(tool.title)}
                className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-teal-400" />
                <span>{tool.badge === 'Sắp ra mắt' ? 'Đăng ký nhận trước' : 'Tải tài liệu'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lead Magnet Modal Handler */}
      <LeadMagnetModal
        isOpen={selectedToolTitle !== null}
        onClose={() => setSelectedToolTitle(null)}
        title={selectedToolTitle || undefined}
      />
    </div>
  );
}
