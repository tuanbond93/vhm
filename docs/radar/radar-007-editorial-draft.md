# VHM RADAR #007: Định tuyến động chặng giao vận: Khi nào AI nên tự động tái định tuyến dưới biến động giao thông?

> **LOCKED PUBLICATION METADATA**
> - **RADAR NUMBER:** #007
> - **SLUG:** `/radar/ai-dinh-tuyen-dong-chang-giao-van`
> - **VERDICT:** `TEST IN CONTROLLED WORKFLOW`
> - **DESIGN PRINCIPLE:** Predict → Decide → Re-route under Feasibility Constraints (Dự báo → Ra quyết định → Tái định tuyến trong Giới hạn Khả thi Vận hành)
> - **EVIDENCE TIER:** Tier 1 / Primary Research (*Transportation Research Part E*, 2022)
> - **SOURCE RELEVANCE:** DIRECT
> - **STATUS:** AUDITED EDITORIAL DRAFT (NO PUBLIC ROUTE / UNPUBLISHED)

---

## 1. SIGNAL — EXECUTIVE SUMMARY

Một xe giao hàng thương mại rời kho bãi (depot) theo tuyến đường đã được lập sẵn. Tuy nhiên, chỉ sau một thời gian ngắn vận hành trên đường, thực tế bắt đầu chệch khỏi kế hoạch:
1. Ún tắc giao thông bất ngờ xuất hiện tại các nút giao trọng điểm, làm vận tốc di chuyển thực tế giảm mạnh.
2. Tiêu thụ năng lượng của xe tăng đột biến do xe phải tăng/giảm tốc liên tục và chở tải trọng lớn.
3. Các yêu cầu giao hàng bổ sung (dynamic customer requests) phát sinh trong khu vực cần được gom chuyến.
4. Dung lượng pin/năng lượng còn lại của xe tụt nhanh hơn dự kiến, đe dọa khả năng hoàn thành các điểm giao cuối cùng.

Một mô hình điều hành phổ biến trong quản lý vận tải hiện nay là lập tuyến trước chuyến (pre-trip planning) và xử lý ngoại lệ khi điều kiện thực tế thay đổi. Khi môi trường vận hành biến động liên tục, bản kế hoạch định tuyến tĩnh (static route plan) nhanh chóng trở nên lỗi thời, khiến bộ phận điều hành rơi vào thế bị động.

`VHM RECOMMENDATION`  
Để giải quyết sự đứt gãy giữa kế hoạch và thực tế, trí tuệ vận hành (Operations Intelligence) cần chuyển dịch từ **dự báo hàng chờ thụ động** sang **ra quyết định chuỗi tự động dưới biến động (Sequential Decision-Making under Uncertainty)**. Tuy nhiên, việc trao quyền tái định tuyến tự động cho thuật toán đòi hỏi một khung giới hạn khả thi vận hành (operational feasibility constraint gate) được cấu hình chặt chẽ nhằm đảm bảo xe không bao giờ lâm vào tình trạng cạn pin hoặc vi phạm các mốc an toàn.

---

## 2. WHAT THE RESEARCH ACTUALLY STUDIED

`RESEARCH EVIDENCE`

Nghiên cứu nguyên bản được xuất bản trên tạp chí chuyên ngành hàng đầu về khoa học vận tải và logistics:

* **Tên bài báo:** *"Dynamic stochastic electric vehicle routing with safe reinforcement learning"*
* **Tác giả:** Rafael Basso, Balázs Kulcsár, Ivan Sanchez-Diaz, Xiaobo Qu
* **Tạp chí:** *Transportation Research Part E: Logistics and Transportation Review*
* **Tập / Số / Trang:** Volume 157, Article 102496 (Tháng 1/2022)
* **DOI:** `10.1016/j.tre.2021.102496`

