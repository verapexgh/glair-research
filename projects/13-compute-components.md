# Compute Components

**Classification:** Silicon & Compute Platforms  
**Purpose:** Processing brains for smart glasses  

---

## Rockchip RV1106 / RV1106B
- Tiny Linux camera SoC
- Mature open dev-board ecosystem (**Luckfox Pico** line)
- Cheap, buyable, well documented
- **The reason OSAIG exists**
- Best starting point for low-cost Linux camera glasses

## GAP9 (Greenwaves)
- RISC-V ML MCU on the open PULP platform
- Core of the ETH Zürich OpenGlass work
- Ultra-low power ML at the edge

## Alif Balletto
- MCU + NPU
- Used in Brilliant Labs Halo
- Cortex-M class with neural acceleration

## Qualcomm AR1 Gen 1 / AR1+
- What Rokid, Samsung Galaxy Glasses, and Vuzix Ultralite Pro all use
- The industry-standard premium smart glasses SoC
- Snapdragon START reference designs built around it

## XIAO ESP32S3 Sense / omiGlass
- **$25 tier**
- Camera + mic on a 3D-printed clip
- BasedHardware project, MIT license
- **Note:** older `BasedHardware/OpenGlass` repo is superseded by omiGlass
- **Different project** from ETH OpenGlass despite identical name
- **Live GitHub Stats (omi/BasedHardware, 2026-09-03):** 13,387 stars, 2,230 forks, 648 open issues, primary language Python

## Recommendation
- **Prototype:** RV1106B (OSAIG, Luckfox Pico) — cheapest Linux path
- **Power-efficient ML:** GAP9 (ETH reference designs)
- **Premium consumer:** AR1 Gen 1/+ (Thundercomm/Vuzix/Rokid)
- **Ultra-budget experiment:** XIAO ESP32S3 / omiGlass
