import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
        <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-800/80 text-amber-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
            ERROR 404 — KHÔNG TÌM THẤY TRANG
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 font-heading">
            Đường dẫn không tồn tại
          </h1>
          <p className="text-slate-400 text-xs leading-relaxed">
            Trang bạn đang tìm kiếm có thể đã được chuyển dời hoặc chưa được khởi tạo trên hệ thống Vận Hành Mới.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-accent-600 text-slate-950 font-semibold px-5 py-2.5 rounded-xl text-xs transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Về Trang chủ</span>
          </Link>
          <Link
            href="/cong-cu"
            className="inline-flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 text-slate-200 font-medium px-5 py-2.5 rounded-xl text-xs transition-all hover:bg-slate-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Xem Kho công cụ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
