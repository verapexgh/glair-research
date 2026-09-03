# Vuzix

**Classification:** Commercial OEM / Tiered Product Line  
**Maker:** Vuzix Corporation, Rochester NY (NASDAQ: VUZI)  
**Website:** https://vuzix.com  

---

## Overview
Vuzix is a US company with a real OEM business and in-house waveguide manufacturing. They offer the strongest OEM story of any Western vendor in the smart glasses space.

## ⚠️ Financial Distress (Pass 4 — SEC EDGAR Filings)

**This changes how you talk to them.**

| Quarter | Revenue | YoY Change | Net Loss | Cash | Operating Burn |
|---------|---------|-----------|----------|------|---------------|
| **Q1 2026** | $1.39M | -12% | **$7.07M** | $20.17M | — |
| **Q2 2026** | $1.1M | -14% | **$7.7M** | $17.3M | **$6.6M** |

- **Gross margin is negative** — Q1 2026 gross loss $0.38M
- **10-Q carries going-concern language.** Management: "substantial doubt of our ability to continue as a going concern has been alleviated" — based on cash on hand, cost actions, program curtailments, and historical ability to raise capital
- **Quanta's $20M investment is staged**, in closings tied to milestones on Series B Preferred Stock. Analysts flag progress on closings as critical to future funding
- **~$6.6M quarterly operating burn against $17.3M cash = roughly 2–3 quarters runway** absent further raises
- **Repeated ATM issuance and ongoing dilution**
- Accumulated deficit: **$406.97M**
- No debt, working capital $20.78M

### What This Does and Doesn't Mean

- **Does NOT mean don't talk to them.** Their **engineering services line grew 36–47% year on year** while product sales fell 21–28%. Selling engineering to companies like yours is their **growth business.** You will get an enthusiastic, capable response
- **Does mean structure the relationship so a Vuzix funding failure doesn't strand your product.** Don't take a sole-source waveguide with no second source. Don't pay large NRE up front against milestones 12 months out. **Ask directly about the Quanta closings**
- **Defence work with Collins Aerospace** has moved into initial production; management expects more H2 2026 orders, describes 2027 as potentially strong. There is a real business there — just not the smart-glasses product line
- CEO Paul Travers confirmed an unnamed **tier-1 global automotive OEM** customer

### ⚠️ Conflicting Figures
One secondary source reports TTM revenue to Q1 2026 of $23.3M with quarterly revenue of $5.3–6.3M. This **cannot be reconciled** with SEC-sourced $1.39M and $1.1M quarters. **Trust EDGAR; treat the aggregator number as wrong until verified.**

### Updated Recommendation
**Priority conversation #2, with terms.** Talk to them early — engineering services is their growth line and they'll engage. Just don't build a single point of failure on a company burning $6.6M a quarter against $17.3M. Ask about:
1. Ultralite OEM Platform pricing, MOQ, NRE
2. M400C licensing/re-bodying
3. Waveguide + light engine at low volume
4. **Quanta milestone closings and timeline**
5. Second-source strategy if Vuzix faces restructuring

## Three Distinct Products

### M400
- Standalone Android, Snapdragon
- HD camera, display, IP67
- Standard `android.hardware.camera2`, standard Bluetooth APIs
- **ADB enabled via a settings toggle**
- APK sideload supported
- ~$1,800

### M400C
- Same body, **no on-board computer**
- Pure USB-C peripheral: DisplayPort Alt Mode display in, **standard UVC camera out**
- 1080p60, powered by host
- **$1,299**
- *This is the cleanest glasses-as-I/O device that exists*

### Z100
- BLE display-only glasses
- Your app is an ordinary phone app in ordinary app stores
- No glasses-specific gate at all

## OEM / Commercial
- **Ultralite OEM Platform** and **Ultralite Pro OEM Platform** — configurable reference designs
- Ultralite Pro = Snapdragon AR1 Gen 1 + dual Avegant full-colour LCoS + Vuzix binocular waveguides
- Developed with **Quanta Computer** as manufacturer
- Vuzix sells OEM waveguides standalone
- Full-stack engineering services (optical design, integration, prototyping)

## Display-Engine Ecosystem
- Avegant, Himax, Hongshi, JBD, Saphlux, Vitrealab
- You can specify the light engine

## Limits
- No firmware source
- No bootloader access
- No schematics
- Camera control is whatever Android/UVC gives you (a lot, but not raw sensor)

## Pricing / MOQ / NRE
- **[UNKNOWN]** — published nowhere
- Vuzix OEM page → engineering services enquiry

## Contact
- OEM: vuzix.com/pages/oem
- Technical: technical_support@vuzix.com

## Key Open Questions
1. Is M400C still in production and orderable in 2026?
2. Does M400C UVC/DP behaviour work against a Linux host with no Vuzix software?
3. Ultralite OEM Platform pricing, MOQ, and NRE — single email required

## Recommendation
**Priority conversation #2.** US-based, sells waveguides, sells reference designs, manufactures through Quanta. Already ships the one product that does glasses-as-pure-USB-C-I/O. Ask about Ultralite OEM Platform pricing, whether M400C can be licensed/re-bodied, and whether waveguide + light engine can be bought at low volume.
