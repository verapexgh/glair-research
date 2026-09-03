# GLAIR — Smart-Glasses Platform Research, Pass 1
**Date:** 2026-09-03 · **Covers:** Assignment 1 (existing hardware / SDKs / OEMs) + Assignment 2 (open & almost-open projects)

**Sourcing status:** everything below came from web research. It is a set of **leads, not verified facts**. Nothing here should be treated as confirmed until Bernice checks it against the primary source (repo, datasheet, vendor doc, or a direct answer from the vendor). Items marked **[UNKNOWN]** are things nobody publishes — the contact who can answer is named.

---

## 1. The finding that reframes both assignments

Your requirement list is: camera + mic + speaker + near-eye display + USB-C data + wireless + continuous A/V streaming + deep programmatic control.

**No product on the market has all of that.** The market has split into three tiers that each solve a different subset, and the split is defined by **the link between the glasses and everything else**:

| Tier | Link | What it can do | What it can't |
|---|---|---|---|
| **BLE display glasses** (Even G1/G2, Vuzix Z100, Mentra Mach1, Brilliant Halo/Frame) | Bluetooth LE, ~kilobytes/sec | Push text/bitmaps to a HUD, pull a mic stream, take a still | Cannot stream video. Physically cannot — the pipe is too small |
| **Wi-Fi camera glasses** (Mentra Live, Rokid, RayNeo, INMO, Vuzix M400, RealWear, OSAIG) | Wi-Fi + on-glasses SoC | Continuous 1080p streaming, on-device compute, real OS | Battery burns in 30–60 min under continuous camera; most have no display or a very small one |
| **USB-C tethered viewers** (Vuzix M400C, XREAL, RayNeo Air, VITURE, XREAL Project Aura) | USB-C DisplayPort Alt Mode + UVC | Full display bandwidth, full camera bandwidth, zero battery/thermal problem, host does all compute | A cable. And almost none of them have a camera — M400C is the exception |

**Consequence for the architecture question you asked:** the tethered/external-compute architecture is not just "also viable," it is *the only one that currently gets you camera + display + high bandwidth + full control simultaneously*, because over USB-C the interfaces are **industry standards** (UVC, UAC, DisplayPort) rather than a vendor's proprietary BLE protocol. You get near-complete programmatic control of a UVC camera and a DP display without any vendor's permission, SDK, or cloud.

The cost is a cable to a pocket device. The benefit is that you skip the entire "how open is their SDK" question, which is the question that kills most of these platforms.

**Second finding:** "open source" in this market almost always means *open app SDK*, not open hardware. Four projects publish actual firmware; two publish actual board files. That list is in §4.

---

## 2. Assignment 1 — Ranked shortlist

Ranked strictly by **how close you get to complete programmatic control without designing your own hardware.** Not by popularity, appearance, or sales.

### #1 — OSAIG / "OpenSource-Ai-Glasses" (RV1106B platform)
- **Maker:** independent Chinese developer, handle `Iam5tillLearning`; build environment maintained under `makevary/AIGLASS_DEV_ENV`
- **Repo:** github.com/Iam5tillLearning/OpenSource-Ai-Glasses · **License:** Apache-2.0
- **Silicon:** Rockchip **RV1106B**, single Cortex-A7, RK962 Wi-Fi/BT combo, IMX219 camera
- **Hardware:** 1080p camera, mic + speaker, optional **640×480 / 30° monocular display**, Wi-Fi b/g/n, BT 5.3, USB 2.0, 8 GB storage, 180 mAh, 43 g
- **OS:** embedded Linux, built from source (`./build.sh` → `update.img`), flashable
- **Developer access:** this is the deepest of anything you can buy. C/C++ SDK with GPIO event subscription, **zero-copy camera frames via shared memory**, audio in/out, shared-memory framebuffer submission to the display, BLE text channel, media-resource arbitration, Unix-domain-socket IPC. **RTSP out of the box** (`rtsp://<ip>:554/live/0`). Root Linux, GDB + OpenOCD debug flow documented
- **Cloud independence:** explicitly documented how to disable the bundled `ai-core`/`guard` cloud services and run pure Rockchip SDK. Verified-by-docs, not verified-by-us
- **What's published:** full system software, SDK, docs, 3D enclosure models
- **What is NOT published:** schematics, PCB, gerbers, BOM. Hardware is bought, not reproduced
- **Buy:** integrated kit via Taobao (needs a forwarder for US delivery, or their promised global platform). Any RV1106B dev board also works as a starting point
- **Status:** active — v0.7.0 released 2026-05-08, 204 stars, 43 forks, 140 commits
- **Risks:** single-maintainer Chinese project; supply chain runs through Taobao; firmware ≥v0.6.x only works on hardware built after 2026-01-01; single A7 core is weak for on-device AI; 180 mAh gives ~45 min of recording
- **Contact:** iam5tilllearning@foxmail.com · Discord: discord.gg/7KqjKFZ7xA

