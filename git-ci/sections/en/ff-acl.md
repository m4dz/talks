<!--{section^1:data-breadcrumb="Feature Flags & ACL"}-->

<!--{.interleaf data-background-image="/img/unsplash/brigitta-schneiter-466789-unsplash.jpg"}-->
<!-- Photo by Brigitta Schneiter on Unsplash -->

## Feature Flags & ACL

===

### Server side

@[giphy]({"token":"OqqL7hw2U4dSo", "caption":"Inside the workers", "className":"medium"})

===

**1/** REST API {.large}

- Use dynamic endpoints
- Serve relevant ACL through API
- Send flags *via* API
- Use ::signed::{.fragment .stabilo} payloads

===

**2/** Update JWT {.large}

- Send updated JWT to your Client
- Ask your clients to re-auth
- Upgrade permissions/flags in JWT payload

===

**3/** Block/Redirect requests {.large}

- Properly deny resources access
- Handle the use-case in your Client
- Self-reload client in background

===

### Client side

@[giphy]({"token":"cituf0Vb5FYSk", "caption":"In your PWA", "className":"medium"})

===

~~WebSocket~~ {.xx-large}

===

Push API !

```js
const subscription
const payload
const options = {
  TTL: 3600
}

webPush.sendNotification(subscription, payload, options)
.then(() => res.sendStatus(201))
.catch(err => res.sendStatus(500))
```

===

Service Worker/Notification

```js
self.addEventListener('push', event => {
  const payload = event.data ? event.data.text() : 'no payload'
  event.waitUntil(

    // Reload ACL/flags

    <span class="fragment">self.registration.showNotification('ACL Updated!', {
      body: payload
    })</span>
  )
})
```

===

### Best practices & more

===

Code Splitting

```js
const getComponent = () => {
  return <span class="fragment" data-fragment-index=1 >flags.isFeatureEnabledForUser('component', user)</span>
    ? <span class="fragment" data-fragment-index=2 >import(/* webpackChunkName: "lodash" */ 'lodash')
      .then(({ default: _ }) => {
        <span class="fragment" data-fragment-index=3 >let element = document.createElement('div')
        element.innerHTML = _.join(['Hello', 'world'], ' ')
        return element</span>
      })
      .catch(error => 'An error occurred while loading the component')</span>
    : <span class="fragment" data-fragment-index=1 >Promise.reject(new Error(403))</span>
}

getComponent().then(component => { /*...*/ })
```

===

Simple Monitoring View

![Unleash Server Monitoring View](https://raw.githubusercontent.com/Unleash/unleash/master/docs/assets/dashboard.png){.large}


*[REST]: Representational state transfer
*[API]: Application programming interface
*[ACL]: Access Control Lists
*[JWT]: JSON Web Token
*[PWA]: Progressive Web App
