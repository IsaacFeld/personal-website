---
name: "Recursion.md"
domain: 1
written: "2026-01-17T13:25:00.000Z"
finished: false
tags: [" java  "," recursion"]
related: []
summary: "Recursion is a methodology of solving problems in programming. Recursion is defined by the act of a function calling itself one or more times within a program. As opposed to loops, recursion exploits the low-level call stack to efficiently solve complex problems."
footnotes: [" Backtracking can include intermediary recursive calls that would fall into the logic step of a recursion function rather than the end. \n"]
---

  




When we solve a problem by writing a function that calls on itself we call it recursion. Recursion problems are always made up of 3 parts. 

1) Base case
	- The base case in a recursive problem is essentially the stopping condition of a loop. It tells the recursive function when we can start going back to where we came from. Without a base case, a recursive function will repeatedly call itself leading to an infinite loop.
2) Logic (optional)
	- Some recursive solutions to problems can be so short that no logic is needed, besides the logic in steps 1 and 2. However most complex problems do require logic to be done between the base case and the recursive call. 
3) Recursive call
	- The recursive call is always positioned at the end of a recursive function <a class="wikiLink wikiFootnoteLink" href="#footnote-1"> 1 </a>. This is because a recursive function must always check its base case's first to see if it should stop or keep going (going = make the recursive call). What we often do in our recursive call is call the function again with changed or reduced parameters. This allows us to recursively change the parameters so that at some point the base case is met. 

We've seen recursion before in <a class="wikiLink" href="http://localhost:4321/wiki/merge-sort"> Merge Sort </a>, but the problem with recursion is that it is rather unintuitive. Recursion only works because of the way programming languages handle function calls. In the JVM when we call a function we collect all the data necessary for the function call (return address, function address, ...), and push it onto the Call <a class="wikiLink" href="http://localhost:4321/wiki/stack"> Stack </a>. Since stacks follow the **LIFO** principle (Last In First Out). This means that in a recursive function we keep pushing function calls onto the stack until the function call hits a base case. That's when we start popping the calls that we've accumulated off the stack and start creating our result.

For some algorithms, recursion is just the way to go. However in general recursion is very unintuitive and hard to understand. The best way to go about it is to think about the base cases, and how you want the recursive call to look like. Once those are done you pretty much have a finished recursive function.

**Example of a Power Function using Recursion in Java**
```java

public int function power(int value, int exponent){
	if(exponent == 0){ return 1;}
	
	return value * power(value, exponent-1);
}

````

Using recursion we can write a power function with just two lines of actual code which compared to the "iterative" versoin is much cleaner. This works because to calculate the power of a number we just need to multiply the number with **itself** a certain number of times as defined by the exponent. Whenever we have a problem where sometihng needs to do something with **itself** recursion comes in handy. Once the exponent reaches zero, we know that we have hit the end, and we also know any number to the power of zero is one so we return 1 as our base case result. 

**Backtracking**

Backtracking is a type of recursive problem solving that is primarily used in **search** algorithms. The idea is that sometimes our recursive calls will search for a specific object or element but end up not finding it. Therefore we use booleans to check if a recursive call succeeded in finding what we needed or not. If the recursive call succeeds then we can exit the function and return the value, otherwise we need to keep searching with different "**paths**".

**Example of Backtracking in order to find an exit to a maze in Java**
```java
    public boolean escape() {
        if(house.getCurrentRoom() == 1){
            wayDescription.push(1);
            return true;
        }
        if(house.getConnectedRooms().length == 0){
            return false;
        }
        IntegerQueue unvisited = getUnvisited(house.getConnectedRooms());
        while(unvisited.size() != 0){
            int backtrack = house.getCurrentRoom(); 
            house.gotoRoom(unvisited.dequeue());
            visited[house.getCurrentRoom()] = true;
            if(escape()){
                wayDescription.push(backtrack);
                return true;
            }
            else{
                house.gotoRoom(backtrack);
            }
        }
        return false;
    }
```

The idea for this escape function was that every time we entered a room we would try to find the exit with every adjacent room. One of the rooms would eventually lead to the exit. In order to implement backtracking we restructure the recursive function so that the recursive call happens inside of a loop. The condition of the loop is only met when we either 1. find what we were looking for or 2. we already searched all the paths and found nothing. A stack is the most useful data structure for recursion, and we use it here to keep track of our correct path. Essentially the function finds the correct path, and then on the way back down the call stack it pushes the paths onto the wayDescription stack.

**Tail Recursion**

Tail recursion is an compiler-optimized way of writing recursive functions that ensures that the recursive call is the last call of the function. We essentially do the calculations within the parameters of the recursive call instead of within the function body itself. This lets us apparantly avoid creating unnecessary **stack frames**.

**Example of a Tail Recursive Factorial Function in Java**
```java
static int factTR(int n, int a)
{
	if (n <= 0)
		return a;

	return factTR(n - 1, n * a);
}
```



  