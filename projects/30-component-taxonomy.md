# Component Taxonomy — What GLAIR Actually Covers

**Date:** 2026-09-03  
**Purpose:** This research is not just "which glasses to buy." It's a full supply-chain decomposition. This file maps the hierarchy.

---

## Tier 0: Complete Products (Turnkey)
Buy these, wear them, develop on them.

| Product | Maker | Price | Class | File |
|---------|-------|-------|-------|------|
| **OSAIG** | Iam5tillLearning | ~$100s | Open-source Linux, root access, deepest dev control | `01-osaig.md` |
| **Vuzix M400** | Vuzix | $1,800 | Standalone Android, ADB, IP67 | `02-vuzix.md` |
| **Vuzix M400C** | Vuzix | $1,299 | USB-C I/O only, UVC camera, DP display | `02-vuzix.md` |
| **Vuzix Z100** | Vuzix | — | BLE display-only | `02-vuzix.md` |
| **Mentra Live** | Mentra | $299 | Camera-only, MTK8766, MentraOS | `03-mentra.md` |
| **Mentra Mach1** | Mentra | $349 dev kit | Display-only HUD, MentraOS | `03-mentra.md` |
| **Brilliant Halo** | Brilliant Labs | ~$399 | BLE, Zephyr RTOS, most open commercial vendor | `04-brilliant-labs.md` |
| **Brilliant Frame** | Brilliant Labs | (superseded) | Full FPGA RTL published | `04-brilliant-labs.md` |
| **Rokid Glasses** | Rokid | $699 | Snapdragon AR1, YodaOS, ungated dev access | `05-rokid.md` |
| **INMO Air3** | INMO | ~$899 | Standalone Android, GMS, Sony micro-OLED | `07-inmo-air3.md` |
| **RayNeo Air 4 Pro** | RayNeo (TCL) | $299 | Tethered, HDR10 DP display | `24-rayneo-innovator.md` |
| **RayNeo iO** | RayNeo (TCL) | — | AI glasses, invisible display, **no camera** (coming) | `24-rayneo-innovator.md` |
| **XREAL One Pro** | XREAL | — | Tethered + eye camera, community reverse-engineered | `33-xreal-one-pro.md` |
| **Meta Ray-Ban** | Meta | $299 | Camera + audio, partner-gated SDK | `09-meta-androidxr-snap.md` |
| **Snap Spectacles** | Snap | $2,195 pre-order | Withdrew dev program | `09-meta-androidxr-snap.md` |
| **PUSHI G1** | PUSHI | — | Unverified RV1106B platform | `17-pushi-g1.md` |

---

## Tier 1: Reference Designs / Turnkey Platforms
Not a product you buy — a design you license or build on.

| Platform | Maker | What It Is | File |
|----------|-------|-----------|------|
| **Qualcomm Snapdragon START** | Qualcomm + Thundercomm | Turnkey AR1+ reference design, BSP to mass production | `06-qualcomm-thundercomm.md` |
| **Vuzix Ultralite OEM** | Vuzix + Quanta | Configurable reference design (AR1 + Avegant LCoS + Vuzix waveguides) | `02-vuzix.md` |
| **MICROOLED ActiveLook + Quanta + ST** | MICROOLED | Reference design: complete HUD subsystem over BLE | `12-display-optics.md` |
| **Lingxi Aladdin Zero** | 灵犀微光 | Reference machine + dev solution for array waveguides | `20-display-shopping-list.md` |

---

## Tier 2: Development Platforms / Kits
Buy these to prototype, learn, prove concepts.

| Platform | Maker | Price | What It Is | File |
|----------|-------|-------|-----------|------|
| **LILYGO T-Glass** | LILYGO | Sub-$50 | ESP32-S3 + 1.1" AMOLED + BHI260AP IMU with ML coprocessor | `18-lilygo-t-glass.md` |
| **ETH OpenGlass** | ETH Zürich | — | GAP9 + nRF5340, full open hardware, 11.5h ML/200mAh | `10-eth-openglass.md` |
| **OSSG / Team Open Smart Glasses** | Mentra lineage | — | ESP32-PICO-D4, gerbers, BOM, MIT license | `11-ossg.md` |
| **omiGlass / OpenGlass (BasedHardware)** | BasedHardware | $25 | XIAO ESP32S3 Sense, camera + mic clip | `13-compute-components.md` |
| **Luckfox Pico** | Luckfox | Cheap | RV1106B dev board ecosystem | `01-osaig.md` |

---

## Tier 3: Silicon / SoCs / Compute
The 45% of BOM. The 6× cost lever.

