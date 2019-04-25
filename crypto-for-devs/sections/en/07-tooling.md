<!--{section^1: data-breadcrumb="Tooling"}-->

<!--{.interleaf data-background-image="/img/unsplash/617456.jpg"}-->
<!-- Photo by Lachlan Donald on Unsplash -->

## Tooling

???

Let's talk a bit about how to use cryptography, especially in modern architectures.

===

### Low-level languages

- OS modules
- Librairies (OpenSSL)
- Hardware (AES-NI, Co-processor)

???

If you're working in a low-level environment, you can rely on your operating system modules. You can also use low-level libraries, like OpenSSL. For embedded software you can use processor set of instructions, like Intel's AES-NI. Or use a co-processor dedicated to cryptographic tasks.

Even so, it's a hard job that requires many security skills.

===

### Backend languages

- Python: Cryptography / PyCrypto
- Ruby: RbNaCl
- Node.js: Crypto built-in module
- PHP: Mcrypt
- Java: JCE Framework
{.x-large}

*[JCE]: Java Cryptography Extension

???

For advanced scripting languages, there's a wide list of extensions dedicated to cryptography. They contain everything you need to hash, encrypt, decrypt, randomly generate, sign, etc. Use them. Always.

===

### Browser side

@[giphy]({"token":"yoJC2Olx0ekMy2nX7W","className":"large","caption":"WebCrypto API"})

???

In the browser, there is a spec, produced by the _W3C WebCrypto Woking Group_. I know the group's chairwoman, and when she told me they are working on a spec, I was pretty happy. Then I read the spec.

It is the most obscure, unsable spec produced by the W3C. It's a paper from researchers and security experts, for cryptographers. If you're not involved in cryptography, you must give it up.

===

WebCrypto API

```js
window.crypto<span class="fragment fade-in" data-fragment-index="1">.subtle</span><span class="fragment fade-in" data-fragment-index="2">.encrypt(/* ... */)</span>
  <span class="fragment fade-in" data-fragment-index="3">.then(encrypted => {
    <span class="fragment fade-in" data-fragment-index="4">// return an ArrayBuffer containing the encrypted data
    console.log(new Uint8Array(encrypted))</span>
  })
  .catch(err => {
    console.error(err)
  })</span>
```

@[giphy]({"token": "ANbD1CCdA3iI8", "className": "x-small", "fragment": "current-visible", "attrs": "data-fragment-index=1"})

???

Nevertheless, it's an official spec since Jan. 2017, even if the group was dissolved then.

The API exposes a root namespace, crypto, which exposes a subtle subnamespace. Probably because it's too subtle to be used by Beotians. Joking. That's because Microsoft tried some crypto implementations in this namespace back in the days.  And you know. We, as web developers, are the only ones that ship code compatible with more than 25 years old interpreter.

The hard trick is that all functions exposed by the WebCrypto API use _promises_, and _binaries_. So you have to convert a lot of data from and to their binary form to manipulate them. I don't say it's impossible, but it's far than a simple thing.

===

Supported algorithms

- RSASSA-PKCS1-v1_5 / RSA-OAEP
- AES-CBC / AES-GCM / AES-KW
- HMAC
- SHA-256 / SHA-384 / SHA-512
{.large}

::But ==editors== choose which ones::{.fragment .fade-in} ::(do you remember `canPlayType`?)::{.fragment .fade-in}

???

The spec officially supports a lot of modern ciphers. Unfortunately, no one is mandatory. Browsers editors choose which one to include in their browser. You have to test each one to know if it is supported or not.

Do you remember _can play type_? The _HTML media_ element has a _can play type_ function, allowing you to ask if the browser supports your media format. This function can return a boolean (true/false); or _maybe_; or _probably_. Funny, right? That's when your browser can't read the media by itself but can expect the OS can do it directly. Same thing here: no guarantee your browser supports your cipher.

So it's a low-level API.

===

Browser libs

- js-nacl
- jsencrypt
- jwcrypto
- CryptoJS
- ...
{.large}

<!-- -->
- [gist://jo/8619441](https://gist.github.com/)
{.linkrolls}

???

When I gave this talk three years ago, I said: "I hope we will see high-level API coming soon, like a _JQuery for crypto_." Here it is! There are now many JS libs based on WebCrypto, that allow you to manipulate ciphers in the browser. You can find a curated list of them in this gist.
