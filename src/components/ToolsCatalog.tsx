'use client';

import React, { useState } from 'react';
import { Sparkles, LayoutDashboard, FileText, BarChart3, CalendarCheck, Send } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { LeadMagnetModal } from '@/components/LeadMagnetModal';
import { TOOLS_DATA } from '@/lib/data';
import { Analytics } from '@/lib/analytics';

export function ToolsCatalog() {
  const [selectedToolTitle, setSelectedToolTitle] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#235789]" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-[#235789]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#235789]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#235789]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-[#235789]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#235789]" />;
    }
  };

  const handleToolClick = (toolId: string, toolTitle: string) => {
    Analytics.toolCtaClick(toolId, 'Đăng ký nhận tài liệu', '/cong-cu');
    setSelectedToolTitle(toolTitle);
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
                <div className="p-2.5 rounded-xl bg-[#EBF2FE] border border-[#C5D8F9]">
                  {getIcon(tool.iconName)}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={tool.badge === 'Miễn phí' ? 'accent' : 'outline'}>
                    {tool.badge}
                  </Badge>
                </div>
              </div>

              <h2 className="text-lg font-bold text-[#14202B]">
                {tool.title}
              </h2>

              <p className="text-[#435164] text-xs sm:text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#DCE2E7] flex items-center justify-between gap-4">
              <span className="text-[11px] text-[#667085] font-mono font-medium">
                {tool.category}
              </span>

              <button
                onClick={() => handleToolClick(tool.id, tool.title)}
                className="inline-flex items-center gap-1.5 bg-[#235789] hover:bg-[#1B456D] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{tool.badge === 'Sắp ra mắt' ? 'Đăng ký nhận trước' : 'Đăng ký nhận tài liệu'}</span>
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
