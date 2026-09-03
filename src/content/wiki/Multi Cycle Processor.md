---
name: "Multi Cycle Processor.md"
domain: 1
written: "2026-01-29T15:58:00.000Z"
finished: false
tags: [" cpu  "," computer_architecture  "," logic  "," integrated_circuits"]
related: ["Single Cycle Processor","Automat","Pipelined Processor"]
summary: "The multi cycle processor builds on the [[Single Cycle Processor |single cycle processor]] by dividing instructions into multiple short cycles or stages. In doing so, the Control Unit becomes a [[Automat|finite state machine]] that determines the control signals **for each** stage. On top of this, simple operations no longer need to wait as long."
footnotes: []
---

  




> <div class="blockQuoteInfoContainer"><svg class="blockQuoteInfoIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
> Please read about the <a class="wikiLink" href="http://localhost:4321/wiki/single-cycle-processor"> Single Cycle Processor </a> before continuing!

The multi cycle processor splits each instruction into multiple stages. Each stage is a state, and each state has predefined control signals. The duration of each state is **uniform**. This also means that we cannot do **too much** in a single phase, as there wouldn't be enough time. Therefore we split up the work across multiple stages. For each phase we can only perform a maximum of one of either ALU, Register File, or a Memory operation. 

**Complete Finite State Diagram of a Multi Cycle Processor**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129172358.png" alt="Pasted image 20260129172358.png"/></div>

What is notable about this diagram is that **every** instruction **shares** the **fetch** and **decode** stage, because this phase is essential. The fetch phase is responsible for calculating the current PC and retrieving the instruction from the **instruction memory**. The **decode** phase is responsible for interpreting the instruction, and setting up the necessary registers / immediates for the incoming **execution**. 

Note: The load word operation is the longest instruction, and not every instruction needs to have a "execute" phase, but most do.

##### Structure of a Multi Cycle Processor

**Temporary Storage**

Since **control signals** are **state-dependant** instead of **instruction-dependant** we need to make sure that when we go to our next phase, the previous results are not voided due to faulty control signals. To achieve this we place D Flip Flops at the end of each stage to temporarily store the value. This means that whatever happens after the value is stored is irrelevant. This allows us to utlize the **stage-by-stage** principle. Another reason for storing the values in D Flip Flops is because unlike the single cycle processor, a single instruction endures multiple **rising clock edges**, and we risk writing values that we don't want to write.

**Program Counter**

The program counter behaves differently in a multi cycle processor. The program counter is only ever updated in the **fetch** state, as there has been an extra control signal "**PCUpdate/PCWrite**" that acts as an enable signal for the PC component. Therefore throughout each stage of an instruction, besides the fetch stage, the instruction stays the same, and the control unit is continuously fed the same instruction.

**Control Unit = Automat**

The control unit is a FSM or Automat. This means that there is no internal counter needed. Through the use of boolean algebra, we can ensure that based on the **instruction**, and our **current state** we know what our next state must be. This is extremely useful, as it allows us to cheaply hardcode every possible state in our CPU. From the state the control unit can then derive the control signals.

**Instruction + Data Memory**

We combine instruction and data memory, because unlike before in the single cycle processor we no longer need to read instruction memory, and write to main memory in **one cycle**. Instead this is split up into multiple cycles, and therefore we can allocate a stage known as **write back** where data is sent from the ALU's result D Flip Flop back to the beginning to be written in memory. Also instructions and data are all stored in the same memory. This is also cheaper to implement physically.

**Selection**

We need to use many multiplexers in Multi Cycle Processors in order to differentiate between what we want our processor to do in each stage. For example, when we are in the intiial **fetch** stage we want to calculate our PC + 4. To do this we need to select our PC as SrcA (00), 4 as SrcB (10), and 00 as ALUOp. Then we want the immediate result which is ResultSrc (10) to be fed back into our PC.

**Diagram of a Multi Cycle CPU in "ExecuteI"**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129175107.png" alt="Pasted image 20260129175107.png"/></div>


##### The Problem with the Multi Cycle Processor

The main issue of the Multi Cycle Processor is the fact that often parts of the CPU are idle. That is, while we are writing back to memory why aren't we already loading the next instruction? This concept is called **pipelining**, and it is the idea of parallelizing our CPU. This type of CPU is leagues more efficient, and can compute multiple instructions in the same amount of cycles it takes for a multi cycle to compute one.



  