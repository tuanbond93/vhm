import Link from 'next/link';
import {
  ShieldCheck,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Compass,
  Zap,
  BarChart2,
} from 'lucide-react';
import { createRadarMetadata, getRadarItem } from '@/lib/seo';
import { RadarForecastWorkflow } from '@/components/RadarForecastWorkflow';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const item = getRadarItem('radar-002');

export const metadata = createRadarMetadata(item, '002');

export default function RadarDetail002Page() {
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
            RADAR #002 · {item.type}
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
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[#E8F5F2] text-[#167A65] border border-[#BDE3DA]">
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

          <div className="rounded-2xl border border-[#C5D8F9] bg-[#EBF2FE] p-4 sm:flex sm:items-center sm:justify-between sm:gap-5">
            <div>
              <span className="font-mono text-[10px] font-bold text-[#235789]">PRODUCT PROOF #002</span>
              <p className="mt-1 text-sm font-bold text-[#14202B]">Thử planning workspace với override policy và audit context.</p>
            </div>
            <Link href="/radar/demand-forecast-governance" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#235789] hover:text-[#2F6FED] sm:mt-0 sm:shrink-0">
              <span>Chạy Product Proof</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Decision Metadata Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F7F8F5] p-3.5 sm:p-4 rounded-2xl border border-[#DCE2E7] text-xs font-mono">
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">VERDICT:</span>
              <span className="font-bold text-[#167A65]">{item.verdictLabel}</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">EVIDENCE TIER:</span>
              <span className="font-semibold text-[#14202B]">{item.evidenceTier}</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">CONFIDENCE:</span>
              <span className="font-semibold text-[#167A65]">{item.confidence}</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">PRIMARY SOURCE:</span>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#2F6FED] hover:underline inline-flex items-center gap-1"
              >
                <span>Fildes et al. (2009)</span>
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
              Trong quản trị chuỗi cung ứng và kho vận, dự báo nhu cầu (Demand Forecasting) là một phần cốt lõi ảnh hưởng trực tiếp đến kế hoạch tồn kho và dòng tiền. Hầu hết các doanh nghiệp hiện nay đều sử dụng mô hình máy tính để tạo số liệu dự báo cơ sở (Baseline Forecast), đồng thời cho phép các chuyên viên kế hoạch can thiệp điều chỉnh (Judgmental Override) trước khi chốt số liệu.
            </p>
            <p className="text-sm text-[#435164] leading-relaxed">
              Tuy nhiên, câu hỏi lớn đặt ra cho các nhà quản lý vận hành: <strong>Khi nào việc con người can thiệp giúp cải thiện độ chính xác, và khi nào sự can thiệp đó làm dự báo tồi đi?</strong>
            </p>
            <div className="p-3.5 sm:p-4 bg-[#EBF2FE] border border-[#C5D8F9] rounded-xl text-xs text-[#235789] leading-relaxed">
              <strong>Khuyên nghị VHM:</strong> Áp dụng nguyên lý thiết kế <strong>ADOPT DESIGN PRINCIPLE</strong> — <em>Dự báo ưu tiên mô hình kết hợp quản trị can thiệp có điều kiện (Model-First Forecasting with Governed Human Override)</em>.
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT THE RESEARCH ACTUALLY STUDIED */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <BarChart2 className="w-4 h-4 text-[#2F6FED]" />
            <span>2. WHAT THE RESEARCH ACTUALLY STUDIED — bối cảnh nghiên cứu gốc</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F5] border border-[#DCE2E7] text-xs font-mono text-[#667085]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#167A65]" />
              <span>RESEARCH EVIDENCE · PRIMARY PEER-REVIEWED SOURCE</span>
            </div>

            <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl text-xs space-y-1 font-mono">
              <div className="font-bold text-[#14202B]">
                Tên công trình nghiên cứu gốc:
              </div>
              <div className="italic text-[#235789]">
                &ldquo;{item.evidenceTitle}&rdquo;
              </div>
              <div className="text-[#667085] pt-1">
                Tác giả: {item.evidenceAuthors} (International Journal of Forecasting, 2009)
              </div>
              <div className="text-[#667085]">
                DOI: 10.1016/j.ijforecast.2008.11.010
              </div>
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu thu thập và phân tích dữ liệu thực nghiệm trực tiếp từ <strong>4 doanh nghiệp chuỗi cung ứng</strong>, kiểm chứng <strong>hơn 60.000 số liệu dự báo và kết quả nhu cầu thực tế phát sinh</strong>.
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-[#435164] bg-[#F7F8F5] p-4 rounded-xl border border-[#DCE2E7]">
              <strong className="font-bold text-[#14202B] block uppercase font-mono text-xs mb-2">
                Phạm vi đo lường của nghiên cứu:
              </strong>
              <ul className="space-y-1.5 list-disc pl-5 leading-relaxed">
                <li>Số liệu dự báo cơ sở được tạo tự động bằng phần mềm máy tính (Computerized baseline forecasts).</li>
                <li>Các đợt can thiệp điều chỉnh thủ công sau đó của các chuyên viên kế hoạch nhu cầu (Demand Planners).</li>
                <li>So sánh độ chính xác của dự báo trước và sau khi con người can thiệp so với nhu cầu thực tế xảy ra.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT THE RESEARCH FOUND */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>3. WHAT THE RESEARCH FOUND — phát hiện thực nghiệm</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F7F8F5] border border-[#DCE2E7] text-[11px] font-mono font-bold text-[#435164]">
              RESEARCH EVIDENCE
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Bài báo của Fildes et al. (2009) ghi nhận các kết quả thực nghiệm quan trọng sau:
            </p>

            <div className="space-y-3 bg-[#F7F8F5] p-4 sm:p-5 rounded-xl border border-[#DCE2E7] text-xs sm:text-sm">
              <ul className="space-y-2.5 text-[#435164] list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Con người can thiệp với tần suất rất cao:</strong> Trong dữ liệu nghiên cứu, đa số các dự báo cơ sở từ máy tính đều bị chuyên viên kế hoạch chỉnh sửa lại thủ công.
                </li>
                <li>
                  <strong>Các điều chỉnh quy mô nhỏ thường làm giảm độ chính xác:</strong> Những đợt can thiệp điều chỉnh với tỷ lệ phần trăm nhỏ (Small adjustments) có xu hướng làm tăng sai số dự báo trung bình so với số liệu gốc của máy tính.
                </li>
                <li>
                  <strong>Các điều chỉnh quy mô tương đối lớn mang lại cải thiện trung bình tốt hơn:</strong> Các lượt điều chỉnh với quy mô thay đổi lớn (Relatively larger adjustments) có xu hướng tạo ra sự cải thiện độ chính xác trung bình cao hơn.
                </li>
                <li>
                  <strong>Định kiến lạc quan (Optimism Bias):</strong> Các chuyên viên có xu hướng điều chỉnh tăng số liệu dự báo nhiều hơn là điều chỉnh giảm, và các đợt điều chỉnh tăng thường có độ chính xác kém hơn so với các đợt điều chỉnh giảm.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHEN HUMAN OVERRIDES HELP */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>4. WHEN HUMAN OVERRIDES HELP — khi nào can thiệp có hiệu quả</span>
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

            <p className="text-sm text-[#435164] leading-relaxed">
              Dựa trên dữ liệu thực nghiệm, sự can thiệp của con người thể hiện hiệu quả rõ rệt nhất khi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Điều chỉnh quy mô lớn dựa trên bối cảnh</strong>
                <p className="text-[#435164] leading-relaxed">
                  Khi nhân viên vận hành nắm được thông tin sự kiện hoặc bối cảnh ngoài mô hình làm thay đổi đáng kể nhu cầu. <em>(Research Evidence)</em>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Điều chỉnh giảm khi có căn cứ</strong>
                <p className="text-[#435164] leading-relaxed">
                  Các đợt điều chỉnh giảm nhu cầu trong nghiên cứu ghi nhận mức độ cải thiện độ chính xác trung bình tốt hơn các đợt điều chỉnh tăng. <em>(Research Evidence)</em>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Có thông tin bối cảnh định tính</strong>
                <p className="text-[#435164] leading-relaxed">
                  Khi con người sở hữu thông tin mà phần mềm/mô hình chưa được nạp (ví dụ: thông tin sự cố đối tác hoặc chương trình khuyến mại đặc biệt). <em>(VHM Analysis)</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHEN HUMAN OVERRIDES HURT */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>5. WHEN HUMAN OVERRIDES HURT — khi nào can thiệp làm tồi đi</span>
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

            <p className="text-sm text-[#435164] leading-relaxed">
              Việc can thiệp thủ công gây tác động tiêu cực đến độ chính xác khi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">Bẫy điều chỉnh vi mô (Small Adjustments)</strong>
                <p className="text-[#435164] leading-relaxed">
                  Việc liên tục sửa nhẹ con số dự báo lên/xuống vài phần trăm do cảm giác không an tâm làm tăng sai số chung. <em>(Research Evidence)</em>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">Định kiến cá nhân (Bias)</strong>
                <p className="text-[#435164] leading-relaxed">
                  Tâm lý lạc quan thái quá dẫn đến việc chỉnh tăng dự báo thường xuyên nhưng không đạt kết quả thực tế. <em>(Research Evidence)</em>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">Can thiệp không lưu vết lý do</strong>
                <p className="text-[#435164] leading-relaxed">
                  Điều chỉnh số liệu mà không lưu vết lý do bối cảnh làm cho doanh nghiệp không thể đánh giá lại hiệu quả can thiệp. <em>(VHM Analysis)</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHY THIS MATTERS FOR MODERN OPERATIONS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2F6FED]" />
            <span>6. WHY THIS MATTERS FOR MODERN OPERATIONS — phân tích vận hành hiện đại</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-xs font-mono text-[#235789]">
              <span>VHM ANALYSIS / PHÂN TÍCH VẬN HÀNH</span>
            </div>

            <p className="text-xs text-[#667085] italic">
              (Lưu ý: Đây là phân tích điều hành của VHM ứng dụng nguyên lý nghiên cứu vào môi trường vận hành hiện đại, không phải kết quả trực tiếp từ bài báo năm 2009).
            </p>

            <p className="text-sm text-[#435164] leading-relaxed">
              Trong môi trường vận hành hiện nay khi các doanh nghiệp triển khai thuật toán Machine Learning (ML) hoặc AI để dự báo nhu cầu:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">1. Mô hình hiện đại vẫn cần bối cảnh</strong>
                <p className="text-[#435164] leading-relaxed">
                  Thuật toán AI dù hiện đại đến đâu vẫn không thể tự biết các thông tin bối cảnh định tính tức thời nếu dữ liệu đó chưa được nạp vào hệ thống.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">2. Quản trị hành vi can thiệp là chìa khóa</strong>
                <p className="text-[#435164] leading-relaxed">
                  Doanh nghiệp có thể trang bị phần mềm AI đắt tiền, nhưng nếu nhân viên vận hành vẫn giữ thói quen can thiệp cảm tính vi mô, hiệu quả của mô hình AI sẽ bị triệt tiêu bởi sai số con người tạo ra.
                </p>
              </div>
            </div>

            {/* Governed Forecast Workflow Visual */}
            <RadarForecastWorkflow />
          </div>
        </section>

        {/* SECTION 7 & 8: VHM VERDICT */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#167A65]" />
            <span>7. VHM VERDICT — nguyên lý thiết kế đề xuất</span>
          </div>
          <div className="bg-[#E8F5F2] border border-[#BDE3DA] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#167A65] text-white text-xs font-mono font-bold">
              VHM RECOMMENDATION
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-sm sm:text-base font-extrabold px-4 py-1.5 rounded-full bg-[#167A65] text-white">
                ADOPT DESIGN PRINCIPLE
              </span>
            </div>

            <div className="text-xs sm:text-sm text-[#14202B] space-y-3 leading-relaxed">
              <p>
                <strong>Tên nguyên lý:</strong> <em>Dự báo ưu tiên mô hình + Quản trị can thiệp có điều kiện (Model-First Forecasting with Governed Human Override)</em>.
              </p>
              <p className="text-[#435164]">
                <strong>Nội dung:</strong> Vận Hành Mới khuyến nghị doanh nghiệp coi số liệu dự báo từ mô hình là số liệu cơ sở mặc định. Việc con người can thiệp (Override) cần được quản trị bằng quy trình có phân quyền, chỉ nên tập trung vào các trường hợp ngoại lệ có lý do bối cảnh rõ ràng, thay vì cho phép chỉnh sửa tự do không kiểm soát.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: VIETNAM OPERATIONS FIT */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#235789]" />
            <span>8. VIETNAM OPERATIONS FIT — tính phù hợp tại việt nam</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
              VHM ANALYSIS
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Đánh giá tính ứng dụng nguyên lý tại thị trường Việt Nam:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Bán lẻ & Chuỗi cửa hàng (Retail)</strong>
                <p className="text-[#435164]">
                  Phù hợp để quản trị việc cửa hàng trưởng tự ý chỉnh số lượng đặt hàng hàng ngày mà không có lý do bối cảnh khuyến mại cụ thể.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Logistics & Kế hoạch Kho (Warehousing)</strong>
                <p className="text-[#435164]">
                  Sử dụng dự báo cơ sở để lập kế hoạch diện tích và nhân lực ca làm việc, giảm thiểu sự cố do ước tính cảm tính của quản lý kho.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Kế hoạch Tồn kho (Inventory Planning)</strong>
                <p className="text-[#435164]">
                  Giúp bộ phận Cung ứng tập trung năng lực vào việc xử lý các SKU ngoại lệ biến động lớn thay vì rải sức chỉnh sửa toàn bộ danh mục hàng hóa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: IMPLEMENTATION PLAYBOOK */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>9. IMPLEMENTATION PLAYBOOK — khung triển khai cho doanh nghiệp</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F5F2] border border-[#BDE3DA] text-[11px] font-mono font-bold text-[#167A65]">
              VHM RECOMMENDATION
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Khung triển khai quản trị can thiệp dự báo cho doanh nghiệp:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">1. Thiết lập Dự báo Cơ sở (Baseline Forecast):</strong>
                <span className="text-[#435164]">
                  Sử dụng phần mềm/mô hình để tự động tạo số liệu dự báo cho danh mục hàng hóa.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">2. Quy định Ngưỡng Cảnh báo Ngoại lệ (Exception Threshold):</strong>
                <span className="text-[#435164]">
                  Xây dựng ngưỡng cảnh báo tùy theo đặc thù từng doanh nghiệp (ví dụ: SKU có biến động dự báo vượt quá mốc rủi ro) để gợi ý danh mục cần con người xem xét.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">3. Phân quyền Thẩm quyền Can thiệp (Override Authority):</strong>
                <span className="text-[#435164]">
                  Quy định rõ cấp quản lý được phép phê duyệt điều chỉnh theo quy mô tiền hàng.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">4. Áp dụng Bắt buộc Mã Lý do (Mandatory Reason Code):</strong>
                <span className="text-[#435164]">
                  Yêu cầu nhân viên chọn mã lý do khi can thiệp (ví dụ: PROMOTION_EVENT, SUPPLY_DISRUPTION, PRICE_CHANGE) để phục vụ kiểm toán dữ liệu.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">5. Đánh giá Định kỳ Hiệu quả Can thiệp:</strong>
                <span className="text-[#435164]">
                  Định kỳ so sánh sai số dự báo giữa Số liệu Gốc từ Mô hình và Số liệu Sau Can thiệp để đo lường năng lực của từng bộ phận.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: KILL / WARNING CONDITIONS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>10. KILL & WARNING CONDITIONS — dấu hiệu cảnh báo</span>
          </div>
          <div className="bg-[#FDF2F2] border border-[#F8D7D7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#FDF2F2] border border-[#F8D7D7] text-[11px] font-mono font-bold text-[#B5473C]">
              VHM RECOMMENDATION
            </div>

            <h4 className="font-bold text-sm text-[#B5473C] uppercase font-mono">
              Doanh nghiệp cần xem xét lại hoặc siết chặt chính sách can thiệp nếu xuất hiện các dấu hiệu:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#435164] list-disc pl-5 leading-relaxed">
              <li>
                <strong>Can thiệp liên tục làm giảm độ chính xác:</strong> Nếu kết quả đánh giá định kỳ cho thấy các đợt can thiệp thủ công liên tục làm sai số dự báo tăng lên so với số liệu gốc của mô hình cơ sở.
              </li>
              <li>
                <strong>Lạm dụng mã lý do không xác định:</strong> Nhân viên thường xuyên chọn mã lý do chung chung (OTHER hoặc nhập văn bản đối phó) để qua mặt hệ thống.
              </li>
              <li>
                <strong>Can thiệp rải thảm:</strong> Nhân viên dành thời gian chỉnh sửa lại hầu hết các dòng dự báo thay vì tập trung vào các trường hợp ngoại lệ thực sự.
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 12: PRIMARY SOURCE */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>11. PRIMARY SOURCE — nguồn bằng chứng gốc</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#167A65] bg-[#E8F5F2] px-2 py-0.5 rounded border border-[#BDE3DA] uppercase">
                  {item.evidenceTier}
                </span>
                <h5 className="font-bold text-sm text-[#14202B]">
                  &ldquo;{item.evidenceTitle}&rdquo;
                </h5>
                <p className="text-xs text-[#435164]">
                  Tác giả: {item.evidenceAuthors}
                </p>
                <p className="text-xs text-[#667085] font-mono">
                  International Journal of Forecasting (Volume 25, Issue 1, Pages 3–23, 2009)
                </p>
                <p className="text-xs text-[#667085] font-mono">
                  DOI: 10.1016/j.ijforecast.2008.11.010
                </p>
              </div>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#235789] hover:bg-[#1B456D] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
              >
                <span>Xem nghiên cứu gốc</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA / Toolkit Registration */}
        <section className="pt-6 sm:pt-8 border-t border-[#DCE2E7]">
          <div className="bg-white border border-[#DCE2E7] rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#14202B]">
              Ứng dụng AI chuẩn hóa vận hành ngay hôm nay
            </h3>
            <p className="text-xs sm:text-sm text-[#435164] max-w-lg mx-auto leading-relaxed">
              Tải bộ <strong>AI Prompt Kit cho Operation Manager V1</strong> (32 Prompts thực chiến chia làm 8 Module) giúp tự động phân tích tồn đọng và chuẩn hóa SOP.
            </p>
            <div className="max-w-md mx-auto">
              <LeadCaptureForm source="radar_detail_002_bottom" buttonText="Đăng ký nhận tài liệu" />
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
