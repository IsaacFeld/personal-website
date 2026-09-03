---
name: "Diskrete Strukturen - Kombinatorik.md"
domain: 1
written: "2026-02-04T16:07:00.000Z"
finished: false
tags: [" discrete_mathematics  "," set_theory  "," combinatorics  "," german"]
related: []
summary: "Kombinatorik beschäftigt sich mit dem effizienten Abzählen komplizierter Mengen."
footnotes: []
---

  




Bei Kombinatorik ist die Modelierung oder der Fragestellung das schwierigste weil wir die natürliche Sprache ins Mathe formulieren wollen.

#### Teilmengen
##### mit Reihenfolge oder ohne Reihenfolge

In Kombinatorik müssen wir immer entscheiden ob wir die **Reihenfolge** beachten oder nicht. Wenn die Reihenfolge **wichtig** ist dann gibt es **viel** mehr möglichkeiten als ohne beachten der Reihnefolge. Eine **n-Tupel** repräsentiert eine Menge wo die Reihenfolge **wichtig** ist.
$(1, 2, 3, 4, 5) \neq (1, 2, 3, 5, 4)$ 

Wenn die Reihenfolge für uns egal ist dann können wir stattdessen **Mengen** benutzen da Mengen keine bestimmte Reihenfolge besitzen:
$\set{1, 2,3 ,4, 5} = \set{5, 4, 3, 2, 1}$

##### mit Zurücklegen oder ohne Zurücklegen

In Kombinatorik müssen wir immer entscheiden ob wir die Elemente zurück in die Ursprüngsmenge stellen nachdem wir die gezogen haben oder nicht. Anders gesagt: 
**mit Zurücklegen oder ohne Zurücklegen?** Wenn wir zurücklegen dann bei jeder Ziehung ist die Anzahl von Elemente glech. Wenn wir nicht zurücklegen ist bei jeder Ziehung die Anzahl von Elemente immer **1** kleiner als die letzte Ziehung. 

##### Urbildregel

Wir können Probleme mit zwei Perspektiven oder Ansätzen lösen. Entweder wir schauen die Fall an wo wir die Reihenfolge **beachten** oder die Fall an wo wir die Reihenfolge **nicht beachten**. Beide Lösungen können miteinander **vertauscht** werden durch eine Konstante (In unser Poker Beispiel ist diese Konstante 5!). 


**Beweis:**
Seien $A, B$ beliebige Mengen
Es gilt $f: A\rightarrow B$ mit $|f^{-1}(b)| = m$ konstant $\forall b \in B$, d.h. jedes Element aus **b** hat genau **m** Urbilder aus **f**, dann gilt $|A| = m |B|$. 

Zusammenfassend kann man sagen dass wenn man die kleinere **ungeordnete** Menge weisst und dann auch genau weisst wie viele **geordnete** ($a \in A \mid f(a) = b$) Elemente gibt es pro **ungeordnete** ($b \in B \mid |f^{-1}(b)|$) Element. Dann kann man leicht mit dieser konstante **surjektion** wie viele geordnete Elemente es gibt.

Dieser Methode kann sehr hilfreich sein wenn es schwierig ist die größere oder auch manchmal die kleinere Menge abzuzählen. 
###### Beispiel: Wie viele Poker-Hände sind möglich?
Unser Menge **K** von möglichen Karten:<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205114245.png" alt="Pasted image 20260205114245.png"/></div>

$|K| = |\set{2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A}| \times |\set{h, d, c, s}| = 13 * 4 = 52$
Es gibt **52** mögliche Karten. Ein Poker-Hand besteht aus **5** Karten.
Frage ist: Wie viele möglichkeiten gibt es eine 5 Karte Hand aus 52 Karten zu ziehen?

Erste Ziehung: 52 Karten möglich.
Zweite Ziehung: 51 Karten möglich.
Dritte Ziehung: 50 Karten möglich.
Vierte Ziehung: 49 Karten möglich.
Fünfte Ziehung: 48 Karten möglich.

