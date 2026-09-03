---
name: "CPU Hazards.md"
domain: 1
written: "2026-01-29T17:14:00.000Z"
finished: false
tags: [" computer_architecture  "," cpu  "," pipelining"]
related: ["Pipelined Processor","RISC-V Assembly"]
summary: "CPU hazard arise when we pipeline our processor because loading instructions without break can lead to data inconsistencies, and control failures.                     "
footnotes: []
---

  


 

##### Data Hazards

When we load instruction after instruction without stopping we can create **race conditions** and **data conflicts**. This is because our <a class="wikiLink" href="http://localhost:4321/wiki/pipelined-processor"> Pipelined Processor </a> works in steps, and it is possible that the **current** instruction in the **decode** phase needs a register who's value depends on the previous instruction's **writeback** phase being completed. This is an example of a **data dependancy**, where the data of a given operation **depends** on the data of another operation. There are **three** kinds of **data dependancies**, and only one of them is an actual **data conflict**.

**Data Dependencies**

`RAW` - The RAW or Read After Write data dependency occurs when we read a value that was **just** modified. The exact duration of "just" is explained later. The RAW data dependancy is the only data dependancy that is an actual **data conflict**, more on that below

**Example of a RAW**
```r
add t0, t1, t2
mul t3, t0, t3
```

This is an issue in our pipelined processor, as the value of t0 is not computed in time for when our `mul` instruction loads the register values for `t0, t3` from the register bank.


`WAW` - The WAW or Write After Write data dependency occurs when we write to a value that has **just** been written to.

**Example of a WAW**
```r
add t0, t2, t1 // Writes t0
sub t0, t3, t4 // Writes t0
```

Moving a WAW around can lead to issues, because are t0 value might be referenced by another operation, and we need to make sure that its value is the result of the 2nd operation and not the 1st when it is read. 


`WAR` - The WAR or Write After Read data dependancy occurs when we write to a value that has **just** been read from.

**Example of a WAR**
```r
add t0, t1, t2 // Reads t1
add t1, t3, t4 // Writes t1
```

This is an issue if we swap the two operations around, because now we change the value of t1 before performing the operation with t1 as an operand.


 Note: A `RAR` or Read After Read is **not** considered a **data dependancy** as it can **never** lead to a data hazard.

**Data Conflicts**

In German: (Datenabhängigkeiten vs. Datenkonflikte)
We use two different words to differentiate between problematic data hazards, and **usually** unproblematic data hazards. A data **dependancy** is the umbrella term for any connections of data that **could** lead to a data hazard. Whereas a data **conflict** is the term for a connection of data that **causes** a data hazard, and therefore **changes** the flow of the program. The RAW data dependancy leads to issues because we read a value **before** it has been updated. This voids the atomicity of the value, and leads to faulty code execution. The other data dependancies **can lead** to conflicts if we start implementing **OoO** (Out of Order) execution as moving `WAR` and `WAW` around can lead to issues.

##### Control Hazards

Jump and Branch instructions can both lead to control conflicts, which can then lead to control hazards if not treated properly. This is because our CPU continuously loads the next instructions even if we know we might or need to jump. This is especially apparant with **Branch** instructions as in order to know if we need to jump we need to calculate something in the ALU, and this only finishes in the execute stage which means **two** instructions are loaded into the processor before we even know if we can jump or not. 

**Example of a Control Conflict**
```r
beq t0, t1 jump_label
addi t0, t0, 3
sub t1, t2, t3

 ...............
 
jump_label:
     addi t0, t0, 5
```

In order to determine whether we should jump or not we need to check if the registers `t0, t1` are equal. Therefore our CPU must load the two next instructions in the mean time. If a jump was indeed not necessary, then this would be okay, but if we calculate that they are equal then the two instructions `addi, sub` need to be deleted from our processor. 

##### Solving Hazards

There are multiple solutions that help us deal with the various problems of CPU hazards. The three i'll be talking about in this note are: **Forwarding**, **Stalling**, and **Out of Order Execution**. Also i'll be mentioning another small fix that will help us tremendously.


**Stalling**
Let us assume we are starting with a working pipelined processor, we can naively implement the principle of NOPs (No Operations) to fix all our hazards. This approach forces the **compiler**, to detect data dependencies, and then insert **3** NOPs for Data Hazards, and **2** NOPs for Jumps. This called **stalling** the processor.

