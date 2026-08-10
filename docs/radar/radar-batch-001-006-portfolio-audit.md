# VHM RADAR — BATCH 1 PORTFOLIO AUDIT & RADAR #007 STRATEGIC ROADMAP (RE-AUDITED)
**Internal Reference:** docs/radar/radar-batch-001-006-portfolio-audit.md
**Scope:** Radar #001–#006 System Audit & Radar #007–#012 Research Queue Proposal
**Date:** 2026-08-10
**Status:** INTERNAL STRATEGIC RECORD (NO PRODUCTION CHANGES / NO PUBLICATION)

---

## 1. BATCH 1 PORTFOLIO INVENTORY MATRIX (RADAR #001–#006)

| Radar # | Public Slug | Topic | Operational Domain | Technology | Evidence Source | Evidence Tier | Verdict | Design Principle | Primary Takeaway |
|---|---|---|---|---|---|---|---|---|---|
| #001 | `/radar/ai-agent-human-in-the-loop-taobao` | AI Agent CSKH | Customer Service Ops | Autonomous LLM Agents | Taobao RCT (arXiv:2605.14830) | Tier 1 / Primary Research | ADOPT | Human-in-the-Loop Governance | Rút con người hoàn toàn làm giảm CSAT; cần phân công nhiệm vụ phù hợp. |
| #002 | `/radar/du-bao-nhu-cau-human-override` | Demand Forecasting | Supply Chain Planning | Computerized Forecast Models | Fildes et al. (IJF 2009) | Tier 1 / Primary Research | ADOPT | Model-First Forecasting with Governed Human Override | Mô hình tạo baseline ổn định; chỉ cho con người can thiệp khi có thông tin ngữ cảnh lớn. |
| #003 | `/radar/genai-cskh-knowledge-multiplier` | GenAI CSKH Copilot | Customer Support Ops | GenAI Assistance / LLM | Brynjolfsson et al. (QJE 2025) | Tier 1 / Primary Research | ADOPT | AI as Knowledge Multiplier, Not Expert Replacement | GenAI tăng 30% năng suất cho nhân sự mới; đóng gói tri thức từ nhóm giỏi sang nhóm mới. |
| #004 | `/radar/genai-tai-lieu-van-hanh-human-validation` | GenAI SOP Drafting | Ops Documentation | GenAI Writing Tools | Noy & Zhang (Science 2023) | Tier 1 / Primary Research | TEST | AI-Assisted Drafting with Human Validation | GenAI giảm 40% thời gian viết; con người giữ thẩm quyền kiểm chứng và phê duyệt SOP. |
| #005 | `/radar/amr-kho-hang-workflow-design` | AMR Warehouse Intralogistics | Warehouse Operations | Autonomous Mobile Robots (AMRs) | Fragapane et al. (EJOR 2021) | Tier 1 / Peer-Reviewed Review | TEST | Human–Robot Workflow Design Before Full Automation | AMR hiệu quả khi tái thiết kế luồng tương tác Con người - Robot trước khi mua công nghệ. |
| #006 | `/radar/ai-canh-bao-som-don-hang-tre-kho-hang` | WMS ML Early Warning | Warehouse Operations | ML Tardiness Prediction + WMS Alerting | Aloini et al. (TRE 2025) | Tier 1 / Primary Research | TEST | Predict Before You Escalate: AI Early Warning | ML dự báo nguy cơ trễ hạn từ dữ liệu WMS; tạo thêm thời gian phản ứng cho quản lý. |

---

## 2. PORTFOLIO COVERAGE MAP

