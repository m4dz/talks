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

===

**restify** setup 

```js
const restify = require('restify')

const server = restify.createServer()

server.post('/users', (req, res, next) => {
    // CREATE USER
})
server.post('/users/:name/login', (req, res, next) => {
    // AUTHORIZE USER
})

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url)
})
```

===
<!-- {.large} -->

Storage {.large}

MongoDB/CouchDB

===

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
const users = db.collection('users')

passport.use(new LocalStrategy((username, password, done) => {
  users.find({ username }, (err, user) => {
    if (!user) return done(null, false)
    if (!user.verifyPassword(password)) return done(null, false)
    return done(null, user)
  })
}))

server.post('/users/:name/login', passport.authenticate('local'), (req, res) => {
    res.redirect(`/users/${req.params.name}`)
})

server.get('/users/:name', passport.authenticate('local'), (req, res) => {
  // RETURN JWT
})
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
    'https://api.example.org',
    'https://web.example.org'
  ],
  allowHeaders: ['API-Token', 'Authorization'],
  exposeHeaders: ['API-Token-Expiry']
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

server.get('/items', jwt({ secret }), (req, res) => {
  if (!req.user.admin) return { res.send(401) }
  res.send(200)
})
```

- [JSON Web Tokens](https://jwt.io/)
<!-- {ul:.linkrolls} -->

===
<!-- {.large} -->

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

PUT Data Chunk

- Payload
    - encrypted data
    - wrapped key
    - (opt) timestamp
    - signature 
- Exception if Data already exists

===

```js
const crypto = require('crypto')
const items = db.collection('items')

server.put('/items/:uuid', jwt({ secret }), (req, res) => {
  const { uuid } = req.params
  const item = items.find({ uuid })
  const { timestamp, signature, data } = req.body
  const verify = crypto.createVerify('sha256')
  verify.update(data + '.' + timestamp)

  if (item.data) return res.send(new ConflictError())
  if (!verify.verify(req.user.pubkey, signature, 'base64'))
    return res.send(new PreconditionFailedError())

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
const jwt = require('jsonwebtoken')

server.get('/users/:name', passport.authenticate('local'), (req, res) => {
  const { name } = req.params
  const user = users.find({ name })

  let token = jwt.sign({
    uuid: user.uuid,
    admin: user.admin
  }, secret, { expiresIn: '1m' })

  res.send({
    token,
    username: user.name,
    pubkey: user.pubkey,
    items: user.items.map(item => server.router.render('items', { uuid: item.uuid }))
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
server.get('/items/:uuid', jwt({ secret }), (req, res) => {
  const { uuid } = req.params
  const item = items.find({ uuid })
  const verify = crypto.createVerify('sha256')
  verify.update(item.data + '.' + item.timestamp)

  if (!item) return res.send(new NotFoundError())
  if (item.recipient.uuid !== req.user.uuid)
    return res.send(new UnauthorizedError())
  if (item.expire < Date.now())
    return res.send(new PreconditionFailedError())
  if (!verify.verify(req.user.pubkey, item.signature, 'base64'))
    return res.send(new PreconditionFailedError())

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
