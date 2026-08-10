# VHM RADAR #008: Cân bằng lao động cố định và linh hoạt: Đường cong học tập thay đổi bài toán nhân sự kho hàng như thế nào?

> **LOCKED PUBLICATION METADATA**
> - **RADAR NUMBER:** #008
> - **SLUG:** `/radar/can-bang-lao-dong-linh-hoat-kho-hang`
> - **VERDICT:** `TEST IN CONTROLLED WORKFLOW`
> - **DESIGN PRINCIPLE:** Balance Permanent & Flex Labor under Learning Curve Constraints (*Cân bằng Nhân sự Cố định & Linh hoạt trong Giới hạn Đường cong Học tập*)
> - **EVIDENCE TIER:** Tier 1 / Primary Research (*Transportation Research Part E*, 2026)
> - **SOURCE RELEVANCE:** DIRECT
> - **STATUS:** AUDITED EDITORIAL DRAFT (NO PUBLIC ROUTE / UNPUBLISHED)

---

## 1. SIGNAL — EXECUTIVE SUMMARY

Trong quản trị kho vận và trung tâm phân phối (fulfillment & delivery stations), biến động sản lượng đơn hàng theo ngày hoặc theo mùa chiến dịch (promotional campaigns) tạo ra thách thức lớn về định biên nhân sự. Nếu duy trì một lực lượng lao động cố định (permanent/non-flex labor) đủ lớn để đáp ứng các mốc sản lượng đỉnh (peak demand), doanh nghiệp sẽ gánh chịu chi phí lãng phí giờ công nghiêm trọng trong các giai đoạn sản lượng thấp. Ngược lại, nếu duy trì định biên cố định thấp và phụ thuộc hoàn toàn vào lao động linh hoạt (flexible/gig labor) gọi bổ sung theo thời gian thực, doanh nghiệp đối mặt với rủi ro suy giảm năng suất và sụt giảm chỉ số cam kết dịch vụ (SLA).

`VHM RECOMMENDATION`  
Để xây dựng một chiến lược nhân sự kho hàng bền vững, các nhà quản trị vận hành cần chuyển đổi tư duy từ **quản lý định biên theo số lượng đầu người (Headcount-based Sizing)** sang **cấu hình năng lực sản xuất thực tế (Effective Productive Capacity Configuration)**. Yếu tố cốt lõi chi phối bài toán này chính là **Đường cong học tập (Learning Curve)** của lao động linh hoạt theo từng tác vụ cụ thể.

---

## 2. WHAT THE RESEARCH ACTUALLY STUDIED

`RESEARCH EVIDENCE`

Nghiên cứu nguyên bản được xuất bản trên tạp chí chuyên ngành hàng đầu về quản trị vận tải và logistics:

* **Tên bài báo:** *"Balancing flex and non-flex labor to reliably meet on-demand capacity"*
* **Tác giả:** Ramon Auad, Thomas Fillebeen, Roman Levkin, Arkajit Rakshit, Martin Savelsbergh
* **Tạp chí:** *Transportation Research Part E: Logistics and Transportation Review*
* **Tập / Số / Bài:** Volume 209, Article 104696 (Năm 2026)
* **DOI:** `10.1016/j.tre.2026.104696`
* **Đơn vị nghiên cứu / Dữ liệu:** Amazon Science & Georgia Institute of Technology

### Đối tượng & Phạm vi nghiên cứu chính xác:
1. **Lao động nội khu (Under-the-Roof Operational Labor):** Nghiên cứu tập trung vào nhân sự vận hành bên trong trung tâm phân phối và trạm phân loại (fulfillment centers & delivery stations) thực hiện các tác vụ như phân loại (sorting), lấy hàng (picking), đóng gói (staging), và chất tải (loading). Nghiên cứu **KHÔNG** mở rộng cho lực lượng tài xế giao hàng chặng cuối (last-mile delivery drivers).
2. **Phân loại hai nhóm lao động:**
   - **Lao động cố định (Non-flex / Regular associates):** Nhân sự làm việc toàn thời gian, có mức năng suất nền tảng cao và tính ổn định cao.
   - **Lao động linh hoạt (Flex associates):** Nhân sự làm việc theo ca đăng ký linh hoạt, có mức năng suất phụ thuộc vào số ca làm việc đã tích lũy (kinh nghiệm tác vụ).
