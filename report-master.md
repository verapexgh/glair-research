# GLAIR — Smart-Glasses Research: Master Report (Passes 1–4)

**Date:** 2026-09-03  
**Scope:** Hardware / SDKs / OEMs / open & almost-open projects / supply chain / silicon / display modules / ODM layer / patent IP / regulatory / financial  
**Status:** Leads from web research — verify against primary sources

---

## Executive Summary

### Pass 1 Finding (Revised)
> No single product has: camera + mic + speaker + near-eye display + USB-C data + wireless + continuous A/V streaming + deep programmatic control.

### Pass 2 Finding
> **The display is not the hard part any more. It's a part number.** Pre-aligned optical modules are buyable in sample quantities today. This reopens the on-glasses architecture as a genuine option.

### Pass 3 Finding
> **The privacy backlash against camera-equipped smart glasses is escalating into legislation.** Norway may ban them. UK cinemas, pubs, theatres already have. Germany filed a criminal complaint. The EU Cyber Resilience Act applies to firmware products starting September 2026.

### Pass 4 Finding
> **The patent landscape is fragmented, not owned.** A dozen-plus assignees including universities. Litigation precedent exists. But buying a licensed module (Lumus→Quanta, Raontech, Vuzix, Lingxi) transfers the IP exposure to the supplier. Meanwhile, Vuzix is in financial distress ($6.6M quarterly burn, $17.3M cash, ~2–3 quarters runway), OSAIG runs on a vendor-forked 5.10 kernel with binary blobs that create EU CRA compliance risk, and real component prices are now confirmed (RV1106G3: $5.33–$21.59 at LCSC, also on Rutronik24).

### The Four Architectures (Industry + Regulatory Consensus)
1. **Tethered USB-C I/O** — fastest path to full control, standards-based, needs a cable, **no on-glasses firmware = EU CRA compliance advantage**
2. **On-glasses SoC+MCU** — industry convergence. SoC for bursts, MCU for always-on. Solves battery.
3. **On-glasses low-cost SoC** — W517 at ~$10 puts full Android with dual ISP in the frame
4. **Camera-free display-only** — sidesteps privacy backlash entirely (RayNeo iO, Mentra Mach1, Vuzix Z100, Brilliant Halo)

### Key Numbers
- Silicon is **45% of BOM**
- AR1 Gen 1 ≈ **$60** (unverified)
- W517 ≈ **$10** (unverified)
- **RV1106G3: $5.33–$21.59** (LCSC, confirmed)
- **RV1106G3 on Rutronik24** (Western distributor, confirmed)
- Micro-OLED panels: **$75–$125, MOQ 2 pieces**
- OSAIG kit: **~$100s**
- LILYGO T-Glass: **sub-$50**
- Vuzix cash: **$17.3M** at $6.6M/quarter burn = **~2–3 quarters runway**

---

## Table of Contents

