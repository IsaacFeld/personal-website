---
name: "Array.md"
domain: 1
written: "2026-01-17T13:25:00.000Z"
finished: false
tags: [" data_structure  "," java"]
related: ["Linked List"]
summary: "An array is a way to store elements to allow for quick indexing by exploiting memory under the hood. Arrays generally have a fixed size, and are bad at moving elements around within the array."
footnotes: []
---

  




Generally there are two types of arrays, **static** arrays and **dynamic** arrays. Static arrays have a set size, whereas dynamic arrays have theoretically **infinite** size. 

**Static Arrays**

Static arrays work by requiring the programmer to pick a concrete size for the collection of elements. Then **n** slots in memory is reserved for the array where **n** is the predefined length of the array. Arrays achieve indexing in O(1) time because all the elements of the array are stored sequentially in memory. 

**Example**
```
| 1 | 2 | 3 | 4 | 9 | 24 |
```

Therefore to find the third element in the array we just need to know the address of the first element in the array and then since each cell of memory is equally long we can calculate the third element's address easily. 

This is very practical for most problems, as indexing is far more common, but when we want to insert elements or add elements to the **static** array things get tricky. If we were to insert an element at the beginning of an array we would need to move **all** of the other elements to make space for the new one. Also if the array is already full, then insertion will cause the last element to be deleted.

**Dynamic Arrays**

Dynamic arrays are actually just static arrays under the hood with **resizing** logic built into them. The general idea is that the **resizing** operation which includes copying the contents of the original array into the new **bigger** resized array happens quite irregularly so over the span of the program the array is still quite efficient. This fixes our size problem, but it does not fix our insertion problem. Still if we want to insert an element it will take O(n) time, and therefore we need to think carefully about which data structure we use in order to solve problems.



  