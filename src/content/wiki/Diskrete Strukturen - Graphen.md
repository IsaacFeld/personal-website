---
name: "Diskrete Strukturen - Graphen.md"
domain: 1
written: "2026-02-05T16:33:00.000Z"
finished: false
tags: [" discrete_mathematics  "," tree  "," graph  "," relations  "," set_theory"]
related: []
summary: "Graphen sind extrem wichtig in der Informatik, und durch planarität, Knotenfärbungen, Gradsequenzen, Bäume und viele andere Themen können wir sehr viele schwierige Probleme lösen."
footnotes: []
---

  




#### Gerichtete, Ungerichtete, und Einfache Graphen

Jeder Graph $G = (V, E)$ mit $V = {v \in A \cup B}$ und $E \subset A \times B$.
Die Knotenmenge V enthält alle Knoten von G, Die Kantenrelation/-menge E ist eine Teilmenge von $V \times V$.
Graphen können auch so geschrieben werden: $G[V]$.

Ein Trivialer Graph ist eine Graph ohne Kanten!
##### Digraphen

Ein Digraph ist eine Graph die **gerichtet** ist. Eine gerichtete Graph kann eine Kante von A nach B haben aber nicht von B nicht A. Dieser asymmetrie ist besonders wichtig für die Graphenlehre.

Die Kantenmenge einer gerichtete Graph ist eigentlich eine Menge von geordneten Paare, bzw. 2 Tupel. 

Ein Digraph G ist endlich solange V endlich ist.
Ein Digraph G ist **bipartit** falls $V = A \cup B$ und $A \cap B = \emptyset$ und $E \subset (A \times B) \cup (B \times A)$ (nur Kanten zwischen A und B).
$$\nexists ((x, y) \in A \times A) \in E \land \nexists((x, y) \in B \times B) \in E$$

Ein Pfad oder Weg ist wenn zwei oder mehr aufeinanderfolgende Knoten durch eine gerichtete Kante verbunden sind. Die Länge einer Pfad hängt von die Anzahl von Knoten ab. $v_0, v_1, ... v_l$ Ein Pfad ist **einfach** falls keine Knoten mehrmals in dem Pfad besucht wird.

**Fakt**: In einem endlichen Digraphen hat ein einfacher Pfad maximal Länge $|V| - 1$
**Fakt**: die **Distanzfunktion** $d(u, v)$ berechnet die Länge des kürzesten Pfades von die Knote u nach Knote v. ($\infty$ wenn kein Pfad).
##### Teilgraphen
Eine Induzierte Teilgraph ist eine Graph die Teil von sich selbst ist wo:
G($U \subset V$,$E \cap (U \times U)$)
d.h. alle Kanten zwischen die Knoten innerhalb von U müssen die gleichen Kanten besitzen, aber die anderen Knoten und ihre Kanten (im Beispiel Knote 1) fallen weg.

**Beispiel von eine induzierte Teilgraph (U rechts, V links)**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205175131.png" alt="Pasted image 20260205175131.png"/></div>

Ein Digraph H $H = (V_H, E_H)$ ist eine **Teilgraph** von G falls $V_H \subset V_G$ und $E_H \subset E_G$.
##### Zusammenhängende Graphen

Ein Graph ist **zusammenhängend** falls $\forall u,v \in V: u(E \cup E^{-1})v$ in anderen Wörtern: es gibt **mindestens eine** Kante zwischen jeder Knote im Graph.  Die Kantenmenge E muss **symmetrisch** sein.

Ein Graph G ist **stark zusammenhängend** falls $\forall u, v \in V : uE^{*}v$ als auch $vE^{*}u$. Anders gesagt, die Kantenmenge E ist **symmetrisch** **reflexiv**, und **transitiv** (Äquivalenzrelation).

$U \subset V$ ist eine (starke) **Zusammenhangskomponente**, falls $G[U]$ (stark) zusammenhängend. Anders formuliert, innerhalb eine Graph die nicht zusammenhängend ist kann es starke oder normale zusammenhängende Teilgraphen geben und die sind Zusammenhangskomponente.

