# Cross-Platform SDKs & Reverse Engineering

**Classification:** Abstraction Layers & Community Research  
**Purpose:** Write once, run on multiple glasses; or bypass vendor restrictions  

---

## MentraOS
- Apache-2.0
- Real, shipping
- One app runs across multiple vendor hardware
- See full profile: `03-mentra.md`

## xg.glass SDK (HKUST SPARK Lab)
- One API across:
  - Rokid
  - Meta
  - Brilliant Frame
  - RayNeo
  - Even G1
  - INMO
  - Omi
- Plus a simulator
- Honest capability table:
  - **Video stream YES:** RayNeo X2, INMO Air3
  - **Video stream NO:** Rokid, Meta, Frame, Even

## Extentos
- Commercial phone-companion SDK across vendors
- Public docs at extentos.com/docs/ecosystem
- Best-sourced openness comparison found anywhere
- Verified 2026-08-24
- **Treat as a competitor's homework, not gospel**

---

## Reverse-Engineered Protocol Work

### Even Realities G1
- `AGiXT/mobile` BLE protocol doc
- `even_glasses` pip package
- Gadgetbridge support

### Even Realities G2
- `i-soxi/even-g2-protocol`
- `even_realities_decomp` firmware decompilation

### Rokid
- `buildwithfenna/rokid-docs`
- YodaOS internals from APKtool/JADX firmware dumps
- **Live GitHub Stats (2026-09-03):** 48 stars, 7 forks, 0 open issues

## Recommendation
If you must support multiple closed platforms, **xg.glass** is the most honest abstraction. **Extentos** docs are a must-read competitive analysis. Reverse-engineered protocols mean vendors can't fully lock you out — preserve this knowledge.
