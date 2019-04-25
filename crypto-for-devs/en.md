---
title: Cryptography for newcomers
subtitle: The hitchhiker's guide to cipher in devs
description: All the answers you always expected about cryptography, from scratch, for everyone
notes: |
  Hi Everyone!

  Thank you for having me today, and thank you for coming.

  I'm thrilled to give this talk for the first time in the USA at Connect.Tech. I gave it for the first time 3 years ago. I'm still surprised by its longevity, but more than ever, we need to talk about cryptography.

  So, let's talk about ciphers!
---

+[section](sections/en/01-responsibility.md)

+[section](sections/en/02-encryption.md)

+[section](sections/en/03-cryptanalysis.md)

+[section](sections/en/04-oneway.md)

+[section](sections/en/05-decrypt.md)

+[section](sections/en/06-trust.md)

### Protect

- Network ::--> ~~SSL~~/TLS, chain of trust::{.fragment .typewriter}
- Passwords ::--> Hashing functions::{.fragment .typewriter}
- Data ::--> Asymmetric Cipher w/ Key Wrapping, HSM::{.fragment  .typewriter}
{.x-large}

???

The purpose of cryptography is to protect.

Network? There are TLS and Certificates;
Passwords? Use password Hashing;
Data? Do key-wrapping and asymmetric encryption, with HSM devices when you can.

+[section](sections/en/07-tooling.md)

+[section](sections/en/08-conclusion.md)
