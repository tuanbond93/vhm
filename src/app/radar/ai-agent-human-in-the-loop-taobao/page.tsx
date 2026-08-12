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
} from 'lucide-react';
import { createRadarMetadata, getRadarItem } from '@/lib/seo';
import { RadarWorkflow } from '@/components/RadarWorkflow';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const item = getRadarItem('radar-001');

export const metadata = createRadarMetadata(item, '001');

export default function RadarDetail001Page() {
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

      {/* Navigation Breadcrumb (Mobile Meta Header: 2 clean rows on mobile, 1 row on desktop) */}
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
            RADAR #001 · {item.type}
          </div>
        </div>
      </div>

      {/* Article Header (Balanced Max Width Container) */}
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

          {/* Controlled H1 Title: Reduced ~15-20% on mobile for zero overflow/clipping */}
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
                <span>arXiv 2605.14830</span>
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
            <p className="text-sm sm:text-base text-[#14202B] leading-relaxed font-medium">
              Trong làn sóng áp dụng Generative AI và AI Agents trong vận hành dịch vụ khách hàng, nhiều doanh nghiệp đang tìm cách tự động hóa tối đa quy trình xử lý. Tuy nhiên, bằng chứng thực nghiệm từ nghiên cứu quy mô lớn tại Alibaba chỉ ra rằng: <strong>Mặc dù Agentic AI giúp giảm thời gian hội thoại trung bình, điểm đánh giá của khách hàng ở các ca đủ điều kiện sử dụng AI lại sụt giảm đáng kể.</strong>
            </p>
            <div className="p-3.5 sm:p-4 bg-[#EBF2FE] border border-[#C5D8F9] rounded-xl text-xs text-[#235789] leading-relaxed">
              <strong>Khuyên nghị VHM:</strong> Áp dụng <strong>ADOPT DESIGN PRINCIPLE</strong> — tiếp thu nguyên lý kiến trúc <em>Bounded Automation (Tự động hóa có ranh giới)</em> kết hợp <em>Early Escalation (Escalation sớm cho con người)</em>. KHÔNG áp dụng tự động hóa tự quyết hoàn toàn mà không có điểm kiểm soát.
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT CHANGED? */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>2. WHAT CHANGED? — kết quả thực nghiệm từ nghiên cứu</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F5] border border-[#DCE2E7] text-xs font-mono text-[#667085]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#167A65]" />
              <span>DỮ LIỆU THỰC CHỨNG TỪ PRIMARY RESEARCH (arXiv 2605.14830)</span>
            </div>

            <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl text-xs space-y-1 font-mono">
              <div className="font-bold text-[#14202B]">
                Tên công trình nghiên cứu gốc:
              </div>
              <div className="italic text-[#235789]">
                &ldquo;{item.evidenceTitle}&rdquo;
              </div>
              <div className="text-[#667085] pt-1">
                Tác giả: {item.evidenceAuthors}
              </div>
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu thực nghiệm tại bộ phận chăm sóc khách hàng của Alibaba đo lường tác động trực tiếp của Agentic AI và các hình thức can thiệp của con người. Kết quả ghi nhận các điểm thực chứng quan trọng sau:
            </p>

            <div className="space-y-3 bg-[#F7F8F5] p-4 sm:p-5 rounded-xl border border-[#DCE2E7] text-xs sm:text-sm">
              <h4 className="font-bold text-[#14202B] uppercase font-mono text-xs">
                Các phát hiện được chứng minh bởi dữ liệu nghiên cứu:
              </h4>
              <ul className="space-y-2 text-[#435164] list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Giảm thời gian hội thoại trung bình (Chat Duration):</strong> Việc áp dụng Agentic AI rút ngắn thời gian xử lý mỗi phiên hội thoại một cách rõ rệt.
                </li>
                <li>
                  <strong>Tác động hạn chế lên tỷ lệ lặp lại hội thoại (Retrial Rates):</strong> Tỷ lệ khách hàng phải liên hệ lại sau khi làm việc với AI không ghi nhận sự cải thiện đáng kể.
                </li>
                <li>
                  <strong>Điểm đánh giá hài lòng của khách hàng giảm:</strong> Mức độ hài lòng của khách hàng (Customer Satisfaction Ratings) ở các ca đủ điều kiện sử dụng AI bị sụt giảm hơn so với khi có con người trực tiếp hỗ trợ.
                </li>
                <li>
                  <strong>Hiệu quả can thiệp của con người phụ thuộc vào dạng lỗi (Failure Type):</strong> Tác động của con người khi can thiệp vào quy trình phụ thuộc lớn vào bản chất loại sự cố (lỗi dữ liệu, tranh chấp giá trị, bất đồng quan điểm).
                </li>
                <li>
                  <strong>Vai trò của can thiệp sớm (Early Intervention):</strong> Việc phát hiện và chuyển giao ca cho con người xử lý ở giai đoạn đầu (Early Stage) giúp duy trì nỗ lực và hiệu quả xử lý sau khi leo thang.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY OPERATIONS SHOULD CARE */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2F6FED]" />
            <span>3. WHY OPERATIONS SHOULD CARE — suy luận vận hành vhm</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-xs font-mono text-[#235789]">
              <span>VHM OPERATOR INTERPRETATION / PHÂN TÍCH ĐIỀU HÀNH</span>
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Từ các phát hiện thực chứng trên, Vận Hành Mới rút ra 4 góc nhìn điều hành cho các nhà quản lý vận hành:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">1. Tốc độ &#8800; Trải nghiệm thực tế</strong>
                <p className="text-[#435164] leading-relaxed">
                  Rút ngắn thời gian chat bằng AI có thể tối ưu hiệu suất xử lý thô, nhưng nếu giảm điểm đánh giá hài lòng thì chi phí gián tiếp đối với thương hiệu vẫn rất lớn.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">2. Phân loại lỗi để thiết kế điểm can thiệp</strong>
                <p className="text-[#435164] leading-relaxed">
                  Vì hiệu quả can thiệp của con người khác nhau theo từng dạng lỗi, quản lý cần phân loại sự cố để thiết kế luồng xử lý riêng thay vì áp dụng một quy trình chung.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">3. Can thiệp sớm giữ nhịp xử lý</strong>
                <p className="text-[#435164] leading-relaxed">
                  Đưa con người vào ngay khi AI gặp dấu hiệu quá tải giúp giữ được ngữ cảnh và duy trì hiệu quả xử lý ở các bước tiếp theo.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">4. Escalation là workflow có cấu trúc</strong>
                <p className="text-[#435164] leading-relaxed">
                  Chuyển giao giữa AI và Con người phải được chuẩn hóa với đầy đủ bằng chứng, không phải hành động đẩy trách nhiệm ngẫu nhiên.
                </p>
              </div>
            </div>

            {/* Operational Workflow Visual */}
            <RadarWorkflow />
          </div>
        </section>

        {/* SECTION 4: PRACTICAL USE CASES */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>4. PRACTICAL USE CASES — ứng dụng thực tế trong vận hành</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <p className="text-sm text-[#435164] leading-relaxed">
              Các kịch bản ứng dụng kiến trúc Bounded AI + Early Escalation trong môi trường vận hành thực tế:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Xử lý sự cố giao vận (Delivery Exceptions):</strong>
                <span className="text-[#435164]">
                  AI tự động phân loại sự cố đơn hàng. Nếu là đơn hàng giá trị cao hoặc ca khiếu nại lặp lại, AI tự động chuyển ca kèm tóm tắt ngữ cảnh cho nhân viên điều hành thay vì tự động đóng ticket.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Kiểm đếm & Điều chỉnh kho (Warehouse Exceptions):</strong>
                <span className="text-[#435164]">
                  AI tự động phát hiện lệch tồn kho. Nếu mức lệch vượt ngưỡng cho phép, AI tạo đề xuất kèm bằng chứng lịch sử để Trưởng kho xem xét và ra quyết định điều chỉnh.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Triage Rủi ro SLA Khách hàng:</strong>
                <span className="text-[#435164]">
                  AI quét tiến độ xử lý khiếu nại. Khi tiến trình tiệm cận mốc cảnh báo SLA, AI tự động thông báo cho Quản lý ca để can thiệp sớm trước khi xảy ra vi phạm SLA.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: VIETNAM APPLICABILITY */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#235789]" />
            <span>5. VIETNAM APPLICABILITY — bối cảnh vận hành việt nam</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <p className="text-sm text-[#435164] leading-relaxed">
              Các lưu ý khi tham chiếu kết quả nghiên cứu vào thực tế vận hành tại Việt Nam:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Chất lượng dữ liệu đầu vào</strong>
                <p className="text-[#435164]">
                  Dữ liệu vận hành tại nhiều doanh nghiệp Việt Nam còn phân tán. AI cần dữ liệu được chuẩn hóa trước khi áp dụng tự động hóa.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Chuẩn hóa SOP trước khi tự động hóa</strong>
                <p className="text-[#435164]">
                  Cần làm rõ ranh giới trách nhiệm và quy trình phối hợp giữa các bộ phận trước khi cài đặt luật cho AI.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Thanh tra & Giám sát hiện trường</strong>
                <p className="text-[#435164]">
                  Quản lý vận hành cần bộ công cụ theo dõi (Control Tower) để nắm rõ các ca AI chuyển giao và duy trì chất lượng dịch vụ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: RISKS / LIMITATIONS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>6. RISKS & LIMITATIONS — rủi ro & giới hạn</span>
          </div>
          <div className="bg-[#FDF2F2] border border-[#F8D7D7] rounded-2xl p-5 sm:p-8 space-y-4">
            <h4 className="font-bold text-sm text-[#B5473C] uppercase font-mono">
              Cảnh báo rủi ro vận hành:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#435164] list-disc pl-5 leading-relaxed">
              <li>
                <strong>Automation Bias:</strong> Nhân viên có thể phụ thuộc hoàn toàn vào đề xuất của AI mà bỏ qua bước kiểm tra lại bằng chứng.
              </li>
              <li>
                <strong>Delayed Escalation:</strong> Cài đặt ngưỡng chuyển giao không hợp lý khiến AI giữ ca quá lâu trước khi chuyển cho con người.
              </li>
              <li>
                <strong>Bối cảnh nghiên cứu:</strong> Kết quả thực nghiệm tại Alibaba phản ánh bối cảnh thương mại điện tử quy mô lớn, không nên áp dụng máy móc vào các quy mô vận hành khác mà không qua thử nghiệm.
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 7: EVIDENCE */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>7. EVIDENCE — nguồn bằng chứng gốc</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#167A65] bg-[#E8F5F2] px-2 py-0.5 rounded border border-[#BDE3DA] uppercase">
                  TIER 1 / PRIMARY RESEARCH
                </span>
                <h5 className="font-bold text-sm text-[#14202B]">
                  &ldquo;{item.evidenceTitle}&rdquo;
                </h5>
                <p className="text-xs text-[#435164]">
                  Tác giả: {item.evidenceAuthors}
                </p>
                <p className="text-xs text-[#667085] font-mono">
                  arXiv Identifier: arXiv:2605.14830
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

        {/* SECTION 8: VHM VERDICT */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#167A65]" />
            <span>8. VHM VERDICT — kết luận điều hành</span>
          </div>
          <div className="bg-[#E8F5F2] border border-[#BDE3DA] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm sm:text-base font-extrabold px-4 py-1.5 rounded-full bg-[#167A65] text-white">
                ADOPT DESIGN PRINCIPLE
              </span>
            </div>
            <div className="text-xs sm:text-sm text-[#14202B] space-y-3 leading-relaxed">
              <p>
                <strong>Khuyến nghị VHM:</strong> Áp dụng <em>nguyên lý thiết kế Bounded Automation + Early Escalation</em> vào việc xây dựng quy trình tự động hóa bằng AI.
              </p>
              <p className="text-[#435164]">
                <strong>KHÔNG khuyến nghị:</strong> Tự động hóa hoàn toàn 100% không có điểm can thiệp của con người hoặc tự ý suy rộng kết quả nghiên cứu thành các tuyên bố ROI/chi phí không có căn cứ.
              </p>
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
              <LeadCaptureForm source="radar_detail_001_bottom" buttonText="Đăng ký nhận tài liệu" />
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
