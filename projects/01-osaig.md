# OSAIG / OpenSource-Ai-Glasses

**Classification:** Nearly There (~80%) — Deepest developer access of any purchasable platform  
**License:** Apache-2.0  
**Live GitHub Stats (as of 2026-09-03):** 254 stars, 53 forks, 5 open issues, primary language C  
**Repository:** https://github.com/Iam5tillLearning/OpenSource-Ai-Glasses

---

## Maker
- Independent Chinese developer, handle `Iam5tillLearning`
- Build environment maintained under `makevary/AIGLASS_DEV_ENV`

## Silicon
- **Rockchip RV1106B** — single Cortex-A7
- RK962 Wi-Fi/BT combo
- IMX219 camera sensor

## Hardware Specifications
- 1080p camera
- Mic + speaker
- Optional **640×480 / 30° monocular display**
- Wi-Fi b/g/n, BT 5.3
- USB 2.0
- 8 GB storage
- 180 mAh battery
- 43 g weight

## Operating System
- Embedded Linux, built from source (`./build.sh` → `update.img`), flashable

## Developer Access (Unmatched Depth)
- C/C++ SDK with GPIO event subscription
- **Zero-copy camera frames via shared memory**
- Audio in/out
- Shared-memory framebuffer submission to display
- BLE text channel
- Media-resource arbitration
- Unix-domain-socket IPC
- **RTSP out of the box** (`rtsp://<ip>:554/live/0`)
- Root Linux, GDB + OpenOCD debug flow documented

## Cloud Independence
- Explicitly documented how to disable bundled `ai-core`/`guard` cloud services
- Can run pure Rockchip SDK
- Verified-by-docs, not yet verified-by-us

## What's Published vs. Not Published
| Published | NOT Published |
|-----------|---------------|
| Full system software | Schematics |
| SDK & docs | PCB files |
| 3D enclosure models | Gerbers |
| Build system & flashing guide | BOM |

**Verdict:** You can *run* the platform but not *reproduce the board*.

## Purchasing
- Integrated kit via Taobao (needs forwarder for US delivery, or their promised global platform)
- Any RV1106B dev board works as a starting point

## Status
- **Active** — v0.7.0 released 2026-05-08
- 140 commits
- Self-declared 45% documentation completeness
- Firmware ≥v0.6.x only works on hardware built after 2026-01-01

## Risks
- Single-maintainer Chinese project
- Supply chain runs through Taobao
- Single A7 core is weak for on-device AI
- 180 mAh gives ~45 min of recording
- Sparse English docs

## ⚠️ Critical Risk — Kernel & Binary Blobs (Pass 4 Finding)

**RV1106 is NOT in the mainline Linux kernel.** From Luckfox staff, direct quote:

> "RV1106 has not been merged into the mainline kernel support. The kernel here has been heavily modified by Rockchip... Additionally, the hardware of RV1106 has not been fully open-sourced by Rockchip, which greatly increases the difficulty."

### Consequences
- Luckfox SDK pinned to **Rockchip vendor kernel 5.10.110/5.10.160** (2020-era kernel)
- U-Boot shipped as **v2017.11**
- Independent mainline effort (`gflix/rockchip-rv1106-dev`) has **6.18.x booting** but states: **"No drivers or SoC function have been integrated yet"**
- **ISP** (camera_engine_rkaiq) and **NPU** ship as **binary blobs**
- One OpenWRT port dropped rkaiq entirely as non-working, planned "binary ISP" substitution
- Mainlining just started: **LWN, 29 July 2026** covers initial patch series adding RV1106/RV1103 support, following merged RV1103B. Clock driver ported from vendor kernel; **no resets exposed**, CPU pvtpll initialised but not calibrated

### The EU CRA Problem
The dashboard's EU Cyber Resilience Act finding (see `26-eu-cyber-resilience.md`) requires **10 years of security updates** for firmware sold in the EU. Committing to that on a **vendor-forked 5.10 kernel with binary ISP and NPU blobs** — from a chip vendor that hasn't opened hardware docs — is a **structural problem**, not a detail. If the EU is ever a market, this is a blocker for the on-glasses Rockchip path.

### Nuance: Which RV1106?
The dashboard says **RV1106B**. LWN describes RV1103B as already merged with RV1106/RV1103 following. The **B-series may be further along on mainlining** than the original parts. Worth confirming which exact silicon variant OSAIG ships and where that part sits in the mainlining timeline.

### Verdict Updated
**Buy the kits, prove the application, learn the platform.** The recommendation stands for **prototyping only**. For a product that must comply with EU Cyber Resilience Act (or any 10-year support commitment), a vendor-forked kernel with binary blobs is a **liability that compounds over time**.

## Contact
- Email: iam5tilllearning@foxmail.com
- Discord: discord.gg/7KqjKFZ7xA

## Live Repository Health (GitHub API, 2026-09-03)
- Created: 2025-09-09
- Last updated: 2026-09-03 (very recent activity)
- Language: C
- Open issues: 5 (manageable)

## Real Component Prices (Pass 4)

| Part | Distributor | Price | Stock |
|------|-------------|-------|-------|
| **Rockchip RV1106G2** | LCSC (C5272606) | **$9.48–$11.35** | 751 |
| **Rockchip RV1106G3** | LCSC (C5328706) | **$5.33–$21.59** (tiered) | 1,388 |
| **Rockchip RV1106G3** | **Rutronik24** (EU distributor) | Listed | — |

**Key finding:** You can buy Rockchip silicon through a **Western distributor** (Rutronik24). Unlike Unisoc and Bestechnic — where no open Western distribution was found — RV1106 does not require a Chinese channel or NDA relationship.

**Variant choice matters:** RV1106G3 is specified at **Cortex-A7 @1.2 GHz, 1.0 TOPS NPU, ISP3.2 up to 8MP@15fps, integrated 256 MB DDR3L** — against the 0.5 TOPS figure in earlier reports. Same family, materially different part. **Confirm which variant OSAIG actually uses** before pricing.

**Export control:** Luckfox states Rockchip prohibits shipping RV1106 core boards or technical support to Russia, Belarus, Cuba, Iran, North Korea, Syria, Crimea, and Donetsk/Luhansk. Irrelevant for Louisiana; relevant if selling internationally. An export-control regime is attached to this silicon and must be honoured downstream.

## Recommendation
**Pursue immediately. Buy two kits.** They are cheap, and holding one collapses a month of speculation. This is the only thing you can *purchase* that gives you root on a Linux system with camera, audio, display, and streaming, where you compile the whole firmware yourself.

**But:** This is a **prototyping recommendation, not a product commitment.** The vendor-forked kernel + binary blobs create EU CRA compliance risk and a 10-year support burden that cannot be met unilaterally.
