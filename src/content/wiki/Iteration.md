---
name: "Iteration.md"
domain: 3
written: "2026-01-19T19:39:00.000Z"
finished: false
tags: ["",""]
related: ["Collections"]
summary: "Iteration allows us to iterate over arrays of objects, object by object instead of index by index. JVM does this under the hood through the **Iterable** and **Iterator** interfaces."
footnotes: []
---

  




In Java the JVM can perform a fancy object loop that looks like this through iteration:
```java
for(Animal animal : Animals){
	System.out.println(animal);
}
```

This is done by getting the **iterator** of the **iterable** class. The **iterator** interface requires the methods **`next()`** and **`hasNext()`**. The **`next()`** method returns the next object in the data structue (as defined by the iterator); and the **`hasNext()`** returns a boolean indicating whether or not there is a remaining element. Subsequently, the JVM can use the **`iterator()`** method of the **iterable** interface to get the iterator for the given collection. The general use of iterators and iterables is to traverse through any given collection efficiently.

##### Binary Tree Iteration

Traversing through a binary tree is most efficiently done through a custom iterator that uses a <a class="wikiLink" href="http://localhost:4321/wiki/stack"> Stack </a> and <a class="wikiLink" href="http://localhost:4321/wiki/recursion"> Recursion </a> internally to quickly reach each node of the tree. There are three main orders when it comes to traversing a tree: **pre-order**, **post-order**, and **in-order** traversal. I'll be giving Java implementations of a binary tree traversal with each order below.





  