name: cover
class: middle

# Functional Web Apps

Stabilité et robustesse pour vos applications web

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
class: section, center
background-image: url(../img/placeholders/trees-building.jpg)

# Applications web : © 2016


---
layout: true

.breadcrumb[Applications web : © 2016]


---
class: middle, center

# Les webapps à-la-papa

![I know you young'uns think we old-timers aren't any fun](./old-timers.gif)


---
class: middle

# Libs & Frameworks

- jQuery
- Backbone, Aurelia, Ampersand…
- Angular, Ember…

.center.small[![sad guy](./sad.gif)]


---
class: middle, center

# Les webapps modernes

![House exploded by a train](./train.gif)


---
class: stickit, middle, center, inverse

# React 🎉

![Happy dance](./dance.gif)

---
class: middle

# React problems <small>(imho)</small>

- not truly reactive
- desperately bloated
- monocultural

--

.center.small[![explosion](./explosion.gif)]


---
class: middle

# Mais aussi…

- Angular 2
- Cycle.js
- Riot
- Meteor

[The state of JavaScript 2016](
https://medium.com/@sachagreif/the-state-of-javascript-front-end-frameworks-1a2d8a61510) - Medium, by _Sacha Greif_

---
layout: false
class: section, middle
background-image: url(../img/placeholders/person-looking-searching-clean.jpg)

# Functional


---
layout: true

.breadcrumb[Functional]


---
class: punchline, inverse, bottom

# Permaculture

> La permaculture est un mode de production d'agriculture qui prend en compte les entrants et les sortants[…]. La philosophie est très proche de la manière dont on travaille avec les programmes et les données.

Thomas Parisot<br>[Design d'architecture modulaire à la BBC](https://www.youtube.com/watch?v=unv-G5RlWkg)


---
class: middle, center

# Think Different™

![mind blow](./mind-blow.gif)

---

# Functional programming

- _Quoi ?_ Tout est fonction (mathématique)

```js
function foo(x, y, z) {
  y = y * x
  z = z * x
  return [y, z]
}
```

???

- Functional programming is about using functions as units of abstraction and composing them to build a system


---

# Functional programming

- _Quoi ?_ Tout est fonction (mathématique)
- _Comment ?_ Tout est composition

```js
function sum(x, y) { return x + y }
function mult(x, y) { return x * y }
var multAndSum = compose(mult, sum)
// 5 + (3 * 4)
multAndSum(3, 4, 5)
```


---
# Functional programming

- _Quoi ?_ Tout est fonction (mathématique)
- _Comment ?_ Tout est composition
- _Pourquoi ?_ Immutabilité, Closure, Récursion…

(basiquement, tout est une base de `map/reduce`)


---
class: single, middle, inverse

# Simplicité


---
class: single, middle, inverse

# Flexibilité


---
class: single, middle, inverse

# Prévisibilité


---
class: single, middle, inverse

# Testabilité


---
layout: false
class: section, middle, center
background-image: url(../img/placeholders/construction-work-carpenter-tools.jpg)

# Logiques réactives


---
layout: true

.breadcrumb[Logiques réactives]


---
class: middle

# Streams & Cells

.large[![Reactive architecture](./reactive_architecture.png)]

[JavaScript Reactive Programming](https://vincenttunru.com/Javascript-reactive-programming/) by _Vincent Tunru_


---
class: single, middle, center

# Librairies !

![Toy soldier looking](./toy-soldier-toystory.gif)

---
class: tiles, logos, middle

- ![](./Kefir.svg) Kefir (Ramda)
- ![](./rxjs.png) RxJS
- ![](./bacon.png) Bacon

---
class: single, middle, inverse

# Most.js

[github://cujojs/most](https://github.com/cujojs/most)


---
class: middle

# Au-delà du DOM

- Service Workers

--

- Push Notifications

--

- Websockets


---
layout: false
class: section, middle
background-image: url(../img/placeholders/tools.jpg)

# Soyez créatifs !


---
layout: true

.breadcrumb[Be visual]


---
class: single, middle, inverse

# **Définissez une unique, simple fontaine de données**


---
class: single, middle

# Ne vous attardez pas sur mutabilité vs immutabilité


---
class: middle, center

# Choisissez un magasin de données, et gardez-le propre

![I want to break free](./i-want-to-break-free-o.gif)


---
class: single, middle

# Utilisez/Concevez des Interfaces Réactives


---
class: tiles, logos, middle

- ![](./vue-js.png) Vue.js
- ![](./riotjs.png) Riot


---
class: middle

# Retour aux fondamentaux

- JS propulse les vues qui affichent la donnée

--

- HTML stocke les états d'interfaces (ARIA)

--

- CSS propulses animations et transitions

--

- WebAnimation et WebGL pour la haute-disponibilité de rendu


---

# _Functional by design_

- Atomic Design
- CSS Modules

.center[![](./slow-clap-bear-o.gif)]

---
layout: false
class: section, middle, right
background-image: url(../img/placeholders/portrait-bird-nature-wild.jpg)

# Is it a bird?


---
layout: true

.breadcrumb[Is it a bird?]


---
class: single, middle

# Dis donc, est-ce que c'est pas se compliquer un tout petit peu la vie tout ça ?


---
class: stickit, middle

# Ok, bah alors autant partir sur Elm, non ?

ou _Cycle.js_? Ou n'importe quelle solution intégrant Reactive et Functionnal programming nativement ?


---
class: single, middle, inverse

# Soyez simples et agnostiques <sup>(<abbr title="Keep It Simply Simple">KISS</abbr>)</sup>


---
class: single, middle, inverse

Ce n'est que…

# **la philosophie Unix**


---
layout: false
class: section, bottom
background-image: url('../img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !

## Iconographie / Medias

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
