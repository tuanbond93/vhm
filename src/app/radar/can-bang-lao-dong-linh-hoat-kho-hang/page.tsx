import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  RefreshCw, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowLeft,
  ChevronRight, 
  Layers, 
  BarChart3, 
  Clock, 
  ExternalLink,
  Sliders,
  FileCheck2,
  Lock,
  Users,
  TrendingUp,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { RADAR_ITEMS } from '@/lib/radar-data';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { RadarWorkforceCapacityWorkflow } from '@/components/RadarWorkforceCapacityWorkflow';

const item = RADAR_ITEMS.find((r) => r.id === 'radar-008') || RADAR_ITEMS[0];

export const metadata: Metadata = {
  title: `${item.title} | VHM Radar #008`,
  description: item.subtitle,
  alternates: {
    canonical: `https://vanhanhmoi.com/radar/${item.slug}`,
  },
  openGraph: {
    title: item.title,
    description: item.subtitle,
    url: `https://vanhanhmoi.com/radar/${item.slug}`,
    siteName: 'Vận Hành Mới',
    locale: 'vi_VN',
    type: 'article',
    publishedTime: item.publishedAt,
    authors: ['Vận Hành Mới Editorial Board'],
  },
};

export default function Radar008Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.subtitle,
    url: `https://vanhanhmoi.com/radar/${item.slug}`,
    datePublished: item.publishedAt,
    dateModified: item.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Vận Hành Mới Editorial Board',
      url: 'https://vanhanhmoi.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vận Hành Mới',
      url: 'https://vanhanhmoi.com',
    },
    citation: {
      '@type': 'ScholarlyArticle',
      name: item.evidenceTitle,
      author: item.evidenceAuthors,
      publication: 'Transportation Research Part E: Logistics and Transportation Review',
      datePublished: '2026',
      sameAs: item.evidenceUrl,
    },
  };

  return (
    <article className="min-h-screen bg-[#F7F8F5] text-[#14202B] selection:bg-[#2F6FED] selection:text-white font-sans pb-24 md:pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Breadcrumb */}
      <div className="border-b border-[#DCE2E7] bg-white py-3.5 sticky top-0 z-40 backdrop-blur-md">
        <div className="container-custom max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4">
          <Link
            href="/radar"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#235789] hover:text-[#2F6FED] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại Radar Index</span>
          </Link>
          <div className="font-mono text-xs font-medium text-[#667085]">
            RADAR #008 · {item.type}
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className="border-b border-[#DCE2E7] bg-white py-8 sm:py-12">
        <div className="container-custom max-w-5xl space-y-5">
          {/* Responsive Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#14202B] text-white">
              {item.type}
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[#FEF5E7] text-[#C47A16] border border-[#F9E2C1]">
              {item.verdictLabel}
            </span>
            <span className="text-xs font-mono text-[#667085] sm:ml-auto w-full sm:w-auto">
              Xuất bản: {item.publishedAt} · {item.readTime}
            </span>
          </div>

          {/* Controlled H1 Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14202B] tracking-tight leading-tight sm:leading-tight max-w-4xl">
            {item.title}
          </h1>

          {/* Controlled Subtitle */}
          <p className="text-sm sm:text-lg text-[#435164] leading-relaxed font-medium max-w-4xl">
            {item.subtitle}
          </p>

          {/* Design Principle Editorial Card */}
          <div className="p-4 sm:p-5 rounded-2xl border border-[#B2DDFF] bg-[#F0F9FF] shadow-xs">
            <div className="text-xs font-mono font-bold text-[#026AA2] uppercase tracking-wider mb-1">
              DESIGN PRINCIPLE
            </div>
            <div className="text-base sm:text-lg font-bold text-[#026AA2]">
              Balance Permanent & Flex Labor under Learning Curve Constraints
            </div>
            <div className="text-xs text-[#344054] mt-1 font-medium">
              Cân bằng Nhân sự Cố định & Linh hoạt trong Giới hạn Đường cong Học tập
            </div>
          </div>

          {/* Decision Metadata Banner Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F7F8F5] p-3.5 sm:p-4 rounded-2xl border border-[#DCE2E7] text-xs font-mono">
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">VERDICT:</span>
              <span className="font-bold text-[#C47A16]">{item.verdictLabel}</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">EVIDENCE TIER:</span>
              <span className="font-bold text-[#175CD3]">{item.evidenceTier}</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">SOURCE RELEVANCE:</span>
              <span className="font-bold text-[#14202B]">DIRECT</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">PRIMARY SOURCE:</span>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#235789] hover:underline inline-flex items-center gap-1"
              >
                Auad et al. (2026) <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container-custom max-w-4xl py-8 sm:py-12 space-y-12">
        
        {/* HERO INSIGHT BLOCK — HEADCOUNT ≠ CAPACITY */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#14202B] text-white shadow-md relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white pointer-events-none">
            <Users className="w-64 h-64" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7CD4FD] uppercase tracking-wider">
              <Zap className="w-4 h-4 text-[#7CD4FD]" />
              HERO INSIGHT · VHM ANALYSIS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              HEADCOUNT ≠ EFFECTIVE CAPACITY
            </h2>
            <p className="text-base sm:text-lg text-[#EAECF0] font-medium leading-relaxed">
              Số người có mặt không tự động bằng năng lực xử lý thực tế. Năng lực sản xuất thực tế của lực lượng lao động còn phụ thuộc chặt chẽ vào mức độ quen thuộc công việc, kinh nghiệm ca làm việc tích lũy và đường cong học tập theo từng tác vụ cụ thể.
            </p>
            
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono border-t border-[#2C3B4D]">
              <div className="p-3 rounded-xl bg-[#1E293B] border border-[#334155]">
                <span className="text-[#94A3B8] block text-[10px]">ĐẦU VÀO THÔ:</span>
                <span className="font-bold text-white">Số lượng Đầu người (Headcount)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#1E293B] border border-[#334155]">
                <span className="text-[#94A3B8] block text-[10px]">BIẾN ĐỔI:</span>
                <span className="font-bold text-[#7CD4FD]">Đường cong Học tập & Kinh nghiệm</span>
              </div>
              <div className="p-3 rounded-xl bg-[#1E293B] border border-[#334155]">
                <span className="text-[#94A3B8] block text-[10px]">ĐẦU RA THỰC TẾ:</span>
                <span className="font-bold text-[#36BFFA]">Năng lực Sản xuất Thực tế</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: SIGNAL — EXECUTIVE SUMMARY */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#026AA2] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#026AA2]"></span>
            1. SIGNAL — EXECUTIVE SUMMARY
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14202B] tracking-tight">
            Thách thức định biên nhân sự kho hàng trước biến động sản lượng
          </h2>
          <div className="prose prose-slate max-w-none text-sm sm:text-base text-[#344054] leading-relaxed space-y-4">
            <p>
              Trong quản trị kho vận và trung tâm phân phối (fulfillment & delivery stations), biến động sản lượng đơn hàng theo ngày hoặc theo mùa chiến dịch (promotional campaigns) tạo ra thách thức lớn về định biên nhân sự. Nếu duy trì một lực lượng lao động cố định (permanent/non-flex labor) đủ lớn để đáp ứng các mốc sản lượng đỉnh (peak demand), doanh nghiệp sẽ gánh chịu chi phí lãng phí giờ công nghiêm trọng trong các giai đoạn sản lượng thấp. Ngược lại, nếu duy trì định biên cố định thấp và phụ thuộc hoàn toàn vào lao động linh hoạt (flexible/gig labor) gọi bổ sung theo thời gian thực, doanh nghiệp đối mặt với rủi ro suy giảm năng suất và sụt giảm chỉ số cam kết dịch vụ (SLA).
            </p>
            <div className="p-4 rounded-xl bg-[#F0F9FF] border border-[#B2DDFF] text-[#026AA2] font-medium text-xs sm:text-sm">
              <strong>VHM RECOMMENDATION:</strong> Để xây dựng một chiến lược nhân sự kho hàng bền vững, các nhà quản trị vận hành cần chuyển đổi tư duy từ <em>Quản lý định biên theo số lượng đầu người (Headcount-based Sizing)</em> sang <em>Cấu hình năng lực sản xuất thực tế (Effective Productive Capacity Configuration)</em>. Yếu tố cốt lõi chi phối bài toán này chính là <strong>Đường cong học tập (Learning Curve)</strong> của lao động linh hoạt theo từng tác vụ cụ thể.
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT THE RESEARCH ACTUALLY STUDIED */}
        <section className="space-y-4 pt-6 border-t border-[#DCE2E7]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#175CD3] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#175CD3]" />
            2. WHAT THE RESEARCH ACTUALLY STUDIED · RESEARCH EVIDENCE
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14202B] tracking-tight">
            Bối cảnh nghiên cứu nguyên bản từ Amazon Science (Auad et al., 2026)
          </h2>
          <div className="p-4 rounded-xl bg-white border border-[#DCE2E7] text-xs font-mono space-y-2">
            <div><strong>Tên bài báo:</strong> *"Balancing flex and non-flex labor to reliably meet on-demand capacity"*</div>
            <div><strong>Tác giả:</strong> Ramon Auad, Thomas Fillebeen, Roman Levkin, Arkajit Rakshit, Martin Savelsbergh</div>
            <div><strong>Tạp chí:</strong> *Transportation Research Part E: Logistics and Transportation Review*, Vol. 209, Art. 104696 (2026)</div>
            <div><strong>DOI:</strong> <a href="https://doi.org/10.1016/j.tre.2026.104696" target="_blank" rel="noopener noreferrer" className="text-[#175CD3] hover:underline">10.1016/j.tre.2026.104696</a></div>
          </div>
          <div className="prose prose-slate max-w-none text-sm sm:text-base text-[#344054] leading-relaxed space-y-3">
            <p>
              <strong>Phạm vi nghiên cứu chính xác:</strong> Nghiên cứu tập trung vào <strong>lao động nội khu (under-the-roof operational labor)</strong> trong các trung tâm phân phối và trạm phân loại giao nhận (fulfillment centers & delivery stations) thực hiện các tác vụ như phân loại (sorting), lấy hàng (picking), đóng gói (staging), và chất tải (loading). Nghiên cứu <strong>KHÔNG</strong> mở rộng cho lực lượng tài xế giao hàng chặng cuối (last-mile delivery drivers).
            </p>
            <p>
              <strong>Phân loại hai nhóm lao động:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Lao động cố định (Non-flex / Regular associates):</strong> Nhân sự toàn thời gian có mức năng suất nền tảng cao và tính ổn định cao.</li>
              <li><strong>Lao động linh hoạt (Flex associates):</strong> Nhân sự đăng ký ca làm việc linh hoạt, có mức năng suất phụ thuộc vào số ca làm việc đã tích lũy (kinh nghiệm tác vụ).</li>
            </ul>
          </div>
        </section>

        {/* SECTION 3: LEARNING CURVE HERO INSIGHT & VISUAL */}
        <section className="space-y-4 pt-6 border-t border-[#DCE2E7]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#026AA2] uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-[#026AA2]" />
            3. CONCEPTUAL LEARNING CURVE MODEL · RESEARCH EVIDENCE
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14202B] tracking-tight">
            Đường cong học tập: Năng suất nhân sự linh hoạt biến đổi như thế nào?
          </h2>
          <div className="prose prose-slate max-w-none text-sm sm:text-base text-[#344054] leading-relaxed">
            <p>
              Auad và các cộng sự (2026) chỉ ra rằng lao động linh hoạt không đạt ngay 100% năng suất ở ca làm việc đầu tiên. Năng suất ca làm việc của họ tăng dần theo tỷ lệ học tập khi tích lũy số ca làm việc tại cùng tác vụ:
            </p>
          </div>

          {/* Conceptual Learning Curve Visual Component */}
          <div className="p-6 rounded-2xl bg-white border border-[#DCE2E7] space-y-4">
            <div className="text-xs font-mono font-bold text-[#667085] uppercase tracking-wider">
              MÔ HÌNH KHÁI NIỆM: TIẾN TRÌNH THU HẸP KHOẢNG CÁCH NĂNG SUẤT (CONCEPTUAL ONLY)
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center text-center text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#FEF3F2] border border-[#FECDCA] text-[#B42318]">
                <span className="block font-bold">1. LAO ĐỘNG MỚI</span>
                <span className="text-[10px] text-[#7A271A]">Ca đầu tiên / Chưa quen thuộc</span>
              </div>
              <div className="hidden md:block text-[#98A2B3]">→</div>
              <div className="p-3 rounded-xl bg-[#FFFAEB] border border-[#FEDF89] text-[#B45309]">
                <span className="block font-bold">2. NĂNG SUẤT BAN ĐẦU THẤP</span>
                <span className="text-[10px] text-[#B45309]">Cần thời gian làm quen quy trình</span>
              </div>
              <div className="hidden md:block text-[#98A2B3]">→</div>
              <div className="p-3 rounded-xl bg-[#F0F9FF] border border-[#B2DDFF] text-[#026AA2]">
                <span className="block font-bold">3. TÍCH LŨY CA LÀM VIỆC</span>
                <span className="text-[10px] text-[#026AA2]">Gia tăng tốc độ qua học tập</span>
              </div>
              <div className="hidden md:block text-[#98A2B3]">→</div>
              <div className="p-3 rounded-xl bg-[#ECFDF3] border border-[#ABE5C5] text-[#027A48] md:col-span-1">
                <span className="block font-bold">4. TIỆM CẬN NĂNG SUẤT</span>
                <span className="text-[10px] text-[#027A48]">Thu hẹp khoảng cách năng suất</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F7F8F5] border border-[#E4E7EC] text-[11px] text-[#667085] space-y-1">
              <div><strong>Ghi chú Ranh giới Nguồn:</strong> Hình ảnh trên mô tả khái niệm tiến trình học tập. Nghiên cứu nguyên bản đo lường dữ liệu nhật ký thực tế tại Amazon để ước lượng hàm năng suất theo kinh nghiệm tác vụ. VHM không tự ý tạo ra các con số số lượng ca hay tỷ lệ phần trăm cụ thể cho môi trường của bạn.</div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE ~4% RESULT CLAIM AUDIT */}
        <section className="space-y-4 pt-6 border-t border-[#DCE2E7]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B45309] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B45309]" />
            4. AUDITED NUMERICAL RESULT · ~4% EFFICIENCY CLAIM
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14202B] tracking-tight">
            Kiểm toán con số ~4% cải thiện hiệu quả lao động trong thực nghiệm mô phỏng
          </h2>

          <div className="p-5 rounded-2xl bg-[#FFFAEB] border border-[#FEDF89] space-y-3">
            <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
              <span className="px-2.5 py-1 rounded bg-[#B45309] text-white uppercase">
                COMPUTATIONAL / MODEL-ESTIMATED RESULT
              </span>
              <span className="px-2.5 py-1 rounded bg-[#D92D20] text-white uppercase">
                NOT FINANCIAL COST SAVING
              </span>
            </div>

            <p className="text-sm text-[#B45309] font-medium leading-relaxed">
              "Trong các thí nghiệm tối ưu hóa tính toán được đánh giá, các tác giả ước tính mức cải thiện hiệu quả lao động có giới hạn trên khoảng 4% so với baseline bố trí nhân sự cứng/không phối hợp được sử dụng trong nghiên cứu."
            </p>

            <div className="pt-2 text-xs text-[#7A271A] space-y-1 border-t border-[#FEE4E2]">
              <div>• <strong>Hiệu quả lao động (Labor Efficiency) ≠ Tiết kiệm Chi phí Tiền tệ:</strong> Chỉ số đo lường hiệu quả sử dụng giờ công lao động, KHÔNG phải phần trăm tiết kiệm tiền mặt trên báo cáo tài chính hay quỹ lương.</div>
              <div>• <strong>Ranh giới Thực nghiệm Tính toán:</strong> Con số ~4% là mức trần ước tính trong mô hình tối ưu toán học, không phải cam kết tiết kiệm cố định cho mọi kho hàng thực địa.</div>
            </div>
          </div>
        </section>

        {/* SECTION 5: OPERATIONS INTELLIGENCE FRAMEWORK BRIDGE */}
        <section className="space-y-4 pt-6 border-t border-[#DCE2E7]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#175CD3] uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#175CD3]" />
            5. OPERATIONS INTELLIGENCE DIFFERENTIATION · VHM OPERATING FRAMEWORK
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14202B] tracking-tight">
            Ba chân kiềng của Trí tuệ Vận hành: Control → Execution → Capacity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#DCE2E7] space-y-2">
              <div className="text-xs font-mono font-bold text-[#667085]">CONTROL HORIZON (Radar #006)</div>
              <div className="text-sm font-bold text-[#14202B]">Nhận diện & Cảnh báo Rủi ro</div>
              <p className="text-xs text-[#435164]">Đơn hàng hay công đoạn nào đang có nguy cơ trễ SLA?</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#DCE2E7] space-y-2">
              <div className="text-xs font-mono font-bold text-[#667085]">EXECUTION HORIZON (Radar #007)</div>
              <div className="text-sm font-bold text-[#14202B]">Tái định tuyến Hành động</div>
              <p className="text-xs text-[#435164]">Hành động tiếp theo nên tái định tuyến hay điều phối thế nào?</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F0F9FF] border-2 border-[#2F6FED] space-y-2">
              <div className="text-xs font-mono font-bold text-[#026AA2]">CAPACITY HORIZON (Radar #008)</div>
              <div className="text-sm font-bold text-[#175CD3]">Cấu hình Năng lực Nguồn lực</div>
              <p className="text-xs text-[#344054]">Cần cấu hình tỷ lệ nhân sự cố định và linh hoạt ra sao trước ca?</p>
            </div>
          </div>

          <p className="text-xs text-[#667085] italic">
            *Khung phân loại này được tổng hợp bởi Vận Hành Mới (VHM Operating Framework) dùng cho hệ thống quản trị, không phải mô hình phân loại do bài báo gốc Auad et al. đề xuất.*
          </p>
        </section>

        {/* SECTION 6: WORKFORCE CAPACITY WORKFLOW COMPONENT */}
        <section className="pt-6 border-t border-[#DCE2E7]">
          <RadarWorkforceCapacityWorkflow />
        </section>

        {/* SECTION 7: IMPLEMENTATION PLAYBOOK */}
        <section className="space-y-4 pt-6 border-t border-[#DCE2E7]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#027A48] uppercase tracking-wider">
            <FileCheck2 className="w-4 h-4 text-[#027A48]" />
            7. IMPLEMENTATION PLAYBOOK · VHM RECOMMENDATION
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14202B] tracking-tight">
            Khung triển khai 5 giai đoạn cho Quản lý Vận hành
          </h2>

          <div className="space-y-3">
            {[
              { phase: 'PHASE 0', title: 'Baseline Performance Measurement', desc: 'Đo lường chi tiết sản lượng hàng ngày, tổng giờ công sản xuất, năng suất ca theo tác vụ và tỷ lệ phụ thuộc ca tăng cường (overtime).' },
              { phase: 'PHASE 1', title: 'Learning Curve Measurement', desc: 'Đo lường và xây dựng hàm đường cong học tập của lao động linh hoạt theo từng nhóm tác vụ. Phân nhóm nhân sự theo số ca tích lũy.' },
              { phase: 'PHASE 2', title: 'Offline Capacity Simulation', desc: 'Chạy mô phỏng ngoại tuyến so sánh giữa định biên cố định thuần túy và mô hình phối hợp nhân sự có điều chỉnh đường cong học tập.' },
              { phase: 'PHASE 3', title: 'Controlled Workforce Pilot', desc: 'Thử nghiệm trên một khu vực vận hành hoặc nhóm ca cụ thể trong khoảng thời gian xác định. Đánh giá biến động năng suất thực tế.' },
              { phase: 'PHASE 4', title: 'Adaptive Capacity Planning', desc: 'Tích hợp hàm đường cong học tập đã được hiệu chỉnh vào quy trình lập kế hoạch ca làm việc hàng tuần.' },
            ].map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-[#DCE2E7] flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#14202B] text-white shrink-0">
                  {p.phase}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#14202B]">{p.title}</h3>
                  <p className="text-xs text-[#435164] mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: METRICS FRAMEWORK */}
        <section className="space-y-4 pt-6 border-t border-[#DCE2E7]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#175CD3] uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-[#175CD3]" />
            8. METRICS FRAMEWORK · SOURCE-ALIGNED & VHM RECOMMENDED
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14202B] tracking-tight">
            Bộ chỉ số quản trị năng lực nhân sự kho hàng
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-[#DCE2E7] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#F7F8F5] border-b border-[#DCE2E7] text-[#667085] font-mono uppercase">
                  <th className="p-3">Tên Chỉ số</th>
                  <th className="p-3">Mô tả Quản trị</th>
                  <th className="p-3">Phân loại Nguồn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE2E7]">
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Effective Productive Capacity</td>
                  <td className="p-3 text-[#435164]">Tổng năng lực xử lý thực tế tính theo giờ công đã điều chỉnh đường cong học tập.</td>
                  <td className="p-3 font-mono font-bold text-[#027A48]">VHM RECOMMENDED</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Units / Orders per Productive Hour</td>
                  <td className="p-3 text-[#435164]">Năng suất trung bình theo từng nhóm ca tích lũy của lao động linh hoạt.</td>
                  <td className="p-3 font-mono font-bold text-[#175CD3]">SOURCE-ALIGNED</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Capacity Gap / Surplus</td>
                  <td className="p-3 text-[#435164]">Chênh lệch giữa năng lực sản xuất thực tế và nhu cầu sản lượng thực tế.</td>
                  <td className="p-3 font-mono font-bold text-[#175CD3]">SOURCE-ALIGNED</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Flex Labor Utilization Rate</td>
                  <td className="p-3 text-[#435164]">Tỷ lệ sử dụng ca làm việc của lực lượng linh hoạt trong tổng quỹ giờ công.</td>
                  <td className="p-3 font-mono font-bold text-[#027A48]">VHM RECOMMENDED</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Learning Progression Rate</td>
                  <td className="p-3 text-[#435164]">Tốc độ gia tăng năng suất của lao động linh hoạt qua các ca làm việc.</td>
                  <td className="p-3 font-mono font-bold text-[#175CD3]">SOURCE-ALIGNED</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Emergency Staffing Dependency</td>
                  <td className="p-3 text-[#435164]">Tỷ lệ ca phải gọi lao động khẩn cấp do tính toán sai năng lực thực tế.</td>
                  <td className="p-3 font-mono font-bold text-[#027A48]">VHM RECOMMENDED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 9: WARNING CONDITIONS */}
        <section className="space-y-4 pt-6 border-t border-[#DCE2E7]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D92D20] uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-[#D92D20]" />
            9. PARAMETERIZED WARNING CONDITIONS · VHM RECOMMENDATION
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14202B] tracking-tight">
            Điều kiện cảnh báo rủi ro vận hành (No Arbitrary Numeric Triggers)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7]">
              <span className="font-bold text-[#D92D20] block mb-1">Learning Curve Underperformance</span>
              Năng suất thực tế của lao động linh hoạt thấp hơn ngưỡng dự báo sau một số ca làm việc nhất định.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7]">
              <span className="font-bold text-[#D92D20] block mb-1">Flex Pool Instability</span>
              Tỷ lệ rời bỏ (churn) của lao động linh hoạt quá cao, khiến hệ thống liên tục tiếp nhận lao động mới.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7]">
              <span className="font-bold text-[#D92D20] block mb-1">Training Capacity Bottleneck</span>
              Số lượng lao động linh hoạt mới vượt quá năng lực hướng dẫn của nhân sự cố định trong ca.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7]">
              <span className="font-bold text-[#D92D20] block mb-1">Task Complexity Mismatch</span>
              Bố trí lao động linh hoạt chưa đủ kinh nghiệm vào các tác vụ có độ phức tạp cao hoặc yêu cầu độ chính xác tuyệt đối.
            </div>
          </div>
        </section>

        {/* SECTION 10: VIETNAM OPERATIONS FIT */}
        <section className="space-y-4 pt-6 border-t border-[#DCE2E7]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#026AA2] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#026AA2]"></span>
            10. VIETNAM OPERATIONS FIT · VHM ANALYSIS
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14202B] tracking-tight">
            Giả thuyết ứng dụng tiềm năng cho hạ tầng kho vận tại Việt Nam
          </h2>

          <div className="p-3.5 rounded-xl bg-[#F0F9FF] border border-[#B2DDFF] text-xs font-mono text-[#026AA2] mb-3">
            VHM ANALYSIS — GIẢ THUYẾT ỨNG DỤNG TIỀM NĂNG, KHÔNG PHẢI KẾT QUẢ THỬ NGHIỆM TRỰC TIẾP CỦA BÀI BÁO GỐC.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7]">
              <span className="font-bold text-[#14202B] block mb-1">Trung tâm Phân loại (Parcel Sorting Hubs)</span>
              Đáp ứng các đợt biến động sản lượng lớn trong ngày Mega Sale mà không làm nghẽn trạm phân loại.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7]">
              <span className="font-bold text-[#14202B] block mb-1">Kho E-Commerce Fulfillment</span>
              Phân bổ lao động linh hoạt vào tác vụ nhặt hàng/đóng gói đơn giản, dành tác vụ phức tạp cho nhân sự chính thức.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7]">
              <span className="font-bold text-[#14202B] block mb-1">Trung tâm Phân phối Bán lẻ</span>
              Cấu hình nhân sự thích ứng theo các đợt cao điểm lễ Tết hoặc đợt khuyến mãi lớn của chuỗi bán lẻ.
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE SECTION */}
        <section id="lead-capture" className="pt-8 border-t border-[#DCE2E7]">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE2E7] shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-[#14202B] mb-2">
              Tải tài nguyên Quản trị Nhân sự Kho hàng & Khung tính Năng lực Sản xuất
            </h3>
            <p className="text-xs sm:text-sm text-[#435164] mb-6">
              Đăng ký để nhận bộ tài liệu hướng dẫn chuyển đổi quy trình quản trị nhân sự từ số lượng đầu người sang Năng lực Sản xuất Thực tế.
            </p>
            <LeadCaptureForm source="radar-008" buttonText="Đăng ký nhận tài liệu" />
          </div>
        </section>
      </main>

      {/* Sticky Mobile Lead CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-[#DCE2E7] md:hidden z-30 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs">
            <span className="font-bold text-[#14202B] block truncate max-w-[200px]">Radar #008: Capacity Planning</span>
            <span className="text-[#667085] text-[10px]">Headcount ≠ Effective Capacity</span>
          </div>
          <a
            href="#lead-capture"
            className="px-3.5 py-2 rounded-lg bg-[#14202B] text-white text-xs font-bold shrink-0 hover:bg-[#2F6FED] transition-colors"
          >
            Khám phá →
          </a>
        </div>
      </div>
    </article>
  );
}
