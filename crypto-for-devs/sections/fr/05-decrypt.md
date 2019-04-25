<!--{section^1: data-breadcrumb="Symétrique et asymétrique"}-->

<!--{.interleaf data-background-image="/img/unsplash/57353.jpg"}-->
<!-- Photo by drmakete lab on Unsplash -->

## Symétrique & Asymétrique

===

### Chiffrement par blocs

- ~~DES (Data Encryption Standard)~~
- AES (Advanced Encryption Standard)
- IDEA
- BlowFish
{.medium .reset}

@[giphy]({"token":"PGDgYYGVDk8Qo","className":"small"})

===

### Chiffrement par flux

- ~~RC4~~
- ChaCha20 ::?::{.fragment .fade-in data-fragment-index="1"}
- Panama ::?::{.fragment .fade-in data-fragment-index="1"}
{.medium .reset}

@[giphy]({"token": "3o85xmYPgg7QFaJFEk","className":"medium"})

===

Les ordinateurs ne sont
pas vraiment ==aléatoires==
<!--{p:.punchline}-->

===

### Padding, Randomness, IV

- introduit des valeurs imprévisibles et non-déterministes
- fonctions CSPRNG ::pas d'accès direct à `/dev/urandom`::{.x-small} {.fragment .fade-in}
- IV (Vecteur d'Initialisation) ::Blocs utilisés pour initialiser les fonctions algorithmiques et introduire un état unique::{.x-small} {.fragment .fade-in}
{.x-large}

===

### Modes de blocs

- ~~ECB (Electronic Code Book)~~
- ~~CBC (Cipher Block Chaining)~~
- AEAD (Authenticated Encryption with Associated Data)
{.large}

<!-- -->

- [Padding oracles and the decline of CBC-mode cipher suites][5.1]
{.linkrolls}


[5.1]: https://blog.cloudflare.com/padding-oracles-and-the-decline-of-cbc-mode-ciphersuites/

===

Une ==clef== symétrique
doit être partagée,
et peut donc être **capturée**
<!--{p:.punchline}-->

===

### Bob & Alice

<!-- SVG Anim: RSA -->

![](../img/asymmetric-encryption.png){.large}

===

RSA ou Courbes elliptiques ?

@[giphy]({"token":"OrR9ATtSDmd8s","className":"large"})
