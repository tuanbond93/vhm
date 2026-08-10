export type RadarVerdict = 'ADOPT' | 'TEST' | 'WATCH' | 'SKIP';
export type EvidenceTier = 'Tier 1 / Primary Research' | 'Tier 1 / Peer-Reviewed Review' | 'Tier 2 / Field Report' | 'Tier 3 / Industry Data';

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
    id: 'radar-006',
    slug: 'ai-canh-bao-som-don-hang-tre-kho-hang',
    type: 'AI / Warehouse Operations',
    title: 'AI không nên chỉ báo cáo đơn đã trễ: Có thể cảnh báo rủi ro trước khi vỡ SLA kho hàng?',
    subtitle: 'Phân tích từ nghiên cứu công bố trên tạp chí Transportation Research Part E (Aloini et al., 2025) về mô hình Machine Learning dự báo nguy cơ trễ đơn và cơ chế cảnh báo thời gian thực.',
    summary: 'Nghiên cứu trên Transportation Research Part E (2025) minh chứng mô hình ML có thể dự báo rủi ro trễ hạn đơn hàng từ dữ liệu WMS thời gian thực. VHM khuyến nghị nguyên lý Cảnh báo rủi ro bằng AI kết hợp Can thiệp Điều hành của Con người.',
    verdict: 'TEST',
    verdictLabel: 'TEST IN CONTROLLED WORKFLOW',
    verdictDescription: 'Áp dụng nguyên lý Cảnh báo rủi ro bằng AI kết hợp Can thiệp Điều hành của Con người (Predict Before You Escalate: AI Early Warning with Governed Human Intervention). Thử nghiệm phân loại và xử lý ngoại lệ trong khu vực kiểm soát.',
    evidenceTitle: 'Unlocking Real-Time Decision-Making in Warehouses: A machine learning-based forecasting and alerting system for cycle time prediction',
    evidenceAuthors: 'Davide Aloini, Elisabetta Benevento, Riccardo Dulmin, Emanuele Guerrazzi, Valeria Mininno',
    evidenceUrl: 'https://doi.org/10.1016/j.tre.2024.103933',
    evidenceTier: 'Tier 1 / Primary Research',
    confidence: 'High',
    publishedAt: '2026-08-10',
    readTime: '8 phút đọc',
    topics: ['Warehouse Operations', 'Machine Learning', 'WMS Alerting', 'SLA Exception Management'],
    operatorKeyInsight: 'AI không tự động giải quyết nghẽn kho, nhưng cảnh báo sớm từ ML giúp quản lý tạo thêm thời gian phản ứng trước các nguy cơ trễ đơn.',
    published: true,
  },
  {
    id: 'radar-005',
    slug: 'amr-kho-hang-workflow-design',
    type: 'AMR / Warehouse Automation',
    title: 'Tự động hóa kho bằng AMRs: Vì sao thiết kế workflow quan trọng hơn mua công nghệ?',
    subtitle: 'Phân tích từ bài tổng quan nghiên cứu trên tạp chí European Journal of Operational Research (Fragapane et al., 2021) về bài toán lập kế hoạch, điều phối AMR và thiết kế tương tác Con người - Robot.',
    summary: 'Bài tổng quan nghiên cứu trên EJOR (2021) chỉ ra rằng hiệu quả tự động hóa kho hàng bằng AMR liên quan chặt chẽ đến các quyết định lập kế hoạch, phân công nhiệm vụ và kiểm soát traffic. VHM khuyến nghị nguyên lý thiết kế luồng tương tác trước khi đầu tư thiết bị.',
    verdict: 'TEST',
    verdictLabel: 'TEST IN CONTROLLED WORKFLOW',
    verdictDescription: 'Áp dụng nguyên lý Thiết kế luồng tương tác Con người - Robot trước khi tự động hóa (Human–Robot Workflow Design Before Full Automation). Thử nghiệm phân công nhiệm vụ trong khu vực kiểm soát.',
    evidenceTitle: 'Planning and control of autonomous mobile robots for intralogistics: Literature review and research agenda',
    evidenceAuthors: 'Giuseppe Fragapane, René de Koster, Fabio Sgarbossa, Jan Ola Strandhagen',
    evidenceUrl: 'https://doi.org/10.1016/j.ejor.2021.01.019',
    evidenceTier: 'Tier 1 / Peer-Reviewed Review',
    confidence: 'High',
    publishedAt: '2026-08-10',
    readTime: '8 phút đọc',
    topics: ['Warehouse Automation', 'AMRs', 'Intralogistics', 'Workflow Design'],
    operatorKeyInsight: 'Giá trị thực tế của AMR nằm ở năng lực tái thiết kế luồng công việc và phân công nhiệm vụ phù hợp giữa Con người và Robot.',
    published: true,
  },
  {
    id: 'radar-004',
    slug: 'genai-tai-lieu-van-hanh-human-validation',
    type: 'GenAI / Ops Documentation',
    title: 'GenAI giúp viết nhanh hơn 40%: Vì sao tài liệu vận hành vẫn cần con người kiểm chứng?',
    subtitle: 'Phân tích từ nghiên cứu thực nghiệm công bố trên tạp chí Science (Noy & Zhang, 2023) về năng suất GenAI trong nhiệm vụ viết chuyên môn và bài học quản trị tài liệu vận hành.',
    summary: 'Nghiên cứu thực nghiệm trên Science (2023) minh chứng GenAI giảm 40% thời gian viết và tăng 18% chất lượng bài viết chuyên môn. Tuy nhiên, việc ứng dụng vào soạn thảo SOP vận hành đòi hỏi quy trình thẩm định 2 lớp của con người trước khi ban hành.',
    verdict: 'TEST',
    verdictLabel: 'TEST IN CONTROLLED WORKFLOW',
    verdictDescription: 'Áp dụng nguyên lý Soạn thảo bằng AI kết hợp Thẩm định bởi Con người (AI-Assisted Drafting with Human Validation). Coi GenAI là trợ lý tạo bản thảo thô và giữ nguyên thẩm quyền phê duyệt của con người.',
    evidenceTitle: 'Experimental evidence on the productivity effects of generative artificial intelligence',
    evidenceAuthors: 'Shakked Noy, Whitney Zhang',
    evidenceUrl: 'https://doi.org/10.1126/science.adh2586',
    evidenceTier: 'Tier 1 / Primary Research',
    confidence: 'High',
    publishedAt: '2026-08-10',
    readTime: '7 phút đọc',
    topics: ['Ops Documentation', 'Generative AI', 'SOP Governance', 'Human Validation'],
    operatorKeyInsight: 'AI giúp rút ngắn 40% thời gian tạo bản thảo, nhưng con người bắt buộc phải chịu trách nhiệm về tính chính xác vận hành và thẩm quyền ban hành.',
    published: true,
  },
  {
    id: 'radar-003',
    slug: 'genai-cskh-knowledge-multiplier',
    type: 'GenAI / Customer Service Ops',
    title: 'AI trong CSKH không giúp mọi nhân viên như nhau: Bài học từ 5.000 nhân sự vận hành',
    subtitle: 'Phân tích từ công trình nghiên cứu thực nghiệm QJE (2025) của Brynjolfsson et al. trên 5.172 nhân sự CSKH và bài học coi GenAI là Bộ nhân bản Tri thức (Knowledge Multiplier).',
    summary: 'Nghiên cứu thực nghiệm công bố trên QJE (2025) cho thấy Generative AI tăng 15% năng suất trung bình, nhưng mang lại mức tăng đột phá 30% cho nhân sự mới và kỹ năng thấp, trong khi nhóm chuyên gia kỹ năng cao hầu như không ghi nhận sự gia tăng năng suất.',
    verdict: 'ADOPT',
    verdictLabel: 'ADOPT DESIGN PRINCIPLE',
    verdictDescription: 'Áp dụng nguyên lý Coi AI là Bộ nhân bản Tri thức, Không phải Công cụ Thay thế Chuyên gia (AI as Knowledge Multiplier, Not Expert Replacement). Số hóa tri thức từ nhân sự giỏi để nâng chuẩn cho nhân sự mới.',
    evidenceTitle: 'Generative AI at Work',
    evidenceAuthors: 'Erik Brynjolfsson, Danielle Li, Lindsey R. Raymond',
    evidenceUrl: 'https://doi.org/10.1093/qje/qjae044',
    evidenceTier: 'Tier 1 / Primary Research',
    confidence: 'High',
    publishedAt: '2026-08-10',
    readTime: '8 phút đọc',
    topics: ['Customer Service Ops', 'Generative AI', 'Knowledge Dissemination', 'Skill Equalization'],
    operatorKeyInsight: 'Giá trị lớn nhất của GenAI nằm ở việc đóng gói và phổ biến tri thức từ nhóm nhân sự làm việc hiệu quả sang nhóm nhân sự mới.',
    published: true,
  },
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