3. **Mô hình hóa đường cong học tập:** Sử dụng dữ liệu nhật ký vận hành thực tế tại các trạm phân loại của Amazon để đo lường tốc độ gia tăng năng suất của nhân sự linh hoạt theo thời gian làm việc.
4. **Tối ưu hóa toán học:** Dựng mô hình lập trình toán học (mathematical programming optimization) để tìm tỷ lệ phối hợp tối ưu giữa nhân sự cố định và nhân sự linh hoạt dưới sự biến động ngẫu nhiên của sản lượng (stochastic daily workload).

---

## 3. WHY HEADCOUNT IS NOT CAPACITY: THE LEARNING CURVE HERO INSIGHT

`RESEARCH EVIDENCE` vs `VHM ANALYSIS`

### Sai lầm của giả định "1 Lao động Linh hoạt = 1 Lao động Cố định" (`VHM ANALYSIS`)
Trong thực tế điều hành, nhiều đơn vị vận hành thường mắc sai lầm khi giả định rằng: khi thiếu hụt năng lực xử lý cho 1.000 đơn hàng, họ chỉ cần gọi bổ sung một số lượng lao động linh hoạt đúng bằng số giờ công thiếu hụt tính theo định mức của nhân sự chính thức:

$$\text{Tổng Đầu người (Headcount)} \neq \text{Năng lực Sản xuất Thực tế (Effective Capacity)}$$

### Phát hiện về Đường cong học tập (`RESEARCH EVIDENCE`)
Auad và các cộng sự (2026) chỉ ra rằng nhân sự linh hoạt không đạt ngay năng suất tối đa ở các ca đầu tiên. Năng suất của họ tuân theo **đường cong học tập theo tác vụ (task-specific learning curve)**:
- **Giai đoạn đầu (Initial Shifts):** Nhân sự linh hoạt mất thời gian làm quen với quy trình nội khu, sơ đồ kho bãi và công cụ quét mã. Năng suất ca đầu có thể thấp hơn đáng kể so với nhân sự cố định.
- **Giai đoạn tích lũy (Shift Progression):** Năng suất gia tăng theo tỷ lệ học tập khi nhân sự tích lũy đủ số ca làm việc tại cùng một trạm/tác vụ.
- **Giai đoạn tiệm cận (Proficiency Convergence):** Khoảng cách năng suất giữa nhân sự linh hoạt và nhân sự cố định thu hẹp dần và tiệm cận mức ổn định.

Do đó, việc lập kế hoạch nhân sự nếu chỉ dựa vào **số lượng đầu người (headcount)** mà bỏ qua **đường cong học tập (learning curve)** sẽ dẫn đến tình trạng **thiếu hụt năng lực thực tế**, gây ùn tắc hàng hóa và trễ SLA trong các đợt cao điểm.

---

## 4. THE CENTRAL OPERATIONAL TENSION & MATHEMATICAL INTUITION

`VHM ANALYSIS`

### Đánh đổi vận hành cốt lõi (The Core Trade-off)
Bài toán phối hợp lực lượng lao động đặt ra sự đánh đổi giữa hai yếu tố:

$$\text{TÍNH LINH HOẠT VỀ NĂNG LỰC (Capacity Flexibility)} \quad \text{vs} \quad \text{NĂNG SUẤT VÀ KINH NGHIỆM (Productivity & Experience)}$$

- **Lực lượng cố định:** Năng suất cao, quen thuộc quy trình, nhưng chi phí cố định cao và thiếu tính linh hoạt khi sản lượng sụt giảm.
- **Lực lượng linh hoạt:** Mang lại giá trị quyền chọn (option value) để mở rộng hoặc thu hẹp năng lực theo biến động nhu cầu, nhưng đòi hỏi chi phí quản lý và bù đắp khoảng trống năng suất ban đầu.

### Biểu diễn khái niệm Năng lực Sản xuất Thực tế (`VHM ANALYSIS`)
VHM đề xuất mô hình hóa khái niệm Năng lực Sản xuất Thực tế ($C_{\text{effective}}$) của ca làm việc như sau:

$$C_{\text{effective}} = N_{\text{regular}} \times P_{\text{regular}} + \sum_{i \in \text{Flex}} P_{\text{flex}}(s_i)$$

