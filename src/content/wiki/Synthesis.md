---
name: "Synthesis.md"
domain: 1
written: "2026-01-28T18:00:00.000Z"
finished: false
tags: [" computer_architecture  "," integrated_circuits  "," logic"]
related: []
summary: "\ntags:\n  - computer_architecture\n  - integrated_circuits\n  - logic\ndomain: E\nfinished: false\n\n \n**Date**: 28.01.26\n**Time**: 19:00 \n\n **Brief Summary**\n "
footnotes: []
---

  
tags:
  - computer_architecture
  - integrated_circuits
  - logic
domain: E
finished: false

 
**Date**: 28.01.26
**Time**: 19:00 

> **Brief Summary**
> Synthesis is the act of converting logical expressions into integrated circuits through the use of truth tables, kv diagrams, reduction, and more.



**Cost & Depth**

The cost of a circuit is equal to the # of gates used.
The depth of a circuit is the maximum # of gates that a signal can pass through before reaching the output.

**Synthesis of a Half Adder via a Truth Table**

To synthesize a half adder we first need to define the outputs for every combination of input. 

| a b | s  c  |
| 0 0 | 0  0 |
| 0 1 | 1   0 | 
| 1 0 |  1  0 |
| 1 1  | 0  1  |

From this table we can derive that the formula for the sum of a half adder is simply the $\huge \oplus$ gate, and the formula for the carry is just the $\huge \land$ gate. Therefore we can derive that our circuit has one output that stems from each gate.





  