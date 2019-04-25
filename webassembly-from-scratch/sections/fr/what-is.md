<!--{section^1:data-breadcrumb="WebAssembly, c'est quoi ?"}-->

<!--{.interleaf data-background-image="/img/unsplash/bryan-minear-317365-unsplash.jpg"}-->
<!-- Photo by Bryan Minear on Unsplash -->

## WebAssembly, c'est quoi ?

===
<!--{ .punchline }-->

Emscripten

- [Emscripten: An LLVM-to-Web Compiler](https://github.com/emscripten-core/emscripten)
{.linkrolls}

===

@[giphy]({"token":"3o6MbnqLhX5tJ5wNQQ", "className":"medium", "caption": "Performances, on y est presque"})

???

Problemes de perfs, necessite d'ameliorer le temps de traitement "lourd"

===
<!--{ .punchline }-->

asm.js
::(sous-ensemble JS optim)::{.xx-small}

===
<!--{ .punchline }-->

JS : event-driven

===
<!--{ .x-large }-->

Mono-threading {.large}

- bloquer toute l'UI
- avoir des fuites de memoire
- nextTick : `setTimeout({...}, 0)`

===
<!--{ .punchline }-->

Background :
WebWorker, ServiceWorkers

===

@[giphy]({"token":"cnqbWwFsnRcGs", "className":"medium", "caption": "La course à la perf continue"})

===

> **WebAssembly**, c'est un nouveau langage, proche d'un langage machine (un _assembleur_) qui permet d'avoir des performances quasi natives, dans le navigateur.

===

```txt
<span style="color:#00e0e0">0200</span> <span style="color:#ffd700">20</span> <span>00</span>
<span style="color:#00e0e0">0202</span> <span style="color:#ffd700">42</span> <span>00</span>
<span style="color:#00e0e0">0204</span> <span style="color:#ffd700">51</span>
<span style="color:#00e0e0">0205</span> <span style="color:#ffd700">04</span> <span>7e</span>
<span style="color:#00e0e0">0207</span> <span style="color:#ffd700">42</span> <span>01</span>
<span style="color:#00e0e0">020A</span> <span style="color:#ffd700">05</span>
<span style="color:#00e0e0">020B</span> <span style="color:#ffd700">20</span> <span>00</span>
<span style="color:#00e0e0">020D</span> <span style="color:#ffd700">20</span> <span>00</span>
<span style="color:#00e0e0">0210</span> <span style="color:#ffd700">42</span> <span>01</span>
<span style="color:#00e0e0">0211</span> <span style="color:#ffd700">7d</span>
<span style="color:#00e0e0">0212</span> <span style="color:#ffd700">10</span> <span>00</span>
<span style="color:#00e0e0">0214</span> <span style="color:#ffd700">7e</span>
<span style="color:#00e0e0">0217</span> <span style="color:#ffd700">0b</span>
```

===
<!--{ .punchline }-->

C'est ::pas::{.fragment .stabilo} un langage !

===

```txt
<span style="color:#ffd700">get_local</span> 0
<span style="color:#00e0e0">i64</span>.<span style="color:#ffd700">const</span> 0
<span style="color:#00e0e0">i64</span>.<span style="color:#ffd700">eq</span>
<span style="color:#00e0e0">if</span> i64
    <span style="color:#00e0e0">i64</span>.<span style="color:#ffd700">const</span> 1
<span style="color:#00e0e0">else</span>
    <span style="color:#ffd700">get_local</span> 0
    <span style="color:#ffd700">get_local</span> 0
    <span style="color:#00e0e0">i64</span>.<span style="color:#ffd700">const</span> 1
    <span style="color:#00e0e0">i64</span>.<span style="color:#ffd700">sub</span>
    <span style="color:#ffd700">call</span> 0
    <span style="color:#00e0e0">i64</span>.<span style="color:#ffd700">mul</span>
<span style="color:#00e0e0">end</span>
```

===
<!--{ .x-large }-->

### Compiler pour le Web

===
<!--{ .punchline }-->

**LLVM** ::(die, GCC)::{.xx-small}
::pour gérer la chaîne de compilation::{.small}

===
<!--{ .punchline }-->

::Pourquoi ?::{.large}
::parce que::{.fragment .fade-up} ::c'est::{.fragment .fade-up} ::==possible== !::{.fragment .fade-up}

===
<!--{ .punchline }-->

JS ne peut pas tout,
on a parfois besoin de partager
de la codebase ::hétérogène::{.fragment .stabilo}
<!--{p: .small} -->

===
<!--{ .x-large }-->

Le navigateur ==est== une Virtual Machine
- PWA
- Electron
- Cordova
- etc

<!-- -->
- [The Birth & Death of JavaScript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)
{.linkrolls}

===
<!--{ .large }-->

WASM {.large}
- du code, dans n'importe quel langage
- compilé via LLVM vers WASM
- chargé via JS
- exécuté dans le browser {.fragment .fade-up}

<!-- -->
- [Lin Clark WebAssembly series](https://hacks.mozilla.org/author/lclarkmozilla-com/)
{.linkrolls}
