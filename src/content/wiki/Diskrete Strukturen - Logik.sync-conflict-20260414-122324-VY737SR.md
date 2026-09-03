---
name: "Diskrete Strukturen - Logik.sync-conflict-20260414-122324-VY737SR.md"
domain: 1
written: "2026-02-06T16:16:00.000Z"
finished: false
tags: [" discrete_mathematics  "," graph  "," tree  "," logic  "," sat"]
related: []
summary: "Mit Logik können wir Erfüllbarkeitsprobleme lösen, durch Induktion sachen Beweisen, und vieles mehr."
footnotes: []
---

  




#### Inferenzen

Eine **Inferenz** ist eine **Aussage** der Form:
Wenn A wahr ist, dann ist auch B wahr ($A \rightarrow B$).


Die Wahrheit von Inferenzen hängt oft von der **Kontext** ab. Zum Beispiel:

> Wenn **Anna** ein **Enkelkind** hat dann ist **Anna** eine **Mutter**. 

Diese Inferenz macht quasi nur Sinn wenn man schon weißt was genau eine **Enkelkind**, eine **Mutter**, und was **Anna** ist. 

Eine **logische Inferenz** ist eine formelle Inferenz mit **Variablen** die unsere informelle Objekte/Aussagen ersetzen. Eine logische Inferenz ist dann nur **korrekt** wenn **alle** ihre Instanzen korrekt sind (allgemeingültigkeit). Allgemeingültige logische Inferenzen wie $P \lor \lnot P$ werden **Tautologien** genannt.
#### Synta cx

Der logische Vokabular besteht aus folgendes:
Wahrheitskonstanten: $\set{true, false}$
Unendliche Menge $V$ von Aussagenvariablen: $\set{p, q,r, s, t, ...}$
Logische Operatoren: $\lnot, \land, \lor, \implies, ...$
Hilfssymbole: (,)

Die **Formationsregeln** sind:
**Regel 0**: true und false sind Formeln
**Regel 1**: Eine Aussagenvariable ist eine Formel
**Regel 2**: Ist $F$ eine Formel dann ist auch $\lnot F$ eine Formel
**Regel 3**: Sind $F$ und $G$ Formeln, dann sind $(F\land G), (F\lor G) und (F \implies G)$ ebenfalls Formeln.
**Regel 4**: Ein Ausdruck ist nur dann eine Formel wenn er die vorherigen Regeln benutzt. 

Eine logische Formel $F$ kann durch eine geordnete Würzelbaum realisiert werden, die wird dann **Syntaxbaum** genannt. Jeder Syntaxbaum besteht aus die Teilformeln von $F$

**Syntaxbaum Beispiel**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206174828.png|300" alt="Pasted image 20260206174828.png|300"/></div>

Wenn $F, G$ aussagenlogische Formlen sind dann ist $G$ nur eine **Teilformel** von $F$ wenn $G$ als Zeichenkette **vollständig** und **zusammenhängend** in $F$ vorkommt. Besser gesagt, die Formel G muss auch in F, G gefunden werden. 
$$F = A \land B \lor C \mid G = A \land B$$
D.h. Syntaxbaum zu G ist auch dadurch ein Teilbaum von F. 
Die Variablen innerhalb eine **Teilformel** nennt man **atomare Teilformeln**.
$V_F$ bezeichnet die Menge aller in F vorkommende Variablen.

Sei $\large \Psi$ eine totale Ordnung die der **Bindungsstärke** von logischen Operatoren beschreibt oder die "Operationreihenfolge" sowie PEMDAS.
$\set{\implies \Psi \lor \Psi \land \Psi \space \lnot}$

#### Formeln und Belegungen 

**Belegung**

Eine Belegung $\beta: V' \rightarrow {0, 1}$ ist eine Funktion die Variable(n) auf die 1 oder 0 abbilden. Eine Belegung heißt **minimal** wenn $V_F \subseteq V'$, anders formuliert es gibt keine Überflussige Variablen oder Variablen die nicht in F vorkommen die auch in der Belegung vorkommen.

Wenn $F$ nur $p$ und $q$ braucht dann müssen wir $r$ nicht belegen.

**Short Circuit evaluation**

