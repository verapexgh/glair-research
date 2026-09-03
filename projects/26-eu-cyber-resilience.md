# EU Cyber Resilience Act (CRA)

**Classification:** Regulatory — Applies to Software/Firmware Products  
**Effective Dates:**
- **Reporting duties:** September 2026 (NOW)
- **Full compliance:** December 2027  
**Source:** Hacker News Ask HN + EU official documents  
**Discovered:** 2026-09-03 via HN  

---

## What Is the CRA?
The EU Cyber Resilience Act treats **software products the same as hardware products** for cybersecurity compliance. It applies to anything with "digital elements" sold in the EU.

## Key Rules

### 1. Software = Hardware Under CRA
- Same regime as physical products: **technical file, declaration of conformity, CE marking**
- Even on software/firmware
- The exemption is only for **open source supplied outside commercial activity** — "free isn't the same as non-commercial"

### 2. No Size Threshold
- One-person company carries **same obligations** as a large corporation
- Article 33 has "support measures for SMEs" — but these are **help, not exemption**

### 3. Self-Assessment for Most Products
- If your product is **not in Annex III** (high-risk categories):
  - No notified body required
  - No filing fee
  - Self-assess and self-CE-mark
  - Work is "a handful of documents you write once"

### 4. The 10-Year Rule (Article 13(9))
> **Every security update you ship has to stay available for 10 years after you issue it, or the rest of the support period, whichever is longer.**

For a product launched in 2027, that's support obligations into the **2040s**.

### 5. Reporting Never Ends
> Vulnerability handling stops with the support period, **reporting continues afterwards.**

### 6. Geographic Scope
> It doesn't matter where you live, it matters that you **sell to the EU**.

## Relevance to Smart Glasses

### If You Ship Firmware (OSAIG, MentraOS, etc.)
- The **Apache-2.0 license alone does NOT exempt you** if the software supports a commercial product
- If you sell glasses with your firmware in the EU:
  - You need a technical file
  - You need CE marking
  - You need vulnerability reporting pipeline
  - You need 10-year security update availability

### If You Use Open Source in a Commercial Product
- The exemption is **open source outside commercial activity**
- If you publish OSS to support a product you sell — **it's plainly commercial**
- This affects:
  - OSAIG (if selling kits commercially in EU)
  - MentraOS (if Mentra sells devices in EU)
  - Any custom firmware built on open-source components

## Implications for GLAIR's Architecture Decision

### The Tethered/USB-C Architecture Advantage
A glasses-as-I/O device (like M400C) where:
- The compute is in a **separate host device** (phone, pocket computer)
- The glasses are just a **DisplayPort + UVC peripheral**
- The host runs standard Android/iOS/Linux with its own CRA compliance path

...may simplify compliance because the glasses themselves have **no firmware to update**. The compliance burden falls on the host device (already handled by Samsung/Apple/Google).

### On-Glasses SoC Architecture Risk
- Full Android/Linux firmware on the glasses = **your firmware is the product**
- You are responsible for:
  - Security patches
  - Vulnerability disclosure
  - 10-year update availability
  - CE marking and technical documentation

## Action Items

1. **Read the Commission's guidance** (C(2026) 5252, ~80 pages, 67 worked examples for SMEs)
2. **Determine if your product is Annex III** (likely not for most smart glasses)
3. **Plan for 10-year update infrastructure** — even if you only sell once
4. **Document vulnerability handling process** before first sale
5. **Consider tethered architecture** as a compliance simplification strategy

## Sources
- Regulation: https://eur-lex.europa.eu/eli/reg/2024/2847/oj
- Commission Guidance (July 2026): https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation
- HN Ask HN discussion (2026-09-01): Author "dirkk0" detailed analysis
