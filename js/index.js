document.addEventListener('DOMContentLoaded', () => {
  let query = {}
  window.location.search.slice(1).split('&').forEach((search) => {
    [key, value] = search.split('=')
    query[key] = value
  })

  if (query.wide) {
    document.getElementsByTagName('html')[0].classList.add('wide')
  }

  let canonical
  document.getElementsByTagName('link').forEach((tag) => {
    if (tag.getAttribute('rel') != 'canonical') return
    canonical = tag.getAttribute('href')
  })

  if (canonical == null) {
    canonical = `http://talks.m4dz.net${window.location.pathname}`
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    tag.setAttribute('href', canonical)
    document.head.appendChild(tag)
  }

  remark.macros.ref = function() {
    return `<div class="ref"><a href="${canonical}">${canonical}</a></div>`
  }

  const slideshow = remark.create({
    sourceUrl:      './index.md',
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
