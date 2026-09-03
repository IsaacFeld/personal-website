---
name: "Binary Tree.md"
domain: 1
written: "2026-01-17T13:25:00.000Z"
finished: false
tags: [" data_structure  "," java"]
related: ["Recursion"]
summary: "A binary tree is a datastructure that is a tree that can have at most two children. Binary Trees are often implemented as sorted datastructures where the values are ascending from left to right."
footnotes: []
---

  




A tree is a datastructure that involves branches and leaves. A leaf is a node in a tree that has no children. A branch is a node that has one or more children. In a binary tree, each branch has at most two children. This simplification lets us traverse the tree very easily. Especially with <a class="wikiLink" href="http://localhost:4321/wiki/recursion"> Recursion </a>.

The main advantage of Binary Trees is that when we sort them we can insert nodes, find nodes, and delete nodes in logarithmic time. This is becasue we can use "divide and conquer" principles to search through a binary tree. If the data is sorted in ascending order we know the following:
1) If the branch's value is greater than the target value.
	- Target must be to the left of the branch.
2) Else if the branch's value is less than the target value
	- Target must be to the right of the branch.

This lets us operate on a binary tree very quickly even for large data sizes.

Generally each node in a binary tree has three properties. 
```java
T element;
Node<T> left;
Node<T> right;
```

The value within the node, and the two references to the two possible children. If the branch has no children then the references will be null. Using recursion and backtracking we can traverse a binary tree very easily by pushing each branch onto the stack until we reach the end of one path. 

**Recursive Summation of a Binary Tree in Java**
```java

public sumTreeRec(Node<T> root){

	if(root.getRight() == null && root.getLeft() == null){ // both null we reached the end, return current
		return root.getValue();
	}
	
	 if(root.getRight() != null && root.getLeft() != null){ // both not null, search both trees, add current
		 return root.getValue() + sumTreeRec(root.getLeft()) + sumTreeRec(root.getRight());
	 }
	 else{
		 if(root.getRight() == null){ // right is null, search left and add current
			return root.getValue() + sumTreeRec(root.getLeft());
		}
		else{ // left is null, search right and add current
			return root.getValue() + sumTreeRec(root.getRight());
		}
	 }
)

```

To sum a binary tree that is very simple as all we need to do is check what children are available, if any. If there are no children of a specific branch then we can return the current node's value. Otherwise we just chain the current root's value with the following element values.



  