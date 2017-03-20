name: cover
class: middle

# Bundlers et Packers : du site web à l’applicatif web

![:ref]


---
name: speaker
class: center

![mad hatter](../img/mad-hatter.gif)

# m4dz

**Bob le Bricoleur & Quality defender**

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
class: section bottom
background-image: url(../img/placeholders/bulb.jpeg)

# Petit Rappel


---
layout: true

.breadcrumb[Petit Rappel]


---
class: middle center

# JavaScript tooling : c'est compliqué…

![panda crisis](./panda-crisis.gif)


---
class: inverse single middle

<blockquote class="twitter-tweet" data-lang="en" data-align="center"><p lang="en" dir="ltr">1997: Let’s make a website!<br>*fires up vi*<br><br>2007: Let’s make a website!<br>*downloads jQuery*<br>*fires up vi*<br><br>2017: Let’s make a website!<br>😵 <a href="https://t.co/RT4VVnJjNS">pic.twitter.com/RT4VVnJjNS</a></p>&mdash; Thomas Fuchs (@thomasfuchs) <a href="https://twitter.com/thomasfuchs/status/834481271443226627">February 22, 2017</a></blockquote>


---
class: middle

# … et on n'a pas toute la nuit ⏰

- on va parler du front uniquement
- le tour n'est pas exhaustif
- on met en place de façon itérative


---
class: inverse single middle

<blockquote class="twitter-tweet" data-lang="en" data-align="center" data-conversation="none"><p lang="en" dir="ltr">“Tree shaking” is not something magic. You should create a tiny library and see how it works for yourself. Too much misinformation.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/841258118810075138">March 13, 2017</a></blockquote>


---
class: middle stickit inverse

# Objectif

- construire pour le Web
- limiter la friction sur le boostrap
- équiper les devs d'apps


---
layout: false
class: section bottom
background-image: url(../img/placeholders/pen-idea-bulb-paper.jpg)

# Point lexical


---
layout: true

.breadcrumb[Point lexical]


---
class: stickit middle

# Codebase

Le code source de l'application, utilisant des langages parfois non _web-compliant_, parfois mutualisé avec d'autres projets. Habituellement dans `/src` ou `/app`


---
class: stickit middle

# Source

la _codebase_ produite par les développeurs

# Build

les assets _web-compliant_ servis a l'éxecution

# Production

contexte d'éxecution impliquant des notions de performance


---
class: stickit middle

# Bundler

Application visant à rassembler et préparer les assets pour une cible donnée


---
class: stickit middle

# Packer

Application encapsulant un code _web-compliant_ dans le but de le distribuer


---
class: stickit middle

# Transpiler

Éxecutable capable de lire en entrée un code non _web-compliant_ pour le traduire en asset _web-compliant_


---
class: stickit middle

# Task Runner

Éxecuteur de tâches, capable d'automatiser des processus pour les industrialiser


---
class: stickit middle

# Static-site generator

Application visant à rassembler des sources de données pour les injecter dans des _templates_ et produire des pages HTML


---
layout: false
class: section
background-image: url(../img/placeholders/pencil-eraser-and-ruler.jpeg)

# Concevoir pour le Web


---
layout: true

.breadcrumb[Concevoir pour le Web]


---
class: middle

# Une codebase mutualisée

- utilisée par les applis web
- packagée pour le mobile
- en appli desktop (electron…)


---
class: middle

# Packager pour différentes cibles

- Navigateurs desktop
- Navigateurs mobiles et tablettes
- App devices, desktop…
- IoT
- Server (Node.js)


---
class: middle single

# Gérer intelligemment les dépendances


---
class: middle

# La _toolbox_ front

- bibliothèques (jQuery, i18n…)
- framework(s) (React, Vue.js, Angular, Redux…)
- Tests (Jest, Mocha, Tape…)
- Styles
- Locales
- SVG, WebWorkers, Offline, assets…


---
class: tiles, middle

# Distribuer pour le web

