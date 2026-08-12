'use client';

import React from 'react';
import { ArrowRight, Globe, Mail, MessageSquare } from 'lucide-react';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { Analytics } from '@/lib/analytics';
import { SITE_METADATA } from '@/lib/data';

export function ContactSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-7 card-surface p-8 space-y-6">
        <h2 className="text-xl font-bold text-[#14202B] flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#235789]" />
          <span>Kênh phản hồi trực tiếp</span>
        </h2>

        <p className="text-sm text-[#435164] leading-relaxed">
          Biểu mẫu liên hệ trực tiếp chưa được mở trong phiên bản hiện tại. Để nhận tài liệu và các cập nhật mới từ Vận Hành Mới, hãy dùng biểu mẫu đăng ký bên cạnh.
        </p>

        <a
          href="#newsletter-signup"
          onClick={() =>
            Analytics.ctaClick('contact_to_newsletter', '/lien-he', 'contact_primary', '#newsletter-signup')
          }
          className="inline-flex items-center justify-center gap-2 bg-[#2F6FED] hover:bg-[#1D5BD8] text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors"
        >
          <span>Đăng ký nhận tài nguyên</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <p className="text-xs text-[#667085] leading-relaxed">
          Chúng tôi chỉ sử dụng email để gửi tài nguyên bạn yêu cầu và các cập nhật khi bạn đồng ý đăng ký.
        </p>
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white border border-[#DCE2E7] p-6 rounded-3xl space-y-4 shadow-sm">
          <h3 className="text-base font-bold text-[#14202B] flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#235789]" />
            <span>Kênh chính thức</span>
          </h3>

          <div className="space-y-3 text-xs text-[#435164] font-mono">
            <div className="p-3 bg-[#F7F8F5] rounded-xl border border-[#DCE2E7]">
              <span className="text-[#667085] block">Primary Domain:</span>
              <span className="text-[#14202B] font-bold">{SITE_METADATA.domain}</span>
            </div>
            <div className="p-3 bg-[#F7F8F5] rounded-xl border border-[#DCE2E7]">
              <span className="text-[#667085] block">Secondary Domain:</span>
              <span className="text-[#14202B] font-bold">{SITE_METADATA.secondaryDomain}</span>
            </div>
          </div>
        </div>

        <div id="newsletter-signup" className="bg-[#14202B] text-white p-6 rounded-3xl space-y-4 shadow-lg scroll-mt-24">
          <h3 className="text-base font-bold flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#2F6FED]" />
            <span>Đăng ký bản tin Vận Hành Mới</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Nhận bài viết mới về tối ưu vận hành, mẫu Prompt AI và quy trình tự động hóa thực chiến.
          </p>
          <LeadCaptureForm
            source="contact_page_newsletter"
            buttonText="Đăng ký bản tin"
            compact={true}
          />
        </div>
      </div>
    </div>
  );
}
