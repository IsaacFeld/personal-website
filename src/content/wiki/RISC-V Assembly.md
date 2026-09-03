---
name: "RISC-V Assembly.md"
domain: 1
written: "2026-01-22T15:29:00.000Z"
finished: false
tags: [" assembly  "," binary  "," hexadecimal  "," computer_architecture"]
related: ["Binary Arithmetic","Stack (Computer Architecture)"]
summary: "RISC-V assembly is the assembly language that RISC-V processors can decode and execute. Assembly is as low level as it gets, and through the use of registers, instructions, and memory we can implement anything a high level language can do with much finer control. "
footnotes: [" Immediates are a fancy word used in assembly languages to describe values that do not come from a register, but are rather \"hard-coded in\". Immediates can be represented as decimal numbers or hex numbers with the prefix \"0x\".\n\n"," A **memory word** refers to the idea that we can split up our memory into **word**-length chunks (in RISC-V this would be **32 bits**) to make memory more legible for human eyes. We also generally store 32 bit values since our registers are 32 bits wide, and therefore we often see memory split up into these 32 bit chunks that each represent one object.\n"]
---

  




RISC-V Assembly is a specific type of assembly. There are many different assembly languages like x86 assembly or ARM assembly that are used to interact with those families of processors. RISC-V stands for Reduced Instruction Set Computer Five, and therefore is quite rudimentary compared to other assembly languages.

#### Registers

Unlike traditional programming languages, assembly forces us to work with the limited amount of resources the processor provides us with. Each processor is generally only equipped with a limited amount of **registers**. Registers are high-speed memory cells that are directly onboard the CPU allowing for maximum read and write times. Generally registers are small, and in the case of RISC-V we have 32 registers that are each 32 bits wide. In programming terms these **registers** are known as **variables**. We can store values in registers, and read out of registers.

**Consequences**

Since we have 32 registers we require 5 bits to address each register. We only require 5 bits as based on what we defined already in <a class="wikiLink" href="http://localhost:4321/wiki/binary-arithmetic"> Binary Arithmetic </a> the limits of a n-bit unsigned number is $\large 2^n -1$, and therefore we can address the registers numbered 0-31 with just 5 bits. 

Now, the registers themselves can also only hold 32 bits. This leads to an interesting consequence, where our ability to hold unique memory addresses is limited. We can only address 2^32 or 0 - 4 GiB memory addresses with a single register. Due to the way the S type instruction is formatted, we can add a 12 bit signed immediate to that address for a maximum of ($2^{32} - 1 + 2^{11}- 1$) addressable addresses **in theory**. However our RISC-V processor does **32 bit** arithmetic under the hood which means that even if we added an immediate to a maxed out register it would just **overflow** to zero. Upgrading the 32 bits to 64 bits would indeed increase our maximum memory address range, but this is generally not necessary. 

**Conventions**

We generally use certain registers for specific purposes, and therefore have given many registers nicknames. These nicknames can be interpreted by risc-v assembly, but they don't need to be used. Generally our registers are labeled like so: x0 -> x31. However many registers are used in a certain way that earns them a nickname.

The **zero** register or x0 is a special register that is generally kept at the value zero throughout the entire operation of an assembly program. This allows us to always have a zero available, since sometimes we don't want to use **immediates**<a class="wikiLink wikiFootnoteLink" href="#footnote-1"> 1 </a>.


The **ra** register or x1 is the register reserved for storing the current **return address**. When we jump to different sections of our code we usually want to return back to where we jumped from. Therefore we store our old address before the jump instruction (technically old address + 4) in our ra register.

The **sp** register or x2 is the stack pointer. This is used to reserve space on the **<a class="wikiLink" href="http://localhost:4321/wiki/stack-computer-architecture"> stack </a>**, and is needed in creating so-called **stack frames**. Further covered in the calling convention section. 

The **s0/fp** register or x8 is the frame pointer which usually points to the current stack frame that we are currently in.

