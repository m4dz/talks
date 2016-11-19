name: cover
class: middle

# Vue.js for Design

Passez au design de composants

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
class: section, bottom
background-image: url(../img/placeholders/creative-desk-pens-school.jpg)

# Reactive Programming

???
- React everywhere
- Why it isn't the only way?
- Reactive fundamentals
- Reactive <> FRP
- Immutability


---
layout: true
.breadcrumb[Reactive Programming]


---
class: bottom-up, inverse, middle

# 2016

**React est partout !**

<small>… et la guerre semble déjà jouée</small>


---
class: single, middle
# React favorise une approche « ingénieur »


---
class: single, middle
# React, c'est surtout _VirtualDOM_


---
class: single, middle, inverse
# D'autres approches sont possibles

--
class: bottom-up
Depuis le _templating_ jusqu'au _Functional Reactive Programming_


---
class: single, middle
# **Vous avez dit, _Reactive_ ?**


---
class: stickit, middle
# Le _reactive programming_ est un pattern visant à définir la fontaine de donnée comme point de référence

--
class: punchline, bottom

Autrement dit : ce n'est plus la vue qui accède à la donnée, c'est le changement de donnée qui va influer sur les vues


---
class: bottom-up, middle, center

![Simpsons twins](./simpsons-twins.gif)

# Attention

_Reactive_ n'est **pas** _FRP_, vous n'avez pas besoin d'être fonctionnels

<small>mais dans la vraie vie, c'est quand même plus pratique =]</small>


---
class: bottom-up, middle, center

![Badass](./badass.gif)

# Le concept sous-jacent

C'est l'**immutabilité** (pour beaucoup, dont _React_)


---
layout: false
class: section, center
background-image: url(../img/placeholders/trees-building.jpg)

# Components Design

???
- Design first
- Atomic Design
- MVVM model
- Components Tree / Component System (+ code) model


---
layout: true

.breadcrumb[Components Design]


---
class: single, middle
# Et si on attaquait par l'autre angle ?


---
class: single, middle, center, inverse
# **Design**


---
class: punchline, bottom

Une approche design consiste à penser en priorité parcours utilisateur et ergonomie avant de penser métier


---
class: single, middle
# Atomic Design


---
class: single, middle
# Oui, mais moi, je dév

et vous avez bien raison


---
class: middle
# Pattern MVVM

.large[![MVVM](./mvvm.png)]


---
class: middle
# Pattern Components Tree <small>(ou Component System)</small>

.large[![Component system](./components.png)]


---
class: single, middle, inverse
# C'est _Reactive_, ça ?


---
layout: false
class: section
background-image: url(../img/placeholders/man-on-bench.jpeg)

# L'approche Vue.js

???
- Vue.js guide is exhaustive, let's be shorter
- Observer: no immutables
- Custom components
- Manage the whole View layer
- Data-binding vs VirtualDOM


---
layout: true

