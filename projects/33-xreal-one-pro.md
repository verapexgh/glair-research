# XREAL One Pro "Eye Camera"

**Classification:** New Find — Community Reverse-Engineering  
**Maker:** XREAL  
**Discovered:** 2026-09-03 via community work (Pass 4)  

---

## The Finding
Community work has driven a **gesture cursor on Samsung DeX** from the XREAL One Pro glasses' **own camera** with **"no proprietary blobs."**

### What This Means
- XREAL One Pro has a forward-facing "eye camera" (not to be confused with eye-tracking)
- Community developers have accessed it without vendor SDKs or closed-source drivers
- Gesture control (presumably hand/head tracking) drives a cursor in Samsung DeX desktop mode
- **Another data point that community reverse-engineering preserves access** even when vendors don't officially support it

## Context
XREAL is primarily known for tethered USB-C DisplayPort glasses (Air series, similar to RayNeo). The One Pro adds a camera and onboard sensors. The community bypassing proprietary blobs to access the camera is significant because:

1. **It shows the camera is accessible over standard protocols** (likely UVC)
2. **It demonstrates that gesture/HUD interaction is possible** without vendor SDK
3. **It adds XREAL to the list of platforms where community work unlocks vendor-locked capabilities**

## Comparison to Similar Community Work
| Platform | Community Reverse-Engineering | Status |
|----------|------------------------------|--------|
| **Rokid** | `buildwithfenna/rokid-docs` — YodaOS internals from decompilation | Active (48★) |
| **Even Realities G1/G2** | BLE protocol docs, Gadgetbridge support | Active |
| **XREAL One Pro** | Eye camera access, gesture cursor, no proprietary blobs | New find |

## Recommendation
Worth monitoring the XREAL community for additional open-access developments. If the camera is indeed standard UVC, the One Pro could be a viable glasses-as-I/O platform similar to Vuzix M400C but at consumer price points.

## Verification Needed
1. What exact protocol is the eye camera using? (UVC? Custom?)
2. Is the gesture recognition running on-glasses or on the host (Samsung DeX)?
3. Is there a published repo or writeup for this community work?
4. Can the camera stream be accessed from Linux (not just Samsung DeX)?