Trong đó:
- $N_{\text{regular}}$: Số lượng nhân sự cố định trong ca.
- $P_{\text{regular}}$: Năng suất chuẩn của nhân sự cố định (đơn vị sản phẩm/giờ).
- $P_{\text{flex}}(s_i)$: Năng suất của nhân sự linh hoạt $i$, là một hàm tăng theo số ca tích lũy $s_i$ (learning curve function).

---

## 5. THE ~4% LABOR EFFICIENCY CLAIM AUDIT & SIMULATION BOUNDARY

`RESEARCH EVIDENCE`

> [!IMPORTANT]
> **RANH GIỚI NGHIÊN CỨU & KIỂM TOÁN CON SỐ ~4%**
> 
> - **Khái niệm chính xác:** Trong các kịch bản thực nghiệm mô phỏng tính toán (computational experiments), các tác giả ước tính **mức trần cải thiện hiệu quả sử dụng lao động (labor efficiency improvement upper bound) đạt khoảng ~4%** khi áp dụng mô hình phối hợp nhân sự tối ưu có tính đến đường cong học tập so với các phương pháp định biên cố định không linh hoạt.
> - **CẢNH BÁO KIỂM TOÁN EDITORIAL:** 
>   1. **HIỆU QUẢ LAO ĐỘNG $\neq$ TIẾT KIỆM CHI PHÍ TIỀN TỆ:** Con số ~4% đo lường sự tối ưu hóa số giờ công hiệu quả cần thiết để hoàn thành sản lượng, **KHÔNG** phải là phần trăm tiết kiệm trên tổng quỹ lương tiền mặt hay báo cáo P&L tài chính.
>   2. **RANH GIỚI MÔ HÌNH (Model Boundary):** Kết quả ~4% là **mức trần lý thuyết trong môi trường thực nghiệm tính toán** dựa trên dữ liệu nhật ký trạm phân loại Amazon, không phải là cam kết trung bình cố định cho mọi kho hàng thực địa.

---

## 6. OPERATIONS INTELLIGENCE DIFFERENTIATION: CONTROL VS EXECUTION VS CAPACITY

`VHM OPERATING FRAMEWORK`

