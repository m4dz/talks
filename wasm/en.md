---
title: A Taste Of WASM
subtitle: The Browser as a Virtual Machine
description: WebAssembly is a new langage embedded into the Web Browser, close to the venerable assembly, able to improve and fasterize computational tasks. Power the Web at lightning speed! 
---

<!--{ data-background-color="#eee" }-->

![](../img/web-assembly-logo.svg){.medium .no-borders}

???

Why WASM?

- it's more and more trendy
- it's powerful
- webapps has busines logics in the browser, and JS is not powerful enough

===

Remember {.large}

- 2001: ::Prototype, Scriptaculo·us, Mootools::{.fragment}
- 2005: ::jQuery::{.fragment}
- 2010: ::SPA / Backbone::{.fragment}
- 2012: ::Angular::{.fragment}
- 2015: ::virtual-dom, React, Vue.js::{.fragment}
- 2018: ::PWA::{.fragment}
- 2019: ::How is your RAM today? Good?::{.fragment}

===

Three main reasons:

@[giphy]({"token":"tIeCLkB8geYtW", "className":"small"})

- It's ==Fast==
- It's ==Secured==
- It's a "Write ==Once==, Run Everywhere"™ promise

???

TW: hang on the edge of your seat


+[section](en/what-is.md)

+[section](en/basics.md)

+[section](en/prod.md)

+[section](en/wasm-bindgen.md)

## Under the Hood

@[giphy]({"token": "5hkF0WXKLqDW4GoejJ", "className": "small"})

<!--{section: .x-large }-->

===

Status {.large}

- Compile
- Fast
- Lightweight
- Linear Memory w/ `TypedArray`

<!--{section: .large }-->

===

Server Side {.large}

- WASI
- Interface Types
- Binding Modules for any languages

<!--{section: .large }-->

- [The WebAssembly System Interface](https://wasi.dev/)
- [WebAssembly Interface Types: Interoperate with All the Things!](https://hacks.mozilla.org/2019/08/webassembly-interface-types/)
- [Wasmer.io](https://wasmer.io/)
<!-- {ul: .linkrolls} -->

===

What about the Security? {.large}

- Sandboxed
- Deterministic Execution w/ Limited Exceptions
- Control-flow Integrity
- Protected Call-stack in Linear Memory
- Embedding Security Policies

<!-- {section: .large} -->

- [WASM Security Model](https://webassembly.org/docs/security/)
- [WebAssembly security: potentials and pitfalls](https://www.forcepoint.com/blog/x-labs/webassembly-potentials-and-pitfalls)
- [Security Chasms of WASM](https://i.blackhat.com/us-18/Thu-August-9/us-18-Lukasiewicz-WebAssembly-A-New-World-of-Native_Exploits-On-The-Web-wp.pdf)
<!-- {ul: .linkrolls} -->

===

Comming Soon {.large}

- Multi-threading
- Streaming compilation/Tiered Compiler
- JS Modules exchange/Garbage Collector
- Portability/Runtime/IoT

<!--{section: .large }-->

- [WebAssembly’s post-MVP future: A cartoon skill tree](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/)
{.linkrolls}

===

### Know The Web!

- HTML/DOM ::→ Interfaces::{.fragment}
- CSS ::→ Layouts/Style::{.fragment}
- JS ::→ UI Thread::{.fragment}
- WASM → Background Processes {.fragment .fade-up}

<!--{section: .large }-->

- [WebAssembly Studio](https://webassembly.studio/)
- [Yew](https://github.com/DenisKolodin/yew)
- [Blazor](https://blazor.net/)
{.linkrolls}
