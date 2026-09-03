---
name: "Race Conditions.md"
domain: 1
written: "2026-01-15T18:15:00.000Z"
finished: false
tags: [" multithreading  "," java"]
related: ["Synchronized Keyword","Deadlock "]
summary: "When data is accessed concurrently or in parallel race conditions can occur, because we void the **atomicity** of our data. In parallel there is no clear record of a \"**before-after**\" relationship of operations as code can be run **simultaneously**. This causes methods to produce varying **illogical** results based on **random** unpredictable factors."
footnotes: []
---

  




Race conditions primarily occur when data is **shared** between two or more threads.  If two or more threads wish to access data we cannot allow the data to be tampered with simultaneously. If we allow shared resources to be handled simultaneously, RAW scenarios can occur and lead results to be off from their expected value.

**Example of a Race Condition**
```java
public class RaceConditionExample{
	int c = 0;
	 main {
		Thread badThreadOne = new Thread(() -> {
			for(int i = 0; i < 5; i++){
				c++;
			}
		})
		
		Thread badThreadTwo = new Thread(() -> {
			for(int i = 0; i < 5; i++){
				c++;
			}
		})
		
		badThreadOne.start();
		badThreadTwo.start();
		
		try{
			badThreadOne.join();
			badThreadTwo.join();
		}
		catch(InterruptedException e){}
		System.out.println(c); // Expected 10, Actual: ???
	 }
}
```

This piece of code can lead to a race condition since we have two threads accessing the same variable (**shared resource**) in a asynchronous manner. The main issue is that a thread can read an old value of "c" after a new value of c has been written to c. This is known as RAW (Read-After-Write). If badThreadOne increments c from 0 to 1, but at the same time badThreadTwo also increments c then c will end up still being 1 since badThreadTwo read the value of c before the write of badThreadOne terminated.

Note that I said **can** lead to a race condition, because if your computer is fast enough badThreadOne's program can finish before the main thread even starts badThreadTwo. If so then the printed value of c will be 10. However, larger values of "i" can expose the race condition even if your computer is fast.



  