---
name: "Deadlock.md"
domain: 1
written: "2026-01-15T20:05:00.000Z"
finished: false
tags: [" java  "," multithreading"]
related: ["Synchronized Keyword","Race Conditions"]
summary: "A deadlock is the most common \"liveness\" problem that occurs during multithreading. Multithreading leads to a deadlock when two or more threads end up blocking for each other which leads to an infinite loop that prevents your program from executing any more instructions.\n"
footnotes: []
---

  




As described in <a class="wikiLink" href="http://localhost:4321/wiki/synchronized-keyword"> Synchronized Keyword </a>, invoking other methods from within "critical" sections of code can be very dangerous. One of the easiest ways to create a deadlock is by calling a method from within a synchronized method or statement.

**Example of a Deadlock**
```java
public class Deadlock {
    static class Friend {
        private final String name;
        public Friend(String name) {
            this.name = name;
        }
        public String getName() {
            return this.name;
        }
        public synchronized void bow(Friend bower) {
            System.out.format("%s: %s"
                + "  has bowed to me!%n", 
                this.name, bower.getName());
            bower.bowBack(this);
        }
        public synchronized void bowBack(Friend bower) {
            System.out.format("%s: %s"
                + " has bowed back to me!%n",
                this.name, bower.getName());
        }
    }

    public static void main(String[] args) {
        final Friend alphonse =
            new Friend("Alphonse");
        final Friend gaston =
            new Friend("Gaston");
        new Thread(new Runnable() {
            public void run() { alphonse.bow(gaston); }
        }).start();
        new Thread(new Runnable() {
            public void run() { gaston.bow(alphonse); }
        }).start();
    }
}
```

In this example we see that there are two friends. Each friend object has two synchronized methods. When we start a thread that tells alphonse to bow the first thread will enter bow().
Since the synchronized method is a shorthand for synchronized(this), and the method is not static the second thread is allowed to call bow() for gaston at the **same time**. The problem lies in the bowBack call within the synchronized method bow(). The function call bow() may not terminate until bowBack() returns. However we call bowBack() on gaston while the gaston object's **intrinsic lock** is currently in use by the second thread. Now at the same time the second thread's bow() call calls bowBack() on alphone's bow() which is currently locked down by the first thread. This causes an infinite loop.

**Series of Events**

Due to the unpredictable nature of threads it is possible that executing that code will not lead to a deadlock. To understand this, see the two examples below.

Example order of events that would lead to a deadlock:
- Thread 1 calls bow() on Alphonse
	- Thread 1 acquires Alphonse's intrinsic lock
- Thread 2 calls bow() on Gaston
	- Thread 2 acquires Gaston's intrinsic lock
- Thread 1 calls bowBack() on Gaston
	- Thread 2 still has Gaston's lock, so thread 1 blocks.
- Thread 2 calls bowBack() on Alphonse
	- Thread 1 still has Alphonse's lock because bowBack() has not returned
	- Thread 2 blocks
- Both threads are blocking each other on bowBack(), and therefore the threads will never exit bow().

Example order of events that would **not** lead to a deadlock:
- Thread 1 calls bow() on Alphonse
	- Thread 1 acquires Alphonse's intrinsic lock
- Thread 1 calls bowBack() on Gaston **before** Thread 2 even calls bow()
	- Thread 1 acquires Gaston's lock and calls bowBack() (releases Gaston's lock) successfully and exits bow()
	- Thread 1 upon exiting bow() releases Alphonse's lock, both locks are free
- Thread 2 calls bow() on Gaston
	- Thread 2 acquires Gaston's lock which is now free
- Thread 2 calls bowBack() on Alphonse
	- Thread 2 acquires Alphonse's lock which is also now free
- Both threads successfully ran without causing a deadlock!

In conclusion, if thread 1 is able to run its program before thread 2 even starts, which is entirely feasible, then there will be no deadlock. This is one of the core principles of multithreading as **different** **environments** can lead to **different** **outcomes** on the **same** exact **program**.



  