| Part | Vendor | Price | Spec | File |
|------|--------|-------|------|------|
| **Snapdragon AR1 Gen 1/+** | Qualcomm | ~$60? | Full Android, highest capability | `19-silicon-menu.md` |
| **Unisoc W517** | Unisoc | ~$10? | 12nm A75+A55, dual ISP, Android 11 | `19-silicon-menu.md` |
| **MediaTek MTK8766** | MediaTek | — | Full Android, in Mentra Live | `19-silicon-menu.md` |
| **Rockchip RV1106G2** | Rockchip | $9.48–$11.35 | 0.5 TOPS, Cortex-A7 (LCSC C5272606) | `19-silicon-menu.md` |
| **Rockchip RV1106G3** | Rockchip | $5.33–$21.59 | 1.0 TOPS, ISP3.2, 256MB DDR3L integrated (LCSC C5328706, Rutronik24) | `19-silicon-menu.md` |
| **BES2800/2900/6000** | Bestechnic | — | MCU+ISP, BLE glasses default | `19-silicon-menu.md` |
| **SigmaStar SSC309QL** | SigmaStar | — | ISP companion for AI glasses, 12MP | `19-silicon-menu.md` |
| **Actions ATS3085** | Actions | — | MCU+DSP, display + health + BT | `19-silicon-menu.md` |
| **STM32N6** | STMicro | — | MCU+NPU, 0.6 TOPS | `19-silicon-menu.md` |
| **GAP9** | Greenwaves | — | RISC-V ML MCU, open PULP | `19-silicon-menu.md` |
| **ESP32-S3 / ESP32-PICO-D4** | Espressif | $25 tier | MCU, Wi-Fi/BT | `19-silicon-menu.md` |
| **Alif Balletto** | Alif | — | MCU+NPU, in Brilliant Halo | `13-compute-components.md` |
| **NXP RT600** | NXP | — | Low-power voice, paired with AR1 in Rokid | `05-rokid.md` |
| **Anyka / Broadcom** | Various | — | Budget tier, in Antawei ¥399 products | `19-silicon-menu.md` |

---

## Tier 4: Display & Optics Modules
Pre-integrated or bare — the part that was "hard" until Pass 2.

| Module | Maker | Spec | Price/Avail | File |
|--------|-------|------|-------------|------|
| **Raontech LCoS + controller** | Raontech (Korea) | FHD, 40°/50°, pre-aligned, no optical alignment | Contact sales.raon@RAON.io | `20-display-shopping-list.md` |
| **Raontech P13** | Raontech | 0.13", 800×800, single-panel, sub-1cm³, temple-fit | In discussions with Meta? | `20-display-shopping-list.md` |
| **DisplayModule DMGTX0068WUNA** | DisplayModule | Sony ECX343ENA 0.68", 1920×1200, 50° FOV | Samples immediate, bulk 3wk | `20-display-shopping-list.md` |
| **MICROOLED ActiveLook** | MICROOLED (France) | Full HUD subsystem, open BLE, Apache-2.0 SDK | Shipping in ENGO/Julbo/Cosmo | `12-display-optics.md` |
| **Lingxi AW60/70/80** | 灵犀微光 | Array waveguide modules, mass production | Contact for pricing | `20-display-shopping-list.md` |
| **Lingxi 2D-40** | 灵犀微光 | 8g, 40° FOV, 25mm eyebox, side-injection | Contact for pricing | `20-display-shopping-list.md` |
| **Lingxi 2D-60** | 灵犀微光 | 60° FOV | Contact for pricing | `20-display-shopping-list.md` |
| **Lumus Z-30 2.0** | Lumus → Quanta | 30° FOV, thinner/lighter geometric waveguide | Licensed to Quanta (1 Sep 2026) | `29-patent-ip-landscape.md` |
| **Lumus A-Lens 30/50** | Lumus → Quanta | Low-cost line, ~half weight/thickness | Licensed to Quanta (1 Sep 2026) | `29-patent-ip-landscape.md` |
| **JBD AmµLED mono** | JBD (Shanghai) | 0.35cc, 0.6g, 30° FOV, R/G/B | Dev kits available | `12-display-optics.md` |
| **JBD polychrome** | JBD | 1.3–1.5cc, 2.3g | Dev kits available | `12-display-shopping-list.md` |
| **JBD Roadrunner II** | JBD | 2.5µm platform, phased H2 2026 | Moving to 12-inch wafers | `20-display-shopping-list.md` |
| **Sony ECX343ENA** | Sony | 0.68" micro-OLED, 1920×1200 | $75–$125/module, MOQ 2 | `20-display-shopping-list.md` |
| **Sony ECX series (general)** | Sony | ~65% micro-OLED market | Through distributors/module houses | `20-display-shopping-list.md` |
| **Vuzix waveguides** | Vuzix | US-made, defence-qualified | OEM standalone | `12-display-optics.md` |
| **Lumus + Schott geometric reflective** | Lumus/Schott | In Meta Ray-Ban Display | iFixit confirmed | `29-patent-ip-landscape.md` |
| **OmniVision LCoS** | OmniVision | One of two LCoS suppliers for AR glasses | With Raontech | `20-display-shopping-list.md` |

