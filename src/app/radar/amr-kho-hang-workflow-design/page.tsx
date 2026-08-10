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
  Bot,
} from 'lucide-react';
import { RADAR_ITEMS } from '@/lib/radar-data';
import { RadarAMRWorkflow } from '@/components/RadarAMRWorkflow';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const item = RADAR_ITEMS[0]; // Radar #005 (newest)

export const metadata: Metadata = {
  title: `${item.title} | VHM Radar #005`,
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

export default function RadarDetail005Page() {
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
            RADAR #005 · {item.type}
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
                <span>Fragapane et al. (EJOR 2021)</span>
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
              Trong các trung tâm phân phối và kho vận hiện đại, việc ứng dụng Robot Di động Tự hành (Autonomous Mobile Robots - AMRs) đang được xem xét rộng rãi nhằm nâng cao năng lực luân chuyển hàng hóa nội bộ. Tuy nhiên, nếu nhà điều hành tiếp cận công nghệ này như một giải pháp đơn thuần để thay thế lao động hoặc kỳ vọng tự động hóa 100% kho hàng mà không điều chỉnh quy trình, dự án sẽ dễ gặp bẫy chi phí phát sinh và giảm hiệu quả vận hành.
            </p>
            <p className="text-sm text-[#435164] leading-relaxed">
              Bài tổng quan nghiên cứu trên tạp chí <em>European Journal of Operational Research</em> (Fragapane, de Koster, Sgarbossa & Strandhagen, 2021) tổng hợp các khung lý thuyết lập kế hoạch và điều phối đội xe AMR trong intralogistics.
            </p>
            <div className="p-3.5 sm:p-4 bg-[#EBF2FE] border border-[#C5D8F9] rounded-xl text-xs text-[#235789] leading-relaxed">
              <strong>Phân tích VHM:</strong> <em>Giá trị thực tế của AMR không nằm ở việc mua sắm thiết bị phần cứng, mà nằm ở năng lực tái thiết kế luồng công việc và phân công nhiệm vụ phù hợp giữa Con người và Robot (Human–Robot Task Allocation).</em>
            </div>
            <div className="p-3.5 sm:p-4 bg-[#FEF5E7] border border-[#F9E2C1] rounded-xl text-xs text-[#C47A16] leading-relaxed font-medium">
              <strong>Khuyến nghị VHM:</strong> Khuyên dùng nguyên lý <strong>TEST IN CONTROLLED WORKFLOW</strong>: <em>Thiết kế luồng tương tác Con người - Robot trước khi đầu tư tự động hóa (Human–Robot Workflow Design Before Full Automation)</em>.
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT THE RESEARCH ACTUALLY STUDIED */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Bot className="w-4 h-4 text-[#2F6FED]" />
            <span>2. WHAT THE RESEARCH ACTUALLY STUDIED — bối cảnh nghiên cứu gốc</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F5] border border-[#DCE2E7] text-xs font-mono text-[#667085]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#167A65]" />
              <span>RESEARCH EVIDENCE · PRIMARY PEER-REVIEWED REVIEW</span>
            </div>

            <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl text-xs space-y-1 font-mono">
              <div className="font-bold text-[#14202B]">
                Tên công trình nghiên cứu gốc:
              </div>
              <div className="italic text-[#235789]">
                &ldquo;{item.evidenceTitle}&rdquo;
              </div>
              <div className="text-[#667085] pt-1">
                Tác giả: {item.evidenceAuthors} (European Journal of Operational Research, Vol. 294, Issue 2, pp. 405–426, 2021)
              </div>
              <div className="text-[#667085]">
                DOI: 10.1016/j.ejor.2021.01.019
              </div>
              <div className="text-[#667085]">
                Phân loại: INVITED REVIEW / EXTENDED LITERATURE REVIEW + PLANNING & CONTROL FRAMEWORK
              </div>
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu tổng hợp các mô hình toán học và khung lý thuyết về: phân loại công nghệ di chuyển (AGVs vs AMRs), lập kế hoạch tuyến đường (routing), điều phối đội xe (dispatching), quản lý ùn tắc (congestion control) và các khía cạnh tương tác con người (human factors) trong mặt bằng kho.
            </p>
          </div>
        </section>

        {/* SECTION 3: WHAT THE LITERATURE ACTUALLY SHOWS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>3. WHAT THE LITERATURE ACTUALLY SHOWS — các phát hiện luận điểm chính</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F7F8F5] border border-[#DCE2E7] text-[11px] font-mono font-bold text-[#435164]">
              RESEARCH EVIDENCE
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Bài tổng quan trên tạp chí EJOR (2021) tổng hợp các luận điểm kỹ thuật chính:
            </p>

            <div className="space-y-3 bg-[#F7F8F5] p-4 sm:p-5 rounded-xl border border-[#DCE2E7] text-xs sm:text-sm">
              <ul className="space-y-2.5 text-[#435164] list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Khả năng tự điều hướng động của AMRs:</strong> Khác với Xe tự hành truyền thống (AGVs) di chuyển theo hạ tầng đường dẫn cố định, AMRs được trang bị cảm biến và thuật toán để tự tìm tuyến đường linh hoạt và tránh vật cản động trong mặt bằng kho.
                </li>
                <li>
                  <strong>Độ phức tạp của bài toán Planning & Control:</strong> Hiệu quả planning & control của hệ thống AMR liên quan chặt chẽ đến các quyết định như phân công nhiệm vụ (Task Allocation), định tuyến (Routing), điều phối (Scheduling/Dispatching) và quản lý giao thông/ùn tắc (Traffic/Congestion Management).
                </li>
                <li>
                  <strong>Xem xét yếu tố con người và an toàn:</strong> Việc đưa AMR vào môi trường làm việc chung đòi hỏi phải xem xét các quy tắc an toàn giao thông nội bộ kho, giao diện tương tác và sự sẵn sàng thích ứng của lực lượng lao động.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHERE AMRS FULFILL SPECIFIC OPERATIONAL TASKS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>4. WHERE AMRS FULFILL SPECIFIC OPERATIONAL TASKS — các tác vụ AMR đáp ứng tốt</span>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Di chuyển vật liệu lặp lại</strong>
                <p className="text-[#435164]">
                  Các nhiệm vụ di chuyển vật liệu lặp lại là một nhóm tác vụ có thể được xem xét cho AMR, tùy thuộc layout, routing, traffic và thiết kế hệ thống. <em>(VHM Analysis)</em>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Điều hướng trong mặt bằng biến động</strong>
                <p className="text-[#435164]">
                  AMRs có khả năng điều chỉnh tuyến đường khi gặp vật cản tạm thời mà không làm gián đoạn toàn bộ hệ thống di chuyển như các tuyến AGV cố định. <em>(Research Evidence)</em>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Thích ứng theo quy mô luồng hàng</strong>
                <p className="text-[#435164]">
                  Doanh nghiệp có thể điều chỉnh số lượng AMR hoạt động theo từng giai đoạn vận hành mà không cần cải tạo lại hạ tầng cố định của nhà kho. <em>(VHM Analysis)</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHERE HUMAN CAPABILITIES REMAIN NECESSARY */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>5. WHERE HUMAN CAPABILITIES REMAIN NECESSARY — khâu bắt buộc năng lực con người</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
              VHM ANALYSIS
            </div>

            <p className="text-xs text-[#667085] italic">
              (Lưu ý: Đây là phân tích điều hành của VHM về phân công lao động, không phải tuyên bố thử nghiệm thực nghiệm trực tiếp từ bài báo EJOR 2021).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">Thao tác bốc xếp phức tạp (Dexterity)</strong>
                <p className="text-[#435164]">
                  Việc chọn lựa và bốc xếp các mặt hàng có hình dạng bất quy chuẩn, bao bì mềm hoặc kích thước không đồng nhất vẫn phù hợp hơn với sự khéo léo của tay người.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">Xử lý hàng hóa hư hỏng & Ngoại lệ</strong>
                <p className="text-[#435164]">
                  Khi phát hiện hàng hóa bị rách bao bì, sai mã vạch hoặc kệ hàng xếp lệch, nhân viên hiện trường có khả năng nhận biết và xử lý tình huống ngay lập tức.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">Kiểm soát chất lượng & Đánh giá an toàn</strong>
                <p className="text-[#435164]">
                  Con người đưa ra các quyết định cảm quan về chất lượng sản phẩm và đánh giá các nguy cơ an toàn phát sinh ngoài kịch bản lập trình của robot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: HUMAN–ROBOT WORKFLOW DESIGN */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2F6FED]" />
            <span>6. HUMAN–ROBOT WORKFLOW DESIGN — thiết kế luồng tương tác</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
              VHM ANALYSIS
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Từ khung lý thuyết của EJOR (2021), Vận Hành Mới nhận thấy ứng dụng AMR không phải là bài toán nhị phân (&ldquo;Thay thế&rdquo; hoặc &ldquo;Không thay thế&rdquo;), mà là bài toán thiết kế điểm giao tương tác Con người – Robot:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  Mô hình Hỗ trợ Di chuyển (Robot-Assisted Movement)
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  AMR đóng vai trò vận chuyển vật liệu giữa các khu vực, giúp nhân viên giảm bớt các quãng di chuyển vật lý lặp lại để tập trung vào thao tác tại khu vực lấy hàng.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  Mô hình Hàng-đến-Người (Goods-to-Person)
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  AMR di chuyển giá hàng đến trạm cố định, nơi nhân viên thực hiện các thao tác kiểm đếm, chọn lựa và đóng gói phức tạp.
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
                  1. Tránh bẫy đầu tư công nghệ trước quy trình
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Việc mua sắm AMR khi chưa tối ưu hóa layout kho, luồng giao thông (traffic) và quy trình phân công công việc sẽ không mang lại hiệu quả như kỳ vọng.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  2. Tăng tính chủ động trong điều hành
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Mô hình phối hợp giúp doanh nghiệp duy trì sự linh hoạt trong các đợt biến động sản lượng, đồng thời phát huy được năng lực xử lý tình huống của đội ngũ nhân sự nòng cốt.
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
              Vận Hành Mới đề xuất sơ đồ quy trình phân công nhiệm vụ Con người – Robot (Human–Robot Task Allocation Workflow):
            </p>

            {/* AMR Task Allocation Governance Workflow Visual */}
            <RadarAMRWorkflow />
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
                <strong>Tên nguyên lý:</strong> <em>Thiết kế luồng tương tác Con người - Robot trước khi tự động hóa (Human–Robot Workflow Design Before Full Automation)</em>.
              </p>
              <p className="text-[#435164]">
                <strong>Nội dung:</strong> Vận Hành Mới khuyến nghị các doanh nghiệp kho vận không tiếp cận AMR như một dự án thay thế lao động tức thì. Cần thử nghiệm trong một khu vực kiểm soát (Controlled Zone), tập trung đánh giá tính khả thi của luồng phân công nhiệm vụ và độ an toàn tương tác trước khi xem xét mở rộng.
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
                  Xem xét ứng dụng AMR để hỗ trợ di chuyển vật liệu trong các đợt cao điểm khuyến mãi, làm giả định thử nghiệm nhằm giảm áp lực biến động nhân sự thời vụ.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Trung tâm Phân phối Bán lẻ & Siêu thị</strong>
                <p className="text-[#435164]">
                  Thử nghiệm AMR di chuyển các thùng hàng chuẩn hóa từ khu vực tiếp nhận vào các luồng lưu trữ chính.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Kho Phụ tùng Sản xuất</strong>
                <p className="text-[#435164]">
                  Sử dụng AMR di chuyển vật tư theo lịch trình cố định tới các trạm sản xuất.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: IMPLEMENTATION PLAYBOOK */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>11. IMPLEMENTATION PLAYBOOK — khung thử nghiệm điều hành</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F5F2] border border-[#BDE3DA] text-[11px] font-mono font-bold text-[#167A65]">
              VHM RECOMMENDATION
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Khung thử nghiệm điều hành áp dụng AMR:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">1. Đánh giá & Khai thác Baseline:</strong>
                <span className="text-[#435164]">
                  Đo lường các chỉ số vận hành hiện tại (thời gian xử lý đơn, tỷ lệ lỗi, mật độ giao thông nội bộ) khi chưa có AMR.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">2. Khoanh vùng Pilot Rủi ro Thấp:</strong>
                <span className="text-[#435164]">
                  Chọn một khu vực vận hành có mặt bằng chuẩn hóa để triển khai một fleet giới hạn phù hợp với phạm vi pilot và đặc điểm luồng vận hành.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">3. Phân công Nhiệm vụ theo Đặc tính:</strong>
                <span className="text-[#435164]">
                  Phân công cho AMRs các nhiệm vụ được xác định là robot-suitable dựa trên đặc tính tác vụ, layout, traffic, safety và khả năng xử lý ngoại lệ.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">4. Đào tạo An toàn & Quy trình Tương tác:</strong>
                <span className="text-[#435164]">
                  Cung cấp hướng dẫn chi tiết cho nhân viên hiện trường về quy tắc an toàn giao thông nội bộ và quy trình xử lý khi AMR gặp sự cố tạm dừng.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">5. Đo lường Chỉ số Thử nghiệm:</strong>
                <span className="text-[#435164]">
                  Đo lường Throughput, Downtime của AMR, tần suất con người phải can thiệp thủ công và các chỉ số an toàn (Safety & Near-misses).
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: KILL / WARNING CONDITIONS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>12. KILL & WARNING CONDITIONS — dấu hiệu cảnh báo</span>
          </div>
          <div className="bg-[#FDF2F2] border border-[#F8D7D7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#FDF2F2] border border-[#F8D7D7] text-[11px] font-mono font-bold text-[#B5473C]">
              VHM RECOMMENDATION
            </div>

            <h4 className="font-bold text-sm text-[#B5473C] uppercase font-mono">
              Cần dừng thử nghiệm hoặc xem xét lại thiết kế nếu xuất hiện các dấu hiệu:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#435164] list-disc pl-5 leading-relaxed">
              <li>
                <strong>Mật độ ùn tắc AMR cao (High Congestion):</strong> Đội xe AMR tranh chấp tuyến đường tại các luồng di chuyển hẹp, làm giảm tốc độ luân chuyển chung xuống thấp hơn baseline thủ công.
              </li>
              <li>
                <strong>Nguy cơ mất an toàn hiện trường:</strong> Phát hiện các sự cố suýt đâm va (near-misses) giữa AMR và người lao động hoặc vật cản ngoài dự kiến.
              </li>
              <li>
                <strong>Không đạt hiệu quả phối hợp luồng:</strong> Tần suất con người phải can thiệp xử lý sự cố dừng xe vượt quá ngưỡng cho phép của dự án pilot.
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
                  European Journal of Operational Research (Volume 294, Issue 2, Pages 405–426, 2021)
                </p>
                <p className="text-xs text-[#667085] font-mono">
                  DOI: 10.1016/j.ejor.2021.01.019
                </p>
              </div>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#235789] hover:bg-[#1B456D] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
              >
                <span>Xem nghiên cứu gốc (EJOR)</span>
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
              <LeadCaptureForm source="radar_detail_005_bottom" buttonText="Đăng ký nhận tài liệu" />
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
