# GLAIR — Smart-Glasses Research: Master Report (Passes 1 & 2)

**Date:** 2026-09-03  
**Scope:** Hardware / SDKs / OEMs / open & almost-open projects / supply chain / silicon / display modules / ODM layer  
**Status:** Leads from web research — verify against primary sources

---

## Executive Summary

### Pass 1 Finding (Revised)
> No single product has: camera + mic + speaker + near-eye display + USB-C data + wireless + continuous A/V streaming + deep programmatic control.

### Pass 2 Finding
> **The display is not the hard part any more. It's a part number.** Pre-aligned optical modules are buyable in sample quantities today. This reopens the on-glasses architecture as a genuine option.

### The Three Architectures (Industry Consensus)
1. **Tethered USB-C I/O** — fastest path to full control, standards-based, needs a cable
2. **On-glasses SoC+MCU** — what the industry converges on. SoC for bursts, MCU for always-on. Solves battery.
3. **On-glasses low-cost SoC** — W517 at ~$10 puts full Android with dual ISP in the frame for survivable BOM

### Key Numbers
- Silicon is **45% of BOM**
- AR1 Gen 1 ≈ **$60** (unverified)
- W517 ≈ **$10** (unverified)
- Micro-OLED panels: **$75–$125, MOQ 2 pieces**
- OSAIG kit: **~$100s**
- LILYGO T-Glass: **sub-$50**

---

## Table of Contents

