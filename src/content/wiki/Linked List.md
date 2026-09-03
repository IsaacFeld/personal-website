---
name: "Linked List.md"
domain: 1
written: "2026-01-17T13:25:00.000Z"
finished: false
tags: [" data_structure  "," java"]
related: ["Array","Stack","Queue"]
summary: "A linked list is a collection of elments that are connected with **links**. It is the most simple implementation of a collection. Linked Lists can efficiently implement insertion, copying, and deletion in O(1) time."
footnotes: []
---

  




There are two types fo linked lists. The **doubly** linked list, and the **singly** linked list. These two differ in the amount of links that are between each element. In a **singly** linked list there is only one link between each element. Generally each node will have a field that stores a reference to the **next** element in line. Whereas a **doubly** linked list will have two fields, one storing a reference to the previous element, and the other for the next element.

**Abstract Implementation of a Linked List Single/Double in Java**
```java
class LinkedList{
	Node<T> head;
	Node<T> tail;
	int size;
}
class Node{
	T element;
	Node<T> next;
	// sometimes
	Node<T> prev;
}
```

Both types of linked lists usually have a head and a tail pointer that is a property of the list itself. This lets you always quickly access the first and last elements of the array, and also prevents the list from just being null. The head element can also be used as a dummy element for when we traverse the linked list. 

The main **advantage** of linked lists is that they have a **flexible** size since we can always keep appending elements to it. Another amazing advantage is that we can move around, remove, and insert elements in O(1) time. This is because everything is only connected by references. For example, in a **singly** linked list we only need to update one reference if we want to delete an element, namely the **next** field of the preceding element to the deleted one.
For a **doubly** linked list we would need to update two references instead of one, but this is still very cheap. 

The main **disadvantage** of linked lists is that to find elements within them it takes O(n) time. This happens due to the fact that there is no way to start at any element in the linked list (unless we have a reference to that specific element) except the head or tail. Therefore to find an element we generally start at the head and follow the chain of elements till we find what we are searching for.

**Find() function of a Singly Linked List in Java**
```java
public class LinkedList{
	public Node<T> find(T value){
		Node<T> current = LinkedList.getHead();
	
		while(current != null){
			if(current.getValue() == value){
				return current;
			}
			current = current.getNext();
		}
	
	}
}
```

As you can see we start with the node referenced by the head pointer, and repeatedly call .getNext() to get the next element. It is important to stop the loop once current is equal to null as forgetting to do so will lead to a null pointer exception.



  