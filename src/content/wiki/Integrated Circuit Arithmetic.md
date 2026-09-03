---
name: "Integrated Circuit Arithmetic.md"
domain: 1
written: "2026-01-28T18:02:00.000Z"
finished: false
tags: [" computer_architecture  "," logic  "," integrated_circuits"]
related: []
summary: "Integrated circuit arithmetic encompasses the mathematical operations on n-bit numbers through the use of **complex** integrated circuits.\n"
footnotes: []
---

  




#### Components of an ALU
##### Half Adder

The **cost** of a half adder is 2 as we use 2 components.
The **depth** of a half adder is 1 since the **longest** path is just through **one** gate.

The half adder is the most primitive form of additive circuit that takes in two inputs, and computes the sum bit with an XOR gate, and the carry bit with an AND gate.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129093546.png" alt="Pasted image 20260129093546.png"/></div>

The key pitfall of the half adder is its inability to consider the carry bit from a previous operation in its own operation. There are only two inputs, and therefore this can only be used to either start of a chain of addition operations or to simply compute one bit addition.

##### Full Adder

The **cost** of a full adder is 2 * C(HA) + 1, which evaluates to 5. 
The **depth** of a full adder is 3, since at most we can pass through **two** half adders, and one or gate.

The full adder, unlike the half adder, can now take carry bits into account within its calculations. The full adder is made up of two half adders, hence the name half adder. 

**Logical Expression of a Full Adder**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129104925.png" alt="Pasted image 20260129104925.png"/></div>

**Calculating $\large s_{2}$**
We know that the first bit is the product of XOR'ing every single operand with each other. This is how we compute sums of numbers normally, so if we want to add the carry to the sum of a and b we just need to xor the sum of a and b with the carry bit.

**Calculating $\large s_{1}$**
Now if you look at the truth table of a full adder, we can determine that there are two cases where the second bit is one. This is the carry-over effect of addition where our operation in the first place overflows into the next. This only happens if at least two operands are both one. There are three cases where this can be true:

$\huge a \land b = 1$
This is just the carry bit operation of the first half adder.

$\huge a \land c = 1 \lor \huge b \land c = 1$
This is where it gets more tricky, but there is a nice solution. The other case is if c and another variable is also one. We can actually express this statement with an XOR because a xor b is only true if **only a** or **only b** is true.  Now we have a xor b, and we just need to add on the c to ensure that only a or only b is ture, and c is true.

$\huge a \oplus b \land c = 1$
 
This looks familiar because actually it is just the **carry bit** of the **second** half adder. This is because in the second half adder we receive the **sum bit** from the **first** half adder which is just $\large a \oplus b$. Then our carry bit is always the first operand in conjunction with the second operand. 
$\huge c = (a \oplus b) \land c$

So we just send the **carry bit** of the **first** half adder and the **carry bit** of the **second** half adder into an $\large \lor$ gate, and we will receive the second bit of the result! (s1).

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129103218.png" alt="Pasted image 20260129103218.png"/></div>

Generally the first output (leftmost) of a half adder is the carry bit, and the second output (rightmost) is the sum bit.

##### Carry Ripple Adder
The **cost** of a carry ripple adder is just $\large 5n$ where n represents the number of full adders / bits that get computed.
The **depth** of a carry ripple adder is $\large 3 + 2(n-1)$.

The carry ripple adder is required for **n-bit** addition where **n > 1**. If we are just doing single bit addition we can simply use a full adder. However for multiple bits we need to **chain** together **n** full adders. This chained full adder is called the carry ripple adder.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129111047.png" alt="Pasted image 20260129111047.png"/></div>

This is pretty straight forward, as we essentially build a recursive circuit that starts with the smallest bits, and carry the result of that operation into the next two smallest bits. With this we can do n-bit addition by feeding the carry bit of the previous full adder into the current full adder. The sum bits then reflect the actual value at that position.


##### Conditional Sum Adder

The **cost** of a conditional sum adder is also logarithmic, but hard to calculate. $\large O(n^{\log_{2}{3}})$
The **depth** of a conditional sum adder is logarithmic:  depth(CSAn) = $3 ⋅ (1 + \log_{2}{𝑛})$ 

