---
name: "Automat.md"
domain: 1
written: "2026-01-29T16:21:00.000Z"
finished: false
tags: [" computer_architecture  "," logic  "," integrated_circuits  "," cpu"]
related: ["Multi Cycle Processor"]
summary: "An Automat or finite state machine is a concept in logic that describes a machine by defining its states, and the transitions between states. This is a useful method of fool-proofing your circuits, as you ensure that you cover all possible states of the program."
footnotes: []
---

  




Automats represent the function of a sequential circuit. They have inputs, outputs, states, and two functions. One function (Zustandübergangsfunktion) that transitions the current state to the next one, and the second function which is the output function (Ausgabefunktion) that calculates the outputs solely based on the state (**Moore Automat**), or based on the state **and** the inputs (**Mealy Automat**).

Every Mealy Automat can be translated into a Moore Automat.

**Example of an Automat's State Diagram for an Elevator**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260129181106.png" alt="Pasted image 20260129181106.png"/></div>

We can use Automats to model our Multi Cycle Processor's control unit.

##### Kodierung

**One Hot**

**Binary**

##### Mikroprogramm Steuerwerke



  