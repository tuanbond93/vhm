import React from 'react';
import { Metadata } from 'next';
import { Badge } from '@/components/Badge';
import { ContactSection } from '@/components/ContactSection';

const description = 'Kết nối với Vận Hành Mới và đăng ký nhận tài nguyên về chuẩn hóa quy trình, dashboard và AI ứng dụng trong vận hành.';

export const metadata: Metadata = {
  title: 'Liên hệ & Đăng ký Bản tin',
  description,
  alternates: {
    canonical: 'https://vanhanhmoi.com/lien-he',
  },
  openGraph: {
    title: 'Liên hệ & Đăng ký Bản tin',
    description,
    url: 'https://vanhanhmoi.com/lien-he',
    siteName: 'Vận Hành Mới',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Liên hệ & Đăng ký Bản tin',
    description,
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      <div className="max-w-3xl space-y-4">
        <Badge variant="accent">Kênh Thông tin & Liên hệ</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#14202B] font-heading tracking-tight">
          Kết nối với Vận Hành Mới
        </h1>
        <p className="text-[#435164] text-base sm:text-lg leading-relaxed">
          Đăng ký để nhận tài nguyên về đóng gói quy trình, thiết kế dashboard và ứng dụng AI vào vận hành doanh nghiệp.
        </p>
      </div>

      <ContactSection />
    </div>
  );
}
