<!--{section^1: data-breadcrumb="Hashing, Salting, Cooking"}-->

<!--{.interleaf data-background-image="/img/unsplash/789842.jpg"}-->
<!-- Photo by Hoan Vo on Unsplash -->

## Hashing, Salting, Cooking

???

I said that cryptography is about encryption, and potentially decryption. Let's start with the _basics_: hashing.

===
<!--{.x-large}-->

Hashing is
Data ==Obfuscation=={.fragment .stabilo}
<!--{p:.punchline}-->

???

Hashing is _data obfuscation_. It's a one-way trip that encrypts your data preventing from getting your plain data back. Because of its inability to decrypt a ciphertext, we often use the term of _checksum control_. A plain text that passes  through a given hashing function, always output the same result. It's a pretty good way to ensure your data wasn't corrupted because a single bit modified in the plain text will output an entirely different result.

You know some hashing functions, like `md5` or `sha1`.

===

Fail! {.fragment .stamp}

- Rainbow Tables
- Lookup Tables
- Reverse-lookup Tables

???

It seems to be a best practice to protect the passwords. You never store your users' passwords in a plain format. You must encrypt them. You never need to decrypt them. When your user wants to authenticate, you use the same hashing function and compare the output to the one stored in the database at sign up.

Problem is: even if hashing functions are impossible to revert, we know what a plaintext version and its checksum are. That's what we call rainbow, lookup, reverse-lookup, etc. tables. They are big tables, available on many websites, that allow you to check for a checksum and get its plaintext version. For instance, rainbow tables are for the `md5` function. So it's not secured just to store the checksum. We must make the game more complicated to defeat.

===

### Salting

- Entropy
- Avoid repetitions
- Must be **unique** and **random**

???

We need what we call _salting_. We add to the hashing function a _salt_, a little element, unique and randomly generated. It adds noise to the hashing result. It's an entropic factor that ensures your result, for a given password, never be the same. It deprecates rainbow tables, because the checksum won't match any plain password. It also avoids the common factor, which deprecates analysis. Even when users pick up the same password, their cheksums are differents. It implies that a _salt_ must be unique per password.

===

The Bad, and the Ugly

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

???

When I look up for salting technics, I often find things like this. Those lines come from developers' social networks like Stack Overflow. So please, never, ever do that. It's pretty easy to break chained methods like this, especially when your codebase is open source.

===

The Good!

1. Generate a **long salt** w/ CSPRNG
   - min 16 chars
   - `mcrypt_create_iv` (PHP), `os.urandom` (Python), SecureRandom (Ruby), `crypto.randomBytes` (Node.js)
   - `/dev/urandom`
   {.fragment .fade-out .small data-fragment-index="1"}
2. Apply a **secured derivation** on `[password][salt]` {.fragment .fade-in data-fragment-index="1"}
   - CPU intensive algorithm
   - Argon2, bcrypt, scrypt, PBKDF2
   {.fragment .fade-out .small data-fragment-index="2"}
3. Store **all** elements in database {.fragment .fade-in data-fragment-index="2"}
   - ensure compatibility in case of changes
   - use a format like `$[hashfunc]$[rounds]$[salt][hash]`
   {.fragment .fade-out .small data-fragment-index="3"}
4. Store along a **HMAC** digest of the payload {.fragment .fade-in data-fragment-index="3"}
   - prevent SQL Injections
   - keep the key safe
   {.small}

{.accordion .medium}

- [Salted Password Hashing - Doing it Right][4.1]
{.linkrolls}


*[CSPRNG]: Cryptographically Secure PseudoRandom Number Generator

[4.1]: https://crackstation.net/hashing-security.htm

???

The right way to do with password hashing is this one.

First, you create a long random number using a CSPRNG.

Next, you apply a secured derivation on a concatenated string of the password and the salt. What's important here is to use a CPU intensive algorithm. The most secured yet is Argon2.

CPU intensive means it takes a long time to compute the hash; Which is good here, because even if it adds 350ms extra time, this is nothing for your user, but not for a brute-force attack. It's like fire-proof doors. They're not here to stop the fire, but to slow its progression.

Then you store all elements as a record in your database: your hashing function, the round number used to initialize it, then the string of the hash and the salt. When you want to check a password validity, you reuse the same hash func with its round param, and the salt, which is easy to retrieve because the hash has a fixed length. It ensures compatibility for your users if you need to upgrade your hash func later.

Finally, to prevent SQL injection that may try to replace a hash record in your database, sign the payload with an HMAC function using a key that you keep securely in your filesystem. Or use an HSM to do that. This way, nobody without the key can inject a signed hash record in your database. It keeps your password payload safe.

If you need more details about this process, read the Crackstation's blog post here.

===
<!--{.x-small}-->

A properly hashed password, with ==no repetition=={.fragment .stabilo} and a ==time-controlled execution=={.fragment .stabilo} decrease the risk of brute-force hacking
<!--{p:.punchline}-->

???

If you do that, the risks are low, both in case of brute force hacking and in case of database leak.