---

## Tier 5: Camera / Sensor / Audio / Power Components
The remaining BOM pieces.

### Cameras & Sensors
| Part | Maker | In | Notes |
|------|-------|-----|-------|
| **IMX219** | Sony | OSAIG | 1080p camera sensor |
| **IMX681** | Sony | Rokid | 12 MP camera |
| **Sony 0.44" micro-OLED 1920×1080** | Sony | INMO Air3 | Display + camera ecosystem |
| **Bosch BHI260AP** | Bosch | LILYGO T-Glass | 6-axis IMU **with ML coprocessor** — gesture on IMU itself |
| **Prophesee GENX320 DVS** | Prophesee | ETH OpenGlass | Event-based camera |
| **Himax HM0360 RGB** | Himax | ETH OpenGlass | Frame-based camera |
| **12MP / 13MP sensors** | Various | Mentra Live, INMO | Standard smartphone camera sensors |

### Audio / Acoustics
| Part | Maker | In | Notes |
|------|-------|-----|-------|
| **Bone-conduction speakers (dual)** | — | Brilliant Halo | Dual bone-conduction |
| **Directional mics (4x)** | — | Rokid | 4 directional mics |
| **3 microphones** | — | Mentra Live | Standard array |
| **Dual speakers** | — | Mentra Live | Stereo audio |

### Power / Battery / Charging
| Part | Maker | In | Notes |
|------|-------|-----|-------|
| **180 mAh** | — | OSAIG | ~45 min recording |
| **260 mAh (on-glass) + 2,200 mAh (case)** | — | Mentra Live | 12h total via Infinity Cable |
| **210 mAh** | — | Rokid | Standard for AR1 platform |
| **200 mAh → 11.5h ML** | — | ETH OpenGlass | GAP9 power architecture achievement |
| **nPM1300 PMIC** | Nordic | ETH OpenGlass | Power management |

### Mechanical / Structural
| Part | Maker | Notes |
|------|-------|-------|
| **3D-printed frames** | OSSG/Team Open | Mechanical design files published |
| **3D enclosure models** | OSAIG | Published |
| **Injection-moulding plant** | Antawei (equity stake) | Owns moulding for finished devices |

---

## Tier 6: Software / Firmware / SDKs / Toolchains
The control layer.

| Software | License | What It Is | File |
|----------|---------|-----------|------|
| **MentraOS** | Apache-2.0 | Full OS: cloud backend, React Native, native Android on glasses, TypeScript SDK, OTA | `03-mentra.md` |
| **OSAIG C/C++ SDK** | Apache-2.0 | GPIO, zero-copy camera, audio, framebuffer, BLE, RTSP, Unix sockets | `01-osaig.md` |
| **Brilliant SDK** | BSD-3 | Zephyr RTOS, Lua runtime, MCUboot, BLE OTA | `04-brilliant-labs.md` |
| **Brilliant Frame RTL** | Open | Full SystemVerilog FPGA code | `04-brilliant-labs.md` |
| **Rokid YodaOS-Sprite** | Closed (YodaOS) | Android 12 / Qualcomm QSSI | `05-rokid.md` |
| **Rokid AIUI/JSAR** | Apache-2.0 | Web runtime on glasses | `05-rokid.md` |
| **Rokid Nexus plugins** | — | Third-party plugin ecosystem + R08 ring | `05-rokid.md` |
| **MICROOLED ActiveLook SDK** | Apache-2.0 | Android/iOS SDKs for BLE HUD control | `12-display-optics.md` |
| **xg.glass SDK** | — | Cross-platform API: Rokid, Meta, Brilliant, RayNeo, Even, INMO, Omi + simulator | `14-sdks-reverse-engineering.md` |
| **Extentos** | Commercial | Phone-companion SDK across vendors | `14-sdks-reverse-engineering.md` |
| **Odak** | Open source | Computational display & holography toolkit (CGH, perceptual graphics, lensless) | `34-odak.md` |
| **HumanHUD** | Commercial | Web app for personal data HUD on smart glasses | `23-humanhud.md` |
| **Rockchip SDK / build.sh** | Vendor | `./build.sh` → `update.img`, flashable | `01-osaig.md` |
| **Linux-rockchip mainline effort** | GPL | Initial RV1106/RV1103 patch series, LWN 29 July 2026 | `01-osaig.md` |

---

## Tier 7: ODM / Manufacturing / Supply Chain Services
You don't buy these — you hire them.

