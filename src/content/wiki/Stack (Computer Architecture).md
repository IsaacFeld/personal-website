---
name: "Stack (Computer Architecture).md"
domain: 1
written: "2026-01-23T17:52:00.000Z"
finished: false
tags: [" computer_architecture  "," data_structure"]
related: ["RISC-V Assembly","Stack","Recursion"]
summary: "The stack in computer architecture is the **heap's** counterpart, it starts at the top of memory (**highest address**), and grows downwards (to **lower addresses**), and then shrinks back upwards. The stack's main function is to store temporary function call data by creating stack frames, and then restoring important data by popping the frame."
footnotes: []
---

  




In most programming languages the computer stack is controlled by the language's interpreter or compiler, but in the case of Assembly the programmer has the ability to **manipulate** the stack. The stack is primarily used to store local variables (from **registers**), and the return address of the calling function.  

**Core Idea**

Let's call the original function the **parent**, and the function that the **parent** calls is the **child**. The key concept of the stack is to ensure that the registers that the **parent** modified after doing executing its program is **not overwritten** by the **child**. However, at the same time we don't want to **limit** how many registers the **child** can utilize. Therefore we essentially take a **snapshot** of our current "**important**" registers and then store that snapshot in memory in a <a class="wikiLink" href="http://localhost:4321/wiki/stack"> Stack </a> data structure. This means that we can only **push** or **pop** snapshots on the stack, and we follow the **LIFO** principle. This allows us to make theoretically infinite amoutns of function calls without ever losing our values from the previous function. 

**Returning**
On top of preserving values, we also need to correctly preserve the return address, so that when our stack frames start getting **popped**, we know where to go. Generally we store the return address at the **top** of the stack, which means it is pushed into the stack frame last. The idea is that before we **jump** to the address of the to-be-called **child**. Let's store our current return address on the stack. This is done, so that once the **child** returns to the parent, we can load the return address out of the stack, and then we still know where to return to from the **parent**. 

**Recursion**
Due to the nature of the stack as a data structure, recursion as a form of solving problems is quite appealing, as it utilizes the push/pop operations of the stack to efficiently handle recursive calls. 

Note: Since recursive functions push **stack frames** on to the stack **for each** recursive call, if the recursive function has a lot of **inner calculations** then the function can quickly become **space complex**. This means that the function uses a lot of memory, whereas iterative approahces generally use less memory, as they often don't require the stack **as much** as a recursive function. 



  