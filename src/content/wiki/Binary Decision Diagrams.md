---
name: "Binary Decision Diagrams.md"
domain: 1
written: "2026-01-30T19:58:00.000Z"
finished: false
tags: [" computer_architecture  "," logic"]
related: ["Boolean Algebra"]
summary: "Binary Decision Diagrams are a way to efficiently synthesize complex circuits. They are built by mapping each input to output via a binary tree."
footnotes: []
---

  




<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260130223633.png" alt="Pasted image 20260130223633.png"/></div>

A binary decision tree is a representation of a boolean function f where each variable within f is its own node in the tree, and for each variable we add we need to add **exponentially** more nodes to the tree. Each node has two paths/children/kinds, 1 and 0. The zero is generally represented as the **dotted** line and referred to as the **low kind**, whereas the one is the solid line and referred to as the **high kind**. Eventually the binary decision tree **terminates** in **constants** 1 and 0. 

As you can see this can get out of hand fast once we have more than a couple variables in our logical equation. We can try to reduce our tree by utilizing two key reduction rules to make our **ROBDD** (Reduced Ordered Binary Decision Diagram), a ROBDD's size scales **linearly** in comparison to a normal BDD's **exponential** growth.
##### Rules of Reduction for BDDs

Isomorphism (I-Reduction):

Through I-Reduction we can merge two isomorphic nodes in our tree together. Two isomorphic nodes are simply nodes that are the same, and have the **same** outputs. The inputs don't need to be equal, and can be merged together.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260130224157.png" alt="Pasted image 20260130224157.png"/></div>

Elimination (S-Reduction):

Through S-Reduction we can avoid unnecessary **middleman** nodes. When we have a node who's outputs **both** lead to the same node we can remove the node entirely.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260130224259.png" alt="Pasted image 20260130224259.png"/></div>

##### Properties of BDDs

A BDD can be "**free**", "**ordered**", and "**reduced**".

A BDD is free if on each path that can be constructed between the root of the BDD and any leaf node does not contain any **duplicate** variables. Each variable only appears at most once on the path.

A BDD is ordered if on each path that can be constructed between the root of the BDD and any leaf node has variables that are always ordered in the same way. Example: x1 -> x2 -> x3 on each path, we never have x1 -> x3 -> x2. 

A BDD is reduced if we can no longer apply any of our reduction rules a.k.a. it is as minified as can be. 

**R**educed **O**rdered BDDs are very useful because ROBDDs are in themselves canonic representations of boolean expressions. They can easily be converted into boolean algebraic functions.

Another problem with BDDs is that the way we **order** our variables changes the size of the BDD. Some orderings will lead to exponential size growth of the BDD whereas with a good order the BDD's size stays linear, and thus we can compute in linear time. To find the best order is very difficult (NP Complete) because we essentially need to evaluate **each permutation** of the given set of variables.

Example:
$\large \set{x_{1}, x_{2}, x_{3}}$ 
These variables have 3! permutations, and since the # of permutations of a given number of variables is dependant on the extremely quick factorial function we would be checking 
permutations for millenia before finding the best one. 

Therefore we need to use heuristics like **swapping** variables with each other, or using **sifting** where we check the size of the BDD based on the position of a variable, but keep the rest of the variables the same.

**Example of Sifiting for x3**
```
[x3, x1, x2, x4]
[x1, x3, x2, x4]
[x1, x2, x3, x4]
[x1, x2, x4, x3]
```

**Swapping variables in BDDs**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260131131313.png" alt="Pasted image 20260131131313.png"/></div>

To swap a variable we need to make sure that all the edges stay the same. Swapping can help us reduce the size of a BDD even further. Notice that when we swap the number of variables per unique variable is swapped, before: 2x $x_j$ 1x $x_i$, after: 1x $x_j$ 2x $x_j$.

In conclusion, worst case scenario are BDD size will grow exponentially with the # of variables, but for many cases in real life like the <a class="wikiLink" href="http://localhost:4321/wiki/integrated-circuit-arithmetic"> adder </a> our BDD's size actually grows **linearly**. 