- **PLANNING:**
  - Demand Forecasting: **STRONG COVERAGE** (#002)
  - Capacity & Workforce Planning: **NOT COVERED**
  - Inventory Positioning & Safety Stock: **NOT COVERED**
- **EXECUTION:**
  - Warehouse Execution / Material Handling: **STRONG COVERAGE** (#005, #006)
  - Transportation / Outbound Shipping / Last-Mile: **NOT COVERED** (Major Gap)
  - Dynamic Routing & Dispatching: **NOT COVERED** (Major Gap)
- **CONTROL & EXCEPTION MANAGEMENT:**
  - SLA Monitoring & Exception Queues: **STRONG COVERAGE** (#006)
  - Process Mining & Anomaly Detection: **NOT COVERED**
- **KNOWLEDGE & DOCUMENTATION:**
  - SOP Authoring & Governance: **STRONG COVERAGE** (#004)
  - Training & Skill Equalization: **STRONG COVERAGE** (#003)
- **CUSTOMER SERVICE OPS:**
  - Customer Support & Agentic AI: **STRONG COVERAGE** (#001, #003)

---

## 3. RE-AUDITED RADAR #007 CANDIDATE EVALUATION TABLE

Đánh giá 4 ứng viên đã qua kiểm định độc lập 100% DOI (Thang điểm 1–5, Tối đa = 40):

| Tiêu chí | C1: Dynamic Fleet Dispatching & Safe DRL Routing (Basso, Kulcsár, Sanchez-Diaz, Qu, TRE 2022, DOI: 10.1016/j.tre.2021.102496) | C2: Flex vs Core Labor Balancing in Fulfillment (TRE 2026, DOI: 10.1016/j.tre.2026.104696) | C3: Last-Mile Driver Workforce Sizing (EJOR 2025, DOI: 10.1016/j.ejor.2024.12.006) | C4: Cross-Dock Truck Scheduling (TRE 2023, DOI: 10.1016/j.tre.2023.103263) |
|---|---|---|---|---|
| A. Evidence Strength | 5 | 5 | 5 | 5 |
| B. Source Integrity | 5 (VERIFIED) | 5 (VERIFIED) | 5 (VERIFIED) | 5 (VERIFIED) |
| C. Source Relevance | 5 (DIRECT) | 4.5 | 4.5 | 4 |
| D. Novelty vs #001–#006 | 5 | 5 | 4.5 | 4 |
| E. Operational Applicability | 5 | 4.5 | 4.5 | 4 |
| F. Vietnam Operations Fit | 4.5 | 4.5 | 4 | 4 |
| G. Operating Model Potential | 5 | 4.5 | 4 | 4 |
| H. Strategic Portfolio Value | 5 | 4.5 | 4.5 | 4 |
| **TỔNG ĐIỂM (Max 40)** | **39.5** | **38.0** | **36.5** | **34.0** |
| **XẾP HẠNG** | **HẠNG 1 (WINNER)** | **HẠNG 2 (BACKLOG #008)** | **HẠNG 3 (BACKLOG #009)** | HẠNG 4 |

---

## 4. RADAR #007 PUBLICATION & RADAR #008 CANDIDATE DISCOVERY SUMMARY

- **Radar #007 Status:** PUBLISHED & LOCKED (`/radar/ai-dinh-tuyen-dong-chang-giao-van`)
- **Radar #008 Clean-Room Candidate Verification:**
  - **Winner:** Auad et al. (2026), *"Balancing flex and non-flex labor to reliably meet on-demand capacity"*, *Transportation Research Part E*, Vol. 209, Article 104696, DOI: `10.1016/j.tre.2026.104696`.
  - **DOI Verification:** **100% PASS**
  - **Portfolio Gap Filled:** Workforce Capacity Planning & Flex vs Permanent Labor Composition.
  - **Dossier Artifact:** `docs/radar/radar-008-candidate-dossier.md` created.

## 4. RECOMMENDED RADAR #007 PROPOSAL

- **Tên chủ đề đề xuất:** *Dynamic stochastic electric vehicle routing with safe reinforcement learning*
- **Nguồn bài báo gốc:** *"Dynamic stochastic electric vehicle routing with safe reinforcement learning"*, *Transportation Research Part E: Logistics and Transportation Review*, Vol. 157, Article 102496, 2022. DOI: `10.1016/j.tre.2021.102496`.
- **Tác giả:** Rafael Basso, Balázs Kulcsár, Ivan Sanchez-Diaz, Xiaobo Qu (2022).
- **Phân loại bằng chứng:** Real Urban GPS Traffic Data + Stochastic VRP Modeling + Safe DRL Policy Evaluation (Tier 1 / Primary Research).
- **Evidence Tier:** Tier 1 / Primary Research (*Transportation Research Part E*).
- **Lý do chọn làm Radar #007:** Giải quyết khoảng trống chiến lược lớn nhất: **Vận chuyển & Điều phối Đội xe Chặng cuối (Transportation & Delivery Execution)**. Phân biệt rõ rệt về mặt phương pháp luận với Radar #006: #006 là *bài toán dự báo hàng chờ tĩnh trong kho*, còn #007 là *bài toán ra quyết định tuần hoàn dưới bất định trên đường (Sequential Decision-Making under Uncertainty)*.
- **Tên bài viết đề xuất:** *Định tuyến động chặng giao vận: Khi nào AI nên tự động tái định tuyến dưới biến động giao thông?*
- **Slug đề xuất:** `/radar/ai-dinh-tuyen-dong-chang-giao-van`
- **Verdict đề xuất:** `TEST IN CONTROLLED WORKFLOW`
- **Design Principle đề xuất:** *Predict → Decide → Re-route under Feasibility Constraints* (Dự báo - Ra quyết định - Tái định tuyến có Giới hạn Khả thi).
