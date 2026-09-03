---
name: "Insertion Sort.md"
domain: 1
written: "2026-01-16T15:51:00.000Z"
finished: false
tags: [" algorithm  "," java  "," sorting_algorithm"]
related: ["Merge Sort","Bubble Sort","Selection Sort"]
summary: "Insertion sort is a slow (O($n^2$)) but simple sorting algorithm that sorts a set of elements by building up a sorted partition of the set one at a time starting from the left through the use of comparisons."
footnotes: []
---

  




With the use of swaps and two while loops insertion sort can sort an unsorted set.

The algorithm starts with the second element in the set because it always compares the ith element with the i-1th element in the set to determine if a swap is necessary.

Insertion sort implements a sort of backtracking for each time it swaps. The idea is that if we found an element that is smaller than our current element, what's stopping it from being even smaller than the previous elements. So to implement this, whenever we swap we decrement the "j" value and continuously compare the value with previous elements in the set. This is very repetetive and causes the worst case time complexity to be n^2, because if we can get so unlucky that for every element we swap we need to check every single previous element.

**Implementation of Insertion Sort in Java**
```java
    public static void insertionSort(int[] arr){
        int i = 1;
        while(i < arr.length){
            int j = i;
            while(j > 0 && arr[j-1] > arr[j]){
                int temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                j--;
            }
            i++;
        }
    }
```

**Step Rundown**
[5, 9, 1, 30, 42, 58, 9, 7, 3]

**Step 1**
i = 1; j = 1; 
j > 0 && arr[0] > arr[1] ? (5 > 9? no) // i++

**Step 2**
i = 2; j = 2;
j > 0 && arr[1] > arr[2]? (9 > 1? yes)
swap 9 with 1; j--;
[5, 1, 9, 30, 42, 58, 9, 7, 3]
i = 2; j = 1;
j > 0 && arr[0] > arr[1]? (5 > 1? yes)
swap 5 with 1; j--
[1, 5, 9, 30, 42, 58, 9, 7, 3]

....



  