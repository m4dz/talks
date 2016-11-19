name: cover
class: middle

# Slides deck demo

A deck of demo slides with remark

![:ref]

???
```
name:cover
```

Should contains a `.ref` link that point to online version.


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

???
Each speaker can have:
- a picture (rounded is done _via_ CSS)
- a name in `H1`
- a tagline
- more infos (links) in a `.extras` div

Company info can be placed in `.org` div, with:
- name in `H2`
- more infos in `.extras` div


---
layout: true

.breadcrumb[Titles slides]

???

---
class: section, middle, center
background-image: url(../img/placeholders/moulin-de-craca.jpg)

# A new main section

???
```
layout: false
class: section
background-image: url(../img/placeholders/<background>.jpg)
```

Uses a 1280x850 black and white background for main section title.

Should contains a `layout: false` to remove the previous breadcrumb, and be followed by a breadcrumb layout slide.

Add a layout slide with a `.breadcrumb` span to prepend the section title name on each top slides.


---
class: single, center, middle

# A single internal title

???
```
class: single
```

Title only slides uses the `single` class.

Single title uses a huge `H1` font-size to improve title impact.

---
class: single, inverse, center, middle

# A single inverted title

???
```
class: single, inverse
```

Each slide can be inverted in contrast using `class: inverse`


---
class: single, middle

# **A big title that defines a conclusion or an important point**

???
```
H1 > STRONG
```

The `STRONG` tag used in `H1` uses a specific font-family to improve emphasis


---
layout: true

.breadcrumb[Content slides]


---
# Content slides have a main title

???
Each slide have a `H1` title, top-positionned.


---
class: top

# Text content

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.

.right[Praesent libero.]

???
Content can be positionned using the Remark's [alignment built-in classes](https://github.com/gnab/remark/wiki/Formatting#alignment).


---
class: bottom, stickit

# Sometimes, you want the title attached to the content

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

???
```
class: stickit
```

Adding `stickit` class to the slide remove absolute position on title to let it attached to the content.


---
class: middle

# A blockquote content

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Cicero, _Lorem Ipsum_


---
class: middle, center

# Using an image content

![with an image](./rabbit-eating.gif)

--

_you can add a caption to your content_

???
You can emphasis text, too.


---
class: middle, center

# Content can also be a video

**Algorismes ?**

<iframe src="https://www.youtube.com/embed/WT8tOpjTPtA?start=12&end=29&enablejsapi=1" allowfullscreen frameborder="0" height="360" width="640"></iframe>


---
class: middle, inverse

# A code block

```js
window.crypto.subtle.encrypt(/* ... */)
.then(function(encrypted){
  //returns an ArrayBuffer containing the encrypted data
* console.log(new Uint8Array(encrypted));
})
.catch(function(err){
* console.error(err);
});
```

???
Codeblocks always take full-width to preserve alignments.


---
class: middle

You can also have `some content` that may contains `inline` code elements.


---
layout: true

.breadcrumb[bullet points]


---
class: tiles

# A bullets list, w/ icons

- ![#1](../img/icons/linea/basic_book.svg) Book
- ![#2](../img/icons/linea/basic_clock.svg) Simple Clock
- ![#3](../img/icons/linea/basic_globe.svg) Around the world

???
Icons can be "accented" (multi-coloured) by adding `accent` on svg's paths you want to accentuate.

--
- ![#4](../img/icons/linea/basic_usb.svg) USB Key

--
- ![#5](../img/icons/linea/ecommerce_sales.svg) Tags

--
- ![#6](../img/icons/linea/software_eyedropper.svg) Picker


---

# A simple list

- Lorem ipsum `dolor sit amet`, consectetur adipiscing elit.
- Integer nec odio.

--
- Praesent libero.

--
- Sed cursus ante ~~dapibus~~ diam.

--
- Class aptent taciti sociosqu ad litora torquent <small>per conubia nostra, per inceptos himenaeos</small>.


---
layout: true

.breadcrumb[Special contents]


---
class: bottom-up, middle, center

![Info](../img/icons/linea/arrows_info.svg)

# A bottom-up slide

Lorem ipsum `dolor sit amet`, consectetur adipiscing elit

???
A _bottom-up_ slide minor h1 in favor of associated caption. It generally comes with an illustration, and text should appear below it.


---
class: punchline, bottom

![Heart](../img/icons/linea/basic_heart.svg)

# A punchline slide

Lorem ipsum dolor sit amet, consectetur adipiscing elit

???
A punchline is an expressive slide with a minored title and an associated caption. It should have an image that is top-right positionned.


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
- Algorisme : by [Laurent Chemla](https://www.youtube.com/channel/UCFjaRSCKJix-SfsS_hIn6Hw)

## Fontes :

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
