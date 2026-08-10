import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Download,
  ChevronRight,
  Activity,
  Clock,
  Send,
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
      <section className="pt-8 sm:pt-16 pb-12 sm:pb-16 border-b border-[#DCE2E7] bg-gradient-to-b from-white to-[#F7F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col (~55%) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-[#235789] text-xs font-semibold">
                <Activity className="w-3.5 h-3.5 text-[#2F6FED] animate-pulse" />
                <span>Hệ thống + AI ứng dụng thực tế cho người làm vận hành</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#14202B] tracking-tight leading-[1.15]">
                Hệ thống hóa vận hành. <br className="hidden sm:inline" />
                <span className="text-[#2F6FED]">Ứng dụng AI đúng chỗ.</span>
              </h1>

              {/* Core Promise */}
              <p className="text-lg sm:text-xl text-[#14202B] font-bold leading-relaxed">
                Giảm việc tay. Nhìn rõ vấn đề. Ra quyết định nhanh hơn.
              </p>

              <p className="text-sm sm:text-base text-[#435164] leading-relaxed max-w-xl">
                Giải pháp đóng gói quy trình, chuẩn hóa dữ liệu và xây dựng trợ lý AI thực chiến dành cho Operations Managers, Team Leaders & SMEs. Không phô trương, không ảo tưởng công nghệ.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/cong-cu"
                  className="inline-flex items-center justify-center gap-2 bg-[#2F6FED] hover:bg-[#1D5BD8] text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-sm"
                >
                  <span>Khám phá công cụ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#lead-magnet"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F8F5] border border-[#DCE2E7] text-[#14202B] font-semibold px-6 py-3.5 rounded-xl text-sm transition-all"
                >
                  <Download className="w-4 h-4 text-[#235789]" />
                  <span>Nhận tài liệu miễn phí</span>
                </Link>
              </div>

              {/* Metrics bar */}
              <div className="pt-6 border-t border-[#DCE2E7] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#435164]">
                <div>
                  <span className="text-[#667085] block text-[10px]">TƯ DUY</span>
                  <span className="font-bold text-[#14202B]">Systems & Data First</span>
                </div>
                <div>
                  <span className="text-[#667085] block text-[10px]">MỤC TIÊU</span>
                  <span className="font-bold text-[#14202B]">Giảm 70% việc tay</span>
                </div>
                <div>
                  <span className="text-[#667085] block text-[10px]">ĐỐI TƯỢNG</span>
                  <span className="font-bold text-[#14202B]">OMs & SME Leaders</span>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14202B]">
            5 Điểm nghẽn khiến khối Vận hành kiệt sức
          </h2>
          <p className="text-[#435164] text-sm">
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
                <div className="w-8 h-8 rounded-lg bg-[#FEF5E7] border border-[#F9E2C1] text-[#C47A16] font-mono text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-[#14202B] text-base">
                  {prob.title}
                </h3>
                <p className="text-[#435164] text-xs sm:text-sm leading-relaxed">
                  {prob.description}
                </p>
              </div>
              <div className="pt-3 text-xs text-[#B5473C] font-semibold border-t border-[#F1F4F7] flex items-center gap-1.5">
                <span>Hệ quả:</span>
                <span className="text-[#435164] font-normal">{prob.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT WE DO (4 PILLARS) */}
      <section className="bg-white border-y border-[#DCE2E7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <Badge variant="accent">Khung giải pháp Vận Hành Mới</Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#14202B]">
              4 Trụ cột nâng tầm hệ thống vận hành
            </h2>
            <p className="text-[#435164] text-sm">
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
                    <span className="font-mono text-3xl font-bold text-[#235789]">
                      {pillar.number}
                    </span>
                    <span className="badge-mono bg-[#F7F8F5] text-[#14202B] border border-[#DCE2E7]">
                      {pillar.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14202B] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-[#435164] text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {pillar.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#435164]">
                        <CheckCircle2 className="w-4 h-4 text-[#167A65] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F1F4F7]">
                  <Link
                    href="/cong-cu"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#235789] hover:text-[#2F6FED] transition-colors"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14202B]">
              Bài viết & Hướng dẫn chuyên sâu
            </h2>
            <p className="text-[#435164] text-sm mt-1">
              Phân tích phương pháp luận, case studies và bài học ứng dụng vận hành.
            </p>
          </div>
          <Link
            href="/kien-thuc"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#235789] hover:text-[#2F6FED] transition-colors"
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
                  <span className="badge-mono bg-[#EBF2FE] text-[#235789] border border-[#C5D8F9]">
                    {article.category}
                  </span>
                  <span className="text-[#667085] flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#14202B] hover:text-[#2F6FED] transition-colors leading-snug">
                  <Link href={`/kien-thuc#${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-[#435164] text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="pt-3 border-t border-[#F1F4F7] flex items-center justify-between text-xs">
                <span className="font-mono text-[#667085] font-medium">{article.date}</span>
                <Link
                  href={`/kien-thuc#${article.slug}`}
                  className="text-[#235789] font-semibold flex items-center gap-1 hover:text-[#2F6FED]"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14202B]">
              Công cụ, Templates & Prompt Kits
            </h2>
            <p className="text-[#435164] text-sm mt-1">
              Đăng ký nhận tài liệu và áp dụng vào công việc quản lý vận hành.
            </p>
          </div>
          <Link
            href="/cong-cu"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#235789] hover:text-[#2F6FED] transition-colors"
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
                  <span className="text-[11px] text-[#667085] font-mono font-medium">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#14202B]">
                  {tool.title}
                </h3>
                <p className="text-[#435164] text-xs leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F1F4F7]">
                <Link
                  href="/cong-cu"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#235789] hover:bg-[#1B456D] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Đăng ký nhận tài liệu</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROOF / CASE STUDY PLACEHOLDER */}
      <section className="bg-white border-y border-[#DCE2E7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <Badge variant="default">Thực chiến từ vận hành</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14202B]">
              Minh chứng thực tế & Bài học triển khai
            </h2>
            <p className="text-[#435164] text-sm">
              Chúng tôi tôn trọng sự minh bạch. Mọi minh họa dưới đây xuất phát từ góc nhìn đóng gói phương pháp luận thực chiến.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROOF_CASES.map((c) => (
              <div
                key={c.id}
                className="bg-[#F7F8F5] border border-[#DCE2E7] p-6 rounded-2xl space-y-3"
              >
                <span className="badge-mono bg-[#EBF2FE] text-[#235789] border border-[#C5D8F9]">
                  {c.tag}
                </span>
                <h3 className="font-bold text-[#14202B] text-sm">
                  {c.title}
                </h3>
                <p className="text-[#435164] text-xs leading-relaxed">
                  {c.summary}
                </p>
                <div className="pt-2 border-t border-[#DCE2E7] text-xs text-[#235789] font-semibold">
                  Kết quả: {c.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LEAD MAGNET SECTION */}
      <section id="lead-magnet" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="relative bg-[#14202B] text-white rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#233547] border border-[#344C64] text-[#2F6FED] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lead Magnet đặc quyền Operations V1</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading tracking-tight text-white">
              Bộ AI Prompt dành riêng cho Operation Manager
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Đăng ký nhận bộ 30+ Prompts đóng gói sẵn giúp tự động phân tích điểm nghẽn, tổng hợp báo cáo và lên kế hoạch xử lý sự cố trong vài phút.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2F6FED] shrink-0" />
                <span>Format câu hỏi chuẩn cho ChatGPT / Claude</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2F6FED] shrink-0" />
                <span>Không cần kiến thức lập trình hay IT</span>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-80 bg-white p-6 rounded-2xl text-[#14202B] space-y-4 shadow-inner">
            <h3 className="text-sm font-bold text-[#14202B]">
              Đăng ký nhận tài liệu qua Email
            </h3>
            <LeadCaptureForm
              source="homepage_bottom_lead_magnet"
              buttonText="Đăng ký ngay"
              compact={true}
            />
            <p className="text-[11px] text-[#667085] text-center">
              Nhận thông báo khi tài liệu phát hành. Không spam.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