**Why #1:** it is the only thing you can *purchase* that gives you root on a Linux system with camera, audio, display and streaming, where you compile the whole firmware yourself and owe nobody anything.

---

### #2 — Vuzix (M400 / M400C / Z100 / Ultralite OEM Platform)
- **Maker:** Vuzix Corporation, Rochester NY (NASDAQ: VUZI). US company, real OEM business, waveguides made in-house
- **Three distinct products, three different answers:**
  - **M400** — standalone Android, Snapdragon, HD camera, display, IP67. Standard `android.hardware.camera2`, standard Bluetooth APIs, **ADB enabled via a settings toggle**, APK sideload. ~$1,800
  - **M400C** — the same body with **no computer in it**. Pure USB-C peripheral: DisplayPort Alt Mode display in, **standard UVC camera out**, 1080p60, powered by the host. $1,299. *This is the cleanest glasses-as-I/O device that exists*
  - **Z100** — BLE display-only glasses; your app is an ordinary phone app in the ordinary app stores, no glasses-specific gate at all
- **Commercial:** the strongest OEM story of any Western vendor. **Ultralite OEM Platform** and **Ultralite Pro OEM Platform** are configurable reference designs (Ultralite Pro = Snapdragon AR1 Gen 1 + dual Avegant full-colour LCoS + Vuzix binocular waveguides), developed with **Quanta Computer** as manufacturer. Vuzix also sells OEM waveguides standalone and does full-stack engineering services (optical design, integration, prototyping)
- **Display-engine ecosystem:** Avegant, Himax, Hongshi, JBD, Saphlux, Vitrealab — meaning you can specify the light engine
- **Limits:** no firmware source, no bootloader, no schematics. Camera control is whatever Android/UVC gives you, which is a lot but not raw sensor
- **Pricing / MOQ / NRE for OEM:** **[UNKNOWN]** — published nowhere. Vuzix OEM page → engineering services enquiry
- **Contact path:** vuzix.com/pages/oem · technical_support@vuzix.com for SDK questions

---

