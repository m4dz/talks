<!--{section^1:data-breadcrumb="Hands-on!"}-->

<!--{.interleaf data-background-image="/img/unsplash/daniel-cheung-129839-unsplash.jpg"}-->
<!-- Photo by Daniel Cheung on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> Hands-on!

===
<!-- {.punchline} -->

Let's focus
on ==Rust==

===

Remember? <!-- {.large} -->

```rust
pub fn greet(name: &str) {
    alert(&format!("Hello {}!", name));
}
```

===

Why Rust? <!-- {.large} -->

- C++, thanks, but I only have ==one brain== <!-- {li: .fragment} -->
- No data-race by design <!-- {li: .fragment} -->
- Static types <!-- {li: .fragment} -->
- Iterators <!-- {li: .fragment} -->
- Excellent Memory Management <!-- {li: .fragment} -->
- Community 😍 <!-- {li: .fragment} -->
- Toolchain (Rustup, Cargo, Rustc...) <!-- {li: .fragment} -->
- And much more... **:fa-level-down-alt:** <!-- {li: .fragment} -->

===

### wasm-bindgen!

> Facilitating high-level interactions between wasm modules and JavaScript.

===

- High-level library
- Exposes:
  - Web sys (DOM, `window`, `document`, `fetch`,  `canvas`...)
  - JS sys (passing values, types, boxing...)
  - Promises
- Generate TypeScript bindings

===

```rust
use wasm_bindgen::prelude::*;

<span class="fragment" data-fragment-index=1>#[wasm_bindgen]
extern "C" {
    <span class="fragment" data-fragment-index=2>fn alert(s: &str);</span>
}</span>

<span class="fragment" data-fragment-index=3>#[wasm_bindgen(module = "/bindings.js")]
extern "C" {
    fn updateState(state: &JsValue);
}</span>

pub fn greet(name: &str) {
    alert(&format!("Hello {}!", name));

    <span class="fragment" data-fragment-index=3>let state = State { name }
    updateState(JsValue::from_serde(&state).unwrap());</span>
}
```

===

### wasm-pack!

> 📦✨ your favorite rust -> wasm workflow tool!

===

Easy to install

```sh
$ curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

Easy to use!

```sh
$ cd my-module
$ wasm-pack build --target web --release
```

===

Ready to publish!

```sh
$ tree
├── bridge.js
├── Cargo.toml
├── pkg
│   ├── my-module_bg.d.ts
│   ├── my-module_bg.wasm
│   ├── my-module.d.ts
│   ├── my-module.js
│   ├── package.json
│   └── snippets
│       └── my-module-91b01578bc1ce6c0
│           └── bridge.js
└── src
    └── lib.rs
```

===
<!--{ .left.x-large }-->

### A State of WASM

===

```ts
interface Record {
  id: Sha256,
  payload: object
}

interface Node {
  id: Sha256,
  parent: Sha256,
  nonce: number,
  records: Array&lt;Record>
}

let blockchain: Array&lt;Nodes>
```

===

```js
while (true) {
  <span class="fragment">node.nonce = nonce()</span>
  <span class="fragment">node.id = <span class="fragment">await crypto.subtle.digest('SHA-256', encoder.encode(`
    <span class="fragment">${node.parent};</span><span class="fragment">${node.nonce};</span>
    <span class="fragment">${node.records.map(record => Object.values(record).join(';')).join(';')}</span>
  `))
  .then(value => tohex(value))</span></span>

  <span class="fragment">if (node.id.substr(0, limit) == prefix) {
    break
  }</span><span class="fragment"> else {
    node.records = shuffle(node.records)
  }</span>
}
```

===

```rust
loop {
    if node.mine(&limit, &prefix) {
        break
    }
}

<span class="fragment">pub struct Node {
    ...
}
impl Node {
    fn mine(&mut self, limit: &usize, prefix: &str) -> bool {
        let mut rng = thread_rng();
        self.records.shuffle(&mut rng);
        self.generate_nonce();
        self.generate_id();
        self.id[..*limit].eq(prefix)
    }
}</span>
```

===

Let's Try It!

<iframe src="../../demo/index.html" scrolling="no"></iframe>
