<!--{section^1: data-breadcrumb="Outils"}-->

<!--{.interleaf data-background-image="/img/unsplash/617456.jpg"}-->
<!-- Photo by Lachlan Donald on Unsplash -->

## Outils

===

### Langages bas-niveau

- Modules Kernel / OS
- Bibliothèques (OpenSSL)
- Accès matériel direct (AES-NI, Co-processor)

===

### Langages serveur

- Python: Cryptography / PyCrypto
- Ruby: RbNaCl
- Node.js: Crypto built-in module
- PHP: Mcrypt
- Java: JCE Framework
{.x-large}

*[JCE]: Java Cryptography Extension

===

### Navigateur

@[giphy]({"token":"yoJC2Olx0ekMy2nX7W","className":"large","caption":"WebCrypto API"})

===

WebCrypto API

```js
window.crypto<span class="fragment" data-fragment-index="1">.subtle</span><span class="fragment" data-fragment-index="2">.encrypt(/* ... */)</span>
  <span class="fragment" data-fragment-index="3">.then(encrypted => {
    <span class="fragment" data-fragment-index="4">// return an ArrayBuffer containing the encrypted data</span>
    <span class="fragment" data-fragment-index="4">console.log(new Uint8Array(encrypted))</span>
  })
  .catch(err => {
    console.error(err)
  })</span>
```

@[giphy]({"token": "ANbD1CCdA3iI8", "className": "x-small", "fragment": "current-visible", "attrs": "data-fragment-index=1"})

===

Algorithmes supportés

- RSASSA-PKCS1-v1_5 / RSA-OAEP
- AES-CBC / AES-GCM / AES-KW
- HMAC
- SHA-256 / SHA-384 / SHA-512
{.large}

::Mais les ==éditeurs== choisissent lesquels implémenter::{.fragment .fade-in} ::(vous vous rappelez `canPlayType`?)::{.fragment .fade-in}

===

Bibliothèques navigateur

- js-nacl
- jsencrypt
- jwcrypto
- CryptoJS
- ...
{.large}

<!-- -->
- [gist://jo/8619441](https://gist.github.com/)
{.linkrolls}
