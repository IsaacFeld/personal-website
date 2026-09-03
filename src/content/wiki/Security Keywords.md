---
name: "Security Keywords.md"
domain: 1
written: "2026-01-17T11:49:00.000Z"
finished: false
tags: [" java  "," java_keyword"]
related: []
summary: "Security keywords in Java can decorate methods, classes, interfaces, and variables. The keyword public, private, and protected are used to define the scope of the object. \n"
footnotes: []
---

  




As you would expect, you cannot mix multiple security keywords together. This would make no sense. 

**Public**

The public keyword in Java is used to describe resources that can be used by anyone. The most common example of a public resource is probably a constructor method. We often define the **constructor** as public since we generally want to be able to instantiate an object from other files/packages.

**Private**

The private keyword in Java is very useful for securing your program. The private keyword is generally used for fields within a class, and methods that shouldn't be called directly. The private keyword forbids accessing the marked resource from outside of the class. 

**Example of the Private Keyword in Java**
```java

public class MyPassowrd{

	private String password = "hello123";
	
	public MyPassword(){
		this.password = "hello1234";
	}

	
}
// Separate File
public class Example {
	 main(){
		 MyPassword mp = new MyPassword();
		 System.out.println(mp.password); // compiler error
	 }
 }
```

We cannot access the password field from an instance of MyPassword since it is private. Now within the MyPassword class we can definitely access it.

It is generally smart to use the private keyword as much as possible when programming. We use "getters" and "setters" to manipulate private variables from the outside. We also like to abstract complicated methods with simpler APIs. Instead of having to call a complex method directly, we instead make a facade in front which is public, and have the complex method be private.

**Protected**

The protected keyword in Java is useful for inheritance contexts. The keyword allows us to define resources that should be accessible within subclasses, and also within the same "package". This is useful if we want to have a in between for private and public for our subclasses. 

**None**

When we don't provide a privacy keyword Java automatically assigns rules anyways. No modifier is similar to protected except it forbids subclasses from accessing the resource if they **aren't** in the same package. Before with protected, we could access resources from anywhere as long as we were a subclass. Now with no modifier we may not.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260117130505.png" alt="Pasted image 20260117130505.png"/></div>



  