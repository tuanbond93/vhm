import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Clock, Search, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { ARTICLES_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Bài viết & Kiến thức Vận hành',
  description: 'Thư viện bài viết, hướng dẫn thực hành và phương pháp luận quản lý vận hành, ứng dụng AI và xây dựng hệ thống báo cáo.',
  alternates: {
    canonical: 'https://vanhanhmoi.com/kien-thuc',
  },
};

export default function KnowledgePage() {
  const categories = [
    'Tất cả',
    'AI & Automation',
    'Hệ thống & Dashboard',
    'Quy trình & SOP',
    'Quản trị Ops',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <Badge variant="accent">Thư viện Operations Playbook</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#14202B] font-heading tracking-tight">
          Kiến thức Vận hành & AI thực chiến
        </h1>
        <p className="text-[#435164] text-base sm:text-lg leading-relaxed">
          Tổng hợp bài viết phân tích chuyên sâu, phương pháp luận đóng gói quy trình và các ví dụ ứng dụng AI thực tế giúp nâng cao năng suất hệ thống.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#DCE2E7]">
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                idx === 0
                  ? 'bg-[#235789] text-white shadow-sm'
                  : 'bg-white text-[#435164] border border-[#DCE2E7] hover:bg-[#F7F8F5] hover:text-[#14202B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            className="w-full bg-white border border-[#DCE2E7] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#14202B] placeholder-[#667085] focus:outline-none focus:border-[#2F6FED]"
          />
          <Search className="w-3.5 h-3.5 text-[#667085] absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTICLES_DATA.map((article) => (
          <article
            key={article.slug}
            id={article.slug}
            className="card-surface p-8 flex flex-col justify-between space-y-6 scroll-mt-24"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="badge-mono bg-[#EBF2FE] text-[#235789] border border-[#C5D8F9]">
                  {article.category}
                </span>
                <span className="text-[#667085] flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#14202B] hover:text-[#2F6FED] transition-colors leading-snug">
                <Link href={`#${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-[#435164] text-sm leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F1F4F7] flex items-center justify-between text-xs">
              <span className="text-[#667085] font-mono font-medium">{article.date}</span>
              <button className="text-[#235789] font-semibold flex items-center gap-1 hover:text-[#2F6FED]">
                <span>Đọc bài viết</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Content Publishing Note */}
      <div className="bg-[#F7F8F5] border border-[#DCE2E7] p-6 rounded-2xl text-center max-w-2xl mx-auto space-y-2">
        <h3 className="text-sm font-bold text-[#14202B]">
          Chỉ công bố kiến thức đã được kiểm chứng
        </h3>
        <p className="text-xs text-[#435164]">
          Vận Hành Mới cam kết không xuất bản các bài viết câu view hoặc thông tin lý thuyết suông. Mọi hướng dẫn đều xuất phát từ bài toán thực tế của khối Operations.
        </p>
      </div>
    </div>
  );
}
