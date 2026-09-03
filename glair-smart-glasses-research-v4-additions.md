# GLAIR — Research Pass 4
**Date:** 2026-09-03 · **Additions only.** Everything here was checked against the dashboard at verapexgh.github.io/glair-research and is not already on it.

Sources used from the list: USPTO/patent intelligence, SEC EDGAR, LWN and the Linux-rockchip kernel work, LCSC and Rutronik, Luckfox forums, TheElec-adjacent Korean coverage, Hackaday/Hackster, GitHub topic trawls.

Same rule as always — leads, not facts, except where noted as coming from an SEC filing or a kernel mailing list, which are primary.

---

## 1. The patent and IP landscape — the section that was a blank page

### The portfolios
**PatentVest PV Pulse, "Who's Actually Building the AI in AI Smart Glasses?", published 27 Aug 2026.** Analyses validated patent activity across 12 companies: the seven shipping AI smart glasses, two component suppliers "whose IP sits underneath nearly every product in the space," and three large firms with no shipping product.

Its headline finding is the useful one: **Apple and Microsoft hold some of the strongest AI-capability patent positions in the entire category despite neither shipping a product.**

Reported portfolio sizes (patent families):

| Company | Families | Note |
|---|---|---|
| Meta | ~1,900 | Largest validated portfolio in the category |
| Apple | ~1,550 | AI capabilities relevant to smart glasses. Ships nothing |
| Samsung | ~550 | Glasses-system patents |
| EssilorLuxottica | ~530 | Also the manufacturing partner for Ray-Ban Meta |
| Microsoft | 409 | AR rendering. Ships nothing |

Report is public: `insights.patentvest.com/whos-actually-building-the-ai-in-ai-smart-glasses`

### The optics IP, which is the part that can actually block you
The diffractive-optics/waveguide patent field is **fragmented, not owned**. Assignees across US, CN, JP, KR, EP and FI include Microsoft, Magic Leap, Huawei, Meta, **Goertek Optical Technology**, Coretronic, **Tampere University Foundation**, Mytecvision, **Fuzhou University** and **Suzhou University**. A patent-analytics read describes that fragmentation as "a characteristic signal of a technology domain still in competitive flux."

Translated: there is no single gatekeeper you can license from and be safe. There are a dozen-plus parties with claims, several of them universities, and freedom-to-operate is a real piece of work.

**Litigation precedent exists.** *Percept Technologies v. Magic Leap* — AR eyewear patent case, remanded, analysed publicly for its freedom-to-operate implications. Small-entity plaintiffs do sue in this category.

### Lumus → Quanta, announced 1 September 2026 (two days ago)
Lumus (Ness Ziona, Israel) expanded its Quanta partnership into a **licensing agreement letting Quanta manufacture three new geometric waveguides**: **Z-30 2.0** (30° FOV, thinner/lighter engine), **A-Lens 30** and **A-Lens 50**. The A-Lens family is the low-cost line — roughly **half the weight and thickness** of the previous generation.

Lumus is the waveguide in Meta's Ray-Ban Display (glass by Schott). Quanta is the same manufacturer behind the Vuzix Ultralite OEM platform and the MICROOLED/ST reference design — FY2025 revenue ~**US$68bn**, ~80,000 employees.

**Why this matters to GLAIR:** the single most patent-encumbered subsystem now has a licensed, high-volume, low-cost manufacturing path attached to it. Buying a module from Lumus/Quanta, Vuzix, Raontech or Lingxi **transfers the optics IP exposure to the supplier**. Designing your own combiner keeps it. That is a stronger argument for the "display is a part number" conclusion than the price was.

### Meta's facial-recognition filing — relevant to the privacy section already on the dashboard
**US 2026/0238876 A1, "Smart Cameras Enabled by Assistant Systems,"** application 19/530,299, filed 4 Feb 2026, published 13 Aug 2026 — a continuation of filings from 2019 and 2022. Describes facial recognition, expression analysis, gaze and object recognition; ranks people in view by "interestingness" using stored social-relationship data and auto-cuts video around them; the worked example is identifying the wearer's wife at a dinner party.

Separately, **WIRED found an unreleased facial-recognition system called "NameTag" inside the Meta AI app in June 2026** — converting faces to biometric signatures on-device, cropping and indexing unrecognised faces for later. Meta removed most of it a day after the report and called it exploratory.

