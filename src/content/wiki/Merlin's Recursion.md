---
name: "Merlin's Recursion.md"
domain: 1
written: "2026-02-04T11:13:00.000Z"
finished: false
tags: [" recursion"]
related: []
summary: "\n\n"
footnotes: []
---

  




## Tail Rekursion

> [!quote] Hey Leute, ich weiß wir haben grade 2 Wochen gelernt, warum Rekursion so viel besser als Iteration ist
> Ah btw, wenn möglich schreibt eure Rekursion so, dass sie der Compiler einfach als Iteration umformen kann 😭😭😭

Wenn der Rekursive Aufruf nach der Rechnungslogik der Funktion steht, muss beim Erreichen von ihm nicht die Return-Adresse modifiziert werden, da wir nicht mehr an diese Stelle returnen müssen (es gibt ja nach dem Rekursiven Aufruf nichts mehr zu tun). Deshalb können wir die einfach die ganze Zeit an der Stelle lassen, wo die Funktion das erste Mal aufgerufen wurde. beim Erreichen der Abbruchbedingung springen wir dann direkt ganz raus. So sparen wir uns ne Menge Platz im Stack weil sonst müssten wir ja pro Rekursivem Aufruf eine Rücksprungadresse und ggf. noch andere Werte reinschreiben. Stattdessen machen wir die Berechnung jetzt einfach vor dem Aufruf/im Parameter.
```java
static int factorialRecursive(int n) 
{
	// 1 Base-Case
    if (n <= 1) 
        return 1;
        
    // 2 Rekursiver Aufruf
	int preResult= factorial(n - 1); //Hierhin muss zurückgesprungen werden
	
	// 3 Calculation
    return n * preResult; // Erst jetzt beim Weg heraus wird auf preResult draufmultipliziert
}
```
vs.
```java
static int factorialTailRecursive(int n, int preResult)
{
	// 1 Base-Case
	if (n <= 0)
		return preResult;

	// 2(!!) Calculation
	preResult=preResult * n; // preResult wird schon beim Weg hinein draufmultipliziert
	n=n-1;
	
	// 3(!!) Rekursiver Aufruf
	return factTR(n, preResult); 
}
```
but wait... das würde in Assembly dann etwa so aussehen
```assembly
START_METHOD:

    # 1 Base-Case
    COMPARE n, 0
    JUMP_IF_LESS_EQUAL FINISH

    # 2 Calculation
    SUBTRACT n, n, 1
    MULTIPLY preResult, preResult, n
    
    # 3 Rekursiver Aufruf
    JUMP START_METHOD          # Der explizite Sprung (wie factTR)

FINISH:
    RETURN preResult
```
sieht das nicht ein bisschen aus wie...
```java
static int factorialLoop(int n, int preResult) {
    // 1 Base-Case
    while (n > 0) { 
        
        // 2 Calculation
        n = n - 1;
        preResult = n * preResult; 
        
        // 3 """Rekursiver Aufruf"""
    }
    return preResult;
}
```








  