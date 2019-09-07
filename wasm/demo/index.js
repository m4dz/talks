import * as js from './mining_js/index.js'
import * as rust from './mining_rust/pkg/index.js'

const NODES = [0, 1, 2]

/**
 * NODES BUFFERING
 */
const loadNode = (idx) => fetch(`data/node_${idx}.json`)
  .then(res => res.json())
  .then(records => ({
    id: idx.toString(),
    parent: idx > 0 ? (idx - 1).toString() : '-',
    nonce: '0',
    records
  }))

const loadNodes = (nodes, $) => Promise
  .all(nodes.map(loadNode))
  .then(values => $._state = values)

const resetState = (nodes) => nodes.forEach((node, idx) => {
  node.id = idx.toString()
  node.nonce = '0'
  node.parent = idx > 0 ? (idx - 1).toString() : '-'
})

/**
 * UI THREAD RENDERING
 */
const renderRecord = (record) => new Promise((resolve, reject) => {
    const {id, email} = record
    const $el = document.createElement('li')
    $el.textContent = `${id.substr(0,6)} - ${email}`
    resolve($el)
  })

function renderNode (node, $) {
  $.querySelector('h2').innerText = node.id
  $.querySelector('.parent_id').innerText = node.parent
  $.querySelector('.nonce').innerText = node.nonce

  const $records = $.querySelector('ul')

  Promise.all(node.records
    .filter((_, idx) => idx < 10)
    .map(renderRecord)
  )
  .then($ul => $ul.forEach(($li, idx) => {
    $records.replaceChild($li, $records.children[idx])
  }))
}

function renderTemplate (nodes, $) {
  if (renderTemplate.done) { return }

  $._$template = document.querySelector('#node')
  $._$nodes = document.querySelector('ul.nodes')

  for(let i = 0; i < nodes.length; i++) {
    const $node = document.importNode($._$template.content, true)
    const $ul = document.createDocumentFragment()

    for(let j = 0; j < 10; j++) {
      $ul.appendChild(document.createElement('li'))
    }
    $node.querySelector('ul').appendChild($ul)

    $._$nodes.appendChild($node)
  }

  renderTemplate.done = true
}

function renderResult (p, r) {
  return `${((p) / 1000).toFixed(3)}s / ${r} rounds<br>(~${Math.round(p / r)}ms per round)`
}

function render (nodes, $) {
  renderTemplate.apply(this, arguments)
  $._state
    .forEach((node, idx) => renderNode(node, $._$nodes.children[idx]))

  window.requestAnimationFrame(() => render.apply(this, arguments))
}

/**
 * EVENTS LOOP
 */
document.addEventListener('DOMContentLoaded', () => {
  loadNodes(NODES, document).then(() => render(NODES, document))
})

document.querySelector('#comp_js').addEventListener('click', () => {
  const time = document.querySelector('#comp_js + .time')
  
  resetState(document._state)
  time.innerHTML = ""

  setTimeout(async () => {
    const [p, r] = await js.compute(document._state, +document.querySelector('#limit').value)
    time.innerHTML = renderResult(p, r)
  }, 50)
})

rust.default('./mining_rust/pkg/index_bg.wasm').then(() => {
  document.querySelector('#comp_rust').addEventListener('click', () => {  
    const time = document.querySelector('#comp_rust + .time')
    
    resetState(document._state)
    time.innerHTML = ""

    setTimeout(() => new Promise((resolve) => {
      const res = rust.compute(document._state, +document.querySelector('#limit').value)
      resolve(res)
    })
    .then((res) => {
      time.innerHTML = renderResult(res[0], res[1])
    }), 50)
  })
})
