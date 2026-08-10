import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Compass,
  Zap,
  Cpu,
} from 'lucide-react';
import { RADAR_ITEMS } from '@/lib/radar-data';
import { RadarEarlyWarningWorkflow } from '@/components/RadarEarlyWarningWorkflow';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const item = RADAR_ITEMS[0]; // Radar #006 (newest)

export const metadata: Metadata = {
  title: `${item.title} | VHM Radar #006`,
  description: item.subtitle,
  alternates: {
    canonical: `https://vanhanhmoi.com/radar/${item.slug}`,
  },
  openGraph: {
    title: item.title,
    description: item.subtitle,
    url: `https://vanhanhmoi.com/radar/${item.slug}`,
    siteName: 'Vận Hành Mới',
    type: 'article',
    publishedTime: item.publishedAt,
    authors: ['Vận Hành Mới Team'],
  },
};

export default function RadarDetail006Page() {
  return (
    <article className="min-h-screen bg-[#F7F8F5]">
      {/* Schema.org Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: item.title,
            description: item.subtitle,
            url: `https://vanhanhmoi.com/radar/${item.slug}`,
            datePublished: item.publishedAt,
            author: {
              '@type': 'Organization',
              name: 'Vận Hành Mới',
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
              url: item.evidenceUrl,
            },
          }),
        }}
      />

      {/* Navigation Breadcrumb */}
      <div className="border-b border-[#DCE2E7] bg-white py-3.5">
        <div className="container-custom max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4">
          <Link
            href="/radar"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#235789] hover:text-[#2F6FED] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại Radar Index</span>
          </Link>
          <div className="font-mono text-xs font-medium text-[#667085]">
            RADAR #006 · {item.type}
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

          {/* Decision Metadata Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F7F8F5] p-3.5 sm:p-4 rounded-2xl border border-[#DCE2E7] text-xs font-mono">
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">VERDICT:</span>
              <span className="font-bold text-[#C47A16]">{item.verdictLabel}</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">EVIDENCE TIER:</span>
              <span className="font-semibold text-[#14202B]">{item.evidenceTier}</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">SOURCE RELEVANCE:</span>
              <span className="font-semibold text-[#167A65]">DIRECT</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">PRIMARY SOURCE:</span>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#2F6FED] hover:underline inline-flex items-center gap-1"
              >
                <span>Aloini et al. (TRE 2025)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body Content (With pb-28 for mobile sticky CTA clearance) */}
      <div className="container-custom max-w-5xl py-8 sm:py-12 pb-28 md:pb-16 space-y-8 sm:space-y-12">

        {/* SECTION 1: SIGNAL */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#2F6FED]" />
            <span>1. SIGNAL — executive summary</span>
          </div>
          <div className="p-5 sm:p-6 bg-white border border-[#DCE2E7] rounded-2xl space-y-4 shadow-sm">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F5F2] border border-[#BDE3DA] text-[11px] font-mono font-bold text-[#167A65]">
              VHM RECOMMENDATION
            </div>
            <p className="text-sm sm:text-base text-[#14202B] leading-relaxed font-medium">
              Trong quản lý kho vận và trung tâm phân phối, phần lớn các hệ thống WMS hiện tại dừng lại ở việc cung cấp các bảng điều khiển (Dashboards) mang tính mô tả quá khứ: hiển thị danh sách các đơn hàng đã bị trễ hoặc đã vượt quá cam kết thời gian xử lý (SLA). Khi quản lý nhìn thấy đơn hàng màu đỏ trên màn hình, sự cố đã thực sự xảy ra và doanh nghiệp đã phải chịu thiệt hại về chi phí hoặc uy tín với khách hàng.
            </p>
            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu công bố trên tạp chí <em>Transportation Research Part E: Logistics and Transportation Review</em> (Aloini et al., 2025) đề xuất một hướng đi mới: <strong>Sử dụng Machine Learning (ML) để phân tích dữ liệu WMS, dự báo nguy cơ trễ hạn (tardiness) của đơn hàng và phát tín hiệu cảnh báo nhằm hỗ trợ con người ra quyết định trước khi đơn hàng hoàn tất.</strong>
            </p>
            <div className="p-3.5 sm:p-4 bg-[#FEF5E7] border border-[#F9E2C1] rounded-xl text-xs text-[#C47A16] leading-relaxed font-medium">
              <strong>Khuyến nghị VHM:</strong> Khuyên dùng nguyên lý <strong>TEST IN CONTROLLED WORKFLOW</strong>: <em>Cảnh báo rủi ro bằng AI kết hợp Can thiệp Điều hành của Con người (Predict Before You Escalate: AI Early Warning with Governed Human Intervention)</em>.
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT THE RESEARCH ACTUALLY STUDIED */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-[#2F6FED]" />
            <span>2. WHAT THE RESEARCH ACTUALLY STUDIED — bối cảnh nghiên cứu gốc</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F5] border border-[#DCE2E7] text-xs font-mono text-[#667085]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#167A65]" />
              <span>RESEARCH EVIDENCE · PRIMARY PEER-REVIEWED RESEARCH</span>
            </div>

            <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl text-xs space-y-1 font-mono">
              <div className="font-bold text-[#14202B]">
                Tên công trình nghiên cứu gốc:
              </div>
              <div className="italic text-[#235789]">
                &ldquo;{item.evidenceTitle}&rdquo;
              </div>
              <div className="text-[#667085] pt-1">
                Tác giả: {item.evidenceAuthors} (Transportation Research Part E: Logistics and Transportation Review, Vol. 194, Article 103933, Feb 2025)
              </div>
              <div className="text-[#667085]">
                DOI: 10.1016/j.tre.2024.103933
              </div>
              <div className="text-[#667085]">
                Phân loại bằng chứng: Real-World WMS Data + ML Forecasting + Simulation Evaluation
              </div>
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu thực hiện trên dữ liệu vận hành thực tế của một kho phân phối lốp xe tự động hóa sử dụng hệ thống lưu trữ và truy xuất tự động dạng thoi (Shuttle-Based Storage and Retrieval System - SBS/RS).
            </p>
            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu nạp các biến số vận hành thời gian thực từ WMS (gồm: độ phức tạp của đơn hàng, số lượng dòng hàng, đặc tính SKU, tải trọng công việc của hệ thống thoi, thời điểm trong ngày và hàng chờ giải phóng đơn) vào các thuật toán Machine Learning (như Random Forest, XGBoost) để dự báo khả năng đơn hàng bị vượt thời gian chu kỳ mục tiêu.
            </p>
          </div>
        </section>

        {/* SECTION 3: HOW THE EARLY-WARNING MODEL WORKS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2F6FED]" />
            <span>3. HOW THE EARLY-WARNING MODEL WORKS — cơ chế vận hành mô hình</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#F7F8F5] border border-[#DCE2E7] text-[11px] font-mono font-bold text-[#435164]">
                RESEARCH EVIDENCE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
                VHM ANALYSIS
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Bước 1 — Thu thập Biến số WMS Thời gian thực:</strong>
                <span className="text-[#435164]">
                  Hệ thống liên tục ghi nhận dữ liệu đơn hàng mới, trạng thái tồn kho, độ dài hàng chờ và tải trọng của thiết bị tự động. <em>(Research Evidence)</em>
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Bước 2 — Dự báo Nguy cơ Trễ (Tardiness Risk Prediction):</strong>
                <span className="text-[#435164]">
                  Mô hình ML tính toán xác suất trễ hạn cho từng đơn hàng trước khi đơn được đưa vào khu vực lấy hàng (Picking area). <em>(Research Evidence)</em>
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Bước 3 — Phát Cảnh báo Ưu tiên (Prioritized Alerting):</strong>
                <span className="text-[#435164]">
                  Các đơn hàng có nguy cơ trễ cao được tự động đẩy lên đầu danh sách chờ xử lý ngoại lệ (Exception Queue). <em>(VHM Analysis)</em>
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Bước 4 — Con người Can thiệp Điều hành:</strong>
                <span className="text-[#435164]">
                  Quản lý kho thực hiện các biện pháp điều phối như: ưu tiên giải phóng đơn, điều chuyển nhân sự lấy hàng hoặc thay đổi trạm xử lý. <em>(VHM Analysis)</em>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT THE RESEARCH ACTUALLY FOUND */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>4. WHAT THE RESEARCH ACTUALLY FOUND — kết quả phát hiện chính</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F7F8F5] border border-[#DCE2E7] text-[11px] font-mono font-bold text-[#435164]">
              RESEARCH EVIDENCE
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu của Aloini et al. (2025) ghi nhận các kết quả kỹ thuật và mô phỏng quan trọng:
            </p>

            <div className="space-y-3 bg-[#F7F8F5] p-4 sm:p-5 rounded-xl border border-[#DCE2E7] text-xs sm:text-sm">
              <ul className="space-y-2.5 text-[#435164] list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Khả năng dự báo chính xác nguy cơ trễ đơn:</strong> Các mô hình Machine Learning đạt độ chính xác cao trong việc nhận diện sớm các đơn hàng có xác suất cao bị trễ thời gian chu kỳ (cycle time exceedance) ngay từ giai đoạn chuẩn bị phát hành đơn.
                </li>
                <li>
                  <strong>Cơ chế cảnh báo thời gian thực (Real-time Alerting System):</strong> Hệ thống tự động phân loại đơn hàng theo mức độ rủi ro và đẩy cảnh báo đến màn hình điều hành của quản lý kho.
                </li>
                <li>
                  <strong>Giảm đỉnh thời gian chu kỳ trong mô phỏng (Peak Cycle Time Reduction in Simulation):</strong> Kết quả mô phỏng sự kiện rời rạc (Discrete-Event Simulation - DES) dựa trên dữ liệu vận hành thực tế chỉ ra rằng khi quản lý kho nhận được cảnh báo sớm và can thiệp điều chỉnh luồng, cả thời gian chu kỳ đỉnh (peak cycle time) và thời gian chu kỳ tổng thể của toàn kho đều ghi nhận mức giảm tiềm năng đáng kể.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: PREDICTION IS NOT PREVENTION */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>5. PREDICTION IS NOT PREVENTION — ranh giới giữa dự báo và can thiệp</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#F7F8F5] border border-[#DCE2E7] text-[11px] font-mono font-bold text-[#435164]">
                RESEARCH EVIDENCE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
                VHM ANALYSIS
              </span>
            </div>

            <p className="text-sm text-[#14202B] leading-relaxed font-bold">
              Vận Hành Mới nhấn mạnh một ranh giới vận hành cốt lõi: Dự báo rủi ro (Prediction) không đồng nghĩa với việc Tự động ngăn chặn (Prevention).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-2">
                <strong className="text-[#B5473C] font-bold block text-sm">
                  1. AI không tự động xử lý sự cố
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Mô hình Machine Learning chỉ phát hiện các tín hiệu bất thường trong dữ liệu WMS để đưa ra điểm số rủi ro. Mô hình KHÔNG tự động giải quyết các nguyên nhân gốc rễ như nghẽn kệ hàng, hư hỏng thiết bị hay thiếu hụt nhân sự. <em>(Research Evidence & VHM Analysis)</em>
                </p>
              </div>

              <div className="p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-2">
                <strong className="text-[#B5473C] font-bold block text-sm">
                  2. Can thiệp của con người là mắt xích bắt buộc
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Hiệu quả ngăn chặn trễ đơn hoàn toàn phụ thuộc vào việc liệu quản lý kho có nhận được cảnh báo kịp thời, có thẩm quyền và có đủ phương án điều phối nhân sự/thiết bị để can thiệp hay không. <em>(VHM Analysis)</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FROM DASHBOARD TO EXCEPTION MANAGEMENT */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2F6FED]" />
            <span>6. FROM DASHBOARD TO EXCEPTION MANAGEMENT — chuyển từ báo cáo quá khứ sang quản trị ngoại lệ</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
              VHM ANALYSIS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  Hạn chế của Dashboard truyền thống
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Các bảng điều khiển WMS thông thường chỉ hiển thị trạng thái đơn hàng thụ động. Khi một đơn hàng hiển thị màu đỏ (đã quá hạn SLA), quản lý kho chỉ có thể ghi nhận sự cố chứ không thể đảo ngược mốc thời gian.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  Quản trị Ngoại lệ Chủ động (Proactive Exception Management)
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Thay vì rà soát toàn bộ đơn hàng, quản lý có thể tập trung vào nhóm đơn được mô hình xếp hạng có rủi ro cao để đánh giá và quyết định có cần can thiệp hay không.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY THIS MATTERS FOR MODERN OPERATIONS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2F6FED]" />
            <span>7. WHY THIS MATTERS FOR MODERN OPERATIONS — ý nghĩa vận hành</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
              VHM ANALYSIS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  1. Tạo thêm thời gian phản ứng trước rủi ro vận hành
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Việc phát hiện sớm các tín hiệu rủi ro giúp tạo ra một khoảng thời gian quyết định sớm hơn cho ban quản lý. Tuy nhiên, kết quả vận hành thực tế vẫn phụ thuộc vào chất lượng của quyết định can thiệp và năng lực vận hành sẵn có của kho.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  2. Tối ưu hóa nguồn lực quản lý
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Giải phóng ban quản lý khỏi công việc tra cứu báo cáo thủ công để tập trung vào các quyết định điều chuyển nhân sự và giải quyết sự cố hiện trường.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: VHM OPERATING MODEL & WORKFLOW VISUAL */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#167A65]" />
            <span>8. VHM OPERATING MODEL — sơ đồ luồng quy trình</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F5F2] border border-[#BDE3DA] text-[11px] font-mono font-bold text-[#167A65]">
              VHM RECOMMENDATION
            </div>
            <p className="text-sm text-[#435164] leading-relaxed">
              Vận Hành Mới đề xuất sơ đồ quy trình cảnh báo rủi ro và can thiệp điều hành (AI Early-Warning & Governed Intervention Workflow):
            </p>

            {/* AI Early Warning Governance Workflow Visual */}
            <RadarEarlyWarningWorkflow />
          </div>
        </section>

        {/* SECTION 9: VHM VERDICT */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C47A16] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#C47A16]" />
            <span>9. VHM VERDICT — kết luận điều hành</span>
          </div>
          <div className="bg-[#FEF5E7] border border-[#F9E2C1] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#C47A16] text-white text-xs font-mono font-bold">
              VHM RECOMMENDATION
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-sm sm:text-base font-extrabold px-4 py-1.5 rounded-full bg-[#C47A16] text-white">
                TEST IN CONTROLLED WORKFLOW
              </span>
            </div>

            <div className="text-xs sm:text-sm text-[#14202B] space-y-3 leading-relaxed">
              <p>
                <strong>Tên nguyên lý:</strong> <em>Cảnh báo sớm bằng AI kết hợp Can thiệp Điều hành của Con người (Predict Before You Escalate: AI Early Warning with Governed Human Intervention)</em>.
              </p>
              <p className="text-[#435164]">
                <strong>Nội dung:</strong> Vận Hành Mới khuyến nghị các doanh nghiệp kho vận áp dụng mô hình Machine Learning để xây dựng lớp cảnh báo rủi ro trễ đơn trên nền dữ liệu WMS. Thử nghiệm áp dụng trong một luồng vận hành kiểm soát để đánh giá độ chính xác của cảnh báo và đo lường hiệu quả can thiệp của con người trước khi nhân rộng.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: VIETNAM OPERATIONS FIT */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#235789]" />
            <span>10. VIETNAM OPERATIONS FIT — tính phù hợp định tính tại việt nam</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
              VHM ANALYSIS — NOT DIRECTLY TESTED BY PRIMARY SOURCE
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Đánh giá tính ứng dụng định tính tại thị trường Việt Nam (Giả thuyết cần kiểm chứng):
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Fulfillment Center Thương mại Điện tử</strong>
                <p className="text-[#435164]">
                  Dự báo rủi ro trễ đơn trong các khung giờ chốt đơn Campaign để quản lý kho kịp thời điều chuyển nhân sự sang khâu lấy hàng và đóng gói.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Trung tâm Phân phối B2B & Chuỗi Siêu thị</strong>
                <p className="text-[#435164]">
                  Cảnh báo sớm các chuyến hàng giao cho cửa hàng có nguy cơ trễ khung giờ hẹn (Time-window SLA), giúp bộ phận điều phối tuyến ưu tiên xếp xe.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Kho Chuyển phát Nhanh & Logistics Bưu chính</strong>
                <p className="text-[#435164]">
                  Phân loại và xếp ưu tiên các bưu gửi có nguy cơ kết nối trễ chuyến xe đường dài.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: IMPLEMENTATION PLAYBOOK */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>11. IMPLEMENTATION PLAYBOOK — khung thử nghiệm shadow mode & pilot</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F5F2] border border-[#BDE3DA] text-[11px] font-mono font-bold text-[#167A65]">
              VHM RECOMMENDATION
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Khung quy trình thử nghiệm kiểm soát qua các giai đoạn:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">1. Thiết lập Baseline & Làm sạch Dữ liệu WMS:</strong>
                <span className="text-[#435164]">
                  Rà soát tính đầy đủ của dữ liệu mốc thời gian (timestamps) trong WMS (thời điểm nhận đơn, phát hành, lấy hàng, đóng gói).
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">2. Huấn luyện Mô hình Dự báo V1:</strong>
                <span className="text-[#435164]">
                  Sử dụng dữ liệu lịch sử WMS để huấn luyện mô hình ML dự báo nguy cơ vượt SLA.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">3. Thử nghiệm Chế độ Bóng (Shadow Mode Phase):</strong>
                <span className="text-[#435164]">
                  Mô hình AI thực hiện dự báo và ghi nhận cảnh báo ngầm trong khi đội ngũ vận hành vẫn làm việc bình thường theo quy trình cũ. Đo lường Precision, Recall, False Positive Rate, False Negative Risk và thời gian báo trước thực tế.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">4. Triển khai Thử nghiệm Can thiệp (Pilot Intervention Phase):</strong>
                <span className="text-[#435164]">
                  Mở danh sách cảnh báo cho quản lý kho trên 1 luồng công việc để thực hiện can thiệp điều phối thủ công.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">5. So sánh Kết quả:</strong>
                <span className="text-[#435164]">
                  So sánh cycle time và các KPI SLA do doanh nghiệp tự định nghĩa giữa luồng pilot và baseline/control.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: KILL / WARNING CONDITIONS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>12. KILL & WARNING CONDITIONS — dấu hiệu cảnh báo & dừng thử nghiệm</span>
          </div>
          <div className="bg-[#FDF2F2] border border-[#F8D7D7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#FDF2F2] border border-[#F8D7D7] text-[11px] font-mono font-bold text-[#B5473C]">
              VHM RECOMMENDATION
            </div>

            <h4 className="font-bold text-sm text-[#B5473C] uppercase font-mono">
              Cần dừng thử nghiệm hoặc xem xét lại hệ thống nếu xuất hiện các dấu hiệu:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#435164] list-disc pl-5 leading-relaxed">
              <li>
                <strong>Bội thực Cảnh báo (Alert Fatigue):</strong> Mô hình phát ra quá nhiều cảnh báo khiến quản lý kho phớt lờ và không kiểm tra danh sách ngoại lệ.
              </li>
              <li>
                <strong>Báo động giả tràn ngập (False Positive Overload):</strong> Quá nhiều đơn hàng bình thường bị xếp nhầm vào danh sách rủi ro cao, gây lãng phí nguồn lực can thiệp.
              </li>
              <li>
                <strong>Bỏ sót rủi ro nghiêm trọng (False Negative Risk):</strong> Các đơn hàng trễ nặng không được mô hình nhận diện do thiếu các biến số đầu vào quan trọng.
              </li>
              <li>
                <strong>Nghẽn năng lực can thiệp (Intervention Bottleneck):</strong> Mô hình dự báo chính xác nhưng quản lý kho không có đủ nhân lực hoặc thẩm quyền để thực hiện điều phối hiện trường.
              </li>
              <li>
                <strong>Suy giảm hiệu năng mô hình (Model Drift):</strong> Thay đổi về cơ cấu SKU, mùa vụ hoặc layout kho làm suy giảm độ chính xác của dự báo theo thời gian.
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 13: PRIMARY SOURCE */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>13. PRIMARY SOURCE — nguồn bằng chứng gốc</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#167A65] bg-[#E8F5F2] px-2 py-0.5 rounded border border-[#BDE3DA] uppercase">
                  {item.evidenceTier} (DIRECT)
                </span>
                <h5 className="font-bold text-sm text-[#14202B]">
                  &ldquo;{item.evidenceTitle}&rdquo;
                </h5>
                <p className="text-xs text-[#435164]">
                  Tác giả: {item.evidenceAuthors}
                </p>
                <p className="text-xs text-[#667085] font-mono">
                  Transportation Research Part E: Logistics and Transportation Review (Volume 194, Article 103933, Feb 2025)
                </p>
                <p className="text-xs text-[#667085] font-mono">
                  DOI: 10.1016/j.tre.2024.103933
                </p>
              </div>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#235789] hover:bg-[#1B456D] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
              >
                <span>Xem nghiên cứu gốc (Elsevier TRE)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA / Toolkit Registration */}
        <section className="pt-6 sm:pt-8 border-t border-[#DCE2E7]">
          <div className="bg-white border border-[#DCE2E7] rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#14202B]">
              Ứng dụng AI & Tự động hóa chuẩn hóa vận hành
            </h3>
            <p className="text-xs sm:text-sm text-[#435164] max-w-lg mx-auto leading-relaxed">
              Tải bộ <strong>AI Prompt Kit cho Operation Manager V1</strong> (32 Prompts thực chiến chia làm 8 Module) giúp tự động phân tích tồn đọng và chuẩn hóa SOP.
            </p>
            <div className="max-w-md mx-auto">
              <LeadCaptureForm source="radar_detail_006_bottom" buttonText="Đăng ký nhận tài liệu" />
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
