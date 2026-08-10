import type { Metadata } from 'next';
import { Compass, FileCheck2 } from 'lucide-react';
import { RADAR_ITEMS } from '@/lib/radar-data';
import { RadarCard } from '@/components/RadarCard';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'VHM Radar — Decision Intelligence cho Người Làm Vận Hành',
  description:
    'Theo dõi những thay đổi đáng chú ý về AI, công nghệ và vận hành — sau đó đánh giá chúng dưới góc nhìn của người làm Operations.',
  alternates: {
    canonical: 'https://vanhanhmoi.com/radar',
  },
  openGraph: {
    title: 'VHM Radar — Decision Intelligence cho Người Làm Vận Hành',
    description:
      'Đánh giá thực chứng các xu hướng AI, tự động hóa và quy trình vận hành dành riêng cho Operations Manager.',
    url: 'https://vanhanhmoi.com/radar',
    siteName: 'Vận Hành Mới',
    type: 'website',
  },
};

export default function RadarIndexPage() {
  const publishedItems = RADAR_ITEMS.filter((item) => item.published);

  return (
    <div className="min-h-screen bg-[#F7F8F5]">
      {/* Schema.org CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'VHM Radar — Decision Intelligence cho Người Làm Vận Hành',
            url: 'https://vanhanhmoi.com/radar',
            description:
              'Theo dõi những thay đổi đáng chú ý về AI, công nghệ và vận hành — sau đó đánh giá chúng dưới góc nhìn của người làm Operations.',
          }),
        }}
      />

      {/* Hero Header Section */}
      <section className="border-b border-[#DCE2E7] bg-white py-10 sm:py-14">
        <div className="container-custom max-w-5xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-[#235789] font-mono text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#2F6FED]" />
            <span>VHM RADAR · DECISION INTELLIGENCE FOR OPERATORS</span>
          </div>

          <div className="max-w-4xl space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight leading-tight sm:leading-tight">
              Đánh giá công nghệ & AI dưới góc nhìn Operations
            </h1>
            <p className="text-sm sm:text-lg text-[#435164] leading-relaxed">
              VHM Radar không phải là trang tin tức công nghệ tổng hợp. Chúng tôi lọc tín hiệu thị trường, đối chiếu bằng chứng thực nghiệm và phân tích xem người làm vận hành nên <strong>ADOPT</strong>, <strong>TEST</strong>, <strong>WATCH</strong> hay <strong>SKIP</strong>.
            </p>
          </div>

          {/* Evaluation Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-[#DCE2E7] text-xs">
            <div className="bg-[#F7F8F5] p-3 rounded-xl border border-[#DCE2E7]">
              <span className="font-mono text-[#667085] block text-[10px] uppercase">01. EVIDENCE</span>
              <span className="font-semibold text-[#14202B]">Bằng chứng thực nghiệm</span>
            </div>
            <div className="bg-[#F7F8F5] p-3 rounded-xl border border-[#DCE2E7]">
              <span className="font-mono text-[#667085] block text-[10px] uppercase">02. RELEVANCE</span>
              <span className="font-semibold text-[#14202B]">Tính thực tế hiện trường</span>
            </div>
            <div className="bg-[#F7F8F5] p-3 rounded-xl border border-[#DCE2E7]">
              <span className="font-mono text-[#667085] block text-[10px] uppercase">03. VIETNAM FIT</span>
              <span className="font-semibold text-[#14202B]">Phù hợp bối cảnh Việt Nam</span>
            </div>
            <div className="bg-[#F7F8F5] p-3 rounded-xl border border-[#DCE2E7]">
              <span className="font-mono text-[#667085] block text-[10px] uppercase">04. HUMAN REVIEW</span>
              <span className="font-semibold text-[#14202B]">Đánh giá bởi chuyên gia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict Taxonomy Legend Section */}
      <section className="py-8 bg-[#F7F8F5] border-b border-[#DCE2E7]">
        <div className="container-custom max-w-5xl">
          <div className="bg-white border border-[#DCE2E7] rounded-2xl p-5 sm:p-6">
            <div className="font-mono text-xs font-semibold text-[#235789] uppercase tracking-wider mb-3">
              KHUNG ĐÁNH GIÁ KHUYẾN NGHỊ (VERDICT TAXONOMY)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#E8F5F2] border border-[#BDE3DA]">
                <div className="font-mono font-bold text-[#167A65] mb-1">ADOPT</div>
                <p className="text-[#435164] leading-relaxed">
                  Đã chứng minh hiệu quả và độ ổn định. Khuyến nghị áp dụng ngay vào quy trình.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#EBF2FE] border border-[#C5D8F9]">
                <div className="font-mono font-bold text-[#235789] mb-1">TEST</div>
                <p className="text-[#435164] leading-relaxed">
                  Tiềm năng cao nhưng cần thử nghiệm có kiểm soát (Sandbox) trước khi nhân rộng.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FEF5E7] border border-[#F9E2C1]">
                <div className="font-mono font-bold text-[#C47A16] mb-1">WATCH</div>
                <p className="text-[#435164] leading-relaxed">
                  Xu hướng đáng quan tâm nhưng chưa đủ bằng chứng hoặc chi phí triển khai quá cao.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FDF2F2] border border-[#F8D7D7]">
                <div className="font-mono font-bold text-[#B5473C] mb-1">SKIP</div>
                <p className="text-[#435164] leading-relaxed">
                  Hype quá đà, rủi ro vận hành lớn hoặc không phù hợp thực tế quy trình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Published Radar Items List */}
      <section className="py-10 sm:py-14">
        <div className="container-custom max-w-5xl space-y-6 sm:space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#14202B]">
              Báo cáo Radar đã xuất bản ({publishedItems.length})
            </h2>
            <span className="text-xs font-mono text-[#667085]">
              Cập nhật liên tục
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {publishedItems.map((item) => (
              <RadarCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Newsletter/Toolkit Lead Form Section */}
      <section className="py-10 sm:py-14 bg-white border-t border-[#DCE2E7]">
        <div className="container-custom max-w-5xl space-y-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FE] border border-[#C5D8F9] text-[#235789] text-xs font-mono font-semibold">
            <FileCheck2 className="w-3.5 h-3.5 text-[#2F6FED]" />
            <span>NHẬN PHÂN TÍCH RADAR VÀ TOOLKIT VẬN HÀNH</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-bold text-[#14202B]">
            Đăng ký nhận Radar phân tích mới nhất qua email
          </h3>
          <p className="text-xs sm:text-sm text-[#435164] max-w-xl mx-auto leading-relaxed">
            Nhận thông báo khi có phân tích Radar mới cùng bộ AI Prompt Kit 32 Prompts thực chiến dành cho Operations Manager.
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="radar_index_bottom" buttonText="Đăng ký nhận Radar" />
          </div>
        </div>
      </section>
    </div>
  );
}
