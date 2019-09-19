<!-- {section^1:data-breadcrumb="Back to Basics"} -->

<!-- {.interleaf data-background-image="/img/unsplash/71909.jpg"} -->
<!-- Photo by Patrick Tomasso on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> Back to Basics: It's not that easy

===

WASM Binary Format <!-- {.fragment} -->

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

Is this a... language? <!-- {.large} -->

@[giphy]({"token":"pPhyAv5t9V8djyRFJH"})

===

WASM Text Format

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

@[giphy]({"token":"b8ujFWew5Hf5m", "className":"large", "caption":"So you want...?"})

===
<!-- {.punchline} -->

We need to
==compile== for the Web <!-- {.fragment .stabilo} -->

- [Emscripten: An LLVM-to-Web Compiler](https://github.com/emscripten-core/emscripten)
- [asm.js, low-level subset of JavaScript](http://asmjs.org/spec/latest/)
<!-- {ul: .linkrolls} -->

===

~~WASM~~ Rust _Hello World_, Web version <!-- {p:.large} -->

```rust
pub fn greet(<span class="fragment" data-fragment-index=2>name: &str</span>) {
    <span class="fragment" data-fragment-index=1>alert(<span class="fragment" data-fragment-index=3>&format!("Hello {}!", </span><span class="fragment" data-fragment-index=2>name</span><span class="fragment" data-fragment-index=3>)</span>);</span>
}
```

```js
module.greet("World")
``` 
<!-- {.fragment data-fragment-index=5} -->

- [WebAssembly with Golang is Fun! 🕹](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
<!-- {ul: .linkrolls} -->

===
<!-- {.x-large} -->

🍀 static types <!-- {.large} -->

- 2 Integers <!-- {li: .fragment} -->
- 2 Floats <!-- {li: .fragment} -->

===
<!-- {.xx-large} -->

Problem:
I need **more** than numbers!

===
<!-- {.xx-large} -->

I need ==Strings== <!-- {.fragment data-fragment-index=1} -->
::💩::<!-- {.fragment .xx-large data-fragment-index=1} --> ::UTF-8::<!-- {.fragment .large data-fragment-index=2} -->

===

@[giphy]({"token":"l4lIagQE7agvu", "className":"large"})

===
<!-- {.xx-large} -->

A number could be…
::a ==memory== pointer!:: <!-- {span: .fragment} -->

===
<!-- {.punchline} -->

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
<!-- {.punchline} -->

We need 
==High-level== tools <!-- {.fragment .stabilo} -->

===

Instanciate: Fetch! <!-- {.large} -->

```js
fetch('my-module.wasm')
  <span class="fragment">.then(res => res.arrayBuffer())</span>
  <span class="fragment">.then(instance => WebAssembly.instantiate(instance))</span>
  <span class="fragment">.then(module => {
    // module.instance.exports[...]
    <span class="fragment">module.<span class="fragment">instance.exports.</span><span class="fragment">greet(<span class="fragment">'Folks'</span>)</span></span>
  })</span>
```

===

<!--{ .large }-->

Execution timeline <!-- {.large} -->

1. Fetch <!-- {li: .fragment} -->
2. Load / Compile ::(×2)::<!-- {.fragment} --> <!-- {li: .fragment} -->
3. Instantiate <!-- {li: .fragment} -->
4. Access fn <!-- {li: .fragment} -->

- [Cranelift Code Generator](https://cranelift.readthedocs.io/en/latest/)
<!-- {ul: .linkrolls} -->


===
<!-- {.punchline} -->

We need
a ==packer== <!-- {.fragment .stabilo} -->

===
<!-- {.large} -->

We do need <!-- {.large} -->

- Static types ready to compile
- Good-memory management
- Bindings to JS
- Packing toolchain

===
<!-- {.large} -->

We do ==not== need <!-- {p:.large} -->

- a new VM <!-- {li: .fragment} -->

<!--  -->

- [Calls between JavaScript and WebAssembly are finally fast 🎉](https://hacks.mozilla.org/2018/10/calls-between-javascript-and-webassembly-are-finally-fast-%f0%9f%8e%89/)
- [Lin Clark WebAssembly series](https://hacks.mozilla.org/author/lclarkmozilla-com/)
<!-- {ul: .linkrolls} -->
