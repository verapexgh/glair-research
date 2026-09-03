# GLAIR — Smart-Glasses Research, Pass 2
**Date:** 2026-09-03 · **Reads on top of v1, doesn't replace it**

Pass 1 was English-language and Western-indexed. This pass went at the sources I skipped: Chinese-language trade press and chip-industry coverage, the Shenzhen solution/ODM layer, Korean display press, FCC, Hackaday/Hackster, and the academic literature review.

**Same sourcing rule as v1 — leads, not facts.** Chinese trade press in particular runs a lot of vendor-supplied copy and SEO reprints; the marked items are flagged. **[UNKNOWN]** means nobody publishes it and the contact is named.

---

## 1. What pass 2 changed

Three things, and one of them changes the plan.

**A. The display is not the hard part any more. It's a part number.**
Pass 1 treated near-eye display as the subsystem you'd have to solve or license. That's out of date. You can buy, in sample quantities, today:
- a **pre-aligned LCoS optical module + driver processor** from Raontech that explicitly removes the optical-alignment step — "vendors don't need to do optical alignment, they can start developing AR glasses around the module right away," FHD at 40° or 50° FOV
- an **integrated Sony micro-OLED + waveguide module** off a catalogue site: Sony ECX343ENA 0.68", 1920×1200, 50° diagonal, >80% transmittance, 0–700 nits adjustable, **samples ship immediately, bulk lead time 3 weeks**
- bare micro-OLED panels at **$75–$125 per module, MOQ 2 pieces**
- **JBD** monochrome and polychrome microLED optical-module dev kits (module + control board + USB adapter)
- **MICROOLED ActiveLook** — a whole HUD subsystem driven over a free, documented, open BLE interface

This kills the main argument for the tethered architecture. In v1 I said tethered was the only way to get camera + display + bandwidth + control together, largely because display was locked up. It's not locked up. **Reopen the on-glasses architecture as a real option.**

**B. There is a whole supply-chain tier I didn't know existed, and it's shopping for partners.**
Chinese trade press reports roughly **6–8 mid-size ODMs in the Pearl River Delta** with genuine R&D *and* manufacturing capability for AI glasses, and they are actively courting brands to "run alongside" them (陪跑). One is named below with an executive's name. This is a materially different proposition from Vuzix or Thundercomm: smaller, hungrier, cheaper, and willing to co-develop.

**C. Silicon choice is a 6× cost lever, and almost nobody in English coverage says so.**
Qualcomm AR1 Gen 1 is reported at roughly **$60**. Unisoc W517 at roughly **$10** — for a 12nm quad-core (1×A75@2.0 + 3×A55@1.8), Android 11, dual ISP, 4GB/64GB-class part that already ships in INMO's AR glasses. Mainboard + chip is ~**45% of the BOM**. Picking the wrong tier of silicon is the single most expensive decision in the project.

---

## 2. The supply chain, in tiers

English coverage sees tier 4 and occasionally tier 3. The leverage is in tiers 1–2.

| Tier | Who | What they sell you |
|---|---|---|
| **1. Silicon** | Qualcomm, MediaTek, Unisoc, Rockchip, Bestechnic, SigmaStar, Actions, Espressif, ST, Anyka | Chips + BSP + reference schematics |
| **2. Modules / optics** | Raontech, MICROOLED, JBD, Sony, SeeYa, BOE, Kopin, Lochn, Lingxi, Dispelix, Vuzix, Lumus/Schott | Light engines, waveguides, pre-aligned optical modules, dev kits |
| **3. Solution houses & ODMs** | SmartXY, Antawei, Thundercomm, Quanta, Goertek, Luxshare, + 6–8 PRD mid-size ODMs | Mainboard/PCBA, whole-device design, certification, manufacturing |
| **4. Brands** | Meta, Rokid, RayNeo, INMO, Even, Mentra, Vuzix, Xiaomi, Alibaba | A finished product and an SDK |

**Published BOM breakdown for a typical AI-glasses build** (Chinese trade source, treat as indicative):
mainboard + chip **45%** · ROM+RAM **10%** · structural parts **9.71%** · sensors incl. camera **9.47%** · OEM assembly **8.62%** · power module **5%** · acoustics **3.16%** · other **9.04%**.

---

## 3. Silicon — the actual menu