| ODM | Location | Capability | File |
|-----|----------|-----------|------|
| **SmartXY / 深圳信瑜** | Dongguan | 5,000 m², 8 lines, 400k/yr, 9 platforms incl. K900 | `21-odm-layer.md` |
| **Antawei / 安塔威** | Dongguan/Huizhou | Own display-module plant, assembly plant, moulding stake | `21-odm-layer.md` |
| **Goertek** | China | Meta's ODM | `21-odm-layer.md` |
| **Luxshare** | China | Alibaba Quark assembler | `21-odm-layer.md` |
| **Quanta** | Taiwan | Vuzix Ultralite, MICROOLED ref, Lumus licensee, ~$68B revenue | `21-odm-layer.md` |
| **Thundercomm** | China | Qualcomm START, AR1+ reference | `06-qualcomm-thundercomm.md` |

---

## Tier 8: Regulatory / Legal / IP / Market Intelligence
The environment you operate in.

| Topic | What It Is | File |
|-------|-----------|------|
| **EU Cyber Resilience Act** | 10-year firmware updates, CE marking, no OSS exemption for commercial products | `26-eu-cyber-resilience.md` |
| **Patent & IP Landscape** | Fragmented optics IP, 12+ assignees, litigation precedent, licensed module path | `29-patent-ip-landscape.md` |
| **Meta Privacy Backlash** | UK/NO/DE bans, criminal complaints, "pervert glasses" crisis | `25-meta-privacy-backlash.md` |
| **Market Structure (3 Tiers)** | BLE display / Wi-Fi camera / USB-C tethered | `16-market-structure.md` |
| **BOM Breakdown** | Mainboard+chip 45%, ROM+RAM 10%, sensors 9.47%, assembly 8.62% | `21-odm-layer.md` |
| **Research Sources List** | 12 categories of sources for ongoing intelligence | `28-research-sources-list.md` |

---

## The Full Stack, Bottom to Top

```
TIER 8: REGULATORY & IP
         EU CRA, patent landscape, privacy backlash, export control

TIER 7: ODM / MANUFACTURING
         SmartXY, Antawei, Quanta, Goertek, Luxshare, Thundercomm

TIER 6: SOFTWARE / SDK / TOOLCHAIN
         MentraOS, OSAIG SDK, Brilliant SDK, Odak, xg.glass, HumanHUD

TIER 5: SENSORS / AUDIO / POWER / MECHANICAL
         IMU (BHI260AP), cameras (IMX219, IMX681), mics, speakers,
         batteries (180–2,200 mAh), PMICs, 3D-printed frames

TIER 4: DISPLAY & OPTICS MODULES
         Raontech LCoS/P13, DisplayModule Sony, MICROOLED ActiveLook,
         Lingxi AW/2D series, Lumus Z-30/A-Lens, JBD microLED,
         Sony micro-OLED panels, Vuzix waveguides

TIER 3: SILICON / SoC / COMPUTE
         Qualcomm AR1 (~$60?), Unisoc W517 (~$10?), Rockchip RV1106G3 ($5.33–$21.59),
         MediaTek MTK8766, Bestechnic BES, SigmaStar SSC309QL,
         Actions ATS3085, STM32N6, GAP9, ESP32-S3

TIER 2: DEV PLATFORMS / KITS
         LILYGO T-Glass, ETH OpenGlass, OSSG, omiGlass, Luckfox Pico

TIER 1: REFERENCE DESIGNS
         Qualcomm START, Vuzix Ultralite OEM, Lingxi Aladdin Zero

TIER 0: COMPLETE PRODUCTS
         OSAIG, Vuzix M400/M400C/Z100, Mentra Live/Mach1,
         Brilliant Halo/Frame, Rokid, INMO Air3, RayNeo Air 4 Pro/iO,
         XREAL One Pro, Meta Ray-Ban, PUSHI G1
```

---

## What This Means for Decision-Making

You can enter this stack at **any tier** and build up or down:

| Strategy | Entry Tier | Path |
|----------|-----------|------|
| **Fastest to face** | Tier 0 | Buy OSAIG kit or LILYGO T-Glass, start developing today |
| **Fastest to custom product** | Tier 1 | License Qualcomm START or Vuzix Ultralite OEM, customise |
| **Maximum control, minimum hardware** | Tier 3+4 | Buy Raontech module + RV1106G3 + design your own PCB |
| **Maximum IP safety** | Tier 4 | Buy licensed module (Lumus/Quanta, Raontech, Vuzix, Lingxi) — supplier carries patent exposure |
| **Maximum software control** | Tier 6 | Fork MentraOS or OSAIG SDK, run on reference hardware |
| **Lowest EU CRA risk** | Tier 0 (M400C) or Tier 4+6 | Tethered glasses-as-I/O (no on-glasses firmware) or buy module + use host device compliance |