Insgesamt gibt es $52 \times 51 \times 50 \times 49 \times 48$ möglichkeiten 5 Karten aus eine Menge von 52 Karten zu ziehen. 

**PROBLEM!** Wir haben gerade angenommen dass die Reihenfolge zählt. Also 
$(2, 3, A, K, 4) \neq (3, 2, K, A, 4)$ was natürlich Quatsch ist da in Poker diese Hände **identisch** sind. Also bei dieser Problem ist die Reihenfolge egal. Deshalb müssen wir die Anzahl von Mögliche Hände durch die Anzahl von **Permutationen** teilen.

$$\large \frac{52 \cdot 51 \cdot 50 \cdot 49 \cdot 48}{5!} = \frac{52!}{5! \cdot 47!} = \binom{52}{5}$$
Die Anzahl von Permutationen ist 5! weil jeder **ungeordnete Hand** kann zu $5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 := 5!$ geordnete Händen auflisten.

###### Beispiel: Wahrscheinlichkeit eines "Straight Flush"?

Benutzen von bereits bekannte oder leicht abzuzählende Mengen:

Zuerst definieren wir die "gesamte" Menge von Poker Hände in dem wir alle Teilmengen von die Menge alle Karten nehmen die Kardinalität von 5 haben. Diese Kardinalität haben wir schon in vorherigem Beispiel gelöst. 
$$\Omega_{u} = \set{H \subset K \mid |H| = 5}$$

Dann müssen wir nur die Menge alle Poker Hände die "Straight Flushes" sind, und die durch die gesamte Menge teilen um der Wahrscheinlichkeit zu finden!

Straight Flush (ohne Royal Flush)
$$S_{u} = \set{S \subset H \mid S \in \set{ \set{A, 2, 3, 4, ..., 9} \times \set{h, d, c, s}}}  = 36$$
$$\set{\set{Ah, 2h, 3h, 4h, 5h}, \set{2h, 3h, 4h, 5h, 6h}, ... \set{9s, 10s, Js, Qs, Ks}}$$
Dadurch ist die Wahrscheinlichkeit:
$$\frac{|S_{u}|}{|\Omega_{u}|} = \frac{36}{\binom{52}{5}}$$
##### Teilmengen Definition

Viele Probleme in der Kombinatorik lässen sich schnell identifizieren als Teilmengen von $[n]^{k}$ oder $\mathbb N_{0}^{k}$. Diese Teilmengen besitzen alle Elemente die wir raussuchen. Daher ist die Kardinalität von diese Mengen einfach die Anzahl von gesuchte Elemente. Erinnerung dass eine Menge $A^{k}$ so definiert ist:

>$$ A^{k} = \large A_{1} \times A_{2} \times ... \times A_{k} = \set{(a_{1}, a_{2}, ..., a_{k}) \space | \space a_{1} \in A_{1}, a_{2} \in A_{2}, ..., a_{k} \in A_{k}}$$ Wobei $A^{0} = \set{()}$ und $A^{1} = \set{(a)}$
 
 \- Aus <a class="wikiLink" href="http://localhost:4321/wiki/diskrete-strukturen---grundlagen"> Diskrete Strukturen - Grundlagen </a>

**k** steht für die Tupellänge (k-Tupel) von die Elemente die wir rausziehen.

Natürliche Zahlen ohne 0 bis N:
Auswahl von **k** **verschiedene** Elemente aus [n] **mit Reihenfolge, ohne Zurücklegen**(Variationen).
$$A_{n,k} = \set{(s_{1}, ..., s_{k}) \in [n]^{k} \mid |\set{s_{1}, s_{2}, ... , s_{k}}| = k} $$
Auswahl von **k verschiedene** Elemente aus [n]  **ohne Reihenfolge, ohne Zurücklegen** (Kombinationen).
$$B_{n, k} = \set{(s_{1}, ..., s_{k}) \in [n]^{k} \mid s_1 < s_2 < ... < s_k} $$
Auswahl von **k** Elemente aus [n]  **mit Reihenfolge, mit Zurücklegen** (Variationen).
$$[n]^{k}$$
Auswahl von **k**  Elemente aus [n]  **ohne Reihenfolge, mit Zurücklegen** (Kombinationen).
$$C_{n, k} = \set{(s_{1}, ..., s_{k}) \in [n]^{k} \mid s_1 \leq s_2 \leq ... \leq s_k} $$