### #3 — Mentra (MentraOS + Mentra Live + Mentra Mach1)
- **Maker:** Mentra Labs, San Francisco (YC W25). Founders **Cayden Pierce** (CEO) and **Alexander Israelov** (Head of Engineering)
- **MentraOS:** Apache-2.0, full monorepo — cloud backend, React Native runtime, **`asg_client` native Android client that runs on the glasses themselves**, TypeScript SDK, OTA and recovery tooling. Cross-vendor: one app runs on Mentra Live, Mentra Mach1, Vuzix Z100, Even Realities G1
- **Mentra Live** — $299, MediaTek **MTK8766**, 12 MP camera / 119° FOV, 1080p, 3 mics, 2 speakers, Wi-Fi + BT 5.0, 2,200 mAh case, 43 g, **12 h**. Custom Android build. **ADB over Wi-Fi only — no USB ADB.** Streams RTMP to any platform. No display
- **Mentra Mach1** — $349 dev kit, monocular microLED waveguide HUD, mic, **no camera**
- **The gap:** Mentra has a camera device and a display device. It does not have one device with both
- **Internal designation of Mentra Live is "K900."** A Shenzhen ODM, **SmartXY** (topaiglasses.com), lists an OEM/ODM platform called **"XY-008 AI Glasses (K900)"** — MTK + BES dual-chip, 13 MP Sony, 5 mics, dual speakers, Android. **Strong circumstantial match; unconfirmed.** Worth Bernice's time: if it's the same platform, that's the ODM behind the openest camera glasses on the market, reachable directly
- **Commercial:** Mentra explicitly sells the "Mentra Core Engine" to manufacturers as a turnkey OS they can put in their own app under their own brand
- **Contact:** mentraglass.com · github.com/Mentra-Community · Cayden Pierce is reachable and publicly active

---

### #4 — Brilliant Labs (Halo, and Frame before it)
- **Maker:** Brilliant Labs (Singapore/HK). ~$399
- **Halo:** colour micro-OLED display, low-power optical sensor, dual mics with activity detection, **dual bone-conduction speakers**, low-power AI processor, 40 g, all-day battery, display focus adjustable +2 to −6 dioptres
- **Silicon:** **Alif Balletto** (Cortex-M + NPU), **Zephyr RTOS**, Lua runtime for on-device apps, MCUboot, BLE OTA
- **Openness:** the most open commercial vendor in the category. `halo-firmware`, `halo-mcuboot`, `halo-zephyr-alif`, `brilliant_sdk` (BSD-3) all public; company states design files are on GitHub
- **Frame (previous gen):** nRF52840 + **Lattice CrossLink-NX FPGA** for camera/graphics acceleration, Lua on-device, complete firmware **and SystemVerilog RTL** public, buildable against an nRF52840 DK, J-Link and Black Magic Probe debug documented. Last release Oct 2025 — effectively superseded by Halo
- **The hard limit:** **BLE only. No USB-C data, no Wi-Fi, no video streaming.** You can send low-res images to it and read a mic stream. That is the ceiling
- **Contact:** brilliant.xyz · github.com/brilliantlabsAR · Discord

---

### #5 — Rokid Glasses
- 49 g standalone. **Snapdragon AR1 Gen 1** + NXP RT600 for low-power voice. Dual monochrome-green microLED on diffractive waveguide (~480×400/eye, 1500 nits), **12 MP Sony IMX681**, 4 directional mics, 2 speakers, **Wi-Fi 6 / BT 5.3**, 2 GB/32 GB, 210 mAh. $699 (list $799). Display-free sibling "AI Glasses Style" $349
- **OS:** YodaOS-Sprite, built on Android 12 / Qualcomm QSSI
- **Developer access:** unusually ungated — **no account needed**; the Maven repo resolves anonymously. Four parallel paths: phone companion, on-glasses native Android, on-glasses AIUI/JSAR web runtime (Apache-2.0), cloud agent. Sideload works over the phone app, Bluetooth SPP, Wi-Fi LAN, USB, and even **WebUSB from a browser**
- **Bring-your-own-AI is first class** — you can point it at your own model endpoint over SSE (DeepSeek/Qwen/Kimi named). Rare in this class
- **Limits:** native SDKs ship as closed AARs. No firmware, no bootloader. Cloud OpenAPI is enterprise-gated through sales. No public store for native binaries yet
- **Community reverse-engineering is strong:** `buildwithfenna/rokid-docs` documents YodaOS internals and the CXR SDK suite from firmware decompilation

---

