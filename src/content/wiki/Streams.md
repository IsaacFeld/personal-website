---
name: "Streams.md"
domain: 1
written: "2026-01-18T18:00:00.000Z"
finished: false
tags: [" java  "," functional_programming"]
related: ["Lambda Expressions","Java File System"]
summary: "Streams are a core component in the world of functional programming. Instead of storing data in a data structure, streams sequentially or concurrently tunnel data from a source through a pipeline of functions until terminated."
footnotes: []
---

  




**Intro**
In Java, streams are useful for efficiently filtering, mapping and reducing collections of data. 
A stream works by having a source, and a **potential** target. When a target otherwise known as  **terminator** is provided then the stream will perform the operations by pulling each element of the stream through the pipeline of functions in sequence or in parallel (**`parallel()`**). If you do not provide a target then a stream will never actually run.

**Terminating & Non-Terminating Functions**
Non-terminating or **lazy** functions change data within the stream, without returning a concrete result, and instead just returns another stream that **will** be operated on when a **terminating** function is called. This leads to recursion when multiple **non-terminating**/**lazy** operations are performed on a single source. 

**Terminating** functions provide a target for the stream **pipeline** to funnel values into. This can be another stream, a specific value or object, and much more. We use terminating functions to actually evaluate the stream. Without calling a terminating function the stream will never evaluate, and the compiler will just ignore the expression.

**Side Effects**
You might be wondering why we can't just record values within the **lazy** functions and add them to a "result" array. This is because lazy functions don't support **side effects**. In **functional programming**, side effects are not allowed as they change the **state** of **another** program within the original program. If we were to add elements to the result array, we would be changing the state of a global array variable from within our pipeline which prevents streams from being **stateless**. Therefore we can only produce a **side effect** with our **terminating** functions.

#### Java - Stream Methods

##### Creating a Stream

**`Stream.of(T value)`,
`Stream.of(T[] valuies)`**
Constructs a stream out of a given **object**, or a given primitive array of **objects**

**`Collection.stream()`**
Constructs a stream out of a collection, this could be a list, set, hash map, or whatever else counts as a collection.

**`IntStream`,
`LongStream`,
`DoubleStream`**
Returns a special Int/Long/Double Stream. These streams provide the  **`.range(int startInclusive, int endExclusive)`** method which returns a new stream which only contains the values from the starting index to the end index.

##### Creating the Stream Pipeline

When we build a stream's pipeline, we can chain together **multiple** operations that feed into each other. Once we understand the various capabilities of the **lazy** stream methods we can really quickly perform otherwise complex operations on sets of data via the power of <a class="wikiLink" href="http://localhost:4321/wiki/lambda-expressions"> Lambda Expressions </a> and **functional interfaces**.

**A quick sidenote on Functional Interfaces**

> _Functional interfaces_ provide target types for lambda expressions and method references.

Functional interfaces are interfaces which provide essentially a **template** for lambda expressions to fill out. We often use functional interfaces when pipelining streams. There are many different kinds of functional interfaces, but in the end they all reduce down to inputs -> outputs. A functional interface itself will tell the lambda expression what kind of types are allowed in the input/output of the lambda function, and how many parameters the lambda function can take in the first place. It's essentially a blueprint for **lambda expressions**, and it helps the compiler figure out if you are messing up something or not.

**`filter(Predicate<? super T> predicate)`**
The **filter** method is one of the most useful methods when it comes to streams. This method allows us to get rid of all elements within the stream that don't meet the **predicate**. A **predicate** is a **functional interface** which through lambda expressions boils down to just a boolean method.

**Filter Stream Example**
```java
public void filterStreamExample(){
	peopleStream.filter( (person) -> return person.getAge() > 18 );
}
```

This example would remove all people within the stream that are **under** the age of 18 since being under the age of 18 would cause the **predicate** to return false, and therefore would also cause the **filter** to remove the element.

**`map(Function<? super T, ? extends R> mapper)`**
The **map** method allows us to change each element within the stream to a different element of **any** type with the help of a mapper. The mapper is just a **function** which is a functional interface that maps an input directly to an output (f(x) -> y). We can use the **map** method to easily change the type of elements within the stream. We can also use special map functions to help us make mapping more efficient.

**Map Stream Example**
```java
public Food getFavFood(){
	return new Food("Pizza");
}

public void mapExample(){
	peopleStream
	.filter( (person) -> person.getAge() > 18 )
	.map( (personBefore) -> return person.getFavFood) )
}
```

This example would change our stream of people over the age of 18 to a stream of pizza food objects.

**`mapToInt(ToIntFunction<? super T>) mapper`**
This method just lets us map all elements within a stream to an integer based on a **ToIntFunction**, which is just another functional interface that requires the output of any given input to be of type int. The same can be done for **doubles** and **longs** using **`mapToDouble(ToDoubleFunction)`** and **`mapToLong(ToLongFunction)`**. This can be super useful for calculating numerical statistics for the given data.

**Special Map Stream Example**
```java
public int getNumCousins(){
	return this.numCousins
}

public void mapExample(){
	peopleStream
	.filter( (person) -> person.getAge() > 18 )
	 .mapToInt(person::getNumCousins)
}
```

This example uses a **shorthand**. This shorthand uses the double colon `::` to indicate that we want to fill the function with a method of an object. With this shorthand we map each person to the number of cousins the person has, so in the end we just have a stream with the counts of each person's number of cousins.

non-static shorthand
**`object::object_method`**

static shorthand
**`class::static_method`**

**`distinct()`**
This method modifies the stream so that all elements are unique according to the Object.equals() method. 

**`sorted()`,
`sorted(Comparator <? super T> comparator)`**
The sorted method sorts the elements within the stream based on a comparator. If a custom comparator is not given then the objects within the stream must implement Comparator and provide a compare implementation.

**`peek(Consumer<? super T> action)`**
This method allows us to produce **side effects** within a stream. The peek method does not change the elements, but it does allow us to log elements or change an external variable from within the stream.
```java
public void peekStreamExample(){
	personStream.peek((person) -> {
	System.out.println(person.getName() + " is " + person.getAge() + " years old."
	)})
}
```
This function will print out each person's name and their age.
##### Terminating the Stream

**`max(Comparator<? super T> comparator)`, 
`min(Comparator<? super T> comparator)`**
The max and min methods use a comparator to return the largest or smallest element in the array. A **comparator** is a functional interface that takes in two inputs and returns one of three possible ints. If the first element is greater the comparator returns >0 if the second element the comparator returns <0 and if the elements are equal the comparator returns 0. We can also use **`Integer/Double/Long.compareTo(Integer/Double/Long a, Integer/Double/Long b)`** to compare numbers without worrying about implementing our own comparator.

**Max Stream Example**
```java
personStream
.mapToInt(person::getHeight())
.max( (p1, p2) -> p1.compareTo(p2) )
```
This example returns the **tallest** person within our person stream.

**`count()`**
This method returns the # of elements in the stream.

**`reduce(T identity, BinaryOperator<T> accumulator`),
`reduce(BinaryOperator<T> accumulator)`**
The **reduce** method is used to reduce a stream to a certain value using the given **binary operator**, which is a functional interface that takes in **two** (binary) values and returns one. There are actually three different types of the reduce function. The first type includes the **identity**, or more simply the **starting** value of the reduce operation's result. Without the identity the reduce operation sets the identity to null. This operation terminates the stream as it goes through each value and applies the binary operation on it. This is very useful for getting sums, maximum, minimum, and average values out of a stream of data since it lets us perform an operation on each element **pair**. Reduce is designed to work with **immutable** objects.

**Reduce Stream Example**
```java
public void reduceStreamExample(){
	peopleStream
	.filter( (person) -> return person.getAge() > 18 )
	 .mapToInt(person::getAge)
	 .reduce(0, (firstElement, secondElement) -> firstElement + secondElement);
}
```

In this example our stream will terminate in the sum of all the ages of all people that are over the age of 18. 

**`collect(Supplier<R> supplier, BiConsumer<R, ? super T> accumulator, BiConsumer <R, R> combiner)`**
The **collect** method actually does the same exact thing that the **reduce** method does except it is designed to work on **mutable** objects. These are objects that can actually be changed. Unlike Integer objects or other wrapper classes, collections are mutable. The idea is that we collect our result inside of a ever-changing container instead of a fixed value. This is a **terminal** operation. The collect() method is much more performant than the reduce() method.

**Collect Stream Example**
```java
StringBuilder result1 = vowels.collect(
	StringBuilder::new, 
	(x, y) -> x.append(y),
	(a, b) -> a.append(",").append(b)
);
```
[Digital Ocean](https://www.digitalocean.com/community/tutorials/java-stream-collect-method-examples)

Here we use a **StringBuilder** as a container for our String that we are building letter for letter in our stream. Our String consists of 

**`forEach()`**
This terminal method lets us **iteratively** loop through each element on the stream and do something with it. The forEach method has a return type of **void**. 

**`toArray()`
`toArray(IntFunction<A[]> generator)`**
Returns an array of **objects** containing the elements from the stream. This method does not match the type of the array with the type of the objects in your stream. If we want to return an array of a **specific type** we need to provide a generator. The generator is a **IntFunction** which is a specific type of the **functional interface** Function. The reason why we use an int function is because we need to specify the desired length of the resulting array so the input should be an int. However we can also use the int 0 to create an array that fits the stream.
```java
public void toArrayExample(){
	Person[] people = personStream.toArray(new Person[0]);
	Person[] peopleTwo = personStreamTwo.toArray(Person[]::new);
}
```
This example generates two person arrays that fit the length of the stream, except peopleTwo uses the **shorthand** to construct a new array.



  