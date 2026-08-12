import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, FlaskConical, ShieldCheck } from 'lucide-react';
import { HumanInLoopEscalationWorkspace } from '@/components/HumanInLoopEscalationWorkspace';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { TrackedLink } from '@/components/TrackedLink';

const canonical = 'https://vanhanhmoi.com/radar/ai-agent-human-in-the-loop';
const description = 'Prototype tương tác mô phỏng AI Agent dừng đúng lúc, giải thích trigger escalation và bàn giao quyết định rõ ràng cho con người.';

export const metadata: Metadata = {
  title: 'AI Agent Human-in-the-loop Escalation — Product Proof #001',
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Agent Human-in-the-loop Escalation — Product Proof #001',
    description,
    url: canonical,
    siteName: 'Vận Hành Mới',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'AI Agent Human-in-the-loop Escalation — Product Proof #001',
    description,
  },
};

export default function HumanInLoopProductProofPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Agent Human-in-the-loop Escalation — Product Proof #001',
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
        <div className="container-custom max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          <Link href="/radar/ai-agent-human-in-the-loop-taobao" className="min-h-11 inline-flex items-center gap-2 text-xs font-semibold text-[#235789] hover:text-[#2F6FED] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại Radar #001</span>
          </Link>
          <span className="font-mono text-[10px] sm:text-xs font-medium text-[#667085]">PRODUCT PROOF #001 · INTERACTIVE PROTOTYPE</span>
        </div>
      </div>

      <header className="bg-white border-b border-[#DCE2E7] py-10 sm:py-14">
        <div className="container-custom max-w-6xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-xs font-mono font-bold text-[#235789]">
            <ShieldCheck className="w-4 h-4 text-[#2F6FED]" />
            <span>PRODUCT PROOF #001</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight leading-tight max-w-4xl">
            AI Agent Human-in-the-loop Escalation
          </h1>
          <p className="text-base sm:text-lg text-[#435164] leading-relaxed max-w-3xl">
            Trải nghiệm cách một AI Agent xử lý ca thông thường, nhận diện ranh giới, dừng trước ngoại lệ và bàn giao đầy đủ ngữ cảnh để con người quyết định.
          </p>
          <div className="max-w-3xl rounded-2xl border border-[#F9E2C1] bg-[#FFFBF5] p-4 flex items-start gap-3">
            <FlaskConical className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#435164] leading-relaxed">
              <strong className="text-[#8A4B08]">Prototype disclaimer:</strong> Toàn bộ case và dữ liệu là tổng hợp; logic deterministic, không dùng live LLM. Ngưỡng chỉ là giả thuyết chính sách minh họa, chưa được kiểm chứng cho môi trường production.
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom max-w-6xl py-10 sm:py-12 space-y-10">
        <section className="space-y-4" aria-labelledby="demo-heading">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">Operational case workspace</span>
            <h2 id="demo-heading" className="text-2xl sm:text-3xl font-extrabold text-[#14202B] mt-2">Quan sát điểm dừng và quyền quyết định</h2>
            <p className="text-sm text-[#435164] mt-2 leading-relaxed">Chọn ba kịch bản để so sánh ca thông thường, escalation do không chắc chắn và escalation do chính sách nhạy cảm.</p>
          </div>
          <HumanInLoopEscalationWorkspace />
        </section>

        <section className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-[#DCE2E7] bg-white p-5 sm:p-6 space-y-3">
            <h2 className="font-bold text-lg text-[#14202B]">Nguyên tắc governance được minh họa</h2>
            <ul className="space-y-2 text-sm text-[#435164] leading-relaxed">
              <li>AI được phép xử lý trong phạm vi được mô tả.</li>
              <li>Trigger, evidence và lý do dừng được hiển thị rõ.</li>
              <li>Confidence không thay thế quyền phê duyệt chính sách.</li>
              <li>Mọi quyết định ngoại lệ đều cần xác nhận hiển thị của con người.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#C5D8F9] bg-[#EBF2FE] p-5 sm:p-6 space-y-4">
            <h2 className="font-bold text-lg text-[#14202B]">Đọc bằng chứng nền của Radar #001</h2>
            <p className="text-sm text-[#435164] leading-relaxed">Product Proof này chuyển nguyên lý Bounded Automation + Early Escalation thành một luồng thao tác có thể quan sát.</p>
            <Link href="/radar/ai-agent-human-in-the-loop-taobao" className="min-h-11 inline-flex items-center gap-2 text-sm font-bold text-[#235789] hover:text-[#2F6FED]">
              <span>Đọc Radar #001</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section id="proof-001-lead" className="scroll-mt-24 rounded-3xl border border-[#DCE2E7] bg-white p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14202B]">Khám phá cách thiết kế Human-in-the-loop cho quy trình của bạn</h2>
            <p className="text-sm text-[#435164] leading-relaxed">Demo luôn mở. Nếu muốn nhận tài liệu và trao đổi về cách đặt ranh giới escalation, bạn có thể đăng ký bên dưới.</p>
            <TrackedLink href="#proof-001-form" ctaId="product_proof_001_lead_cta" sourcePage="/radar/ai-agent-human-in-the-loop" placement="post_demo" className="min-h-11 inline-flex items-center justify-center gap-2 text-sm font-bold text-[#2F6FED] hover:underline">
              <span>Đi tới form nhận tài liệu</span><ArrowRight className="w-4 h-4" />
            </TrackedLink>
            <div id="proof-001-form" className="max-w-md mx-auto pt-2 scroll-mt-24">
              <LeadCaptureForm source="product_proof_001" buttonText="Đăng ký nhận tài liệu" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
