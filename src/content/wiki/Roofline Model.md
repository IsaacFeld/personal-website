---
name: "Roofline Model.md"
domain: 1
written: "2026-01-30T19:46:00.000Z"
finished: false
tags: [" computer_architecture  "," cpu"]
related: ["Pipelined Processor"]
summary: "The roofline model can tell us where a programs runtime stops being dependant on actual compute power, and is instead limited by memory access times."
footnotes: []
---

  




Within the roofline model we measure the following statistic as our x-axis:
$$ \huge I = \frac{W}{Q} = \frac{\#  \space of \space Operations \space in \space FLOP}{Required \space Memory \space Transfer \space in \space Bytes} $$

Then our y-axis is our computer's compute power in FLOP/s, but usually TFLOP/s since computers nowadays can compute insanely quickly. A FLOP stands for a Floating Point Operation where two Floating Point Numbers are operated on. This is the smallest unit for measuring compute power.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260130205436.png" alt="Pasted image 20260130205436.png"/></div>

By looking at this graph we can see that beyond an Arithmetic Intensity of 8 our program becomes **memory bound**. However before that it is **compute bound** as the speed of our program is limited by the maximum compute power.



  