---
title: "WebAssembly: un état des lieux"
subtitle: Le navigateur est une machine virtuelle
description: WebAssembly est une nouvelle machine virtuelle dans le navigateur. Elle ne fait pas de transpilation vers JavaScript comme l'ont tenté ses prédécesseurs ; elle introduit un nouveau format, proche d'un assembleur, exécuté dans une machine virtuelle au sein de votre browser.
---

<!--{ data-background-color="#eee" }-->

![](../img/web-assembly-logo.svg){.medium .no-borders}

???

pourquoi je vous parle de WASM ?
  parce que c'est de plus en plus trendy
  parce que c'est aussi extremement puissant
  parce que j'ai dęveloppé de la webapp pendant des annees, et qu'on a progressivement change nos paradigmes sur la facon de dev nos apps

===

@[giphy]({"token":"tIeCLkB8geYtW", "className":"medium"})

???

TW: on va descendre en rappel, attachez vos harnais

===

Petit rappel historique {.large}

- 2001: ::Prototype, Scriptaculo·us, Mootools::{.fragment}
- 2005: ::jQuery::{.fragment}
- 2010: ::SPA / Backbone::{.fragment}
- 2012: ::Angular::{.fragment}
- 2015: ::virtual-dom, React, Vue.js::{.fragment}
- 2018: ::PWA !::{.fragment}
- 2019: ::Sinon, ça se passe bien, la RAM, chez vous ?::{.fragment}

+[section](./sections/fr/what-is.md)

+[section](./sections/fr/basics.md)

+[section](./sections/fr/prod.md)

<!--{ .large }-->
### Know The Web!
- HTML/DOM ::→ interfaces::{.fragment}
- CSS ::→ styling::{.fragment}
- JS ::→ exécution logique UI::{.fragment}
- WASM → background operations {.fragment .fade-up}

<!-- -->
- [WebAssembly Studio](https://webassembly.studio/)
- [Yew](https://github.com/DenisKolodin/yew)
- [Blazor](https://blazor.net/)
{.linkrolls}
