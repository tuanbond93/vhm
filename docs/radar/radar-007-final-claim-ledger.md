# VHM RADAR #007 — FINAL CLAIM LEDGER & ADVERSARIAL EVIDENCE AUDIT
**Internal Reference:** docs/radar/radar-007-final-claim-ledger.md
**Scope:** Final Claim Verification, Risk Assessment & Editorial Hardening
**Date:** 2026-08-10
**Status:** COMPLETED & APPROVED FOR DRAFT HARDENING

---

## 1. PRIMARY SOURCE OF TRUTH

- **Authors:** Rafael Basso, Balázs Kulcsár, Ivan Sanchez-Diaz, Xiaobo Qu (2022)
- **Title:** *"Dynamic stochastic electric vehicle routing with safe reinforcement learning"*
- **Journal:** *Transportation Research Part E: Logistics and Transportation Review*, Vol. 157, Article 102496. DOI: `10.1016/j.tre.2021.102496`.
- **Evidence Tier:** Tier 1 / Primary Research
- **Simulation Boundary:** Computational experiment / dynamic stochastic simulation driven by realistic vehicle physics & Luxembourg urban traffic data. NOT a commercial live fleet trial with human drivers.

---

## 2. FINAL CLAIM LEDGER

| Claim ID | Public Claim Content | Classification | Primary Source Location | Simulation Boundary | Approved Public Wording | Risk Level | Status |
|---|---|---|---|---|---|---|---|
| C007-NUM-1 | Mô hình Safe DRL đạt mức tiết kiệm năng lượng trung bình ~4.8% so with deterministic online re-optimization baseline. | RESEARCH EVIDENCE | TRE 2022, Section 5 (Computational Results) | Simulation | "Mô hình Safe DRL đạt mức tiết kiệm năng lượng trung bình ~4.8% so với phương pháp tái định tuyến trực tuyến xác định." | LOW | VERIFIED & APPROVED |
| C007-NUM-2 | Triệt tiêu 100% rủi ro cạn pin giữa đường. | RESEARCH EVIDENCE | TRE 2022, Section 5.2 | Simulation | REWRITTEN: "Thuật toán Safe DRL giúp duy trì dung lượng pin luôn ở trên ngưỡng an toàn khả thi và triệt tiêu nguy cơ hết pin giữa đường trong các kịch bản thực nghiệm được kiểm chứng." | LOW (post-rewrite) | REWRITTEN & APPROVED |
| C007-TERM-1 | Khái niệm "Safe" (An toàn) trong nghiên cứu mang ý nghĩa duy trì an toàn năng lượng pin (Energy Feasibility Bounds). | RESEARCH EVIDENCE | TRE 2022, Section 3.2 | Methodological | "Khái niệm an toàn trong nghiên cứu nguyên bản mang ý nghĩa kỹ thuật: duy trì giới hạn khả thi về năng lượng và tránh cạn pin." | LOW | VERIFIED & APPROVED |
| C007-GOV-1 | Ngưỡng pin an toàn (bán kính dự phòng, tần suất đổi tuyến, độ trễ telemetry). | VHM RECOMMENDATION | N/A (Governance Parameter) | Governance | Parameterized: "ngưỡng an toàn năng lượng được cấu hình", "tần suất tái định tuyến vượt ngưỡng ổn định vận hành". | LOW | PARAMETERIZED & APPROVED |
| C007-VN-1 | Ứng dụng tại Việt Nam (Hà Nội, TP.HCM, các loại hình giao vận). | VHM ANALYSIS | N/A (Application Hypothesis) | Market Analysis | REMOVED ALL NAMED COMPANIES. Labeled clearly: "VHM ANALYSIS — GIẢ THUYẾT ỨNG DỤNG TIỀM NĂNG, KHÔNG PHẢI KẾT QUẢ THỬ NGHIỆM TRỰC TIẾP CỦA BÀI BÁO GỐC." | LOW | RESTRAINED & APPROVED |
| C007-FW-1 | Ba Cấp độ Trí tuệ Vận hành (Level 1: Describe, Level 2: Predict, Level 3: Decide). | VHM ANALYSIS | N/A (Framework Synthesis) | Framework | Explicit attribution: "Khung phân loại này là tổng hợp của Vận Hành Mới cho quản trị vận hành và không phải là hệ thống phân loại do bài báo gốc đề xuất." | LOW | ATTRIBUTED & APPROVED |
