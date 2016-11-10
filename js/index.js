document.addEventListener('DOMContentLoaded', () => {
  let query = {}
  window.location.search.slice(1).split('&').forEach((search) => {
    [key, value] = search.split('=')
    query[key] = value
  })

  if (query.wide) {
    document.getElementsByTagName('html')[0].classList.add('wide')
  }

  let source = 'index.md'
  if (query.lang) {
    source = `index.${query.lang}.md`
  }

  let canonical
  const links = document.getElementsByTagName('link')
  for (let i = 0, tag; i < links.length; i++) {
    tag = links[i]
    if (tag.getAttribute('rel') == 'canonical') {
      canonical = tag.getAttribute('href')
    }
  }

  if (canonical == null) {
    canonical = `http://talks.m4dz.net${window.location.pathname}`
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    tag.setAttribute('href', canonical)
    document.head.appendChild(tag)
  }

  remark.macros.ref = function() {
    url = query.lang? `${canonical}?lang=${query.lang}` : canonical
    return `<div class="ref"><a href="${url}">${url}</a></div>`
  }

  const slideshow = remark.create({
    sourceUrl:      `./${source}`,
    ratio:          (query.wide && JSON.parse(query.wide))? '16:9' : '4:3',
    highlightStyle: 'github',
    highlightLines: true,
    highlightSpans: true
  })

  slideshow.on('afterShowSlide', (slide) => {
    SVGInjector(document.querySelectorAll('.remark-visible [src*=icons]'))

    if(slide.properties.name == 'thanks') {
      setTimeout(() => {
        document.getElementById('slide-thanks').classList.add('scroll')
      }, 2000)
    }
  })
})