Để đặt nghiên cứu Radar #008 vào tổng thể hệ sinh thái Trí tuệ Vận hành (Operations Intelligence), VHM phân định 3 cấp độ quyết định vận hành:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         VHM OPERATING FRAMEWORK                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. CONTROL HORIZON (Radar #006):                                            │
│    Dự báo & Nhận diện rủi ro tắc nghẽn / trễ đơn hàng (Predict Operational Risk)│
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. EXECUTION HORIZON (Radar #007):                                          │
│    Điều hành & Tái định tuyến hành động theo chuỗi thời gian thực           │
│    (Sequential Operational Actions under Feasibility Constraints)            │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. CAPACITY HORIZON (Radar #008):                                           │
│    Cấu hình & Phối hợp năng lực nguồn lực trước khi thực thi               │
│    (Configure Productive Resource Capacity before Execution)                │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **Radar #006 (CONTROL):** Trả lời câu hỏi *"Đơn hàng hay công đoạn nào đang có nguy cơ trễ SLA?"*
- **Radar #007 (EXECUTION):** Trả lời câu hỏi *"Hành động tiếp theo nên tái định tuyến hay điều chỉnh như thế nào?"*
- **Radar #008 (CAPACITY):** Trả lời câu hỏi *"Cần cấu hình tỷ lệ nhân sự cố định và linh hoạt ra sao để đảm bảo năng lực sản xuất thực tế trước khi ca làm việc bắt đầu?"*

*Lưu ý: Khung phân loại này là cấu trúc tổng hợp của Vận Hành Mới (VHM Framework) dùng cho quản trị hệ thống, không phải là định nghĩa do Auad et al. đề xuất.*

---

## 7. VHM OPERATING MODEL & WORKFORCE CAPACITY WORKFLOW

`VHM RECOMMENDATION`

VHM đề xuất khái niệm linh kiện giao diện tương tác `<RadarWorkforceCapacityWorkflow />` đại diện cho luồng quy trình cấu hình năng lực nhân sự thích ứng:

```
[1. Dự báo Sản lượng & Tín hiệu Nhu cầu]
                   │
                   ▼
[2. Tính toán Năng lực Sản xuất Cần thiết]
                   │
                   ▼
[3. Đánh giá Năng lực Khả dụng của Nhân sự Cố định]
                   │
                   ▼
[4. Xác định Lực lượng Lao động Linh hoạt Khả thi]
                   │
                   ▼
[5. Điều chỉnh Năng suất theo Đường cong Học tập (Shift Progression)]
                   │
                   ▼
[6. Ước tính Năng lực Sản xuất Thực tế (Effective Capacity)]
                   │
                   ▼
       [Kiểm tra Khoảng trống Năng lực?]
             /                   \
        (CÓ / THIẾU)          (KHÔNG / ĐỦ)
           /                       \
          ▼                         ▼
[7a. Gọi bổ sung & Phân bổ       [7b. Duy trì Định biên
    Lao động Linh hoạt]              Hiện tại]
          \                         /
           \                       /
            ▼                     ▼
[8. Đo lường Năng suất Thực tế trong Ca]
                   │
                   ▼
[9. Cập nhật Nhật ký Đường cong Học tập cho Chu kỳ Sau]
```

---

## 8. IMPLEMENTATION PLAYBOOK

`VHM RECOMMENDATION`

VHM đề xuất Khung triển khai có kiểm soát 5 giai đoạn cho các quản lý vận tải và kho bãi:

### PHASE 0 — Baseline & Data Readiness
- Đo lường chi tiết sản lượng hàng ngày, tổng giờ công sản xuất, năng suất ca theo tác vụ.
- Thống kê tỷ lệ sử dụng ca tăng cường (overtime) và ca khẩn cấp.

### PHASE 1 — Learning Curve Measurement
- Đo lường và xây dựng hàm đường cong học tập của lao động linh hoạt theo từng nhóm tác vụ (phân loại, đóng gói, chất tải).
- Phân nhóm lao động linh hoạt theo số ca tích lũy (cohort experience levels).

### PHASE 2 — Offline Capacity Simulation
- Chạy mô phỏng ngoại tuyến (offline simulation) so sánh giữa hai phương án: định biên cố định thuần túy vs phối hợp nhân sự có điều chỉnh đường cong học tập.

### PHASE 3 — Controlled Workforce Pilot
- Thử nghiệm trên một khu vực vận hành hoặc nhóm ca cụ thể trong khoảng thời gian xác định.
- Đánh giá khả năng đáp ứng năng lực và tỷ lệ biến động năng suất.

### PHASE 4 — Adaptive Capacity Planning
- Tích hợp hàm đường cong học tập đã được hiệu chỉnh vào quy trình lập kế hoạch ca làm việc hàng tuần.

---

## 9. METRICS FRAMEWORK

`RESEARCH EVIDENCE` vs `VHM RECOMMENDATION`

Để quản trị năng lực nhân sự hiệu quả, các chỉ số cần được phân loại rõ ràng theo nguồn gốc:

| Tên Chỉ số | Mô tả Quản trị | Phân loại Nguồn gốc |
|---|---|---|
| **Effective Productive Capacity** | Tổng năng lực xử lý thực tế tính theo giờ công đã điều chỉnh đường cong học tập. | VHM RECOMMENDED |
| **Task Productivity by Experience Cohort** | Năng suất trung bình (đơn vị/giờ) theo từng nhóm ca tích lũy của lao động linh hoạt. | SOURCE-ALIGNED (*Auad et al., 2026*) |
| **Capacity Gap / Surplus** | Chênh lệch giữa năng lực sản xuất thực tế và nhu cầu sản lượng thực tế. | SOURCE-ALIGNED (*Auad et al., 2026*) |
| **Flex Labor Utilization Rate** | Tỷ lệ sử dụng ca làm việc của lực lượng linh hoạt trong tổng quỹ giờ công. | VHM RECOMMENDED |
| **Learning Progression Rate** | Tốc độ gia tăng năng suất của lao động linh hoạt qua các ca làm việc. | SOURCE-ALIGNED (*Auad et al., 2026*) |
| **Emergency Staffing Dependency** | Tỷ lệ ca phải gọi lao động khẩn cấp do tính toán sai năng lực thực tế. | VHM RECOMMENDED |

---

## 10. KILL & WARNING CONDITIONS

`VHM RECOMMENDATION`

Các điều kiện cảnh báo rủi ro vận hành (parameterized warning conditions) cần được kích hoạt khi triển khai mô hình:

- **Cảnh báo Suy giảm Đường cong Học tập (Learning Curve Underperformance):** Kích hoạt khi năng suất thực tế của lao động linh hoạt thấp hơn ngưỡng dự báo sau một số ca làm việc nhất định.
- **Cảnh báo Bất ổn Nguồn Cung Linh hoạt (Flex Pool Instability):** Kích hoạt khi tỷ lệ rời bỏ (churn) của lao động linh hoạt quá cao, khiến hệ thống liên tục phải tiếp nhận lao động mới ở mức năng suất ban đầu.
- **Cảnh báo Năng lực Đào tạo / Hướng dẫn (Training Capacity Bottleneck):** Kích hoạt khi số lượng lao động linh hoạt mới vượt quá năng lực hướng dẫn của nhân sự cố định trong ca.
- **Cảnh báo Phức tạp Tác vụ (Task Complexity Mismatch):** Kích hoạt khi bố trí lao động linh hoạt chưa đủ kinh nghiệm vào các tác vụ có độ phức tạp cao hoặc yêu cầu chính xác tuyệt đối.

---

## 11. VIETNAM OPERATIONS FIT

`VHM ANALYSIS — GIẢ THUYẾT ỨNG DỤNG TIỀM NĂNG, KHÔNG PHẢI KẾT QUẢ THỬ NGHIỆM TRỰC TIẾP CỦA BÀI BÁO GỐC`

Bài toán cân bằng lao động cố định và linh hoạt có ý nghĩa ứng dụng cao đối với hạ tầng logistics và thương mại điện tử tại Việt Nam:

1. **Trung tâm Phân loại Giao hàng Nhanh (Parcel Sorting Hubs):** Mức độ biến động sản lượng lớn giữa ngày thường và các đợt sale giữa tháng/cuối tháng (Mega Sale Days). Việc ứng dụng mô hình giúp xác định chính xác số lượng lao động thời vụ cần huy động mà không làm nghẽn trạm phân loại.
2. **Kho Hàng Tổng & Fulfillment Thương mại Điện tử (E-commerce Fulfillment Centers):** Các tác vụ nhặt hàng (picking) và đóng gói (packing) có đường cong học tập rõ rệt. Quản lý kho có thể phân bổ lao động linh hoạt vào các tác vụ đơn giản và dành tác vụ phức tạp cho nhân sự chính thức.
3. **Trung tâm Phân phối Bán lẻ & Chuỗi Cung ứng (Retail Distribution Centers):** Đáp ứng nhu cầu hàng hóa theo mùa lễ Tết hoặc đợt khuyến mãi lớn của các chuỗi bán lẻ.

---

## 12. EDITORIAL HARDENING & CLAIM SUMMARY TABLE

| Hạng mục Kiểm toán | Trạng thái | Ghi chú Biên tập |
|---|---|---|
| **SOURCE INTEGRITY** | PASS | Xác minh chính xác Auad et al. (2026), *Transportation Research Part E*, Vol. 209, Art. 104696, DOI: `10.1016/j.tre.2026.104696`. |
| **LEARNING CURVE TERMINOLOGY** | PASS | Đường cong học tập được giải thích rõ là sự gia tăng năng suất theo ca làm việc tích lũy. |
| **~4% EFFICIENCY CLAIM** | PASS | Xác định rõ là **mức trần cải thiện hiệu quả sử dụng lao động trong thực nghiệm mô phỏng tính toán**, không phải tiết kiệm chi phí tài chính. |
| **FIELD VS MODEL BOUNDARY** | PASS | Phân định rạch ròi dữ liệu nhật ký Amazon (dùng để ước lượng đường cong học tập) và mô hình tối ưu hóa toán học (dùng cho kết quả tính toán). |
| **LABOR EFFICIENCY VS COST** | PASS | Tuyệt đối không dịch chuyển từ "hiệu quả lao động" sang "tiết kiệm chi phí quỹ lương". |
| **HEADCOUNT CLAIMS** | PASS | Khẳng định rõ Headcount không đồng nghĩa với Effective Capacity. |
| **VHM ATTRIBUTION** | PASS | Phân định rõ ràng giữa phát hiện nghiên cứu (RESEARCH EVIDENCE), phân tích của VHM (VHM ANALYSIS) và khuyến nghị vận hành (VHM RECOMMENDATION). |
