---
title: Building Zero Knowledge
subtitle: A ZKA Backend w/ Node.js
description: >
    Let's gonna see how to build a Zero Knowledge backend, involved in data transfer and keys-echange system, with a JS client-side lib.
---

@[giphy]({"token":"11GTAn3F08vjXy","className":"medium", "caption": "Our Mission: to protect the Data Flow"})

===
<!-- {.punchline} -->

We Need ::Encryption::{.fragment .stabilo}

===
<!-- {.punchline} -->

Backend has to be ::agnostic::{.fragment .stabilo}

===

Stick to the Venerables **HTTP Verbs**

@[giphy]({"token":"Cu0Iqwal4cPyU","className":"medium"})

+[section](en/zka.md)

+[section](en/backend.md)

+[section](en/nodejs.md)

<!-- {.punchline} -->

It's ==not== that complex
::(at least on the backend side)::{.x-small .fragment .fade-up}

===
<!-- {.punchline} -->

It's mostly a ::REST API::{.fragment .stabilo}
with some ::Crypto sugar::{.fragment .stabilo}

===
<!-- {.large} -->

Your Tools {.large}

- JWT
- Signatures
- Datetime Tokens

<!--  -->
- [JSON Web Tokens](https://jwt.io/)
- [An Introduction to Cryptography and Digital Signatures](https://www.entrust.com/wp-content/uploads/2013/05/cryptointro.pdf)
- [Message authentication code (Wikipedia)](https://en.wikipedia.org/wiki/Message_authentication_code)
- [NodeJS port of the Python itsdangerous module](https://github.com/willi123yao/reallydangerous)
<!-- {ul:.linkrolls} -->

===
<!-- {.punchline} -->

The complex part
is on the Client
and requires a ==lot== of Crypto

- [Zero Knowledge Architecture, is it possible?](https://preview.talks.m4dz.net/zka/en/)
<!-- {ul:.linkrolls} -->
