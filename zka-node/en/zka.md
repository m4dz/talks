<!--{section^1:data-breadcrumb="ZKA Principles"}-->

<!--{.interleaf data-background-image="/img/unsplash/chris-tweten-740197-unsplash.jpg"}-->
<!-- Photo by Chris Tweten on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> What ZKA is?

===
<!-- {.punchline} -->

Design pattern that
enforces ==Users Privacy==

===
<!-- {.punchline} -->

E2E Encryption

===
<!-- {.punchline} -->

Asymetric Keys
at each Ends
<small>(for sharing)</small>

===
<!-- {.punchline} -->

Symetric Key Wraping
::(IDEA, BlowFish, etc.)::{.x-small}

===
<!-- {.large} -->

Backend Roles {.large}

- Stores/Returns ==Encrypted== Data {.fragment .fade-up}
- Manages ==Public== Keys and Tokens {.fragment .fade-up}
- Delivers ==Certificates== {.fragment .fade-up}
- Invalidates ==Expired== Payloads {.fragment .fade-up}

===

Client ←→ Server Workflow {.large}

1. Client **Registers**, _GET_ ting its Certificate {.fragment .fade-up}
2. Client **Generates** Keys-pairs, _POST_ ing Pubkeys and Hashes {.fragment .fade-up}
3. Client **Encrypts** Data w/ wrapped Key and **Signs** it, _PUT_ ing it on the Server {.fragment .fade-up}
4. Server **Validates** timestamped signature before returning the payload {.fragment .fade-up}


*[E2E]: End-to-End 