**Zählvektoren & Zählpartitionen** 
Leere Klassen (kann leer sein)
**Exakte** Verteilung (Stars und Bars)
$$\set{(s_{1}, ..., s_{k}) \in \mathbb N^{K}_{0} \mid s_{1} + s_{2} + ... + s_{k} = n}$$
**Flexible** Verteilung (Stars und Bars bis max n)
$$\set{(s_{1}, ..., s_{k}) \in \mathbb N^{K}_{0} \mid s_{1} + s_{2} + ... + s_{k} \leq n}$$
Nicht leere Klassen (mind. eine)
Klassen unterscheidbar
**Exakte** Verteilung
$$ G_{n,k} = \set{(s_{1}, ..., s_{k}) \in \mathbb N^{K} \mid s_{1} + s_{2} + ... + s_{k} = n}$$
Klassen nicht unterscheidbar
$$P_{n,k} = \set{(s_{1}, ..., s_{k}) \in \mathbb N^{K} \mid s_{1} + s_{2} + ... + s_{k} = n, \space s_1 \leq c_2 \leq ... \leq c_k}$$

Jeder kombinatorisches Problem fragt immer die **Kardinalität** eine besondere **Menge** ab. In jeder kombinatorische Aufgabe nehmen wir **Elemente** in der Form von **n-Tupel** aus eine gegebene Menge die wir normalerweise **[n]** nennen. Diese **n-Tupel** müssen bestimmte Bedingungen erfüllen abhänging von der benutzte **Teilmengenformel**. 

Wenn wir die **Reihenfolge** beachten brauchen wir als Antwort alle Tupel die **Permutationen** sind von der **Menge** die diese Tupeln alle repräsentieren. 
z.B. $T = \set{(a, b, c), (a, c, b), (b, a, c), (b, c, a), (c, b, a), (c, a, b)}$, $\forall \set{s} \mid s \in T = \set{a, b, c}$.
Jeder Tupel die wir zurück bekommen muss die gleiche Länge haben wie unser k, (in diesem Fall nehmen wir nur 3 Elemente), in anderen Wörtern muss der Menge von dieser Tupel die gleiche **Kardinalität** haben wie **k**. 

Wenn wir **Reihenfolge** **nicht** beachten brauchen wir als Antwort eine  geordnete Tupel. Deshalb benutzen wir auch die **totale** Ordnung $\lt_{\mathbb Z}$. Diese Ordnung ist quasi das gleiche was eine Menge macht:
(1, 2, 3) -> erlaubt.
(1, 3, 2) -> nicht erlaubt.
(3, 2, 1) -> nicht erlaubt.
(2, 3, 1) -> nicht erlaubt.

Mithilfe der partielle Ordnung auf alle Tupel innerhalb unsere Ergebnismenge können wir alle **Permutationen** entfernen. 

**Zurücklegen** können wir beschreiben mithilfe der **partielle** Ordnung $\le_{\mathbb Z}$ weil wir plötzlich die **reflexivität** erlauben. Dies führt zu Tupel die so aussehen:
(1, 2, 3) erlaubt.
(1, 3, 2) immernoch nicht erlaubt.
(1, 1) erlaubt. (1 $\le$ 1)
Mit dieser Ordnung können wir **Permutationen** entfernen, aber Duplikate Elemente innerhalb eine Tupel (mit Zurücklegen) **erlauben.**

##### Siebformel

Die Siebformel erlaubt uns die Kardinalität der Vereinigung von n-Mengen zu berechnen in dem wir immer die Kardinalitäten einzeln aufaddieren, und dann abwechselnd Schnitte addieren oder subtrahierern:

Beispiel mit 3 Mengen:
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205130225.png" alt="Pasted image 20260205130225.png"/></div>

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205130144.png" alt="Pasted image 20260205130144.png"/></div>

##### Pigeon Hole Principle

Wenn **n** Objekte in **k** Boxen platziert werden, dann gibt es **mindestens** eine Box mit ceil(n/k).

Beispiel: 3 Boxen, 5 Objekte. Mindestens eine muss 5/3 aufgerundet (2) Objekte haben.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205130529.png" alt="Pasted image 20260205130529.png"/></div>
d.h. es muss mindestens ein **b** geben (in unser Beispiel ist b eine Box) die mindestens <div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205130602.png|60" alt="Pasted image 20260205130602.png|60"/></div> Urbilder (in unser Beispiel Objekte) hat.

##### Urnenmodell

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205141031.png" alt="Pasted image 20260205141031.png"/></div>
(Trick to remembering arbitrary letters used here.)
A - Arrangment (+A = mit Reihenfolge/Arranged, -A ohne Reihenfolge/Unarranged)
M - Many (+M = mit Zurücklegen/Many, -M ohne Zurücklegen/Not Many)

Das Urnenmodell hilft uns schwierige kombinatorische Probleme leichter zu machen in dem wir unsere Menge (n) als Urne betrachten. Aus unser Urne können wir entweder sortierte (-A) Elemente rausziehen oder unsortierte Elemente (+A) (ohne Reihenfolge vs. mit Reihenfolge). Danach können wir unser Element anschauen und entscheiden ob wir das **zurück** in die Urne legen (+M) oder nicht (-M). 

###### +M+A
$$|[n]^{k}| = n^k$$
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205141422.png|400" alt="Pasted image 20260205141422.png|400"/></div>

**Ergebnismenge Erklärt**
In +M+A lassen wir alle Tupels rein da wir zurücklegen (+M) (1,1) (2,2) usw. ist erlaubt. Für uns ist die Reihenfolge **wichtig** und deshalb sind (2,1) und (1,2) **nicht gleich** und beide bleiben drin.

**Formel Erklärt**

###### -M+A
$$|A_{n,k}| = \frac{n!}{(n-k)!}$$
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205141542.png" alt="Pasted image 20260205141542.png"/></div>

**Ergebnismenge Erklärt**
In -M+A legen wir keine Elemente zurück und deshalb ist (1,1) und (2,2) usw. **nicht mehr möglich**. Aber weil wir immernoch die Reihenfolge **beachten** sind (2,1) und (1,2) nicht gleich. 

**Formel Erklärt**
Die Formel hat zwei Spezialfälle:
$k \gt n$: $|A_{n, k}| = 0$ // Wir können nicht mehr Elemente aus der Urne ziehen wenn es keine mehr gibt, deshalb ist es null. 
$k = 0$: $|A_{n, 0}| = 1$ // Wir können null nur einmal nehmen in dem wir die **leere Menge** rausziehen.

An sonsten:
$$n \cdot n-1 \cdot n-2 \cdot n-3,..., n - (k-1) = \frac{n!}{(n-k)!}$$

###### -M-A
$$|B_{n,k}| = \frac{n!}{(n-k)! \cdot k!} = \binom{n}{k} = \binom{n -1}{k} + \binom{n-1}{k-1}$$

Diese Formel $\binom{n}{k}$ wird auch **Pascal'sches Dreieck** genannt.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205143108.png" alt="Pasted image 20260205143108.png"/></div>

**Ergebnismenge Erklärt**
In -M-A legen wir keine Elemente zurück und wir beachten die Reihenfolge **nicht**. Deshalb benutzen wir eine totale Ordnung wo $s_{1} < s_{2}$ gelten muss. Weil wir eine **totale** Ordnung einsetzen ist der Relation **irreflexiv**. Deshalb sind Tupel wie (1,1) und (2,2) in unser Ergebnismenge nicht erlaubt, und somit können wir sagen dass wir **keine** Elemente zurücklegen.

