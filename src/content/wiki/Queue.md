---
name: "Queue.md"
domain: 1
written: "2026-01-17T13:25:00.000Z"
finished: false
tags: [" data_structure  "," java"]
related: ["Stack","Linked List"]
summary: "A queue is a high-level implementation of a [[Linked List|linked list]] that uses the **FIFO** principle to enqueue and dequeue elements."
footnotes: []
---

  




A queue uses a linked list under the hood, and has two main operations. **`enqueue()`** and **`dequeue()`**.

**`enqueue()`**
This **inserts** an element at the **front** of the linked list. The new element becomes the head of the list.

**`dequeue()`**
This method **removes** the element at the **end** of the linked list, usually the tail.

Queues, just like real life lines, operate on the First In First Out principle which means that the first element that is added is always the first one to get out. There is no way to mess around with the middle of a queue, and you generally only have those two methods to manipulate data inside a queue.

**`poll()`**
This method lets you look at the **last** element of the linked list without removing it.



  