# Silicon Menu — The 6× Cost Lever

**Date:** 2026-09-03  
**Source:** GLAIR Pass 2 — Chinese trade press, treat as indicative  
**Note:** Mainboard + chip = ~**45% of BOM**. Picking the wrong tier is the single most expensive decision.

---

## Full SoCs (Highest Capability, Highest Cost)

### Snapdragon AR1 Gen 1 / AR1+
- **Vendor:** Qualcomm
- **Price:** ~$60 (single Chinese trade source — needs confirmation)
- **In:** Ray-Ban Meta, Rokid, Vuzix Ultralite Pro, Samsung Galaxy Glasses
- **Class:** Full Android, highest capability, highest cost and weight

### Unisoc W517
- **Vendor:** Unisoc (紫光展锐)
- **Price:** ~$10 (single Chinese trade source — needs confirmation)
- **Spec:** 12nm, 1×A75@2.0 + 3×A55@1.8, IMG8300 GPU, **dual ISP**, Android 11
- **Camera:** 13MP + 1080p30
- **Connectivity:** Wi-Fi 5 / BT 5.0
- **Packaging:** 3D SiP + ePoP, cut board area 40% — enabled 6 mm temple in INMO Air2
- **Platform:** Unisoc and INMO jointly launched **"AI glasses open platform" (影目 X series)** aimed at sub-¥1000 products
- **Significance:** Full SoC capability at MCU-class price. The disruptor.

### MediaTek MTK8766
- **Vendor:** MediaTek
- **In:** Mentra Live
- **Class:** Full SoC, proven in shipping product

---

## Vision SoCs (Camera-Optimized, Lower Cost)

### Rockchip RV1106B
- **Vendor:** Rockchip
- **Spec:** Single Cortex-A7 + 4th-gen NPU: **0.5 TOPS INT8 / 1.0 TOPS INT4**
- **Camera:** 5MP30 video, 12MP stills, HDR, EIS, multi-frame NR
- **Power:** **250 mW at 2MP video, 2 mW standby**
- **Platform:** OSAIG. Rockchip demoed its own RV1106B glasses at CES
- **Dev ecosystem:** Mature, cheap dev boards (Luckfox Pico line)

---

## MCU-Class (Low Power, Low Cost)

### BES2800 / 2900 / 6000 Series
- **Vendor:** Bestechnic (恒玄)
- **In:** Even G1, Meizu MYVU, Xiaomi AI Glasses (paired with AR1), Alibaba Quark, Li Auto Lavis
- **2900:** Adds integrated ISP
- **6000 series:** Samples H1 2026
- **Role:** The default for display-only and audio glasses

### SigmaStar SSC309QL
- **Vendor:** SigmaStar (星宸)
- **Class:** ISP companion
- **Built for:** AI glasses, 12MP
- **In:** Looktech

### Actions ATS3085
- **Vendor:** Actions (炬芯)
- **Class:** MCU+DSP
- **Capability:** Single chip drives display + health algorithms + BT calling
- **In:** Halliday

### STMicro STM32N6
- **Vendor:** STMicro
- **Class:** MCU+NPU
- **Capability:** 0.6 TOPS
- **In:** Tecno's AI glasses

### GAP9
- **Vendor:** Greenwaves
- **Class:** RISC-V ML MCU
- **Platform:** Open PULP
- **In:** ETH OpenGlass
- **Achievement:** 11.5h ML from 200 mAh

### ESP32-S3
- **Vendor:** Espressif
- **Class:** MCU
- **In:** omiGlass/OpenGlass, LILYGO T-Glass, OSSG lineage
- **Price:** $25 tier

---

## Budget Tier

### Anyka (安凯微), Broadcom
- Used by low-cost ODM tier
- **Example:** Antawei's ¥399 and ¥999 products

---

## Three Industry Architectures

The Chinese industry uses these three patterns:

1. **Single SoC** — AR1, W517. Most capable, most power and cost.
2. **MCU-SoC + external ISP** — e.g. BES2800 + dedicated ISP. Reported to get close to AR1 image quality at fraction of chip cost. Total BOM under ¥1000.
3. **SoC + MCU** — AR1 for heavy work, BES2700/2800 for always-on low-power. What Xiaomi reportedly uses. **Industry consensus: this is the likely long-term winner** for capability + battery life.

That third architecture is the answer to the v1 battery problem (30–60 min under continuous camera). It's an architecture problem with an industry fix.

---

## Verification Needed
- AR1 ≈ $60 / W517 ≈ $10 — single Chinese trade source, repeated across reprints. Needs second independent source before driving decisions.
- Direct vendor docs: Rockchip RV1106B datasheet, Unisoc W517 platform docs, BES2800 datasheet

---

## Real Component Prices (Pass 4 — LCSC / Rutronik24)

| Part | Distributor | Price | Stock | Notes |
|------|-------------|-------|-------|-------|
| **Rockchip RV1106G2** | LCSC (C5272606) | **$9.48–$11.35** | 751 | Cortex-A7, 0.5 TOPS |
| **Rockchip RV1106G3** | LCSC (C5328706) | **$5.33–$21.59** (tiered) | 1,388 | Cortex-A7 @1.2 GHz, **1.0 TOPS NPU**, ISP3.2 8MP@15fps, **256 MB DDR3L integrated** |
| **Rockchip RV1106G3** | **Rutronik24** (EU) | Listed | — | Western distributor, no Chinese channel needed |

**Key finding:** Unlike Unisoc and Bestechnic — where no open Western distribution was found — **RV1106 is available through a Western distributor** (Rutronik24). No NDA, no Taobao forwarder required.

**Variant choice matters:** RV1106G3 is specified at **Cortex-A7 @1.2 GHz, 1.0 TOPS NPU, ISP3.2 up to 8MP@15fps, integrated 256 MB DDR3L** — against the 0.5 TOPS figure in earlier reports. Same family, materially different part. **Confirm which variant OSAIG actually uses** before pricing.

### Western Distribution Summary (Pass 4)
- **Rockchip (RV1106):** ✅ Available through LCSC and Rutronik24
- **Unisoc (W517):** ❌ No open Western distribution found. Every route runs through a solution house.
- **Bestechnic (BES2800/2900):** ❌ No open Western distribution found.

**Implication:** If a low-cost SoC is the plan but Western procurement is a requirement, Rockchip is the only confirmed path. Unisoc and Bestechnic would require an ODM/solution-house relationship.

### Export Control
- Rockchip prohibits shipping RV1106 core boards or technical support to: Russia, Belarus, Cuba, Iran, North Korea, Syria, Crimea, Donetsk/Luhansk
- Irrelevant for Louisiana; relevant if selling internationally
- Export-control regime attached to this silicon must be honoured downstream
