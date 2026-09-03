---
name: "Diskrete Strukturen - Grundlagen.sync-conflict-20260414-122324-VY737SR.md"
domain: 1
written: "2026-02-02T08:29:00.000Z"
finished: false
tags: [" logic  "," discrete_mathematics  "," german  "," set_theory  "," relations  "," functions  "," cardinality"]
related: []
summary: "Die Grundlagen von Diskrete Strukturen beinhalten folgende Themen: informelle Logik, Mengenlehre, Relationen, Funktionen, Kardinalität, und mathematische Induktion."
footnotes: []
---

  




### informelle Logik (Predicate Logic)

#### Eigenschaften von Aussagen

Die zentrale Frage in der Logik ist eigentlich die **Erfüllbarkeit** und **(Allgemein-)Gültigkeit** einer **Aussage** zu bestimmen.

Eine Aussage ist einer Satz oder mehrere Sätze die nur mit entweder Ja (wahr) oder Nein (falsch) beantwortet werden können.

z.B. Meine Mutter is 45 Jahre alt. 

**Erfüllbarkeit**

Eine Aussage ist nur erfüllbar wenn es eine Situation oder Kontext **existiert** wo die Aussage **wahr** ist. In anderen Wörtern, wenn es mindestens eine **Belegung** der Variablen die dieser Aussage wahr machen.

**(Allgemein-)Gültigkeit**
- Jeder allgemein-gültige ist auch erfüllbar.
Eine Aussage ist allgemein-gültig falls es **keine** Situation gibt in der sie falsch ist. Die Aussage muss **immer** wahr sein. 

Gutes Beispiel: 
$x = 2$ und $x^2 = 4$.

Diese Aussage ist **erfüllbar**, aber **nicht** gültig. Warum? Ja, weil $(-2)^2 = 4$ aber $-2 \neq 2$. Deshalb gibt es eine Situation wo diese Aussage **falsch** ist, und damit ist der Aussage nicht gültig.

#### Zusammensetzung von Aussagen

If all animals with feathers are birds, and all birds can fly, then every animal with feathers can fly.

**Junktoren & Quantoren**

Junktoren und Quantoren sind Operationen die wir auf Aussagen anwenden können. Beziehungsweise, Quantoren sind Operationen die zwei Aussagen verbinden, und Junktoren sind eher eine Eigenschaft von einer Aussage. Die Junktoren und Quantoren können mit Symbole aber auch mit Wörter geschrieben.

Junktoren: 
- UND ($\land$),
- ODER ($\land$), 
- NICHT ($\lnot$), 
- FALLS-DANN/WENN-DANN ($\implies$),
- GENAU-DANN-WENN (gdw.) ($\iff$), 
- ENTWEDER-ODER ($\oplus$).

Dazu gibt es auch den besonderen Junktor "ITE" oder If-Then-Else, die ITE Junktor arbeitet mit **drei** Aussagen. 

Quantoren: 
- FÜR-ALLE/ALLE ($\forall$),
- EXISTIERT/GIBT/EINIGE ($\exists$), 
- KEIN ($\nexists$)

**Alle Junktoren können durch Wahrheitstabellen definiert werden:**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202101943.png" alt="Pasted image 20260202101943.png"/></div>

Um die SYN oder Synonymität von zwei oder mehr Aussagen zu prüfen müssen wir in der Regel eine Wahrheitstabelle für jeder Aussage aufschreiben und die Wahrheitswerte vergleichen. 

Hilfreiche SYN:
falls A, dann B SYN nicht A oder B | $A \implies B \equiv \lnot A \lor B$
A gdw B SYN falls A, dann B und falls B, dann A | $A \iff B \equiv (A \implies B) \land (B \implies A)$
entweder A oder B SYN nicht (A gdw B) | $A \oplus B \equiv \lnot(A \iff B)$

**Venn-Diagramme**

Mit Venn Diagramme können wir logische Aussagen graphisch darstellen. Jeder Variable/Aussage bekommt einen Kreis, und abhängig von der Junktor können wir entscheiden welche Kreise gefüllt sind (wahr) und welche leer sind (falsch).

**Venn Diagramme für NOT, UND, ODER, WENN DANN, GDW, Entweder A oder B**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202102704.png" alt="Pasted image 20260202102704.png"/></div>

**Hinreichend vs. Notwendig (Implikation)**

Im Allgemeinen ist die Implikation nicht gültig da wenn A falsch ist under B wahr dann gilt die Aussage nicht. Aber für spezielle Fälle kann die Implikation gültig sein. 

Beispiel:

Falls $\large \frac{x}{2} \in \mathbb Z$ dann $\large x \in \mathbb Z$. Dieser Aussage ist immer wahr, und daher ist die Implikation in dieser besonderen Kontext gültig.

Hätten wir es andersrum gemacht, dann wäre es nicht gültig.
Falls $\large x \in \mathbb Z$ dann $\large \frac{x}{2} \in \mathbb Z$
Widerspruchbeweis: $\large x:= 1 \in \mathbb Z \land \frac{1}{2} \notin \mathbb Z \equiv False$.

Wenn die Implikation gültig ist, wie in der ersten Beispiel dann sagen wir dass A **hinreichend** für B ist da immer wenn A wahr ist **muss** B auch wahr sein. Dazu sagen wir auch dass B **notwendig** für A ist. Weil wenn B falsch ist dann **muss** A auch falsch sein sonst wäre die Aussage nicht gültig.

**Hinreichend** -> Wenn A wahr ist, muss B auch wahr sein. 
**Notwendig** -> Wenn B falsch ist, muss A auch falsch sein.

##### Quantoren und Prädikate

Statt ganze Aussagen zu schreibe können wir die Hauptteil der Aussage durch eine Prädikat ersetzen. Eine Prädikat ist quasi eine Bedingung die entweder erfüllt sein kann oder nicht.

z.B. T(x) - x ist eine Tier. F(x) - x kann fliegen. 

Mit die zwei Prädikate können wir mit der Hilfe von Quantoren vieles sagen:

z.B. $\large \exists x$ mit $T(x)$ und $F(x)$ -> Es existiert ein x wo x ein Tier ist und zusätzlich ein Tier ist die auch fliegen kann. 
 
Die existieriende Quantor sagt dass es **mindestens** eine "Objekt" gibt die diese Bedingung erfüllt. Die "for all" Quantor sagt dass für jeder beliebige "Objekt" die es gibt ist die Aussage entweder wahr oder falsch. Wir können auch durch negation interessante Äquivalenzaussagen finden.

Hier können wir die gleiche Aussage mit die existierende aber auch for all Quantor beschreiben, 

Nicht alle Menschen sind gross = Es gibt einen Menschen der **nicht** groß ist.

Wir können auch die individuelle Prädikate einzeln beschreiben:

$\large \nexists x$ mit T(x) sind F(x) -> Kein x die eine Tier ist, ist auch eine Tier die Fliegen kann.

Wir können auch Quantoren und Prädikate durch **Mengendiagramme** darstellen: 
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202113341.png" alt="Pasted image 20260202113341.png"/></div>

