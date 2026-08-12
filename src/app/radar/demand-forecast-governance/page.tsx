import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, FlaskConical, ShieldCheck } from 'lucide-react';
import { DemandForecastGovernanceWorkspace } from '@/components/DemandForecastGovernanceWorkspace';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { TrackedLink } from '@/components/TrackedLink';

const canonical = 'https://vanhanhmoi.com/radar/demand-forecast-governance';
const description = 'Prototype tương tác mô phỏng planner override, policy gate, mã lý do và audit context cho quản trị dự báo nhu cầu.';

export const metadata: Metadata = {
  title: 'Demand Forecast Governance Guardrails — Product Proof #002',
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Demand Forecast Governance Guardrails — Product Proof #002',
    description,
    url: canonical,
    siteName: 'Vận Hành Mới',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Demand Forecast Governance Guardrails — Product Proof #002',
    description,
  },
};

export default function DemandForecastGovernancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Demand Forecast Governance Guardrails — Product Proof #002',
    description,
    url: canonical,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    isAccessibleForFree: true,
    publisher: {
      '@type': 'Organization',
      name: 'Vận Hành Mới',
      url: 'https://vanhanhmoi.com',
    },
  };

  return (
    <div className="min-h-screen bg-[#F7F8F5] pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="border-b border-[#DCE2E7] bg-white py-3.5">
        <div className="container-custom flex max-w-6xl flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/radar/du-bao-nhu-cau-human-override" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-[#235789] transition-colors hover:text-[#2F6FED]">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Quay lại Radar #002</span>
          </Link>
          <span className="font-mono text-[10px] font-medium text-[#667085] sm:text-xs">PRODUCT PROOF #002 · INTERACTIVE PROTOTYPE</span>
        </div>
      </div>

      <header className="border-b border-[#DCE2E7] bg-white py-10 sm:py-14">
        <div className="container-custom max-w-6xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C5D8F9] bg-[#EBF2FE] px-3 py-1 font-mono text-xs font-bold text-[#235789]">
            <ShieldCheck className="h-4 w-4 text-[#2F6FED]" />
            <span>PRODUCT PROOF #002</span>
          </div>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-[#14202B] sm:text-4xl lg:text-5xl">
            Demand Forecast Governance Guardrails
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[#435164] sm:text-lg">
            Trải nghiệm cách planner bắt đầu từ baseline, đề xuất điều chỉnh và đi qua một policy gate minh bạch trước khi quyết định cuối cùng được ghi nhận trong mô phỏng.
          </p>
          <div className="flex max-w-3xl items-start gap-3 rounded-2xl border border-[#F9E2C1] bg-[#FFFBF5] p-4">
            <FlaskConical className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" />
            <div className="text-xs leading-relaxed text-[#435164] sm:text-sm">
              <strong className="text-[#8A4B08]">Prototype disclaimer:</strong> Dữ liệu và chuỗi thời gian hoàn toàn tổng hợp; logic deterministic, không dùng live backend hay live LLM. Mọi ngưỡng là giả thuyết chính sách minh họa chưa được kiểm chứng và không phải khuyến nghị áp dụng phổ quát.
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom max-w-6xl space-y-10 py-10 sm:py-12">
        <section className="space-y-4" aria-labelledby="proof-002-demo-heading">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#235789]">Planning decision workspace</span>
            <h2 id="proof-002-demo-heading" className="mt-2 text-2xl font-extrabold text-[#14202B] sm:text-3xl">Quan sát override, policy gate và quyết định cuối</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#435164]">So sánh ba ví dụ deterministic: giữ baseline, điều chỉnh nhỏ có cảnh báo và điều chỉnh trọng yếu cần lý do.</p>
          </div>
          <DemandForecastGovernanceWorkspace />
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-[#DCE2E7] bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[#14202B]">Nguyên tắc governance được minh họa</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-[#435164]">
              <li>Baseline vẫn là điểm tham chiếu trước mọi can thiệp.</li>
              <li>Điều chỉnh nhỏ tạo micro warning, không mặc định là cải thiện.</li>
              <li>Điều chỉnh trọng yếu cần lý do theo ngữ cảnh và human confirmation.</li>
              <li>Quyết định, policy và simulated final forecast cùng xuất hiện trong audit context.</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-[#C5D8F9] bg-[#EBF2FE] p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[#14202B]">Đọc bằng chứng nền của Radar #002</h2>
            <p className="text-sm leading-relaxed text-[#435164]">Product Proof này chuyển mô hình Model-first + Governed Human Override thành một luồng lập kế hoạch có thể quan sát và kiểm tra.</p>
            <Link href="/radar/du-bao-nhu-cau-human-override" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#235789] hover:text-[#2F6FED]">
              <span>Đọc Radar #002</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section id="proof-002-lead" className="scroll-mt-24 rounded-3xl border border-[#DCE2E7] bg-white p-6 shadow-sm sm:p-10">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="text-2xl font-extrabold text-[#14202B] sm:text-3xl">Thiết kế guardrail cho quy trình planning của bạn</h2>
            <p className="text-sm leading-relaxed text-[#435164]">Demo luôn mở. Nếu muốn nhận tài liệu và trao đổi về cách cấu trúc override policy, bạn có thể đăng ký qua luồng lead bảo mật hiện có.</p>
            <TrackedLink href="#proof-002-form" ctaId="product_proof_002_lead_cta" sourcePage="/radar/demand-forecast-governance" placement="post_demo" className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-bold text-[#2F6FED] hover:underline">
              <span>Đi tới form nhận tài liệu</span><ArrowRight className="h-4 w-4" />
            </TrackedLink>
            <div id="proof-002-form" className="mx-auto max-w-md scroll-mt-24 pt-2">
              <LeadCaptureForm source="product_proof_002" buttonText="Đăng ký nhận tài liệu" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
