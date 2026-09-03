---
name: "CPU Cache.md"
domain: 1
written: "2026-01-22T15:30:00.000Z"
finished: false
tags: [" computer_architecture  "," cache"]
related: [" "]
summary: "A CPU Cache is an intermediary memory stage that sits between the super high-speed registers on the CPU chip, and the slower random access memory. The cache is generally used to hold values to operations that occur **frequently**, allowing our program to use a past result instead of recomputing a instruction.\n"
footnotes: []
---

  




CPU Caches range from the fastest, but smallest **L1** cache to the largest, but slower **L3** cache. These caches are limited in size compared to RAM, but still have much more space than your average 32 registers in <a class="wikiLink" href="http://localhost:4321/wiki/risc-v-assembly"> RISC-V Assembly </a>. These caches act as temporary memory storage that should be called first, before having to resort to the slow RAM in order to minimize memory access time. 

Caches are constructed out of two key principles: **temporal locality (zeitliche Lokalität)**, and **spatial locality (räumliche Lokalität)**. Temporal locality states that when an address is accesed by a program, then it is very likely that the same address will be accessed again in the near future. Whereas spatial locality dictates that when an address is accessed by a program it is likely that neighboring addresses will also be accessed.

**Spatial Locality Example**
Due to the behavior of **spatial locality**, it is actually much more efficient to iterate through two dimensional arrays in **row then column** fashion. This is because a two dimensional array is an array of arrays, and each row in a two dimensional array is an array in itself. Therefore iterating through each actual array preserves spatial locality, whereas going column first would make our program have to load a different array each time. 

**Cache Procedure**

First, we check if our cache has the data, and if so then we have a **cache-hit**, and can swiftly return to the CPU with the data. 
However, if we have a **cache-miss** then we must go to our main memory, and load into our cache, replacing any existing data, and then finally load it into our CPU.
This begs the question of how can we structure data in our cache efficiently so that we can quickly identify whether we have a **cache-hit** or a **cache-miss**.

**Cache Construction**

Our cache is actually a **set** of **cache lines**. Each cache line (Cache-Zeile) has a set size that depends is usually between 32 and 128 bytes. The CPU always loads/saves to **entire** cache lines.

There are **three** different types of caches, and they all determine how to **map** a **virtual address** to a **physical address** in their own way. Each type of cache will **split** up a memory address into sections of bits, and these numbers will then dictate the destination of the address in our cache. 
Generally the structure of a **mapped cache address** looks like the picture below. It has three major components. The index bits are the most important, and that number tells us which **cache line** this address maps to. The offset bits tell us the **lower bound** of our data **within** the cache line. The tag is simply the rest of the address, and is used to **identify** the data that is being stored.

**Structure of a Cache Address**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260128174726.png" alt="Pasted image 20260128174726.png"/></div>

#### Cache Types

##### Direct Mapped Cache
- Index bits must be long enough to map to the # of cache lines within the cache

The direct mapped cache is the easiest to implement physically, but also the least useful for programmers. Within a direct mapped cache, every memory address maps directly to a single cache line within a single cache set. This leads to numerous **conflict-misses** (explained below), and is therefore not the best implementation of a cache. The other methods tend to reduce **conflict-misses**, as within a direct mapped cache there is a higher chance for a collision.

##### Fully Associative Cache
- No index bits, just tag + offset

The fully **associative** cache is the first **associative** type of cache, and it allows **any** memory address to be stored in any cache line. This cache stores **all** cache lines within **one** set. This allows us to prevent conflicts very well, but it comes at the cost of **comparison**. Before in the **direct mapped cache**, we can easily determine the position of data in our cache just by looking at the index bits. However in a fully associative cache the addresses are stored in the **first** free cache line found, or the data replaces another cache line following a **policy.**

In conclusion, we don't know where our address is within our cache, and therefore we must compare the tag bits of our address with each cache-line's tag bits until we either find our data, or we just run out of lines to search. This means for large caches, indexing through a big set takes a lot of time, and fully associative caches are generally not used.

A note on the **policy**: If we cannot find a cache line that matches our searched address we need to as per usual pull the data from main memory, and then we need to pick a cache line to replace. This **picking process** is called a **cache eviction policy**, and essentially allows us to determine which cache line should be replaced fairly. 

##### N-way Associative Cache
- Index bits map to a **x** sets of **n** cache lines, so $\large \log_{2}(x)$ index bits are required.

