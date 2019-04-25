<!--{section^1: data-breadcrumb="Cryptanalysis"}-->

<!--{.interleaf data-background-image="/img/unsplash/133200.jpg"}-->
<!-- Photo by Andrew Neel on Unsplash -->

## Cryptography & Cryptanalysis

???

Let's start from the very beginning. We split cryptography into two realms. On the first hand, cryptographers; on the other hand, cryptanalysts. The former try to make data unreadable. The latter do their best to break the code and get the plain version without knowing the key. When they break it, cryptographers enforce their algorithms. Cryptanalysts will try to break it again, in an endless run.

===

### Once upon a time

@[giphy]({"token":"VcizxCUIgaKpa","className":"medium"})

???

So, here's a story for you (I _love_ stories). I want to show you some parts cryptography in history, because digital ciphers inherit those historic parts.

===

#### Caesar Cipher

<!-- SVG ANIM: Shift Cipher Wheel -->

![Shift Cipher Wheel](../img/shift-cipher-wheel.png){.small}

???

The first know cipher is the _Caesar Cipher_, or _Shift Cipher_. You must know it because you probably played with it when you were kids. It was at the same time you started to play with lemon juice to send invisible telegrams to your friends.

It takes 2 alphabets, along a wheel. You rotate counter-clockwise the cipher alphabet around the shift parameter, let's say 3 here. The shift param is the _key_. Then, you replace each letter in the plain text with the corresponding one in the cipher alphabet. So, _A_ becomes _D_, _B_ becomes _E_, and so on.

Julius Caesar was the first known to use it in his private correspondence. It is still used in digital ciphers like ROT13. In fact, the substitution pattern is still used in most digital ciphers.

The problem is the number of combinations: you only have 25 substitutions available (in the 26th one, _A_ stays _A_, so we can't consider it as... _strong_). It doesn't take a long time to find the right key and decipher the text.

===

#### Vigenère Cipher

<!-- SVG ANIM: Vigenère Cipher Square -->

![](../img/vigenere-cipher.jpg){.small}
<!--{figure:.reset}-->

```txt
Plain text:  ATTACK AT DAWN
Cipher key:  LEMON<span class="fragment fade-in">L EM ONLE</span>
Cipher text: <span class="fragment fade-in">L</span><span class="fragment fade-in">X</span><span class="fragment fade-in">F</span><span class="fragment fade-in">OPV EF RNHR</span>
```

???

Later, in the mid-16th century. A new kind of cipher based on the _Shift Cipher_ appeared. "The Vigenère Cipher" is a polyalphabetic substitution.

Here's how it works: we've got a matrix that contains 26 shift substitutions. We pick up a key. Here, we choose the **LEMON** keyword. Then, we have the plain text we want to encrypt with this key. Here, it's the **ATTACK AT DAWN** string. We pad the key to get the same number of characters as the string we need to encrypt. It gives **LEMON LEMON LE**. Then, we apply the substitution to each character. We start by encrypting the first **A** with the **L** key. Based on the matrix, we get a **A**. The next **T**, encrypted with a **E** gives a **X**. The third character, another **T**, encrypted with **M**, gives a **F**. And so on.

Here's the whole power of the Vigenère algorithm. The same character can become any of the 26 chars of the alphabet, depending on its encrypting char in the key. Also, a text gives a different encrypted result with a different key.

The Vigenère cipher makes the _Frequency Analysis_ unsable. _Frequency Analysis_ is a strong cryptanalysis technic. It was first explained by Al-Kindi, an Arab polymath, in the 9th century. It uses the fact that all languages have common and rare letters. For instance, in English, _E_, _T_, _A_, and _O_ are the most common letters; _Z_, _Q_, and _X_ are the rare. Monoalphabetic ciphers preserve that pattern in the ciphertext. You can count the number of each occurrence of a letter in the encrypted content. Then you can deduce the original letter, based on its distribution across the text.

Vigenère cipher broke this pattern when the same letter can have plenty of substitutes. It makes the _Frequency Analysis_ unusable in its primary form. It took 3 centuries to cryptanalysts to break the polyalphabetic substitution. Funny enough, _frequency analysis_ combined with other technics finally broke it. Nevertheless, digital ciphers improved this pattern by making complex substitutions.

===

The 1^st^ Breach: ==Repetitions== {.left}

_Frequency Analysis_
defeats any ciphers where a
_Common Denominator_
leads to repetitions
<!--{p:.punchline}-->

???

So this is our first breach: [...]

===

#### Enigma

![](../img/enigma.jpg){.medium}

???

Then, back to the last century. This machine is _Enigma_. It's a cipher hardware invented between the two World Wars. Its inventor, an Austrian engineer, sold it to the Reich. Germans used it during the World War II to secure radio transfer of military orders. It uses a robust, complex, and unpredictable substitution algorithm to encrypt the text. It's known to be impossible to break.

Spoiler: I'm French, and it was finally broken; otherwise I would give this talk in German.

We broke it thanks to two events. The first one is that spies stole the plan of the machine. It allowed UK engineers to understand how it worked, and try to find a way to decipher its production. The second one is Alan Turing. During War, Majesty Secret Service enrolled scientists to help to decipher transmissions. Turing was one of them. He imagined the first electromechanical computer: _The Bombe_. It automated the decryption of intercepted transmissions. Also, it used... _frequency analysis_!

Here's what happened. Engima Operators needed to choose a different key for each transmission. When you're under the bombs, in frontline of operations, stressed, you can't find each time a new passphrase. This is what happened to the Germans. They tended to use the same passphrase, called _cillies_; Which lead to repetitions. Turing's Bombe applied statistic principles on large amount of ciphertexts. They detected cillies, and finally broke the codes. Another fail for the CKI.

===

==Key== protection is essential

![xkcd://538](https://imgs.xkcd.com/comics/security.png){.medium}

???

The only version of Enigma we couldn't break even using the _Bombe_ was the Navy one. They used an advanced version of their military communication protocol, with codebooks. Each codebook expired in a month and contained a different key and settings for each day. The German Navy secured protocol was too high to allowed _Bombes_ to decipher texts.

We broke them once. UK navy chooses to sink an SS submarine, enter in it during its sinking, and save a codebook. It allowed Secret Service to decipher transmissions in real time for several days.

I call this a **Brute Force Attack**. Period.

===

The 2^nd^ Breach: Spying and Brute Force Attack {.left}

There is no pattern strong enough to resist an endless attack.
<!--{p:.punchline}-->

???

It brings us to the second breach: [...]

===

### Digital Encryption


@[giphy]({"token": "QhCAwDXZ0BltK", "className": "medium"})

**Single Token**, the Cipher Graal

???

Many researchers and military experts early understood the need of a single token for each operation. It avoids both repetitions and brute force risks.

This principle is impossible to apply in everyday use, in a physical world. It implies to send or compute this single token for each encrypted message.

So it remains an ideal approach impossible to adopt. Until the digital age...
