---
name: "Java Class - Socket.md"
domain: 1
written: "2026-01-19T19:40:00.000Z"
finished: false
tags: [" socket  "," java  "," network"]
related: ["Java File System","Buffers"]
summary: "Just like the Files class provided by Java to write and read data to files we can also write and read data to other machines on a network in Java using sockets."
footnotes: []
---

  




Sockets can be used to establish an endpoint between your computer and another computer via a network connection. Once a socket has been connected to another computer we can send data using an **OutputStream**, and read data using the **InputStream**. These names may seem counterintuitive at first, but they actually make sense if you look at it from an external perspective.

The **`Socket.getOutputStream()`** object method allows us to retrieve the object responsible for sending data **out** of the socket.

The **`Socket.getInputStream()`** object method allows us to get the object responsible for receiving data **in** to the socket.

To create a **Socket** we need to provide a **hostname**, and a **port**. The hostname is either a domain mapped to an IP address or the IP address itself, whereas the port is a 16 bit unsigned number ranging from 0-65535.

It is good practice to use the **close()** method on a socket at the end of your method so that the socket does not infinitely block your program from exiting. This same rule applies to **Writers** and **Readers**. This ensures the JVM can efficiently free up resources previously required.

When it comes to writing & reading data we need to use **Writers** and **Readers**. These objects allow us to pull data from Network or File streams. 

**Example of using a Socket in Java**
```java
public class MySocket {

    public static void main(String[] args) {
        try{
	        // Connecting to another Computer
            Socket mySocket = new Socket("127.0.0.1", 80);
            
            // Writing Data
            OutputStream out = mySocket.getOutputStream();
            OutputStreamWriter writer = new OutputStreamWriter(out);
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(out));
            PrintWriter printWriter = new PrintWriter(new OutputStreamWriter(out));
            
            writer.write("Hello!");
            writer.close();
            
			bufferedWriter.write("Buffered Data!");
            bufferedWriter.close();

            printWriter.print(new Dog(3));
            printWriter.close();
            
			// Reading Data

            InputStream in = mySocket.getInputStream();
            InputStreamReader reader = new InputStreamReader(in);
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(in));
            

            int character = reader.read();
            reader.close();

            Stream<String> lines = bufferedReader.lines();
            String line = bufferedReader.readLine();
            bufferedReader.close();

            mySocket.close();
        }
        catch(IOException ignored){}
    }
}
```

**Connecting to the Computer**
This example essentially has everything you need to know about writers, readers, and sockets. First we create a socket using a String for the hostname and an int for the port. When we create a Socket like this it **automatically connects**. 

**Writing or Sending Data**
To manipulate the **OutputStream** we first need to get the object itself. Then we can create **Writers**. There are many different types of writers, but the most important to know are these three:

**`OutputStreamWriter(OutputStream out)`**
The most **basic** and therefore **limited** of the writers is the simple OutputStreamWriter. The OutputStreamWriter lets us write strings to an **OutputStream** instead of having to manually write bytes. We can write **Strings** and the **OutputStreamWriter** will convert it for us.

Note that we can write to an **OutputStream** but only in bytes which is very painful as we humans do not speak ASCII!

**`BufferedWriter(Writer writer)`**
The BufferedWriter has the same functionality as an **OutputStreamWriter** except now the data is **buffered**, which makes it more efficient. See <a class="wikiLink" href="http://localhost:4321/wiki/buffers"> Buffers </a> for more information.

**`PrintWriter(Writer writer)`**
The PrintWriter has **extended** functionality over the other writers because it can write **String representations** of **Objects** to an OutputStream using the **toString()** method.

**Reading or Receiving Data**
To access the **InputStream**, we need to get the object, and then we can create multiple types of **Readers**. Here are the ones we used in the example.

**`InputStreamReader(InputStream in)`**
This is the most **basic** form of a reader, and can be used to read a single byte or byte by byte from the given InputStream.

**`BufferedReader(Reader reader)`**
The BufferedReader can be used to read **Strings** from an **InputStream** (in the form of "\n" separated lines), and on top of this we can use it to extract a **Stream** of lines that can be easily and efficiently parsed for further processing.

Note that Socket connections throw the same **IOException** that File connections do, and therefore should be handled. Other exceptions like **UnknownHostException** and **ConnectException** are children of the **IOException** class and can therefore be handled by a single catch block.

**Server Sockets**
Currently we only viewed one portion of the equation when it comes to **Sockets**. We can also create sockets that listen instead of speak. The server sockets can be instantiated using **`new ServerSocket(int port)`**, and the **`accept()`** object method can be used to block the current thread until another socket connects to the server. This method also returns a socket in itself.



  