---
name: "Stack.md"
domain: 1
written: "2026-01-17T13:25:00.000Z"
finished: false
tags: [" data_structure  "," java"]
related: ["Queue","Linked List"]
summary: "A stack is a high-level implementation of a [[Linked List|linked list]] that uses the **LIFO** principle to push and pop elements."
footnotes: []
---

  




A stack uses a linked list under the hood, and has two main operations. **`push()`** and **`pop()`**. Stacks are very useful in recursive programming, as they mimick the behavior of a recursive function.

**`push()`**
This **appends** an element at the **end** of the linked list. The new element becomes the tail of the list.

**`pop()`**
This method **removes** the element at the **end** of the linked list, usually the tail.

Stacks operate on the Last In First Out principle which means that the **last** element that was added to the stack is the **first** one to go when invoke pop() on the stack. Just like <a class="wikiLink" href="http://localhost:4321/wiki/queue"> queues </a>, there are generally no methods that let you manipulate elements within the stack besides push() and pop().

**`peek()`**
This method lets you look at the **last** element of the linked list without removing it.



  