Wenn wir Wahrheitstabellen ausfüllen können wir die Werte unsere die "rechte" Teilbaum weglassen wenn es möglich ist. Z.B. wir wissen schon innerhalb eine $\land, \lor, \implies$ was die Formel schon sagt mit manchen Belegungen.
Wird in Java und C++ für &&, || verwendet (cool).

KV Diagramm
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206180958.png" alt="Pasted image 20260206180958.png"/></div>

Eine Formel ist widersprüchlich oder unerfüllbar wenn für jede minimale Belegung $\beta$ gilt $[F](\beta) = 0$. 

Eine Formel ist erfüllbar wenn $\exists \beta: [F](\beta) = 1$.


**Modellierung**
Die Notation: $F \models G$ sagt uns das G **folgt aus** F oder dass $F \implies G$ gültig ist.
Wir suchen eine Belegung von F **und** G wo F wahr ist und G falsch ist. Da $$1 \implies 0 = 0$$
**Beispiel**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206182257.png|300" alt="Pasted image 20260206182257.png|300"/></div>

$true \models F$ beschreibt eine Tautologie auch $\models F$
- Aus F folgt immer Wahr. 
- F ist immer wahr und daher true impliziert F ist immer true. (gültig)
$F \models false$ beschreibt eine Widerspruch
- Aus false folgt immer F
- F ist immer false, und daher F impliziert false ist immer true. (gültig)
$F \equiv G : true \models (F \iff G)$

**Äquivalenzen**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206182840.png|400" alt="Pasted image 20260206182840.png|400"/></div>
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206182851.png|400" alt="Pasted image 20260206182851.png|400"/></div>
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206182901.png|400" alt="Pasted image 20260206182901.png|400"/></div>

#### SAT (NP-Vollständig)

Die SAT oder Satisfiability Problem ist die Erfüllbarkeitsproblem wo wir versuchen für beliebige Formeln herauszufinden ob sie überhaupt eine Lösung haben, wenn ja, dann wie diese Belegung aussieht die dieser Lösung generiert. SAT Probleme können von SAT Solvers gelöst werden, aber die SAT Solvers benötigen dass die boolesche Formeln die eingegeben werden eine bestimmte **Syntax** besitzen. Dieser Syntax ist oft die **disjunktive/konjunktive Normalform**.
##### DNF, KNF, und NNF

**Normalform** für Formeln mit der Eigenschaft, dass es für jede Formel F eine Formel $G \equiv F$ dieser Form gibt.

Dazu gibt es die **DNF** oder die **disjunktiver Normalform**, falls $F$ folgende Struktur hat:
$$\large \bigvee^m_{i = 1} \space\space  \bigwedge^{m_i}_{j=1} L_{i, j}$$
und daraus folgt auch die **KNF** oder die **konjunktive Normalform**, falls $F$ folgende Struktur hat:
$$\large \bigwedge^m_{i = 1} \space\space  \bigvee^{m_i}_{j=1} L_{i, j}$$
mit die Menge aus **Literalen**:
$$\large L_{i, j} \in \set{p, \lnot p \mid p \in V_{F}}$$

Es dürfen nicht eine Variable und die negierte version von dieser Variable innerhalb eine **Klausel** vorkommen.

Hinweis: $\lnot\bigvee \bigwedge L \equiv \bigwedge\bigvee \lnot L$

F ist in **Negationsnormalform (NNF)** falls (1) nur die Junktoren $\lnot, \land, \lor$ in $F$ verwendet werden und (2) $\lnot$ ausschließlich auf Variablen angewendet wird.

Wir können die **KNF** und die **DNF** gewinnen indem wir alle Operatoren außer $\lnot, \land, \lor$ in ihrer Definitionen auflösen, **DeMorgan's Gesetze** anwenden, und letztendlich die **Distributivgesetz** anwenden bis wir unser erwünschte Normalform erreicht haben.

Ein **Monom** ist die Produkt von mehrere **Literalen**. (Verundung)
Eine **Summe** ist die Summe von mehrere **Literalen**. (Veroderung)
##### Kanonische DNF, KNF

Wir können auch die DNF und KNF durch eine Wahrheitstafel oder KV Diagramm oder was ähnliches sehr leicht herleiten. 

**Kanonische DNF**
Wir betrachten jeder Stelle wo unser Funktion $F$ zu eine **1** auswertet. Dann "kopieren" wir die Belegung $\beta$ an dieser Stelle indem wir alle Literale verunden. Dieser Klauseln werden **Minterme** genannt.
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206184629.png|300" alt="Pasted image 20260206184629.png|300"/></div>

