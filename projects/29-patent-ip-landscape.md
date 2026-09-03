# Patent & IP Landscape

**Status:** Was a blank page. Now scoped, named, and budgeted.  
**Date:** 2026-09-03  
**Source:** PatentVest PV Pulse report, USPTO filings, SEC-linked analyst coverage, LWN, TheElec-adjacent coverage  

---

## The Portfolios

**PatentVest PV Pulse, "Who's Actually Building the AI in AI Smart Glasses?", published 27 Aug 2026.** Analyses validated patent activity across 12 companies: the seven shipping AI smart glasses, two component suppliers whose IP sits underneath nearly every product, and three large firms with no shipping product.

### Headline Finding
**Apple and Microsoft hold some of the strongest AI-capability patent positions in the entire category despite neither shipping a product.**

### Portfolio Sizes (Patent Families)

| Company | Families | Note |
|---------|----------|------|
| **Meta** | ~1,900 | Largest validated portfolio in the category |
| **Apple** | ~1,550 | AI capabilities relevant to smart glasses. Ships nothing |
| **Samsung** | ~550 | Glasses-system patents |
| **EssilorLuxottica** | ~530 | Also the manufacturing partner for Ray-Ban Meta |
| **Microsoft** | 409 | AR rendering. Ships nothing |

Report: `insights.patentvest.com/whos-actually-building-the-ai-in-ai-smart-glasses`

---

## The Optics IP — Where You Can Actually Get Blocked

### Fragmented, Not Owned
The diffractive-optics/waveguide patent field is **fragmented, not owned**. Assignees across US, CN, JP, KR, EP and FI include:

- Microsoft
- Magic Leap
- Huawei
- Meta
- **Goertek Optical Technology**
- Coretronic
- **Tampere University Foundation**
- Mytecvision
- **Fuzhou University**
- **Suzhou University**

Patent analytics describe this fragmentation as **"a characteristic signal of a technology domain still in competitive flux."**

**Translation:** There is no single gatekeeper you can license from and be safe. There are a dozen-plus parties with claims, several of them universities, and freedom-to-operate is a real piece of work.

### Litigation Precedent Exists
- **Percept Technologies v. Magic Leap** — AR eyewear patent case, remanded, analysed publicly for its freedom-to-operate implications
- **Small-entity plaintiffs do sue in this category**

### Meta's Facial-Recognition Filing
- **US 2026/0238876 A1**, "Smart Cameras Enabled by Assistant Systems"
- Application 19/530,299, filed 4 Feb 2026, published 13 Aug 2026
- Continuation of filings from 2019 and 2022
- Describes: facial recognition, expression analysis, gaze and object recognition; ranks people in view by "interestingness" using stored social-relationship data; auto-cuts video around them
- **Worked example:** identifying the wearer's wife at a dinner party

Separately, **WIRED found an unreleased facial-recognition system called "NameTag"** inside the Meta AI app in June 2026 — converting faces to biometric signatures on-device, cropping and indexing unrecognised faces for later. Meta removed most of it a day after the report and called it exploratory.

**Implication:** Any camera glasses product will be read by regulators against **Meta's filings, not against your intentions.**

---

## Lumus → Quanta Licensing Agreement (1 September 2026)

**Announced two days before this report.**

- **Lumus** (Ness Ziona, Israel) expanded its Quanta partnership into a **licensing agreement**
- Quanta will **manufacture three new geometric waveguides**:
  - **Z-30 2.0** — 30° FOV, thinner/lighter engine
  - **A-Lens 30** — low-cost line
  - **A-Lens 50** — low-cost line
- **A-Lens family:** roughly **half the weight and thickness** of previous generation
- **Lumus** is the waveguide in Meta's Ray-Ban Display (glass by Schott)
- **Quanta** is the same manufacturer behind Vuzix Ultralite OEM and MICROOLED/ST reference design
- **Quanta FY2025 revenue:** ~**US$68 billion**, ~80,000 employees

### Why This Matters
The single most patent-encumbered subsystem now has a **licensed, high-volume, low-cost manufacturing path**. Buying a module from Lumus/Quanta, Vuzix, Raontech or Lingxi **transfers the optics IP exposure to the supplier**. Designing your own combiner keeps it.

This is a **stronger argument** for the "display is a part number" conclusion than price was.

---

## Freedom-to-Operate Is Now a Named, Scoped Piece of Work

What's above is a **landscape sketch, not a clearance.** A real FTO opinion from a patent attorney should be scoped **before any hardware spend** is committed.

| Task | Owner | Budget |
|------|-------|--------|
| FTO opinion for chosen optics module | Patent attorney | Real budget line |
| Verify module supplier carries IP indemnity | Supplier contracts | Ask in first email |
| Check university-licensed patents (Tampere, Fuzhou, Suzhou) | Attorney | May be surprisingly cheap to license |

---

## Verification Needed
1. Read PatentVest report directly (link above)
2. Pull USPTO search for "waveguide" + "near-eye" + "augmented reality" in last 5 years
3. Check if any of the university patents (Tampere, Fuzhou, Suzhou) are available for license
4. Verify Quanta's Lumus license terms — does it include indemnity for downstream customers?