.breadcrumb[L'approche Vue.js]


---
class: single, middle
# Pas d'immutabilité requise


---
class: single, middle
# Possibilité de définir ses propres composants


---
class: single, middle
# Intègre toutes les logiques nécessaires

Render, templates, binding, computing, mvvm…


---
class: single, middle
# VirtualDOM _ou_ Data-binding ?


---
class: single, middle, center, inverse

# **Approche design par nature**


---
layout: false
class: section, bottom, middle
background-image: url(../img/placeholders/pen-idea-bulb-paper.jpg)

# Vue.js · Concepts

???
- Vue is just the view layer (but it's damned exhaustive)
- How to instanciate
- Lifecycles
- Events / Hooks
- Data-binding (v-bind)
- Computed properties
- 2way data-bindings (v-model), works on all inputs


---
layout: true

.breadcrumb[Vue.js · Concepts]


---
class: middle, center, stickit

.small[![Mind Blow](./mindblow.gif)]

# Vue.js n'est que la… Vue !


---
class: middle
# Instanciation

```js
let data = { msg: 'hello world' }
let vm = new Vue({
  el: "#target"
  data: data
})
```

???
Example is voluntary simple, more comming ;)

---
# Lifecycles

1. New view

--
2. Observe data

--
3. Init

--
4. Build template

--
5. Attach DOM


---
# Events Hooks

- `created`
- `beforeCompile`
- `compiled`
- `ready`
- `beforeDestroy`
- `destroyed`


---
class: single, middle
# Vue.js utilise une syntaxe de templates déclaratifs


---
class: middle
# Exploitez la fontaine de données

```html
<span>Our message to the world: {{ msg }}</span>
```

```html
<span id="item-{{id}}">{{ msg }}</span>
```

```html
<a v-bind:href="url">{{ link }}</a>
<a :href="url">{{ link }}</a>
```


---
class: middle
# Chaque _mustache_ est une expression JS

```html
<button aria-busy={{isBusy? 'true' : 'false'}}>
  {{ msg.split('').reverse().join('') }}
</button>
```


---
class: middle
# Computed properties

```html
<span id="amount">{{ amount }}</span>
```

```js
let vm = new Vue({
  el: '#amount'
  data: {
    price: 35
    qty: 3
  },
  computed: {
    amount: function() {
      return this.price * this.qty + '€'
    }
  }
})
```


---
class: middle
# 2-way binding

```html
<input type+"text" v-model="message">
```

```html
<label for="jack">
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"> Jack
</label>
<label for="john">
  <input type="checkbox" id="john" value="John" v-model="checkedNames"> John
</label>

<span>Checked names: {{ checkedNames | json }}</span>
```


---
class: single, inverse, middle
# HTML can't be boring anymore =]


---
layout: false
class: section, bottom
background-image: url(../img/placeholders/street-building-construction-industry.jpg)

# Vue.js · Rendering

???
- Conditionnal (v-if, v-show)
- Iterator (v-for)
  - note about mutating elements
  - replacing array and smart heuristic tracking
- Built-in filter (orderBy, filterBy)
- Attach method and Keybidings
- Transitions (just CSS transitions)
- Template parsing done by native-browser DOM engine

---
layout: true

.breadcrumb[Vue.js · Rendering]


---
class: middle
# Conditions

```html
<div v-if="isVisible">{{ msg }}</div>
<div v-else>Nothing to display here</div>
```

```html
<div v-show="isVisible">{{ msg }}</div>
```


---
class: middle
# Cas du « Content Block »

```html
<template v-if="isVisible">
  <span>{{ msg }}</span>
  <button>edit</edit>
</template>
```


---
class: middle
# Iterator

```html
<ul>
  <li v-for="attendee in attendees">
    {{ $index }} - {{attendee.name}}
  </li>
</ul>
```

???
- Mutating methods (push, pop, shift, splice, sort, reverse…) trigger refresh
- Replacing array trigger refresh, but DOM isn't vamped, smart heuristic will preserve DOM nodes


---
class: middle
# Cas du « Cell-Reuse »

```json
{
  "contacts": [
    {"_id": "83745d", "name": "John Doe"},
    {"_id": "ed234a", "name": "Henry Miller"}
  ]
}
```

```html
<ul>
  <li v-for="contact in contacts" track-by="_id">
    {{ contact.name }}
  </li>
</ul>
```


---
# Usages avancés

- Ça marche aussi sur les objets
- Les filtres sont vos amis :

```html
<li v-for="contact in contacts | filterBy 'John' in 'name'">
  {{ contact.name }}
</li>
```


---
class: middle
# Listeners

```html
<a v-on:click="alert('hello')">Click me!</a>
<a @click="alert">Click me again!</a>
```

```js
let vm = new Vue({
  data: {
    name: "John"
  }
  methods: {
    alert: function (event) {
      alert('Hello ' + this.name + '!')
    }
  }
})
```


---
class: middle
# Modifiers

```html
<button type="submit" @click.prevent.stop="alert">Validate</button>
<a @click.stop="cancel" :href="origin">Cancel</a>
```

```html
<form @keyup.13="submit" @keyup.esc="cancel"><!-- --></form>
```


---
# Transitions

```html
<div v-if="show" transition="fade"><!-- --></div>
```

--
```css
/* always present */
.fade-transition {
  transition: opacity .3s ease;
  opacity: 1;
}

/* .fade-enter defines the starting state for entering */
/* .fade-leave defines the ending state for leaving */
.fade-enter, .fade-leave {
  opacity: 0;
}
```


---
class: single, middle, inverse
# **Le parsing des templates est directement effectué par le navigateur**


---
layout: false
class: section
background-image: url(../img/placeholders/ruler-distance-measure-meter.jpeg)

# Vue.js · Custom components

???
- Create a component (`Vue.extend()`)
  -  be careful to options passed by reference (data / el)
- Register globally (`Vue.component`) or lacally (`Vue.extend({components: []})`)
- Isolated scope: use props to transmit data (can be dynamic w/ v-bind)
- One direction (pun), but can be forced (sync, once)
- Props validation
- Custom events ($on, $emit) along the chain ($dispatch, $broadcast)
- Content slots
- Create Components API ! (props, events, slots) == authoring

---
layout: true

.breadcrumb[Vue.js · Custom components]


---
class: single, middle, inverse
# Une architecture DRY nécessite d'écrire vos propres composants


---
class: middle
# Utilisez l'extension

```js
const MyComponent = Vue.extend({
  template: '<div>A custom component!</div>'
  methods:  {/* ... */}
})
```


---
class: middle
# Utilisation

Globale :

```js
Vue.component('my-component', MyComponent)
```

Locale :

```js
let vm = new Vue({
  el: '#target',
  components: {
    'my-component': MyComponent
  }
})
```

???
Be careful to `data` and `el` that will be shared across all instances of a component. Prefer use a function to isolate them.

---
class: middle
# Transmettre la donnée : `props`

```js
const MyComponent = Vue.extend({
  template: '<span>{{ msg }}</span>',
  props: ['msg']
})
```

```html
<my-component msg="hello!"></my-component>
```

???
- props can be validated


---
class: middle
# Utiliser des propriétés dynamiques

```html
<input v-model="message">
<my-component :msg="message"></my-component>
```

???
- One direction binding, can be forced w/ `sync`, `once`


---
class: middle
# Events

Listeners

```html
<my-component @my-msg="handleMsg">{{ msg }}</my-component>
```

```js
const MyComponent = Vue.extend({
  method:{
    notify: function() {
      this.dispatch('my-msg', this.msg)
    }
  }
})
```

???
Can also use `emit`, `broadcast` to send events along the chain


---
class: stickit, middle
# Mais aussi des `slots`, des composants dynamiques, des fragments, du caching…


---
class: single, middle, inverse
# Composez vos composants en leur offrant une API

`props`, `events`, `slots`


---
layout: false
class: section, middle, center
background-image: url(../img/placeholders/city-buildings.jpg)

# Buildez !

???
- Single file component
- Templates can be everything
- Webpack + vue-loader / Browserify + vueify / Vue-cli
- Testing: simplified as data is bound to component

---
layout: true

.breadcrumb[Buildez !]


---
class: middle
# Single file component

```vue
<style>
.my-component {
  display: flex
}
</style>

<template>
<div class="my-component">
  <p @click="hello">{{ msg }}</p>
</div>
</template>

<script>
export default {
  methods: {
    hello: function() {
      alert 'Hello ' + this.msg + '!'
    }
  }
}
</script>
```


---
class: middle
# Utilisez votre moteur de template / préprocesseur CSS

```vue
<style lang="stylus">
.my-component
  display flex
</style>

<template lang="pug">
.my-component
  p(@click="hello") {{ msg }}
</template>
```


---
class: single, middle, inverse

# Utilisez un packer

Webpack + [vue-loader](https://github.com/vuejs/vue-loader) / Browserify + [vueify](https://github.com/vuejs/vueify)

???
Bonus point for CSS Modules w/ Webpack


---
class: punchline, bottom

![Lightbulb](../img/icons/linea/basic_lightbulb.svg)

# Testing

Le composant View-Model se charge des bindings, il ne vous revient plus qu'à tester le composant en lui même


---
layout: false
class: section, bottom
background-image: url(../img/placeholders/kid-jump-in-water.jpeg)

# J'y vais ou j'y vais pas ?

???
- Perfs : async DOM changes (queue), cache…
- Production ready
- not lte ie8 (Object.defineProperty)
- plugins (devools, router, async-data…)
- v2 alpha
- lien vers la doc !

---
layout: true

.breadcrumb[J'y vais ou j'y vais pas ?]


---
class: single, middle
# Perfomances

Async DOM, queue, cache


---
class: single, middle
# Production-proof


---
class: single, middle
# Bon eco-système, communauté réactive


---
class: single, middle
# Bon nombre de plugins / composants

Devtools, router, async-data, Firebase…


---
class: single, middle
# Pas utilisable _lte IE8_

???
Uses Object.defineProperty (unshimmable ES5)


---
class: middle
# v2 : Alpha

- Templates + VirtualDOM
- Encore plus rapide
- Streaming Server-side


---
class: bottom-up, center, middle

.small[![Vue.js logo](./logo.png)]

# Pour en savoir plus

Guide : [http://vuejs.org/guide/](http://vuejs.org/guide/index.html)


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
- Schémas MVVM et Components : [Guide Vue.js](http://vuejs.org/guide/index.html)

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
