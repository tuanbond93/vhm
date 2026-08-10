import React from 'react';
import { Metadata } from 'next';
import { Badge } from '@/components/Badge';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Liên hệ & Đăng ký Bản tin',
  description: 'Kết nối với Vận Hành Mới: Gửi thắc mắc về phương pháp chuẩn hóa quy trình, thiết kế dashboard hoặc ứng dụng AI vận hành.',
  alternates: {
    canonical: 'https://vanhanhmoi.com/lien-he',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <Badge variant="accent">Kênh Thông tin & Liên hệ</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 font-heading tracking-tight">
          Kết nối với Vận Hành Mới
        </h1>
        <p className="text-slate-400 text-base leading-relaxed">
          Bạn có thắc mắc về phương pháp đóng gói quy trình, thiết kế dashboard hoặc ứng dụng AI vào doanh nghiệp? Hãy gửi lời nhắn cho chúng tôi.
        </p>
      </div>

      {/* Interactive Contact Component */}
      <ContactSection />
    </div>
  );
}
