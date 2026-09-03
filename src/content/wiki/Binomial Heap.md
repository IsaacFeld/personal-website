---
name: "Binomial Heap.md"
domain: 1
written: "2026-06-05T21:10:00.000Z"
finished: false
tags: []
related: []
summary: "A forest of binomial trees.\n "
footnotes: []
---

  




 **`union()`**

Upon merging two binomial heaps, we sort them in increasing order of degree.

**Binomial Heap Sort Example**
$H_1 = 2 \rightarrow 4 \rightarrow 7$
$H_2 = 0 \rightarrow 1 \rightarrow 4 \rightarrow 6$
$H_3 = 0 \rightarrow 1 \rightarrow 2 \rightarrow 4 \rightarrow 4 \rightarrow 6 \rightarrow 7$

Subsequently we traverse our forest of trees, and whenever we find two trees with the same degree k we merge/link them (from left to right).
- If >2 trees with same degree skip the current one and merge the next two.

**Union Pseudocode**
```javascript
function union(heapA, heapB){
	const mergedHeap = mergeForests(heapA, heapB) // Sort by degree in ascending order
	const consolidatedHeap = consolidateHeap(mergedHeap) // Link same-degree trees
}
```

**`insert()`**

Now that we have union() figured out, insertion becomes super simple. When we want to insert a value we can do so in $O(\log n)$ time by calling union on our heap, and a **new heap** created with degree 0 that solely contains the element we want to insert.

**`deleteMin()`**

Remove the node that our min pointer points to. After removing the minimum root in our forest we are left with "**fragmented children**".

> <div class="blockQuoteImportantContainer"><svg class="blockQuoteImportantIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-alert-icon lucide-book-alert"><path d="M12 13h.01"/><path d="M12 6v3"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg></div> The children of a binomial tree's root node is always a binomial tree itself.

Due to this property we can treat our "**fragmented children**" as a binomial heap in itself, so just like the **`insert()`** we create a binomial heap with the children, and then we call **`union()`** on the newly created binomial heap, and the existing heap.

**Pseudocode**
```javascript
function deleteMin(){
	const smallestRoot = this.removeSmallestRoot()
	const children = new BinomialHeap(smallestRoot.children)
	
	const newHeap = this.union(children)
}
```

It is a good idea to use a LCRS relationship when implementing Binomial Heaps, that is each node only knows about it's left child, and it's right "sibling". This makes it super easy to implement the forest of root nodes, as each root node has a sibling pointer that points to the **next root node** in the binomial heap.






  