U ist eine **maximale** (starke) **Zusammenhangskomponente**, falls $G[U]$ (stark) zusammenhängend **und** es gibt keine $U'$ wo $U \subsetneq U' \subseteq E$ mit $G[U']$ ist (stark) zusammenhängend. Eine zshgs. Komponent die maximal ist muss nicht unbedingt größer sein und es kann mehrere geben, es ist einfach eine Teilgraph aus der Graph wo sobald man eine Knote hinzufügt (U') baut ist $G[U']$ nicht mehr zshgd. Geht nicht weiter. 
##### Kreise

Ein **Kreis (Zyklus)** ist ein Pfad wo $l \geq 1$ und $v_0 = v_l$. 
Ein Kreis ist **einfach** falls alle Knoten auf der Pfad unterschiedlich sind. $|\set{v \in C}\space | = l$
Eine "Selbstkante" bzw $(u, u) \in E$ bezeichnet man als **Schleife/Schlinge**.
Ein Digraph ohne Kreise heißt **azyklisch**
- DAG Directed Acyclic Graph
- Hasse Diagramm ist eine DAG
##### Isomorphie

Zwei Digraphen G, H sind **isomorph** ("strukturgleich"), kurz $G \cong H$ falls es eine **Bijektion** (bzw. Knotenumbenennung) $\beta: V_G \rightarrow V_H$ gibt, die die **Kanten** **respektiert**: 
$$uE_Gv \iff \beta(u)E_H\beta(v)$$
**Beispiel von Isomorphie**
$E_G = \set{(1, 2), (3, 4), (2, 3)}$ mit $\beta: V_G \rightarrow V_H = \set{(1, a), (2, b), (3, c), (4, d)}$
$E_H = \set{(a, b), (c, d), (b, c)}$

Isomorphie selbst ist eine Äquivalenzrelation.
##### Automorphismus

**Def**: Graphisomorphismus eines Graphs mit sich selbst.
Es gibt eine bijektive Funktion $$\alpha: V \rightarrow V : (u, v) \in V \iff (\alpha(u), \alpha(v)) \in E$$
Isomorphismus benennen Knoten um, aber Automorphismen stellen die **Symmetrien** eines Graphen dar. 

**Beispiel**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205184121.png" alt="Pasted image 20260205184121.png"/></div>
TODO

##### Ungerichtete Graphen

Bäume sind DAG Graphen (directed acyclic) und deshalb sind ungerichtete Graphen mega wichtig. 
Ein Digraph G = (V, E) ist **ungerichtet** falls E **symmetrisch** ist. 
$$\forall u,v \in V : uEv \iff vEu$$
Ein ungerichtete Graph hat eine Kantenmenge die eine Menge von Teilmengen ist:
$$E := \set{\set{u, v} \in V \mid u \neq v}$$
Im ungerichteten Graphen ist ein Pfad $v_0, v_1, ..., v_l$ mit $l \geq 3$ und $v_0 = v_l$ und $|\set{v_0, v_1, ..., v_l}| = l$ ein Kreis. In ungerichteten Graphen gibt es nur **einfache** Kreise die aus **mind. 3**  Kanten bestehen. Triviale Kreise wie u, v, u, werden nicht gezählt, würde kein Sinn machen.

Ein ungerichtete Graph kann auch zusammenhängend sein falls $\forall u,v \in V \mid u \neq v$ einen Pfad existiert von u nach v. 
##### Einfache Graphen
Ein **endlicher** Digraph ist ein einfacher Graph falls es **ungerichtet** ist und **keine** Schleifen besitzt. Die Kantenmenge E muss irreflexiv sein und symmetrisch.

$\binom{V}{2}$ ist die Menge alle 2 Elementige Teilmengen von der Knotenmenge ohne dass u und v gleich sind. 
- $V := \set{1, 2, 3}$
- $\binom{V}{2} = \set{\set{1,2}, \set{2,3}, \set{1, 3}}$

Für eine einfacher Graph ist die Kantenmenge so definiert $E = \binom{V}{2}$ da keine Schleifen erlaubt sind und die Symmetrie benötigt wird. 

Statt Vorgänger und Nachfolger gibt es nur **Nachbarschaft**:
$\Gamma(u) = \set{v \in V \mid \set{u, v} \in E}$ wo die **Knotengrad** $deg(u) := |\Gamma(u)|$
- Wie viele Knoten sind in einer Relation mit die Knote "u"?

!CHEAT SHEET
**Satz**: Ein einfacher Graph ist **bipartit** genau dann, wenn er **keinen Kreis ungerader Länge** enthält.

**Lemma**: Jeder **einfacher zushgd.** Graph mit $n\geq 1$ Knoten hat **mindestens** $n-1$ Kanten.
Beweis ist sehr lang.

**Lemma**: Jeder **endliche einfache zushgd.**  Graph mit $n \geq 3$ Knoten und mindestens $n$ Kanten besitzt einen Kreis.

**Wichtige einfache Graphen**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205190452.png" alt="Pasted image 20260205190452.png"/></div>
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205190513.png" alt="Pasted image 20260205190513.png"/></div>
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205190525.png" alt="Pasted image 20260205190525.png"/></div>

**Perfekter Binärbaum**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205190529.png" alt="Pasted image 20260205190529.png"/></div>

Eine perfekter Binärbaum ist eine Baum wo jeder Knote **genau zwei** Kinder hat. 

**Lemma**: Für alle $h \in \mathbb N_0: B_h$ hat $2^h$ Blätter.
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205191143.png" alt="Pasted image 20260205191143.png"/></div>

**Lemma**: Für alle $h \in \mathbb N_0: B_h$ hat $2^{h+1} -1$ Knoten, $2^{h+1} - 2$ Kanten.
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205191156.png" alt="Pasted image 20260205191156.png"/></div>
##### Andere Arten von Graphen
**Multigraph** ein Graph wo die Kantenmenge eine **Multimenge** ist und daher kann es mehrere Kanten zwischen die Knoten u und v geben.

**Hypergraph** ein Graph wo die Kantenmenge $E = \mathscr P(V)$
- eine Hyperkante verbindet mehrere Knoten gleichzeitig.
#### Bäume

Ein Baum ist eine **zshgd., kreisfreier, einfacher** Graph. 
Innerhalb einer Baum sind Knoten mit $deg(u) = 1$ als **Blätter** bezeichnet, alle andere Knoten sind **innere Knoten**.

Ein Graph, dessen maximale Zshgskomponenten Bäume sind wird als **Wald** bezeichnet. 

**Lemma**: Ist G ein Baum dann gilt ($\implies$) $|E| = |V| - 1$. (Nicht die andere Richtung!) 
**Lemma**: Jeder Baum G mit $|V| \geq 2$ hat mind. zwei Blätter.
- Kann man sehr schon mit Induktionsbeweise beweisen. 
##### Spannbäume

Sei $G = (V, E)$ ein **einfacher** Graph dann ist einen Teilgraph $T = (V, E')$ mit $E' \subseteq E$, der selbst ein Baum ist auch ein **Spannbaum**. 

Wir wissen dass jeder Baum $|V| - 1$ Kanten hat, und jeder zshgd. Graph mit $|V| - 1$ Kanten ein Baum ist, daher besitzt **jeder** **zshgd.** Graph einen **Spannbaum**. Man muss einfach die Knoten entfernen bis man dahin kommt.
**Beispiel:**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205194126.png" alt="Pasted image 20260205194126.png"/></div>

**Lemma**: Jeder zshgd. Graph $G = (V, E)$ hat **mind.** einen Spannbaum.
##### Erreichbarkeit, DFS, BFS

Für jede Zwei Knoten gibt es **genau ein** einfacher Pfad in einen Baum.

**Heuristik basierte Suchen**
Sei $u_1, u_2, ..., u_n$ die Reihnefolge in der die Knoten hinzugefügt werden:
DFS - Depth First Search LIFO
- wähle $\set{u_i, v}$ mit $i$ maximal
- Besuche immer die nächste Knote bis es nicht mehr funktioniert.
BFS - Breadth First Search FIFO
- wähle $\set{u_i, v}$ mit $i$ minimal
 - Besuche jeder Nachbar zuerst.
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260205200927.png" alt="Pasted image 20260205200927.png"/></div>
##### Würzel und Höhe

Ein Würzelbaum ist ein Baum mit fest gewählter Würzel $r \in V$. Die Höhe eines Knotens in einem Würzelbaum ist die Länge des **kürzestens** Pfades zu r. Die Höhe von ein Baum wird mit $max(h_{G}(v) \mid v \in V)$, maximale Höhe von alle Knoten.
#### Gradfolge

Zu jedem einfachen Graphen G können wir eine **Gradfolge** konstruieren.
$$V = \set{v_1, v_2, ..., v_n} \implies (deg(v_1), deg(v_2), ..., deg(v_n))$$
Wir können die Knoten umbenennen um die Gradfolge aufsteigend zu sortieren. 
Ein Graph heißt **k-regulär** wenn $\forall v \in V : deg(v) = k$. (Jeder Knote hat derselben Grad, sowie einfache Kreisgraphen). 

Zwei **nicht isomorphe** Graphen können **dieselbe** Gradfolge besitzen
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206105249.png" alt="Pasted image 20260206105249.png"/></div>

!CHEAT SHEET
Shorthand: $d_i = deg(v_i)$
**Lemma**: (**Handschlaglemma**) Für jeden Graphen G = (V, E) gilt:
$$2 |E| = \sum_{i\in [n]} deg(v_i)$$
$$|E| = \frac{\sum_{i\in [n]} deg(v_i)}{2}$$
**Konsequenzen der Handschlaglemma**

Ein **einfacher Graph** existiert **nur** falls seine $\sum_{i \in [n]} d_i$ gerade ist. Die Summe von ein einfacher Graphs Gradfolge ist immer gerade.

Ein einfacher Graph muss eine **gerade** Anzahl an Knoten von **ungeradem** Grad besitzen.

Ein einfacher Graph mit $|V| \gt \frac{1}{2} (\sum_{i \in [n]} d_i) + 1$ **kann nicht zshgd.** sein.

##### Realisierbarkeit

**Lemma**: Es gibt einen einfachen Graphen mit **n** Knoten und Gradfolge $(d_1, ..., d_n)$ $\iff$ es einen einfachen Graph mit **n-1** Knoten und Gradfolge sort$(d_1,..., d_{n - d_n -1}, d_{n-d_n} - 1, ..., d_{n-1} -1)$
^ -> Havel Hakimi Algorithmus:
Die neue Gradfolge wird aus dem originellen $(d_1, ..., d_n)$ gewonnen indem man
1) Größte Knotengrad entfernt
2) Letzen $d_n$ Komponente um 1 verkleinert
3) Nochmal aufsteigend sortiert

