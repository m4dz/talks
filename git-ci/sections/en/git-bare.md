<!--{section^1:data-breadcrumb="Git --bare"}-->

<!--{.interleaf data-background-image="/img/unsplash/michael-benz-196503-unsplash.jpg"}-->
<!-- Photo by Michael Benz on Unsplash -->

## Git --bare

===

### Init

Server side {.large}

```shell
$ ssh admin@staging
|admin@staging| $ git init --bare /srv/git/my-project.git
```

===

```txt
|admin@staging| $ tree -L 2 /srv/git/my-project.git
/srv/git/my-project.git
|-- branches
|-- <span class="fragment stabilo" data-fragment-index=1 >hooks</span>
|   |-- post-checkout
|   |-- post-commit
|   |-- post-merge
|   |-- <span class="fragment stabilo" data-fragment-index=1 >post-receive</span>
|   |-- <span class="fragment stabilo" data-fragment-index=1 >post-receive.d</span>
|   |-- pre-push
|   |-- <span class="fragment stabilo" data-fragment-index=1 >update</span>
|   `-- <span class="fragment stabilo" data-fragment-index=1 >update.d</span>
|-- index
|-- info
`-- refs
    |-- heads
    `-- tags
```

===

On developers side {.large}

```shell
[~my-project] $ git add remote staging <span class="fragment">git@staging:<span class="fragment">/srv/git/my-project.git</span></span>
```

===

### Hooks scripts

```bash
#!/bin/sh
# $GIT_BARE_REPOSITORY/hooks/post-receive
GIT_DIR=$(dirname $PWD)
while read oldrev newrev ref
do
	<span class="fragment"># Load tasks from hooks/post-receive.d/*
	if test -d "$PWD/post-receive.d"
	then
		<span class="fragment">for task in "$PWD/post-receive.d/*.sh"
		do
			test -r $task && <span class="fragment">source $task</span>
		done
		unset task</span>
	fi</span>
done
```

===

Filter

```bash
#!/bin/sh
# $GIT_BARE_REPOSITORY/hooks/update

while read oldrev newrev ref
do
	if [[ $ref = refs/heads/<span class="fragment" data-fragment-index=1 >production</span> ]]
	then
		<span class="fragment" data-fragment-index=1 ># Commands to run on `production` branch only</span>
	fi
done
```

===

Deploy

```bash
#!/bin/sh
# $GIT_BARE_REPOSITORY/hooks/post-receive.d/10-deploy

$RUN_DIR="/srv/my-app"

if [[ $ref = refs/heads/production ]]
then
	git --work-tree=$RUN_DIR \
		--git-dir=$GIT_DIR \
		checkout --force production
fi
```

===

npm scripts

```bash
#!/bin/sh
# $GIT_BARE_REPOSITORY/hooks/post-receive.d/20-npm-run-migrate

$RUN_DIR="/srv/my-app"

if [[ $ref = refs/heads/production ]]
then
	cd $RUN_DIR && npm run <span class="fragment">db:migrate <span class="fragment">up <span class="fragment">2018-nodejs-it</span></span></span>
fi
```

===

Git ==Push==! {.large}

```shell
[~/my-project] $ git push staging production
```

===
<!--{.punchline}-->

How to inform the ==workers== about the changes?
