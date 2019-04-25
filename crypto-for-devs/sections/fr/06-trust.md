<!--{section^1: data-breadcrumb="Confiance"}-->

<!--{.interleaf data-background-image="/img/unsplash/468174.jpg"}-->
<!-- Photo by Chunlea on Unsplash -->

## Échanges de clefs, certificats, signatures 

===

### Clef symétrique

- Une clef pour toutes les opérations
- Rapide
- Critique sur l'échange de clefs {.fragment .fade-in}

===

### Diffie-Hellman

<!-- SVG ANIM: Diffie Hellman -->

![](../img/Diffie-Hellman_Key_Exchange.jpg){.medium}

===

### Clefs asymétriques et encapsulation

1. Chiffrement d'un message avec un algorithme à clef symétrique (ex.IDEA), et une clef aléatoire
2. Chiffrement de la clef symétrique avec un algorithme à clef asymétrique (ex. RSA) {.fragment .fade-in data-fragment-index="1"}
3. Concaténation des deux parties chiffrées dans un seul `payload` {.fragment .fade-in data-fragment-index="2"}
4. Déchiffrement de la clef symétrique avec la clef privée {.fragment .fade-in data-fragment-index="3"}
5. Déchiffrement du message avec la clef symétrique {.fragment  .fade-in data-fragment-index="3"}
{.medium}

===

@[giphy]({"token":"WZ4M8M2VbauEo","className":"medium","caption":"Pretty Good Privacy"})

===

### Signature

- Algorithme asymétrique inversé
- Uniquement pour de la vérification

===

### Certificats

- Chaîne de confiance
- Révocation des identités
- X.509

<!-- -->

- [CryptoParty][6.2]
- [Let's Encrypt][6.1]

{.linkrolls}


[6.1]: https://letsencrypt.org/
[6.2]: https://www.cryptoparty.in/