### #6 — Qualcomm Snapdragon START + Thundercomm (the "build your own product" path)
- At **AWE, June 2026**, Qualcomm launched **Snapdragon START** (Scalable Turnkey AI-Ready Toolkit). **AI smart glasses is the first supported category**
- **Thundercomm** — a ThunderSoft/Qualcomm joint venture — is the named commercialization partner, supplying a **production-ready AI glasses reference design on Snapdragon AR1+**, covering BSP, optics/display integration, multimodal sensing, certification and mass production
- This is the fastest legitimate route from "we want our own glasses" to "we have our own glasses," without designing from scratch
- **Cost / MOQ / NRE / licensing:** **[UNKNOWN]** — none published
- **Contact:** sales@thundercomm.com · Ali Mesri, SVP North America

---

### #7 — INMO Air3
- Fully standalone Android, Snapdragon, **8 GB / 128 GB**, Sony 0.44" micro-OLED **1920×1080**, 36° FOV, 600 nits, 120 Hz, waveguide, camera, mics, speakers, touchpad + 3DoF ring
- **Ships internationally with real Google Mobile Services** — official Play Store deal, so app install is friction-free, no ADB needed
- Unity SDK + native. Publishing mixes open Play path with a curated first-party store
- ~$899 pre-order / $1,099 retail. **Battery is the killer** — heavily criticised in reviews
- Prose API reference sits behind a login-walled Feishu doc

### #8 — Enterprise tier: RealWear, DigiLens ARGO, Iristick, ThirdEye
- Standard Android, sideload + MDM, no consumer channel. **DigiLens ARGO** runs DigiOS on AOSP 12 and DigiLens also sells waveguides. **Iristick** gates its SDK behind a paid NDA program (~€1,137.50 first year, then €1,000/yr) — worth knowing, not worth pursuing

### #9 — Meta, Android XR, Snap (deliberately last)
Best hardware, least control. Included so the file is complete, not because they fit.
- **Meta Wearables Device Access Toolkit (DAT)** — free public SDK, camera streaming + photo + mic/speaker, and since ~May 2026 **display components** (text, images, lists, buttons, video) on Ray-Ban Display, plus an HTML/CSS/JS "Web Apps" path. **But:** everything routes through the Meta AI app; every tester must be invited by email; **public publishing is partner-gated**; Meta AI itself is closed. Developer Mode runs your build on your own glasses only
- **Android XR** — Jetpack XR SDK is public, Developer Preview 3. **Samsung Galaxy Glasses** unveiled 2026-07-22 (Snapdragon AR1 Gen 1, camera, open-ear audio, ~9 h, privacy toggle, audio-only — display version expected 2027). **XREAL Project Aura**, wired, 70° FOV optical see-through, launching before end of 2026, ≤$1,500; dev kits ship through the **Android XR Developer Catalyst Program** (apply at g.co/dev/catalyst), first cohort strictly limited
- **Snap Spectacles** — the published subscription developer program was withdrawn; a $2,195 Specs pre-order is now the only listed route to hardware

---

## 3. Assignment 2 — Group A: Nearly There (70–90%)

### A1 — OSAIG / OpenSource-Ai-Glasses — **~80%**
Covered in full at #1 above. **Present:** Linux BSP, C/C++ SDK, camera, audio, RTSP, BLE, optional display, 3D models, build system, flashing guide, purchasable hardware. **Missing:** schematics, PCB, gerbers, BOM — you can *run* the platform but not *reproduce the board*. **Obstacles:** single Cortex-A7, 180 mAh, Taobao supply chain, sparse English docs (self-declared 45% documentation completeness). **License:** Apache-2.0, commercially usable. **Verdict: pursue. Buy two kits immediately** — they are cheap, and holding one collapses a month of speculation.

### A2 — Brilliant Labs Frame / Halo — **~85% of a BLE device, ~40% of what you specified**
**Present:** complete firmware, FPGA RTL, bootloader, SDKs, design files, shipping hardware, debug via SWD/J-Link. **Missing:** the bandwidth. No USB-C data, no Wi-Fi, no video path. **Verdict: pursue as a firmware/architecture reference and as the display-side answer, not as the whole device.** The Frame codebase is the single best worked example of "camera + micro-OLED + MCU + FPGA in a glasses form factor" that is public.

