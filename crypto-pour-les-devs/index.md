name: cover
class: middle

# La Crypto pour les Devs

Késako?

![:ref]


---
name: speaker
class: center

![mad hatter](../img/mad-hatter.gif)

# m4dz

**Happy Dev UI & Quality defender**

.extras[
[m4dz.net](https://m4dz.net) | [@m4d_z](https://twitter.com/m4d_z) | PGP [0xD4627C417D969710](http://m4dz.net/0xD4627C417D969710.asc)
]


.org[
## ![Cozy Cloud](../img/cozy.svg)

.extras[
  [cozy.io](https://cozy.io)
]
]


---
class: section, bottom, center
background-image: url(../img/placeholders/walking-path-way-tunnel.jpeg)

# La responsabilité du developpeur


---
layout: true

.breadcrumb[La responsabilité du développeur]


---
class: single, middle, inverse
# La limite des mots de passe : l'interface CC

[The Scary Truth About Your Passwords](https://blog.lastpass.com/2014/09/the-scary-truth-about-your-passwords-an-analysis-of-the-gmail-leak.html/)


---
class: middle, center, stickit
# m'en fous, on n'héberge pas de données sensibles

![WTF](./wtf.gif)


---
class: single, middle, inverse
# Une seule solution


---
class: middle, center, stickit
# Chiffrer

![deal with it](./deal-with-it.gif)

(ou crypter, troll detected)

---
class: middle
- guerre de l'information
- tracking et recroisement
- identité numérique


---
class: single, inverse, middle
# **Aucune donnée sensible ne devrait circuler ou être stockée en clair**


---
layout: false
class: section, right
background-image: url(../img/placeholders/castles-fence-love-symbol.jpeg)

# Chiffrer ?


---
layout: true

.breadcrumb[Chiffrer?]


---
class: middle, center
# Chiffrement

![manga fear](./manga-fear.gif)


---
class: single, middle, center
# Plus question de reculer


---
class: center, middle
# NSA / Prism / Loi Renseignement

.small[![NSA](./nsa.jpg)]


---
class: middle
# La crypto, ça n'est pas…

- l'authentification
- la sécurité
- la révocation


---
class: center, middle
# Objectif : Protéger des informations sensibles

![Batman](./batman.gif)


---
class: middle
# La crypto, c'est :

- Hash
- Encryption
- Échange de clés
- Signature


---
class: center, video
# Seule la clé est importante

.large[
<video src="./algorisme-WT8tOpjTPtA.mp4">
]


---
layout: false
class: section, bottom
background-image: url(../img/placeholders/construction-work-carpenter-tools.jpg)

# Cryptographie & Cryptanalyse


---
layout: true

.breadcrumb[Cryptographie & Cryptanalyse]


---
class: center, middle
# Il était une fois…

![Alice's white rabbit](./alice-rabbit.gif)


---
class: center, middle
# Le Code César

![Jules César, Astérix](./juliuscaesar.jpg)


---
class: center, middle
# Le chiffre de Vigenère

.small[![carré de Vigenère](./vigenere_square_shading.svg)]

```txt
Plaintext:  ATTACKATDAWN
Key:        LEMONLEMONLE
Ciphertext: LXFOPVEFRNHR
```


---
class: bottom-up, middle, inverse

# La faille : les répétitions

L'analyse des fréquences rend caduques toutes protections qui utiliseraient un dénominateur commun


---
class: center, middle

# Enigma

![Enigma](./enigma.jpg)


---
class: bottom-up, middle, inverse

# La faille : l'espionnage et l'attaque par force brute

Aucun système ne peut être suffisamment robuste pour résister éternellement à une attaque


---
class: single, middle

# Le chiffrement numérique


---
class: middle
# La protection des clés est essentielle

.large[![XKCD:538](./xkcd-security.png)]


---
layout: false
class: section, bottom
background-image: url(../img/placeholders/sea-nature-art-animals.jpg)

# Hachage, salage & entropie


---
layout: true

.breadcrumb[Hachage, salage & entropie]


---
class: single, middle
# Hachage : obfuscation des données 👍


---
class: bottom-up, middle, inverse
# Problème

les rainbow / lookup / reverse-lookup tables


---
class: middle
# Saler

- ajoute de l'entropie
- supprime les risques de répétition
- doit être **unique** et **aléatoire**


---
class: middle
# On ne fait pas…

```txt
md5(sha1(password))
md5(md5(salt) + md5(password))
sha1(sha1(password))
sha1(str_rot13(password + salt))
md5(sha1(md5(md5(password) + sha1(password)) + md5(password)))
```


---
class: middle
# On fait :

- pseudo-aléatoire <abbr title="Cryptographically secure pseudorandom number generator">CSPRNG</abbr> : le salt
- dérivation PBKDF2 (SHA256) / Bcrypt / Scrypt sur `[salt+pasword]` (+ entropie)
- stockage du résultat et des paramètres

[Salted Password Hashing - Doing it Right](https://crackstation.net/hashing-security.htm)


---
class: single, middle, inverse

# **Un hachage sans répétition et en exécution lente limite sa surface d'attaque**


---
layout: false
class: section, bottom, right
background-image: url(../img/placeholders/reflection-chess-mirror-confident.jpeg)

# Symétrique vs Asymétrique


---
layout: true

.breadcrumb[Symétrique vs Asymétrique]

---
class: middle
# Chiffrement par bloc

- ~~DES (Data Encryption Standard)~~
- AES (Advanced Encryption Standard)

--
- Stream Cipher ![badass](./badass.gif)


---
class: middle
# Padding & Random

- ~~ECB (Electronic Code Book)~~
- CBC (Cipher Block Chaining)


---
class: bottom-up, middle, inverse

# Problème

Les machines ne sont pas aléatoires


---
class: middle
- besoin de données imprévisibles

--
- méthodes crypto <abbr title="Cryptographically secure pseudorandom number generator">CSPRNG</abbr><br><small>(pas [`/dev/urandom`](http://www.2uo.de/myths-about-urandom/) directement, utilisez les méthodes des libs crypto)</small>

--
- IV (Vecteur d'Initialisation)<br><small>(bytes-block utilisés en initialisation d'un algo de chiffrement pour assurer son caractère unique)</small>


---
class: bottom-up, middle, inverse

# Problème

Une clé peut être compromise : une clé symétrique doit nécessairement circuler


---
class: center, middle
# Bob & Alice échangent leurs clés

![letter](./letter.gif)


---
layout: false
class: section, right
background-image: url(../img/placeholders/keys-unlock.jpg)

# Clés, Certificats, Signatures & Chiffrement


---
layout: true

.breadcrumb[Clés, Certificats, Signatures & Chiffrement]


---
class: middle
# Clé symétrique

- clé unique pour toutes les opérations
- rapide
- sensible sur la clé


---
class: middle
# Diffie-Hellman

- sécurité supplémentaire sur les échanges
- clé publique commune
- secret partagé

.small.center[![Diffie-Hellman key exchange](./Diffie-Hellman_Key_Exchange.jpg)]


---
class: middle
# PGP / GnuPG

- clés asymétriques (RSA) sur clé symétrique (IDEA)
- chiffre (clé publique) et signe (clé privée)
- utilise l'entropie fournie par l'utilisateur

--
- **la Crypto pour tous**


---
class: middle
# Signature

- asymétrique inversée
- pas de sécurisation

--
- identification


---
class: middle
# Certificats

- authentifie un client auprès d'un tiers de confiance
- assure la révocation

--
- [Let's Encrypt](https://letsencrypt.org/)


---
class: middle
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
class: middle
# Le réseau

- ~~SSL~~ / TLS ![SSL Diagram](./learn_ssl_diagram.gif)
- Confidentialité persistante


---
class: single, inverse, middle
# Les accès : Password Hash


---
class: middle
# Les données

- RSA
- Symétrique encapsulé
- Boitiers HSM


---
layout: false
class: section, middle, right
background-image: url(../img/placeholders/strength-strong-toy-action-figure.jpg)

# WebCrypto à la rescousse (?)


---
layout: true

.breadcrumb[WebCrypto à la rescousse (?)]


---
class: middle, center
# The WG Spec

![flamingo](./flamingo.gif)

_before reading_


---
class: middle, center
# The WG Spec

![Stitch Crying](./stitch-crying.gif)

_after reading_


---
class: middle
# Current Status

- Working Draft
- Spec obscure pour les néophytes


---
class: middle
```js
window.crypto
```


---
class: middle, center
```js
window.crypto.subtle
```

![Confuse](./confuse-futurama.gif)


---
class: middle
```js
window.crypto.subtle.encrypt
```


---
class: middle
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
class: middle
# WebCrypto API

- n'utilise que des Promises
- ne traite qu'avec des sources binaires (ArrayBuffers)


---
class: middle
# Point Bonus

Comme avec [`canPlayType`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType)

- RSASSA-PKCS1-v1_5 / RSA-OAEP
- AES-CBC / AES-GCM / AES-KW
- HMAC
- SHA-256 / SHA-384 / SHA-512

<small>les navigateurs n'implémentent que les algos qu'ils estiment nécessaires</small>


---
class: video

# Démo

.large[<video src="./proxy_authkeys_demo.ogg">]


---
layout: false
class: section, bottom, center
background-image: url(../img/placeholders/person-looking-searching-clean.jpg)

# Alors, on fait quoi ?


---
layout: true

.breadcrumb[Alors, on fait quoi ?]


---
class: middle, center, stickit
# Ne jouez pas les apprentis sorciers

![Neveeeeer](./harry-never.gif)


---
class: middle
# N'oubliez jamais que :

- la sécurité est inversement proportionelle à la simplicité d'utilisation
- toute sécurité a un coût


---
class: middle, inverse
# On arrête d'avoir peur, et on protège

.large[[![Reddit Gaydeath](./reddit.jpg)](https://www.reddit.com/r/legaladvice/comments/3edf1s/im_a_gay_single_man_from_a_country_where_gaydeath/)]


---
layout: false
class: section, bottom
background-image: url('../img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !

## Iconographie / Médias

- Icônes : [Linea](http://linea.io/) - [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- Algorisme : by [Laurent Chemla](https://www.youtube.com/channel/UCFjaRSCKJix-SfsS_hIn6Hw)
- [XKCD: Security](https://xkcd.com/538/)

## Fontes

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
