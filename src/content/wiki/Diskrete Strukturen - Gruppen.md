---
name: "Diskrete Strukturen - Gruppen.md"
domain: 3
written: "2026-02-06T21:37:00.000Z"
finished: false
tags: ["",""]
related: []
summary: "\n\n"
footnotes: []
---

  




#### Zahlentheorie

**Teilbarkeit**
Die Teilbarkeitrelation ist eine **partielle Ordnung**  auf die $\mathbb N$ wo
$$n|m \space \iff \frac{m}{n} \in \mathbb Z \iff m \in n\mathbb Z := \set{kn \mid k \in \mathbb Z}$$

Wir sagen oft "n teilt m", "n ist ein Teiler/Faktor von m", "m teilbar durch n", "m Vielfaches von n"

**Modulo**
Die Rest bei Division durch $n$ ist eine Äquivalenzrelation auf die $\mathbb Z$. 
Eigentlich ist der modulo äquivalenz durch 4 Strichen gezeigt.
$$a \equiv_n b \iff n|(b - a) \iff \frac{b-a}{n} \in \mathbb Z \iff b-a \in n\mathbb Z$$
Ein Zahl ist durch modulo $n$ äquivalent zu eine andere Zahl wenn die Differenz von den beiden Zahlen ein **Vielfaches** vom $n$ ist. 

**Primzahlen $\mathbb P$**

$$\mathbb P := \set{p \in \mathbb N \mid p \gt 1 \land \forall n \in \mathbb N: n|p \implies n \in \set{1, p}}$$
Alle **natürliche** Zahlen die **größer als 1** sind und die einzigen Teiler/Faktoren von p sind entweder **1** oder **p** **selbst**. 

Der Nummer 1 selbst hat genau **ein** Teiler und ist ein Teiler von allem.

**Fact**: $n \in \mathbb N$ ist zusammengesetzt $\iff$ es gibt $1 \lt d \leq \sqrt{n}$ mit $d|n (d \in \mathbb N)$
##### Primfaktorzerlegung 

**Fundamentalsatz der Arithmetik**: $\forall n \in \mathbb N$:
$$\large n = \prod_{p \in \mathbb P} p^{\nu_{p}(n)} = \prod_{p \in \mathbb P: \space p|n} p^{\nu_{p}(n)}$$
mit $\nu_{p}(n) := max\set{k \in \mathbb N_0 : p^k | n}$  die **p-adische Ordnung** von $n$.
- Produkt ist endlich, da $\nu_p(n) = 0 \mid \forall p \in \mathbb P \mid p \gt n$
- n ist eine **Multimenge** von Primzahlen mit $\nu_p(n)$ die Vielfachheit von **p**

**Beispiel**:
$a = 360 = 2^3 \cdot 3^2 \cdot 5^1$, 
$b = 126 = 2^1 \cdot 3^2 \cdot 7^1$

**Satz des Euklid**: $|\mathbb P| = |\mathbb N|$

##### ggT & kgV

##### Eulersche Phi Funktion + modulare Arithmetik

##### EEA

#### Gruppen

##### Cayley Table

##### Erzeuger

##### Homomorphismus & Isomorphismus



  