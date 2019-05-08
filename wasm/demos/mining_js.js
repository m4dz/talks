const tohex = (buffer) => [...new Uint8Array(buffer)]
  .map(value => value.toString(16).padStart(2, '0'))
  .join('')

const shuffle = (arr) => {
  const res = []
  while (arr.length) {
    res.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0])
  }
  return res
}

const nonce = () => new Array(32)
  .fill(0)
  .map(() => Math.round(Math.random() * 9))
  .join('')

export async function compute (state, limit) {
  const encoder = new TextEncoder()
  const decoder = new TextDecoder('utf-8')
  const prefix = new Array(limit).fill(0).join('')

  let idx = 0
  while (idx < state.length) {
    const node = state[idx]
    node.nonce = 0

    while (true) {
      node.nonce = nonce()
      node.id = await crypto.subtle.digest('SHA-256', encoder.encode(`
        ${node.parent};${node.nonce};
        ${node.records.map(record => Object.values(record).join(';')).join(';')}
      `))
      .then(value => tohex(value))

      if (node.id.substr(0, limit) == prefix) {
        break
      } else {
        node.records = shuffle(node.records)
      }
    }

    if (++idx < state.length) {
      state[idx].parent = node.id
    }
  }

  return Date.now()
}
