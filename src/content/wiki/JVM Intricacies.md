---
name: "JVM Intricacies.md"
domain: 1
written: "2026-01-15T17:42:00.000Z"
finished: false
tags: [" java"]
related: []
summary: "\n\n"
footnotes: []
---

  





**On the topic of "Monitors" and "Locks"**

Quote from [Inside the Java Virtual Machine](https://www.artima.com/insidejvm/ed2/threadsynchP.html)

> A thread in the Java virtual machine requests a lock when it arrives at the beginning of a monitor region. In Java, there are two kinds of monitor regions: synchronized statements and synchronized methods.

**Monitor**

> A monitor is like a building that contains one special room that can be occupied by only one thread at a time. The room usually contains some data. From the time a thread enters this room to the time it leaves, it has exclusive access to any data in the room. Entering the monitor building is called "entering the monitor." Entering the special room inside the building is called "acquiring the monitor." Occupying the room is called "owning the monitor," and leaving the room is called "releasing the monitor." Leaving the entire building is called "exiting the monitor."
> 
> In addition to being associated with a bit of data, a monitor is associated with one or more bits of code, which in this book will be called monitor regions.
> 
> As mentioned earlier, the language provides two built-in ways to identify monitor regions in your programs: synchronized statements and synchronized methods. These two mechanisms, which implement the mutual exclusion aspect of synchronization, are supported by the Java virtual machine's instruction set.

**Lock**

> To implement the mutual exclusion capability of monitors, the Java virtual machine associates a lock (sometimes called a mutex) with each object and class. A lock is like a privilege that only one thread can "own" at any one time.
> 
> A single thread is allowed to lock the same object multiple times. For each object, the Java virtual machine maintains a count of the number of times the object has been locked. An unlocked object as a count of zero. When a thread acquires the lock for the first time, the count is again incremented to one. Each time the thread acquires a lock on the same object, the count is again incremented.

[Zane XY](https://stackoverflow.com/questions/9848616/whats-the-meaning-of-an-objects-monitor-in-java-why-use-this-word)

#### Implicit Typecasting

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260207171145.png|500" alt="Pasted image 20260207171145.png|500"/></div>

In Java when we perform mathematical operations (**including `==, +, -, *, /`**) or assignment operations on multiple different primitive types the **JVM** **always** reaches for the **highest** type / the one closest to the end of the chain depicted above.

**Floor Rule**: If we perform an operation where all operands are **smaller** than an int **all** operands are implicitly casted to **int**.

Therefore: `7/2.0 = 3.5` but `7/2 = 3`. 
As you can see as soon as a floating point value is introduced the JVM implicitly infers the type of the other number as a floating point value as well and performs floating point division. 
Whereas the other operation both numbers are clearly ints, and thus integer division is used.

#### Primitives

###### Primitive Widening:

```java
long x = 'C' + 4; // expected long, but provided a narrower int  
int b = 4000l; // expected int, but provided a wider long
```
Primitives don't have subtypes, but they do have their respective widths. The int and primitives wider than the int follow a special kind of inheritance. A int is always "**narrower**" than a long, in other words a int can always fit inside a long. However a long cannot fit into an int **implicitly** without an **explicit** cast.

In conclusion: within an assignment operation in Java the type that is being assigned needs to be a **subtype**, a **primitively equal or narrower**, or the **same type** through an **explicit cast**. Whereas within a mathematical operation the **highest** type is taken (or see Floor Rule), and then both values are implicitly casted to that type.

**Floating Point Numbers**

Floating point numbers have a limited amount of accuracy, 
```java
0.1 + 0.1 + 0.1 != 0.3  // 0.30000000000004
```

Only when dividing non-floating-point numbers by zero is an ArithmeticException thrown.

**Division for Floating Point Numbers:**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260207181834.png" alt="Pasted image 20260207181834.png"/></div>

**Overflow & Underflow**
Whole numbers can overflow and underflow. Whole numbers in Java are stored in a circular fashion, so adding 1 to the max value leads to the smallest value, and subtracting 1 from the min value is equal to the max value.

**Autoboxing**
```java
Object yo = (short) 3; // Works because primitive is automatically wrapped, and fits inside object
public T (Object o){

}
new T((short) 3) // Still automatically packages the primitive
```

Primitives can be automatically wrapped by the JVM if necessary. 
All Wrapper classes extend Number, none extend each other. There isn't the same kind of primitive widening by wrappers.

###### Prefix and Postfix

Prefix (`++i` or `--i`)
**"Update Right Away"** 
```java
int a = 5;
int b = ++a; 

// Result: a is 6, b is 6
```

Postfix (`i++` or `i--`)
**"Update in Post"** 
```java
int x = 5;
int y = x++; 

// Result: x is 6, y is 5 (y got the value before the increment)
```

**In-Depth Examples**
```java
int i = 3;
int result = i++ + ++i;
System.out.println(result); // prints 8
```

```java
w = 3
w = w--; 
// 1) old w value is returned,
// 2) actual w value is decremented to 2
// 3) w is assigned to the returned value, stays 3.

System.out.println(w); // prints 3
```

```java
int a = k = a++;
// actually equals
int a = (k = a++); 
```

When we assign a postfix notation variable to itself the variable's value stays the same, but when we assign a postifx notation variable to another variable then the postfix'ed variable increments/decrements.

#### Polymorphism

##### Static (Compile-Time) vs. Dynamic (Runtime) Type of Ojects

There are two types within Java. The left hand type is the **static type** and can be viewed as a **lens** or **filter**. It is responsible for deciding where we can **start** searching. The right hand type is the **dynamic type** and can be viewed as a **terminator**. The dynamic type defines where our search should **end**. 

**Changing the Static Type** 
The static type is essentially the variable's type. It can be changed in two ways, at **instantiation** or **explicit** type casts.

Instantiation:
```java
Double x = new Double(3.0);
A object = new A(); 
Animal animal = new Animal();
```
Here we see the types: `Double, A, Animal` are our static types. Dynamic types are found on the right hand side, in this case equal to the static type. 

Explicit Type Casting:
```java
Dog x = (Dog)  animal; // Compiles.
Animal newAnimal = (Animal) x; // ClassCastException thrown at Runtime
```

We can only change static types in **one direction**, and that is from **Parent to Child**. We cannot go from Child to Parent or "Up/Back" because children are able to have **more** properties than their parents. Whereas parent classes can guaranteed fit inside of a child class due to the fact that the child inherits everything from the parent.

**Chainging the Dynamic Type**

Instantiation:
```java
Animal animal = new Dog("woof");
```

Assignment:
When we do an assignment; the assigned object's dynamic type changes to the dynamic type of the assignee.
```java
T<Integer> x = new X<>();  // Static Type T, Dynamic Type X
S<Integer> s = x;  // Static Type remains S, Dynamic Type changes to X
```

**Incompatible Types**

In Java when we assign variables whether that be primitives or objects we need the types to be **compatible**. This means that we can't cast backwards but we can cast forwards.

```java
// Example 1
int x = 3;
double y = x + 4.0; // x is implicitly casted to a double here because types need to be matched at highest level

// Example 2
class Top
class Medium extends Top

Medium m = new Top(); // Compile Error because we cannot convert Top into Medium (backwards)

Medium m2 = new Medium();
Top t2 = new Top();

m2 = t2; // Compile Error because we cannot convert Top into Medium.
m2 = (Medium) t2; //  Runtime Error because we cannot convert Top into Medium
t2 = m2; // Copmiles.
```

The static type must always be equal or higher up the inheritance chain in comparison with the dynamic type. 

##### Special Cases

**Overloading**

Choosing _which_ overloaded method signature to use happens at compile-time based on the static type of the arguments. This is why ambiguity errors are **compile-time** errors.

```java
void assembleFleet(Car car) {Car.greet(car); write(" my car fleet");}   
void assembleFleet(Coupe coupe) {Car.greet(coupe); write(" my coupe fleet");}

Car genericCar = coupe;
Car car = new Car("Corolla");  
car.assembleFleet((Car)coupe); // The method with Coupe coupe is not taken because the static type of the argument is car, and the choosing of overloaded methods happen at compile time. 
```

**Field Shadowing/Overriding**

Variables that are apart of classes in Java are **not polymorphic**. They **cannot** be dynamically dispatched. Therefore the compile-time or **static** type of the variable **defines** which property is accessed. The JVM does not **look** for fields in child classes to find the most **specific** version instead it uses the static type's property. 


**Constructor Dynamic Dispatch**

```java
static class Init {  
    String myName = "00";  
    String mySecondName;  
    void complete() {  
        myName = myName + '7';  
        mySecondName += " James Bond";  
    }    public Init() {  
        mySecondName = " James"; complete();  
    }}  
static class MyInit extends Init {  
    void complete() {  
        myName = myName + "6";  
        mySecondName += " Jamie Blond";  
    }    public MyInit() {}  
}
```

When we create a `MyInit` object a call to the parent's call via super is implicitly called (`super()`) by the JVM. From within that constructor call the child class still **executes the code**. Therefore the **this** keyword actually refers to the MyInit object, not the class Init. Therefore the complete() method is dynamically dispatched/overriden by MyInit's `complete()`  method.
Remember that the this keyword refers to the current **object** not the current class.

**Constructor Fields**

"The parent constructors always has to finish first before child fields are initialized."
This leads to interesting results when combined with constructor dynamic dispatch:

```java
class Parent {
    Parent() {
        printMe(); // Dynamic Dispatches to Child version of printMe()
    }
    void printMe() { System.out.println("Parent"); }
}

class Child extends Parent {
    int x = 42;
    void printMe() { System.out.println("Child x: " + x); }
}

main{
	new Child();
}
```

Here we call new Child(), this implicitly calls super(). Within super() we call printMe() which dispatches to the child's printMe() causing x to be printed to the console. Then because the super() constructor call hasn't finished yet, the field x hasn't been able to be initialized. Therefore x is still zero. So `"Child x: 0"`  is printed.





  