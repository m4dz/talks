<!--{section^1: data-breadcrumb="Symmetric And Asymmetric"}-->

<!--{.interleaf data-background-image="/img/unsplash/57353.jpg"}-->
<!-- Photo by drmakete lab on Unsplash -->

## Symmetric vs. Asymmetric

???

Well, hashing is great, but you may need to decipher your data.

We distinguish two kinds of encryption algorithms. Those that use a single key to both encrypt and decrypt – the symmetric ciphers. And those that use a pair of different keys: one for encryption, and one for decryption. They are the asymmetric ciphers.

Let's start with symmetric ciphers. We can split them into two categories:

===

### Block Ciphers

- ~~DES (Data Encryption Standard)~~
- AES (Advanced Encryption Standard)
- IDEA
- BlowFish
{.medium .reset}

@[giphy]({"token":"PGDgYYGVDk8Qo","className":"small"})

???

First, the block ciphers. Symmetric ciphers substitute elements in your data blob. Exactly like what we've done with the Shift Cipher or the Vigenère Table.

Block Ciphers take a data block, and do a shift on it. Then often use more complex variables, where they also do permutations between blocks. They use a fixed length key, and _pad_ it (like we did with the _LEMON_ key) to adapt it to the length of the data blob to encrypt.

You will encounter the DES algorithm a lot. It's the real first one digital cipher algorithm released. It has been deprecated for a while now. Its next generation is AES, even if it tends to be weak right now.

Other well-known options are IDEA or BlowFish. There are many alternatives available; it depends what and how you need to encrypt data.

===

### Stream Ciphers

- ~~RC4~~
- ChaCha20 ::?::{.fragment .fade-in data-fragment-index="1"}
- Panama ::?::{.fragment .fade-in data-fragment-index="1"}
{.medium .reset}

@[giphy]({"token": "3o85xmYPgg7QFaJFEk","className":"medium"})

???

Stream Ciphers encrypt an uninterrupted flow of data. They don't need to first know the length of the data blob to encrypt. They use a key generated with a CSPRNG. They apply substitutions based on it. Stream ciphers allow varying block that resynchronize and adapt themselves on the fly.

Unfortunately, to keep the system secured, you need to generate a cipherkey as long as data flows. Your cipherkey will grow extensively and overflow your memory at a given point. To avoid that, we often reuse the key in a padding pattern; Which introduces repetitions.

Repetitions are bad. Really, really bad.

RC4 was one of the first stream cipher algorithms and was used in WPA to protect WiFi connections. Due to its setup process and key repetition, attackers may deduce the key and decipher the WPA data flow.

RC4 is deprecated, and WPA finally came back to AES. You can find stream ciphers alternatives like ChaCha20 or Panama. But they're not reviewed enough to be considered as safe.

One potential candidate to strong stream ciphers is quantum computers. Right now, we are still trying to understand what _quantum_ means, so, let's say it's not for tomorrow.

===

Computers aren't
truly ==random==
<!--{p:.punchline}-->

???

One big issue with computer is finally pretty simple. Thanks to their processors design, they tend to reproduce patterns. Even when they try to generate _random_ things. Using devices that measure temperature, hygrometry variations, you can get true randomness. But they cost a lot. So, to avoid the risk of repetitions, we tried to patch the false-randomness of our computers.

===

### Padding, Randomness, IV

- unpredictible, non-deterministic values
- CSPRNG functions ::rather than direct `/dev/urandom` access::{.x-small} {.fragment .fade-in}
- IV (Initialization Vector) ::blocks used to init a cipher function and put it in a unique state::{.x-small} {.fragment .fade-in}
{.x-large}

???

To keep ciphers algorithms semantically secured, we need to introduce entropy. We use a CSPRNG function that produces a unique random number. Block ciphers uses it as first input. A block cipher often substitute a block by using a derivation where the last block in the chain takes part. When you run your block cipher on a _nonce_ before encrypting your data, you put the algorithm in a unique state. This _nonce_ serves as an _Initialization Vector_.

===

### Block modes of operation

- ~~ECB (Electronic Code Book)~~
- ~~CBC (Cipher Block Chaining)~~
- AEAD (Authenticated Encryption with Associated Data)
{.large}

<!-- -->

- [Padding oracles and the decline of CBC-mode cipher suites][5.1]
{.linkrolls}


[5.1]: https://blog.cloudflare.com/padding-oracles-and-the-decline-of-cbc-mode-ciphersuites/

???

Ciphers can run in several block modes of operation. A block cipher algorithm only encode... a block! If your data is larger than a block, you need to repeat to cipher block and iterate. The _mode of operation_ defines how to apply this repetition (bad, bad thing, repetition), and keep them secure enough.

ECB and CBC are the most common ones, but they are now easy to break. We now rely on double pass modes of operation that both encrypt and confirm data integrity. They form the AEAD group. Most common and secure is the EAX mode. Please use AEAD modes as often as you can.

===

A symmetric ==key==
must be shared,
which means it could **leak**
<!--{p:.punchline}-->

???

I spent some time to speak about symmetric algorithms and their modes. They present a huge weakness. You need the same key to both encrypt and decrypt content. It means you need to transfer it to your recipient in case of communication. A transfer means it can be intercepted.

So we need another way to deal with encryption.

===

### Bob & Alice

<!-- SVG Anim: RSA -->

![](../img/asymmetric-encryption.png){.large}

???

The solution is named _Public-Key cryptography_, or _Asymmetric key cryptography_. Here, we use not one, but two keys. Those keys work in pairs. A pair combines a private key, which is private – it's in your pocket, you never show it to anyone – and public key, which is... public, indeed.

Here's how it works. I keep the private key (in my pocket), and distribute my public key for free. Then Bob wants to send me a message. To do it, he encrypts it using my public key (which is publicly available, on my website, my vcard, a registry...). I, Alice... Well, I receive the message. I can decrypt it using my _private_ key. That key is the only one that can decipher it because it's the one associated to the public key used by Bob. Because I'm its only owner, I'm the only one that can decipher the message.

===

RSA or Eliptic Curves?

@[giphy]({"token":"OrR9ATtSDmd8s","className":"large"})

???

_Public-key algorithms_ rely on the intractability of certain math problems. _RSA_ uses the complexity to factor prime numbers to verify the key-pair association. _Eliptic Curves_ use the infeasibility of finding the discrete logarithm of a random eliptic curve. They are both strong enough to protect communications. Advantage comes to _Eliptic Curves_ as the problem to solve is harder than the RSA one. It means you can use smaller keys with EC for the same level of protection.

However, they're both sensible to the Shor's algorithm. It is dedicated to run on quantum computers, and be able to solve both. So their protection isn't enough for long-term documents protection. You have to prepare to upgrade your cipher strategy, because they will fail one day.
