<!--{section^1: data-breadcrumb="Trust"}-->

<!--{.interleaf data-background-image="/img/unsplash/468174.jpg"}-->
<!-- Photo by Chunlea on Unsplash -->

## Keys Exchange, Certificates, Signatures

???

So, we know how to encrypt data too. It's time to deal with the rest of cryptography: key exchange, certificates, signatures. All those things that allow us to trust our data.

===

### Symmetric Key

- one key for all operations
- fast
- critic on key exchange {.fragment .fade-in}

???

The fastest and simpler algorithms used are symmetric ciphers. But because the key need to be transferred, it's difficult to maintain its security.

Researchers early found that a system able to use two keys for operations is more robust. Unfortunately, it's way more difficult to design than explain.

===

### Diffie-Hellman

<!-- SVG ANIM: Diffie Hellman -->

![](../img/Diffie-Hellman_Key_Exchange.jpg){.medium}

???

During their journey to find a valid public-key cipher, Diffie and Hellman found an alternative. Here's how this key exchange pattern works.

We need to use a symmetric key to encrypt a message, without the need to share it. Each recipient have a private key. They both publicly agree on a shared secret. Anybody can see it. Each recipient mix its private key and the public secret. Then they exchange those mix. Each of them mix the other recipient payload with their own private key. And _BOOM_, both get the same result! (Do not try to do it with paint, it doesn't work.)

Using a common public secret, they both can generate the same key on their side and use it as a symmetric key. Diffie and Hellman were early aware that their pattern presents some leaks. You need to exchange parts that implies your private key. So, it can be retro-engineered at a given time. It can't be a strong enough solution for long-term exchanges. But, for short-term communications, it's enough. That's why it's used in TLS communications (the _s_ in _HTTPs_). Server and Client generate random secret keys, share a common secret, and generate the symmetric key that will protect a single request-response HTTP transfer. At each new request, the whole process is replayed.

===

### Asymmetric Keys And Key Wrapping

1. Encrypt the message with a symmetric cipher and random key (e.g. IDEA)
2. Encrypt the symmetric key with an asymmetric cipher (e.g. RSA) {.fragment .fade-in data-fragment-index="1"}
3. Concatenate both encrypted part in one message {.fragment .fade-in data-fragment-index="2"}
4. Decrypt the symmetric key using the private key {.fragment .fade-in data-fragment-index="3"}
5. Decrypt the message with the symmetric key {.fragment  .fade-in data-fragment-index="3"}
{.medium}

???

A bottleneck with asymmetric ciphers is their CPU time to perform encryption. It takes a loooooong time, which isn't acceptable when doing day-to-day operations.

So, it's more powerful to encrypt a message with a random symmetric key. Then we encrypt this key with the asymmetric public key, which is fast because a key is always tiny. We pack both, send it, and do the opposite operation to decrypt the message.

This key-exchange pattern is called _key wrapping_. It takes both of the two worlds, including randomness and fast operations.

===

@[giphy]({"token":"WZ4M8M2VbauEo","className":"medium","caption":"Pretty Good Privacy"})

???

It's the principle behind PGP, which was a promise of cryptography for everyone. Which worked well because everybody uses it nowadays. Yeah, I know. It's one of the big fails of PGP and encryption. It proves that it stays too complicated for people to handle it easily. Use it, really. It's dead simple after all.

===

### Signature

- Reversed Asymmetric Cipher
- For trusting purposes only

???

A side effect of asymmetric ciphers is that you can also encrypt with your private key and decrypt with the public one. It's useless for security purposes because your public key is public. Everybody could decipher your message, so it protects nothing. But, if you're able to decipher using a public key, it means that it was encrypted using the associated private key. And you're its only owner. So if a message comes, encrypted with your private key, no-one but you can have sent it.

This pattern is called _signature_. It's a straightforward way to ensure your message comes from an identified entity.

My mother prefer to do it by phone. I recently sent her an e-mail asking for old photos of me, to send to a colleague she doesn't know. She called to ask me if I was the original sender of the mail before leaking some compromising contents. I guess I definitely need to explain PGP to my mom, because I signed the mail.

===

### Certificates

- Chain Of Trust
- Revocate identities
- X.509

<!-- -->

- [CryptoParty][6.2]
- [Let's Encrypt][6.1]

{.linkrolls}

???

Problem is: how to ensure that the public key you get belongs to your recipient?

For people, we have _Signin Parties_. You physically encounter people and sign their public key with your private key. It builds a chain of trust that allows you to trust the final public key.

However, for bigger entities, you can't encounter them physically. So we build a certificates authorities system, that builds a pyramidal chain of trust. Services exposes a certificate used to sign their public keys. A trusted authority delivers this certificate, signed by its private key. It can be an intermediate authority certified by another top authority, and so-on. _Let's Encrypt_ is a project that delivers free of charge that kind of certificates. It allows everyone to certify the public key used by its service.

The advantage is that you can revocate a certificate at any time. It immediately invalidate the associated public key, in case of failure.

The main inconvenient is that it's a centralized chain of trust. We saw this limit 2 years ago. Symantec, which is a top-level authority, bought Blue Coat, a company that sells DPI systems. Certificates involved in their tools became the property of Symantec. They said they are separated, and there is nothing to be affraid of. But we saw many revocations of certificates in the whole chain of trust.


[6.1]: https://letsencrypt.org/
[6.2]: https://www.cryptoparty.in/
