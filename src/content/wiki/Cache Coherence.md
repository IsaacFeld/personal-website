---
name: "Cache Coherence.md"
domain: 1
written: "2026-01-30T18:58:00.000Z"
finished: false
tags: [" computer_architecture  "," cache"]
related: []
summary: "Cache coherence describes the idea of keeping data **atomic** despite it potentially being **shared** across separate caches."
footnotes: []
---

  




<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260130201803.png|200" alt="Pasted image 20260130201803.png|200"/></div>

In a multi-core CPUs each core has its **own** local cache. All of these local caches pull from the **same** main cache or main memory. When one core makes a change to an address, and other local caches hold the same memory address their copy becomes **invalid**. To prevent data inconsistencies, and **race conditions** we have to implement a communication system between local caches. 

##### MESI Protocol

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260130200536.png" alt="Pasted image 20260130200536.png"/></div>

The MESI protocol is an example of a functional **cache coherence protocol**, and it stands for **M**odified, **E**xclusive, **S**hared, **I**nvalid. These are the four **states** a cache block/line can take. See <a class="wikiLink" href="http://localhost:4321/wiki/cpu-cache"> CPU Cache </a> for more info on what cache lines are. The MESI protocol functions through the use of **snooping** which uses special buses along the CPU's caches to allow communication between the local caches. This lets us always check if the value we are reading or writing doesn't already exist in another local cache.

**State Explanations**

Modified
- A cache block within a local cache becomes "modified" when it is written to. It is labeled as modified because the new value has not been shared with the other caches yet.
- All other cache lines that held the **same** address become Invalid

Exclusive
- A cache block becomes exclusive when a address is read from the shared memory, and no other local caches share this address. Therefore this is the only **copy** of this address, and thus exclusive.
- Please note that it is impossible to go from Shared to Exclusive, you can only go from Invalid to Exclusive there is no other path.

Shared
- A cache block can become shared in three different ways:
	- The cache block was exclusive, but another cache has read the same address, and now at least two caches share the **same** copy making it **shared**.
	- The cache block has been modified by a local cache, but upon another cache reading the address the modified value is propagated to the cache who requested the value, and now both copies are shared.
	- The cache block was invalid, and we read an address that is already stored in at least one other local cache thus this cache line becomes shared.
- The shared state **cannot** transition to the **exclusive state** it will stay shared until modified or turned invalid.
- The shared state indicates that there is a copy of a value in at least two caches. (usually)

Invalid
- A cache block can become invalid when another cache updates the value of the copy that this cache holds. Since the copy we have is no longer valid we must become invalid. 

**Operations**

Local Read

A local read means we read directly out of shared memory, this transitions an invalid block to exclusive or shared if another cache holds a more updated copy.

Local Write

A local write means we write directly to shared memory. This means that our address has now been modified, and all previous owners of copies of the address become invalid.

External Read

An external read means another cache has read a value that we have a copy of. This means we can transition from Exclusive/Modified to Shared.

External Write

An external write means another cache has written to a value that we have a copy of. This means we must transition to Invalid. No matter what state we are in we always end up in invalid due to an external write.

**Example of a MESI Protocol**
The cache in this example is a direct mapped Cache where each Cache has 4 Cachelines which each have a size of 8 Bytes. 

4 Cachelines
Index bits = $\log_{2}(4) = 2$
Offset bits = $log_{2}{8} = 3$

Address = (Tag + 2 Index Bits + 3 Offset Bits)

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260130202116.png" alt="Pasted image 20260130202116.png"/></div>



  