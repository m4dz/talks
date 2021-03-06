<!--{section^1:data-breadcrumb="The Node.js Part"}-->

<!--{.interleaf data-background-image="/img/unsplash/randy-fath-531056-unsplash.jpg"}-->
<!-- Photo by Randy Fath on Unsplash -->

## <svg class="icon"><use xlink:href="/img/icons.svg#dots-two-vertical"></svg> Build it w/ Node.js!

===
<!-- {.large} -->

Why Node.js? {.large}

- Fast
- Simple/Elegant
- All about Modules (and NPM 😍)
- JSON Native
- Resilient
- Frontends compatible

===
<!-- {.large} -->

Server Part: restify {.large}

- Full REST compatible 
- Handlers chains
- Pre-handlers
- Hypermedia
- Versioned
- Smart at failing

<!--  -->

- [restify](http://restify.com/)
<!-- {ul:.linkrolls} -->

===

**restify** setup 

```js
const restify = require('restify')

<span class="fragment">const server = restify.createServer()</span>

<span class="fragment">server.get('/', (req, res) => {
  res.send(200)
})</span>

<span class="fragment">server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url)
})</span>
```

===
<!-- {.large} -->

Security: node-forge {.large}

- Full TLS native implementation
- X.509 compatible

<!--  -->

- [Forge](https://www.npmjs.com/package/node-forge)
<!-- {ul:.linkrolls} -->

===

```js
const { pki } = require('node-forge')

const caStore = pki.createCaStore([ AppRootCertPEM ])

<span class="fragment">server.post('/users', (req, res, next) => {
    // CREATE USER
    // 
    res.send(201, { cert: pki.certificateToPen(caStore[0]), uuid })
})</span>

<span class="fragment">server.put('/users/:uuid', (req, res) => {
  const { uuid } = req.params
  const { pubkey, certHash, privkeyhash,
          salt, iterations, digest } = req.body
  // UPDATE USER
  //
  res.send(204)
})</span>
```

===
<!-- {.large} -->

Storage {.large}

MongoDB/CouchDB

===
<!-- {.small} -->

Document Tree Structure {.large}

- UUID
- Username
- Password Hash / Sign / Salt
- Enc Keys: Pubkey / Privkey hash
- Auth Keys (ZKP): Pubkey / Privkey hash
- Certificate hash
- Items
    - UUID
    - Salt / Params / Sign
    - Data
    - Recipient UUID

===
<!-- {.small} -->

Auth {.large}

- Create account = _POST_ username / pwd
    - Username
    - Password hash
    - Certificate hash
    - Pubkeys
    - Privkey hashes
    - Salt
- Returns JWT

<!--  -->

- [restify-passport](https://www.npmjs.com/package/passport-restify)
<!-- {ul:.linkrolls} -->

===

```js
<span class="fragment" data-fragment-index=3>const users = db.collection('users')</span>

<span class="fragment" data-fragment-index=2>passport.use(new <span class="fragment" data-fragment-index=3>LocalStrategy((username, password, done) => {
  users.find({ username }, (err, user) => {
    <span class="fragment" data-fragment-index=4>if (!user) return done(null, false)</span>
    <span class="fragment" data-fragment-index=4>if (!user.verifyPassword(password)) return done(null, false)</span>
    <span class="fragment" data-fragment-index=5>return done(null, user)</span>
  })
})</span>)</span>

<span class="fragment" data-fragment-index=1>server.post('/users/:name/login', <span class="fragment" data-fragment-index=6>passport.authenticate('local')</span>, (req, res) => {
    res.redirect(`/users/${req.params.name}`)
})</span>

<span class="fragment" data-fragment-index=1>server.get('/users/:name', <span class="fragment" data-fragment-index=6>passport.authenticate('local')</span>, (req, res) => {
  // RETURN JWT
})</span>
```

===
<!-- {.large} -->

Protect Requests {.large}

- TLS ::→ Built-in::{.fragment .fade-up}
- CORS
- JWT

<!--  -->

- [restify-cors](https://www.npmjs.com/package/restify-cors)
- [restify-jwt-community](https://www.npmjs.com/package/restify-jwt-community)
<!-- {ul:.linkrolls} -->

===

```js
const restifyCors = require('restify-cors')
 
const cors = restifyCors({
  origins: [
    <span class="fragment" data-fragment-index=1>'https://api.example.org',
    'https://web.example.org'</span>
  ],
  allowHeaders: [<span class="fragment" data-fragment-index=2>'API-Token', 'Authorization'</span>],
  exposeHeaders: [<span class="fragment" data-fragment-index=2>'API-Token-Expiry'</span>]
})
 
server.pre(cors.preflight)
server.use(cors.actual)
```

===
<!-- {.punchline} -->

Actions are
==identified== and ==protected==
with **JWT**

===

```js
const jwt = require('restify-jwt-community')
const secret = server.token

server.use(restify.authorizationParser())

server.get('/items', <span class="fragment" data-fragment-index=1>jwt({ secret })</span>, (req, res) => {
  <span class="fragment" data-fragment-index=2>if (!req.user.admin) return { res.send(401) }</span>
  res.send(200)
})
```

- [JSON Web Tokens](https://jwt.io/)
<!-- {ul:.linkrolls} -->

===

POST Item {.large}

1. Client derivate key from password (PBKDF2) {.fragment .fade-up}
2. POST w/ JWT {.fragment .fade-up}
    - Salt, Recipient UUID, Params…
    - (opt) Expiration timestamp
3. Returns {.fragment .fade-up}
    - Updated JWT
    - Item UUID 

===

```js
server.use(restify.plugins.bodyParser())

server.post('/items', jwt({ secret }), (req, res) => {
  const { salt, recipient, iterations, digest } = req.body
  const { user } = req

  // CREATE A NEW ITEM FOR USER IN DB
  
  res.send(201, { uuid })
})
```

===

PUT Data Chunk {.large}

- Payload
    - encrypted data
    - wrapped key
    - (opt) timestamp
    - signature 
- Exception if Data already exists

===

```js
<span class="fragment" data-fragment-index=3>const crypto = require('crypto')</span>
const items = db.collection('items')

server.put('/items/:uuid', jwt({ secret }), (req, res) => {
  const { uuid } = req.params
  const item = items.find({ uuid })
  const { <span class="fragment" data-fragment-index=2>timestamp, signature,</span> data } = req.body
  <span class="fragment" data-fragment-index=3>const verify = crypto.createVerify('sha256')
  verify.update(data + '.' + timestamp)</span>

  <span class="fragment" data-fragment-index=1>if (item.data) return res.send(new ConflictError())</span>
  <span class="fragment" data-fragment-index=4>if (!verify.verify(req.user.pubkey, signature, 'base64'))
    return res.send(new PreconditionFailedError())</span>

  // SAVE DATA, SIGNATURE, TIMESTAMP
  res.send(204)
})
```

===
<!-- {.large} -->

GET User {.large}

- Passport
- Returns JWT
    - UUID
    - Username
- Hypermedia to belonging items

===

```js
<span class="fragment" data-fragment-index=3>const jwt = require('jsonwebtoken')</span>

server.get('/users/:name', <span class="fragment" data-fragment-index=1>passport.authenticate('local')</span>, (req, res) => {
  const { name } = req.params
  const user = users.find({ name })

  <span class="fragment" data-fragment-index=3>let token = jwt.sign({
    uuid: user.uuid,
    admin: user.admin
  }, secret, { expiresIn: '1m' })</span>

  res.send({
    <span class="fragment" data-fragment-index=3>token,</span>
    username: user.name,
    pubkey: user.pubkey,
    items: user.items.map(item => <span class="fragment" data-fragment-index=2>server.router.render('items', { uuid:</span> item<span class="fragment" data-fragment-index=2>.uuid</span> }))
  })
})
```

===
<!-- {.large} -->

GET Data Chunk {.large}

1. Check signature w/ pubkey 
2. Check Exp. Timestamp 
3. Returns Data or Exception

===

```js
const items = db.collection('items')
server.get('/items/:uuid', <span class="fragment" data-fragment-index=2>jwt({ secret })</span>, (req, res) => {
  const { uuid } = req.params
  const item = items.find({ uuid })
  <span class="fragment" data-fragment-index=4>const verify = crypto.createVerify('sha256')
  verify.update(item.data + '.' + item.timestamp)</span>

  <span class="fragment" data-fragment-index=1>if (!item) return res.send(new NotFoundError())</span>
  <span class="fragment" data-fragment-index=2>if (item.recipient.uuid !== req.user.uuid)
    return res.send(new UnauthorizedError())</span>
  <span class="fragment" data-fragment-index=3>if (item.expire < Date.now())
    return res.send(new PreconditionFailedError())</span>
  <span class="fragment" data-fragment-index=4>if (!verify.verify(req.user.pubkey, item.signature, 'base64'))
    return res.send(new PreconditionFailedError())</span>

  res.send(item)
})
```

===

**Bonus** ZKP
Share payload with a user {.large}

1. Recipient _PUT_ `users/:name/recipients/:uuid` {.fragment .fade-up}
2. Returns a JWT {.fragment .fade-up}
3. Recipient _UPDATE_ JWT w/ its Signature using Privkey {.fragment .fade-up}
4. _PUSH_ to User {.fragment .fade-up}
5. User _PUT_ item flagged item w/ the recipient UUID {.fragment .fade-up}

===

Just a simple ==REST== Ping Pong!

@[giphy]({"token":"kcpobK0upw5gY","className":"medium"})


*[JWT]: JSON Web Tokens
*[CORS]: Cross-origin resource sharing
*[ZKP]: Zero Knowledge Proof