1. [Market Structure](#market-structure)
2. [Silicon Menu](#silicon)
3. [Display & Optics Shopping List](#displays)
4. [Assignment 1 — Ranked Shortlist](#ranked)
5. [Foundations & Open Hardware](#foundations)
6. [New Project Finds](#new-finds)
7. [The ODM Layer](#odm-layer)
8. [Korea & Japan](#korea-japan)
9. [Priority Conversations](#priorities)
10. [Open Questions](#open-questions)
11. [Remaining Gaps (Pass 3 Targets)](#pass3)
12. [Bottom Line](#bottom-line)

---

## Market Structure: Three Tiers {#market-structure}

| Tier | Link | Examples | Limitation |
|------|------|----------|------------|
| **BLE Display** | BT LE, ~KB/s | Even G1/G2, Vuzix Z100, Brilliant Halo | Cannot stream video |
| **Wi-Fi Camera** | Wi-Fi + SoC | Mentra Live, Rokid, INMO, OSAIG | Battery 30-60 min; mostly no display |
| **USB-C Tethered** | DP Alt Mode + UVC | Vuzix M400C, XREAL, RayNeo Air | A cable; almost none have camera |

**Tethered = only way to get camera + display + high bandwidth + full control simultaneously.** But with pre-aligned optical modules now available, the on-glasses architecture is reopened.

---

## Silicon Menu {#silicon}

### Full SoCs
| Part | Vendor | Price | Class | In |
|------|--------|-------|-------|-----|
| Snapdragon AR1 Gen 1/+ | Qualcomm | ~$60? | Full Android | Ray-Ban, Rokid, Vuzix, Samsung |
| **Unisoc W517** | Unisoc | **~$10?** | 12nm dual-ISP Android | INMO Air2, 影目 X series |
| MTK8766 | MediaTek | — | Full Android | Mentra Live |

### Vision SoCs
| Part | Vendor | Spec | Platform |
|------|--------|------|----------|
| RV1106B | Rockchip | 0.5 TOPS INT8, 250mW@2MP | OSAIG |

### MCU-Class
| Part | Vendor | Class | In |
|------|--------|-------|-----|
| BES2800/2900/6000 | Bestechnic | MCU+ISP | Even G1, MYVU, Xiaomi, Alibaba |
| SSC309QL | SigmaStar | ISP companion | Looktech |
| ATS3085 | Actions | MCU+DSP | Halliday |
| STM32N6 | STMicro | MCU+NPU 0.6TOPS | Tecno |
| GAP9 | Greenwaves | RISC-V ML MCU | ETH OpenGlass |
| ESP32-S3 | Espressif | MCU | omiGlass, LILYGO T-Glass, OSSG |

**Three industry architectures:** Single SoC (highest, most expensive) → MCU-SoC+external ISP (near-AR1 quality, under ¥1000 BOM) → SoC+MCU (long-term winner for capability + battery).

---

## Display & Optics Shopping List {#displays}

### Pre-Integrated Modules (Least Engineering)
| Product | Maker | Spec | Price/Avail |
|---------|-------|------|--------------|
| **Raontech LCoS module** | Raontech (Korea) | FHD, 40°/50°, pre-aligned, no optical alignment | Contact: sales.raon@RAON.io |
| **DMGTX0068WUNA** | DisplayModule | Sony ECX343ENA 0.68", 1920×1200, 50° FOV | Samples immediate, bulk 3wk |
| **MICROOLED ActiveLook** | MICROOLED (France) | Full HUD subsystem, open BLE, Apache-2.0 SDK | Shipping in ENGO/Julbo/Cosmo |
| **Lingxi Aladdin Zero** | 灵犀微光 (Beijing) | Array waveguide ref solution | Contact for dev access |

### Panels & Engines
- **Micro-OLED:** $75–$125/module, MOQ 2. Suppliers: Sony (~65%), SeeYa, BOE, Kopin, eMagin, OLiGHTEK, MICROOLED
- **JBD microLED:** 0.35cc/0.6g/30° mono, 1.3cc/2.3g poly. Dev kits available.
- **LCoS:** Only Omnivision + Raontech currently supply for AR glasses

---

## Assignment 1 — Ranked Shortlist {#ranked}

### #1 — OSAIG
- Deepest developer access. Root Linux, zero-copy camera, RTSP, BLE, optional HUD.
- **254★, active, Apache-2.0**
- **Action:** Buy two kits immediately (~$100s)

### #2 — Vuzix (M400/M400C/Ultralite OEM)
- US company, real OEM. M400C = cleanest glasses-as-I/O device.
- **Action:** Priority convo #2 — ask OEM pricing, MOQ, NRE, waveguide at low volume

### #3 — Mentra
- Apache-2.0 OS, YC W25, cross-vendor. Camera + display split across two devices.
- MentraOS supports: Live, Mach1, Z100, Even G1
- **Action:** Priority convo #1 — camera+display on their platform? K900 with display?

### #4 — Brilliant Labs
- Most open commercial vendor. Full firmware + FPGA RTL.
- **42★** (Halo). Hard limit: BLE only.
- **Action:** Firmware/architecture reference, not whole device

### #5 — Rokid
- Snapdragon AR1 Gen 1. Ungated dev access, BYOA first-class.
- **Action:** App dev, not hardware control

### #6 — Qualcomm START + Thundercomm
- Turnkey AR1+ reference. Fastest "own glasses" path.
- **Action:** Priority convo #3 — NRE, MOQ, timeline

### #7 — INMO Air3
- Standalone, GMS, nice specs. Battery criticized, walled docs.
- **Action:** Not recommended for dev

### #8 — Enterprise Tier
- RealWear, DigiLens ARGO, Iristick (paid NDA, skip), ThirdEye
- **Action:** DigiLens notable for waveguides

### #9 — Meta / Android XR / Snap
- Best hardware, least control. Partner-gated or withdrawn.
- **Action:** Completeness only

---

## Foundations & Open Hardware {#foundations}

| Project | What's There | What's Missing | Action |
|---------|-------------|----------------|--------|
| **ETH OpenGlass** | Full hardware designs, GAP9, 11.5h ML/200mAh | Display, speaker, Wi-Fi, USB-C data | Priority convo #4 |
| **OSSG** | Gerbers, BOM, schematics, ESP32 firmware | Display never solved; team → Mentra | Read, don't build |
| **Vuzix Ultralite OEM** | Reference design via Quanta | Not open, license fee | Ask pricing |
| **Thundercomm AR1+** | Production-ready reference | Not open, NRE/MOQ unknown | Ask pricing |

---

## New Project Finds {#new-finds}

| Project | What It Is | Status | Action |
|---------|-----------|--------|--------|
| **PUSHI G1** | AI+AR on RV1106B, open SDK, Qwen/Doubao APIs | ⚠️ UNVERIFIED — single SEO reprint | Verify before spending time |
| **LILYGO T-Glass** | ESP32-S3 HUD dev platform, 1.1" AMOLED, $50 | Verified, buyable | Buy immediately for fast prototyping |

---

## The ODM Layer {#odm-layer}

**Key finding:** 6–8 mid-size PRD ODMs with R&D + manufacturing, actively courting brand partners.

| ODM | Specialization | Contact |
|-----|---------------|---------|
| **SmartXY** | 9 platforms, K900, 5k m² factory, 400k/yr | vanda@topaiglasses.com |
| **Antawei** | Own display-module + assembly + molding plants, ¥399–¥999 products | 鄢鹏飞 (Yan Pengfei) |
| **Goertek** | Meta's ODM | — |
| **Luxshare** | Alibaba Quark assembler | — |
| **Quanta** | Vuzix Ultralite, MICROOLED ref | — |

**BOM:** Mainboard + chip = 45%, ROM+RAM = 10%, sensors = 9.47%, assembly = 8.62%.

---

## Korea & Japan {#korea-japan}

| Company | Country | Role |
|---------|---------|------|
| **Raontech** | Korea | Most useful contact — all three microdisplay techs |
| **Sapien Semi** | Korea | Meta microLED backplane (H2 2027 roadmap) |
| **Samsung/LG** | Korea | OLED microdisplay ramping |
| **Sony** | Japan | ~65% micro-OLED market |

**Gap:** No Japanese ODM/platform leads found.

---

## Priority Conversations {#priorities}

1. **Mentra — Cayden Pierce / Alexander Israelov**
   - Only org spanning whole stack. Ask: camera+display device? K900 + display?

2. **Vuzix OEM — Rochester, NY**
   - Ask: Ultralite OEM pricing/MOQ/NRE, M400C licensing, waveguide at low volume

3. **Thundercomm — Ali Mesri, NA**
   - Ask: AR1+ reference inclusion, NRE, MOQ, timeline

4. **ETH Zürich PBL — Julian Moosmann / Michele Magno**
   - Ask: license terms, FPC interposer + display, industry collaborations

5. **Shenzhen Supply Chain Bets**
   - **OSAIG maintainer** — iam5tilllearning@foxmail.com (cheapest root-access hardware)
   - **SmartXY** — vanda@topaiglasses.com (possible K900 manufacturer)
   - **Raontech** — sales.raon@RAON.io (pre-aligned LCoS module, part number, MOQ)
   - **Lingxi** — Aladdin Zero reference (optics-side dev solution)
   - **Antawei** — Yan Pengfei (small-order-hungry ODM with vertical integration)

---

## Open Questions {#open-questions}

### From Pass 1 (Still Open)
1. OSAIG kit — ship to Louisiana? Cost? Display variant available?
2. Mentra Live = SmartXY XY-008 (K900)? Check FCC filing.
3. Brilliant Halo design files — what's actually on GitHub? License?
4. ETH OpenGlass license — commercial derivation permitted?
5. M400C — still in production? Works on Linux host with no Vuzix software?
6. USB-C data on camera+display glasses — anything besides M400C?
7. Vuzix Ultralite OEM / Thundercomm AR1+ / JBD / MICROOLED — pricing, MOQ, NRE

### From Pass 2 (New)
8. AR1 ≈ $60 / W517 ≈ $10 — second independent source?
9. PUSHI G1 — real product or marketing?
10. Raontech module — part number, price, prototype MOQ
11. DMGTX0068WUNA — real price, manufacturer vs. reseller
12. Antawei — real company, will talk to US customer at low volume
13. Lingxi Aladdin Zero — what included, who qualifies
14. BOM percentages — confirm against second source
15. FCC OET database — grantee name for Mentra Live

---

## Remaining Gaps (Pass 3 Targets) {#pass3}

- **1688.com / Taobao direct** — actual supplier layer under Alibaba English storefront
- **Patent / IP landscape** — who owns waveguide, LCoS, geometric-combiner patents
- **Japanese-language sources** — nothing found, not ruled out
- **Korean beyond TheElec** — single outlet is not coverage
- **Discords and forums** — Mentra, Brilliant, OSAIG, OSSG active Discords
- **GitLab, university lab pages, EU research projects** — only touched through arXiv
- **Direct vendor datasheets** — Rockchip RV1106B, Unisoc W517, BES2800

---

## Bottom Line {#bottom-line}

> **Buy the OSAIG kit and a LILYGO T-Glass** to have hardware in hand within weeks.
>
> **Send four emails** (Raontech, Lingxi, SmartXY, Antawei) asking the same three questions: what's the module/platform, what's the MOQ, what's the NRE.
>
> Those four replies will tell you more than another month of research.
>
> The display is no longer the blocker. The silicon choice is the 6× cost lever. The ODM layer is hungry for brand partners. The architecture is a genuine three-way choice, not a forced one.

---

*Individual project profiles in `/projects/` directory. Dashboard at https://verapexgh.github.io/glair-research/*