| Part | Vendor | Class | Notes |
|---|---|---|---|
| **Snapdragon AR1 Gen 1 / AR1+** | Qualcomm | Full SoC | ~$60. In Ray-Ban Meta, Rokid, Vuzix Ultralite Pro, Samsung Galaxy Glasses. Highest capability, highest cost and weight |
| **Unisoc W517** | Unisoc (紫光展锐) | Full SoC | ~$10. 12nm, 1×A75@2.0 + 3×A55@1.8, IMG8300 GPU, **dual ISP**, Android 11, 13MP + 1080p30, Wi-Fi 5 / BT 5.0. 3D SiP + ePoP packaging cut board area 40% — enabled a 6 mm temple in INMO Air2. **Unisoc and INMO jointly launched an "AI glasses open platform" (影目 X series)** aimed at sub-¥1000 products |
| **MTK8766** | MediaTek | Full SoC | What's inside Mentra Live |
| **RV1106B** | Rockchip | Vision SoC | Single Cortex-A7 + 4th-gen NPU: **0.5 TOPS INT8 / 1.0 TOPS INT4**. 5MP30 video, 12MP stills, HDR, EIS, multi-frame NR. **250 mW at 2MP video, 2 mW standby.** The chip under OSAIG. Rockchip demoed its own RV1106B glasses at CES |
| **BES2800 / 2900 / 6000** | Bestechnic (恒玄) | MCU-class | The default for display-only and audio glasses. In Even G1, Meizu MYVU, Xiaomi AI Glasses (paired with AR1), Alibaba Quark, Li Auto Lavis. **2900 adds an integrated ISP; 6000 series samples H1 2026** |
| **SSC309QL** | SigmaStar (星宸) | ISP companion | Built for AI glasses, 12MP. In Looktech |
| **ATS3085** | Actions (炬芯) | MCU+DSP | Single chip drives display + health algorithms + BT calling. In Halliday |
| **STM32N6** | STMicro | MCU+NPU | 0.6 TOPS. In Tecno's AI glasses |
| **GAP9** | Greenwaves | RISC-V ML MCU | Open PULP platform. The ETH OpenGlass brain |
| **ESP32-S3** | Espressif | MCU | omiGlass/OpenGlass, LILYGO T-Glass, OSSG lineage |
| **Anyka (安凯微), Broadcom** | — | — | Used by the low-cost ODM tier (Antawei's ¥399 and ¥999 products) |

**Three architectures the Chinese industry actually uses**, which is a cleaner framing than anything in English coverage:
1. **Single SoC** — AR1, W517. Most capable, most power and cost.
2. **MCU-SoC + external ISP** — e.g. BES2800 + a dedicated ISP. Reported to get close to AR1 image quality at a fraction of the chip cost, keeping total BOM under ¥1000.
3. **SoC + MCU** — AR1 for heavy work, BES2700/2800 for always-on low-power. What Xiaomi is reported to use. Industry consensus in that coverage is that **SoC+MCU is the likely long-term winner**, because it's the only way to get both capability and battery life.

That third point is the answer to the battery problem I flagged in v1 (30–60 min under continuous camera). It's an architecture problem, and the industry already has the fix.

---

## 4. Display and optics — now a shopping list

### Pre-integrated modules (least engineering)
- **Raontech** (Seongnam, Korea) — fabless, and the only company that has commercialised **all three** microdisplay technologies (LCoS, micro-OLED, microLED). Ships a worldwide **LCoS optical module + controller** comprising light engine and waveguide, **pre-assembled so no optical alignment is required**, FHD at 40°/50°, with distortion correction and low-latency algorithms in the processor. New **P13**: 0.13" LCoS, 6.25 × 4.65 mm, 3 µm pixel, 800×800 full colour from a **single panel** (no X-cube), enabling a **sub-1 cm³ light engine that fits inside a temple**. Reported to be in discussions with Meta for entry-level AR glasses. **Contact: sales.raon@RAON.io** — they explicitly invite private meetings
- **DisplayModule catalogue part DMGTX0068WUNA** — Sony ECX343ENA 0.68" micro-OLED + optical engine + array waveguide, 1920×1200, 50° diagonal (H 42.4 / V 26.5), 0–700 nits, >80% transmittance, 100,000:1. **Samples immediate, bulk 3 weeks.** Price [UNKNOWN] on the page
- **MICROOLED ActiveLook** (Grenoble) — complete HUD subsystem; open BLE control interface; Apache-2.0 SDKs; reference design with **Quanta + STMicroelectronics**. Shipping in ENGO, Julbo, Cosmo eyewear
- **Lingxi AR / 灵犀微光** (Beijing, est. 2014) — array waveguide modules AW60/AW70/AW80 in mass production, plus **2D-40** (8 g, 40° FOV, 25 mm eyebox, side-injection coupling designed for glasses form factors) and **2D-60** (60° FOV). Critically, they publish an **"Aladdin Zero" reference machine and an "Aladdin Developer Reference Solution"** explicitly built to connect them to AR-glasses solution houses and ODMs. That is a reference design from the optics side

### Panels and engines
- **Micro-OLED panels: $75–$125, MOQ 2 pieces.** Suppliers: Sony (~65% share), SeeYa, BOE, Kopin, eMagin (acquired by Samsung 2023), OLiGHTEK, MICROOLED
- **JBD (Shanghai)** — microLED. Monochrome AmµLED projector: **0.35 cc, 0.6 g, 30° FOV**, R/G/B. Polychrome: 1.3–1.5 cc, 2.3 g. Dev kits available for both. Roadrunner II on a 2.5 µm platform, phased rollout H2 2026; moving to 12-inch wafers. Reference designs jointly with **Dispelix**
- **LCoS supply is thin** — Raontech's CEO says only **Omnivision and Raontech** currently supply LCoS for AR glasses. Meta's Ray-Ban Display uses LCoS with a **Lumus-developed geometric reflective waveguide made by Schott** (confirmed by the iFixit teardown)
- **Chinese waveguide makers**, all reachable: **Lochn Optics / 珑璟光电** (Shenzhen, 16,400 m², described as the only domestic AR waveguide module line with stable delivery capability), **Zhige / 至格科技**, **Crystal Optech / 水晶光电**, **Sunny Optical / 舜宇**, **Lianchuang / 联创电子** (customers include Magic Leap), **Optiark / 奥提赞光晶**, **Lipai / 理湃光晶** (LCoS engine, 1280×720)
- **Dead end noted:** WaveOptics developer kits are discontinued (company absorbed by Snap); only resale units exist

---

## 5. The ODM layer, with names

- **SmartXY / 深圳信瑜** (topaiglasses.com) — from v1. Nine OEM/ODM platforms incl. **XY-008 (K900)**; Bao'an HQ, own factory since Dec 2025; Dongguan base 5,000 m², 8 lines, 400k units/yr. **OEM 1–3 months, ODM 6–9 months.** Contact **vanda@topaiglasses.com**
- **Antawei / 安塔威** — a mid-size ODM with unusually deep vertical integration: its **own wearable OLED display-module plant in Dongguan**, a **finished-device assembly plant in Huizhou**, and an equity stake in an injection-moulding plant. Shipping ¥399 (Broadcom silicon) and ¥599 AI glasses; planning a **13 MP livestreaming camera glasses at ~¥999** on Anyka silicon. Executive quoted in the trade press: **鄢鹏飞 (Yan Pengfei)**. This is the profile of a partner who would actually take a small first order
- **The opening:** the same reporting says ~**6–8 PRD ODMs** have real AI-glasses R&D and manufacturing capability, that they're all hunting for brand partners, and that the market has a **gap between the ¥100 white-label tier and the ¥1500+ tier** that they're trying to fill at ~¥999. A US brand with a defined application walking in with a spec is exactly what they're looking for
- **Tier-1s, for reference:** Goertek (Meta's ODM), Luxshare (assembles Alibaba's Quark glasses; camera module from Cowell), Quanta (Vuzix Ultralite, MICROOLED reference design)

---

## 6. New project finds

**PUSHI G1** — an AI+AR glasses **solution** built on RV1106B, marketed as open, with an **open video-streaming and audio SDK**, compatible with mainstream streaming protocols and multimodal model APIs (Alibaba Qwen, ByteDance Doubao), claimed to be deployed with Tencent/Alibaba Cloud across 18 scenarios. ⚠️ **Single low-quality source (an SEO reprint site). Could be significant or could be vendor marketing. Verify before spending any time on it.**

**LILYGO T-Glass** — a cheap, buyable ESP32-S3 HUD dev platform: ESP32-S3 FN4R2, 2 MB PSRAM / 4 MB flash, **1.1" AMOLED 294×126 behind a prism** (126×126 visible), **Bosch BHI260AP 6-axis IMU with ML coprocessor**. Not a product, but the fastest possible way to have something on your face displaying your own text this month.

**Academic confirmation of v1's conclusion.** The ETH OpenGlass paper does its own literature review of open-hardware glasses platforms and Table I lists essentially two: **Brilliant Labs Frame** (public schematics, mechanical designs, firmware; FPGA + Cortex-M4) and **OSSG** (Cortex-M4 + BLE + IMU). Independent confirmation that the open-hardware universe is as small as I said.

---

## 7. Korea and Japan

- **Raontech** — covered above. The most commercially useful Korean contact in this whole file
- **Sapien Semiconductor** (Korea) — confirmed to supply the pixel-driver backplane for Meta's **microLED AR glasses targeted at H2 2027 mass production**; negotiating foundry with GlobalFoundries. Tells you where the roadmap goes, not something you can buy
- **Samsung** — owns eMagin since 2023; gearing up OLED microdisplay production. **LG** likewise
- **Sony** — ~65% of the micro-OLED microdisplay market; ECX-series panels are the default in the birdbath/waveguide tier and are buyable through distributors and module houses rather than direct
- **Japan** — I found no Japanese-language ODM or platform lead worth listing. Either it isn't there or my queries were wrong. Calling it a remaining gap rather than a negative finding

---

## 8. Revised bottom line

Pass 1 said: prototype on OSAIG, design as glasses-as-I/O with pocket compute, take it to Vuzix or Thundercomm.

Pass 2 revises the middle and the end of that:

**The architecture is now a genuine three-way choice, not a forced one.**
1. **Tethered USB-C I/O** — still the fastest path to full control, still standards-based, still needs a cable
2. **On-glasses SoC+MCU** — what the industry is converging on. A capable SoC for bursts, an MCU for always-on. Solves the battery problem that made on-glasses look unworkable in v1
3. **On-glasses low-cost SoC** — W517 at ~$10 puts a full Android device with dual ISP in the frame for BOM that a small company can survive

**And the partner list changes shape.** Vuzix and Thundercomm are the safe, expensive, Western-facing options. But a US brand with a defined application, walking into a PRD ODM that already has its own display-module plant and is openly looking for brand partners, buying a pre-aligned Raontech or Lingxi optical module and a $10–60 SoC — that is a materially cheaper path to a real product, and it did not appear anywhere in pass 1.

**What I would now do:** buy the OSAIG kit and a LILYGO T-Glass to have hardware in hand within weeks; in parallel send four emails (Raontech, Lingxi, SmartXY, Antawei) that each ask the same three questions — what's the module/platform, what's the MOQ, what's the NRE. Those four replies will tell you more than another month of research.

---

## 9. Verification list for Bernice (v2 additions)

Carried over from v1 and still open, plus:

1. **FCC** — search the FCC OET database directly for grantee "Mentra" and for the Mentra Live model. The grantee name on that filing settles whether SmartXY is the ODM. My web searches surfaced only unrelated Shenzhen glasses filings
2. **AR1 ≈ $60 / W517 ≈ $10** — single Chinese trade source, repeated across reprints of the same article. Needs a second independent source before it drives a decision
3. **PUSHI G1** — does this exist as a real product with a real company behind it, or is it content marketing?
4. **Raontech module** — get an actual part number, price, MOQ and lead time. Ask specifically whether the pre-aligned module can be bought at prototype quantity
5. **DMGTX0068WUNA** — real price, and whether the seller is a manufacturer or a reseller
6. **Antawei** — real company registration, capability, and whether they'll talk to a US customer at low volume
7. **Lingxi Aladdin Zero** — what the reference solution actually includes and who qualifies for it
8. **BOM percentages** — indicative only; confirm against a second source before using them in any costing

---

## 10. What is *still* not searched (so pass 3 has a target list)

Being straight about the remaining holes:

- **1688.com and Taobao direct** — the actual supplier layer under Alibaba's English storefront, with real prices. Needs someone who can navigate it (and possibly an agent account)
- **Patent and IP landscape** — nothing done. Who owns the waveguide, LCoS and geometric-combiner patents, and what a US product would be exposed to. This is a real commercial risk and it is currently a blank page
- **Japanese-language sources** — nothing found, nothing ruled out
- **Korean beyond TheElec** — one outlet is not coverage
- **Discords and forums** — Mentra, Brilliant Labs, OSAIG and TeamOpenSmartGlasses all run active Discords. That is where the honest answers about what actually works live, and it can't be searched from outside
- **GitLab, university lab pages, EU research projects** — only touched through arXiv
- **Direct vendor doc trawls** — Rockchip RV1106B datasheet and reference schematics, Unisoc W517 platform docs, BES2800 datasheet. These are the primary sources under everything in §3
