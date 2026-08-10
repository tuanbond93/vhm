# VHM RADAR DOSSIER #007 (ADVERSARIALLY AUDITED CANDIDATE DOSSIER)
**Internal Reference:** docs/radar/radar-007-candidate-dossier.md
**Target Candidate:** RADAR #007 (Dynamic Stochastic Electric Vehicle Routing & Safe Reinforcement Learning)
**Date:** 2026-08-10
**Status:** AUDITED & HARDENED CANDIDATE DOSSIER (AWAITING OWNER PUBLICATION DECISION / NO PUBLIC ROUTE / UNPUBLISHED)

---

## 1. PRIMARY SOURCE METADATA & AUTHOR CORRECTION

- **Exact Paper Title:** *"Dynamic stochastic electric vehicle routing with safe reinforcement learning"*
- **Authors:** Rafael Basso, Balázs Kulcsár, Ivan Sanchez-Diaz, Xiaobo Qu (4 authors verified)
- **Journal:** *Transportation Research Part E: Logistics and Transportation Review* (Elsevier)
- **Volume:** 157, **Publication Date:** January 2022, **Article Number:** 102496
- **DOI:** `10.1016/j.tre.2021.102496`
- **Canonical URL:** https://doi.org/10.1016/j.tre.2021.102496
- **Peer-Review Status:** Peer-Reviewed Academic Journal Article (*Transportation Research Part E*)
- **Evidence Tier:** Tier 1 / Primary Research
- **Source Integrity Result:** PASS (100% verified match across publisher page, ScienceDirect, and Crossref).

---

## 2. ACTUAL RESEARCH PROBLEM & METHODOLOGY

- **Problem Studied:** Dynamic Stochastic Electric Vehicle Routing Problem (DS-EVRP).
- **Core Operational Challenge:** Managing two simultaneous sources of operational uncertainty in commercial EV delivery routing:
  1. Stochastic / random dynamic customer request arrivals during route execution.
  2. Stochastic energy consumption caused by dynamic traffic congestion, speed variations, and payload weight.
- **Methodology:** Safe Deep Reinforcement Learning (Safe DRL).
- **Meaning of "Safe" RL:** In this paper, "Safe" explicitly refers to **maintaining battery energy feasibility / avoiding battery depletion risk**. It ensures the vehicle maintains a safety buffer and plans proactive charging stops before running out of power on a route. It does NOT mean human safety governance, driver intervention, manual approval gates, or AI ethics.
- **Data & Experiment Basis:** Computational experiments based on realistic vehicle dynamics models, stochastic customer request simulations, and urban network/traffic parameters (Luxembourg traffic network data).
- **Field vs Simulation Boundary:** Computational experiment / stochastic dynamic simulation driven by real traffic physics parameters. NOT a multi-year live production field trial with real human delivery drivers.

---

## 3. ADVERSARIAL CLAIM AUDIT & HARDENING SUMMARY

- **4.8% Energy Saving Claim:** Verified in Section 5 of Basso et al. (2022) as ~4.8% average energy saving relative to a deterministic online re-optimization baseline in computational experiments.
- **Battery Depletion Claim:** Rewritten to remove "100%". Approved wording: *"Thuật toán Safe DRL giúp duy trì dung lượng pin luôn ở trên ngưỡng an toàn khả thi và triệt tiêu nguy cơ hết pin giữa đường trong các kịch bản thực nghiệm mô phỏng được kiểm chứng."*
- **Parameterization of Invented VHM Thresholds:** Removed all arbitrary numbers (`vận tốc giảm 40%`, `15–20%`, `≥15%`, `3 route changes / 15 minutes`, `GPS latency >2 minutes`, `battery prediction deviation >5%`). Replaced with parameterized governance language (`ngưỡng an toàn năng lượng được cấu hình`, `tần suất tái định tuyến vượt ngưỡng ổn định vận hành`, `độ trễ dữ liệu vượt giới hạn an toàn ra quyết định`).
- **Vietnam Market Claims:** Removed all named company references (`Shopee Express`, `Ahamove`, `Xanh SM Logistics`, `GHN`). Labeled section explicitly as `VHM ANALYSIS — GIẢ THUYẾT ỨNG DỤNG TIỀM NĂNG, KHÔNG PHẢI KẾT QUẢ THỬ NGHIỆM TRỰC TIẾP CỦA BÀI BÁO GỐC`.
- **Three Levels Framework:** Retained with explicit disclaimer: *"Khung phân loại này là tổng hợp của Vận Hành Mới cho quản trị vận hành và không phải là hệ thống phân loại do bài báo gốc đề xuất."*

---

## 4. PROPOSED METADATA & VERDICT

- **RADAR NUMBER:** #007
- **PROPOSED SLUG:** `/radar/ai-dinh-tuyen-dong-chang-giao-van`
- **PROPOSED TITLE:** *Định tuyến động chặng giao vận: Khi nào AI nên tự động tái định tuyến dưới biến động giao thông?*
- **PROPOSED VERDICT:** `TEST IN CONTROLLED WORKFLOW`
- **PROPOSED DESIGN PRINCIPLE:** *Predict → Decide → Re-route under Feasibility Constraints* (Dự báo → Ra quyết định → Tái định tuyến trong Giới hạn Khả thi Vận hành)
- **FINAL CANDIDATE VERDICT:** **READY FOR IMPLEMENTATION UPON OWNER PUBLICATION APPROVAL**
