# Radar #008 Candidate Discovery & Source Integrity Audit

> **Document Status:** RESEARCH & EVIDENCE AUDIT ONLY — NOT FOR PUBLICATION  
> **Target Radar:** #008  
> **Primary Canonical Domain:** `vanhanhmoi.com`  
> **Governance Notice:** Radar #001–#007 are FINAL LOCKED and MUST NOT be modified.

---

## 1. Portfolio Gap & Strategic Context

Vận Hành Mới currently has 7 published Radar reports:

- **#001:** Agentic AI & Human-in-the-Loop Interventions (Alibaba / Taobao) — `ADOPT`
- **#002:** Demand Forecasting & Governed Human Override (Fildes et al., *IJF*) — `ADOPT`
- **#003:** Generative AI as Knowledge Multiplier in CSKH (Brynjolfsson et al., *QJE*) — `ADOPT`
- **#004:** GenAI Operations Documentation & Human Validation (Noy & Zhang, *Science*) — `TEST`
- **#005:** AMR Warehouse Automation & Intralogistics Workflow (Fragapane et al., *EJOR*) — `TEST`
- **#006:** ML Order Delay Early Warning in Warehouse Operations (Aloini et al., *TRE*) — `TEST`
- **#007:** Dynamic Transportation Routing under Feasibility Constraints (Basso et al., *TRE*) — `TEST`

### Portfolio Observation
Radar #005–#007 form a dense cluster covering warehouse automation, warehouse SLA prediction, and transportation dynamic routing. 

Publishing another vehicle routing or warehouse exception prediction paper for Radar #008 would create portfolio redundancy.

### Portfolio Gap Target for Radar #008
**Workforce Scheduling, Flexible Labor Composition, and Capacity Planning** in on-demand fulfillment operations. This addresses a vital Operations Intelligence capability: *How do operations leaders structure labor capacity between permanent regular staff and flexible gig workers to absorb demand shocks without overstaffing or destroying operational efficiency?*

---

## 2. Special Audit of Previous Radar #008 Candidate DOI

Prior to candidate scoring, we conducted a bidirectional clean-room source verification of the previously recorded candidate metadata:

- **Recorded DOI:** `10.1016/j.tre.2026.104696`
- **Recorded Concept:** *"Flex vs Permanent Labor Balancing in On-Demand Fulfillment"*

### Verification Results

```
PREVIOUS CANDIDATE DOI CHECK: PASS
ACTUAL TITLE: Balancing flex and non-flex labor to reliably meet on-demand capacity
ACTUAL AUTHORS: Ramon Auad, Thomas Fillebeen, Roman Levkin, Arkajit Rakshit, Martin Savelsbergh
ACTUAL JOURNAL: Transportation Research Part E: Logistics and Transportation Review
VOLUME / ARTICLE: Volume 209, Article 104696
PUBLICATION YEAR: 2026
DOI: 10.1016/j.tre.2026.104696
INSTITUTIONAL AFFILIATIONS: Amazon Science & Georgia Institute of Technology
DATASET / FIELD BASIS: Amazon Delivery Stations empirical productivity data & learning curve estimation
SOURCE RELEVANCE: DIRECT
EVIDENCE QUALITY: Tier 1 / Primary Research
```

**Conclusion:** The previously recorded DOI `10.1016/j.tre.2026.104696` is **100% VERIFIED** and corresponds exactly to the published article in *Transportation Research Part E* (2026) by Auad et al. No metadata collision or title corruption occurred.

---

## 3. Clean-Room Candidate Discovery & Evaluation

We evaluated 4 serious primary research candidate papers in non-routing, non-warehouse-exception domains:

### Candidate 1 (RECOMMENDED WINNER)
- **Title:** *"Balancing flex and non-flex labor to reliably meet on-demand capacity"*
- **Authors:** Ramon Auad, Thomas Fillebeen, Roman Levkin, Arkajit Rakshit, Martin Savelsbergh
- **Journal:** *Transportation Research Part E: Logistics and Transportation Review*, Vol. 209, Article 104696 (2026).
- **DOI:** `10.1016/j.tre.2026.104696`
- **Domain:** Workforce Scheduling / Flex vs Permanent Labor Balancing in Fulfillment
- **Evidence Tier:** Tier 1 / Primary Research

### Candidate 2
- **Title:** *"Tactical workforce sizing and scheduling decisions for last-mile delivery"*
- **Authors:** Minakshi Punam Mandal, Alberto Santini, Claudia Archetti
- **Journal:** *European Journal of Operational Research*, Vol. 323, Issue 1, pp. 153–169 (2025).
- **DOI:** `10.1016/j.ejor.2024.12.006`
- **Domain:** Last-mile workforce sizing & shift stability trade-offs
- **Evidence Tier:** Tier 1 / Primary Research

