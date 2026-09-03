---
name: "Ring Buffer.md"
domain: 1
written: "2026-01-28T09:13:00.000Z"
finished: false
tags: [" java  "," data_structure"]
related: ["Buffers"]
summary: "A ring buffer is a data structure with no clear **start** and **end** point. The structure follows the FIFO principle similar to [[Stack|stacks]], and uses the modulo operator to determine indices as it utilizes a **circular** structure."
footnotes: []
---

  




Every ring buffer has a set size, and a start and end point that start out at the same positions.

**Java Implementation of a Ring Buffer**
```java
public class RingBuffer<T> {  
  
    private int size;  
    private int used;  
    private T[] buffer;  
    private int firstPointer = 0;  
    private int lastPointer = 0;  
  
    public RingBuffer(int n){  
        size = n;  
        used = 0;  
        buffer = (T[]) new Object[n];  
    }  
    public boolean isFull(){  
        return used == size;  
    }    public boolean isEmpty(){  
        return used == 0;  
    }  
    public void push(T element) throws RingBufferException {  
        if(isFull()){  
            throw new RingBufferException("The Ringbuffer is already full!");  
        }        else{  
            buffer[lastPointer] =  element;  
            lastPointer = (lastPointer + 1) % size;  
            used++;  
        }  
    }  
    public T pop(){  
        if(!isEmpty()){  
            T poppedValue = buffer[firstPointer];  
            firstPointer = (firstPointer + 1) % size; //  
            used--;  
            return poppedValue;  
        }        else{  
            return null;  
        }    }  
    @Override  
    public String toString() {  
        StringBuilder result = new StringBuilder();  
        result.append("[");  
        for (int i = 0;  i < used; i++) {  
  
            if(i == used - 1){  
                result.append(buffer[(firstPointer + i) % size]);  
            }            else{  
                result.append(buffer[(firstPointer + i) % size] + ", ");  
            }  
        }        result.append("]");  
  
        return result.toString();  
    }  
    public static void main(String[] args) {  
        RingBuffer<String> rb = new RingBuffer<>(4);  
        rb.push("first");  
        rb.push("second");  
        rb.pop();  
        rb.push("third");  
        rb.push("fourth");  
        rb.push("fifth");  
        rb.pop();  
        rb.pop();  
        rb.push("sixth");  
        rb.pop();  
        rb.pop();  
        rb.pop();  
        System.out.println(rb);  
    }}
```

**Ring Buffer without "used"**
```java
public class RingBuffer<T> {  
  
    private final int size;  
    private final T[] buffer;  
    private int firstPointer = 0;  
    private int lastPointer = 0;  
  
    public RingBuffer(int n){  
        size = n;  
        buffer = (T[]) new Object[n];  
    }  
    public boolean isFull(){  
        return (firstPointer - 1) % size == lastPointer;  
    }    public boolean isEmpty(){  
        return firstPointer == lastPointer;  
    }  
    public void push(T element) throws RingBufferException {  
        if(isFull()){  
            throw new RingBufferException("The Ringbuffer is already full!");  
        }        else{  
            buffer[lastPointer] =  element;  
            lastPointer = (lastPointer + 1) % size;  
        }  
    }  
    public T pop() throws RingBufferException{  
        if(!isEmpty()){  
            T poppedValue = buffer[firstPointer];  
            firstPointer = (firstPointer + 1) % size; //  
            return poppedValue;  
        }        else{  
            throw new RingBufferException("The Ringbuffer is already empty!");  
        }    }  
    @Override  
    public String toString() {  
        StringBuilder result = new StringBuilder();  
        result.append("[");  
        int i = 0;  
        while((firstPointer + i) % size != lastPointer){  
            System.out.println((firstPointer + i) % size);  
            if((firstPointer + i) % size == Math.floorMod(lastPointer - 1, size)){  
                result.append(buffer[(firstPointer + i) % size]);  
            }            else{  
                result.append(buffer[(firstPointer + i) % size] + ", ");  
            }            i++;  
  
        }        result.append("]");  
  
        return result.toString();  
    }  
    public static void main(String[] args) {  
        RingBuffer<String> rb = new RingBuffer<>(4);  
        rb.push("first");  
        rb.push("second");  
        rb.push("third");  
        rb.pop();  
        rb.push("fourth");  
        rb.pop();  
        System.out.println(rb);  
    }}
```

`Math.floorMod()` supports negative number modulus. 



  