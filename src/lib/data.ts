export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: 'AI & Automation' | 'Hệ thống & Dashboard' | 'Quy trình & SOP' | 'Quản trị Ops';
  readTime: string;
  date: string;
  featured?: boolean;
}

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  category: 'Dashboard' | 'AI Prompt' | 'Template' | 'Checklist';
  badge: 'Miễn phí' | 'Sắp ra mắt' | 'Nổi bật';
  iconName: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  impact: string;
}

export interface Pillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export const SITE_METADATA = {
  title: 'Vận Hành Mới — Hệ thống + AI ứng dụng thực tế cho người làm vận hành',
  description: 'Giảm việc tay. Nhìn rõ vận hành. Ra quyết định nhanh hơn. Giải pháp hệ thống quản trị, dashboard và AI ứng dụng thực chiến dành cho Operations Managers và doanh nghiệp SME.',
  domain: 'vanhanhmoi.com',
  secondaryDomain: 'vanhanhmoi.vn',
};

export const PROBLEMS_DATA: ProblemItem[] = [
  {
    id: 'p1',
    title: 'Báo cáo thủ công ngốn hàng giờ mỗi ngày',
    description: 'Dữ liệu phân mảnh trên hàng chục file Google Sheets, Excel và chat box khiến team tốn quá nhiều thời gian tổng hợp thủ công.',
    impact: 'Lãng phí 15-20 giờ làm việc/tuần của quản lý.'
  },
  {
    id: 'p2',
    title: 'Dữ liệu nhiều nhưng khó nhìn ra điểm nghẽn',
    description: 'Chỉ số KPI và dữ liệu thô xuất hiện khắp nơi nhưng thiếu dashboard tập trung để phát hiện ngay sự cố khi vừa phát sinh.',
    impact: 'Sự cố vận hành chỉ phát hiện ra khi đã quá muộn.'
  },
  {
    id: 'p3',
    title: 'Phải liên tục nhắc việc & follow-up',
    description: 'Quy trình giao việc và theo dõi phụ thuộc hoàn toàn vào trí nhớ hoặc nhắc nhở cá nhân, khiến tiến độ chập chờn.',
    impact: 'Tăng áp lực quản lý, tỉ lệ sót việc cao.'
  },
  {
    id: 'p4',
    title: 'SOP phụ thuộc quá nhiều vào cá nhân',
    description: 'Khi nhân sự nghỉ việc, tri thức và quy trình bị đứt gãy do không được đóng gói và chuẩn hóa thành hệ thống.',
    impact: 'Tốn chi phí đào tạo lại từ đầu.'
  },
  {
    id: 'p5',
    title: 'Biết AI hữu ích nhưng chưa biết áp dụng ở đâu',
    description: 'Nghe nhiều về ChatGPT / AI nhưng chưa xây dựng được workflow thực tế phục vụ trực tiếp công việc vận hành hàng ngày.',
    impact: 'Bỏ lỡ lợi thế tự động hóa thực chiến.'
  }
];

