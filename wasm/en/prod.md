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

xx

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
  <span class="fragment">module.<span class="fragment">instance.exports.</span><span class="fragment">greet(<span class="fragment">'Folks'</span>)</span></span>
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

I need ==Strings=={.fragment}
::💩::{.fragment .xx-large}

<!-- {section: .xx-large} -->

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
 