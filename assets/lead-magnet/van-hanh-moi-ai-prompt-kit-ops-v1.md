# AI PROMPT KIT CHO OPERATION MANAGER — V1

> **Vận Hành Mới** · *Operations · Data · AI*  
> **Website:** [https://vanhanhmoi.com](https://vanhanhmoi.com)  
> **Phiên bản:** V1 — Tháng 8/2026  

---

## BẢNG TRUY NGUYÊN & ĐỊNH VỊ THƯƠNG HIỆU

* **Sản phẩm:** AI Prompt Kit cho Operation Manager — V1
* **Đối tượng:** Operations Managers, Team Leads, Ops Coordinators, SME Business Owners, Logistics & Supply Chain Leaders.
* **Định vị:** *Hệ thống + AI ứng dụng thực tế cho người làm vận hành.*
* **Triết lý:** AI là trợ lý hỗ trợ cấu trúc, phân tích và trích xuất. Con người chịu trách nhiệm kiểm chứng dữ liệu và ra quyết định. (Trust > Hype).

---

## TỪ KHOÁ & HƯỚNG DẪN AN TOÀN DỮ LIỆU (DATA SAFETY)

> [!IMPORTANT]
> **AN TOÀN DỮ LIỆU KHI DÙNG AI**  
> Trước khi dán dữ liệu doanh nghiệp vào các mô hình AI công cộng (như ChatGPT, Claude), hãy luôn ẩn hoặc thay thế các thông tin nhạy cảm:
> - Số điện thoại, Email cá nhân, Tên khách hàng cụ thể
> - Mã số căn cước, Địa chỉ nhà riêng
> - Mật khẩu, API Keys, Credentials hệ thống nội bộ
> - Giá trị hợp đồng bảo mật hoặc số tài khoản ngân hàng  
> 
> *Quy tắc thực hành:* Thay tên thật bằng `[KHÁCH_HÀNG_A]`, `[KHO_X]`, `[NHÂN_SỰ_1]`.

---

## HƯỚNG DẪN SỬ DỤNG NHANH (QUICK START)

1. **Chọn Prompt:** Duyệt qua 8 Module bên dưới và chọn Prompt đúng với bài toán vận hành đang gặp phải.
2. **Sao chép Prompt:** Copy đoạn text trong ô `Prompt`.
3. **Chuẩn bị Input:** Nhập hoặc dán dữ liệu vận hành thực tế vào phần `[INPUT]` (đã làm sạch dữ liệu nhạy cảm).
4. **Chạy & Phân tích:** Nhập vào AI (ChatGPT / Claude / Gemini).
5. **Kiểm chứng (Human Check):** Đọc kỹ phần `Human Check` ở cuối mỗi Prompt. Xác nhận số liệu thực tế trước khi áp dụng hoặc gửi cho cấp trên.

---

## MỤC LỤC TỔNG QUAN

* **Module 1 — Daily Operations Control** (Prompt 01 – 04)
* **Module 2 — KPI & Anomaly Analysis** (Prompt 05 – 08)
* **Module 3 — Root Cause & Incident** (Prompt 09 – 12)
* **Module 4 — Reporting & Communication** (Prompt 13 – 16)
* **Module 5 — Action Planning & Follow-up** (Prompt 17 – 20)
* **Module 6 — SOP & Process Improvement** (Prompt 21 – 24)
* **Module 7 — Workforce / Capacity / Cost** (Prompt 25 – 28)
* **Module 8 — AI Assistant for Operations Manager** (Prompt 29 – 32)

---

## MODULE 1 — DAILY OPERATIONS CONTROL

### Prompt 01 — Morning Control-Tower Brief

* **Mục tiêu:** Biến dữ liệu đầu ngày thành một bản brief ưu tiên hành động.
* **Khi dùng:** Đầu ca/đầu ngày, trước daily meeting.
* **Input:** Backlog theo tuổi đơn; SLA; năng lực xử lý; incident/exceptions; mục tiêu ngày.

```text
Bạn là Operations Control-Tower Analyst.

Hãy phân tích dữ liệu vận hành tôi cung cấp và tạo morning brief.

Chỉ dùng dữ liệu có trong input, không tự bịa benchmark.
Nếu thiếu dữ liệu, ghi rõ UNKNOWN.

Hãy:
1. Tóm tắt 5 KPI quan trọng nhất.
2. Xác định tối đa 5 rủi ro cần xử lý hôm nay.
3. Xếp hạng theo Impact × Urgency × SLA Risk.
4. Nêu bằng chứng cụ thể cho từng rủi ro.
5. Đề xuất hành động, owner phù hợp và thời điểm kiểm tra lại.
6. Tách rõ Facts / Assumptions / Recommendations.

Input:
[ DÁN DỮ LIỆU ]
```

* **Output mong đợi:** Executive Summary · KPI Snapshot · Risk Queue · Actions · Unknowns.
* **Human Check:** Xác nhận SLA rule, capacity và owner trước khi giao việc.

---

### Prompt 02 — Backlog Prioritization

* **Mục tiêu:** Xếp thứ tự backlog cần xử lý trước.
* **Khi dùng:** Backlog lớn, không đủ nguồn lực xử lý tất cả cùng lúc.
* **Input:** Danh sách đơn/case; age; SLA; giá trị/khách hàng; exception; capacity.

```text
Đóng vai Operations Planner.

Hãy phân loại backlog thành:
- P0 xử lý ngay
- P1 hôm nay
- P2 theo dõi
- Hold hợp lệ

Ưu tiên dựa trên:
- SLA risk
- tuổi tồn
- mức độ ảnh hưởng
- khả năng xử lý
- dependency

Không coi tuổi tồn cao là nguyên nhân duy nhất.

Với mỗi nhóm:
- nêu tiêu chí
- số lượng/khối lượng
- 3 nguyên nhân nổi bật
- action cụ thể

Những case có exception hợp lệ phải tách riêng.
Nếu dữ liệu không đủ để phân loại, đánh dấu REVIEW.

Input:
[ DÁN DỮ LIỆU ]
```

* **Output mong đợi:** Priority Queue · Reason · Action · Owner suggestion · Recheck time.
* **Human Check:** Kiểm tra exception/khách hẹn trước khi escalation.

---

### Prompt 03 — SLA Risk Triage

* **Mục tiêu:** Phát hiện đơn/công việc có nguy cơ trễ trước khi quá SLA.
* **Khi dùng:** 2–4 giờ trước cut-off hoặc SLA checkpoint.
* **Input:** Created time; current node/status; SLA; transit/processing time còn lại; exception.

```text
Hãy tạo SLA Risk Triage theo logic evidence-first.

Tính/ước lượng thời gian còn lại đến SLA nếu dữ liệu cho phép.

Chia thành:
- Critical
- High
- Watch
- Safe

Với mỗi Critical/High:
- giải thích vì sao có rủi ro
- bước tiếp theo bắt buộc
- dependency
- thời điểm phải hoàn thành để còn khả năng cứu SLA

Không giả định thời gian xử lý nếu input không có.
Khi đó ghi rõ assumption.

Input:
[ DATA + SLA RULES ]
```

* **Output mong đợi:** Risk table · Time-to-SLA · Required next step · Escalation threshold.
* **Human Check:** Xác nhận cut-off thực tế và thời gian transit trước khi điều xe/nhân lực.

---

### Prompt 04 — End-of-Day Operations Recap

* **Mục tiêu:** Tổng kết ngày và tạo danh sách carry-over rõ ràng.
* **Khi dùng:** Cuối ngày/cuối ca.
* **Input:** Plan đầu ngày; actual; backlog cuối ngày; incidents; actions.

```text
So sánh kế hoạch đầu ngày với kết quả thực tế.

Trình bày:
1. Mục tiêu đạt/chưa đạt.
2. Thay đổi backlog và SLA risk.
3. 3 việc đã giúp cải thiện.
4. 3 vấn đề chưa giải quyết.
5. Carry-over sang ngày mai với owner và deadline.
6. Các giả thuyết cần kiểm chứng thay vì kết luận vội.

Không dùng ngôn ngữ đổ lỗi cá nhân.

Input:
[ PLAN + ACTUAL + INCIDENTS ]
```

* **Output mong đợi:** Plan vs Actual · Wins · Misses · Carry-over · Tomorrow watchlist.
* **Human Check:** Xác nhận số actual đã chốt trước khi gửi quản lý.

---

## MODULE 2 — KPI & ANOMALY ANALYSIS

### Prompt 05 — KPI Anomaly Scan

* **Mục tiêu:** Tìm bất thường trong bảng KPI mà không chỉ nhìn % tăng/giảm.
* **Khi dùng:** Daily/weekly dashboard review.
* **Input:** KPI theo thời gian; target; breakdown theo kho/tuyến/team.

```text
Phân tích bảng KPI như một Operations Analyst.

Tìm bất thường theo 4 lớp:
1. Level khác target.
2. Biến động bất thường theo thời gian.
3. Chênh lệch giữa đơn vị.
4. Mối quan hệ KPI có thể mâu thuẫn.

Chỉ gọi là anomaly khi có bằng chứng từ dữ liệu.
Không suy diễn nguyên nhân thành fact.

Với mỗi anomaly, ghi:
- Evidence
- Possible explanations
- Data needed next
- Operational impact
- Suggested check

Input:
[ KPI DATA ]
```

* **Output mong đợi:** Top anomalies · Evidence · Hypotheses · Next data check.
* **Human Check:** Kiểm tra thay đổi định nghĩa KPI/source trước khi kết luận performance giảm.

---

### Prompt 06 — Trend Comparison

* **Mục tiêu:** So sánh kỳ này với kỳ trước theo hướng ra quyết định.
* **Khi dùng:** WoW, MoM, N-1, before/after.
* **Input:** 2+ kỳ dữ liệu và cùng định nghĩa KPI.

```text
So sánh [KỲ A] và [KỲ B].

Tách thay đổi thành:
- Volume effect
- Mix effect
- Productivity effect
- Exception / one-off

nếu dữ liệu hỗ trợ.

Nêu mức thay đổi tuyệt đối và tương đối.
Không dùng % khi mẫu quá nhỏ mà không cảnh báo.

Xác định 3 thay đổi đáng chú ý nhất và điều gì cần kiểm chứng tiếp.

Input:
[ DÁN DỮ LIỆU ]
```

* **Output mong đợi:** Comparison table · Drivers · One-offs · Decision implications.
* **Human Check:** Xác nhận hai kỳ có cùng scope/cách tính.

---

### Prompt 07 — Performance Gap Diagnosis

* **Mục tiêu:** Hiểu vì sao một kho/team/tuyến dưới target.
* **Khi dùng:** KPI miss lặp lại.
* **Input:** Target, actual, volume, staffing, process, exception, historical baseline.

```text
Phân tích performance gap theo cây nguyên nhân:

Demand/Volume
→ Capacity
→ Process
→ Assignment/Execution
→ Exception
→ Data Quality

Với mỗi nhánh, nêu bằng chứng ủng hộ/phản bác từ input.
Không chọn root cause nếu chỉ có correlation.

Cuối cùng đề xuất 3 test nhỏ để xác minh nguyên nhân với effort thấp nhất.

Input:
[ DÁN DỮ LIỆU ]
```

* **Output mong đợi:** Gap size · Cause tree · Evidence strength · Validation tests.
* **Human Check:** Không dùng output để đánh giá cá nhân nếu chưa kiểm chứng dữ liệu nguồn.

---

### Prompt 08 — Dashboard Narrative for Management

* **Mục tiêu:** Biến dashboard nhiều số thành câu chuyện điều hành ngắn.
* **Khi dùng:** Gửi Lead/Manager/Director.
* **Input:** KPI dashboard + context.

```text
Viết management narrative tối đa 200 từ từ dashboard này.

Cấu trúc bắt buộc:
What changed
→ Why it matters
→ What we know
→ What we do not know
→ Actions today

Chỉ nhắc KPI có ý nghĩa quyết định, không liệt kê toàn bộ số.

Mọi causal claim phải được gắn nhãn:
confirmed
hoặc
hypothesis

Input:
[ DASHBOARD + CONTEXT ]
```

* **Output mong đợi:** 1 executive narrative + 3 bullets action.
* **Human Check:** Kiểm tra causal wording trước khi gửi senior management.

---

## MODULE 3 — ROOT CAUSE & INCIDENT

### Prompt 09 — Evidence-First RCA

* **Mục tiêu:** Phân tích nguyên nhân gốc mà không nhảy từ triệu chứng sang kết luận.
* **Khi dùng:** Incident lặp lại, SLA fail, cost spike, backlog spike.
* **Input:** Timeline; KPI; logs; giải trình; process step; changes.

```text
Đóng vai RCA Facilitator.

Tách dữ liệu thành:
- Observed facts
- Missing evidence
- Hypotheses

Xây cause tree theo:
People
Process
System
Capacity
Input
External

Với mỗi hypothesis:
- chấm Evidence Strength: Strong / Medium / Weak
- nêu dữ liệu cần thêm để xác minh

Chỉ gọi là Root Cause khi có chuỗi bằng chứng giải thích được incident.

Sau đó đề xuất:
- containment action
- permanent fix
riêng biệt.

Input:
[ EVIDENCE ]
```

* **Output mong đợi:** Timeline · Facts · Cause tree · Evidence matrix · Containment · Permanent fix.
* **Human Check:** Không dùng hypothesis như kết luận chính thức khi chưa xác minh.

---

### Prompt 10 — 5-Why Facilitator

* **Mục tiêu:** Dùng 5-Why có kiểm soát, tránh ép đủ 5 tầng.
* **Khi dùng:** Vấn đề tương đối rõ nhưng cần đào sâu process/system.
* **Input:** Problem statement + evidence.

```text
Hãy dẫn dắt 5-Why cho vấn đề:
[ PROBLEM ]

Mỗi câu Why phải dựa trên câu trả lời có bằng chứng.

Nếu không có evidence:
dừng và yêu cầu dữ liệu thay vì tự suy đoán.

Có thể dừng trước 5 hoặc đi quá 5 nếu cần.

Tách:
- Direct cause
- Contributing factors
- Systemic cause

Cuối cùng kiểm tra root cause bằng câu hỏi:
"Nếu loại bỏ nguyên nhân này, xác suất vấn đề tái diễn có giảm đáng kể không?"

Input:
[ DÁN DỮ LIỆU ]
```

* **Output mong đợi:** Why chain · Evidence gaps · Candidate root cause · Validation question.
* **Human Check:** Ưu tiên process/system fix, tránh quy lỗi cá nhân nếu chưa có bằng chứng.

---

### Prompt 11 — Incident Evidence Synthesis

* **Mục tiêu:** Gom nhiều nguồn chat/log/report thành timeline đáng tin.
* **Khi dùng:** Incident có nhiều người giải trình khác nhau.
* **Input:** Messages, timestamps, logs, screenshots transcription, status changes.

```text
Tổng hợp incident evidence thành timeline theo thời gian.

Không chỉnh sửa ý nghĩa nguồn.

Mỗi sự kiện ghi:
- Source
- Timestamp
- Fact
- Confidence

Nếu hai nguồn mâu thuẫn:
hiển thị cả hai dưới Conflict
và không tự chọn bên đúng.

Sau timeline, liệt kê 5 evidence gaps quan trọng nhất để điều tra tiếp.

Input:
[ RAW EVIDENCE ]
```

* **Output mong đợi:** Chronology · Conflicts · Confirmed facts · Gaps · Next questions.
* **Human Check:** Đối chiếu timestamps và source gốc trước khi dùng làm biên bản.

---

### Prompt 12 — Corrective & Preventive Action Plan

* **Mục tiêu:** Chuyển RCA thành CAPA có owner và tiêu chí đóng.
* **Khi dùng:** Sau khi root cause đã đủ confidence.
* **Input:** Confirmed root cause; constraints; available owners; deadlines.

```text
Từ root cause đã xác nhận, tạo CAPA gồm:
- Immediate containment
- Corrective action
- Preventive action
- Monitoring control

Với mỗi action phải có:
- Owner role
- Due date
- Effort
- Expected impact
- Verification metric
- Closure evidence

Không đề xuất action chung chung kiểu "nhắc nhở" nếu không giải quyết root cause.

Input:
[ CONFIRMED RCA + CONSTRAINTS ]
```

* **Output mong đợi:** CAPA table · Verification plan · Closure criteria.
* **Human Check:** Owner thật và deadline phải được người quản lý xác nhận.

---

## MODULE 4 — REPORTING & COMMUNICATION

### Prompt 13 — Daily Operations Report

* **Mục tiêu:** Tạo báo cáo ngày ngắn, có action.
* **Khi dùng:** Daily management update.
* **Input:** KPI today; yesterday/target; backlog; incidents; actions.

```text
Viết báo cáo vận hành ngày theo format:

KPI Snapshot
→ So với N-1/Target
→ Top risks
→ Actions đang chạy
→ Need support

Dùng số tuyệt đối + % khi phù hợp.
Mỗi risk phải kèm evidence.

Không chèn lý do nếu chỉ là giả thuyết;
ghi rõ hypothesis.

Giới hạn trong 1 màn hình đọc trên điện thoại.

Input:
[ DÁN DỮ LIỆU ]
```

* **Output mong đợi:** Concise daily report.
* **Human Check:** Xác nhận số liệu cutoff trước khi gửi.

---

### Prompt 14 — Weekly Business Review

* **Mục tiêu:** Chuẩn bị WBR tập trung vào xu hướng và quyết định.
* **Khi dùng:** Weekly review.
* **Input:** KPI 7 ngày; targets; prior actions; incidents; projects.

```text
Tạo Weekly Operations Review gồm:
1. Executive scorecard.
2. Wins có bằng chứng.
3. Misses + driver.
4. Incident themes.
5. Action từ tuần trước: Done / At risk / Overdue.
6. Top 3 priorities tuần tới.
7. Decisions needed from management.

Không kể lại từng ngày.
Ưu tiên trend và root driver.

Input:
[ WEEKLY DATA ]
```

* **Output mong đợi:** WBR agenda-ready summary.
* **Human Check:** Phân biệt outcome đạt được và activity đã làm.

---

### Prompt 15 — Executive Summary

* **Mục tiêu:** Rút một báo cáo dài thành thông tin cấp quản lý cần quyết định.
* **Khi dùng:** Báo cáo dự án/incident/performance dài.
* **Input:** Source report.

```text
Tóm tắt tài liệu này cho senior manager theo cấu trúc 5 phần:
- Situation
- Impact
- Evidence
- Options
- Recommended decision

Tối đa 300 từ.
Không loại bỏ uncertainty quan trọng.

Nếu recommendation phụ thuộc assumption,
nêu assumption đó ngay cạnh recommendation.

Input:
[ REPORT ]
```

* **Output mong đợi:** Decision-oriented executive summary.
* **Human Check:** Kiểm tra các con số chính với source gốc.

---

### Prompt 16 — Escalation Message with Evidence

* **Mục tiêu:** Escalation rõ, không cảm tính và có request cụ thể.
* **Khi dùng:** Dependency bị block, SLA risk cao, action overdue.
* **Input:** Issue; timeline; impact; attempts; owner; needed support.

```text
Viết escalation message chuyên nghiệp, ngắn, không đổ lỗi.

Bắt buộc có:
- Issue
- Evidence
- Business/Operational impact
- What has been tried
- What is blocked
- Decision/support needed
- Required by when

Nếu chưa đủ bằng chứng về nguyên nhân,
không nêu nguyên nhân như fact.

Input:
[ DETAILS ]
```

* **Output mong đợi:** Message phù hợp Slack/Telegram/Email.
* **Human Check:** Đảm bảo người được tag thực sự có quyền giải quyết hoặc quyết định.

---

## MODULE 5 — ACTION PLANNING & FOLLOW-UP

### Prompt 17 — Action Plan Generator

* **Mục tiêu:** Biến vấn đề thành action plan có thể theo dõi.
* **Khi dùng:** Sau review/incident/project decision.
* **Input:** Problem; desired outcome; constraints; owners; timeline.

```text
Tạo action plan theo nguyên tắc mỗi action phải thay đổi một trạng thái quan sát được.

Với mỗi action ghi:
- Objective
- Task
- Owner role
- Start
- Due
- Dependency
- Success metric
- Evidence of completion
- Risk

Tách:
- Quick win
- Core fix
- Monitoring

Tránh action mơ hồ như "theo dõi thêm" hoặc "cải thiện".

Input:
[ PROBLEM + CONSTRAINTS ]
```

* **Output mong đợi:** Action tracker ready table.
* **Human Check:** Owner và due date phải được xác nhận ngoài AI.

---

### Prompt 18 — Owner & Deadline Assignment

* **Mục tiêu:** Phân owner hợp lý thay vì dồn mọi việc cho một người.
* **Khi dùng:** Action list có nhiều dependency.
* **Input:** Actions; team roles; authority; capacity; deadline.

```text
Gợi ý owner role cho từng action dựa trên:
- quyền quyết định
- khả năng thực thi
- dependency

Không dùng tên người nếu input không cung cấp.

Với mỗi action, phân loại:
- Accountable
- Responsible
- Consulted
- Informed
và nêu vì sao.

Nếu không có role nào đủ quyền, đánh dấu:
MANAGEMENT DECISION NEEDED

Input:
[ ACTIONS + TEAM ROLES ]
```

* **Output mong đợi:** Lightweight RACI + deadlines.
* **Human Check:** Kiểm tra workload thực tế trước khi assign.

---

### Prompt 19 — Follow-up Checklist

* **Mục tiêu:** Tạo checkpoint để action không mất dấu.
* **Khi dùng:** Sau khi đã giao việc.
* **Input:** Action tracker + review cadence.

```text
Từ action tracker, tạo lịch follow-up tối giản.

Với mỗi checkpoint, nêu:
- When
- What evidence to check
- Expected state
- Trigger to escalate
- Who needs notification

Chỉ tạo checkpoint có giá trị quyết định;
không tạo follow-up thừa.

Input:
[ ACTION TRACKER ]
```

* **Output mong đợi:** Follow-up schedule · evidence checklist · escalation trigger.
* **Human Check:** Đồng bộ với lịch vận hành thật, tránh nhắc ngoài giờ không cần thiết.

---

### Prompt 20 — Overdue Action Escalation

* **Mục tiêu:** Xử lý action quá hạn dựa trên impact, không chỉ vì trễ ngày.
* **Khi dùng:** Weekly/daily action review.
* **Input:** Overdue actions; progress; impact; blocker; owner response.

```text
Phân loại action overdue thành:
- Critical escalation
- Recoverable
- Replan
- Close / No longer needed

Dựa trên:
- impact
- dependency
- current progress
không chỉ số ngày trễ.

Với mỗi action:
- đề xuất next move
- câu hỏi cần hỏi owner

Nếu deadline ban đầu không còn hợp lý,
nêu lý do rebaseline thay vì giả vờ giữ deadline cũ.

Input:
[ OVERDUE ACTIONS ]
```

* **Output mong đợi:** Overdue triage · recovery plan · escalation candidates.
* **Human Check:** Xác nhận scope có thay đổi trước khi đánh giá owner.

---

## MODULE 6 — SOP & PROCESS IMPROVEMENT

### Prompt 21 — Turn Tribal Knowledge into SOP

* **Mục tiêu:** Chuyển cách làm trong đầu nhân viên thành SOP rõ.
* **Khi dùng:** Process phụ thuộc người có kinh nghiệm.
* **Input:** Transcript mô tả cách làm; screenshots; forms; rules.

```text
Chuyển mô tả quy trình thành SOP có cấu trúc:
- Purpose
- Scope
- Trigger
- Inputs
- Roles
- Preconditions
- Steps
- Decision points
- Exceptions
- Output
- SLA
- Evidence
- Escalation

Không tự thêm rule mà input không có.
Chỗ thiếu thông tin phải ghi: [TO CONFIRM]

Sau SOP, liệt kê 5 câu hỏi cần hỏi operator để hoàn thiện.

Input:
[ RAW PROCESS DESCRIPTION ]
```

* **Output mong đợi:** Draft SOP + missing-info questions.
* **Human Check:** Operator thực tế phải walkthrough lại SOP trước khi publish.

---

### Prompt 22 — SOP Gap Audit

* **Mục tiêu:** Tìm chỗ SOP khiến người mới dễ làm sai hoặc không thể đo.
* **Khi dùng:** SOP cũ, nhiều lỗi/exceptions.
* **Input:** SOP hiện tại + incident examples.

```text
Audit SOP theo 8 tiêu chí:
- Trigger clarity
- Input quality
- Ownership
- Step ambiguity
- Decision rule
- Exception handling
- Evidence/record
- Measurement

Với mỗi gap, nêu:
- Risk
- Example failure mode
- Suggested rewrite
- Priority

Không đánh giá style;
tập trung khả năng thực thi và kiểm soát.

Input:
[ SOP + INCIDENTS ]
```

* **Output mong đợi:** SOP gap matrix · prioritized fixes.
* **Human Check:** Mọi thay đổi policy/SLA cần owner phê duyệt.

---

### Prompt 23 — Waste & Bottleneck Scan

* **Mục tiêu:** Phát hiện bước gây chờ, rework, handoff thừa.
* **Khi dùng:** Process chậm hoặc chi phí cao.
* **Input:** Process steps; time per step; queue; handoff; error/rework.

```text
Phân tích quy trình theo:
- Flow Time
- Waiting
- Handoff
- Rework
- Batch
- Decision delay
- Manual duplication

Xác định bottleneck dựa trên data nếu có.
Nếu chỉ có mô tả định tính, ghi confidence.

Đề xuất tối đa 5 cải tiến theo:
Impact / Effort / Risk

và nêu metric dùng để xác nhận cải tiến có hiệu quả.

Input:
[ PROCESS DATA ]
```

* **Output mong đợi:** Bottleneck map · waste list · improvement experiments.
* **Human Check:** Không loại bỏ control step chỉ vì thấy chậm nếu nó có vai trò compliance/risk.

---

### Prompt 24 — AI-Ready Workflow Redesign

* **Mục tiêu:** Xác định chỗ AI/automation thực sự nên tham gia.
* **Khi dùng:** Muốn ứng dụng AI vào process hiện hữu.
* **Input:** Current workflow; inputs/outputs; decisions; systems; failure modes.

```text
Thiết kế lại workflow theo 4 lớp:
- Human-only
- Rule automation
- AI-assisted
- Human approval

Với từng bước, chọn lớp phù hợp và giải thích dựa trên:
- tính lặp lại
- dữ liệu sẵn có
- mức độ phán đoán
- rủi ro sai

Không đề xuất AI tự quyết cho bước high-impact nếu không có approval/control.

Với bước AI-assisted, định nghĩa:
- Input
- Prompt/logic
- Output schema
- Confidence/validation
- Failure handling

Input:
[ WORKFLOW ]
```

* **Output mong đợi:** Future-state workflow · automation candidates · human checkpoints.
* **Human Check:** Security, PII và quyền truy cập hệ thống phải được review trước triển khai.

---

## MODULE 7 — WORKFORCE / CAPACITY / COST

### Prompt 25 — Manpower Sizing with Assumptions

* **Mục tiêu:** Ước lượng manpower minh bạch, không giả vờ có độ chính xác khi input thiếu.
* **Khi dùng:** Plan ca/kho/tuyến; dự báo tăng volume.
* **Input:** Volume; productivity; shift hours; utilization; absenteeism; service window.

```text
Ước lượng manpower cần thiết và tách rõ:
- Facts
- Assumptions
- Calculation
- Recommendation

Không tự chọn productivity benchmark nếu input không có.

Hãy tạo scenario:
- Low
- Base
- High

Nêu:
- công thức dùng
- capacity buffer
- sensitivity: biến nào làm manpower thay đổi mạnh nhất

Input:
[ VOLUME + PRODUCTIVITY + SHIFT RULES ]
```

* **Output mong đợi:** Scenario table · calculation logic · assumptions · risks.
* **Human Check:** Kiểm tra luật lao động, ca kíp, break và điều kiện hiện trường trước khi chốt.

---

### Prompt 26 — Capacity Bottleneck Analysis

* **Mục tiêu:** Xác định công đoạn giới hạn throughput.
* **Khi dùng:** Volume tăng nhưng output không tăng tương ứng.
* **Input:** Capacity từng step; queue; cycle time; downtime; utilization.

```text
Lập capacity map theo từng công đoạn.

Tính effective capacity nếu dữ liệu cho phép và chỉ ra constraint hiện tại.

Phân biệt:
- theoretical capacity
- effective capacity
- actual throughput

Với bottleneck, đề xuất 3 cách:
1. tăng capacity
2. giảm demand/variation
3. chuyển tải

Nêu trade-off và metric cần theo dõi sau thay đổi.

Input:
[ PROCESS CAPACITY DATA ]
```

* **Output mong đợi:** Capacity table · bottleneck · options · expected constraint shift.
* **Human Check:** Xác nhận đơn vị đo và cùng time window giữa các công đoạn.

---

### Prompt 27 — Cost Driver Analysis

* **Mục tiêu:** Hiểu chi phí tăng vì volume, mix hay hiệu suất.
* **Khi dùng:** Cost/order, cost/kg, thuê xe, OT, outsourcing tăng.
* **Input:** Cost breakdown; volume; mix; productivity; fixed/variable assumptions.

```text
Phân tích cost change theo driver:
- Volume
- Mix
- Rate / Price
- Productivity
- Utilization
- One-off

Tách chi phí fixed/variable chỉ khi có cơ sở.
Không gán tiết kiệm cho một action nếu chưa có baseline.

Xác định top 3 cost drivers và đề xuất data cần thu thêm để ra quyết định.

Input:
[ COST + VOLUME DATA ]
```

* **Output mong đợi:** Cost bridge · top drivers · controllable vs non-controllable · next actions.
* **Human Check:** Đối chiếu cost control total/kế toán trước khi dùng báo cáo tài chính.

---

### Prompt 28 — Scenario Comparison

* **Mục tiêu:** So sánh nhiều phương án vận hành trên cùng tiêu chí.
* **Khi dùng:** Thuê xe vs tự vận hành; 1 vs 2 ca; mở kho; đổi SLA.
* **Input:** Options; cost; capacity; SLA; risk; constraints.

```text
So sánh các phương án [A/B/C] theo cùng scorecard:
- Cost
- Capacity
- SLA
- Operational complexity
- Scalability
- Risk
- Reversibility

Phân biệt dữ liệu thật và assumption.
Không cộng điểm thành một "đáp án khách quan" nếu trọng số chưa được Owner chốt.

Thay vào đó:
- trình bày trade-off
- recommend theo từng ưu tiên chiến lược

Input:
[ SCENARIO DATA ]
```

* **Output mong đợi:** Comparison matrix · sensitivity · recommendation by priority.
* **Human Check:** Owner phải xác nhận trọng số chiến lược trước quyết định đầu tư.

---

## MODULE 8 — AI ASSISTANT FOR OPERATIONS MANAGER

### Prompt 29 — Meeting Prep Copilot

* **Mục tiêu:** Chuẩn bị họp vận hành trong vài phút từ dữ liệu thô.
* **Khi dùng:** Daily/weekly/project review.
* **Input:** Latest KPI; open actions; incidents; decisions pending.

```text
Chuẩn bị meeting brief gồm:
- What changed since last meeting
- Open risks
- Actions requiring follow-up
- Decisions needed
- Questions to ask

Ưu tiên vấn đề có impact và decision value cao.
Không đưa topic chỉ để "update" nếu không cần thảo luận/quyết định.

Input:
[ DATA + PRIOR MINUTES ]
```

* **Output mong đợi:** 1-page meeting brief + proposed agenda.
* **Human Check:** Kiểm tra attendee/decision rights trước khi đưa decision item vào agenda.

---

### Prompt 30 — Decision Memo

* **Mục tiêu:** Chuẩn hóa một quyết định vận hành quan trọng.
* **Khi dùng:** Cần xin duyệt hoặc ghi lại rationale.
* **Input:** Decision; context; options; evidence; constraints.

```text
Viết Decision Memo theo format:
- Decision to make
- Context
- Evidence
- Options considered
- Trade-offs
- Recommendation
- Risks
- Reversibility
- Next checkpoint

Tách assumption khỏi fact.
Nếu evidence chưa đủ để recommend, nói rõ: DEFER / NEED MORE DATA
và chỉ định dữ liệu còn thiếu.

Input:
[ DETAILS ]
```

* **Output mong đợi:** Decision-ready memo.
* **Human Check:** Quyết định cuối cùng phải được người có thẩm quyền xác nhận.

---

### Prompt 31 — Challenge My Plan / Red Team

* **Mục tiêu:** Tìm lỗ hổng trước khi triển khai plan.
* **Khi dùng:** Trước rollout, mở rộng, thay process, đầu tư.
* **Input:** Plan; assumptions; target; constraints.

```text
Đóng vai independent Operations Red Team.

Không viết lại kế hoạch trước.

Hãy tìm:
- assumptions yếu
- missing dependency
- capacity risk
- incentive mismatch
- operational edge cases
- measurement gaps
- rollback problem

Với mỗi challenge:
- chấm Severity
- nêu Evidence Needed

Sau đó đề xuất pre-mortem:
5 lý do khả dĩ khiến plan thất bại trong 30/90 ngày.

Input:
[ PLAN ]
```

* **Output mong đợi:** Challenge list · pre-mortem · mitigation · go/no-go questions.
* **Human Check:** Phân biệt constructive challenge với việc trì hoãn không cần thiết.

---

### Prompt 32 — Raw Evidence → Decision-Ready Brief

* **Mục tiêu:** Biến dữ liệu/chat/ghi chú lộn xộn thành brief ra quyết định.
* **Khi dùng:** Thông tin nằm rải rác ở Sheets, chat, email, notes.
* **Input:** Raw evidence đã loại bỏ dữ liệu nhạy cảm không cần thiết.

```text
Tổng hợp evidence thành brief với 6 phần:
- Confirmed facts
- Key metrics
- What changed
- Risks
- Unknowns
- Decision/Action needed

Mỗi kết luận phải truy ngược được về evidence trong input.
Không bịa missing values.

Nếu có PII hoặc dữ liệu nhạy cảm,
nhắc người dùng mask/remove trước khi tiếp tục xử lý.

Input:
[ RAW EVIDENCE ]
```

* **Output mong đợi:** Decision-ready brief · source/evidence map · unknowns.
* **Human Check:** Kiểm tra nguồn gốc dữ liệu trước khi chia sẻ ra ngoài nhóm có quyền truy cập.

---

## TỪ PROMPT → AI-ASSISTED WORKFLOW

Hệ thống hóa vận hành bằng AI là một hành trình tốn tích lũy chứ không phải phép màu tức thì. 

**Chu trình chuyển đổi thực chiến:**
`Raw Data` → `Structured Input` → `AI Analysis` → `Human Review` → `Decision / Action` → `Evidence` → `Follow-up`

### Khám phá thêm tài nguyên vận hành:
Website chính thức: [https://vanhanhmoi.com](https://vanhanhmoi.com)  
Tài nguyên & Công cụ: [https://vanhanhmoi.com/cong-cu](https://vanhanhmoi.com/cong-cu)  
*Vận Hành Mới — Hệ thống + AI ứng dụng thực tế cho người làm vận hành.*
