import React from 'react';
import { Metadata } from 'next';
import { Target, Layers, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/Badge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Giới thiệu & Triết lý Vận hành',
  description: 'Triết lý xây dựng thương hiệu Vận Hành Mới: Hệ thống hóa, dữ liệu minh bạch và AI thực chiến cho Operations Managers thế hệ mới.',
  alternates: {
    canonical: 'https://vanhanhmoi.com/gioi-thieu',
  },
};

export default function AboutPage() {
  const principles = [
    {
      icon: <Layers className="w-5 h-5 text-[#235789]" />,
      title: '1. Hệ thống trước, Công nghệ sau',
      desc: 'Công nghệ không sửa được quy trình hỏng. Chúng tôi ưu tiên đóng gói cấu trúc dữ liệu và chuẩn hóa SOP trước khi đưa AI vào vận hành.',
    },
    {
      icon: <Target className="w-5 h-5 text-[#235789]" />,
      title: '2. Nhìn rõ số liệu real-time',
      desc: 'Giảm thiểu báo cáo bằng lời hứa. Mọi quyết định vận hành cần dựa trên bảng theo dõi chỉ số KPI minh bạch và cập nhật liên tục.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#235789]" />,
      title: '3. Tự động hóa tác vụ lặp lại',
      desc: 'Giải phóng con người khỏi công việc tay chân lặp lại. Dành thời gian của quản lý cho tư duy chiến lược và xử lý bài toán phát sinh.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#235789]" />,
      title: '4. AI là Trợ lý thực chiến',
      desc: 'Không theo đuổi cơn sốt AI viễn tưởng. AI tại Vận Hành Mới được xem như trợ lý mẫn cán hỗ trợ trích xuất, phân tích và viết báo cáo.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Hero Intro */}
      <div className="max-w-3xl space-y-6">
        <Badge variant="accent">Về Vận Hành Mới</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#14202B] font-heading tracking-tight leading-tight">
          Quản trị Vận hành đang thay đổi. <br />
          <span className="text-[#2F6FED]">
            Thế hệ Operations Manager tiếp theo cần gì?
          </span>
        </h1>
        <p className="text-[#435164] text-base sm:text-lg leading-relaxed">
          Năng lực của người làm vận hành hiện đại không còn đo đếm bằng số giờ làm việc tay hay số lượng báo cáo viết bằng Excel. Đó là khả năng thiết kế hệ thống, kiểm soát dữ liệu và làm chủ công cụ AI.
        </p>
      </div>

      {/* Brand Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-[#DCE2E7] p-8 sm:p-12 rounded-3xl shadow-sm">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#14202B]">
            Định vị cốt lõi
          </h2>
          <blockquote className="text-lg font-bold text-[#235789] border-l-4 border-[#2F6FED] pl-4 py-1 italic">
            "Vận Hành Mới = Hệ thống + AI ứng dụng thực tế cho người làm vận hành."
          </blockquote>
          <p className="text-[#435164] text-sm leading-relaxed">
            Chúng tôi tin rằng mọi doanh nghiệp SME hay quản lý phòng ban đều xứng đáng có được hệ thống vận hành trơn tru, không phụ thuộc vào trí nhớ cá nhân hay các báo cáo thủ công ngốn thời gian.
          </p>
        </div>

        <div className="bg-[#14202B] p-6 rounded-2xl border border-[#233547] space-y-3 font-mono text-xs text-[#F7F8F5]">
          <div className="text-[#2F6FED] font-bold">// Khung năng lực Operations V1</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
            <span>01. Operational Knowledge (Tri thức vận hành)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
            <span>02. Data Driven (Kiểm soát số liệu)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
            <span>03. Systems Thinking (Tư duy hệ thống)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" />
            <span>04. Automation & AI (Tự động hóa & Trợ lý AI)</span>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-[#14202B]">
            4 Nguyên tắc làm việc tại Vận Hành Mới
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, i) => (
            <div key={i} className="card-surface p-6 space-y-3">
              <div className="p-2.5 w-fit rounded-xl bg-[#EBF2FE] border border-[#C5D8F9]">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#14202B]">
                {item.title}
              </h3>
              <p className="text-[#435164] text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#14202B] border border-[#233547] p-8 rounded-3xl text-center space-y-4 text-white">
        <h3 className="text-xl font-bold font-heading">
          Sẵn sàng trải nghiệm phương pháp vận hành mới?
        </h3>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          Khám phá bộ công cụ, bài viết hướng dẫn và đăng ký nhận bộ AI Prompt dành riêng cho người làm vận hành.
        </p>
        <div>
          <Link
            href="/cong-cu"
            className="inline-flex items-center gap-2 bg-[#2F6FED] hover:bg-[#1D5BD8] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            <span>Khám phá kho công cụ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
