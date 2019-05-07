<!--{section^1:data-breadcrumb="Back to basics"}-->

<!--{.interleaf data-background-image="/img/unsplash/kasya-shahovskaya-737394-unsplash.jpg"}-->
<!-- Photo by Kasya Shahovskaya on Unsplash -->

## Back to basics: C'est pas si simple

===
<!--{ .left.xx-large }-->
### Stack Based VM

===

Stack based ::vs.::{.small} Register based {.large}
- Register proche CPU, plus performant
- Stack plus flexible, plus léger
- JVM, CLR &… JS JIT : stack based VM {.fragment .fade-up}

<!-- -->
- [Stack Based Virtual Machines](https://andreabergia.com/stack-based-virtual-machines/)
{.linkrolls}

===

Stack based VM {.large}

![](../img/Stack_3.png){.bg .large}

===

Magic! {.large}

![](../img/Stack_4.png){.bg .large}


===
<!--{ .punchline }-->

La stack est le point ==central==

???

arithmétique, boucles, conditions, etc

===
<!--{ .left .xx-large}-->

Opération : `(1 + 2 * 3) / 7`{.fragment}
instructions: `1.`{.fragment}`2.`{.fragment}`3.MUL.`{.fragment}`ADD.`{.fragment}`7.`{.fragment}`DIV`{.fragment}

???

Notation polonaise inversée

===

Assembleur ! {.large}

```wasm
PUSH 1
PUSH 2
PUSH 3
MUL
ADD
PUSH 7
DIV
```

- https://andreabergia.com/stack-based-virtual-machines-8/
{.linkrolls}

===
<!--{ .left.xx-large }-->
### Moteur ~~JS~~ logique

===
<!--{ .x-large }-->

- SpiderMonkey
- V8
- Chakra
- JavaScriptCore (JSC)

===
<!--{ .x-large }-->

Au départ :{.large}
- JS VM engine
- Interpreteur
- Compilateur JIT

===
<!--{ .punchline }-->

Le compilateur JIT
produit un code machine
rapide mais limité

===
<!--{ .large }-->

WASM utilise le même ==moteur== {.large}
- échanges JS {.fragment}
- _unboxing_ {.fragment}
- appels monomorphiques {.fragment}
- les methodes _built-ins_ {.fragment}

<!-- -->
- [Calls between JavaScript and WebAssembly are finally fast 🎉](https://hacks.mozilla.org/2018/10/calls-between-javascript-and-webassembly-are-finally-fast-%f0%9f%8e%89/)
{.linkrolls}

===
<!--{ .left.xx-large}-->

Moteur d'exécution capable de
manipuler **tous** les langages logiques,
pour le Web !

===
<!--{ .left.xx-large }-->
### Rust

===

Pourquoi Rust ? Parce que :{.large}
- C++, c'est mignon, mais merci, j'ai qu'un cerveau {.fragment}
- supprime les data-race par design {.fragment}
- fortement typé {.fragment}
- iterators ! {.fragment}
- excellent controle de la memoire {.fragment}
- communauté {.fragment}
- toolchain {.fragment}

===

Hello World
```rust
fn main() {
    // Print text to the console
    println!("Hello World!");
}
```

===

Modules By Design
```rust
mod sound {
    pub mod instrument {
        pub fn pouet() {
            // ...
        }
    }
}
```
```rust
fn main() {
    crate::sound::instrument::pouet();
}
```

===

Typing & iterators
```rust
mod squares {
    pub fn sum_from_zero( n<span class="fragment" data-fragment-index="1">: i32</span>) -> <span class="fragment" data-fragment-index="1">i32</span> {
        (<span class="fragment" data-fragment-index="2">0 ..= n</span>).<span class="fragment" data-fragment-index="3">fold</span>(0, <span class="fragment" data-fragment-index="4">|a, b| a + b</span>)
    }
}
```

===

Cargo
```sh
$ cargo build
   Compiling hello_world v0.1.0 (file:///path/to/package/hello_world)
```
```sh
$ cargo run
     Fresh hello_world v0.1.0 (file:///path/to/package/hello_world)
   Running `target/hello_world`
Hello, world!
```