We need **3** NOPs for Data Hazards because data is always read in the Decode or 2nd stage. Between data being read and data being written there is the execute stage, the memory stage, and the writeback stage, and only after the writeback stage can the decode stage work **properly**. 

We only need **2** NOPs for Control Hazards because the jump signal is computed in the execute stage, and therefore only two instructions can be loaded before we know whether or not to jump. 

**Solving a RAW with Stalling**
```
add a0, t0, t1 // Fetch First Add Instruction
NOP // Decode Instruction
NOP // Execute Instruction
NOP // Pass Instruction Through Memory
add a1, a0, a0 // Fetch Second Add Instruction | First Add Instruction in Writeback
// Decode Second Add Instruction with correct value for a0. 
```

**Solving a Control Hazard with Stalling**
```r
beq t0, t1, label // Fetch Instruction
NOP // Decode
NOP    // Execute -> Tells us whether to jump or not
add a3, t4, t5

//...//


label: 
	add a0, t3, t4
```

**Inverted Clock Signal Writeback**

The default pipelined processor has a critical flaw when it comes to the writeback stage. Since the register bank's enable signal only activates on a **rising clock edge**, we can only write to the register bank at the very beginning of a cycle. To illustrate this problem better lets look at the last three stages Execute -> Memory -> Writeback.

In execute the register values are read out of the intermediary flip flop on the **rising clock edge**, and then the result is stored in the second **intermediary flip flop.**

In memory the ALU result is either plugged into the memory if we need to, or it passes on to the writeback stage.

In the writeback stage the result combined with the address arrive at the register bank at the same time, but may not write until the **next rising clock edge**. This is key in understanding the optimization. We can fix this issue by **inverting** the clock signal that controls the register bank.

If we invert the signal the writeback stage can now read the result and address from the temporary flip flop on the **rising clock edge**, and then the result and address instead of sitting in front of the register bank **waiting** for the next rising clock edge they are written on the latter half of the cycle's **falling clock edge**. 

This means we only need to implement **2** NOPs for data hazards instead of 3. 

**Forwarding**

Forwarding aims to fix the issue of RAW dependancies by sending results back to previous stages without forcing them to be written back to memory. This is done through the introduction of a **hazard unit** which detects RAW data conflicts and forwards the result backwards through the processor. 

The **hazard unit** checks if the target register address in the **memory** stage is equal to **one** or **both** of the source registers currently in the **execute** stage, since if they are it is a RAW. If they are equal the Hazard Unit controls a MUX that selects the new result instead of the old one. 

**Example of Forwarding**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260130141447.png" alt="Pasted image 20260130141447.png"/></div>

This works amazingly, and as we can see there are three inputs for each MUX on each register. The first input is the default one where no forwarding is required. The second input is the result from the **writeback** stage, and is used when we have a **load** instruction. We don't want to forward the address, but rather the value of memory at that address. Then the final one is the simple ALU Result of the previous execute stage. This one comes from the memory stage. The hazard unit can use signals to determine what situation it is.

**Load Problem**

There is still one data hazard that we can't fix with forwarding, and that is when we have a **RAW** with an initial load instruction doing the writing, and the subsequent instruction that reads. This is because it takes **two** cycles to go from execute to writeback at minimum. We cannot send the **address** back (which would be the alu result for a load instruction) so we need to wait an extra cycle for the data memory component to return the actual wanted value. The most convenient way to fix this is to build extra logic within the Flip Flops, and the Hazard Unit.

**Solving the Load Problem with Stalling**

We let the hazard unit check if the current instruction in execute is a **load** instruction. If so we must check if the current instruction in **decode** (the one behind it) requires the register that the **load** instruction will write to. 

Hazard Unit Computation:
$\large (RDE = RS_{1}D \lor  RDE = RS_{2}D)$

If that formula evaluates to true then we know we need to **stall**. We only need to stall **once**. This is because we just need the data to be in the writeback stage by the time the previous instruction goes into the execute stage. These two stages are only **one** cycle apart (memory stage is inbetween). So we send a "**flush**" signal to our Decode -> Execute Flip Flop, and a "**stall**" signal to our PC and Fetch -> Decode Flip Flops to tell them to stop loading the next instruction. This essentially freezes the first half of our CPU for **one** cycle, and allows the memory component to return a result that will be used after the CPU unfreezes. The flush signal clears the current Decode -> Execute Flip Flop and acts as a **hardware** implementation of a NOP.