export const PILLARS_DATA: Pillar[] = [
  {
    number: '01',
    title: 'Hệ thống vận hành',
    tagline: 'Chuẩn hóa nền tảng & Dữ liệu',
    description: 'Xây dựng cấu trúc dữ liệu tập trung, bộ chỉ số KPI đo lường chuẩn xác và quy trình SOP đóng gói tri thức doanh nghiệp.',
    bullets: [
      'Operational Dashboards nhìn rõ hiệu suất real-time',
      'Bộ chỉ số KPI / OKR đo lường đa phòng ban',
      'Đóng gói SOP & Checklists quy chuẩn dễ thực thi',
      'Thiết kế nhịp quản trị (Daily / Weekly / Monthly Review)'
    ]
  },
  {
    number: '02',
    title: 'AI & Automation',
    tagline: 'Trợ lý AI & Workflow tự động',
    description: 'Tích hợp AI vào từng điểm chạm công việc: tự động phân tích dữ liệu, cảnh báo bất thường và xử lý tác vụ lặp lại.',
    bullets: [
      'Custom Prompts & AI Agents hỗ trợ Operations Manager',
      'Workflow tự động hóa kết nối Apps (No-code / Low-code)',
      'Hệ thống cảnh báo tự động khi KPI lệch chuẩn',
      'Tự động tổng hợp báo cáo & trích xuất dữ liệu'
    ]
  },
  {
    number: '03',
    title: 'Công cụ thực chiến',
    tagline: 'Templates & Prompt Kits áp dụng ngay',
    description: 'Bộ công cụ đóng gói sẵn gồm Templates, Checklists và Prompts giúp rút ngắn 80% thời gian triển khai cho đội ngũ.',
    bullets: [
      'Bộ AI Prompt chuyên biệt cho Operations Manager',
      'Template Dashboard quản lý tiến độ & KPI',
      'Khung phân tích nguyên nhân gốc rễ (Root-Cause Matrix)',
      'Checklist đánh giá sức khỏe vận hành định kỳ'
    ]
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    slug: 'ai-cho-operation-manager',
    title: 'AI có thể giúp Operation Manager những gì trong thực tế?',
    excerpt: 'Vượt qua các lời hứa hẹn viễn tưởng, đây là 5 trường hợp ứng dụng AI thực tế giúp quản lý vận hành tiết kiệm 10+ giờ làm việc mỗi tuần.',
    category: 'AI & Automation',
    readTime: '6 phút đọc',
    date: 'Thực chiến Ops',
    featured: true
  },
  {
    slug: 'thiet-ke-dashboard-van-hanh',
    title: 'Thiết kế Dashboard vận hành: Bắt đầu từ đâu để không bị rối dữ liệu?',
    excerpt: 'Hướng dẫn 4 bước cô đọng để biến hàng triệu hàng dữ liệu thô thành màn hình theo dõi 1 trang giúp ra quyết định trong 30 giây.',
    category: 'Hệ thống & Dashboard',
    readTime: '8 phút đọc',
    date: 'Thực chiến Ops',
    featured: true
  },
  {
    slug: 'tu-sop-thu-cong-den-ai-workflow',
    title: 'Từ SOP viết tay đến AI-Assisted Workflow: Lộ trình nâng cấp quy trình',
    excerpt: 'Cách biến các tài liệu quy trình dài hàng chục trang thành trợ lý AI tương tác trực tiếp, giúp nhân sự mới nắm việc trong 1 ngày.',
    category: 'Quy trình & SOP',
    readTime: '7 phút đọc',
    date: 'Thực chiến Ops',
    featured: false
  },
  {
    slug: '5-bao-cao-van-hanh-nen-tu-dong-hoa',
    title: '5 loại báo cáo vận hành nên tự động hóa ngay hôm nay',
    excerpt: 'Phân tích danh mục báo cáo ngày, tuần và tháng: Loại nào nên tự động hóa hoàn toàn và loại nào cần con người duyệt.',
    category: 'Quản trị Ops',
    readTime: '5 phút đọc',
    date: 'Thực chiến Ops',
    featured: false
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    id: 'tool-ai-prompt-kit',
    title: 'AI Prompt Kit cho Operation Manager',
    description: 'Bộ 30+ Prompts tinh chỉnh sẵn cho ChatGPT/Claude giúp trích xuất điểm nghẽn, viết báo cáo nhanh và phân tích nguyên nhân sự cố.',
    category: 'AI Prompt',
    badge: 'Miễn phí',
    iconName: 'Sparkles'
  },
  {
    id: 'tool-dashboard-ops',
    title: 'Template Dashboard Vận hành Tổng quan',
    description: 'Mẫu Dashboard theo dõi KPI, tiến độ công việc và cảnh báo sự cố được tối ưu giao diện trên Notion / Looker Studio.',
    category: 'Dashboard',
    badge: 'Miễn phí',
    iconName: 'LayoutDashboard'
  },
  {
    id: 'tool-kpi-matrix',
    title: 'Bộ KPI Operations & Ma trận Đo lường',
    description: 'Khung chỉ số KPI cốt lõi dành riêng cho khối Vận hành SME: Từ Lead Time, SLA, Tỉ lệ lỗi đến Chi phí vận hành.',
    category: 'Template',
    badge: 'Miễn phí',
    iconName: 'BarChart3'
  },
  {
    id: 'tool-sop-standard',
    title: 'Khung Đóng gói SOP chuẩn AI-Ready',
    description: 'Template soạn thảo quy trình chuẩn hóa giúp con người dễ đọc và AI dễ dàng trích xuất thông tin tự động.',
    category: 'Checklist',
    badge: 'Sắp ra mắt',
    iconName: 'FileText'
  },
  {
    id: 'tool-weekly-review',
    title: 'Weekly Operations Review System',
    description: 'Bộ khung họp tuần vận hành gọn nhẹ 45 phút: Nhìn số, chốt điểm nghẽn, phân công action plan.',
    category: 'Template',
    badge: 'Sắp ra mắt',
    iconName: 'CalendarCheck'
  }
];

export const PROOF_CASES = [
  {
    id: 'c1',
    tag: 'Dashboard & Data',
    title: 'Chuẩn hóa Dashboard theo dõi sự cố vận hành chuỗi',
    summary: 'Chuyển đổi từ 15 file báo cáo chat riêng lẻ sang Dashboard real-time duy nhất.',
    result: 'Giảm 75% thời gian tổng hợp số liệu mỗi ca làm việc.'
  },
  {
    id: 'c2',
    tag: 'AI Workflow',
    title: 'Tự động hóa phân loại & cảnh báo công việc tồn đọng',
    summary: 'Tích hợp AI Agent kiểm tra danh sách nhiệm vụ và gửi cảnh báo ưu tiên mỗi sáng.',
    result: 'Tỉ lệ trễ hạn công việc giảm từ 18% xuống dưới 3%.'
  },
  {
    id: 'c3',
    tag: 'SOP System',
    title: 'Số hóa 40+ SOP vận hành thành Trợ lý Trích xuất Tri thức',
    summary: 'Đóng gói quy trình đào tạo nhân sự mới bằng Bot hỏi đáp nội bộ.',
    result: 'Rút ngắn thời gian onboarding từ 2 tuần xuống còn 3 ngày.'
  }
];
