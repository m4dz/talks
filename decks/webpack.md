class: center, middle, inverse

![Cozy](./img/webpack.svg)

# Webpack

Migration de la chaine de build


---

# Précédemment, chez Cozy…

- un rep `server` et un rep `client`
- les dépendances outillage front dans `client/package.json`
- Brunch pour la chaine de compilation
- Bower pour les deps client *ou* versions dans `vendor`
- les assets externes dans `client/vendor`
- les sources dans `client/app`, les tests dans `client/test`

---

# Limites avec Brunch

- Bower est maintenant marqué _deprecated_
- support de node compliqué (node < 4 &amp;&amp; npm < 3 == Brunch@1.x)
- support des deps NPM dans Brunch@2.x uniquement
- [Deppack](https://github.com/yavorsky/deppack) n'est pas encore tout à fait sec
- le projet reste confidentiel

---

# PoC : WebPack

- 2 projets : Proxy et Emails
- Cas d'écoles sur plusieurs cas particuliers

???
- code splitting sur l'onboarding
- architecture de plugins de emails
- deps non-npm dans emails

---

# WebPack, c'est quoi ?

- .fa.fa-check[C'est]

  - un gestionnaire de modules
  - un gestionnaire d'assets
  - un packager

--

- .fa.fa-close[Ce n'est pas]

  - un éxecuteur de taches
  - un truc qui fait le café

---

# Pourquoi c'est mieux ?

- Webpack &amp; Browserify _everywhere_
- Webpack gère les assets
- Support des modules NPM
- Support ES6 (via Babel)
- Stable

---

class: columns

.col.left-col[
# Concepts

- .current[config]
  - utilise des modules NPM
  - dans un fichier `webpack.config.js`
  - **juste** du JS
]

.col.right-col[
```js
module.exports = {
  entry: './app/initialize',
  output: {
      path: './public',
      filename: 'app.js'
  }
};
```
]

---

class: columns

.col.left-col[
# Concepts

- .past[config]
- .current[loaders]
  - chaque langage dispose d'un loader
  - distribués sur NPM
  - _pipes_, chaînables
  - utilise des regex pour définir les cibles
]

.col.right-col[
```js
let loaders = [
  {
      test: /\.coffee$/,
      loader: 'coffee'
  },
  {
      test: /\.styl$/,
      loader: 'style!css!stylus'
  },
  {
      test: /\.(png|gif|jpe?g|svg)$/i,
      exclude: /vendor/,
      loader: 'file?name=img/[name].[ext]'
  }
];

module.exports = {
  ...,
  modules: {
    loaders: loaders
  }
}
```
]

---

class: columns

.col.left-col[
# Concepts

- .past[config]
- .past[loaders]
- .current[plugins]
  - ajout de fonctionnalités au _core_
  - peuvent transformer les sorties des loaders
]

.col.right-col[
```js
const webpack = require('webpack');

let plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
          warnings: false
      },
  })
]

module.exports = {
  ...,
  plugins: plugins
}
```
]

---

class: columns

.col.left-col[
# Concepts

- .past[config]
- .past[loaders]
- .past[plugins]
- .current[extraction des contenus]
  - renvoie une sortie vers un fichier
  - externalisation de la CSS
  - copie / URLEncode des images
]

.col.right-col[
```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let loaders = {
  ...,
  {
    test: /\.styl$/,
    loader: ExtractTextPlugin.extract('css!stylus')
  },
  {
    test: /\.(woff|woff2|eot|svg)$/,
    loader: 'url-loader?limit=20000'
  }
};

let plugins = [
  ...,
  new ExtractTextPlugin('app.css'),
];
```
]

---

class: columns

.col.left-col[
# Concepts

- .past[config]
- .past[loaders]
- .past[plugins]
- .past[extraction des contenus]
- .current[production &amp; optimisation]
  - utilise les variables d'environnement
  - plugins natif + config loaders
  - _cache-busting_
]

.col.right-col[
```sh
$ env OPTIMIZE=true webpack
```

```js
const optimize = process.env.OPTIMIZE === 'true';

if (optimize) {
  plugins = plugins.concat([
    ...
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      },
    })
  ]
}
```
]

---

class: columns

.col.left-col[
# Concepts

- .past[config]
- .past[loaders]
- .past[plugins]
- .past[extraction des contenus]
- .current[production &amp; optimisation]
  - utilise les variables d'environnement
  - plugins natif + config loaders
  - _cache-busting_
]

.col.right-col[
```sh
$ env OPTIMIZE=true webpack
```

```js
const optimize = process.env.OPTIMIZE === 'true';

let cssOptions = optimize? 'css?-svgo!postcss':'css';
let imgPath = 'img/' + '[name]' + (optimize? '.[hash]': '') + '.[ext]';

let loaders = {
  ...,
  {
    test: /\.styl$/,
    loader: ExtractTextPlugin.extract('style', cssOptions + '!stylus')
  },
  {
    test: /\.(png|gif|jpe?g|svg)$/i,
    loader: 'file?name=' + imgPath
  }
}
```
]

---

layout: true

# ProTips

---

## Définir les extensions pour `require`

```js
module.exports = {
  ...,
  resolve: {
    extensions: ['', '.js', '.coffee', '.jade', '.json']
  }
}
```

---

## Utiliser les _devtools_

```js
module.exports = {
  ...,
  devtool: optimize? 'source-map' : 'cheap-module-eval-source-map',
  debug: !optimize,
}
```

---

## Utiliser les `{pre,post}Loaders`

```js
let preloaders = [
  {
    test: /\.coffee$/,
    exclude: /node_modules/,
    loader: 'coffee-lint-loader'
  }
];

module.exports = {
  ...,
  modules: {
    loaders: loaders,
    preLoaders: preloaders
  }
}
```

---

## Resolve

- `alias`
- `root`
- `modulesDirectories`
- …

---

## Code Splitting

- produit des _chunks_ de code
- regroupement des dépendances communes
- chargement async transparent

```coffee
###
Register route
###
register: (step = 'preset') -> require.ensure [], =>
    RegisterView      = require '../views/register'
    RegistrationModel = require '../states/registration'

    currentView = @app.layout.getChildView 'content'
```

???
- pas de support des modules ES6 avant la @2.x

---

layout: false

# Conclusion du PoC

**Pour**

- souple
- stable
- rapide
- support des deps NPM
- code split, devtools, etc

**Contre**

- config verbeuse
- la doc est à pleurer 😭
- la migration a un coût léger

---

# Le choix

- plutôt Webpack que Brunch@2.x
- prévoir des templates de config
- cas des assets ➡️ `vendor/assets` + [CopyPlugin](https://github.com/kevlened/copy-webpack-plugin)

---

# Ressources

- [Documentation Webpack](https://webpack.github.io/docs/)
- [Webpack your bags](http://blog.madewithlove.be/post/webpack-your-bags/)
- [Cozy-Proxy Webpack config](https://github.com/cozy/cozy-proxy/blob/71eadfd3cf19914348d2c76fddb3b0ae87f1f013/client/webpack.config.js)
