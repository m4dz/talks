<!--{section^1:data-breadcrumb="Tech & Crypto"}-->

<!--{.interleaf data-background-image="/img/unsplash/adolfo-felix-544405-unsplash.jpg"}-->
<!-- Photo by Adolfo Félix on Unsplash -->

## Tech & Crypto

===
<!--{.punchline}-->

Repartons de zéro

===

Un bloc

```js
{
  index: 1,
  hash: "7A7D12...E62EC2",
  <span class="fragment highlight-red">parent: "3A1A1D...684E1E",</span>
  data: [...],
  timestamp: 1548237157237
}
```

===

Hash

```js
<span class="fragment" data-fragment-index="1">SHA256(</span>{
  index: 1,
  parent: "3A1A1D...684E1E",
  data: [...],
  timestamp: 1548237157237
}<span class="fragment" data-fragment-index="1">) === "7A7D12...E62EC2"</span>
```

===

Data

```js
{
  data: [
    {hash:"67c...640", data: ..., timestamp: 1548237157237},
    {hash:"82a...503", data: ..., timestamp: 1548237157252},
  ]
}
```

===

Une Blockchain

```js
class Blockchain {
  <span class="fragment">constructor() {
    this.blocks = [{
      <span class="fragment">hash: "000000",</span>
      <span class="fragment">index: 0,</span>
      <span class="fragment">data: null,</span>
      <span class="fragment">timestamp: Date.now()</span>
    }]
  }</span>
}
```

===

Ajouter un bloc

```js
class Blockchain {...
  addBlock(<span class="fragment" data-fragment-index=2>data</span>) {
    <span class="fragment" data-fragment-index="1">const block = {
      index: this.blocks.length,
      parent: this.blocks[this.blocks.length -1].hash
      <span class="fragment" data-fragment-index="2">data,</span>
      timestamp: Date.now()
    }</span>
    <span class="fragment">block.hash = CryptoJS.SHA256(`
      <span class="fragment">${block.index}</span>;<span class="fragment">${block.parent}</span>;
      <span class="fragment">${JSON.stringify(data)}</span>;<span class="fragment">${block.timestamp}</span>
    `)</span>
    <span class="fragment">return this.blocks.push(block)</span>
  }
}
```

===

Ajouter une transaction

```js
class Blockchain {...
  transaction(data) {
    const transaction = {
      data,
      timestamp: Date.now()
    }
    <span class="fragment">transaction.hash = CryptoJS.SHA256(`
      ${JSON.stringify(data)};${transaction.timestamp}
    `)</span>
    <span class="fragment">return transaction</span>
  }
}
```

===

En action

```js
const blockchain = new Blockchain
```

```js
blockchain.addBlock([
  blockchain.transaction({
    id: 2820628...37, name: 'Jane Doe', note: 'Registration'
  })
  blockchain.transaction({
    id: 2820628...37,
    prescription: [{
      name: 'Doliprane',
      dosage: '3-6/day'
    }]
  })
])
```

===
<!--{.punchline}-->

Intégrité

===

Moaaaar

```js
blockchain.addBlock{[
  blockchain.transaction({
    id: 1940269...51,
    name: 'John Doe',
    note: 'Registration'
  })
]}
```

===

```js
[{
  index: 0, hash: "000000", data: null, timestamp: 1548237157237
},<span class="fragment" data-fragment-index="1">{
  index: 1,
  <span class="fragment highlight-red" data-fragment-index="3">hash: "7A7D12...E62EC2"</span>, parent: "000000",
  data: [{
    {hash:"67C...640", data: ..., timestamp: 1548237157237},
    {hash:"82A...503", data: ..., timestamp: 1548237157252}
  }], timestamp: 1548237157237
}</span>,<span class="fragment" data-fragment-index="2">{
  index: 2,
  hash: "6DE54C...87FEB7D", <span class="fragment highlight-red" data-fragment-index="3">parent: "7A7D12...E62EC2"</span>,
  data: [{
    {hash:"AE4...953", data: ..., timestamp: 1548237157237}
  }], timestamp: 1548237157237
}</span>]
```

===
<!--{.x-large}-->

Hashes {.large}

1. Intégrité de la suite
2. Modifier un seul bit
   ⇒ Recompiler toute la chaîne
3. Immutabilité

===
<!--{.x-large}-->

Signer

![](../img/Digital_Signature_diagram.svg){.medium .bg}

???

Comment s'assurer de l'origine d'une transaction ? (e.g. Si un pharmacien veut déclarer comme délivré un médicament qui ne l'a pas été)

===

Ajouter un client

```js
class Blockchain {
  constructor() {...
    this.users = []
  }

  register(user) {
    <span class="fragment">const keys = GenKeyPair()</span>
    <span class="fragment">user.pubKey = keys.pubKey</span>
    this.users.push(user)
    <span class="fragment">return key.privKey</span>
  }
}
```