### Bài toán nghiên cứu chính xác (DS-EVRP):
Các tác giả đặt ra bài toán **Định tuyến xe điện thương mại động và bất định (Dynamic Stochastic Electric Vehicle Routing Problem - DS-EVRP)**. Nghiên cứu xử lý đồng thời hai nguồn bất định vận hành lớn trong logistics đô thị:
1. **Bất định về nhu cầu (Stochastic Requests):** Các điểm yêu cầu dịch vụ/giao hàng mới phát sinh ngẫu nhiên theo thời gian thực khi xe đang di chuyển.
2. **Bất định về tiêu thụ năng lượng (Stochastic Energy Consumption):** Mức tiêu hao năng lượng của xe biến động liên tục do tốc độ giao thông, kẹt xe và tải trọng thay đổi.

### Phương pháp nghiên cứu & Ranh giới thực nghiệm:
- **Thuật toán cốt lõi:** Học tăng cường sâu an toàn (Safe Deep Reinforcement Learning - Safe DRL).
- **Ranh giới thực nghiệm:** Bài báo sử dụng **mô phỏng động stochastic (dynamic stochastic simulation / computational experiments)** dựa trên mô hình động lực học xe thương mại thực tế và thông số mạng lưới giao thông đô thị (dữ liệu giao thông Luxembourg).
- **Ranh giới tuyên bố:** Đây **KHÔNG** phải là kết quả thử nghiệm thực địa dài hạn trên đội xe thương mại ngoài đời thực, mà là kết quả kiểm chứng thuật toán trên mô hình mô phỏng máy tính có độ trung thực cao.

---

## 3. WHY STATIC ROUTING BREAKS

`RESEARCH EVIDENCE` vs `VHM ANALYSIS`

### Vì sao bản đồ tuyến tĩnh sụp đổ? (`VHM ANALYSIS`)
Một mô hình điều hành phổ biến trong quản lý vận tải là lập tuyến trước chuyến (pre-trip planning) và xử lý ngoại lệ khi điều kiện thực tế thay đổi:
$$\text{Lập kế hoạch (Plan)} \longrightarrow \text{Thực thi (Execute)}$$

Mô hình này giả định môi trường vận hành là cố định: thời gian di chuyển dự kiến (ETA) không đổi, mức tiêu hao nhiên liệu/pin ổn định, và danh sách đơn hàng đóng băng từ đầu ngày. Khi vận hành thực tế xảy ra biến động, khoảng cách giữa bản kế hoạch và năng lực thực thi ngày càng nới rộng.

### Bài toán quyết định tuần hoàn dưới bất định (`RESEARCH EVIDENCE`)
Basso và các cộng sự (2022) chỉ ra rằng định tuyến động thực chất là bài toán **ra quyết định chuỗi tuần hoàn (Sequential Decision-Making)**:
$$\text{Trạng thái hiện tại} \longrightarrow \text{Sự kiện biến động} \longrightarrow \text{Ra quyết định mới} \longrightarrow \text{Cập nhật trạng thái} \longrightarrow \dots$$

Tại mỗi thời điểm quyết định (decision epoch), hệ thống không thể chỉ nhìn vào lợi ích ngắn hạn của điểm giao tiếp theo, mà phải dự báo ảnh hưởng của quyết định đó đến khả năng hoàn thành toàn bộ lộ trình và mức an toàn năng lượng trong tương lai.

---

## 4. HOW SAFE DRL WORKS

`RESEARCH EVIDENCE` vs `VHM ANALYSIS`

### Khái niệm "Safe" (An toàn) trong nghiên cứu nguyên bản (`RESEARCH EVIDENCE`)
Trong bài báo của Basso et al. (2022), từ **"Safe" (An toàn)** mang ý nghĩa kỹ thuật vận hành chính xác:
- **"Safe" = Duy trì giới hạn khả thi về năng lượng (Energy Feasibility Bounds):** Đảm bảo dung lượng pin của xe thương mại luôn ở trên ngưỡng an toàn tối thiểu, ngăn ngừa rủi ro xe hết pin giữa đường (battery depletion risk) hoặc không đến kịp trạm sạc.
- **"Safe" KHÔNG NGHĨA LÀ:** An toàn giao thông đường bộ, an toàn tài xế, hay cơ chế phê duyệt thủ công của con người (Human-in-the-loop).

