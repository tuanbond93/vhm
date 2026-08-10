import React from 'react';
import { Metadata } from 'next';
import { Badge } from '@/components/Badge';
import { ToolsCatalog } from '@/components/ToolsCatalog';

export const metadata: Metadata = {
  title: 'Công cụ & Templates Vận hành',
  description: 'Thư viện công cụ, mẫu Dashboard, AI Prompt Kits và SOP templates đóng gói sẵn giúp tối ưu năng suất quản lý vận hành.',
  alternates: {
    canonical: 'https://vanhanhmoi.com/cong-cu',
  },
};

export default function ToolsPage() {
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

      {/* Interactive Catalog Component */}
      <ToolsCatalog />
    </div>
  );
}