===

Signer la transaction

```js
class Blockchain {...
  transaction(data, privKey) {...
    transaction.sign = Sign(transaction.hash, privKey)
  }
}
```

```js {.fragment}
blockchain.transaction({
  id: 1940269...51,
  name: 'John Doe',
  note: 'Registration'
}, <span class="fragment">Storage.privKey</span>)

```

===

Vérifier la transaction

```js
class Blockchain {...
  <span class="fragment" data-fragment-index="1">findUserForTransaction(transaction) {
    return this.users.find(<span class="fragment" data-fragment-index="2">user</span> => Verify(transaction.sign, <span class="fragment" data-fragment-index="2">user.pubKey</span>))
  }</span>
  <span class="fragment" data-fragment-index="3">checkTransaction(transaction) {
    return !!findUserForTransaction(transaction)
  }</span>
}
```

===
<!--{.punchline}-->

Certifier

???

Comment s'assurer que les utilisateurs sont bien valides ? (e.g. que personne ne puisse se faire passer pour un médecin)

===

```js
class Blockchain {...
  register(user, <span class="fragment" data-fragment-index="1">privKey</span>) {
    const keys = GenKeyPair()
    user.pubKey = keys.pubKey
    <span class="fragment" data-fragment-index="1">user.pubKey.sign = Sign(keys.pubKey, privKey)</span>
    this.users.push(user)
    return key.privKey
  }
  <span class="fragment">checkUserKey(pubKey) {
    return !!this.users.find(user => Verify(pubKey.sign, user.pubKey))
  }</span>
  <span class="fragment">checkTransaction(transaction) {
    const user = findUserForTransaction(transaction)
    return user ? checkUserKey(user.pubKey) : false
  }</span>
}
```

===

Contrôler les blocs

```js
class Blockchain {...
  addBlock(data) {
    if (!data.every(this.checkTransaction)) {
      throw
    }
    ...
  }
}
```

===
<!--{.punchline}-->

Chiffrer

???

Comment éviter que les nodes voient tous les contenus, y compris sensibles ? (e.g. que les mutuelles puissent accéder au contenu des prescriptions)

===

```js
const pharmacy = <span class="fragment" data-fragment-index="1">blockchain.getUser(pharmacyID)</span>

transaction({
  id: 2820628...37,
  prescription: <span class="fragment" data-fragment-index="2">Encrypt(JSON.stringify(</span>[{
    name: 'Doliprane',
    dosage: '3-6/day'
  }]<span class="fragment" data-fragment-index="2">), pharmacy.pubKey)</span>
})
```

===
<!--{.x-large}-->

Synchroniser

![](../img/Star-mesh_transform.svg){.medium .bg}

===

- Broadcast UDP (dgram)
  - transactions
  - blocs
  - metadonnées
- Persistence disque
- Cache local LRU (Least Recently Used)

===
<!--{.punchline}-->

Consensus

???

Comment assurer une distribution saine ? (e.g que les lobbys pharmaceutiques ne prennent la main sur la blockchain)

===

Consensus de Nakamoto

```js
class Blockchain {...
  const inc = 5<span class="fragment" data-fragment-index="1">, prefix = Array(inc).fill(0).join('')</span>
  <span class="fragment" data-fragment-index="2">addBlock(data) {...
    <span class="fragment" data-fragment-index="3">while (true) {
      <span class="fragment" data-fragment-index="5">block.nonce = Math.random()</span>
      <span class="fragment" data-fragment-index="4">block.hash = CryptoJS.SHA256(`
        <span class="fragment" data-fragment-index="5">${block.nonce};</span>${block.index};${block.parent};
        ${JSON.stringify(data)};${block.timestamp}
      `)</span>
      <span class="fragment" data-fragment-index="6">if (block.hash.substr(0, inc) === prefix) {</span></span>
        this.blocks.push(block)<span class="fragment" data-fragment-index="6">; break
      }</span>
    <span class="fragment" data-fragment-index="3">}</span>
  }</span>
}
```

===
<!--{.punchline}-->

Code Is Law

???
Comment renforcer la chaîne de confiance ? (e.g. éviter qu'un médicament ne soit délivré par erreur)

===

Smart Contracts

```js
class SmartContract {
  validate (transaction) {
    return true
  }

  exec (transaction) {
    return true
  }
}
```

===

Exécution

```js
class Blockchain {...
  <span class="fragment">addContract (contract) {
    this.contracts.push(contract)
  }</span>
  addBlock (data, ...) {...
    this.blocks.push(block)
    <span class="fragment">block.data.forEach(transaction => {
      this.contracts
      <span class="fragment">.filter(contract => contract.validate(transaction))</span>
      <span class="fragment">.each(contract => contract.exec(transaction))</span>
    })</span>
  }
}
```
