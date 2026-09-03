# GLAIR — Smart-Glasses Platform Research: Master Report

**Date:** 2026-09-03  
**Scope:** Assignment 1 (existing hardware / SDKs / OEMs) + Assignment 2 (open & almost-open projects)  
**Status:** Leads from web research — verify against primary sources

---

## Table of Contents

1. [Market Structure: The Three Tiers](#market-structure)
2. [Assignment 1 — Ranked Shortlist](#assignment-1)
3. [Assignment 2 — Group A: Nearly There](#group-a)
4. [Assignment 2 — Group B: Strong Foundation](#group-b)
5. [Group C: Valuable Components](#group-c)
6. [Dead Ends](#dead-ends)
7. [Priority Conversations](#priority-conversations)
8. [Open Questions for Verification](#open-questions)
9. [The Bottom Line](#bottom-line)

---

## Market Structure: The Three Tiers

No product has: **camera + mic + speaker + near-eye display + USB-C data + wireless + continuous A/V streaming + deep programmatic control.**

| Tier | Link | Examples | Limitation |
|------|------|----------|------------|
| **BLE Display** | BT LE, ~KB/s | Even G1/G2, Vuzix Z100, Brilliant Halo | Cannot stream video |
| **Wi-Fi Camera** | Wi-Fi + SoC | Mentra Live, Rokid, INMO, OSAIG | Battery 30-60 min; most no display |
| **USB-C Tethered** | DP Alt Mode + UVC | Vuzix M400C, XREAL, RayNeo Air | A cable; almost none have camera |

**The tethered architecture is the only one that gets camera + display + high bandwidth + full control simultaneously.**

---

## Assignment 1 — Ranked Shortlist

### #1 — OSAIG / OpenSource-Ai-Glasses
- **Apache-2.0, 254★, active**
- Deepest developer access of anything purchasable
- Root Linux, zero-copy camera, RTSP, BLE, optional display
- **Missing:** schematics, PCB, gerbers, BOM
- **Risk:** Single maintainer, Taobao supply chain, 45 min battery
- **Action:** Buy two kits immediately

### #2 — Vuzix (M400 / M400C / Z100 / Ultralite OEM)
- **US company, real OEM business, in-house waveguides**
- M400C = cleanest glasses-as-I/O device ($1,299)
- Ultralite OEM = configurable reference design via Quanta
- **Missing:** firmware source, bootloader, schematics
- **Action:** Priority conversation #2 — ask about OEM pricing, MOQ, NRE

### #3 — Mentra (MentraOS + Mentra Live + Mentra Mach1)
- **Apache-2.0 OS, YC W25, cross-vendor**
- Camera device (Live) and display device (Mach1) — not one device with both
- K900/SmartXY ODM connection unconfirmed but promising
- **Action:** Priority conversation #1 — ask about camera+display on their platform

### #4 — Brilliant Labs (Halo / Frame)
- **Most open commercial vendor — full firmware, FPGA RTL, design files**
- Halo: 42★, active (Zephyr RTOS, Alif Balletto, Lua)
- **Hard limit:** BLE only. No USB-C data, no Wi-Fi, no video streaming
- **Action:** Pursue as firmware/architecture reference, not as whole device

### #5 — Rokid Glasses
- **Snapdragon AR1 Gen 1, unusually ungated developer access**
- BYOA first-class, no account needed for Maven repo
- Native SDKs are closed AARs, no firmware/bootloader
- **Action:** Good for app dev, not for hardware control

### #6 — Qualcomm Snapdragon START + Thundercomm
- **Production-ready AR1+ reference design**
- Fastest legitimate route to "own glasses" without designing from scratch
- **Action:** Priority conversation #3 — ask NRE, MOQ, timeline

### #7 — INMO Air3
- Standalone Android, Google Mobile Services, nice specs on paper
- **Battery heavily criticised; Feishu-walled docs**
- **Action:** Not recommended for development

### #8 — Enterprise Tier
- RealWear, DigiLens ARGO, Iristick, ThirdEye
- Standard Android, sideload + MDM, no consumer channel
- **Action:** Iristick paid NDA not worth pursuing; DigiLens notable for waveguides

### #9 — Meta / Android XR / Snap
- Best hardware, least control
- Meta DAT partner-gated; Android XR promising but early; Snap dev program withdrawn
- **Action:** Included for completeness only

---

## Assignment 2 — Group A: Nearly There (70–90%)

| Project | Score | Why |
|---------|-------|-----|
| OSAIG | ~80% | Deepest access, purchasable, root Linux |
| Brilliant Frame/Halo | ~85% BLE, ~40% total | Full firmware + RTL, but bandwidth ceiling |
| MentraOS + Live | ~75% OS, ~0% board | Apache-2.0 OS, real, but no hardware openness |

---

## Assignment 2 — Group B: Strong Foundation

| Project | What's There | What's Missing |
|---------|-------------|----------------|
| **ETH OpenGlass** | Full hardware designs, GAP9, 11.5h ML from 200mAh | Display, speaker, Wi-Fi, USB-C data |
| **OSSG** | Gerbers, BOM, schematics, ESP32 firmware | Display never solved; team graduated to Mentra |
| **Vuzix Ultralite OEM** | Reference design via Quanta | Not open, license fee instead of repo |
| **Thundercomm AR1+** | Production-ready reference | Not open, NRE/MOQ unknown |

---

## Group C: Valuable Components

### Displays / Optics
- **MICROOLED ActiveLook** — Apache-2.0 SDK, documented BLE, shipping
- **JBD** — microLED dev kits, reference designs with Dispelix
- **Vuzix waveguides** — US-made, defence-qualified

### Compute
- **RV1106/RV1106B** — cheap Linux camera SoC (OSAIG, Luckfox)
- **GAP9** — RISC-V ML MCU (ETH reference)
- **AR1 Gen 1/+** — industry standard premium

### Cross-Platform
- **MentraOS** — Apache-2.0, shipping
- **xg.glass** — honest multi-vendor abstraction
- **Extentos** — competitor homework worth reading

---

## Dead Ends

| Project | Status |
|---------|--------|
| North / Focals | Acquired by Google 2020, no licensing path |
| Google Glass Enterprise 2 | Ended 2023 |
| ODG | Collapsed, patents dispersed |
| Snap developer program | Withdrawn |

---

## Priority Conversations (in order)

1. **Mentra — Cayden Pierce / Alexander Israelov**
   - Only org spanning whole stack: Apache-2.0 OS, shipped devices, ODM relationship
   - Ask: camera+display device? K900 with display?

2. **Vuzix OEM — Rochester, NY**
   - US-based, sells waveguides, reference designs, Quanta manufacturing
   - Ask: Ultralite OEM pricing, M400C licensing, waveguide at low volume

3. **Thundercomm — Ali Mesri, NA**
   - Snapdragon START turnkey path
   - Ask: AR1+ reference inclusion, NRE, MOQ, timeline

4. **ETH Zürich PBL — Julian Moosmann / Michele Magno**
   - Publish board files, industry collaboration friendly
   - Ask: license terms, FPC interposer with display, collaboration

5. **OSAIG maintainer + SmartXY (vanda@topaiglasses.com)**
   - Two Shenzhen supply chain bets
   - OSAIG: cheapest root-access hardware in hand
   - SmartXY: working ODM, possible K900 manufacturer

---

## Open Questions for Bernice (Primary Source Verification)

1. **OSAIG kit** — can it ship to Louisiana? What does it cost landed? Display variant available?
2. **Mentra Live = SmartXY XY-008 (K900)?** — check FCC filing
3. **Brilliant Halo design files** — what's actually on GitHub? Under what license?
4. **ETH OpenGlass license** — commercial derivation permitted?
5. **M400C** — still in production? Works on Linux host with no Vuzix software?
6. **USB-C data on camera+display glasses** — anything besides M400C?
7. **Pricing/MOQ/NRE** for Vuzix Ultralite OEM, Thundercomm AR1+, JBD dev kits, MICROOLED ActiveLook

---

## The Bottom Line

> **Prototype on OSAIG** (root Linux, camera, RTSP, optional HUD, ~$100s) to prove the application. **Design the product architecture as glasses-as-I/O with the compute in a pocket device**, so you inherit UVC/DisplayPort standards instead of a vendor's SDK. Then take that proven application to **Vuzix or Thundercomm** and have them build the real hardware around it.

> The two organisations that could shortcut all of that are **Mentra** (if they'll do a camera+display device) and **SmartXY** (if they're already building the hardware Mentra sells).

---

*Individual project profiles available in `/projects/` directory.*
