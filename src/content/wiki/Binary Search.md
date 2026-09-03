---
name: "Binary Search.md"
domain: 1
written: "2026-01-16T15:51:00.000Z"
finished: false
tags: [" algorithm  "," java  "," search_algorithm"]
related: []
summary: "Binary Search is the most popular algorithm used to find elements within a sorted set. It uses the \"divide and conquer\" technique to find any element in O(log n) time complexity."
footnotes: []
---

  




Binary Search is an algorithm that requires a sorted list to work since the elements must be comparable with one another. The algorithm repeatedly splits up a set into two halves until it either finds the searched for element or ends up with an empty set. In order to decide which half of the set to pick the algorithm compares the middle element of the set to the target value. If the middle element is bigger then we know that all elements that come after the middle are bigger than the target, and therefore the target must be somewhere in the left half. Otherwise we pick the right half.

**Example of Binary Search in Java**
```java
public int binarySearch(int[] arr, int target){  
    int l = 0;  
    int r = arr.length;  
  
    while(l <= r){  
        int m = (l + r) / 2;  
        System.out.println("Middle: " + m);  
        if(arr[m] > target){  
            // We overshot the target so we reduce our right bound.  
  
            r = m - 1;  
        }  
        else if(arr[m] < target){  
            l = m + 1;  
        }  
        else{  
            return m;  
        }  
    }    return -1;  
}
```

The idea of the algorithm is as follows assuming the set is sorted in **ascending** order:
- Start with the entire list.
	- Create a left bound pointer
	- Create a right bound pointer 
- While left bound is less than or equal to the right bound split set
	- Calculate middle index
	- If middle element is bigger than index
		- Pick the left half
			- Change right bound to middle index - 1 (since we already checked the middle element)
		- Else If the middle element is smaller than index
			- Pick the right half
			- Change left bound to middle index + 1 (same logic here)
		- Else 
			- Middle Element is the target element, return index/target
- return -1/null // could not find target

The while loop's condition must be l <= r since if we left it at l < r the index 0 would never be checked. With <= we ensure that we only return -1 when there is really no element that matches the target in our set.



  