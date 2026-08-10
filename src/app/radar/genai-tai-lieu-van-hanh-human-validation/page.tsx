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
  FileEdit,
} from 'lucide-react';
import { RADAR_ITEMS } from '@/lib/radar-data';
import { RadarDocumentWorkflow } from '@/components/RadarDocumentWorkflow';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const item = RADAR_ITEMS[0]; // Radar #004 (newest)

export const metadata: Metadata = {
  title: `${item.title} | VHM Radar #004`,
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

export default function RadarDetail004Page() {
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
            RADAR #004 · {item.type}
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
              <span className="font-semibold text-[#C47A16]">ADJACENT</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">PRIMARY SOURCE:</span>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#2F6FED] hover:underline inline-flex items-center gap-1"
              >
                <span>Science (2023)</span>
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
              Trong các doanh nghiệp vận hành, việc xây dựng và cập nhật Quy trình Vận hành Chuẩn (SOP), hướng dẫn công việc và tài liệu đào tạo thường tốn rất nhiều thời gian của các quản lý hiện trường. Sự xuất hiện của Generative AI (GenAI) đang tạo ra sức hút lớn đối với các nhà điều hành muốn tự động hóa khâu soạn thảo tài liệu.
            </p>
            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu thực nghiệm công bố trên tạp chí <em>Science</em> (Noy & Zhang, 2023) chỉ ra rằng GenAI giúp giảm <strong>40% thời gian</strong> hoàn thành các nhiệm vụ viết chuyên môn và nâng điểm chất lượng bài viết thêm <strong>18%</strong>.
            </p>
            <div className="p-3.5 sm:p-4 bg-[#FEF5E7] border border-[#F9E2C1] rounded-xl text-xs text-[#C47A16] leading-relaxed font-medium">
              <strong>Khuyến nghị VHM:</strong> Tuy nhiên, Vận Hành Mới nhấn mạnh một ranh giới quan trọng — <em>Viết nhanh hơn không đồng nghĩa với việc tài liệu đã sẵn sàng để áp dụng thực địa.</em> Soạn thảo SOP vận hành đòi hỏi tính chính xác tuyệt đối về an toàn và thực tế thiết bị. Khuyến nghị nguyên lý <strong>TEST IN CONTROLLED WORKFLOW</strong>: <em>Sử dụng AI làm trợ lý tạo bản thảo thô kết hợp quy trình thẩm định 2 lớp của con người (AI-Assisted Drafting with Human Validation)</em>.
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT THE RESEARCH ACTUALLY STUDIED */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileEdit className="w-4 h-4 text-[#2F6FED]" />
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
                Tác giả: {item.evidenceAuthors} (Science, Vol. 381, Issue 6654, pp. 187–192, July 2023)
              </div>
              <div className="text-[#667085]">
                DOI: 10.1126/science.adh2586
              </div>
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu thực hiện một thử nghiệm ngẫu nhiên có đối chứng (RCT) được đăng ký trước trên <strong>453 nhân sự chuyên môn có trình độ đại học</strong> (gồm các nhà tiếp thị, người viết tài trợ, cố vấn, chuyên viên phân tích dữ liệu, chuyên viên nhân sự).
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-[#435164] bg-[#F7F8F5] p-4 rounded-xl border border-[#DCE2E7]">
              <strong className="font-bold text-[#14202B] block uppercase font-mono text-xs mb-2">
                Thiết kế thử nghiệm:
              </strong>
              <ul className="space-y-1.5 list-disc pl-5 leading-relaxed">
                <li>Các nhân sự tham gia được giao hoàn thành các nhiệm vụ viết chuyên môn cấp trung bình theo đúng ngành nghề (ví dụ: viết thông cáo báo chí, tóm tắt báo cáo phân tích).</li>
                <li>Một nửa số người tham gia được phân ngẫu nhiên sử dụng ChatGPT, nửa còn lại làm việc theo cách truyền thống.</li>
                <li>Kết quả bài viết được chấm điểm mù bởi các chuyên gia đánh giá độc lập.</li>
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
              Nghiên cứu của Noy & Zhang (2023) ghi nhận các kết quả thực nghiệm quan trọng sau:
            </p>

            <div className="space-y-3 bg-[#F7F8F5] p-4 sm:p-5 rounded-xl border border-[#DCE2E7] text-xs sm:text-sm">
              <ul className="space-y-2.5 text-[#435164] list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Rút ngắn 40% thời gian hoàn thành nhiệm vụ:</strong> Nhóm sử dụng ChatGPT hoàn thành bài viết trung bình trong 17 phút, so với 27 phút ở nhóm không sử dụng AI.
                </li>
                <li>
                  <strong>Nâng điểm chất lượng bài viết thêm 18%:</strong> Các bài viết do nhóm sử dụng AI thực hiện được các chuyên gia độc lập chấm điểm mù cao hơn 0.45 độ lệch chuẩn (khoảng 18%).
                </li>
                <li>
                  <strong>Giảm khoảng cách năng lực giữa các nhân viên:</strong> Những nhân viên có điểm kỹ năng ban đầu thấp hơn nhận được mức cải thiện năng suất và chất lượng mạnh mẽ hơn từ AI.
                </li>
                <li>
                  <strong>Tái cấu trúc quỹ thời gian làm việc:</strong> Sử dụng AI làm giảm thời gian dành cho việc tạo bản thảo thô (drafting) và gia tăng tỷ lệ thời gian dành cho việc chỉnh sửa và hoàn thiện (editing).
                </li>
                <li>
                  <strong>Gia tăng xác suất tiếp tục sử dụng:</strong> Nhân viên được trải nghiệm ChatGPT có xác suất báo cáo tiếp tục sử dụng AI trong công việc thực tế cao hơn hai tuần sau thử nghiệm.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT THE RESEARCH DOES NOT PROVE (MANDATORY BOUNDARY SECTION) */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>4. WHAT THE RESEARCH DOES NOT PROVE — ranh giới nghiên cứu bắt buộc</span>
          </div>
          <div className="bg-[#FDF2F2] border border-[#F8D7D7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#FDF2F2] border border-[#F8D7D7] text-[11px] font-mono font-bold text-[#B5473C]">
              CLAIM BOUNDARY & EVIDENCE LIMITATIONS
            </div>

            <p className="text-sm text-[#14202B] leading-relaxed font-medium">
              Để tránh bẫy tự động hóa quá đà, nhà quản lý vận hành cần hiểu rõ các ranh giới mà nghiên cứu <em>Science</em> (2023) <strong>KHÔNG</strong> trực tiếp kiểm chứng:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#435164] list-disc pl-5 leading-relaxed">
              <li>
                <strong>Không thử nghiệm trên tài liệu SOP hay thực địa vận hành:</strong> Thử nghiệm trong nghiên cứu là các nhiệm vụ viết văn bản chuyên môn chung. Nghiên cứu KHÔNG thử nghiệm trên quy trình vận hành kho hàng, an toàn sản xuất hay hướng dẫn thiết bị thực tế. <em>(Research Evidence)</em>
              </li>
              <li>
                <strong>Không đo lường tỷ lệ lỗi hay ảo giác quy trình (Hallucinations):</strong> Nghiên cứu không đánh giá liệu các hướng dẫn do AI tạo ra có chứa thông tin sai lệch về vận hành hoặc vi phạm quy định an toàn hay không. <em>(Research Evidence)</em>
              </li>
              <li>
                <strong>Không chứng minh AI có thể xuất bản SOP tự động:</strong> Việc tạo ra một bản thảo văn bản trôi chảy không đồng nghĩa với việc quy trình đó có thể thực thi an toàn tại hiện trường mà không cần con người kiểm chứng. <em>(VHM Analysis)</em>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 5: WHY THIS MATTERS FOR OPERATIONS */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2F6FED]" />
            <span>5. WHY THIS MATTERS FOR OPERATIONS — phân tích vận hành</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-xs font-mono text-[#235789]">
              <span>VHM ANALYSIS / PHÂN TÍCH VẬN HÀNH</span>
            </div>

            <p className="text-xs text-[#667085] italic">
              (Lưu ý: Đây là phân tích điều hành của VHM áp dụng nguyên lý nghiên cứu vào môi trường vận hành hiện đại, không phải kết quả trực tiếp từ bài báo Science 2023).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  1. Giải phóng quỹ thời gian cho quản lý
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Phần lớn thời gian của quản lý vận hành bị tiêu tốn vào việc cấu trúc lại văn bản, sửa lỗi chính tả và dàn trang. GenAI xử lý tốt 80% công việc cấu trúc bản thảo này, giải phóng thời gian để quản lý tập trung vào bản chất quy trình.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block text-sm">
                  2. Rủi ro "SOP ảo giác" (Hallucinated SOPs)
                </strong>
                <p className="text-[#435164] leading-relaxed">
                  Mô hình AI có xu hướng bịa ra các bước kiểm tra hợp lý về mặt ngôn từ nhưng hoàn toàn không tồn tại trong thực tế thiết bị hoặc hệ thống phần mềm của doanh nghiệp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHERE GENAI CAN HELP */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>6. WHERE GENAI CAN HELP — các công đoạn AI hỗ trợ tốt</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
              VHM ANALYSIS
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Trong quản trị tài liệu vận hành, GenAI phát huy hiệu quả tốt nhất ở các công đoạn:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Tạo bản thảo ban đầu từ ghi chú thô</strong>
                <p className="text-[#435164]">
                  Chuyển đổi các ghi chú bằng giọng nói, danh sách gạch đầu dòng hoặc biên bản họp của quản lý thành khung bản thảo SOP chuẩn hóa.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Cấu trúc & Chuẩn hóa ngôn từ</strong>
                <p className="text-[#435164]">
                  Đồng nhất định dạng, thuật ngữ và văn phong quy trình trên toàn bộ các phòng ban.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Tóm tắt quy trình cho đào tạo</strong>
                <p className="text-[#435164]">
                  Tự động tạo bản tóm tắt ngắn hoặc danh mục kiểm tra (Checklist) từ các tài liệu SOP dài.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHERE HUMAN VALIDATION REMAINS NECESSARY */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>7. WHERE HUMAN VALIDATION REMAINS NECESSARY — khâu bắt buộc con người kiểm chứng</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#EBF2FE] border border-[#C5D8F9] text-[11px] font-mono font-bold text-[#235789]">
              VHM ANALYSIS
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Con người bắt buộc phải giữ quyền kiểm soát và phê duyệt ở các khâu:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs sm:text-sm">
              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">Xác minh thực tế hiện trường (Ground Truth)</strong>
                <p className="text-[#435164]">
                  Kiểm tra xem các bước quy trình do AI tạo ra có đúng với thực tế máy móc, vị trí kho và công cụ tại nhà máy/cửa hàng hay không.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">An toàn lao động & Tuân thủ pháp lý</strong>
                <p className="text-[#435164]">
                  Đảm bảo không bỏ sót bất kỳ quy định an toàn lao động hoặc yêu cầu pháp lý bắt buộc nào.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#FDF2F2] border border-[#F8D7D7] rounded-xl space-y-1.5">
                <strong className="text-[#B5473C] font-bold block">Chịu trách nhiệm vận hành</strong>
                <p className="text-[#435164]">
                  Trưởng bộ phận vận hành (Process Owner) là người duy nhất ký duyệt và chịu trách nhiệm khi sự cố xảy ra, không thể đổ lỗi cho AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: VHM OPERATING MODEL */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2F6FED]" />
            <span>8. VHM OPERATING MODEL — sơ đồ luồng quy trình</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F5F2] border border-[#BDE3DA] text-[11px] font-mono font-bold text-[#167A65]">
              VHM RECOMMENDATION
            </div>
            <p className="text-sm text-[#435164] leading-relaxed">
              Vận Hành Mới đề xuất sơ đồ quy trình quản trị soạn thảo tài liệu (AI-Assisted Documentation Workflow):
            </p>

            {/* AI-Assisted Documentation Governance Workflow Visual */}
            <RadarDocumentWorkflow />
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
                <strong>Tên nguyên lý:</strong> <em>Soạn thảo bằng AI + Thẩm định bởi Con người (AI-Assisted Drafting with Human Validation)</em>.
              </p>
              <p className="text-[#435164]">
                <strong>Nội dung:</strong> Vận Hành Mới khuyến nghị thử nghiệm sử dụng GenAI làm trợ lý tạo bản thảo thô cho tài liệu vận hành để rút ngắn thời gian chuẩn hóa. Bắt buộc 100% tài liệu phải trải qua khâu kiểm chứng thực địa của chuyên gia con người trước khi ban hành chính thức.
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
              VHM ANALYSIS
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Đánh giá tính ứng dụng định tính tại thị trường Việt Nam:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs">
              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Quản lý Kho vận & Logistics</strong>
                <p className="text-[#435164]">
                  Giúp các Trưởng kho nhanh chóng số hóa các quy trình lấy hàng, đóng gói và kiểm đếm từ kinh nghiệm truyền miệng thành tài liệu SOP chuẩn.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Chuỗi Bán lẻ & Cửa hàng (Retail)</strong>
                <p className="text-[#435164]">
                  Tự động tạo hướng dẫn trưng bày hàng hóa và mở/đóng cửa hàng từ ghi chú của Quản lý vùng.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-1.5">
                <strong className="text-[#14202B] font-bold block">Bộ phận Dịch vụ Khách hàng (Customer Support)</strong>
                <p className="text-[#435164]">
                  Soạn thảo nhanh các kịch bản xử lý khiếu nại mẫu để đào tạo nhân viên mới.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: IMPLEMENTATION PLAYBOOK */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>11. IMPLEMENTATION PLAYBOOK — khung triển khai thử nghiệm</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F5F2] border border-[#BDE3DA] text-[11px] font-mono font-bold text-[#167A65]">
              VHM RECOMMENDATION
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Khung triển khai thử nghiệm quản trị soạn thảo tài liệu bằng AI:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">1. Lựa chọn Quy trình Thử nghiệm Rủi ro Thấp:</strong>
                <span className="text-[#435164]">
                  Chọn 1 luồng công việc không liên quan đến an toàn nghiêm trọng (ví dụ: quy trình bàn giao ca hoặc quy trình kiểm đếm dụng cụ) để thử nghiệm.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">2. Chuẩn bị Dữ liệu Nguồn Chuẩn:</strong>
                <span className="text-[#435164]">
                  Nạp các quy định và tài liệu gốc đã được phê duyệt làm bối cảnh cho AI.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">3. GenAI Tạo Bản thảo V1:</strong>
                <span className="text-[#435164]">
                  Sử dụng Prompt Template chuẩn để GenAI xuất khung bản thảo SOP.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">4. Chuyên gia SME Kiểm duyệt:</strong>
                <span className="text-[#435164]">
                  Chuyên gia vận hành rà soát tính chính xác của các bước và loại bỏ thông tin ảo giác.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">5. Thử nghiệm Thực địa (Field Test):</strong>
                <span className="text-[#435164]">
                  Đưa bản thảo cho nhân viên hiện trường làm theo để phát hiện các bước thiếu thực tế.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">6. Đo lường Chỉ số Thử nghiệm:</strong>
                <span className="text-[#435164]">
                  Đo lường thời gian soạn thảo, số lượng lỗi thực tế phát hiện, và mức độ dễ hiểu của nhân viên hiện trường.
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
              Cần dừng thử nghiệm hoặc siết chặt kiểm duyệt nếu phát hiện các dấu hiệu:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#435164] list-disc pl-5 leading-relaxed">
              <li>
                <strong>Ảo giác quy trình nghiêm trọng:</strong> GenAI bịa ra các bước kiểm tra thiết bị không tồn tại hoặc sai thông số kỹ thuật.
              </li>
              <li>
                <strong>Chuyên gia kiểm duyệt thụ động:</strong> Nhân viên duyệt tài liệu qua loa, ký duyệt bản thảo của AI mà không rà soát thực địa.
              </li>
              <li>
                <strong>Ban hành SOP chưa qua kiểm duyệt:</strong> Tài liệu do AI hỗ trợ soạn thảo bị tự ý gửi cho nhân viên hiện trường mà chưa có chữ ký phê duyệt của Trưởng bộ phận.
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
                <span className="text-[10px] font-mono font-bold text-[#C47A16] bg-[#FEF5E7] px-2 py-0.5 rounded border border-[#F9E2C1] uppercase">
                  {item.evidenceTier} (ADJACENT)
                </span>
                <h5 className="font-bold text-sm text-[#14202B]">
                  &ldquo;{item.evidenceTitle}&rdquo;
                </h5>
                <p className="text-xs text-[#435164]">
                  Tác giả: {item.evidenceAuthors}
                </p>
                <p className="text-xs text-[#667085] font-mono">
                  Science (Volume 381, Issue 6654, Pages 187–192, July 2023)
                </p>
                <p className="text-xs text-[#667085] font-mono">
                  DOI: 10.1126/science.adh2586
                </p>
              </div>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#235789] hover:bg-[#1B456D] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
              >
                <span>Xem nghiên cứu gốc (Science)</span>
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
              <LeadCaptureForm source="radar_detail_004_bottom" buttonText="Đăng ký nhận tài liệu" />
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