Unlike the fully associative cache, the cache lines are stored in (# of total cache lines / **n**) sets of **n** cache lines. This is generally implemented as 2, 4, or 8 way associative caches, and combines the best of both worlds. The idea is that we can **narrow** down our search since our index bits map to a specific **set** of **n** cache lines, where n is not too large. Then like the fully associative cache we must find our cache line through comparison of tag bits. Similar to the fully associative cache we must implement a **cache eviction policy** in order to handle conflicts. 

If we have a 4-way associative cache that has 128 cache lines in total, and each cache line is 32 bytes our address would be split up like so:

offset = $\large\log_{2}(32) = 5$ bits
index = $\large \log_{2}(\frac{128}{4}) = 5$ bits 
tag = total bits - 10 bits.

##### Cache Terminology

**Offset Bits**

Offset bits are always the **least significant bits**, and they depend entirely on the **size** of the **cache line**. The offset determines which **byte** in the cache line is our **starting** byte. Therefore we can calculate the offset bits by taking the **size** of the cache line in **bytes**, and making sure that we have enough bits to differentiate each byte.

If our cache line size is 8 bytes then we need log2(8) = 3 offset bits to describe up to 8 bytes. Therefore the **first** (lsb) 3 bits in our address would be the offset bits.

**FIFO**

A simple to implement cache eviction policy that operates on the First In First Out principle. This eviction policy performs really bad, and is therefore often not used. (FIFO-Anomaly)

**LRU**

This is a type of cache eviction policy known as Least Recently Used, in this policy we remove the cache lines whenever it is necessary based on which cache line hasn't been used in the longest amount of time. This is achieved by keeping a check on when each cache line was accessed last.

Advantages:
Performs well for situations where data is accessed consecutively.
Performs poorly for random or uneven accesses.
Hard to implement due to the requirement of a hardcoded clock to keep track of time.

**LFU**

This is another type of cache eviction policy known as Least Frequently Used, and in this policy we remove the cache lines based on the principle of determining which cache line has been accessed the least. To do this we need to keep a counter for each cache line, and whenever that line is accessed we increment that counter. 

Advantages:
Is very good for situations where the same data is accessed repetetively.
Easy to implement.

Disadvantages:
Performs poorly for situations where the data is accessed unevenly (not a lot of repetition).
Overhead due to tracking of counters for each cache line.


**Cache Hit**

This is just the term for when we successfully find the data we are looking for within our cache.

**Cache Miss**

There are two different kinds of misses. 
**When addresses are not repeated, initial**
- Cold Misses
	Cold misses are a type of cache miss that is **unavoidable**, and it is when we look for data that is **not** in the cache, and **has never been** in the cache ("startup cache miss").

**Only when Addresses are repeated**
- Conflict Misses
	Conflict misses are a type of cache miss that is **avoidable**, and it is a miss that is the result of a previous **conflict**. This type of conflict only happens in n-way **associative** or directly mapped caches, since in a fully associative cache conflicts are **impossible**. Therefore if our data **was** once in the cache, and there was a miss then it is a **conflict miss**.
- Capacity Miss
	Capacity misses are a type of miss that would've occured in a fully associative cache. It's essentially saying that the cache is too small to store the amount of data we have if there were no conflicts. **More data than cachelines available**. A cold miss is not a capacity miss. A capacity miss can only occur if the data was already in the cache.

**Hit Latency**

This is the time it takes for a value to be retrieved from the cache when there is a **cache hit**.

**Miss Penalty**

This is the time it takes for a value to be retrieved on a **cache miss**, as this would require us to search the cache -> fetch from main memory -> store in cache -> provide the value.

**Miss Latency**

Just the term for the mathematical sum of the miss latency and the hit latency, and it tells us how long it takes in total for a miss: 
Miss Penalty + Hit Latency

**Average Memory Access Time**

The average memory access time is equal to the following:
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260128184900.png" alt="Pasted image 20260128184900.png"/></div>

**Miss/Hit Rate**

Hit Rate = # Hits / # Requests
Miss Rate = # Miss / # Requests

Hit Rate = (1 - Miss Rate)
Miss Rate = (1 - Hit Rate)

**Paging**
Addressen innerhalb vom Programm sind virtuelle Addressen, unterschiede Programme gleiche virtuelle Addresse aber virtuelle Addresse zeigt auf eine physische Addresse. 

32 Bit Länge Virtuelle Addresse
aufgeteilt in VPN[1], VPN[2], (Virtual Page Number) und Offset wie Cache. 
PIPT 
- Übersetzung -> Latenz
VIVT
- Nachteil: Homonyme, Synonyme
In der Regel VIPT
- Sehr schnell miss berechnen
- Beim Lookup übersetzen
Memory Page statt Cache
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/IMG_7934.jpeg" alt="IMG_7934.jpeg"/></div>
Addresse, SATP auf addiert, kommen auf irgendeine page table.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/IMG_7935.jpeg" alt="IMG_7935.jpeg"/></div>



  