**Havel Hakimi Algorithmus**
Falls $d_1 \lt 0 \lor d_n \gt n-1$, abbruch Graph mit gegebene Gradsequenz ist **nicht realisierbar**.
$d_n = 0 : G = ([n], \emptyset)$

**Beispiel**
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206110902.png" alt="Pasted image 20260206110902.png"/></div>

#### Eulertour und Hamiltonkreis

**Def**: Sei G = (V, E) ein **einfacher** Graph. Ein Kreis $v_0, v_1, ... v_l$ mit $\set{v_0, v_1, ... v_l} = V$ heißt:

**Eulerkreis**, falls der Pfad entlang der Kreis jede **Kante** genau **einmal** besucht. 
$l = |E|$ und $\set{\set{v_0, v_1}, \set{v_1, v_2}, ..., \set{v_{l-1}, v_l}} = E$

**Hamiltonkreis**, falls der Pfad entlang der Kreis jeden **Knoten** genau **einmal** besucht
$l = |V|$ und $\set{v_0, v_1, ..., v_l} = V$

Hamiltonkreise und Eulerkreise sind **besondere** Arten von Kreise. 

Hamiltonpfad und Eulertours sind Hamiltonkreise oder Eulerkreise wo $v_0 \neq v_l$. Die muss nicht bei gleichen Punkt anfingen und aufhören.

