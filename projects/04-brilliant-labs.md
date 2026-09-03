# Brilliant Labs (Halo & Frame)

**Classification:** Nearly There (~85% of BLE device, ~40% of full specification)  
**Maker:** Brilliant Labs (Singapore/HK)  
**Website:** https://brilliant.xyz  
**GitHub:** https://github.com/brilliantlabsAR  
**Live Repo (Halo):** https://github.com/brilliantlabsAR/halo-firmware  

---

## Halo (Current Generation)
- **~$399**
- Colour micro-OLED display
- Low-power optical sensor
- Dual mics with activity detection
- **Dual bone-conduction speakers**
- Low-power AI processor
- 40 g
- All-day battery
- Display focus adjustable +2 to −6 dioptres

### Silicon
- **Alif Balletto** (Cortex-M + NPU)
- **Zephyr RTOS**
- Lua runtime for on-device apps
- MCUboot
- BLE OTA

### Openness
- `halo-firmware`, `halo-mcuboot`, `halo-zephyr-alif`, `brilliant_sdk` (BSD-3) all public
- Company states design files are on GitHub
- **Live GitHub Stats (Halo firmware, 2026-09-03):** 42 stars, 10 forks, 1 open issue, primary language C

## Frame (Previous Generation)
- nRF52840 + **Lattice CrossLink-NX FPGA** for camera/graphics acceleration
- Lua on-device
- Complete firmware **and SystemVerilog RTL** public
- Buildable against an nRF52840 DK
- J-Link and Black Magic Probe debug documented
- Last release Oct 2025 — effectively superseded by Halo

## The Hard Limit
**BLE only. No USB-C data, no Wi-Fi, no video streaming.** You can send low-res images to it and read a mic stream. That is the ceiling.

## Open Questions
1. What design files are actually published for Halo? (schematics? gerbers? enclosure only?)
2. Under what license?

## Recommendation
**Pursue as a firmware/architecture reference and as the display-side answer, not as the whole device.** The Frame codebase is the single best worked example of "camera + micro-OLED + MCU + FPGA in a glasses form factor" that is public. The most open commercial vendor in the category.
