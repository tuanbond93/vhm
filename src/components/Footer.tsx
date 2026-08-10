import React from 'react';
import Link from 'next/link';
import { Cpu, ShieldCheck } from 'lucide-react';
import { SITE_METADATA } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-850 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-teal-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-slate-100 text-base tracking-tight">
                VẬN HÀNH MỚI
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Hệ thống + AI ứng dụng thực tế cho người làm vận hành. Giảm việc tay, nhìn rõ vận hành, ra quyết định nhanh hơn.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Chuyên môn thực chiến cho Operations Managers & SMEs</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-slate-200 text-xs uppercase tracking-wider">
              Nội dung & Tài nguyên
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/kien-thuc" className="hover:text-teal-300 transition-colors">
                  Bài viết Kiến thức
                </Link>
              </li>
              <li>
                <Link href="/cong-cu" className="hover:text-teal-300 transition-colors">
                  Tools & AI Prompt Kit
                </Link>
              </li>
              <li>
                <Link href="/cong-cu#dashboards" className="hover:text-teal-300 transition-colors">
                  Operational Dashboards
                </Link>
              </li>
              <li>
                <Link href="/kien-thuc?cat=SOP" className="hover:text-teal-300 transition-colors">
                  SOP & Chuẩn hóa
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand Info */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-slate-200 text-xs uppercase tracking-wider">
              Vận Hành Mới
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/gioi-thieu" className="hover:text-teal-300 transition-colors">
                  Triết lý Vận Hành
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-teal-300 transition-colors">
                  Gửi yêu cầu / Liên hệ
                </Link>
              </li>
              <li>
                <span className="text-slate-400 font-mono text-[11px] block mt-1">
                  Domain: {SITE_METADATA.domain}
                </span>
              </li>
            </ul>
          </div>

          {/* Positioning Note */}
          <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-850">
            <h4 className="font-heading font-semibold text-slate-200 text-xs uppercase tracking-wider text-teal-400">
              Định hướng V1
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Trang web tập trung vào kiến thức, tài nguyên và công cụ thực tế. Không ảo tưởng công nghệ, không phô trương phô phang.
            </p>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Vận Hành Mới. Tất cả quyền được bảo lưu.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Việt Nam</span>
            <span>•</span>
            <span>Operations-first</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
