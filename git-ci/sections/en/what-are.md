<!--{section^1:data-breadcrumb="What are...?"}-->

<!--{.interleaf data-background-image="/img/unsplash/simon-migaj-595606-unsplash.jpg"}-->
<!-- Photo by Simon Migaj on Unsplash -->

## What are...?

===

### Feature Flags

@[giphy]({"token":"13sH3Qyz5asBva", "caption":"a.k.a. Feature Flipping", "className":"medium"})

===

Feature Flags
: Feature toggle is used to hide, enable or disable the feature during run time.

===

```js
if ( ff.flag('crazy') ) {
  doCrazyExperiment()
} else {
  doReallySafeStuff()
}
```

- [fflip](https://www.npmjs.com/package/fflip)
{.linkrolls}

===
<!--{.xx-large}-->

Feature Flag *vs.* ~~Branching~~

- [Flags vs Branching](https://featureflags.io/feature-flags-vs-branching/)
{.linkrolls}

===

### ACL

@[giphy]({"token":"F0QWePzwQRewM", "caption":"One list to rule them all", "className":"medium"})

===

```js
// guest is allowed to view blogs
acl.allow('guest', 'blogs', 'view')
<span class="fragment">// allow function accepts arrays as any parameter
acl.allow('member', 'blogs', ['edit', 'view', 'delete'])</span>
```

```js
<span class="fragment">// test jsmith permissions
acl.isAllowed('jsmith', 'blogs', ['edit', 'view', 'delete'])</span>
<span class="fragment">// check james permissions
acl.allowedPermissions('james', ['blogs', 'forums'], (err, perms) => {
  console.log(perms)
})</span>
<span class="fragment">// run ACL as a middleware
app.put('/blogs/:id', acl.middleware(), (req, res, next) => { /*...*/ })</span>
```

- [Access Control Lists for Node](https://www.npmjs.com/package/acl)
{.linkrolls}

===

### Database Migrations

@[giphy]({"token":"1hiaJCokQfYEo", "caption":"Upgrade to database, now!", "className":"medium"})

===

Database Migration
: A schema migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version.

- [Database Migrations](https://featureflags.io/feature-flags-database-migrations/)
- [Feature Flipping Database Migration](http://featureflags.io/wp-content/uploads/2018/03/ffdatabasemigration.jpg)
{.linkrolls}

===

```js
module.exports = {
  up () {
    return new Promise((resolve, reject) => { /*...*/ })
  },
  down () {
    return new Promise((resolve, reject) => { /*...*/ })
  }
}
```

```shell
$ npm run db:migrate [up|down] {version}
```

- [Database Migrations with Nodejs](https://kostasbariotis.com/data-migration-with-nodejs/)
- [Umzug](https://www.npmjs.com/package/umzug)
{.linkrolls}

===

### (Git) Hooks

@[giphy]({"token":"Ti4PnOMpd0rRe", "caption":"Not this hook...", "className":"medium"})

===

### Functional (Reactive) Programming

```js
_('click', $('#cats-btn'))
  .throttle(500)	// can be fired once in every 500ms
  .pipe(getDataFromServer)
  .map(formatCats)
  .pipe(UI.render);
```

- [Functional Reactive Programming with the Power of Node.js Streams](https://blog.risingstack.com/functional-reactive-programming-with-the-power-of-nodejs-streams/)
- [Highland](https://www.npmjs.com/package/highland)
{.linkrolls}


*[ACL]: Access Control Lists
