---
name: "Bubble Sort.md"
domain: 1
written: "2026-01-16T15:51:00.000Z"
finished: false
tags: [" algorithm  "," java  "," sorting_algorithm"]
related: []
summary: "Bubble Sort is one of the simplest, but also slowest sorting algorithms out there can sort an unsorted set in O($n^2$) time. Bubble Sort creates a bubbling effect for the largest values as it sorts, hence the name."
footnotes: []
---

  




Bubble Sort uses two for loops that loop through the entire array, swapping if necessary. In contrast to insertion sort we compare the jth and j+1th elements with each other. Due to the +1 we need to adjust our j loop to terminate based on the set's length subtracted by 1. The outer loop isn't used for indexing, and instead is just used to make sure each element is taken care of.

**Implementation of Bubble Sort in Java**
```java
    public static void bubbleSort(int[] toSort){
        for (int i = 0; i < toSort.length; i++) {
            for (int j = 0; j < toSort.length-1; j++) {
                if(toSort[j] > toSort[j+1]){
                    int temp = toSort[j];
                    toSort[j] = toSort[j+1];
                    toSort[j+1] = temp;
                }
            }
        }
    }
```

**Step Rundown**

[5, 9, 1, 30, 42, 58, 9, 7, 3]

j=0;
(5>9 no)

j=1;
(9>1 yes)
swap
[5, 1, 9, 30, 42, 58, 9, 7, 3]

j = 2;
(9 > 30 no)

j = 3;
(30 > 42 no)

j=4;
(42 > 58 no)

... 










  