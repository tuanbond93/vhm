import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  FileSpreadsheet,
  Zap,
  BarChart3,
  Bot,
  ShieldCheck,
  Download,
  BookOpen,
  LayoutDashboard,
  Clock,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { Badge } from '@/components/Badge';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import {
  PROBLEMS_DATA,
  PILLARS_DATA,
  ARTICLES_DATA,
  TOOLS_DATA,
  PROOF_CASES,
} from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 sm:pt-24 pb-12 overflow-hidden border-b border-slate-850">
        {/* Subtle background blur spot */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-teal-900/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-teal-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>Hệ thống + AI ứng dụng thực tế cho người làm vận hành</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-100 tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Vận hành tốt hơn với <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-teal-400 to-accent-500">
              Hệ thống & AI thực chiến
            </span>
          </h1>

          {/* Supporting Core Promise */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Giảm việc tay. Nhìn rõ vận hành. Ra quyết định nhanh hơn.
          </p>

          <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            Không ảo tưởng công nghệ. Giải pháp đóng gói quy trình, chuẩn hóa dữ liệu và ứng dụng AI thực tế cho Operations Managers & SMEs.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cong-cu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-accent-600 hover:from-teal-400 hover:to-accent-500 text-slate-950 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-teal-950/40 hover:shadow-teal-900/60"
            >
              <span>Khám phá tài nguyên</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#lead-magnet"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>Nhận tài liệu miễn phí</span>
            </Link>
          </div>

          {/* Hero Metrics Bar */}
          <div className="mt-16 pt-10 border-t border-slate-900/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
            <div className="space-y-1">
              <span className="text-xs text-slate-400 block font-mono">ĐỊNH HƯỚNG</span>
              <span className="text-sm font-semibold text-slate-200">System + AI First</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 block font-mono">MỤC TIÊU</span>
              <span className="text-sm font-semibold text-slate-200">Giảm 70% việc tay</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 block font-mono">ĐỐI TƯỢNG</span>
              <span className="text-sm font-semibold text-slate-200">OMs, Leaders & SMEs</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 block font-mono">CAM KẾT</span>
              <span className="text-sm font-semibold text-slate-200">Thực chiến, Không Hype</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="warning" className="mb-3">Thực trạng vận hành phổ biến</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Có phải đội ngũ vận hành của bạn đang vấp phải những khó khăn này?
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Công việc chồng chất nhưng hiệu quả chưa tương xứng vì thiếu hệ thống và chưa tối ưu quy trình.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS_DATA.map((prob, idx) => (
            <div
              key={prob.id}
              className="bg-slate-900/60 border border-slate-850 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-900/60 text-rose-400 font-mono text-xs font-bold flex items-center justify-center">
                0{idx + 1}
              </div>
              <h3 className="font-semibold text-slate-200 text-base">
                {prob.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {prob.description}
              </p>
              <div className="pt-2 text-xs text-rose-400/90 font-medium flex items-center gap-1.5 border-t border-slate-850">
                <span>Hệ quả:</span>
                <span className="text-slate-300">{prob.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT VẬN HÀNH MỚI DOES (3 PILLARS) */}
      <section className="bg-slate-900/40 border-y border-slate-850 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="accent" className="mb-3">Trụ cột giải pháp</Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100">
              Vận Hành Mới mang lại điều gì cho bạn?
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Sự kết hợp đồng bộ giữa cấu trúc hệ thống quản trị bài bản và năng lực tự động hóa từ AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PILLARS_DATA.map((pillar) => (
              <div
                key={pillar.number}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-bold text-teal-400">
                      {pillar.number}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {pillar.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-teal-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {pillar.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    href="/cong-cu"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
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

      {/* 4. KNOWLEDGE SECTION PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <Badge className="mb-2">Kiến thức thực chiến</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Bài viết & Hướng dẫn chuyên sâu
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Phân tích thực tế, case studies và framework ứng dụng vận hành.
            </p>
          </div>
          <Link
            href="/kien-thuc"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            <span>Tất cả bài viết</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.slug}
              className="glass-card rounded-xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="text-teal-400 font-medium px-2 py-0.5 rounded bg-teal-950/60 border border-teal-900">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 hover:text-teal-300 transition-colors leading-snug">
                  <Link href={`/kien-thuc#${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">{article.date}</span>
                <Link
                  href={`/kien-thuc#${article.slug}`}
                  className="text-slate-300 hover:text-teal-300 flex items-center gap-1"
                >
                  <span>Đọc tiếp</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. TOOLS & TEMPLATES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <Badge variant="accent" className="mb-2">Thư viện Tài nguyên</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Công cụ, Templates & Prompt Kits
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Được thiết kế sẵn để tải về và áp dụng trực tiếp vào công việc hàng ngày.
            </p>
          </div>
          <Link
            href="/cong-cu"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            <span>Xem kho công cụ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOOLS_DATA.slice(0, 3).map((tool) => (
            <div
              key={tool.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={tool.badge === 'Miễn phí' ? 'accent' : 'outline'}>
                    {tool.badge}
                  </Badge>
                  {tool.downloadsCount && (
                    <span className="text-[11px] text-slate-400 font-mono">
                      {tool.downloadsCount}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-100">
                  {tool.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-850">
                <Link
                  href="/cong-cu"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium py-2 px-3 rounded-lg transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-teal-400" />
                  <span>Tải về / Xem chi tiết</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROOF / CASE STUDY PLACEHOLDER */}
      <section className="bg-slate-900/60 border-y border-slate-850 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="default" className="mb-2">Thực chiến từ vận hành</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Minh chứng thực tế & Bài học triển khai
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Chúng tôi tôn trọng sự minh bạch. Các case study dưới đây minh họa góc nhìn giải quyết bài toán vận hành thực tế đã được đóng gói thành phương pháp luận.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROOF_CASES.map((c) => (
              <div
                key={c.id}
                className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-3"
              >
                <span className="text-[11px] font-mono text-teal-400 bg-teal-950/80 border border-teal-900 px-2 py-0.5 rounded">
                  {c.tag}
                </span>
                <h3 className="font-bold text-slate-200 text-sm">
                  {c.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {c.summary}
                </p>
                <div className="pt-2 border-t border-slate-900 text-xs text-teal-300 font-medium">
                  Result: {c.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LEAD MAGNET & NEWSLETTER CTA SECTION */}
      <section id="lead-magnet" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-teal-900/60 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-800 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Lead Magnet đặc quyền Operations V1</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 font-heading tracking-tight">
              Bộ AI Prompt dành riêng cho Operation Manager
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Tải miễn phí bộ 30+ Prompts đóng gói sẵn giúp tự động phân tích điểm nghẽn, tổng hợp báo cáo và lên kế hoạch xử lý sự cố trong vài phút.
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Format câu hỏi chuẩn cho ChatGPT / Claude</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Không cần kiến thức lập trình hay IT</span>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-80 bg-slate-950 border border-slate-800 p-6 rounded-2xl shadow-inner space-y-4">
            <h3 className="text-sm font-bold text-slate-200">
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