The registers x5-x7, and x28-x31 are called **t0-t6** or better known as temporary registers.

The registers x10-x11 are konwn as **function argument/return values** registers as they are reserved for passing values to called functions, and providing return values.

The registers x12-x17 are known as **function arguments**, and are solely reserved for passing in multiple/large parameters.

The registers x18-x27 are known as **saved registers**. These registers are saved by the called function, and can be generally used without worrying about overwrites.

There are a couple others, but they are not covered by my intro to computer architecture course so I will not be covering them for now.

#### Memory

Since we only have a limited amount of space in our 32 registers sometimes we need to store more data somewhere else. Therefore we have slower, but much larger memory located inside of RAM sticks. This is known coloquially as **memory**, and we can use memory to store large values, strings, arrays, and any other data structures we may want in our assembly program. 

Like most processors, RISC-V implements "**byte-addressing**" which essentially says that each address points exactly to one byte (8 bits) in memory. This means the smallest unit of memory in assembly is the byte. Therefore there is nothing smaller than the **load byte (lb)** and **save byte (sb)** instructions for accessing data in memory. As an example:

0x1000 -> Byte 1
0x1001 -> Byte 2
0x1002 -> Byte 3
0x1003 -> Byte 4

Essentially we often store data in memory in groups of 32 bits, an example would be instructions, and therefore using offsets of 4 lets us traverse these 32 bit elements in memory easily. We could extend this idea to an offset of 8 for 64 bits, or 16 for 128 bits etc.. This principle lets us iterate through collections of large data efficiently.

Some good examples of this are the following:

**big numbers**
some numbers don't fit into the typical 32 bit length, and therefore would normally require multiple registers to store. Therefore we can store these numbers in memory, by splitting up numbers into chunks and storing them in sequence.

**strings**
strings follow the same principle, but instead of storing numbers they store chars which are usually (bytes = 2 hex numbers) that are stored sequentially.

**arrays**
we can apply this sequential storing to arrays easily, and with the help of immediate address offsets we can index data within an array easily as long as we know the start address of the array, and the size of stored data is uniform. 

Take note that the instructions of our compiled program are stored in memory, and therefore to execute our program we must access memory.

**Little Endian vs. Big Endian**

Most modern CPUs implement the **Little Endian** memory storage **technique** where data is stored in memory starting at the **lsb** (least significant bit). **Big Endian** is the exact opposite of this technique and stores data in a "**descending**" order starting from the **msb** (most significant bit).

**Example of Little Endian vs Big Endian**
Let's say we have the following data in hex: 0xFA4B. If we were to store this value at address 0x1000 in our **Little Endian** memory then our memory would look like this:

```
0x1000 |4B|
0x1001  |FA|
```

Versus in **Big Endian** our data woud look like this:

```
0x1000 |FA|
0x1001  |4B|
```


**Memory "Zones"**

The memory in RISC-V assembly is split up into two main sections delimited by the **.text** and the **.data** labels. The **.text** label holds our assembly instructions and labels, whereas our **.data**label stores global and constant variables. 

**`.text`** - read-only & executable
**`.data`** - read/write & not executable **initialized** variables
**`.bss`** - read/write & not executable, **uninitialized** global/static variables e.g. "let var;" in javascript.
**`.rodata`** - read-only & non-executable data a.k.a. **constants**
**`.section {insert custom section name}`** - lets you create a section
#### Instructions

Instructions are the backbone of assembly, as they make it possible for us to actually perform **operations** on the CPU's **ALU**, **manipulate memory**, and modify our **program counter**.

The **program counter** is a **special purpose register** that is stored on the CPU, and unlike other **general purpose registers** (x0-x31) it cannot be directly read or written to. The reason for this is that the program counter is responsible for telling the CPU where the **current** instruction is stored in memory, so that the CPU knows what it should execute next. Instructions are 32 bits long in RISC-V, and therefore a **offset** of **4** (4 Bytes = 32 Bits) is automatically calculated for each line in order to load the next instruction. We can safely alter the program counter by using **Jump (J)** and **Branch (B)** type instructions and **labels** within our program.

