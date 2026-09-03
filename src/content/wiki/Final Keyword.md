---
name: "Final Keyword.md"
domain: 1
written: "2026-01-15T17:27:00.000Z"
finished: false
tags: [" java_keyword  "," java"]
related: ["JVM Intricacies","Synchronized Keyword"]
summary: "In Java we use the _final_ keyword to define constants. Constants are values that cannot be modified during runtime. In Java, the _final_ keyword can be used to decorate both Classes and Variables."
footnotes: []
---

  




**Final Variables**

In general it is smart to use the final keyword as much as possible, as it allows for maximum security and efficiency. Especially when it comes to classes the final keyword can make your code less susceptible to your own mistakes later on.

For primitive types (non-object variables):
The final keyword creates a constant variable whos initial value remains **unchanged** throughout the course of a given Java program.

**Example of a Final Primitive**
```java
final int x = 3;

// Forbidden
x += 4;

System.out.println(x); // prints 3 to console 
```

For object variables:
The final keyword on object variables works a little differently due to the way Java handles objects. When you create an object in Java you are actually just creating a **reference** to that object in memory (as discussed in <a class="wikiLink" href="http://localhost:4321/wiki/jvm-intricacies"> JVM Intricacies </a>). Therefore applying the final keyword to an object in Java actually only makes the **reference** itself constant. This means that the variable will always point to the **same** object. In other words, the garbage collector will never be able to throw a final object variable in the trash since the object will always have the final reference. This leads to an interesting and rather unintuitive side effect called "_non-transitivity_" where the final keyword does not extend (hence transitive) to the actual data within the object itself. Therefore, we can modify the contents of an array that has been marked as final without causing compiler errors.

**Example of a Final Non-Primitive**
```java
final int[] list = new int[2];

// Allowed
list[0] = 1;
list[1] = 3;

for(int i = 0; i < list.length; i++){
	System.out.println(list[i]); // 1, 3
}

```

As you can see we can modify the integer array without causing problems, and the modification does indeed alter the contents of the array.

Purpose of a Final Non-Primitive?
It is still useful to have the assurance that the object our variable references is still the same exact object in memory, despite being modified. This can be useful so that when we re-access the object later on we know it has not changed to a different object.

> There are valid reasons for variables to be non-final - but whenever you declare a variable, ask yourself if you can make it final.  If you're not sure, make it final anyway, and see if you can make the code work.  If you can't make the code work without removing the final, then remove the final.  There's no shame in using non-final variables, but make sure they're actually necessary.
> - [Mike Simmons](https://coderanch.com/t/755336/java/final-objects)

**Final Classes**

When the final keyword is used on classes, we create classes that cannot be **inherited**. This allows for greater security, and in fact most of the standard java library classes are final. This prevents the programmer from inheriting from a class that should never be inherited from. 

**Example of a Final Class**
The java.lang.String class is final since the String class serves one purpose. That is to represent a sequence of chars in a practical and efficient manner. In conclusion, when a class serves one purpose, and should not be **expanded** upon we should make it final.



  