Since the carry ripple adder needs to compute each result one by one, it can be quite slow for large n. The depth also scales with n linearly. Therefore we want to find a hack. This is what the conditional sum adder does through the use of **multiplexers**.

Instead of chaining full adders together, we let them run in **parallel** by **isolating** them from each other. There are only two possibilities when it comes to full adder results. Either the carry bit was 1 or the carry bit was 0. Therefore it doesn't make sense to wait for the carry bit to propagate to the **last** full adder if we could've just done the calculation ahead of time. 

To solve this issue we use multiplexers. We first let all full adders calculate the sum and carry of hte bit positions they are responsible for **twice**. We calculate each full adder twice to accomodate for the case where the input carry bit is 0 and the case where it is 1. Then once the carry bit has been calculated from the previous full adder we can use a multiplexer to **select** the correct calculation result **based on the actual carry bit**.

**Multiplexer**
A component that has a selector bit that chooses between $\large 2^s$ possibilities where $\large s$ represents the number of selector bits.

**Picture of a n-bit CSA**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129113011.png" alt="Pasted image 20260129113011.png"/></div>

Note: The first carry bit should always be known, as it is the first operation & its generally zero. Hence we have two separate circuits in the picture above.
##### Subtractor

As mentioned in <a class="wikiLink" href="http://localhost:4321/wiki/binary-arithmetic"> Binary Arithmetic </a> we can use the two's complement to convert numbers into their negative form. It doesn't make sense for us to build a whole new subtraction circuit when we can just use the laws of mathematics to transform a subtraction into an addition:

$\huge a - b = a + (-b)$

Then we can plug this into our already working conditional sum adder and perform fast subtractions. 

In order to implement this we need to take the b operand and **invert it**, and then **add one**, this performs the two's complement on b. Then we use our **sub** bit/signal on a multiplexer to select between **positive** b and **negative** b based on whether we want to subtract or not. 

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129113756.png" alt="Pasted image 20260129113756.png"/></div>

We use the **special properties** of the $\large \oplus$ operation to choose between an inverted b and a normal b by using the subtraction signal. That is if we want to subtract (**sub = 1**) then we do $\large b \oplus 1$ which becomes $\large \lnot b$. Then the sub signal is used as a **carry** bit into the adder which performs the second step of the **two's complement** on b.

Overflow when the last carry bit is 0 for two unsigned numbers.

##### Multiplier

There are two options when it comes to implementing a multiplier within a integrated circuit. Either we leave the work to the compiler, and force all multiplication instructions to be converted into a series of addition instructions, or we decide to synthesize the multiplication algorithm into our circuit.

Generally multiplication requires the use of $\huge \land$ gates. We can take a look at a 1-bit multiplication truth table below:

| a b  | $\large a \land b$
| 0 0 |   0
| 0 1  |   0 
| 1  0 |   0
| 1  1  |   1

We can use the simple and gate to achieve 1 bit multiplication already, but things get a little more complicated when we move on to **n-bit** multiplication. To implement n-bit multiplication we need to multiply **each** bit of the first number with **each** bit of the second number, and then add the results. It looks something like this:
$\large (B_{1},B_{0}) \times (A_{1}, A_{0}) = (B_{1} \land A_{0}, B_{0} \land A_{0}) + (B_{1} \land A_{1}, B_{0} \land A_{1}, 0)$

So we use the $\large \land$ operator on **every** bit in B **for each** bit in A. Then we need to add these sums together using chains of full adders.

**Example of 1011 (Blue) * 0101 (Red) in a Naive Multiplier**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129140606.png" alt="Pasted image 20260129140606.png"/></div>

##### Carry Save Adder

The carry save adder allows us to quickly and efficiently calculate the sum of all partial products stemming from our multiplier. Instead of having to chain adders we can use the carry save adder which can efficiently compute the sum of **three or more** binary numbers.

TODO 

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129153259.png" alt="Pasted image 20260129153259.png"/></div>
#### Arithmetic Logical Unit

The ALU is the part of the CPU that does all the mathematical operations. This is usually done with the use of a complex multiplexer that can determine exactly which operation to perform on the incoming data based on the selector bit.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129153334.png" alt="Pasted image 20260129153334.png"/></div>




  