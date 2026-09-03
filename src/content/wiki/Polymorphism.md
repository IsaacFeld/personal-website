---
name: "Polymorphism.md"
domain: 1
written: "2026-01-17T11:48:00.000Z"
finished: false
tags: [" java  "," oop"]
related: ["Abstract Keyword"]
summary: "Polymorphism is a key aspect of Object Oriented Programming that involves the idea that objects can contain many different attributes and properties. In Java this is realised in layers such as a inheritance heirarchy."
footnotes: []
---

  




**Inheritance**

Java allows us to inherit properties from up to one class for our own class. This is done through the **extends** keyword. Where we say that our child class extends or inherits the properties of the parent class. The child class can then go on to override parent class methods & fields. It can also choose to leave them as is. The child class can also add more methods and fields without having to worry about changing the parent class. The parent class must be constructed with the use of the **super()** method. The super() method instantiates the parent class, and can also be used to call parent class methods, or access parent class fields. This lets us have a separate reference of the parent's resources within the child.

```java
public class Book {
	protected int pages;
	public Book(int x) {
		pages = x;
	}
	public void message() {
		System.out.print("Number of pages:\t"+pages+"\n");
	}
}
public class Dictionary extends Book {
	private int defs;
	public Dictionary(int p, int d) {
		super(p);
		defs = d;
	}
	public void message() {
		super.message();
		System.out.print("Number of defs:\t\t"+defs+"\n");
		System.out.print("Defs per page:\t\t"+defs/pages+"\n");
	}
}
```

Here we call the parent's constructor with super() since all children of Book must provide a page count. If the book constructor was empty we could technically just leave out super() and java would call the empty parent constructor for us. Then we use super.message() to explicitly invoke the message() method of the parent class (a.k.a. the overriden method). 

**Static & Dynamic Types**

In Java, each instantiated object is comprised of two types. A **static** and a **dynamic** type. When we create an object, the variable's type is defined by the **static** type or the "first/left" type. The variable we created is just a reference to an object in memory, and this object's type is based on the **dynamic** type or the "second/right" type. 

**Creating an Object in Java**
```java
Animal d = new Dog(); // Variable "d" type is Animal, Object type is Dog
Dog d2 = new Dog(); // Variable "d2" type is Dog, Object type is Dog
```

This concept is very important in understanding how Java handles types. Dynamic types are considered during runtime, whereas static types are checked during compile-time. In other words, our static type tells the compiler what methods the variable has access to, and our dynamic type tells us what methods the object has access to. Therefore, the variable can only access resources from the object's type that are also present in the variable's type.

**Example of Dynamic Dispatch and Polymorphism in Java**
```java
public class Dog extends Animal{
	public void speak(){
		System.out.println("woof");
	}
	
	public void isSpotted(){
		return true;	
	}
}

public abstract class Animal{
	public void speak(){
		System.out.println("grr");
	}
	
}


main{
	Animal animal = new Dog();
	Dog dog = new Dog();

	animal.speak() // woof?
	animal.isSpotted(); // error
	dog.isSpotted(); // true
	dog.speak(); //woof
}
```

The animal variable cannot cal the method isSpotted() because isSpotted isn't included within the Animal class. Essentially the static type determines what methods we are **allowed** to use. Now our dynamic type determines **which** exact function is called.

This behaviour of Java is called **dynamic dispatch**, and it causes animal.speak() to invoke the Dog class's speak() method. Essentially the system first checks if the method is available in the static type. If the method is found in the static type then it attempts to call the **same** method for the **dynamic type**. If the dynamic type has overriden the same method then the dynamic type's method is used instead.

**Overriding**

In Java we can override parent methods by redefining the method without changing its function **signature**. The signature of a method is defined as it's decorators + name + parameter types (order matters). When the Dog class inherited the speak() method in our example it performed overriding. This is useful in case we want to change an already implemented method for our specific case. It is standard convention to use the @Override comment before we override a method to avoid confusion.

**Overloading**

Considering function **signatures** uniquely identify functions, technically overloading just creates a new function. However overloading is a technique where we create a new method with the exact same **name**, but other aspects of the method can change. We've seen ths in the <a class="wikiLink" href="http://localhost:4321/wiki/java-class---thread"> wait() </a> method where we have a wait that can set a timer or a wait that waits indefinitely. 

**Casts**

The most important rule to remember for Polymorphism is the **upcast** rule. We are not allowed to super or upcast an object. In other words, we cannot have a static type be the subclass of the dynamic type. This is illegal. We can only cast "downwards" the inheritance tree, from parent to child, and never upwards. 

This is why we can cast a int to a long, but not a long to an int. Since a long is just an int with greater bounds an int will **always** **fit inside** a long. However the other way around is not necessarily true. Since longs can be much bigger than the integer limit. The same logic goes for objects. An animal can always **fit into** a dog, but a dog might have its own methods that don't **fit in** to an animal. You can think about it like sets and subsets. The **parent** class and it's resources are always a **subset** of the **child** class' set of resources.

$$ \large P \subset C$$

**Downcast Example in Java**
```java
int x = 5;
long y = (long) x;
```

We surround the type that we want to cast the variable down to with parenthesis. This converts the int variable into a variable of type long, and appeases the compiler. Without this the compiler wouldn't understand how you got from int to long. Therefroe we need to specify.

**instanceof Keyword**

Think about iterating over a collection of various animals. Every animal object in the collection is a child of the abstract Animal class. The collection is an Animal array. How do we know if the current Animal is a Dog and not a Cat. Well we use a type-checking keyword called "instanceof".

**Example of instanceof**
```java

Animal[] listOfAnimals = new Animal[3];

Animal cat = new Cat();
Animal dog = new Dog();
Animal elephant = new Elephant();

lsitOfAnimals[0] = cat;
listOfAnimals[1] = dog;
listOfAnimals[2] = elephant;

for(Animal a : listOfAnimals){
	if(a instanceof Cat){
		 a.drinkMilk(); // error
		 Cat c = (Cat) a;
		 c.drinkMilk(); // The cat drank milk!
		System.out.println("We fond a cat!");
	}
	else if(a instanceof Dog d){
		System.out.println(d.speak()); // woof
	}
}

```

The instanceof operator returns true if the first object's type is equal to the provided type. There is also a shorthand available that checks & casts the variable so that we can handle it right away.



  