---
name: "Number Systems.md"
domain: 1
written: "2026-01-22T14:22:00.000Z"
finished: false
tags: [" computer_architecture  "," binary  "," decimal  "," hexadecimal"]
related: ["Binary Arithmetic"]
summary: "The same number can be represented with different number systems. Essentially for every number in the decimal system, there is an equivalent number in another system (a **permutation**). Number systems differ in the base that they use. The decimal system uses base 10.\n"
footnotes: []
---

  




Every number system has its own "**base**" number which is the **size** of the "**alphabet**" that contains all the symbols used by the number system. The **base** number can be used with other numbers within the **alphabet** in combination to represent every possible value.  The base number helps us interpret the meaning of the **position** of numbers. 

**Decimal System**

The decimal system uses **base** 10, and the **alphabet** {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}. In decimal we call our positions the **ones**, **tens**, and **hundreds** place. The **ones** place denotes that every number in this position is **multiplied** by one or $10^0$. The **tens** place says that all numbers are multiplied by ten or $10^1$. If you keep on going you will see a pattern.

**Breakdown of a Decimal Number**
$$
\huge (189)_{10} = (1) \times 10^2 + (8) \times 10^1 + (9) \times 10^0
$$

Following this formula we can start to understand other number systems such as **binary** and **hexadecimal**.

**Binary System**

Inside of computers there are only two states. On or off. This leads to the obvious conclusion that the number system computers can use has to be comprised of two numbers, and therefore binary is base 2. Now we chose the numbers {0, 1} to represent off and on, but we could've chosen any other symbol as long as our alphabet consisted of only two symbols.


**Breakdown of a Binary Number**
$$
\huge (10011)_{2} = (1) \times 2^4 + 0 \times 2^3  + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = (19)_{10}
$$

As you can see, in binary we use the number 2 instead of the number 10 as our **base**. Binary numbers are neat for computers, but they are really annoying to read as a human. Therefore we created a new number system called **hexadecimal** to make binary numbers easier to read. 

**Hexadecimal System**

The hexadecimal system is of **base** 16, and has the following alphabet: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}. Hexadecimal is very useful since one hexadecimal number is equal to four binary numbers. This is because 2^4 = 16. Essentially we need at least 4 Binary Numbers to represent a number in base 16. The problem with decimal is that there is no easy conversion, since we can't get from 2 to 10 with a clean power. 

**Breakdwon of a Hex Number**
$$\huge (A0)_{16} = (A = 10) \times 16^1 + (0) \times 16^0 = (1010\space000)_{2} = (160)_{10}$$

Each hex number maps to a set of four binary numbers, and this lets us efficiently represent large binary numbers without filling up a whole page with 1s and 0s. Essentially a compressor for binary!



  