**Kanonische KNF**
Wir betrachten jeder Stelle wo unser Funktion $F$ zu eine **0** auswertet. Dann kopieren wir die Belegung $\beta$ an dieser Stelle indem wir alle Literale verodern. Dieser Klauseln werden **Maxterme** genannt.
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206184835.png|300" alt="Pasted image 20260206184835.png|300"/></div>
##### DPLL

Die DPLL ist eine Algorithmus die der Grundlage für viele **SAT** Solver ist. Er nimmt eine aussagenlogische Formel $F$ in **KNF** und gibt dann eine **erfüllende** $F$-Belegung oder **ünerfullbar** aus.

Eine **Klausel** ist eine Disjunktion von Literalen. Die werden of durch eine Menge von Literalen dargestellt. 
$$(p \lor \lnot q) = \set{p, \lnot q}$$
Einer **KNF**-Formel wird durch die Menge ihrer Klauseln dargestellt.

Bei einer DPLL Ausführung bedeutet die Klauselmenge mit leerer Klausel die unerfüllbarkeit einer aussagenlogischen Formel $F$.
Die **leerer Klauselmenge** bedeutet dass die Belegung der Formel $F$ erfüllt. 

**Basisversion**

Gegeben Klauselmenge $K$, mit eine totale Ordnung auf den Literalen.
- Falls $\set{} \in K$ gib unerfüllbar zurück.
- Falls $K = \emptyset$ gib erfüllbar zurück.
- Ansonsten fixiere die bzgl. der Ordnung **erste** in K vorkommende Variable $x$.
	- Prüfe rekursiv ob der Belegung mit der Variable x als False erfüllbar ist.
	- Wenn nicht dann gib die Ergebnis der Rekursion wo Variable x als True gesetzt ist.
- **Leere Klausel entsteht** nur, wenn **alle Literale einer Klausel auf false gesetzt werden**.
	- Leere Klausel = „ich habe eine Klausel, die **gar nicht erfüllt werden kann** unter der aktuellen Belegung.“

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206191839.png" alt="Pasted image 20260206191839.png"/></div>

Es gibt zwei besondere Regeln die wir anwenden können um eine Branch zu vermeiden indem wir zuerst schauen ob es irgendwelche Klauseln gibt mit **genau einen Element drin** (OLR), oder die Fall das in jeder Klausel wenn wir eine spezifische Variable haben dann hat er immer die gleiche "polarität". (PLR)

**OLR**
One Literal Rule. 
Wenn ein Literal **alleine** vorkommt, und ist mit keine andere Literale verbunden können wir durch OLR die Klausel auflösen.
Wenn ich sowas habe: $\set{\set{A, B, \lnot C}, \set{C}}$ dann kann ich die OLR für C anwenden da um dieser Formel zu erfüllen müssen wir mindestens die Klausel mit nur C auflösen.

**PLR**
Pure Literal Rule.
Wenn ein Literal **mehrmals** vorkommt aber in jeder Klausel wo er vorkommt ist er immer entweder **positiv** oder **negativ** dann wissen wir das wir einfach alle Instanzen dieser Literal gleichzeitig auflösen können.

**Optimierung von DPLL mit OLR & PLR**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206194512.png|500" alt="Pasted image 20260206194512.png|500"/></div>

##### Resolution

Resolution ist eine andere Methode um die **Unerfüllbarkeit** zu finden. Wir können im jeden Schritt genau ein Literal entfernen indem wir zwei Klauseln mit einander Verunden. Jetzt können wir dieser neue Klausel wieder benutzen und wir versuchen eine $p \land \lnot p$ Situation zu finden.

**Beispiel Resolution**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206195005.png" alt="Pasted image 20260206195005.png"/></div>

Hier wird genau ein Literal entfernt indem wir zwei Klauseln verunden.
$$\set{\lnot p \lor q \lor r \land \lnot r \lor s \lor t}$$
$r \land \lnot r$ ist eine Widerspruch und **immer falsch** und wir wissen dass $x \lor 0 = x$ deshlab wird die Literal entfernt. 

##### PL Formeln

###### Semantische Äquivalenz

###### Grundresolution




  