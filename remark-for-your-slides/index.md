name: cover
class: middle
count: false

# Remark

Des slides plus belles pour des gens de goût

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
class: punchline, bottom, inverse

.round[![Confucius](./Confucius_Tang_Dynasty.jpg)]

> Une conférence sans un bon support, c'est aussi absurde qu'un poisson sans bicyclette.

Confucius (551 - 479 BC)


---
layout: false
class: section, center
background-image: url(../img/placeholders/man-on-bench.jpeg)

# Vous avez dit « Conférence » ?


---
layout: true

.breadcrumb[Vous avez dit « Conférence » ?]


---
class: middle

# Rédiger

1. Formuler l'idée principale
2. Dégager les grandes sections
3. Intégrer les idées
4. Mettre en forme


---
class: middle

# Quel format ?

- Plan ➡ **papier**
- Notes ➡ **Markdown**
- Slides ➡ **HTML**
- Diffusion / Archivage ➡ **PDF**


---
class: middle

# Toolchain

- Metalsmith / Jekyll
- Templates Jade
- Styles SASS
- Grunt / Gulp
- Reveal.js
- Git Subtree


---
class: bottom-up, center
# Toolchain

![WTF‽](./wtf.gif)


---
class: middle

# Cahier des charges

- Source(s) Markdown
- Imports de slides externes
- Support de fonctions
- API
- Agnostique
- Pas de toolchain


---
class: single, middle, inverse

# **Remark !**

[Github://gnab:remark](https://github.com/gnab/remark)


---
layout: false
class: section
background-image: url(../img/placeholders/pen-idea-bulb-paper.jpg)

# Remark powered


---
layout: true

.breadcrumb[Remark powered]


---
class: middle

# Slides Markdown

- Syntaxe markdown GFM
- Embed ou externe
- Quelques ajustements custom


---
class: middle

# Formattage

```markdown
# Une première slide

*---

# une seconde slide

*???
Ici les notes de ma seconde slide
```

```markdown
# Une liste

- un premier item
- un second

*--
- un troisième, incrémental
```


---
class: middle

# Attributs

- `name` : ancre/ID
- `class` : classes sur le conteneur
- `background-image` : 🤔
- `count: false` : désactive le compteur


---
class: middle

# Attributs

```markdown
name: cover
class: hello, budies
count: false

# Ma slide de couverture =]

Le contenu qui va bien dedans !
```


---
class: middle

# Built-in classes

## Alignement

- horizontal : **left**, center, right
- vertical: **top**, middle, bottom

## Contenus (convention)

- inverse


---
class: middle

# Content classes

```markdown
.block[
Wrap le contenu dans une <div class="block"/>
]

.inline[wrap le contenu dans un <span class="inline"/>]

.red.bold[*] Les classes sont cumulatives
```

_ProTip_: fonctionne aussi sur les alignements :)


---
class: middle

# Layouts et Templates

```markdown
layout: true

# Ma slide (masquée)(ohé ohé)

---

## Une sous-section

---

## Une autre sous-section

```

```markdown
name: tpl

# Ma slide (visible)

---
...
---
template: tpl

Le contenu ajouté à la slide `tpl`
```


---
layout: false
class: section, middle
background-image: url(../img/placeholders/flowers-teddy-bear-toy.jpeg)

# Bien démarrer


---
layout: true

.breadcrumb[Bien démarrer]


---

# Par défaut

- pas de CSS
- pas de snippets
- juste un script JS à inclure

.small.center[![mind blow](./mindblow.gif)]


---
class: middle

# Mes Presets

- Templates
- Snippets
- Styles Stylus _a-la-Cozy_
- Classes de contenus
- Styles de slides
- Icônes (Linea)

???
- Pas de build tool
- Server web / Compiler de l'IDE

---
class: bottom-up, middle, inverse

# **Mes Presets**

**[http://talks.m4dz.net/demo/#p1](http://talks.m4dz.net/demo/#p1)**

**[https://github.com/m4dz/talks@master](https://github.com/m4dz/talks/tree/master)**


---
class: middle

# ToDo

- Mode mobile
- Export PDF
- Macro de licensing
- Documentation du README
- Intégration d'[asciinema](https://asciinema.org/)

---
layout: false
class: section, right, middle
background-image: url(../img/placeholders/strength-strong-toy-action-figure.jpg)

# Plus d'infos ?


---
layout: true

.breadcrumb[Plus d'infos ?]


---
class: middle

# ProTips

- Un mode présentateur : **ⓟ**
- Un mode miroir : **ⓒ**
- Un timer **réinitialisable** : **ⓣ**


---
class: tiles, middle, center
# Icones (presets)

- ![Vector](../img/icons/linea/software_add_vectorpoint.svg) Support SVG
- ![Switch](../img/icons/linea/music_repeat_button.svg) Injection automatique


---
class: middle
# Macros

Permet de définir des zones dynamiques (import, injection, etc)

```markdown
![:my-macro arg1, arg2](extra)
```

```js
remark.macros.my-macro = function(arg1, arg2) {
  let extra = this;
  return '<p>injected content</p>';
}
```

[Github://Macro support](https://github.com/gnab/remark/issues/72#issuecomment-62225566)

---
class: middle

# API

- navigation
  - `gotoNextSlide()`
  - `gotoSlide(n)`
  - `pause`
  - `resume`
- events
  - `beforeShowSlide`
  - `afterShowSlide`
  - `hideSlide`
- `slide` object


---
class: bottom-up, middle, inverse

# **Documentation**

**[https://github.com/gnab/remark/wiki](https://github.com/gnab/remark/wiki)**


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
- Confucius - Portrait par Wu Daozi - [source wikimedia](https://commons.wikimedia.org/wiki/File:Confucius_Tang_Dynasty.jpg#/media/File:Confucius_Tang_Dynasty.jpg)

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
