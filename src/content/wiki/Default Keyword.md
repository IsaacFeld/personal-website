---
name: "Default Keyword.md"
domain: 1
written: "2026-01-17T11:30:00.000Z"
finished: false
tags: [" java  "," oop  "," java_keyword"]
related: ["Abstract Keyword","Interface"]
summary: "The default keyword in Java is used to provide **implemented** methods in **abstract** contexts such as within an [[Abstract Keyword|abstract]] class or [[Interface |interface.]]"
footnotes: []
---

  




The default keyword is pretty straightforward. Sometimes in Java we want to have a contract such as an interface, but we also want to keep some methods constant among all those who implement the abstract contract. For example, let's say we want to make sure all animals can get the "cool number". We can define a default method for that, and it will be available for all subclasses. The same logic applies to interfaces.

**Example of a Default Method in Java**
```java
public abstract class Animal {
	private boolean isAlive;
	 
	 public Animal(){
		 isAlive = true;
	 }
	 
	 abstract public String speak();
	 
	default public int getCoolNumber(){
		return 9;
	}
}

public class Dog extends Animal {
	
	public Dog(){
		super();
	}
	
	public String speak(){
		return "Woof!";
	}
	
	main(){
		Dog dog = new Dog();
		dog.getCoolNumber(); // 9
	}
}

```

It is important to note that when we extend interfaces with default methods we may override them or change them to abstract. If we leave it, then the interface will automatically inherit the default methods.



  