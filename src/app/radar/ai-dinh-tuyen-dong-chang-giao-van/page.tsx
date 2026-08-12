import React from 'react';
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
  Lock
} from 'lucide-react';
import { createRadarMetadata, getRadarItem } from '@/lib/seo';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { RadarDynamicRoutingWorkflow } from '@/components/RadarDynamicRoutingWorkflow';

const item = getRadarItem('radar-007');

export const metadata = createRadarMetadata(item, '007');

export default function Radar007Page() {
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
      publication: 'Transportation Research Part E: Logistics and Transportation Review',
      datePublished: '2022',
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
            RADAR #007 · {item.type}
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
              Predict → Decide → Re-route under Feasibility Constraints
            </div>
            <div className="text-xs text-[#344054] mt-1 font-medium">
              Dự báo → Ra quyết định → Tái định tuyến trong Giới hạn Khả thi Vận hành
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
              <span className="font-bold text-[#14202B]">{item.type}</span>
            </div>
            <div>
              <span className="text-[#667085] block text-[10px] uppercase">PRIMARY SOURCE:</span>
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#235789] hover:underline inline-flex items-center gap-1 truncate max-w-full"
              >
                <span>Basso et al. (2022)</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Editorial Body Layout */}
      <main className="container-custom max-w-4xl pt-8 sm:pt-12">
        {/* SECTION 1 — SIGNAL — EXECUTIVE SUMMARY */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 1</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">SIGNAL — EXECUTIVE SUMMARY</h2>
          </div>

          <div className="prose prose-slate max-w-none text-[#2D3748] text-sm leading-relaxed space-y-4">
            <p>
              Một xe giao hàng thương mại rời kho bãi (depot) theo tuyến đường đã được lập sẵn. Tuy nhiên, chỉ sau một thời gian ngắn vận hành trên đường, thực tế bắt đầu chệch khỏi kế hoạch:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#2D3748]">
              <li>Ún tắc giao thông bất ngờ xuất hiện tại các nút giao trọng điểm, làm vận tốc di chuyển thực tế giảm mạnh.</li>
              <li>Tiêu thụ năng lượng của xe tăng đột biến do xe phải tăng/giảm tốc liên tục và chở tải trọng lớn.</li>
              <li>Các yêu cầu giao hàng bổ sung (dynamic customer requests) phát sinh trong khu vực cần được gom chuyến.</li>
              <li>Dung lượng pin/năng lượng còn lại của xe tụt nhanh hơn dự kiến, đe dọa khả năng hoàn thành các điểm giao cuối cùng.</li>
            </ul>
            <p>
              Một mô hình điều hành phổ biến trong quản lý vận tải hiện nay là lập tuyến trước chuyến (pre-trip planning) và xử lý ngoại lệ khi điều kiện thực tế thay đổi. Khi môi trường vận hành biến động liên tục, bản kế hoạch định tuyến tĩnh (static route plan) nhanh chóng trở nên lỗi thời, khiến bộ phận điều hành rơi vào thế bị động.
            </p>

            <div className="p-4 rounded-xl bg-[#ECFDF3] border border-[#ABE5C6] my-4">
              <div className="text-xs font-mono font-bold text-[#027A48] uppercase mb-1">VHM RECOMMENDATION</div>
              <p className="text-xs text-[#064E3B] leading-relaxed font-medium">
                Để giải quyết sự đứt gãy giữa kế hoạch và thực tế, trí tuệ vận hành (Operations Intelligence) cần chuyển dịch từ <strong>dự báo hàng chờ thụ động</strong> sang <strong>ra quyết định chuỗi tự động dưới biến động (Sequential Decision-Making under Uncertainty)</strong>. Tuy nhiên, việc trao quyền tái định tuyến tự động cho thuật toán đòi hỏi một khung giới hạn khả thi vận hành (operational feasibility constraint gate) được cấu hình chặt chẽ nhằm đảm bảo xe không bao giờ lâm vào tình trạng cạn pin hoặc vi phạm các mốc an toàn.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — WHAT THE RESEARCH ACTUALLY STUDIED */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 2</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">WHAT THE RESEARCH ACTUALLY STUDIED</h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F9FF] border border-[#B2DDFF] text-[#026AA2] font-mono text-xs font-semibold mb-4">
            <FileCheck2 className="w-3.5 h-3.5 text-[#026AA2]" />
            RESEARCH EVIDENCE
          </div>

          <div className="prose prose-slate max-w-none text-[#2D3748] text-sm leading-relaxed space-y-4">
            <p>
              Nghiên cứu nguyên bản được xuất bản trên tạp chí chuyên ngành hàng đầu về khoa học vận tải và logistics:
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#DCE2E7] shadow-xs space-y-2 text-xs font-mono">
              <div><strong className="text-[#667085]">Tên bài báo:</strong> <span className="text-[#14202B] font-semibold">"Dynamic stochastic electric vehicle routing with safe reinforcement learning"</span></div>
              <div><strong className="text-[#667085]">Tác giả:</strong> <span className="text-[#14202B]">Rafael Basso, Balázs Kulcsár, Ivan Sanchez-Diaz, Xiaobo Qu</span></div>
              <div><strong className="text-[#667085]">Tạp chí:</strong> <span className="text-[#14202B]">Transportation Research Part E: Logistics and Transportation Review</span></div>
              <div><strong className="text-[#667085]">Xuất bản:</strong> <span className="text-[#14202B]">Vol. 157, Article 102496 (Tháng 1/2022)</span></div>
              <div><strong className="text-[#667085]">DOI:</strong> <a href="https://doi.org/10.1016/j.tre.2021.102496" target="_blank" rel="noreferrer" className="text-[#235789] hover:underline">10.1016/j.tre.2021.102496</a></div>
            </div>

            <h3 className="text-base font-bold text-[#14202B] pt-2">Bài toán nghiên cứu chính xác (DS-EVRP):</h3>
            <p>
              Các tác giả đặt ra bài toán <strong>Định tuyến xe điện thương mại động và bất định (Dynamic Stochastic Electric Vehicle Routing Problem - DS-EVRP)</strong>. Nghiên cứu xử lý đồng thời hai nguồn bất định vận hành lớn trong logistics đô thị:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-[#2D3748]">
              <li><strong>Bất định về nhu cầu (Stochastic Requests):</strong> Các điểm yêu cầu dịch vụ/giao hàng mới phát sinh ngẫu nhiên theo thời gian thực khi xe đang di chuyển.</li>
              <li><strong>Bất định về tiêu thụ năng lượng (Stochastic Energy Consumption):</strong> Mức tiêu hao năng lượng của xe biến động liên tục do tốc độ giao thông, kẹt xe và tải trọng thay đổi.</li>
            </ol>

            <div className="p-4 rounded-xl bg-[#F7F8F5] border border-[#DCE2E7] text-xs text-[#435164] space-y-2">
              <div className="font-bold text-[#14202B] uppercase tracking-wider font-mono">Ranh giới Thực nghiệm & Tuyên bố:</div>
              <p>
                Bài báo kiểm chứng thuật toán qua <strong>mô phỏng động stochastic (dynamic stochastic simulation / computational experiments)</strong> dựa trên mô hình động lực học xe thương mại thực tế và thông số mạng lưới giao thông đô thị (dữ liệu giao thông Luxembourg). Đây <strong>KHÔNG</strong> phải là kết quả thử nghiệm thực địa dài hạn trên đội xe thương mại ngoài đời thực, mà là kết quả kiểm chứng thuật toán trên mô hình mô phỏng máy tính có độ trung thực cao.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHY STATIC ROUTING BREAKS */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 3</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">WHY STATIC ROUTING BREAKS</h2>
          </div>

          <div className="prose prose-slate max-w-none text-[#2D3748] text-sm leading-relaxed space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F8F9FC] border border-[#EAECF0] text-[#344054] font-mono text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#344054]" />
              VHM ANALYSIS
            </div>
            <p>
              Một mô hình điều hành phổ biến trong quản lý vận tải hiện nay là lập tuyến trước chuyến (pre-trip planning) và xử lý ngoại lệ khi điều kiện thực tế thay đổi:
            </p>
            <div className="p-3 bg-white rounded-lg text-center font-mono text-xs text-[#14202B] border border-[#DCE2E7] shadow-xs">
              Lập kế hoạch (Plan) ──▶ Thực thi (Execute)
            </div>
            <p>
              Mô hình này giả định môi trường vận hành là cố định: thời gian di chuyển dự kiến (ETA) không đổi, mức tiêu hao nhiên liệu/pin ổn định, và danh sách đơn hàng đóng băng từ đầu ngày. Khi vận hành thực tế xảy ra biến động, khoảng cách giữa bản kế hoạch và năng lực thực thi ngày càng nới rộng.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F9FF] border border-[#B2DDFF] text-[#026AA2] font-mono text-xs font-semibold pt-2">
              <FileCheck2 className="w-3.5 h-3.5 text-[#026AA2]" />
              RESEARCH EVIDENCE
            </div>
            <p>
              Basso và các cộng sự (2022) chỉ ra rằng định tuyến động thực chất là bài toán <strong>ra quyết định chuỗi tuần hoàn (Sequential Decision-Making)</strong>:
            </p>
            <div className="p-3 bg-[#F0F9FF] rounded-lg text-center font-mono text-xs text-[#026AA2] font-semibold border border-[#B2DDFF]">
              Trạng thái hiện tại ──▶ Sự kiện biến động ──▶ Ra quyết định mới ──▶ Cập nhật trạng thái ──▶ ...
            </div>
            <p>
              Tại mỗi thời điểm quyết định (decision epoch), hệ thống không thể chỉ nhìn vào lợi ích ngắn hạn của điểm giao tiếp theo, mà phải dự báo ảnh hưởng của quyết định đó đến khả năng hoàn thành toàn bộ lộ trình và mức an toàn năng lượng trong tương lai.
            </p>
          </div>
        </section>

        {/* SECTION 4 — HOW SAFE DRL WORKS */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 4</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">HOW SAFE DRL WORKS</h2>
          </div>

          <div className="prose prose-slate max-w-none text-[#2D3748] text-sm leading-relaxed space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F9FF] border border-[#B2DDFF] text-[#026AA2] font-mono text-xs font-semibold">
              <FileCheck2 className="w-3.5 h-3.5 text-[#026AA2]" />
              RESEARCH EVIDENCE — Khái niệm "Safe" (An toàn)
            </div>
            <p>
              Trong bài báo của Basso et al. (2022), từ <strong>"Safe" (An toàn)</strong> mang ý nghĩa kỹ thuật vận hành chính xác:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#2D3748]">
              <li><strong>"Safe" = Duy trì giới hạn khả thi về năng lượng (Energy Feasibility Bounds):</strong> Đảm bảo dung lượng pin của xe thương mại luôn ở trên ngưỡng an toàn tối thiểu, ngăn ngừa rủi ro xe hết pin giữa đường (battery depletion risk) hoặc không đến kịp trạm sạc.</li>
              <li><strong>"Safe" KHÔNG NGHĨA LÀ:</strong> An toàn giao thông đường bộ, an toàn tài xế, hay cơ chế phê duyệt thủ công của con người (Human-in-the-loop).</li>
            </ul>
          </div>
        </section>

        {/* SECTION 5 — WHAT THE RESEARCH ACTUALLY STUDIED & FOUND */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 5</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">WHAT THE RESEARCH ACTUALLY STUDIED & FOUND</h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F9FF] border border-[#B2DDFF] text-[#026AA2] font-mono text-xs font-semibold mb-4">
            <FileCheck2 className="w-3.5 h-3.5 text-[#026AA2]" />
            RESEARCH EVIDENCE ONLY
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <div className="text-2xl font-extrabold text-[#026AA2] font-mono mb-1">~4.8%</div>
              <div className="text-xs font-bold text-[#14202B] mb-1">Mức tiết kiệm năng lượng trung bình</div>
              <div className="text-[11px] text-[#667085]">
                Đạt được trong thực nghiệm mô phỏng so với phương pháp tái định tuyến trực tuyến xác định (deterministic online re-optimization baseline).
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <div className="text-2xl font-extrabold text-[#027A48] font-mono mb-1">FEASIBLE</div>
              <div className="text-xs font-bold text-[#14202B] mb-1">Triệt tiêu rủi ro cạn pin</div>
              <div className="text-[11px] text-[#667085]">
                Thuật toán Safe DRL giúp duy trì dung lượng pin luôn ở trên ngưỡng an toàn khả thi trong các kịch bản thực nghiệm được kiểm chứng.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <div className="text-2xl font-extrabold text-[#B45309] font-mono mb-1">DYNAMIC</div>
              <div className="text-xs font-bold text-[#14202B] mb-1">Chèn đơn hàng ngẫu nhiên</div>
              <div className="text-[11px] text-[#667085]">
                Nhờ anticipatory routing, Safe DRL cho phép chèn đơn hàng phát sinh vào lộ trình mà không làm phá vỡ an toàn năng lượng đơn cũ.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — PREDICTION IS NOT DECISION */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 6</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">PREDICTION IS NOT DECISION</h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F8F9FC] border border-[#EAECF0] text-[#344054] font-mono text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5 text-[#344054]" />
            VHM ANALYSIS & CONCEPTUAL BRIDGING (RADAR #006 vs #007)
          </div>

          <div className="prose prose-slate max-w-none text-[#2D3748] text-sm leading-relaxed space-y-4 mb-6">
            <p>
              Đây là điểm ngoặt tư duy chiến lược quan trọng nhất trong lộ trình phát triển Trí tuệ Vận hành (Operations Intelligence) của Vận Hành Mới:
            </p>

            {/* Bridging Box between Radar #006 and #007 */}
            <div className="p-4 rounded-xl bg-white border border-[#DCE2E7] shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="px-2 py-1 bg-[#14202B] text-white font-mono text-[10px] font-bold rounded">RADAR #006</div>
                <div className="text-xs text-[#2D3748]">
                  <strong className="text-[#14202B]">Bài toán Dự báo (Prediction / Risk Scoring):</strong> Xác định <em>NƠI NÀO / ĐƠN HÀNG NÀO</em> đang có rủi ro trễ SLA trong kho (Where is intervention needed?) → Output là chỉ số rủi ro (Risk Score) và Hàng chờ ngoại lệ (Exception Queue) để con người can thiệp.
                </div>
              </div>
              <div className="border-t border-[#DCE2E7] pt-3 flex items-start gap-3">
                <div className="px-2 py-1 bg-[#026AA2] text-white font-mono text-[10px] font-bold rounded">RADAR #007</div>
                <div className="text-xs text-[#2D3748]">
                  <strong className="text-[#14202B]">Bài toán Quyết định Tuần hoàn (Sequential Decision):</strong> Đánh giá <em>HÀNH ĐỘNG NÀO NÊN ĐƯỢC CHỌN TIẾP THEO</em> khi điều kiện vận hành thay đổi (What action should be selected next?) → Output là lộ trình điều hướng và quyết định sạc tối ưu trực tiếp.
                </div>
              </div>
            </div>
          </div>

          {/* Three Levels of Operations Intelligence Maturity Block */}
          <div className="rounded-xl border border-[#DCE2E7] bg-white p-5 sm:p-6 mb-4 shadow-xs">
            <div className="text-xs font-mono font-bold text-[#026AA2] uppercase tracking-wider mb-3">
              BA CẤP ĐỘ TRÍ TUỆ VẬN HÀNH (VHM OPERATING FRAMEWORK)
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#F8F9FC] border border-[#EAECF0]">
                <div className="flex items-center justify-between text-xs font-bold text-[#344054] mb-1">
                  <span>CẤP ĐỘ 1: MÔ TẢ (DESCRIBE) — "Cái gì đã xảy ra?"</span>
                  <span className="text-[#667085] font-mono text-[10px]">TMS / WMS Dashboards</span>
                </div>
                <div className="text-[11px] text-[#667085]">Dashboard báo cáo vị trí GPS, vận tốc xe và lịch sử giao hàng.</div>
              </div>

              <div className="p-3 rounded-lg bg-[#EFF8FF] border border-[#B2DDFF]">
                <div className="flex items-center justify-between text-xs font-bold text-[#175CD3] mb-1">
                  <span>CẤP ĐỘ 2: DỰ BÁO (PREDICT) — "Cái gì có khả năng sẽ xảy ra?"</span>
                  <span className="text-[#175CD3] font-mono text-[10px]">Radar #006</span>
                </div>
                <div className="text-[11px] text-[#344054]">Machine Learning dự báo nguy cơ trễ hạn SLA đơn hàng trong kho trước khi hoàn tất.</div>
              </div>

              <div className="p-3 rounded-lg bg-[#F0F9FF] border-2 border-[#2F6FED] ring-2 ring-[#2F6FED]/10 shadow-xs">
                <div className="flex items-center justify-between text-xs font-bold text-[#026AA2] mb-1">
                  <span>CẤP ĐỘ 3: RA QUYẾT ĐỊNH (DECIDE) — "Hệ thống nên làm gì tiếp theo?"</span>
                  <span className="text-[#026AA2] font-mono text-[10px]">Radar #007</span>
                </div>
                <div className="text-[11px] text-[#14202B] font-medium">Safe DRL tự động đề xuất lộ trình và thời điểm sạc tối ưu dưới giới hạn khả thi vận hành.</div>
              </div>
            </div>

            <div className="text-[11px] text-[#667085] italic mt-3 pt-2 border-t border-[#DCE2E7]">
              *Ghi chú attribution: Khung phân loại này là tổng hợp của Vận Hành Mới cho quản trị vận hành và không phải là hệ thống phân loại do Basso et al. (2022) đề xuất.
            </div>
          </div>
        </section>

        {/* SECTION 7 — AUTONOMY REQUIRES CONSTRAINTS */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 7</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">AUTONOMY REQUIRES CONSTRAINTS</h2>
          </div>

          <div className="prose prose-slate max-w-none text-[#2D3748] text-sm leading-relaxed space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F8F9FC] border border-[#EAECF0] text-[#344054] font-mono text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#344054]" />
              VHM ANALYSIS
            </div>
            <p>
              Trao quyền tự động cho thuật toán tái định tuyến <strong>KHÔNG CÓ NGHĨA LÀ</strong> cho phép AI tự do vận hành vượt ngoài tầm kiểm soát. Ngược lại:
            </p>

            <div className="p-4 rounded-xl bg-[#F0F9FF] border border-[#B2DDFF] my-2">
              <div className="text-xs font-mono font-bold text-[#026AA2] uppercase mb-1">QUY LUẬT VHM VỀ TỰ ĐỘNG HÓA QUYẾT ĐỊNH</div>
              <p className="text-sm font-semibold text-[#14202B]">
                Thuật toán càng có nhiều thẩm quyền tự động ra quyết định, hệ thống càng phải được mã hóa các cổng giới hạn khả thi (operational feasibility constraint gates) chặt chẽ.
              </p>
            </div>

            <p>
              Trong bài toán định tuyến vận chuyển, các cổng giới hạn khả thi vận hành bắt buộc phải mã hóa bao gồm:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#2D3748]">
              <li><strong>Giới hạn An toàn Năng lượng (Energy Safety Buffer):</strong> Xe bắt buộc phải duy trì dung lượng pin dự phòng trên ngưỡng khả thi được cấu hình trước khi đến trạm sạc hoặc về depot.</li>
              <li><strong>Cửa sổ Thời gian Cam kết (Time Window Hard Constraints):</strong> Không tái định tuyến nếu vi phạm khung giờ giao cam kết của các khách hàng ưu tiên.</li>
              <li><strong>Giới hạn Tải trọng & Thể tích Xe (Capacity Bounds):</strong> Không chèn thêm đơn hàng ngẫu nhiên nếu vượt quá tải trọng cho phép của phương tiện.</li>
              <li><strong>Giới hạn Khả thi của Trạm sạc (Charging Infrastructure Availability):</strong> Không điều hướng xe đến trạm sạc nếu chưa xác nhận trạng thái trụ sạc sẵn sàng.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 8 — VHM OPERATING MODEL (RENDER REACT WORKFLOW) */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 8</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">VHM OPERATING MODEL</h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ECFDF3] border border-[#ABE5C6] text-[#027A48] font-mono text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5 text-[#027A48]" />
            VHM RECOMMENDATION — Closed-Loop Control Architecture
          </div>

          {/* Interactive Closed-Loop Workflow Visual */}
          <RadarDynamicRoutingWorkflow />
        </section>

        {/* SECTION 9 — VHM VERDICT & DESIGN PRINCIPLE */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 9</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">VHM VERDICT & DESIGN PRINCIPLE</h2>
          </div>

          <div className="p-5 rounded-xl border border-[#FEF5E7] bg-[#FEF5E7]/60 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-[#C47A16] uppercase">FINAL VERDICT</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#FEF5E7] text-[#C47A16] border border-[#F9E2C1] font-bold">
                TEST IN CONTROLLED WORKFLOW
              </span>
            </div>
            <div className="text-base font-bold text-[#14202B] mb-2">
              Predict → Decide → Re-route under Feasibility Constraints
            </div>
            <p className="text-xs text-[#435164] leading-relaxed font-medium">
              Doanh nghiệp vận tải không nên áp dụng thuật toán tái định tuyến tự động trên toàn bộ đội xe ngay lập tức. Cần triển khai thử nghiệm trên các luồng vận chuyển phụ thuộc năng lượng cao (như đội xe điện chặng cuối) hoặc các tuyến đường đô thị có mật độ biến động giao thông lớn, dưới sự giám sát của cổng kiểm soát khả thi vận hành.
            </p>
          </div>
        </section>

        {/* SECTION 10 — VIETNAM OPERATIONS FIT */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 10</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">VIETNAM OPERATIONS FIT</h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F8F9FC] border border-[#EAECF0] text-[#344054] font-mono text-xs font-semibold mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-[#344054]" />
            VHM ANALYSIS — GIẢ THUYẾT ỨNG DỤNG TIỀM NĂNG (KHÔNG PHẢI KẾT QUẢ THỬ NGHIỆM TRỰC TIẾP CỦA BÀI BÁO GỐC)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <h3 className="text-xs font-bold text-[#14202B] uppercase mb-1">1. Giao hàng chặng cuối đô thị</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Mật độ biến động giao thông lớn tại các đô thị đông đúc khiến ETA của bản đồ tuyến tĩnh thường xuyên bị phá vỡ. Việc tái định tuyến động giúp các đơn vị 3PL giảm thiểu tình trạng xe dính kẹt xe dây chuyền.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <h3 className="text-xs font-bold text-[#14202B] uppercase mb-1">2. Đội xe thương mại điện hóa</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Các doanh nghiệp chuyển đổi sang xe máy điện và xe tải điện cần giải quyết bài toán quản trị an toàn năng lượng và điểm sạc để giải tỏa mối lo ngại cạn pin giữa ca làm việc.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <h3 className="text-xs font-bold text-[#14202B] uppercase mb-1">3. Phân phối B2B theo yêu cầu</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Mô hình giao hàng siêu tốc đòi hỏi khả năng tiếp nhận đơn ngẫu nhiên trên lộ trình hiện tại mà không ảnh hưởng đến các cam kết đã có.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 11 — IMPLEMENTATION PLAYBOOK */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 11</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">IMPLEMENTATION PLAYBOOK</h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ECFDF3] border border-[#ABE5C6] text-[#027A48] font-mono text-xs font-semibold mb-4">
            <Sliders className="w-3.5 h-3.5 text-[#027A48]" />
            VHM RECOMMENDATION — Proposed Deployment Sequence
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7] shadow-xs flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-[#E2E8F0] text-[#475569] font-mono font-bold">PHASE 0</span>
              <div>
                <strong className="text-[#14202B] block mb-0.5">Baseline Performance Measurement</strong>
                <span className="text-[#667085]">Đo lường chỉ số vận hành cơ sở (ETA accuracy, mức tiêu hao năng lượng, tỷ lệ trễ hạn tuyến tĩnh hiện tại).</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7] shadow-xs flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-[#E2E8F0] text-[#475569] font-mono font-bold">PHASE 1</span>
              <div>
                <strong className="text-[#14202B] block mb-0.5">Offline Simulation & Replay</strong>
                <span className="text-[#667085]">Chạy mô phỏng lại (replay) dữ liệu lịch sử di chuyển và biến động giao thông để kiểm chứng thuật toán.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7] shadow-xs flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-[#F0F9FF] text-[#026AA2] font-mono font-bold border border-[#B2DDFF]">PHASE 2</span>
              <div>
                <strong className="text-[#14202B] block mb-0.5">Shadow Decisioning (Chế độ Bóng bóng)</strong>
                <span className="text-[#667085]">Thuật toán đưa ra đề xuất tái định tuyến thời gian thực trên hệ thống, bộ phận điều hành đối chiếu nhưng chưa gửi đến tài xế.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7] shadow-xs flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-[#ECFDF3] text-[#027A48] font-mono font-bold border border-[#ABE5C6]">PHASE 3</span>
              <div>
                <strong className="text-[#14202B] block mb-0.5">Controlled Dynamic Routing (Triển khai Thử nghiệm Kiểm soát)</strong>
                <span className="text-[#667085]">Kích hoạt tự động tái định tuyến trên một nhóm xe điện/tuyến đường giới hạn, áp dụng Cổng kiểm tra Feasibility Gate cứng.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7] shadow-xs flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-[#E2E8F0] text-[#475569] font-mono font-bold">PHASE 4</span>
              <div>
                <strong className="text-[#14202B] block mb-0.5">Expanded Decision Authority</strong>
                <span className="text-[#667085]">Từng bước mở rộng quy mô tự động hóa tái định tuyến khi chỉ số an toàn năng lượng và độ ổn định tuyến đạt chuẩn.</span>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-[#667085] italic mt-2">
            *Ghi chú: Lộ trình triển khai trên do VHM đề xuất, không phải là phương pháp luận thực nghiệm được kiểm chứng trong bài báo Basso et al. (2022).
          </div>
        </section>

        {/* SECTION 12 — METRICS FRAMEWORK */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 12</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">METRICS FRAMEWORK</h2>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-[#DCE2E7] shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#DCE2E7] bg-[#F7F8F5] text-[#14202B] font-mono">
                  <th className="p-3 font-semibold">TÊN CHỈ SỐ</th>
                  <th className="p-3 font-semibold">PHÂN LOẠI NGOUỒN</th>
                  <th className="p-3 font-semibold">THAM CHIẾU NGHIÊN CỨU GỐC</th>
                  <th className="p-3 font-semibold">QUẢN TRỊ PILOT THỰC ĐỊA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE2E7] text-[#2D3748]">
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Energy Efficiency Gain</td>
                  <td className="p-3 font-mono text-[#026AA2]">SOURCE-ALIGNED</td>
                  <td className="p-3">Đạt trung bình ~4.8% trong thực nghiệm mô phỏng.</td>
                  <td className="p-3 text-[#667085]">Xác lập mục tiêu đối chứng với baseline thực tế của doanh nghiệp.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Battery Depletion Rate</td>
                  <td className="p-3 font-mono text-[#026AA2]">SOURCE-ALIGNED</td>
                  <td className="p-3">Triệt tiêu rủi ro cạn pin trong thực nghiệm.</td>
                  <td className="p-3 text-[#667085]">Ngưỡng mục tiêu: 0% vi phạm ngưỡng pin an toàn cấu hình.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Dynamic Request Acceptance Rate</td>
                  <td className="p-3 font-mono text-[#026AA2]">SOURCE-ALIGNED</td>
                  <td className="p-3">Tăng khả năng nhận đơn ngẫu nhiên nhờ anticipatory routing.</td>
                  <td className="p-3 text-[#667085]">Đánh giá tỷ lệ chèn đơn thành công không vi phạm khung giờ cam kết.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#14202B]">Route Changes per Vehicle</td>
                  <td className="p-3 font-mono text-[#667085]">VHM RECOMMENDED</td>
                  <td className="p-3 text-[#94A3B8]">N/A</td>
                  <td className="p-3 text-[#667085]">Giới hạn số lần đổi tuyến / ca để tránh dao động tuyến (route oscillation).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 13 — KILL / WARNING CONDITIONS */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 13</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">KILL / WARNING CONDITIONS</h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FEF5E7] border border-[#F9E2C1] text-[#C47A16] font-mono text-xs font-semibold mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-[#C47A16]" />
            VHM RECOMMENDATION — Emergency Protocol
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <strong className="text-[#B45309] block mb-1">1. Route Oscillation (Dao động Tuyến)</strong>
              <span className="text-[#667085]">Tần suất phát lệnh tái định tuyến vượt quá ngưỡng ổn định vận hành được cấu hình do dữ liệu giao thông chập chờn.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <strong className="text-[#B45309] block mb-1">2. Data Latency Spike (Độ trễ Dữ liệu)</strong>
              <span className="text-[#667085]">Độ trễ cập nhật telemetry vượt quá giới hạn an toàn ra quyết định, khiến AI ra quyết định dựa trên dữ liệu quá hạn.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <strong className="text-[#B45309] block mb-1">3. Battery Safety Warning (Cảnh báo Pin)</strong>
              <span className="text-[#667085]">Độ lệch dung lượng pin thực tế vượt quá ranh giới an toàn cho phép so với dự báo của mô hình AI.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#DCE2E7] shadow-xs">
              <strong className="text-[#B45309] block mb-1">4. Charging Station Outage (Trạm sạc)</strong>
              <span className="text-[#667085]">Trạm sạc dự kiến trong lộ trình bị mất kết nối hoặc không có trụ sạc trống.</span>
            </div>
          </div>
        </section>

        {/* SECTION 14 — PRIMARY SOURCE & METADATA */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded bg-[#14202B] text-white text-xs font-mono font-bold">SECTION 14</span>
            <h2 className="text-lg font-extrabold text-[#14202B]">PRIMARY SOURCE & METADATA</h2>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#DCE2E7] shadow-xs space-y-3 text-xs">
            <div className="font-bold text-[#14202B] text-sm">
              Dynamic stochastic electric vehicle routing with safe reinforcement learning
            </div>
            <div className="text-[#435164] font-mono">
              Basso, R., Kulcsár, B., Sanchez-Diaz, I., & Qu, X. (2022). <em>Transportation Research Part E: Logistics and Transportation Review</em>, 157, 102496.
            </div>
            <div className="pt-2 border-t border-[#DCE2E7] flex flex-wrap items-center justify-between gap-2">
              <a 
                href="https://doi.org/10.1016/j.tre.2021.102496" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#235789] hover:underline inline-flex items-center gap-1 font-mono font-semibold"
              >
                https://doi.org/10.1016/j.tre.2021.102496 <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[#667085] font-mono text-[11px]">
                Simulation Boundary: Computational experiment based on Luxembourg urban traffic data
              </span>
            </div>
          </div>
        </section>

        {/* Lead Capture Integration Form */}
        <section id="lead-capture" className="my-16 pt-8 border-t border-[#DCE2E7]">
          <div className="max-w-2xl mx-auto">
            <LeadCaptureForm 
              source="radar-007" 
            />
          </div>
        </section>
      </main>

      {/* Mobile Sticky CTA Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-white/95 border-t border-[#DCE2E7] backdrop-blur-lg z-50">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div>
            <div className="text-[10px] font-mono font-bold text-[#026AA2] uppercase">VHM RADAR #007</div>
            <div className="text-xs font-bold text-[#14202B] truncate max-w-[200px]">Định tuyến động chặng giao vận</div>
          </div>
          <a
            href="#lead-capture"
            className="px-4 py-2 rounded-lg bg-[#14202B] text-white font-bold text-xs shadow-md hover:bg-[#235789] transition-colors shrink-0"
          >
            Nhận Tài liệu
          </a>
        </div>
      </div>
    </article>
  );
}
