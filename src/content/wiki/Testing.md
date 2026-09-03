---
name: "Testing.md"
domain: 1
written: "2026-01-17T13:15:00.000Z"
finished: false
tags: [" java"]
related: []
summary: "Testing is a way to foolproof your code before it goes out into the real word. To test code we specify inputs, and then we assert that the output should be equal to our expected output. If the function has an error than the output will differ, and the test will fail.\n"
footnotes: []
---

  




In Java we can test the input-output of functions with the Java JUnit testing library. 

**Example of testing a sorting function in Java**
```java
    @Test
    public void testSortLengths(){
        int[] arr = {1, 3, 9, 4, 5, 6};
        int expectedLength = arr.length;

        int actualLength = utils.sort(arr).length;

        assertEquals(expectedLength, actualLength);
    }

    @Test
    public void testImmutable(){
        int[] arr = {1, 3, 9, 4, 5, 6};
        int[] arrCopy = {1, 3, 9, 4, 5, 6};

        utils.sort(arr);

        assertArrayEquals(arrCopy, arr);
    }

    @Test
    public void testSorted(){
        int[] arr = {1, 3, 2};

        int[] arrSortedExpected = {1, 2, 3};

        int[] arrSortedActual = utils.sort(arr);

        assertArrayEquals(arrSortedExpected, arrSortedActual);
    }

    @Test
    public void testSortedEmpty(){
        int[] arr = new int[0];
        int[] actual = utils.sort(arr);

        assertArrayEquals(arr, actual);
    }
```

We annotate our tests with the @Test syntax. We use methods like assert... to declare how we expect the output to look like. In general what you do is first you set up the input variable, and then declare the expected output variable. Then you run the function, and right after you write an assert statement that checks if the result of the function matches your initial expected result. In other words, first prepare then run, and finally test.

To make our lives easier we can also use the @BeforeEach annotation to specify that before each test certain things should be done. This is useful for when we want to write thousands of tests, and don't have the time for declaring a variable again and again. In this case I just created a utils object so that in each test I could call the functions of the Util class.

**Example of @BeforeEach in Java**
```java
    public class Test{
    
	    private Util utils;
    
	@BeforeEach
	    protected void setUp() {
	        this.utils = new Utils();
	    }
    }
```



  