### A3 — MentraOS + Mentra Live — **~75% at the OS layer, ~0% at the board layer**
Apache-2.0 OS with a native on-glasses Android client, real hardware abstraction over display/mic/camera/speaker, an app store, and cross-vendor support. **Missing:** any hardware openness at all. **Verdict: pursue — but as a partner conversation, not a fork.** Mentra is the org most likely to say yes to a custom device on their OS.

---

## 4. Group B — Strong Foundation

### B1 — OpenGlass (ETH Zürich, 2026) — the real open-hardware one
- **arXiv 2606.07431**, submitted 2026-06-05, IEEE IoT Journal under review
- **ETH Zürich, D-ITET** — Center for Project-Based Learning (Prof. **Michele Magno**)
- **Architecture:** **GAP9** RISC-V ML SoC + **nRF5340** coordinator + **nPM1300** PMIC + PSRAM + Flash on a main board in the right temple; **flexible FPC interposer** so event-based *or* frame-based cameras drop in **without a PCB redesign**; Prophesee GENX320 DVS camera + Himax HM0360 RGB camera; a separate **development panel** with USB, dedicated **SWD and JTAG**, FT2232H USB bridge, and break-out connectors for battery and camera modules
- **11.5 h of continuous on-device ML from 200 mAh** — the power architecture is the achievement here
- **"All hardware designs, firmware, and models are released open source"**
- **Missing:** no display, no speaker, no Wi-Fi, no USB-C data role. It's a sensing platform
- **People (with published emails):** Pietro Bonazzi (pbonazzi@ethz.ch, neural network), **Julian Moosmann (jmoosmann@ethz.ch — system architecture, this is the hardware contact)**, Ahmet Celik (celika@ethz.ch), Philipp Mayer (mayerph@ethz.ch), Michele Magno (mmagno@ethz.ch)
- **Verdict: pursue hard.** This is the answer to "find people who can discuss it at the firmware → chip → PCB → camera → display → USB → sensor level." They are an academic group that publishes board files, has done this repeatedly (see also their **ElectraSight** eye-tracking glasses), and takes industry collaboration. **Licence terms need checking before any commercial derivation** — [UNKNOWN].

### B2 — OSSG / Open Source Smart Glasses (Team Open Smart Glasses)
- **Repo:** github.com/Mentra-Community/OpenSourceSmartGlasses (formerly TeamOpenSmartGlasses) · **MIT licence** · 1.2k stars, 141 forks
- **What's actually in it:** mechanical (3D-printed frames), **electrical — v1.1 gerbers, LCSC BOM, parts list, published schematics (main + power)**, and ESP32 firmware, plus a step-by-step build wiki: order boards → order parts → assemble → flash
- **Silicon:** ESP32-PICO-D4 with 4 MB SPIRAM. FreeRTOS. Deliberately microcontroller-class: the team's stated design decision was that the glasses only need display + mic + wireless, and the Android phone is the head unit
- **Status:** wiki last meaningfully edited April 2023. **Not dead — graduated.** The same people became Mentra
- **Display:** the weak point; the FAQ tells you to read up on "what display hardware is required," i.e. it was never solved cleanly
- **People:** **Cayden Pierce** (github.com/CaydenPierce) — worked with **Steve Mann** (the founder of wearable computing) at U. Toronto, then MIT; earlier project `emexlabs/WearableIntelligenceSystem`. Now Mentra CEO
- **Verdict: read it, don't build it.** It's the best free education in glasses PCB constraints available, and it's MIT. The people behind it are now reachable through Mentra.

### B3 — Vuzix Ultralite OEM Platform + Quanta
Not open, but it is a *reference design available to be manufactured*, which is functionally the same head start with a licence fee instead of a repo. See #2.

### B4 — Thundercomm Snapdragon AR1+ reference solution
Same category as B3 with Qualcomm silicon. See #6.

---

