<!--{section^1:data-breadcrumb="Tooling"}-->

<!--{.interleaf data-background-image="/img/unsplash/brigitta-schneiter-466789-unsplash.jpg"}-->
<!-- Photo by Brigitta Schneiter on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> Tooling!

===

### WASM-bindgen

<!-- {section: .xx-large} -->

===

> wasm-bindgen facilitates high-level interactions between wasm modules and JavaScript.

- [The wasm-bindgen guide](https://rustwasm.github.io/wasm-bindgen/)
{.linkrolls}

===

```rust
use wasm_bindgen::prelude::*;
<span class="fragment">#[wasm_bindgen]
extern "C" {
    <span class="fragment">fn alert(s: &str);</span>
}</span>
<span class="fragment">#[wasm_bindgen(module = "/bindings.js")]
extern "C" {
    fn updateState(state: JsValue);
}</span>
<span class="fragment">#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hey! {}!", name));
}</span>
```

```js
<span class="fragment">import init from "./js_hello_world"</span>
<span class="fragment">const module = await init("./js_hello_world_bg.wasm")
module.greet("Hello World")</span>
```

===
<!--{ .medium }-->

Get access to: {.large}

- Export JS fn to Rust
- JS Types
- Web-sys
- JS-sys
- Promises / Futures

===

### WASM-pack

<!-- {section: .xx-large} -->

===
<!--{ .punchline }-->
Compile ~~by hand~~!

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

<iframe src="../demo/" scrolling="no"></iframe>
