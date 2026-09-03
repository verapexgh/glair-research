# OSSG / Open Source Smart Glasses (Team Open Smart Glasses)

**Classification:** Strong Foundation — Educational Open Hardware  
**License:** MIT  
**Repository:** https://github.com/Mentra-Community/OpenSourceSmartGlasses  
**Live GitHub Stats (2026-09-03):** 1,182 stars, 148 forks, 1 open issue, primary language HTML  

---

## What's Actually In It
- Mechanical (3D-printed frames)
- **Electrical — v1.1 gerbers, LCSC BOM, parts list, published schematics (main + power)**
- ESP32 firmware
- FreeRTOS
- Step-by-step build wiki: order boards → order parts → assemble → flash

## Silicon
- **ESP32-PICO-D4** with 4 MB SPIRAM
- Deliberately microcontroller-class
- Design decision: glasses only need display + mic + wireless; Android phone is the head unit

## Status
- Wiki last meaningfully edited April 2023
- **Not dead — graduated.** The same people became Mentra

## Display
- The weak point
- FAQ tells you to "read up on what display hardware is required"
- It was never solved cleanly

## People
- **Cayden Pierce** (github.com/CaydenPierce)
  - Worked with **Steve Mann** (founder of wearable computing) at U. Toronto, then MIT
  - Earlier project: `emexlabs/WearableIntelligenceSystem`
  - Now Mentra CEO

## Recommendation
**Read it, don't build it.** It's the best free education in glasses PCB constraints available, and it's MIT-licensed. The people behind it are now reachable through Mentra. The mechanical and electrical design files are valuable reference material even if the display solution was never completed.
