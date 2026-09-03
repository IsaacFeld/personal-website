---
name: "Java Class - Thread.md"
domain: 1
written: "2026-01-16T14:30:00.000Z"
finished: false
tags: [" multithreading  "," java_class  "," java"]
related: ["Synchronized Keyword","Race Conditions","Deadlock","Producer Consumer Problem","JVM Intricacies"]
summary: "A thread object in Java is a tool used to execute a program. The JVM allows multiple threads to be running simultaneously leading to either concurrency or parallelism dependent on the amount of cores provided by the given processor."
footnotes: []
---

  




In Java, there are two main classes of threads. The main thread, and the threads you yourself create. The main thread is the thread responsible for running the current .java file.  The first thread you create must be started from the main thread. Each thread has a void **run()** method that declares what code the thread should execute. Throughout a thread's lifecycle in Java it can enter and exit many different states. See the state diagram below to understand how each method transitions a thread from one state to the next.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260116160454.png" alt="Pasted image 20260116160454.png"/></div>

#### Thread Construction

There are three ways to instantiate an object of the thread class:

**Creating a Thread with Inheritance**

The most straightforward way to create a thread is by writing your own subclass of thread with the use of inheritance.

```java
public class MyThread extends Thread(){
	
	public MyThread(){
	}

	@Override
	public void run(){
		// define what the thread should execute.
	}

}
```

Using this method you can create your own custom threads that can easily be reused. A thread won't be started until another thread of execution invokes the **run()** method on the object.

**Creating a Thread with a Runnable**

The thread class comes with a second constructor that takes a **Runnable** as a parameter and creates a thread object with the Runnable.

```java

public class MyRunnable implements Runnable(){

	public MyRunnable(){}
	
	public void run(){ // Runnable interface requires void run()
		// execute a program
	}
	
	public main(){
	
		Thread MyThread = new Thread(new MyRunnable());
		
	}

}

```

Any logic written within the Runnable object is transfered into the Thread. Runnables can also be defined functionally which allows us to speed up thread instantiation.

**Creating a Thread with a Lambda Function**

When you don't need a reusable thread, and just need a one-off solution then lambda functions are the perfect tool for the job.

```java

public main(){
	
	Thread lambdaThread = new Thread(() => {
		System.out.println("You started a thread with the use of a lambda expression!");
	})
	
	lambdaThread.start(); // "You started a thread with the use of a lambda expression!"
	
}

```

What you are essentially doing here is defining a Runnable with a lambda expression and using the Runnable constructor of the thread class to instantiate a thread.

#### Thread Methods

The thread class in Java provides us with many useful object & static methods. The **start()** method is used to start a thread via it's internal run() method in **parallel**. The **join()**, and **sleep()** methods all cause a thread to block. The **interrupt()** method can be used to externally alter a thread's behavior during runtime. Static methods such as **Thread.sleep()**, **Thread.currentThread()** can also come in handy.

##### Thread Object Methods

**`start()`**

The start method **must** be used to initiate a thread in java. Directly invoking the run() method of a thread will cause the thread to execute its program on the **current thread** instead of creating a new thread and running in parallel. The **start()** method [causes this thread to begin execution; the Java Virtual Machine calls the `run` method of this thread. The result is that two threads are running concurrently: the current thread (which returns from the call to the `start` method) and the other thread (which executes its `run` method)](https://docs.oracle.com/javase/8/docs/api/java/lang/Thread.html#start--).

**`join()`** 
- **throws** InterruptedException
The join method allows us to force the **current thread** to wait until the thread object has exited its run() method. This is extremely useful for synchronizing threads.

**`interrupt()`**
- **causes** InterrupedException
The interrupt method lets us stop a thread in its tracks. Calling interrupt() will set the interrupted thread's "interrupt" flag to true. The interrupt flag can be accessed in two different ways. Using `Thread.interrupted()` will **return** the boolean interrupted flag of the current thread, and it will also **set** the interrupted flag to false. However using `myThread.isInterrupted()` will **only** **return** the boolean interrupted flag of the referenced object.

There are three outcomes of an interrupt() method invocation.
1) If the interrupted thread was either: waiting, sleeping, or joining then the interrupted thread will throw an InterruptedException which is caught by the required try-catch block surrounding the wait/sleep/join method.
2) If the interrupted thread is not waiting, sleeping, or joining then the interrupted thread will continue as normal.
3) If the interrupted thread is dead then nothing happens.

**Example of Interrupting a non-blocked Thread**
```java
Thread x = new Thread(() ->{
	int c = 0;
	while(!Thread.interrupted()){
			c++;
	}
	System.out.println(c);
});

x.start();

try {
	Thread.sleep(1000);
} 
catch (InterruptedException e) {}

x.interrupt(); // 1045072652
```

##### Thread Static Methods

**`sleep(long millis)` 
`sleep(long millis, int nanos)`**
- **throws** InterruptedException
The sleep static method is used to tell the **current thread** to stop executing it's run() method and instead sleep. While a thread is sleeping it does not lose any locks (a.k.a. monitors) it possessed before going to sleep. Once the thread wakes up it continues its execution from where it left off.

**Thread-like Object Methods**

**`wait()`
`wait(long timeout)`
`wait(long timeout, int nanos)`**

The wait method is one of the more complex methods when it comes to multithreading in Java. Its main purpose is to force the current thread to wait until another thread notifies/wakes it up using the **`notify()`** or **`notifyAll()`** object method on the original object. This object does not necessarily have to be a thread. (Using wait() on a thread is dangerous, and will lead to an IllegalStateMonitorException) For this to work, the current thread **must** own the object's monitor. 

Calling this method will cause the current thread, let's call it **T** to place itself in the object's "**wait set**" which is almost like a queue of all threads waiting to access the object. **T** will only awake if one of four events occur:
1) Another thread invokes the **`notify()`** method for the object, and the **T** happens to be chosen.
2) Another thread invokes **`notifyAll()`** method for the object.
3) Another thread interrupts **T** using **T.interrupt()**
4) If wait was called with 1 or 2 parameters, and the time has elapsed then **T** will wakeup. If wait(0) or wait() was called then **T** waits indefinitely until events 1-3 occur.

We usually use the wait() method because we want a thread to wait until a certain condition is either no longer false or no longer true. Therefore, it is good practice to only call wait() from within while loops that check the condition.

Purpose/Example? See <a class="wikiLink" href="http://localhost:4321/wiki/producer-consumer-problem"> Producer Consumer Problem </a>

**`notify()`
`notifyAll()`**
- for specifics see [this](https://stackoverflow.com/questions/37026/java-notify-vs-notifyall-all-over-again)

In general we should always default to notifyAll() as using notify() can often lead to deadlocks. The notify methods are used to wake up **blocked** threads that are **waiting** to access an object. Due to the way the JVM works, the notify() method **randomly** wakes up a **single** thread that is waiting to get access to the object. Whereas, notifyAll() wakes up **all** threads waiting for the object. Notify should only be used when you are sure it won't lead to deadlocks, because in many cases it can.



  