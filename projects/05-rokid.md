# Rokid Glasses

**Classification:** Consumer / Developer-Friendly Closed Platform  
**Price:** $699 (list $799); Display-free "AI Glasses Style" $349  
**Maker:** Rokid  
**Website:** https://rokid.com  

---

## Specifications
- 49 g standalone
- **Snapdragon AR1 Gen 1** + NXP RT600 for low-power voice
- Dual monochrome-green microLED on diffractive waveguide
  - ~480×400/eye
  - 1500 nits
- **12 MP Sony IMX681**
- 4 directional mics
- 2 speakers
- **Wi-Fi 6 / BT 5.3**
- 2 GB RAM / 32 GB storage
- 210 mAh

## OS
- **YodaOS-Sprite**, built on Android 12 / Qualcomm QSSI

## Developer Access
Unusually ungated — **no account needed**:
- Maven repo resolves anonymously
- Four parallel paths:
  1. Phone companion
  2. On-glasses native Android
  3. On-glasses AIUI/JSAR web runtime (Apache-2.0)
  4. Cloud agent
- Sideload works over:
  - Phone app
  - Bluetooth SPP
  - Wi-Fi LAN
  - USB
  - **WebUSB from a browser**

## BYOA (Bring Your Own AI)
- First-class support for pointing at your own model endpoint over SSE
- DeepSeek/Qwen/Kimi named
- Rare in this class

## Limits
- Native SDKs ship as closed AARs
- No firmware source
- No bootloader access
- Cloud OpenAPI is enterprise-gated through sales
- No public store for native binaries yet

## Rokid Nexus Plugin Ecosystem (Pass 4 Finding)
- **Rokid has a plugin ecosystem branded "Nexus"** with third-party plugins shipping
- Example: **RSS/Atom reader for the HUD**, fully operable with the **R08 ring** input device
- The dashboard covered Rokid's four SDK paths but not Nexus or the ring as an input device
- Expands the developer surface: not just native/web/cloud, but also **plugin architecture** for extending HUD functionality

## Community Reverse-Engineering
- `buildwithfenna/rokid-docs` — YodaOS internals and CXR SDK suite from firmware decompilation
  - **Live GitHub Stats (2026-09-03):** 48 stars, 7 forks, 0 open issues, primary language Smali

## Recommendation
Strong community support and unusually open sideloading. Good for app development, but not for hardware control. Community reverse-engineering work is valuable for understanding the platform without vendor permission.