## 5. Group C — Valuable Components

**Display / optics**
- **JBD (Jade Bird Display, Shanghai)** — microLED. Sells **development kits**: Hummingbird Mini I monochrome optical module dev kit and Hummingbird I polychrome dev kit, each with optical module + control board + USB adapter. AmµLED monochrome projector is 0.35 cc / 0.6 g / 30° FOV in R, G or B. Roadrunner I/II are the 2.5 µm-pitch colour generation. Reference designs jointly developed with **Dispelix** waveguides. **Prices [UNKNOWN]** — contact sales
- **MICROOLED / ActiveLook (Grenoble)** — the sleeper. A complete near-eye HUD subsystem — electronics, firmware, lenses, optics, OLED microdisplay — **controlled entirely over a documented, open, free BLE interface**. Android and iOS SDKs are **Apache-2.0**. A reference design exists with **Quanta + STMicroelectronics**. Shipping in ENGO, Julbo and Cosmo eyewear today. If you want a monocular HUD you can drive without asking anyone's permission, this is it. Contact: Xavier Bonjour, Partnerships & Marketing Director
- **Vuzix waveguides** — sold OEM standalone, US-made, defence-qualified (Collins Aerospace)
- **Avegant** (LCoS light engines), **Himax**, **Saphlux**, **Vitrealab** (laser-LCoS), **Dispelix**, **Lumus + Schott** (geometric reflective waveguide — the technology in Meta's Ray-Ban Display), **Sony** micro-OLED (0.44", 1920×1080, in INMO Air3)

**Compute**
- **Rockchip RV1106 / RV1106B** — the reason OSAIG exists. Tiny Linux camera SoC with a mature open dev-board ecosystem (**Luckfox Pico** line). Cheap, buyable, well documented
- **GAP9** (Greenwaves) — RISC-V ML MCU on the open PULP platform, the core of the ETH work
- **Alif Balletto** — MCU+NPU, Brilliant Halo
- **Qualcomm AR1 Gen 1 / AR1+** — what Rokid, Samsung Galaxy Glasses and Vuzix Ultralite Pro all use
- **XIAO ESP32S3 Sense** — the $25 tier. **omiGlass / OpenGlass** (BasedHardware, MIT) is camera + mic on a 3D-printed clip. Note: the older `BasedHardware/OpenGlass` repo is superseded by omiGlass, and is a *different project* from the ETH OpenGlass despite the identical name

**Cross-platform abstraction (saves you writing N adapters)**
- **MentraOS** — Apache-2.0, real, shipping
- **xg.glass SDK** (HKUST SPARK lab) — one API across Rokid, Meta, Brilliant Frame, RayNeo, Even G1, INMO, Omi, plus a simulator. Their own table is honest about what works: video stream **yes** on RayNeo X2 and INMO Air3, **no** on Rokid/Meta/Frame/Even
- **Extentos** — commercial phone-companion SDK across vendors; their public docs (`extentos.com/docs/ecosystem`) are the best-sourced openness comparison found anywhere, verified 2026-08-24. Read them; treat them as a competitor's homework, not gospel

**Reverse-engineered protocol work (free, and it means the vendor can't fully lock you out)**
- Even Realities G1: `AGiXT/mobile` BLE protocol doc, `even_glasses` pip package, Gadgetbridge support. G2: `i-soxi/even-g2-protocol`, `even_realities_decomp` firmware decompilation
- Rokid: `buildwithfenna/rokid-docs` — YodaOS internals from APKtool/JADX firmware dumps

---

## 6. Dead ends, so nobody re-researches them

- **North / Focals** — acquired by Google 2020, Focals 2.0 cancelled, IP absorbed. North had also bought **Intel's Vaunt** patent portfolio, so that's inside Google too. No licensing path
- **Google Glass Enterprise 2** — sales stopped March 2023, support ended Sept 2023. **Project Iris** shelved 2023
- **ODG (Osterhout Design Group)** — collapsed; patents dispersed. **[UNVERIFIED — needs checking if the IP matters]**
- **Snap** — developer program sign-up withdrawn without notice; hardware is a $2,195 pre-order

---

## 7. The 3–5 conversations worth having, in order

**1. Mentra — Cayden Pierce / Alexander Israelov (San Francisco)**
The only organisation that spans the whole stack: an Apache-2.0 OS, two shipped devices, an ODM relationship, and a stated business of licensing the core engine to manufacturers. They have already solved the exact problem of "one app, many glasses." *Ask:* whether a camera+display device on their platform is possible, what the ODM relationship allows, and whether the K900 platform can be specified with a display.

**2. Vuzix OEM / Engineering Services (Rochester, NY)**
US-based, sells waveguides, sells reference designs, manufactures through Quanta, and already ships the one product that does glasses-as-pure-USB-C-I/O. *Ask:* Ultralite OEM Platform pricing, MOQ and NRE; whether the M400C USB-C viewer architecture can be licensed or re-bodied; whether the waveguide + light engine can be bought separately at low volume.

**3. Thundercomm (sales@thundercomm.com, Ali Mesri NA)**
The Snapdragon START turnkey path. Highest ceiling, most conventional, most expensive. *Ask:* what the AR1+ AI glasses reference solution actually includes, and the real numbers on NRE, MOQ and timeline.

**4. ETH Zürich PBL — Julian Moosmann (system architecture) and Michele Magno (group lead)**
These are the people who can talk at the level you specified. They publish board files, they've built glasses more than once, and a university lab is a far cheaper first technical conversation than a consultancy. *Ask:* the licence terms on the OpenGlass hardware designs, whether the FPC-interposer main board could carry a display, and whether they take industry collaborations.

**5. The OSAIG maintainer (iam5tilllearning@foxmail.com) — and SmartXY (vanda@topaiglasses.com)**
Two different bets on the Shenzhen supply chain. OSAIG is the cheapest way to have real hardware in hand with root access inside a month. SmartXY is a working ODM with its own factory (Dongguan, 5,000 m², 8 lines, 400k units/yr, OEM 1–3 months / ODM 6–9 months) whose K900 platform may be the hardware under Mentra Live.

---

## 8. Open questions for Bernice (primary-source verification)

1. **OSAIG kit** — can it actually be bought and shipped to Louisiana, and what does it cost landed? Does the display variant exist for sale or only in firmware?
2. **Is Mentra Live = SmartXY XY-008 (K900)?** FCC filing under the Mentra Live should name the actual applicant/manufacturer. That single document settles it
3. **Brilliant Halo design files** — the company says design files are on GitHub; confirm what is actually published (schematics? gerbers? enclosure only?) and under what licence
4. **ETH OpenGlass licence** — which licence covers the hardware designs, and does it permit commercial derivation
5. **M400C** — is it still in production and orderable in 2026, and does its UVC/DP behaviour work against a Linux host with no Vuzix software at all
6. **USB-C data on any camera+display glasses** — is there *anything* shipping that exposes UVC + DP + power on one connector with a camera? Right now the answer looks like "M400C only"
7. **Pricing/MOQ/NRE** for: Vuzix Ultralite OEM, Thundercomm AR1+, JBD dev kits, MICROOLED ActiveLook modules. All four are [UNKNOWN] and all four are a single email

---

## 9. What I'd say the answer is, right now

If the goal is a commercial product and you want maximum control with minimum hardware development:

**Prototype on OSAIG (root Linux, camera, RTSP, optional HUD, ~$100s) to prove the application. Design the product architecture as glasses-as-I/O with the compute in a pocket device, so you inherit UVC/DisplayPort standards instead of a vendor's SDK. Then take that proven application to Vuzix or Thundercomm and have them build the real hardware around it.**

The two organisations that could shortcut all of that are Mentra (if they'll do a camera+display device) and SmartXY (if they're already building the hardware Mentra sells).
