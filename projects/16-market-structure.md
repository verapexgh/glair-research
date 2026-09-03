# Market Structure: The Three Tiers

**Date:** 2026-09-03  
**Source:** GLAIR Research Pass 1  

---

## The Core Finding

No product on the market has: **camera + mic + speaker + near-eye display + USB-C data + wireless + continuous A/V streaming + deep programmatic control.**

The market has split into three tiers defined by **the link between the glasses and everything else**:

## Tier 1: BLE Display Glasses
| Attribute | Detail |
|-----------|--------|
| **Link** | Bluetooth LE, ~kilobytes/sec |
| **Examples** | Even G1/G2, Vuzix Z100, Mentra Mach1, Brilliant Halo/Frame |
| **Can do** | Push text/bitmaps to HUD, pull mic stream, take stills |
| **Cannot do** | Stream video. Physically cannot — pipe too small |

## Tier 2: Wi-Fi Camera Glasses
| Attribute | Detail |
|-----------|--------|
| **Link** | Wi-Fi + on-glasses SoC |
| **Examples** | Mentra Live, Rokid, RayNeo, INMO, Vuzix M400, RealWear, OSAIG |
| **Can do** | Continuous 1080p streaming, on-device compute, real OS |
| **Cannot do** | Battery burns in 30–60 min under continuous camera; most have no display or a very small one |

## Tier 3: USB-C Tethered Viewers
| Attribute | Detail |
|-----------|--------|
| **Link** | USB-C DisplayPort Alt Mode + UVC |
| **Examples** | Vuzix M400C, XREAL, RayNeo Air, VITURE, XREAL Project Aura |
| **Can do** | Full display bandwidth, full camera bandwidth, zero battery/thermal problem, host does all compute |
| **Cannot do** | A cable. And almost none have a camera — M400C is the exception |

## Consequence for Architecture
The **tethered/external-compute architecture** is not just "also viable" — it is **the only one that currently gets you camera + display + high bandwidth + full control simultaneously.** Over USB-C, the interfaces are **industry standards** (UVC, UAC, DisplayPort) rather than a vendor's proprietary BLE protocol.

You get near-complete programmatic control of a UVC camera and a DP display without any vendor's permission, SDK, or cloud.

The cost is a cable to a pocket device. The benefit is that you skip the entire "how open is their SDK" question.