**Satz**: Ein **zshg.** einfacher Graph besitzt **genau dann** eine **Eulertour**(kein Kreis) **wenn** jeder Knoten **geraden** (**positiven**) Knotengrad hat. 
$$\forall d \in (d_0, ..., d_n): d \mod 2 = 0 \land d \gt 0$$
Die Algorithmus von **Hierholzer** kann benutzt werden um einen **Eulerkreis** zu finden indem wir immer neue Kreise finden, die Kreise entfernen, und dann am Ende versuchen die zusammenzusetzen:

"Finde Kreise entlang unbenutzter Kanten und füge sie zusammen, bis keine Kanten mehr übrig sind."

Für gerichtete Graphen:
**G** besitzt einen **Eulerkreis** gdw. **G** ist stark zushgd. und $\forall v \in V : |vE| = |Ev|$. 
Alle Knoten haben positiven Knotengrad. 

**Hamiltonkreise** zu bestimmen ist NP vollständig.
**Satz**: Ein einfacher Graph mit $|V| \geq 3$ besitzt einen Hamiltonkreis **wenn** in G jeder Knoten mindestens Knotengrad $\frac{|V|}{2}$. 
Diese Satz ist keine gdw. und es kann Hamiltonkreise in Graphen geben die dieser **hinreichende Bedingung** nicht erfüllen.
#### Planarität