In order to **manipulate memory** we need to use a combination of **Save (S)** and a specific subset of **Immediate (I)** instructions that allow us to **save** values to memory, and **load** values out of memory.

To perform general **arithmetic** operations on our CPU we need to invoke **Register (R)** instructions that allow us to perform mathematical operations such as addition, subtraction, multiplication, division, and so much more on **two** given registers.

Instructions inside RISC-V Assembly are stored in 32 bit blocks, where different sections of the 32 bits are reserved for specific values based on the type of instruction. These instructions are generally broken up into **register** **addresses**, the **op code** which tells the CPU what **type** of instruction it is, **funct** bits which tell the CPU **specifically** which instruction it is about to execute, and sometimes **immediate values** are hard-coded into the instruction itself. The registers **rs1** and **rs1** are known as **source registers**. These registers provide a source for data in instructions, and the register **rd** is the **destination register** which provides a **target** for our instructions **result** to go to.

**Instruction Breakdown per Instruction Type**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260123193106.png" alt="Pasted image 20260123193106.png"/></div>

In the following section i'll be providing explanations of the most important instructions of each type.
##### Jump (J-Type Instructions)

**`j label`**

This is the most basic jump command, and it lets our program change its program counter in a way that lets us jump directly to the given **label**. Labels are ways to define **human-readable** instruction addresses within our code.

**Example of a Label in a RISC-V Assembly Program**
```
add a0, a0, zero // sets a0 to the value 0.
addi a0, a0, 1 // adds 1 to a0.
j a_label // jumps to the specified label

a_label:
	addi a0, a0, 2 // a0 is now 3.

```

**`jal rd, label`**

Sometimes when we jump we also want to save the address of the **next** instruction so that when we can return, and when we return we continue in our program from where we left off. This can be done by providing the register we want our **jal** instruction to store the address of the **next** instruction which is just PC + 4. Then our program will jump to the label, but it will also store that address in the provided register.

##### Branch (B-Type Instructions)

**`beq rs1, rs2, label`**

A branch command can be used to implement logic statements such as if then else operations within riscv-assembly. Generally they all follow the same formula, **if and only if** a certain condition is true of two given registers then the instruction will cause the program to jump to the provided label. In this case the **branch equals** instruction only jumps if the two provided registers hold the same value. 

Here are the other types of branch commands:

bne rs1, rs2, label   | **branch if (rs1 ≠ rs2)**
blt rs1, rs2, label     | **branch if (rs1 < rs2)** 
bge rs1, rs2, label   | **branch if (rs1 ≥ rs2)** 
bltu rs1, rs2, label   | **branch if (rs1 < rs2) unsigned** 
bgeu rs1, rs2, label | **branch if (rs1  ≥ rs2) unsgined**
##### Immediate (I-Type Instructions)

**`addi rd, rs1, imm`**

A immediate instruction generally takes a source register, and a hard-coded immediate value, and then performs an **arithmetic** operation on the two, storing the result in the destination register. In this case, the **addi** instruction adds the immedaite value to rs1, and then stores the result in rd.

All load operations are immediate instructions:
**`lb rd, imm(rs1)`** - loads byte
**`lbu rd, imm(rs1)`** - loads byte unsigned
**`lh rd, imm(rs1)`** - loads half
**`lhu rd, imm(rs1)`** - loads half unsigned
**`lw rd, imm(rs1)`** - loads word

In RISC-V Assembly we get 3 types of data units: word, half, and byte. The byte is 8 bits, the half is 16 bis (half of the word), and the word is 32 bits. In other assembly languages the width of the word and half can be different from machine-to-machine as they depend on the bit width of the CPU itself.

