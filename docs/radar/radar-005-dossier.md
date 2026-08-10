# VHM RADAR DOSSIER #005
**Internal Reference:** docs/radar/radar-005-dossier.md
**Target Candidate:** RADAR #005 (Warehouse Robotics & Human–Robot Workflow Design)
**Date:** 2026-08-10
**Status:** DRAFT REVISED & AUDITED FOR OWNER EDITORIAL REVIEW (UNPUBLISHED / PUBLICATION FORBIDDEN)

---

## 1. SOURCE INTEGRITY & CLASSIFICATION AUDIT

- **Primary Canonical Source:**
  - **Exact Paper Title:** *"Planning and control of autonomous mobile robots for intralogistics: Literature review and research agenda"*
  - **Authors:** Giuseppe Fragapane, René de Koster, Fabio Sgarbossa, Jan Ola Strandhagen
  - **Journal:** *European Journal of Operational Research* (Elsevier), Volume 294, Issue 2, Pages 405–426 (2021)
  - **DOI:** `10.1016/j.ejor.2021.01.019`
  - **Canonical URL:** https://doi.org/10.1016/j.ejor.2021.01.019
  - **Evidence Type Classification:** INVITED REVIEW / EXTENDED LITERATURE REVIEW + PLANNING & CONTROL FRAMEWORK (Review & synthesis of planning and control literature in AMR intralogistics).
  - **Source Relevance:** DIRECT (Directly synthesizes technological classifications, tactical planning decisions, fleet control, dynamic routing, and research agendas for AMRs in intralogistics).

---

## 2. REBUILT & AUDITED EVIDENCE LEDGER

| Claim ID | Claim Content | Exact Support in Source (Fragapane et al. 2021) | Evidence Classification | Publication Safe |
|---|---|---|---|---|
| C005-1 | AMRs khác AGVs truyền thống ở khả năng di chuyển linh hoạt, tự tìm đường tránh vật cản động mà không phụ thuộc hoàn toàn vào hạ tầng đường dẫn cố định. | "AMRs possess dynamic navigation capabilities, allowing them to adjust paths autonomously without rigid infrastructure." (EJOR p. 407) | RESEARCH EVIDENCE | YES |
| C005-2 | Hiệu suất điều phối AMRs phụ thuộc vào các quyết định cấp chiến thuật và vận hành: phân công nhiệm vụ (Task Allocation), định tuyến (Routing) và kiểm soát ùn tắc (Congestion Control). | "Planning and control decisions for AMRs involve task allocation, dispatching, routing, and congestion management." (EJOR p. 410) | RESEARCH EVIDENCE | YES |
| C005-3 | Yếu tố con người (Human Factors), khía cạnh an toàn và tương tác tại mặt bằng kho đóng vai trò quan trọng trong việc thiết kế và vận hành hệ thống AMR. | "Human factors and safety considerations in human-AMR environments form a critical dimension of intralogistics planning." (EJOR p. 418) | RESEARCH EVIDENCE | YES |

---

## 3. RECLASSIFIED & VHM INFERENCE LEDGER

| Claim ID | Statement | Reclassification | Rationale |
|---|---|---|---|
| V005-1 | Hiệu quả ứng dụng AMR trong kho hàng phụ thuộc vào việc thiết kế lại luồng công việc (Workflow Design) và phân công nhiệm vụ giữa Con người và Robot hơn là việc chỉ mua sắm thiết bị. | VHM ANALYSIS | Suy luận vận hành VHM từ khung lý thuyết lập kế hoạch & điều phối của bài báo EJOR (2021). |
| V005-2 | Nhiệm vụ di chuyển vật liệu lặp lại là nhóm tác vụ có thể xem xét áp dụng AMR tùy thuộc vào layout, routing, traffic và thiết kế hệ thống. | VHM ANALYSIS | Phân tích điều hành VHM thay thế cho tuyên bố 50–70% thời gian đi bộ không có trích dẫn trực tiếp. |
| V005-3 | Con người giữ ưu thế trong các tác vụ thao tác phức tạp (dexterity), kiểm tra chất lượng, nhận diện bao bì rách/hư hỏng và xử lý ngoại lệ hiện trường. | VHM ANALYSIS | Phân tích điều hành VHM về phân công lao động giữa con người và tự động hóa. |
| V005-4 | Đề xuất sơ đồ luồng quản trị phân công nhiệm vụ (Human–Robot Task Allocation Workflow) và nguyên lý "Human–Robot Workflow Design Before Full Automation". | VHM RECOMMENDATION | Khuyến nghị quy trình điều hành của VHM cho doanh nghiệp. |

---

## 4. CLAIMS REMOVED & AUDIT SUMMARY

- **Đã xóa bỏ tuyên bố 50–70% thời gian đi bộ:** Loại bỏ hoàn toàn con số phần trăm đi bộ do không trích xuất được trực tiếp từ văn bản nguồn EJOR (2021). Thay bằng ngôn từ tiết chế về di chuyển vật liệu lặp lại.
- **Đã xóa bỏ số liệu thử nghiệm cố định "2–4 AMRs":** Thay bằng "một fleet giới hạn phù hợp với phạm vi pilot và đặc điểm luồng vận hành."
- **Đã xóa bỏ quy tắc tuyệt đối "100% di chuyển dài":** Thay bằng "phân công cho AMRs các nhiệm vụ được xác định là robot-suitable dựa trên đặc tính tác vụ, layout, traffic, safety và khả năng xử lý ngoại lệ."
- **Đã xóa bỏ ngôn từ tiếp thị:** Loại bỏ các từ "xử lý xuất sắc", "không biết mệt mỏi", "ưu thế tuyệt đối".
- **Đã xóa bỏ tên sàn thương mại điện tử cụ thể:** Thay Shopee/Lazada/Tiki/TikTok Shop bằng "Fulfillment Center thương mại điện tử".
- **UNSUPPORTED CLAIM COUNT: 0**

---

## 5. DECISION METADATA

- **Title:** *Tự động hóa kho bằng AMRs: Vì sao thiết kế workflow quan trọng hơn mua công nghệ?*
- **Slug:** `/radar/amr-kho-hang-workflow-design`
- **Verdict:** `TEST IN CONTROLLED WORKFLOW`
- **Design Principle:** *Human–Robot Workflow Design Before Full Automation*
- **Publication Readiness:** `UNPUBLISHED / FORBIDDEN` (Awaiting Owner Review)