1) Alle x mit R(x) sind P(x) bedeutet dass alle x wo R(x) wahr ist muss auch P(x) haben, aber alle P(x) muss **nicht** automatisch R(x) haben. Deshalb ist R(x) eine Teilmenge von P(x).
2) Einige ist die wichtigste Wort hier, weil es sagt dass es einige gibt mit dieser Eigenschaft, aber auch andere geben kann mit anderen Eigenschaften. Insofern gibt es mindestens ein x die beide Prädikate erfüllen (deshalb überlappen), aber es gibt auch x die nur P(x) erfüllen oder nur R(x) erfüllen. Die Rote Punkt ist die sogenannte beschriebene Element von der existierende Quantor.
3) Hier ist die **beschriebene** Element die x wo R(x) Wahr ist, aber P(x) nicht wahr ist. Deshalb liegt der roter Punkt nur in R.
4) Das ist eine disjunktive Beschreibung von R und P. Die haben nichts gemeinsam!

#### Induktion und Beweisformen

**Aussagentypen**
Thm, Theorem (Satz): wichtiges, häufig verwendetes und/oder nicht offensichtliches
Resultat
Lem, Lemma: weniger wichtig oder Hilfsresultat f¨ur ein Theorem
Cor, Korollar: einfach zu beweisende Abwandlung eines Theorem/Lemmas
Fct, Fakt: offensichtliches Ergebnis (proof by intimidation ...)
Def, Definition: eindeutige Begriffsabgrenzung/erklärung (ggf.
Eindeutigkeit/Wohldefiniertheit zu beweisen).

**Beweis**
Ein Beweis ist eine Sequenz von Argumente die dazu führen dass unsere letzte oder finale Aussage **gültig** ist (in alle Fällen wahr). Beweise sind auch daher selbt Aussagen, und werden oft in **Beweissschritte** aufgeteilt. Jeder Beweisschritt hat der Form: Falls alles was vor mir (Prämissen) stimmt, dann **muss** man auch den folgenden (Konklusion, Konsequenz) auch zustimmen.

**Beispiel:**
"If all ( bandersnatches are borogroves $P(x)$ ), and  all (borogroves are slithy  $Q(x)$ ) , then all (bandersnatches are slithy R(x) )"

1) for all x: if P(x) then Q(x)
2) and for all y: if Q(y) then R(y)
3) for all z: if P(z) then R(z)

##### Syllogismen

Eine Syllogisme ist eine Form von Beweis die immer zwei Prämisse und eine Konklusion hat. Eine Prämisse kann beliebig lang sein, aber es dürfen nur zwei Prämisse geben. 

Häufig so dargestellt: Falls A und B dann C.
A) Alle Schweine können fliegen
B) MP ist ein Schwein
___ 
C) MP kann fliegen

Auch durch Diagramme realisierbar!
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202120902.png" alt="Pasted image 20260202120902.png"/></div>

**Arten von Syllogismen**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202121043.png" alt="Pasted image 20260202121043.png"/></div>

##### Beweisstrategien

**direkter Beweis**

Wir müssen zeigen dass der Aussage gültig ist. Zum Beispiel wenn $A \implies B$ dann müssen wir zeigen das wenn A wahr ist **muss** B auch immer wahr sein. Dies kann man leicht durch eine Wahrheitstabelle zeigen!

2 ist gerade -> trivial weil 2 = 2k wo k = 1 ist. 

**Kontraposition**

Für eine Kontraposition müssen wir die Perspektiv ändern und die Aussage umformen. Statt A impliziert B sagen wir dass nicht B impliziert nicht A. Wir nehmen die Negation der Aussage und beweisen dass es stimmt. Wenn nicht dann ist der originelle Aussage auch falsch. 

Beispiel:
$\large A \land B \equiv \lnot (\lnot A \lor \lnot B)$ 
Wir drucke die Aussage anders aus und damit können wir manchmal leichter unsere Aussage beweisen. 

2 ist gerade -> 2 ist nicht ungerade -> dass heisst dass es keine k gibt aus Z wo 2k = 2 ist. Aber k = 1 existiert daher ist unser Kontraposition falsch und damit ist die originelle Aussage wahr.  

**Widerspruch**

Für eine Widerspruchsbeweis geht es eigentlich nur um eine Fall oder Belegung von Variablen zu zeigen wo die Aussage **nicht gültig** ist. Wir nehmen an vom Anfang an dass der Aussage **nicht wahr** ist. 

Zum Beispiel: $\sqrt2$ ist nicht rational
Widerspruchsbeweis: Wir nehmen an dass $\sqrt 2$ rational ist.
Daher gibt es ganze Zahlen m, n wo $\sqrt 2 = \frac{m}{n}$, aber die gibt es natürlich nicht, und deshalb haben wir die Verneinung die Aussage beweisen dass es falsch ist (widerspruchlich). Daher ist die Aussage gültig.

2 ist gerade -> Widerspruch: 2 ist ungerade -> es gibt eine k wo 2k + 1  = 2 ist. 
2k + 1 = 2
2k = 1 
k = 1/2 aber 1/2 ist nicht Teil der ganzen Zahlen.
Widerspruch ist falsch, und damit ist die Aussage gültig.

**GDW**

Für Bikonditionale Aussagen müssen wir **beide** Seiten der Implikation beweisen.

**For All**

Für solche Fälle können wir die existierende Quantor benutzen. Wenn wir sagen dass für alle $x \in \mathbb Z$ ist x gerade. Dann können wir einfach zeigen dass $\exists x \in \mathbb Z | k \in \mathbb Z \space x = 2k + 1$. Es gibt mindestends eine ungerade Zahl und daher ist die For All Aussage falsch.


##### Induktion

**Induktionsaxiom**

Für alle Mengen **X** mit 
- $0 \in X$
- $\forall x: x \in X \cap \mathbb N_{0}$ gilt stets auch $x+1 \in X$
gilt bereits $\mathbb N_{0} \subset X$

Diese Axiom ist die Grunlage für Induktionsbeweise. 

**Induktionsbeweis Idee**

Wir betrachten einer Funktion P(x).

Induktionsbasis | Zeige das P(0) wahr ist.
Induktionsschritt | Fixiere ein beliebiges $n \in \mathbb N_{0}$, über das bis jetzt noch keine Annahmen getroffen worden sind. (Verwende neue Variable n)
Induktionsannahme/hypothese | Für das fixierte n nehmen wir an dass P(n) gilt.
Induktionsbehauptung |  Für das fixierte n gilt P(n+1)

Beweis der Induktionsbehauptung/annahme
- Beweise P(n+1) und P(n) für das fixierte n.

### Mengen (Sets)

Eine Menge ist eine Kollektion von Elemente wo die Reihenfolge die Elemente egal ist, und wo Duplikate nicht erlaubt sind. Eine Menge wird mit eckigen Klammern aufgeschrieben:
$$\mathbb Z := \set{0, 1, 2, 3, 4, 5, 6, 7, 8, ...}$$

