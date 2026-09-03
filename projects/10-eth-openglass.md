# OpenGlass (ETH Zürich)

**Classification:** Strong Foundation — Real Open Hardware  
**Institution:** ETH Zürich, D-ITET — Center for Project-Based Learning  
**Paper:** arXiv 2606.07431 (submitted 2026-06-05, IEEE IoT Journal under review)  
**Group Lead:** Prof. Michele Magno  

---

## Architecture
- **GAP9** RISC-V ML SoC + **nRF5340** coordinator + **nPM1300** PMIC + PSRAM + Flash
- Main board in the **right temple**
- **Flexible FPC interposer** so event-based *or* frame-based cameras drop in **without a PCB redesign**
- Prophesee GENX320 DVS camera + Himax HM0360 RGB camera
- Separate **development panel** with USB, dedicated **SWD and JTAG**, FT2232H USB bridge, and break-out connectors for battery and camera modules

## Power Achievement
**11.5 h of continuous on-device ML from 200 mAh** — the power architecture is the primary achievement here.

## Openness
- "All hardware designs, firmware, and models are released open source"
- **Missing:** no display, no speaker, no Wi-Fi, no USB-C data role
- It's a **sensing platform**, not a full glasses system

## License
- **[UNKNOWN]** — needs checking before any commercial derivation

## People (with published emails)
| Name | Email | Role |
|------|-------|------|
| Pietro Bonazzi | pbonazzi@ethz.ch | Neural network |
| **Julian Moosmann** | **jmoosmann@ethz.ch** | **System architecture — hardware contact** |
| Ahmet Celik | celika@ethz.ch | |
| Philipp Mayer | mayerph@ethz.ch | |
| Michele Magno | mmagno@ethz.ch | Group lead |

## Related Work
- Also built **ElectraSight** eye-tracking glasses

## Recommendation
**Priority conversation #4. Pursue hard.** This is the answer to "find people who can discuss it at the firmware → chip → PCB → camera → display → USB → sensor level." They are an academic group that publishes board files, has done this repeatedly, and takes industry collaboration. Ask about license terms, whether the FPC-interposer main board could carry a display, and whether they take industry collaborations.
