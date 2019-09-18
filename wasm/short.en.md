---
title: A Taste Of WASM
subtitle: The Browser as a Virtual Machine
description: >-
  WebAssembly is a new langage embedded into the Web Browser, close to the
  venerable assembly, able to improve and fasterize computational tasks.
  Power the Web at lightning speed! 
---

Remember <!-- {.large} -->

- 2001: ::Prototype, Scriptaculo·us, Mootools:: <!-- {.fragment} -->
- 2005: ::jQuery:: <!-- {.fragment} -->
- 2010: ::SPA / Backbone:: <!-- {.fragment} -->
- 2012: ::Angular:: <!-- {.fragment} -->
- 2015: ::virtual-dom, React, Vue.js:: <!-- {.fragment} -->
- 2018: ::PWA:: <!-- {.fragment} -->
- 2019: ::How is your RAM today? Good? 🤮:: <!-- {.fragment} -->

===
<!-- {.punchline} -->

We are developping ==apps==!

===

![So...](../../img/what-do-we-want-meme.jpg)

===
<!-- {.large} -->

We need: <!-- {.large} -->

- ==Secured== Environment
- ==Faster== Execution
- ==Shared== Domains Logics

===
<!-- {data-background-color="#eee"} -->

![](../../img/web-assembly-logo.svg) <!-- {.medium .no-borders} -->


+[section](short/en/basics.md)


@[giphy]({"token":"81xwEHX23zhvy", "className":"large","caption":"Is it secured enough?"})

===

Security Model <!-- {.large} -->

- Sandboxed
- Deterministic Execution w/ Limited Exceptions
- Control-flow Integrity
- Protected Call-stack in Linear Memory
- Embedding Security Policies

<!--  -->

- [WASM Security Model](https://webassembly.org/docs/security/)
- [WebAssembly security: potentials and pitfalls](https://www.forcepoint.com/blog/x-labs/webassembly-potentials-and-pitfalls)
- [Security Chasms of WASM](https://i.blackhat.com/us-18/Thu-August-9/us-18-Lukasiewicz-WebAssembly-A-New-World-of-Native_Exploits-On-The-Web-wp.pdf)
<!-- {ul: .linkrolls} -->


+[section](short/en/hands-on.md)


## What's under the Hood?

@[giphy]({"token": "5hkF0WXKLqDW4GoejJ", "className": "small"})

===

Fantastic Four! <!-- {.large} -->

![](../../img/firefox.svg)<!-- {.xx-small .no-borders .no-background} -->![](../../img/chromium.png)<!-- {.xx-small .no-borders .no-background} -->![](../../img/safari.svg)<!-- {.xx-small .no-borders .no-background} -->![](../../img/edge.svg)<!-- {.xx-small .no-borders .no-background} -->

===
<!--{ .punchline }-->

Open Standard

- [WebAssembly.org](https://webassembly.org/)
<!-- {ul: .linkrolls} -->

===
<!-- {.large} -->

Current Status <!-- {.large} -->

- Compile
- Fast
- Lightweight
- Linear Memory w/ `TypedArray`


===

Comming Soon <!-- {.large} -->

- Multi-threading
- Streaming compilation/Tiered Compiler
- JS Modules exchange/Garbage Collector
- Portability/Runtime/into
- WASI/Interface Types
- Binding Modules for any languages


<!--  -->

- [WebAssembly’s post-MVP future: A cartoon skill tree](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/)
<!-- {ul: .linkrolls} -->


===

## Know The Web!

- HTML/DOM ::→ Interfaces::{.fragment}
- CSS ::→ Layouts/Style::{.fragment}
- JS ::→ UI Thread::{.fragment}
- WASM → Background Processes {.fragment .fade-up}

<!--  -->

- [WebAssembly Studio](https://webassembly.studio/)
- [Yew](https://github.com/DenisKolodin/yew)
- [Blazor](https://blazor.net/)
<!-- {ul: .linkrolls} -->