This is the documentary backbone under the backlash section already on the dashboard. It also means **any camera glasses product will be read by regulators against Meta's filings, not against your intentions.**

---

## 2. A risk on the #1 pick that isn't on the dashboard

The dashboard says OSAIG gives you "root Linux" and "build system" — true. What it doesn't say is what's underneath.

**RV1106 is not in the mainline Linux kernel.** From the Luckfox forums, answered by their own staff:

> "rv1106 has not been merged into the mainline kernel support. The kernel here has been heavily modified by Rockchip... Additionally, the hardware of rv1106 has not been fully open-sourced by Rockchip, which greatly increases the difficulty."

Concretely:
- The Luckfox SDK is pinned to Rockchip's vendor kernel at **5.10.110**, later **5.10.160**. U-Boot was shipped as **v2017.11**
- An independent effort (`gflix/rockchip-rv1106-dev`) has a mainline **6.18.x** booting with a minimal patch, but states plainly: **"No drivers or SoC function have been integrated yet"**
- The **ISP** (camera_engine_rkaiq) and the **NPU** ship as binary blobs. One OpenWRT porting effort dropped rkaiq entirely as non-working and planned to substitute "binary ISP"
- Mainlining has only just started: **LWN, 29 July 2026** covers an initial patch series adding RV1106 and RV1103 support, following recently merged **RV1103B** support. The clock driver is ported from the vendor kernel; **no resets exposed yet**, CPU pvtpll initialised but not calibrated

**Two consequences.**

First, "we compile the whole firmware ourselves" is true at the build-system level and false at the kernel level. You are on a vendor fork of a 2020 kernel with proprietary blobs for the two things that matter most on this device — the camera pipeline and the NPU.

Second, and this is the one nobody has connected: **the EU Cyber Resilience Act finding already on the dashboard requires security updates to remain available for 10 years.** Committing to that on a vendor-forked 5.10 kernel with binary ISP and NPU blobs, from a chip vendor that has not opened the hardware documentation, is a commitment you cannot unilaterally keep. If the EU is ever a market, this is a structural problem with the on-glasses-Rockchip path, not a detail.

*Nuance worth checking:* the dashboard says **RV1106B**, and the LWN work describes **RV1103B** support as already merged with RV1106/RV1103 following. The B-series may be further along on mainlining than the original parts. Worth confirming precisely which silicon variant OSAIG ships and where that exact part sits.

---

## 3. Real component prices and Western procurement

The dashboard lists silicon with question marks on price. Here are actual catalogue numbers.

| Part | Distributor | Price | Stock |
|---|---|---|---|
| **Rockchip RV1106G2** | LCSC (C5272606) | from **$9.48–$11.35** | 751 |
| **Rockchip RV1106G3** | LCSC (C5328706) | from **$5.33–$21.59** (tiered) | 1,388 |
| **Rockchip RV1106G3** | **Rutronik24** (EU distributor) | listed | — |

Two things follow:

**You can buy Rockchip silicon through a Western distributor.** Rutronik24 stocking RV1106G3 means the chip does not require a Chinese channel or an NDA relationship — unlike Unisoc and Bestechnic, where I found no open Western distribution and every route ran through a solution house.

**Variant choice matters more than the dashboard implies.** RV1106G3 is specified at **Cortex-A7 @1.2 GHz, 1.0 TOPS NPU, ISP3.2 up to 8MP@15fps, integrated 256 MB DDR3L** — against the 0.5 TOPS figure carried in the report. Same family, materially different part. Confirm which one OSAIG actually uses before pricing anything.

**Export control rides along with the part.** Luckfox's own product page states Rockchip prohibits shipping the RV1106 core board or providing technical support to Russia, Belarus, Cuba, Iran, North Korea, Syria, Crimea, and the Donetsk/Luhansk regions. Irrelevant for Louisiana; relevant the moment you sell internationally, and it means there is an export-control regime attached to this silicon that must be honoured downstream.

---

## 4. Vuzix is in financial distress — and they're priority conversation #2

From SEC filings and earnings coverage. This is the most consequential thing in pass 4.

**Q2 2026:** revenue **$1.1M**, down 14% year on year. Net loss **$7.7M**. Operating cash burn **$6.6M**. Cash **$17.3M**.
**Q1 2026:** revenue **$1.39M**, down 12%. Net loss **$7.07M**. Gross loss $0.38M — **gross margin is negative**. Cash **$20.17M**, no debt, working capital $20.78M, sustained by **$5.78M of net proceeds from an at-the-market equity program**. Accumulated deficit **$406.97M**.