- ![#1](../img/icons/linea/basic_hammer.svg) build
- ![#2](../img/icons/linea/basic_folder_multiple.svg) bundle
- ![#3](../img/icons/linea/basic_archive_full.svg) package


---
class: middle

# Les candidats

- **build** : _babel_, bubblé, preprocesseurs CSS, postCSS
- **bundle** : brunch, _webpack_, rollup.js, browserify
- **package** : cordova, electron
- **task runner** : grunt, gulp, broccoli, _npm scripts_


---
layout: false
class: section bottom
background-image: url(../img/placeholders/flowers-teddy-bear-toy.jpeg)

# Partage et Mutualisation


---
layout: true

.breadcrumb[Partage et Mutualisation]


---
class: middle

# Le build : Webpack configs

- fichiers de config modulaires
```txt
config
├── webpack.config.base.js
├── webpack.config.cozy-ui.js
├── webpack.config.dev.js
├── webpack.config.preact.js
└── webpack.config.prod.js
```
- définitions de targets
```txt
config
├── webpack.target.browser.js
└── webpack.target.mobile.js
```


---
class: middle

# Le build : environnements

- export des variables
```txt
config
└── webpack.vars.js
```
- flip sur les variables d'environnement
```js
const production = /:production$/.test(process.env.NODE_ENV)
const target = process.env.NODE_ENV.match(/^(\w+):/)[1]
```
```sh
$ NODE_ENV=browser:production npm run commons:build
```


---
class: middle

# Les dépendances : Yarn

- plus rapide et plus fiable que NPM
- versionne au commit près
- utilise une arborescence à plat


---
class: middle

# La transpilation : Babel

- cible précisément les navigateurs
- polyfill automatique
- complexe à optimiser en build

```json
  "presets": [
    ["env", {
      "targets": {
        "chrome": 42,
        "browsers": ["last 2 versions"]
      },
      "useBuiltIns": true
    }],
    "react"
  ]
```


---
class: middle

# L'optim CSS : PostCSS

- autoprefixer
- améliorations en vrac (MQPack, minification, etc)
- config distributable
- extensible


---
class: middle inverse

# **One ring to rule them all**

## [Cozy-template](https://github.com/cozy/cozy-template/tree/preact)

- configs de base (webpack, yarn, babel, postcss…)
- frameworks (preact, jest, polyglot…)
- docs (readme, contributing…)
- [_hello world_](https://github.com/cozy/cozy-template/tree/preact/src)


---
layout: false
class: section middle
background-image: url(../img/placeholders/construction-work-carpenter-tools.jpg)

# Local DevTools


---
layout: true

.breadcrumb[Local DevTools]


---
class: middle stickit inverse

# Objectif

- abaisser la marche d'entrée
- améliorer la maintenance / évolution
- faciliter les contributions
- s'ouvrir aux communautées


---
class: middle

# Les scripts Yarn / NPM

- des tâches haut-niveau
- exécutions shell / env
- découpage en micro-scripts
- encapsule l'environnement Node.js


---
class: middle

# Common tasks

- `build` / `build:<target>`<br><small>(`browser` par défaut)</small>
- `watch` / `watch:standalone`
- `test`


---
class: middle

# Cas du watch

- versions non-minifiées
- build sur le FS / en RAM <small>(pour `standalone`)</small>
- paralléliser un maximum les tâches


---
class: middle

# Testing

- Jest : runner et test de composants
- Sinon.js : mock, stub, spy
- Docker : environnement d'éxecution en sandbox


---
class: middle

# Hot Module Reload (**HMR**)

- uniquement en mode dev
- complexe à intégrer en environnement serveur (Flow ?)
- Browsersync pour le multidevices


---
class: middle

# Sourcemaps

- essentiel dans le debug
- attention aux temps de rebuild
- cas particuliers sur CSS Modules, langages transpilés…


---
class: single inverse middle

# Générateurs de configs

## React-create-app, Vue.js-CLI…


---
class: middle

# Documentations

- KSS automatique + template
- Storybook
- Cookbooks


---
layout: false
class: section middle
background-image: url(../img/placeholders/industry-grinder-steel-no-person.jpg)

# Outils externes


---
layout: true

.breadcrumb[Outils externes]


---
class: middle

# Code

- [Github](https://github.cm/cozy)
- [Framagit](https://framagit.org) / Gitlab
- [Bitbucket](https://bitbucket.org/)


---
class: middle

# i18n

- [Transifex](transifex.com/cozy)
- [Weblate](https://weblate.org/en/)
- [Polyglot](http://airbnb.io/polyglot.js/)
- [date.fns](https://date-fns.org/)
- [Globalize.js](https://github.com/globalizejs/globalize)


---
class: middle

# Intégration Continue

- [Travis](https://travis-ci.org/cozy)
- [Gitlab CI](https://about.gitlab.com/gitlab-ci/)
- [Browserstack](https://www.browserstack.com/)
- [Greenkeeper](https://greenkeeper.io/)
- [Code Climate](https://codeclimate.com/)


---
layout: false
class: section right bottom
background-image: url(../img/placeholders/primate-ape-thinking-mimic.jpg)

# Et si… ?


---
layout: true

.breadcrumb[Et si… ?]


---
class: middle

# … je veux optimiser les sorties ?

- c'est un _vrai_ travail d'expertise
- pas de réelle automatisation possible

```js
var _ require = require('react'),
    createElement = _require.createElement

createElement('div', null,
  createElement('span', null,
    createElement(Foo, null)
  )
)
```
```js
var e = require('react'), t = e.createElement
t('div', null, t('span', null, t(Foo, null)))
```


---
class: middle

# … je fais une lib ?

- préparez les contextes de sortie
- faites de l'UMD
- nommez les libs
- distribuez différentes _flavors_ (Habituellement dans `dist`)
- injectez / mockez les dépendances
- → [Authoring libraries with Webpack](https://webpack.js.org/guides/author-libraries/)


---
class: center middle

# … je passe à HTTP/2

.large[![Trash my brain](./trash.gif)]


---
layout: false
class: section right bottom
background-image: url(./teamwork.gif)

# Contribuez


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
