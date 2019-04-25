<!--{section^1:data-breadcrumb="Once upon a time..."}-->

<!--{.interleaf data-background-image="/img/unsplash/nong-vang-577609-unsplash.jpg"}-->
<!-- Photo by Nong Vang on Unsplash -->

## Once upon a time <br> there was a Blockchain...

===
### What is it?

A Blockchain,
::is a series (a chain)::{.fragment .fade-up}
::of structured data (blocks)::{.fragment .fade-up}
<!--{p:.x-large}-->

===

@[giphy]({"token":"26tncpmgYJm5gp3CE", "caption":"Still clever", "className":"small"})

===
<!--{.punchline}-->

### Database

===
<!--{.punchline}-->

Immutable

===

@[giphy]({"token":"4BB8y6rRCf5bW", "caption":"But why?", "className":"medium"})

===

- Track the data
- Certify
<!--{ul:.xx-large}-->

===
<!--{.punchline}-->

Decentralized & Distributed

???
- You can run one node
- Conceived to be distributed

===
<!--{.x-large}-->

- Transparency
  ::all nodes handle all data::{.small .fragment .fade-up}
- Redundancy
  ::No more Main node ::vs.::{.small} Replicas::{.small .fragment .fade-up}

===
<!--{.punchline}-->

Authority

===
<!--{.xx-large}-->

::Public::{.fragment .stabilo} ::vs::{.small} ::Private::{.fragment .stabilo}

???

This is way different from the cryptocurrency pattern

===

### The Byzantine Fault

@[giphy]({"token":"37sqvWjCl1b1eVXtP1", "className":"medium"})

===
<!--{.x-large}-->

Trusted ==Mutual Agreement== {.large}

- Proof of Work
- Proof of Stake/Delegated Proof of Stake
- Byzantine Fault Tolerance
  ::(Delegated BFT/Practical BFT)::{.small .fragment .fade-up}

===
<!--{.x-large}-->

==PoW== (Nakamoto agreement) {.large}

- Resolve a computational puzzle
- So called *Mining*
- Eats a lot of power
- The General is the 1^st^ one to solve its ==Sudoku== {.fragment .fade-up}

===
<!--{.x-large}-->

==PoS== {.large}

- Wealthy / Oldest Members
- Time in the network is the *key*
- Game theories
- The General is always the ==oldest/more decorated== {.fragment .fade-up}

===
<!--{.x-large}-->

==pBFT== : Practical Byzantine Fault Tolerance {.large}

- Control by trust
- Closed Network, so private
- The General is always the ==boss' son== {.fragment .fade-up}

???

We validate a needed amount of request (~ ⅓) to consider as valid.
If the client get no repsonse, the main node is in failure, and secondary nodes trigger a "view change" to elect a new main node.

===

@[giphy]({"token":"7MBoS2kez5I8o", "caption":"Not too lost?", "className":"medium"})

===
<!--{.x-large}-->

Why using it on a private network? {.large}

- Transparency/Confidence
- BFT
- Distributed

===
<!--{.x-large}-->

With a classical DB cluster {.large}

- Primary / Secondaries
- Primary **write-mode** / Secondaries **read-only**
- Secondaries are replicas
- ⇒ Cycle {.fragment .fade-up}

===
<!--{.x-large}-->

With a Blockchain {.large}

- All nodes in **write-mode**
- Valid by mutual agreement
- All nodes get complete work

===
<!--{.punchline}-->

::Think it like::{.x-small}
Git ::vs::{.x-small} SVN

===

### Automation

“Smart Contracts”
<!--{p:.xx-large}-->

===
<!--{.x-large}-->

1. ==Certified== code, auto-executed
2. On each transaction,
   ⇒ Smart Contracts

===

@[giphy]({"token":"WQ2QkcQFtG4eI", "caption":"So, let me tell you... how it works!", "className":"medium"})


*[PoW]: Proof of Work
*[PoS]: Proof of Stake
