import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Clock, Search, BookOpen, ChevronRight, Tag } from 'lucide-react';
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
        <Badge variant="accent">Thư viện Tri thức Operations</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 font-heading tracking-tight">
          Kiến thức Vận hành & AI thực chiến
        </h1>
        <p className="text-slate-400 text-base leading-relaxed">
          Tổng hợp bài viết phân tích chuyên sâu, phương pháp luận đóng gói quy trình và các ví dụ ứng dụng AI thực tế giúp nâng cao năng suất hệ thống.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-850">
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                idx === 0
                  ? 'bg-teal-950 text-teal-300 border border-teal-800'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
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
            className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500"
          />
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTICLES_DATA.map((article) => (
          <article
            key={article.slug}
            id={article.slug}
            className="glass-card rounded-2xl p-8 flex flex-col justify-between space-y-6 scroll-mt-24"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-teal-400 font-medium px-2.5 py-1 rounded bg-teal-950/80 border border-teal-900">
                  {article.category}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-100 hover:text-teal-300 transition-colors leading-snug">
                <Link href={`#${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">{article.date}</span>
              <button className="text-teal-400 font-semibold flex items-center gap-1 hover:text-teal-300">
                <span>Đọc bài viết</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Content Publishing Note */}
      <div className="bg-slate-900/50 border border-slate-850 p-6 rounded-xl text-center max-w-2xl mx-auto space-y-2">
        <h3 className="text-sm font-bold text-slate-200">
          Chỉ công bố kiến thức đã được kiểm chứng
        </h3>
        <p className="text-xs text-slate-400">
          Vận Hành Mới cam kết không xuất bản các bài viết câu view hoặc thông tin lý thuyết suông. Mọi hướng dẫn đều xuất phát từ bài toán thực tế của khối Operations.
        </p>
      </div>
    </div>
  );
}
