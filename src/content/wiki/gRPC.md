---
name: "gRPC.md"
domain: 1
written: "2026-01-16T13:17:00.000Z"
finished: false
tags: [" rpc  "," grpc  "," java"]
related: []
summary: "[gRPC](https://grpc.io/docs/languages/java/basics/) handles language differences between client & server which minimises excess repetitive work.\n"
footnotes: []
---

  




#### Setting up gRPC
All we have to do is define our message service one in a '.proto' file.
##### Defining the Service

```
service RouteGuide {
	rpc GetFeature(Point) returns (Feature) {}
	rpc ListFeatures(Rectangle) returns (stream Feature) {}
	rpc RecordRoute(stream Point) returns (RouteSummary) {}
	rpc RouteChat(stream RouteNote) returns (stream RouteNote) {}
}
```

There are four different service methods 
(Denoted by word preceding Feature or Request Type)
rpc **MessageName**(**MessageStream?** **MessageType**) returns (**responseStream?** **responseType**) {}
- A simple RPC where the client sends a request to the server using a stub to execute a function
- A server-side streaming RPC where the client sends a request to the server and gets a stream that it will keep reading until the stream has stopped "flowing".
- A client-side streaming RPC where instead the client writes the stream/sequence of messages and waits for the server to read them all and return a response.
- A bidirectional streaming RPC where both sides send sequences of messages on a "read-write" stream. Both client and server act independently and can decide when to read or write a message

Within our .proto file we must define protocol buffer message type definitions (a.k.a. signatures), for example: 
```java
message Point {
	int32 latitude = 1; // Position of the latitude argument
	int32 longitude = 2; // Position of the longitude argument
}

rpc GetFeature(Point) returns (Feature) {}
```
The numbers aren't values, but positions of these arguments in the message sent within the RPC process.
These numbers are called "Field Numbers" and must be positive & > 0. (In order too I'd assume?)

##### Generating Client & Server Proto Code
To generate the client & server services from our .proto file definitions we need to use a protocol buffer compiler with a special gRPC Java plugin. ([Proto3](https://github.com/protocolbuffers/protobuf/releases) compiler) 
(Just gradle build bro)

##### Creating the Server 



  