name: cover
class: middle

# La Crypto pour les Devs

![:ref]


---
name: speaker
class: center

![mad hatter](../img/mad-hatter.gif)

# m4dz

**Happy Dev UI & Quality defender**

.extras[
[m4dz.net](https://m4dz.net) | [@m4d_z](https://twitter.com/m4d_z) | PGP [7D969710](http://m4dz.net/7D969710.asc)
]


.org[
## ![Cozy Cloud](../img/cozy.svg)

.extras[
  [cozy.io](https://cozy.io)
]
]


---
class: section
background-image:

# La responsabilité du developpeur


---
layout: true

.breadcrumb[La responsabilité du développeur]


---
# La limite des mots de passe : l'interface CC

[The Scary Truth About Your Passwords](https://blog.lastpass.com/2014/09/the-scary-truth-about-your-passwords-an-analysis-of-the-gmail-leak.html/)


---
# m'en fous, on n'héberge pas de données sensibles

`(╯°□°)╯︵ ┻━┻`


---
class: inverse
# Une seule solution


---
# Chiffrer

(ou crypter, troll detected)

![deal with it](./deal-with-it.gif)


---
- guerre de l'information
- tracking et recroisement
- identité numérique


---
# **Aucune donnée sensible ne devrait circuler ou être stockée en clair**


---
layout: false
class: section
background-image:

# Chiffrer ?


---
layout: true

.breadcrumb[Chiffrer?]


---
# Chiffrement

![manga fear](./manga-fear.gif)


---
# Plus question de reculer


---
# NSA / Prism / Loi Renseignement

![NSA](./nsa.jpg)


---
# La crypto, ça n'est pas…

- l'authentification
- la sécurité
- la révocation


---
# Objectif : Protéger des informations sensibles

![Batman](./batman.gif)


---
# La crypto, c'est…

- Hash
- Encryption
- Échange de clés
- Signature


---
# Seule la clé est importante

<iframe data-autoplay width="640" height="360" data-src="https://www.youtube.com/embed/WT8tOpjTPtA?start=12&end=29" frameborder="0" allowfullscreen></iframe>

(l'algo on s'en fout)


---
layout: false
class: section
background-image:

# Cryptographie & Cryptanalyse


---
layout: true

.breadcrumb[Cryptographie & Cryptanalyse]


---
# Il était une fois…

[Alice's whie rabbit](./alice-rabbit.gif)


---
# Le Code César

![Jules César, Astérix](./juliuscaesar.jpg)


---
# Le chiffre de Vigenère

![carré de Vigenère](./vigenere_square_shading.svg)

```txt
Plaintext:  ATTACKATDAWN
Key:        LEMONLEMONLE
Ciphertext: LXFOPVEFRNHR
```


---
class: bottom-up

# La faille : les répétitions

L'analyse des fréquences rend caduques toutes protections qui utiliseraient un dénominateur commun


---
# Enigma

![Enigma](./enigma.jpg)


---
# Le chiffrement numérique


---
class: bottom-up

# La faille : l'espionnage et l'attaque par force brute

Aucun système ne peut être suffisamment robuste pour résister éternellement à une attaque


---
# La protection des clés est essentielle

![XKCD:538](./xkcd-security.png)


---
layout: false
class: section
background-image:

# Hachage, salage & entropie

 ---
 layout: true

.breadcrumb[Hachage, salage & entropie]


---
# Hachage : obfuscation des données 👍


---
class: bottom-up
# Problème

les rainbow / lookup / reverse-lookup tables


---
# Saler

- ajoute de l'entropie
- supprime les risques de répétition
- doit être **unique** et **aléatoire**


---
# On ne fait pas…

```txt
md5(sha1(password))
md5(md5(salt) + md5(password))
sha1(sha1(password))
sha1(str_rot13(password + salt))
md5(sha1(md5(md5(password) + sha1(password)) + md5(password)))
```


---
# On fait :

- génération d'un pseudo-aléatoire <abbr title="Cryptographically secure pseudorandom number generator">CSPRNG</abbr> : le salt
- application une dérivation PBKDF2 (SHA256) / Bcrypt / Scrypt sur `[salt+pasword]` avec une forte entropie
- stockage du résultat et des paramètres de génération

[Salted Password Hashing - Doing it Right](https://crackstation.net/hashing-security.htm)


---
class: bottom-up

# Défendez-vous

Un hachage sans répétition et en exécution lente limite sa surface d'attaque


---
layout: false
class: section
background-image:

# Symétrique vs Asymétrique


---
layout: true

.breadcrumb[Symétrique vs Asymétrique]

---
# Chiffrement par bloc

- ~~DES (Data Encryption Standard)~~
- AES (Advanced Encryption Standard)

--
- Stream Cipher ![badass](./badass.gif)


---
# Padding & Random

- ~~ECB (Electronic Code Book)~~
- CBC (Cipher Block Chaining)


---
class: bottom-up

# Problème

Les machines ne sont pas aléatoires


---
- besoin de données imprévisibles

--
- méthodes crypto <abbr title="Cryptographically secure pseudorandom number generator">CSPRNG</abbr> <small>(**pas** [`/dev/urandom`](http://www.2uo.de/myths-about-urandom/) directement, utilisez les méthodes des libs crypto)</small>

--
- IV (Vecteur d'Initialisation) <small>(bytes-block utilisés en initialisation d'un algo de chiffrement pour assurer son caractère unique)</small>


---
class: bottom-up

# Problème

Une clé peut être compromise : une clé symétrique doit nécessairement circuler


---
# Bob & Alice échangent leurs clés

![letter](./letter.gif)


---
layout: false
class: section
background-image:

# Clés, Certificats, Signatures & Chiffrement


---
layout: true

.breadcrumb[Clés, Certificats, Signatures & Chiffrement]


---
# Clé symétrique

- clé unique pour toutes les opérations
- rapide
- sensible sur la clé


---
# Diffie-Hellman

- sécurité supplémentaire sur les échanges
- clé publique commune
- secret partagé

![Diffie-Hellman key exchange](./Diffie-Hellman_Key_Exchange.jpg)


---
# PGP / GnuPG

- clés asymétriques (RSA) sur clé symétrique (IDEA)
- chiffre (clé publique) et signe (clé privée)
- utilise l'entropie fournie par l'utilisateur

--
- la Crypto pour tous


---
# Signature

- asymétrique inversée
- pas de sécurisation

--
- identification


---
# Certificats

- authentifie un client auprès d'un tiers de confiance
- assure la révocation

--
- [Let's Encrypt](https://letsencrypt.org/)


---
# Les standards

- [X.509](http://www.itu.int/rec/T-REC-X.509/en)
- [PKCS](https://www.emc.com/emc-plus/rsa-labs/standards-initiatives/public-key-cryptography-standards.htm)
- [PCIDSS](https://www.pcisecuritystandards.org/security_standards/)


---
layout: true
class: section
background-image:

# Protéger


---
layout: true

.breadcrumb[Protéger]


---
# La réseau

- ~~SSL~~ / TLS ![SSL Diagram](./learn_ssl_diagram.gif)
- Confidentialité persistante


---
# Les accès : Password Hash


---
# Les données

- RSA
- Symétrique encapsulé
- Boitiers HSM


---
layout: false
class: section
background-image:

# WebCrypto à la rescousse (?)


---
layout: true

.breadcrumb[WebCrypto à la rescousse (?)]


---
# The WG Spec

![flamingo](./flamingo.gif)

_before reading_


---
# The WG Spec

![Stitch Crying](./stitch-crying.gif)

_after reading_


---
# Current Status

- Working Draft
- Spec obscure pour les néophytes


---
```js
window.crypto
```


---
```js
window.crypto.subtle
```

![Confuse](./confuse-futurama.gif)


---
```js
window.crypto.subtle.encrypt
```


---
```js
window.crypto.subtle.encrypt(/* ... */)
.then(function(encrypted){
  //returns an ArrayBuffer containing the encrypted data
  console.log(new Uint8Array(encrypted))
})
.catch(function(err){
  console.error(err)
})
```


---
# WebCrypto API

- n'utilise que des Promises
- ne traite qu'avec des sources binaires (ArrayBuffers)


---
# Point Bonus

Comme avec [`canPlayType`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType)

- RSASSA-PKCS1-v1_5 / RSA-OAEP
- AES-CBC / AES-GCM / AES-KW
- HMAC
- SHA-256 / SHA-384 / SHA-512

<small>les navigateurs n'implémentent que les algos qu'ils estiment nécessaires</small>


---
layout: false
class: section
background-image:

# Alors, on fait quoi ?


---
layout: true

.breadcrumb[Alors, on fait quoi ?]


---
# Ne jouez pas les apprentis sorciers

![Neveeeeer](./harry-never.gif)


---
# N'oubliez jamais que :

- la sécurité est inversement proportionelle à la simplicité d'utilisation
- toute sécurité a un coût


---
# On arrête d'avoir peur, et on protège

[![Reddit Gaydeath](./reddit.jpg)](https://www.reddit.com/r/legaladvice/comments/3edf1s/im_a_gay_single_man_from_a_country_where_gaydeath/)


---
layout: false
class: section, bottom
background-image: url('../img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !

## Iconographie / Médias :

- Icônes : [Linea](http://linea.io/) - [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- Algorisme : by [Laurent Chemla](https://www.youtube.com/channel/UCFjaRSCKJix-SfsS_hIn6Hw)
- [XKCD: Security](https://xkcd.com/538/)

## Fontes :

- Titrage : [Sinzano](http://typodermicfonts.com/sinzano/) by Typodermic http://typodermicfonts.com - [Fontspring webfont EULA](https://www.fontspring.com/licenses_text/lv4e5lv2k2)
- Intertitres & labeur : [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-sans-pro/master/LICENSE.txt)
- Monospace : [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-code-pro/master/LICENSE.txt)

## Outils

- Moteur de présentation : [Remark](https://github.com/gnab/remark)

.licence[
![Cozy Cloud](../img/cozy.svg)

![:ref]

disponible sous licence [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
]
