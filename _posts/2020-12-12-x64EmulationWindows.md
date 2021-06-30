---
title: x64 emulation has come to Windows on arm insiders
excerpt: Only 10 days late
author: luke
layout: single
tags: Windows Microsoft
classes: wide
---

At the end of September, Microsoft announced their plans to bring full x64 app emulation to Windows on ARM computers in November of this year which... went as well as expected. As with most windows updates this one was also delayed but it was only by a small amount of time and it's good to see this much needed update come sooner rather than later.

However, in the extra month that it took Microsoft to release their x64 emulation one key event has occurred. Apple released their first Apple Silicon Macs and their Rosetta 2 x64 translation service and they released them on the same day. Not only did they manage to release them on the same day but Rosetta 2 runs apps at a near native amount of performance and even surpasses it as points.

The reason for this being important is because the bar has now been raised for what Microsoft needs to reach with it's own x64 emulation but this may not be possible. The reason that it may not be possible is because the M1 CPU found in the mac is able to switch from its normal memory-ordering model to the Intel x86 model meaning that the programs run much faster than they would with regular emulation. This isn't possible on windows due to the way that the arm chips are made and the instruction sets they use. This isn't Microsoft's fault as the chips are made by Qualcomm but it does place them at a significant disadvantage in the way that the emulation on Windows PCs can work compared to Apple's M1 macs.

This does not mean that the Windows version of the emulation won't provide a good experience, we don't have any data to go on at the time of writing. However, the fact that the features have been released in beta through the insider program and requires downloading a separate driver from Microsoft's website doesn't exactly inspire confidence in the new features but it also shows that Microsoft are willing to attempt to develop and work on the features over time.

We'll probably have to wait a week or so until we have some accurate benchmarks in comparison to standard x64 and Apple M1 Rosetta 2 performance but when those benchmarks do arrive I'll be sure to release an article with all the information you need to know to make an informed decision.