Take note that we have the ability to differentiate between loading unsigned and signed values, but we cannot save values as signed or unsigned. This is because unsigned and signed doesn't matter when it sits in the memory. The sign of the value is only important if the **program** specifies it to be. Therefore the **programmer** has the option to load values as **unsigned** or **signed**. 

If we load a value in a signed way then the value will be converted into a signed number via the **<a class="wikiLink" href="http://localhost:4321/wiki/binary-arithmetic"> two's complement </a>**. If we load a value with an unsigned command then the remaining bits of the byte (24 remaining bits) or the half (16 remaining bits) will be set to 0s. Following this logic, we don't need to differentiate for words since a word already fills up all the space in a register. However this means that a 32 bit number is treated as "**typeless**", and we must be careful when using instructions to differentiate between **unsigned** and **signed** variants based on how we want to utilize this **typeless** 32 bit number.

**imm/uimm across immediate instructions**

For **shift** operations where we move a value left or right we have the ability to **shift left** and **shift right**, and therefore it doesn't make sense to use a **signed** immediate since we don't ever need to shift a number left -5 times when we can just shift the number right 5 times. That's why we win an extra bit of immediate by using a **unsigned** immediate. However, other mathematical operations can actually make use of **signed** immediates, and therefore **require** the provided immediate to be signed.

##### Register-to-Register (R-Type Instructions)

Using **R** type instructions we can perform arithmetic operations on our ALU purely with registers values. The following ALU instructions also have equivalent **I** type operations that replace **rs2** with **imm/uimm**, and often append the letter "i" to the end of the instruction name.

**traditional arithmetic**
add rd, rs1, rs2
sub rd, rs1, rs2
mul rd, rs1, rs2
mulu rd, rs1, rs2
div rd, rs1, rs2
divu rd, rs1, rs2

**shifts**
sll rd, rs1, rs2  | shift left logical          | rd = rs1 << rs
srl rd, rs1, rs2  | shift right logical       | rd = rs1 >> rs
sra rd, rs1, rs2 | shift right arithmetic | rd = rs1 >>> rs

**boolean arithmetic**
xor rd, rs1, rs2 
or rd, rs1, rs2
and rd, rs1, rs2

**set**
slt rd, rs1, rs2 set less than rd = (rs1 < rs2)
sltu rd, rs1, rs2 set less than unsigned rd = (rs1 < rs2)

The set operations allow us to store the outcome of whether a **signed/unsigned** rs1 is **less than** a **signed/unsigned** rs2 as a boolean (1 or 0) in the destination register.

##### Save (S-Type Instructions)

**`sb rs2, imm(rs1)`**
**`sh rs2, imm(rs1)`**
**`sw rs2, imm(rs1)`**

All these insturctions allow us to calculate a memory address using an immediate and a register value, and then store the value in rs2 within memory. As mentioned before, there is no need to differentiate between signed or unsigned values, as the memory doesn't care about this, and just stores data in its raw form. The store operation simply **overwrites** the data. This means if we use **store byte** or **store half** it will only overwrite the **lowest** 8 bits or 16 bits, and the rest of the data in that **memory word**<a class="wikiLink wikiFootnoteLink" href="#footnote-2"> 2 </a> will stay untouched.

#### Calling Convention

There are many aspects of RISC-V programming that allow the programmer to independantly choose how they want to implement certain programming procedures that are **normally** abstracted in **higher-level** languages. One of the biggest challenges of RISC-V is ensuring that making function calls does **not** lead to our important data being **overwritten** by the **callee** function. That is, we need **callee-saved** registers (registers that should be **preserved** by the **called** function), and we also need **caller-saved** registers (registers that should be **preserved** by the **calling** function).

In order to **preserve** registers we need to use the <a class="wikiLink" href="http://localhost:4321/wiki/stack-computer-architecture"> stack </a>, **stack frames**, and **stack pointers** to mark regions of our memory as occupied, and other parts as free. This is realized through certain registers, and a general contract being held by all RISC-V assembly programmers.

