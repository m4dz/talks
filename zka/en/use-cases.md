<!--{section^1:data-breadcrumb="7 questions"}-->

<!--{.interleaf data-background-image="/img/unsplash/784361.jpg"}-->
<!-- Photo by Camylla Battani on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> 7 questions on ZKA

===
<!--{.xx-large}-->

1/ **Migrating** from an existing codebase

===
<!--{.xx-large}-->

2/ Applying ZKA to the **Big Data**

===
<!--{.xx-large}-->

3/ **Losing** The Keys

===
<!--{.xx-large}-->

4/ Storing **metadata** on the server

===
<!--{.xx-large}-->

5/ Server security **failure**

===
<!--{.xx-large}-->

6/ **Exporting** the keys

===
<!--{.xx-large}-->

7/ **Recovery**

===

_Initialization_ {.large}

::: left
Client
- Recovery Certificate
- Recovery Keys-pair
- TOTP Token
- Random Recovery Password

Recovery Server
- Client Private Key account
- Recovery material
:::

???
1. Generates:
  - A Recovery Certificate (w/ the master password)
  - A Recovery Encryption Keys-pair
  - A TOTP Token
  - A random Recovery password
2. Opens an account on the Recovery Server w/:
  - Its Private Key hash as ID
  - The Recovery Password
  - The TOTP Token
3. Use the Recovery password and the master password to:
  - Derivates two key
  - Encrypt the Cert and the Private Key
  - Merge them in a signed payload with its Private key
  - Encrypt the content with the Public Recovery Key

===

_Recovery_ {.large}

::: left
Recovery Server
- Identify the user's Private Key
- Serves the payload
- Delete the material

(new) Client
- Extracts the payload
- Restores the contents
:::

*[DH]: Diffie-Hellman
