import * as js from './mining_js.js'
import * as rust from './mining_rust.js'

const NODES = [0, 1, 2]

/**
 * NODES BUFFERING
 */
const loadNode = (idx) => fetch(`node_${idx}.json`)
  .then(res => res.json())
  .then(records => ({
    id: idx,
    parent: idx > 0 ? idx - 1 : 0,
    nonce: '*****',
    records
  }))

const loadNodes = (nodes, $) => Promise
  .all(nodes.map(loadNode))
  .then(values => $._state = values)

/**
 * UI THREAD RENDERING
 */
const renderRecord = (record) => new Promise((resolve, reject) => {
    const {id, first_name, last_name, email} = record
    const $el = document.createElement('li')
    $el.textContent = JSON.stringify({id, first_name, last_name, email})
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

function render (nodes, $) {
  renderTemplate.apply(this, arguments)
  $._state
    .forEach((node, idx) => renderNode(node, $._$nodes.children[idx]))

  window.requestAnimationFrame(() => render.apply(this, arguments))
}

/**
 * EVENTS LOOP
 */
document.addEventListener('DOMContentLoaded', () => {
  loadNodes(NODES, document).then(() => render(NODES, document))
})

document.querySelector('#comp_js').addEventListener('click', async () => {
  const start = Date.now()
  const time = document.querySelector('#comp_js + .time')

  const stop = await js.compute(document._state, +document.querySelector('#limit').value)
  time.textContent = `${(stop - start) / 1000}s`
})

document.querySelector('#comp_rust').addEventListener('click', async () => {
  const start = Date.now()
  const time = document.querySelector('#comp_wasm + .time')

  await rust.default('./mining_rust_bg.wasm')
  rust.greet('World!')
})
