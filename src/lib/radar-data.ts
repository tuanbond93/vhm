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
  evidenceAuthors: string;
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
    id: 'radar-002',
    slug: 'du-bao-nhu-cau-human-override',
    type: 'Demand Forecasting / Operations',
    title: 'Dự báo nhu cầu: Khi nào nên tin mô hình, khi nào cần con người can thiệp?',
    subtitle: 'Phân tích từ công trình nghiên cứu thực nghiệm Fildes et al. (2009) trên 60.000 dữ liệu dự báo và bài học thiết kế luồng quản trị con người can thiệp (Judgmental Override) hiệu quả.',
    summary: 'Phân tích thực chứng từ 4 doanh nghiệp chuỗi cung ứng cho thấy: Các điều chỉnh vi mô nhỏ của con người thường làm giảm độ chính xác dự báo nhu cầu, trong khi các điều chỉnh quy mô tương đối lớn có xu hướng cải thiện độ chính xác trung bình khi dựa trên thông tin ngữ cảnh.',
    verdict: 'ADOPT',
    verdictLabel: 'ADOPT DESIGN PRINCIPLE',
    verdictDescription: 'Áp dụng nguyên lý Dự báo ưu tiên mô hình kết hợp Quản trị can thiệp có điều kiện (Model-First Forecasting with Governed Human Override). Coi số liệu từ mô hình là baseline mặc định và bắt buộc quản trị luồng can thiệp của con người bằng phân quyền và mã lý do.',
    evidenceTitle: 'Effective forecasting and judgmental adjustments: an empirical evaluation and strategies for improvement in supply-chain planning',
    evidenceAuthors: 'Robert Fildes, Paul Goodwin, Michael Lawrence, Konstantinos Nikolopoulos',
    evidenceUrl: 'https://doi.org/10.1016/j.ijforecast.2008.11.010',
    evidenceTier: 'Tier 1 / Primary Research',
    confidence: 'High',
    publishedAt: '2026-08-10',
    readTime: '7 phút đọc',
    topics: ['Demand Forecasting', 'Judgmental Override', 'Inventory Planning', 'Exception Thresholds'],
    operatorKeyInsight: 'Mô hình máy tính tạo baseline ổn định hơn con người, nhưng con người can thiệp hiệu quả hơn khi có thông tin bối cảnh lớn và được quản trị bằng quy định phân quyền rõ ràng.',
    published: true,
  },
  {
    id: 'radar-001',
    slug: 'ai-agent-human-in-the-loop-taobao',
    type: 'China Radar',
    title: 'AI agent không nên thay người hoàn toàn: Bài học từ vận hành Taobao',
    subtitle: 'Nghiên cứu thực nghiệm tại quy mô Taobao chỉ ra vì sao tự động hóa hoàn toàn gây tụt giảm chất lượng vận hành và cách thiết kế kiến trúc Human-in-the-Loop chuẩn xác.',
    summary: 'Phân tích từ công trình nghiên cứu trên hệ thống Alibaba/Taobao về việc ứng dụng Agentic AI trong chăm sóc khách hàng. Nghiên cứu thực nghiệm chứng minh rằng việc rút con người hoàn toàn khỏi quy trình làm giảm thời gian hội thoại trung bình nhưng giảm đáng kể điểm đánh giá của khách hàng.',
    verdict: 'ADOPT',
    verdictLabel: 'ADOPT DESIGN PRINCIPLE',
    verdictDescription: 'Áp dụng nguyên lý thiết kế Tự động hóa có ranh giới (Bounded Automation) kết hợp Nhận diện thất bại (Failure Detection) và Phân cấp leo thang sớm (Early Escalation). KHÔNG áp dụng tự động hóa tự quyết hoàn toàn.',
    evidenceTitle: 'Agentic AI and Human-in-the-Loop Interventions: Field Experimental Evidence from Alibaba\'s Customer Service Operations',
    evidenceAuthors: 'Yiwei Wang, Chuan Zhu, Tianjun Feng, Lauren Xiaoyuan Lu, Bingxin Jia',
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
