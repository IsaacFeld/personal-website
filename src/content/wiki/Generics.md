---
name: "Generics.md"
domain: 1
written: "2026-02-07T11:26:00.000Z"
finished: false
tags: [" java"]
related: []
summary: "Generics are a way of implementing **type safety** in Java and allow developers to implement **generic** functions, variables, classes, and interfaces which allow for more **flexibility**. Generics also removes the constant messy need for **type casting** in Java.\n"
footnotes: []
---

  




Generics allow us to use **types** as **parameters** for classes, interfaces, and methods. Type parameters (Generics) allow us to re-use the same code with different inputs. Generics are also checked by the **compiler** which benefits the developer experience allowing us to foresee type mismatch errors before they happen during **runtime**.
To use generics we have to use the $\lt \gt$ symbols and put a letter inside, this letter is our type variable. 

The most commonly used type parameter names are:
- E - Element (used extensively by the Java Collections Framework)
- K - Key
- N - Number
- T - Type
- V - Value
- S,U,V etc. - 2nd, 3rd, 4th types

**Note**: All generic types must inhert from the class **Object**. Therefore we cannot pass a primitive type as a type variable, and we need to use **wrapper classes** such as **Double**, **Integer**, **Long** etc. 

**Getting rid of Type Casting with Generics**
```java
//The following code snippet without generics requires casting:

List list = new ArrayList();
list.add("hello");
String s = (String) list.get(0);

//When re-written to use generics, the code does not require casting:

List<String> list = new ArrayList<String>();
list.add("hello");
String s = list.get(0);   // no cast
```

**Class, Interface, and Method Generics**

We can use generic type variables in classes too. What this does is it ensures that all type variables, that match the class' type variable, are replaced with the given type at **runtime**. 

```java
public class Box<T> {  
  
    private T value;  
  
    public Box(T value){  
        this.value = value;  
    }  
  
    public static void main(String[] args) {  
        Box<Integer> x = new Box<Integer>(3);  
        System.out.println(x.value);  // 3
        Box<Integer> x = new Box<>(3);  
		System.out.println(x.value);
    }  
}
```

Note: The constructor does not need to have the generic type, as it is already defined above.

In this example we allow the Box class to hold **any** value, and in our main method we use the primitive int's wrapper class **Integer** to pass a integer value into our box.
We also use the **diamond** notation shorthand where the compiler **infers** that the new Box must be of the same dynamic type as it's static type. So it fills in the blank for you!

The same can be done with interfaces and methods!

A type parameter is the type variable t hat is passed into a class, interface, method, or variable. Whereas the type argument is the type variable passed to a **parameterized variable**

For methods when we use type parameters we need to define what our type parameters our **before** the return type of the function is specified. This is because we need to tell our compiler what our generic type is if we use one **later on** in our method:

```java
public static <T extends Comparable<T>> int countGreaterThan(T[] anArray, T elem) {
    int count = 0;
    for (T e : anArray)
        if (e.compareTo(elem) > 0)
            ++count;
    return count;
}

public static <T extends String> int getCool(T value){  
    return value.indexOf("a");  
}
```

In this case we ensure that the type parameter T passed in as the type argument for our array extends the Comparable interface so that we can perform a comparison on the given array. For static methods we can redefine our type parameters, but for non-static methods this T would come from the class, as in the instantiated object of the class with a specified type. 

**Raw Types**

A raw type is simply a **parameterized** type where **no** type is provided, that is you are instantiating a generic class or interface without providing a type. This is allowed, but is not recommended as it makes it hard for the compiler to perform **type inference**. The raw type just assumed the generic type is an object.

```java
Box<String> stringBox = new Box<>();
Box rawBox = stringBox; // OK (going down to "child" is okay)

Box rawBox = new Box();           // rawBox is a raw type of Box<T>
Box<Integer> intBox = rawBox;     // warning: unchecked conversion (going up to "parent" is never okay)
```

Only warnings will be spit out, because it might end up working. However if our raw type holds a String and we say that our Integer box should call a function that assumes we are using a number then we run into runtime errors.

**Bounded Types**

When we want to accept generic types that meet a specific condition we use **bounded** type parameters/generics. To do this we always use the **extends** keyword no matter if we are referring to **interfaces/classes**. This declares a **upper bound**, which means that we can ensure that our type has access to specific methods or variables. 

```java
public class NaturalNumber<T extends Integer> {

    private T n;

    public NaturalNumber(T n)  { this.n = n; }

    public boolean isEven() {
        return **n.intValue()** % 2 == 0;
    }

    // ...
}
```

Here we ensure that T extends Integer which means T must be a subclass of Integer or Integer itself, and therefore we **know** that T will have access to `.intValue()` since it inherits methods from Integer.

```java
public class Box<T extends Number> {  
  
    private T value;  
  
    public Box(T value){  
        this.value = value;  
    }  
  
  
    public static void main(String[] args) {  
        Box<Long> x = new Box<Long>(3L);  
        System.out.println(x.value);   // 3
		Box<Integer> x = new Box<Integer>(9);  
        System.out.println(x.value);   // 9
  
    }  
}
```

In this example we use the more general "higher-up" class Number as our upper bound. Since Integer and Long both extend Number both boxes are legal. 

**Multiple Types**

We can use the `&` symbol to bound our type variable with **multiple** classes and interfaces. The only rule is that we must provide all class bounds **first**, and interfaces come after. Otherwise compiler error. 

**Subtypes & Inheritance**

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260207151215.png" alt="Pasted image 20260207151215.png"/></div>

We must remember that the generics within an object don't define its subtypes or supertypes. It just defines what types are allowed to be passed into the variable.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260207151328.png" alt="Pasted image 20260207151328.png"/></div>

**Wildcards**

In generics the `?` is called the wildcard generic and represents a **unknown** type. The wildcard is **never** used as a type argument for calling a generic method or creating a generic class.

We can write an upper-bounded wildcard by users the notation `? extends Foo` this ensures that all type parameters passed have to be a subtype of Foo or Foo itself.
```java

public static double sumOfList(List<? extends Number> list) {  
    double s = 0.0;  
    for (Number n : list)  
        s += n.doubleValue();  
    return s;  
}

public static <T extends Number> double sumOfList(List<T> list) {  
    double s = 0.0;  
    for (Number n : list)  
        s += n.doubleValue();  
    return s;  
}

List<Double> list = List.of(4.0, 6.0, 9.0, 24.0);  
List<Integer> list2 = List.of(4, 100, 30);  
System.out.println(Box.sumOfList(list));  // compiles
System.out.println(Box.sumOfList(list2)); // compiles
```

Here we see an example of the use of a wildcard type. However we also see that we can create the **exact same** outputs, but one uses a wildcard, and the other uses a named generic. The key differnece here is that named generics can be **reused**. While our wildcard can never be referred to again. It's essentially a one-off **filter**, whereas the generic type is a persistent variable of the current **scope**.

The wildcard is **preferred** in scenarios where the methd only **consumes** data and doesn't care about the specific type identity. This is uses plenty in the multitude of stream's <a class="wikiLink" href="http://localhost:4321/wiki/streams"> functional interfaces </a>, and it fits into functional programming well because we ensure that our function doesn't change external states.

Unlike before `List<Integer>` is a subtype of `List<?>` and can be used as such. We use wildcards for cases where we want to make sure the input data is **read-only** it is the most restrictive, but also safest way to consume data.

Wildcards can also be **lower bounded** which means that the given type must be "above" or the "supertype" of a given class. For example we only want to work with Integers, Numbers, and Objects, but not Longs so we write this: `? super Integer`






  