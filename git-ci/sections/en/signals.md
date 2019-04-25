<!--{section^1:data-breadcrumb="Signals"}-->

<!--{.interleaf data-background-image="/img/unsplash/chinh-le-duc-306667-unsplash.jpg"}-->
<!-- Photo by Chinh Le Duc on Unsplash -->

## Signals!

===

Unix-socket: {.large}

```bash
echo "SIGNAL db:migrated" | /usr/bin/socat - UNIX-CONNECT:/var/run/my-app.sock
```

===

Use a Node.js instance as coordinator

```js
const net = require('net')
const socket = net.createServer(sock => {
    sock.write(`Hello ${sock.remoteAddress}\n`)
    // when `socat` writes a message
    sock.on('data', data => {
        if (data === 'SIGNAL db:migrated') {
          //...
        }
    })
})
socket.listen('/var/run/my-app.sock')
```

- [Node.js Tutorial – 3 Creating a Chat Server using TCP Sockets](https://helloacm.com/node-js-tutorial-3-creating-a-chat-server-using-tcp-sockets/)
{.linkrolls}

===
<!--{.punchline}-->

Use ::streams::{.fragment .stabilo} for FRP

===

### What if...?

- Node.js coordinator instance crashes? ::→ Restart it!::{.fragment .fade-up}
- Need to scale? ::→ Detached workers::{.fragment .fade-up}
- We need to rollback database ::→ Never be destructive on your database::{.fragment .fade-up}
- I just need to update ACL / Flags ::→ Filter your Git commits::{.fragment .fade-up}

===
<!--{.punchline}-->

How to broadcast/dispatch the actions?

===

### Broker!

- ØMQ
- Redis
- MQTT
- etc.
{.x-large}

===

Self-reload Workers

```js
const {fork} = require('child_process')

(function main () {
  const server = fork('server.js').unref()

  sock.connect('tcp://127.0.0.1:3000')
  sock.on('RESTART', () => {
    server.kill()
    setTimeout(main, 1000)
  })
})()
```

- [Node.js process restart](https://stackoverflow.com/questions/40835187/node-js-process-restart)
- [Node.js Child Processes using spawn, exec, fork & async/await](https://zaiste.net/nodejs-child-process-spawn-exec-fork-async-await/)
- [zeromq.js](https://github.com/zeromq/zeromq.js)
{.linkrolls}

===

**1/** Init ACL/Flags

```js
const flags = ff.config({
  criteria () { return [
    { id: 'userInGroup',
      check (user, group) { acl.isAllowed(user.id, group, '*') }},
    { id: 'environment',
      check (user, env) { return process.env.NODE_ENV === env }}
  ]},
  features () { return [
    { id: 'admin',
      criteria: { userInGroup: 'admin' }},
    { id: 'development',
      criteria: { environment: 'development' }}
  ]}
})
```

===

**2/** Reload ACL/Flags

```js
sock.connect('tcp://127.0.0.1:3000')
sock.on('ACL:RELOAD', ({<span class="fragment" data-fragment-index=2 >perms</span>, <span class="fragment" data-fragment-index=3 >features</span>}) => {
  <span class="fragment" data-fragment-index=1 >controls.removeAllow('*', '*', '*')</span>
  <span class="fragment" data-fragment-index=2 >controls.allow(perms)</span>
  <span class="fragment" data-fragment-index=3 >flags.config({features})</span>
  <span class="fragment" data-fragment-index=4 >flags.reload()</span>
})
```

===

Enable API endpoints on-the-fly

```js
// hook to initialize the endpoint route at runtime
app.post('/api/:endpoint', (req, res) => {
  if (req.params.endpoint === 'list') {
      if (flags.isFeatureEnabledForUser('list', user)) {
        let listController = require('controllers/ListController')
        listController.init(app)
        res.status(200).send()
      } else {
        res.status(401).send()
      }
  }
})
app.get('/api/:endpoint', (req, res) => { /*...*/})
```

- [#NodeJS / #ExpressJS: Adding routes dynamically at runtime](https://alexanderzeitler.com/articles/expressjs-dynamic-runtime-routing/)
{.linkrolls}

===

Use HTTP Codes correctly {.large}

- `204`<span class="fragment">: No Content</span>
- `303`<span class="fragment">: See Other</span>
- `307`<span class="fragment">: Temporary Redirect</span>
- `401`<span class="fragment">: Unauthorized</span>
- `403`<span class="fragment">: Forbidden</span>


*[FRP]: Functional Reactive Programming
