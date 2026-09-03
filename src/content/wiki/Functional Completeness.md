---
name: "Functional Completeness.md"
domain: 1
written: "2026-01-28T17:58:00.000Z"
finished: false
tags: [" computer_architecture  "," logic"]
related: ["Boolean Algebra","Integrated Circuit Arithmetic"]
summary: "Functional completeness is a property of a **set** of **boolean operators** that dictates whether or not every single truth table can be expressed by the **set**. "
footnotes: []
---

  




Functional completeness is a very useful property since it allows us to determine whether or not we can build a circuit entirely out of a **restricted** set of boolean operators. One of the most famous examples is the fact that you can express **every** boolean operator with the **NAND**  and **NOR**  gates. 

**NAND**: ($\large \lnot(A \land B) \equiv \lnot A \lor \lnot B$)
**NOR**: ($\large \lnot(A \lor B) \equiv \lnot A \land \lnot B$)

These operators are **functionally complete** because they can express every single operation, albeit tediously. 

An example of a **functionally incomplete** set is the set: $\large \set{\land, \lor}$. This set is functionally incomplete because it **cannot** express the logical negation $\huge \lnot$ operator. 

**Example of using NAND to express AND, OR, and NOT**


Logical Negation:
$\large \lnot \equiv NAND$
$\large \lnot A \equiv NAND(A, A)$

Logical Conjunction:
$\large \land  \equiv NAND(NAND)$

$\large NAND \equiv \lnot(A \land B)$
$NAND(NAND) \equiv \lnot (\space \lnot (A \land B) \land \lnot (A \land B) \space )$ | <a class="wikiLink" href="http://localhost:4321/wiki/boolean-algebra"> De Morgans Law </a>
$\large \equiv (A \land B) \lor (A \land B)$ | **Idempotence Law**
$\large \equiv A \land B$

We now know that $\large \land  \equiv NAND(NAND)$ is true.

Logical Disjunction:
$\large A \lor B \equiv \lnot (\lnot A \land \lnot B)$ | **De Morgan's Law**
$\large \lnot A \equiv NAND(A, A)$ | **Identity of Negation in NAND** 
$\large \equiv \lnot ( \space NAND(A,A) \land NAND(B,B)\space )$ | Substitue
$\large \equiv NAND(NAND(A,A), NAND(B, B))$ | **Identity of NAND**



  