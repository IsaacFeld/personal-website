---
name: "Selection Sort.md"
domain: 1
written: "2026-01-16T16:26:00.000Z"
finished: false
tags: [" sorting_algorithm  "," algorithm  "," java"]
related: ["Insertion Sort","Bubble Sort","Merge Sort","Radix Sort"]
summary: "Selection sort is the simplest sorting algorithm out there, and it works by building up a sorted partition of the list (similar to [[Insertion Sort]]). Selection sort builds the sorted partition in O(n^2) time by searching for the the smallest element and adding it to the sorted set."
footnotes: []
---

  




Selection sort starts at index zero and searches the entire set for the minimum value using a stored min, and continuous comparisons throughout the entire list. It needs to do this loop n times, hence O(n^2).

**Implementation of Selection Sort in Java**
```java
    public static void SelectionSort(int[] arr){
        for (int i = 0; i < arr.length; i++) {
            int min = arr[i];
            int minIndex = i;
            for (int j = i+1; j < arr.length; j++) {
                if(arr[j] < min){
                    min = arr[j];
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
```

This sorting algorithm is so straightforward that a step rundown is not necessary. Literally all it does is seek out the minimum value, and then add it to the sorted partition until we've done this for every single position in the array.



  