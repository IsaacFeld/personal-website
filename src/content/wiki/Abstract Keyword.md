---
name: "Abstract Keyword.md"
domain: 1
written: "2026-01-17T10:43:00.000Z"
finished: false
tags: [" java_keyword  "," java  "," oop"]
related: ["Interface"]
summary: "The abstract keyword can be used to decorate **classes** and **methods**. This keyword lets us define methods without actually implementing them, similar to the way an[[Interface | interface]] works.  Following that analogy, abstract classes cannot be instantiated, only inherited.\n"
footnotes: []
---

  




**Abstract Methods**

Abstract methods are methods that have no **implementation**. All classes that containt abstract methods **must** be abstract. Within the abstract class the signature of the abstract method to be implemented is defined. The class that inherits from the abstract class (if it is not abstract itself) must implement the methods to avoid a compiler error. This is useful in OOP because we can define general methods without actually implementing them until later in our subclasses.

**Abstract Classes**

Abstract classes are classes which **cannot** be instantiated as objects. They **may** contain abstract methods. Unlike interfaces abstract classes can contain public, protected, private, and non-static **fields**. Abstract classes should generally be used when we know that the subclasses of the abstract class are all related. That is, they benefit from sharing **fields** and **methods** with each other. Interfaces should be used for the opposite case, where subclasses can be vastly different from each other. Though abstract classes cannot be instantiated, they can have **constructors**, and this is because we might want to force our subclasses to initialize certain fields that are inherited. 

**Example of an Abstract Class in Java**
```java
public abstract class Animal {
	private boolean isAlive;
	 
	 public Animal(){
		 isAlive = true;
	 }
	 
	 abstract public String speak();
}

public class Dog extends Animal {
	
	public Dog(){
		super();
	}
	
	public String speak(){
		return "Woof!";
	}
}
```

Here we have an abstract parent class for a general Animal. Now we want all our animals to be able to speak. However it doesn't make sense to define the speak method for animal, because animal is a placeholder for any actual animal. Therefore we define speak() as an abstract method, and implement speak in Dog.



  