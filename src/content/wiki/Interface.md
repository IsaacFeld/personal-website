---
name: "Interface.md"
domain: 1
written: "2026-01-17T10:47:00.000Z"
finished: false
tags: [" java  "," oop"]
related: ["Default Keyword","Abstract Keyword"]
summary: "An interface is similar to an[[Abstract Keyword | abstract class]], but differs as instead of being inherited interfaces are implemented. The key difference also lies in the fact that a class can implement **multiple** interfaces instead of just one."
footnotes: []
---

  




An interface can be seen as a contract that states how a class that implements the interface should look like. Essentially a schema or a blueprint for how you should build a class. This is extremely useful in object-oriented-programming as it lets us define a general set of rules. Compared to abstract classes interfaces are a little more strict in what they can do, but therefore are better for cases where you don't want to be super specific. 

Interfaces are allowed to have constant fields, methods that don't need to be marked as abstract since all interface methods by defualt are abstract besides<a class="wikiLink" href="http://localhost:4321/wiki/default-keyword">  default </a> & **static** methods. Runnables which we've seen in <a class="wikiLink" href="http://localhost:4321/wiki/java-class---thread"> Java Class - Thread </a> are an example of an interface. The runnable interface forces the class to implement a run() method, because without a run() method you can't create a thread. 

Interfaces are very convenient tools for outlining an API. For example, if we want to create multiple enemies in a game that can attack the player. We can create an interface that is called "Attacker". Then we can define what methods each enemy should have so that it can attack the player.

All methods within an interface are implicitly public. 

**Example of an Interface in Java**
```java
public interface OperateCar {

   // constant declarations, if any

   // method signatures
   
   // An enum with values RIGHT, LEFT
   
   int turn(Direction direction, double radius, double startSpeed, double endSpeed);
   int changeLanes(Direction direction, double startSpeed, double endSpeed);
   int signalTurn(Direction direction, boolean signalOn);
   int getRadarFront(double distanceToCar, double speedOfCar);
   int getRadarRear(double distanceToCar, double speedOfCar);
         ......
   // more method signatures
}


public class Audi implements OperateCar{
	 ...
}
```

Interfaces can also "extend" each other. This allows us to upgrade and modify interfaces which leads to a sort of inheritance structure but for interfaces. 



  