### Candidate 3
- **Title:** *"A machine learning based branch-cut-and-Benders for dock assignment and truck scheduling problem in cross-docks"*
- **Authors:** Rahimeh Neamatian Monemi, Shahin Gelareh, Nelson Maculan
- **Journal:** *Transportation Research Part E: Logistics and Transportation Review*, Vol. 178, Article 103263 (2023).
- **DOI:** `10.1016/j.tre.2023.103263`
- **Domain:** Cross-docking facility truck scheduling & dock assignment
- **Evidence Tier:** Tier 1 / Primary Research

### Candidate 4
- **Title:** *"A flow based formulation and a reinforcement learning based strategic oscillation for cross-dock door assignment"*
- **Authors:** M. Li, J.-K. Hao, Q. Wu
- **Journal:** *European Journal of Operational Research*, Vol. 312, Issue 2, pp. 473–492 (2024).
- **DOI:** `10.1016/j.ejor.2023.07.014`
- **Domain:** Cross-dock door assignment optimization
- **Evidence Tier:** Tier 1 / Primary Research

---

## 4. Candidate Comparison & Scoring Matrix

Each candidate was scored out of **40 points** across 8 operational criteria (5 points max per category):

| Evaluation Criteria (Max 5 pts) | Candidate 1 (Auad et al., TRE 2026) | Candidate 2 (Mandal et al., EJOR 2025) | Candidate 3 (Monemi et al., TRE 2023) | Candidate 4 (Li et al., EJOR 2024) |
| :--- | :---: | :---: | :---: | :---: |
| **1. Source Integrity** | 5/5 (Verified DOI/Crossref) | 5/5 (Verified DOI) | 5/5 (Verified DOI) | 5/5 (Verified DOI) |
| **2. Evidence Quality** | 5/5 (TRE + Amazon field data) | 5/5 (EJOR primary research) | 5/5 (TRE primary research) | 5/5 (EJOR primary research) |
| **3. Operations Relevance** | 5/5 (Workforce capacity planning) | 4/5 (Last-mile shift sizing) | 4/5 (Cross-dock scheduling) | 3.5/5 (Door assignment) |
| **4. Portfolio Gap Value** | 5/5 (Fills labor strategy gap) | 4/5 (Overlaps last-mile #007) | 3.5/5 (Overlaps warehouse #005/#006) | 3/5 (Overlaps intralogistics) |
| **5. Actionability** | 4.5/5 (Staffing buffer rules) | 4/5 (Shift flexibility rules) | 3.5/5 (Benders decomposition) | 3/5 (RL heuristics) |
| **6. Novelty vs #001–#007** | 5/5 (First labor composition study) | 4/5 (Partial #007 overlap) | 3.5/5 (Partial #005/#006 overlap) | 3/5 (Algorithmic formulation) |
| **7. Vietnam Operations Fit** | 4.5/5 (Flex worker e-commerce fit) | 4/5 (Delivery driver shift fit) | 3.5/5 (Hub cross-dock fit) | 3/5 (Cross-dock door fit) |
| **8. Claim Safety & Robustness** | 5/5 (Clear ~4% upper bound) | 4.5/5 (Empirical trade-offs) | 4/5 (Exact optimization bounds) | 4/5 (Benchmarked MILP) |
| **TOTAL PRIORITY SCORE** | **39/40 (WINNER)** | **34.5/40** | **32.5/40** | **30/40** |

---

## 5. Winning Candidate Analysis (Auad et al., 2026, TRE)

### Primary Academic Source Details
- **Title:** *"Balancing flex and non-flex labor to reliably meet on-demand capacity"*
- **Authors:** Ramon Auad, Thomas Fillebeen, Roman Levkin, Arkajit Rakshit, Martin Savelsbergh
- **Journal:** *Transportation Research Part E: Logistics and Transportation Review*
- **Volume / Article:** Volume 209, Article 104696 (2026)
- **DOI:** `10.1016/j.tre.2026.104696`
- **Evidence Tier:** Tier 1 / Primary Research
- **Evidence Type:** Mathematical Optimization Modeling + Amazon Fulfillment Center Associate Productivity Empirical Learning Curve Study
- **Source Relevance:** DIRECT

### What Was Actually Studied
The research addresses **under-the-roof (UTR) labor planning** in fulfillment centers and delivery stations. Unlike last-mile road drivers, indoor fulfillment associates perform multi-step, task-specific operations (sorting, picking, staging, loading) that exhibit distinct learning curves. 

The study models the optimal workforce composition between **regular permanent associates** (higher baseline productivity, higher fixed cost) and **flexible on-demand associates** (variable productivity based on experience, flexible shift commitment) under demand volatility.

### Data & Experiment Basis
1. Empirical associate productivity data from real Amazon delivery station operations to estimate task learning curves for flex vs regular workers.
2. Mathematical optimization framework for workforce sizing and shift scheduling under stochastic daily volume shocks.

### What Was Actually Found
1. **Learning Curve Gap:** Flexible associates take longer to reach full operational proficiency on complex indoor tasks compared to regular associates, but this productivity gap narrows systematically as flexible associates gain cumulative shift experience.
2. **Staffing Efficiency Gain:** Strategic workforce blending significantly improves structural staffing efficiency and protects against demand spikes without requiring permanent overstaffing.
3. **Quantified Upper Bound:** The authors estimate an upper bound of approximately **4% labor efficiency improvement** achieved through strategic workforce blending in evaluated Amazon delivery station operations compared to rigid unblended staffing baselines.

### Field vs Simulation Boundary
- **Empirical Field Basis:** Amazon delivery station associate operational productivity logs used for learning curve parameterization.
- **Model Basis:** Mathematical programming optimization model evaluating workforce sizing under stochastic demand shocks.

---

## 6. Required Claim Audit (Auad et al., 2026)

### Directly Supported Claims
- Flexible associates exhibit a learning curve on indoor fulfillment tasks, requiring time to reach full productivity compared to regular staff.
- Blending regular permanent staff with flexible on-demand workers improves structural staffing agility against daily demand volatility.
- Strategic workforce composition optimization achieved an estimated upper bound of ~4% labor efficiency improvement in evaluated Amazon delivery station computational experiments.

### Partially Supported Claims
- Flexible labor reduces reliance on third-party emergency staffing when managed through learning-curve-aware shift scheduling models.

### Unsupported Claims (STRICTLY FORBIDDEN)
- NO claim that flex labor allows firing 40% of regular warehouse staff.
- NO claim that flex labor guarantees 100% elimination of labor shortages.
- NO claim of monetary labor cost savings derived from arbitrary VHM multipliers.
- NO named Vietnamese logistics companies (e.g., Shopee Express, GHN, Ahamove, Viettel Post).
- NO claims that flex labor workers perform at 100% productivity on Day 1 without training.

---

## 7. Human / AI Governance Check

- **Decision Architecture Category:** **Simulation & Optimization Model Supported Workforce Planning (Category E / A)**
- **Governance Finding:** The optimization algorithm calculates recommended staffing ratios, shift buffers, and flexible worker call-up triggers. Operations managers retain final authority over shift scheduling, associate hiring policies, and worker experience safeguards.

---

## 8. Proposed Identity for Radar #008

### Public Radar Identity
- **Radar Number:** `#008`
- **Proposed Slug:** `can-bang-lao-dong-linh-hoat-kho-hang`
- **Primary Domain Canonical:** `https://vanhanhmoi.com/radar/can-bang-lao-dong-linh-hoat-kho-hang`
- **Proposed Verdict:** `TEST IN CONTROLLED WORKFLOW`
- **Proposed Design Principle:** `Balance Permanent & Flex Labor under Learning Curve Constraints` (*Cân bằng Nhân sự Cố định & Linh hoạt trong Giới hạn Đường cong Học tập*)
- **Category:** `AI / WORKFORCE & CAPACITY OPERATIONS`

### Locked Working Title
- **FINAL LOCKED TITLE:** *Cân bằng lao động cố định và linh hoạt: Đường cong học tập thay đổi bài toán nhân sự kho hàng như thế nào?*
- **SLUG:** `can-bang-lao-dong-linh-hoat-kho-hang`

---

## 9. Risks & Open Questions for Owner Approval — RESOLVED

> [!NOTE]
> **Owner Decisions Recorded:**
> 1. **Candidate Approval:** APPROVED — Auad et al. (2026) (*Transportation Research Part E*, DOI: `10.1016/j.tre.2026.104696`).
> 2. **Title Approval:** APPROVED — *"Cân bằng lao động cố định và linh hoạt: Đường cong học tập thay đổi bài toán nhân sự kho hàng như thế nào?"*
> 3. **Verdict Approval:** APPROVED — `TEST IN CONTROLLED WORKFLOW`.
> 4. **Claim Boundary:** APPROVED — ~4% upper bound efficiency gain strictly restricted to computational simulation experiments without financial cost claims.

---

## 10. Owner Decision & Document Status

**STATUS:** TOPIC APPROVED & EDITORIAL DRAFT AUDITED. PROCEED TO EDITORIAL DRAFT ONLY (NO REACT IMPLEMENTATION, NO PUBLIC ROUTE, NO DEPLOYMENT).

