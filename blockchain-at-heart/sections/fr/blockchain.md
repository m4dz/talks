<!--{section^1:data-breadcrumb="Raconte-nous la blockchain tonton !"}-->

<!--{.interleaf data-background-image="/img/unsplash/nong-vang-577609-unsplash.jpg"}-->
<!-- Photo by Nong Vang on Unsplash -->

## Raconte-nous<br>la blockchain, tonton !

===
### C'est quoi ?

Une blockchain,
::c'est une suite (une chaine)::{.fragment .fade-up}
::de structures de données (des blocs)::{.fragment .fade-up}
<!--{p:.x-large}-->

===

@[giphy]({"token":"26tncpmgYJm5gp3CE", "caption":"Still clever", "className":"small"})

===
<!--{.punchline}-->

Une base de données

===
<!--{.punchline}-->

Immuable
::(Immutability)::{.x-small}

===

@[giphy]({"token":"4BB8y6rRCf5bW", "caption":"Elle répond à deux besoins :", "className":"medium"})

===

- Traçabilité
- Certification
<!--{ul:.xx-large}-->

===
<!--{.punchline}-->

Décentralisée

???
Vous pouvez faire tourner un seul node, mais par design, elle est conçue pour être intégralement distribuée

===
<!--{.x-large}-->

- Transparence
  ::tous les nodes disposent de
  toutes les structures de données::{.small .fragment .fade-up}
- Résilience
  ::il n'y a plus de Principal ::vs.::{.small} Replicas::{.small .fragment .fade-up}

===
<!--{.punchline}-->

Autorité

===
<!--{.xx-large}-->

::Publique::{.fragment .stabilo} ::vs::{.small} ::Privée::{.fragment .stabilo}

???

On entre dans un cas fondamentalement différent de celui de la cryptomonnaie a-la-bitcoin

===

### Le problème Byzantin

@[giphy]({"token":"37sqvWjCl1b1eVXtP1", "className":"medium"})

===
<!--{.x-large}-->

Obtenir un ==consensus== valide {.large}

- Preuve de travail
  ::(Proof of Work)::{.small .fragment .fade-up}
- Preuve d'enjeu
  ::(Proof of Stake / Delegated Proof of Stake)::{.small .fragment .fade-up}
- Byzantine Fault Tolerance
  ::(Delegated BFT / Practical BFT)::{.small .fragment .fade-up}

===
<!--{.x-large}-->

==PoW== (Nakamoto consensus) {.large}

- Minage
- Résolution d'une énigme math
- Coûteux en énergie
- Le général est le premier à résoudre son ==Sudoku== {.fragment .fade-up}

===
<!--{.x-large}-->

==PoS== {.large}

- Membres riches / anciens
- Confiance sur la durée d'appartenance
- Théorie de jeux
- Le général est toujours le plus ==vieux / décoré== {.fragment .fade-up}

===
<!--{.x-large}-->

==pBFT== : Practical Byzantine Fault Tolerance {.large}

- Régulation : par validation
- Réseau fermé, donc privé
- Le général est le ==fils du patron== {.fragment .fade-up}

???

On valide un nombre suffisant (⅓ ?) de requêtes pour la considérer comme valide ; si le client ne reçoit pas de réponse, le node principal fait défaut, les nodes secondaires déclenchent un "changement de vue", ce qui change de serveur principal

===

@[giphy]({"token":"7MBoS2kez5I8o", "caption":"Pas trop perdu·e·s ?", "className":"medium"})

===
<!--{.x-large}-->

Pourquoi l'utiliser sur réseau fermé ? {.large}

- Transparence / Confiance
- BFT
- Décentralisation

===
<!--{.x-large}-->

Sur un cluster de BDD {.large}

- Primaire / Secondaires
- Primaire en écriture / Secondaires en lecture
- Secondaires en réplication
- ⇒ Cyclique {.fragment .fade-up}

===
<!--{.x-large}-->

Sur une Blockchain {.large}

- Tous les nodes en écriture
- Validation par consensus
- Copie complète du travail

===
<!--{.punchline}-->

::Imaginez::{.x-small}
Git ::vs::{.x-small} SVN

===

### Automatisation

« Smart Contracts »
<!--{p:.xx-large}-->

===
<!--{.x-large}-->

1. Code ==certifié== auto-exécuté
2. À chaque transaction,
   ⇒ Smart Contracts

===

@[giphy]({"token":"WQ2QkcQFtG4eI", "caption":"Allez, je vous raconte une histoire…", "className":"medium"})
