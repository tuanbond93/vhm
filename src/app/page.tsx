import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Download,
  ChevronRight,
  ShieldCheck,
  Activity,
  Layers,
  BarChart3,
  Clock,
} from 'lucide-react';
import { Badge } from '@/components/Badge';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { OperationsControlTowerDemo } from '@/components/OperationsControlTowerDemo';
import {
  PROBLEMS_DATA,
  PILLARS_DATA,
  ARTICLES_DATA,
  TOOLS_DATA,
  PROOF_CASES,
} from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-16 pb-12 sm:pb-16 border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col (~55%) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                <Activity className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span>Hệ thống + AI ứng dụng thực tế cho người làm vận hành</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-[1.15]">
                Hệ thống hóa vận hành. <br className="hidden sm:inline" />
                <span className="text-blue-600">Ứng dụng AI đúng chỗ.</span>
              </h1>

              {/* Core Promise */}
              <p className="text-lg sm:text-xl text-slate-800 font-semibold leading-relaxed">
                Giảm việc tay. Nhìn rõ vấn đề. Ra quyết định nhanh hơn.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Giải pháp đóng gói quy trình, chuẩn hóa dữ liệu và xây dựng trợ lý AI thực chiến dành cho Operations Managers, Team Leaders & SMEs. Không phô trương, không ảo tưởng công nghệ.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/cong-cu"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-sm hover:shadow"
                >
                  <span>Khám phá công cụ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#lead-magnet"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold px-6 py-3.5 rounded-xl text-sm transition-all"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>Nhận tài liệu miễn phí</span>
                </Link>
              </div>

              {/* Metrics bar */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-600">
                <div>
                  <span className="text-slate-400 block text-[10px]">TƯ DUY</span>
                  <span className="font-bold text-slate-800">Systems & Data First</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">MỤC TIÊU</span>
                  <span className="font-bold text-slate-800">Giảm 70% việc tay</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">ĐỐI TƯỢNG</span>
                  <span className="font-bold text-slate-800">OMs & SME Leaders</span>
                </div>
              </div>
            </div>

            {/* Right Col (~45% - Operations Control Tower Demo Visual) */}
            <div className="lg:col-span-5 w-full">
              <OperationsControlTowerDemo />
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-2">
          <Badge variant="warning">Thực trạng vận hành phổ biến</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            5 Điểm nghẽn khiến khối Vận hành kiệt sức
          </h2>
          <p className="text-slate-600 text-sm">
            Công việc ngốn hàng giờ mỗi ngày nhưng hiệu quả không như kỳ vọng vì thiếu hệ thống chuẩn hóa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS_DATA.map((prob, idx) => (
            <div
              key={prob.id}
              className="card-surface p-6 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-mono text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {prob.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {prob.description}
                </p>
              </div>
              <div className="pt-3 text-xs text-rose-700 font-semibold border-t border-slate-100 flex items-center gap-1.5">
                <span>Hệ quả:</span>
                <span className="text-slate-700 font-normal">{prob.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT WE DO (4 PILLARS) */}
      <section className="bg-white border-y border-slate-200/90 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <Badge variant="accent">Khung giải pháp Vận Hành Mới</Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              4 Trụ cột nâng tầm hệ thống vận hành
            </h2>
            <p className="text-slate-600 text-sm">
              Sự kết hợp đồng bộ giữa cấu trúc chuẩn hóa, dữ liệu minh bạch và trợ lý AI thực chiến.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PILLARS_DATA.map((pillar) => (
              <div
                key={pillar.number}
                className="card-surface p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-bold text-blue-600">
                      {pillar.number}
                    </span>
                    <span className="badge-mono bg-slate-100 text-slate-700 border border-slate-200">
                      {pillar.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {pillar.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/cong-cu"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>Xem công cụ liên quan</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KNOWLEDGE PLAYBOOK SECTION PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <Badge variant="default" className="mb-2">Operations Playbook</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Bài viết & Hướng dẫn chuyên sâu
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Phân tích phương pháp luận, case studies và bài học ứng dụng vận hành.
            </p>
          </div>
          <Link
            href="/kien-thuc"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Tất cả bài viết</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.slug}
              className="card-surface p-6 sm:p-8 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="badge-mono bg-blue-50 text-blue-700 border border-blue-200">
                    {article.category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                  <Link href={`/kien-thuc#${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500">{article.date}</span>
                <Link
                  href={`/kien-thuc#${article.slug}`}
                  className="text-blue-600 font-semibold flex items-center gap-1 hover:text-blue-700"
                >
                  <span>Đọc bài viết</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. TOOLS CATALOG PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <Badge variant="accent" className="mb-2">Thư viện Tài nguyên</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Công cụ, Templates & Prompt Kits
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Tải về và áp dụng trực tiếp vào công việc quản lý vận hành hàng ngày.
            </p>
          </div>
          <Link
            href="/cong-cu"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Xem kho công cụ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOOLS_DATA.slice(0, 3).map((tool) => (
            <div
              key={tool.id}
              className="card-surface p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={tool.badge === 'Miễn phí' ? 'accent' : 'outline'}>
                    {tool.badge}
                  </Badge>
                  {tool.downloadsCount && (
                    <span className="text-[11px] text-slate-500 font-mono">
                      {tool.downloadsCount}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {tool.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/cong-cu"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  <span>Tải về / Xem chi tiết</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROOF / CASE STUDY PLACEHOLDER */}
      <section className="bg-white border-y border-slate-200/90 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <Badge variant="default">Thực chiến từ vận hành</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Minh chứng thực tế & Bài học triển khai
            </h2>
            <p className="text-slate-600 text-sm">
              Chúng tôi tôn trọng sự minh bạch. Mọi minh họa dưới đây xuất phát từ góc nhìn đóng gói phương pháp luận thực chiến.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROOF_CASES.map((c) => (
              <div
                key={c.id}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3"
              >
                <span className="badge-mono bg-blue-50 text-blue-700 border border-blue-200">
                  {c.tag}
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  {c.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {c.summary}
                </p>
                <div className="pt-2 border-t border-slate-200 text-xs text-blue-700 font-semibold">
                  Kết quả: {c.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LEAD MAGNET SECTION */}
      <section id="lead-magnet" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lead Magnet đặc quyền Operations V1</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading tracking-tight text-white">
              Bộ AI Prompt dành riêng cho Operation Manager
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Tải miễn phí bộ 30+ Prompts đóng gói sẵn giúp tự động phân tích điểm nghẽn, tổng hợp báo cáo và lên kế hoạch xử lý sự cố trong vài phút.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Format câu hỏi chuẩn cho ChatGPT / Claude</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Không cần kiến thức lập trình hay IT</span>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-80 bg-white p-6 rounded-2xl text-slate-900 space-y-4 shadow-inner">
            <h3 className="text-sm font-bold text-slate-900">
              Đăng ký nhận tài liệu qua Email
            </h3>
            <LeadCaptureForm
              source="homepage_bottom_lead_magnet"
              buttonText="Nhận ngay"
              compact={true}
            />
            <p className="text-[11px] text-slate-500 text-center">
              Nhận link tải file trực tiếp. Không spam quảng cáo.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
