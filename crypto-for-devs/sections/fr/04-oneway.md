<!--{section^1: data-breadcrumb="Hashage et salage"}-->

<!--{.interleaf data-background-image="/img/unsplash/789842.jpg"}-->
<!-- Photo by Hoan Vo on Unsplash -->

## Hashage, Salage, Cuisinage

===
<!--{.large}-->

Le hashage est
l'==obfuscation=={.fragment .stabilo} de données
<!--{p:.punchline}-->

===

Fail! {.fragment .stamp}

- Rainbow Tables
- Lookup Tables
- Reverse-lookup Tables

===

### Salage

- Entropie
- Supprime les risques de répétitions
- Doit être **unique** et **aléatoire**

===

La Brute et le Truand

```js
md5(sha1(password))
```
```js
sha1(sha1(password))
```
```js
sha1(str_rot13(password + salt))
```
```js
md5(sha1(md5(md5(password) + sha1(password)) + md5(password)))
```

===

Le Bon !

1. Générer un **long salt** _via_ CSPRNG
   - min 16 chars
   - `mcrypt_create_iv` (PHP), `os.urandom` (Python), SecureRandom (Ruby), `crypto.randomBytes` (Node.js)
   - `/dev/urandom`
   {.fragment .fade-out .small data-fragment-index="1"}
2. Appliquer une **dérivation** sur le couple `[password][salt]` {.fragment .fade-in data-fragment-index="1"}
   - Algorithme à forte consommation CPU
   - Argon2, bcrypt, scrypt, PBKDF2
   {.fragment .fade-out .small data-fragment-index="2"}
3. Stockage de **tous** les éléments en base de données {.fragment .fade-in data-fragment-index="2"}
   - assurer les compatibilité sur les montées de version
   - utiliser un format du type `$[hashfunc]$[rounds]$[salt][hash]`
   {.fragment .fade-out .small data-fragment-index="3"}
4. Stocker une signature **HMAC** du `payload` {.fragment .fade-in data-fragment-index="3"}
   - prévient les risques de SQLi
   - nécessite de conserver la clef en lieu sûr
   {.small}

{.accordion .medium}

- [Salted Password Hashing - Doing it Right][4.1]
{.linkrolls}


*[CSPRNG]: Cryptographically Secure PseudoRandom Number Generator

[4.1]: https://crackstation.net/hashing-security.htm

===
<!--{.x-small}-->

Un mot de passe correctement hashé, ==sans répétitions=={.fragment .stabilo}, exécuté dans un ==environnement temps contrôllé=={.fragment .stabilo} limite la surface d'attaque par force brute
<!--{p:.punchline}-->
