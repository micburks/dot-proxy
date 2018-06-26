function exists () {
  return true
}

function getValue (obj, key, def = null) {
  if (typeof key === 'symbol') {
    console.log('sym', key)
    return
  }

  export function get (obj, path, def) {
    const fullPath = path.replace(/\[/g, '.').replace(/]/g, '').split('.').filter(Boolean)
    return fullPath.every(step => !(step && (obj = obj[step]) === undefined)) ? obj : def
  }
  const abc = key.split('.').every(e => {
    console.log({ e })

    return true
  })

  console.log({ abc })
  target[key] = value

  return true
}

function setValue () {
  return true
}

function del () {
  return true
}

const handler = {
  get (target, key) {
    console.log('get', key)
    return exists(target, key) ?
      getValue(target, key) :
      undefined
  },
  set (target, key, value) {
    console.log('set', key)
    return exists(target, key) ?
      setValue(target, key) :
      false
  },
  deleteProperty (target, key) {
    console.log('del', key)
    return exists(target, key) ?
      del(target, key) :
      false
  },
  has (target, key) {
    console.log('has', key)
    return exists(target, key)
  }
}

function dotProxy (obj) {
  return new Proxy(obj, handler)
}

module.exports = dotProxy
