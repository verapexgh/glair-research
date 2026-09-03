# Mentra (MentraOS + Mentra Live + Mentra Mach1)

**Classification:** Nearly There (~75% at OS layer)  
**License:** Apache-2.0  
**Repository:** https://github.com/Mentra-Community  
**Website:** https://mentraglass.com  

---

## Maker
- **Mentra Labs**, San Francisco (YC W25)
- **Founders:** Cayden Pierce (CEO) and Alexander Israelov (Head of Engineering)

## MentraOS
- Apache-2.0, full monorepo
- Cloud backend, React Native runtime
- **`asg_client` native Android client that runs on the glasses themselves**
- TypeScript SDK
- OTA and recovery tooling
- **Cross-vendor:** one app runs on Mentra Live, Mentra Mach1, Vuzix Z100, Even Realities G1

## Products

### Mentra Live
- **$299**
- MediaTek **MTK8766**
- 12 MP camera / 119° FOV
- 1080p video
- 3 mics
- 2 speakers
- Wi-Fi + BT 5.0
- 2,200 mAh case
- 43 g
- **12 h battery**
- Custom Android build
- **ADB over Wi-Fi only — no USB ADB**
- Streams RTMP to any platform
- **No display**

### Mentra Mach1
- **$349 dev kit**
- Monocular microLED waveguide HUD
- Mic
- **No camera**

## The Gap
Mentra has a camera device (Live) and a display device (Mach1). It does not have one device with both.

## Internal Designation
- Mentra Live internal designation: **"K900"**
- Shenzhen ODM **SmartXY** (topaiglasses.com) lists an OEM/ODM platform called **"XY-008 AI Glasses (K900)"**
  - MTK + BES dual-chip
  - 13 MP Sony
  - 5 mics
  - Dual speakers
  - Android
  - **Strong circumstantial match; unconfirmed**
  - Worth verifying: if it's the same platform, that's the ODM behind the openest camera glasses on the market

## Commercial
- Mentra explicitly sells the **"Mentra Core Engine"** to manufacturers as a turnkey OS they can put in their own app under their own brand

## OSSG / Open Source Smart Glasses Connection
- Mentra evolved from the **Team Open Smart Glasses** project (github.com/Mentra-Community/OpenSourceSmartGlasses)
- Same people, now commercial
- **Cayden Pierce** worked with **Steve Mann** (founder of wearable computing) at U. Toronto, then MIT

## Contact
- mentraglass.com
- github.com/Mentra-Community
- Cayden Pierce is publicly active and reachable

## Recommendation
**Priority conversation #1.** The only organisation that spans the whole stack: Apache-2.0 OS, two shipped devices, an ODM relationship, and a stated business of licensing the core engine. Ask whether a camera+display device on their platform is possible, what the ODM relationship allows, and whether the K900 platform can be specified with a display.
