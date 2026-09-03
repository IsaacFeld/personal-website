---
name: "Pipelined Processor.md"
domain: 1
written: "2026-01-29T16:10:00.000Z"
finished: false
tags: [" computer_architecture  "," logic  "," integrated_circuits  "," cpu  "," pipelining"]
related: ["Single Cycle Processor","Multi Cycle Processor","CPU Hazards"]
summary: "The pipelined processor is a improved version of the [[Multi Cycle Processor]] that utilizes pipelining by loading the next instruction as soon as the current one has finished loading, allowing for maximum throughput of our processor."
footnotes: []
---

  




In a pipelined processor, on each cycle a new instruction is loaded into the CPU. This seems good on paper, but when implemented leads to many issues known as **<a class="wikiLink" href="http://localhost:4321/wiki/cpu-hazards"> hazards </a>**. We also want to minimize the difference between the durations of each indvidual task, as having wildly different durations leads to more **slack**, and less **speed up**.

##### Structure of a Pipelined Processor

**Stages of a Pipelined Processor**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129182928.png" alt="Pasted image 20260129182928.png"/></div>

Between each section are large D Flip Flops that hold all results of the previous section, to be used in the next cycle on the next section. **Control signals** are also stored in flip flops. This is kind of like a large shift register as seen in <a class="wikiLink" href="http://localhost:4321/wiki/sequential-circuits"> Sequential Circuits </a>. The Control Unit is identical to the one of the single cycle processor.

An issue that isn't a hazard occurs during the **writeback** phase. When we eventually compute the address, and retrieve the value from memory the write address of the register bank now stems from a **different** instruction! In order to fix this, we need to propagate the writeback address along the D Flip Flops so that our result and address arrive at the **same time**. This syncrhonization technique is very easy to implement.

**Writeback Corrected Pipeliend Processor**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129182911.png" alt="Pasted image 20260129182911.png"/></div>

**Pipelining Speed Up**

We can use a simple formula to calculate the speed up that we get from pipelining a processor:

Let's take $\large t$ as the time it takes to fully process **one** instruction **without** pipelining.
Let's take $\large k$ as the # of pipeline steps.
Let's take $\large m$ as the # of instructions computed.

We can derive that the the runtime of a single step in our pipeline is: $\large \frac{t}{k}$.

For one instruction: $\huge k \times \frac{t}{k} = t$ there is **no** speedup. (Makes sense).
For $\large m \ge 1$:
The runtime of our pipeline is: $\large t + (m-1) \times \frac{t}{k}$
The runtime without a pipeline is: $\large t \times m$.

If we continue the formula for larger values of m, as m grows to **infinity**, then our speedup equation reaches k.

$$
Speedup = \frac{without \space PL}{with \space PL} = \frac{t \times m}{ t + (m-1) \times \frac{t}{k}}
$$

$$
\huge \lim _{m ->  \infty}Speedup = \lim_{m -> \infty} \frac{t \times m}{ t + (m-1) \times \frac{t}{k}} = k
$$

Thus as we add more and more instructions to our processor, pipelining becomes more and more efficient at speeding up processing times.

**Reality...**

In reality, this perfect k speedup is **never** realized. This is because of **slack**. In a perferct world all our pipeline steps are split up into **equal** length cycles, and therefore there is not a single nanosecond where the CPU idles. However due to the nature of memory, and how long it takes to read/write memory we create slack. This is because an execute stage can be as simple as a add operation that takes mere nano seconds to complete, whereas a memory access with a **cache-miss** can take milliseconds. Therefore we need to adjust our cycle times so that they equal the **longest critical path**'s time. The critical path is just the path within a pipeline step that can **take the longest**. On top of this, branch mispreidctions, and the occasional stall lead to deviations from the desired k speedup.

**Extra Speed Up Laws**



Amdahl's Law (Amdahlsche Gesetz)
- The speedup in a processor is limited by the **part** of the program that cannot be parallelized or pipelined.
- This equation answers the question of what our **maximum** speedup is for a given program.

This law applies to both parallelization and pipelining.

$\large t_{s}$ represents the duration of the instruction is not parallelizable/pipelinable (serial)
$\large t_{p}$ represents the duration of the instruction that is parallelizable/pipelinable
$\large T$ represents the total duration of the instruction.
$\large n$ represents the number of pipeline steps or cores.
-> $\large t_{s} + t_{p} = 1 = T$
$$\huge S_{Amdahl} = \frac{T}{t_{s} + \frac{t_{p}}{n}}$$
For large n:
$$\huge  \lim_{n -> \infty} {S_{Amdahl} = \frac{T}{t_{s} + \frac{t_{p}}{\infty}}} = \frac{T}{t_{s}} = \frac{t_{s} + t_{p}}{t_{s}}$$

Gustafson's Law (Gustafsonsche Gesetz) 
- This equation measures how the parallelizable component of a program grows as the problem grows in size.
$$ \huge S_{Gustafson}(n) = \frac{t_{s} + n \times t_{p}}{1}$$



  