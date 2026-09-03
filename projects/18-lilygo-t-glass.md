# LILYGO T-Glass

**Classification:** Dev Platform — Fastest Path to Something on Your Face  
**Price:** Cheap (sub-$50 tier)  
**Maker:** LILYGO  

---

## Specifications
- **ESP32-S3 FN4R2**
- 2 MB PSRAM / 4 MB flash
- **1.1" AMOLED 294×126** behind a prism (126×126 visible area)
- **Bosch BHI260AP 6-axis IMU with ML coprocessor**

## What It Is
Not a product. A **cheap, buyable ESP32-S3 HUD dev platform** — the fastest possible way to have something on your face displaying your own text this month.

## Use Case
- Rapid prototyping of HUD concepts
- Learning glasses form-factor constraints
- Testing display readability and positioning
- Building proof-of-concept before committing to custom hardware

## Hidden Gem: Bosch BHI260AP ML Coprocessor (Pass 4 Finding)
The dashboard had this right but under-used it: the **Bosch BHI260AP 6-axis IMU carries an ML coprocessor**, so **head-gesture recognition runs on the IMU itself** rather than the main MCU. That's the same architectural trick as the SoC+MCU split (see `19-silicon-menu.md`), at hobby scale. You can do gesture-based input without waking the ESP32-S3.

## Limitations
- Tiny display (126×126 visible)
- ESP32-S3 class compute (no Linux, no camera ISP)
- No camera, no mic, no speaker on-board
- Prism-based, not waveguide — different optical path than most commercial glasses

## Recommendation
**Buy immediately if you want to start prototyping today.** It's the cheapest way to learn what a glasses HUD feels like. Pair with a separate camera module (XIAO ESP32S3 Sense / omiGlass) for a two-device prototype.
