---
name: "Producer Consumer Problem.md"
domain: 1
written: "2026-01-16T15:40:00.000Z"
finished: false
tags: [" java  "," multithreading"]
related: []
summary: "The producer-consumer problem outlines a common scenario in computing where we have a **unreliable** input and output source. In other words, we might produce data quicker than we can conusme it.\n"
footnotes: []
---

  




The problem can be solved by impelmenting a **blocking queue** which acts as a buffer that allows data to be inserted when it is **not full**, and lets data be taken from it when it is **not empty**. We can solve this problem more efficiently through the use of **multithreading**. The general idea is that we have **x** amount of **producer threads**  and **y** **consumer threads**. The blocking queue ensures atomicity between operations, and we can parallelize the production and consumption of data. 

**Working Example of A Producer-Consumer Problem using wait() and notifyAll()**
```java
public class ProducerConsumer {

    private static List<Integer> buffer = new LinkedList<Integer>();
    private int sum = 0;
    private static int maxBufferSize = 10;

    public synchronized void consume(int toBeConsumed){
        sum+= toBeConsumed;
    }

    public Runnable getConsumer(){
        return () -> {
        while(!Thread.currentThread().isInterrupted()){
                try{
                    Thread.sleep(500);
                    synchronized(buffer){
                        while( buffer.size() == 0){
                            buffer.wait();
                        }
                        int toBeConsumed = buffer.removeLast();
                        consume(toBeConsumed);
                        buffer.notifyAll();
                    }

                }
                catch(InterruptedException ex){
                    System.out.println("Interrupted while waiting");
                    Thread.currentThread().interrupt();
                    break;
                }
            }
        };
    }

    public Runnable getProducer(){
        return () -> {
        while(!Thread.currentThread().isInterrupted()){
            try{
                    Thread.sleep(100);
                    synchronized(buffer){
                        while(buffer.size() == maxBufferSize){
                            buffer.wait();
                        }
                        System.out.println("Producing a 2");
                        int toBeProduced = 2;
                        buffer.add(toBeProduced);
                        buffer.notifyAll();
                    }
                

            }
            catch(InterruptedException ex){
                System.out.println("Interrupted while waiting");
                Thread.currentThread().interrupt();
                break;
                
            }
        }
        };
    }


    public static void main(String[] args) {
        ProducerConsumer x = new ProducerConsumer();
        Thread[] pcs = new Thread[]
        {new Thread(x.getConsumer()), new Thread(x.getConsumer()), 
        new Thread(x.getProducer()), new Thread(x.getProducer()),
        new Thread(x.getConsumer())};

        for(Thread thread : pcs){
            thread.start();
        }

        try{
            Thread.sleep(2000);
        }
        catch(InterruptedException ignored){};

        for(Thread thread : pcs){
            
            thread.interrupt();
        }

        System.out.println(x.sum);
        



    }
}

```



  