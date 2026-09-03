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

## Contact
- Email: iam5tilllearning@foxmail.com
- Discord: discord.gg/7KqjKFZ7xA

## Live Repository Health (GitHub API, 2026-09-03)
- Created: 2025-09-09
- Last updated: 2026-09-03 (very recent activity)
- Language: C
- Open issues: 5 (manageable)

## Recommendation
**Pursue immediately. Buy two kits.** They are cheap, and holding one collapses a month of speculation. This is the only thing you can *purchase* that gives you root on a Linux system with camera, audio, display, and streaming, where you compile the whole firmware yourself.