Mit der Hilfe von die **Basisoperationen** können wir neue Mengeu aus mehrere Mengen konstruieren. Diese Basisoperationen sind namlich die **Vereinigung**, **Schnitt**, und **Differenz**.

Eine Objekt x kann entweder in einer gegebenen Menge M sein oder nicht. Diese Objekt x darf **nicht** in beiden sein.
$x \in M$ - M beinhaltet x.
$x \notin M$ - M beinhaltet x nicht.

Wir können auch selber Mengen **definieren** indem wir entweder eine explizite / **extensionale** Definition schreiben oder eine implizite / **intensionale** Definition schreiben.

**extensionale** Definition eine Menge M: 
$$M := \set{a, b, c}$$
 Hier ist die Menge streng definiert als die Menge mit die Elementen "a", "b", und "c". 
 
**intensionale** Definition eine Menge M:
$$\mathbb N := \set{x \space | \space x \in \mathbb N }$$
Hier wird eine Menge von einer "Bedingung" definiert. Diese Menge besteht aus alle x Elemente wo ( "|" heißt "wo diese Bedingung gilt") x auch ein Teil von die natürlichen Zahlen ist. Wir können hier beliebig lange Funktionen schreiben um intensional eine Menge zu beschreiben.

**Häufig verwendete Mengen**

$\mathbb N := \set{1, 2, 3, 4, ... }$ Menge der natürlichen/positiven ganzen Zahlen
$\mathbb N_{0} := \set{0, 1, 2, 3, 4, ...}$ natürliche Zahlen inkl. 0
$\mathbb Z := \set{..., -2, -1, 0, 1, 2, ...}$ ganze Zahlen
$\mathbb Q := \set{x \space |  \space x = \frac{q}{p}, \space  q \in \mathbb Z, p \in \mathbb Z}$ rationale Zahlen
$\mathbb R$ reelle Zahlen

Die **leere** Menge ist durch $\set{}$ definiert, aber als Symbol kann man auch $\emptyset$ schreiben. Die leere Menge ist eine Menge mit keine Elemente. D.h. folgt $\large \forall x \notin \emptyset$.

**ZFC und Russelsche Antinomie**

Mengen sind auch Objekte und können selbst Elemente von Mengen sein, abert was passiert wenn sie eine Element sind von sich selbst? 

Daraus folgt ein Problem bzw. eine Paradox bei der implizite oder intensionale definieren einer Menge. Diese Problem heißt Russelsche Antinomie.
$$R= \set{x∣x\notin x}$$

Diese Menge ist selbest eine Paradox weil wir die nicht genau interpretieren können. Ist x ein Element von sich selbst oder nicht?

Der ZFC ist eine Erweiterung der Mengenlehre die klare Regeln benutzt um solche Paradoxe zu vermeiden. In ZFC gibt es keine Menge wo der Menge selbst ein Element von sich selbst ist. Dazu gibt es keine Universum Menge wo man alle Mengen zu verfügung hat. Man muss immer eine Menge auswählen.

**Vergleiche von Mengen**

Mengen können Teilmengen von andere Mengen sein. Z.B. der Menge $\mathbb N$ ist eine **Teilmenge** von der Menge $\mathbb Z$. Weil **alle** Elemente in der natürlichen Zahlen ist auch innerhalb der Ganze Zahlen.
$$\large M_{1} \subset M_{2} \space falls \space \forall x, x \in M_{1} \land x \in M_{2}$$
Eine Menge kann auch **nicht** eine Teilmenge von eine andere Menge sein falls nicht alle Elemente von der erste Menge in der zweite Menge auch vorhanden sind. 
$$\large M_{1} \not\subset  M_{2} \space falls \space \exists x, x \in M_{1} \land x \notin M_{2}$$

Wir können auch die Menge $M_{1}$ ohne die Elemente von $M_{2}$ durch die Set Differenz beschreiben: $M_{1} - M_{2}$. 

Dadurch können wir auch zwischen zwei Fälle unterscheiden. Entweder sind die Mengen M1 und M2 gleich, und daher ist M1 eine "ganze" Teilmenge von M2 oder M2 - M1 beinhaltet mindestens ein Element. Das würde bedeuten dass M2 alle Elemente von M1 hat und **noch mehr**. 

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202134621.png" alt="Pasted image 20260202134621.png"/></div>

**Darausfolgende Regeln:**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202134638.png" alt="Pasted image 20260202134638.png"/></div>

**Gleichheit**
Zwei Mengen sind nur exakt gleich wenn jeder Element in M1 in M2 vorkommt, und jeder Element in M2 in M1 vorkommt: $M_{1} \subset M_{2} \land M_{2} \subset M_{1}$. Um die **ungleichheit** zu zeigen müssen wir eine Element finden die nur in genau **eine** Menge von den beiden vorkommt.

**Symmetrische Differenz**

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202181826.png" alt="Pasted image 20260202181826.png"/></div>

Eine Menge $M_{1} \Delta M_{2}$ ist die Menge welche nur die Objekte beinhaltet die in genau einer der beiden Mengen vorkommen aber nicht beider. Also, die Elemente die **nicht** geteilt zwischen den Mengen werden.

Im Allgemeinen ist $M_{2} - M_{1} \neq M_{1} - M_{2}$, aber $M_{1} \Delta M_{2} = M_{2} \Delta M_{1}$.


**Standardoperationen**

An Mengen kann man die Operationen Schnitt (Und) und Vereinigung (Oder) wenden.

Wir definieren zwei Mengen:
$$M_{1} := \set{0, 1, 3, 9}, \space M_{2} := \set{0, 4, 9, 23, 46}$$
**Mengenschnitt**

$\large M_{1} \cap M_{2} := \set{0, 9}$ 
Die Mengen M1 und M2 haben nur zwei Elemente gemeinsam nämlich die "0" und die "9". Wenn die Schnitt von zwei Mengen gleich $\emptyset$ ist dann sind die beiden Mengen **disjunkt**.

**Mengenvereinigung**

$\large M_{1}\cup M_{2} := \set{0, 1, 3, 9, 4, 23, 46}$
Die Vereinigung von zwei Mengen ist einfach die Mischung von beiden Mengen ohne dass wir **Duplikate** schreiben weil es keine Duplikate in normalen Mengen geben darf.

**Disjunkte Vereinigung**
$A⊎B:=A∪B,A∩B=∅$ 

**Universum**

Die Universum oder auch Grundmenge genannt $\Omega$ ist die Menge von **alle** Mengen und Elemente. Durch die Grundmenge können wir $\lnot M_{1}$ besser beschreiben, ohne eine Grundmenge würde es kein Sinn machen. Die Menge nicht M1 ist einfach alle Elemente die **nicht** in M1 vorkommen. Aber alle andere Elemente ist von der **Universum** definiert.

**Venn Diagramme**

Mengen können super gut durch Venn Diagramme dargestellt werden. 
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202140128.png" alt="Pasted image 20260202140128.png"/></div>

**Potenzmenge**

Für die Menge M gibt es immer die Potenzmenge $2^M$ oder auch $\large \mathscr P(M)$. Eine Potenzmenge enthält **alle** Teilmengen von M als Elemente. 