Ein einfacher Graph G ist **planar** falls man ihn in zwei Dimensionalen ohne Kantenüberschneidungen zeichnen kann. 

$K_{3,3}$ und $K_{5}$ sind **nicht planar**. 
Satz: **Eulersche Polyederformel** (EPF)
- Ein **zshgd. planarer** Graph (1 max. Zshgskomponent) hat **f** "**Flächen**" bei eine überschneidungsfreier Darstellung
$$f - |E| + |V| = 2$$
- Die umschließende Fläche oder Universum wird mitgezählt.

Satz: Für planare Graphen mit **k** maximale Zhgskomponenten:
$$f - |E| + |V| = 1 + k$$

**Konsequenzen der EPF**
$\forall G$ mit G planar gilt folgende Formeln:
$$f - |E| + |V| \geq 2$$

$$|V| \geq 3 \implies |E| \leq 3|V| - 6$$
Erklärung
Jede Fläche wird durch **mindestens** 3 Kanten definiert. Dabei zählen wir jede Kante doppelt weil **eine** Kante **zwei** Flächen grenzen kann. Daraus folgt:
$$2|E| \geq 3f= f \leq \frac{2}{3}|E|$$
Damit kann man so eine Formel herleiten für jeden planaren Graphen G:
$$2 \leq f - |E| + |V| \leq \frac{2}{3}|E|-|E| + |V|$$
Dazu, innerhalb einer planaren Graph gibt es **mind.** einen Knoten $u \in V$ mit $deg(u) \leq 5$ da ansonsten musste:$$|E| = \frac{1}{2}\sum_{v \in V} deg(v) \geq \frac{1}{2} \cdot 6|V| = 3|V|$$ gelten.

Beweis: $K_{3, 3}$ und $K_{5}$ sind nicht planar.

$K_5$ hat $|V| = 5, |E| = 10$, daher ist $10 \geq 3(5) - 6, |E| \geq 3|V| - 6$
$K_{3,3}$ ist eine vollständiger bipartite Graph. Alle Kreise in bipartiten Graphen habe **gerade Länge**. Die $K_{3,3}$ ist eine bipartite Graph mit 3 Knoten pro Seite. Deshalb besteht jeder Kres aus mindestens 4 Kanten. 
Wenn jeder Kreis aus mind. 4 Kanten besteht muss jede Fläche durch mind. 4 Kanten begrenzt sein. Deshalb kann die nicht planar sein.

##### Minoren
Für zwei gegebene einfache Graphen G und H ist H ein **Minor** von G falls aus G schrittweise mittels 
- Entfernen von Kanten
- Entfrnen von Knoten mit Grad 0
- Kantenkontraktion 
einen zu H isomorphen Graphen erzeugen kann.

**Satz von Kuratowski**: Ein einfacher Graph G ist genau dann **planar** wenn weder der $K_{3, 3}$ noch der $K_5$ ein Minor von G ist.

#### Knotenfärbung

Eine Farbabbildung $c: V \rightarrow \mathbb N$ ist eine Knotenfärbung von G falls $\forall (u, v) \in E: c(u) \neq c(w)$ gilt. 
In anderen Wörtern es dürfen keine zwei Knoten geben die eine Kante zwischen sich haben und auch die **gleiche** Farbe besitzen.

Die Anzahl verwendeteten Farben wird so geschrieben $|c(V)|$ wo c die **Farbabbildung** ist. 

Die **chromatische Zahl** $\chi(G)$ von G ist die **minimale** Anzahl von Farben die eine valide Knotenfärbung ermöglichen.

$$\chi(G) := min\set{|c(V)| \mid c: V \rightarrow \mathbb N}$$
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206160935.png" alt="Pasted image 20260206160935.png"/></div>
**Eigenschaften der chromatische Zahl $\chi(G)$**

