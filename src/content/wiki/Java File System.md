---
name: "Java File System.md"
domain: 1
written: "2026-01-19T19:39:00.000Z"
finished: false
tags: [" java  "," file_system"]
related: ["Streams","Buffers"]
summary: "The java file system can be used to perform CRUD operations on files and directories without having to manually open and close multiple input/output streams."
footnotes: []
---

  




Files & directories are generally modified asynchronously, but can also be done synchronously. Most IO methods provided can throw IOExceptions that can occur at any point. 

Each file within the file system is implicitly also a path. The path tells the filesystem where to look. There are many different ways to create a path.

##### Creating Paths

**`Path.of(String one, String two, ...)`,
`Paths.get(String one, String two, ...)`**
This is the easiest way to create a path. The path is constructed out of the file system's "seperator char" and the given strings. Path.of("fruit", "banana") returns the path "fruit/banana". This can be used to create paths to files that don't exist yet. The path is always relative to the java project's root unless defined otherwise.

**`toPath()`** 
This method can be used on java.nio.File objects, and converts the File object into a Path object. 

**Modifying Paths**

We can use the Path object method **`resolve(String other)`**  or **`resolve(Path other)`** to chain different path objects together. The resolve method will try to join two paths, but if one of the paths is an absolute path it will take the absolute path instead. If one path is empty then nothing will happen. 

```java

Path aPath = Path.of("wikipedia", "animals");
Path aNotherPath = Path.of("dogs", "puppies");

Path resolvedPath = aPath.resolve(aNotherPath); // wikipedia/animals/dogs/puppies
```

We can also relativize two paths by using the **`relativize(Path other)`**. This essentially performs a logical and operation on the given paths and discards the similar elements, assuming the two paths share the same root.
```java
Path aShortPath = Path.of("a, b, c");
Path aLongPath = Path.of("a,b,c,d,e,f,g,h,i,j");

aShortPath.relativize(aLongPath) // d/e/f/g/h/i/j 
```

**Example of instantiating a Path object in Java**
```java
Path myCoolPath = Path.of("food", "dessert", "favorite_dessert.txt"); // food/dessert/favorite_dessert.txt
```

##### Creating & Modifying Files

Once we have a path we can use the **`Files.createFile(Path path)`** to create a file at the given path. This throws an IOException in case something goes wrong while writing the file, so we'll need to surround it with a try catch block. Now we can use our path from the previous example to create a file!

**Creating a file in Java**
```java
try{
	Files.createFile(myCoolPath); // Should create a favorite_dessert.txt file under food/dessert
}
catch(IOException e){
	e.printStackTrace();
}
```

Now we can write to the file with a given String using **`Files.writeString(Path path, String text)`**. Then we can read the file content to verify it actually worked with **`Files.readString(Path path)`**.

**Reading & Writing Strings to Files**
```java
try {
	Files.writeFile(myCoolPath, "My favorite dessert is cheesecake");
	String favorite_dessert = Files.readString(myCoolPath);
	if(favorite_dessert.equals("My favorite dessert is cheesecake")){
		System.out.println("Successfully wrote to the file!")	
	}
}
catch(IOException e){
	
}
```

There are many different ways to read file content. We can read line by line by using **`Files.readAllLines()`** which returns a List of Strings where each String is an entire line of the file. Or we can use **`Files.lines()`** to fetch a <a class="wikiLink" href="http://localhost:4321/wiki/streams"> stream </a> of Strings where each String is an entire line. In general, readString and writeString are good enough for most of the operations we want to do.

##### Creating directories

We can create folders in Java using either of the two provides methods: **`Files.createDirectory(Path dir)`** or **`Files.createDirectories(Path dir)`**. Create directory will create a directory at the given path, but if part of the path doesn't exist yet it will fail. Whereas, createDirectories will automatically recognize missing directories in your path and fill them up for you.

##### Renaming Files & Folders

We can use the **`Files.move(Path source, Path target)`** to rename a file or folder in Java. 

**Example of renaming a file in Java**
```java
try{
	Files.rename(myCoolPath, Path.of("food", "dessert", "secret", "secret.txt"));
}
catch(IOException e){}
```

This function will move and rename our file with one line. food/dessert/favorite_dessert.txt -> food/dessert/secret/secret.txt.



  