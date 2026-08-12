import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { SLAEarlyWarningControlTower } from '@/components/SLAEarlyWarningControlTower';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'SLA Early Warning Control Tower - Product Proof #006 | Vận Hành Mới',
  description: 'Trải nghiệm tương tác hệ thống dự báo sớm rủi ro trễ đơn hàng (SLA Early Warning) bằng AI kết hợp can thiệp điều hành.',
};

export default function SLAEarlyWarningProofPage() {
  return (
    <div className="min-h-screen bg-[#F7F8F5] pb-20">
      {/* Navigation Breadcrumb */}
      <div className="border-b border-[#DCE2E7] bg-white py-3.5">
        <div className="container-custom max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4">
          <Link
            href="/radar/ai-canh-bao-som-don-hang-tre-kho-hang"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#235789] hover:text-[#2F6FED] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại Radar #006</span>
          </Link>
          <div className="font-mono text-xs font-medium text-[#667085]">
            PRODUCT PROOF · INTERACTIVE DEMO
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-[#DCE2E7] py-12 sm:py-16">
        <div className="container-custom max-w-5xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-xs font-mono font-bold text-[#235789]">
            <Cpu className="w-4 h-4 text-[#2F6FED]" />
            <span>PRODUCT PROOF #006</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight leading-tight max-w-3xl">
            SLA Early Warning Control Tower
          </h1>
          <p className="text-base sm:text-lg text-[#435164] leading-relaxed max-w-3xl">
            Thay vì đợi đơn hàng quá hạn (hiển thị màu đỏ trên Dashboard), hệ thống mô phỏng cách AI đánh giá rủi ro theo thời gian thực và đẩy cảnh báo ưu tiên. <strong>Thử nghiệm tương tác bằng cách click "Can thiệp" vào đơn hàng có rủi ro cao.</strong>
          </p>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="container-custom max-w-5xl py-12 space-y-8">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#167A65]" />
          <span>LIVE INTERACTIVE PROTOTYPE</span>
        </div>
        
        {/* The Control Tower Component */}
        <SLAEarlyWarningControlTower />

        <div className="p-5 sm:p-6 bg-white border border-[#DCE2E7] rounded-2xl shadow-sm space-y-3">
          <h4 className="font-bold text-[#14202B] text-sm sm:text-base">
            Nguyên lý thiết kế: Tự động hóa có ranh giới (Bounded Automation)
          </h4>
          <p className="text-sm text-[#435164] leading-relaxed">
            Như minh họa ở trên, AI làm tốt việc <strong>dự báo xác suất (Risk Score)</strong> dựa trên dữ liệu hàng đợi, nhưng nó <strong>không tự động sửa lỗi</strong> (như tự điều chuyển nhân sự thật ngoài đời). Quyền quyết định cuối cùng vẫn thuộc về con người. Bằng cách thiết kế giao diện cảnh báo sớm, bạn cung cấp cho quản lý kho khoảng "thời gian vàng" để điều phối trước khi đơn thực sự trễ.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom max-w-3xl pt-8">
        <div className="bg-white border border-[#DCE2E7] rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14202B] tracking-tight">
            Sẵn sàng nâng cấp năng lực vận hành?
          </h3>
          <p className="text-sm sm:text-base text-[#435164] leading-relaxed mx-auto max-w-lg">
            Nhận tư vấn thiết kế luồng quản trị ngoại lệ chủ động cho hệ thống WMS của doanh nghiệp, hoặc tải bộ tài liệu chuẩn hóa SOP.
          </p>
          <div className="max-w-md mx-auto pt-2">
            <LeadCaptureForm source="product_proof_006" buttonText="Đăng ký nhận tư vấn & Tài liệu" />
          </div>
        </div>
      </section>
    </div>
  );
}
