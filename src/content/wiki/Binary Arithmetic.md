---
name: "Binary Arithmetic.md"
domain: 1
written: "2026-01-22T15:12:00.000Z"
finished: false
tags: [" computer_architecture  "," binary"]
related: ["Number Systems"]
summary: "This document covers the addition, subtraction, multiplication, and division of signed and unsigned binary numbers."
footnotes: []
---

  




##### Bits, Signed, and Unsigned Numbers

Since computers are **discrete**, that is they can't store the number infinity, we tend to store numbers in predefined sizes. We interpret each 1 or 0 in a number as a bit. A **bit** is the **smallest** unit of measurement within a computer. We generally associate the following sizes with the following words:

**Bit** 1 bit
**Nibble** 4 bits
**Byte** 8 bits
**Word** 16, 32, 64 bits (A word is usually equal to the **native register size** of the cpu). 
**Double Word** 32, 64
**Quad Word** 64

The bit length of numbers within a programming language depends entirely on how the programming language implements it. 

**Data Type Lengths in C**
bool - 1 bit
char - 8 bits
short - 16 bits
int - 16 bits
long 32 bits
long long 64 bits

These are just examples. However bytes, bits, and words are the most important types to know. The idea of a word is that it is as big as a single <a class="wikiLink" href="http://localhost:4321/wiki/cpu-cache"> cache </a> block. In <a class="wikiLink" href="http://localhost:4321/wiki/risc-v-assembly"> RISC-V Assembly </a>, this is further explained by the idea of the **lw** and **sw** instructions.

This means that each number type can only store numbers up to a certain element before **overflowing**. In high-level programming languages, overflowing usually raises errors, but in assembly overflows can happen at any time. These are very dangerous as essentially numbers are circular. If the value overflows it will just slide into the negative range at the other end of the circle.

In computers we have **signed** (+ or -) numbers and **unsigned** (only +) numbers. This is best implemented in binary with the idea of the **two's** complement. However there are other ways to handle signed numbers. 

**One's Complement**
To perform the one's complement on a number we simply have to invert the number like so: $\large (0000 \space 0001)_{10} = (1111 \space 1110)_{10}$. This fixes many of the problems we have with negative numbers in binary, but with this method **only** **addition** actually works. All other arithmetic fails to compute the correct numbers. 

**Two's Complement**
To fix the issue that the one's complement raises we simply have to add 1 to our one's complement number. With this magical one added we can perform all arithmetic operations with negative binary numbers without problems.

The example below displays -1 in a **8 bit** binary number with the **two's complement**.

$\large (0000 \space 0001)_{10} = (1111 \space 1110)_{10} + 1 = (1111 \space 1111)_{10}$.

The MSB (Most Significant Bit/Left-Most Bit) in Two's Complement lets us know the sign of the number. (1 = negative, 0 = positive). Therefore the biggest **positive** number we can have in two's complement is restricted as the last bit is reserved purely for determining the sign.

It is important to remember that we can flip subtraction into an addition operation:
A - B = A + (-B)
Here we can use the two's complement to our advantage.

For **long division** the two's complement breaks, and therefore we need to take the **absolute value**, calculate the quotient, and then negate it via two's complement (if only the divisor or only the dividor is negative).

**Number Ranges**

Unsigned Numbers = $\large \set{0, 2^{n}-1}$

4 Bit Unsigned Number Limits: $\large \set{0, 15} = \set{(0000)_{2}, (1111)_{2}}$ 

Signed Numbers = $\large \set{-2^{n-1}, 2^{n-1} - 1}$

4 Bit Signed Number Limits: $\large \set{0, 15} = \set{(1000)_{2}, (0111)_{2}}$ 

The **MSB** in a two's complement signed number is **reserved** to be the "sign bit", and therefore the range is two to the power of n-1 instead of n. 

(0111 = 7) is the largest positive signed 4-bit number.
(1000 = -8) is the largest negative signed 4-bit number.
To calculate the value for 1000 we must apply the two's complement.

0111 + 1 = 1000 = 8

This is why the largest positive number is always one smaller than the largest negative number. 

##### Binary Addition

**Addition of 4 Bit Unsigned Numbers w/ Overflow**
$$1000 + 1010 = 0010$$

This example adds the number 8 and 10 in binary. The result is two. This is because the result should be $\large(1 \space 0010)_{2}$ which is 18 in binary, but since we are working with **4 bit** numbers the 5th bit is ignored. Therefore we get two. 