**The 10-Q carries going-concern language.** Management's position: "substantial doubt of our ability to continue as a going concern has been alleviated" — on the basis of cash on hand, cost actions, program curtailments, and historical ability to raise capital. That is management's assertion, not an absence of the issue.

**Quanta's $20M investment is staged**, in closings tied to milestones on Series B Preferred Stock. Analyst commentary flags progress on those closings as critical to future funding.

**At ~$6.6M quarterly operating burn against $17.3M cash, the runway is roughly two to three quarters absent further raises.** They have raised repeatedly through ATM issuance and dilution is ongoing.

**What this does and doesn't mean for GLAIR:**
- It does **not** mean don't talk to them. Their **engineering services line grew 36–47% year on year** while product sales fell 21–28%. Selling engineering to companies like yours is their growth business. You will get an enthusiastic, capable response
- It does mean **structure the relationship so a Vuzix funding failure doesn't strand your product.** Don't take a sole-source waveguide with no second source. Don't pay large NRE up front against milestones 12 months out. Ask directly about the Quanta closings
- The **defence work with Collins Aerospace has moved into initial production**, management expects more orders in H2 2026 and describes 2027 as potentially strong. There is a real business there — it just isn't the smart-glasses product line
- CEO Paul Travers confirmed an unnamed **tier-1 global automotive OEM** customer

⚠️ **Conflicting figures, flagged rather than resolved.** One secondary source reports TTM revenue to Q1 2026 of $23.3M with quarterly revenue of $5.3–6.3M. That cannot be reconciled with the SEC-sourced $1.39M and $1.1M quarters. **Trust EDGAR; treat the aggregator number as wrong until Bernice checks the 10-K.**

---

## 5. Smaller additions

- **Rokid Nexus** — Rokid has a plugin ecosystem branded "Nexus" with third-party plugins shipping (an RSS/Atom reader for the HUD, fully operable with the **R08 ring**). The dashboard covers Rokid's four SDK paths but not Nexus or the ring as an input device
- **XREAL One Pro "Eye camera"** — community work drives a gesture cursor on Samsung DeX from the glasses' own camera with **"no proprietary blobs."** Another data point that community reverse-engineering preserves access
- **Odak** — an open-source computational-display and holography toolkit (computer-generated holography, perceptual graphics, lensless cameras). Not a product; the right starting point if near-eye display design ever becomes in-house work
- **LILYGO T-Glass detail** the dashboard has right but under-uses: the **Bosch BHI260AP** carries an ML coprocessor, so head-gesture recognition runs on the IMU itself rather than the main MCU. That's the same architectural trick as the SoC+MCU split, at hobby scale

---

## 6. What pass 4 changes

1. **The optics-supplier argument got stronger, and for a new reason.** It was "cheap and available." It is now also "someone else carries the patent exposure." The Lumus–Quanta licence is two days old and it makes the licensed-module route cheaper and lower-risk at the same time
2. **The OSAIG recommendation stands for prototyping and weakens for product.** Buy the kits, prove the application, learn the platform. But a vendor-forked 5.10 kernel with binary ISP and NPU blobs is not a ten-year software commitment, and the CRA says ten years
3. **Vuzix moves from "priority conversation #2" to "priority conversation #2, with terms."** Talk to them early — engineering services is their growth line and they'll engage. Just don't build a single point of failure on a company burning $6.6M a quarter against $17.3M
4. **Freedom-to-operate is now a named, scoped piece of work,** not a blank page. A dozen-plus assignees, universities among them, live litigation precedent. It's a real budget line before any hardware is committed

---

## 7. Still not done

- **1688 and Taobao direct** — still the biggest unpriced layer
- **The Discords** — OSAIG, Brilliant, Mentra, TOSG. Still the highest-signal source nobody has opened
- **A real FTO opinion** — what's above is a landscape sketch, not a clearance. That's a patent attorney's job and it should be scoped before any hardware spend
- **The FCC grantee lookup on Mentra Live** — I could not find the filing through search; it needs a direct query against the FCC OET database rather than fccid.io's indexed pages
- **Japanese sources** — still zero
- **Bestechnic and Unisoc procurement** — no open Western distribution found for either. If a low-cost SoC is the plan, the chip only comes with a solution house attached. That is itself a finding, and it should be verified rather than assumed
