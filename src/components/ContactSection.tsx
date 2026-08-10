'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Globe, Loader2 } from 'lucide-react';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { SITE_METADATA } from '@/lib/data';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
    }, 700);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Contact Form */}
      <div className="lg:col-span-7 card-surface p-8 space-y-6">
        <h2 className="text-xl font-bold text-[#14202B] flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#235789]" />
          <span>Gửi tin nhắn phản hồi / Yêu cầu</span>
        </h2>

        {formStatus === 'success' ? (
          <div className="bg-[#E8F5F2] border border-[#BDE3DA] p-6 rounded-2xl space-y-3 text-center">
            <CheckCircle2 className="w-10 h-10 text-[#167A65] mx-auto" />
            <h3 className="text-lg font-bold text-[#14202B]">
              Đã gửi lời nhắn thành công!
            </h3>
            <p className="text-xs text-[#435164]">
              Cảm ơn bạn đã liên hệ với Vận Hành Mới. Chúng tôi sẽ phản hồi lại thông tin trong thời gian sớm nhất.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#14202B] mb-1">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="w-full bg-white border border-[#DCE2E7] rounded-xl px-3.5 py-2.5 text-xs text-[#14202B] outline-none focus:border-[#2F6FED]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#14202B] mb-1">
                  Email làm việc *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-white border border-[#DCE2E7] rounded-xl px-3.5 py-2.5 text-xs text-[#14202B] outline-none focus:border-[#2F6FED]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#14202B] mb-1">
                Vị trí / Vai trò trong doanh nghiệp
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="Ví dụ: Operations Manager / Team Lead / SME Owner"
                className="w-full bg-white border border-[#DCE2E7] rounded-xl px-3.5 py-2.5 text-xs text-[#14202B] outline-none focus:border-[#2F6FED]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#14202B] mb-1">
                Nội dung lời nhắn *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mô tả bài toán vận hành hoặc thắc mắc của bạn..."
                className="w-full bg-white border border-[#DCE2E7] rounded-xl px-3.5 py-2.5 text-xs text-[#14202B] outline-none focus:border-[#2F6FED]"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#2F6FED] hover:bg-[#1D5BD8] text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all cursor-pointer shadow-sm"
            >
              {formStatus === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang xử lý...</span>
                </>
              ) : (
                <>
                  <span>Gửi tin nhắn</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Sidebar Info & Newsletter */}
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

          <p className="text-xs text-[#435164] leading-relaxed">
            Trang web đang ở giai đoạn V1 thử nghiệm nội bộ. Mọi kênh đăng ký newsletter và tài liệu được kết nối trực tiếp qua mô-đun dữ liệu an toàn.
          </p>
        </div>

        {/* Newsletter Box */}
        <div className="bg-[#14202B] text-white p-6 rounded-3xl space-y-4 shadow-lg">
          <h3 className="text-base font-bold flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#2F6FED]" />
            <span>Đăng ký bản tin Vận Hành Mới</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Nhận bài viết mới hàng tuần về tối ưu vận hành, mẫu Prompt AI và quy trình tự động hóa thực chiến.
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
