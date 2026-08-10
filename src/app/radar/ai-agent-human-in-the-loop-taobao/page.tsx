import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  FileText,
  UserCheck,
  Compass,
  Zap,
} from 'lucide-react';
import { RADAR_ITEMS } from '@/lib/radar-data';
import { RadarWorkflow } from '@/components/RadarWorkflow';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const item = RADAR_ITEMS[0]; // Radar #001

export const metadata: Metadata = {
  title: `${item.title} | VHM Radar`,
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
            citation: item.evidenceUrl,
          }),
        }}
      />

      {/* Navigation Breadcrumb */}
      <div className="border-b border-[#DCE2E7] bg-white py-4">
        <div className="container-custom flex items-center justify-between">
          <Link
            href="/radar"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#235789] hover:text-[#2F6FED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Radar Index</span>
          </Link>
          <div className="font-mono text-xs text-[#667085]">
            RADAR #001 · {item.type}
          </div>
        </div>
      </div>

      {/* Article Header Header */}
      <header className="border-b border-[#DCE2E7] bg-white py-10 sm:py-14">
        <div className="container-custom max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#14202B] text-white">
              {item.type}
            </span>
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#E8F5F2] text-[#167A65] border border-[#BDE3DA]">
              {item.verdictLabel}
            </span>
            <span className="text-xs font-mono text-[#667085] ml-auto">
              Xuất bản: {item.publishedAt} · {item.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight leading-tight">
            {item.title}
          </h1>

          <p className="text-base sm:text-xl text-[#435164] leading-relaxed font-medium">
            {item.subtitle}
          </p>

          {/* Decision Metadata Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F7F8F5] p-4 rounded-2xl border border-[#DCE2E7] text-xs font-mono">
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

      {/* Main Body Content */}
      <div className="container-custom max-w-4xl py-12 space-y-12">

        {/* SECTION 1: SIGNAL */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#2F6FED]" />
            <span>1. SIGNAL — executive summary</span>
          </div>
          <div className="p-6 bg-white border border-[#DCE2E7] rounded-2xl space-y-4 shadow-sm">
            <p className="text-sm sm:text-base text-[#14202B] leading-relaxed font-medium">
              Trong làn sóng áp dụng Generative AI và AI Agents năm 2025–2026, nhiều doanh nghiệp thương mại điện tử và logistics đang nỗ lực tự động hóa 100% các khâu chăm sóc khách hàng và xử lý khiếu nại. Tuy nhiên, bằng chứng thực nghiệm từ quy mô Taobao chỉ ra rằng: <strong>Việc rút con người hoàn toàn khỏi quy trình tạo ra tỷ lệ lỗi tích tụ, làm gia tăng rủi ro khiếu nại nghiêm trọng và làm giảm lòng tin khách hàng.</strong>
            </p>
            <div className="p-4 bg-[#EBF2FE] border border-[#C5D8F9] rounded-xl text-xs text-[#235789] leading-relaxed">
              <strong>Thông điệp cốt lõi:</strong> Vận Hành Mới khuyến nghị các Operations Manager áp dụng <strong>ADOPT DESIGN PRINCIPLE</strong> — tiếp thu nguyên lý kiến trúc <em>Bounded Automation (Tự động hóa có ranh giới)</em> kết hợp <em>Early Escalation (Escalation sớm cho con người)</em>. Tuyệt đối không áp dụng tự động hóa tự quyết hoàn toàn mà không có điểm kiểm soát.
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT CHANGED? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>2. WHAT CHANGED? — phát hiện từ nghiên cứu</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F5] border border-[#DCE2E7] text-xs font-mono text-[#667085]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#167A65]" />
              <span>DỮ LIỆU THỰC CHỨNG TỪ PRIMARY RESEARCH (arXiv 2605.14830)</span>
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Nghiên cứu trên quy mô vận hành Taobao phân tích việc thử nghiệm các mô hình AI Agent trong xử lý khiếu nại đơn hàng và hoàn tiền. Nghiên cứu đã thu thập và so sánh kết quả giữa các nhóm quy trình tự động hóa với mức độ can thiệp của con người khác nhau.
            </p>

            <div className="space-y-3 bg-[#F7F8F5] p-5 rounded-xl border border-[#DCE2E7] text-xs sm:text-sm">
              <h4 className="font-bold text-[#14202B] uppercase font-mono text-xs">
                Các kết quả thực nghiệm nổi bật từ bài nghiên cứu:
              </h4>
              <ul className="space-y-2 text-[#435164] list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Tự động hóa thô làm tăng khiếu nại thứ cấp:</strong> Khi AI Agent tự động từ chối hoặc giải quyết khiếu nại mà không có con người kiểm tra các ca giáp ranh, tỷ lệ khách hàng leo thang khiếu nại lên cấp quản trị tăng rõ rệt.
                </li>
                <li>
                  <strong>AI xuất sắc ở trích xuất, kém ở nhận diện ngữ cảnh phức tạp:</strong> AI Agent xử lý rất tốt việc tra cứu vận đơn và tóm tắt lịch sử đơn hàng, nhưng gặp khó khăn khi đánh giá tính hợp lý của các trường hợp bất khả kháng hoặc tranh chấp nhiều bên.
                </li>
                <li>
                  <strong>Thời điểm can thiệp quyết định hiệu quả:</strong> Việc đưa con người vào kiểm duyệt ở giữa quy trình (Early Escalation) mang lại hiệu quả cao hơn hẳn so với việc đẩy toàn bộ ca lỗi cho người giải quyết ở cuối chuỗi.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY OPERATIONS SHOULD CARE */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2F6FED]" />
            <span>3. WHY OPERATIONS SHOULD CARE — góc nhìn vhm</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-xs font-mono text-[#235789]">
              <span>VHM OPERATOR INTERPRETATION / PHÂN TÍCH ĐIỀU HÀNH</span>
            </div>

            <p className="text-sm text-[#435164] leading-relaxed">
              Từ phát hiện của nghiên cứu Taobao, Vận Hành Mới rút ra 4 bài học quan trọng cho các Operations Manager đang cân nhắc ứng dụng AI:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block">1. Tốc độ xử lý &#8800; Chất lượng vận hành</strong>
                <p className="text-[#435164] leading-relaxed">
                  Xử lý xong 1.000 ticket trong 1 phút bằng AI không có ý nghĩa nếu 20% trong số đó bị xử lý sai và biến thành khủng hoảng truyền thông hoặc bồi thường SLA.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block">2. Ngoại lệ (Exceptions) là bản chất của Vận hành</strong>
                <p className="text-[#435164] leading-relaxed">
                  Tự động hóa càng cao thì các ca lọt qua tự động hóa càng là những ca khó, nhạy cảm và chứa đựng rủi ro lớn nhất.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block">3. Thiết kế điểm dừng (Bounded Guardrails)</strong>
                <p className="text-[#435164] leading-relaxed">
                  Cần đặt hạn mức tài chính và ranh giới quyền hạn rõ ràng cho AI Agent. Vượt hạn mức bắt buộc phải đẩy về con người.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block">4. Escalation là một năng lực hệ thống</strong>
                <p className="text-[#435164] leading-relaxed">
                  Chuyển giao công việc giữa AI và Con người phải là workflow có dữ liệu ngữ cảnh đầy đủ, không phải hành động chuyển ca thô.
                </p>
              </div>
            </div>

            {/* Operational Workflow Visual (Section 5 Component) */}
            <RadarWorkflow />
          </div>
        </section>

        {/* SECTION 4: PRACTICAL USE CASES */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#167A65]" />
            <span>4. PRACTICAL USE CASES — ứng dụng thực tế</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-6 sm:p-8 space-y-4">
            <p className="text-sm text-[#435164] leading-relaxed">
              Dưới đây là các ngữ cảnh vận hành cụ thể có thể áp dụng kiến trúc Bounded AI + Human-in-the-Loop:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Logistics & Giao nhận hàng hóa (Delivery Exceptions):</strong>
                <span className="text-[#435164]">
                  AI tự động phân loại lý do giao hàng thất bại (khách không nghe máy, sai địa chỉ). Nếu đơn hàng có giá trị &gt; 5.000.000 VNĐ hoặc là khách hàng VIP, AI không được tự hủy đơn mà phải chuyển cho Trưởng ca giao nhận quyết định.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Xử lý sự cố Kho vận (Warehouse Exception Queues):</strong>
                <span className="text-[#435164]">
                  AI tự động phát hiện lệch tồn kho khi kiểm đếm. Nếu mức lệch &lt; 2% và giá trị &lt; 500.000 VNĐ, AI tự đề xuất điều chỉnh stock. Nếu vượt ngưỡng, tạo queue duyệt cho Warehouse Manager kèm bằng chứng lịch sử.
                </span>
              </div>

              <div className="p-3.5 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
                <strong className="text-[#14202B] block mb-1">Triage Rủi ro SLA Khách hàng B2B:</strong>
                <span className="text-[#435164]">
                  AI liên tục quét tiến độ xử lý yêu cầu kỹ thuật B2B. Khi thời gian tồn đọng đạt 70% mốc bể SLA, AI tự động gắn cờ cảnh báo và đề xuất phương án điều chuyển nhân sự cho Operations Lead.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: VIETNAM APPLICABILITY */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#235789]" />
            <span>5. VIETNAM APPLICABILITY — thực tế vận hành tại việt nam</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-6 sm:p-8 space-y-4">
            <p className="text-sm text-[#435164] leading-relaxed">
              Mặc dù nghiên cứu Taobao được thực hiện trên hạ tầng thương mại điện tử quy mô lớn tại Trung Quốc, các bài học này đặc biệt có giá trị khi chiếu vào bối cảnh vận hành doanh nghiệp tại Việt Nam:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block">Dữ liệu phân tán & Rác dữ liệu</strong>
                <p className="text-[#435164]">
                  Doanh nghiệp Việt Nam thường dùng nhiều công cụ rời rạc (Zalo, Excel, ERP cũ). AI Agent dễ đoán sai nếu dữ liệu đầu vào chưa được chuẩn hóa.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block">SOP chưa đủ chặt chẽ</strong>
                <p className="text-[#435164]">
                  Quy trình phối hợp giữa các phòng ban thường dựa vào giao tiếp cá nhân. Cần chuẩn hóa SOP trước khi giao cho AI tự động hóa.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl space-y-2">
                <strong className="text-[#14202B] font-bold block">Trách nhiệm quản lý hiện trường</strong>
                <p className="text-[#435164]">
                  Quản lý Việt Nam cần công cụ kiểm soát trực quan (Control Tower) để biết AI đang làm gì, thay vì giao hoàn toàn cho phần mềm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: RISKS / LIMITATIONS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B5473C] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#B5473C]" />
            <span>6. RISKS & LIMITATIONS — rủi ro & giới hạn</span>
          </div>
          <div className="bg-[#FDF2F2] border border-[#F8D7D7] rounded-2xl p-6 sm:p-8 space-y-4">
            <h4 className="font-bold text-sm text-[#B5473C] uppercase font-mono">
              Các rủi ro vận hành cần lưu ý:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#435164] list-disc pl-5 leading-relaxed">
              <li>
                <strong>Automation Bias (Định kiến tin tưởng tự động):</strong> Nhân viên vận hành có xu hướng duyệt nhanh các đề xuất của AI mà không kiểm tra bằng chứng khi khối lượng công việc quá tải.
              </li>
              <li>
                <strong>Delayed Escalation (Escalation trễ):</strong> AI cố gắng tự giải quyết quá lâu trước khi chuyển cho con người, dẫn đến việc bể SLA nghiêm trọng hơn.
              </li>
              <li>
                <strong>Giới hạn tổng quát hóa:</strong> Mô hình Taobao hoạt động trên lượng dữ liệu khổng lồ; các doanh nghiệp SME tại Việt Nam cần điều chỉnh ngưỡng rủi ro phù hợp với quy mô mẫu nhỏ hơn.
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 7: EVIDENCE */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#235789] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#2F6FED]" />
            <span>7. EVIDENCE — nguồn bằng chứng gốc</span>
          </div>
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#F7F8F5] border border-[#DCE2E7] rounded-xl">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#167A65] bg-[#E8F5F2] px-2 py-0.5 rounded border border-[#BDE3DA] uppercase">
                  TIER 1 / PRIMARY RESEARCH
                </span>
                <h5 className="font-bold text-sm text-[#14202B] mt-1">
                  Customer Service AI Agent Operations at Taobao Scale
                </h5>
                <p className="text-xs text-[#667085] font-mono mt-0.5">
                  arXiv Identifier: arXiv:2605.14830
                </p>
              </div>
              <a
                href="https://arxiv.org/abs/2605.14830"
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
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#167A65] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#167A65]" />
            <span>8. VHM VERDICT — kết luận điều hành</span>
          </div>
          <div className="bg-[#E8F5F2] border border-[#BDE3DA] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm sm:text-base font-extrabold px-4 py-1.5 rounded-full bg-[#167A65] text-white">
                ADOPT DESIGN PRINCIPLE
              </span>
            </div>
            <div className="text-xs sm:text-sm text-[#14202B] space-y-3 leading-relaxed">
              <p>
                <strong>Vận Hành Mới khuyến nghị:</strong> Áp dụng <em>nguyên lý thiết kế Bounded Automation + Early Escalation</em> vào việc xây dựng quy trình tự động hóa bằng AI.
              </p>
              <p className="text-[#435164]">
                <strong>KHÔNG khuyến nghị:</strong> Áp dụng tự động hóa tự quyết 100% hoặc tin tưởng hoàn toàn vào kết quả của AI Agent mà không có điểm dừng kiểm soát rủi ro và quyền ra quyết định của con người.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA / Toolkit Registration */}
        <section className="pt-8 border-t border-[#DCE2E7]">
          <div className="bg-white border border-[#DCE2E7] rounded-3xl p-6 sm:p-8 space-y-6 text-center">
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
