<!--{section^1:data-breadcrumb="Production‽"}-->

<!--{.interleaf data-background-image="/img/unsplash/patrick-fore-381200-unsplash.jpg"}-->
<!-- Photo by Patrick Fore on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> Production‽

===

Fantastic Four! {.large}

![](../img/firefox.svg){.xx-small .no-borders .no-background} ![](../img/chrome.svg){.xx-small .no-borders .no-background} ![](../img/safari.svg){.xx-small .no-borders .no-background} ![](../img/edge.svg){.xx-small .no-borders .no-background}

===
<!--{ .punchline }-->

Open Standard

- [WebAssembly.org](https://webassembly.org/)
{.linkrolls}

===

~~WASM~~ Rust _Hello World_ on the Web {.large}
```rust
pub fn greet(name: &str) {
    <span class="fragment">alert(<span class="fragment">&format!(<span class="fragment">"Hey! {}!"</span>, <span class="fragment">name</span>)</span>);</span>
}
```

- [WebAssembly with Golang is Fun! 🕹](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
{.linkrolls}

===
<!--{ .large }-->

Execution timeline {.large}
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

Transfert Data to WASM {.large}
```js
...
.then(module => {
  <span class="fragment">const sum = <span class="fragment">module.<span class="fragment">instance.exports.</span><span class="fragment">add(<span class="fragment">7</span>, <span class="fragment">4</span>)</span></span>
  console.log(sum)</span>
})
```

===
<!--{ .x-large }-->

4 static types {.large}
- 2 Integers {.fragment}
- 2 Floats {.fragment}

===
<!--{ .xx-large }-->
Problem:
I need **more** than numbers!

===
<!--{ .xx-large }-->
A number could be…
::a ==memory== pointer!::{.fragment}

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
wasm.then(wasm => wasm.greet("Hello World"))
```

===
<!--{ .medium }-->
- Export JS fn to Rust
- JS
  - JS-types {.small}
  - Boxes {.small}
  - Catch {.small}
  - Getter / Setter {.small}
  - Namespaces {.small}
- Web-sys
  - DOM {.small}
  - Fetch {.small}
  - Canvas / requestAnimationFrame {.small}
  - WebAudio / WebGL {.small}

===
<!--{ .punchline }-->
Compiling? ::wasm-pack!::{.fragment}

===

```sh
$ curl https://sh.rustup.rs -sSf | sh
$ rustup install nightly
$ rustup target add wasm32-unknown-unknown --toolchain nightly
```

```sh
$ wasm-pack build hello_world --target web --out-dir ./pkg
```

===

> 📦✨ your favorite rust → wasm workflow tool!

- [wasm-pack](https://rustwasm.github.io/wasm-pack/)
{.linkrolls}

===
<!--{ .left.x-large }-->
### A State of WASM

===

```ts
interface Record {
  id: Sha256,
  payload: object
}

interface Block {
  id: Sha256,
  parent: Sha256,
  nonce: number,
  records: Array&lt;Record>
}

let blockchain: Array&lt;Block>
```

===

```js
while (true) {
  node.nonce = nonce()
  node.id = await crypto.subtle.digest('SHA-256', encoder.encode(`
    ${node.parent};${node.nonce};
    ${node.records.map(record => Object.values(record).join(';')).join(';')}
  `))
  .then(value => tohex(value))

  if (node.id.substr(0, limit) == prefix) {
    break
  } else {
    node.records = shuffle(node.records)
  }
}
```

===

```rust
loop {
    let mut rng = thread_rng();
    _nonce = (0..32)
        .map(|_| rng.gen_range(0, 9).to_string())
        .collect();
    &mut node.records.shuffle(&mut rng);
    let _values: String = node.records.iter_mut().map(|r| r.join()).collect();

    let sha = Sha256::new()
        .chain(&_parent)
        .chain(&_nonce)
        .chain(&_values)
        .result();

    _id = format!("{:x}", sha);
    if _id[.._limit] == _prefix {
        break;
    }
}
```

===

Let's Try It!

<iframe src="../demos/" scrolling="no"></iframe>

===
<!--{ .large }-->
Status {.large}
- Compile
- Fast
- Lightweight
- Linear Memory w/ `TypedArray`

===
<!--{ .large }-->
Comming Soon {.large}
- Multi-threading
- Streaming compilation/Tiered Compiler
- JS Modules exchange/Garbage Collector
- Portability/Runtime/IoT
- WASI {.fragment}

<!-- -->
- [WebAssembly’s post-MVP future: A cartoon skill tree](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/)
{.linkrolls}
