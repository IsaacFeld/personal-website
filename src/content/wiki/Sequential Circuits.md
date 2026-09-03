---
name: "Sequential Circuits.md"
domain: 1
written: "2026-01-29T11:07:00.000Z"
finished: false
tags: [" computer_architecture  "," logic  "," integrated_circuits"]
related: ["Integrated Circuit Arithmetic","Boolean Algebra","Binary Arithmetic"]
summary: "Sequential Circuits are circuits whos output **depends** on its input. This creates a complex feedback loop that may lead to oscillations if not handled correctly."
footnotes: []
---

  




##### RS Latch / SR Latch / Flip Flop

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129153927.png | RS Latch" alt="Pasted image 20260129153927.png | RS Latch"/></div>

The RS Latch has many names, and is the most primitive circuit that can **store** data. Through the use of two NOR gates it can store data. The RS Latch does this by using two signals: **Set** and **Reset**. When the set signal is one then the Q output is set to one, whereas when the reset signal is one the Q output is reset to zero. When both are zero, both outputs stay stable. If both signals set and reset are active, our system breaks down. 


<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129153719.png" alt="Pasted image 20260129153719.png"/></div>

As you can see one of the states of the RS Latch is illegal, and also the RS Latch does not let us store data that is unknown. It only lets us manipulate the data within it through the use of Set and Reset signals.
##### D Latch

The D Latch is the superior version of the RS Latch as it allows us to store data **that is unspecified**. This is because the D Latch uses an **Enable** signal that when turned to one writes whatever is in the **Data** input into the D Latch. If the enable signal is off then the data inside is preserved. It can be realized through the use of AND gates that block/encapsulate our RS Latch.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129154549.png" alt="Pasted image 20260129154549.png"/></div>

A D Latch is referred to as being **transparent** if the enable signal is currently on. The enable signal must be on for a **minimum** amount of time so that the data signal can properly propagate through the latch. A D latch is "pulsgesteuert", as it is directly influenced by the enable input. This leads to some ambiguity within the D Latch and can lead to our D Latch entering unstable states.
##### D Flip Flop

A D Flip Flop is the superior version of the D Latch, as it uses a universal **clock** signal, and a **delay chain** to ensure that data reaches a stable state when it is written to the D Latch.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129154951.png" alt="Pasted image 20260129154951.png"/></div>

The D Flip Flop uses a special chain of $\large \lor$ gates to ensure that there is a small, but long enough window of time where the enable signal is activated. This small window happens because when the **clock** signal is at **zero** the signal that sits before the AND gate is **one** due to the **negation** of the **last OR gate**. Then our clock signal switches from zero to **one**, and quickly propagates to the **AND gate** where it meets the old negated clock signal which is also **one**. This allows the enable signal to be activated on the **rising edge** of the clock signal. Now we have a clock signal of **one** that has to travel through our delay chain, before it eventually reaches the negation and becomes **zero** therefore disabling our E signal. 

The **length** of our delay chain dictates the **duration** of our enable signal.

##### Register

Now if we want to store **multiple** or even **n** bits then we need to create a **group** of multiple **D Flip Flops**. By doing this we can create registers, which are temporary storages for a given value.

**Example of a 4 Bit Register**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129155638.png|300" alt="Pasted image 20260129155638.png|300"/></div>

Keep in mind that these registers can only be **written** to on a **rising clock edge**. 

**Shift Registers**

We can also create these unique components called shift registers. Shift registers allow us to literally **shift** data from one register to another on **every** rising edge of our clock signal. This is extemely useful for a **serial multiplier** since it allows us to multiply bit for bit by shifting our second operand along one bit at a time. This effect is achieved by connecting the output of each register into the data signal of the subsequent register. This leads to a "cascading"/ "domino" effect where data is moved through a pipeline of sorts one at a time.

**Example of a 1 Bit Shift Register**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129160109.png" alt="Pasted image 20260129160109.png"/></div>

##### Memory 

Now that we know how to store n-bit values in registers. What if we want to select specific values within a large storage system? This is implemented through the idea of **memory**. We build a system that uses multiplexers that determine based off of our address which block of memory to pull from. Then we provide a write signal that controls the enable signal of each flip flop. Finally, we have every single block of memory receive the same input, and depending on the address we only enable the D Flip Flop of the block we actually want to write to. 

**A Naive Implementation of 2x2 Bit Memory**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129160655.png" alt="Pasted image 20260129160655.png"/></div>



  