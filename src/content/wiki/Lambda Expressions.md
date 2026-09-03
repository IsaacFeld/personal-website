---
name: "Lambda Expressions.md"
domain: 1
written: "2026-01-19T19:38:00.000Z"
finished: false
tags: [" functional_programming  "," java"]
related: ["Streams"]
summary: "Lambda expressions make functional programming possible by lettung us define methods and objects without the use of object-oriented constructors. This is achieved through generalized **anonymous** functions. Lambda expressions let us treat **code** as **data**."
footnotes: []
---

  




Lambda expressions are key in utilizing **functional interfaces**, which are simply interfaces that contain only **one** abstract method, namely the method that gets implemented by the lambda expression. The idea is that we have a general functionality, but we can't say exactly how the functionality will be implemented. 

**Use Cases of the Lambda Expression**

UI Events are one of the easiest use cases of lambda to understand. When we click on an element on the screen we usually want something to happen. However, it is usually the case that based on what element we click -> a different effect should be produced. This is where lambda expressions come in handy. See the example below:

**Example of a Functional Interface & a Lambda Expression in Java**
```java
interface Clickable{

	public abstract void click(ClickEvent e);

}

Button myButton = new Button((ClickEvent e) -> {
	System.out.println("Someone clicked this button!");
})

Button mySecondButton = new Button( (ClickEvent e) -> {
	System.out.println("Someone clicked the second button!");
})
```

This is a key use case of lambda expressions, as it allows us to implement the same function for two objects of the same class differently.

**A Note on Syntax**

Each lambda expression has three parts. A set of parenthesis, an **arrow**, and a function body. The set of parenthesis lets us define which inputs the lambda function should take. We never need to declare parameter types for lambda functions because the types are already predefined in the **functional interface** or the object which we are pulling inputs from. For example, in Java if we perform a lambda expression on a stream of Strings then the compiler will know that the inputs will be of type String. The **arrow** is just syntactic sugar that indicates that we map the set of inputs to an output via the **function body**. The function body can be an entire function with curly braces or just a single return statement.

**Example of Lambda Syntax in Java**
```java
public void LambdaSyntax{
	dogStream.filter( (dog) -> return dog.isCute() );
		
	catStream.filter( (cat) -> {
		if(cat.getName().equals("Alex")){
			return true;
		}
		else if(cat.getAge() <= 1){
			return true;
		}
		else{
			return false;
		}
	})
	
}
```

As we can see the first stream is a stream of Dog objects. We want to only include the dogs that are labeled as "cute", whatever that means. Therefore we take the input dog (the compiler knows it is of type Dog). Then we map the input to the function "return dog.isCute()". 

The second example is the same, but instead we provide a full on method instead of a one-liner.



  