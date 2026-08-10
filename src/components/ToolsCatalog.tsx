'use client';

import React, { useState } from 'react';
import { Download, Sparkles, LayoutDashboard, FileText, BarChart3, CalendarCheck } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { LeadMagnetModal } from '@/components/LeadMagnetModal';
import { TOOLS_DATA } from '@/lib/data';

export function ToolsCatalog() {
  const [selectedToolTitle, setSelectedToolTitle] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-blue-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS_DATA.map((tool) => (
          <div
            key={tool.id}
            className="card-surface p-6 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                  {getIcon(tool.iconName)}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={tool.badge === 'Miễn phí' ? 'accent' : 'outline'}>
                    {tool.badge}
                  </Badge>
                </div>
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                {tool.title}
              </h2>

              <p className="text-slate-600 text-xs leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              {tool.downloadsCount ? (
                <span className="text-[11px] text-slate-500 font-mono">
                  {tool.downloadsCount}
                </span>
              ) : (
                <span className="text-[11px] text-slate-500 font-mono">
                  Chuẩn bị ra mắt
                </span>
              )}

              <button
                onClick={() => setSelectedToolTitle(tool.title)}
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>{tool.badge === 'Sắp ra mắt' ? 'Đăng ký nhận trước' : 'Tải tài liệu'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <LeadMagnetModal
        isOpen={selectedToolTitle !== null}
        onClose={() => setSelectedToolTitle(null)}
        title={selectedToolTitle || undefined}
      />
    </>
  );
}
