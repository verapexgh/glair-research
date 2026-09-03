# Display & Optics — Shopping List (Pass 2)

**Date:** 2026-09-03  
**Key finding from Pass 2: The display is not the hard part any more. It's a part number.**

---

## Pre-Integrated Modules (Least Engineering Required)

### Raontech LCoS Optical Module + Controller
- **Maker:** Raontech (Seongnam, Korea) — fabless
- **Unique:** Only company that has commercialised **all three** microdisplay technologies (LCoS, micro-OLED, microLED)
- **Product:** Worldwide LCoS optical module + controller — light engine and waveguide **pre-assembled, no optical alignment required**
- **Resolution:** FHD at 40° or 50° FOV
- **Processor includes:** Distortion correction and low-latency algorithms
- **New P13:** 0.13" LCoS, 6.25 × 4.65 mm, 3 µm pixel, 800×800 full colour from **single panel** (no X-cube), enabling **sub-1 cm³ light engine fitting inside a temple**
- **Rumor:** Reported to be in discussions with Meta for entry-level AR glasses
- **Contact:** sales.raon@RAON.io — they explicitly invite private meetings

### DisplayModule DMGTX0068WUNA (Catalogue Part)
- **Panel:** Sony ECX343ENA 0.68" micro-OLED
- **Module:** Optical engine + array waveguide
- **Resolution:** 1920×1200
- **FOV:** 50° diagonal (H 42.4° / V 26.5°)
- **Brightness:** 0–700 nits adjustable
- **Transmittance:** >80%
- **Contrast:** 100,000:1
- **Availability:** **Samples immediate, bulk 3 weeks**
- **Price:** [UNKNOWN] on page

### MICROOLED ActiveLook
- See full profile: `12-display-optics.md`
- Complete HUD subsystem, open BLE interface, Apache-2.0 SDKs
- Shipping in ENGO, Julbo, Cosmo

### Lingxi AR / 灵犀微光 (Beijing, est. 2014)
- **Products:** Array waveguide modules AW60/AW70/AW80 (mass production)
- **2D-40:** 8 g, 40° FOV, 25 mm eyebox, side-injection coupling for glasses form factors
- **2D-60:** 60° FOV
- **Key offering:** **"Aladdin Zero" reference machine** and **"Aladdin Developer Reference Solution"** — explicitly built to connect optics to AR-glasses solution houses and ODMs
- **Significance:** Reference design from the **optics side** (complement to ODMs who do compute/assembly)

---

## Panels and Engines (More Assembly Required)

### Micro-OLED Panels
- **Price:** $75–$125 per module, **MOQ 2 pieces**
- **Suppliers:**
  - **Sony** (~65% market share) — ECX series is default in birdbath/waveguide tier
  - SeeYa
  - BOE
  - Kopin
  - eMagin (acquired by Samsung 2023)
  - OLiGHTEK
  - MICROOLED
- **Availability:** Buyable through distributors and module houses

### JBD (Jade Bird Display, Shanghai)
- See full profile: `12-display-optics.md`
- **Monochrome AmµLED:** 0.35 cc, 0.6 g, 30° FOV
- **Polychrome:** 1.3–1.5 cc, 2.3 g
- **Roadrunner II:** 2.5 µm platform, phased rollout H2 2026, moving to 12-inch wafers
- **Reference designs:** Jointly with Dispelix

### LCoS Supply
- **Raontech CEO:** Only **Omnivision and Raontech** currently supply LCoS for AR glasses
- **Meta's Ray-Ban Display:** Uses LCoS with **Lumus-developed geometric reflective waveguide made by Schott** (confirmed by iFixit teardown)

---

## Chinese Waveguide Makers (All Reachable)

| Company | Location | Notes |
|---------|----------|-------|
| **Lochn Optics / 珑璟光电** | Shenzhen | 16,400 m². Described as only domestic AR waveguide module line with stable delivery |
| **Zhige / 至格科技** | — | |
| **Crystal Optech / 水晶光电** | — | |
| **Sunny Optical / 舜宇** | — | |
| **Lianchuang / 联创电子** | — | Customers include Magic Leap |
| **Optiark / 奥提赞光晶** | — | |
| **Lipai / 理湃光晶** | — | LCoS engine, 1280×720 |

---

## Dead End
- **WaveOptics** developer kits discontinued (company absorbed by Snap). Only resale units exist.

---

## Key Open Questions
1. **Raontech module** — actual part number, price, MOQ, lead time. Can it be bought at prototype quantity?
2. **DMGTX0068WUNA** — real price, and whether seller is manufacturer or reseller
3. **Lingxi Aladdin Zero** — what the reference solution includes, who qualifies
4. **Micro-OLED panel distributors** — who sells at MOQ 2 to individual buyers vs. only to companies?
