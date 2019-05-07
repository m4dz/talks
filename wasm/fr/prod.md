<!--{section^1:data-breadcrumb="Ready to production ‽"}-->

<!--{.interleaf data-background-image="/img/unsplash/patrick-fore-381200-unsplash.jpg"}-->
<!-- Photo by Patrick Fore on Unsplash -->

## Ready to production ‽

===

Les 4 Fantastiques ! {.large}

![](../img/firefox.svg){.xx-small .no-borders} ![](../img/chrome.svg){.xx-small .no-borders} ![](../img/safari.svg){.xx-small .no-borders} ![](../img/edge.svg){.xx-small .no-borders}

===
<!--{ .punchline }-->

Open Stardard

- [WebAssembly.org](https://webassembly.org/)
{.linkrolls}

===

Un code en ~~WASM~~ Rust pour le Web {.large}
```rust
pub fn greet(name: &str) {
    <span class="fragment">alert(<span class="fragment">&format!(<span class="fragment">"Hey! {}!"</span>, <span class="fragment">name</span>)</span>);</span>
}
```

- [WebAssembly with Golang is Fun! 🕹](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
{.linkrolls}

===
<!--{ .large }-->

Comment ? {.large}
1. Fetch {.fragment}
2. Load / Compile ::(2×)::{.fragment} {.fragment}
3. Instantiate {.fragment}
4. Access fn {.fragment}

- [Cranelift Code Generator](https://cranelift.readthedocs.io/en/latest/)
{.linkrolls}

===

Fetch ! {.large}
```js
fetch('my-module.wasm')
  <span class="fragment">.then(res => res.arrayBuffer())</span>
  <span class="fragment">.then(instance => WebAssembly.instantiate(instance))</span>
  <span class="fragment">.then(module => {
    // module.instance.exports[...]
  })</span>
```

===

Passer des valeurs à WASM {.large}
```js
...
.then(module => {
  <span class="fragment">const sum = <span class="fragment">module.<span class="fragment">instance.exports.</span><span class="fragment">add(<span class="fragment">7</span>, <span class="fragment">4</span>)</span></span>
  console.log(sum)</span>
})
```

===
<!--{ .x-large }-->

4 types {.large}
- 2 entiers {.fragment}
- 2 flottants {.fragment}

===
<!--{ data-background-color="#eee" }-->

![](../img/pliage.png){.medium .no-borders}

===

![](../img/color.png){.medium .no-borders}

===
<!--{ .xx-large }-->
Problème :
je manipule pas **que** des nombres

===
<!--{ .xx-large }-->
Un nombre, c'est…
::un pointeur ==mémoire== !::{.fragment}

===
<!--{ .punchline }-->
Linear Memory

===

```js
<span class="fragment" data-fragment-index=5 >const pointer = <span class="fragment" data-fragment-index=1 >0</span></span>

const LM = new WebAssembly.Memory(<span class="fragment" data-fragment-index=1 >{ initial: 1 }</span>)
<span class="fragment" data-fragment-index=2 >const sharedMem = <span class="fragment" data-fragment-index=3 >new Uint8Array(<span class="fragment" data-fragment-index=4 >LM.buffer</span>)</span></span>

<span class="fragment" data-fragment-index=6 >const str = "Hello World"</span>

<span class="fragment" data-fragment-index=7 >[].forEach.call(
  <span class="fragment" data-fragment-index=9 >btoa(</span><span class="fragment" data-fragment-index=8 >str</span><span class="fragment" data-fragment-index=9 >)</span>,
  <span class="fragment" data-fragment-index=10 >(char, idx) => <span class="fragment" data-fragment-index=12 >sharedMem[<span class="fragment" data-fragment-index=13 >pointer + idx</span>]</span> = <span class="fragment" data-fragment-index=11 >char.charCodeAt(0)</span></span>
)</span>
<span class="fragment" data-fragment-index=13 >// Uint8Array(65536) [ 83, 71, 86, 115, 98, 71, 56, 103, 86, 50, … ]</span>
```

===
<!--{ .punchline }-->
wasm-bindgen!

===

> wasm-bindgen facilitates high-level interactions between wasm modules and JavaScript.

- [The `wasm-bindgen` guide](https://rustwasm.github.io/wasm-bindgen/)
{.linkrolls}

===

```rust
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hey! {}!", name));
}
```

```js
const wasm = import("./js_hello_world")
wasm.then(wasm => wasm.greet("Hello World")
```

===
<!--{ .medium }-->
- export des fn JS dans Rust
- js
  - js-types {.small}
  - Boxes {.small}
  - catch {.small}
  - getter / setter {.small}
  - namespaces {.small}
- web-sys
  - DOM {.small}
  - Fetch {.small}
  - Canvas / requestAnimationFrame {.small}
  - WebAudio / WebGL {.small}

===
<!--{ .punchline }-->
Distribuer ? ::wasm-pack !::{.fragment}

===

> 📦✨ your favorite rust → wasm workflow tool!

- [wasm-pack](https://rustwasm.github.io/wasm-pack/)
{.linkrolls}

===
<!--{ .left.x-large }-->
### WASM : un état des lieux

===
<!--{ .large }-->
Pour le moment : {.large}
- compile
- rapide
- léger
- linear memory _via_ TypedArray

===
<!--{ .large }-->
Next ::(entre-autre)::{.x-small} : {.large}
- Multi-threading
- Streaming compilation / Tiered Compiler
- JS Modules exchange / Garbage Collector
- Portability / Runtime / IoT

<!-- -->
- [WebAssembly’s post-MVP future: A cartoon skill tree](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/)
{.linkrolls}
