export const HUMAN_LOOP_PRODUCT_ID = 'human_in_the_loop_escalation';

export type HumanDecision = 'TAKE_OVER' | 'APPROVE_SUGGESTION' | 'MODIFY_ACTION' | 'REJECT_ACTION';

export interface HumanLoopScenario {
  id: 'routine' | 'low-confidence' | 'policy-sensitive';
  caseId: string;
  title: string;
  status: 'AI_HANDLED' | 'HUMAN_REVIEW_REQUIRED';
  risk: 'LOW' | 'MEDIUM' | 'HIGH';
  handlingState: string;
  initialConfidence: number;
  currentConfidence: number;
  summary: string;
  proposedAction: string;
  humanQuestion: string;
  signals: string[];
  triggers: Array<{ trigger: string; evidence: string; stopReason: string }>;
  timeline: Array<{ actor: 'CUSTOMER' | 'AI' | 'SYSTEM'; label: string; detail: string }>;
}

export const HUMAN_LOOP_SCENARIOS: HumanLoopScenario[] = [
  {
    id: 'routine',
    caseId: 'DEMO-001-A',
    title: 'Tra cứu trạng thái yêu cầu',
    status: 'AI_HANDLED',
    risk: 'LOW',
    handlingState: 'AI xử lý trong phạm vi chính sách demo',
    initialConfidence: 94,
    currentConfidence: 91,
    summary: 'Người dùng hỏi trạng thái một yêu cầu mẫu; dữ liệu cần thiết có đủ và không có hành động nhạy cảm.',
    proposedAction: 'Trả trạng thái mẫu và hướng dẫn bước tiếp theo.',
    humanQuestion: 'Không cần quyết định của con người trong kịch bản này.',
    signals: ['Ý định rõ ràng', 'Dữ liệu mẫu đầy đủ', 'Không có hành động nhạy cảm'],
    triggers: [],
    timeline: [
      { actor: 'CUSTOMER', label: 'Yêu cầu mẫu được tiếp nhận', detail: 'Người dùng hỏi trạng thái xử lý của một yêu cầu tổng hợp.' },
      { actor: 'AI', label: 'AI kiểm tra phạm vi', detail: 'Ý định rõ, dữ liệu mẫu đầy đủ, không chạm chính sách phê duyệt.' },
      { actor: 'SYSTEM', label: 'Hoàn tất trong phạm vi', detail: 'Không có trigger escalation theo demo policy.' },
    ],
  },
  {
    id: 'low-confidence',
    caseId: 'DEMO-001-B',
    title: 'Yêu cầu mơ hồ, thiếu dữ liệu',
    status: 'HUMAN_REVIEW_REQUIRED',
    risk: 'MEDIUM',
    handlingState: 'AI PAUSED',
    initialConfidence: 92,
    currentConfidence: 62,
    summary: 'Yêu cầu chứa hai cách hiểu và thiếu mã tham chiếu cần thiết để chọn đúng quy trình xử lý.',
    proposedAction: 'Xin bổ sung mã tham chiếu trước khi tiếp tục.',
    humanQuestion: 'Nên hỏi thêm dữ liệu hay chuyển case sang nhóm nghiệp vụ?',
    signals: ['Confidence minh họa giảm', 'Hai ý định có thể xảy ra', 'Thiếu mã tham chiếu'],
    triggers: [
      {
        trigger: 'Nhiều tín hiệu không chắc chắn',
        evidence: 'Hai ý định cạnh tranh và một trường dữ liệu bắt buộc đang thiếu.',
        stopReason: 'Tiếp tục có thể định tuyến sai quy trình; con người cần chọn cách làm rõ.',
      },
    ],
    timeline: [
      { actor: 'CUSTOMER', label: 'Yêu cầu mẫu được tiếp nhận', detail: 'Nội dung có thể là thay đổi lịch hoặc hủy một bước xử lý.' },
      { actor: 'AI', label: 'AI thử phân loại', detail: 'Confidence minh họa bắt đầu ở 92% rồi giảm khi phát hiện hai ý định.' },
      { actor: 'SYSTEM', label: 'Demo policy kích hoạt', detail: 'Nhiều uncertainty signals + thiếu dữ liệu bắt buộc.' },
      { actor: 'AI', label: 'AI PAUSED', detail: 'AI tạo tóm tắt và chuyển câu hỏi quyết định cho người phụ trách.' },
    ],
  },
  {
    id: 'policy-sensitive',
    caseId: 'DEMO-001-C',
    title: 'Ngoại lệ cần phê duyệt',
    status: 'HUMAN_REVIEW_REQUIRED',
    risk: 'HIGH',
    handlingState: 'AI PAUSED',
    initialConfidence: 90,
    currentConfidence: 86,
    summary: 'Người dùng yêu cầu một ngoại lệ mẫu nằm ngoài quyền tự xử lý được mô tả trong demo policy.',
    proposedAction: 'Giữ nguyên trạng thái và trình hai phương án cho người có thẩm quyền.',
    humanQuestion: 'Phê duyệt ngoại lệ, sửa phương án hay từ chối đề xuất?',
    signals: ['Hành động nhạy cảm theo chính sách', 'Sắc thái tiêu cực', 'Cần người có thẩm quyền'],
    triggers: [
      {
        trigger: 'Ngoại lệ yêu cầu human approval',
        evidence: 'Loại hành động nằm trong danh mục nhạy cảm của demo policy.',
        stopReason: 'Confidence cao không thay thế quyền phê duyệt; AI phải dừng trước hành động.',
      },
      {
        trigger: 'Tín hiệu tiêu cực',
        evidence: 'Kịch bản tổng hợp chứa ngôn ngữ không hài lòng.',
        stopReason: 'Người phụ trách cần cân nhắc bối cảnh và mức phản hồi phù hợp.',
      },
    ],
    timeline: [
      { actor: 'CUSTOMER', label: 'Ngoại lệ mẫu được yêu cầu', detail: 'Người dùng đề nghị thay đổi ngoài luồng thông thường.' },
      { actor: 'AI', label: 'AI nhận diện ý định', detail: 'Confidence minh họa vẫn cao, nhưng hành động thuộc nhóm cần phê duyệt.' },
      { actor: 'SYSTEM', label: 'Policy gate chặn hành động', detail: 'Policy-sensitive action luôn yêu cầu người có thẩm quyền trong demo.' },
      { actor: 'AI', label: 'AI PAUSED', detail: 'Không có hành động ngoài đời thực nào được thực thi.' },
    ],
  },
];

export const HUMAN_DECISIONS: Array<{ id: HumanDecision; label: string; description: string }> = [
  { id: 'TAKE_OVER', label: 'Tiếp quản case', description: 'Con người nhận quyền xử lý tiếp.' },
  { id: 'APPROVE_SUGGESTION', label: 'Duyệt đề xuất', description: 'Xác nhận phương án AI đã tóm tắt.' },
  { id: 'MODIFY_ACTION', label: 'Sửa phương án', description: 'Yêu cầu điều chỉnh trước khi xử lý.' },
  { id: 'REJECT_ACTION', label: 'Từ chối đề xuất', description: 'Không cho phép phương án được đề xuất.' },
];