##### Branch Prediction

In order to solve Control Hazards we need to "guess" if we should jump, and we need to guess well. The problem with branching is that we can only be sure once we've finished up the **execute** stage, and in the meantime **two** instructions have been loaded. Instead of just lazily compiling two NOPs after every single branch statement we can save resources by intentionally **loading** the two instructions, and then with the help of a branch predictor we can either jump or not jump from the get go. 

There are two possible guesses when we load a branch instruction. Either we jump or we don't jump. 

If we guess that the branch statement will cause a jump then we load **two** instructions after updating our PC to the given label. The label in a branch instruction is a immediate that is hardcoded into the instruction itself, so we can use the address right away. Then our branch instruction evaluates itself in the **execute** stage. If the branch statement states we should have jumped then our guess was **correct**. We can continue on as normal, and we have solved a Control Hazard **without stalling** the CPU. If the guess was **wrong**, then we need to **flush** the two already loaded instructions, and return to our original address. This is done by the hazard unit, and causes the first half of the CPU to essentially have stalled for two cycles. We then reload the **correct** instructions.

We can naively implement branch prediction in an absolute way where we just say that for each branch statement we always jump, or always don't jump. However there are better ways of doing this. A simple yet very efficient solution is the **1-bit** branch predictor. This branch predictor works by remembering what we did for the **most recent** branch instruction. That is, if we jumped then we set our branch predictor to 1, and if we didn't jump then it is 0. Then when we come to a branch we jump based on the branch predictor bit. This is especially efficient for **for** and **while** loops where we loop through the same code many times. As a previous jump is very likely to lead to another one. 

There are more complex implementations of the branch predictor that try to calculate jumps with high accuracy, but there is no 100% branch predictor, and the more complex a predictor gets, the more money the CPU costs. 

##### Other Niche Fixes

**Out of Order Execution**

Out of order execution refers to the idea of solving data conflicts by swapping instructions with each other that are **not dependant** on one another. As discussed earlier, swapping WAWs and WARs can lead to more data conflicts, therefore we need to be careful. 

**Example of Solving a RAW via OoO Execution**
```r
addi t0, t1, 5 // Writes to t0
subi t9, t0, 8 // Reads from t0 | RAW
add t3, t4, t5 // Writes to t3, reads from t4, t5
add t6, t7, t8 // Writes to t6, reads from t7, t8

->

addi t0, t1, 5 // Writes to t0
add t3, t4, t5
add t6, t7, t8
subi t9, t0, 8 // Reads from t0
```

As you can see we swapped the places of the instructions which allowed us to put **two** instructions between the RAW instructions. If our processor didn't have forwarding, but did have a inverted clock signal on the writeback then this would actually solve a data hazard **without** the use of a **hazard unit**. 

**Register Renaming**

This technique renames registers for WAW and WAR situations where the register names don't need to be the same. This allows us to run instructions in parallel where we otherwise wouldn't be able to.

[**Example of Register Renaming**](https://en.wikipedia.org/wiki/Register_renaming)
```r
	r1 ≔ m[1024]     ;read the value in memory location 1024
	r1 ≔ r1 + 2      ;add two to the value
	m[1032] ≔ r1     ;save the result to location 1032
	
	r1 ≔ m[2048]     ;read value in 2048
	r1 ≔ r1 + 4      ;add 4
	m[2056] ≔ r1     ;save it to 2056
	
	SOLUTION 
	r1 ≔ m[1024]
	r1 ≔ r1 + 2
	m[1032] ≔ r1
	r2 ≔ m[2048]
	r2 ≔ r2 + 4
	m[2056] ≔ r2
```

In this example we have two sets of instructions that both have an add operation with the register `r1`, but they also both load `r1` from different section of memory **before** the operation. This means that the value of r1 in the second set of three instructions is changed anyways, and is not in anyway dependant on the first three instructions. Therefore we can rename the r1 in the second set to a different register (that is available), and run these sets of instructions in parallel. 



  