<!--{section^1: data-breadcrumb="Cryptanalyse"}-->

<!--{.interleaf data-background-image="/img/unsplash/133200.jpg"}-->
<!-- Photo by Andrew Neel on Unsplash -->

## Cryptographie & Cryptanalyse

===

### Il était une fois…

@[giphy]({"token":"VcizxCUIgaKpa","className":"medium"})

===

#### Le code César

<!-- SVG ANIM: Shift Cipher Wheel -->

![Shift Cipher Wheel](../img/shift-cipher-wheel.png){.small}

===

#### Le chiffre de Vigenère

<!-- SVG ANIM: Vigenère Cipher Square -->

![](../img/vigenere-cipher.jpg){.small}
<!--{figure:.reset}-->

```txt
Plain text:  ATTACK AT DAWN
Cipher key:  LEMON<span class="fragment fade-in">L EM ONLE</span>
Cipher text: <span class="fragment fade-in">L</span><span class="fragment fade-in">X</span><span class="fragment fade-in">F</span><span class="fragment fade-in">OPV EF RNHR</span>
```

===
<!--{.small}-->

1^re^ faille : les ==répétitions== {.left}

L'analyse de **fréquences**
invalide tout algorithme où
un **dénominateur commun**
conduit à des répétitions
<!--{p:.punchline}-->

===

#### Enigma

![](../img/enigma.jpg){.medium}

===

La protection des ==clefs== est essentielle

![xkcd://538](https://imgs.xkcd.com/comics/security.png){.medium}

===
<!--{.small}-->

2^de^ faille : espionnage et attaque par force brute {.left}

Aucune protection ne peut éternellement résister à une attaque
<!--{p:.punchline}-->

===

### Chiffrement numérique


@[giphy]({"token": "QhCAwDXZ0BltK", "className": "medium"})

==La clef unique==, Graal du chiffrement
