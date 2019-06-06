<!--{section^1:data-breadcrumb="Backend Behaviors"}-->

<!--{.interleaf data-background-image="/img/unsplash/eugenio-mazzone-190204-unsplash.jpg"}-->
<!-- Photo by Eugenio Mazzone on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> Backend Behaviors

===
<!-- {.large} -->

Auth {.large}

- Identify users
- Creates accounts for storage
- Link shares between recipients

===
<!-- {.large} -->

JSON Web Tokens {.large}

- UUID
- Keys, Salts, Params
- Data Chunks

===
<!-- {.large} -->

Storage {.large}

Document Oriented Database

===
<!-- {.large} -->

Key Management {.large}

- Certificates Generation
- Keys Storages
- (opt) HSM

===
<!-- {.large} -->

Distributed / Federated {.large}

- Queue messaging solution
- ActivityPub

<!--  -->

- [ActivityPub Rocks!](https://activitypub.rocks/)
<!-- {ul:.linkrolls} -->

===
<!-- {.large} -->

Backend Workflow {.large}

1. New User Creation {.fragment .fade-up}
2. Returns User's JWT {.fragment .fade-up}
3. Handles _POST_ ed Data Chunks {.fragment .fade-up}
4. Handles _PATCH_ ed Data Chunks {.fragment .fade-up}
5. Checks Signature and Expiration  {.fragment .fade-up}
6. Returns Data (or Error code) {.fragment .fade-up}


*[JWT]: JSON Web Tokens
*[HSM]: Hardware security module
