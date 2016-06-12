name: cover
class: middle

# Webapps & Intégration : Protips

Des astuces pour des interfaces aux poils soyeux

.ref[
  [talks.m4dz.net/webapps-protips/](http://talks.m4dz.net/webapps-protips/)
]


---
name: speaker
class: middle, center

![mad hatter](./img/mad-hatter.gif)

# m4dz

**Happy Dev UI & Quality defender**

.extras[
[m4dz.net](https://m4dz.net) | [@m4d_z](https://twitter.com/m4d_z) | PGP [7D969710](http://m4dz.net/7D969710.asc)
]


.org[
## ![Cozy Cloud](./img/cozy.svg)

.extras[
  [cozy.io](https://cozy.io)
]
]


---
class: single, important, inverse, middle

# Webapp, Webpage, kézako ?, think different !


---
class: punchline, bottom

> Le Web est, et restera encore longtemps, un métier d'artisan passionné.

--

_Moi_, Paris Web, 2010 (je crois)


---
class: placeholder, inverse, middle, center
background-image: url(./img/placeholders/tools.jpg)

# CSS pour les braves


---
layout: true

.breadcrumb[CSS pour les braves]


---
class: single, middle, center, inverse

# Ne vous limitez pas aux sélecteurs standards


---
# DOM Tree

- Enfants directs : `div > a { }`
- Adjacents directs : `.bar + . foo { }`
- Adjacents : `.bar ~ .foo { }`

---
# Attributs

- Nom : `[lang] { }`
- _Hyphen_ : `[lang|=fr] {/* fr-FR */}`
- Suffixe : `[href$=.pdf] { }`

---
# Pseudo-classes

- Premier élément : `p:first-child { }`
- n-ième élément : `p:nth-child(2n) { }`
- élément vide : `.wrapper:empty { }`
- négative : `.foo:not(.bar) { }`


---
# Pseudo-éléments

- `div::before { }`
- `div::after { }`
- `div::placeholder { }`
- `div::backdrop { }`


---
class: bottom-up, middle, center

![codrops](./img/resources/codrops.png)

# Codrops CSS Reference

[tympanus.net/codrops/css_reference/](http://tympanus.net/codrops/css_reference/)


---
# Gare à la spécificité

.caption[[!important -] [inline -] &lt;ID> - &lt;attr / class / pseudo-class> - &lt;tag>]

.plain[
```css
div { /* 0-0-1 | 1 */ }
div > span { /* 0-0-2 | 2 */ }
div .foo { /* 0-1-1 | 11 */ }
#bar .foo { /* 1-1-0 | 110 */ }
div { color: red !important /* 1-0-0-0-1 | 10001 */ }
```
]


---
class: bottom-up, middle

# Specificity CSS

[cssspecificity.com](http://cssspecificity.com) · Calulcator : [specificity.keegan.st](http://specificity.keegan.st)


---
layout: false
class: placeholder, inverse
background-image: url(./img/placeholders/toolbox.jpg)

# HTML5 tags, templates, et layouts


---
layout: true

.breadcrumb[HTML5 tags, templates, et layouts]


---
class: inverse, middle
# Utilisez les balises de zones

`<section>`, `<article>`, `<main>`, `<aside>`


---
class: inverse, middle

# Définissez des espaces

`<nav>`, `<header>`, `<footer>`, `<menu>`


---
.plain[
```html
<body>
  <div class="app">
    <aside>
      <!-- drawer -->
      <nav class="main"><!-- main menu --></nav>
      <nav class="second"><!-- sub-menu (settings, extras) --></nav>
    </aside>

    <main>
      <section></section>
    </main>
  </div>

  <div class="notifications">
    <!-- notification zones -->
  </div>
</body>
```
]


---
class: inverse, middle

# Utilisez des templates

`<template>` ou moteur de template (pug, nunjucks…)


---
# Réutilisez

- Inclusion
- Héritage
- Extension
- Mixins


---
class: single, inverse, middle

# Concevez un markup à granularité fine, facilement factorisable et réutilisable


---
layout: false
class: placeholder, inverse, bottom
background-image: url(./img/placeholders/one-ring-the-lord-of-the-rings-movie.jpg)

# ARIA, pour les gouverner tous


---
layout: true

.breadcrumb[ARIA, pour les gouverner tous]


---
class: punchline, bottom

> WAI-ARIA especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.

[www.w3.org/WAI/intro/aria.php](http://www.w3.org/WAI/intro/aria.php)


---
class: bottom-up, middle

# Donnez du sens

Utilisez l'attribut `role` pour déclarer vos grands types de documents ou de widgets.

[www.w3.org/TR/wai-aria/roles](www.w3.org/TR/wai-aria/roles)

???
- `[role="button"]`
- `[role="dialog"]`
- `[role="menuitem"]`
- `[role="tooltip"]`
- `[role="tree"]`


---
class: bottom-up, middle

# Décrivez vos états

Aria offre une palette d'états descriptifs, nécessaires pour exprimer un état à un instant donné, des relations, des status…

[www.w3.org/TR/wai-aria/states_and_properties](www.w3.org/TR/wai-aria/states_and_properties)


---
- action en cours : `aria-busy`
- élément invisble : `aria-hidden`
- élément inactif : `aria-disabled`
- élément requis : `aria-required`
- relation avec un contrôle : `aria-controls`
- description associée : `aria-describedby`
- conteneur de popup : `aria-haspopup`

---
class: bottom-up, middle

# Déclarez vos composants

Des rôles qui définissent des zones importantes, structurantes pour les layouts.

[www.w3.org/TR/wai-aria/roles#landmark_roles](www.w3.org/TR/wai-aria/roles#landmark_roles)


---
# Layout template
.plain[
```html
<body>
  <div role="application">
    <aside role="navigation">
      <!-- drawer -->
      <nav class="main"><!-- main menu --></nav>
      <nav class="second"><!-- sub-menu (settings, extras) --></nav>
    </aside>

    <main aria-hidden="false">
      <div role="search">
        <input name="search" type="text">
        <i class="check" role="button">validate</i>
      </div>

      <section></section>
    </main>
  </div>

  <div class="notifications" aria-haspopup="false">
    <!-- notification zones -->
  </div>
</body>
```
]


---
layout: false
class: placeholder, inverse, bottom, right
background-image: url(./img/placeholders/moulin-de-craca.jpg)

# Mix'em all!


---
layout: true

.breadcrumb[Mix'em all!]


---
# Layouts

.plain[
```css
/* Application layout */
body,
html {
  width: 100vw;
  height: 100vh;
}

[role=application] {
  display: flex;
}

[role=navigation] {
  position: absolute;
}

main {
  width: 100vw;
}

/* Drawer: visible */
[role=navigation]:target + main {
  transform: translateX(80vw);
}
```
]


---
# States

.plain[
```css
/* Components states */
[aria-hidden=true] {
  display: none;
}

[aria-busy=true] {
  position: relative;
}

[aria-busy=true]::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
  width: 3em;
  height: 3em;
  background: url(data:image/svg+xml,<svg>...</svg>) 50% 50% no-repeat;
}
```
]


---
# Abusez de Flex pour vos layouts

.plain[
```stylus
[role=application]
    display flex
    width   100vw
    height  100vh

    main
        position relative
        flex     1
        display  flex

    [role=menubar]
    [role=region]
        overflow-y auto

    [role=region][aria-expanded=false]
        display none
        flex    0
```
]


---
# Abusez de Flex pour vos layouts (responsives)

.plain[
```stylus
[role=application]
    @media(max-width: em(480px))
        [role=menubar][aria-expanded=true] + main
            transform translateX(85vw)

        main
            position absolute
            top      0
            left     0
            width    100%
            height   100%


    @media(min-width: em(769px))
        main
          &.full [role=region]:first-of-type
              flex-basis 100% !important
```
]


---
class: cards

# EM : règle d'or du responsive

- ![lock](./img/icons/linearicons/lock.svg) On ne touche pas à la base font-size
- ![crop](./img/icons/linearicons/crop.svg) Spacer verticaux (top, bottom), line-height, font-size : tout EM
- ![pencil](./img/icons/linearicons/pencil.svg) Spacers horizontaux : relatifs (em, %)

[lamb.cc/typograph/](http://lamb.cc/typograph/) · [soqr.fr/vertical-rhythm/](http://soqr.fr/vertical-rhythm/)

[www.paris-web.fr/2013/conferences/un-petit-pas-pour-lem-un-grand-pas-pour-le-web.php](http://www.paris-web.fr/2013/conferences/un-petit-pas-pour-lem-un-grand-pas-pour-le-web.php)


---
layout: false
class: placeholder, inverse, middle
background-image: url(./img/placeholders/blueprint.jpg)

# Maintenance


---
layout: true

.breadcrumb[Maintenance]


---
class: cards

# Organisation

- ![book](./img/icons/linearicons/book.svg) Par corpus <small>layouts, fontes, couleurs…</small>
- ![map](./img/icons/linearicons/map.svg) Par composant <small>drawer, searchbar, listes…</small>
- ![layers](./img/icons/linearicons/layers.svg) Groupé par domaine


---
# Organisation

.plain[
```css
mycomponent {
  /* positionnement */
  position: absolute;
  top: 0;
  left: 0;
  /* modèle de boite */
  box-sizing: border-box;
  display: block;
  width: 20em;
  /* spacers */
  margin: 0;
  padding: 1em;
  /* background */
  background-color: grey;
  /* foreground */
  color: black;
  font-size: 1.25em;
  font-weight: normal;
}
```
]


---
# Codebase

.plain[
```txt
styles
  |- base
  |  |- defaults.css
  |  |- boxes.css
  |  |- spacers.css
  |  |- colors.css
  |  `- fonts.css
  |
  |- app
  |  |- layouts.css
  |  |- backgrounds.css
  |  `- foregrounds.css
  |
  |- components
  |  |- drawer
  |  |  |- layouts.css
  |  |  |- foregrounds.css
  |  |  |- ui.css
  |  |  `- index.css
  |  |
  |  `- <...>
  |
  `- app.css
```
]


---
class: single, inverse, middle

# Banissez les sélecteurs trop longs (+4 niveaux), les IDs, et les styles forcés


---
class: single, inverse, middle

# Exploitez les preprocesseurs


---
# Nesting


.plain[
.caption[styles/components/drawer/_layouts.styl]

```stylus
&
    z-index  1
    position absolute
    top      0
    left     0
    right    0
    bottom   0
    padding  1em


[role=button]
    display block
    margin  .5em 0
    padding .68em

    &:hover
        transform scale(1.2)
```
]


---
# Mixin / Functions

.plain[
.caption[styles/base/helpers/_blocks.styl]

```stylus
reset()
    box-sizing border-box
    display    block
    margin     0
    padding    0

vertically-marged(n = 1em)
    margin n 0

vertically-padded(n = 1em)
    padding n 0
```

.caption[styles/base/helpers/_tools.styl]

```stylus
base-font-size ?= 16px

// Convert PX to EM, useful for responsive layouts.
// Usage: width em(600px)    >> output: width: 37.5em;
em(n)
    unit(n / base-font-size, 'em')
```
]


---
# Media-Queries

.plain[
```stylus
/**
 * styles/app/_layouts.styl
 */
main
    display block

    @media-query(min-width: em(769px))
        display flex
```
]


---
class: inverse, middle

# Confiez la compatibilité aux postprocesseurs

PostCSS + autoprefixer, cssnano, mqpacker, colorguard, calc…


---
layout: false
class: placeholder, inverse, bottom
background-image: url(./img/placeholders/motor.jpg)

# Webapps ?


---
layout: true

.breadcrumb[Webapps ?]


---
class: punchline, bottom
background-image: url(./img/resources/minelego4.jpg)

# Faites du déclaratif

Concevez des modules, pour pouvoir les surcharger simplement


---
# Tabpanel

.plain[
```pug
nav(role="tablist")
    ul(role='presentation')
        li(role='tab' aria-controls='infos-panel'
                      aria-selected='true')
          | info
        li(role='tab' aria-controls='notes-panel'
                      aria-selected='false')
          | profile

section#infos-panel(role='tabpanel' aria-hidden='false')
section#notes-panel(role='tabpanel' aria-hidden='true')
```

```coffee
bindTabs = ->
    $('[role=tablist]').on 'click', '[role=tab]', (event) ->
        $panel = $ "##{event.target.getAttribute 'aria-controls'}"

        $('[role=tabpanel]').not($panel).attr 'aria-hidden', true
        $panel.attr 'aria-hidden', false

        $('nav [role=tab]').attr 'aria-selected', false
        $(event.target).attr 'aria-selected', true
```
]


---
# Tooltips

.plain[
```pug
head
    link(rel="stylesheet" href="lib/aria-tips.css")
    script(async src="lib/aria-tips.js" onload="AriaTips.bind()")

body
    button(aria-describedby="tooltip-bottom"
           data-accesskey="ctrl+o")
        | hover me ↓

    p(role="tooltip" id="tooltip-bottom"
                     data-tooltip-direction="bottom"
                     aria-hidden="true")
        | this is the hover description in a tooltip :)
```

.caption[[m4dz.github.io/aria-tips/](http://m4dz.github.io/aria-tips/)]
]

---
class: bottom-up, middle, center, inverse

![star half](./img/icons/linearicons/star-half.svg)

# Utilisez des libs accessibles

[git.io/vrj8P](https://git.io/vrj8P)


---
class: punchline, bottom

# Utilisez un packer…

…capable de fournir des chunks de code (Webpack, Rollup), créez des sprites (SVG), isolez vos composants


---
# CSS Modules

.plain[
```css
.backdrop {}
.prompt {}
.pullquote {}

:global .widget {}
```

```js
import styles from "./style.css"

Component {

  render: => {
    return (
      <div className={"widget " + styles.backdrop}>
        <div className={styles.prompt}>
        </div>
        <div className={styles.pullquote}>
        </div>
     </div>
    )
  }

}
```
]

???
- webpack, browserify, jspm, node, postcss


---
class: single, inverse, middle

# Utilisez un framework front

Vue.js, Riot, React, Bosonic…


---
class: single, inverse, middle

# Concevez votre toolkit !

[github.com/cozy/cozy-ui/wiki/Roadmap](https://github.com/cozy/cozy-ui/wiki/Roadmap)


---
layout: false
class: inverse, placeholder, bottom
background-image: url('./img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !


## Icones :

- [Linear Icons](https://linearicons.com) by Perxis https://perxis.com - [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)

## Fontes :

- Titrage : [Sinzano](http://typodermicfonts.com/sinzano/) by Typodermic http://typodermicfonts.com - [Fontspring webfont EULA](https://www.fontspring.com/licenses_text/lv4e5lv2k2)
- Intertitres & labeur : [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-sans-pro/master/LICENSE.txt)
- Monospace : [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-code-pro/master/LICENSE.txt)

.licence[
.ref[[talks.m4dz.net/webapps-protips/](http://talks.m4dz.net/webapps-protips/)]

disponible sous licence [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
]