**Addition of 4 Bit Unsigned Numbers w/o Overflow**
$$ 0010 + 1010 = 1100 $$
In this case there is no overflow, and the addition leads to the expected result. Here we add the numbers 2 and 10 together, and get the result of 12! 

**Addition of 4 Bit Signed Numbers**

Negative:
$$ -4 = -(0100) = (1011 + 1) = (1100) $$
$$ (1100) + (0100) = (0000) $$
In this example we first convert -4 into binary using the **two's complement**. Then we add 4 to -4, and the result ends up being zero due to overflows. 
##### Binary Subtraction

For subtraction in binary we have two options. Either we can change it to an add operation by inversing the second operand. Or we can do subtraction. Generally computers prefer to the former:
$$ \huge A - B = A + (inv(B) + 1)$$

**Subtraction of 4 Bit Unsigned Numbers**
$$ 1110 - 0101 = 1001 $$
```
|    1 1 1 0
| - 0 1 0 1
-
    1001
```

When we pull from the next number we are technically getting a **two**, and therefore the result is 1 at the first position instead of 0. Since 2 - 1 is 1 not zero. 
Remember that unsigned numbers **cannot** be negative. So subtracting unsigned numbers only makes sense if we assume our subtraction never leads to zero.

**Subtraction of 4 Bit Signed Numbers using Addition**
$$-7 = -(0111) = (1000 + 1) = 1001$$
$$ - (-4) = inv(1100) + 1 = (0100) $$
$$ 1001 + 0100 = 1101 $$
```
| 1001
+ 0100
-
   1101
```

Now we have -7 - (-4), and the answer is -3. As you can see doing flipped addition is the superior method of subtraction. 
##### Binary Multiplication

Binary multiplication can be done by multiplying **each** bit of the first number by **each** bit of the second number, and then adding the results. The neat thing about binary multiplication, is that it can only ever either be 1 or 0. Two ones will give us a one, and any other combination gives us zero.

```
(3 * 3)
	0011
	0011
	--
     0011
 .   +00110
   ======
     1001 (9)
```

All you have to do is start with the first bit, and multiply it with each bit of the second number. Then take the next bit, and do the same except you start 1 position ahead. At the end just add it all together. The above example mutliplies 3 with 3 and gets the result of 9.

Note that we can have more than **two** 1s in one column. If this happens we need to think about how the carries work. If I have two 1s we have a carry of 1 and a result of 0 because 1 + 1 = 10 in binary. If I had three 1s I would have a carry of 1 and a result of 1 since 1 + 1 = 10 and then + 1 = 11. However if I had four 1s I would have a carry of 0 and a result of 0 but I would carry to the next next column: 1 + 1 + 1 + 1 = 100 in binary. This needs to be taken into account!

##### Binary Division

To perform binary division we need to familiarize ourself with the results of dividing 0s and 1s with each other.

**Dividing 1s and 0s**
$\large 0 / 0 = \infty$
$\large 1/0 = \infty$
$\large 0/1 = 0$
$\large 1/1 = 1$

Here is the general formula for binary long division:
1) First, we look at the **msb** of the **dividend**
	1) If the **divisor** fits into the **dividend** (divisor <= first digit of the dividend)
		1) Write a 1 up top, and subtract the **divisor** from the **first** **digit** of the dividend.
	2) If the **divisor** does **not** fit into the **dividend** (divisor > first digit of the dividend)
		1) Write a 0 up top, and keep "adding" the next digit to our **current** dividend.
		2) Repeat the "adding" until our divisor **fits** into the **current** dividend.
2) Once we can fit the **divisor** into the **dividend** and we perform the subtraction. We pull the **next bit** of our **dividend** down and combine it with the **result** of the subtraction.
3) Repeat the above process until we have gone through the entire number.

**Example of Binary Division**
Let's take a look at 27 divided by 3. 
$\large (11011)_{2} \div (11)_{2}$

   0
*11*|**1**1011 | Does 11 go into 1? no, record zero, and then pull the next number
   01
*11*|**11***0*11 | Does 11 go into 11? yes, put 1, subract divisor from dividend, pull next number
  -11       | pull next digit
   00*0*    | Doess 11 go into 000? no, record zero, pull next number.
   
   0100
*11*|11011
   -11
   **0001** | Doess 11 go into 0001? no, put 0, pull next number
   
   01001
*11*|11011
   -11  
   **00011** | Doess 11 go into 00011? yes, record 1, subtract 
    -11
     00
 Rest = 0 in this case!


##### Fixed & Floating Point Arithmetic

##### Bit Masks 



  