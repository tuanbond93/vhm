export type RadarVerdict = 'ADOPT' | 'TEST' | 'WATCH' | 'SKIP';
export type EvidenceTier = 'Tier 1 / Primary Research' | 'Tier 2 / Field Report' | 'Tier 3 / Industry Data';

export interface RadarItem {
  id: string;
  slug: string;
  type: string; // e.g. "China Radar"
  title: string;
  subtitle: string;
  summary: string;
  verdict: RadarVerdict;
  verdictLabel: string; // e.g. "ADOPT DESIGN PRINCIPLE"
  verdictDescription: string;
  evidenceTitle: string;
  evidenceUrl: string;
  evidenceTier: EvidenceTier;
  confidence: 'High' | 'Medium' | 'Low';
  publishedAt: string;
  readTime: string;
  topics: string[];
  operatorKeyInsight: string;
  published: boolean;
}

export const RADAR_ITEMS: RadarItem[] = [
  {
    id: 'radar-001',
    slug: 'ai-agent-human-in-the-loop-taobao',
    type: 'China Radar',
    title: 'AI agent không nên thay người hoàn toàn: Bài học từ vận hành Taobao',
    subtitle: 'Nghiên cứu thực nghiệm tại quy mô Taobao chỉ ra vì sao tự động hóa hoàn toàn gây tụt giảm chất lượng vận hành và cách thiết kế kiến trúc Human-in-the-Loop chuẩn xác.',
    summary: 'Phân tích từ công trình nghiên cứu trên hệ thống Taobao về việc ứng dụng AI Agent trong xử lý khiếu nại và khiếu nại dịch vụ. Nghiên cứu chứng minh rằng việc rút con người hoàn toàn khỏi quy trình tạo ra rủi ro leo thang khiếu nại và suy giảm trải nghiệm khách hàng.',
    verdict: 'ADOPT',
    verdictLabel: 'ADOPT DESIGN PRINCIPLE',
    verdictDescription: 'Áp dụng nguyên lý thiết kế Tự động hóa có ranh giới (Bounded Automation) kết hợp Nhận diện thất bại (Failure Detection) và Phân cấp leo thang sớm (Early Escalation). KHÔNG áp dụng tự động hóa tự quyết hoàn toàn.',
    evidenceTitle: 'arXiv 2605.14830 — Customer Service AI Agent Operations at Taobao Scale',
    evidenceUrl: 'https://arxiv.org/abs/2605.14830',
    evidenceTier: 'Tier 1 / Primary Research',
    confidence: 'High',
    publishedAt: '2026-08-10',
    readTime: '6 phút đọc',
    topics: ['AI Operations', 'AI Agents', 'Human-in-the-Loop', 'Customer Operations', 'Exception Handling'],
    operatorKeyInsight: 'Human-in-the-loop phải được thiết kế như một workflow vận hành, không phải một nút "chuyển cho người" đặt ở cuối quy trình.',
    published: true,
  },
];