Um eine Teilmenge zu konstruieren muss für jedes Element entschieden werden, ob es zur Teilmenge gehört oder nicht gehoört.

Bsp. $M :=\set{1, 2}$
Erste Teilmenge: 1 und 2 gehören nicht dazu: $\emptyset$
Zweite Teilmenge: 1 gehört dazu aber 2 nicht: $\set{1}$
Dritte Teilmenge: 1 gehört dazu aber 2 auch: $\set{1, 2}$
Vierte Teilmenge: 1 gehört nicht dazu aber 2 schon: $\set{2}$

Jeder Menge M hat immer $2^{|M|}$ Teilmengen wo |M| der Kardinalität der Menge M ist.


**Potenzmengen Beispiele**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202140629.png" alt="Pasted image 20260202140629.png"/></div>

**Partition**

Eine Partition ist eine Teilmenge von der Potenzmenge eine Menge. Besonders nur die Teilmengen von der Menge M die **disjunkt** und **nicht leer** sind, wo deren Vereinigung **genau** M gibt.
$$\large P \subset \mathscr P(M) \space$$  
Die drei Bedingungen einer Partition sind folgendes:
1) Es dürfen keine Partionen die der $\emptyset$ beinhalten.
2) Alle Partitionen müssen Disjunkt sein: $\forall A, B \in P: A \cap B = \emptyset$
3) Überdecken von M  $\space \cup P = M$
	- Wenn wir alle Partitionen vereinigen bekommen wir nur unser Menge M wieder zurück.

**Partitionen Beispiel**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202181329.png" alt="Pasted image 20260202181329.png"/></div>


**KV Diagramme (Karnaugh-Veitch)**

KV Diagramme können wir benutzen als Alternative zu Venn Diagrammen, und die werden später sehr hilfreich sein.

**$A \cup B$ als KV Diagramm**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202181429.png" alt="Pasted image 20260202181429.png"/></div>

**KV Diagramm für 4 Variablen**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202181538.png" alt="Pasted image 20260202181538.png"/></div>

**KV Diagramm für 5 Variablen**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202181601.png" alt="Pasted image 20260202181601.png"/></div>

##### Multimengen $\set{}_{M}$
Zusammenfassung von Elemente ohne Beachtung der Reihenfolge, aber unter **Beachtung von Vielfachheiten**. Duplikate sind in Multimengen erlaubt.  

z.B. $M = \set{a, b, c, a}_{M} = \set{a, a, b, c}_{M} \neq \set{a, b, c}_{M}$, $\#_{a}M = 2$
Wenn M eine Multimenge ist dann steht $\large  \#_{a} M$ oder $|M|_{a}$ für die Anzahl der Vielfachheiten von **a** in **M**.

Wenn es eine totale Ordnung auf das Universum gibt, dann kann eine endliche Multimenge auch als **aufsteigend sortiertes Tupel** dargestellt werden.
$\set{1, 2, 3, 9, 4}_{M} = (1, 2, 3, 4, 9)$

Wenn das Universum eine Menge von Variablen dann kann man eine Multimenge auch als **Monom** darstellen:
$\set{a, b,c, a}_{M} \rightarrow a^{2}b^{1}c^{1}$

Nach Goldbachs Theorem sind endliche Multimengen von Primzahlen einfach gerade natürliche Zahlen!

##### Tupel

Eine Tupel in Kontrast zu eine Menge kann Duplikate Elemente beinhalten und die hat auch eine **bestimmte** Reihenfolge. Die Reihenfolge ist "unter Beachtung" formal gesagt. Tupeln werden durch normalen Klammern definiert, und dürfen 1-Tupel, 2-Tupel oder auch n-Tupel sein. Tupeln haben eine bestimmte Länge (sind ähnlich zu <a class="wikiLink" href="http://localhost:4321/wiki/array"> Felder </a> oder auch <a class="wikiLink" href="http://localhost:4321/wiki/linked-list"> Listen </a>). 

