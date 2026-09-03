---
name: "Boolean Algebra.md"
domain: 1
written: "2026-01-28T18:01:00.000Z"
finished: false
tags: [" computer_architecture  "," logic"]
related: ["Functional Completeness","Synthesis","Integrated Circuit Arithmetic"]
summary: "Boolean algebra is the branch of algebra that can be used to **express** logical statements. **Through** the use of operators such as and, or, not, and the variables true and false we can formulate **any** statement in terms of mathematical symbols.\n"
footnotes: []
---

  




Boolean algebra is the language we use to write down true or false statements. Boolean algebra is imperative in understanding computer architecture at a low and high level. Every single **integrated circuit** can be boiled down to a set of logical statements. Computers work with 1s and 0s which are seen in the logic world as **true** and **false**. We can use boolean algebra to prove whether statements are **true** or **false**, and therefore boolean algebra is a very powerful branch of mathematics.

##### Operators

**Logical Not / Negation**

The logical not or negation operator lets us **inverse** the value of a boolean variable. 

$\large \lnot T=> F$
$\large \lnot {F} => T$


**Logical And / Conjunction**

The logical and or conjunction operator lets us **compare** the values of **two or more** boolean variables, and the operator only returns true **if** **all** boolean variables are **also true**.

$\large T \land F = F$
$\large T \land T = T$
$\large F \land F = F$

**Logical Or / Disjunction**

The logical or or disjunction operator lets us take the **maximum** value of **two or more** boolean variables. We define 1 or True to be the maximum value whereas 0 or False to be the minimum value. 

$\large T \lor F = T$
$\large T \lor T = T$
$\large F\lor F = F$

**Exclusive Or / XOR**

The exclusive or or XOR is a special operator that expands on the logical or operator by excluding the case where **all** boolean variables are **true**.

Analogous to disjunction:
$\large T \oplus F = T$
$\large F\oplus F = F$

Difference:
$\large T \oplus T = F$

XOR has special properties:
$\large x \oplus 0 = x$
$\large x \oplus x = 0$

**Implication**

The implication operator is another special operator that lets us describe a situation where when the **first** variable is true, then the **second** variable must also be true. As in if A is true then A being true **implies** that B is also true. See Truth Tables for a proper mathematical explanation.

$\large A \implies B = \lnot A \lor B$

**Equivalence**

The equivalence operator determines if two logical statements are **logically equivalent**. This logical equivalence only exists if for all possible combinations of the given boolean variables the expressions both evaluate to the **same** result.

**ITE**

The If Then Else operator mirrors the programming construct by ensuring that the value of the **first** boolean variable determines which **branch** should be  taken. This operator requires 3 boolean variables, where the first variable is the one that is in charge of picking, and the next two are the results to pick from.

**NAND**

The NAND operator is just the negation of the logical and operator, but it is special as it is <a class="wikiLink" href="http://localhost:4321/wiki/functional-completeness"> functionally complete </a> which means it can be used to represent any logic expression. It is also cheap to build in real life, and can be used to cut costs in integrated circuits.
##### Truth Tables

Truth tables are used to show the evaluation of a logical expression. This is done by providing **all** possible boolean variable combinations, and then calculating the result of each combination. The # of combinations scales exponentially with $2^n$. In other words, when we have 4 variables there are 16 different combinations as each variable can either be true or false. 

**Example of Implication defined by a Truth Table**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260128192327.png" alt="Pasted image 20260128192327.png"/></div>
##### Laws of Reduction

**Kommutative Property**

This is a property of some operators that states that the order of the operands is **irrelevant**, and the operants can be swapped at will.

$\large a\land b \equiv b \land a$

**Associative Property**

This is another property of some operators which explains that the parenthesis can be placed arbitrarily without having to worry about messing up the meaning of the expression.

$\large(a\land b)\land c \equiv a \land (b\land c)$


**Distributive Property**

This is a property that states that an operators operation on elements within parenthesis can be expanded to the operators operation on **every** element within the parenthesis.

$\large (a\lor b) \land c \equiv (a \land c) \lor (b \land c)$

**Tautology**

This is a statement that is **always true**.

$\large a \lor \lnot a$

**Contradiction**

This is a statement that is **always false**.

$\large a \land \lnot a$

**Idempotent**

$\large a\lor a \equiv a$ 
$\large a\land a \equiv a$

**Absorption**

$\large (a \lor b) \land a \equiv a$
$\large (a \land b) \lor a \equiv a$

**De Morgans Rule**

This rule states that when applying a negation to elements within a parenthesis then the operation is not only distributive, but it also inverses the operation within the parenthesis from and to or/or to and.

$\large \lnot(a \lor b) \equiv (\lnot a \land \lnot b)$

**All Boolean Algebraic Laws and their respective Names**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260128193419.png" alt="Pasted image 20260128193419.png"/></div>

Through the use of the countless laws we can reduce many **complex** boolean expressions into much simpler ones. This is extremely useful for converting boolean expressions into real-life integrated circuits, as the more operators we use in an expression the more expensive & complicated our circuit becomes to build.

##### Circuits

Most of the boolean operators can be built into an integrated circuit:
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129094044.png" alt="Pasted image 20260129094044.png"/></div>



  