!CHEAT SHEET
$\chi(G) \leq |V|$ für jeden einfachen Graphen G
$\chi(G) \leq 1 + max_{u \in V} deg(v)$ für jeden einfachen Graphen G (obere Schranke)
$\chi(G) \leq 2 \iff$ G bipartit ist. (siehe Definition von Bipartät)
$E \neq \emptyset \implies \chi(G) \gt 1$ Graph mit eine Kante ist dann
$\chi(K_n) = n$ vollständiger Graph
$\chi(K_{m, n}) = 2$
$\chi(C_{2k}) = 2$ Kreisgraph mit gerade $|V|$
$\chi(C_{2k + 1}) = 3$ Kreisgraph mit ungerade $|V|$

**Lemma**: Für jeden einfachen Graph g gilt:
$$\chi(G) \leq \frac{1}{2} + \sqrt{2 |E| + \frac{1}{4}}$$
Damit können wir auch die Minimumanzahl vom Kanten mit $\chi(G)$ bestimmen.
$$|E| \geq \frac12 \chi(G)(\chi(G) - 1)$$
**Vier-Farben-Satz**: Für jeden einfachen **planaren** Graphen gilt $\chi(G) \leq 4$

Eigentlich sind Knotenfärbungen auch speziale **Partitionen** von der Knotenmenge.
#### Adjazenzmatrix

Eine $m \times n$ **Matrix** über eine Menge **D** ist eine Tabelle von Elementen von **D** mit **m** Zeilen und **n** Spalten.
$\large M \in D^{m\times n}$
d.h. $\large M_{i,j} \in D$ Eintrag in der **i**-ter Zeile und **j**-te Spalte.
Zeilenvektoren: $D^{1 \times n}$ 
Spaltenvektoren: $D^{m \times 1}$

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206163241.png|590" alt="Pasted image 20260206163241.png|590"/></div>

Eine **Adjazenzmatrix** ist eine Matrix die eine Graph darstellt:
$$A_{G} = (a_{i, j})_{i, j \in [n]} \in \set{0, 1}^{n \times n}$$
Eine Element in der Matrix kann nur entweder 0 oder 1 sein.
$$a_{i,j} = 1 \iff v_{i}Ev_{j}$$
<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206164652.png|500" alt="Pasted image 20260206164652.png|500"/></div>

Lemma: $\forall k \in \mathbb N : (A^{k}_{G})_{i, j}$ ist die **Anzahl** der **unterschiedliche** **k**-Schritt Pfade von $v_i$ nach $v_j$. Wo $A^{3}_{G} = A_{G} \cdot A_{G} \cdot A_{G}$.

<div class="wikiImageContainer"><img class="wikiImage" src="../wikiImages/Pasted image 20260206165107.png|500" alt="Pasted image 20260206165107.png|500"/></div>

$\large \Phi^{k}_{i,j}$ die Menge aller **k**-Schritt-Pfade von $v_i$ nach $v_j$.
###### Matrizen: Summe
Für Matrizen $A \in \mathbb R^{m \times n}$, $B \in \mathbb R^{m\times n}$ ist die Summe so definiert:
$$C_{i, j} := A_{i, j} + B_{i, j}$$

###### Matrizen: Multiplikation
Die Spaltenzahl der linke Matrix muss gleich der Zeilenzahl der rechte Matrix sein.
Für Matrizen $\large A \in \mathbb R^{k \times m}$, $\large B \in \mathbb R^{m\times n}$ ist die Summe so definiert. 
Produkt ist dann so definiert: $\large C = A \cdot B \in \mathbb R^{k \times n}$.
$$C_{i, j} := \sum_{i \in [m]} A_{i, t} \cdot B_{t, j}$$
Wir berechenn die ganze Reihe Links mit die ganze Spalte Rechts einzeln und summieren die Ergebnisse.
Matrix Multiplikation ist **nicht kommutativ**. 

#### Matchings

Ein Matching M ist eine Teilmenge $M \subseteq E$ der Kanten sodass $\forall e, e' \in M :|e \cap e'| \neq 1$. 

Anders formuliert: Ein Matching $M \subseteq E$ ist eine Kantenmenge, sodass **keine zwei verschiedene Kanten einen gemeinsamen Endknoten haben**. 

Ein Matching M heißt **perfekt** wenn $\forall v \in V : |\set{m \in M \mid v \in m}| = 1$
Die Kardinalität einer perfekter Matching ist dann $\frac{|V|}{2}$.





  