**5-Tupel & 3-Tupel Beispiele**
$$T = (a, b, \emptyset, \set{b, a}, a)$$
$$ (1, 2, 3) \neq (1, 3, 2) $$
**Tupel Länge**
Jede Tupel hat auch eine Länge t die gleich der Anzahl von Einträge der Tupel ist. Einschließlich Duplikate!
$t := (1, \set{4, 5}, 1, 1, (4, 5, \set{3, 4}) \space |t| = 5$
Daher können wir auch Tupel mit der Länge nennen sowie 2-Tupel für ein Paar.

**Identische Tupeln**

$\large (a, \set{b, c} = (a, \set{c, b} \neq (\set{b, c}, a)$

Nur die "oberen" Einträge müssen übereinstimmen. Was auch wirklich innerhalb der Eintrag passiert ist die Tupel eigentlich egal.

##### Sequenzen und Folgen

Wenn für jede ganze Zahl **i** ein Objekt $a_i$ gegeben ist dann bezeichnet man die **unendliche** Auflistung als Sequenz/Folge.

**Schreibweise**

$\huge (a_{i})_{i \in \mathbb N_{0}} = (0, 1, 2, 3, ...)$

Daher sind Tupels eigentlich nur **endliche** Sequenzen/Folgen.

**Mengen vs. Tupels**
In Mengen:
Für $\large k \in \mathbb N$ definiert man: $$\large [k] := \set{1, 2, ..., k} \space$$
Wo aber, $[0] = \emptyset$.

In Sequenzen:
$$\large (a_{i})_{i \in \mathbb [k]} := (a_{1}, a_{2}, a_{3}, ..., a_{k})$$
Wo aber, $\large (a_{[0]})_{i \in [0]} = ()$ (leeres Tupel)

**Wichtige Folgen**

- Geometrische Folge: $$\large a_{i} := cq^{i}, \space c, q \in \mathbb R$$
- Geometrische Reihe
$$\large a_{0} := 0 \space | \space a_{i+1} := a_{i} + cq^{i}$$

- Fibonacci Zahlen:
$$\large F_0 := 0, \space  F_1 := 1, \space  F_n+2  := F_{n+1} + F_n$$


##### Kartesisches Produkt

Wenn A und B Mengen sind dann können wir das **kartesische Produkt** aus A und B mittels A $\times$ B bekommen. Die ist die Menge **aller Paare**, deren **erste** Komponente ein Element aus **A** und deren zweite Komponente ein Element aus **B**.
$$A \times B = \set{ (a, b) \space | \space  a \in A, b \in B}$$
Wir brauchen 2-Tupel um die kartesische Produkt von zwei Mengen zu bestimmen. 
Die Kartesische Produkt hat **keine** Kommutativität und auch **keine** Assoziativität! 

Daraus folgt:

$$ A^{k} = \large A_{1} \times A_{2} \times ... \times A_{k} = \set{(a_{1}, a_{2}, ..., a_{k} \space | \space a_{1} \in A_{1}, a_{2} \in A_{2}, ..., a_{k} \in A_{k}}$$
Wobei $A^{0} = \set{()}$ und $A^{1} = \set{(a)}$

Das Kartesische Produkt ist distributiv für Schnitt, Vereinigung und Differenz.
##### Wörter und Sprachen

Eigentlich sind Zeichenketten oder auch Strings genannt einfach endliche Sequenzen von Zeichen die aus eine vorgegebene **Alphabet** kommen.

Alphabete sind eigentlich nur **Mengen** von **Zeichen**. Häufig schreiben wir einen Alphabet so
$\large \Sigma$. 
Wir nennen n-Tupel die nur mit Einträgen aus der Alphabet $\large \Sigma$ auch Wörter. 
Wir verwenden $\huge \Sigma^{k}$ als die Menge der Wörter der Länge k (k-Tupel).
$\huge \Sigma^{*}$ beschreibt die Menge aller **endlichen** Wörter.

D.h. können wir ein Wort so **definieren**:
$$\large (a_{1}, a_{2}, a_{9}, a_{5}) \space  | \space a_{i} \in \Sigma$$
In der echten Welt schreiben wir Wörter nicht so auf sondern wir lassen die Klammer weg!

Wir können auch zeigen das eine **Sprache L**  $\large \subset \Sigma^{*}$ da alle Wörter in einer Sprache müssen in der Menge alle endliche Wörter vorkommen. 

Dazu gibt es auch den leeres Wort $\epsilon$ oder $\lambda$ die das leere Tupel darstellt.

Für Wörter und Tupel kann man die Operation **Konkatenation** ("Verkettung") verwenden. Die Konkatenation hängt einfach das zweite Wort/Tupel am Ende der Erste:
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202191407.png" alt="Pasted image 20260202191407.png"/></div>


### Relationen (Relations)

Zwei oder mehr Mengen können durch eine **Relation** verbunden werden. Die Relation ist k-stellig oder hat eine **Stelligkeit/Arität** k wo k gleich der Anzahl von Mengen in die Relation ist.

Relationen bilden die **Grundlagen** für Datenbanken. Eine (einfache) Datenbank ist einfach eine Menge von Relationen. In Datenbanken können wir die Operationen Join und Projektion benutzen.

**Join** - konkateniert/verkettet jedes Tupel aus Relation R mit jedem Tupel aus Relation S wenn die soweit die "Join Bedingung" geht. 
- $R \bowtie_{i = j} S$
	- Join Bedingung: $r_{i} = s_{j}$
	- Der Join Bedingung sagt uns welche Spalten der Relation wir vergleichen sollen. Die "Spalte" einer Relation ist quasi eine Index von einer Tupel. 
	- T =(a, b, c) dann ist T[3] einfach c. 

**Projektion** - reduziert Tupel zu die Einträge die gewünscht sind. 
- $\large \pi_{i_{1}, i_{2}}$ 

**binäre Relationen**
Eine binäre Relation ist eine **2**-stellige Relation $R \subset A \times B$. 
- Grundlage für alle Datenstrukturen in der Informatik
- Binäre Relationen auf Zahlen kennen wir schon in der Form von $\set{\leq, \lt, =, \neq, \gt, \geq}$. Diese Relationen stellen eine spezifische Relation auf zwei Nummern dar.

**Infixnotation**: a **R** b = $(a, b) \in R$
- $3 \leq 5$ statt $(3, 5) \in \space \leq$
**inverse Relation**
$R^{-1} := \set{(b, a) \space | \space (a,b) \in R} := R^{\top}$

Wir können Relationen durch **Graphen** visualisieren. Ein gerichteter Graph **G = (V, E)** (Digraph) besteht aus einer Menge V - genannt **Knotenmenge**, Elemente von V entsprechend **Knoten** von G. Die Kanten zwischen die Knoten sind selbst binäre Relationen.
Die Kantenrelationmenge $E \subset V \times V$, entspricht die **Kanten** von G.

Ein Digraph G ist **endlich** falls V endlich ist; ansonsten ist G **unendlich**.
Ein Digraph G ist **bipartit**, falls V = $\large A \cup B$ mit $\large A \cap B  = \emptyset$  und $E \subset A \times B \cup B \times A$. Kurzgesagt, es gibt nur Kanten **zwischen** die Knotenmengen A und B.

Eine Relation E kann durch eine Digraph oder auch eine Matrix visualisiert werden:

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260202215632.png" alt="Pasted image 20260202215632.png"/></div>

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260203084152.png" alt="Pasted image 20260203084152.png"/></div>
Matrix hängt von den fixierten Aufzählung, wir können die Reihenfolge ändern wie wir wollen:
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260203084214.png" alt="Pasted image 20260203084214.png"/></div>


**Pfad**
Eine Pfad der Länge $l$ ist eine Tupel aus Knoten ($v_{0}, v_{1}, ..., v_{l}$) wo $\forall (v_{i}, v_{i+1}) \in E$. 
Ein Pfad heißt **einfach** falls kein Knoten **mehrmals** in dem Pfad besucht wird.
**Fakt**: In jeder **endliche** Digraph hat ein einfacher Pfad **maximale** Länge |V| - 1. 

##### Relationales Produkt

Wie Mengen können wir auch das "Produkt" aus zwei Relationen berechnen.
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260203084948.png" alt="Pasted image 20260203084948.png"/></div>
**Zuerst R** dann **S**.
Hier sagen wir dass wir die Relationen R und S durch die **zweite** Spalte von R und die erste **Spalte** von S verbinden. Danach nehmen wir nur die erste Spalte und die zweite Spalte von R und S als Ergebnis. 

Natürlich folgt daraus dass wenn die **Schnittmenge** von den beiden "Join Bedingungen/Positionen" die leere Menge ist dann ist RS auch die leere Menge weil sie **keine** Knoten haben die gleich sind, und deshalb können wir die nicht verbinden.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260203085727.png" alt="Pasted image 20260203085727.png"/></div>

Wir können entweder mithilfe die graphische Darstellung einer Relation oder die Matrix unser Relationales Produkt berechnen. 

Matrix Strategie:
Vergleiche **Zeile** des Startknotens **s** mit **Spalte** der Zielknoten **t**.
Dann nehmen wir den **max** von den beiden Werten.

**Relationales Produkt - Rechenregeln**

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260203093646.png|500" alt="Pasted image 20260203093646.png|500"/></div>

Die Identitätsrelation ist die Relation wo alle Knoten **nur** mit sich **selbst** in Relation stehen. (Selbstschleifen)

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Screenshot 2026-02-03 at 09.38.02.png|500" alt="Screenshot 2026-02-03 at 09.38.02.png|500"/></div>
Die Relationales Produkt ist **assoziativ** (Klammern egal). 
Es ist auch **distributiv** für die Schnitt Operation.
Relationale Produkte sind **nicht** **kommutativ** da die Reihenfolge wichtig ist.
Eine Relationales Produkt mit der **leere Menge** ist immer gleich die leere Menge. (Annihilator)
$R_{1}\emptyset = \emptyset = \emptyset R_{2}$

##### Endorelation

Eine **Endorelation** ist eine **binäre** Relation die nur auf **eine** Menge definiert ist. Eine Relation kann mit sich selbst mehrmals verkettet werden. Dies wird so geschrieben $R^{k}$ wo $k$ die Anzahl von Verkettungen darstellt. Was wir hier wirklich machen ist immer die **k-Schritt** Pfade oder die **k-Tupel** aus unser Relation/Graph aussuchen.

$R^0 = Id_{A} = \set{(a, a) | \space a \in A}$
$R^{1}= R = R^{0}R$
$R^{2} = RR = R^{1}R$
...
**Beispiel**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260203094803.png" alt="Pasted image 20260203094803.png"/></div>


**Eigenschaften von Endorelationen**

Als Beispiel schauen wir eine Endorelation $R \subset A \times A$ an.

Eine Endorelation R ist "**reflexiv**" falls $\large Id_{A} \subset R$, anders gesagt: jeder Knote hat eine Schleife (Kante auf sich selbst)
$$\forall a \in A: (a, a) \in R$$

Eine Endorelation R ist "**irreflexiv**" falls $Id_{a} \cap R = \emptyset$, anders gesagt: es gibt **keine** Schleifen
$$\nexists a \in A: (a, a) \in R$$
Eine Endorelation R ist "**symmetrisch**" falls $R^{\top} = R$, anders gesagt: für jeder Kante von Knote A zu B gibt es auch eine Kante von B zu A. 
$$\forall (s, t) \in R : (t, s) \in R$$
Eine Endorelation R ist "**antisymmetrisch**" falls $R^{\top} \cap R = Id_{A}$, anders gesagt: zwischen jeder Knote gibt es höchstens **eine** Kante, aber Schleifen sind immernoch **erlaubt**
$$\forall(s,t) \in R: \exists (t,s) \in R \space \implies t = s$$
Eine Endorelation R ist "**asymmetrisch**" falls $R^{T} \cap R = \emptyset$, anders gesagt: antisymmetrisch aber jetzt **ohne** Schleifen.
$$\forall(s, t) \in R : \nexists (t, s) \in R$$
Eine Endorelation R ist "**transitiv**" falls $RR \subset R$, anders gesagt: wo man in **zwei** Schritte hinkommt, kommt man auch in **einem** hin.
$$\forall (s, t) \in R \space \space if \space \space(t, u) \in R \implies (s, u) \in R$$

Daraus folgen die zwei Hüllen: **transitive Hülle** $R^+$ und die **reflex-transitive Hülle** $R^*$.
$\large R^{+} = \cup_{k \in \mathbb N} R^{k}$
$\large R^{*} = \cup_{k \in \mathbb N_{0}} R^{k} = R^{+} \cup R^{0}$

Insofern können wir sagen das eine beliebige Knote $v$ von eine Knote $u$ erreichbar ist solange $u R^{*} v$ gilt.

###### Ordnungsrelationen
!CHEAT SHEET
**Partielle Ordnungen** (⪯)
Eine partielle Ordnung ist eine binäre Relation die **reflexiv**, **transitiv**, und **antisymmetrisch** ist. Die partielle Ordnung heißt **partiell** weil sie normalerweise nur teilweise ordnet. Aber es gibt auch **totale Ordnungen**. Eine partielle Ordnung kann so definiert werden: $\exists (a, b) \in R : (a, b) \notin R \space \land \space (b, a) \notin R$

**Totale Ordnung**
Eine totale Ordnung z.B. Teilbarkeit mit die Natürlichen Zahlen, ist eine **partielle Ordnung** wo folgendes gilt: $\forall (a, b) \in R : aRb \space \lor \space bRa$.

**Topologische Sortierung**
Eine topologische Sortierung von eine partielle Ordnung ist eine **totale Ordnung** die mit die partielle Ordnung übereinstimmt.

**Strikte/Strenge Ordnungen**
Eine Strikte oder Strenge Ordnung ist eine Ordnung (keine partielle) wo die **Reflexivität** durch **Irreflexivität** ersetzt womit die **Antisymmetrie** durch **Asymmetrie** ersetzt wird.
Zum Beispiel die $\large \lt_{\mathbb Z}$ ist eine strikte Ordnung da $x \lt_{\mathbb Z} x$ illegal ist, es gibt keine Reflexivität. 

**Hasse Diagramm**
Wir können auch Ordnungsrelationen durch eine Digraphen realisieren. Weil die Transitivität und Reflexivität sehr nerfig zu zeichnen ist lassen wir es bei einem Hasse Diagramm weg.
Beispiel $\leq_{\mathbb N_{0}}$
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204082043.png" alt="Pasted image 20260204082043.png"/></div>

Eine Hasse Diagramm auf eine **endliche** Relation hat besondere Elemente wie der **maximale Element**, **größte Element**, **minimales Element**, und das **kleinste Element**.

**maximale Element** (m): $a R m \land m R a \land a = m$, es gibt keine Kanten von eine maximlae Element zu anderen Elemente. "Keine Kanten nach oben"
**größte Element**(m): $\forall a \in R : (a R m)$, es gibt keine Knote die nicht mit der größte Element in einer Beziehung ist, und die größte Element zeigt auf keinen außer sich selbst. Es kann nur höchstens eine größte Element geben.

**kleinste Element**(m): $\forall a \in R : (m R a)$ die kleinste Element is die Element ganz unten die mit **jedem anderen** vergleich bar ist. Er zeigt auf alle anderen, aber keiner zeigt auf ihn. Es gibt höchstens eine kleinste Element. 

**minimale Element**(m): $\nexists a \in R : (a R m)$, es gibt keine Elemente die auf die minimale Elemente zeigen, aber die minimale Elemente könnte auf andere Elemente zeigen. "Alle Elemente ohne Kanten nach unten sind **minimal**". Es kann mehrere minimale Elemente in einer Ordnungsrelation geben.

**Verband**
Eine Menge A mit partieller Ordnung R wird auch **Verband** genannt falls es für jeder Paar von Elementen ein **Infinum** (größter gemeinsamer Untere) und ein **Supremum** (kleinste gemeinsamer Obere) besitzt. 

**Beispiel Verbände**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204090111.png" alt="Pasted image 20260204090111.png"/></div>
Die **Infinum** oder $inf\set{6, 10}$ ist 2 in das erste Verband weil 6 und 10 als ggT 2 haben. Die **Suprimum** oder $sup\set{6, 10}$ ist 30 weil 30 die kleinste gemeinsamer Vielfache ist. (kleinste obere Schranke). Potenzmengen sind noch ein Beispiel von einen Verband.


!CHEAT SHEET
###### Äquivalenzrelationen(=, $\equiv$, $\cong$ )
Eine Äquivalenzrelation ist eine binäre Relation die **reflexiv**, **symmetrisch**, und **transitiv** ist.

Wir können Äquivalenzrelationen benutzen um **Restklassen** zu definieren mithilfe der Modulo Operation. Wenn wir die modulo Operator anwenden können wir Zahlen in ihre  Restklassen unterteilen. Diese Restklassen sind eine Beispiel von **Äquivalenzklassen**.

Zwei Äquivalenzklassen sind entweder **identisch** oder **disjunkt**. Die Vereinigung alle Äquivalenzklassen ergibt die ursprüngliche Menge. Jede Element einer Äquivalenzklasse ist auch eine Repräsentant der Klasse, $y \in [a] \implies [a] = [y]$. Die Äquivalenzklassen ermöglichen die **Partitionierung** einer Menge von Elemente nach eine bestimmte **Eigenschaft**.

**Zum Beispiel:**
mod 3 =  $\set{[0], [1], [2]}$ weil wir nur Reste von 0, 1, oder 2 haben können von modulo 3. 
wo $[0] = \set{3, 6, 9, 12, 15} \implies [0] = [3] = [6]$
Wir können auch direkt die Äquivalenzklasse definieren: $[1] = 3\mathbb Z + 1 = \set{3(0) + 1, 3(1) + 1, 3(2) + 1, ...}$ 

**Quotient**
Die Quotient $A/R$ ist die **Menge** aller Äquivalenzklassen: $A/R = \set{[a]_{R} \space | \space a \in A}$. Wir vergessen die einzelne Elemente der Äquivalenzklassen und fokusieren wirklich nur auf die Klassen selbst und ihren Definitionen. $\mathbb Z/\equiv_{3}​=\set{3 \mathbb Z,3 \mathbb Z+1,3 \mathbb Z+2}$. Die **Quotient** ist immer eine **Partition** von der ursprüngliche Menge da jede Klasse **nicht leer** ist, es gibt keine überlappen zwischen die Klassen, und jeder Element in der ursprüngliche Menge ist in **mindestens** eine Äquivalenzklasse.

**Äquivalenzrelationen ⇔ Partitionen**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204080710.png|550" alt="Pasted image 20260204080710.png|550"/></div>

!CHEAT SHEET 152 might be useful
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260215214934.png" alt="Pasted image 20260215214934.png"/></div>

### Functions

Eine Relation $R \subset A \times B$ ist eine (**totale**) Funktion (**Abbildung**) $\iff$ $\forall a \in A$ gibt es **geanu ein** $b \in B$ mit $(a, b) \in R$. 
- d.h. gilt $\forall a \in A : |aR| = 1$
- Jeder Urbildelement muss in **genau** **eine** Tupel vorkommen innerhalb der Relation
- R ist dann eine **partielle** Funtkion falls $\forall a \in A: |aR| \neq 1$

**Schreibweise**
$f: A \rightarrow B$ bedeutet $f \subset A \times B$ ist eine Funktion **von** A **nach** B ist.
$B^{A} := \set{f: A \rightarrow B}$ ist die Menge aller Funktionen von der Menge A nach B
$f(a) = b$ und $afb \iff b = f(a)$

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204102936.png" alt="Pasted image 20260204102936.png"/></div>
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204102909.png" alt="Pasted image 20260204102909.png"/></div>
**Zyklenschreibweise** ist super wichtig für Permutationen und Graphen. 
Im Tupel (1, 2, 3) sagen wir dass f(1) = 2, f(2) = 3, und f(3) = 1. Daraus entsteht der Zyklus. Dann gibt es auch f(4) = 4. Daher (1, 2, 3)(4).


**Anmerkungen**
Eine Funktion benötigt eine **Urbildmengen A** und eine **Zielmenge B**. 
Eine Funktion bildet ein **Bild**, oder Elemnte **aus** der **Urbildmenge** in der **Zielmenge** ab.
Es können unterschiedlichen Ausdrücke für eine Funktion geben (duh). 

Eine partielle Funktion kann zu einer totalen Funktion **erweitert** werden. 
$$f_{\bot} := f \cup \set{(a, \bot) \mid a \in A, |af| = \emptyset} $$

$f \in A^{[n]}$ kann durch die Tupel $(f(1), ..., f(n)) \in A^{n}$ eindeutig beschrieben werden.
z.B. $f \in A^{[4]} = (f(1), f(2), f(3), f(4)$. 

$f\in A^{A}$  nennt man auch eine **Selbstabbildung** von A. (A $\rightarrow$ A)
- **Beispiel von Selbstabbildung:** $f(1) = 3, f(2) = 2, f(3) = 1$
- Bijektiv, aber Urbildmengenelemente sind **nicht** gleich Zielmengenelemente

$Id_{A} \in A^{A}$ wird **Identität(sfunktion)** auf **A** genannt. Die Identitätsfunktion ist eine besondere Selbstabbildung wo die Urbildmengenelemente mit die Zielmengenelemente **übereinstimmen**
- z.B. f(1) = 1, f(2) = 2, f(3) = 3

Funktionen haben auch eine **k**-Stelligkeit oder **Arität**, die beschreibt die **Anzahl** von Argumenten/Operanden:
$f: A_{1} \times ... \times A_{k} \rightarrow B$ ist eine k-stellige **Funktion** oder **Operation** (nullär, unär, binär, ternär). Aber die Funktion selbst ist immernoch eine **2-stellige** Relation da Funktionen immer **binäre** Relationen sind.

Die nulläre Funktion ist eine Spezialfall wo es **keine** Urbildmengenelemente gibt außer die **leere Tupel**, kein Argument.  (vgl. getter in Java)
$f: \set{()} \rightarrow B$

Wenn $a = f(a)$ gilt dann nennt man **a** einen **Fixpunkt** von **f**.

**Urbilder und Bilder**
Sei $f: A \rightarrow B$ eine Funktion.
- $f(a)$ ist **das** (eindeutige/einzige) **Bild** oder **Nachfolger** von **a** bzgl. **f**.
- $f^{-1}(b)$ ist die **Menge** alle **Urbilder** oder auch **Vorgänger** die dieser **Bild** b bilden. 
- dom(f) ist die **Definitionsmenge**/**Urbildmenge**, bzw. alle Elemente die man in der Funktion reinstecken **darfst** $dom(f) = A$
- im(f) ist die **Bildmenge** $im(f) := f(A) := \set{f(a) \mid a \in A} \subset B$
- Für $X \subset A$ setze: $f(X) := \set{f(x) \mid x \in X}$ dieser Schreibweise erlaubt uns statt das ganze f(x)'s aufzulisten müssen wir nur eine Menge von Elemente X eingeben. Dann kommt die Menge von Bilder raus.
- Für $Y \subset B$ setze: $f^{-1}(Y) := \set{a \in A \mid f(a) \in Y} = \cup \set{f^{-1}(y) \mid y \in Y}$. Wie Oben schon definiert können wir das Selbe für B oder die Zielmenge machen indem wir hier die Inversfunktion benutzen. Vereinigung muss gemacht werden bei die letze Defintion da unser Inversfunktion eine **Menge** zurückgibt und keine Werte. 

**Funktionen Operationen**

Die allgemeine Operator $\large \diamond$ ist eine Operator die was macht abhängig von der Kontext. Es ist wie eine Platzhalter und kann beliebige Eigenschaften haben. 
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204100428.png" alt="Pasted image 20260204100428.png"/></div>
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204100520.png" alt="Pasted image 20260204100520.png"/></div>
Wir implementierien die Operation, und dann beschreiben die Funktion. Hier werden zwei Potenzmengen miteinander verbunden durch das Kartesisches Produkt. Die Vereinigung oder Schnitt von diese Menge ist einfach die Menge selbst.

**Komposition**
Die Funktionkomposition $\circ$ ist eine Verkettung oder **Nacheinanderausführung** von Funktionen. $f \circ g = f(g(x)) = f \space nach \space g$
Umgekehrte Schreibweise weil die Relationales Produkt sagt ja dass wir **zuerst** f nehmen und dann g. Also g **nach** f. 
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204101050.png" alt="Pasted image 20260204101050.png"/></div>
Die Funktionskomposition ist **assoziativ** aber nicht kommutativ. 
$Id_{A}$ ist **rechtsneutral**, $Id_{B}$ ist **linksneutral** $(f \circ Id_{A} = f = (Id_{B} \circ f)$.

$f^{n+1} := f \circ f^{n}$, $f^{0} = Id_{A}$

**Funktion Eigenschaften**

Eine Funktion ist **injektiv** $\iff$ $|f^{-1}({b})| \leq 1 \space \space \forall b \in B$. Für jeder Element in der Zielmenge gibt es **höchstens eine Urbildelement**.

Eine Funktion ist **surjektiv** $\iff |f^{-1}(b)| \geq 1 \space \space \forall b \in B$. Für jeder Element in der Zielmenge gibt es **mindestens eine Urbildelement** 

Eine Funktion ist **bijektiv** $\iff |f^{-1}(b)| = 1 \space \space \forall b \in B$. Für jeder Element in der Zielmenge gibt es **genau eine Urbildelement** .

$|A| \leq |B|$ falls $f: A \rightarrow B$ injektiv ist.
**CBS** Theorem: Falls $|A| \leq |B|$ und $|B| \leq |A|$ dann existiert eine bijektive Funktion $f: A \rightarrow B$.
Eine **Permutation** von eine Menge A ist eine **bijektive** **Selbstabbildung** von A.

Eine Funktion $f^{\top}$ ist eine Funktoin von **B** nach **A** $\iff$ es eine **bijektive** Funktion gibt $f: A \rightarrow B$. Wenn wir so eine bijektive Funktion habe dann ist $f^{-1} = f^{\top}$, sonst ist gibt f^{-1} eine Menge statt Werte, und die wird auch die **Umkehrfunktion** genannt.

!CHEAT SHEET
Falls $f: A \rightarrow A$ **injektiv** oder **surjektiv** und A endlich ist, dann muss f **bijektiv** sein.

**Verkettungsregeln**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204102453.png" alt="Pasted image 20260204102453.png"/></div>

### Kardinalität (Cardinality)

Die Kardinalität eine Menge ist extrem Wichtig für viele Anwendungen von Mengen, aber ist schwierig zu berechnen. Die Kardinalität einer Menge ist einfach die **Anzahl** von Elemente innerhalb die Menge, anders gesagt die Größe. Wird auch manchmal die Mächtigkeit einer Menge genannt. 

Die Kardinalität eine Menge A kann auch die **Kardinalzahl** von A genannt werden.

$|A| \leq |B|$ wenn es eine **injektive** (höchstens eine Urbildelement) Funktion $B^{A}$ gibt.
$|A| = |B|$ wenn es eine **bijektive** Funktion $B^{A}$ gibt.

Wenn es eine injektive Funktion $B^{A}$ gibt aber **keinen** bijektive Funktion B^{a} dann ist B echt **mächtiger** als A ($|A| \lt |B|$).

**Satz von Cantor-Bernstein-Schröder**

Der Satz von Cantor sagt dass $\leq$ auf den Kardinalzahlen **antisymmetrisch** ist.

Seien $A$ und $B$ Mengen. Wenn es **eine** **injektive Abbildung**
$$f: A \rightarrow B$$
und **eine** **injektive Abbildung**
$$g: B \rightarrow A$$
gibt, dann existiert **eine bijektive Abbildung**
$$h : A \rightarrow B$$
D.h. wenn $|A| \leq |B|$ und $|B| \leq |A|$ dann muss $|A| = |B|$ gelten.



**Abzählbar vs. Überabzählbar**

Man nennt eine Menge $A$ **abzählbar**, **falls** $|A| \leq |\mathbb N|$; ansonsten nennt man A **unabzählbar**.

Mittles Bijektion können wir die Cantorsche Paarfunktion zeigen:
$$|\mathbb N| = |\mathbb N \times \mathbb N|$$
Diese Stragie werden wir fürs Diagonalabzählung benutzen, siehe unten.

Idee: A ist nur **abzählbar** wenn es möglich ist, eine **Bijektion** zwischen der Menge A und eine $\mathbb N$ zu konstruieren. D.h. brauchen wir für jeder Element aus der Menge A eine **eindeutigen Identifikationsnummer** aus die natürlichen Zahlen.

Anders formuliert: A ist nur abzählbar wenn es eine (endliche oder unendliche) Liste gibt, die **alle** Elemente von A enthält (Einträge sind mit $\mathbb N$ verbunden durch index).

Zeige $|A| \lt |\mathscr P(A)|$ durch Satz von Cantor

Mit $f: A \rightarrow \mathscr P (A), a \mapsto \set{a}$ folgt $|A| \leq |\mathscr P(A)|$.

Hier beschreibt $\rightarrow$ die Urbildmenge und die Zielmenge von unser Funktion.
Dazu gibt es die "Map Funktion" $\mapsto$ die genau beschreibt wie der Elemente aus der Urbildmenge behandelt werden.

Wir müssen noch zeigen dass es **keine** Bijektion gibt um den Satz von Cantor anzuwenden.

$M = {1} \mid |M| = 1$
$2^M = \set{1, \emptyset} \mid |2^M| = 2$

Widerspruchbeweis mittels **Diagonalisierung**:

Wir nehmen an dass es eine **bijektion** zwischen $A$ und $\mathscr P(A)$ gibt. 
$$g: A \rightarrow \mathscr P(A)$$
Definiere M so:
$$M = \set{a \in A \mid a \notin g(a)} \in \mathscr P(A)$$
Daraus folgt:
$$m \in M \iff m \notin g(m) = M$$

$\mathbb N \lt |2^{\mathbb N}| = |\set{0, 1}^{\mathbb N}| = |[0, 1]| = |\mathbb R| = |\set{0, 2}^{\mathbb N}|$

$\set{0, 1}^{\mathbb N}$ sind alle Funktionen von den natürlichen Zahlen nach 0 oder 1. Eine endliche 0,1 folge.
$[0, 1]$ alle reelen Zahlen zwischen 0 und 1.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204170028.png" alt="Pasted image 20260204170028.png"/></div>

**Beweisstrategien**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204170109.png" alt="Pasted image 20260204170109.png"/></div>
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260204170212.png|400" alt="Pasted image 20260204170212.png|400"/></div>



  