### Luồng xử lý thuật toán ở góc độ quản trị vận hành (`VHM ANALYSIS`)
Thay vì sa lầy vào các công thức toán học Safe DRL, các nhà quản lý vận tải có thể hiểu cơ chế hoạt động theo chuỗi quyết định tuần hoàn:

```
[1. Trạng thái Đội xe & Vị trí hiện tại]
                  │
                  ▼
[2. Thông tin Biến động mới (Kẹt xe / Nhu cầu phát sinh / Tiêu hao pin)]
                  │
                  ▼
[3. AI Policy Đánh giá Phương án Tuyến & Điểm sạc tiếp theo]
                  │
                  ▼
[4. CỔNG GIỚI HẠN KHẢ THI VẬN HÀNH (Operational Feasibility Constraint Gate)]
                  │
        ┌─────────┴─────────┐
    [HỢP LỆ]            [VI PHẠM AN TOÀN PIN]
        │                   │
        ▼                   ▼
[5. Tái định tuyến        [Loại bỏ phương án,
   & Chọn trạm sạc]        chọn điểm sạc dự phòng]
        │                   │
        └─────────┬─────────┘
                  │
                  ▼
[6. Thực thi di chuyển trên đường]
                  │
                  ▼
[7. Quan sát trạng thái mới → Lặp lại chuỗi quyết định]
```

---

## 5. WHAT THE RESEARCH ACTUALLY STUDIED & FOUND

`RESEARCH EVIDENCE ONLY`

Mọi số liệu công bố dưới đây đều được trích dẫn chính xác từ các bảng thực nghiệm mô phỏng của Basso et al. (2022):

### 1. Năng lực tiết kiệm năng lượng (`TRE 2022, Section 5`)
- Mô hình Safe DRL đạt mức tiết kiệm năng lượng trung bình **~4.8%** so với phương pháp tái định tuyến trực tuyến xác định (deterministic online re-optimization baseline).
- Trong các kịch bản bất định cao về giao thông và tải trọng, khả năng điều hướng dự báo của Safe DRL giúp xe duy trì tốc độ tiêu thụ năng lượng tối ưu, giảm các pha tăng tốc/phanh gấp không cần thiết.

### 2. Triệt tiêu rủi ro cạn pin (`TRE 2022, Section 5.2`)
- Phương pháp tái định tuyến thông thường không tính đến bất định năng lượng tương lai thường đưa ra các quyết định "tham lam" (greedy decisions), dẫn đến tỷ lệ xe không hoàn thành tuyến đường do hết pin tăng cao khi kẹt xe xảy ra.
- Thuật toán Safe DRL giúp duy trì dung lượng pin luôn ở trên ngưỡng an toàn khả thi và triệt tiêu nguy cơ hết pin giữa đường trong các kịch bản thực nghiệm mô phỏng được kiểm chứng.

### 3. Khả năng tiếp nhận yêu cầu phát sinh động (`TRE 2022, Section 5.3`)
- Nhờ khả năng dự báo điểm sạc và tuyến đường trước (anticipatory routing), Safe DRL cho phép chèn các điểm giao hàng mới phát sinh vào lộ trình mà không làm phá vỡ ranh giới an toàn năng lượng của các điểm giao sẵn có.

---

## 6. PREDICTION IS NOT DECISION

`VHM ANALYSIS`

Đây là điểm ngoặt tư duy chiến lược quan trọng nhất trong lộ trình phát triển Trí tuệ Vận hành (Operations Intelligence) của Vận Hành Mới:

