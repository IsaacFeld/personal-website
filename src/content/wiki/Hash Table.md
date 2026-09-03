---
name: "Hash Table.md"
domain: 1
written: "2026-01-17T13:25:00.000Z"
finished: false
tags: [" data_structure  "," java"]
related: ["Array","Linked List"]
summary: "A hash table is a data structure that utilizes a hash function to map a set of hashed keys to a set of values. This creates key-value pairs, and allows for quick indexing."
footnotes: []
---

  




Hash tables are useful when we want to store values in pairs. That is we want to have a name that describes the property, and then the property value linked to the name. The way a hash table works is it uses a special hash function, usually some kind of modulo formula, to make sure that each possible key can be converted into an index that **fits** within the size of the hash table. Due to the limited size of possible indices, and the seemingly infinite size of inputs there tends to be **hash collisions**. Hash collisions occur when two different inputs lead to the same key via the hash function. When this happens we usually have a second data structure in place to catch the collisions. The standard approach is to think of each index of a hash table as a "**bucket**". This bucket is the head of a linked list that can be appended to **infinitely**. Therefore, even if we have collisions we can just append the value at the same index. The only problem with this approach is that if we have a **bad** hash function that produces many collisions we will spend a lot of time traversing through the linked list at a given bucket.

Within a hash table there are generally only two operations: **`get(Object key)`** and **`set(Object key, Object value)`**. Using set on a key value pair that already exists will just replace the value. 



  