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
  Users,
} from 'lucide-react';
import { createRadarMetadata, getRadarItem } from '@/lib/seo';
import { RadarKnowledgeWorkflow } from '@/components/RadarKnowledgeWorkflow';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const item = getRadarItem('radar-003');

export const metadata = createRadarMetadata(item, '003');

export default function RadarDetail003Page() {
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
            RADAR #003 · {item.type}
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
                <span>Brynjolfsson et al. (QJE 2025)</span>
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
              Trong các bộ phận chăm sóc khách hàng (CSKH), hỗ trợ kỹ thuật và vận hành dịch vụ, Generative AI (GenAI) đang được kỳ vọng là giải pháp nâng cao năng suất toàn đoàn. Tuy nhiên, nếu nhà quản lý vận hành chỉ nhìn AI dưới góc độ tổng thể hoặc kỳ vọng mọi nhân viên đều tăng trưởng năng suất giống nhau, doanh nghiệp sẽ dễ đưa ra các quyết định nhân sự sai lầm.
            </p>
            <p className="text-sm text-[#435164] leading-relaxed">
              Bằng chứng thực nghiệm quy mô lớn công bố trên tạp chí <em>The Quarterly Journal of Economics</em> (Brynjolfsson, Li & Raymond, 2025) trên 5.172 nhân viên hỗ trợ chứng minh rằng: <strong>Tác động của GenAI có sự phân hóa cực kỳ mạnh mẽ.</strong> AI giúp nhóm nhân sự ít kinh nghiệm và kỹ năng thấp tăng khoảng <strong>30% năng suất</strong>, trong khi nhóm chuyên gia lành nghề hầu như <strong>không ghi nhận mức tăng năng suất đáng kể</strong>.
            </p>
            <div className="p-3.5 sm:p-4 bg-[#EBF2FE] border border-[#C5D8F9] rounded-xl text-xs text-[#235789] leading-relaxed">
              <strong>Khuyến nghị VHM:</strong> Áp dụng nguyên lý thiết kế <strong>ADOPT DESIGN PRINCIPLE</strong> — <em>Coi AI là Bộ nhân bản Tri thức (Knowledge Multiplier), không phải công cụ thay thế chuyên gia</em>.
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT THE RESEARCH ACTUALLY STUDIED */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Users className="w-4 h-4 text-[#2F6FED]" />
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
                Tác giả: {item.evidenceAuthors} (The Quarterly Journal of Economics, Vol. 140, Issue 2, May 2025, pp. 889–942)
              </div>
              <div className="text-[#667085]">
                DOI: 10.1093/qje/qjae044
              </div>
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu theo dõi thực nghiệm trong hơn 1 năm trên <strong>5.172 nhân viên hỗ trợ khách hàng</strong> làm việc tại một công ty phần mềm doanh nghiệp đa quốc gia thông qua phương pháp triển khai lệch ca (staggered rollout).
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-[#435164] bg-[#F7F8F5] p-4 rounded-xl border border-[#DCE2E7]">
              <strong className="font-bold text-[#14202B] block uppercase font-mono text-xs mb-2">
                Phạm vi đo lường trực tiếp của nghiên cứu:
              </strong>
              <ul className="space-y-1.5 list-disc pl-5 leading-relaxed">
                <li>Số lượng sự cố giải quyết thành công trên mỗi giờ (Resolutions per Hour - RPH).</li>
                <li>Sự phân hóa tác động theo độ thâm niên và trình độ kỹ năng của nhân viên.</li>
                <li>Độ chuẩn hóa ngôn ngữ (English Fluency), tỷ lệ khách hàng yêu cầu chuyển ca cho quản lý (Supervisor Escalations), và tỷ lệ nghỉ việc của nhân viên (Agent Attrition).</li>
              </ul>
            </div>

            <p className="text-xs text-[#667085] italic">
              (Lưu ý: Công trình nghiên cứu này KHÔNG ước tính tác động đến tổng số lượng việc làm, mức lương hay tỷ lệ thay thế nhân công của toàn bộ nền kinh tế).
            </p>
          </div>
        </section>

        {/* SECTION 3: FOUR CORE OPERATIONS INSIGHTS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>3. FOUR CORE OPERATIONS INSIGHTS — 4 phát hiện vận hành cốt lõi</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F7F8F5] border border-[#DCE2E7] text-[11px] font-mono font-bold text-[#435164]">
              RESEARCH EVIDENCE
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Bài báo chính thức trên tạp chí QJE (2025) cung cấp 4 phát hiện vận hành cốt lõi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  A. Tác động năng suất mang tính phân hóa sâu sắc (Heterogeneous Impact)
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Dữ liệu thực nghiệm ghi nhận mức tăng năng suất trung bình toàn đoàn là <strong>15%</strong> RPH. Tuy nhiên, nhóm nhân sự ít kinh nghiệm và kỹ năng thấp nhất (bottom quintile) tăng khoảng <strong>30%</strong> năng suất; trong khi nhóm nhân sự chuyên gia có kỹ năng cao nhất (top quintile) ghi nhận mức gia tăng năng suất gần như bằng 0.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  B. Rút ngắn đáng kể đường cong học tập
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Nhân viên mới có khoảng <strong>2 tháng kinh nghiệm</strong> khi sử dụng công cụ AI hỗ trợ đạt mức năng suất tương đương với những nhân viên không sử dụng AI có <strong>hơn 6 tháng kinh nghiệm</strong>.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  C. Nâng cao chuẩn mực ngôn ngữ & Hỗ trợ ca hiếm gặp vừa phải
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  AI giúp cải thiện độ thông thạo tiếng Anh cho nhóm nhân sự quốc tế. Đồng thời, mức tăng năng suất cao nhất tập trung ở các nhóm sự cố có độ hiếm vừa phải (moderately rare problems) — nơi nhân viên ít có trải nghiệm thực tế nhưng hệ thống AI vẫn tích lũy đủ dữ liệu huấn luyện.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  D. Cải thiện giao tiếp khách hàng & Tỷ lệ giữ chân
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  AI làm giảm tỷ lệ khách hàng yêu cầu chuyển ca cho quản lý và đi kèm với thái độ giao tiếp lịch sự hơn từ phía khách hàng. Triển khai AI đi kèm với tỷ lệ nghỉ việc thấp hơn, đặc biệt ở nhóm nhân viên mới.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DURABLE LEARNING & OUTAGE EVIDENCE */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>4. DURABLE LEARNING & OUTAGE EVIDENCE — bằng chứng về hiệu ứng học tập</span>
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
              Nghiên cứu QJE ghi nhận một phát hiện quan trọng: Trong các khoảng thời gian hệ thống AI gặp sự cố dừng hoạt động đột xuất (Outage), nhóm nhân viên từng được hỗ trợ bởi AI <strong>vẫn duy trì được mức năng suất cao hơn mức baseline trước khi triển khai AI</strong> (*Research Evidence*).
            </p>

            <div className="p-4 bg-[#E8F5F2] border border-[#BDE3DA] rounded-xl text-xs sm:text-sm text-[#14202B] leading-relaxed">
              <strong>Phân tích VHM:</strong> Điều này cung cấp bằng chứng rằng AI không chỉ là một công cụ tra cứu thụ động, mà các gợi ý của AI giúp lan tỏa các mẫu giao tiếp và cách thức xử lý hiệu quả từ nhóm nhân sự làm việc tốt sang nhóm nhân sự mới.
            </div>
          </div>
        </section>

        {/* SECTION 5: WHY EXPERIENCED WORKERS MAY BENEFIT LESS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>5. WHY EXPERIENCED WORKERS MAY BENEFIT LESS — vì sao chuyên gia ít tăng năng suất hơn</span>
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
              Nghiên cứu chỉ ra nhóm chuyên gia có kỹ năng cao nhất ghi nhận sự thay đổi năng suất tổng thể rất nhỏ. Dữ liệu thực nghiệm phản ánh sắc thái (nuance) sau:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Tăng nhẹ tốc độ xử lý</strong>
                <p className="text-[#435164] leading-relaxed">
                  Chuyên gia đạt được sự cải thiện nhỏ về tốc độ gõ phím/phản hồi thô khi dùng gợi ý mẫu từ AI. <em>(Research Evidence)</em>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">Giảm nhẹ chất lượng hội thoại</strong>
                <p className="text-[#435164] leading-relaxed">
                  Nhóm chuyên gia ghi nhận mức giảm nhẹ về chỉ số chất lượng giao tiếp khi dùng các gợi ý có tính chuẩn hóa chung của AI. <em>(Research Evidence)</em>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Lợi ích tổng thể gần như bằng 0</strong>
                <p className="text-[#435164] leading-relaxed">
                  Sự bù trừ giữa tăng tốc độ nhẹ và giảm nhẹ chất lượng khiến tổng lợi ích năng suất của nhóm chuyên gia là không đáng kể. <em>(VHM Analysis)</em>
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
              (Lưu ý: Đây là phân tích điều hành của VHM áp dụng nguyên lý nghiên cứu vào môi trường vận hành hiện đại, không phải kết quả trực tiếp từ bài báo QJE 2025).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  1. Thay đổi góc nhìn về giá trị của AI
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Giá trị lớn nhất của GenAI nằm ở khả năng nâng chuẩn năng lực cho nhóm nhân sự tầm trung và nhân sự mới, đưa họ tiệm cận hiệu suất của nhóm giỏi.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  2. Không dùng nghiên cứu làm bằng chứng sa thải chuyên gia
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Không nên lấy kết quả nghiên cứu này làm bằng chứng trực tiếp cho quyết định cắt giảm nhóm chuyên gia. Trong mô hình vận hành do VHM đề xuất, nhóm chuyên gia tiếp tục đóng vai trò xử lý các trường hợp ngoại lệ phức tạp, kiểm soát chất lượng và đóng góp tri thức cho hệ thống.
                </p>
              </div>
            </div>

            {/* AI Knowledge Governance Workflow Visual */}
            <RadarKnowledgeWorkflow />
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
                <strong>Tên nguyên lý:</strong> <em>AI là Bộ nhân bản Tri thức, Không phải Công cụ Thay thế Chuyên gia (AI as Knowledge Multiplier, Not Expert Replacement)</em>.
              </p>
              <p className="text-[#435164]">
                <strong>Nội dung:</strong> Khuyến nghị các doanh nghiệp triển khai GenAI như một giải pháp số hóa tri thức vận hành để nâng chuẩn năng lực cho nhóm nhân sự frontline và nhân sự mới. Duy trì và tưởng thưởng đội ngũ chuyên gia giỏi để họ tiếp tục giữ vai trò kiểm soát chất lượng và cập nhật dữ liệu tri thức mới cho hệ thống.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: VIETNAM OPERATIONS FIT */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#235789]" />
            <span>8. VIETNAM OPERATIONS FIT — tính phù hợp định tính tại việt nam</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
              VHM ANALYSIS
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Đánh giá tính ứng dụng định tính tại thị trường Việt Nam:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Tổng đài CSKH & Trung tâm Dịch vụ</strong>
                <p className="text-[#435164]">
                  Giúp giảm áp lực đào tạo ban đầu và hỗ trợ nhân viên mới xử lý các cuộc gọi bằng tiếng Anh hoặc ngôn ngữ chuyên ngành.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Vận hành Chuỗi Bán lẻ & E-commerce</strong>
                <p className="text-[#435164]">
                  Hỗ trợ nhân viên tư vấn mới tra cứu nhanh chính sách bảo hành, đổi trả và thông số kỹ thuật sản phẩm phức tạp.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Hỗ trợ Vận hành Kho vận & Logistics</strong>
                <p className="text-[#435164]">
                  Giúp nhân viên điều phối mới xử lý các sự cố giao nhận hàng hóa có độ hiếm vừa phải dựa trên các mẫu xử lý đã được đóng gói.
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
              Khung triển khai ứng dụng GenAI nâng chuẩn năng lực cho đội ngũ:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">1. Số hóa Mẫu Thực hành Xuất sắc:</strong>
                <span className="text-[#435164]">
                  Thu thập và đóng gói các mẫu hội thoại và quy trình xử lý thành công từ nhóm nhân sự làm việc hiệu quả để nạp vào cơ sở tri thức AI.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">2. Triển khai AI Trợ lý hiện trường:</strong>
                <span className="text-[#435164]">
                  Trang bị công cụ gợi ý ngữ cảnh thời gian thực cho nhân viên mới và nhân viên có kỹ năng trung bình.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">3. Giữ quyền ra quyết định của con người:</strong>
                <span className="text-[#435164]">
                  Nhân viên hiện trường luôn là người duyệt cuối cùng trước khi phản hồi khách hàng.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">4. Đo lường Tốc độ Học tập:</strong>
                <span className="text-[#435164]">
                  Theo dõi các chỉ số năng suất (RPH) và chất lượng (CSAT) của nhân sự mới theo các mốc thời gian để đánh giá hiệu quả hỗ trợ.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">5. Duy trì Đội ngũ Chuyên gia:</strong>
                <span className="text-[#435164]">
                  Xây dựng cơ chế tôn vinh và đãi ngộ nhóm chuyên gia — những người giữ vai trò xử lý ca khó và duy trì chất lượng tri thức cho hệ thống AI.
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
              Doanh nghiệp cần xem xét lại hoặc siết chặt chính sách nếu xuất hiện các dấu hiệu:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#435164] list-disc pl-5 leading-relaxed">
              <li>
                <strong>Suy giảm động lực nhóm chuyên gia:</strong> Nhóm nhân sự giỏi cảm thấy không được ghi nhận khi tri thức của họ bị khai thác mà không có chính sách đãi ngộ tương ứng.
              </li>
              <li>
                <strong>Lạm dụng copy-paste thụ động:</strong> Nhân viên mới sao chép hoàn toàn gợi ý của AI mà không suy nghĩ hay kiểm tra lại bối cảnh thực tế.
              </li>
              <li>
                <strong>Sai sót ở các ca hiếm gặp đặc biệt:</strong> AI đưa ra gợi ý không chuẩn xác đối với các sự cố hoàn toàn mới vượt ngoài dữ liệu huấn luyện.
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
                  The Quarterly Journal of Economics (Volume 140, Issue 2, May 2025, Pages 889–942)
                </p>
                <p className="text-xs text-[#667085] font-mono">
                  DOI: 10.1093/qje/qjae044
                </p>
              </div>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#235789] hover:bg-[#1B456D] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
              >
                <span>Xem nghiên cứu gốc (QJE)</span>
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
              <LeadCaptureForm source="radar_detail_003_bottom" buttonText="Đăng ký nhận tài liệu" />
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
