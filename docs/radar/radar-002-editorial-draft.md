# RADAR #002 EDITORIAL DRAFT (R1 REFINED)
**Internal Reference:** docs/radar/radar-002-editorial-draft.md
**Public Identifier:** RADAR #002
**Status:** DRAFT PREPARED FOR OWNER FINAL EDITORIAL REVIEW (UNPUBLISHED)
**Date:** 2026-08-10

---

## SEO & Editorial Metadata

- **Final Recommended Title:** Dự báo nhu cầu: Khi nào nên tin mô hình, khi nào cần con người can thiệp?
- **Alternative Titles:**
  1. *Dự báo nhu cầu tồn kho: Khi nào nên tin mô hình, khi nào cần con người can thiệp?*
  2. *Mô hình dự báo & Bài học quản trị con người can thiệp (Judgmental Override)*
- **Final Proposed Slug:** `du-bao-nhu-cau-human-override`
- **Proposed Meta Title:** Dự Báo Nhu Cầu & Quản Trị Can Thiệp Con Người | VHM Radar #002
- **Proposed Meta Description:** Phân tích nghiên cứu thực nghiệm Fildes et al. (2009) trên 60.000 dự báo và nguyên lý quản trị can thiệp (Judgmental Override) dành cho Operations Manager.
- **Article Schema Type:** `Article` / `ScholarlyArticle Citation`
- **Verdict:** `ADOPT DESIGN PRINCIPLE`
- **Confidence:** `High`

---

# FULL ARTICLE DRAFT: RADAR #002

## 1. SIGNAL — Executive Summary
> **VHM RECOMMENDATION**

Trong quản trị chuỗi cung ứng và kho vận, dự báo nhu cầu (Demand Forecasting) là một phần cốt lõi ảnh hưởng trực tiếp đến kế hoạch tồn kho và dòng tiền. Hầu hết các doanh nghiệp hiện nay đều sử dụng mô hình máy tính để tạo số liệu dự báo cơ sở (Baseline Forecast), đồng thời cho phép các chuyên viên kế hoạch can thiệp điều chỉnh (Judgmental Override) trước khi chốt số liệu.

Tuy nhiên, câu hỏi lớn đặt ra cho các nhà quản lý vận hành: **Khi nào việc con người can thiệp giúp cải thiện độ chính xác, và khi nào sự can thiệp đó làm dự báo tồi đi?**

Dựa trên nghiên cứu thực nghiệm quy mô lớn của Fildes et al. (2009) trên hơn 60.000 dữ liệu dự báo, việc con người can thiệp không phải lúc nào cũng mang lại kết quả tốt. Các lượt điều chỉnh quy mô nhỏ thường làm suy giảm độ chính xác, trong khi các lượt điều chỉnh quy mô lớn có xu hướng cải thiện độ chính xác trung bình khi dựa trên thông tin ngữ cảnh thực tế. Vận Hành Mới khuyến nghị nguyên lý thiết kế **ADOPT DESIGN PRINCIPLE**: *Dự báo ưu tiên mô hình kết hợp quản trị can thiệp có điều kiện (Model-First Forecasting with Governed Human Override)*.

---

## 2. WHAT THE RESEARCH ACTUALLY STUDIED
> **RESEARCH EVIDENCE**

- **Công trình nghiên cứu:** *"Effective forecasting and judgmental adjustments: an empirical evaluation and strategies for improvement in supply-chain planning"*
- **Tác giả:** Robert Fildes, Paul Goodwin, Michael Lawrence, Konstantinos Nikolopoulos
- **Tạp chí công bố:** *International Journal of Forecasting* (Elsevier), Tập 25, Số 1, Trang 3–23 (Năm 2009).
- **Mã nhận diện:** DOI: `10.1016/j.ijforecast.2008.11.010`

Nghiên cứu thu thập và phân tích dữ liệu thực nghiệm trực tiếp từ **4 doanh nghiệp chuỗi cung ứng**, kiểm chứng **hơn 60.000 số liệu dự báo và kết quả nhu cầu thực tế phát sinh**. 

Nghiên cứu tập trung đo lường:
1. Số liệu dự báo cơ sở được tạo tự động bằng phần mềm máy tính (Computerized baseline forecasts).
2. Các đợt can thiệp điều chỉnh thủ công sau đó của các chuyên viên kế hoạch nhu cầu (Demand Planners).
3. So sánh độ chính xác của dự báo trước và sau khi con người can thiệp so với nhu cầu thực tế xảy ra.

---

## 3. WHAT THE RESEARCH FOUND
> **RESEARCH EVIDENCE**

Bài báo của Fildes et al. (2009) ghi nhận các kết quả thực nghiệm quan trọng sau:

1. **Con người can thiệp với tần suất rất cao:** Trong dữ liệu nghiên cứu, đa số các dự báo cơ sở từ máy tính đều bị chuyên viên kế hoạch chỉnh sửa lại thủ công.
2. **Các điều chỉnh quy mô nhỏ thường làm giảm độ chính xác:** Những đợt can thiệp điều chỉnh với tỷ lệ phần trăm nhỏ (Small adjustments) có xu hướng làm tăng sai số dự báo trung bình so với số liệu gốc của máy tính.
3. **Các điều chỉnh quy mô tương đối lớn mang lại cải thiện trung bình tốt hơn:** Các lượt điều chỉnh với quy mô thay đổi lớn (Relatively larger adjustments) có xu hướng tạo ra sự cải thiện độ chính xác trung bình cao hơn.
4. **Định kiến lạc quan (Optimism Bias):** Các chuyên viên có xu hướng điều chỉnh tăng số liệu dự báo nhiều hơn là điều chỉnh giảm, và các đợt điều chỉnh tăng thường có độ chính xác kém hơn so với các đợt điều chỉnh giảm.

---

## 4. WHEN HUMAN OVERRIDES HELP
> **RESEARCH EVIDENCE & VHM ANALYSIS**

Dựa trên dữ liệu thực nghiệm, sự can thiệp của con người thể hiện hiệu quả rõ rệt nhất khi:

- **Điều chỉnh có quy mô tương đối lớn dựa trên bối cảnh:** Khi nhân viên vận hành nắm được thông tin sự kiện hoặc bối cảnh ngoài mô hình làm thay đổi đáng kể nhu cầu (*Research Evidence*).
- **Điều chỉnh giảm khi có căn cứ:** Các đợt điều chỉnh giảm nhu cầu trong nghiên cứu ghi nhận mức độ cải thiện độ chính xác trung bình tốt hơn các đợt điều chỉnh tăng (*Research Evidence*).
- **Có thông tin bối cảnh định tính:** Khi con người sở hữu thông tin mà phần mềm/mô hình chưa được nạp (ví dụ: thông tin sự cố đối tác hoặc chương trình khuyến mại đặc biệt) (*VHM Analysis*).

---

## 5. WHEN HUMAN OVERRIDES HURT
> **RESEARCH EVIDENCE & VHM ANALYSIS**

Việc can thiệp thủ công gây tác động tiêu cực đến độ chính xác khi:

- **Sa vào bẫy điều chỉnh vi mô (Small Adjustments):** Việc liên tục sửa nhẹ con số dự báo lên/xuống vài phần trăm do cảm giác không an tâm làm tăng sai số chung (*Research Evidence*).
- **Ảnh hưởng bởi định kiến cá nhân (Bias):** Tâm lý lạc quan thái quá dẫn đến việc chỉnh tăng dự báo thường xuyên nhưng không đạt kết quả thực tế (*Research Evidence*).
- **Can thiệp ngẫu nhiên không ghi nhận lý do:** Điều chỉnh số liệu mà không lưu vết lý do bối cảnh làm cho doanh nghiệp không thể đánh giá lại hiệu quả can thiệp (*VHM Analysis*).

---

## 6. WHY THIS MATTERS FOR MODERN OPERATIONS
> **VHM ANALYSIS**

*(Lưu ý: Đây là phân tích điều hành của VHM ứng dụng nguyên lý nghiên cứu vào môi trường vận hành hiện đại, không phải kết quả trực tiếp từ bài báo năm 2009).*

Trong môi trường vận hành hiện nay khi các doanh nghiệp triển khai thuật toán Machine Learning (ML) hoặc AI để dự báo nhu cầu:

- **Mô hình hiện đại vẫn cần bối cảnh:** Thuật toán AI dù hiện đại đến đâu vẫn không thể tự biết các thông tin bối cảnh định tính tức thời nếu dữ liệu đó chưa được nạp vào hệ thống.
- **Quản trị hành vi can thiệp là chìa khóa:** Doanh nghiệp có thể trang bị phần mềm AI đắt tiền, nhưng nếu nhân viên vận hành vẫn giữ thói quen can thiệp cảm tính vi mô, hiệu quả của mô hình AI sẽ bị triệt tiêu bởi sai số con người tạo ra.

---

## 7. VHM OPERATING MODEL
> **VHM RECOMMENDATION**

Vận Hành Mới đề xuất khung workflow quản trị luồng dự báo nhu cầu (Governed Forecast Workflow):

```
[Demand Data] 
     ↓
[Baseline Forecast (Model / System)]
     ↓
[Exception Detection (Cảnh báo lệch ngưỡng)]
     ↓
[Human Review (Xem xét chuyên môn)]
     ↓
[Override / No Override] ─── (Nếu Override) ──→ [Reason Code Logging (Ghi mã lý do)]
     ↓                                                     ↓
[Actual Demand (Nhu cầu thực tế)] ────────────────────────┘
     ↓
[Forecast Error Review & Evaluation]
     ↓
[Learning Loop (Cải tiến chính sách)]
```

