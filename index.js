const handler = {
  get (target, key) {
    return target[key]
  },
  set (target, key, value) {
    key.split('.').every(e => {
      //
    })
    target[key] = value
  },
  deleteProperty (target, key) {
    delete target[key]
  },
  has (target, key) {
    return key in target
  }
}

function dotProxy (obj) {
  return new Proxy(obj, handler)
}

module.exports = dotProxy
