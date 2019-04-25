<!--{section^1:data-breadcrumb="En pratique"}-->

<!--{.interleaf data-background-image="/img/unsplash/617456.jpg"}-->
<!-- Photo by Sergey Zolkin on Unsplash -->

## En pratique

===

### Lors de la conception

- Concevez des check-list impliquant toutes les enjeux de données
- Assurez-vous que tous les intervenant•e•s sont sensibilisé•e•s
- Ne demandez pas plus de permissions que nécessaire
- Auditez, testez, pen testez !
{.medium .left}

#### Implémentation {.fragment data-fragment-index=1}

- Chaque feature valide la check-list, en tests automatisés {.fragment data-fragment-index=1}
- Les jeux de tests ne viennent pas de la prod ! {.fragment}
- Oubliez les frameworks de permissions tous prêts {.fragment}
- Tests fonctionnels sur des environnements multiples {.fragment}
{.medium .left}

===

Checklists

![GDPRChecklist.io](../img/gdprchecklist.io.png){.large}

===

Permissions

::![](../img/consent_1.png){.large}::
::![](../img/consent_2.png){.large}::
<!--{p:.fragment.fade-over}-->

===

### Lors de l'éxécution

- Minimisez la collecte de données
- Minimisez les données échangées avec les services tiers
- Pseudonimisez la donnée
- Vérifiez les formulaires (contact, login, assistance…)
- Supprimez régulièrement la donnée collectée
{.medium .left}

#### Implémentation {.fragment data-fragment-index=1}

- Utilisez des services de gestion d'identités {.fragment data-fragment-index=1}
- Hashez / chiffrez / tokenizez les entrées {.fragment data-fragment-index=2}
- Permutez, substituez, segmentez les données sensibles {.fragment data-fragment-index=2}
- Faites passer des cron ! {.fragment data-fragment-index=3}
{.medium .left}

===

OpenID

```js
export middleware = (next, action, userManager) => {
  if (!storedUser || storedUser.expired) {
    next(loadingUser())
    userManager.getUser()
      <span class="fragment">.then(getUserCallback)</span>
      <span class="fragment">.catch(errorCallback)</span>
  }

  return next(action)
}
```

- [oidc-client-js](https://github.com/IdentityModel/oidc-client-js)
{.linkrolls}

===

RSA Signature

```js
const encrypt = new JSEncrypt()
<span class="fragment">encrypt.setPrivateKey(privkey))</span>
<span class="fragment">let signature = encrypt.sign(message, CryptoJS.SHA256, 'sha256')</span>

<span class="fragment">const decrypt = new JSEncrypt()
<span class="fragment">decrypt.setPublicKey(pubkey)</span>
<span class="fragment">let verified = decrypt.verify(message, signature, CryptoJS.SHA256)</span>

return verified? 'It Works!' : 'Error with signature'</span>
```

===

RSA Encryption

```js
const encrypt = new JSEncrypt()
encrypt.setPublicKey(pubkey))
let ciphertext = encrypt.encrypt(message)

<span class="fragment">const decrypt = new JSEncrypt()
decrypt.setPrivateKey(privkey)
let plaintext = decrypt.decrypt(ciphertext)</span>

<span class="fragment">return plaintext == message ? 'It Works!' : 'Error with decryption'</span>
```

===

Libs crypto dans le navigateur

- jsencrypt
- js-nacl
- jwcrypto
{.large}

<!-- -->

- [ List of JavaScript Crypto libraries](https://gist.github.com/jo/8619441)
{.linkrolls}

===

### À l'expérience utilisateur•trice

- Founissez des réglages simples et des notices claires à valider
- N'exigez pas de passer par des services externes
- Pas de partage sur les réseaux par défaut
- Séparez les consentements (==shared data== _vs._ ==analytics==)
{.medium .left}

#### Implémentation {.fragment data-fragment-index=1}

- Utilisez les frameworks de notification {.fragment data-fragment-index=1}
- Évitez les réseaux sociaux pour la couche ID {.fragment}
- Pas de `jsSocials` {.fragment}
- Utilisez des outils de trace d'usages respecteux {.fragment}
{.medium .left}

===

SweetAlert

```js
swal("A wild Pikachu appeared! What do you want to do?", <span class="fragment" data-fragment-index=2>{
  buttons: {
    <span class="fragment" data-fragment-index=3>catch: { text: "Throw Pokéball!", value: "catch" },</span>
    <span class="fragment" data-fragment-index=4>defeat: true</span>
  }
}</span>)<span class="fragment" data-fragment-index=1>.then(value => {
  switch (value) {
    <span class="fragment" data-fragment-index=4>case "defeat": swal("Pikachu fainted! You gained 500XP!"); break</span>
    <span class="fragment" data-fragment-index=3>case "catch": swal("Gotcha!", "Pikachu was caught!", "success"); break</span>
  }
})</span>
```

===

![SweetAlert preview](../img/sweetalert.png){.large}

===

![SweetAlert using a template](../img/sweetalert_dom.png){.large}

===

- configurable
- chainable
- promises
- compatible frameworks composants
{.large}

<!-- -->

- [SweetAlert2](https://sweetalert2.github.io/)
{.linkrolls}

===

![Track mobile apps usage](../img/matomo.png){.large}

- [How to track Mobile apps usage or track software analytics](https://matomo.org/blog/2012/04/how-to-use-piwik-to-track-mobile-apps-activity-clicks-phones-errors-etc/)
{.linkrolls}

===

### En fin de cycle

- Rappelez aux utilisateurs·trices leur droit d'accès aux données
- Facilitez l'export
- Supprimez les données des comptes supprimés
- Supprimez les données à la fermeture du service
{.medium .left}

#### Implémentation {.fragment data-fragment-index=1}

- Mettez en place des APIs documentées (Swagger, Apiary…) et utilisables {.fragment data-fragment-index=1}
- Utilisez des formats de données ouverts (XML, JSON…) {.fragment}
- `rm -rf /` {.fragment}
{.medium .left}

===

![](../img/swagger-editor.png){.large}

- [Swagger](https://swagger.io/)
- [OpenAPI](https://www.openapis.org/)
{.linkrolls}

===

![](../img/rest-api.png){.large}

- [Learn REST: A RESTful Tutorial](https://www.restapitutorial.com/)
{.linkrolls}

*[REST]: Representational State Server

===

Stream Large Objects

```js
oboe('/myapp/things.json')
  <span class="fragment">.node('foods.*', foodThing => { log( 'Go eat some', foodThing.name) })</span>
  <span class="fragment">.node('badThings.*', badThing => { log( 'Stay away from' badThing.name) })</span>
  <span class="fragment">.done(things => {
    log(`
      there are ${things.foods.length} things to eat
      and ${things.nonFoods.length} to avoid
    `)
  })</span>
```

- [OBOE.js](http://www.oboejs.com/)
{.linkrolls}

===

GraphQL

```js
const { graphql, buildSchema } = require('graphql')
const schema = buildSchema(`
  type Query { hello: String }
`)
<span class="fragment">const root = { hello: () => 'Hello World!' }</span>

<span class="fragment">graphql(schema, <span class="fragment">'{ hello }'</span>, root)
  .then(response => {
    log(response)
  })</span>
```

===

![GraphiQL](../img/graphiql.png){.large}
