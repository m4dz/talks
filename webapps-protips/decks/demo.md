name: cover
class: middle

# Slides deck demo

A deck of demo slides with remark

.ref[
  [talks.m4dz.net/slides-deck-demo/](https://talks.m4dz.net/slides-deck-demo/)
]

???
`name:cover`

should contains a `.ref` link that point to online version


---
name: speaker
class: middle, center

![mad hatter](./img/mad-hatter.gif)

# m4dz

**Happy Dev UI**

.extras[
[m4dz.net](https://m4dz.net) | @m4d_z | PGP [7D969710](http://m4dz.net/7D969710.asc)
]


.org[
  ## ![Cozy Cloud](./img/cozy.svg)

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
class: placeholder, inverse, middle, center

# An interstitial for the 1st section


---
layout: true

.breadcrumb[
  The internal breadcrumb title
]


---
# Another internal slide

.plain[
  ![with an image](./img/icons/185111 - monocle mustache streamline.svg)
]


---
class: bottom-up, middle, center

![with an image](./img/icons/185039 - earth globe streamline.svg)

# A bottom-up slide

a slug line to complete the title


---
class: single, inverse, center, middle

# An internal title only


---
class: punchline, bottom
background-image: url('img/icons/185021 - bomb bug.svg')


# A content title

with a punchline inside:
this punchline is a bit of text that have a major influence to the rest of the presentation


---
# Images and placeholders


.plain[
  .caption[(using a top caption)]

  ![and an image](./img/deal-with-it.gif)

  .caption[and a bottom-caption]
]

---
class: inverse

# A slide with a video

.plain[
  <iframe src="https://www.youtube.com/embed/WT8tOpjTPtA?start=12&end=29&enablejsapi=1" allowfullscreen frameborder="0" height="360" width="640"></iframe>
]


---
class: inverse, single, important, middle

# A big title that defines a conclusion or an important point


---
class: cards

# A bullets list, w/ icons

- ![#1](./img/icons/185049 - design pencil rule streamline.svg) Design Pencil
- ![#2](./img/icons/185084 - crown king streamline.svg) A crowd king streamlined
- ![#3](./img/icons/185113 - coffee streamline.svg) A simple coffee pot

--
- ![#4](./img/icons/185048 - pen streamline.svg) A pen

--
- ![#5](./img/icons/185054 - painting roll streamline.svg) A painting roll

--
- ![#6](./img/icons/185080 - bubble love streamline talk.svg) Bubble love!


---
# Another list, without icons

- calcul d'une empreinte identifiant la source
- non-réversible

--
- ~~MD5~~ / ~~SHA~~ / BCrypt (blowfish)


---
# A bullet list w/ tiny subtitles

- besoin de données imprévisibles
- méthodes crypto CSPRNG <small>(pas /dev/urandom directement, utilisez les méthodes des libs crypto)</small>
- IV (Vecteur d'Initialisation) <small>(bytes-block utilisés en initialisation d'un algo de chiffrement pour assurer son caractère unique)</small>


---
# A coding slide

.plain[
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
]


---
layout: false
class: inverse, placeholder, bottom
background-image: url('./img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !

## Iconographie / Médias :

- Algorisme : by [Laurent Chemla](https://www.youtube.com/channel/UCFjaRSCKJix-SfsS_hIn6Hw)
- Chiffre de Vigenère : [source wikipedia](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)
- Enigma : [source Nothern Ireland War Memorial](http://www.niwarmemorial.org/object-of-the-month/e-is-for-enigma-machine/)
- XKCD : [Security](https://xkcd.com/538/)
- Diffie-Hellman Key exchange : [source wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
- SSL Diagram : [source IdenTrust](https://www.identrustssl.co.uk/learn.html)

## Fontes :

- Titrage : [Sinzano](http://www.myfonts.com/fonts/typodermic/sinzano/regular/)
- Labeur : [Overlock](http://www.whatfontis.com/Overlock-Regular.font)
- Monospace : [Source Code Pro](http://www.whatfontis.com/Source-Code-Pro.font)

.licence[
.ref[[talks.m4dz.net/crypto-pour-les-devs/](http://talks.m4dz.net/crypto-pour-les-devs/)]

disponible sous licence [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
]