---

## 8. VHM VERDICT
> **VHM RECOMMENDATION**

### VERDICT: `ADOPT DESIGN PRINCIPLE`

- **Tên nguyên lý:** Dự báo ưu tiên mô hình + Quản trị can thiệp có điều kiện (Model-First Forecasting with Governed Human Override).
- **Nội dung:** Vận Hành Mới khuyến nghị doanh nghiệp coi số liệu dự báo từ mô hình là số liệu cơ sở mặc định. Việc con người can thiệp (Override) cần được quản trị bằng quy trình có phân quyền, chỉ nên tập trung vào các trường hợp ngoại lệ có lý do bối cảnh rõ ràng, thay vì cho phép chỉnh sửa tự do không kiểm soát.

---

## 9. VIETNAM OPERATIONS FIT
> **VHM ANALYSIS**

Đánh giá tính ứng dụng nguyên lý tại thị trường Việt Nam:

- **Bán lẻ & Chuỗi cửa hàng (Retail):** Phù hợp để quản trị việc cửa hàng trưởng tự ý chỉnh số lượng đặt hàng hàng ngày mà không có lý do bối cảnh khuyến mại cụ thể.
- **Logistics & Kế hoạch Kho (Warehousing):** Sử dụng dự báo cơ sở để lập kế hoạch diện tích và nhân lực ca làm việc, giảm thiểu sự cố do ước tính cảm tính của quản lý kho.
- **Kế hoạch Tồn kho (Inventory Planning):** Giúp bộ phận Cung ứng tập trung năng lực vào việc xử lý các SKU ngoại lệ biến động lớn thay vì rải sức chỉnh sửa toàn bộ danh mục hàng hóa.

---

## 10. IMPLEMENTATION PLAYBOOK
> **VHM RECOMMENDATION**

Khung triển khai quản trị can thiệp dự báo cho doanh nghiệp:

1. **Thiết lập Dự báo Cơ sở (Baseline Forecast):** Sử dụng phần mềm/mô hình để tự động tạo số liệu dự báo cho danh mục hàng hóa.
2. **Quy định Ngưỡng Cảnh báo Ngoại lệ (Exception Threshold):** Xây dựng ngưỡng cảnh báo tùy theo đặc thù từng doanh nghiệp (ví dụ: SKU có biến động dự báo vượt quá mốc rủi ro) để gợi ý danh mục cần con người xem xét.
3. **Phân quyền Thẩm quyền Can thiệp (Override Authority):** Quy định rõ cấp quản lý được phép phê duyệt điều chỉnh theo quy mô tiền hàng.
4. **Áp dụng Bắt buộc Mã Lý do (Mandatory Reason Code):** Yêu cầu nhân viên chọn mã lý do khi can thiệp (ví dụ: `PROMOTION_EVENT`, `SUPPLY_DISRUPTION`, `PRICE_CHANGE`) để phục vụ kiểm toán dữ liệu.
5. **Đánh giá Định kỳ Hiệu quả Can thiệp:** Định kỳ so sánh sai số dự báo giữa **Số liệu Gốc từ Mô hình** và **Số liệu Sau Can thiệp** để đo lường năng lực của từng bộ phận.

---

## 11. KILL / WARNING CONDITIONS
> **VHM RECOMMENDATION**

Doanh nghiệp cần xem xét lại hoặc siết chặt chính sách can thiệp nếu xuất hiện các dấu hiệu:

- **Can thiệp liên tục làm giảm độ chính xác:** Nếu kết quả đánh giá định kỳ cho thấy các đợt can thiệp thủ công liên tục làm sai số dự báo tăng lên so với số liệu gốc của mô hình cơ sở.
- **Lạm dụng mã lý do không xác định:** Nhân viên thường xuyên chọn mã lý do chung chung (`OTHER` hoặc nhập văn bản đối phó) để qua mặt hệ thống.
- **Can thiệp rải thảm:** Nhân viên dành thời gian chỉnh sửa lại hầu hết các dòng dự báo thay vì tập trung vào các trường hợp ngoại lệ thực sự.

---

## 12. PRIMARY SOURCE
> **RESEARCH EVIDENCE**

- **Tên bài báo:** *"Effective forecasting and judgmental adjustments: an empirical evaluation and strategies for improvement in supply-chain planning"*
- **Tác giả:** Robert Fildes, Paul Goodwin, Michael Lawrence, Konstantinos Nikolopoulos
- **Tạp chí:** *International Journal of Forecasting* (Elsevier)
- **Thông tin xuất bản:** Tập 25, Số 1, Trang 3–23 (Năm 2009)
- **Mã DOI:** `10.1016/j.ijforecast.2008.11.010`
- **Tình trạng xuất bản:** Peer-Reviewed Academic Journal Article
- **Liên kết gốc:** https://doi.org/10.1016/j.ijforecast.2008.11.010