> [!IMPORTANT]
> **DỰ BÁO (PREDICTION) KHÁC VỚI RA QUYẾT ĐỊNH (DECISION)**
> - **Bài toán Dự báo (Radar #006):** Xác định **NƠI NÀO / ĐƠN HÀNG NÀO** đang có rủi ro trễ SLA trong kho (*Where is intervention needed?*) → Output là chỉ số rủi ro (Risk Score) và Hàng chờ ngoại lệ (Exception Queue) để con người can thiệp.
> - **Bài toán Quyết định Tuần hoàn (Radar #007):** Đánh giá **HÀNH ĐỘNG NÀO NÊN ĐƯỢC CHỌN TIẾP THEO** khi điều kiện vận hành thay đổi (*What action should be selected next?*) → Output là lộ trình điều hướng và quyết định sạc tối ưu trực tiếp.

### Ba cấp độ Trí tuệ Vận hành (`VHM OPERATING FRAMEWORK`):

```
┌────────────────────────────────────────────────────────────────────────┐
│ CẤP ĐỘ 1: MÔ TẢ (DESCRIBE) — "Cái gì đã xảy ra?"                      │
│ Công cụ: Dashboard TMS/WMS truyền thống, báo cáo GPS vận tốc xe.       │
├────────────────────────────────────────────────────────────────────────┤
│ CẤP ĐỘ 2: DỰ BÁO (PREDICT) — "Cái gì có khả năng sẽ xảy ra?"           │
│ Công cụ: Radar #006 — Machine Learning dự báo nguy cơ trễ hạn SLA.    │
├────────────────────────────────────────────────────────────────────────┤
│ CẤP ĐỘ 3: RA QUYẾT ĐỊNH (DECIDE) — "Hệ thống nên làm gì tiếp theo?"   │
│ Công cụ: Radar #007 — Safe DRL định tuyến động dưới giới hạn khả thi. │
└────────────────────────────────────────────────────────────────────────┘
```
*Ghi chú attribution: Khung phân loại này là tổng hợp của Vận Hành Mới cho quản trị vận hành và không phải là hệ thống phân loại do bài báo gốc đề xuất.*

---

## 7. AUTONOMY REQUIRES CONSTRAINTS

`VHM ANALYSIS`

Trao quyền tự động cho thuật toán tái định tuyến **KHÔNG CÓ NGHĨA LÀ** cho phép AI tự do vận hành vượt ngoài tầm kiểm soát. Ngược lại:

> **Quy luật VHM về Tự động hóa Quyết định:**  
> *Thuật toán càng có nhiều thẩm quyền tự động ra quyết định, hệ thống càng phải được mã hóa các cổng giới hạn khả thi (operational feasibility constraint gates) chặt chẽ.*

Trong bài toán định tuyến vận chuyển, các cổng giới hạn khả thi vận hành bắt buộc phải mã hóa bao gồm:
1. **Giới hạn An toàn Năng lượng (Energy Safety Buffer):** Xe bắt buộc phải duy trì dung lượng pin dự phòng trên ngưỡng khả thi được cấu hình trước khi đến trạm sạc hoặc về depot.
2. **Cửa sổ Thời gian Cam kết (Time Window Hard Constraints):** Không tái định tuyến nếu vi phạm khung giờ giao cam kết của các khách hàng ưu tiên.
3. **Giới hạn Tải trọng & Thể tích Xe (Capacity Bounds):** Không chèn thêm đơn hàng ngẫu nhiên nếu vượt quá tải trọng cho phép của phương tiện.
4. **Giới hạn Khả thi của Trạm sạc (Charging Infrastructure Availability):** Không điều hướng xe đến trạm sạc nếu chưa xác nhận trạng thái trụ sạc sẵn sàng.

---

## 8. VHM OPERATING MODEL

`VHM RECOMMENDATION`

Để đưa nguyên lý định tuyến động có giới hạn an toàn vào vận hành thực tế, Vận Hành Mới đề xuất Khung Quản trị Vận hành Đội xe Vòng kín (`<RadarDynamicRoutingWorkflow />`):

```
               [1. Operational State: Xe đang di chuyển trên tuyến]
                                      │
                                      ▼
               [2. Event Sensing: Kẹt xe / Nhu cầu mới / Pin giảm]
                                      │
                                      ▼
               [3. State Estimation: Cập nhật vị trí & Năng lượng]
                                      │
                                      ▼
               [4. AI Policy Decision: Đề xuất tuyến & Điểm sạc mới]
                                      │
                                      ▼
           ┌─────────────────────────────────────────────────────┐
           │ 5. OPERATIONAL FEASIBILITY GATE (Cổng Kiểm tra)    │
           │    - Pin dự phòng ≥ Ngữong cấu hình an toàn?        │
           │    - Không trễ khung giờ cam kết?                   │
           │    - Trạm sạc sẵn sàng?                             │
           └──────────────────────────┬──────────────────────────┘
                                      │
                   ┌──────────────────┴──────────────────┐
               [ĐẠT CHUẨN]                          [VI PHẠM]
                   │                                     │
                   ▼                                     ▼
     [6. Cập nhật Tuyến & Lịch sạc]        [7. Giữ tuyến cũ / Điều hướng]
                   │                         đến Trạm sạc gần nhất]
                   └──────────────────┬──────────────────┘
                                      │
                                      ▼
               [8. Execute → Observe Outcome → Update State ↺]
```

*Lưu ý: Mô hình trên đại diện cho luồng điều khiển vòng kín (closed-loop sequential control), khác biệt hoàn toàn với luồng xử lý hàng chờ ngoại lệ (exception queue) của Radar #006.*

---

## 9. VHM VERDICT & DESIGN PRINCIPLE

`VHM RECOMMENDATION`

* **VERDICT:** `TEST IN CONTROLLED WORKFLOW`  
  *(Thử nghiệm trong quy trình kiểm soát)*
* **DESIGN PRINCIPLE:** Predict → Decide → Re-route under Feasibility Constraints  
  *(Dự báo → Ra quyết định → Tái định tuyến trong Giới hạn Khả thi Vận hành)*

### Định hướng chiến lược:
Doanh nghiệp vận tải không nên áp dụng thuật toán tái định tuyến tự động trên toàn bộ đội xe ngay lập tức. Cần triển khai thử nghiệm trên các luồng vận chuyển phụ thuộc năng lượng cao (như đội xe điện chặng cuối) hoặc các tuyến đường đô thị có mật độ biến động giao thông lớn, dưới sự giám sát của cổng kiểm soát khả thi vận hành.

---

## 10. VIETNAM OPERATIONS FIT

`VHM ANALYSIS — GIẢ THUYẾT ỨNG DỤNG TIỀM NĂNG, KHÔNG PHẢI KẾT QUẢ THỬ NGHIỆM TRỰC TIẾP CỦA BÀI BÁO GỐC`

### Các phân khúc vận tải phù hợp tại Việt Nam:
1. **Giao hàng chặng cuối đô thị (Urban Parcel Delivery):** Mật độ biến động giao thông lớn tại các đô thị đông đúc khiến ETA của bản đồ tuyến tĩnh thường xuyên bị phá vỡ. Việc tái định tuyến động giúp các đơn vị 3PL giảm thiểu tình trạng xe dính kẹt xe dây chuyền.
2. **Đội xe thương mại điện hóa (Electric Commercial Fleets):** Các doanh nghiệp chuyển đổi sang xe máy điện và xe tải điện cần giải quyết bài toán quản trị an toàn năng lượng và điểm sạc để giải tỏa mối lo ngại cạn pin giữa ca làm việc.
3. **Phân phối bán lẻ & Vận chuyển B2B theo yêu cầu (On-Demand & B2B Delivery):** Mô hình giao hàng siêu tốc đòi hỏi khả năng tiếp nhận đơn ngẫu nhiên trên lộ trình hiện tại mà không ảnh hưởng đến các cam kết đã có.

---

## 11. IMPLEMENTATION PLAYBOOK

`VHM RECOMMENDATION`

Lộ trình 5 bước triển khai ứng dụng định tuyến động cho doanh nghiệp logistics:

```
[PHASE 0: Baseline Performance Measurement]
Đo lường chỉ số vận hành cơ sở (ETA accuracy, mức tiêu hao năng lượng, tỷ lệ trễ hạn tuyến tĩnh hiện tại).
                  │
                  ▼
[PHASE 1: Offline Simulation & Replay]
Chạy mô phỏng lại (replay) dữ liệu lịch sử di chuyển và biến động giao thông để kiểm chứng thuật toán.
                  │
                  ▼
[PHASE 2: Shadow Decisioning (Chế độ Bóng bóng)]
Thuật toán đưa ra đề xuất tái định tuyến thời gian thực trên hệ thống, bộ phận điều hành đối chiếu nhưng chưa gửi đến tài xế.
                  │
                  ▼
[PHASE 3: Controlled Dynamic Routing (Triển khai Thử nghiệm Kiểm soát)]
Kích hoạt tự động tái định tuyến trên một nhóm xe điện/tuyến đường giới hạn, áp dụng Cổng kiểm tra Feasibility Gate cứng.
                  │
                  ▼
[PHASE 4: Expanded Decision Authority (Mở rộng Thẩm quyền Tự động)]
Từng bước mở rộng quy mô tự động hóa tái định tuyến khi chỉ số an toàn năng lượng và độ ổn định tuyến đạt chuẩn.
```

---

## 12. METRICS FRAMEWORK

| Tên chỉ số | Phân loại nguồn | Tham chiếu nghiên cứu gốc (TRE 2022) | Quản trị Pilot thực địa (`VHM RECOMMENDATION`) |
|---|---|---|---|
| **Mức tiết kiệm năng lượng (Energy Efficiency Gain)** | `SOURCE-ALIGNED` | Đạt trung bình ~4.8% trong thực nghiệm mô phỏng. | Xác lập mục tiêu đối chứng với baseline thực tế của doanh nghiệp. |
| **Tỷ lệ vi phạm an toàn pin (Battery Depletion Rate)** | `SOURCE-ALIGNED` | Triệt tiêu rủi ro cạn pin trong thực nghiệm. | Ngưỡng mục tiêu: 0% vi phạm ngưỡng pin an toàn cấu hình. |
| **Tỷ lệ nhận đơn phát sinh (Dynamic Request Acceptance Rate)** | `SOURCE-ALIGNED` | Tăng khả năng nhận đơn ngẫu nhiên nhờ anticipatory routing. | Đánh giá tỷ lệ chèn đơn thành công không vi phạm khung giờ cam kết. |
| **Tần suất đổi tuyến (Route Changes per Vehicle)** | `VHM RECOMMENDED` | N/A | Giới hạn số lần đổi tuyến / ca để tránh dao động tuyến (route oscillation). |
| **Độ chính xác ETA chặng cuối (Last-mile ETA Accuracy)** | `VHM RECOMMENDED` | N/A | Đo lường tỷ lệ hoàn thành đơn đúng khung giờ cam kết. |

---

## 13. KILL / WARNING CONDITIONS

`VHM RECOMMENDATION`

Hệ thống phải lập tức ngắt quyền tự động tái định tuyến và quay về tuyến cố định nếu vi phạm các điều kiện sau:

1. **Route Oscillation (Dao động Tuyến quá mức):** Tần suất phát lệnh tái định tuyến vượt quá ngưỡng ổn định vận hành được cấu hình do dữ liệu giao thông chập chờn.
2. **Data Latency Spike (Độ trễ Dữ liệu cao):** Độ trễ cập nhật telemetry vượt quá giới hạn an toàn ra quyết định, khiến AI ra quyết định dựa trên dữ liệu quá hạn.
3. **Battery Safety Warning (Cảnh báo Pin khẩn cấp):** Độ lệch dung lượng pin thực tế vượt quá ranh giới an toàn cho phép so với dự báo của mô hình AI.
4. **Charging Station Outage (Sự cố Trạm sạc):** Trạm sạc dự kiến trong lộ trình bị mất kết nối hoặc không có trụ sạc trống.

---

## 14. PRIMARY SOURCE & METADATA

* **Citation:** Basso, R., Kulcsár, B., Sanchez-Diaz, I., & Qu, X. (2022). Dynamic stochastic electric vehicle routing with safe reinforcement learning. *Transportation Research Part E: Logistics and Transportation Review*, 157, 102496.
* **DOI:** `10.1016/j.tre.2021.102496`
* **Evidence Tier:** Tier 1 / Primary Research
* **Evidence Type:** Real Urban Traffic Physics Parameters + Stochastic VRP Modeling + Safe Deep Reinforcement Learning Policy Evaluation
* **Simulation Boundary:** Kiểm chứng qua mô phỏng động máy tính trên mạng lưới giao thông đô thị; chưa phải thử nghiệm triển khai thực địa thương mại.
