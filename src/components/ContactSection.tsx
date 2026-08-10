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
      <div className="lg:col-span-7 glass-card p-8 rounded-3xl space-y-6">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-teal-400" />
          <span>Gửi tin nhắn phản hồi / Yêu cầu</span>
        </h2>

        {formStatus === 'success' ? (
          <div className="bg-teal-950/60 border border-teal-800 p-6 rounded-2xl space-y-3 text-center">
            <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-100">
              Đã gửi lời nhắn thành công!
            </h3>
            <p className="text-xs text-slate-300">
              Cảm ơn bạn đã liên hệ với Vận Hành Mới. Chúng tôi sẽ phản hồi lại thông tin trong thời gian sớm nhất.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 outline-none focus:border-teal-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email làm việc *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Vị trí / Vai trò trong doanh nghiệp
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="Ví dụ: Operations Manager / Team Lead / SME Owner"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Nội dung lời nhắn *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mô tả bài toán vận hành hoặc thắc mắc của bạn..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 outline-none focus:border-teal-500"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-accent-600 hover:from-teal-400 hover:to-accent-500 text-slate-950 font-semibold py-3 px-6 rounded-xl text-sm transition-all cursor-pointer"
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
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
            <Globe className="w-4 h-4 text-teal-400" />
            <span>Kênh chính thức</span>
          </h3>

          <div className="space-y-3 text-xs text-slate-400 font-mono">
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-850">
              <span className="text-slate-500 block">Primary Domain:</span>
              <span className="text-slate-200 font-bold">{SITE_METADATA.domain}</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-850">
              <span className="text-slate-500 block">Secondary Domain:</span>
              <span className="text-slate-200 font-bold">{SITE_METADATA.secondaryDomain}</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Trang web đang ở giai đoạn V1 thử nghiệm nội bộ. Mọi kênh đăng ký newsletter và tài liệu được kết nối trực tiếp qua mô-đun dữ liệu an toàn.
          </p>
        </div>

        {/* Newsletter Box */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-teal-900/60 p-6 rounded-2xl space-y-4">
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <Mail className="w-4 h-4 text-teal-400" />
            <span>Đăng ký bản tin Vận Hành Mới</span>
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
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
