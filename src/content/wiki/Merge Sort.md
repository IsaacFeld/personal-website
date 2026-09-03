---
name: "Merge Sort.md"
domain: 1
written: "2026-01-16T15:50:00.000Z"
finished: false
tags: [" algorithm  "," java  "," sorting_algorithm"]
related: ["Insertion Sort","Selection Sort","Bubble Sort","Radix Sort"]
summary: "Merge Sort is a fast sorting algorithm that uses the divide and conquer principles to sort an unsorted list in O(n logn) time.\n"
footnotes: []
---

  




Merge Sort uses recursion to split up a list into its indvidual elements. Since a list with one element is considered sorted we can efficiently merge the sorted lists back together to create bigger and bigger sorted lists until we reach our final complete sorted list. This last merge step is what causes the "n" in our O(n logn) as we need to use loops to merge the lists back together.

**Steps of Merge Sort**

1) Merge Sort can only return once the current length of our array is equal to 1 i.e. there is only one element in the array.
2) If we aren't there yet then Merge Sort intializes two arrays with lengths that sum up to the given arrays length. These two arrays will act as our halves.
3) These halves need to be populated with the actual elements of our array via for loops
4) Then we make two **recursive** calls to mergeSort, one for the left half, and the other for the right half.
5) Once those **recursive** calls return we can call our **merge** method which will put the sorted lists back together.
6) The merge method takes our original array, our left and right halves, and the two differing half-lenths. With this data it can merge our arrays back together. 
7) These merged lists propagate upwards due to the nature of recursoin, we are left with a complete sorted list after the final return of merge.

**Implementation of Merge Sort in Java**
```java
    public static void mergeSort(int[] a, int n) {
    
        if (n < 2) {
            return;
        }
        int mid = n / 2;
        int[] l = new int[mid];
        int[] r = new int[n - mid];

        for (int i = 0; i < mid; i++) {
            l[i] = a[i];
        }
        for (int i = mid; i < n; i++) {
            r[i - mid] = a[i];
        }
        
        mergeSort(l, mid);
        mergeSort(r, n - mid);

        merge(a, l, r, mid, n - mid);
    }

    public static void merge(int[] a, int[] l, int[] r, int left, int right) {
        int i = 0, j = 0, k = 0;
        while (i < left && j < right) {
            if (l[i] <= r[j]) {
                a[k++] = l[i++];
            }
            else {
                a[k++] = r[j++];
            }
        }
        while (i < left) {
            a[k++] = l[i++];
        }
        while (j < right) {
            a[k++] = r[j++];
        }
    }
```



  