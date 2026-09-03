---
name: "Synchronized Keyword.md"
domain: 1
written: "2026-01-15T18:04:00.000Z"
finished: false
tags: [" java_keyword  "," java  "," multithreading"]
related: ["Final Keyword"]
summary: "The _synchronized_ keyword in Java declares code blocks or entire methods as \"**critical sections**\" of code. Within critical sections of code parallelism is forbidden as only one thread is allowed to enter a critical section at once. This is achieved through the use of a**lock**."
footnotes: [" **Interleave** denotes the concept of multiple tasks taking turns on a single processing unit with the use of a task scheduler.\n\t\n"]
---

  




By default, code can be accessed by multiple threads at once. In many cases this can lead to dangerous race conditions (see <a class="wikiLink" href="http://localhost:4321/wiki/race-conditions"> Race Conditions </a>). To prevent this we want to label sections of our code as **synchronized** which means that only one thread can execute that code at a time. Java allows us to synchronize entire functions, but also specific blocks of code called "statements".

##### Synchronized Methods

Synchronized methods are the easiest way to implement synchronization within Java. They ensure that the no more than one thread at a time can execute the function. 

**Example of a Synchronized Method**
```java
public class SynchronizedCounter {
    private int c = 0;

    public synchronized void increment() {
        c++;
    }

    public synchronized void decrement() {
        c--;
    }

    public synchronized int value() {
        return c;
    }
}
```

If we were to instantiate the SynchronizedCounter we could use the object to handle counting in parallel. This is because ["it is not possible for two invocations of synchronized methods on the same object to interleave"](https://docs.oracle.com/javase/tutorial/essential/concurrency/syncmeth.html). <a class="wikiLink wikiFootnoteLink" href="#footnote-1"> 1 </a> Simply put, you may not have more than one thread run a synchronized method on a given object at once. Instead if a thread is already running the method on the object; then all other threads, that called the synchronized method on the **same** object, must wait in a line, and may only enter once the thread in front of it has exited the method.  This ensures that the modification of SynchronizedCounter's c value is **atomic**.

You may not use the synchronized keyword on constructors since it doesn't make sense to construct objects in parallel.

#####  Synchronized Statements

**Intrinsic Lock/Monitor Lock**

Synchronization in Java functions because of an internal property of the **JVM** known as the intrinsic lock a.k.a. monitor. Intrinsic locks play a vital role in enforcing synchronized access to an object and establishing "happen-before" relationships of data that ensure **atomic** data modification.

Every single object in Java has an **intrinisic lock** associated with it. By default a thread must acquire an object's lock if it wishes to have exclusive access to an object's properties. Once a thread is done with it's process it releases the lock. If another thread attempts to access the object's lock while a thread already possesses it then the thread will **block** until the lock is released. A lock will be released even if an exception is thrown while the thread runs its program.

Classes themselves also have their own distinct **intrinsic lock**, therefore if a thread invokes a **synchronized static** method it will acquire the class's **intrinsic lock** which is not connected to any instance of the class.

**Synchronized Statements**

It is generally bad practice to invoke other methods from within synchronized code, as this can lead to deadlocks. Therefore, sometimes we only want to synchronize specific parts of a function. To do this we use synchronized statements. Unlike synchronized methods where the lock is assumed to be the invoked object or invoked class (if method was static), in synchronized statements you must specify the object that you wish to use. The statement synchronized(Object o) will implicitly use the given Object o's lock as the intrinsic lock of the synchronized statement.

**Example of a Synchronized Statement**
```java
public void addName(String name) {
    synchronized(this) {
        lastName = name;
        nameCount++;
    }
    nameList.add(name);
}
```

This synchronized statement ensures that the increment of nameCount and the setting of lastName to name stays **atomic**.

**Lock Objects**

Sometimes we want to have two or more synchronized statements that don't depend on each other within the same object. To achieve this we can create our own locks! Remember that every object in java implicitly has a lock attached to it.

**Example of Lock Objects**
```java
public class MsLunch {
    private long c1 = 0;
    private long c2 = 0;
    private Object lock1 = new Object();
    private Object lock2 = new Object();

    public void inc1() {
        synchronized(lock1) {
            c1++;
        }
    }

    public void inc2() {
        synchronized(lock2) {
            c2++;
        }
    }
}
```

The two increment methods are independent of one another as they each increment their own separate variable.  Logically, we do not want to synchronize both methods with the same lock as inc1() and inc2() can be interleaved without race conditions being created. Therefore, we create our own objects that each have their own intrinsic locks. Thus each synchronized statement has its own respective lock. Threads executing inc1() do not need to worry about threads executing inc2() and vice versa.



  