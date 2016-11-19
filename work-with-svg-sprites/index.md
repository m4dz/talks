name: cover
class: middle

# Et si on utilisait <small>(des sprites)</small> SVG ?

Parce que c'est toujours plus beau quand c'est net

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
class: section, middle, right
background-image: url(../img/placeholders/animal-close-up-view-africa-wilderness.jpg)

# SVG, kézako ?


---
layout: true

.breadcrumb[SVG, kézako ?]


---
class: single, middle, center

# Bitmap vs SVG


---
class: inverse, middle

# Quid SVG ?

```svg
<svg viewBox="0 0 257 201"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="M139.172 124h-26.344C104.65 124 ..." fill="#FFF"/>
  <g stroke="#A7B5C6">
    <path d="M130.5 179.5h-4v21h23v-21h-4"/>
    <path d="M133.5 181.5h-3v-4h3zm12 0h-3v-4h3zm-12-2h9m-16 ..."/>
  </g>
</svg>
```


---
class: bottom-up, middle, inverse

# W3C Working Group

[https://svgwg.org/](https://svgwg.org/)


---
class: tiles

# Optimization ?

- ![editor](../img/icons/linea/basic_notebook_pencil.svg) editeurs
- ![compress](../img/icons/linea/arrows_shrink_diagonal1.svg) compression
- ![optimize](../img/icons/linea/basic_settings.svg) optimizers

---
class: bottom-up, middle, inverse

# Outils

- [SVGO](https://github.com/svg/svgo)
- [SVGOMG Online tool](https://jakearchibald.github.io/svgomg/)


---
layout: false
class: section, middle
background-image: url(../img/placeholders/industry-grinder-steel-no-person.jpg)

# Utiliser SVG


---
layout: true

.breadcrumb[Utiliser SVG]


---
class: stickit, middle
# `<img />` tag

```jade
img(src="./assets/logo.svg" alt="Cozy Cloud logo")
```


---
class: stickit, middle

# background-image

```jade
a.logo(href="/") Cozy Cloud
```

```stylus
.logo
  display         block
  width           3em
  height          3em
  background      url(./assets/logo.svg)
  background-size 3em 3em
  text-indent     -9999em
```


---
class: middle

# inline

## fallback

```jade
object.logo(type="image/svg+xml" data="./assets/logo.svg")
  | Fallback logo
```

```stylus
.no-svg .logo
  background url(./assets/logo.png)
```

## natif

```jade
svg.logo
  path(d="...")
```


---
class: stickit, middle, inverse

# 🎁 DATA-URI

```stylus
.logo
  background: url("data:image/svg+xml;base64,[data]")
```

--

```stylus
.logo
  // background: url("data:image/svg+xml;charset=UTF-8,<svg ...>")
  background: url("data:image/svg+xml;charset=UTF-8,%3Csvg ...'")
```


---
layout: false
class: section, center
background-image: url(../img/placeholders/pencil-eraser-and-ruler.jpeg)

# Scaling SVG


---
layout: true

.breadcrumb[Scaling SVG]


---

# Choisis ton combat

- fit and preserve
- fit and distort
- max available width
- non-uniform


---

# `width` / `height` attributes

- `<img>` : 🚫 IE

--

- `<object>` / `<iframe>` : 🚫 scale

--

- inline : CSS casse le ratio

--

.center.small[![That escaladed quickly](./that-escalated-quickly.jpg)]


---
class: stickit, middle, inverse
# viewBox !

```svg
<svg viewBox="0 0 257 201" ...>...</svg>
```

--

## 🎁 `preserveAspectRatio` attribute

```svg
<svg viewBox="0 0 257 201" preserveAspectRatio="none"...>...</svg>
```


---

# Techniques

- `<img>` + `width` fixed + `height: auto`
- padding-bottom hack

```styl
svg
  width            100%
  height           0
  padding          0
  padding-bottom   calc(100% * 80 / 200)
  background-image url(./assets/graphics_200x80.svg)
  background-size  cover
```

???

- padding-bottom hack : inline, background-image, container


---
layout: false
class: section, right
background-image: url(../img/placeholders/primate-ape-thinking-mimic.jpg)

# Donc, des sprites…


---
layout: true

.breadcrumb[Donc, des sprites…]


---
class: single, middle

# C'est quoi, un sprite SVG&nbsp;?


---

# Technique

- `<defs>`
- inline de la source
- `<use xlink:href="#logo">`

```jade
svg(viewBox="0 0 20 20"): use(xlink:href="#logo")
```


---
class: middle

# Moar Styles ?

```jade
svg.logo(viewBox="0 0 20 20"): use(xlink:href="#logo")
```

```stylus
.logo
  background-color $cozyblue
  border-radius    50%
  box-shadow       0 2px 5px $grey-02

  &:hover
    background-color $cozyorangeisthenewblue
```


---
class: middle

# Catch'em all!

```js
module.exports = {
  module: loaders: [...,
    {
        test: /\.svg$/,
        include: /sprites/,
        loader: 'svg-sprite?name=[name]_[hash]'
    }
  ]
}
```

```jade
svg: use(xlink:href=require('./assets/logo.svg'))
```

Webpack [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader)


---
layout: false
class: section, bottom
background-image: url('../img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !

## Iconographie / Médias :

- Icônes : [Linea](http://linea.io/) - [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## Fontes :

- Titrage : [Sinzano](http://typodermicfonts.com/sinzano/) by Typodermic http://typodermicfonts.com - [Fontspring webfont EULA](https://www.fontspring.com/licenses_text/lv4e5lv2k2)
- Intertitres & labeur : [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-sans-pro/master/LICENSE.txt)
- Monospace : [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-code-pro/master/LICENSE.txt)

## Outils

- Moteur de présentation : [Remark](https://github.com/gnab/remark)

## Resources

- [Using SVG](https://css-tricks.com/using-svg/) - CSS Tricks
- [How to Scale SVG](https://css-tricks.com/scale-svg/) - CSS Tricks
- [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) - CSS Tricks

.licence[
![Cozy Cloud](../img/cozy.svg)

![:ref]

disponible sous licence [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
]
