<!--{section^1:data-breadcrumb="WASM, What's that?"}-->

<!--{.interleaf data-background-image="/img/unsplash/jorge-zapata-44723-unsplash.jpg"}-->
<!-- Photo by Jorge Zapata on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> WASM, What's that?

===
<!--{ .punchline }-->

Emscripten

- [Emscripten: An LLVM-to-Web Compiler](https://github.com/emscripten-core/emscripten)
{.linkrolls}

===

@[giphy]({"token":"3o6MbnqLhX5tJ5wNQQ", "className":"medium", "caption": "Performances on Emscripten, a metaphor"})

???

We are struggled with performance, we need more

===
<!--{ .punchline }-->

asm.js
::(optimized JS sub-part)::{.xx-small}

===
<!--{ .punchline }-->

JS: event-driven

===
<!--{ .x-large }-->

Single-threaded {.large}

- Frozen UI
- Memory Leaks
- nextTick : `setTimeout({...}, 0)`

===
<!--{ .punchline }-->

Concurrency:
WebWorker, ServiceWorkers

===

@[giphy]({"token":"cnqbWwFsnRcGs", "className":"medium", "caption": "We want more perfs!"})

===

> **WebAssembly**, is a new language, close to a machine codes instructions (an _Assembly_ language) which allow pretty good, close to native performances, in the Web Browser.

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

This is ::not::{.fragment .stabilo data-fragment-index=1} a language!

![](/img/pear.png){.pear .fragment data-fragment-index=1}

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

### Compile for the Web Architecture

===
<!--{ .punchline }-->

**LLVM** ::(die, GCC)::{.xx-small}
::the best compiling toolchain::{.small}

===
<!--{ .punchline }-->

::Why?::{.large}
::Because::{.fragment .fade-up} ::We::{.fragment .fade-up} ::==CAN==!::{.fragment .fade-up}

===

> JS can't address all use-cases.
> We sometimes need to share a codebase between projects.

===
<!--{ .x-large }-->

The Browser ==is== a Virtual Machine
- PWA
- Electron
- Cordova
- etc.

<!-- -->
- [The Birth & Death of JavaScript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)
{.linkrolls}

===
<!--{ .large }-->

WASM {.large}
- Any language that compile
- Compiled through LLVM to WASM
- Loaded using JS
- Executed in the Browser {.fragment .fade-up}

<!-- -->
- [Lin Clark WebAssembly series](https://hacks.mozilla.org/author/lclarkmozilla-com/)
{.linkrolls}