Keep in mind a function can be both a **caller** and a **callee**. The **caller** function must secure its **return address**, so that it knows where to jump back to. The **caller** function must also secure it's temporary registers (t0-t6), and the argument/return value registers (a0-a7) (if it needs to preserve them). The **callee** function must secure the saved registers (s0-s11), and the stack pointer sp.

We already discussed registers, but now we can take a look at where certain registers should be **saved**.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260124191222.png" alt="Pasted image 20260124191222.png"/></div>
[RISC-V ISA](https://riscv.org/wp-content/uploads/2024/12/riscv-calling.pdf)

**Pushing & Popping a Stack Frame as a Callee Function in RISC-V Assembly**
```
addi sp, sp, -16 // moves the stack pointer down 16 bytes 
sw s1, 0(sp) // secures s1 at the first word
sw s2, 4(sp) // secures s2 at the second memory word
sw s3, 8(sp) // ...
sw ra, 12(sp) // ra now secured at the fourth memory word

add s1, zero, s2
sub s2, s3, s4
mul s3, s6, s5
call other_function

lw s1, 0(sp)
lw s2, 4(sp)
lw s3, 8(sp)
lw ra, 12(sp)
addi sp, sp, 16
```

In this example we have done the **minimum** amount of securing that is necessary as per the **calling convention**. We **only** secure the registers **s1, s2, and s3** because these are the only registers that we **write** to. We are allowed to read from saved registers from within a callee function, but we are **not allowed** to modify **unsecured callee-saved** registers. We also **must** save our return address in the stack as we call another function, and therefore the called function will need to overwrite its return address with our original function's address. This is also **16-byte** aligned, a.k.a. we increment the stack pointer 

Note, if our function did not have the line "`call other_function`" then we would not need to save `ra` to the stack since our return address is not in danger of being modified by any instructions within our function.

**Return Values & Function Parameters**
It is generally agreed that we use the registers `a0-a1` for return values, and the registers `a0-a7` for function arguments. Each register only holds up to **32 bits** in RISC-V assembly, and therefore we sometimes need to use **multiple** `a` registers for a single piece of data to return or pass values. 

> ["Larger return values are passed entirely in memory; the caller allocates this memory region and passes a pointer to it as an implicit first parameter to the callee."](https://riscv.org/wp-content/uploads/2024/12/riscv-calling.pdf)


For arguments that are **larger** than a **word**, but less than or equal to a **double word** (ex: 64 bits) we pass them to a function by having the **lower** 32 bits stored in a0, and the **upper** 32 bits stored in a1.

Arguments that are smaller than a **word** (32 bits) are passed in the **least-significant** bits of an a register. 

For arguments that are larger than a **double-word** (ex: 128 bits) we pass them by providing a 32 bit **reference** to their **lsb** in memory.

If we have a mix of **word-sized** and **double-word sized** values then we pass them in an **aligned even-odd** register pair with the **even** register holding the **least-significant** bits.

**Example of a aligned even-odd Register Pair in RISC-V Assembly**
function(32 bit integer, 64 bit long) -> a0 = 32 bit integer, a1 = **empty**, a2 = 64 bit integer$\large_{0:31}$,  a3 = 64 bit integer$\large_{32:64}$

**More than 8 Parameters**
When the compiler generates the assembly for `process_data`, it **hard-codes** the offsets. It knows, based on the signature, that it should look for `p9` at `0(sp)` and `p10` at `4(sp)`. It won't "keep incrementing" because it only generates code to fetch exactly what was defined in the source code.

#### Advanced Programming Concepts in RISC-V Assembly

##### Strings

Strings are an array of chars, where each char is one byte or two hex numbers (in ASCII encoding). 

In RISC-V we generally only have two types of strings. The "**C string**" or "**Null String**", and the **Pascal String**. The C String is a String that marks its termination with a special null char, a.k.a. 0x00. The C String has built in methods that can be used to load it in memory. The **Pascal String** is a string who's first byte is responsible for determinating the **length** of the string. The problem with **Pascal Strings** is that we limit our String length to **256** characters. (2^8). 

We generally load strings outside of our main program, and like to declare them as global variables via labels. 

**Example of Global String Variables in RISC-V Assembly**
```r
.data | .rodata #  rodata if you want the string to be "read-only"

myString:
	.ascii "hello!" # normal string without a terminating null byte
	
myCString:
	.asciiz "what is up" # c string with a terminating null byte
	
myPascalString: # pascal string with initial byte determining length
	 .byte 15
	.ascii "a pascal string"
```

These strings all now sit in memory, and they start at the location that their respective label points to. We can load the string out of memory with the use of `lbu`, `lhu`, and `lw`, depending on how much of the string we want to load at once. It is important to use the **unsigned** version of the smaller load commands, because chars can obviously not be negative, and to sign extend a char makes zero sense.

Since **ASCII** chars are naturally aligned with our memory, as each char is exactly **one** byte long. We can iterate a string char for char by repeatedly incrementing our pointer by **one**. This is because each individual memory address in RISCV-32 points to a **byte** in memory. (As discussed in Memory)

##### Arrays

As already seen in strings, in RISC-V we can store arrays of elements in memory. There are a couple shorthands for storing number values in an array in RISC-V. The elements are always stored sequentially after each other in order to make indexing and iterating simple.

```r
.data | .rodata # again, your decision
arr: .word 1, 2, 3, 4, 5 # each element is stored in its own word (32 bits)

bigarr: .dword 1000, 2000, 3000 # each element is stored in its own double word (64 bits)

halfarr: .half 100, 200 # each element is stored in its own half word (16 bits)
bytearr: .byte 14, 12, 240 # each element is stored in its own byte (8 bits)
```

Now in order to actually get values from an array it's actually super simple. We just need to know the **size** of the elements of the array in **bytes**, and the array's elements need to be **equally** spaced apart.

```r
la t0, bytearr # la - pseudoinstruction to load an address label, t0 now points to beginning of arr

lbu t1, 0(t0) # t1 now holds the first element in the array
lhu t2, 0(t0) # t2 now holds the first and the second element in the array at once

addi t0, t0, 1
lbu t3, 0(t0) # t3 now holds the third element in the array
```

As you can see we can use offsets, and addition to easily access different parts of our array, as long as we are careful about what the size of each element within the array.

##### Loops

Loops are essential in programming, and they can be implemented in RISC-V assembly just as well as any other language. The idea of a loop is to use a combination of a **branch** instruction and a **jump** instruction. 

Purpose of the **Branch** Instruction:
The branch instruction's function is terminating the loop when the loop **condition** is no longer true. This is achieved most often through a **beq**. 

Purpose of the **Jump** Instruction:
The jump instruction's function is to facilitate the looping behaviour of a program. It achieves this by jumping to the **beginning** of the loop. The jump instruction is always placed **after** the branch instruction in order to allow the condition to be checked before jumping back to the beginning of the loop e.g. looping.

**Example of a Simle Loop in RISC-V Assembly**

```r
add t1, zero, zero # sets t1 to zero, this will be our loop count/index.
addi t3, zero, 10 # sets t3 to ten, this will be our stopping condition
start_loop:
	addi t0, t0, 5 # increment t0 by 5 each loop
	 beq t1, t3, end_loop # is i == 10? if so end loop.
	 addi t1, t1, 1 # increment t1
	 j start_loop # if we didn't end loop, repeat loop by jumping back to the start
end_loop:
	
```

##### Recursion

Recursion can also be performed in RISCV Assembly. The only thing that we need to watch out for is the calling convention, and the proper manipulation of the stack. If we screw up at some point and overwrite a required return address our function might get lost, and never return to the original call. This is why we need to be **extra** careful when designing recursion in assembly, and really make sure to adhere to the **calling convention**.


**Example of Fibonacci in RISC-V Assembly**

TODO



  