1. [Market Structure](#market-structure)
2. [Silicon Menu](#silicon)
3. [Display & Optics Shopping List](#displays)
4. [Assignment 1 — Ranked Shortlist](#ranked)
5. [Foundations & Open Hardware](#foundations)
6. [New Project Finds — Pass 2](#new-finds)
7. [The ODM Layer](#odm-layer)
8. [Korea & Japan](#korea-japan)
9. [Pass 3: Web Research Finds](#pass3-finds)
10. [Pass 4: Patent, Kernel, Finance](#pass4-finds)
11. [Priority Conversations](#priorities)
12. [Open Questions](#open-questions)
13. [Remaining Gaps](#gaps)
14. [Bottom Line](#bottom-line)

---

## Market Structure: Three Tiers {#market-structure}

| Tier | Link | Examples | Limitation |
|------|------|----------|------------|
| **BLE Display** | BT LE, ~KB/s | Even G1/G2, Vuzix Z100, Brilliant Halo | Cannot stream video |
| **Wi-Fi Camera** | Wi-Fi + SoC | Mentra Live, Rokid, INMO, OSAIG | Battery 30-60 min; mostly no display |
| **USB-C Tethered** | DP Alt Mode + UVC | Vuzix M400C, XREAL, RayNeo Air | A cable; almost none have camera |

**Tethered = only way to get camera + display + high bandwidth + full control simultaneously.** But with pre-aligned optical modules now available, the on-glasses architecture is reopened. And tethered has a **EU CRA compliance advantage**: no on-glasses firmware means the host device handles the 10-year update burden.

---

## Silicon Menu {#silicon}

### Full SoCs
| Part | Vendor | Price | Class | In |
|------|--------|-------|-------|-----|
| Snapdragon AR1 Gen 1/+ | Qualcomm | ~$60? | Full Android | Ray-Ban, Rokid, Vuzix, Samsung |
| **Unisoc W517** | Unisoc | **~$10?** | 12nm dual-ISP Android | INMO Air2, 影目 X series |
| MTK8766 | MediaTek | — | Full Android | Mentra Live |

### Vision SoCs
| Part | Vendor | Spec | Price (Confirmed) |
|------|--------|------|-------------------|
| **Rockchip RV1106G2** | Rockchip | 0.5 TOPS, Cortex-A7 | **$9.48–$11.35** (LCSC C5272606, 751 stock) |
| **Rockchip RV1106G3** | Rockchip | 1.0 TOPS NPU, ISP3.2 8MP@15fps, 256MB DDR3L integrated | **$5.33–$21.59 tiered** (LCSC C5328706, 1,388 stock) |
| **Rockchip RV1106G3** | Rockchip | Same | Listed on **Rutronik24** (EU distributor) |

### MCU-Class
| Part | Vendor | Class | In |
|------|--------|-------|-----|
| BES2800/2900/6000 | Bestechnic | MCU+ISP | Even G1, MYVU, Xiaomi, Alibaba |
| SSC309QL | SigmaStar | ISP companion | Looktech |
| ATS3085 | Actions | MCU+DSP | Halliday |
| STM32N6 | STMicro | MCU+NPU 0.6TOPS | Tecno |
| GAP9 | Greenwaves | RISC-V ML MCU | ETH OpenGlass |
| ESP32-S3 | Espressif | MCU | omiGlass, LILYGO T-Glass, OSSG |

**Western distribution:** Rockchip ✅ (LCSC, Rutronik24). Unisoc ❌ (no open Western dist found). Bestechnic ❌ (no open Western dist found).

**Export control:** Rockchip prohibits RV1106 shipments to Russia, Belarus, Cuba, Iran, North Korea, Syria, Crimea, Donetsk/Luhansk.

---

## Display & Optics Shopping List {#displays}

### Pre-Integrated Modules
| Product | Maker | Spec | Price/Avail |
|---------|-------|------|--------------|
| **Raontech LCoS** | Raontech (Korea) | FHD, 40°/50°, pre-aligned, no optical alignment | Contact: sales.raon@RAON.io |
| **Raontech P13** | Raontech | 0.13", 800×800 single-panel, sub-1cm³, fits in temple | In discussions with Meta? |
| **DMGTX0068WUNA** | DisplayModule | Sony ECX343ENA 0.68", 1920×1200, 50° FOV | Samples immediate, bulk 3wk |
| **MICROOLED ActiveLook** | MICROOLED (France) | Full HUD subsystem, open BLE, Apache-2.0 SDK | Shipping in ENGO/Julbo/Cosmo |
| **Lingxi Aladdin Zero** | 灵犀微光 | Array waveguide ref solution | Contact for dev access |
| **Lumus Z-30 2.0 / A-Lens 30/50** | Lumus→Quanta | Geometric waveguide, ~half weight/thickness | Licensed to Quanta (1 Sep 2026) |

### Panels & Engines
- **Micro-OLED:** $75–$125/module, MOQ 2. Sony (~65%), SeeYa, BOE, Kopin, eMagin, OLiGHTEK, MICROOLED
- **JBD microLED:** 0.35cc/0.6g/30° mono, 1.3cc/2.3g poly. Dev kits. Roadrunner II H2 2026.
- **LCoS:** Only Omnivision + Raontech supply for AR glasses. Meta Ray-Ban uses Lumus/Schott.

**IP transfer:** Buying a module from a licensed supplier (Lumus→Quanta, Raontech, Vuzix, Lingxi) **transfers optics patent exposure to the supplier.** Designing your own combiner keeps it. See `29-patent-ip-landscape.md`.

---

## Assignment 1 — Ranked Shortlist {#ranked}

### #1 — OSAIG
- Deepest developer access. Root Linux, zero-copy camera, RTSP, BLE, optional HUD.
- **254★, active, Apache-2.0**
- ⚠️ **Pass 4 risk:** Vendor-forked kernel 5.10 with binary ISP/NPU blobs. Not mainline. EU CRA 10-year support problem. **Prototype only, not product commitment.**
- Real prices: RV1106G2 $9.48–$11.35, RV1106G3 $5.33–$21.59 (LCSC). Also on Rutronik24.

### #2 — Vuzix (M400/M400C/Ultralite OEM)
- US company, real OEM. M400C = cleanest glasses-as-I/O device.
- ⚠️ **Pass 4 risk:** Financial distress. $7.7M net loss, $6.6M quarterly burn, $17.3M cash = ~2–3 quarters runway. 10-Q carries going-concern language.
- **Talk to them — but with terms.** Engineering services is their growth line (36–47% YoY). Don't sole-source. Ask about Quanta milestone closings.

### #3 — Mentra
- Apache-2.0 OS, YC W25, cross-vendor. Camera + display split across two devices.
- MentraOS supports: Live, Mach1, Z100, Even G1

### #4 — Brilliant Labs
- Most open commercial vendor. Full firmware + FPGA RTL.
- **42★** (Halo). Hard limit: BLE only.

### #5 — Rokid
- Snapdragon AR1 Gen 1. Ungated dev access, BYOA first-class.
- **Pass 4 addition:** Nexus plugin ecosystem with R08 ring input device.

### #6 — Qualcomm START + Thundercomm
- Turnkey AR1+ reference. Fastest "own glasses" path.

### #7 — INMO Air3
- Standalone, GMS, nice specs. Battery criticized, walled docs.

### #8 — Enterprise Tier
- RealWear, DigiLens ARGO, Iristick (paid NDA, skip), ThirdEye

### #9 — Meta / Android XR / Snap
- Best hardware, least control. Partner-gated or withdrawn. Privacy backlash escalating.

---

## Foundations & Open Hardware {#foundations}

| Project | What's There | What's Missing | Action |
|---------|-------------|----------------|--------|
| **ETH OpenGlass** | Full hardware designs, GAP9, 11.5h ML/200mAh | Display, speaker, Wi-Fi, USB-C data | Priority convo #4 |
| **OSSG** | Gerbers, BOM, schematics, ESP32 firmware | Display never solved; team → Mentra | Read, don't build |
| **Vuzix Ultralite OEM** | Reference design via Quanta | Not open, license fee. ⚠️ Vuzix financial distress | Ask pricing; structure with terms |
| **Thundercomm AR1+** | Production-ready reference | Not open, NRE/MOQ unknown | Ask pricing |

---

## New Project Finds — Pass 2 {#new-finds}

| Project | What It Is | Status | Action |
|---------|-----------|--------|--------|
| **PUSHI G1** | AI+AR on RV1106B, open SDK, Qwen/Doubao APIs | ⚠️ UNVERIFIED — single SEO reprint | Verify before spending time |
| **LILYGO T-Glass** | ESP32-S3 HUD dev platform, 1.1" AMOLED, $50 | Verified, buyable. Pass 4: BHI260AP ML coprocessor = gesture on IMU | Buy immediately for fast prototyping |

---

## The ODM Layer {#odm-layer}

| ODM | Specialization | Contact |
|-----|---------------|---------|
| **SmartXY** | 9 platforms, K900, 5k m² factory, 400k/yr | vanda@topaiglasses.com |
| **Antawei** | Own display-module + assembly + molding plants, ¥399–¥999 products | 鄢鹏飞 (Yan Pengfei) |
| **Goertek** | Meta's ODM | — |
| **Luxshare** | Alibaba Quark assembler | — |
| **Quanta** | Vuzix Ultralite, MICROOLED ref, Lumus licensee | ~$68B FY2025 revenue |

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

## Pass 3: Web Research Finds {#pass3-finds}

### HumanHUD (humanhud.ai)
- Personal data HUD web app for smart glasses — health, wealth, steps, portfolio
- Live on Meta Ray-Ban Display and browser; iOS/Android/Snap/Android XR coming
- Pricing: Free (Glance) / $20/mo (Focus, Plaid sync) / $100/mo (Augment)
- Proof of demand for HUD-style personal data on smart glasses

### RayNeo Innovator Program & iO
- RayNeo iO — "AI Smart Glasses with Invisible Display," no camera — coming soon
- RayNeo Air 4 Pro — $299, HDR10, shipping now
- Developer portal: open.rayneo.com · Discord available

### Meta Smart Glasses — Privacy Backlash
- September 2026: Norway considering first country to ban smart glasses entirely
- August 2026: UK cinemas/pubs/restaurants/theatres banning; Germany criminal complaint
- "Pervert glasses" backlash — 185-point HN thread (276 comments)
- Meta's own scandal: private Ray-Ban footage sent to Kenya workers for AI training

### EU Cyber Resilience Act (CRA)
- Reporting duties: September 2026 (active now) · Full compliance: December 2027
- Treats software/firmware = hardware for cybersecurity compliance in EU
- 10-year rule: every security update must stay available for 10 years after issue
- Apache-2.0 does NOT exempt if software supports a commercial product
- Tethered architecture advantage: glasses-as-I/O shifts compliance to host device

### DuckDuckGo "Anti-Surveillance" Glasses
- Real sunglasses, no camera/AI/electronics, $35 (vs. Meta's $299)
- Satirical marketing responding to genuine consumer anxiety
- Market signal: privacy concern is mainstream; camera-free positioning is viable

---

## Pass 4: Claude Additions — Patent, Kernel, Finance {#pass4-finds}

### Patent & IP Landscape (Was a Blank Page)
- **PatentVest report (27 Aug 2026):** Meta ~1,900 families, Apple ~1,550, Samsung ~550, EssilorLuxottica ~530, Microsoft 409. Apple and Microsoft hold strongest AI-capability patents despite shipping nothing.
- **Optics IP fragmented across 12+ assignees** including Microsoft, Magic Leap, Huawei, Meta, Goertek, Coretronic, Tampere University, Fuzhou University, Suzhou University. No single gatekeeper.
- **Litigation precedent:** Percept Technologies v. Magic Leap — small-entity plaintiffs do sue.
- **Meta facial-recognition filing (US 2026/0238876 A1):** filed Feb 2026, published Aug 2026. Facial recognition, expression analysis, gaze tracking, "interestingness" ranking. WIRED found unreleased "NameTag" system inside Meta AI app (June 2026). Any camera glasses will be read against Meta's filings.
- **Lumus→Quanta licence (1 Sep 2026):** Quanta to manufacture Z-30 2.0, A-Lens 30, A-Lens 50. A-Lens = ~half weight/thickness. Buying a licensed module transfers IP exposure to the supplier.

### OSAIG Kernel Risk
- **RV1106 is NOT in mainline Linux.** Vendor-forked 5.10.110/5.10.160 kernel. U-Boot v2017.11.
- ISP (camera_engine_rkaiq) and NPU ship as **binary blobs.**
- Independent mainline effort has 6.18.x booting but "No drivers or SoC function have been integrated yet."
- **EU CRA problem:** 10-year security update commitment on a vendor-forked kernel with binary blobs, from a chip vendor that hasn't opened hardware docs. Structural blocker for EU market.
- **Verdict updated:** Buy kits for prototyping. Do not commit to product without mainlining path or vendor long-term support guarantee.

### Vuzix Financial Distress
- Q2 2026: revenue $1.1M (-14%), net loss $7.7M, operating burn $6.6M, cash $17.3M
- Q1 2026: gross margin negative ($0.38M gross loss)
- 10-Q carries going-concern language. Accumulated deficit $406.97M.
- Quanta's $20M investment is staged, milestone-dependent.
- **~2–3 quarters runway** absent further raises.
- Engineering services grew 36–47% YoY — their growth business. Talk to them, but with terms. Don't sole-source. Ask about Quanta closings.

### XREAL One Pro Eye Camera
- Community drove gesture cursor on Samsung DeX from glasses' own camera with "no proprietary blobs"
- Another data point for community reverse-engineering preserving access

### Odak Toolkit
- Open-source computational display and holography toolkit (CGH, perceptual graphics, lensless cameras)
- Starting point if near-eye display design ever becomes in-house work

---

## Priority Conversations {#priorities}

1. **Mentra — Cayden Pierce / Alexander Israelov** — Only org spanning whole stack. Camera+display device? K900 + display?
2. **Vuzix OEM — Rochester, NY** — Priority #2 with terms. Ultralite OEM pricing/MOQ/NRE, M400C licensing, waveguide at low volume, **Quanta milestone closings**
3. **Thundercomm — Ali Mesri, NA** — AR1+ reference, NRE, MOQ, timeline
4. **ETH Zürich PBL — Julian Moosmann / Michele Magno** — License terms, FPC interposer + display, industry collaborations
5. **SmartXY (vanda@topaiglasses.com)** — K900/OEM, possible Mentra Live manufacturer
6. **Antawei (鄢鹏飞 / Yan Pengfei)** — Small-order-hungry ODM with vertical integration. ¥399–¥999 shipping, 13MP ~¥999 planned.
7. **Raontech (sales.raon@RAON.io)** — Pre-aligned LCoS, P13 sub-1cm³ engine, part number, price, prototype MOQ
8. **Lingxi AR / 灵犀微光** — Aladdin Zero reference, what included, who qualifies
9. **HumanHUD / revanthmatha** — Building embedded AI on smart glasses (humanhud.ai)
10. **RayNeo Innovator Program** — open.rayneo.com, SDK depth, iO specs

---

## Open Questions {#open-questions}

### From Pass 1–2
1. OSAIG kit — ship to Louisiana? Cost? Display variant available?
2. Mentra Live = SmartXY XY-008 (K900)? Check FCC filing.
3. Brilliant Halo design files — what's actually on GitHub? License?
4. ETH OpenGlass license — commercial derivation permitted?
5. M400C — still in production? Works on Linux host with no Vuzix software?
6. USB-C data on camera+display glasses — anything besides M400C?
7. Vuzix Ultralite OEM / Thundercomm AR1+ / JBD / MICROOLED — pricing, MOQ, NRE
8. AR1 ≈ $60 / W517 ≈ $10 — second independent source?
9. PUSHI G1 — real product or marketing?
10. Raontech module — part number, price, prototype MOQ
11. DMGTX0068WUNA — real price, manufacturer vs. reseller
12. Antawei — real company, will talk to US customer at low volume
13. Lingxi Aladdin Zero — what included, who qualifies
14. BOM percentages — confirm against second source
15. FCC OET database — grantee name for Mentra Live

### From Pass 3
16. HumanHUD — on-device AI (Taalas API) or cloud-only?
17. RayNeo iO — specs, price, release date, developer access depth
18. RayNeo Innovator Program — what SDK/API does it expose?
19. Norway smart glasses ban — status, scope, timeline
20. EU CRA — does it apply to OSAIG kits shipped to EU? To Mentra Live?
21. UK/EU venue bans — all camera glasses or just Meta?

### From Pass 4
22. Which exact RV1106 variant does OSAIG ship? (B-series may be further along mainlining)
23. Vuzix — confirm Quanta milestone closings status from 10-Q or earnings call
24. Lumus/Quanta licence — does it include downstream IP indemnity?
25. Patent FTO — scope and budget for attorney opinion on chosen optics module
26. XREAL One Pro — what camera protocol? (UVC? Custom?) Linux-accessible?
27. Odak — exact repo URL, license, near-eye display examples?

---

## Remaining Gaps {#gaps}

- **1688 and Taobao direct** — still the biggest unpriced layer
- **The Discords** — OSAIG, Brilliant, Mentra, TOSG. Still the highest-signal source nobody has opened
- **A real FTO opinion** — what's above is a landscape sketch, not a clearance. Patent attorney, before hardware spend.
- **FCC grantee lookup on Mentra Live** — needs direct FCC OET database query
- **Japanese sources** — still zero
- **Bestechnic and Unisoc procurement** — no open Western distribution. Verified: only come with solution house attached.

---

## Bottom Line {#bottom-line}

> **Buy the OSAIG kit and a LILYGO T-Glass** to have hardware in hand within weeks — but treat OSAIG as **prototyping only**, not a product path, due to vendor-forked kernel + binary blobs + EU CRA risk.
>
> **Send four emails** (Raontech, Lingxi, SmartXY, Antawei) asking: what's the module/platform, what's the MOQ, what's the NRE. Those four replies will tell you more than another month of research.
>
> **Talk to Vuzix early** — engineering services is their growth line and they'll engage enthusiastically. But structure the relationship so their ~2–3 quarter runway doesn't strand your product. Ask about Quanta closings. Don't sole-source.
>
> **The display is no longer the blocker.** The silicon choice is the 6× cost lever. The patent landscape is fragmented but manageable if you buy licensed modules. The ODM layer is hungry for brand partners. The architecture is a genuine four-way choice. And **privacy-by-design is becoming a market-access requirement**, not a nice-to-have.

---

*28 project profiles. 27 open questions. 4 research passes. Dashboard: https://verapexgh.github.io/glair-research/*
