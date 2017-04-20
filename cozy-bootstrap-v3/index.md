name: cover
class: middle

# Cozy's app bootstrap<sup>v3</sup>

![:ref]


---
name: speaker
class: center squared

![Cozy](../img/cozy.svg)

# Cozy Cloud

**v3 platform**

.extras[
[cozy.io](https://cozy.io) | [dev.cozy.io](https://dev.cozy.io) | IRC [#cozycloud](https://webchat.freenode.net/?channels=cozycloud)
]


---
layout: false
class: section
background-image: url(../img/placeholders/pencil-eraser-and-ruler.jpeg)

# Basic Knowledges


---
layout: true

.breadcrumb[Basic Knowledges]


---
class: middle stickit

# Web languages

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [Alsacreations tutorials](https://www.alsacreations.com/tuto/liste/2-CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript) | [Eloquent JavaScript](http://eloquentjavascript.net/)


---
class: middle stickit

# Single Page App

- [Code School Web development Guide](https://www.codeschool.com/beginners-guide-to-web-development/single-page-applications)
- [Single Page App in depth](http://singlepageappbook.com/index.html)


---
class: middle stickit

# Git versionning

- [Git SCM](https://git-scm.com/docs)
- [Git Interactive Cheatsheet](http://www.ndpsoftware.com/git-cheatsheet.html)
- [Learn Git Branching](http://learngitbranching.js.org/)


---
layout: false
class: section middle
background-image: url(../img/placeholders/tools.jpg)

# Requirements


---
layout: true

.breadcrumb[Requirements]


---
class: middle stickit

# Tools

- Docker: [installation](https://docs.docker.com/engine/installation/) | [get started](https://docs.docker.com/engine/getstarted/)
- Node.js LTS: [downloads](https://nodejs.org/en/download/)
- Yarn: [installation](https://yarnpkg.com/lang/en/docs/install/) | [basic usage](https://yarnpkg.com/en/docs/usage)


---
layout: false
class: section bottom
background-image: url(../img/placeholders/sea-nature-art-animals.jpg)

# Our template


---
layout: true

.breadcrumb[Our template]


---
class: inverse middle stickit

# Cozy provides an app template ready to use to bootstrap a new v3 compliant app. It's an empty shell that brings tooling, app skeleton, and dependencies that allow you start coding your app quickly.


---
class: middle

# The build-chain

- yarn / npm scripts, that let you automate applications
- shared configs for tooling for a brain-dead use of the toolbox


---
class: middle

# Yarn scripts (`yarn run`)

- `install` : <small>install project (dev)dependencies</small>
- `test`&nbsp;<sup>[1]</sup> : <small>run tests against your codebase</small>
- `build`&nbsp;<sup>[1]</sup> : <small>package sources for production use</small>
- `watch` : <small>dev mode, that rebuilds on-the-fly the package</small>
- `watch:standalone` : <small>dev mode through webpack-server, ideal for an integration only process</small>

<sup>[1]</sup> those tasks trigger a linting task before they run


---
class: middle

# Configs

- webpack: configs used by the bundler are split in `/config/Webpack.{config,target}.*` files
- babel: the transpiler uses `presets-env` to target last browsers' versions, as configured in `/.babelrc`
- postcss config is integrated to `/config/webpack.config.base`


---
class: middle

# Technologies involved (but _optionals_)

- _Preact_: a react-like framework that makes UI components easy to build ([getting started](https://preactjs.com/guide/getting-started))
- _Stylus_: a CSS preprocessor that makes the use of Cozy-UI simple ([documentation](http://stylus-lang.com/))
- There are many views frameworks alternatives, usable in Cozy ([Vue.js](https://vuejs.org/), [Angular](https://angularjs.org/), [Marionette](http://marionettejs.com/), [Cycle.js](https://cycle.js.org/), [Svelte](https://svelte.technology/), [Riot.js](http://riotjs.com/), etc.)


---
layout: false
class: section bottom
background-image: url(../img/placeholders/street-building-construction-industry.jpg)

# Getting started


---
layout: true

.breadcrumb[Getting started]


---
class: middle

# Step 1

## Clone template and customize it

```sh
$ git clone \
  --origin=template \
  --depth=1 \
  https://github.com/cozy/cozy-template.git \
  my-app
```

<small>(we later refer to the current developped app as `my-app`)</small>

then copy the files from the `.templates` dir (except the `.transifexrc` file) in the root folder and update the variables in `<>`, like:

- `<APP_NAME>`: the application name
- `<SLUG_GH>`: Github repository slug
- `<USERNAME_GH>`: Github username

see the README file for a whole list.

---
class: middle

# Step 2

## Configure deps

You can take a look at the dependencies (tip: you probably don't want to touch the `devDependencies` as they're related to the tooling). Then install them:

```sh
$ cd my-app
$ yarn install
```


---
class: middle

# Step 3

## Run and Code!

Your app environnement is now ready! You can start the watcher to run the build process:

```sh
$ cd my-app
$ yarn watch:standalone
```

Point your browser to http://localhost:8282 and see Cozy Dev team saying _Hello_ to you 🚀

You can now start tweaking the code in the `my-app/src` directory and see the app rebuild automagically.


---
class: middle

# Step 4a

## Run the docker stack: pre-requisites

You now need to run it through the stack to access the cozy's data.

First, tweak your `/etc/hosts` file to add the following entry:

```txt
127.0.0.1	app.cozy.local cozy.local
```


---
class: middle

# Step 4b

## Run the docker stack: launch

Reload your watcher in standard mode:

```sh
$ cd my-app
$ yarn watch
```

Then run a Docker container, that is the simplest way to access a stack:

```sh
$ cd my-app
$ docker run --rm -it \
    -p 8080:8080 \
    -v "$(pwd)/build":/data/cozy-app \
    cozy/cozy-app-dev
```

and point your browser to http://app.cozy.local:8080, you app is now served through a stack.


---
# Step 5

## Publish it

Now you may need to publish your app (or, at least, version it to prevent any loss on your codebase). We'll configure the new repository for your app. Go to https://github.com/new to create a new app on Github (if not already done) and configure it:

```sh
$ git remote add \
  origin \
  https://github.com/{github_username}/{github_slug}.git
$ git add -am "Initial commit for my-app"
$ git pull -u origin master:master
```

Congrats! Your app is now published 🎉


---
layout: false
class: section
background-image: url(../img/placeholders/rails-man-person-walking.jpg)

# One step ~~beyond~~ ahead


---
layout: true

.breadcrumb[One step ~~beyond~~ ahead]


---
class: middle

# Access the data

When your app is served through the stack, a JS script is injected. It contains a client that allows you to access data inside the stack. it declares a `cozy.client` namespace you can call into your codebase.

First, you need to initialize the _cozy-client_ to communicate with your stack:

```js
const data = document.querySelector('[role=application]').dataset

document.addEventListener('DOMContentLoaded', () => {
  cozy.client.init({
    cozyURL: '//' + data.cozyDomain,
    token: data.cozyToken
  })
})
```

Then, you can access the data. E.g., you can do

```js
const book = { title: "Moby Dick", author:"Herman Melville" }
const created = await cozy.client.data.create(myBooksDoctype, book)
```

to create a new `book` entry in your Cozy's data. See the [cozy-client-js documentation](https://cozy.github.io/cozy-client-js/).


---
# Interface: Cozy-ui and Components

To simplify the creation of interfaces, we intensively develop a frontend CSS framework called [Cozy-ui](https://github.com/cozy/cozy-ui/). It allows you to re-use and extend styles prepared to have a Cozy looked app.

Despite its lack of documentation at this time, there's a heavily maintained [changelog](https://github.com/cozy/cozy-ui/blob/master/CHANGELOG.md), and you can deeply browse the [stylus repository](https://github.com/cozy/cozy-ui/tree/master/stylus) to find styles you need.

If you choose to use a React-like framework to build your views, there's also a [components' repository](https://github.com/cozy/cozy-ui/tree/master/react) we fill along time with our shared frontend components.


---
# Envrironment: Cozy-bar

To let users browse across the stack apps, we provide a `Bar` element that takes place in top of your app viewport and contains the apps switcher and the settings access.

The stack injects the relevant script, so you just need to initialize it into your app and let the magic happen.

```js
document.addEventListener('DOMContentLoaded', () => {
  cozy.bar.init({
    appName: 'my-app'
  })
})
```


The Bar is self-contained, with its own styles, so don't worry about side effects on your app.

---
layout: false
class: section middle
background-image: url(../img/placeholders/city-buildings.jpg)

# Improvements


---
layout: true

.breadcrumb[Improvements]


---
class: middle longlist

# Plug Travis to automate builds

We provide in our template a [Travis](https://travis-ci.org/) configuration file that allows to build and publish your app on Travis. To enable it, some few steps:

1. We suggest to use [Transifex](https://www.transifex.com/) to translate your app. Update the `my-app/.templates/.transifexrc` username entry with yours
2. Go to https://travis-ci.org/profile to enable your `my-app` repository in Travis
3. Generate a new token in https://github.com/settings/tokens/new to auto-deploy your app on the `build` branch in your Github app repository
4. Enable the _Build only if .travis.yml is present_ option
5. In https://travis-ci.org/{github_username}/{github_slug}/settings page, add two envrionment variables:
  - `GITHUB_TOKEN`: the token generated in 3.
  - `TX_PASSWD`: your transifex password

Congrats! There's now an autobuild on your app. Commiting/merging on the `master` branch triggers a build on Travis, and creates/updates the `build` branch with the result of the build.


---
class: middle

# Install in a Cozy

We provide with any instance of cozy a `cozy-stack` utility that allows you to interact in a CLI with your instance (you can also build your own by following instructions in [Building a cozy-stack via Docker](https://cozy.github.io/cozy-stack/docker.html#building-a-cozy-stack-via-docker)).

To install your previously built application, simply SSH to your instance, and run:

```sh
$ cozy-stack apps install \
  --domain "{my-name}.cozy.rocks" \
  "my-app" \
  "git://github.com/{github_username}/{github_slug}.git#build"
```

You app is now deployed in your Cozy! Go to https://{my-name}-my-app.cozy.rocks and see your app running online!


---
layout: false
class: section, bottom
background-image: url('../img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !

## Iconographie / Médias

- Icônes : [Linea](http://linea.io/) - [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## Fontes

- Titrage : [Sinzano](http://typodermicfonts.com/sinzano/) by Typodermic http://typodermicfonts.com - [Fontspring webfont EULA](https://www.fontspring.com/licenses_text/lv4e5lv2k2)
- Intertitres & labeur : [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-sans-pro/master/LICENSE.txt)
- Monospace : [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-code-pro/master/LICENSE.txt)

## Outils

- Moteur de présentation : [Remark](https://github.com/gnab/remark)

.licence[
![Cozy Cloud](../img/cozy.svg)

![:ref]

disponible sous licence [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
]
