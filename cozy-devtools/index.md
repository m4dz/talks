name: cover
class: middle

# Cozy DevTools

![:ref]


---
name: speaker
class: center

![mad hatter](../img/mad-hatter.gif)

# m4dz

**Happy Dev UI & Quality defender**

.extras[
[m4dz.net](https://m4dz.net) | [@m4d_z](https://twitter.com/m4d_z) | PGP [0xD4627C417D969710](http://m4dz.net/0xD4627C417D969710.asc)
]


.org[
## ![Cozy Cloud](../img/cozy.svg)

.extras[
  [cozy.io](https://cozy.io)
]
]


---
layout: false
class: section
background-image: url(../img/placeholders/)

# Petit rappel


---
layout: true

.breadcrumb[Petit rappel]


---

???

messy GIF


---

- on va parler des apps uniquement
- le tour n'est pas exhaustif
- on met en place de façon itérative


---


???
expliquer la rocket


---
layout: false
class: section
background-image: url(../img/placeholders/)

# Concevoir de l'applicatif web


---
layout: true

.breadcrumb[Concevoir de l'applicatif web]


---

# Une codebase mutualisée

- utilisée par les applis web
- packagée pour le mobile
- 🚀 en appli desktop (electron…) ?


---

# Librairies internes

- cozy-client-js
- cozy-bar
- cozy-ui

---

# Les choix techniques front

- Preact + Preact-compat
- Jest
- Stylus
- i18n : dict JSON
- SVG / 🚀 WebWorkers / 🚀 Offline / etc


---

# Distribuer pour le web

1. build
2. bundle
3. package


---
layout: false
class: section
background-image: url(../img/placeholders/)

# Partager un socle commun


---
layout: true

.breadcrumb[Partager un socle commun]


---

# Le build : Webpack

- fichiers de config modulaires
- définitions de targets
- flip sur les variables d'environnement


---

# Les dépendances : Yarn

- plus rapide et plus fiable que NPM
- versionne au commit près
- utilise une arborescence à plat


---

# L'optim CSS : PostCSS

- autoprefixer
- améliorations en vrac (MQPack, minification, etc)
- config distributable
- extensible


---

# _One ring to rule them all_ : Cozy-template

- configs de base (webpack, yarn, postcss…)
- frameworks (preact, jest, polyglot…)
- docs (readme, contributing…)
- _hello world_

???

Ajouter le lien


---
layout: false
class: section
background-image: url(../img/placeholders/)

# Local DevTools


---
layout: true

.breadcrumb[Local DevTools]


---

# Les scripts Yarn / NPM

- des tâches haut-niveau
- exécutions shell / env
- découpage en micro-scripts
- encapsule l'environnement Node.js


---

# Common tasks

- `build` / `build:<target>` (`browser` par défaut)
- `watch` / `watch:standalone`
- `test`


---

# Cas du watch

- versions non-minifiées
- build sur le FS (en RAM pour `standalone`)


---
layout: false
class: section
background-image: url(../img/placeholders/)

# Outils externes


---
layout: true

.breadcrumb[Outils externes]


---

# Code

- Github
- 🚀 Gitlab / Framagit


---

# i18n

- Transifex
- Polyglot
- date.fns


---

# Intégration Continue

- Travis
- 🚀 Browserstack


---

# Dépendances

- Greenkeeper


---
layout: false
class: section
background-image: url(../img/placeholders/)

# 🚀 McFly


---
layout: true

.breadcrumb[🚀 McFly]


---

# HMR

- uniquement disponible en `standalone`
- à intégrer à la stack
- uniquement en mode dev


---

# Sourcemaps

- inconsistences à résoudre
- temps de (re)build à améliorer
- support des CSS Modules


---

# Webpack@2.x

- webpack@1.x est maintenant _deprecated_
- expérimentation en cours sur la cozy-bar
- ☢ essais sur Roll-up


---

# Générateur de templates / configs

- distribuer les configs externes dans des modules
- (re)générer `package.json` à la volée
- scaffold / boostrap d'application


---

# Documentations

???

À compléter w/ GoOz


---
layout: false
class: section
background-image: url(../img/placeholders/)

# Aidez-nous =] !


---
layout: false
class: section, bottom
background-image: url('../img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !

## Iconographie / Médias

- Icônes : [Linea](http://linea.io/) - [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## Fontes

- Titrage : [Sinzano](http://typodermicfonts.com/sinzano/) by Typodermic http://typodermicfonts.com - [Fontspring webfont EULA](https://www.fontspring.com/licenses_text/lv4e5lv2k2)
- Intertitres & labeur : [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-sans-pro/master/LICENSE.txt)
- Monospace : [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-code-pro/master/LICENSE.txt)

## Outils

- Moteur de présentation : [Remark](https://github.com/gnab/remark)

.licence[
![Cozy Cloud](../img/cozy.svg)

![:ref]

disponible sous licence [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
]
