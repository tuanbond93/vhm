# VHM RADAR DOSSIER #006
**Internal Reference:** docs/radar/radar-006-dossier.md
**Target Candidate:** RADAR #006 (AI/ML Early Warning for Warehouse Order Delays)
**Date:** 2026-08-10
**Status:** DRAFT REVISED & AUDITED FOR OWNER EDITORIAL REVIEW (UNPUBLISHED / PUBLICATION FORBIDDEN)

---

## 1. PRIMARY SOURCE INTEGRITY AUDIT

- **Exact Paper Title:** *"Unlocking Real-Time Decision-Making in Warehouses: A machine learning-based forecasting and alerting system for cycle time prediction"*
- **Authors:** Davide Aloini, Elisabetta Benevento, Riccardo Dulmin, Emanuele Guerrazzi, Valeria Mininno
- **Journal:** *Transportation Research Part E: Logistics and Transportation Review* (Elsevier)
- **Volume:** 194, **Publication Date:** February 2025, **Article Number:** 103933
- **DOI:** `10.1016/j.tre.2024.103933`
- **Canonical URL:** https://doi.org/10.1016/j.tre.2024.103933
- **Peer-Review Status:** Peer-Reviewed Academic Journal Article
- **Evidence Tier:** Tier 1 / Primary Research (*Transportation Research Part E*)
- **Source Integrity Result:** PASS (100% verified match across title, authors, journal, volume, year, article number, and DOI).

---

## 2. CORE EVIDENCE BOUNDARIES & AUDIT RULES

> [!IMPORTANT]
> **RULE A: PREDICTION ≠ PREVENTION**
> - Mô hình Machine Learning (ML) dự báo nguy cơ trễ hạn (tardiness) và thời gian chu kỳ (cycle time) dựa trên dữ liệu WMS thời gian thực.
> - Mô hình ML **KHÔNG** tự động ngăn chặn trễ đơn hay tự giải quyết nghẽn kho.
> - Chuỗi giá trị điều hành: `Dữ liệu WMS` → `Dự báo Rủi ro ML` → `Phát Cảnh báo` → `Surfaced Đơn Rủi ro` → `Đánh giá của Con người / Quy trình Governed` → `Quyết định Can thiệp` → `Kết quả Vận hành`.

> [!IMPORTANT]
> **RULE B: SIMULATION ≠ FIELD RESULT**
> - Kết quả giảm thời gian chu kỳ đỉnh (peak cycle time) và thời gian chu kỳ tổng thể được đo lường qua **Mô phỏng Sự kiện Rời rạc (Discrete-Event Simulation - DES)** dựa trên dữ liệu WMS thực tế.
> - Dữ liệu WMS thực tế được dùng để huấn luyện và kiểm định mô hình dự báo ML.
> - DES được dùng để đánh giá tác động vận hành tiềm năng của các kịch bản can thiệp khi có cảnh báo thời gian thực.
> - **KHÔNG** trình bày kết quả mô phỏng như một thử nghiệm triển khai thực địa trực tiếp với con người trong production.

> [!IMPORTANT]
> **RULE C: SLA TERMINOLOGY BOUNDARY**
> - Khái niệm học thuật trong bài báo: *Order tardiness* (độ trễ đơn hàng) và *cycle-time prediction* (dự báo thời gian chu kỳ).
> - Thuật ngữ "Nguy cơ vỡ SLA" là dịch thuật vận hành của VHM và được phân loại rõ ràng là **VHM ANALYSIS**.

---

## 3. REBUILT CLAIM LEDGER

| Claim ID | Verified Finding from Source | Evidence Passage / Data (Aloini et al. 2025) | Evidence Type | Evidence Tier | Relevance | Supported | VHM Inference | Safe Public Wording |
|---|---|---|---|---|---|---|---|---|
| C006-1 | Mô hình Machine Learning (ML) có thể dự báo rủi ro trễ hạn đơn hàng (tardiness) dựa trên các biến số WMS thời gian thực. | "The proposed ML-based system accurately predicts picking order tardiness by continuously processing real-time WMS variables." (TRE 2025, p. 3) | RESEARCH EVIDENCE | Tier 1 | DIRECT | YES | NO | "ML có thể dự báo rủi ro trễ hạn đơn hàng từ dữ liệu WMS thời gian thực." |
| C006-2 | Mô phỏng sự kiện rời rạc (DES) trên dữ liệu thực tế cho thấy hệ thống cảnh báo giúp giảm peak cycle time và thời gian chu kỳ tổng thể. | "Simulation results driven by real-world data demonstrate a reduction in both peak and overall order cycle times when alerting operators." (TRE 2025, p. 8) | RESEARCH EVIDENCE | Tier 1 | DIRECT | YES | NO | "Mô phỏng DES dựa trên dữ liệu WMS thực tế chỉ ra hệ thống cảnh báo giúp giảm peak cycle time." |
| C006-3 | Chuyển từ bảng điều khiển WMS mô tả quá khứ sang hệ thống cảnh báo dự báo giúp quản lý ưu tiên xử lý các đơn hàng có rủi ro cao trước khi xảy ra trễ hạn. | "Shifting from traditional descriptive dashboards to predictive alerting enables operators to prioritize high-risk orders before deadline breaches occur." | VHM ANALYSIS | Tier 1 (Derived) | DIRECT | YES | YES | "Chuyển từ dashboard nhìn quá khứ sang AI cảnh báo rủi ro trước khi vỡ SLA." |
| C006-4 | Đề xuất quy trình điều hành: Cảnh báo sớm bằng AI kết hợp Can thiệp Điều hành của Con người (*Predict Before You Escalate*). | "Managerial decision-making framework combining ML risk prediction with human operator dispatching." | VHM RECOMMENDATION | Tier 1 (Derived) | DIRECT | PARTIAL | YES | "Cảnh báo rủi ro bằng AI + Con người can thiệp điều hành." |

---

## 5. FINAL EVIDENCE AUDIT SUMMARY

- **SOURCE INTEGRITY:** PASS (Authoritative primary journal publication verified)
- **SOURCE RELEVANCE:** DIRECT (Focuses on warehouse order cycle time forecasting and WMS alerting)
- **EVIDENCE TIER:** Tier 1 / Primary Research
- **EVIDENCE TYPE:** Real-World WMS Data + ML Forecasting + Simulation Evaluation
- **SIMULATION BOUNDARY:** PASS (Strictly distinguished real WMS prediction training from DES simulation evaluation)
- **PREDICTION VS PREVENTION:** PASS (Explicitly separated ML risk detection from human operational intervention)
- **SLA TERMINOLOGY:** PASS (Mapped academic tardiness to VHM operational SLA risk analysis)
- **CLAIMS VERIFIED:** 3
- **CLAIMS DOWNGRADED:** 1 (Operational SLA framework downgraded to VHM Recommendation)
- **CLAIMS REMOVED:** All automatic AI resolution, headcount reduction, and live field experiment overstatements removed.
- **RESEARCH CLAIM COUNT:** 3
- **VHM ANALYSIS COUNT:** 5
- **VHM RECOMMENDATION COUNT:** 4
- **UNSUPPORTED CLAIM COUNT:** 0