**Formel Erklärt**
Wir nehmen zuerst Elemente ohne das zurücklegen also für jeder Ziehung haben wir weniger und weniger Elemente in der Urne vorhanden:
$$n \cdot n-1 \cdot n-2 \cdot n-3,..., n - (k-1) = \frac{n!}{(n-k)!}$$
Genau gleich wie $A_{n, k}$, aber wir benötigen noch ein Schritt da $|A_{n, k}|$ die Anzahl von Elemente gibt **mit** Beachtung der Reihenfolge (+A). Warum? Naja die $A$ Formel hat nur eine Bedingung: die Länge der Tupel muss gleich k sein, und deshalb gibt es keine Ordnung. Weil es keine Ordnung gibt ist (1, 2, 3, 4, 5) = (5, 4, 3, 2, 1).
Die nächste Schritt ist einfach die **Urbildregel** zu benutzen in dem wir sagen dass $|A| = m|B|$. In anderen Wörtern: Jede Tupel in unser A Formels Ergebnismenge bildet nur **eine** Menge. Die m Konstante ist einfach die Anzahl von Permutationen pro Tupel. Die ist natürlich abhängig von der **k** Wert. Wenn wir 3 Elemente aus der Urne ziehen sind die Tupeln von $A_{n,k}$ immer die Länge 3 laut der Formel. Deshalb gibt es 3! Wege die 3 Tupel zu permutieren. Daher müssen wir einfach $|B| = \frac{|A|}{m}$ anwenden und wir bekommen unsere Formel!

###### +M-A
$$|C_{n,k}| = \binom{n+k-1}{k} = \binom{n+k-1}{n-1} =  \frac{(n+k-1)!}{k!(n-1)!}$$

**Formel Erklärt**
Wir benutzen der Prinzip von Stars und Bars um so eine Problem zu lösen. Wir müssen bestimmen wie viele Elemente ich habe wenn ich Sachen mehrmals nehmen kann, wobei die Reihenfolge egal ist. 

z.B. Ich wil 12 Lebkuchen kaufen, und es gibt 5 Sorten. Mit der Stars und Bars Methode können wir diese Problem besser darstellen. Wir wollen 5 Sorten auf 12 Lebkuchen aufteilen, und deshalb ist **n**=5 und **k**=12. 

Es gibt 12 Lebkuchen und 5 Sorten, dass heisst dass wir 12 Stars haben (unsere Elemente) und 4 Bars haben (die Trenner zwischen unsere Sorten = k-1). Wir reservieren für jeder Stern und Bar **einen** Platz und deshalb haben wir $n+k-1$ mögliche Plätze. 

z.B.
-1-1-1-|-2-2-2-2-2-|-3-|-4-4-|-5
Jeder Bar wird benutzt um eine Sorte von eine andere Sorte zu trennen. 
Jetzt müssen wir einfach berechnen **wie viele Wege** gibt es die Bars zu setzen. Es gibt insgesamt $n+k-1$ Plätze also **16** und wir wählen **4** Bars. Die Reihenfolge ist uns nicht wichtig weil es egal ist welche **Sorte** zuerst kommt!
Deshalb haben wir eine **-M-A** Problem die wir schon die Formel dafür haben ($B_{n,k}$)!
Unser n in dieser Fall ist **4**, und unser k ist **16**. 
$$\binom{16}{4}$$
gibt uns dann unsere Antwort! Was wir auch machen können ist die andere Perspektiv nehmen und berechnen wei viele Wege es gibt 12 Sterne auf 16 Plätze aufzuteilen.
$$\binom{16}{4} = \binom{16}{12}$$

Für flexible Summe:
$$\binom{n+k}{n} $$



**Funktion Darstellung**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205151916.png|100px" alt="Pasted image 20260205151916.png|100px"/></div>


##### Wahrscheinlichkeit

Wir können die Wahrscheinlichkeit von Sachen berechnen in dem wir die **gesamte** Anzahl mit unsere **echten** Anzahl vergleichen. Wir wissen immer:

$$P(x) = \frac{\#x}{\Omega} $$
Wo $\Omega$ die Anzahl von alle Möglichkeiten ist. 
#### Partitionen
###### (Un)unterscheidbare Objekte

**Beispiel Mitarbeter und Aufgaben**
Weise **alle** Aufgaben aus [n] zu; jeder Mitarbeiter aus [m] erhält mindestens **eine Aufgabe** $n \geq m$.

**Zählpartitionen**
- **WER BEKOMMT WELCHES ELEMENT**
- Mitarbeiter unterscheidbar, Aufgaben unterscheidbar:
	- Surjektive Abbildung $p: [n] \rightarrow [m]$,
	- d.h. eine **geordnete** Partition $(C_{1}, ..., C_m$ von [n] in **m** Klassen
- Mitarbeiter **un**unterscheidbar, Aufgaben unterscheidbar:
	- Wähle einer **ungeordnete** Partition $(C_{1}, ..., C_m$ von [n] in **m** Klassen
	- z.B. sortiere $(C_{1}, ..., C_m$ so dass $minC_i \lt minC_{i+1}$

**Zählvektoren**
- **WIE VIELE ELEMENTE PRO KLASSE**
- Mitarbeiter unterscheidbar, Aufgaben **un**unterscheidbar 
	- Wähle ein Tupel $(c_1, ..., c_m) \in \mathbb N^{n}$ mit $\sum^{m}_{i=1} c_i = n \space \land c_i \geq 1$
	- d.h. einen Zählvektor, der eine Multiobermenge von [m] beschreibt.
- Mitarbeiter **un**unterscheidbar, Aufgaben **un**unterscheidbar
	- Wähle ein Tupel $(c_1, ..., c_m) \in \mathbb N^{n}$ mit $\sum^{m}_{i=1} c_i = n \space \land 1 \leq c_1 \leq ..., \leq c_{m}$
	- d.h. sortiere $(c_1,..., c_m)$ um die Zuordnung zu vergessen

**unterscheidbare** Aufgaben bedeutet Partition der Menge [m]
**ununterscheidbare** Aufgaben bedeutet Partition der Zahl m.

##### Verteilungsprobleme
ohne Leere Klassen Formeln:

|**Objekte (n)**|**Klassen (k)**|**Beschreibung**|**Formel (keine Klasse leer)**|
|||||
|unterscheidbar|unterscheidbar|Geordnete Mengenpartition|$k! \cdot S_{n,k}$|
|unterscheidbar|ununterscheidbar|Stirling-Zahlen 2. Art|$S_{n,k}$|
|ununterscheidbar|unterscheidbar|Zählvektoren ("Stars & Bars")|$\binom{n-1}{k-1}$|
|ununterscheidbar|ununterscheidbar|Zahlpartitionen|$P_{n,k}$|

**Geordnete Partitionen**
$$|G_{n, k}| = \binom{n-1}{k-1}$$
Klassen k und n **unterscheidbar**
- Spezialfälle $n=k$ dann $n!$ Möglichkeiten
- Spezialfälle $n \lt k$ dann 0 Möglichkeiten 

Idee: Wir geben für jedes Kind $i$ an, welche **nicht-leere** Teilmenge $C_{i} \subset [n]$ der Geschenke es erhält: **geordnete** Partition $(C_1, C_2, ..., C_k)$.

**Ungeordnete Partitionen**
Leere Klassen sind nicht erlaubt:
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205165142.png" alt="Pasted image 20260205165142.png"/></div>

Leere Klassen erlaubt:
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205165227.png" alt="Pasted image 20260205165227.png"/></div>

**Stirling Zahlen**

1. Art - Anzahl Permutationen von [n] mit k Zykeln
$\large s_{n+1,k} = s_{n,k−1} + ns_{n,k}$
$\large s_{n,n} = 1, s_{n+1,0} = 0$

2. Art - Anzahl Partitionen von [n] in k Klassen
$n!S_{k,n}$ mit $S_{n+1,k} = S_{n,k−1} + kS_{n,k}$
$S_{nn} = 1, S_{n+1,0} = 0$










  