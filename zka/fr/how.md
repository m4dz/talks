<!--{section^1:data-breadcrumb="Implémentation"}-->

<!--{.interleaf data-background-image="/img/unsplash/175638.jpg"}-->
<!-- Photo by Lacey Williams on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg>  Frameworks, outils, implémentation

===

@[giphy]({"token": "Zo9ACzmJgoqRy", "caption": "C'est compliqué", "className":"large"})

===

~~Frameworks~~
{.xx-large}

- [SignalProtocolKit::SessionBuilder](https://github.com/langboost/libsignal-protocol-pcl/blob/master/signal-protocol-pcl/SessionBuilder.cs)
- [CossackLabs](https://www.cossacklabs.com/)
- [CryptPad](https://github.com/xwiki-labs/cryptpad)
{.linkrolls}

===

Standard File !
{.xx-large}

- [Standard File Protocol](https://github.com/standardfile)
- [Standard Notes](https://standardnotes.org/)
{.linkrolls}

===

### Mobile / Desktop

- Code compilé
- Stockage de clefs dans le système de fichiers
- Environnement contrôlé
- Intrusion prévenues
{.large}

===
<!--{.punchline}-->

### Navigateur
<!--{h3:.large}-->

===
<!--{.large}-->

CORS

- protège des requêtes vers des domaines non-reconnus
- prévient des injections depuis des ressources extérieures
- interdit l'écriture sauvage dans le document

===
<!--{.large}-->

CSP

- autorise explicitement les ressources
- prévient l'injection XSS / data
- protège l'intégrité de l'app

===
<!--{.large}-->

SRI

- vérifie la signature des assets
- protège du MITM
- garantit l'intégrité des ressources exécutées

===
<!--{.large}-->

Referrer-Policy

- évite la fuite des URI privées
- isole les URLs de l'app
- protège du tracking malicieux

===
<!--{.large}-->

Stockage des clefs

- basé sur WebCrypto
- avec File-API
- export des clefs chiffrées / CER intermédiaires

===

Protéger la **couche crypto** ?
{.xx-large}

===
<!--{.left}-->

==WebAssembly== {.xx-large}

Prévient la lecture à la volée du code exécuté et rend l'extraction de données complexe


*[CORS]: Cross-origin resource sharing
*[CSP]: Content Security Policy
*[SRI]: Subresource Integrity
*[MITM]: Man in the Middle Attacks