##### Construction of BDDs

There are two ways to construct a binary decision diagram. Either we use the **Shannon Expression** or the **ITE Algorithm**.

###### Shannon Expression Construction

We start out with a boolean expression:
$\large f = (x_{1} \land x_{2} \land x_{3}) \lor (x_{2} \land \lnot x_{4}) \lor (x_{3}\land \lnot x_{4})$

Then we pick a variable that we want to start with (usually given via variable order) and split the function up into **two** partial functions based, one based on our picked variable being 1, and the other one being when our variable is 0.

**Shannon Expression** (Shannon Zerlegung)
Partial Functions of $\large f$:
$$ \huge x_{i} = 1: f_{x_{i}=1} = f(x_{1}, ....., x_{i-1}, 1, x_{i+1}, ...., x_{n})$$
$$ \huge x_{i} = 0: f_{x_{i}=0} = f(x_{1}, ....., x_{i-1}, 0, x_{i+1}, ...., x_{n})$$
Shannon Expression of a Function $f$
$$\huge f = (x_{i} \land f_{x_{i}=1}) \lor (\lnot x_{i} \land f_{x_{i}=0})$$

The Shannon Expression can be used to construct ROBDDs without needing to first create a truth table, then convert the table into a tree, and then apply reduction rules, as the reduction is done within the formula itself.

**Shannon ROBDD Construction of $(x_1 \land x_2) \lor x_3$**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/IMG_7959.jpeg" alt="IMG_7959.jpeg"/></div>

The effectiveness of a Shannon ROBDD **depends entirely** on the order of the variables. 

###### Combination of BDDs

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260131134557.png" alt="Pasted image 20260131134557.png"/></div>


<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260131134549.png" alt="Pasted image 20260131134549.png"/></div>

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260131134614.png" alt="Pasted image 20260131134614.png"/></div>

**Example**:

First we generate the **elementary** BDDs.

Then we apply the equal order rule $x_{1} = x_{1}$, where we connect the 1st child node of the first BDD with the 1st child node of the second BDD, and then we connect the 2nd child node of the first BDD with the second child node of the second BDD with the $\lor$ operator according to the function. 

Next we apply the base case where we have a constant operating on a BDD or part of a BDD, and in that case we have the connection between the first and second node of the BDD with the constant. ($\large x_{2} := \set{0, 1} \lor 1 \equiv x_{2} := {0\lor 1, 1\lor 1}$). This is essentially the distributive property. Then we can use our reduction rules to reach a **ROBDD**.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260131134652.png" alt="Pasted image 20260131134652.png"/></div>
	

###### ITE Algorithm

This algorithm gives us a clear methodology to combine BDDs. The algorithm uses ITE or the If Then Else statement which looks like so:
ITE(a, b, c) where **a** is the "selector bit", and **b** and **c** are the options. ITE is functionally complete.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260211162241.png" alt="Pasted image 20260211162241.png"/></div>

##### Applications of BDDs

**Synthesis**

We can efficiently convert BDDs into integrated circuits throuh the use of **multiplexers**. In the end a BDD is just a series of 1-bit MUX decisions. Each node branches to **at most** two leaf nodes.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260131132155.png" alt="Pasted image 20260131132155.png"/></div>

This is relatively cheap as well, as each MUX is built from 2 ANDs, 1  OR, and 1 NOT.

**Verfication**

We can also use BDDs to confirm whether or not two integrated circuits are **logically equivalent**. All we need to do is construct a BDD for both circuits, and make sure they are identical. 

##### And Inverter Graphs

And inverter graphs are a modern takle on the BDD as they rely on the boolean operator NAND. This is much more effective since NAND is extremely cheap to manufacture in comparison with others.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260201122646.png" alt="Pasted image 20260201122646.png"/></div>

**Example of an AIG for a Full Adder**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260201122801.png" alt="Pasted image 20260201122801.png"/></div>




  